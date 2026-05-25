<template>
  <div id="app">
    <AppLayout />
  </div>
</template>

<script setup lang="ts">
import AppLayout from './components/AppLayout.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f8fafc;
  color: #1a202c;
}

#app {
  min-height: 100vh;
}
</style>
