<template>
  <div class="demo-page">
    <h1>ZTabs 标签页</h1>
    <p class="desc">用于在同一区域内切换多组相关内容，支持基础标签、卡片风格和不同位置。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <ZTabs v-model="activeKey1" :items="basicItems">
          <p>{{ content1 }}</p>
        </ZTabs>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>卡片风格</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <ZTabs v-model="activeKey2" :items="cardItems" type="card">
          <p>{{ content2 }}</p>
        </ZTabs>
      </div>
      <ZCodeBlock :code="cardCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>标签位置</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <div style="margin-bottom: 16px; display: flex; gap: 8px;">
          <ZButton v-for="pos in positions" :key="pos.value" size="small" :type="currentPosition === pos.value ? 'primary' : 'default'" @click="currentPosition = pos.value">{{ pos.label }}</ZButton>
        </div>
        <ZTabs v-model="activeKey3" :items="posItems" :position="currentPosition">
          <p>{{ content3 }}</p>
        </ZTabs>
      </div>
      <ZCodeBlock :code="positionCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用标签</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <ZTabs v-model="activeKey4" :items="disabledItems">
          <p>{{ content4 }}</p>
        </ZTabs>
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="tabsProps" :events="tabsEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ZTabs, ZButton, ZCodeBlock, type TabItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const activeKey1 = ref('docs')
const activeKey2 = ref('tab1')
const activeKey3 = ref('tab1')
const activeKey4 = ref('tab1')

const currentPosition = ref<'top' | 'left' | 'bottom' | 'right'>('top')
const positions = [
  { label: '上', value: 'top' },
  { label: '左', value: 'left' },
  { label: '下', value: 'bottom' },
  { label: '右', value: 'right' }
]

const basicItems: TabItem[] = [
  { label: '文档', value: 'docs' },
  { label: '设置', value: 'settings' },
  { label: '关于', value: 'about' }
]

const cardItems: TabItem[] = [
  { label: '标签一', value: 'tab1' },
  { label: '标签二', value: 'tab2' },
  { label: '标签三', value: 'tab3' }
]

const posItems: TabItem[] = [
  { label: '内容一', value: 'tab1' },
  { label: '内容二', value: 'tab2' },
  { label: '内容三', value: 'tab3' }
]

const disabledItems: TabItem[] = [
  { label: '标签 A', value: 'tab1' },
  { label: '标签 B（禁用）', value: 'tab2', disabled: true },
  { label: '标签 C', value: 'tab3' }
]

const content1 = computed(() => activeKey1.value === 'docs' ? '文档内容区域...' : activeKey1.value === 'settings' ? '设置内容区域...' : '关于内容区域...')
const content2 = computed(() => `卡片标签 ${activeKey2.value} 的内容区域`)
const content3 = computed(() => { const dir = { top: '上', left: '左', bottom: '下', right: '右' }[currentPosition.value]; return `${dir}方位置 - 标签 ${activeKey3.value} 的内容` })
const content4 = computed(() => activeKey4.value === 'tab1' ? '标签 A 的内容' : activeKey4.value === 'tab3' ? '标签 C 的内容' : '')

const basicCode = `<ZTabs v-model="activeKey" :items="items">
  <p>当前内容</p>
</ZTabs>

<script setup>
import { ZTabs } from 'zijid-ui'
const activeKey = ref('docs')
const items = [
  { label: '文档', value: 'docs' },
  { label: '设置', value: 'settings' }
]
<\/script>`

const cardCode = `<ZTabs v-model="activeKey" :items="items" type="card">
  <p>当前内容</p>
</ZTabs>`

const positionCode = `<ZTabs v-model="activeKey" :items="items" position="left">
  <p>当前内容</p>
</ZTabs>`

const disabledCode = `<ZTabs v-model="activeKey" :items="items">
  <p>当前内容</p>
</ZTabs>

<script setup>
const items = [
  { label: '标签 A', value: 'a' },
  { label: '标签 B', value: 'b', disabled: true },
  { label: '标签 C', value: 'c' }
]
<\/script>`

const tabsProps = [
  { name: 'modelValue', type: 'string', default: '-', required: true, description: '当前选中的标签值' },
  { name: 'items', type: 'TabItem[]', default: '-', required: true, description: '标签项数组' },
  { name: 'type', type: "'default' | 'card'", default: "'default'", description: '标签风格类型' },
  { name: 'position', type: "'top' | 'left' | 'bottom' | 'right'", default: "'top'", description: '标签位置' }
]
const tabsEvents = [
  { name: 'update:modelValue', params: ['value: string'], description: '标签切换时触发' }
]
</script>

