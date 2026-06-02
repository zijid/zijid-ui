<template>
  <div
    class="z-textarea"
    :class="{
      'z-textarea--disabled': disabled,
      'z-textarea--focused': isFocused,
      'z-textarea--clearable': clearable,
      'is-error': isError,
      'z-textarea--has-count': !!maxlength
    }"
  >
    <label v-if="label" class="z-textarea__label">{{ label }}</label>
    <div class="z-textarea__wrapper">
      <textarea
        ref="textareaRef"
        class="z-textarea__control"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="modelValue"
        :readonly="readonly"
        :maxlength="maxlength"
        :rows="rows"
        :style="textareaStyle"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />
      <!-- Clear button -->
      <span
        v-if="clearable && modelValue"
        class="z-textarea__clear"
        @click.stop="clear"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L7 6.293l1.646-1.647a.5.5 0 0 1 .708.708L7.707 7l1.647 1.646a.5.5 0 0 1-.708.708L7 7.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 7 4.646 5.354a.5.5 0 0 1 0-.708z" fill="currentColor"/>
        </svg>
      </span>
    </div>
    <!-- Footer: Error message + character count -->
    <div class="z-textarea__footer">
      <div v-if="isError && errorMessage" class="z-textarea__error">{{ errorMessage }}</div>
      <div v-else class="z-textarea__spacer"></div>
      <div v-if="maxlength" class="z-textarea__count">{{ (modelValue || '').length }} / {{ maxlength }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'ZTextarea' })

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    rows?: number
    disabled?: boolean
    readonly?: boolean
    clearable?: boolean
    maxlength?: number
    resize?: 'none' | 'vertical' | 'horizontal' | 'both'
    isError?: boolean
    errorMessage?: string
  }>(),
  {
    modelValue: '',
    rows: 4,
    disabled: false,
    readonly: false,
    clearable: false,
    resize: 'vertical'
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  change: [event: Event]
  keydown: [event: KeyboardEvent]
}>()

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const isFocused = ref(false)

const textareaStyle = computed(() => ({
  resize: props.resize
}))

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

function handleFocus(event: FocusEvent) {
  isFocused.value = true
  emit('focus', event)
}

function handleBlur(event: FocusEvent) {
  isFocused.value = false
  emit('blur', event)
}

function handleChange(event: Event) {
  emit('change', event)
}

function handleKeydown(event: KeyboardEvent) {
  emit('keydown', event)
}

function clear() {
  emit('update:modelValue', '')
  textareaRef.value?.focus()
}

defineExpose({
  textareaRef,
  focus: () => textareaRef.value?.focus(),
  blur: () => textareaRef.value?.blur()
})
</script>

<style scoped>
.z-textarea {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  color: var(--z-text, #1b1a19);
}

.z-textarea__label {
  display: block;
  margin-bottom: 6px;
  color: var(--z-text-muted, #605e5c);
  font-size: 13px;
  font-weight: 500;
}

.z-textarea__wrapper {
  position: relative;
  display: flex;
  width: 100%;
  background: var(--z-input-bg, #ffffff);
  border: 1px solid var(--z-border, #8a8886);
  border-radius: 2px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.z-textarea__wrapper:hover {
  border-color: var(--z-input-border-hover, #323130);
}

.z-textarea--focused .z-textarea__wrapper {
  border-color: var(--z-accent, #0078d4);
  box-shadow: 0 0 0 1px var(--z-accent, #0078d4);
}

.z-textarea--disabled .z-textarea__wrapper {
  background: var(--z-surface, #f3f2f1);
  border-color: #c8c6c4;
  cursor: not-allowed;
  opacity: 0.6;
}

.z-textarea--disabled .z-textarea__control {
  cursor: not-allowed;
  color: var(--z-text-muted, #605e5c);
}

.is-error .z-textarea__wrapper {
  border-color: var(--z-danger, #c42b1c);
}

.is-error .z-textarea__wrapper:hover {
  border-color: var(--z-danger, #c42b1c);
}

.is-error.z-textarea--focused .z-textarea__wrapper {
  border-color: var(--z-danger, #c42b1c);
  box-shadow: 0 0 0 1px var(--z-danger, #c42b1c);
}

.z-textarea__control {
  flex: 1;
  width: 100%;
  min-height: 32px;
  padding: 5px 8px;
  border: none;
  outline: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  line-height: 1.5;
  resize: vertical;
}

.z-textarea__control::placeholder {
  color: var(--z-text-muted, #605e5c);
  opacity: 0.7;
}

.z-textarea__clear {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: var(--z-text-muted, #605e5c);
  border-radius: 2px;
  transition: color 0.15s, background 0.15s;
  line-height: 0;
  flex-shrink: 0;
}

.z-textarea__clear:hover {
  color: var(--z-danger, #c42b1c);
  background: rgba(0, 0, 0, 0.05);
}

.z-textarea__footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4px;
  min-height: 16px;
}

.z-textarea__error {
  font-size: 12px;
  color: var(--z-danger, #c42b1c);
  line-height: 1.4;
}

.z-textarea__spacer {
  flex: 1;
}

.z-textarea__count {
  flex-shrink: 0;
  font-size: 12px;
  color: var(--z-text-muted, #605e5c);
  line-height: 1.4;
  text-align: right;
}
</style>
