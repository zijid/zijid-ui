<template>
  <div class="demo-container">
    <h2>ZSlider 滑块</h2>
    <p class="desc">通过拖动滑块在一个固定区间内进行选择。</p>
    
    <div class="preview-box">
      <z-slider v-model="value" :min="0" :max="100" />
      <p>当前值: {{ value }}</p>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSlider } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const value = ref(50)

const code = `<template>
  <z-slider v-model="value" :min="0" :max="100" />
</template>

<script setup>
import { ref } from 'vue'
import { ZSlider } from 'zijid-ui'
const value = ref(50)
<\/script>`
</script>
