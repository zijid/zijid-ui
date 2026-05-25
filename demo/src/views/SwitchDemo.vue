<template>
  <div class="demo-container">
    <h2>ZSwitch 开关</h2>
    <p class="desc">表示两种相互对立的状态间的切换。</p>
    
    <div class="preview-box">
      <div style="display: flex; align-items: center; gap: 16px;">
        <z-switch v-model="checked" />
        <span>{{ checked ? '开启' : '关闭' }}</span>
      </div>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZSwitch } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const checked = ref(true)

const code = `<template>
  <z-switch v-model="checked" />
</template>

<script setup>
import { ref } from 'vue'
import { ZSwitch } from 'zijid-ui'
const checked = ref(true)
<\/script>`
</script>
