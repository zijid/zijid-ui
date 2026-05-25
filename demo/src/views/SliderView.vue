<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>滑块组件演示</h2>
      <p>Windows 10 模板的滑块样式和功能</p>
      
      <div class="demo-controls">
        <div class="slider-group">
          <div class="slider-item">
            <label>滑块 1</label>
            <input type="range" min="0" max="100" value="50" class="slider" />
            <span class="slider-value">50</span>
          </div>
          <div class="slider-item">
            <label>滑块 2</label>
            <input type="range" min="0" max="100" value="25" class="slider" />
            <span class="slider-value">25</span>
          </div>
          <div class="slider-item">
            <label>滑块 3</label>
            <input type="range" min="0" max="100" value="75" class="slider" />
            <span class="slider-value">75</span>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="slider-group">
          <div class="slider-item">
            <label>带颜色的滑块</label>
            <input type="range" min="0" max="100" value="60" class="slider slider-primary" />
            <span class="slider-value">60</span>
          </div>
          <div class="slider-item">
            <label>带颜色的滑块</label>
            <input type="range" min="0" max="100" value="40" class="slider slider-success" />
            <span class="slider-value">40</span>
          </div>
          <div class="slider-item">
            <label>带颜色的滑块</label>
            <input type="range" min="0" max="100" value="80" class="slider slider-warning" />
            <span class="slider-value">80</span>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="slider-group">
          <div class="slider-item">
            <label>禁用滑块</label>
            <input type="range" min="0" max="100" value="50" class="slider" disabled />
            <span class="slider-value">50</span>
          </div>
          <div class="slider-item">
            <label>垂直滑块</label>
            <input type="range" min="0" max="100" value="50" class="slider slider-vertical" style="writing-mode: bt-lr; -webkit-appearance: slider-vertical; width: 30px; height: 200px;" />
            <span class="slider-value">50</span>
          </div>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="slider-group">
          <div class="slider-item">
            <label>范围滑块</label>
            <div class="range-slider">
              <input type="range" min="0" max="100" value="30" class="range-min" />
              <input type="range" min="0" max="100" value="70" class="range-max" />
              <div class="range-track"></div>
            </div>
            <span class="range-value">30 - 70</span>
          </div>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>预览区域 - 滑块组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <div class="slider-item">
              <label>基本滑块</label>
              <input type="range" min="0" max="100" value="50" class="slider" />
              <span class="slider-value">50</span>
            </div>
            <div class="slider-item">
              <label>带颜色的滑块</label>
              <input type="range" min="0" max="100" value="75" class="slider slider-primary" />
              <span class="slider-value">75</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 滑块组件演示页面
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

.slider-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.slider-item label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.slider.slider-primary::-webkit-slider-thumb {
  background: #667eea;
}

.slider.slider-success::-webkit-slider-thumb {
  background: #48bb78;
}

.slider.slider-warning::-webkit-slider-thumb {
  background: #ed8936;
}

.slider.slider-danger::-webkit-slider-thumb {
  background: #f56565;
}

.slider.slider-vertical::-webkit-slider-thumb {
  background: #667eea;
}

.slider-value {
  font-size: 12px;
  color: #64748b;
  text-align: center;
}

.slider:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.slider:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
}

.range-slider {
  position: relative;
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
}

.range-slider .range-track {
  position: absolute;
  top: 0;
  left: 30%;
  width: 40%;
  height: 100%;
  background: #667eea;
  border-radius: 3px;
}

.range-slider .range-min,
.range-slider .range-max {
  position: absolute;
  top: -7px;
  width: 100%;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  pointer-events: none;
}

.range-slider .range-min::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.range-slider .range-max::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.range-value {
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
