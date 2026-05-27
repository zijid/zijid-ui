<template>
  <ul class="z-list">
    <li v-for="item in items" :key="item.value" class="z-list__item" :class="{ 'z-list__item--active': item.value === modelValue }" @click="emit('update:modelValue', item.value)">
      <ZIcon v-if="item.icon" :name="item.icon" :size="18" />
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZList' })

export type ListItem = {
  value: string
  label: string
  icon?: IconName
  description?: string
}

defineProps<{
  modelValue?: string
  items: ListItem[]
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
