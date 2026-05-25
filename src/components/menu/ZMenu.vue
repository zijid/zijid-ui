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
