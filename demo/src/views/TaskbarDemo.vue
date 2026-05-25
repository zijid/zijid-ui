<template>
  <div class="demo-container">
    <h2>ZTaskbar 任务栏</h2>
    <p class="desc">底部任务栏，包含开始菜单、应用图标和系统托盘。</p>
    
    <div class="preview-box">
      <ZTaskbar :windows="windows" time="14:30" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZTaskbar } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const windows = [
  { id: 'explorer', title: '资源管理器', icon: 'folder' as const, active: true },
  { id: 'settings', title: '设置', icon: 'settings' as const }
]

const code = `<template>
  <ZTaskbar :windows="windows" time="14:30" />
</template>

<script setup>
import { ZTaskbar } from 'zijid-ui'
const windows = [{ id: 'explorer', title: '资源管理器', icon: 'folder', active: true }]
<\/script>`
</script>
