<template>
  <div class="demo-page">
    <h1>useFileSystem 文件操作</h1>
    <p class="desc">浏览器端文件/文件夹读写 API。优先使用 File System Access API（本地文件），失败时自动回退到 IndexedDB 数据库存储。</p>

    <!-- Toast container -->
    <ZToastContainer :toasts="toasts" :close="close" />

    <div class="demo-section">
      <h2>挂载本地文件夹</h2>
      <p class="section-desc">点击下方按钮授权访问本地文件夹。</p>
      <div class="preview-box row">
        <div class="col">
          <ZButton @click="handleMount" :disabled="isMounted">
            {{ isMounted ? '已挂载' : '挂载本地文件夹' }}
          </ZButton>
          <span v-if="isMounted" class="badge success">已授权</span>
          <span v-else-if="!isApiSupported" class="badge warn">API 不支持</span>
        </div>
        <div class="col">
          <ZButton @click="handleUnmount" :disabled="!isMounted">卸载</ZButton>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>文件操作</h2>
      <div class="preview-box row">
        <div class="col">
          <div class="op-row">
            <ZInput v-model="currentPath" placeholder="/example.txt" style="width: 220px;" />
            <ZButton @click="handleRead">读取</ZButton>
            <ZButton @click="handleWrite">写入</ZButton>
            <ZButton @click="handleRemove">删除</ZButton>
          </div>
          <div class="op-row">
            <ZTextarea v-model="fileContent" placeholder="文件内容" style="width: 100%;" :rows="3" />
          </div>
          <div v-if="readResult !== null" class="result-box">
            <strong>文件内容：</strong>
            <pre>{{ readResult }}</pre>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>文件夹操作</h2>
      <div class="preview-box row">
        <div class="col">
          <div class="op-row">
            <ZInput v-model="dirPath" placeholder="/my-folder" style="width: 220px;" />
            <ZButton @click="handleMkdir">创建文件夹</ZButton>
            <ZButton @click="handleRmdir">删除文件夹</ZButton>
            <ZButton @click="handleIsDir">检查是否为目录</ZButton>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>重命名 / 复制</h2>
      <div class="preview-box row">
        <div class="col">
          <div class="op-row">
            <ZInput v-model="renameFrom" placeholder="/old.txt" style="width: 140px;" />
            <span class="sep">&rarr;</span>
            <ZInput v-model="renameTo" placeholder="/new.txt" style="width: 140px;" />
            <ZButton @click="handleRename">重命名</ZButton>
          </div>
          <div class="op-row">
            <ZInput v-model="copySrc" placeholder="/source.txt" style="width: 140px;" />
            <span class="sep">&rarr;</span>
            <ZInput v-model="copyDst" placeholder="/dest.txt" style="width: 140px;" />
            <ZButton @click="handleCopy">复制</ZButton>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>文件列表</h2>
      <div class="preview-box">
        <ZButton @click="handleList">刷新列表</ZButton>
        <ul v-if="fileList.length > 0" class="file-list">
          <li v-for="f in fileList" :key="f" class="file-item">
            <ZIcon name="file" :size="16" />
            <span>{{ f }}</span>
          </li>
        </ul>
        <p v-else class="empty-hint">暂无文件/文件夹</p>
      </div>
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="apiProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZButton, ZInput, ZTextarea, ZIcon, ZToastContainer, useToast, useFileSystem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const { isMounted, isApiSupported, mount, unmount, read, write, remove, list, mkdir, rmdir, isDirectory, rename, copy } = useFileSystem({ namespace: 'demo-app' })
const { toasts, show: toast, close } = useToast()

const currentPath = ref('/hello.txt')
const fileContent = ref('你好，世界！\nHello, World!')
const readResult = ref<string | null>(null)
const fileList = ref<string[]>([])

const dirPath = ref('/my-folder')
const renameFrom = ref('/hello.txt')
const renameTo = ref('/world.txt')
const copySrc = ref('/hello.txt')
const copyDst = ref('/hello-copy.txt')

function notify(msg: string, ok: boolean) {
  toast({ message: msg, type: ok ? 'success' : 'error', duration: 3000 })
}

async function handleMount() {
  const ok = await mount()
  notify(ok ? '挂载成功' : '挂载失败或用户取消了授权', ok)
}

function handleUnmount() {
  unmount()
  notify('已卸载', true)
}

