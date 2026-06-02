import{d as u,c as v,a as e,b as l,u as s,H as t,Z as d,o as f}from"./index-WzoAP_LW.js";import{A as _}from"./ApiTable-BL1aRZnM.js";const h={class:"demo-page"},w={class:"demo-section"},g={class:"preview-box"},x={class:"demo-section"},y={class:"preview-box"},M={class:"demo-section"},Z={class:"preview-box"},C={class:"demo-section"},I={class:"preview-box"},B={class:"demo-section"},k=`<ZMenu :items="items" @select="onSelect" />

<script setup>
const items = [
  { id: 'file', label: '文件' },
  { id: 'edit', label: '编辑' }
]
<\/script>`,A=`<ZMenu :items="items" />

<script setup>
const items = [
  { id: 'file', label: '文件', icon: 'folder' },
  { id: 'edit', label: '编辑', icon: 'edit' }
]
<\/script>`,E=`<ZMenu :items="items" />

<script setup>
const items = [
  {
    id: 'file', label: '文件',
    children: [
      { id: 'new', label: '新建' },
      { id: 'open', label: '打开' },
      {
        id: 'recent', label: '最近文件',
        children: [
          { id: 'doc1', label: '文档 1' }
        ]
      }
    ]
  }
]
<\/script>`,N=`<ZMenu :items="items" />

<script setup>
const items = [
  { id: 'item1', label: '正常项' },
  { id: 'item2', label: '禁用项', disabled: true }
]
<\/script>`,D=u({__name:"MenuDemo",setup(P){const n=o=>{console.log("Menu selected:",o)},a=[{id:"file",label:"文件"},{id:"edit",label:"编辑"},{id:"view",label:"查看"},{id:"tools",label:"工具"},{id:"help",label:"帮助"}],c=[{id:"file",label:"文件",icon:"folder"},{id:"edit",label:"编辑",icon:"edit"},{id:"view",label:"查看",icon:"activity"},{id:"tools",label:"工具",icon:"toolbar"},{id:"help",label:"帮助",icon:"info"}],b=[{id:"file",label:"文件",icon:"folder",children:[{id:"new",label:"新建",icon:"plus"},{id:"open",label:"打开",icon:"folder-open"},{id:"save",label:"保存",icon:"save"},{id:"recent",label:"最近文件",children:[{id:"doc1",label:"文档 1"},{id:"doc2",label:"文档 2"},{id:"doc3",label:"文档 3"}]},{id:"close",label:"关闭",disabled:!0}]},{id:"edit",label:"编辑",icon:"edit",children:[{id:"undo",label:"撤销"},{id:"redo",label:"重做"},{id:"cut",label:"剪切"},{id:"copy",label:"复制"},{id:"paste",label:"粘贴"}]},{id:"view",label:"查看",icon:"activity"}],m=[{id:"item1",label:"正常项 1"},{id:"item2",label:"正常项 2"},{id:"item3",label:"禁用项",disabled:!0},{id:"item4",label:"正常项 3"},{id:"item5",label:"禁用项 2",disabled:!0}],r=[{name:"items",type:"MenuItem[]",default:"-",description:"菜单项列表，必填"},{name:"compact",type:"boolean",default:"false",description:"紧凑模式"}],p=[{name:"select",params:["id: string"],description:"选择菜单项时触发"}];return(o,i)=>(f(),v("div",h,[i[5]||(i[5]=e("h1",null,"ZMenu 菜单",-1)),i[6]||(i[6]=e("p",{class:"desc"},"垂直菜单列表，支持嵌套、图标和禁用状态。",-1)),e("div",w,[i[0]||(i[0]=e("h2",null,"基本用法",-1)),e("div",g,[l(s(t),{items:a,style:{width:"200px"},onSelect:n})]),l(s(d),{code:k,language:"vue"})]),e("div",x,[i[1]||(i[1]=e("h2",null,"带图标",-1)),e("div",y,[l(s(t),{items:c,style:{width:"200px"}})]),l(s(d),{code:A,language:"vue"})]),e("div",M,[i[2]||(i[2]=e("h2",null,"嵌套菜单",-1)),e("div",Z,[l(s(t),{items:b,style:{width:"220px"}})]),l(s(d),{code:E,language:"vue"})]),e("div",C,[i[3]||(i[3]=e("h2",null,"禁用项",-1)),e("div",I,[l(s(t),{items:m,style:{width:"200px"}})]),l(s(d),{code:N,language:"vue"})]),e("div",B,[i[4]||(i[4]=e("h2",null,"API 参考",-1)),l(_,{props:r,events:p})])]))}});export{D as default};
//# sourceMappingURL=MenuDemo-DZUL87Mi.js.map
