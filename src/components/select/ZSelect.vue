<template>
  <div
    ref="containerRef"
    class="z-select"
    :class="[
      `z-select--${size}`,
      {
        'z-select--disabled': disabled,
        'z-select--focused': isFocused,
        'z-select--open': isOpen,
        'z-select--multiple': multiple,
        'z-select--has-value': hasValue,
        'z-select--filterable': filterable,
        'z-select--dropdown-above': dropdownAbove
      }
    ]"
  >
    <label v-if="label" class="z-select__label">{{ label }}</label>
    <div
      ref="triggerRef"
      class="z-select__trigger"
      :tabindex="disabled ? -1 : 0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
      @click="handleTriggerClick"
      @keydown="handleTriggerKeydown"
      @focus="handleFocus"
      @blur="handleBlur"
      @paste="handlePaste"
      @compositionstart="isComposing = true"
      @compositionend="isComposing = false"
    >
      <div class="z-select__values">
        <!-- Filter text overlay (when filterable and typing) -->
        <span
          v-if="filterable && filterText && isOpen"
          class="z-select__filter-text"
        >
          {{ filterText }}<span class="z-select__filter-cursor">|</span>
        </span>

        <!-- Single value -->
        <template v-else-if="!multiple">
          <span class="z-select__value-text" :class="{ 'is-placeholder': !selectedLabel }">
            {{ selectedLabel || placeholder }}
          </span>
        </template>
        <!-- Multiple values as tags -->
        <template v-else>
          <span
            v-for="item in selectedValues"
            :key="item.value"
            class="z-select__tag"
          >
            {{ item.label }}
            <span class="z-select__tag-remove" @click.stop="removeTag(item)">
              <ZIcon name="close" :size="10" />
            </span>
          </span>
          <span
            v-if="selectedValues.length === 0"
            class="z-select__value-text is-placeholder"
          >
            {{ placeholder }}
          </span>
        </template>
      </div>
      <div class="z-select__indicators">
        <span
          v-if="clearable && hasValue && !disabled"
          class="z-select__clear"
          @click.stop="handleClear"
        >
          <ZIcon name="close" :size="12" />
        </span>
        <span class="z-select__arrow" :class="{ 'is-open': isOpen }">
          <ZIcon name="chevron-down" :size="14" />
        </span>
      </div>
    </div>

    <transition name="z-select-drop">
      <div
        v-if="isOpen"
        ref="dropdownRef"
        class="z-select__dropdown"
        :class="{ 'z-select__dropdown--above': dropdownAbove }"
        @mousedown.prevent
        @scroll="onDropdownScroll"
      >
        <template v-for="entry in displayOptions" :key="entry.key">
          <div v-if="entry.isGroup" class="z-select__group-label">
            {{ entry.label }}
          </div>
          <div
            v-else-if="showInVirtualList(entry.flatIndex)"
            class="z-select__option"
            :class="{
              'is-selected': isSelected(entry),
              'is-disabled': entry.disabled,
              'is-highlighted': highlightIndex === entry.flatIndex
            }"
            @click="handleOptionClick(entry)"
            @mouseenter="highlightIndex = entry.flatIndex"
          >
            <span v-if="multiple" class="z-select__option-check">
              <span
                class="z-select__option-checkbox"
                :class="{ 'is-checked': isSelected(entry) }"
              >
                <ZIcon v-if="isSelected(entry)" name="check" :size="10" />
              </span>
            </span>
            <slot name="option" :option="entry">
              <span class="z-select__option-label">
                <template v-if="filterable && filterText && filterText.trim()">
                  <template v-for="(part, pi) in getHighlightParts(entry.label, filterText)" :key="pi">
                    <mark v-if="part.match" class="z-select__match">{{ part.text }}</mark>
                    <span v-else>{{ part.text }}</span>
                  </template>
                </template>
                <template v-else>
                  {{ entry.label }}
                </template>
              </span>
            </slot>
          </div>
        </template>
        <div v-if="displayOptions.length === 0" class="z-select__empty">
          <ZIcon name="info" :size="14" />
          <span>{{ filterable && filterText ? `无匹配结�?"${filterText}"` : (emptyText || '暂无数据') }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import ZIcon from '../icon/ZIcon.vue'

defineOptions({ name: 'ZSelect' })

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export type SelectGroup = {
  label: string
  options: SelectOption[]
}

type FlatEntry =
  | { key: string; isGroup: true; label: string }
  | { key: string; flatIndex: number; isGroup: false; isOption: true } & SelectOption

const props = withDefaults(
  defineProps<{
    modelValue?: string | string[]
    label?: string
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    clearable?: boolean
    filterable?: boolean
    virtual?: boolean
    size?: 'small' | 'medium' | 'large'
    options?: SelectOption[] | SelectGroup[]
    emptyText?: string
  }>(),
  {
    modelValue: '',
    label: '',
    placeholder: '请选择',
    disabled: false,
    multiple: false,
    clearable: false,
    filterable: false,
    virtual: false,
    size: 'medium',
    options: () => [],
    emptyText: ''
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  change: [value: string | string[]]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  clear: []
}>()

const containerRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const isFocused = ref(false)
const highlightIndex = ref(-1)
const filterText = ref('')
const dropdownAbove = ref(false)
const isComposing = ref(false)
const dropdownScrollTop = ref(0)

// ── Computed: flatten options (support groups) ────────────────
const flatOptions = computed<FlatEntry[]>(() => {
  const result: FlatEntry[] = []
  let flatIdx = 0
  for (const item of props.options) {
    if ('options' in item && Array.isArray((item as SelectGroup).options)) {
      const group = item as SelectGroup
      result.push({ key: `__group_${result.length}`, isGroup: true, label: group.label })
      for (const opt of group.options) {
        result.push({
          ...opt,
          key: opt.value,
          flatIndex: flatIdx++,
          isGroup: false,
          isOption: true as const
        })
      }
    } else {
      const opt = item as SelectOption
      result.push({
        ...opt,
        key: opt.value,
        flatIndex: flatIdx++,
        isGroup: false,
        isOption: true as const
      })
    }
  }
  return result
})

// ── Filtered / display options ────────────────────────────────
const displayOptions = computed<FlatEntry[]>(() => {
  if (!props.filterable || !filterText.value.trim()) {
    return flatOptions.value
  }

  const q = filterText.value.trim().toLowerCase()
  const filtered: FlatEntry[] = []

  for (const entry of flatOptions.value) {
    if (entry.isGroup) {
      filtered.push(entry)
    } else if (entry.label.toLowerCase().includes(q)) {
      filtered.push(entry)
    }
  }

  // Remove groups without matching children
  let i = 0
  while (i < filtered.length) {
    if (filtered[i].isGroup) {
      const next = i + 1
      if (next >= filtered.length || filtered[next].isGroup) {
        filtered.splice(i, 1)
        continue
      }
    }
    i++
  }

  return filtered
})

// ── Computed: only selectable options (skip groups) ──────────
const selectableOptions = computed<(FlatEntry & { isGroup: false })[]>(() => {
  return displayOptions.value.filter((e): e is (FlatEntry & { isGroup: false }) => !e.isGroup)
})

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0
  }
  return props.modelValue !== '' && props.modelValue !== undefined && props.modelValue !== null
})

