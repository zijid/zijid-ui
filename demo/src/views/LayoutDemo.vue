<template>
  <div class="demo-page">
    <h1>ZLayout 布局组件</h1>
    <p class="desc">统一的布局容器组件，融合 Panel（面板）、Splitter（分割器）、ScrollArea（滚动区域）功能，同时支持 Flex 布局属性。</p>

    <div class="demo-section">
      <h2>面板模式 (Panel)</h2>
      <div class="preview-box" style="align-items: flex-start;">
        <z-layout title="系统信息" :scroll="false" style="width: 320px; height: 160px;">
          <p style="margin-bottom: 8px;">操作系统: Windows 10</p>
          <p style="margin-bottom: 8px;">版本: 22H2</p>
          <p>内存: 16 GB</p>
        </z-layout>

        <z-layout title="带底栏" :scroll="false" style="width: 320px; height: 200px;">
          <p>面板正文内容</p>
          <template #footer>
            <span style="font-size: 12px; color: #666;">状态: 已就绪</span>
          </template>
        </z-layout>
      </div>
      <ZCodeBlock :code="panelCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>分割器模式 (Splitter)</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-layout split :scroll="false" style="height: 200px; width: 100%; max-width: 600px;">
          <template #first>
            <div style="padding: 16px; color: #333;">上方面板<br/>可拖拽调整</div>
          </template>
          <template #second>
            <div style="padding: 16px; color: #333;">下方面板</div>
          </template>
        </z-layout>
      </div>
      <p style="color: #666; margin-bottom: 8px;">水平分割:</p>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-layout direction="horizontal" split :scroll="false" style="height: 200px; width: 100%; max-width: 400px;">
          <template #first>
            <div style="padding: 16px;">左侧面板</div>
          </template>
          <template #second>
            <div style="padding: 16px;">右侧面板</div>
          </template>
        </z-layout>
      </div>
      <ZCodeBlock :code="splitterCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>滚动区域模式 (ScrollArea)</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-layout scroll :scroll="true" style="height: 160px; width: 320px;">
          <p v-for="i in 30" :key="i" style="padding: 4px 0;">滚动内容行 {{ i }}</p>
        </z-layout>
      </div>
      <ZCodeBlock :code="scrollCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>Flex 布局模式</h2>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-layout direction="horizontal" :gap="12" align="center" justify="center" :scroll="false" style="height: 120px; width: 100%; max-width: 500px;">
          <div style="background: #0078d4; color: #fff; padding: 12px 20px; border-radius: 4px;">A</div>
          <div style="background: #107c10; color: #fff; padding: 12px 20px; border-radius: 4px;">B</div>
          <div style="background: #d83b01; color: #fff; padding: 12px 20px; border-radius: 4px;">C</div>
        </z-layout>
      </div>
      <p style="color: #666; margin-bottom: 8px;">垂直排列 + 间隙:</p>
      <div class="preview-box" style="flex-direction: column; align-items: stretch;">
        <z-layout direction="vertical" :gap="8" align="center" :scroll="false" style="padding: 16px; width: 200px;">
          <div style="background: #0078d4; color: #fff; padding: 8px 16px; border-radius: 4px; width: 100%; text-align: center;">项目 1</div>
          <div style="background: #107c10; color: #fff; padding: 8px 16px; border-radius: 4px; width: 100%; text-align: center;">项目 2</div>
          <div style="background: #d83b01; color: #fff; padding: 8px 16px; border-radius: 4px; width: 100%; text-align: center;">项目 3</div>
        </z-layout>
      </div>
      <ZCodeBlock :code="flexCode" language="vue" />
    </div>

    <!-- API 表格 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="layoutProps" :slots="layoutSlots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZLayout, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const panelCode = `<z-layout title="系统信息" style="width: 320px;height: 160px;">
  <p>面板内容</p>
  <template #footer>
    <span>底栏内容</span>
  </template>
</z-layout>`

const splitterCode = `<z-layout split style="height: 200px;">
  <template #first><div>上方面板</div></template>
  <template #second><div>下方面板</div></template>
</z-layout>

<!-- 水平分割 -->
<z-layout direction="horizontal" split>
  <template #first><div>左侧面板</div></template>
  <template #second><div>右侧面板</div></template>
</z-layout>`

const scrollCode = `<z-layout scroll style="height: 160px;">
  <p v-for="i in 30">滚动内容 {{ i }}</p>
</z-layout>`

const flexCode = `<z-layout direction="horizontal" :gap="12" align="center" justify="center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</z-layout>

<z-layout direction="vertical" :gap="8" align="center">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</z-layout>`

const layoutProps = [
  { name: 'title', type: 'string', default: '—', description: '面板标题文字（启用 header 区域）' },
  { name: 'direction', type: "'vertical' | 'horizontal'", default: "'vertical'", description: '主轴方向' },
  { name: 'split', type: 'boolean | number', default: 'false', description: '启用分割器模式，true 使用默认 40%，或指定初始百分比' },
  { name: 'modelValue', type: 'number', default: '40', description: '分割比例（%），v-model 双向绑定' },
  { name: 'scroll', type: 'boolean | "auto" | "hidden" | "x" | "y"', default: 'false', description: '滚动模式：false=不滚动，true/y=垂直滚动，x=水平滚动' },
  { name: 'align', type: "'start' | 'center' | 'end' | 'stretch'", default: "'stretch'", description: '交叉轴对齐方式' },
  { name: 'justify', type: "'start' | 'center' | 'end' | 'between' | 'around'", default: "'start'", description: '主轴分布方式' },
  { name: 'gap', type: 'number', default: '0', description: '子元素之间的间隔（px）' },
  { name: 'padding', type: 'string', default: '—', description: '内边距，CSS 值' }
]

const layoutSlots = [
  { name: 'default', description: '默认内容（非 split 模式）', default: true },
  { name: 'header', description: '头部区域（有 title 时也可直接显示）' },
  { name: 'footer', description: '底部区域' },
  { name: 'first', description: '分割器模式下左侧/上方面板' },
  { name: 'second', description: '分割器模式下右侧/下方面板' }
]
</script>

<style scoped>
</style>
