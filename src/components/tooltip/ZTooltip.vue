<template>
  <div class="z-tooltip-wrapper" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot />
    <Transition name="tooltip-fade">
      <div
        v-if="visible"
        class="z-tooltip"
        :class="[placementProps.positionClass]"
      >
        <div class="z-tooltip-content" :style="contentStyle">
          {{ content }}
        </div>
        <div class="z-tooltip-arrow" :class="placementProps.arrowClass" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from 'vue'

interface Props {
  content: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  maxWidth?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  placement: 'top',
  maxWidth: 280,
})

const visible = ref(false)
let showTimer: ReturnType<typeof setTimeout> | null = null
const hideDelay = 150

const placementProps = computed(() => {
  const map: Record<string, Record<string, string>> = {
    top: {
      positionClass: 'tooltip-top',
      arrowClass: 'arrow-bottom',
    },
    bottom: {
      positionClass: 'tooltip-bottom',
      arrowClass: 'arrow-top',
    },
    left: {
      positionClass: 'tooltip-left',
      arrowClass: 'arrow-right',
    },
    right: {
      positionClass: 'tooltip-right',
      arrowClass: 'arrow-left',
    },
  }
  return map[props.placement] || map.top
})

const contentStyle = computed<CSSProperties>(() => {
  const maxWidth = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  return { maxWidth }
})

function showTooltip() {
  if (showTimer) clearTimeout(showTimer)
  visible.value = true
}

function hideTooltip() {
  showTimer = setTimeout(() => {
    visible.value = false
  }, hideDelay)
}
</script>

<style scoped>
.z-tooltip-wrapper {
  position: relative;
  display: inline-flex;
}

.z-tooltip {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}

.z-tooltip-content {
  background: #404040;
  color: #ffffff;
  font-size: 13px;
  line-height: 1.5;
  padding: 6px 12px;
  border-radius: 4px;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 280px;
}

.z-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

/* ── Top ── */
.tooltip-top {
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-top .z-tooltip-arrow.arrow-bottom {
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #404040;
}

/* ── Bottom ── */
.tooltip-bottom {
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-bottom .z-tooltip-arrow.arrow-top {
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #404040;
}

/* ── Left ── */
.tooltip-left {
  right: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-left .z-tooltip-arrow.arrow-right {
  left: 100%;
  top: 50%;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #404040;
}

/* ── Right ── */
.tooltip-right {
  left: calc(100% + 5px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip-right .z-tooltip-arrow.arrow-left {
  right: 100%;
  top: 50%;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #404040;
}

/* ── Transition ── */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.15s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>
