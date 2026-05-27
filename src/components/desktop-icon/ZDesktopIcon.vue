<template>
  <button
    class="z-desktop-icon"
    :class="{
      'z-desktop-icon--hovered': hovered,
      'z-desktop-icon--pressed': pressed,
      'z-desktop-icon--selected': isSelected,
      'z-desktop-icon--disabled': disabled,
    }"
    type="button"
    :disabled="disabled"
    @click="handleClick"
    @dblclick="handleDblClick"
    @contextmenu.prevent="emit('contextmenu', $event)"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false; pressed = false"
    @mousedown="pressed = true"
    @mouseup="pressed = false"
  >
    <div class="z-desktop-icon__icon">
      <ZIcon :name="icon" :size="32" />
    </div>
    <span class="z-desktop-icon__label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ZIcon from '../icon/ZIcon.vue'
import type { IconName } from '../icon/icons'

defineOptions({ name: 'ZDesktopIcon' })

const props = defineProps<{
  label: string
  icon: IconName
  /** 是否选中（单击选中状态），由父组件控制 */
  selected?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  select: []
  open: []
  contextmenu: [event: MouseEvent]
}>()

const hovered = ref(false)
const pressed = ref(false)

const isSelected = computed(() => props.selected === true)

function handleClick() {
  emit('select')
}

function handleDblClick() {
  emit('open')
}
</script>

<style>
/* ========================================
   ZDesktopIcon - Win10 Desktop Icon
   ======================================== */

/* ---------- Default (idle) ---------- */
.z-desktop-icon {
  --zdi-selected-bg: rgba(0, 120, 212, 0.30);
  --zdi-selected-border: rgba(0, 120, 212, 0.55);
  --zdi-hover-bg: rgba(255, 255, 255, 0.07);
  --zdi-pressed-bg: rgba(0, 90, 158, 0.50);

  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 5px 7px 4px;
  min-width: 72px;
  max-width: 88px;

  border: 1px solid transparent;
  border-radius: 2px;
  background: transparent;
  cursor: default;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.2;
  color: #ffffff;

  transition:
    background-color 90ms ease-out,
    border-color 90ms ease-out;
}

/* ---------- Hover ---------- */
.z-desktop-icon:hover:not(:disabled),
.z-desktop-icon--hovered:not(:disabled) {
  background: var(--zdi-hover-bg);
}

/* ---------- Selected (single click) ---------- */
.z-desktop-icon--selected {
  background: var(--zdi-selected-bg);
  border-color: var(--zdi-selected-border);
}

.z-desktop-icon--selected:hover:not(:disabled) {
  background: rgba(0, 120, 212, 0.42);
  border-color: rgba(0, 120, 212, 0.65);
}

/* ---------- Pressed (during mousedown) ---------- */
.z-desktop-icon--pressed:not(.z-desktop-icon--selected) {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.20);
}

.z-desktop-icon--selected.z-desktop-icon--pressed {
  background: var(--zdi-pressed-bg);
  border-color: rgba(0, 90, 158, 0.65);
}

/* ---------- Focus visible ---------- */
.z-desktop-icon:focus-visible:not(:disabled) {
  outline: 1px dotted #ffffff;
  outline-offset: -1px;
}

/* ---------- Disabled ---------- */
.z-desktop-icon--disabled {
  opacity: 0.40;
  cursor: default;
  pointer-events: none;
}

/* ---------- Icon area ---------- */
.z-desktop-icon__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  pointer-events: none;
}

/* ---------- Label text ---------- */
.z-desktop-icon__label {
  text-align: center;
  word-break: break-word;
  overflow-wrap: break-word;
  text-shadow:
    0 1px 3px rgba(0, 0, 0, 0.70),
    0 0 2px rgba(0, 0, 0, 0.50);
  max-width: 100%;
  pointer-events: none;
  line-height: 1.2;
}
</style>
