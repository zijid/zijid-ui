<template>
  <div class="demo-page">
    <h1>ZMenu 菜单</h1>
    <p class="desc">垂直菜单列表，支持嵌套、图标和禁用状态。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZMenu :items="basicItems" style="width: 200px;" @select="onSelect" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带图标</h2>
      <div class="preview-box">
        <ZMenu :items="iconItems" style="width: 200px;" />
      </div>
      <ZCodeBlock :code="iconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>嵌套菜单</h2>
      <div class="preview-box">
        <ZMenu :items="nestedItems" style="width: 220px;" />
      </div>
      <ZCodeBlock :code="nestedCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用项</h2>
      <div class="preview-box">
        <ZMenu :items="disabledItems" style="width: 200px;" />
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="menuProps" :events="menuEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZMenu, ZCodeBlock, type MenuItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const onSelect = (id: string) => {
  console.log('Menu selected:', id)
}

const basicItems: MenuItem[] = [
  { id: 'file', label: '文件' },
  { id: 'edit', label: '编辑' },
  { id: 'view', label: '查看' },
  { id: 'tools', label: '工具' },
  { id: 'help', label: '帮助' }
]

const iconItems: MenuItem[] = [
  { id: 'file', label: '文件', icon: 'folder' },
  { id: 'edit', label: '编辑', icon: 'edit' },
  { id: 'view', label: '查看', icon: 'activity' },
  { id: 'tools', label: '工具', icon: 'toolbar' },
  { id: 'help', label: '帮助', icon: 'info' }
]

const nestedItems: MenuItem[] = [
  {
    id: 'file', label: '文件', icon: 'folder',
    children: [
      { id: 'new', label: '新建', icon: 'plus' },
      { id: 'open', label: '打开', icon: 'folder-open' },
      { id: 'save', label: '保存', icon: 'save' },
      {
        id: 'recent', label: '最近文件',
        children: [
          { id: 'doc1', label: '文档 1' },
          { id: 'doc2', label: '文档 2' },
          { id: 'doc3', label: '文档 3' }
        ]
      },
      { id: 'close', label: '关闭', disabled: true }
    ]
  },
  {
    id: 'edit', label: '编辑', icon: 'edit',
    children: [
      { id: 'undo', label: '撤销' },
      { id: 'redo', label: '重做' },
      { id: 'cut', label: '剪切' },
      { id: 'copy', label: '复制' },
      { id: 'paste', label: '粘贴' }
    ]
  },
  { id: 'view', label: '查看', icon: 'activity' }
]

const disabledItems: MenuItem[] = [
  { id: 'item1', label: '正常项 1' },
  { id: 'item2', label: '正常项 2' },
  { id: 'item3', label: '禁用项', disabled: true },
  { id: 'item4', label: '正常项 3' },
  { id: 'item5', label: '禁用项 2', disabled: true }
]

const menuProps = [
  { name: 'items', type: 'MenuItem[]', default: '-', description: '菜单项列表，必填' },
  { name: 'compact', type: 'boolean', default: 'false', description: '紧凑模式' }
]

const menuEvents = [
  { name: 'select', params: ['id: string'], description: '选择菜单项时触发' }
]

const basicCode = `<ZMenu :items="items" @select="onSelect" />

<script setup>
const items = [
  { id: 'file', label: '文件' },
  { id: 'edit', label: '编辑' }
]
<\/script>`

const iconCode = `<ZMenu :items="items" />

<script setup>
const items = [
  { id: 'file', label: '文件', icon: 'folder' },
  { id: 'edit', label: '编辑', icon: 'edit' }
]
<\/script>`

const nestedCode = `<ZMenu :items="items" />

<script setup>
const items = [
  {
    id: 'file', label: '文件',
    children: [
      { id: 'new', label: '新建' },
      { id: 'open', label: '打开' },
      {
        id: 'recent', label: '最近文件',
        children: [
          { id: 'doc1', label: '文档 1' }
        ]
      }
    ]
  }
]
<\/script>`

const disabledCode = `<ZMenu :items="items" />

<script setup>
const items = [
  { id: 'item1', label: '正常项' },
  { id: 'item2', label: '禁用项', disabled: true }
]
<\/script>`
</script>

