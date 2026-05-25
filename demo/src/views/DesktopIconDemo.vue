<template>
  <div class="demo-container">
    <h2>ZDesktopIcon 桌面图标</h2>
    <p class="desc">桌面环境下的应用程序图标。</p>
    
    <div class="preview-box" style="background: #0078d7; padding: 20px;">
      <ZDesktopIcon label="我的文档" icon="folder" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZDesktopIcon } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <ZDesktopIcon label="图标名称" icon="folder" />
</template>

<script setup>
import { ZDesktopIcon } from 'zijid-ui'
<\/script>`
</script>
