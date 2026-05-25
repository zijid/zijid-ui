<template>
  <div class="home-container">
    <div class="demo-header">
      <h1>Zijid UI</h1>
      <p>基于 Vue 3 的 Windows 10 桌面组件库</p>
    </div>
    
    <!-- 安装指南 -->
    <div class="install-section">
      <h2>快速开始</h2>
      <p>安装 Zijid UI 即可获得完整的 Windows 10 桌面应用组件</p>
      <div class="code-block">
        <pre><code>npm install zijid-ui</code></pre>
      </div>
      <button class="btn btn-primary" @click="copyInstall">复制安装命令</button>
    </div>
    
    <!-- 组件展示 -->
    <div class="component-grid">
      <div v-for="component in components" :key="component.name" class="component-card" @click="navigateTo(component.path)">
        <div class="component-icon">{{ component.icon }}</div>
        <h3>{{ component.name }}</h3>
        <p>{{ component.description }}</p>
      </div>
    </div>
    
    <!-- 特性介绍 -->
    <div class="features-section">
      <h2>特性</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🎨</div>
          <h3>现代化设计</h3>
          <p>遵循 Windows 11 设计语言，提供美观的界面</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">⚡</div>
          <h3>高性能</h3>
          <p>基于 Vue 3 Composition API，轻量且快速</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🛠️</div>
          <h3>易于使用</h3>
          <p>提供完整的 TypeScript 支持，开箱即用</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🎯</div>
          <h3>组件丰富</h3>
          <p>包含完整的桌面应用组件，满足各种需求</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const components = ref([
  { name: 'Button', icon: '🔘', description: '按钮组件', path: '/button' },
  { name: 'Input', icon: '📝', description: '输入框组件', path: '/input' },
  { name: 'Select', icon: '📋', description: '选择器组件', path: '/select' },
  { name: 'Dialog', icon: '💬', description: '对话框组件', path: '/dialog' },
  { name: 'Window', icon: '🪟', description: '窗口组件', path: '/window' },
  { name: 'Tabs', icon: '📑', description: '标签页组件', path: '/tabs' },
  { name: 'Checkbox', icon: '☑️', description: '复选框组件', path: '/checkbox' },
  { name: 'Radio', icon: '🔘', description: '单选框组件', path: '/radio' },
  { name: 'Icon', icon: '⭐', description: '图标组件', path: '/icon' },
  { name: 'Progress', icon: '📊', description: '进度条组件', path: '/progress' },
  { name: 'Slider', icon: '🎚️', description: '滑块组件', path: '/slider' },
  { name: 'Switch', icon: '🔌', description: '开关组件', path: '/switch' },
  { name: 'Textarea', icon: '📄', description: '文本域组件', path: '/textarea' },
  { name: 'Select', icon: '📝', description: '选择框组件', path: '/select' },
  { name: 'Tree', icon: '🌳', description: '树形组件', path: '/tree' },
  { name: 'List', icon: '📋', description: '列表组件', path: '/list' },
  { name: 'Menu', icon: '📁', description: '菜单组件', path: '/menu' },
  { name: 'Dropdown', icon: '📥', description: '下拉组件', path: '/dropdown' },
  { name: 'Tooltip', icon: '💡', description: '提示组件', path: '/tooltip' },
  { name: 'Panel', icon: '📦', description: '面板组件', path: '/panel' },
  { name: 'Toolbar', icon: '🛠️', description: '工具栏组件', path: '/toolbar' },
  { name: 'Status Bar', icon: '📊', description: '状态栏组件', path: '/statusbar' },
  { name: 'Scroll Area', icon: '📜', description: '滚动区域组件', path: '/scrollarea' },
  { name: 'Search Box', icon: '🔍', description: '搜索框组件', path: '/searchbox' },
  { name: 'Desktop', icon: '💻', description: '桌面组件', path: '/desktop' },
  { name: 'Desktop Icon', icon: '📁', description: '桌面图标组件', path: '/desktopicon' },
  { name: 'Start Menu', icon: '🎯', description: '开始菜单组件', path: '/startmenu' },
  { name: 'Taskbar', icon: '⚙️', description: '任务栏组件', path: '/taskbar' },
  { name: 'Context Menu', icon: '📋', description: '右键菜单组件', path: '/contextmenu' },
  { name: 'Splitter', icon: '📐', description: '分割器组件', path: '/splitter' },
  { name: 'Toast', icon: '🔔', description: '通知组件', path: '/toast' },
  { name: 'Window', icon: '🪟', description: '窗口组件', path: '/window' },
])

const navigateTo = (path: string) => {
  // 这里可以使用 Vue Router 进行导航
  console.log('Navigate to:', path)
}

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

.demo-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;
}

.demo-header h1 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 16px 0;
}

.demo-header p {
  font-size: 18px;
  margin: 0;
  opacity: 0.9;
}

.install-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 40px;
  text-align: center;
}

.install-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
}

.install-section p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.code-block {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  color: #2d3748;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a67d8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.feature-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-item h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px 0;
}

.feature-item p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}
</style>
