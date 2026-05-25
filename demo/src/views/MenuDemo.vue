<template>
  <div class="demo-container">
    <h2>ZMenu 菜单</h2>
    <p class="desc">为页面和功能提供导航的菜单列表。</p>
    
    <div class="preview-box">
      <ZMenu :items="items" style="width: 220px;" @select="handleSelect" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZMenu, type MenuItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const items: MenuItem[] = [
  { id: 'new', label: '新建', icon: 'plus', shortcut: 'Ctrl+N' },
  { id: 'open', label: '打开', icon: 'folder', shortcut: 'Ctrl+O' },
  { id: 'separator', separator: true },
  { id: 'disabled', label: '禁用项', disabled: true }
]

function handleSelect(id: string) {
  console.log(id)
}

const code = `<template>
  <ZMenu :items="items" @select="handleSelect" />
</template>

<script setup>
import { ZMenu } from 'zijid-ui'
const items = [{ id: 'new', label: '新建', icon: 'plus' }]
<\/script>`
</script>
