<template>
  <div
    class="z-tooltip-wrapper"
    ref="wrapperRef"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <slot />

    <Teleport to="body">
      <div
        v-if="visible"
        ref="tooltipRef"
        class="z-tooltip"
        :class="[`z-tooltip--${currentPlacement}`, { 'z-tooltip--enter': animating }]"
        :style="tooltipStyle"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <div class="z-tooltip__arrow" :style="arrowStyle"></div>
        <div class="z-tooltip__content">{{ content }}</div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'ZTooltip' })

const props = withDefaults(
  defineProps<{
    content: string
    placement?: 'top' | 'bottom' | 'left' | 'right'
    trigger?: 'hover' | 'click'
    maxWidth?: number | string
  }>(),
  {
    placement: 'top',
    trigger: 'hover',
    maxWidth: 280
  }
)

const visible = ref(false)
const animating = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLElement | null>(null)
const currentPlacement = ref(props.placement)

let showTimeout: ReturnType<typeof setTimeout> | null = null
let hideTimeout: ReturnType<typeof setTimeout> | null = null

const tooltipStyle = ref<Record<string, string>>({ display: 'none' })
const arrowStyle = ref<Record<string, string>>({})

function clearTimers() {
  if (showTimeout) { clearTimeout(showTimeout); showTimeout = null }
  if (hideTimeout) { clearTimeout(hideTimeout); hideTimeout = null }
}

function onMouseEnter() {
  if (props.trigger !== 'hover') return
  clearTimers()
  showTimeout = setTimeout(show, 200)
}

function onMouseLeave() {
  if (props.trigger !== 'hover') return
  clearTimers()
  hideTimeout = setTimeout(hide, 150)
}

function onClick() {
  if (props.trigger !== 'click') return
  if (visible.value) {
    hide()
  } else {
    show()
  }
}

function onDocumentClick(e: MouseEvent) {
  if (props.trigger !== 'click' || !visible.value) return
  const wrapper = wrapperRef.value
  const tooltip = tooltipRef.value
  if (tooltip && tooltip.contains(e.target as Node)) return
  if (!wrapper || wrapper.contains(e.target as Node)) return
  hide()
}

function onScroll() {
  if (props.trigger !== 'click' || !visible.value) return
  hide()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('scroll', onScroll, true)
  document.addEventListener('wheel', onScroll, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('scroll', onScroll, true)
  document.removeEventListener('wheel', onScroll)
})

const ARROW_SIZE = 8
const ARROW_HALF = ARROW_SIZE / 2
const GAP = 4

function show() {
  visible.value = true
  currentPlacement.value = props.placement
  nextTick(() => {
    updatePosition()
    animating.value = true
  })
}

function hide() {
  animating.value = false
  visible.value = false
}

async function updatePosition() {
  const wrapper = wrapperRef.value
  const tooltip = tooltipRef.value
  if (!wrapper || !tooltip) return

  // Make tooltip lay out naturally but stay hidden for measurement.
  tooltip.style.display = ''
  tooltip.style.visibility = 'hidden'
  tooltip.getBoundingClientRect() // force reflow

  const tooltipRect = tooltip.getBoundingClientRect()
  const wrapperRect = wrapper.getBoundingClientRect()

  tooltip.style.visibility = ''
  tooltip.style.display = 'none'

  const placement = currentPlacement.value
  let top = 0, left = 0
  let arrowTop = '', arrowLeft = ''

  switch (placement) {
    case 'top': {
      left = wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2
      top = wrapperRect.top - tooltipRect.height - GAP
      arrowTop = `calc(100% - ${ARROW_HALF}px)`
      arrowLeft = `${tooltipRect.width / 2 - ARROW_HALF}px`
      break
    }
    case 'bottom': {
      left = wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2
      top = wrapperRect.bottom + GAP
      arrowTop = `${-ARROW_HALF}px`
      arrowLeft = `${tooltipRect.width / 2 - ARROW_HALF}px`
      break
    }
    case 'left': {
      left = wrapperRect.left - tooltipRect.width - GAP
      top = wrapperRect.top + wrapperRect.height / 2 - tooltipRect.height / 2
      arrowTop = `${tooltipRect.height / 2 - ARROW_HALF}px`
      arrowLeft = `calc(100% - ${ARROW_HALF}px)`
      break
    }
    case 'right': {
      left = wrapperRect.right + GAP
      top = wrapperRect.top + wrapperRect.height / 2 - tooltipRect.height / 2
      arrowTop = `${tooltipRect.height / 2 - ARROW_HALF}px`
      arrowLeft = `${-ARROW_HALF}px`
      break
    }
  }

  tooltipStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    position: 'fixed',
    display: '',
    maxWidth: typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  }

  arrowStyle.value = {
    top: arrowTop,
    left: arrowLeft
  }
}
</script>

<style scoped>
.z-tooltip-wrapper {
  display: inline-flex;
  position: relative;
}
</style>

<style>
.z-tooltip {
  position: fixed;
  z-index: 9999;
  min-width: 40px;
  padding: 8px 14px;
  background: #303030;
  color: #fff;
  font-size: 12px;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  line-height: 1.5;
  border-radius: 4px;
  pointer-events: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 90ms ease;
}
.z-tooltip--enter {
  opacity: 1;
}

.z-tooltip__content {
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: left;
  white-space: pre-line;
}

.z-tooltip__arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #303030;
  transform: rotate(45deg);
}
</style>
