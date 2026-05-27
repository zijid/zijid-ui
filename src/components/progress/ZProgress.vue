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

<style scoped>
.z-progress {
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.z-progress__bar {
  height: 100%;
  background-color: #0078d4;
  border-radius: 2px;
  transition: width 0.15s ease;
}
</style>
