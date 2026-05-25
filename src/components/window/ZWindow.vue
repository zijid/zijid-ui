<template>
  <section
    v-if="visible"
    class="win10-window"
    :class="{
      'win10-window--focused': isFocused,
      'win10-window--maximized': isMaximized,
      'win10-window--minimized': isMinimized
    }"
    :style="windowStyle"
    tabindex="0"
    @focusin="focusWindow"
    @pointerdown="focusWindow"
  >
    <header class="win10-window__titlebar" @pointerdown="startDrag">
      <div class="win10-window__title"><slot name="title">{{ title }}</slot></div>
      <div class="win10-window__actions" aria-label="窗口操作">
        <button class="win10-window__action win10-window__action--minimize" type="button" aria-label="最小化" @click="minimize">
          <ZIcon name="window-minimize" :size="16" />
        </button>
        <button
          class="win10-window__action win10-window__action--maximize"
          type="button"
          :aria-label="isMaximized ? '还原' : '最大化'"
          @click="toggleMaximize"
        >
          <ZIcon :name="isMaximized ? 'window-restore' : 'window-maximize'" :size="16" />
        </button>
        <button class="win10-window__action win10-window__action--close" type="button" aria-label="关闭" @click="close">
          <ZIcon name="window-close" :size="16" />
        </button>
      </div>
    </header>
    <div v-show="!isMinimized" class="win10-window__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
let windowIdCounter = 0
</script>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import { globalWindowLayerManager, type WindowLayerEntry } from '../../composables/useWindowLayers'

defineOptions({ name: 'ZWindow' })

const props = withDefaults(
  defineProps<{
    title?: string
    modelValue?: boolean
    minimized?: boolean
    maximized?: boolean
    focused?: boolean
    zIndex?: number
    x?: number
    y?: number
    width?: number | string
    height?: number | string
    draggable?: boolean
  }>(),
  {
    title: 'Window',
    modelValue: undefined,
    minimized: undefined,
    maximized: undefined,
    focused: undefined,
    draggable: true,
    width: 400,
    height: 300
  }
)

const instanceId = `z-window-${++windowIdCounter}`

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:minimized': [value: boolean]
  'update:maximized': [value: boolean]
  'update:focused': [value: boolean]
  'update:zIndex': [value: number]
  'update:x': [value: number]
  'update:y': [value: number]
  close: []
  minimize: []
  maximize: []
  restore: []
  focus: [zIndex: number]
  'layer-change': [zIndex: number]
  move: [position: { x: number; y: number }]
  'move-start': [position: { x: number; y: number }]
  'move-end': [position: { x: number; y: number }]
}>()

const internalVisible = ref(true)
const internalMinimized = ref(false)
const internalMaximized = ref(false)
const internalFocused = ref(false)
const internalX = ref(0)
const internalY = ref(0)
const internalZIndex = ref(0)
const isDragging = ref(false)
const dragStart = ref({ pointerX: 0, pointerY: 0, x: 0, y: 0 })
const preMaximizeState = ref<{ x: number; y: number } | null>(null)
let isRegisteredLayer = false

const visible = computed(() => props.modelValue ?? internalVisible.value)
const isMaximized = computed(() => props.maximized ?? internalMaximized.value)
const isMinimized = computed(() => props.minimized ?? internalMinimized.value)
const isFocused = computed(() => props.focused ?? internalFocused.value)

const layerEntry: WindowLayerEntry = {
  id: instanceId,
  setLayer(zIndex: number) {
    internalZIndex.value = zIndex
    emit('update:zIndex', zIndex)
    emit('layer-change', zIndex)
  },
  setActive(focused: boolean) {
    internalFocused.value = focused
    emit('update:focused', focused)
  }
}

function registerLayer() {
  if (isRegisteredLayer) {
    return
  }

  isRegisteredLayer = true
  globalWindowLayerManager.register(layerEntry)
}

function unregisterLayer() {
  if (!isRegisteredLayer) {
    return
  }

  isRegisteredLayer = false
  globalWindowLayerManager.unregister(instanceId)
  internalFocused.value = false
  emit('update:focused', false)
}

watch(
  visible,
  (value) => {
    if (value) {
      registerLayer()
      globalWindowLayerManager.activate(instanceId)
    } else {
      unregisterLayer()
    }
  },
  { immediate: true }
)

const currentZIndex = computed(() => internalZIndex.value)
const currentX = computed(() => {
  return internalX.value !== 0 ? internalX.value : (props.x ?? 0)
})
const currentY = computed(() => {
  return internalY.value !== 0 ? internalY.value : (props.y ?? 0)
})

