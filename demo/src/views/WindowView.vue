<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Windows 10 风格窗口组件</h2>
      <p>这是一个基于 Windows 10 设计风格的窗口组件，具有现代化的视觉效果和完整的交互功能。</p>
      
      <div class="demo-controls">
        <ZButton variant="primary" @click="showWindow = true">打开窗口</ZButton>
        <ZButton variant="default" @click="showWindow = false">关闭窗口</ZButton>
        <ZButton variant="default" @click="resetWindow">重置窗口</ZButton>
      </div>
      
      <div class="preview-box">
        <ZWindow
          v-model="showWindow"
          title="Windows 10 窗口"
          :x="windowStyle.x"
          :y="windowStyle.y"
          :width="windowStyle.width"
          :height="windowStyle.height"
          :maximized="windowStyle.isMaximized"
          @close="showWindow = false"
        >
          <div class="window-content">
            <h3>窗口内容</h3>
            <p>这是一个 Windows 10 风格的窗口，具有以下特点：</p>
            
            <div class="window-components">
              <div class="component-section">
                <h4>输入组件</h4>
                <ZInput label="用户名" placeholder="请输入用户名" />
                <ZInput type="password" label="密码" placeholder="请输入密码" />
              </div>
              
              <div class="component-section">
                <h4>按钮组件</h4>
                <div class="button-group">
                  <ZButton variant="primary">确认按钮</ZButton>
                  <ZButton variant="default">默认按钮</ZButton>
                  <ZButton variant="danger">危险按钮</ZButton>
                </div>
              </div>
              
              <div class="component-section">
                <h4>选择组件</h4>
                <ZSelect label="选择选项" placeholder="请选择一个选项">
                  <option value="1">选项 1</option>
                  <option value="2">选项 2</option>
                  <option value="3">选项 3</option>
                </ZSelect>
                <div class="checkbox-group">
                  <label class="checkbox-label">
                    <input type="checkbox" />
                    <span>复选选项</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div class="window-actions">
              <ZButton variant="primary" @click="showWindow = false">确定</ZButton>
              <ZButton variant="default" @click="showWindow = false">取消</ZButton>
            </div>
          </div>
        </ZWindow>
        
        <div v-if="!showWindow" class="window-placeholder">
          <p>点击"打开窗口"按钮查看 Windows 10 风格窗口组件</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ZButton, ZInput, ZSelect, ZWindow } from 'zijid-ui'

const showWindow = ref(false)
const windowStyle = reactive({
  x: 100,
  y: 100,
  width: 600,
  height: 400,
  isMaximized: false
})

const resetWindow = () => {
  windowStyle.x = 100
  windowStyle.y = 100
  windowStyle.width = 600
  windowStyle.height = 400
  windowStyle.isMaximized = false
  showWindow.value = true
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

.preview-box {
  background: var(--z-surface);
  border: 1px solid var(--z-border);
  border-radius: 8px;
  padding: 32px;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window-content {
  padding: 20px;
}

.window-content h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--z-text);
  margin: 0 0 16px 0;
}

.window-content p {
  color: var(--z-text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

.window-components {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.component-section {
  border: 1px solid var(--z-border);
  border-radius: 8px;
  padding: 16px;
}

.component-section h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--z-text);
  margin: 0 0 12px 0;
}

.button-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: var(--z-text);
}

.checkbox-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.window-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid var(--z-border);
}

.window-placeholder {
  text-align: center;
  color: var(--z-text-muted);
  font-size: 16px;
}
</style>
