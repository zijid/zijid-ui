<template>
  <div class="z-progress">
    <div class="z-progress__bar" :style="{ width: `${clamped}%` }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'ZProgress' })

const props = withDefaults(defineProps<{ value?: number }>(), { value: 0 })
const clamped = computed(() => Math.min(100, Math.max(0, props.value)))
</script>
