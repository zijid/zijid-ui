<template>
  <button
    class="z-button"
    :class="[
      `z-button--${type}`,
      size !== 'medium' ? `z-button--${size}` : '',
      { 'is-loading': loading }
    ]"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <span class="z-button__content">
      <ZIcon v-if="icon && !loading" :name="icon" :size="iconSize" />
      <span v-if="$slots.default" class="z-button__text"><slot /></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZButton' })

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'danger' | 'warning'
    size?: 'small' | 'medium' | 'large'
    nativeType?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    autofocus?: boolean
    icon?: IconName
  }>(),
  {
    type: 'default',
    size: 'medium',
    nativeType: 'button',
    disabled: false,
    loading: false,
    autofocus: false
  }
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const iconSize = computed(() => props.size === 'small' ? 12 : props.size === 'large' ? 16 : 14)

function handleClick(evt: MouseEvent) {
  emit('click', evt)
}
</script>

<style>
/* Win10 Fluent Design Button */
.z-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  height: 32px;
  padding: 0 20px;
  border: 1px solid #8a8886;
  border-radius: 2px;
  background: #f5f5f5;
  color: #1b1a19;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  cursor: default;
  outline: none;
  user-select: none;
  white-space: nowrap;
  transition:
    background-color 90ms ease-out,
    border-color 90ms ease-out;
}
.z-button:hover:not(:disabled) {
  background: #2b88d8;
  border-color: #0078d4;
  color: #ffffff;
}
.z-button:active:not(:disabled) {
  background: #106ebe;
    color: #ffffff;
border-color: #005a9e;
}
.z-button:focus-visible:not(:disabled) {
  border-color: #1b1a19;
  outline: 1px dotted #1b1a19;
  outline-offset: -3px;
}
.z-button:disabled {
  background: #f0f0f0;
  border-color: #d2d2d2;
  color: #a19f9d;
  cursor: default;
}

/* sizes */
.z-button--small {
  min-width: 64px;
  height: 24px;
  padding: 0 12px;
  font-size: 12px;
}
.z-button--large {
  min-width: 100px;
  height: 40px;
  padding: 0 24px;
  font-size: 15px;
}

.z-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 0;
}
.z-button--small .z-button__content { gap: 4px; }
.z-button--large .z-button__content { gap: 8px; }
.z-button__text { overflow: hidden; text-overflow: ellipsis; }

/* type: primary (blue accent) */
.z-button--primary {
  background: #0078d4;
  border-color: #0078d4;
  color: #ffffff;
}
.z-button--primary:hover:not(:disabled) {
  background: #106ebe;
  border-color: #106ebe;
}
.z-button--primary:active:not(:disabled) {
  background: #005a9e;
  border-color: #005a9e;
}
.z-button--primary:focus-visible:not(:disabled) {
  outline-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 0 0 2px #0078d4;
}
.z-button--primary:disabled {
  background: #106ebe;
  border-color: #106ebe;
  color: #ffffff;
}

/* type: danger (red) */
.z-button--danger {
  background: #c42b1c;
  border-color: #c42b1c;
  color: #ffffff;
}
.z-button--danger:hover:not(:disabled) {
  background: #a52a1a;
  border-color: #a52a1a;
}
.z-button--danger:active:not(:disabled) {
  background: #7f1f12;
  border-color: #7f1f12;
}
.z-button--danger:focus-visible:not(:disabled) {
  outline-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 0 0 2px #c42b1c;
}
.z-button--danger:disabled {
  background: #f0c9c5;
  border-color: #f0c9c5;
  color: #ffffff;
}

/* type: warning (orange) */
.z-button--warning {
  background: #ff8c00;
  border-color: #ff8c00;
  color: #ffffff;
}
.z-button--warning:hover:not(:disabled) {
  background: #e67e00;
  border-color: #e67e00;
}
.z-button--warning:active:not(:disabled) {
  background: #cc7000;
  border-color: #cc7000;
}
.z-button--warning:focus-visible:not(:disabled) {
  outline-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 0 0 0 2px #ff8c00;
}
.z-button--warning:disabled {
  background: #ffe0b3;
  border-color: #ffe0b3;
  color: #ffffff;
}

/* loading state */
.z-button.is-loading {
  opacity: 0.6;
  pointer-events: none;
}
</style>
