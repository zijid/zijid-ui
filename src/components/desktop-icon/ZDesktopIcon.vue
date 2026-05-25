<template>
  <button
    class="z-desktop-icon"
    :class="{ 'z-desktop-icon--selected': selected }"
    type="button"
    @click="emit('select')"
    @dblclick="emit('open')"
    @contextmenu.prevent="emit('contextmenu', $event)"
  >
    <ZIcon :name="icon" :size="32" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZDesktopIcon' })

defineProps<{
  label: string
  icon: IconName
  selected?: boolean
}>()

const emit = defineEmits<{
  select: []
  open: []
  contextmenu: [event: MouseEvent]
}>()
</script>
