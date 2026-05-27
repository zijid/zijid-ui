<template>
  <div class="demo-page">
    <h1>ZButton 按钮</h1>
    <p class="desc">用于触发操作，支持 default、primary、danger、warning 四种类型和三种尺寸。</p>

    <div class="demo-section">
      <h2>按钮类型</h2>
      <div class="demo-row">
        <ZButton>默认按钮</ZButton>
        <ZButton type="primary">主要按钮</ZButton>
        <ZButton type="danger">危险按钮</ZButton>
        <ZButton type="warning">警告按钮</ZButton>
      </div>
      <ZCodeBlock :code="typeCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <ZButton disabled>默认禁用</ZButton>
        <ZButton type="primary" disabled>主要禁用</ZButton>
        <ZButton type="danger" disabled>危险禁用</ZButton>
        <ZButton type="warning" disabled>警告禁用</ZButton>
      </div>
      <ZCodeBlock :code="disabledCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>按钮尺寸</h2>
      <div class="demo-row">
        <ZButton size="small">小按钮</ZButton>
        <ZButton>中按钮</ZButton>
        <ZButton size="large">大按钮</ZButton>
      </div>
      <ZCodeBlock :code="sizeCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>带图标</h2>
      <div class="demo-row">
        <ZButton icon="plus">新建</ZButton>
        <ZButton type="primary" icon="save">保存</ZButton>
        <ZButton type="danger" icon="trash">删除</ZButton>
        <ZButton icon="folder">打开</ZButton>
      </div>
      <ZCodeBlock :code="iconCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>加载中</h2>
      <div class="demo-row">
        <ZButton loading>加载中...</ZButton>
        <ZButton type="primary" loading>提交中</ZButton>
      </div>
      <ZCodeBlock :code="loadingCode" language="vue" />
    </div>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="buttonProps" :events="buttonEvents" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZButton } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const typeCode = `<ZButton>默认按钮</ZButton>
<ZButton type="primary">主要按钮</ZButton>
<ZButton type="danger">危险按钮</ZButton>
<ZButton type="warning">警告按钮</ZButton>`

const disabledCode = `<ZButton disabled>默认禁用</ZButton>
<ZButton type="primary" disabled>主要禁用</ZButton>
<ZButton type="danger" disabled>危险禁用</ZButton>
<ZButton type="warning" disabled>警告禁用</ZButton>`

const sizeCode = `<ZButton size="small">小按钮</ZButton>
<ZButton>中按钮</ZButton>
<ZButton size="large">大按钮</ZButton>`

const iconCode = `<ZButton icon="plus">新建</ZButton>
<ZButton type="primary" icon="save">保存</ZButton>
<ZButton type="danger" icon="trash">删除</ZButton>
<ZButton icon="folder">打开</ZButton>`

const loadingCode = `<ZButton loading>加载中...</ZButton>
<ZButton type="primary" loading>提交中</ZButton>`

const buttonProps = [
  { name: 'type', type: 'string', default: "'default'", description: '按钮类型，可选 default / primary / danger / warning' },
  { name: 'size', type: 'string', default: "'medium'", description: '按钮尺寸，可选 small / medium / large' },
  { name: 'nativeType', type: 'string', default: "'button'", description: '原生 button 类型' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'loading', type: 'boolean', default: 'false', description: '是否加载中状态' },
  { name: 'autofocus', type: 'boolean', default: 'false', description: '是否自动聚焦' },
  { name: 'icon', type: 'string', default: '-', description: '图标名称' }
]

const buttonEvents = [
  { name: 'click', params: ['MouseEvent'], description: '点击按钮时触发' }
]
</script>

