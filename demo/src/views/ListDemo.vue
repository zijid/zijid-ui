<template>
  <div class="demo-container">
    <h2>ZList 列表</h2>
    <p class="desc">基础列表组件，用于展示数据集合。</p>
    
    <div class="preview-box">
      <ZList v-model="selected" :items="items" style="width: 300px;" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZList, type ListItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const selected = ref('1')
const items: ListItem[] = [
  { id: '1', label: '列表项 1', icon: 'file' },
  { id: '2', label: '列表项 2', icon: 'folder' },
  { id: '3', label: '列表项 3', icon: 'settings' }
]

const code = `<template>
  <ZList v-model="selected" :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { ZList } from 'zijid-ui'
const selected = ref('1')
const items = [{ id: '1', label: '列表项 1' }]
<\/script>`
</script>
