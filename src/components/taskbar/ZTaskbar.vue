<template>
  <footer class="z-taskbar">
    <button class="z-taskbar__start" type="button" @click="emit('start')">
      <ZIcon name="window" :size="18" />
    </button>
    <div class="z-taskbar__apps">
      <button
        v-for="item in windows"
        :key="item.id"
        class="z-taskbar__app"
        :class="{ 'z-taskbar__app--active': item.active }"
        type="button"
        @click="emit('select', item.id)"
      >
        <ZIcon :name="item.icon ?? 'window'" :size="16" />
        <span>{{ item.title }}</span>
      </button>
    </div>
    <div class="z-taskbar__tray">
      <slot name="tray">{{ time }}</slot>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZTaskbar' })

defineProps<{
  windows: Array<{ id: string; title: string; active?: boolean; icon?: IconName }>
  time?: string
}>()

const emit = defineEmits<{
  start: []
  select: [id: string]
}>()
</script>
