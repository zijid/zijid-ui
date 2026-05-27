<template>
  <div class="demo-page">
    <h1>ZIcon 图标库</h1>
    <p class="desc">内置 {{ iconNames.length }} 个 Windows 10 风格图标。点击图标即可复制名称。</p>

    <div class="demo-section">
      <h2>全部图标</h2>
      <div class="preview-box" style="display: block;">
        <div class="icon-grid">
          <div
            v-for="name in iconNames"
            :key="name"
            class="icon-item"
            @click="copyIconName(name)"
            :title="'复制: ' + name"
          >
            <div class="icon-box">
              <ZIcon :name="name" :size="24" />
            </div>
            <span class="icon-label">{{ name }}</span>
          </div>
        </div>
      </div>
      <ZCodeBlock :code="usageCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="iconProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZIcon, type IconName, iconNames } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const copyIconName = async (name: IconName) => {
  try {
    await navigator.clipboard.writeText(name)
  } catch {
    // fallback
  }
}

const usageCode = `<ZIcon name="home" :size="24" />
<ZIcon name="settings" color="#0078d7" :size="32" />

<script setup>
import { ZIcon } from 'zijid-ui'
<\/script>`

const iconProps = [
  { name: 'name', type: 'IconName', default: '-', description: '图标名称（必填），可从 iconNames 获取完整列表' },
  { name: 'size', type: 'number', default: '16', description: '图标尺寸' },
  { name: 'color', type: 'string', default: '-', description: '图标颜色' }
]
</script>

<style scoped>
.icon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 12px; }
.icon-item { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer; transition: all 0.15s ease; background: #fff; }
.icon-item:hover { border-color: #0078d4; background: #f0f7ff; transform: translateY(-1px); }
.icon-box { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; }
.icon-label { font-size: 11px; color: #64748b; text-align: center; word-break: break-all; max-width: 100%; }
</style>
