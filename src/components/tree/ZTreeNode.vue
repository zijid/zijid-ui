<template>
  <li class="z-tree__node">
    <button
      class="z-tree__row"
      :class="{ 'z-tree__row--active': item.id === selectedId }"
      type="button"
      @click="emit('select', item.id)"
    >
      <span class="z-tree__twisty" @click.stop="toggle">
        <ZIcon v-if="hasChildren" :name="open ? 'chevron-down' : 'chevron-right'" :size="14" />
      </span>
      <ZIcon v-if="item.icon" :name="item.icon" :size="16" />
      <span class="z-tree__label">{{ item.label }}</span>
    </button>
    <ul v-if="hasChildren && open" class="z-tree__children">
      <ZTreeNode
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :selected-id="selectedId"
        :default-expanded-ids="defaultExpandedIds"
        @select="emit('select', $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { TreeItem } from './ZTree.vue'

defineOptions({ name: 'ZTreeNode' })

const props = defineProps<{
  item: TreeItem
  selectedId?: string
  defaultExpandedIds?: string[]
}>()

const emit = defineEmits<{
  select: [id: string]
}>()

const hasChildren = computed(() => !!(props.item.children?.length))

const open = ref(props.defaultExpandedIds
  ? props.defaultExpandedIds.includes(props.item.id)
  : true
)

function toggle() {
  open.value = !open.value
}
</script>

<style>
/* Win10 Fluent Design Tree Node */
.z-tree__node {
  list-style: none;
}

.z-tree__row {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 28px;
  padding: 0 4px;
  border: none;
  background: transparent;
  color: #1b1a19;
  font-family: inherit;
  font-size: inherit;
  line-height: 1;
  text-align: left;
  cursor: default;
  outline: none;
  white-space: nowrap;
  transition: background-color 90ms ease-out;
}
.z-tree__row:hover {
  background: #2b88d8;
  color: #ffffff;
}
.z-tree__row:active {
  background: #106ebe;
  color: #ffffff;
}
.z-tree__row:focus-visible {
  outline: 1px dotted #1b1a19;
  outline-offset: -3px;
}
.z-tree__row--active {
  background: #f0f0f0;
  color: #1b1a19;
}

.z-tree__twisty {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  cursor: default;
}

.z-tree__label {
  overflow: hidden;
  text-overflow: ellipsis;
}

.z-tree__children {
  list-style: none;
  margin: 0;
  padding: 0 0 0 20px;
}
</style>
