<template>
  <div class="demo-page">
    <h1>ZRadio 单选框</h1>
    <p class="desc">Windows 10 风格的单选框，用于在多个选项中选择一个。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box" style="flex-direction: column; align-items: flex-start;">
        <div class="radio-group">
          <ZRadio v-model="selectedOption1" value="option1">选项 1</ZRadio>
          <ZRadio v-model="selectedOption1" value="option2">选项 2</ZRadio>
          <ZRadio v-model="selectedOption1" value="option3">选项 3</ZRadio>
        </div>
        <div class="radio-status">
          <p>当前选择: {{ selectedOption1 || '无' }}</p>
        </div>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box" style="flex-direction: column; align-items: flex-start;">
        <div class="radio-group">
          <ZRadio v-model="selectedOption2" value="male" disabled>男性</ZRadio>
          <ZRadio v-model="selectedOption2" value="female">女性</ZRadio>
        </div>
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>更多选项</h2>
      <div class="preview-box" style="flex-direction: column; align-items: flex-start;">
        <div class="radio-group">
          <ZRadio v-model="selectedCity" value="beijing">北京</ZRadio>
          <ZRadio v-model="selectedCity" value="shanghai">上海</ZRadio>
          <ZRadio v-model="selectedCity" value="guangzhou">广州</ZRadio>
          <ZRadio v-model="selectedCity" value="shenzhen">深圳</ZRadio>
        </div>
      </div>
      <ZCodeBlock :code="cityCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="radioProps" :events="radioEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZRadio } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const selectedOption1 = ref('')
const selectedOption2 = ref('')
const selectedCity = ref('')

const basicCode = `<ZRadio v-model="selected" value="option1">选项 1</ZRadio>
<ZRadio v-model="selected" value="option2">选项 2</ZRadio>
<ZRadio v-model="selected" value="option3">选项 3</ZRadio>`

const disabledCode = `<ZRadio v-model="selected" value="male" disabled>男性</ZRadio>
<ZRadio v-model="selected" value="female">女性</ZRadio>`

const cityCode = `<ZRadio v-model="selected" value="beijing">北京</ZRadio>
<ZRadio v-model="selected" value="shanghai">上海</ZRadio>
<ZRadio v-model="selected" value="guangzhou">广州</ZRadio>
<ZRadio v-model="selected" value="shenzhen">深圳</ZRadio>`

const radioProps = [
  { name: 'modelValue', type: 'string', default: '-', description: '当前选中的值（双向绑定）' },
  { name: 'value', type: 'string', default: '-', description: '单选框对应的值（必填）' },
  { name: 'label', type: 'string', default: '-', description: '显示的标签文本' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' }
]

const radioEvents = [
  { name: 'update:modelValue', params: ['string'], description: '选中值变化时触发' }
]
</script>

<style scoped>
.radio-group { display: flex; flex-direction: column; gap: 12px; min-width: 200px; }
.radio-status { padding: 8px 16px; background: #eee; border-radius: 4px; font-size: 14px; }
.radio-status p { margin: 0; }
</style>
