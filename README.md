# Zijid UI

基于 Vue 3 的 Windows 10 桌面风格组件库

## 特性

- 🖥️ **Windows 10 风格** - 还原真实的 Windows 10 桌面体验
- ⚡ **Vue 3 + TypeScript** - 现代化的技术栈，类型安全
- 📦 **按需导入** - 支持 Tree-shaking，按需加载更轻量
- 🎨 **25+ 精选组件** - 涵盖常用组件，开箱即用

## 快速开始
> **在线演示**: [https://zijid.github.io/zijid-ui/](https://zijid.github.io/zijid-ui/)

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
- **Textarea** - 文本域组件

### 布局组件
- **Window** - 窗口组件
- **Layout** - 布局容器组件

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
- **Search Box** - 搜索框组件
- **Progress** - 进度条组件
- **Slider** - 滑块组件

### 其他组件
- **Icon** - 图标组件
- **Desktop Icon** - 桌面图标组件
- **Code Block** - 代码块组件

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

## 许可证

MIT