// ── Single select helpers ─────────────────────────────────────
const selectedOption = computed<SelectOption | undefined>(() => {
  if (props.multiple) return undefined
  const opt = flatOptions.value.find(
    (e): e is FlatEntry & { isGroup: false } => !e.isGroup && e.value === props.modelValue
  )
  return opt ? { label: opt.label, value: opt.value, disabled: opt.disabled } : undefined
})

const selectedLabel = computed(() => selectedOption.value?.label ?? '')

// ── Multiple select helpers ───────────────────────────────────
const selectedValues = computed<SelectOption[]>(() => {
  if (!props.multiple || !Array.isArray(props.modelValue)) return []
  return flatOptions.value
    .filter((e): e is (FlatEntry & { isGroup: false }) => !e.isGroup && props.modelValue!.includes(e.value))
})

function isSelected(option: SelectOption): boolean {
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(option.value)
  }
  return props.modelValue === option.value
}

// ── Virtual scrolling ─────────────────────────────────────────
const itemHeight = 32
const virtualBuffer = 5

const virtualEnabled = computed(() => props.virtual && selectableOptions.value.length > 100)

const virtualStart = computed(() => {
  if (!virtualEnabled.value) return 0
  return Math.max(0, Math.floor(dropdownScrollTop.value / itemHeight) - virtualBuffer)
})

