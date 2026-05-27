<template>
  <div class="demo-page">
    <h1>ZSelect 选择器</h1>
    <p class="desc">下拉选择器，支持单选、多选、禁用、分组选择和可搜索筛选。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZSelect v-model="select1" :options="cityOptions" placeholder="请选择城市" />
        <span>已选: {{ select1 }}</span>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZSelect v-model="select2" :options="simpleOptions" placeholder="此选择器已禁用" disabled />
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>多选</h2>
      <div class="preview-box">
        <ZSelect v-model="select3" :options="cityOptions" multiple placeholder="请选择多个城市" />
        <span>已选: {{ select3.join(', ') }}</span>
      </div>
      <ZCodeBlock :code="multipleCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>可清空</h2>
      <div class="preview-box">
        <ZSelect v-model="select5" :options="cityOptions" placeholder="可选择也可清空" clearable />
        <span>已选: {{ select5 }}</span>
      </div>
      <ZCodeBlock :code="clearableCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>分组选择</h2>
      <div class="preview-box">
        <ZSelect v-model="select4" :options="groupedOptions" placeholder="请选择产品" />
      </div>
      <ZCodeBlock :code="groupCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>可搜索筛选</h2>
      <div class="preview-box">
        <ZSelect v-model="selectFilter" :options="manyOptions" filterable placeholder="输入搜索城市" />
        <span>已选: {{ selectFilter }}</span>
      </div>
      <ZCodeBlock :code="filterableCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>尺寸</h2>
      <div class="preview-box">
        <ZSelect v-model="selectSmall" :options="simpleOptions" size="small" placeholder="小尺寸" />
        <ZSelect v-model="selectMedium" :options="simpleOptions" size="medium" placeholder="中尺寸" />
        <ZSelect v-model="selectLarge" :options="simpleOptions" size="large" placeholder="大尺寸" />
      </div>
      <ZCodeBlock :code="sizeCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="selectProps" :events="selectEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSelect } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const select1 = ref('')
const select2 = ref('')
const select3 = ref<string[]>([])
const select4 = ref('')
const select5 = ref('')
const selectSmall = ref('')
const selectMedium = ref('')
const selectLarge = ref('')
const selectFilter = ref('')

const simpleOptions = [
  { label: '选项 1', value: '1' },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' }
]

const cityOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' }
]

const groupedOptions = [
  {
    label: '水果',
    options: [
      { label: '苹果', value: 'apple' },
      { label: '香蕉', value: 'banana' },
      { label: '橙子', value: 'orange' }
    ]
  },
  {
    label: '蔬菜',
    options: [
      { label: '西红柿', value: 'tomato' },
      { label: '黄瓜', value: 'cucumber' },
      { label: '胡萝卜', value: 'carrot' }
    ]
  }
]

const manyOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '成都', value: 'chengdu' },
  { label: '武汉', value: 'wuhan' },
  { label: '南京', value: 'nanjing' },
  { label: '重庆', value: 'chongqing' },
  { label: '西安', value: 'xian' },
  { label: '苏州', value: 'suzhou' },
  { label: '天津', value: 'tianjin' }
]

const basicCode = `<ZSelect
  v-model="value"
  :options="[
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' }
  ]"
  placeholder="请选择"
/>`

const disabledCode = `<ZSelect v-model="value" :options="options" placeholder="已禁用" disabled />`

const multipleCode = `<ZSelect
  v-model="value"
  :options="options"
  multiple
  placeholder="请选择多个"
/>`

const clearableCode = `<ZSelect v-model="value" :options="options" placeholder="可清空" clearable />`

const groupCode = `<ZSelect
  v-model="value"
  :options="[
    {
      label: '水果',
      options: [
        { label: '苹果', value: 'apple' },
        { label: '香蕉', value: 'banana' }
      ]
    },
    {
      label: '蔬菜',
      options: [
        { label: '西红柿', value: 'tomato' },
        { label: '黄瓜', value: 'cucumber' }
      ]
    }
  ]"
  placeholder="请选择产品"
/>`

const filterableCode = `<ZSelect
  v-model="value"
  :options="options"
  filterable
  placeholder="输入搜索"
/>`

const sizeCode = `<ZSelect v-model="value" :options="options" size="small" placeholder="小" />
<ZSelect v-model="value" :options="options" size="medium" placeholder="中" />
<ZSelect v-model="value" :options="options" size="large" placeholder="大" />`

const selectProps = [
  { name: 'modelValue / v-model', type: 'string / string[]', default: "''", description: '选中的值（双向绑定）；多选时为数组' },
  { name: 'options', type: 'SelectOption[] / SelectGroup[]', default: '[]', description: '选项数据，支持分组' },
  { name: 'placeholder', type: 'string', default: "'请选择'", description: '占位提示文本' },
  { name: 'label', type: 'string', default: '-', description: '选择器的标签文本' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'multiple', type: 'boolean', default: 'false', description: '是否开启多选' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '是否可清空' },
  { name: 'filterable', type: 'boolean', default: 'false', description: '是否可搜索筛选选项' },
  { name: 'emptyText', type: 'string', default: "''", description: '空数据时显示的文本' },
  { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: '选择器尺寸' }
]

const selectEvents = [
  { name: 'update:modelValue', params: ['string | string[]'], description: '选中值变化时触发' },
  { name: 'change', params: ['string | string[]'], description: '选中值变化后触发' },
  { name: 'focus', params: ['FocusEvent'], description: '获得焦点时触发' },
  { name: 'blur', params: ['FocusEvent'], description: '失去焦点时触发' },
  { name: 'clear', params: [], description: '清空值时触发' }
]
</script>
