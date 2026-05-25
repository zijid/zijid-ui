<template>
  <div class="demo-container">
    <h2>ZDesktop 桌面</h2>
    <p class="desc">模拟 Windows 桌面的容器，支持图标排列和窗口管理。</p>
    
    <div class="preview-box" style="height: 400px; background: #0078d7;">
      <z-desktop :icons="desktopIcons" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZDesktop } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const desktopIcons = [
  { id: '1', name: '此电脑', icon: 'folder' },
  { id: '2', name: '回收站', icon: 'file' }
]

const code = `<template>
  <z-desktop :icons="icons" />
</template>

<script setup>
import { ZDesktop } from 'zijid-ui'
const icons = [{ id: '1', name: 'My PC', icon: 'folder' }]
<\/script>`
</script>
