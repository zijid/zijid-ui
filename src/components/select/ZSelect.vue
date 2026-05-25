<template>
  <label class="z-select">
    <span v-if="label" class="z-select__label">{{ label }}</span>
    <select class="z-select__control" :disabled="disabled" :value="modelValue" @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :disabled="option.disabled" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZSelect' })

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    disabled?: boolean
    options: SelectOption[]
  }>(),
  {
    modelValue: '',
    disabled: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
