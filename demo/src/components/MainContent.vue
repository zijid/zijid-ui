<template>
  <main class="main-content">
    <router-view />
  </main>
</template>

<script setup lang="ts">
// 主内容区域，由路由控制显示哪个组件页面
</script>

<style scoped>
.main-content {
  flex: 1;
  margin-left: 240px;
  background: #f8fafc;
  min-height: 100vh;
}
</style>
