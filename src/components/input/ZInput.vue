<template>
  <div
    class="z-input"
    :class="{
      'z-input--disabled': disabled,
      'z-input--focused': isFocused,
      'z-input--has-prefix': hasPrefixContent,
      'z-input--has-suffix': hasSuffixContent,
      'z-input--clearable': clearable,
      'is-error': isError
    }"
  >
    <label v-if="label" class="z-input__label">{{ label }}</label>
    <div class="z-input__wrapper">
      <!-- Prefix: slot, icon, or text -->
      <span v-if="hasPrefixContent" class="z-input__prefix">
        <slot name="prefix">
          <z-icon v-if="prefixIcon" :name="prefixIcon" class="z-input__prefix-icon" />
          <span v-else-if="prefix" class="z-input__prefix-text">{{ prefix }}</span>
        </slot>
      </span>

      <input
        ref="inputRef"
        class="z-input__inner"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="inputType"
        :value="modelValue"
        :readonly="readonly"
        :maxlength="maxlength"
        :autocomplete="autocomplete"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />

      <!-- Suffix: slot, icon, text, clear, password toggle -->
      <span v-if="hasSuffixContent" class="z-input__suffix">
        <slot name="suffix">
          <!-- Password visibility toggle -->
          <z-icon
            v-if="showPassword"
            :name="passwordVisible ? 'eye-off' : 'eye'"
            class="z-input__icon z-input__password-toggle"
            @click.stop="togglePassword"
          />
          <!-- Clear button -->
          <z-icon
            v-else-if="clearable && modelValue"
            name="close"
            class="z-input__icon z-input__clear"
            @click.stop="clear"
          />
          <!-- Suffix text -->
          <span v-else-if="suffix" class="z-input__suffix-text">{{ suffix }}</span>
          <!-- Suffix icon -->
          <z-icon v-else-if="suffixIcon" :name="suffixIcon" class="z-input__suffix-icon" />
        </slot>
      </span>
    </div>

    <!-- Error message -->
    <div v-if="isError && errorMessage" class="z-input__error">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZInput' })

const props = withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
    disabled?: boolean
    readonly?: boolean
    prefix?: string
    prefixIcon?: IconName
    suffix?: string
    suffixIcon?: IconName
    clearable?: boolean
    showPassword?: boolean
    maxlength?: number
    autocomplete?: string
    isError?: boolean
    errorMessage?: string
  }>(),
  {
    modelValue: '',
    type: 'text',
    disabled: false,
    readonly: false,
    clearable: false,
    showPassword: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  clear: []
  change: [event: Event]
  keydown: [event: KeyboardEvent]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const passwordVisible = ref(false)

const inputType = computed(() => {
  if (props.showPassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

const hasPrefixContent = computed(() => {
  return !!(props.prefix || props.prefixIcon)
})

const hasSuffixContent = computed(() => {
  return !!(props.suffix || props.suffixIcon || props.showPassword || (props.clearable && props.modelValue))
})

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
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
  emit('clear')
  inputRef.value?.focus()
}

function togglePassword() {
  passwordVisible.value = !passwordVisible.value
}

defineExpose({
  inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.z-input {
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  font-size: 14px;
  color: var(--z-text, #1b1a19);
}

.z-input__label {
  display: block;
  margin-bottom: 6px;
  color: var(--z-text-muted, #605e5c);
  font-size: 13px;
  font-weight: 500;
}

.z-input__wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  min-height: 32px;
  background: var(--z-input-bg, #ffffff);
  border: 1px solid var(--z-border, #8a8886);
  border-radius: 2px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.z-input__wrapper:hover {
  border-color: var(--z-input-border-hover, #323130);
}

.z-input--focused .z-input__wrapper {
  border-color: var(--z-accent, #0078d4);
  box-shadow: 0 0 0 1px var(--z-accent, #0078d4);
}

.z-input--disabled .z-input__wrapper {
  background: var(--z-surface, #f3f2f1);
  border-color: #c8c6c4;
  cursor: not-allowed;
  opacity: 0.6;
}

.z-input--disabled .z-input__inner {
  cursor: not-allowed;
  color: var(--z-text-muted, #605e5c);
}

.z-input__inner {
  flex: 1;
  min-width: 0;
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 8px;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  line-height: 1.5;
}

.z-input__inner::placeholder {
  color: var(--z-text-muted, #605e5c);
  opacity: 0.7;
}

.z-input__prefix,
.z-input__suffix {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--z-text-muted, #605e5c);
  font-size: 13px;
  user-select: none;
}

.z-input__prefix {
  padding-left: 8px;
}

.z-input__suffix {
  padding-right: 8px;
}

.z-input__prefix-text,
.z-input__suffix-text {
  white-space: nowrap;
  font-size: 13px;
  line-height: 1;
}

.z-input__prefix-icon,
.z-input__suffix-icon {
  flex-shrink: 0;
}

.z-input__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.15s;
  line-height: 0;
}

.z-input__icon:hover {
  color: var(--z-accent, #0078d4);
}

.z-input__clear:hover {
  color: var(--z-danger, #c42b1c);
}

.z-input__password-toggle:hover {
  color: var(--z-accent, #0078d4);
}

.z-input__error {
  margin-top: 4px;
  font-size: 12px;
  color: var(--z-danger, #c42b1c);
  line-height: 1.4;
}
</style>
