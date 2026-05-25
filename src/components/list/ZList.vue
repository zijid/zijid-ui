<template>
  <ul class="z-list">
    <li v-for="item in items" :key="item.id" class="z-list__item" :class="{ 'z-list__item--active': item.id === modelValue }" @click="emit('update:modelValue', item.id)">
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
  id: string
  label: string
  icon?: IconName
}

defineProps<{
  modelValue?: string
  items: ListItem[]
}>()

const emit = defineEmits<{ 'update:modelValue': [id: string] }>()
</script>
