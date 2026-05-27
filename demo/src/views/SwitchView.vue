<template>
  <div class="demo-page">
    <h1>ZSwitch 开关</h1>
    <p class="desc">用于切换开关状态，支持多种颜色和禁用状态。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZSwitch v-model="switch1" />
        <ZSwitch v-model="switch2" />
        <span>状态: {{ switch2 ? '开' : '关' }}</span>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带标签</h2>
      <div class="preview-box">
        <ZSwitch v-model="switch3" label="WiFi" />
        <ZSwitch v-model="switch4" label="蓝牙" />
      </div>
      <ZCodeBlock :code="labelCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="preview-box">
        <ZSwitch v-model="switch5" disabled />
        <ZSwitch v-model="switch6" disabled label="已禁用" />
        <span>状态: {{ switch5 ? '开' : '关' }}</span>
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同变体</h2>
      <div class="preview-box">
        <ZSwitch v-model="switch7" variant="default" />
        <ZSwitch v-model="switch8" variant="primary" />
        <ZSwitch v-model="switch9" variant="success" />
        <ZSwitch v-model="switch10" variant="warning" />
        <ZSwitch v-model="switch11" variant="danger" />
      </div>
      <ZCodeBlock :code="variantCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="switchProps" :events="switchEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSwitch } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const switch1 = ref(true)
const switch2 = ref(false)
const switch3 = ref(true)
const switch4 = ref(false)
const switch5 = ref(true)
const switch6 = ref(false)
const switch7 = ref(true)
const switch8 = ref(true)
const switch9 = ref(true)
const switch10 = ref(false)
const switch11 = ref(false)

const basicCode = `<ZSwitch v-model="value" />`

const labelCode = `<ZSwitch v-model="value" label="WiFi" />
<ZSwitch v-model="value" label="蓝牙" />`

const disabledCode = `<ZSwitch v-model="value" disabled />
<ZSwitch v-model="value" disabled label="已禁用" />`

const variantCode = `<ZSwitch v-model="value" variant="default" />
<ZSwitch v-model="value" variant="primary" />
<ZSwitch v-model="value" variant="success" />
<ZSwitch v-model="value" variant="warning" />
<ZSwitch v-model="value" variant="danger" />`

const switchProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '开关的值（双向绑定）' },
  { name: 'label', type: 'string', default: '-', description: '开关的标签文本' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'variant', type: 'string', default: "'default'", description: '开关变体，可选 default / primary / success / warning / danger' }
]

const switchEvents = [
  { name: 'update:modelValue', params: ['boolean'], description: '开关值变化时触发' }
]
</script>

