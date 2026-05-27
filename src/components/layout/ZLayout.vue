<template>
  <section
    class="z-layout"
    :class="[
      `z-layout--${direction}`,
      `z-layout--align-${align}`,
      `z-layout--justify-${justify}`,
      {
        'z-layout--scroll': scroll !== false,
        'z-layout--scroll-x': scroll === 'x',
        'z-layout--scroll-y': scroll === 'y' || scroll === true || scroll === 'auto',
        'z-layout--split': split !== false,
        'z-layout--has-header': hasHeader,
        'z-layout--has-footer': hasFooter
      }
    ]"
    :style="containerStyle"
  >
    <header v-if="hasHeader" class="z-layout__header">
      <slot name="header">{{ title }}</slot>
    </header>

    <!-- Splitter mode: two panes with draggable divider -->
    <template v-if="split !== false">
      <div class="z-layout__pane" :style="firstPaneStyle">
        <slot name="first" />
      </div>
      <div
        class="z-layout__handle"
        :class="{ 'z-layout__handle--dragging': dragging }"
        @pointerdown.prevent="startDrag"
      >
        <div class="z-layout__handle-bar" />
      </div>
      <div class="z-layout__pane" :style="secondPaneStyle">
        <slot name="second" />
      </div>
    </template>

    <!-- Normal content (non-split mode) -->
    <div v-else class="z-layout__body">
      <slot />
    </div>

    <footer v-if="hasFooter" class="z-layout__footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, useSlots, watch } from 'vue'

defineOptions({ name: 'ZLayout' })

const props = withDefaults(defineProps<{
  title?: string
  direction?: 'vertical' | 'horizontal'
  split?: boolean | number
  modelValue?: number
  scroll?: boolean | 'auto' | 'hidden' | 'x' | 'y'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  gap?: number
  padding?: string
}>(), {
  direction: 'vertical',
  split: false,
  modelValue: 40,
  scroll: false,
  align: 'stretch',
  justify: 'start',
  gap: 0,
  padding: '0px'
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const slots = useSlots()
const hasHeader = computed(() => !!slots.header || !!props.title)
const hasFooter = computed(() => !!slots.footer)

const dragging = ref(false)
const rootSize = ref(1)
const paneRatio = ref(props.modelValue)

// Sync paneRatio when modelValue changes externally
watch(() => props.modelValue, (val) => {
  paneRatio.value = val
})

const containerStyle = computed(() => ({
  gap: props.gap > 0 ? `${props.gap}px` : undefined,
  padding: props.padding !== '0px' ? props.padding : undefined
}))

const firstPaneStyle = computed(() => {
  if (props.split === false) return {}
  return { flexBasis: `${paneRatio.value}%` }
})

const secondPaneStyle = computed(() => {
  if (props.split === false) return {}
  return { flexBasis: `${100 - paneRatio.value}%` }
})

function startDrag(event: PointerEvent) {
  const handle = event.currentTarget as HTMLElement
  const parent = handle.closest('.z-layout') as HTMLElement
  if (!parent) return
  const rect = parent.getBoundingClientRect()
  rootSize.value = props.direction === 'horizontal' ? rect.width : rect.height
  dragging.value = true
  window.addEventListener('pointermove', drag)
  window.addEventListener('pointerup', stopDrag)
}

function drag(event: PointerEvent) {
  if (!dragging.value) return
  const layout = document.elementFromPoint(event.clientX, event.clientY)?.closest('.z-layout') as HTMLElement | null
  const rect = layout?.getBoundingClientRect()
  if (!rect) return
  const offset = props.direction === 'horizontal'
    ? event.clientX - rect.left
    : event.clientY - rect.top
  const ratio = Math.min(80, Math.max(20, (offset / rootSize.value) * 100))
  paneRatio.value = ratio
  emit('update:modelValue', ratio)
}

function stopDrag() {
  dragging.value = false
  window.removeEventListener('pointermove', drag)
  window.removeEventListener('pointerup', stopDrag)
}

onUnmounted(stopDrag)
</script>

<style scoped>
.z-layout {
  display: flex;
  position: relative;
  box-sizing: border-box;
}

/* Direction */
.z-layout--vertical {
  flex-direction: column;
}

.z-layout--horizontal {
  flex-direction: row;
}

/* Alignment */
.z-layout--align-start {
  align-items: flex-start;
}

.z-layout--align-center {
  align-items: center;
}

.z-layout--align-end {
  align-items: flex-end;
}

.z-layout--align-stretch {
  align-items: stretch;
}

/* Justify */
.z-layout--justify-start {
  justify-content: flex-start;
}

.z-layout--justify-center {
  justify-content: center;
}

.z-layout--justify-end {
  justify-content: flex-end;
}

.z-layout--justify-between {
  justify-content: space-between;
}

.z-layout--justify-around {
  justify-content: space-around;
}

/* Scroll mode */
.z-layout--scroll-y {
  overflow-y: auto;
}

.z-layout--scroll-x {
  overflow-x: auto;
}

.z-layout--scroll.z-layout--vertical {
  overflow-y: auto;
}

.z-layout--scroll.z-layout--horizontal {
  overflow-x: auto;
}

/* Custom scrollbar (Win10 Fluent style) */
.z-layout--scroll-y::-webkit-scrollbar,
.z-layout--scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.z-layout--scroll-y::-webkit-scrollbar-track,
.z-layout--scroll::-webkit-scrollbar-track {
  background: transparent;
}

.z-layout--scroll-y::-webkit-scrollbar-thumb,
.z-layout--scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
}

.z-layout--scroll-y::-webkit-scrollbar-thumb:hover,
.z-layout--scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

/* Header */
.z-layout__header {
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a2e;
  background: #f0f0f0;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 4px 4px 0 0;
  flex-shrink: 0;
}

/* Footer */
.z-layout__footer {
  padding: 12px 16px;
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 4px 4px;
  flex-shrink: 0;
}

/* Body (non-split) */
.z-layout__body {
  flex: 1;
  padding: 16px;
  min-height: 0;
}

/* Splitter mode */
.z-layout--split {
  overflow: hidden;
}

.z-layout__pane {
  flex: 1;
  min-width: 0;
  min-height: 0;
  overflow: auto;
  padding: 16px;
}

.z-layout__handle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: col-resize;
  z-index: 10;
}

.z-layout--vertical .z-layout__handle {
  width: 100%;
  height: 10px;
  cursor: row-resize;
}

.z-layout--horizontal .z-layout__handle {
  width: 10px;
  height: 100%;
  cursor: col-resize;
}

.z-layout__handle-bar {
  border-radius: 2px;
  background: #d0d0d0;
  transition: background 0.15s ease;
}

.z-layout--vertical .z-layout__handle-bar {
  width: 40px;
  height: 3px;
}

.z-layout--horizontal .z-layout__handle-bar {
  width: 3px;
  height: 40px;
}

.z-layout__handle:hover .z-layout__handle-bar,
.z-layout__handle--dragging .z-layout__handle-bar {
  background: #0078d4;
}

/* Fluent Design border */
.z-layout {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #fff;
}
</style>
