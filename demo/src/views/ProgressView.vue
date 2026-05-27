<template>
  <div class="demo-page">
    <h1>ZProgress 进度条</h1>
    <p class="desc">Windows 10 风格的进度条组件，支持固定值和动态值两种模式。</p>

    <div class="demo-section">
      <h2>不同进度值</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch; max-width: 500px;">
        <div class="progress-item">
          <label>25%</label>
          <ZProgress :value="25" />
        </div>
        <div class="progress-item">
          <label>50%</label>
          <ZProgress :value="50" />
        </div>
        <div class="progress-item">
          <label>75%</label>
          <ZProgress :value="75" />
        </div>
        <div class="progress-item">
          <label>100%</label>
          <ZProgress :value="100" />
        </div>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>动态进度演示</h2>
      <div class="preview-box" style="flex-direction: column; align-items: flex-start; max-width: 500px;">
        <div class="progress-item" style="width: 100%;">
          <label>当前进度: {{ progressValue }}%</label>
          <ZProgress :value="progressValue" />
        </div>
        <div class="btn-group">
          <ZButton @click="startProgress" :disabled="isRunning">开始</ZButton>
          <ZButton @click="resetProgress" :disabled="!isRunning && progressValue === 0">重置</ZButton>
        </div>
      </div>
      <ZCodeBlock :code="dynamicCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="progressProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZProgress, ZButton } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const progressValue = ref(0)
const isRunning = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

const startProgress = () => {
  if (isRunning.value) return
  isRunning.value = true
  timer = setInterval(() => {
    if (progressValue.value >= 100) {
      clearInterval(timer!)
      timer = null
      isRunning.value = false
      return
    }
    progressValue.value += 5
  }, 200)
}

const resetProgress = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  progressValue.value = 0
  isRunning.value = false
}

const basicCode = `<ZProgress :value="25" />
<ZProgress :value="50" />
<ZProgress :value="75" />
<ZProgress :value="100" />`

const dynamicCode = `<script setup>
import { ref } from 'vue'
import { ZProgress } from 'zijid-ui'

const value = ref(0)
const timer = setInterval(() => {
  if (value.value >= 100) {
    clearInterval(timer)
    return
  }
  value.value += 5
}, 200)
<\/script>

<template>
  <ZProgress :value="value" />
</template>`

const progressProps = [
  { name: 'value', type: 'number', default: '0', description: '进度值，范围 0-100' }
]
</script>

<style scoped>
.progress-item label { font-size: 14px; font-weight: 500; color: #374151; display: block; margin-bottom: 8px; }
.btn-group { display: flex; gap: 12px; }
</style>
