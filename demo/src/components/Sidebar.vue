<template>
  <aside class="sidebar">
    <div class="logo">Zijid UI</div>
    
    <div class="nav-section">
      <div class="nav-section-title">基础组件</div>
      <div 
        v-for="item in basicComponents" 
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    
    <div class="nav-section">
      <div class="nav-section-title">布局组件</div>
      <div 
        v-for="item in layoutComponents" 
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    
    <div class="nav-section">
      <div class="nav-section-title">导航组件</div>
      <div 
        v-for="item in navigationComponents" 
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    
    <div class="nav-section">
      <div class="nav-section-title">反馈组件</div>
      <div 
        v-for="item in feedbackComponents" 
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    
    <div class="nav-section">
      <div class="nav-section-title">数据组件</div>
      <div 
        v-for="item in dataComponents" 
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentRoute = ref(route.path)

const basicComponents = [
  { name: 'Button 按钮', path: '/button' },
  { name: 'Input 输入', path: '/input' },
  { name: 'Select 选择', path: '/select' },
  { name: 'Checkbox 复选', path: '/checkbox' },
  { name: 'Radio 单选', path: '/radio' },
  { name: 'Switch 开关', path: '/switch' }
]

const layoutComponents = [
  { name: 'Window 窗口', path: '/window' },
  { name: 'Panel 面板', path: '/panel' },
  { name: 'Splitter 分割', path: '/splitter' },
  { name: 'ScrollArea 滚动', path: '/scroll-area' }
]

const navigationComponents = [
  { name: 'Menu 菜单', path: '/menu' },
  { name: 'Dropdown 下拉', path: '/dropdown' },
  { name: 'Tabs 标签', path: '/tabs' },
  { name: 'Toolbar 工具栏', path: '/toolbar' },
  { name: 'Status Bar 状态栏', path: '/status-bar' }
]

const feedbackComponents = [
  { name: 'Dialog 对话框', path: '/dialog' },
  { name: 'Toast 提示', path: '/toast' },
  { name: 'Tooltip 提示', path: '/tooltip' },
  { name: 'Context Menu 上下文菜单', path: '/context-menu' }
]

const dataComponents = [
  { name: 'List 列表', path: '/list' },
  { name: 'Tree 树', path: '/tree' },
  { name: 'Table 表格', path: '/table' },
  { name: 'Search Box 搜索', path: '/search-box' },
  { name: 'Progress 进度', path: '/progress' },
  { name: 'Slider 滑块', path: '/slider' }
]

const navigateTo = (path: string) => {
  currentRoute.value = path
  router.push(path)
}
</script>

<style scoped>
.sidebar {
  width: 280px;
  background: #1a202c;
  border-right: 1px solid #2d3748;
  padding: 24px 0;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
}

.logo {
  font-size: 20px;
  font-weight: 700;
  padding: 0 24px 24px;
  color: #fff;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-section {
  margin-bottom: 32px;
}

.nav-section-title {
  font-size: 12px;
  font-weight: 600;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 24px 12px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  color: #cbd5e0;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  margin: 2px 8px;
  border-radius: 6px;
  cursor: pointer;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
}

.nav-item.active {
  background: rgba(99, 102, 241, 0.2);
  color: #818cf8;
  border-left: 3px solid #818cf8;
}
</style>
