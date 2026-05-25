<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Dialog 组件展示</h2>
      <p>Windows 10 风格的对话框样式和交互</p>
      
      <div class="demo-controls">
        <div class="dialog-group">
          <ZButton variant="primary" @click="showDefaultDialog">打开默认对话框</ZButton>
          <ZButton variant="default" @click="showInfoDialog">打开信息对话框</ZButton>
          <ZButton variant="danger" @click="showErrorDialog">打开错误对话框</ZButton>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="dialog-group">
          <ZButton @click="showConfirmDialog">确认对话框</ZButton>
          <ZButton variant="primary" disabled>禁用按钮</ZButton>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 对话框组件</p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
            <ZButton variant="primary" @click="showDefaultDialog">默认对话框</ZButton>
            <ZButton variant="default" @click="showInfoDialog">信息对话框</ZButton>
            <ZButton variant="danger" @click="showErrorDialog">错误对话框</ZButton>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 默认对话框 -->
    <ZDialog v-model:open="defaultDialogOpen" title="默认对话框">
      <template #body>
        <p>这是一个默认的对话框示例。</p>
        <p>您可以在这里放置任何内容。</p>
      </template>
      <template #footer>
        <ZButton @click="defaultDialogOpen = false">确定</ZButton>
        <ZButton variant="primary" @click="defaultDialogOpen = false">确认</ZButton>
      </template>
    </ZDialog>
    
    <!-- 信息对话框 -->
    <ZDialog v-model:open="infoDialogOpen" title="信息">
      <template #body>
        <p>这是一条信息提示。</p>
        <p>操作已成功完成。</p>
      </template>
      <template #footer>
        <ZButton variant="primary" @click="infoDialogOpen = false">确定</ZButton>
      </template>
    </ZDialog>
    
    <!-- 错误对话框 -->
    <ZDialog v-model:open="errorDialogOpen" title="错误">
      <template #body>
        <p>操作失败！</p>
        <p>请检查您的输入并重试。</p>
      </template>
      <template #footer>
        <ZButton @click="errorDialogOpen = false">取消</ZButton>
        <ZButton variant="danger" @click="errorDialogOpen = false">重试</ZButton>
      </template>
    </ZDialog>
    
    <!-- 确认对话框 -->
    <ZDialog v-model:open="confirmDialogOpen" title="确认操作">
      <template #body>
        <p>您确定要执行此操作吗？</p>
        <p>此操作无法撤销。</p>
      </template>
      <template #footer>
        <ZButton @click="confirmDialogOpen = false">取消</ZButton>
        <ZButton variant="primary" @click="handleConfirm">确认</ZButton>
      </template>
    </ZDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZDialog } from 'zijid-ui'

// 对话框状态
const defaultDialogOpen = ref(false)
const infoDialogOpen = ref(false)
const errorDialogOpen = ref(false)
const confirmDialogOpen = ref(false)

// 打开默认对话框
const showDefaultDialog = () => {
  defaultDialogOpen.value = true
}

// 打开信息对话框
const showInfoDialog = () => {
  infoDialogOpen.value = true
}

// 打开错误对话框
const showErrorDialog = () => {
  errorDialogOpen.value = true
}

// 打开确认对话框
const showConfirmDialog = () => {
  confirmDialogOpen.value = true
}

// 处理确认操作
const handleConfirm = () => {
  alert('操作已确认！')
  confirmDialogOpen.value = false
}
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  background: var(--z-surface-raised);
  border: 1px solid var(--z-border);
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
}

.demo-section h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--z-text);
  margin: 0 0 16px 0;
}

.demo-section p {
  color: var(--z-text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.demo-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.dialog-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.preview-box {
  background: var(--z-surface);
  border: 1px solid var(--z-border);
  border-radius: 8px;
  padding: 32px;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
