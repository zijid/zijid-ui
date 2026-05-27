<template>
  <div class="demo-page">
    <h1>ZTooltip 文字提示</h1>
    <p class="desc">鼠标悬停或点击时显示提示信息的文字气泡框，支持多种位置。</p>

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
        <ZTooltip content="点击触发的提示" trigger="click">
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
      <h2>API 参考</h2>
      <ApiTable :props="tooltipProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZTooltip, ZButton, ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const tooltipProps = [
  { name: 'content', type: 'string', default: "''", description: '提示内容' },
  { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: '提示框出现位置' },
  { name: 'trigger', type: "'hover' | 'click'", default: "'hover'", description: '触发方式' }
]

const basicCode = `<ZTooltip content="这是一个提示信息">
  <ZButton>鼠标移入查看</ZButton>
</ZTooltip>`

const placementCode = `<ZTooltip content="顶部提示" placement="top">
  <ZButton>上</ZButton>
</ZTooltip>

<ZTooltip content="左侧提示" placement="left">
  <ZButton>左</ZButton>
</ZTooltip>

<ZTooltip content="右侧提示" placement="right">
  <ZButton>右</ZButton>
</ZTooltip>

<ZTooltip content="底部提示" placement="bottom">
  <ZButton>下</ZButton>
</ZTooltip>`

const clickCode = `<ZTooltip content="点击触发的提示" trigger="click">
  <ZButton>点击我</ZButton>
</ZTooltip>`

const longTextCode = `<ZTooltip content="这是一段较长的提示信息，用于展示 Tooltip 在多行文本情况下的显示效果。">
  <ZButton>长提示</ZButton>
</ZTooltip>`
</script>
