<template>
  <div class="demo-page">
    <h1>ZList 列表</h1>
    <p class="desc">简洁的列表选择组件，支持图标和辅助文字。</p>
    
    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <z-list v-model="selected" :items="listItems" style="width: 240px;" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带描述</h2>
      <div class="preview-box">
        <z-list v-model="selected2" :items="itemsWithDesc" style="width: 240px;" />
      </div>
      <ZCodeBlock :code="descCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>图标列表</h2>
      <div class="preview-box">
        <z-list v-model="selected3" :items="iconItems" style="width: 240px;" />
      </div>
      <ZCodeBlock :code="iconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable 
        :props="listProps" 
        :events="listEvents" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCodeBlock, ZList, type ListItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const selected = ref('item-1')
const selected2 = ref('desc-1')
const selected3 = ref('icon-1')

const listItems: ListItem[] = [
  { label: '项目 1', value: 'item-1' },
  { label: '项目 2', value: 'item-2' },
  { label: '项目 3', value: 'item-3' }
]

const itemsWithDesc: ListItem[] = [
  { label: '项目 1', value: 'desc-1', description: '描述文字 1' },
  { label: '项目 2', value: 'desc-2', description: '描述文字 2' },
  { label: '项目 3', value: 'desc-3', description: '描述文字 3' }
]

const iconItems: ListItem[] = [
  { label: '项目 1', value: 'icon-1', icon: 'file', description: '文件描述' },
  { label: '项目 2', value: 'icon-2', icon: 'edit' },
  { label: '项目 3', value: 'icon-3', icon: 'settings', description: '设置描述' }
]

const listProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '选中项的值' },
  { name: 'items', type: 'ListItem[]', default: '-', description: '列表项数组，必填' }
]

const listEvents = [
  { name: 'update:modelValue', params: ['value: string'], description: '选中项变化时触发' }
]

const basicCode = `<z-list v-model="selected" :items="items" />

<script setup>
const selected = ref('item-1')
const items = [
  { label: '项目 1', value: 'item-1' },
  { label: '项目 2', value: 'item-2' },
]
<\/script>`

const descCode = `<z-list v-model="selected" :items="items" />

<script setup>
const items = [
  { label: '项目 1', value: 'desc-1', description: '描述文字' },
]
<\/script>`

const iconCode = `<z-list v-model="selected" :items="items" />

<script setup>
const items = [
  { label: '项目 1', value: 'icon-1', icon: 'file', description: '文件' },
]
<\/script>`
</script>