const virtualEnd = computed(() => {
  if (!virtualEnabled.value) return selectableOptions.value.length
  const dh = dropdownRef.value?.clientHeight ?? 280
  return Math.min(
    selectableOptions.value.length,
    Math.ceil((dropdownScrollTop.value + dh) / itemHeight) + virtualBuffer
  )
})

function showInVirtualList(flatIndex: number): boolean {
  if (!virtualEnabled.value) return true
  return flatIndex >= virtualStart.value && flatIndex < virtualEnd.value
}

function onDropdownScroll() {
  if (dropdownRef.value) {
    dropdownScrollTop.value = dropdownRef.value.scrollTop
  }
}

// ── Text highlighting for filterable ──────────────────────────
function getHighlightParts(text: string, query: string): { text: string; match: boolean }[] {
  const q = query.trim()
  if (!q) return [{ text, match: false }]
  const idx = text.toLowerCase().indexOf(q.toLowerCase())
  if (idx === -1) return [{ text, match: false }]
  const parts: { text: string; match: boolean }[] = []
  if (idx > 0) parts.push({ text: text.slice(0, idx), match: false })
  parts.push({ text: text.slice(idx, idx + q.length), match: true })
  if (idx + q.length < text.length) {
    parts.push({ text: text.slice(idx + q.length), match: false })
  }
  return parts
}

// ── Trigger click / toggle ────────────────────────────────────
function handleTriggerClick() {
  if (props.disabled) return
  toggleDropdown()
}

function toggleDropdown() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    filterText.value = ''
    nextTick(() => {
      positionDropdown()
      focusHighlight()
    })
  } else {
    filterText.value = ''
    highlightIndex.value = -1
  }
}

function positionDropdown() {
  if (!containerRef.value || !dropdownRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  const dropdownEl = dropdownRef.value
  const spaceBelow = window.innerHeight - rect.bottom - 8
  const dropdownHeight = dropdownEl.scrollHeight
  if (dropdownHeight > spaceBelow && rect.top > dropdownHeight + 8) {
    dropdownAbove.value = true
  } else {
    dropdownAbove.value = false
  }
}

// ── Keyboard navigation ───────────────────────────────────────
function handleTriggerKeydown(event: KeyboardEvent) {
  if (props.disabled) return

  // Filterable: printable keys enter filter mode
  if (props.filterable && !event.ctrlKey && !event.metaKey && !event.altKey && !isComposing.value) {
    if (event.key === 'Backspace') {
      if (filterText.value.length > 0) {
        event.preventDefault()
        filterText.value = filterText.value.slice(0, -1)
        highlightIndex.value = -1
        nextTick(() => focusHighlight())
      } else if (isOpen.value) {
        event.preventDefault()
        isOpen.value = false
      }
      return
    }

    if (event.key.length === 1) {
      event.preventDefault()
      if (!isOpen.value) {
        isOpen.value = true
        nextTick(() => positionDropdown())
      }
      filterText.value += event.key
      highlightIndex.value = -1
      nextTick(() => focusHighlight())
      return
    }
  }

  // Toggle dropdown on Enter / Space when closed
  if (!isOpen.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    isOpen.value = true
    nextTick(() => {
      positionDropdown()
      focusHighlight()
    })
    return
  }

  if (!isOpen.value) return

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      moveHighlight(1)
      break
    case 'ArrowUp':
      event.preventDefault()
      moveHighlight(-1)
      break
    case 'Enter':
      event.preventDefault()
      {
        const current = selectableOptions.value[highlightIndex.value]
        if (current && !current.disabled) {
          selectOption(current)
        }
      }
      break
    case 'Escape':
      event.preventDefault()
      if (props.filterable && filterText.value) {
        filterText.value = ''
        highlightIndex.value = -1
        nextTick(() => focusHighlight())
      } else {
        closeDropdown()
      }
      break
    case 'Tab':
      closeDropdown()
      break
  }
}

