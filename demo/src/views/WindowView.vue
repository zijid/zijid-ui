<template>
  <div class="demo-page">
    <h1>ZWindow 窗口组件</h1>
    <p class="desc">模拟 Windows 10 风格的窗口组件，支持拖拽、最大化/最小化、恢复和焦点管理。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZButton @click="showWindow = true">打开窗口</ZButton>
        <ZButton @click="showWindow = false">关闭窗口</ZButton>
        <ZButton @click="resetWindow">重置窗口</ZButton>
      </div>

      <div class="desktop-area">
        <ZWindow
          v-model="showWindow"
          title="Windows 10 窗口"
          :x="windowStyle.x"
          :y="windowStyle.y"
          :width="windowStyle.width"
          :height="windowStyle.height"
          @close="showWindow = false"
        >
          <div class="window-content">
            <h3>窗口内容</h3>
            <p>这是一个 Windows 10 风格的窗口，具有完整的窗口管理功能：</p>
            <ul>
              <li><strong>拖拽标题栏</strong>：可拖拽移动窗口</li>
              <li><strong>最大化/还原</strong>：点击最大化按钮切换</li>
              <li><strong>最小化</strong>：最小化到任务栏</li>
              <li><strong>关闭</strong>：关闭窗口</li>
            </ul>
          </div>
        </ZWindow>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>多窗口示例</h2>
      <p class="desc">展示了多窗口的焦点管理和层级控制。</p>

      <div class="preview-box">
        <ZButton v-if="!win1" @click="win1 = true">打开窗口 A</ZButton>
        <ZButton v-if="!win2" @click="win2 = true">打开窗口 B</ZButton>
      </div>

      <div class="desktop-area multi-window">
        <ZWindow v-model="win1" title="窗口 A" :x="30" :y="30" :width="280" :height="200">
          <div class="window-content">
            <p>窗口 A 内容</p>
            <ZButton size="small" @click="win1 = false">关闭</ZButton>
          </div>
        </ZWindow>

        <ZWindow v-model="win2" title="窗口 B" :x="140" :y="80" :width="280" :height="200">
          <div class="window-content">
            <p>窗口 B 内容</p>
            <ZButton size="small" @click="win2 = false">关闭</ZButton>
          </div>
        </ZWindow>
      </div>
      <ZCodeBlock :code="multiCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="windowProps" :events="windowEvents" :slots="windowSlots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ZButton, ZWindow } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const showWindow = ref(true)
const win1 = ref(true)
const win2 = ref(true)

const windowStyle = reactive({
  x: 100,
  y: 100,
  width: 500,
  height: 350
})

const resetWindow = () => {
  windowStyle.x = 100
  windowStyle.y = 100
  windowStyle.width = 500
  windowStyle.height = 350
  showWindow.value = true
}

const basicCode = `<ZWindow v-model="visible" title="窗口标题" :x="100" :y="100" :width="500" :height="350">
  <div>窗口内容</div>
</ZWindow>`

const multiCode = `<ZWindow v-model="win1" title="窗口 A" :x="30" :y="30" :width="280" :height="200">
  ...
</ZWindow>
<ZWindow v-model="win2" title="窗口 B" :x="140" :y="80" :width="280" :height="200">
  ...
</ZWindow>`

const windowProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '窗口是否显示（双向绑定）' },
  { name: 'title', type: 'string', default: "'Window'", description: '窗口标题' },
  { name: 'x', type: 'number', default: '0', description: '窗口 X 坐标位置' },
  { name: 'y', type: 'number', default: '0', description: '窗口 Y 坐标位置' },
  { name: 'width', type: 'number | string', default: '400', description: '窗口宽度' },
  { name: 'height', type: 'number | string', default: '300', description: '窗口高度' },
  { name: 'minimized', type: 'boolean', default: 'false', description: '窗口是否最小化' },
  { name: 'maximized', type: 'boolean', default: 'false', description: '窗口是否最大化' },
  { name: 'focused', type: 'boolean', default: '-', description: '窗口是否聚焦' },
  { name: 'zIndex', type: 'number', default: '-', description: '窗口层级索引' },
  { name: 'draggable', type: 'boolean', default: 'true', description: '窗口是否可拖拽' }
]

const windowEvents = [
  { name: 'update:modelValue', params: ['boolean'], description: '窗口显示状态更新' },
  { name: 'update:minimized', params: ['boolean'], description: '最小化状态更新' },
  { name: 'update:maximized', params: ['boolean'], description: '最大化状态更新' },
  { name: 'close', params: [], description: '窗口关闭时触发' },
  { name: 'minimize', params: [], description: '窗口最小化时触发' },
  { name: 'maximize', params: [], description: '窗口最大化时触发' },
  { name: 'restore', params: [], description: '窗口恢复时触发' },
  { name: 'focus', params: ['zIndex'], description: '窗口聚焦时触发' },
  { name: 'move', params: ['{ x, y }'], description: '窗口移动时触发' },
  { name: 'move-start', params: ['{ x, y }'], description: '窗口开始移动时触发' },
  { name: 'move-end', params: ['{ x, y }'], description: '窗口结束移动时触发' }
]

const windowSlots = [
  { name: 'default', description: '窗口内容区域' }
]
</script>

<style scoped>
.desktop-area { background: #e8e8e8; border: 2px solid #ccc; border-radius: 6px; width: 100%; height: 400px; position: relative; overflow: hidden; margin-bottom: 32px; }
.desktop-area.multi-window { height: 350px; }
.window-content { padding: 16px; line-height: 1.6; }
.window-content h3 { font-size: 16px; font-weight: 600; margin-bottom: 12px; }
.window-content ul { padding-left: 20px; }
.window-content li { margin-bottom: 6px; }
</style>
