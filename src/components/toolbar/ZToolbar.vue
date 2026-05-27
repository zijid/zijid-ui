<template>
  <div class="z-toolbar">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZToolbar' })
</script>

<style>
/* Win10 Fluent Design Toolbar */
.z-toolbar {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  padding: 0 8px;
  background: #f5f5f5;
  border-bottom: 1px solid #d0d0d0;
  font-family: 'Segoe UI', system-ui, sans-serif;
  user-select: none;
}
</style>
