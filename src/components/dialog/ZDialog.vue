<template>
  <Transition name="z-dialog">
    <div v-if="modelValue" class="z-dialog" :class="[`z-dialog--${size ?? 'medium'}`, `z-dialog--${type ?? 'info'}`]">
      <div class="z-dialog__backdrop" @click="closeOnBackdrop && emit('update:modelValue', false)"></div>
      <div class="z-dialog__panel" role="dialog">
        <header class="z-dialog__titlebar">
          <span class="z-dialog__title">
            <ZIcon :name="iconName" :size="16" class="z-dialog__type-icon" />
            {{ title }}
          </span>
          <button class="z-dialog__close" type="button" aria-label="Close" @click="emit('update:modelValue', false)">
            <ZIcon name="window-close" :size="18" />
          </button>
        </header>
        <div class="z-dialog__body">
          <slot />
        </div>
        <footer v-if="hasFooter" class="z-dialog__footer">
          <slot name="footer">
            <ZButton @click="emit('update:modelValue', false)">取消</ZButton>
            <ZButton :type="primaryButtonType" @click="emit('confirm')">确定</ZButton>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import ZButton from '../button/ZButton.vue'

defineOptions({ name: 'ZDialog' })

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    title?: string
    size?: 'small' | 'medium' | 'large'
    type?: 'info' | 'success' | 'warning' | 'error'
    closeOnBackdrop?: boolean
  }>(),
  {
    title: '提示',
    size: 'medium',
    type: 'info',
    closeOnBackdrop: true
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
}>()

const slots = useSlots()
const hasFooter = !!slots.footer

const iconName = computed(() => {
  switch (props.type) {
    case 'success': return 'check'
    case 'warning': return 'warning'
    case 'error': return 'error'
    default: return 'info'
  }
})

const primaryButtonType = computed(() => {
  switch (props.type) {
    case 'warning': return 'warning'
    case 'error': return 'danger'
    default: return 'primary'
  }
})
</script>

<style>
/* Win10 Fluent Design Dialog */
.z-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.z-dialog__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.z-dialog__panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* size variants */
.z-dialog--small .z-dialog__panel { min-width: 240px; max-width: 320px; }
.z-dialog--medium .z-dialog__panel { min-width: 360px; max-width: 480px; }
.z-dialog--large .z-dialog__panel { min-width: 500px; max-width: 640px; }

/* type icon colors */
.z-dialog--info .z-dialog__type-icon { stroke: #0078d4; }
.z-dialog--success .z-dialog__type-icon { stroke: #107c10; }
.z-dialog--warning .z-dialog__type-icon { stroke: #ff8c00; }
.z-dialog--error .z-dialog__type-icon { stroke: #c42b1c; }

.z-dialog__titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 8px;
  background: linear-gradient(to bottom, #fafafa, #f0f0f0);
  border-bottom: 1px solid #d0d0d0;
  user-select: none;
}

.z-dialog__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #1b1a19;
}

.z-dialog__type-icon {
  flex-shrink: 0;
}


.z-dialog__close {
  width: 46px;
  height: 32px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: background-color 0.2s;
}
.z-dialog__close:hover {
  background: #e81123;
}
.z-dialog__close:hover .z-icon {
  stroke: white;
}

.z-dialog__body {
  padding: 20px 24px;
  font-size: 13px;
  line-height: 1.6;
  color: #1b1a19;
}

.z-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 24px;
  border-top: 1px solid #e0e0e0;
}

/* Transition */
.z-dialog-enter-active,
.z-dialog-leave-active {
  transition: opacity 200ms ease-out;
}
.z-dialog-enter-active .z-dialog__panel,
.z-dialog-leave-active .z-dialog__panel {
  transition: transform 200ms ease-out;
}
.z-dialog-enter-from,
.z-dialog-leave-to {
  opacity: 0;
}
.z-dialog-enter-from .z-dialog__panel {
  transform: scale(0.95);
}
.z-dialog-leave-to .z-dialog__panel {
  transform: scale(0.95);
}
</style>
