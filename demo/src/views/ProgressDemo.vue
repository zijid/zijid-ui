<template>
  <div class="demo-container">
    <h2>ZProgress 进度条</h2>
    <p class="desc">展示操作或任务的当前进度。</p>
    
    <div class="preview-box">
      <div style="margin-bottom: 16px;">
        <z-progress :percentage="50" />
      </div>
      <z-progress :percentage="80" status="success" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZProgress } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-progress :percentage="50" />
  <z-progress :percentage="80" status="success" />
</template>

<script setup>
import { ZProgress } from 'zijid-ui'
<\/script>`
</script>
