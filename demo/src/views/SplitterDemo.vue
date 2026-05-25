<template>
  <div class="demo-container">
    <h2>ZSplitter 分割面板</h2>
    <p class="desc">将区域进行分隔，支持拖拽调整大小。</p>
    
    <div class="preview-box" style="height: 200px;">
      <z-splitter>
        <template #first>
          <div style="padding: 16px;">左侧面板</div>
        </template>
        <template #second>
          <div style="padding: 16px;">右侧面板</div>
        </template>
      </z-splitter>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZSplitter } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-splitter>
    <template #first><div>左</div></template>
    <template #second><div>右</div></template>
  </z-splitter>
</template>

<script setup>
import { ZSplitter } from 'zijid-ui'
<\/script>`
</script>
