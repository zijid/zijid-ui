<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>开关组件演示</h2>
      <p>Windows 10 模板的开关样式和功能</p>
      
      <div class="demo-controls">
        <div class="switch-group">
          <label class="switch-label">
            <input type="checkbox" class="switch" />
            <span>开关选项 1</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch" checked />
            <span>开关选项 2</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch" />
            <span>开关选项 3</span>
          </label>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="switch-group">
          <label class="switch-label">
            <input type="checkbox" class="switch switch-primary" checked />
            <span>主要开关</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch switch-success" checked />
            <span>成功开关</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch switch-warning" checked />
            <span>警告开关</span>
          </label>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="switch-group">
          <label class="switch-label">
            <input type="checkbox" class="switch" disabled />
            <span>禁用开关</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch" disabled checked />
            <span>禁用已选开关</span>
          </label>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="switch-group">
          <label class="switch-label">
            <input type="checkbox" class="switch switch-large" />
            <span>大号开关</span>
          </label>
          <label class="switch-label">
            <input type="checkbox" class="switch switch-small" />
            <span>小号开关</span>
          </label>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>预览区域 - 开关组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <label class="switch-label">
              <input type="checkbox" class="switch" />
              <span>基本开关</span>
            </label>
            <label class="switch-label">
              <input type="checkbox" class="switch switch-primary" checked />
              <span>主要开关</span>
            </label>
            <label class="switch-label">
              <input type="checkbox" class="switch switch-success" checked />
              <span>成功开关</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 开关组件演示页面
</script>

<style scoped>
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 32px;
}

.demo-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
}

.demo-section p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.demo-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.switch-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.switch-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
}

.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #667eea;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.switch.switch-primary input:checked + .slider {
  background-color: #667eea;
}

.switch.switch-success input:checked + .slider {
  background-color: #48bb78;
}

.switch.switch-warning input:checked + .slider {
  background-color: #ed8936;
}

.switch.switch-danger input:checked + .slider {
  background-color: #f56565;
}

.switch.switch-large {
  width: 64px;
  height: 32px;
}

.switch.switch-large .slider {
  border-radius: 32px;
}

.switch.switch-large .slider:before {
  height: 24px;
  width: 24px;
  bottom: 4px;
}

.switch.switch-large input:checked + .slider:before {
  transform: translateX(32px);
}

.switch.switch-small {
  width: 36px;
  height: 18px;
}

.switch.switch-small .slider {
  border-radius: 18px;
}

.switch.switch-small .slider:before {
  height: 12px;
  width: 12px;
  bottom: 3px;
}

.switch.switch-small input:checked + .slider:before {
  transform: translateX(18px);
}

.switch:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch:disabled + .slider {
  background-color: #e2e8f0;
}

.switch:disabled input:checked + .slider {
  background-color: #cbd5e0;
}

.switch:disabled input:checked + .slider:before {
  transform: translateX(0);
}

.preview-box {
  background: #f8fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 12px;
  padding: 32px;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
