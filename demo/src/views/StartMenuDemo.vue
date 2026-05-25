<template>
  <div class="demo-container">
    <h2>ZStartMenu 开始菜单</h2>
    <p class="desc">Windows 风格的开始菜单。</p>
    
    <div class="preview-box">
      <ZStartMenu :visible="true" :apps="apps" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZStartMenu } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const apps = [
  { id: 'explorer', title: '资源管理器', icon: 'folder' as const },
  { id: 'settings', title: '设置', icon: 'settings' as const },
  { id: 'documents', title: '文档', icon: 'file' as const }
]

const code = `<template>
  <ZStartMenu :visible="true" :apps="apps" />
</template>

<script setup>
import { ZStartMenu } from 'zijid-ui'
const apps = [{ id: 'settings', title: '设置', icon: 'settings' }]
<\/script>`
</script>
