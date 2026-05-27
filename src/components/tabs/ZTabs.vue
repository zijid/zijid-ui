<template>
  <section class="z-tabs">
    <div class="z-tabs__nav" role="tablist">
      <button
        v-for="item in items"
        :key="item.value"
        class="z-tabs__tab"
        :class="{ 'z-tabs__tab--active': item.value === modelValue }"
        type="button"
        role="tab"
        @click="emit('update:modelValue', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <div class="z-tabs__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZTabs' })

export type TabItem = {
  label: string
  value: string
}

defineProps<{
  modelValue: string
  items: TabItem[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style>
/* Win10 Fluent Design Tabs */
.z-tabs {
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px;
  color: #1b1a19;
}

.z-tabs__nav {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #e0e0e0;
  padding: 0;
}

.z-tabs__tab {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border: none;
  background: transparent;
  color: #555;
  font-family: inherit;
  font-size: 13px;
  line-height: 24px;
  cursor: default;
  outline: none;
  white-space: nowrap;
  position: relative;
  transition:
    color 90ms ease-out,
    background-color 90ms ease-out;
}
.z-tabs__tab:hover {
  background: #e5f1fb;
  color: #1b1a19;
}
.z-tabs__tab:active {
  background: #cce4f7;
}
.z-tabs__tab:focus-visible {
  outline: 1px dotted #1b1a19;
  outline-offset: -3px;
}

.z-tabs__tab--active {
  color: #1b1a19;
  font-weight: 500;
}
.z-tabs__tab--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 8px;
  right: 8px;
  height: 2px;
  background: #0078d4;
}

.z-tabs__body {
  padding: 16px 0;
  font-size: 13px;
  line-height: 1.6;
  color: #333;
}
</style>
