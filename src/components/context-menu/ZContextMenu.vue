<template>
  <ul v-if="isVisible" ref="menuRef" class="z-context-menu" :style="{ left: `${x}px`, top: `${y}px` }" @keydown.esc="close()">
    <li v-for="item in items" :key="item.id">
      <hr v-if="item.separator" />
      <button v-else type="button" :disabled="item.disabled" @click="handleSelect(item.id)">
        <ZIcon v-if="item.icon" :name="item.icon" :size="16" />
        <span>{{ item.label }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZContextMenu' })

export type ContextMenuItem = {
  id: string
  label?: string
  icon?: IconName
  disabled?: boolean
  separator?: boolean
}

const props = defineProps<{
  visible?: boolean
  x: number
  y: number
  items: ContextMenuItem[]
}>()

const emit = defineEmits<{
  select: [id: string]
  close: []
  'update:visible': [value: boolean]
}>()

const menuRef = ref<HTMLElement | null>(null)

// Internal visibility so the menu can close itself independently,
// while still respecting the parent's `visible` prop as initial/override.
const isVisible = ref(false)

watch(() => props.visible, (val) => {
  isVisible.value = val === true
}, { immediate: true })

function close() {
  isVisible.value = false
  emit('close')
  emit('update:visible', false)
}

function handleSelect(id: string) {
  emit('select', id)
  close()
}

function onDocumentClick(event: MouseEvent) {
  if (!menuRef.value) return
  if (!menuRef.value.contains(event.target as Node)) {
    close()
  }
}

// Close on any scroll/wheel action (mouse wheel, trackpad, touch scroll)
function onScroll() {
  close()
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('wheel', onScroll, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('wheel', onScroll)
})
</script>

<style>
/* Win10 Fluent Design Context Menu */
.z-context-menu {
  position: fixed;
  z-index: 2000;
  list-style: none;
  margin: 0;
  padding: 4px 0;
  background: #fafafa;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
  min-width: 160px;
  user-select: none;
}

.z-context-menu li {
  list-style: none;
}

.z-context-menu button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 4px 12px;
  border: none;
  background: transparent;
  color: #1b1a19;
  font-family: inherit;
  font-size: inherit;
  line-height: 24px;
  text-align: left;
  cursor: default;
  outline: none;
  white-space: nowrap;
  transition: background-color 90ms ease-out;
}
.z-context-menu button:hover:not(:disabled) {
  background: #e5f1fb;
}
.z-context-menu button:active:not(:disabled) {
  background: #cce4f7;
}
.z-context-menu button:disabled {
  color: #a19f9d;
  cursor: default;
}

.z-context-menu hr {
  margin: 4px 8px;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>
