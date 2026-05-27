<template>
  <div class="demo-page">
    <h1>ZCodeBlock 代码块</h1>
    <p class="desc">展示代码片段并提供一键复制功能的代码块组件，支持多种语言语法高亮，行号显示、行高亮、主题切换等特性。</p>

    <div class="demo-section">
      <h2>HTML / Vue 模板</h2>
      <ZCodeBlock
        code='<template>
  <ZButton type="primary">主要按钮</ZButton>
</template>'
        language="html"
      />
    </div>

    <div class="demo-section">
      <h2>JavaScript</h2>
      <ZCodeBlock
        :code="jsCode"
        language="javascript"
      />
    </div>

    <div class="demo-section">
      <h2>TypeScript</h2>
      <ZCodeBlock
        :code="tsCode"
        language="typescript"
      />
    </div>

    <div class="demo-section">
      <h2>CSS</h2>
      <ZCodeBlock
        :code="cssCode"
        language="css"
      />
    </div>

    <div class="demo-section">
      <h2>命令行 / Bash</h2>
      <ZCodeBlock
        code="npm install zijid-ui"
        language="bash"
      />
    </div>

    <div class="demo-section">
      <h2>显示行号</h2>
      <ZCodeBlock
        :code="jsCode"
        language="javascript"
        :show-line-numbers="true"
      />
    </div>

    <div class="demo-section">
      <h2>自定义起始行号</h2>
      <ZCodeBlock
        :code="tsCode"
        language="typescript"
        :show-line-numbers="true"
        :start-line="10"
      />
    </div>

    <div class="demo-section">
      <h2>高亮指定行</h2>
      <ZCodeBlock
        :code="jsCode"
        language="javascript"
        :show-line-numbers="true"
        :highlight-lines="[1, 3, 7]"
      />
    </div>

    <div class="demo-section">
      <h2>自定义标题</h2>
      <ZCodeBlock
        code="const greeting = 'Hello World';"
        language="javascript"
        title="示例代码"
      />
    </div>

    <div class="demo-section">
      <h2>隐藏复制按钮</h2>
      <ZCodeBlock
        code="console.log('只读代码')"
        language="javascript"
        :show-copy="false"
      />
    </div>

    <div class="demo-section">
      <h2>自定义复制按钮文字</h2>
      <ZCodeBlock
        code="npm install zijid-ui"
        language="bash"
        copy-text="拷贝"
        copied-text="OK"
      />
    </div>

    <div class="demo-section">
      <h2>无 Header</h2>
      <ZCodeBlock
        code="这是没有标题栏的代码块"
        :show-header="false"
      />
    </div>

    <div class="demo-section">
      <h2>限制高度（可滚动）</h2>
      <ZCodeBlock
        :code="scrollCode"
        language="javascript"
        :max-height="180"
      />
    </div>

    <div class="demo-section">
      <h2>长代码横向滚动</h2>
      <ZCodeBlock
        :code="longCode"
        language="javascript"
      />
    </div>

    <div class="demo-section">
      <h2>自动换行</h2>
      <ZCodeBlock
        :code="longCode"
        language="javascript"
        :wrap-lines="true"
      />
    </div>

    <div class="demo-section">
      <h2>Light 主题</h2>
      <ZCodeBlock
        :code="cssCode"
        language="css"
        theme="light"
      />
    </div>

    <div class="demo-section">
      <h2>Light 主题 + 行号 + 高亮</h2>
      <ZCodeBlock
        :code="jsCode"
        language="javascript"
        theme="light"
        :show-line-numbers="true"
        :highlight-lines="[1, 5]"
      />
    </div>

    <div class="demo-section">
      <h2>无边框</h2>
      <ZCodeBlock
        code="border: none;"
        language="css"
        :borderless="true"
      />
    </div>

    <div class="demo-section">
      <h2>自定义字号</h2>
      <ZCodeBlock
        :code="jsCode"
        language="javascript"
        font-size="15"
      />
    </div>

    <div class="demo-section">
      <h2>组合使用</h2>
      <ZCodeBlock :code="usageCode" language="vue" />
    </div>

    <div class="demo-section">
      <h2>API 参考</h2>
      <ApiTable :props="codeBlockProps" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ZCodeBlock } from 'zijid-ui'
import ApiTable from '../components/ApiTable.vue'

const jsCode = `function greet(name) {
  return \`Hello, \${name}!\`;
}

const result = greet('World');
console.log(result);`

const tsCode = `interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};`

const cssCode = `.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
}`

const scrollCode = `function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function average(arr) {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}

function median(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function mode(arr) {
  const freq = {};
  arr.forEach(v => freq[v] = (freq[v] || 0) + 1);
  const max = Math.max(...Object.values(freq));
  return Object.keys(freq).filter(k => freq[k] === max).map(Number);
}

console.log(sum([1,2,3]));
console.log(average([1,2,3,4]));
console.log(median([1,3,3,6,7,8,9]));
console.log(mode([1,1,2,3,4,4,4]));`

const longCode = `// A very long line to demonstrate horizontal scrolling
const reallyLongVariableName = someObject.property.anotherProperty.deeplyNestedValue?.map(item => item.transform()).filter(Boolean).reduce((acc, val) => acc + val, 0);
console.log(reallyLongVariableName);`

const usageCode = `<template>
  <ZCodeBlock
    code="<div>Hello World</div>"
    language="html"
    :show-line-numbers="true"
    :highlight-lines="[1]"
    title="示例"
  />

  <!-- Without header -->
  <ZCodeBlock
    code="console.log('hi')"
    language="javascript"
    :show-header="false"
  />

  <!-- Light theme -->
  <ZCodeBlock
    code="body { color: red; }"
    language="css"
    theme="light"
  />
</template>

<script setup>
import { ZCodeBlock } from 'zijid-ui'
<\/script>`

const codeBlockProps = [
  { name: 'code', type: 'string', default: "''", description: '代码内容，必填' },
  { name: 'language', type: 'string', default: "''", description: '语言标识，影响图标和标签显示' },
  { name: 'showHeader', type: 'boolean', default: 'true', description: '是否显示头部' },
  { name: 'maxHeight', type: 'string|number', default: '-', description: '最大高度限制（px 数值或 CSS 字符串）' },
  { name: 'showLineNumbers', type: 'boolean', default: 'false', description: '是否显示行号' },
  { name: 'startLine', type: 'number', default: '1', description: '起始行号' },
  { name: 'highlightLines', type: 'number[]', default: '[]', description: '需要高亮的行号数组' },
  { name: 'title', type: 'string', default: "''", description: '自定义头部标题，优先于 language 显示' },
  { name: 'showCopy', type: 'boolean', default: 'true', description: '是否显示复制按钮' },
  { name: 'copyText', type: 'string', default: "'复制'", description: '复制按钮文字' },
  { name: 'copiedText', type: 'string', default: "'已复制'", description: '复制成功后的按钮文字' },
  { name: 'wrapLines', type: 'boolean', default: 'false', description: '是否自动换行' },
  { name: 'fontSize', type: 'string|number', default: '-', description: '字体大小（px 数值或 CSS 字符串）' },
  { name: 'theme', type: "'dark' | 'light'", default: "'dark'", description: '主题色' },
  { name: 'borderless', type: 'boolean', default: 'false', description: '是否无边框模式' }
]
</script>