const windowStyle = computed(() => {
  const baseStyle: any = {
    position: 'absolute',
    zIndex: currentZIndex.value,
    width: isMaximized.value ? 'auto' : (typeof props.width === 'number' ? `${props.width}px` : props.width),
    height: isMaximized.value ? 'auto' : (typeof props.height === 'number' ? `${props.height}px` : props.height),
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }

  if (isMaximized.value) {
    baseStyle.top = '0'
    baseStyle.right = '0'
    baseStyle.bottom = '0'
    baseStyle.left = '0'
    baseStyle.borderRadius = '0'
    baseStyle.boxShadow = 'none'
  } else {
    baseStyle.top = `${currentY.value}px`
    baseStyle.right = 'auto'
    baseStyle.bottom = 'auto'
    baseStyle.left = `${currentX.value}px'
  }

  return baseStyle
})

function setMinimized(value: boolean) {
  internalMinimized.value = value
  emit('update:minimized', value)
}

function setMaximized(value: boolean) {
  internalMaximized.value = value
  emit('update:maximized', value)
}

function focusWindow() {
  registerLayer()
  globalWindowLayerManager.activate(instanceId)
  emit('focus', internalZIndex.value)
}

function setPosition(x: number, y: number) {
  internalX.value = x
  internalY.value = y
  emit('update:x', x)
  emit('update:y', y)
  emit('move', { x, y })
}

function startDrag(event: PointerEvent) {
  if (!props.draggable || event.button !== 0) {
    return
  }

  const target = event.target as HTMLElement
  if (target.closest('.win10-window__actions')) {
    return
  }

  focusWindow()

  if (isMaximized.value) {
    preMaximizeState.value = { x: currentX.value, y: currentY.value }
    setMaximized(false)
    
    setTimeout(() => {
      isDragging.value = true
      dragStart.value = {
        pointerX: event.clientX,
        pointerY: event.clientY,
        x: currentX.value,
        y: currentY.value
      }
      window.addEventListener('pointermove', drag)
      window.addEventListener('pointerup', stopDrag)
      window.addEventListener('pointercancel', stopDrag)
      emit('move-start', { x: currentX.value, y: currentY.value })
    }, 0)
    return
  }

  isDragging.value = true
  dragStart.value = {
    pointerX: event.clientX,
    pointerY: event.clientY,
    x: currentX.value,
    y: currentY.value
  }

  window.addEventListener('pointermove', drag)
  window.addEventListener('pointerup', stopDrag)
  window.addEventListener('pointercancel', stopDrag)
  emit('move-start', { x: currentX.value, y: currentY.value })
}

function drag(event: PointerEvent) {
  if (!isDragging.value) {
    return
  }

  const nextX = dragStart.value.x + event.clientX - dragStart.value.pointerX
  const nextY = dragStart.value.y + event.clientY - dragStart.value.pointerY
  setPosition(nextX, nextY)
}

function stopDrag() {
  if (!isDragging.value) {
    return
  }

  isDragging.value = false
  window.removeEventListener('pointermove', drag)
  window.removeEventListener('pointerup', stopDrag)
  window.removeEventListener('pointercancel', stopDrag)
  emit('move-end', { x: currentX.value, y: currentY.value })
}

function close() {
  internalVisible.value = false
  emit('update:modelValue', false)
  emit('close')
}

function minimize() {
  focusWindow()
  setMinimized(true)
  emit('minimize')
}

function toggleMaximize() {
  focusWindow()

  if (isMaximized.value) {
    setMaximized(false)
    if (preMaximizeState.value) {
      setPosition(preMaximizeState.value.x, preMaximizeState.value.y)
      preMaximizeState.value = null
    }
    emit('restore')
    return
  }

  preMaximizeState.value = { x: currentX.value, y: currentY.value }
  setMinimized(false)
  setMaximized(true)
  emit('maximize')
}

onUnmounted(() => {
  stopDrag()
  unregisterLayer()
})
</script>

<style scoped>
.win10-window {
  position: absolute;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 100px;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.win10-window--maximized {
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  transform: none !important;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.win10-window--minimized .win10-window__body {
  display: none;
}

.win10-window__titlebar {
  height: 32px;
  background: linear-gradient(to bottom, #f8f8f8, #f0f0f0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  user-select: none;
  cursor: move;
  border-bottom: 1px solid #e0e0e0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.win10-window__title {
  font-size: 14px;
  color: #333333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
}

.win10-window__actions {
  display: flex;
  gap: 4px;
}

.win10-window__action {
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

.win10-window__action:hover {
  background: rgba(0, 0, 0, 0.05);
}

.win10-window__action--minimize:hover {
  background: rgba(0, 0, 0, 0.1);
}

.win10-window__action--maximize:hover {
  background: rgba(0, 0, 0, 0.1);
}

.win10-window__action--close:hover {
  background: #e81123;
}

.win10-window__action--close:hover .z-icon {
  stroke: white;
}

.win10-window__body {
  flex: 1;
  overflow: auto;
  padding: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
