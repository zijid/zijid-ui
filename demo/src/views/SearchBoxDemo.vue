<template>
  <div class="demo-page">
    <h1>ZSearchBox 搜索框</h1>
    <p class="desc">基于 ZInput 组合的搜索组件，输入时显示带高亮匹配的下拉列表。搜索范围覆盖标签和副标题文字。点击下方标签可快速填充搜索框测试。</p>

    <div class="demo-section">
      <h2>应用搜索</h2>
      <p class="demo-hint">搜索 Windows 应用列表，支持图标和名称匹配</p>
      <div class="preview-box">
        <z-search-box
          placeholder="搜索应用..."
          :items="appItems"
          @select="onSelect"
          @search="onSearch"
        />
      </div>
      <div class="data-tags">
        <span
          v-for="item in appItems"
          :key="item.label"
          class="data-tag"
          @click="fillSearch('app', item.label)"
        >{{ item.label }}</span>
      </div>
      <ZCodeBlock :code="appCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>设置搜索（副标题匹配）</h2>
      <p class="demo-hint">搜索系统设置项，也会匹配副标题文字（试试搜"时区" 或"蓝牙"）</p>
      <div class="preview-box">
        <z-search-box
          placeholder="搜索设置..."
          :items="settingItems"
          @select="onSelect"
        />
      </div>
      <div class="data-tags">
        <span
          v-for="item in settingItems"
          :key="item.label"
          class="data-tag"
          @click="fillSearch('setting', item.label)"
        >{{ item.label }}</span>
      </div>
      <ZCodeBlock :code="settingCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>文件搜索</h2>
      <p class="demo-hint">搜索文件目录，匹配文件名和类型说明</p>
      <div class="preview-box">
        <z-search-box
          placeholder="搜索文件..."
          :items="fileItems"
          @select="onSelect"
        />
      </div>
      <div class="data-tags">
        <span
          v-for="item in fileItems"
          :key="item.label"
          class="data-tag"
          @click="fillSearch('file', item.label)"
        >{{ item.label }}</span>
      </div>
      <ZCodeBlock :code="fileCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>无结果状态</h2>
      <p class="demo-hint">输入不匹配任何数据的文字，显示空状态提示</p>
      <div class="preview-box">
        <z-search-box
          placeholder="输入不存在的词试试.."
          :items="appItems"
          @select="onSelect"
        />
      </div>
      <ZCodeBlock :code="emptyCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 文档</h2>
      <ApiTable 
        :props="searchBoxProps" 
        :events="searchBoxEvents" 
      />
    </div>

    <div class="demo-section">
      <h2>类型定义（SearchItem）</h2>
      <ZCodeBlock :code="typeCode" language="vue" />
    </div>

    <div class="action-bar">
      <p v-if="lastAction" class="action-log">{{ lastAction }}</p>
      <p v-else class="action-log muted">在上方搜索框输入文字或点击标签查看效果</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ZCodeBlock, ZSearchBox } from 'zijid-ui'
import type { SearchItem } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const lastAction = ref('')

const appItems: SearchItem[] = [
  { label: '计算器', icon: 'calculator' },
  { label: '画图', icon: 'edit' },
  { label: '记事本', icon: 'file-text' },
  { label: '命令提示符', icon: 'terminal' },
  { label: '任务管理器', icon: 'activity' },
  { label: '文件资源管理器', icon: 'folder' },
  { label: '控制面板', icon: 'settings' },
  { label: '注册表编辑器', icon: 'edit' },
  { label: 'PowerShell', icon: 'terminal' },
  { label: '系统信息', icon: 'info' },
  { label: '设备管理器', icon: 'monitor' },
  { label: '磁盘清理', icon: 'trash' },
  { label: '放大镜', icon: 'search' },
  { label: '截图工具', icon: 'edit' },
  { label: '闹钟和时钟', icon: 'time' }
]

const settingItems: SearchItem[] = [
  { label: '系统', subtitle: '显示、通知、电源' },
  { label: '个性化', subtitle: '背景、锁屏、颜色' },
  { label: '网络和 Internet', subtitle: 'Wi-Fi、VPN、飞行模式' },
  { label: '帐户', subtitle: '电子邮件、家庭、其他用户' },
  { label: '时间和语言', subtitle: '日期、时区、语言' },
  { label: '更新和安全', subtitle: 'Windows Update、备份' },
  { label: '隐私', subtitle: '位置、摄像头、麦克风' },
  { label: '游戏', subtitle: '游戏栏、捕获、游戏模式' },
  { label: '辅助功能', subtitle: '讲述人、放大镜、高对比度' },
  { label: '蓝牙和其他设备', subtitle: '蓝牙、打印机、鼠标' },
  { label: '应用', subtitle: '卸载、默认应用、可选功能' },
  { label: '搜索', subtitle: '搜索权限、索引、搜索历史' }
]

