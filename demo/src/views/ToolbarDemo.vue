<template>
  <div class="demo-container">
    <h2>ZToolbar 工具栏</h2>
    <p class="desc">用于放置常用操作按钮的工具条。</p>
    
    <div class="preview-box">
      <z-toolbar>
        <z-button size="small">新建</z-button>
        <z-button size="small">打开</z-button>
        <z-button size="small">保存</z-button>
      </z-toolbar>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZToolbar, ZButton } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-toolbar>
    <z-button size="small">操作</z-button>
  </z-toolbar>
</template>

<script setup>
import { ZToolbar, ZButton } from 'zijid-ui'
<\/script>`
</script>
