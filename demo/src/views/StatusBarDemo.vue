<template>
  <div class="demo-container">
    <h2>ZStatusBar 状态栏</h2>
    <p class="desc">位于窗口底部的状态信息展示区。</p>
    
    <div class="preview-box">
      <z-status-bar>
        <span>就绪</span>
        <span style="margin-left: auto;">行 1, 列 1</span>
      </z-status-bar>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZStatusBar } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-status-bar>
    <span>状态信息</span>
  </z-status-bar>
</template>

<script setup>
import { ZStatusBar } from 'zijid-ui'
<\/script>`
</script>
