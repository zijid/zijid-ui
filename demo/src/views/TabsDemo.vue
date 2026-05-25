<template>
  <div class="demo-container">
    <h2>ZTabs 标签页</h2>
    <p class="desc">用于在同一区域内切换多组相关内容。</p>

    <div class="preview-box">
      <ZTabs v-model="activeKey" :items="items">
        <p>{{ activeKey === 'docs' ? '文档内容区域...' : '设置内容区域...' }}</p>
      </ZTabs>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZTabs, type TabItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const activeKey = ref('docs')
const items: TabItem[] = [
  { label: '文档', value: 'docs' },
  { label: '设置', value: 'settings' }
]

const code = `<template>
  <ZTabs v-model="activeKey" :items="items">
    <p>当前内容</p>
  </ZTabs>
</template>

<script setup>
import { ref } from 'vue'
import { ZTabs } from 'zijid-ui'

const activeKey = ref('docs')
const items = [{ label: '文档', value: 'docs' }]
<\/script>`
</script>
