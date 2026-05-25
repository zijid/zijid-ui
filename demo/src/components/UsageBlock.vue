<template>
  <div class="usage-block">
    <div class="usage-header">
      <h3 class="usage-title">{{ title }}</h3>
      <div class="usage-actions">
        <button class="usage-btn" @click="toggleCode" :class="{ active: showCode }">
          {{ showCode ? '隐藏代码' : '显示代码' }}
        </button>
      </div>
    </div>
    
    <div class="usage-demo">
      <slot name="demo"></slot>
    </div>
    
    <div v-show="showCode" class="usage-code">
      <CodeBlock :code="code" />
    </div>
    
    <div v-if="description" class="usage-description">
      <p>{{ description }}</p>
    </div>
    
    <div v-if="notes && notes.length > 0" class="usage-notes">
      <h4>注意事项</h4>
      <ul>
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from './CodeBlock.vue'

const props = defineProps<{
  title: string
  code: string
  description?: string
  notes?: string[]
}>()

const showCode = ref(false)

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<style scoped>
.usage-block {
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.usage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e1e4e8;
}

.usage-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #24292e;
}

.usage-actions {
  display: flex;
  gap: 8px;
}

.usage-btn {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  color: #24292e;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.usage-btn:hover {
  background: #e1e4e8;
  border-color: #d1d5da;
}

.usage-btn.active {
  background: #0366d6;
  color: white;
  border-color: #0366d6;
}

.usage-demo {
  margin-bottom: 20px;
  min-height: 60px;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 16px;
  border: 1px dashed #e1e4e8;
}

.usage-code {
  margin-bottom: 20px;
}

.usage-description {
  margin-bottom: 20px;
  color: #586069;
  line-height: 1.6;
}

.usage-notes {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  padding: 16px;
}

.usage-notes h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #856404;
}

.usage-notes ul {
  margin: 0;
  padding-left: 20px;
}

.usage-notes li {
  margin-bottom: 6px;
  color: #856404;
  font-size: 14px;
}

@media (max-width: 768px) {
  .usage-block {
    padding: 16px;
  }
  
  .usage-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  
  .usage-demo {
    min-height: 40px;
  }
}
</style>
