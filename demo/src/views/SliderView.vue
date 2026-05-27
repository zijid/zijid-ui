<template>
  <div class="demo-page">
    <h1>ZSlider 滑块</h1>
    <p class="desc">用于选择数值范围内的值，支持自定义范围、步长和标签。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch; max-width: 500px;">
        <p>数值: {{ slider1 }}</p>
        <ZSlider v-model="slider1" />
        <p>数值: {{ slider2 }}</p>
        <ZSlider v-model="slider2" />
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>自定义范围</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch; max-width: 500px;">
        <p>范围 0-200: {{ slider3 }}</p>
        <ZSlider v-model="slider3" :min="0" :max="200" />
        <p>步长 10: {{ slider4 }}</p>
        <ZSlider v-model="slider4" :step="10" />
      </div>
      <ZCodeBlock :code="customCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带标签</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch; max-width: 500px;">
        <ZSlider v-model="slider5" label="音量" />
        <ZSlider v-model="slider6" label="亮度" />
      </div>
      <ZCodeBlock :code="labelCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="sliderProps" :events="sliderEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSlider } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const slider1 = ref(50)
const slider2 = ref(25)
const slider3 = ref(100)
const slider4 = ref(30)
const slider5 = ref(70)
const slider6 = ref(50)

const basicCode = `<ZSlider v-model="value" />`

const customCode = `<ZSlider v-model="value" :min="0" :max="200" />
<ZSlider v-model="value" :step="10" />`

const labelCode = `<ZSlider v-model="value" label="音量" />`

const sliderProps = [
  { name: 'modelValue', type: 'number', default: '0', description: '当前值（双向绑定）' },
  { name: 'min', type: 'number', default: '0', description: '最小值' },
  { name: 'max', type: 'number', default: '100', description: '最大值' },
  { name: 'step', type: 'number', default: '1', description: '步长' },
  { name: 'label', type: 'string', default: '-', description: '标签文本' }
]

const sliderEvents = [
  { name: 'update:modelValue', params: ['number'], description: '值变化时触发' }
]
</script>

<style scoped>
</style>
