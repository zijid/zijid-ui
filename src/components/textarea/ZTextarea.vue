<template>
  <label class="z-textarea">
    <span v-if="label" class="z-textarea__label">{{ label }}</span>
    <textarea class="z-textarea__control" :rows="rows" :placeholder="placeholder" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"></textarea>
  </label>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZTextarea' })

withDefaults(defineProps<{ modelValue?: string; label?: string; placeholder?: string; rows?: number }>(), {
  modelValue: '',
  rows: 4
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
