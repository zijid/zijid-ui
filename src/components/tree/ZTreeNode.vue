<template>
  <li class="z-tree__node">
    <button class="z-tree__row" :class="{ 'z-tree__row--active': item.id === selectedId }" type="button" @click="emit('select', item.id)">
      <span class="z-tree__twisty" @click.stop="open = !open">{{ item.children?.length ? (open ? '▾' : '▸') : '' }}</span>
      <ZIcon v-if="item.icon" :name="item.icon" :size="16" />
      <span>{{ item.label }}</span>
    </button>
    <ul v-if="item.children?.length && open" class="z-tree__children">
      <ZTreeNode v-for="child in item.children" :key="child.id" :item="child" :selected-id="selectedId" @select="emit('select', $event)" />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { TreeItem } from './ZTree.vue'

defineOptions({ name: 'ZTreeNode' })

defineProps<{
  item: TreeItem
  selectedId?: string
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const open = ref(true)
</script>
