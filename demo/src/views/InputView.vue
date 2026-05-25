<template>
  <div class="demo-container">
    <div class="demo-section">
      <h2>Input 组件展示</h2>
      <p>Windows 10 风格的输入框样式和交互</p>
      
      <div class="demo-controls">
        <div class="input-group">
          <label>用户名</label>
          <ZInput placeholder="请输入用户名" />
        </div>
        <div class="input-group">
          <label>密码</label>
          <ZInput type="password" placeholder="请输入密码" />
        </div>
        <div class="input-group">
          <label>邮箱</label>
          <ZInput type="email" placeholder="请输入邮箱地址" />
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="input-group">
          <label>年龄</label>
          <ZInput type="number" placeholder="请输入年龄" />
        </div>
        <div class="input-group">
          <label>确认密码</label>
          <ZInput type="password" placeholder="请再次输入密码" />
        </div>
      </div>
      
      <div class="demo-controls">
        <div class="input-group">
          <label>禁用输入框</label>
          <ZInput placeholder="此输入框已被禁用" disabled />
        </div>
      </div>
      
      <div class="preview-box">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <p>演示区域 - 输入框组件</p>
          <div style="display: flex; flex-direction: column; gap: 12px; width: 300px;">
            <ZInput label="姓名" placeholder="请输入姓名" />
            <ZInput type="password" label="密码" placeholder="请输入密码" />
            <ZInput label="记住我" placeholder="勾选此项保持登录状态">
              <template #default="{ input }">
                <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                  <input type="checkbox" id="toggle" v-model="input.value" />
                  <label for="toggle">记住我的登录状态</label>
                </div>
              </template>
            </ZInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZInput } from 'zijid-ui'
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

.input-group {
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