async function handleRead() {
  readResult.value = null
  const content = await read(currentPath.value)
  if (content !== null) {
    readResult.value = content
    notify('读取成功', true)
  } else {
    notify('文件不存在', false)
  }
}

async function handleWrite() {
  const ok = await write(currentPath.value, fileContent.value)
  notify(ok ? '写入成功' : '写入失败', ok)
  if (ok) await handleList()
}

async function handleRemove() {
  const ok = await remove(currentPath.value)
  notify(ok ? '删除成功' : '删除失败（文件不存在）', ok)
  if (ok) await handleList()
}

async function handleList() {
  fileList.value = await list()
}

async function handleMkdir() {
  if (!dirPath.value.trim()) return
  const ok = await mkdir(dirPath.value)
  notify(ok ? `创建文件夹成功：${dirPath.value}` : '创建文件夹失败', ok)
  if (ok) await handleList()
}

async function handleRmdir() {
  if (!dirPath.value.trim()) return
  const ok = await rmdir(dirPath.value, true)
  notify(ok ? `删除文件夹成功：${dirPath.value}` : '删除文件夹失败', ok)
  if (ok) await handleList()
}

async function handleIsDir() {
  if (!dirPath.value.trim()) return
  const ok = await isDirectory(dirPath.value)
  notify(ok ? `是目录：${dirPath.value}` : `不是目录：${dirPath.value}`, ok)
}

async function handleRename() {
  if (!renameFrom.value.trim() || !renameTo.value.trim()) return
  const ok = await rename(renameFrom.value, renameTo.value)
  if (ok) {
    notify(`重命名成功：${renameFrom.value} -> ${renameTo.value}`, true)
    copySrc.value = renameTo.value
    await handleList()
  } else {
    notify('重命名失败', false)
  }
}

async function handleCopy() {
  if (!copySrc.value.trim() || !copyDst.value.trim()) return
  const ok = await copy(copySrc.value, copyDst.value)
  notify(ok ? `复制成功：${copySrc.value} -> ${copyDst.value}` : '复制失败（源文件不存在或操作失败）', ok)
  if (ok) await handleList()
}

const apiProps = [
  { name: 'mount()', type: 'Promise<boolean>', description: '请求用户授权打开本地文件夹' },
  { name: 'unmount()', type: 'void', description: '卸载已挂载的文件夹句柄' },
  { name: 'read(path)', type: 'Promise<string|null>', description: '读取文件内容，不存在返回 null' },
  { name: 'write(path, content)', type: 'Promise<boolean>', description: '写入文件内容' },
  { name: 'remove(path)', type: 'Promise<boolean>', description: '删除文件' },
  { name: 'mkdir(path)', type: 'Promise<boolean>', description: '创建文件夹（含中间路径）' },
  { name: 'rmdir(path, recursive?)', type: 'Promise<boolean>', default: 'false', description: '删除文件夹' },
  { name: 'isDirectory(path)', type: 'Promise<boolean>', description: '检查路径是否为文件夹' },
  { name: 'rename(old, new)', type: 'Promise<boolean>', description: '重命名/移动文件或文件夹' },
  { name: 'copy(src, dest)', type: 'Promise<boolean>', description: '复制文件或文件夹' },
  { name: 'list(dir?)', type: 'Promise<string[]>', description: '列出目录内容' },
  { name: 'exists(path)', type: 'Promise<boolean>', description: '检查路径是否存在' },
  { name: 'isMounted', type: 'Ref<boolean>', default: 'false', description: '是否已挂载本地文件夹' },
  { name: 'isApiSupported', type: 'Ref<boolean>', description: '浏览器是否支持 FS API' },
]
</script>

<style scoped>
.row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.col {
  flex: 1;
  min-width: 200px;
}
.op-row {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.sep {
  color: #999;
  font-size: 16px;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 8px;
}
.badge.success {
  background: #d4edda;
  color: #155724;
}
.badge.warn {
  background: #fff3cd;
  color: #856404;
}
.result-box {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 12px;
  margin-top: 8px;
  font-size: 13px;
}
.result-box pre {
  margin: 8px 0 0;
  white-space: pre-wrap;
  word-break: break-all;
}
.file-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
}
.file-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
  font-size: 13px;
}
.empty-hint {
  color: #999;
  font-size: 13px;
  margin-top: 8px;
}
.section-desc {
  color: #666;
  font-size: 13px;
  margin: -8px 0 16px;
}
</style>
