<template>
  <ul class="z-tree">
    <ZTreeNode v-for="item in items" :key="item.id" :item="item" :selected-id="modelValue" @select="emit('update:modelValue', $event)" />
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
}>()

const emit = defineEmits<{ 'update:modelValue': [id: string] }>()
</script>
