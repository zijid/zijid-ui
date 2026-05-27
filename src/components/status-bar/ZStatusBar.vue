<template>
  <footer class="z-status-bar">
    <slot />
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'ZStatusBar' })
</script>

<style>
/* Win10 Fluent Design Status Bar */
.z-status-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 24px;
  padding: 0 10px;
  background: #f0f0f0;
  border-top: 1px solid #d0d0d0;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px;
  color: #555;
  user-select: none;
}
</style>
