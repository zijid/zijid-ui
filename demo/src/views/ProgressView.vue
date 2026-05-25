<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>进度条组件演示</h2>
      <p>Windows 10 模板的进度条样式和功能</p>
      
      <div class="demo-controls">
        <div class="progress-group">
          <div class="progress-item">
            <label>进度条 25%</label>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 25%"></div>
            </div>
          </div>
          <div class="progress-item">
            <label>进度条 50%</label>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 50%"></div>
            </div>
          </div>
          <div class="progress-item">
            <label>进度条 75%</label>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
          </div>
          <div class="progress-item">
            <label>进度条 100%</label>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 100%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="progress-group">
          <div class="progress-item">
            <label>圆形进度条 25%</label>
            <div class="progress-circle">
              <svg viewBox="0 0 36 36" class="progress-ring">
                <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="2" />
                <path class="progress-ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#667eea" stroke-width="2" stroke-dasharray="25, 100" />
                <text x="18" y="20" text-anchor="middle" fill="#4a5568" font-size="8">25%</text>
              </svg>
            </div>
          </div>
          <div class="progress-item">
            <label>圆形进度条 50%</label>
            <div class="progress-circle">
              <svg viewBox="0 0 36 36" class="progress-ring">
                <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="2" />
                <path class="progress-ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#667eea" stroke-width="2" stroke-dasharray="50, 100" />
                <text x="18" y="20" text-anchor="middle" fill="#4a5568" font-size="8">50%</text>
              </svg>
            </div>
          </div>
          <div class="progress-item">
            <label>圆形进度条 75%</label>
            <div class="progress-circle">
              <svg viewBox="0 0 36 36" class="progress-ring">
                <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="2" />
                <path class="progress-ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#667eea" stroke-width="2" stroke-dasharray="75, 100" />
                <text x="18" y="20" text-anchor="middle" fill="#4a5568" font-size="8">75%</text>
              </svg>
            </div>
          </div>
          <div class="progress-item">
            <label>圆形进度条 100%</label>
            <div class="progress-circle">
              <svg viewBox="0 0 36 36" class="progress-ring">
                <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="2" />
                <path class="progress-ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#667eea" stroke-width="2" stroke-dasharray="100, 100" />
                <text x="18" y="20" text-anchor="middle" fill="#4a5568" font-size="8">100%</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="progress-group">
          <div class="progress-item">
            <label>带动画进度条</label>
            <div class="progress-bar animated">
              <div class="progress-fill" style="width: 60%"></div>
            </div>
          </div>
          <div class="progress-item">
            <label>条纹进度条</label>
            <div class="progress-bar striped">
              <div class="progress-fill" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>预览区域 - 进度条组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <div class="progress-item">
              <label>进度条 50%</label>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 50%"></div>
              </div>
            </div>
            <div class="progress-item">
              <label>圆形进度条 75%</label>
              <div class="progress-circle">
                <svg viewBox="0 0 36 36" class="progress-ring">
                  <path class="progress-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="2" />
                  <path class="progress-ring-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#667eea" stroke-width="2" stroke-dasharray="75, 100" />
                  <text x="18" y="20" text-anchor="middle" fill="#4a5568" font-size="8">75%</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 进度条组件演示页面
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

.progress-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.progress-item label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: #667eea;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-bar.animated .progress-fill {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  background-size: 200% 100%;
  animation: gradient 2s ease infinite;
}

.progress-bar.striped .progress-fill {
  background: repeating-linear-gradient(
    45deg,
    #667eea,
    #667eea 10px,
    #764ba2 10px,
    #764ba2 20px
  );
}

.progress-circle {
  width: 60px;
  height: 60px;
}

.progress-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-ring-bg {
  transition: stroke-dasharray 0.3s ease;
}

.progress-ring-fill {
  transition: stroke-dasharray 0.3s ease;
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

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
