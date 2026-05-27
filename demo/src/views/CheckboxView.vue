<template>
  <div class="demo-page">
    <h1>ZCheckbox 复选框</h1>
    <p class="desc">用于多选操作，支持多种状态和双向绑定。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZCheckbox v-model="checked1">选项 A</ZCheckbox>
        <ZCheckbox v-model="checked2">选项 B</ZCheckbox>
        <ZCheckbox v-model="checked3">选项 C</ZCheckbox>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZCheckbox v-model="checked4" disabled>禁用未选</ZCheckbox>
        <ZCheckbox v-model="checked5" disabled>禁用已选</ZCheckbox>
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同变体</h2>
      <div class="preview-box">
        <ZCheckbox v-model="checked6" variant="default">默认</ZCheckbox>
        <ZCheckbox v-model="checked7" variant="primary">主要</ZCheckbox>
        <ZCheckbox v-model="checked8" variant="danger">危险</ZCheckbox>
      </div>
      <ZCodeBlock :code="variantCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>分组选择</h2>
      <div class="preview-box" style="flex-direction: column; align-items: flex-start;">
        <ZCheckbox v-model="allChecked" @change="toggleAll">全选</ZCheckbox>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; padding-left: 24px;">
          <ZCheckbox v-for="item in items" :key="item.value" v-model="selectedItems" :value="item.value">{{ item.label }}</ZCheckbox>
        </div>
        <p style="font-size: 13px; color: #666; margin: 8px 0 0 0;">已选择: {{ selectedItems.join(', ') || '无' }}</p>
      </div>
      <ZCodeBlock :code="groupCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="checkboxProps" :events="checkboxEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ZCheckbox } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(true)
const checked6 = ref(true)
const checked7 = ref(false)
const checked8 = ref(false)

const items = [
  { value: 'item1', label: '项目 1' },
  { value: 'item2', label: '项目 2' },
  { value: 'item3', label: '项目 3' },
  { value: 'item4', label: '项目 4' }
]

const selectedItems = ref<string[]>([])

const allChecked = computed({
  get: () => selectedItems.value.length === items.length,
  set: (val: boolean) => {
    selectedItems.value = val ? items.map(item => item.value) : []
  }
})

const toggleAll = () => {
  if (allChecked.value) {
    selectedItems.value = []
  } else {
    selectedItems.value = items.map(item => item.value)
  }
}

const basicCode = `<ZCheckbox v-model="checked">选项</ZCheckbox>`

const disabledCode = `<ZCheckbox disabled>禁用未选</ZCheckbox>
<ZCheckbox disabled checked>禁用已选</ZCheckbox>`

const variantCode = `<ZCheckbox v-model="val" variant="default">默认</ZCheckbox>
<ZCheckbox v-model="val" variant="primary">主要</ZCheckbox>
<ZCheckbox v-model="val" variant="danger">危险</ZCheckbox>`

const groupCode = `<ZCheckbox v-model="allChecked" @change="toggleAll">全选</ZCheckbox>
<ZCheckbox v-for="item in items" :key="item.value"
  v-model="selectedItems" :value="item.value">
  {{ item.label }}
</ZCheckbox>`

const checkboxProps = [
  { name: 'modelValue', type: 'boolean / string[]', default: 'false', description: '复选框的值（双向绑定）；单个使用时为 boolean，分组时传数组' },
  { name: 'value', type: 'string', default: '-', description: '复选框对应的值（分组选择时使用）' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'variant', type: 'string', default: "'default'", description: '复选框变体，可选 default / primary / danger' }
]

const checkboxEvents = [
  { name: 'update:modelValue', params: ['boolean | string[]'], description: '选中状态变化时触发' },
  { name: 'change', params: ['Event'], description: '值改变时触发' }
]
</script>

