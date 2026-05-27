<template>
  <div class="demo-page">
    <h1>ZTextarea 文本域</h1>
    <p class="desc">多行文本输入框，支持自定义行数、标签和禁用状态。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZTextarea v-model="text1" placeholder="请输入内容..." :rows="4" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带标签</h2>
      <div class="preview-box">
        <ZTextarea v-model="text2" label="备注信息" placeholder="请输入备注..." :rows="3" />
      </div>
      <ZCodeBlock :code="labelCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZTextarea v-model="text3" label="已禁用" disabled :rows="3" />
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同行数</h2>
      <div class="preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <ZTextarea v-model="text4" label="2 行" :rows="2" placeholder="短文本" />
        <ZTextarea v-model="text5" label="6 行" :rows="6" placeholder="长文本" />
      </div>
      <ZCodeBlock :code="rowsCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="textareaProps" :events="textareaEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZTextarea } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const text1 = ref('')
const text2 = ref('')
const text3 = ref('禁用状态的文本域内容')
const text4 = ref('')
const text5 = ref('')

const basicCode = `<ZTextarea v-model="value" placeholder="请输入内容..." :rows="4" />`

const labelCode = `<ZTextarea v-model="value" label="备注信息" placeholder="请输入备注..." :rows="3" />`

const disabledCode = `<ZTextarea v-model="value" label="已禁用" disabled :rows="3" />`

const rowsCode = `<ZTextarea v-model="value" label="2 行" :rows="2" placeholder="短文本" />
<ZTextarea v-model="value" label="6 行" :rows="6" placeholder="长文本" />`

const textareaProps = [
  { name: 'modelValue', type: 'string', default: "''", description: '文本域的值（双向绑定）' },
  { name: 'label', type: 'string', default: '-', description: '文本域的标签文本' },
  { name: 'placeholder', type: 'string', default: '-', description: '占位提示文本' },
  { name: 'rows', type: 'number', default: '3', description: '文本域行数' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'maxlength', type: 'number', default: '-', description: '最大输入长度' }
]

const textareaEvents = [
  { name: 'update:modelValue', params: ['string'], description: '输入值变化时触发' },
  { name: 'focus', params: ['FocusEvent'], description: '聚焦时触发' },
  { name: 'blur', params: ['FocusEvent'], description: '失焦时触发' }
]
</script>

