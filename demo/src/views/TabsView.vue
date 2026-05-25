<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Tabs 组件展示</h2>
      <p>Windows 10 风格的选项卡样式和交互</p>
      
      <div class="demo-controls">
        <div class="tabs-group">
          <ZTabs v-model="activeTab1">
            <ZTab title="选项卡 1">内容 1</ZTab>
            <ZTab title="选项卡 2">内容 2</ZTab>
            <ZTab title="选项卡 3">内容 3</ZTab>
          </ZTabs>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="tabs-group">
          <ZTabs v-model="activeTab2">
            <ZTab title="首页" icon="🏠">首页内容</ZTab>
            <ZTab title="产品" icon="📦">产品内容</ZTab>
            <ZTab title="关于" icon="ℹ️">关于内容</ZTab>
          </ZTabs>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="tabs-group">
          <ZTabs v-model="activeTab3">
            <ZTab title="禁用选项卡" disabled>此选项卡被禁用</ZTab>
            <ZTab title="可用选项卡">可用内容</ZTab>
          </ZTabs>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 选项卡组件</p>
          <div style="width: 400px;">
            <ZTabs v-model="previewTab">
              <ZTab title="基本信息">基本信息内容区域</ZTab>
              <ZTab title="详细信息">详细信息内容区域</ZTab>
              <ZTab title="设置">设置内容区域</ZTab>
            </ZTabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZTabs, ZTab } from 'zijid-ui'

// 选项卡状态
const activeTab1 = ref(0)
const activeTab2 = ref(0)
const activeTab3 = ref(1)
const previewTab = ref(0)
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

.tabs-group {
  min-width: 300px;
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
