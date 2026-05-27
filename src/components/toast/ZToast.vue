<template>
  <Transition name="z-toast">
    <div v-if="visible" class="z-toast" :class="`z-toast--${type}`">
      <ZIcon :name="iconName" :size="18" :color="iconColor" />
      <div class="z-toast__content">
        <strong v-if="title">{{ title }}</strong>
        <span>{{ message }}</span>
      </div>
      <button type="button" @click="close">
        <ZIcon name="close" :size="14" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import ZIcon from '../icon/ZIcon.vue'

defineOptions({ name: 'ZToast' })

const props = withDefaults(
  defineProps<{
    visible?: boolean
    title?: string
    message: string
    type?: 'info' | 'success' | 'warning' | 'error'
    duration?: number
  }>(),
  {
    visible: true,
    type: 'info',
    duration: 4000
  }
)

const emit = defineEmits<{ 'update:visible': [value: boolean] }>()

const iconName = computed(() => (props.type === 'success' ? 'check' : props.type === 'error' ? 'error' : props.type))

const iconColor = computed(() => {
  return props.type === 'success' ? '#107c10' : props.type === 'error' ? '#c42b1c' : props.type === 'warning' ? '#ff8c00' : '#0078d4'
})

let timer: ReturnType<typeof setTimeout> | null = null

function startTimer() {
  stopTimer()
  if (props.duration > 0 && props.visible) {
    timer = setTimeout(() => {
      emit('update:visible', false)
    }, props.duration)
  }
}

function stopTimer() {
  if (timer !== null) {
    clearTimeout(timer)
    timer = null
  }
}

function close() {
  stopTimer()
  emit('update:visible', false)
}

watch(() => props.visible, (val) => {
  if (val) startTimer()
  else stopTimer()
}, { immediate: true })

onUnmounted(() => {
  stopTimer()
})
</script>

<style>
/* Win10 Fluent Design Toast - Global fixed notification */
.z-toast {
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

.z-toast > button {
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
.z-toast > button:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #1b1a19;
}

/* Type accent colors */
.z-toast--info { border-left: 3px solid #0078d4; }
.z-toast--success { border-left: 3px solid #107c10; }
.z-toast--warning { border-left: 3px solid #ff8c00; }
.z-toast--error { border-left: 3px solid #c42b1c; }

/* Slide-in from right */
.z-toast-enter-active {
  transition: transform 250ms ease-out, opacity 250ms ease-out;
}
.z-toast-leave-active {
  transition: transform 200ms ease-in, opacity 200ms ease-in;
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
