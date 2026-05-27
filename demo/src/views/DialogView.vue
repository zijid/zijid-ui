<template>
  <div class="demo-page">
    <h1>ZDialog 对话框</h1>
    <p class="desc">Windows 10 风格对话框，支持 type 属性区分提示等级，按钮颜色自动匹配。</p>

    <div class="demo-section">
      <h2>不同类型</h2>
      <div class="preview-box">
        <ZButton @click="showInfo">信息</ZButton>
        <ZButton type="primary" @click="showSuccess">成功</ZButton>
        <ZButton type="warning" @click="showWarning">警告</ZButton>
        <ZButton type="danger" @click="showError">错误</ZButton>
      </div>
      <ZCodeBlock :code="basicCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>不同尺寸</h2>
      <div class="preview-box">
        <ZButton @click="showSmall">小尺寸</ZButton>
        <ZButton @click="showMedium">中尺寸</ZButton>
        <ZButton @click="showLarge">大尺寸</ZButton>
      </div>
      <ZCodeBlock :code="sizeCode" language="vue" />
    </div>

    <!-- 信息 -->
    <ZDialog v-model="infoOpen" title="提示" type="info" size="small">
      <p>这是一条普通信息提示。</p>
      <template #footer>
        <ZButton type="primary" @click="infoOpen = false">确定</ZButton>
      </template>
    </ZDialog>

    <!-- 成功 -->
    <ZDialog v-model="successOpen" title="操作成功" type="success" size="small">
      <p>文件已成功保存。</p>
      <template #footer>
        <ZButton type="primary" @click="successOpen = false">确定</ZButton>
      </template>
    </ZDialog>

    <!-- 警告 -->
    <ZDialog v-model="warningOpen" title="确认删除" type="warning">
      <p>确定要删除这个文件吗？此操作无法撤销。</p>
      <template #footer>
        <ZButton @click="warningOpen = false">取消</ZButton>
        <ZButton type="warning" @click="warningOpen = false">确认</ZButton>
      </template>
    </ZDialog>

    <!-- 错误 -->
    <ZDialog v-model="errorOpen" title="操作失败" type="error" size="small">
      <p>请检查输入后重试。</p>
      <template #footer>
        <ZButton @click="errorOpen = false">取消</ZButton>
        <ZButton type="danger" @click="errorOpen = false">重试</ZButton>
      </template>
    </ZDialog>

    <!-- 小尺寸 -->
    <ZDialog v-model="smallOpen" title="小对话框" type="info" size="small">
      <p>内容区域较小的对话框。</p>
    </ZDialog>

    <!-- 中尺寸 -->
    <ZDialog v-model="mediumOpen" title="中对话框" type="info" size="medium">
      <p>中等大小的对话框，适用于大多数场景。</p>
      <template #footer>
        <ZButton @click="mediumOpen = false">取消</ZButton>
        <ZButton type="primary" @click="mediumOpen = false">确定</ZButton>
      </template>
    </ZDialog>

    <!-- 大尺寸 -->
    <ZDialog v-model="largeOpen" title="大对话框" type="info" size="large">
      <p>较大的对话框，适合展示更多内容。</p>
      <div style="display: flex; flex-direction: column; gap: 8px; padding: 8px 0;">
        <p>内容行 1</p>
        <p>内容行 2</p>
        <p>内容行 3</p>
      </div>
      <template #footer>
        <ZButton @click="largeOpen = false">取消</ZButton>
        <ZButton type="primary" @click="largeOpen = false">确定</ZButton>
      </template>
    </ZDialog>

    <!-- API 参考 -->
    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="dialogProps" :events="dialogEvents" :slots="dialogSlots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZDialog } from 'zijid-ui'
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const infoOpen = ref(false)
const successOpen = ref(false)
const warningOpen = ref(false)
const errorOpen = ref(false)
const smallOpen = ref(false)
const mediumOpen = ref(false)
const largeOpen = ref(false)

const showInfo = () => { infoOpen.value = true }
const showSuccess = () => { successOpen.value = true }
const showWarning = () => { warningOpen.value = true }
const showError = () => { errorOpen.value = true }
const showSmall = () => { smallOpen.value = true }
const showMedium = () => { mediumOpen.value = true }
const showLarge = () => { largeOpen.value = true }

const basicCode = `<ZDialog v-model="open" title="提示" type="info" size="small">
  <p>提示内容</p>
</ZDialog>`

const sizeCode = `<ZDialog v-model="open" title="小对话框" size="small">...</ZDialog>
<ZDialog v-model="open" title="中对话框" size="medium">...</ZDialog>
<ZDialog v-model="open" title="大对话框" size="large">...</ZDialog>`

const dialogProps = [
  { name: 'modelValue', type: 'boolean', default: 'false', description: '是否显示对话框（双向绑定）' },
  { name: 'title', type: 'string', default: "'提示'", description: '对话框标题' },
  { name: 'size', type: 'string', default: "'medium'", description: '对话框尺寸，可选 small / medium / large' },
  { name: 'type', type: 'string', default: "'info'", description: '对话框类型，可选 info / success / warning / error' },
  { name: 'closeOnBackdrop', type: 'boolean', default: 'true', description: '点击遮罩层是否关闭' }
]

const dialogEvents = [
  { name: 'update:modelValue', params: ['boolean'], description: '对话框显示状态变化时触发' },
  { name: 'confirm', params: [], description: '点击确认按钮时触发' }
]

const dialogSlots = [
  { name: 'default', description: '对话框内容区域' },
  { name: 'footer', description: '对话框底部按钮区域' }
]
</script>

<style scoped>
</style>
