<template>
  <div class="app-layout">
    <Sidebar />
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import MainContent from './MainContent.vue'
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}
</style>
