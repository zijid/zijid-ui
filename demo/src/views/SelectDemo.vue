<template>
  <div class="demo-page">
    <h1>ZSelect 选择器</h1>
    <p class="desc">当选项过多时，使用下拉菜单展示并选择内容。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZSelect v-model="value" :options="options" label="城市" placeholder="请选择城市" />
      </div>
      <CodeBlock :code="basicCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSelect, type SelectOption } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const value = ref('')
const options: SelectOption[] = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' }
]

const basicCode = `<ZSelect v-model="value" :options="options" label="城市" placeholder="请选择城市" />`
</script>

<style scoped>
.demo-page { padding: 40px; }
.desc { color: #666; margin-bottom: 30px; }
.demo-section { margin-bottom: 40px; border-bottom: 1px solid #eee; padding-bottom: 30px; }
.preview-box { background: #f9f9f9; padding: 24px; border-radius: 8px; margin-bottom: 16px; display: flex; gap: 16px; align-items: center; }
</style>
