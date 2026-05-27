<template>
  <div class="demo-page">
    <h1>ZDropdown 下拉菜单</h1>
    <p class="desc">向下弹出的列表，通常用于操作集合，支持多种触发方式和菜单位置。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZDropdown :items="basicItems" @select="onSelect">
          <ZButton>下拉菜单</ZButton>
        </ZDropdown>
        <ZDropdown :items="iconItems" @select="onSelect">
          <ZButton type="primary">带图标</ZButton>
        </ZDropdown>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>菜单位置</h2>
      <div class="preview-box" style="justify-content: center; gap: 24px;">
        <ZDropdown :items="basicItems" placement="bottom-start" @select="onSelect">
          <ZButton size="small">左下</ZButton>
        </ZDropdown>
        <ZDropdown :items="basicItems" placement="bottom" @select="onSelect">
          <ZButton size="small">居中</ZButton>
        </ZDropdown>
        <ZDropdown :items="basicItems" placement="bottom-end" @select="onSelect">
          <ZButton size="small">右下</ZButton>
        </ZDropdown>
      </div>
      <ZCodeBlock :code="placementCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>悬停触发</h2>
      <div class="preview-box">
        <ZDropdown :items="hoverItems" trigger="hover" @select="onSelect">
          <ZButton>鼠标悬停</ZButton>
        </ZDropdown>
      </div>
      <ZCodeBlock :code="hoverCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用项与分隔线</h2>
      <div class="preview-box">
        <ZDropdown :items="advancedItems" @select="onSelect">
          <ZButton type="primary">高级菜单</ZButton>
        </ZDropdown>
      </div>
      <ZCodeBlock :code="advancedCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="dropdownProps" :events="dropdownEvents" :slots="dropdownSlots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZDropdown, ZButton, ZCodeBlock, type MenuItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

function onSelect(id: string) {
  console.log('Dropdown select:', id)
}

const basicItems: MenuItem[] = [
  { id: 'action-1', label: '动作 1' },
  { id: 'action-2', label: '动作 2' }
]

const iconItems: MenuItem[] = [
  { id: 'new', label: '新建', icon: 'plus' },
  { id: 'open', label: '打开', icon: 'folder-open' },
  { id: 'save', label: '保存', icon: 'save' },
  { id: 'delete', label: '删除', icon: 'trash' }
]

const hoverItems: MenuItem[] = [
  { id: 'view', label: '查看详情' },
  { id: 'edit', label: '编辑' },
  { id: 'share', label: '分享' }
]

const advancedItems: MenuItem[] = [
  { id: 'copy', label: '复制', icon: 'file' },
  { id: 'cut', label: '剪切', icon: 'edit' },
  { id: 'paste', label: '粘贴', icon: 'edit', disabled: true },
  { id: 'divider-1', label: '', divider: true },
  { id: 'delete', label: '删除', icon: 'trash' },
  { id: 'rename', label: '重命名', icon: 'edit' }
]

const dropdownProps = [
  { name: 'items', type: 'MenuItem[]', default: '-', description: '菜单项列表，必填' },
  { name: 'placement', type: "'bottom' | 'bottom-start' | 'bottom-end'", default: "'bottom'", description: '菜单弹出位置' },
  { name: 'trigger', type: "'click' | 'hover'", default: "'click'", description: '触发方式' }
]

const dropdownEvents = [
  { name: 'select', params: ['id: string'], description: '选择菜单项时触发' }
]

const dropdownSlots = [
  { name: 'default', description: '触发元素', default: true }
]

const basicCode = `<ZDropdown :items="items" @select="onSelect">
  <ZButton>下拉菜单</ZButton>
</ZDropdown>

<script setup>
const items = [
  { id: 'action-1', label: '动作 1' },
  { id: 'action-2', label: '动作 2' }
]
<\/script>`

const placementCode = `<ZDropdown :items="items" placement="bottom-start">
  <ZButton>左下</ZButton>
</ZDropdown>

<ZDropdown :items="items" placement="bottom">
  <ZButton>居中</ZButton>
</ZDropdown>

<ZDropdown :items="items" placement="bottom-end">
  <ZButton>右下</ZButton>
</ZDropdown>`

const hoverCode = `<ZDropdown :items="items" trigger="hover">
  <ZButton>鼠标悬停</ZButton>
</ZDropdown>`

const advancedCode = `<ZDropdown :items="items" @select="onSelect">
  <ZButton>高级菜单</ZButton>
</ZDropdown>

<script setup>
const items = [
  { id: 'copy', label: '复制', icon: 'file' },
  { id: 'paste', label: '粘贴', disabled: true },
  { id: 'divider', label: '', divider: true },
  { id: 'delete', label: '删除', icon: 'trash' }
]
<\/script>`
</script>

