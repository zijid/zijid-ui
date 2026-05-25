<template>
  <div class="demo-container">
    <h2>ZPanel 面板</h2>
    <p class="desc">用于分组和展示内容的容器组件。</p>
    
    <div class="preview-box">
      <z-panel title="系统信息" style="width: 300px;">
        <p>操作系统: Windows 10</p>
        <p>版本: 22H2</p>
      </z-panel>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZPanel } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-panel title="标题">
    <p>内容区域...</p>
  </z-panel>
</template>

<script setup>
import { ZPanel } from 'zijid-ui'
<\/script>`
</script>
