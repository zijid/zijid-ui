<template>
  <ul class="z-tree">
    <ZTreeNode v-for="item in items" :key="item.id" :item="item" :selected-id="modelValue" :default-expanded-ids="defaultExpandedIds" @select="emit('update:modelValue', $event)" />
  </ul>
</template>

<script setup lang="ts">
import type { IconName } from '../icon/icons'
import ZTreeNode from './ZTreeNode.vue'

defineOptions({ name: 'ZTree' })

export type TreeItem = {
  id: string
  label: string
  icon?: IconName
  children?: TreeItem[]
}

defineProps<{
  modelValue?: string
  items: TreeItem[]
  defaultExpandedIds?: string[]
}>()

const emit = defineEmits<{ 'update:modelValue': [id: string] }>()
</script>

<style>
/* Win10 Fluent Design Tree */
.z-tree {
  list-style: none;
  margin: 0;
  padding: 0;
  background: #ffffff;
  border: 1px solid #d2d0ce;
  border-radius: 2px;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
  user-select: none;
  overflow: auto;
}

/* Focused accent override for selected row */
.z-tree:focus-within .z-tree__row--active {
  background: #0078d4;
  color: #ffffff;
}
.z-tree:focus-within .z-tree__row--active:hover {
  background: #2b88d8;
}
.z-tree:focus-within .z-tree__row--active:active {
  background: #106ebe;
}
.z-tree:focus-within .z-tree__row--active:focus-visible {
  outline-color: #ffffff;
}
</style>
