<template>
  <div class="demo-container">
    <h2>ZTooltip 文字提示</h2>
    <p class="desc">简单的文字提示气泡框。</p>
    
    <div class="preview-box">
      <z-tooltip content="这是一个提示信息">
        <z-button>鼠标移入查看</z-button>
      </z-tooltip>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZTooltip, ZButton } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const code = `<template>
  <z-tooltip content="提示内容">
    <z-button>触发元素</z-button>
  </z-tooltip>
</template>

<script setup>
import { ZTooltip, ZButton } from 'zijid-ui'
<\/script>`
</script>
