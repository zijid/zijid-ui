<template>
  <label class="z-slider">
    <span v-if="label">{{ label }}</span>
    <input type="range" :min="min" :max="max" :step="step" :value="modelValue" @input="emit('update:modelValue', Number(($event.target as HTMLInputElement).value))" />
    <output>{{ modelValue }}</output>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZSlider' })

withDefaults(defineProps<{ modelValue?: number; min?: number; max?: number; step?: number; label?: string }>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1
})

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
</script>
