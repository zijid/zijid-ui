<template>
  <span ref="dropdownRef" class="z-dropdown" @keydown.esc="open = false">
    <span class="z-dropdown__trigger" @click="toggle">
      <slot />
    </span>
    <div v-if="open" class="z-dropdown__content">
      <slot name="content">
        <ZMenu :items="items" @select="select" />
      </slot>
    </div>
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ZMenu, { type MenuItem } from '../menu/ZMenu.vue'

defineOptions({ name: 'ZDropdown' })

withDefaults(defineProps<{ items?: MenuItem[] }>(), { items: () => [] })

const emit = defineEmits<{ select: [id: string] }>()
const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggle() {
  open.value = !open.value
}

function select(id: string) {
  emit('select', id)
  open.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (!dropdownRef.value) return
  if (!dropdownRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>
