<template>
  <div class="demo-container">
    <h2>ZContextMenu 右键菜单</h2>
    <p class="desc">在特定区域点击右键弹出的操作菜单。</p>
    
    <div class="preview-box" @contextmenu.prevent="showMenu" style="height: 150px; border: 1px dashed #ccc;">
      在此区域点击右键
      <ZContextMenu :visible="menuVisible" :x="x" :y="y" :items="items" @select="handleAction" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZContextMenu, type ContextMenuItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const menuVisible = ref(false)
const x = ref(0)
const y = ref(0)
const items: ContextMenuItem[] = [
  { id: 'copy', label: '复制', icon: 'file' },
  { id: 'paste', label: '粘贴', icon: 'edit' }
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

const code = `<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
import { ref } from 'vue'
import { ZContextMenu } from 'zijid-ui'
const visible = ref(false)
const items = [{ id: 'copy', label: '复制' }]
<\/script>`
</script>
