<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>图标组件演示</h2>
      <p>Windows 10 模板的图标样式和功能</p>
      
      <div class="demo-controls">
        <div class="icon-group">
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <span>信息图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span>成功图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                <line x1="8" y1="12" x2="16.01" y2="12"></line>
              </svg>
            </div>
            <span>警告图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <span>错误图标</span>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="icon-group">
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <span>闪电图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <span>爱心图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <span>文档图标</span>
          </div>
          <div class="icon-item">
            <div class="icon-box">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <span>文件图标</span>
          </div>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>预览区域 - 图标组件</p>
          <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
            <div class="icon-item">
              <div class="icon-box">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <span>信息</span>
            </div>
            <div class="icon-item">
              <div class="icon-box">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>成功</span>
            </div>
            <div class="icon-item">
              <div class="icon-box">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  <line x1="8" y1="12" x2="16.01" y2="12"></line>
                </svg>
              </div>
              <span>警告</span>
            </div>
            <div class="icon-item">
              <div class="icon-box">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </div>
              <span>错误</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 图标组件演示页面
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

.icon-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;
}

.icon-box:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.icon {
  width: 24px;
  height: 24px;
  color: #4a5568;
}

.icon-item span {
  font-size: 12px;
  color: #64748b;
  text-align: center;
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