// ── Paste handler for filterable mode ─────────────────────────
function handlePaste(event: ClipboardEvent) {
  if (!props.filterable || props.disabled) return
  const text = event.clipboardData?.getData('text')
  if (!text) return

  event.preventDefault()
  if (!isOpen.value) {
    isOpen.value = true
    nextTick(() => positionDropdown())
  }
  filterText.value += text
  highlightIndex.value = -1
  nextTick(() => focusHighlight())
}

function handleOptionClick(option: SelectOption) {
  if (option.disabled) return
  selectOption(option)
}

function selectOption(option: SelectOption) {
  if (option.disabled) return

  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const idx = current.indexOf(option.value)
    if (idx >= 0) {
      current.splice(idx, 1)
    } else {
      current.push(option.value)
    }
    emit('update:modelValue', current)
    emit('change', current)
    filterText.value = ''
    triggerRef.value?.focus()
  } else {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    filterText.value = ''
    isOpen.value = false
    highlightIndex.value = -1
    triggerRef.value?.focus()
  }
}

function removeTag(option: SelectOption) {
  if (props.disabled || !props.multiple) return
  const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  const idx = current.indexOf(option.value)
  if (idx >= 0) {
    current.splice(idx, 1)
    emit('update:modelValue', current)
    emit('change', current)
  }
}

function handleClear() {
  if (props.multiple) {
    emit('update:modelValue', [])
    emit('change', [])
  } else {
    emit('update:modelValue', '')
    emit('change', '')
  }
  emit('clear')
  triggerRef.value?.focus()
}

function closeDropdown() {
  isOpen.value = false
  filterText.value = ''
  highlightIndex.value = -1
  dropdownAbove.value = false
  dropdownScrollTop.value = 0
}

function focusHighlight() {
  const items = selectableOptions.value
  if (items.length === 0) {
    highlightIndex.value = -1
    return
  }

  if (props.multiple || !selectedOption.value) {
    const first = items.findIndex(opt => !opt.disabled)
    highlightIndex.value = first >= 0 ? first : 0
  } else {
    const idx = items.findIndex(
      opt => opt.value === (props.modelValue as string)
    )
    highlightIndex.value = idx >= 0 ? idx : 0
  }

  scrollHighlightIntoView()
}

function scrollHighlightIntoView() {
  nextTick(() => {
    const idx = highlightIndex.value
    const items = dropdownRef.value?.querySelectorAll('.z-select__option')
    if (!items || idx < 0 || idx >= items.length) return
    ;(items[idx] as HTMLElement).scrollIntoView({ block: 'nearest' })
  })
}

function moveHighlight(direction: 1 | -1) {
  const total = selectableOptions.value.length
  if (total === 0) return

  let next = highlightIndex.value + direction
  if (next < 0) next = total - 1
  if (next >= total) next = 0

  let attempts = 0
  while (selectableOptions.value[next]?.disabled && attempts < total) {
    next = (next + direction + total) % total
    attempts++
  }

  if (!selectableOptions.value[next]?.disabled) {
    highlightIndex.value = next
    scrollHighlightIntoView()
  }
}

