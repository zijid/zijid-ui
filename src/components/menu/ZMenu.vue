<template>
  <ul class="z-menu">
    <li v-for="item in items" :key="item.id" class="z-menu__item-wrap">
      <hr v-if="item.separator" class="z-menu__separator" />
      <button v-else class="z-menu__item" type="button" :disabled="item.disabled" @click="emit('select', item.id)">
        <ZIcon v-if="item.icon" :name="item.icon" :size="16" />
        <span>{{ item.label }}</span>
        <span v-if="item.shortcut" class="z-menu__shortcut">{{ item.shortcut }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZMenu' })

export type MenuItem = {
  id: string
  label?: string
  icon?: IconName
  shortcut?: string
  disabled?: boolean
  separator?: boolean
}

defineProps<{ items: MenuItem[] }>()

const emit = defineEmits<{ select: [id: string] }>()
</script>

<style>
/* Win10 Fluent Design Menu */
.z-menu {
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

.z-menu__item-wrap {
  list-style: none;
}

.z-menu__item {
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
.z-menu__item:hover:not(:disabled) {
  background: #e5f1fb;
}
.z-menu__item:active:not(:disabled) {
  background: #cce4f7;
}
.z-menu__item:focus-visible:not(:disabled) {
  outline: 1px dotted #1b1a19;
  outline-offset: -3px;
}
.z-menu__item:disabled {
  color: #a19f9d;
  cursor: default;
}

.z-menu__shortcut {
  margin-left: auto;
  padding-left: 24px;
  color: #666;
  font-size: 12px;
}

.z-menu__separator {
  margin: 4px 8px;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>
