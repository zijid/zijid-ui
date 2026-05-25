<template>
  <div class="z-input" :class="{ 'z-input--disabled': disabled, 'z-input--focused': isFocused }">
    <label v-if="label" class="z-input__label">{{ label }}</label>
    <div class="z-input__wrapper">
      <span v-if="$slots.prefix || prefixIcon" class="z-input__prefix">
        <slot name="prefix">
          <z-icon v-if="prefixIcon" :name="prefixIcon" />
        </slot>
      </span>
      
      <input
        ref="inputRef"
        class="z-input__inner"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :value="modelValue"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <span v-if="$slots.suffix || suffixIcon || clearable || showPassword" class="z-input__suffix">
        <slot name="suffix">
          <z-icon 
            v-if="showPassword" 
            :name="passwordVisible ? 'eye-off' : 'eye'" 
            class="z-input__icon" 
            @click="togglePassword" 
          />
          <z-icon 
            v-else-if="clearable && modelValue && !disabled" 
            name="close" 
            class="z-input__icon z-input__clear" 
            @click="clear" 
          />
          <z-icon v-if="suffixIcon && !clearable && !showPassword" :name="suffixIcon" />
        </slot>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
    prefixIcon?: IconName
    suffixIcon?: IconName
    clearable?: boolean
    showPassword?: boolean
  }>(),
  {
    modelValue: '',
    type: 'text',
    disabled: false,
    clearable: false,
    showPassword: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  clear: []
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)
const passwordVisible = ref(false)

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

function clear() {
  emit('update:modelValue', '')
  emit('clear')
  inputRef.value?.focus()
}

function togglePassword() {
  passwordVisible.value = !passwordVisible.value
}
</script>

<style scoped>
.z-input {
  display: inline-block;
  width: 100%;
  font-size: 14px;
}

.z-input__label {
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
}

.z-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.z-input__wrapper:hover {
  border-color: #b9b9b9;
}

.z-input--focused .z-input__wrapper {
  border-color: #0078d7;
  box-shadow: 0 0 0 1px #0078d7;
}

.z-input--disabled .z-input__wrapper {
  background: #f5f5f5;
  cursor: not-allowed;
}

.z-input__inner {
  flex: 1;
  border: none;
  outline: none;
  padding: 8px 12px;
  background: transparent;
  font-size: inherit;
  color: #333;
}

.z-input__inner::placeholder {
  color: #999;
}

.z-input__prefix,
.z-input__suffix {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #666;
}

.z-input__icon {
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s;
}

.z-input__icon:hover {
  color: #0078d7;
}

.z-input__clear:hover {
  color: #e81123;
}
</style>
