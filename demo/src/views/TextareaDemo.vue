<template>
  <div class="demo-page">
    <h1>ZTextarea 文本域</h1>
    <p class="desc">多行文本输入框，支持标签、禁用、只读、可清除、字符计数和错误状态等功能。</p>

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
      <h2>只读状态</h2>
      <div class="preview-box">
        <ZTextarea v-model="text4" label="只读" readonly :rows="3" />
      </div>
      <ZCodeBlock :code="readonlyCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>可清除</h2>
      <div class="preview-box">
        <ZTextarea v-model="text5" label="可清除" placeholder="输入内容后可清除" clearable :rows="3" />
      </div>
      <ZCodeBlock :code="clearableCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>字符计数</h2>
      <div class="preview-box">
        <ZTextarea v-model="text6" label="限140字" placeholder="输入内容后将显示字数统计..." :rows="4" :maxlength="140" />
      </div>
      <ZCodeBlock :code="countCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>错误状态</h2>
      <div class="preview-box">
        <ZTextarea v-model="text7" label="反馈意见" placeholder="请输入反馈..." :rows="3" :is-error="true" error-message="反馈内容不能为空" />
      </div>
      <ZCodeBlock :code="errorCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同行数</h2>
      <div class="preview-box" style="display: flex; flex-direction: column; gap: 16px;">
        <ZTextarea v-model="text8" label="2 行" :rows="2" placeholder="短文本" />
        <ZTextarea v-model="text9" label="6 行" :rows="6" placeholder="长文本" />
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
const text4 = ref('只读状态的文本域内容，无法编辑')
const text5 = ref('可以清除的文本')
const text6 = ref('')
const text7 = ref('')
const text8 = ref('')
const text9 = ref('')

const basicCode = `<ZTextarea v-model="value" placeholder="请输入内容..." :rows="4" />`

const labelCode = `<ZTextarea v-model="value" label="备注信息" placeholder="请输入备注..." :rows="3" />`

const disabledCode = `<ZTextarea v-model="value" label="已禁用" disabled :rows="3" />`

const readonlyCode = `<ZTextarea v-model="value" label="只读" readonly :rows="3" />`

const clearableCode = `<ZTextarea v-model="value" label="可清除" placeholder="输入内容后可清除" clearable :rows="3" />`

const countCode = `<ZTextarea v-model="value" label="限140字" placeholder="输入内容后将显示字数统计..." :rows="4" :maxlength="140" />`

const errorCode = `<ZTextarea v-model="value" label="反馈意见" placeholder="请输入反馈..." :rows="3" :is-error="true" error-message="反馈内容不能为空" />`

const rowsCode = `<ZTextarea v-model="value" label="2 行" :rows="2" placeholder="短文本" />
<ZTextarea v-model="value" label="6 行" :rows="6" placeholder="长文本" />`

const textareaProps = [
  { name: 'modelValue', type: 'string', default: "''", description: '文本域的值（双向绑定）' },
  { name: 'label', type: 'string', default: '-', description: '文本域的标签文本' },
  { name: 'placeholder', type: 'string', default: '-', description: '占位提示文本' },
  { name: 'rows', type: 'number', default: '4', description: '文本域行数' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '是否只读' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '是否显示清除按钮' },
  { name: 'maxlength', type: 'number', default: '-', description: '最大输入长度' },
  { name: 'resize', type: 'string', default: "'vertical'", description: '拖拽调整大小：none / vertical / horizontal / both' },
  { name: 'isError', type: 'boolean', default: 'false', description: '是否显示错误状态' },
  { name: 'errorMessage', type: 'string', default: '-', description: '错误提示信息' }
]

const textareaEvents = [
  { name: 'update:modelValue', params: ['string'], description: '输入值变化时触发' },
  { name: 'focus', params: ['FocusEvent'], description: '聚焦时触发' },
  { name: 'blur', params: ['FocusEvent'], description: '失焦时触发' },
  { name: 'clear', params: [], description: '点击清除按钮时触发' },
  { name: 'change', params: ['Event'], description: '值改变确认时触发' },
  { name: 'keydown', params: ['KeyboardEvent'], description: '键盘按下时触发' }
]
</script>