// ── Focus / blur ──────────────────────────────────────────────
function handleFocus(event: FocusEvent) {
  isFocused.value = true
  emit('focus', event)
}

function handleBlur(event: FocusEvent) {
  setTimeout(() => {
    if (!containerRef.value?.contains(document.activeElement)) {
      isFocused.value = false
      isOpen.value = false
      filterText.value = ''
      highlightIndex.value = -1
      dropdownAbove.value = false
      dropdownScrollTop.value = 0
      emit('blur', event)
    }
  }, 150)
}

// ── Click outside to close ────────────────────────────────────
function onDocumentClick(event: MouseEvent) {
  if (!containerRef.value) return
  if (!containerRef.value.contains(event.target as Node)) {
    if (isOpen.value) {
      isOpen.value = false
      highlightIndex.value = -1
      filterText.value = ''
      dropdownAbove.value = false
      dropdownScrollTop.value = 0
    }
  }
}

// ── ResizeObserver for repositioning ──────────────────────────
let resizeObserver: ResizeObserver | null = null

function setupResizeObserver() {
  resizeObserver = new ResizeObserver(() => {
    if (isOpen.value) {
      positionDropdown()
    }
  })
  resizeObserver.observe(document.body)
}

function cleanupResizeObserver() {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
}

// ── Watch modelValue type auto-fix ────────────────────────────
watch(
  () => props.modelValue,
  () => {
    if (props.multiple && !Array.isArray(props.modelValue)) {
      emit('update:modelValue', props.modelValue ? [props.modelValue as string] : [])
    }
  }
)

// ── Watch options for dropdown repositioning ──────────────────
watch(
  () => props.options,
  () => {
    if (isOpen.value) {
      nextTick(() => positionDropdown())
    }
  },
  { deep: false }
)

// ── Lifecycle ─────────────────────────────────────────────────
onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  setupResizeObserver()
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  cleanupResizeObserver()
})
</script>

<style>
/* ── ZSelect: Win10 Fluent Design ─────────────────────────────────── */

.z-select {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
  user-select: none;
  outline: none;
  position: relative;
}

.z-select__label {
  display: block;
  margin-bottom: 6px;
  color: #605e5c;
  font-size: 13px;
  font-weight: 500;
}

/* ── Trigger ──────────────────────────────────────────────────────── */
.z-select__trigger {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  padding: 0 8px;
  background: #ffffff;
  border: 1px solid #8a8886;
  border-radius: 2px;
  cursor: default;
  outline: none;
  transition:
    border-color 90ms ease-out,
    box-shadow 90ms ease-out;
}

.z-select__trigger:hover {
  border-color: #323130;
}

.z-select--focused .z-select__trigger {
  border-color: #0078d4;
  box-shadow: 0 0 0 1px #0078d4;
}

.z-select--disabled .z-select__trigger {
  background: #f3f2f1;
  border-color: #c8c6c4;
  cursor: not-allowed;
  opacity: 0.6;
}

.z-select--open .z-select__trigger {
  border-color: #0078d4;
}

/* ── Sizes ────────────────────────────────────────────────────────── */
.z-select--small .z-select__trigger {
  min-height: 24px;
  font-size: 12px;
  padding: 0 6px;
}

.z-select--large .z-select__trigger {
  min-height: 40px;
  font-size: 15px;
  padding: 0 12px;
}

/* ── Values area ──────────────────────────────────────────────────── */
.z-select__values {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  min-width: 0;
  overflow: hidden;
}

.z-select__value-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1b1a19;
  line-height: 1.5;
}

.z-select__value-text.is-placeholder {
  color: #8a8886;
  opacity: 0.8;
}

.z-select--disabled .z-select__value-text {
  color: #a19f9d;
}

/* ── Filter text (filterable mode) ────────────────────────────────── */
.z-select__filter-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1b1a19;
  line-height: 1.5;
}

