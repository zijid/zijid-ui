<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Checkbox 组件展示</h2>
      <p>Windows 10 风格的复选框样式和交互</p>
      
      <div class="demo-controls">
        <div class="checkbox-group">
          <ZCheckbox>基本复选框</ZCheckbox>
          <ZCheckbox variant="primary">主要复选框</ZCheckbox>
          <ZCheckbox variant="danger">危险复选框</ZCheckbox>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="checkbox-group">
          <ZCheckbox disabled>禁用复选框</ZCheckbox>
          <ZCheckbox variant="primary" disabled>禁用主要复选框</ZCheckbox>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="checkbox-group">
          <ZCheckbox v-model="checked1">选项 1</ZCheckbox>
          <ZCheckbox v-model="checked2">选项 2</ZCheckbox>
          <ZCheckbox v-model="checked3">选项 3</ZCheckbox>
        </div>
        <div class="checkbox-status">
          <p>已选择: {{ [checked1, checked2, checked3].filter(Boolean).join(', ') || '无' }}</p>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="checkbox-group">
          <ZCheckbox v-model="allChecked" @change="toggleAll">全选</ZCheckbox>
          <ZCheckbox v-for="item in items" :key="item.value" v-model="selectedItems" :value="item.value">
            {{ item.label }}
          </ZCheckbox>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 复选框组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <ZCheckbox v-model="demoChecked1">单个复选框</ZCheckbox>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <ZCheckbox v-model="demoChecked2">选项 A</ZCheckbox>
              <ZCheckbox v-model="demoChecked3">选项 B</ZCheckbox>
              <ZCheckbox v-model="demoChecked4">选项 C</ZCheckbox>
            </div>
            <div style="border-top: 1px solid var(--z-border); padding-top: 12px;">
              <p style="font-size: 14px; color: var(--z-text-muted);">已选择: {{ [demoChecked2, demoChecked3, demoChecked4].filter(Boolean).map((v, i) => ['A', 'B', 'C'][i]).join(', ') || '无' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ZCheckbox } from 'zijid-ui'

// 基本复选框状态
const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)

// 演示复选框状态
const demoChecked1 = ref(false)
const demoChecked2 = ref(false)
const demoChecked3 = ref(false)
const demoChecked4 = ref(false)

// 多选复选框
const items = [
  { value: 'item1', label: '项目 1' },
  { value: 'item2', label: '项目 2' },
  { value: 'item3', label: '项目 3' },
  { value: 'item4', label: '项目 4' }
]

const selectedItems = ref<string[]>([])
const allChecked = computed({
  get: () => selectedItems.value.length === items.length,
  set: (value) => {
    if (value) {
      selectedItems.value = items.map(item => item.value)
    } else {
      selectedItems.value = []
    }
  }
})

const toggleAll = () => {
  if (allChecked.value) {
    selectedItems.value = []
  } else {
    selectedItems.value = items.map(item => item.value)
  }
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

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
}

.checkbox-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--z-surface);
  border: 1px solid var(--z-border);
  border-radius: 4px;
  font-size: 14px;
  color: var(--z-text);
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
