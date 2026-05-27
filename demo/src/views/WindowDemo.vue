<template>
  <div class="demo-page">
    <h1>ZWindow 组件</h1>
    <p class="desc">模拟 Windows 10 风格的窗口组件，支持拖拽、最大化/最小化、恢复和焦点管理。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="controls">
        <ZButton type="primary" @click="visible = true">新建打开窗口</ZButton>
        <span class="status-text">当前状态: {{ visible ? '显示' : '隐藏' }}</span>
      </div>

      <div class="preview-box">
        <ZWindow 
          v-model="visible" 
          title="我的窗口 - Zijid UI" 
          :x="50" 
          :y="30" 
          :width="400" 
          :height="280"
        >
          <div class="window-content">
            <p>欢迎使用 ZWindow 组件！</p>
            <ul>
              <li><strong>拖拽标题栏</strong>：如果窗口是最大化的，拖拽会先恢复再移动</li>
              <li><strong>点击最大化按钮</strong>：将窗口最大化到整个屏幕</li>
              <li><strong>点击最小化按钮</strong>：最小化到任务栏</li>
              <li><strong>点击关闭按钮</strong>：关闭窗口</li>
            </ul>
          </div>
        </ZWindow>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>多窗口焦点管理</h2>
      <p class="sub-desc">点击剩余窗口或点击标题栏来管理 Z-Index。</p>
      <div class="preview-box multi-window-demo">
        <ZWindow v-model="win1" title="窗口 A (蓝色)" :x="20" :y="20" :width="260" :height="180" style="background: #e3f2fd;">
          <p>我是窗口 A</p>
          <ZButton size="small" @click="win1 = false">关闭我</ZButton>
        </ZWindow>
        
        <ZWindow v-model="win2" title="窗口 B (绿色)" :x="100" :y="60" :width="260" :height="180" style="background: #e8f5e9;">
          <p>我是窗口 B</p>
          <ZButton size="small" @click="win2 = false">关闭我</ZButton>
        </ZWindow>

        <div class="open-buttons">
          <ZButton v-if="!win1" @click="win1 = true">打开窗口 A</ZButton>
          <ZButton v-if="!win2" @click="win2 = true">打开窗口 B</ZButton>
        </div>
      </div>
      <ZCodeBlock :code="multiCode" language="vue" />
    </div>

    <!-- API 文档部分 -->
    <div class="demo-section">
      <h2>API 文档</h2>
      
      <UsageBlock 
        title="基本用法" 
        :code="basicUsageCode" 
        description="这是 ZWindow 组件的基本使用示例，展示了最常用的属性和事件。"
      >
        <template #demo>
          <div class="demo-window-container">
            <ZWindow 
              v-model="demoVisible" 
              title="示例窗口" 
              :x="20" 
              :y="20" 
              :width="300" 
              :height="200"
              style="border: 2px solid #007acc;"
            >
              <div class="demo-window-content">
                <p>这是一个演示窗口</p>
                <p>点击标题栏可以拖拽</p>
                <p>使用右上角按钮可以最小化/最大化/关闭</p>
                <ZButton size="small" @click="demoVisible = false">关闭</ZButton>
              </div>
            </ZWindow>
          </div>
        </template>
      </UsageBlock>
      
      <UsageBlock 
        title="高级用法" 
        :code="advancedUsageCode" 
        description="展示了完整的事件监听和状态管理的使用方式。"
      >
        <template #demo>
          <div class="demo-window-container">
            <ZWindow 
              v-model="demoAdvanced.visible"
              :title="demoAdvanced.title"
              :x="40"
              :y="40"
              :width="350"
              :height="250"
              :minimized="demoAdvanced.minimized"
              :maximized="demoAdvanced.maximized"
              @move="demoAdvanced.onMove"
              @close="demoAdvanced.onClose"
              style="border: 2px solid #28a745;"
            >
              <div class="demo-window-content">
                <h3>{{ demoAdvanced.title }}</h3>
                <p>状态: {{ 
                  demoAdvanced.minimized ? '最小化' : 
                  demoAdvanced.maximized ? '最大化' : '正常' 
                }}</p>
                <p>位置: {{ demoAdvanced.x }}, {{ demoAdvanced.y }}</p>
                <div style="margin-top: 10px;">
                  <ZButton size="small" @click="demoAdvanced.minimized = !demoAdvanced.minimized">
                    {{ demoAdvanced.minimized ? '恢复' : '最小化' }}
                  </ZButton>
                  <ZButton size="small" @click="demoAdvanced.maximized = !demoAdvanced.maximized" style="margin-left: 8px;">
                    {{ demoAdvanced.maximized ? '还原' : '最大化' }}
                  </ZButton>
                </div>
              </div>
            </ZWindow>
          </div>
        </template>
      </UsageBlock>
      
      <ApiTable 
        :props="windowProps" 
        :events="windowEvents" 
        :slots="windowSlots" 
        :exposes="windowExposes" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCodeBlock, ZWindow, ZButton } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'
