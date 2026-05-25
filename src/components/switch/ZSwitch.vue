<template>
  <button class="z-switch" :class="{ 'z-switch--checked': modelValue }" type="button" :disabled="disabled" @click="toggle">
    <span class="z-switch__track">
      <span class="z-switch__thumb"></span>
    </span>
    <span v-if="label" class="z-switch__label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZSwitch' })

const props = withDefaults(
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

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>
