<template>
  <div class="demo-page">
    <h1>ZToast 消息提示</h1>
    <p class="desc">全局通知提示，支持同时显示多条消息。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZButton @click="showInfo">普通提示</ZButton>
        <ZButton type="primary" @click="showSuccess">成功提示</ZButton>
        <ZButton @click="showWarning">警告提示</ZButton>
        <ZButton type="danger" @click="showError">错误提示</ZButton>
      </div>

      <div class="preview-box">
        <ZButton @click="showMultiple">同时显示多条</ZButton>
      </div>

      <!-- Toast 容器 -->
      <ZToastContainer :toasts="toasts" :close="close" />

      <ZCodeBlock :code="code" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="toastProps" 
        :events="toastEvents" 
        :slots="toastSlots" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZButton, ZToastContainer, useToast, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const { toasts, show, close, clear } = useToast()

function showInfo() {
  show({ title: '提示', message: '这是一条普通提示消息', type: 'info' })
}

function showSuccess() {
  show({ title: '成功', message: '操作已成功完成', type: 'success' })
}

function showWarning() {
  show({ title: '警告', message: '请注意操作安全', type: 'warning' })
}

function showError() {
  show({ title: '错误', message: '操作失败，请重试', type: 'error', duration: 0 })
}

function showMultiple() {
  show({ title: '消息', message: '开始加载..', type: 'info', duration: 3000 })
  setTimeout(() => {
    show({ title: '成功', message: '任务 1 完成', type: 'success', duration: 3000 })
  }, 500)
  setTimeout(() => {
    show({ title: '警告', message: '任务 2 需要确认', type: 'warning', duration: 4000 })
  }, 1000)
  setTimeout(() => {
    show({ title: '完成', message: '全部任务已完成', type: 'success', duration: 5000 })
  }, 1500)
}

const toastProps = [
  { name: 'title', type: 'string', default: '-', description: '提示标题' },
  { name: 'message', type: 'string', default: '-', description: '提示信息内容' },
  { name: 'type', type: "'info'|'success'|'warning'|'error'", default: "'info'", description: '提示类型' },
  { name: 'duration', type: 'number', default: '4000', description: '自动关闭时间，0为不关闭' }
]

const toastEvents = [
  { name: 'update:visible', params: ['value: boolean'], description: '可见性变化' }
]

const toastSlots = [
  { name: 'default', description: '默认插槽', default: true }
]

const code =
  `<template>
  <ZToastContainer :toasts="toasts" :close="close" />
</template>

<script setup>
import { ZToastContainer, useToast } from 'zijid-ui'
const { toasts, show, close } = useToast()

show({ title: '提示', message: '操作成功', type: 'success' })
<\/script>`
</script>

<style scoped>
</style>
