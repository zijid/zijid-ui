<template>
  <div class="demo-container">
    <h2>ZTree 树形控件</h2>
    <p class="desc">清晰展示层级结构的数据。</p>

    <div class="preview-box">
      <ZTree v-model="selected" :items="treeData" style="width: 250px;" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZTree, type TreeItem } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const selected = ref('child-1')
const treeData: TreeItem[] = [
  {
    id: 'root',
    label: '根节点',
    icon: 'folder',
    children: [
      { id: 'child-1', label: '子节点 1', icon: 'file' },
      { id: 'child-2', label: '子节点 2', icon: 'file' }
    ]
  }
]

const code = `<template>
  <ZTree v-model="selected" :items="treeData" />
</template>

<script setup>
import { ref } from 'vue'
import { ZTree } from 'zijid-ui'

const selected = ref('child-1')
const treeData = [{ id: 'root', label: '根节点', children: [] }]
<\/script>`
</script>
