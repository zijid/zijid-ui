<template>
  <div class="demo-page">
    <h1>ZTree 树形控件</h1>
    <p class="desc">清晰展示层级结构的数据，支持图标、展开折叠和选中。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZTree v-model="selected" :items="treeData" style="width: 250px;" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>展开指定节点</h2>
      <div class="preview-box">
        <ZTree v-model="selected2" :items="expandedTree" :default-expanded-ids="['root']" style="width: 250px;" />
      </div>
      <ZCodeBlock :code="expandedCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>多层嵌套</h2>
      <div class="preview-box">
        <ZTree v-model="selected3" :items="deepTree" :default-expanded-ids="['root', 'dev']" style="width: 250px;" />
      </div>
      <ZCodeBlock :code="deepCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="treeProps" 
        :events="treeEvents" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCodeBlock, ZTree, type TreeItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const selected = ref('child-1')
const selected2 = ref('sub-1')
const selected3 = ref('fe')

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

const expandedTree: TreeItem[] = [
  {
    id: 'root',
    label: '项目',
    icon: 'folder',
    children: [
      { id: 'sub-1', label: 'src', icon: 'folder' },
      { id: 'sub-2', label: 'public', icon: 'folder' },
      { id: 'sub-3', label: 'package.json', icon: 'file' }
    ]
  }
]

const deepTree: TreeItem[] = [
  {
    id: 'root',
    label: '项目',
    icon: 'folder',
    children: [
      {
        id: 'dev',
        label: '开发',
        icon: 'folder',
        children: [
          { id: 'fe', label: '前端', icon: 'code' },
          { id: 'be', label: '后端', icon: 'server' }
        ]
      },
      { id: 'docs', label: '文档', icon: 'file-text' }
    ]
  }
]

const treeProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '选中节点id' },
  { name: 'items', type: 'TreeItem[]', default: '-', description: '树形数据，必填' },
  { name: 'defaultExpandedIds', type: 'string[]', default: '[]', description: '默认展开的节点id列表' }
]

const treeEvents = [
  { name: 'update:modelValue', params: ['value: string'], description: '选中节点变化时触发' }
]

const basicCode = `<ZTree v-model="selected" :items="treeData" />

<script setup>
const selected = ref('child-1')
const treeData = [{
  id: 'root', label: '根节点',
  children: [{ id: 'child-1', label: '子节点 1' }]
}]
<\/script>`

const expandedCode = `<ZTree v-model="selected" :items="treeData" :default-expanded-ids="['root']" />

<script setup>
const treeData = [{
  id: 'root', label: '项目',
  children: [{ id: 'src', label: 'src', icon: 'folder' }]
}]
<\/script>`

const deepCode = `<ZTree v-model="selected" :items="treeData" :default-expanded-ids="['root']" />

<script setup>
const treeData = [{
  id: 'root', label: '项目',
  children: [{
    id: 'dev', label: '开发',
    children: [{ id: 'fe', label: '前端' }]
  }]
}]
<\/script>`
</script>

