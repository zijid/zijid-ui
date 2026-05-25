<template>
  <section class="z-splitter" :class="`z-splitter--${direction}`">
    <div class="z-splitter__pane" :style="firstStyle"><slot name="first" /></div>
    <div class="z-splitter__handle" @pointerdown="startDrag"></div>
    <div class="z-splitter__pane"><slot name="second" /></div>
  </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

defineOptions({ name: 'ZSplitter' })

const props = withDefaults(defineProps<{ modelValue?: number; direction?: 'horizontal' | 'vertical' }>(), {
  modelValue: 40,
  direction: 'horizontal'
})

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
const rootSize = ref(1)
const dragging = ref(false)
const firstStyle = computed(() => ({ flexBasis: `${props.modelValue}%` }))

function startDrag(event: PointerEvent) {
  const parent = (event.currentTarget as HTMLElement).parentElement
  if (!parent) return
  const rect = parent.getBoundingClientRect()
  rootSize.value = props.direction === 'horizontal' ? rect.width : rect.height
  dragging.value = true
  window.addEventListener('pointermove', drag)
  window.addEventListener('pointerup', stopDrag)
}

function drag(event: PointerEvent) {
  if (!dragging.value) return
  const parent = document.elementFromPoint(event.clientX, event.clientY)?.closest('.z-splitter')
  const rect = parent?.getBoundingClientRect()
  const offset = props.direction === 'horizontal' ? event.clientX - (rect?.left ?? 0) : event.clientY - (rect?.top ?? 0)
  emit('update:modelValue', Math.min(80, Math.max(20, (offset / rootSize.value) * 100)))
}

function stopDrag() {
  dragging.value = false
  window.removeEventListener('pointermove', drag)
  window.removeEventListener('pointerup', stopDrag)
}

onUnmounted(stopDrag)
</script>
