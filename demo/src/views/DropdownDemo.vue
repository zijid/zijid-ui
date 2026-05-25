<template>
  <div class="demo-container">
    <h2>ZDropdown 下拉菜单</h2>
    <p class="desc">向下弹出的列表，通常用于操作集合。</p>
    
    <div class="preview-box">
      <ZDropdown :items="items" @select="handleSelect">
        <ZButton>下拉菜单</ZButton>
      </ZDropdown>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZDropdown, ZButton, type MenuItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const items: MenuItem[] = [
  { id: 'action-1', label: '动作 1' },
  { id: 'action-2', label: '动作 2' }
]

function handleSelect(id: string) {
  console.log(id)
}

const code = `<template>
  <ZDropdown :items="items" @select="handleSelect">
    <ZButton>触发按钮</ZButton>
  </ZDropdown>
</template>

<script setup>
import { ZDropdown, ZButton } from 'zijid-ui'
const items = [{ id: 'action-1', label: '动作 1' }]
<\/script>`
</script>
