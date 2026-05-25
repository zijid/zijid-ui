<template>
  <ul v-if="visible" class="z-context-menu" :style="{ left: `${x}px`, top: `${y}px` }">
    <li v-for="item in items" :key="item.id">
      <hr v-if="item.separator" />
      <button v-else type="button" :disabled="item.disabled" @click="emit('select', item.id)">
        <ZIcon v-if="item.icon" :name="item.icon" :size="16" />
        <span>{{ item.label }}</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
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

defineProps<{
  visible?: boolean
  x: number
  y: number
  items: ContextMenuItem[]
}>()

const emit = defineEmits<{
  select: [id: string]
}>()
</script>
