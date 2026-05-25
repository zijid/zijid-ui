<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Select 组件展示</h2>
      <p>Windows 10 风格的下拉选择框样式和交互</p>
      
      <div class="demo-controls">
        <div class="select-group">
          <ZSelect label="基本选择框" placeholder="请选择一个选项">
            <option value="1">选项 1</option>
            <option value="2">选项 2</option>
            <option value="3">选项 3</option>
          </ZSelect>
        </div>
        <div class="select-group">
          <ZSelect label="禁用选择框" placeholder="此选择框已被禁用" disabled>
            <option value="1">禁用选项 1</option>
            <option value="2">禁用选项 2</option>
            <option value="3">禁用选项 3</option>
          </ZSelect>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="select-group">
          <ZSelect label="多选选择框" multiple placeholder="请选择多个选项">
            <option value="1">多选选项 1</option>
            <option value="2">多选选项 2</option>
            <option value="3">多选选项 3</option>
            <option value="4">多选选项 4</option>
            <option value="5">多选选项 5</option>
          </ZSelect>
        </div>
        <div class="select-group">
          <ZSelect label="城市选择" placeholder="请选择城市">
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
            <option value="shenzhen">深圳</option>
            <option value="hangzhou">杭州</option>
            <option value="nanjing">南京</option>
            <option value="chengdu">成都</option>
            <option value="wuhan">武汉</option>
          </ZSelect>
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="select-group">
          <ZSelect label="分组选择框" placeholder="请选择产品">
            <optgroup label="水果">
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橙子</option>
            </optgroup>
            <optgroup label="蔬菜">
              <option value="tomato">西红柿</option>
              <option value="cucumber">黄瓜</option>
              <option value="carrot">胡萝卜</option>
            </optgroup>
            <optgroup label="肉类">
              <option value="beef">牛肉</option>
              <option value="pork">猪肉</option>
              <option value="chicken">鸡肉</option>
            </optgroup>
          </ZSelect>
        </div>
        <div class="select-group">
          <ZSelect label="文件类型" placeholder="请选择文件类型">
            <option value="doc">文档 文件</option>
            <option value="img">图片 文件</option>
            <option value="video">视频 文件</option>
            <option value="audio">音频 文件</option>
            <option value="zip">压缩 文件</option>
          </ZSelect>
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 下拉选择框组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <ZSelect label="基本选择" placeholder="请选择一个选项">
              <option value="1">选项 1</option>
              <option value="2">选项 2</option>
              <option value="3">选项 3</option>
            </ZSelect>
            <ZSelect label="多选选择" multiple placeholder="请选择多个选项">
              <option value="1">多选选项 1</option>
              <option value="2">多选选项 2</option>
              <option value="3">多选选项 3</option>
            </ZSelect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZSelect } from 'zijid-ui'
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

.select-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
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