import UsageBlock from '../components/UsageBlock.vue'

const visible = ref(true)
const win1 = ref(true)
const win2 = ref(true)
const demoVisible = ref(true)

const demoAdvanced = ref({
  visible: true,
  title: '高级窗口示例',
  x: 40,
  y: 40,
  minimized: false,
  maximized: false,
  onMove: (pos: any) => console.log('Move:', pos),
  onClose: () => console.log('Close')
})

const basicCode = `<ZWindow v-model="visible" title="示例窗口" :x="50" :y="30">
  <div>窗口内容...</div>
</ZWindow>

<!-- 点击按钮打开窗口 -->
<ZButton @click="visible = true">新建打开窗口</ZButton>`

const multiCode = `<ZWindow v-model="win1" title="窗口 A" :x="20" :y="20">...</ZWindow>
<ZWindow v-model="win2" title="窗口 B" :x="100" :y="60">...</ZWindow>

// 点击标题栏或 body 可以触发 focus 事件来管理 Z-Index`

// API 定义
const windowProps = [
  { name: 'modelValue', type: 'boolean', default: 'undefined', description: '窗口是否显示' },
  { name: 'title', type: 'string', default: 'Window', description: '窗口标题' },
  { name: 'x', type: 'number', default: '0', description: '窗口 X 坐标位置' },
  { name: 'y', type: 'number', default: '0', description: '窗口 Y 坐标位置' },
  { name: 'width', type: 'number | string', default: '400', description: '窗口宽度' },
  { name: 'height', type: 'number | string', default: '300', description: '窗口高度' },
  { name: 'minimized', type: 'boolean', default: 'undefined', description: '窗口是否最小化' },
  { name: 'maximized', type: 'boolean', default: 'undefined', description: '窗口是否最大化' },
  { name: 'focused', type: 'boolean', default: 'undefined', description: '窗口是否聚焦' },
  { name: 'zIndex', type: 'number', default: 'undefined', description: '窗口层级索引' },
  { name: 'draggable', type: 'boolean', default: 'true', description: '是否可拖拽' }
]

const windowEvents = [
  { name: 'update:modelValue', params: ['boolean'], description: '窗口显示状态更新' },
  { name: 'update:minimized', params: ['boolean'], description: '最小化状态更新' },
  { name: 'update:maximized', params: ['boolean'], description: '最大化状态更新' },
  { name: 'close', params: [], description: '窗口关闭时触发' },
  { name: 'minimize', params: [], description: '窗口最小化时触发' },
  { name: 'maximize', params: [], description: '窗口最大化时触发' },
  { name: 'restore', params: [], description: '窗口恢复时触发' },
  { name: 'focus', params: ['zIndex: number'], description: '窗口聚焦时触发' },
  { name: 'move', params: ['{ x: number; y: number }'], description: '窗口移动时触发' },
  { name: 'move-start', params: ['{ x: number; y: number }'], description: '窗口开始移动时触发' },
  { name: 'move-end', params: ['{ x: number; y: number }'], description: '窗口结束移动时触发' }
]

const windowSlots = [
  { name: 'title', description: '自定义窗口标题内容', default: false },
  { name: 'default', description: '窗口内容区域', default: true }
]

const windowExposes = [
  { name: 'focusWindow', type: '() => void', description: '手动聚焦窗口' },
  { name: 'setPosition', type: '(x: number, y: number) => void', description: '设置窗口位置' },
  { name: 'close', type: '() => void', description: '关闭窗口' },
  { name: 'minimize', type: '() => void', description: '最小化窗口' },
  { name: 'toggleMaximize', type: '() => void', description: '切换最大化状态' }
]

// 使用示例代码 - 注意：这里使用了转义字符防止解析器误判
const basicUsageCode = `<template>
  <ZWindow 
    v-model="visible" 
    title="示例窗口" 
    :x="50" 
    :y="30" 
    :width="400" 
    :height="280"
  >
    <div class="window-content">
      <p>这是一个基本的窗口示例</p>
      <ZButton @click="visible = false">关闭窗口</ZButton>
    </div>
  </ZWindow>
<\/template>

<script setup>
import { ref } from 'vue'
import { ZWindow, ZButton } from 'zijid-ui'

const visible = ref(true)
<\/script>`

const advancedUsageCode = `<template>
  <div class="desktop-container">
    <ZWindow 
      v-model="win1.visible"
      :title="win1.title"
      :x="win1.x"
      :y="win1.y"
      :width="win1.width"
      :height="win1.height"
      :minimized="win1.minimized"
      :maximized="win1.maximized"
      @move="win1.onMove"
      @close="win1.onClose"
    >
      <div class="window-content">
        <h3>{{ win1.title }}</h3>
        <p>状态: {{ win1.minimized ? '最小化' : win1.maximized ? '最大化' : '正常' }}</p>
        <p>位置: {{ win1.x }}, {{ win1.y }}</p>
      </div>
    </ZWindow>
  </div>
<\/template>`
</script>


