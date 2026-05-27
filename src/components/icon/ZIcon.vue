<template>
  <svg
    class="z-icon"
    :style="iconStyle"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="path in paths" :key="path" :d="path" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { iconPaths, type IconName } from './icons'

defineOptions({ name: 'ZIcon' })

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number | string
    color?: string
    strokeWidth?: number
  }>(),
  {
    size: 16,
    color: 'currentColor',
    strokeWidth: 2
  }
)

const paths = computed(() => iconPaths[props.name] ?? iconPaths.info)
const iconStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size,
  color: props.color
}))
</script>
