<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Radio 组件展示</h2>
      <p>Windows 10 风格的单选框样式和交互</p>
      
      <div class="demo-controls">
        <div class="radio-group">
          <ZRadio v-model="selectedOption1" value="option1">选项 1</ZRadio>
          <ZRadio v-model="selectedOption1" value="option2">选项 2</ZRadio>
          <ZRadio v-model="selectedOption1" value="option3">选项 3</ZRadio>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="radio-group">
          <ZRadio v-model="selectedOption2" value="male" disabled>男性</ZRadio>
          <ZRadio v-model="selectedOption2" value="female">女性</ZRadio>
        </div>
        <div class="radio-status">
          <p>当前选择: {{ selectedOption1 || '无' }}</p>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="radio-group">
          <h4>选择城市：</h4>
          <ZRadio v-model="selectedCity" value="beijing">北京</ZRadio>
          <ZRadio v-model="selectedCity" value="shanghai">上海</ZRadio>
          <ZRadio v-model="selectedCity" value="guangzhou">广州</ZRadio>
          <ZRadio v-model="selectedCity" value="shenzhen">深圳</ZRadio>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 单选框组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <div class="radio-group">
              <h4 style="margin: 0 0 8px 0; font-size: 14px; color: var(--z-text);">选择套餐：</h4>
              <ZRadio v-model="selectedPlan" value="basic">基础版</ZRadio>
              <ZRadio v-model="selectedPlan" value="pro">专业版</ZRadio>
              <ZRadio v-model="selectedPlan" value="enterprise">企业版</ZRadio>
            </div>
            <div style="border-top: 1px solid var(--z-border); padding-top: 12px;">
              <p style="font-size: 14px; color: var(--z-text-muted);">当前选择: {{ selectedPlan || '无' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ZRadio } from 'zijid-ui'

// 单选框状态
const selectedOption1 = ref<string>('')
const selectedOption2 = ref<string>('')
const selectedCity = ref<string>('')
const selectedPlan = ref<string>('')

// 监听选择变化
watch(selectedOption1, (newValue) => {
  console.log('选项1选择:', newValue)
})

watch(selectedCity, (newValue) => {
  console.log('城市选择:', newValue)
})
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

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 200px;
}

.radio-status {
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
