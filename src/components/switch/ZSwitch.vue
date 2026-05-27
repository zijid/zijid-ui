<template>
  <button class="z-switch" :class="{ 'z-switch--checked': modelValue }" type="button" :disabled="disabled" @click="toggle">
    <span class="z-switch__track">
      <span class="z-switch__thumb"></span>
    </span>
    <span v-if="label" class="z-switch__label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZSwitch' })

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    disabled?: boolean
  }>(),
  {
    modelValue: false,
    disabled: false
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<style>
/* Win10 Fluent Design Switch */
.z-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: default;
  outline: none;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  user-select: none;
  color: #1b1a19;
}
.z-switch:focus-visible .z-switch__track {
  outline: 1px dotted #1b1a19;
  outline-offset: 3px;
}

/* track -- the background pill */
.z-switch__track {
  position: relative;
  width: 44px;
  height: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: background-color 90ms ease-out, border-color 90ms ease-out;
  flex-shrink: 0;
}

/* thumb -- the circular knob */
.z-switch__thumb {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: left 90ms ease-out;
}

/* checked state */
.z-switch--checked .z-switch__track {
  background: #0078d4;
  border-color: #0078d4;
}
.z-switch--checked .z-switch__thumb {
  left: 25px;
}

/* hover state (unchecked) */
.z-switch:hover:not(:disabled) .z-switch__track {
  border-color: rgba(0, 0, 0, 0.3);
}

/* hover state (checked) */
.z-switch--checked:hover:not(:disabled) .z-switch__track {
  background: #106ebe;
  border-color: #106ebe;
}

/* active / pressed state (checked) */
.z-switch--checked:active:not(:disabled) .z-switch__track {
  background: #005a9e;
  border-color: #005a9e;
}

/* disabled state */
.z-switch:disabled {
  cursor: default;
  opacity: 0.5;
}

/* label next to the switch */
.z-switch__label {
  color: inherit;
  line-height: 1;
}
</style>
