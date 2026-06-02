<template>
  <span ref="dropdownRef" class="z-dropdown" :class="[`z-dropdown--${placement}`]">
    <span class="z-dropdown__trigger" :class="{ 'z-dropdown__trigger--active': open }" @click="onTriggerClick" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <slot />
    </span>
    <Transition name="z-dropdown-fade">
      <div v-if="open" class="z-dropdown__content" @click.stop>
        <slot name="content">
          <ZMenu :items="items" @select="select" />
        </slot>
      </div>
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ZMenu, { type MenuItem } from '../menu/ZMenu.vue'

defineOptions({ name: 'ZDropdown' })

const props = withDefaults(
  defineProps<{
    items?: MenuItem[]
    placement?: 'bottom' | 'bottom-start' | 'bottom-end'
    trigger?: 'click' | 'hover'
    disabled?: boolean
  }>(),
  {
    items: () => [],
    placement: 'bottom',
    trigger: 'click',
    disabled: false
  }
)

const emit = defineEmits<{ select: [id: string] }>()
const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
let hoverTimer: ReturnType<typeof setTimeout> | null = null

function toggle() {
  if (props.disabled) return
  open.value = !open.value
}

function onTriggerClick() {
  if (props.trigger === 'click') toggle()
}

function onMouseEnter() {
  if (props.trigger !== 'hover') return
  if (hoverTimer) clearTimeout(hoverTimer)
  if (!props.disabled) open.value = true
}

function onMouseLeave() {
  if (props.trigger !== 'hover') return
  hoverTimer = setTimeout(() => {
    open.value = false
  }, 150)
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
  if (hoverTimer) clearTimeout(hoverTimer)
})
</script>

<style>
/* Win10 Fluent Design Dropdown */
.z-dropdown {
  position: relative;
  display: inline-flex;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  user-select: none;
}

.z-dropdown__trigger {
  display: inline-flex;
  cursor: default;
}
.z-dropdown__trigger--active {
  opacity: 0.85;
}

.z-dropdown__content {
  position: absolute;
  z-index: 2000;
  top: 100%;
  left: 0;
  margin-top: 4px;
  white-space: nowrap;
}

.z-dropdown--bottom-end .z-dropdown__content {
  left: auto;
  right: 0;
}

.z-dropdown--bottom-start .z-dropdown__content {
  left: 0;
  right: auto;
}

/* Transition */
.z-dropdown-fade-enter-active {
  transition: opacity 90ms ease-out, transform 90ms ease-out;
}
.z-dropdown-fade-leave-active {
  transition: opacity 70ms ease-in, transform 70ms ease-in;
}
.z-dropdown-fade-enter-from,
.z-dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.z-dropdown--bottom-end .z-dropdown-fade-enter-from,
.z-dropdown--bottom-end .z-dropdown-fade-leave-to {
  transform: translateY(-4px);
}
</style>
