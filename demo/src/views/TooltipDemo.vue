<template>
  <div class="demo-page">
    <h1>ZTooltip 文字提示</h1>
    <p class="desc">鼠标悬停或点击时显示提示信息的文字气泡框，支持多种位置和触发方式。</p>

    <div class="demo-section">
      <h2>基本用法</h2>
      <div class="preview-box">
        <ZTooltip content="这是一个提示信息">
          <ZButton>鼠标移入查看</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同位置</h2>
      <div class="preview-box" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 48px 64px; padding: 48px 24px;">
        <ZTooltip content="顶部提示" placement="top">
          <ZButton size="small">上</ZButton>
        </ZTooltip>
        <ZTooltip content="左侧提示" placement="left">
          <ZButton size="small">左</ZButton>
        </ZTooltip>
        <ZTooltip content="右侧提示" placement="right">
          <ZButton size="small">右</ZButton>
        </ZTooltip>
        <ZTooltip content="底部提示" placement="bottom">
          <ZButton size="small">下</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="placementCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>点击触发</h2>
      <div class="preview-box">
        <ZTooltip content="点击触发的提示，点击外部区域关闭" trigger="click">
          <ZButton>点击我</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="clickCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>长文本提示</h2>
      <div class="preview-box">
        <ZTooltip content="这是一段较长的提示信息，用于展示 Tooltip 在多行文本情况下的显示效果。">
          <ZButton>长提示</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="longTextCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>自定义宽度</h2>
      <div class="preview-box" style="display: flex; gap: 24px; justify-content: center;">
        <ZTooltip content="窄宽度提示，文字会自动换行显示" :max-width="120">
          <ZButton>窄提示 (120px)</ZButton>
        </ZTooltip>
        <ZTooltip content="更宽的提示框可以容纳更多文字内容在一行显示" :max-width="400">
          <ZButton>宽提示 (400px)</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="widthCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>悬停在按钮组</h2>
      <div class="preview-box" style="display: flex; gap: 16px; justify-content: center;">
        <ZTooltip content="保存当前修改的内容" placement="top">
          <ZButton type="primary" icon="save">保存</ZButton>
        </ZTooltip>
        <ZTooltip content="删除选中的项目，此操作不可恢复" placement="top">
          <ZButton type="danger" icon="trash">删除</ZButton>
        </ZTooltip>
        <ZTooltip content="下载文件到本地" placement="top">
          <ZButton type="default" icon="download">下载</ZButton>
        </ZTooltip>
      </div>
      <ZCodeBlock :code="groupCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="tooltipProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZTooltip, ZButton, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const tooltipProps = [
  {
    name: 'content',
    type: 'string',
    default: "''",
    description: '提示内容文字'
  },
  {
    name: 'placement',
    type: "'top' | 'bottom' | 'left' | 'right'",
    default: "'top'",
    description: '提示框出现位置，相对于触发元素'
  },
  {
    name: 'trigger',
    type: "'hover' | 'click'",
    default: "'hover'",
    description: '触发方式：hover 鼠标悬停触发，click 点击触发，点击外部关闭'
  },
  {
    name: 'maxWidth',
    type: 'number | string',
    default: '280',
    description: '提示框最大宽度，number 为像素值，string 支持 CSS 单位（如 "50%"）'
  }
]

const basicCode = `<ZTooltip content="这是一个提示信息">
  <ZButton>鼠标移入查看</ZButton>
</ZTooltip>`

const placementCode = `<ZTooltip content="顶部提示" placement="top">
  <ZButton size="small">上</ZButton>
</ZTooltip>

<ZTooltip content="左侧提示" placement="left">
  <ZButton size="small">左</ZButton>
</ZTooltip>

<ZTooltip content="右侧提示" placement="right">
  <ZButton size="small">右</ZButton>
</ZTooltip>

<ZTooltip content="底部提示" placement="bottom">
  <ZButton size="small">下</ZButton>
</ZTooltip>`

const clickCode = `<ZTooltip content="点击触发的提示，点击外部区域关闭" trigger="click">
  <ZButton>点击我</ZButton>
</ZTooltip>`

const longTextCode = `<ZTooltip content="这是一段较长的提示信息，用于展示 Tooltip 在多行文本情况下的显示效果。">
  <ZButton>长提示</ZButton>
</ZTooltip>`

const widthCode = `<ZTooltip content="窄宽度提示，文字会自动换行显示" :max-width="120">
  <ZButton>窄提示 (120px)</ZButton>
</ZTooltip>

<ZTooltip content="更宽的提示框可以容纳更多文字内容在一行显示" :max-width="400">
  <ZButton>宽提示 (400px)</ZButton>
</ZTooltip>`

const groupCode = `<ZTooltip content="保存当前修改的内容" placement="top">
  <ZButton type="primary" icon="save">保存</ZButton>
</ZTooltip>

<ZTooltip content="删除选中的项目，此操作不可恢复" placement="top">
  <ZButton type="danger" icon="trash">删除</ZButton>
</ZTooltip>

<ZTooltip content="下载文件到本地" placement="top">
  <ZButton type="default" icon="download">下载</ZButton>
</ZTooltip>`
</script>

<style scoped>
.demo-page {
  padding: 40px;
  max-width: 960px;
  margin: 0 auto;
}

.demo-page h1 {
  font-size: 28px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 12px;
}

.demo-page > .desc {
  color: #718096;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 40px;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section h2 {
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 16px;
}

.preview-box {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 80px;
}
</style>
