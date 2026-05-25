<template>
  <div class="demo-page">
    <h1>ZDialog 对话框</h1>
    <p class="desc">模态对话框，用于显示重要信息或进行确认操作。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZButton @click="show = true">打开对话框</ZButton>
        <ZDialog v-model="show" title="提示" @confirm="handleConfirm">
          这是一个基本的对话框示例。
        </ZDialog>
      </div>
      <CodeBlock :code="basicCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZDialog } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const show = ref(false)
const handleConfirm = () => {
  console.log('Confirmed')
}

const basicCode = `<ZDialog v-model="show" title="提示" @confirm="handleConfirm">
  这是一个基本的对话框示例。
</ZDialog>`
</script>

<style scoped>
.demo-page { padding: 40px; }
.desc { color: #666; margin-bottom: 30px; }
.demo-section { margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 30px; }
.preview-box { background: #f9f9f9; padding: 24px; border-radius: 8px; margin-bottom: 16px; display: flex; gap: 16px; align-items: center; }
</style>
