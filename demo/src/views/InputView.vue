<template>
  <div class="demo-page">
    <h1>ZInput 输入框</h1>
    <p class="desc">通过鼠标或键盘输入字符，支持多种类型、前缀后缀、密码可见切换和可清除等功能。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZInput v-model="value1" label="用户名" placeholder="请输入用户名" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带前缀图标</h2>
      <div class="preview-box">
        <ZInput v-model="value2" label="搜索" placeholder="搜索内容" prefix-icon="search" />
      </div>
      <ZCodeBlock :code="prefixIconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带前缀文字</h2>
      <div class="preview-box">
        <ZInput v-model="value3" label="域名" placeholder="请输入域名" prefix="https://" suffix=".com" />
      </div>
      <ZCodeBlock :code="prefixTextCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带后缀图标</h2>
      <div class="preview-box">
        <ZInput v-model="value4" label="日期" placeholder="选择日期" suffix-icon="calendar" />
      </div>
      <ZCodeBlock :code="suffixIconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>可清除</h2>
      <div class="preview-box">
        <ZInput v-model="value5" label="可清除的输入框" placeholder="输入内容后可清除" clearable />
      </div>
      <ZCodeBlock :code="clearableCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>密码显示切换</h2>
      <div class="preview-box">
        <ZInput v-model="value6" label="密码" type="password" placeholder="请输入密码" show-password />
      </div>
      <ZCodeBlock :code="passwordCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>组合使用</h2>
      <div class="preview-box">
        <ZInput v-model="value7" label="完整功能" placeholder="组合使用" prefix-icon="user" clearable show-password />
      </div>
      <ZCodeBlock :code="combinedCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZInput v-model="value8" label="只读输入框" disabled />
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>错误状态</h2>
      <div class="preview-box">
        <ZInput v-model="value9" label="邮箱" placeholder="请输入邮箱" is-error error-message="邮箱格式不正确" suffix-icon="error" />
      </div>
      <ZCodeBlock :code="errorCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="inputProps" :events="inputEvents" :slots="inputSlots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZInput } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('已禁用的内容')
const value9 = ref('invalid-email')

const basicCode = `<ZInput v-model="value" label="用户名" placeholder="请输入用户名" />`

const prefixIconCode = `<ZInput v-model="value" label="搜索" placeholder="搜索内容" prefix-icon="search" />`

const prefixTextCode = `<ZInput v-model="value" label="域名" placeholder="请输入域名" prefix="https://" suffix=".com" />`

const suffixIconCode = `<ZInput v-model="value" label="日期" placeholder="选择日期" suffix-icon="calendar" />`

const clearableCode = `<ZInput v-model="value" label="可清除" placeholder="输入内容后可清除" clearable />`

const passwordCode = `<ZInput v-model="value" label="密码" type="password" placeholder="请输入密码" show-password />`

const combinedCode = `<ZInput v-model="value" label="完整功能" placeholder="组合使用" prefix-icon="user" clearable show-password />`

const disabledCode = `<ZInput v-model="value" label="只读输入框" disabled />`

const errorCode = `<ZInput v-model="value" label="邮箱" placeholder="请输入邮箱" is-error error-message="邮箱格式不正确" suffix-icon="error" />`

const inputProps = [
  { name: 'modelValue', type: 'string', default: "''", description: '输入框的值（双向绑定）' },
  { name: 'label', type: 'string', default: '-', description: '输入框标签文本' },
  { name: 'placeholder', type: 'string', default: '-', description: '占位提示文本' },
  { name: 'type', type: 'string', default: "'text'", description: '输入框类型：text / password / email / number / search / tel / url' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'readonly', type: 'boolean', default: 'false', description: '是否只读' },
  { name: 'prefix', type: 'string', default: '-', description: '前置文字' },
  { name: 'prefixIcon', type: 'string', default: '-', description: '前置图标名称' },
  { name: 'suffix', type: 'string', default: '-', description: '后置文字' },
  { name: 'suffixIcon', type: 'string', default: '-', description: '后置图标名称' },
  { name: 'clearable', type: 'boolean', default: 'false', description: '是否显示清除按钮' },
  { name: 'showPassword', type: 'boolean', default: 'false', description: '是否显示密码切换按钮' },
  { name: 'maxlength', type: 'number', default: '-', description: '最大输入长度' },
  { name: 'autocomplete', type: 'string', default: '-', description: '自动补全属性' },
  { name: 'isError', type: 'boolean', default: 'false', description: '是否显示错误状态' },
  { name: 'errorMessage', type: 'string', default: '-', description: '错误提示信息' }
]

const inputEvents = [
  { name: 'update:modelValue', params: ['string'], description: '值变化时触发' },
  { name: 'focus', params: ['FocusEvent'], description: '聚焦时触发' },
  { name: 'blur', params: ['FocusEvent'], description: '失焦时触发' },
  { name: 'clear', params: [], description: '点击清除按钮时触发' },
  { name: 'change', params: ['Event'], description: '值改变确认时触发' },
  { name: 'keydown', params: ['KeyboardEvent'], description: '键盘按下时触发' }
]

const inputSlots = [
  { name: 'prefix', description: '自定义前置内容' },
  { name: 'suffix', description: '自定义后置内容' }
]
</script>

<style scoped>
.preview-box {
  max-width: 500px;
}
</style>
