<template>
  <div class="demo-page">
    <h1>ZToolbar 工具栏</h1>
    <p class="desc">用于放置常用操作按钮的工具栏，支持按钮分组。</p>
    
    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <z-toolbar>
          <z-button size="small">新建</z-button>
          <z-button size="small">打开</z-button>
          <z-button size="small">保存</z-button>
        </z-toolbar>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带图标</h2>
      <div class="preview-box">
        <z-toolbar>
          <z-button size="small" icon="plus">新建</z-button>
          <z-button size="small" icon="folder">打开</z-button>
          <z-button size="small" icon="save">保存</z-button>
          <z-button size="small" icon="trash" type="danger">删除</z-button>
        </z-toolbar>
      </div>
      <ZCodeBlock :code="iconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>密集工具栏</h2>
      <div class="preview-box">
        <z-toolbar>
          <z-button size="small" icon="undo">撤销</z-button>
          <z-button size="small" icon="redo">重做</z-button>
          <span style="width:1px;height:24px;background:#d0d0d0;margin:0 4px;"></span>
          <z-button size="small" icon="cut">剪切</z-button>
          <z-button size="small" icon="copy">复制</z-button>
          <z-button size="small" icon="paste">粘贴</z-button>
        </z-toolbar>
      </div>
      <ZCodeBlock :code="denseCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="toolbarProps" 
        :events="toolbarEvents" 
        :slots="toolbarSlots" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZToolbar, ZButton, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const toolbarProps = [
  { name: 'compact', type: 'boolean', default: 'false', description: '紧凑模式，减小间距' }
]

const toolbarEvents = [
  { name: 'click', params: ['MouseEvent'], description: '点击工具栏时触发' }
]

const toolbarSlots = [
  { name: 'default', description: '工具栏内容', default: true }
]

const basicCode = `<z-toolbar>
  <z-button size="small">新建</z-button>
  <z-button size="small">打开</z-button>
  <z-button size="small">保存</z-button>
</z-toolbar>`

const iconCode = `<z-toolbar>
  <z-button size="small" icon="plus">新建</z-button>
  <z-button size="small" icon="folder">打开</z-button>
  <z-button size="small" icon="save">保存</z-button>
</z-toolbar>`

const denseCode = `<z-toolbar>
  <z-button size="small" icon="undo">撤销</z-button>
  <z-button size="small" icon="redo">重做</z-button>
  <!-- 分隔线 -->
  <z-button size="small" icon="copy">复制</z-button>
</z-toolbar>`
</script>
