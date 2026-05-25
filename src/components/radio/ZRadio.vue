<template>
  <label class="z-radio" :class="{ 'z-radio--disabled': disabled }">
    <input class="z-radio__input" type="radio" :checked="modelValue === value" :disabled="disabled" @change="emit('update:modelValue', value)" />
    <span class="z-radio__dot"></span>
    <span><slot>{{ label }}</slot></span>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZRadio' })

defineProps<{
  modelValue?: string
  value: string
  label?: string
  disabled?: boolean
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
