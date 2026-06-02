import{d as u,c,a as o,b as t,u as s,Z as n,o as m}from"./index-DytvuLaL.js";import{A as g}from"./ApiTable-YVgjCaIY.js";const p={class:"demo-page"},h={class:"demo-section"},f={class:"demo-section"},v={class:"demo-section"},b={class:"demo-section"},y={class:"demo-section"},j={class:"demo-section"},C={class:"demo-section"},x={class:"demo-section"},k={class:"demo-section"},B={class:"demo-section"},w={class:"demo-section"},L={class:"demo-section"},S={class:"demo-section"},Z={class:"demo-section"},H={class:"demo-section"},N={class:"demo-section"},q={class:"demo-section"},z={class:"demo-section"},V={class:"demo-section"},_={class:"demo-section"},A={class:"demo-section"},l=`function greet(name) {
  return \`Hello, \${name}!\`;
}

const result = greet('World');
console.log(result);`,i=`interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};`,a=`.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
}`,T=`function sum(arr) {
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
console.log(mode([1,1,2,3,4,4,4]));`,d=`// A very long line to demonstrate horizontal scrolling
const reallyLongVariableName = someObject.property.anotherProperty.deeplyNestedValue?.map(item => item.transform()).filter(Boolean).reduce((acc, val) => acc + val, 0);
console.log(reallyLongVariableName);`,O=`<template>
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
<\/script>`,U=u({__name:"CodeBlockDemo",setup(W){const r=[{name:"code",type:"string",default:"''",description:"代码内容，必填"},{name:"language",type:"string",default:"''",description:"语言标识，影响图标和标签显示"},{name:"showHeader",type:"boolean",default:"true",description:"是否显示头部"},{name:"maxHeight",type:"string|number",default:"-",description:"最大高度限制（px 数值或 CSS 字符串）"},{name:"showLineNumbers",type:"boolean",default:"false",description:"是否显示行号"},{name:"startLine",type:"number",default:"1",description:"起始行号"},{name:"highlightLines",type:"number[]",default:"[]",description:"需要高亮的行号数组"},{name:"title",type:"string",default:"''",description:"自定义头部标题，优先于 language 显示"},{name:"showCopy",type:"boolean",default:"true",description:"是否显示复制按钮"},{name:"copyText",type:"string",default:"'复制'",description:"复制按钮文字"},{name:"copiedText",type:"string",default:"'已复制'",description:"复制成功后的按钮文字"},{name:"wrapLines",type:"boolean",default:"false",description:"是否自动换行"},{name:"fontSize",type:"string|number",default:"-",description:"字体大小（px 数值或 CSS 字符串）"},{name:"theme",type:"'dark' | 'light'",default:"'dark'",description:"主题色"},{name:"borderless",type:"boolean",default:"false",description:"是否无边框模式"}];return(M,e)=>(m(),c("div",p,[e[21]||(e[21]=o("h1",null,"ZCodeBlock 代码块",-1)),e[22]||(e[22]=o("p",{class:"desc"},"展示代码片段并提供一键复制功能的代码块组件，支持多种语言语法高亮，行号显示、行高亮、主题切换等特性。",-1)),o("div",h,[e[0]||(e[0]=o("h2",null,"HTML / Vue 模板",-1)),t(s(n),{code:`<template>
  <ZButton type="primary">主要按钮</ZButton>
</template>`,language:"html"})]),o("div",f,[e[1]||(e[1]=o("h2",null,"JavaScript",-1)),t(s(n),{code:l,language:"javascript"})]),o("div",v,[e[2]||(e[2]=o("h2",null,"TypeScript",-1)),t(s(n),{code:i,language:"typescript"})]),o("div",b,[e[3]||(e[3]=o("h2",null,"CSS",-1)),t(s(n),{code:a,language:"css"})]),o("div",y,[e[4]||(e[4]=o("h2",null,"命令行 / Bash",-1)),t(s(n),{code:"npm install zijid-ui",language:"bash"})]),o("div",j,[e[5]||(e[5]=o("h2",null,"显示行号",-1)),t(s(n),{code:l,language:"javascript","show-line-numbers":!0})]),o("div",C,[e[6]||(e[6]=o("h2",null,"自定义起始行号",-1)),t(s(n),{code:i,language:"typescript","show-line-numbers":!0,"start-line":10})]),o("div",x,[e[7]||(e[7]=o("h2",null,"高亮指定行",-1)),t(s(n),{code:l,language:"javascript","show-line-numbers":!0,"highlight-lines":[1,3,7]})]),o("div",k,[e[8]||(e[8]=o("h2",null,"自定义标题",-1)),t(s(n),{code:"const greeting = 'Hello World';",language:"javascript",title:"示例代码"})]),o("div",B,[e[9]||(e[9]=o("h2",null,"隐藏复制按钮",-1)),t(s(n),{code:"console.log('只读代码')",language:"javascript","show-copy":!1})]),o("div",w,[e[10]||(e[10]=o("h2",null,"自定义复制按钮文字",-1)),t(s(n),{code:"npm install zijid-ui",language:"bash","copy-text":"拷贝","copied-text":"OK"})]),o("div",L,[e[11]||(e[11]=o("h2",null,"无 Header",-1)),t(s(n),{code:"这是没有标题栏的代码块","show-header":!1})]),o("div",S,[e[12]||(e[12]=o("h2",null,"限制高度（可滚动）",-1)),t(s(n),{code:T,language:"javascript","max-height":180})]),o("div",Z,[e[13]||(e[13]=o("h2",null,"长代码横向滚动",-1)),t(s(n),{code:d,language:"javascript"})]),o("div",H,[e[14]||(e[14]=o("h2",null,"自动换行",-1)),t(s(n),{code:d,language:"javascript","wrap-lines":!0})]),o("div",N,[e[15]||(e[15]=o("h2",null,"Light 主题",-1)),t(s(n),{code:a,language:"css",theme:"light"})]),o("div",q,[e[16]||(e[16]=o("h2",null,"Light 主题 + 行号 + 高亮",-1)),t(s(n),{code:l,language:"javascript",theme:"light","show-line-numbers":!0,"highlight-lines":[1,5]})]),o("div",z,[e[17]||(e[17]=o("h2",null,"无边框",-1)),t(s(n),{code:"border: none;",language:"css",borderless:!0})]),o("div",V,[e[18]||(e[18]=o("h2",null,"自定义字号",-1)),t(s(n),{code:l,language:"javascript","font-size":"15"})]),o("div",_,[e[19]||(e[19]=o("h2",null,"组合使用",-1)),t(s(n),{code:O,language:"vue"})]),o("div",A,[e[20]||(e[20]=o("h2",null,"API 参考",-1)),t(g,{props:r})])]))}});export{U as default};
//# sourceMappingURL=CodeBlockDemo-B_xUDRjO.js.map
