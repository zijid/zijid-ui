<template>
  <div class="demo-container">
    <h2>ZToast 消息提示</h2>
    <p class="desc">展示操作反馈信息。</p>

    <div class="preview-box">
      <ZButton @click="visible = true">显示 Toast</ZButton>
      <ZToast v-model:visible="visible" title="成功" message="操作成功" type="success" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZToast } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const visible = ref(true)

const code = `<template>
  <ZButton @click="visible = true">显示 Toast</ZButton>
  <ZToast v-model:visible="visible" message="操作成功" type="success" />
</template>

<script setup>
import { ref } from 'vue'
import { ZButton, ZToast } from 'zijid-ui'

const visible = ref(true)
<\/script>`
</script>
