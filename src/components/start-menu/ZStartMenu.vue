<template>
  <aside v-if="visible" class="z-start-menu">
    <header class="z-start-menu__search">
      <input :value="search" placeholder="搜索应用" @input="emit('update:search', ($event.target as HTMLInputElement).value)" />
    </header>
    <div class="z-start-menu__apps">
      <button v-for="app in apps" :key="app.id" type="button" @click="emit('open', app.id)">
        <ZIcon :name="app.icon ?? 'window'" :size="20" />
        <span>{{ app.title }}</span>
      </button>
    </div>
    <footer class="z-start-menu__footer">
      <slot name="footer">zijid-ui</slot>
    </footer>
  </aside>
</template>

<script setup lang="ts">
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZStartMenu' })

defineProps<{
  visible?: boolean
  search?: string
  apps: Array<{ id: string; title: string; icon?: IconName }>
}>()

const emit = defineEmits<{
  open: [id: string]
  'update:search': [value: string]
}>()
</script>
