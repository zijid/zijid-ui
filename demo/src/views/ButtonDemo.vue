<template>
  <div class="demo-page">
    <h1>ZButton 按钮</h1>
    <p class="desc">常用的操作按钮，支持多种样式变体和状态。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZButton variant="default">默认按钮</ZButton>
        <ZButton variant="primary">主要按钮</ZButton>
        <ZButton variant="danger">危险按钮</ZButton>
      </div>
      <CodeBlock :code="basicCode" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZButton disabled>禁用按钮</ZButton>
        <ZButton variant="primary" disabled>禁用主要按钮</ZButton>
      </div>
      <CodeBlock :code="disabledCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZButton } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const basicCode = `<ZButton variant="default">默认按钮</ZButton>
<ZButton variant="primary">主要按钮</ZButton>
<ZButton variant="danger">危险按钮</ZButton>`

const disabledCode = `<ZButton disabled>禁用按钮</ZButton>
<ZButton variant="primary" disabled>禁用主要按钮</ZButton>`
</script>

<style scoped>
.demo-page {
  padding: 40px;
}
.desc {
  color: #666;
  margin-bottom: 30px;
}
.demo-section {
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
}
.preview-box {
  background: #f9f9f9;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
