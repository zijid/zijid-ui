<template>
  <div class="demo-container">
    <h2>ZIcon 图标库</h2>
    <p class="desc">内置 {{ icons.length }} 个 Windows 10 风格图标。点击图标即可复制名称。</p>
    
    <div class="preview-box">
      <div class="icon-grid">
        <div 
          v-for="icon in icons" 
          :key="icon" 
          class="icon-item"
          @click="copyIconName(icon)"
          :class="{ 'is-copied': copiedIcon === icon }"
        >
          <z-icon :name="icon" :size="28" />
          <span>{{ icon }}</span>
        </div>
      </div>
    </div>

    <CodeBlock :code="code" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZIcon, iconNames } from 'zijid-ui'
import CodeBlock from '../components/CodeBlock.vue'

const icons = iconNames
const copiedIcon = ref<string | null>(null)

const copyIconName = (name: string) => {
  navigator.clipboard.writeText(name).then(() => {
    copiedIcon.value = name
    setTimeout(() => copiedIcon.value = null, 1500)
  })
}

const code = `<template>
  <z-icon name="home" :size="32" />
  <z-icon name="settings" color="#0078d7" />
</template>

<script setup>
import { ZIcon } from 'zijid-ui'
<\/script>`
</script>

<style scoped>
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 12px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}
.icon-item:hover {
  background: #f5f7fa;
  border-color: #e4e7ed;
}
.icon-item.is-copied {
  background: #e1f3d8;
  border-color: #c2e7b0;
  color: #67c23a;
}
.icon-item span {
  margin-top: 8px;
  font-size: 12px;
  color: #606266;
  text-align: center;
}
</style>