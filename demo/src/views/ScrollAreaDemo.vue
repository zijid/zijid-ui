<template>
  <div class="demo-container">
    <h2>ZScrollArea 滚动区域</h2>
    <p class="desc">美化原生滚动条的容器组件。</p>
    
    <div class="preview-box">
      <z-scroll-area style="height: 150px; width: 300px;">
        <p v-for="i in 20" :key="i">滚动内容行 {{ i }}</p>
      </z-scroll-area>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZScrollArea } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-scroll-area style="height: 200px;">
    <div>长内容...</div>
  </z-scroll-area>
</template>

<script setup>
import { ZScrollArea } from 'zijid-ui'
<\/script>`
</script>
