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

<style>
/* Win10 Fluent Design List */
.z-list {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  background: #ffffff;
  border: 1px solid #d2d0ce;
  border-radius: 2px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
  user-select: none;
  min-width: 160px;
  outline: none;
}

.z-list__item {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 28px;
  padding: 0 8px;
  margin: 1px 4px;
  border: none;
  background: transparent;
  border-radius: 2px;
  color: #1b1a19;
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
  cursor: default;
  outline: none;
  white-space: nowrap;
  transition: background-color 90ms ease-out;
}
.z-list__item:hover {
  background: #2b88d8;
  color: #ffffff;
}
.z-list__item:active {
  background: #106ebe;
  color: #ffffff;
}
.z-list__item:focus-visible {
  outline: 1px dotted #1b1a19;
  outline-offset: -3px;
}
.z-list__item--active {
  background: #0078d4;
  color: #ffffff;
}
.z-list__item--active:hover {
  background: #106ebe;
}
.z-list__item--active:active {
  background: #005a9e;
}
.z-list__item--active:focus-visible {
  outline-color: #ffffff;
}

.z-list__item span {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
