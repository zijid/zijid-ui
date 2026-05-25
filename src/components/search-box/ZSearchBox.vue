<template>
  <label class="z-search-box">
    <ZIcon name="search" :size="16" />
    <input :placeholder="placeholder" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <button v-if="modelValue" type="button" @click="emit('update:modelValue', '')">
      <ZIcon name="close" :size="14" />
    </button>
  </label>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'

defineOptions({ name: 'ZSearchBox' })

withDefaults(defineProps<{ modelValue?: string; placeholder?: string }>(), {
  modelValue: '',
  placeholder: '搜索'
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
