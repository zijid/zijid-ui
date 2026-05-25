<template>
  <label class="z-checkbox" :class="{ 'z-checkbox--disabled': disabled }">
    <input
      class="z-checkbox__input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="z-checkbox__box"></span>
    <span class="z-checkbox__label"><slot>{{ label }}</slot></span>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZCheckbox' })

withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    disabled?: boolean
  }>(),
  {
    modelValue: false,
    disabled: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
