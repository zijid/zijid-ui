<template>
  <div class="demo-page">
    <h1>ZDesktopIcon 桌面图标</h1>
    <p class="desc">Windows 10 风格桌面图标，完整支持默认、悬停、选中、按下、禁用五种视觉状态。</p>

    <div class="demo-section">
      <h2>状态预览</h2>
      <div class="preview-box" style="background: linear-gradient(135deg, #0f3b5e 0%, #1a5276 50%, #2c3e50 100%); padding: 24px; display: flex; gap: 20px; flex-wrap: wrap;">
        <div class="state-demo">
          <div class="state-label">默认</div>
          <ZDesktopIcon label="此电脑" icon="monitor" />
        </div>
        <div class="state-demo">
          <div class="state-label">悬停</div>
          <ZDesktopIcon label="此电脑" icon="monitor" class="demo-hover" />
        </div>
        <div class="state-demo">
          <div class="state-label">选中</div>
          <ZDesktopIcon label="此电脑" icon="monitor" selected />
        </div>
        <div class="state-demo">
          <div class="state-label">选中+悬停</div>
          <ZDesktopIcon label="此电脑" icon="monitor" selected class="demo-hover" />
        </div>
        <div class="state-demo">
          <div class="state-label">按下</div>
          <ZDesktopIcon label="此电脑" icon="monitor" class="demo-pressed" />
        </div>
        <div class="state-demo">
          <div class="state-label">禁用</div>
          <ZDesktopIcon label="此电脑" icon="monitor" disabled />
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>多种图标（点击选中）</h2>
      <div
        class="preview-box"
        @click.self="clearSelection"
        style="background: linear-gradient(135deg, #1a3a4a 0%, #0d2137 100%); padding: 24px; display: flex; gap: 20px; flex-wrap: wrap;"
      >
        <ZDesktopIcon
          v-for="item in iconList"
          :key="item.id"
          :label="item.label"
          :icon="item.icon"
          :selected="selectedId === item.id"
          @select="selectIcon(item.id)"
        />
      </div>
      <ZCodeBlock :code="iconsCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>暗色背景 / 亮色背景</h2>
      <div
        class="preview-box"
        @click.self="clearSelection2"
        style="background: #2d3436; padding: 24px; display: flex; gap: 20px; flex-wrap: wrap;"
      >
        <ZDesktopIcon
          v-for="item in darkList"
          :key="item.id"
          :label="item.label"
          :icon="item.icon"
          :selected="selectedId2 === item.id"
          @select="selectIcon2(item.id)"
        />
      </div>
      <div
        class="preview-box"
        @click.self="clearSelection2"
        style="background: #b3d9ff; padding: 24px; display: flex; gap: 20px; flex-wrap: wrap; margin-top: 12px;"
      >
        <ZDesktopIcon
          v-for="item in darkList"
          :key="item.id"
          :label="item.label"
          :icon="item.icon"
          :selected="selectedId2 === item.id"
          @select="selectIcon2(item.id)"
        />
      </div>
      <ZCodeBlock :code="bgCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div
        class="preview-box"
        @click.self="clearSelection3"
        style="background: #005a9e; padding: 20px;"
      >
        <ZDesktopIcon label="我的文件" icon="folder" :selected="selectedId3" @select="selectIcon3" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable
        :props="desktopIconProps"
        :events="desktopIconEvents"
        :slots="desktopIconSlots"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCodeBlock, ZDesktopIcon } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const desktopIconProps = [
  { name: 'label', type: 'string', default: '-', description: '图标标签文字' },
  { name: 'icon', type: 'IconName', default: '-', description: '图标名称' },
  { name: 'selected', type: 'boolean', default: 'false', description: '是否选中（单击选中状态）' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' }
]

const desktopIconEvents = [
  { name: 'select', params: [], description: '单击图标时触发（选中）' },
  { name: 'open', params: [], description: '双击图标时触发（打开）' },
  { name: 'contextmenu', params: ['MouseEvent'], description: '右键点击图标时触发' }
]

const desktopIconSlots = [
  { name: 'default', description: '图标下方自定义内容' }
]

const basicCode = '<ZDesktopIcon label="我的文件" icon="folder" :selected="selected" @select="selected = !selected" />'

const iconsCode = '<ZDesktopIcon label="此电脑" icon="monitor" />\n<ZDesktopIcon label="回收站" icon="trash" selected />\n<ZDesktopIcon label="文件" icon="file-text" />\n<ZDesktopIcon label="下载" icon="download" />\n<ZDesktopIcon label="设置" icon="settings" />'

const bgCode = '<!-- 暗色背景 -->\n<ZDesktopIcon label="我的电脑" icon="monitor" />\n\n<!-- 亮色背景 -->\n<ZDesktopIcon label="我的电脑" icon="monitor" selected />'

// --- Interactive icon group 1: 多种图标 ---
const iconList = [
  { id: 'pc', label: '此电脑', icon: 'monitor' as const },
  { id: 'trash', label: '回收站', icon: 'trash' as const },
  { id: 'file', label: '文件', icon: 'file-text' as const },
  { id: 'download', label: '下载', icon: 'download' as const },
  { id: 'settings', label: '设置', icon: 'settings' as const },
  { id: 'music', label: '音乐', icon: 'music' as const },
]
const selectedId = ref<string | null>(null)
function selectIcon(id: string) {
  selectedId.value = id
}
function clearSelection() {
  selectedId.value = null
}

// --- Interactive icon group 2: 暗色/亮色背景 ---
const darkList = [
  { id: 'mypc', label: '我的电脑', icon: 'monitor' as const },
  { id: 'bin', label: '回收站', icon: 'trash' as const },
  { id: 'ctrl', label: '控制面板', icon: 'settings' as const },
]
const selectedId2 = ref<string | null>(null)
function selectIcon2(id: string) {
  selectedId2.value = id
}
function clearSelection2() {
  selectedId2.value = null
}

// --- Icon group 3: 基本用法 ---
const selectedId3 = ref(false)
function selectIcon3() {
  selectedId3.value = !selectedId3.value
}
function clearSelection3() {
  selectedId3.value = false
}
</script>

<style scoped>
.state-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.state-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin-bottom: 4px;
}

/* Force hover/active states for demo preview */
.demo-hover {
  background: rgba(255, 255, 255, 0.10) !important;
}
.demo-pressed {
  background: rgba(0, 90, 158, 0.70) !important;
  transform: scale(0.96);
}
</style>
