<template>
  <div class="home-container">
    <header class="hero">
      <h1>Zijid UI</h1>
      <p>基于 Vue 3 的 Windows 10 桌面组件库</p>
      <div class="actions">
        <z-button type="primary" @click="$router.push('/button')">查看组件</z-button>
        <z-button @click="copyInstall">复制安装命令</z-button>
      </div>
    </header>

    <section class="install-section">
      <h2>安装</h2>
      <div class="code-block">
        <pre><code>npm install zijid-ui</code></pre>
      </div>
      <p>也可以使用 Yarn / PNPM：</p>
      <div class="code-block">
        <pre><code>yarn add zijid-ui
pnpm add zijid-ui</code></pre>
      </div>
    </section>

    <section class="features-section">
      <h2>特性</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3>现代化设计</h3>
          <p>遵循 Windows 11 设计语言，提供美观的界面</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>高性能</h3>
          <p>基于 Vue 3 Composition API，轻量且快速</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛠️</div>
          <h3>易于使用</h3>
          <p>提供完整的 TypeScript 支持，开箱即用</p>
        </div>
      </div>
    </section>

    <section class="components-section">
      <h2>组件列表</h2>
      <div class="components-grid">
        <div class="component-card" @click="$router.push('/button')">
          <div class="component-icon">🔘</div>
          <h3>Button</h3>
          <p>按钮组件</p>
        </div>
        <div class="component-card" @click="$router.push('/input')">
          <div class="component-icon">📝</div>
          <h3>Input</h3>
          <p>输入框组件</p>
        </div>
        <div class="component-card" @click="$router.push('/select')">
          <div class="component-icon">📋</div>
          <h3>Select</h3>
          <p>选择器组件</p>
        </div>
        <div class="component-card" @click="$router.push('/dialog')">
          <div class="component-icon">💬</div>
          <h3>Dialog</h3>
          <p>对话框组件</p>
        </div>
        <div class="component-card" @click="$router.push('/window')">
          <div class="component-icon">🪟</div>
          <h3>Window</h3>
          <p>窗口组件</p>
        </div>
        <div class="component-card" @click="$router.push('/tabs')">
          <div class="component-icon">📑</div>
          <h3>Tabs</h3>
          <p>标签页组件</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copyInstall = () => {
  const command = 'npm install zijid-ui'
  navigator.clipboard.writeText(command)
  alert('安装命令已复制到剪贴板')
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.hero p {
  font-size: 18px;
  margin: 0 0 32px 0;
  opacity: 0.9;
}

.actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.install-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 40px;
}

.install-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
}

.code-block {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  color: #2d3748;
}

.features-section {
  margin-bottom: 40px;
}

.features-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.components-section {
  margin-bottom: 40px;
}

.components-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 24px 0;
  text-align: center;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.component-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.component-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
}

.component-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.component-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 8px 0;
}

.component-card p {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}
</style>
