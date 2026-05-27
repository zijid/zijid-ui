<template>
  <div class="demo-page">
    <h1>ZStatusBar 状态栏</h1>
    <p class="desc">底部状态栏，显示应用状态信息，支持左右分区和自定义内容。</p>
    
    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <z-status-bar>
          <span>就绪</span>
          <span style="margin-left: auto;">第 1 行，第 1 列</span>
          <span>UTF-8</span>
          <span>CRLF</span>
        </z-status-bar>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>编辑器风格</h2>
      <div class="preview-box">
        <z-status-bar>
          <span>Ln 12, Col 45</span>
          <span style="margin-left: auto;">JavaScript</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </z-status-bar>
      </div>
      <ZCodeBlock :code="editorCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>应用状态</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-status-bar>
          <span>项目: zijid-ui</span>
          <span style="margin-left: auto;">分支: main</span>
          <span>未保存的更改</span>
        </z-status-bar>
      </div>
      <ZCodeBlock :code="appCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="statusBarProps" 
        :events="statusBarEvents" 
        :slots="statusBarSlots" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZStatusBar, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const statusBarProps = [
  { name: 'fixed', type: 'boolean', default: 'false', description: '是否固定在底部' },
  { name: 'height', type: 'number', default: '24', description: '状态栏高度（像素）' }
]

const statusBarEvents = [
  { name: 'click', params: ['MouseEvent'], description: '点击状态栏时触发' }
]

const statusBarSlots = [
  { name: 'default', description: '状态栏内容', default: true }
]

const basicCode = `<z-status-bar>
  <span>就绪</span>
  <span style="margin-left: auto;">第 1 行，第 1 列</span>
  <span>UTF-8</span>
</z-status-bar>`

const editorCode = `<z-status-bar>
  <span>Ln 12, Col 45</span>
  <span style="margin-left: auto;">JavaScript</span>
  <span>Spaces: 2</span>
  <span>UTF-8</span>
</z-status-bar>`

const appCode = `<z-status-bar>
  <span>项目: zijid-ui</span>
  <span style="margin-left: auto;">分支: main</span>
  <span>未保存的更改</span>
</z-status-bar>`
</script>
