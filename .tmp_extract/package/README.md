# Zijid UI

基于 Vue 3 的 Windows 10 桌面风格组件库

## 特性

- 🖥️ **Windows 10 风格** - 还原真实的 Windows 10 桌面体验
- ⚡ **Vue 3 + TypeScript** - 现代化的技术栈，类型安全
- 📦 **按需导入** - 支持 Tree-shaking，按需加载更轻量
- 🎨 **30+ 精选组件** - 涵盖常用组件，开箱即用

## 快速开始

### 安装

```bash
npm install zijid-ui
```

### 基本使用

```vue
<template>
  <div>
    <ZButton type="primary">点击我</ZButton>
    <ZInput v-model="username" placeholder="请输入用户名" />
    <ZWindow v-model="visible" title="我的窗口">
      <p>窗口内容</p>
    </ZWindow>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ZButton, ZInput, ZWindow } from 'zijid-ui'
import 'zijid-ui/dist/style.css'

const username = ref('')
const visible = ref(false)
</script>
```

## 组件列表

### 基础组件
- **Button** - 按钮组件
- **Input** - 输入框组件
- **Select** - 选择框组件
- **Checkbox** - 复选框组件
- **Radio** - 单选框组件
- **Switch** - 开关组件

### 布局组件
- **Window** - 窗口组件
- **Panel** - 面板组件
- **Splitter** - 分割器组件
- **ScrollArea** - 滚动区域组件

### 导航组件
- **Menu** - 菜单组件
- **Dropdown** - 下拉菜单组件
- **Tabs** - 标签页组件
- **Toolbar** - 工具栏组件
- **Status Bar** - 状态栏组件

### 反馈组件
- **Dialog** - 对话框组件
- **Toast** - 消息提示组件
- **Tooltip** - 提示组件
- **Context Menu** - 右键菜单组件

### 数据组件
- **List** - 列表组件
- **Tree** - 树组件
- **Table** - 表格组件
- **Search Box** - 搜索框组件
- **Progress** - 进度条组件
- **Slider** - 滑块组件

### 其他组件
- **Icon** - 图标组件
- **Desktop** - 桌面组件
- **Desktop Icon** - 桌面图标组件
- **Start Menu** - 开始菜单组件
- **Taskbar** - 任务栏组件

## 开发

```bash
# 克隆项目
git clone <repository-url>
cd zijid-ui

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build
```

## 演示和文档

由于 Windows 权限问题，Vite 开发服务器可能无法正常启动。您可以直接使用以下静态文件查看演示：

- **[完整组件演示](./demo/complete-demo.html)** - 展示所有组件的功能和用法
- **[完整 API 文档](./demo/complete-api-docs.html)** - 详细的 API 参考文档

### 查看演示

1. 打开 `F:\npm\zijid-ui\demo\complete-demo.html` 文件
2. 在浏览器中查看各种组件的演示
3. 点击侧边栏导航切换不同组件的演示

### 查看 API 文档

1. 打开 `F:\npm\zijid-ui\demo\complete-api-docs.html` 文件
2. 点击顶部的组件列表查看对应组件的 API 文档
3. 包含属性、事件、插槽的详细说明和使用示例

## 问题修复

### Windows 权限问题

如果遇到 Vite 开发服务器权限问题，可以尝试以下解决方案：

1. **以管理员身份运行** PowerShell 或命令提示符
2. **使用 Windows Subsystem for Linux (WSL)**
3. **使用 Docker 容器**

### 替代方案

如果无法启动开发服务器，直接使用静态演示文件：

- 所有组件的功能演示都已包含在静态 HTML 文件中
- 无需构建，直接在浏览器中打开即可查看
- 包含完整的交互功能展示

## 许可证

MIT
