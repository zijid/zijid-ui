<template>
  <div class="demo-page">
    <h1>ZInput 输入框</h1>
    <p class="desc">通过鼠标或键盘输入字符，支持多种类型和状态。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZInput v-model="value1" label="用户名" placeholder="请输入用户名" />
      </div>
      <CodeBlock :code="basicCode" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZInput v-model="value2" label="只读输入框" disabled />
      </div>
      <CodeBlock :code="disabledCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZInput } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const value1 = ref('')
const value2 = ref('已禁用的内容')

const basicCode = `<ZInput v-model="value" label="用户名" placeholder="请输入用户名" />`
const disabledCode = `<ZInput v-model="value" label="只读输入框" disabled />`
</script>

<style scoped>
.demo-page { padding: 40px; }
.desc { color: #666; margin-bottom: 30px; }
.demo-section { margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 30px; }
.preview-box { background: #f9f9f9; padding: 24px; border-radius: 8px; margin-bottom: 16px; display: flex; gap: 16px; align-items: center; }
</style>
