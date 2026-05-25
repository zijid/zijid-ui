<template>
  <div class="demo-container">
    <h2>ZSearchBox 搜索框</h2>
    <p class="desc">带有搜索按钮的输入框。</p>
    
    <div class="preview-box">
      <z-search-box placeholder="请输入搜索内容" @search="handleSearch" />
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ZSearchBox } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const handleSearch = (val: string) => {
  console.log('搜索:', val)
}

const code = `<template>
  <z-search-box placeholder="搜索..." @search="onSearch" />
</template>

<script setup>
import { ZSearchBox } from 'zijid-ui'
const onSearch = (val) => console.log(val)
<\/script>`
</script>
