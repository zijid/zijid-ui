<template>
  <div class="demo-page">
    <h1>ZContextMenu 右键菜单</h1>
    <p class="desc">在特定区域点击右键弹出的操作菜单，支持图标、分隔线和嵌套层级。</p>
    
    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box" @contextmenu.prevent="showMenu" style="height: 150px; border: 1px dashed #ccc; justify-content: center;">
        <span>在此区域点击右键</span>
        <ZContextMenu v-model:visible="menuVisible" :x="x" :y="y" :items="items" @select="handleAction" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带图标菜单</h2>
      <div class="preview-box" @contextmenu.prevent="showIconMenu" style="height: 150px; border: 1px dashed #ccc; justify-content: center;">
        <span>在此区域点击右键</span>
        <ZContextMenu v-model:visible="iconMenuVisible" :x="ix" :y="iy" :items="iconItems" @select="handleIconAction" />
      </div>
      <ZCodeBlock :code="iconMenuCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="contextMenuProps" 
        :events="contextMenuEvents" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZContextMenu, type ContextMenuItem, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const menuVisible = ref(false)
const x = ref(0)
const y = ref(0)
const items: ContextMenuItem[] = [
  { id: 'copy', label: '复制', icon: 'file' },
  { id: 'paste', label: '粘贴', icon: 'edit' },
  { id: 'separator', label: '-', separator: true },
  { id: 'delete', label: '删除', icon: 'trash' }
]

const showMenu = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
  menuVisible.value = true
}

const handleAction = (id: string) => {
  console.log(id)
  menuVisible.value = false
}

const iconMenuVisible = ref(false)
const ix = ref(0)
const iy = ref(0)
const iconItems: ContextMenuItem[] = [
  { id: 'new', label: '新建文件', icon: 'file' },
  { id: 'new-folder', label: '新建文件夹', icon: 'folder' },
  { id: 'separator', label: '-', separator: true },
  { id: 'rename', label: '重命名', icon: 'edit' },
  { id: 'properties', label: '属性', icon: 'settings' }
]

const showIconMenu = (e: MouseEvent) => {
  ix.value = e.clientX
  iy.value = e.clientY
  iconMenuVisible.value = true
}

const handleIconAction = (id: string) => {
  console.log(id)
  iconMenuVisible.value = false
}

const contextMenuProps = [
  { name: 'visible', type: 'boolean', default: '-', description: '是否显示' },
  { name: 'x', type: 'number', default: '-', description: '菜单位置x坐标，必填' },
  { name: 'y', type: 'number', default: '-', description: '菜单位置y坐标，必填' },
  { name: 'items', type: 'ContextMenuItem[]', default: '-', description: '菜单项列表，必填' }
]

const contextMenuEvents = [
  { name: 'select', params: ['id: string'], description: '选择菜单项时触发' },
  { name: 'close', params: [], description: '关闭菜单时触发' }
]

const basicCode = `<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'copy', label: '复制' },
  { id: 'paste', label: '粘贴' },
]
<\/script>`

const iconMenuCode = `<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'new', label: '新建文件', icon: 'file' },
  { id: 'separator', label: '-', separator: true },
  { id: 'delete', label: '删除', icon: 'trash' },
]
<\/script>`
</script>
