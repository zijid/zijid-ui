<template>
  <div class="demo-container">
    <h2>ZTextarea 文本域</h2>
    <p class="desc">多行文本输入框。</p>
    
    <div class="preview-box">
      <z-textarea v-model="text" placeholder="请输入内容..." :rows="4" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZTextarea } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const text = ref('')

const code = `<template>
  <z-textarea v-model="text" :rows="4" />
</template>

<script setup>
import { ref } from 'vue'
import { ZTextarea } from 'zijid-ui'
const text = ref('')
<\/script>`
</script>
