<template>
  <div class="demo-page">
    <h1>ZCheckbox 复选框</h1>
    <p class="desc">一组备选项中进行多选。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZCheckbox v-model="checked" label="同意协议" />
      </div>
      <CodeBlock :code="basicCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCheckbox } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const checked = ref(false)
const basicCode = `<ZCheckbox v-model="checked" label="同意协议" />`
</script>

<style scoped>
.demo-page { padding: 40px; }
.desc { color: #666; margin-bottom: 30px; }
.demo-section { margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 30px; }
.preview-box { background: #f9f9f9; padding: 24px; border-radius: 8px; margin-bottom: 16px; display: flex; gap: 16px; align-items: center; }
</style>