const fileItems: SearchItem[] = [
  { label: '项目报告.docx', subtitle: '文档文件 · 2.4 MB' },
  { label: '年度预算.xlsx', subtitle: '表格文件 · 865 KB' },
  { label: '团队合影.jpg', subtitle: '图片文件 · 3.1 MB' },
  { label: '会议记录.md', subtitle: 'Markdown 文件 · 12 KB' },
  { label: '数据库备份.bak', subtitle: '备份文件 · 256 MB' },
  { label: '安装程序.exe', subtitle: '可执行文件 · 45 MB' },
  { label: '配置设置.json', subtitle: '配置文件 · 8 KB' },
  { label: '用户手册.pdf', subtitle: 'PDF 文档 · 5.2 MB' },
  { label: '启动脚本.sh', subtitle: 'Shell 脚本 · 1 KB' },
  { label: '日志文件.log', subtitle: '日志文件 · 128 KB' },
  { label: '演示文稿.pptx', subtitle: 'PowerPoint · 4.6 MB' },
  { label: '源代码压缩包.zip', subtitle: '压缩文件 · 15 MB' }
]

function fillSearch(type: string, label: string) {
  lastAction.value = '点击标签: ' + label + ' -- 在下方搜索框输入即可测试'
}

function onSelect(item: SearchItem) {
  lastAction.value = '已选择: ' + item.label
}

function onSearch(val: string) {
  lastAction.value = '搜索: ' + val
}

const searchBoxProps = [
  { name: 'modelValue', type: 'string', default: "''", description: '绑定值' },
  { name: 'placeholder', type: 'string', default: "'搜索'", description: '占位提示' },
  { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用' },
  { name: 'items', type: 'SearchItem[]', default: '[]', description: '可搜索数据列表' },
  { name: 'maxResults', type: 'number', default: '10', description: '最大显示条数' }
]

const searchBoxEvents = [
  { name: 'update:modelValue', params: ['value: string'], description: '输入框内容变化时触发' },
  { name: 'search', params: ['value: string'], description: '按Enter时触发' },
  { name: 'select', params: ['item: SearchItem'], description: '选中下拉项时触发' }
]

const appCode = [
  '<z-search-box',
  '  placeholder="搜索应用..."',
  '  :items="appItems"',
  '  @select="onSelect"',
  '/>'
].join('\n')

const settingCode = [
  '<z-search-box',
  '  placeholder="搜索设置..."',
  '  :items="settingItems"',
  '  @select="onSelect"',
  '/>'
].join('\n')

const fileCode = [
  '<z-search-box',
  '  placeholder="搜索文件..."',
  '  :items="fileItems"',
  '  @select="onSelect"',
  '/>'
].join('\n')

const emptyCode = [
  '<z-search-box',
  '  placeholder="输入不存在的词试试.."',
  '  :items="appItems"',
  '  @select="onSelect"',
  '/>'
].join('\n')

const typeCode = [
  '// SearchItem 类型定义',
  'export type SearchItem = {',
  '  label: string       // 显示标签（必填）',
  '  value?: string      // 选中值（可选）',
  '  icon?: IconName     // 图标名称（可选）',
  '  subtitle?: string   // 副标题文字（可选，也会参与匹配搜索）',
  '}'
].join('\n')
</script>

<style scoped>
.demo-hint {
  font-size: 13px;
  color: #a0aec0;
  margin-bottom: 14px;
}

.data-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  margin-bottom: 4px;
}

.data-tag {
  display: inline-block;
  padding: 2px 10px;
  font-size: 12px;
  color: #4a5568;
  background: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.data-tag:hover {
  background: #e2e8f0;
  border-color: #cbd5e0;
}

.data-tag:active {
  background: #cbd5e0;
}

.action-bar {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.action-log {
  font-size: 13px;
  color: #0078d4;
  font-weight: 500;
}

.action-log.muted {
  color: #a0aec0;
  font-weight: 400;
}
</style>
