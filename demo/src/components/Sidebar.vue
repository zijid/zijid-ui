<template>
  <aside class="sidebar">
    <!-- 首页入口：Logo + 快速开始 -->
    <div class="sidebar-header">
      <div class="logo-row">
        <ZIcon name="star" :size="22" />
        <span class="logo-text">Zijid UI</span>
      </div>
    </div>

    <!-- 快速开始入口 - 紧跟在标题下方 -->
    <div
      :class="['nav-home-item', currentRoute === '/' ? 'active' : '']"
      @click="navigateTo('/')"
    >
      <ZIcon name="home" :size="16" />
      <span>快速开始</span>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">基础组件</div>
      <div
        v-for="item in basicComponents"
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <ZIcon :name="item.icon" :size="16" />
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
        <ZIcon :name="item.icon" :size="16" />
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
        <ZIcon :name="item.icon" :size="16" />
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
        <ZIcon :name="item.icon" :size="16" />
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
        <ZIcon :name="item.icon" :size="16" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">桌面组件</div>
      <div
        v-for="item in desktopComponents"
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <ZIcon :name="item.icon" :size="16" />
        <span>{{ item.name }}</span>
      </div>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">实用组件</div>
      <div
        v-for="item in utilityComponents"
        :key="item.path"
        :class="['nav-item', currentRoute === item.path ? 'active' : '']"
        @click="navigateTo(item.path)"
      >
        <ZIcon :name="item.icon" :size="16" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ZIcon from 'zijid-ui/components/icon/ZIcon.vue'

const route = useRoute()
const router = useRouter()

const currentRoute = ref(route.path)

// Watch for route changes so sidebar stays in sync
watch(
  () => route.path,
  (newPath) => {
    currentRoute.value = newPath
  }
)

const basicComponents = [
  { name: 'Button', path: '/button', icon: 'button' },
  { name: 'Input', path: '/input', icon: 'input' },
  { name: 'Textarea', path: '/textarea', icon: 'file-text' },
  { name: 'Select', path: '/select', icon: 'list' },
  { name: 'Checkbox', path: '/checkbox', icon: 'check' },
  { name: 'Radio', path: '/radio', icon: 'radio-button-on' },
  { name: 'Switch', path: '/switch', icon: 'toggle-left' }
]

const layoutComponents = [
  { name: 'Window', path: '/window', icon: 'window' },
  { name: 'Layout', path: '/layout', icon: 'columns' }
]

const navigationComponents = [
  { name: 'Menu', path: '/menu', icon: 'menu' },
  { name: 'Dropdown', path: '/dropdown', icon: 'hamburger' },
  { name: 'Tabs', path: '/tabs', icon: 'tab' },
  { name: 'Toolbar', path: '/toolbar', icon: 'toolbar' },
  { name: 'Status Bar', path: '/status-bar', icon: 'columns' }
]

const feedbackComponents = [
  { name: 'Dialog', path: '/dialog', icon: 'info' },
  { name: 'Toast', path: '/toast', icon: 'bell' },
  { name: 'Tooltip', path: '/tooltip', icon: 'eye' },
  { name: 'Context Menu', path: '/context-menu', icon: 'context-menu' }
]

const dataComponents = [
  { name: 'List', path: '/list', icon: 'list' },
  { name: 'Tree', path: '/tree', icon: 'tree' },
  { name: 'Progress', path: '/progress', icon: 'circle-progress' },
  { name: 'Slider', path: '/slider', icon: 'slider' },
  { name: 'Icon', path: '/icon', icon: 'star' }
]

const desktopComponents = [
  { name: 'Desktop Icon', path: '/desktop-icon', icon: 'file' }
]

const utilityComponents = [
  { name: 'Search Box', path: '/search-box', icon: 'search' },
  { name: 'Code Block', path: '/code-block', icon: 'code' },
  { name: 'File System', path: '/file-system', icon: 'folder' }
]

const navigateTo = (path: string) => {
  currentRoute.value = path
  router.push(path)
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: #1a1a2e;
  border-right: 1px solid #2d2d44;
  padding: 16px 0;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

/* Sidebar header: logo only */
.sidebar-header {
  padding: 4px 16px 8px;
  margin: 0;
}

.logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 快速开始首页入口 - 紧跟在标题下方 */
.nav-home-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 14px;
  margin: 0 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #8899bb;
  transition: all 0.15s ease;
  text-decoration: none;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #2d2d44;
}

.nav-home-item:hover {
  background: rgba(0, 120, 212, 0.15);
  color: #e0e0e0;
}

.nav-home-item.active {
  background: rgba(0, 120, 212, 0.25);
  color: #0078d4;
  border-left: 3px solid #0078d4;
}

.nav-home-item svg {
  flex-shrink: 0;
}

/* Separator between home and component sections */
.nav-section {
  margin-bottom: 8px;
}

.nav-section-title {
  font-size: 11px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 16px 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  color: #aab;
  text-decoration: none;
  transition: all 0.15s ease;
  font-size: 13px;
  margin: 1px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.nav-item:hover {
  background: rgba(0, 120, 212, 0.15);
  color: #e0e0e0;
}

.nav-item.active {
  background: rgba(0, 120, 212, 0.25);
  color: #0078d4;
  border-left: 3px solid #0078d4;
}

.nav-item svg {
  flex-shrink: 0;
}
</style>
