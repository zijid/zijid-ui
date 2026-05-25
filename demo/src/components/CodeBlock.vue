<template>
  <div class="code-block">
    <div class="code-header">
      <span class="lang-label">Vue</span>
      <button class="copy-btn" @click="handleCopy" :class="{ copied: isCopied }">
        {{ isCopied ? '已复制' : '复制代码' }}
      </button>
    </div>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
}>()

const isCopied = ref(false)

const handleCopy = () => {
  navigator.clipboard.writeText(props.code).then(() => {
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 2000)
  })
}
</script>

<style scoped>
.code-block {
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
  line-height: 1.6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #252526;
  border-bottom: 1px solid #333;
}
.lang-label {
  font-size: 12px;
  color: #858585;
}
.copy-btn {
  background: transparent;
  border: 1px solid #444;
  color: #ccc;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}
.copy-btn:hover {
  background: #333;
  border-color: #555;
}
.copy-btn.copied {
  background: #0e639c;
  border-color: #0e639c;
  color: white;
}
.code-block pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}
</style>
