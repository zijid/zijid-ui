<template>
  <div class="simple-window-demo">
    <h1>简单窗口组件演示</h1>
    
    <div class="demo-controls">
      <button @click="openWindow" class="btn btn-primary">打开窗口</button>
      <button @click="openMaximizedWindow" class="btn btn-secondary">打开最大化窗口</button>
      <button @click="openMultipleWindows" class="btn btn-info">打开多个窗口</button>
    </div>

    <SimpleWindow
      v-model="windowVisible"
      title="简单窗口"
      :x="windowX"
      :y="windowY"
      :width="400"
      :height="300"
      @close="windowVisible = false"
    >
      <div class="window-content">
        <h2>这是一个简单的窗口</h2>
        <p>这个窗口组件具有以下功能：</p>
        <ul>
          <li>拖拽移动</li>
          <li>最小化/最大化/关闭</li>
          <li>层级管理</li>
          <li>响应式布局</li>
        </ul>
        <div class="demo-buttons">
          <button @click="showAlert" class="btn btn-primary">显示提示</button>
          <button @click="closeWindow" class="btn btn-danger">关闭窗口</button>
        </div>
      </div>
    </SimpleWindow>

    <SimpleWindow
      v-model="maximizedWindowVisible"
      title="最大化窗口"
      :maximized="true"
      @close="maximizedWindowVisible = false"
    >
      <div class="window-content">
        <h2>这是最大化窗口</h2>
        <p>这个窗口以最大化状态打开，占据了整个屏幕空间。</p>
        <div class="demo-buttons">
          <button @click="showMaximizedAlert" class="btn btn-primary">显示提示</button>
          <button @click="closeMaximizedWindow" class="btn btn-danger">关闭窗口</button>
        </div>
      </div>
    </SimpleWindow>

    <SimpleWindow
      v-for="(window, index) in multipleWindows"
      :key="index"
      v-model="window.visible"
      :title="`窗口 ${index + 1}`"
      :x="window.x"
      :y="window.y"
      :width="300"
      :height="250"
      @close="closeMultipleWindow(index)"
    >
      <div class="window-content">
        <h2>多窗口 {{ index + 1 }}</h2>
        <p>这是第 {{ index + 1 }} 个窗口。</p>
        <div class="demo-buttons">
          <button @click="showWindowAlert(index)" class="btn btn-primary">显示提示</button>
          <button @click="closeMultipleWindow(index)" class="btn btn-danger">关闭窗口</button>
        </div>
      </div>
    </SimpleWindow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SimpleWindow from './SimpleWindow.vue'

const windowVisible = ref(false)
const maximizedWindowVisible = ref(false)
const windowX = ref(100)
const windowY = ref(100)

const multipleWindows = ref([
  { visible: false, x: 200, y: 150 },
  { visible: false, x: 400, y: 200 },
  { visible: false, x: 300, y: 300 }
])

function openWindow() {
  windowVisible.value = true
}

function openMaximizedWindow() {
  maximizedWindowVisible.value = true
}

function openMultipleWindows() {
  multipleWindows.value.forEach((window, index) => {
    window.visible = true
    window.x = 200 + index * 50
    window.y = 150 + index * 50
  })
}

function closeWindow() {
  windowVisible.value = false
}

function closeMaximizedWindow() {
  maximizedWindowVisible.value = false
}

function closeMultipleWindow(index: number) {
  multipleWindows.value[index].visible = false
}

function showAlert() {
  alert('这是一个简单的提示框！')
}

function showMaximizedAlert() {
  alert('这是最大化窗口的提示框！')
}

function showWindowAlert(index: number) {
  alert(`这是窗口 ${index + 1} 的提示框！`)
}
</script>

<style scoped>
.simple-window-demo {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.demo-controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #1890ff;
  color: white;
}

.btn-primary:hover {
  background-color: #40a9ff;
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #d9d9d9;
}

.btn-secondary:hover {
  background-color: #e6e6e6;
}

.btn-info {
  background-color: #13c2c2;
  color: white;
}

.btn-info:hover {
  background-color: #36cfc9;
}

.btn-danger {
  background-color: #ff4d4f;
  color: white;
}

.btn-danger:hover {
  background-color: #ff7875;
}

.window-content {
  padding: 16px;
  color: #333;
}

.window-content h2 {
  margin-top: 0;
  color: #1890ff;
}

.window-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.window-content li {
  margin-bottom: 5px;
}

.demo-buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}
</style>
