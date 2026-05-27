<template>
  <TransitionGroup name="z-toast" tag="div" class="z-toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="z-toast"
      :class="`z-toast--${toast.type ?? 'info'}`"
    >
      <ZIcon :name="iconName(toast.type)" :size="18" :color="iconColor(toast.type)" />
      <div class="z-toast__content">
        <strong v-if="toast.title">{{ toast.title }}</strong>
        <span>{{ toast.message }}</span>
      </div>
      <button type="button" @click="close(toast.id)">
        <ZIcon name="close" :size="14" />
      </button>
    </div>
  </TransitionGroup>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { ToastEntry } from '../composables/useToast'

defineOptions({ name: 'ZToastContainer' })

defineProps<{
  toasts: ToastEntry[]
  close: (id: number) => void
}>()

function iconName(type?: string) {
  return type === 'success' ? 'check' : type === 'error' ? 'error' : type === 'warning' ? 'warning' : 'info'
}

function iconColor(type?: string) {
  return type === 'success' ? '#107c10' : type === 'error' ? '#c42b1c' : type === 'warning' ? '#ff8c00' : '#0078d4'
}
</script>

<style>
/* Toast container - fixed stack at top-right */
.z-toast-container {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
}

.z-toast-container .z-toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
  max-width: 360px;
  min-width: 260px;
}

.z-toast__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.z-toast__content strong {
  font-size: 13px;
  font-weight: 600;
  color: #1b1a19;
}
.z-toast__content span {
  color: #555;
  line-height: 1.4;
}

.z-toast-container .z-toast > button {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  color: #888;
  cursor: default;
  border-radius: 2px;
  transition: background-color 90ms ease-out;
}
.z-toast-container .z-toast > button:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #1b1a19;
}

/* Type accent colors */
.z-toast--info { border-left: 3px solid #0078d4; }
.z-toast--success { border-left: 3px solid #107c10; }
.z-toast--warning { border-left: 3px solid #ff8c00; }
.z-toast--error { border-left: 3px solid #c42b1c; }

/* TransitionGroup animations */
.z-toast-enter-active {
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}
.z-toast-leave-active {
  transition: transform 200ms ease-in, opacity 200ms ease-in;
}
.z-toast-move {
  transition: transform 250ms ease-out;
}
.z-toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.z-toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
