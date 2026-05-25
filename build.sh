#!/bin/bash

# Zijid UI 构建脚本
# 此脚本用于构建 Zijid UI 组件库

echo "🚀 开始构建 Zijid UI..."

# 检查 Node.js 版本
echo "📋 检查环境..."
node --version
npm --version

# 安装依赖
echo "📦 安装依赖..."
npm install

# 清理之前的构建
echo "🧹 清理之前的构建..."
rm -rf dist/

# 构建组件库
echo "🔨 构建组件库..."
npm run build

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位置: dist/"
    echo "📦 主要文件:"
    ls -la dist/
else
    echo "❌ 构建失败！"
    exit 1
fi

# 更新 demo 中的包引用
echo "🔄 更新 demo 包引用..."
cd demo
npm install ../zijid-ui-0.1.0.tgz

echo "🎉 构建完成！"
echo "📖 查看演示: demo/main-demo.html"
