<template>
  <div class="demo-container">
    <h2>ZRadio 单选框</h2>
    <p class="desc">在一组备选项中进行单选。</p>
    
    <div class="preview-box">
      <div class="radio-group">
        <z-radio v-for="item in options" :key="item.value" v-model="value" :value="item.value">{{ item.label }}</z-radio>
      </div>
      <p>当前选中: {{ value }}</p>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZRadio } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const value = ref('1')
const options = [
  { label: '选项 A', value: '1' },
  { label: '选项 B', value: '2' },
  { label: '选项 C', value: '3' }
]

const code = `<template>
  <div class="radio-group">
    <z-radio v-for="item in options" :key="item.value" v-model="value" :value="item.value">
      {{ item.label }}
    </z-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ZRadio } from 'zijid-ui'
const value = ref('1')
const options = [
  { label: '选项 A', value: '1' },
  { label: '选项 B', value: '2' }
]
<\/script>`
</script>
