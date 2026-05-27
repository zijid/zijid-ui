<template>
  <div
    ref="containerRef"
    class="z-search-box"
    :class="{ 'is-open': showDropdown }"
  >
    <ZInput
      ref="inputRef"
      v-model="query"
      class="z-search-box__input"
      :placeholder="placeholder"
      :disabled="disabled"
      prefix-icon="search"
      clearable
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
      @clear="onClear"
    />

    <transition name="z-search-drop">
      <div v-if="showDropdown" class="z-search-box__dropdown" @mousedown.prevent>
        <button
          v-for="(item, index) in filteredItems"
          :key="item.value || index"
          class="z-search-box__option"
          :class="{ 'is-highlighted': highlightIndex === index }"
          @click="selectItem(item)"
          @mouseenter="highlightIndex = index"
        >
          <ZIcon v-if="item.icon" :name="item.icon" :size="14" class="z-search-box__option-icon" />
          <span class="z-search-box__option-label">
            <span v-for="(part, i) in highlightText(item.label)" :key="i">
              <mark v-if="part.match" class="z-search-box__match">{{ part.text }}</mark>
              <span v-else>{{ part.text }}</span>
            </span>
          </span>
          <span v-if="item.subtitle" class="z-search-box__option-sub">{{ item.subtitle }}</span>
        </button>

        <!-- Empty state when query has no matches -->
        <div v-if="filteredItems.length === 0" class="z-search-box__empty">
          <ZIcon name="search" :size="14" class="z-search-box__empty-icon" />
          <span class="z-search-box__empty-text">No results for "<strong>{{ query }}</strong>"</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import ZInput from '../input/ZInput.vue'
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

export type SearchItem = {
  label: string
  value?: string
  icon?: IconName
  subtitle?: string
}

defineOptions({ name: 'ZSearchBox' })

const props = withDefaults(defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  items?: SearchItem[]
  maxResults?: number
}>(), {
  modelValue: '',
  placeholder: '搜索',
  disabled: false,
  items: () => [],
  maxResults: 10
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: [value: string]
  select: [item: SearchItem]
}>()

const inputRef = ref<InstanceType<typeof ZInput> | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const query = ref(props.modelValue)
const isFocused = ref(false)
const highlightIndex = ref(-1)

const filteredItems = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return props.items
    .filter(item => item.label.toLowerCase().includes(q) || (item.subtitle && item.subtitle.toLowerCase().includes(q)))
    .slice(0, props.maxResults)
})

const showDropdown = computed(() => {
  const q = query.value.trim()
  return q.length > 0
})

function highlightText(text: string) {
  const q = query.value.trim()
  if (!q) return [{ text, match: false }]
  const idx = text.toLowerCase().indexOf(q.toLowerCase())
  if (idx === -1) return [{ text, match: false }]
  return [
    { text: text.slice(0, idx), match: false },
    { text: text.slice(idx, idx + q.length), match: true },
    { text: text.slice(idx + q.length), match: false }
  ]
}

function onFocus() {
  isFocused.value = true
}

function onBlur() {
  setTimeout(() => {
    if (!containerRef.value?.contains(document.activeElement)) {
      isFocused.value = false
      highlightIndex.value = -1
    }
  }, 180)
}

function onClear() {
  query.value = ''
  emit('update:modelValue', '')
  isFocused.value = true
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (highlightIndex.value < filteredItems.value.length - 1) {
      highlightIndex.value++
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (highlightIndex.value > 0) {
      highlightIndex.value--
    }
  } else if (e.key === 'Enter') {
    if (highlightIndex.value >= 0 && filteredItems.value[highlightIndex.value]) {
      selectItem(filteredItems.value[highlightIndex.value])
    } else if (query.value.trim()) {
      emit('search', query.value.trim())
    }
  } else if (e.key === 'Escape') {
    isFocused.value = false
    highlightIndex.value = -1
    inputRef.value?.blur()
  }
}

function selectItem(item: SearchItem) {
  emit('select', item)
  query.value = item.label
  emit('update:modelValue', item.label)
  isFocused.value = false
  highlightIndex.value = -1
  inputRef.value?.blur()
}

watch(() => props.modelValue, (val) => {
  query.value = val ?? ''
})

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.z-search-box {
  position: relative;
  width: 100%;
  max-width: 360px;
}

.z-search-box__input {
  --z-input-bg: #ffffff;
}

.z-search-box__dropdown {
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

.z-search-box__option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: #1b1a19;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  line-height: 1;
  cursor: default;
  text-align: left;
  transition: background-color 90ms ease-out;
}

.z-search-box__option:hover,
.z-search-box__option.is-highlighted {
  background: #e5f1fb;
}

.z-search-box__option:active {
  background: #cce4f7;
}

.z-search-box__option-icon {
  flex-shrink: 0;
  color: #605e5c;
}

.z-search-box__option-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.z-search-box__match {
  background: #ffd;
  color: #1b1a19;
  font-weight: 600;
}

.z-search-box__option-sub {
  flex-shrink: 0;
  color: #a19f9d;
  font-size: 11px;
}

.z-search-box__empty {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  color: #8a8886;
  font-size: 12px;
  cursor: default;
}

.z-search-box__empty-icon {
  flex-shrink: 0;
  opacity: 0.5;
}

.z-search-box__empty-text strong {
  color: #605e5c;
}

.z-search-drop-enter-active,
.z-search-drop-leave-active {
  transition: opacity 90ms ease-out, transform 90ms ease-out;
}
.z-search-drop-enter-from,
.z-search-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