.z-select__filter-cursor {
  display: inline-block;
  width: 1px;
  height: 14px;
  background: #1b1a19;
  margin-left: 1px;
  animation: z-select-blink 1s step-end infinite;
}

@keyframes z-select-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ── Tags (multiple) ──────────────────────────────────────────────── */
.z-select__tag {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 22px;
  padding: 0 6px;
  background: #0078d4;
  border: 1px solid #106ebe;
  border-radius: 2px;
  font-size: 12px;
  color: #1b1a19;
  line-height: 1;
  white-space: nowrap;
}

.z-select__tag-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 1px;
  cursor: default;
  transition: background-color 90ms ease-out;
}

.z-select__tag-remove:hover {
  background: #106ebe;
}

.z-select--disabled .z-select__tag {
  background: #f0f0f0;
  border-color: #d2d2d2;
  color: #a19f9d;
}

/* ── Indicators (clear + arrow) ───────────────────────────────────── */
.z-select__indicators {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 4px;
  gap: 2px;
}

.z-select__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  color: #8a8886;
  cursor: default;
  transition: color 90ms ease-out;
}

.z-select__clear:hover {
  color: #c42b1c;
  background: #f3f2f1;
}

.z-select__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: #605e5c;
  transition: transform 90ms ease-out;
}

.z-select__arrow.is-open {
  transform: rotate(180deg);
}

.z-select--disabled .z-select__arrow {
  color: #c8c6c4;
}

/* ── Dropdown ──────────────────────────────────────────────────────── */
.z-select__dropdown {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  z-index: 6500;
  background: #ffffff;
  border: 1px solid #c8c6c4;
  border-radius: 2px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  max-height: 280px;
  overflow-y: auto;
  padding: 4px 0;
}

.z-select__dropdown.z-select__dropdown--above {
  top: auto;
  bottom: calc(100% + 2px);
}

/* ── Dropdown transition ──────────────────────────────────────────── */
.z-select-drop-enter-active,
.z-select-drop-leave-active {
  transition:
    opacity 90ms ease-out,
    transform 90ms ease-out;
}

.z-select-drop-enter-from,
.z-select-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.z-select__dropdown--above.z-select-drop-enter-from,
.z-select__dropdown--above.z-select-drop-leave-to {
  transform: translateY(4px);
}

/* ── Group label ──────────────────────────────────────────────────── */
.z-select__group-label {
  padding: 6px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #605e5c;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: default;
}

/* ── Option ───────────────────────────────────────────────────────── */
.z-select__option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: #1b1a19;
  font-size: 13px;
  line-height: 1;
  cursor: default;
  text-align: left;
  outline: none;
  transition: background-color 90ms ease-out;
}

.z-select__option:hover,
.z-select__option.is-highlighted {
  background: #2b88d8;
  color: #ffffff;
}

.z-select__option:active {
  background: #106ebe;
  color: #ffffff;
}

.z-select__option.is-selected {
  background: #f0f6fc;
  font-weight: 500;
}

.z-select__option.is-disabled {
  color: #a19f9d;
  cursor: default;
}

.z-select__option.is-disabled:hover {
  background: transparent;
}

/* ── Option checkbox (multiple) ──────────────────────────────────────── */
.z-select__option-check {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.z-select__option-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid #8a8886;
  border-radius: 2px;
  background: #ffffff;
  transition:
    border-color 90ms ease-out,
    background-color 90ms ease-out;
}

.z-select__option-checkbox.is-checked {
  border-color: #0078d4;
  background: #0078d4;
  color: #ffffff;
}

.z-select__option-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Match highlight (filterable) ──────────────────────────────────── */
.z-select__match {
  background: #ffd;
  color: #1b1a19;
  font-weight: 600;
}

/* ── Empty state ────────────────────────────────────────────────────── */
.z-select__empty {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  color: #8a8886;
  font-size: 12px;
  cursor: default;
}
</style>
