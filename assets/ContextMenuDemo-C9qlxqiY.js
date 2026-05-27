import{I as A,D as I,A as t,S as v,H as i,P as a,u as m,Z as b,M as s,K as Z}from"./index-BxmJ7YZy.js";import{A as B}from"./ApiTable-Dwr88J6i.js";const V={class:"demo-page"},k={class:"demo-section"},P={class:"demo-section"},S={class:"demo-section"},j=`<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'copy', label: '复制' },
  { id: 'paste', label: '粘贴' },
]
<\/script>`,D=`<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'new', label: '新建文件', icon: 'file' },
  { id: 'separator', label: '-', separator: true },
  { id: 'delete', label: '删除', icon: 'trash' },
]
<\/script>`,X=A({__name:"ContextMenuDemo",setup(E){const l=s(!1),r=s(0),c=s(0),x=[{id:"copy",label:"复制",icon:"file"},{id:"paste",label:"粘贴",icon:"edit"},{id:"separator",label:"-",separator:!0},{id:"delete",label:"删除",icon:"trash"}],f=n=>{r.value=n.clientX,c.value=n.clientY,l.value=!0},y=n=>{console.log(n),l.value=!1},o=s(!1),u=s(0),p=s(0),M=[{id:"new",label:"新建文件",icon:"file"},{id:"new-folder",label:"新建文件夹",icon:"folder"},{id:"separator",label:"-",separator:!0},{id:"rename",label:"重命名",icon:"edit"},{id:"properties",label:"属性",icon:"settings"}],g=n=>{u.value=n.clientX,p.value=n.clientY,o.value=!0},C=n=>{console.log(n),o.value=!1},w=[{name:"visible",type:"boolean",default:"-",description:"是否显示"},{name:"x",type:"number",default:"-",description:"菜单位置x坐标，必填"},{name:"y",type:"number",default:"-",description:"菜单位置y坐标，必填"},{name:"items",type:"ContextMenuItem[]",default:"-",description:"菜单项列表，必填"}],h=[{name:"select",params:["id: string"],description:"选择菜单项时触发"},{name:"close",params:[],description:"关闭菜单时触发"}];return(n,e)=>(Z(),I("div",V,[e[7]||(e[7]=t("h1",null,"ZContextMenu 右键菜单",-1)),e[8]||(e[8]=t("p",{class:"desc"},"在特定区域点击右键弹出的操作菜单，支持图标、分隔线和嵌套层级。",-1)),t("div",k,[e[3]||(e[3]=t("h2",null,"基本用法",-1)),t("div",{class:"preview-box",onContextmenu:v(f,["prevent"]),style:{height:"150px",border:"1px dashed #ccc","justify-content":"center"}},[e[2]||(e[2]=t("span",null,"在此区域点击右键",-1)),i(a(m),{visible:l.value,"onUpdate:visible":e[0]||(e[0]=d=>l.value=d),x:r.value,y:c.value,items:x,onSelect:y},null,8,["visible","x","y"])],32),i(a(b),{code:j,language:"vue"})]),t("div",P,[e[5]||(e[5]=t("h2",null,"带图标菜单",-1)),t("div",{class:"preview-box",onContextmenu:v(g,["prevent"]),style:{height:"150px",border:"1px dashed #ccc","justify-content":"center"}},[e[4]||(e[4]=t("span",null,"在此区域点击右键",-1)),i(a(m),{visible:o.value,"onUpdate:visible":e[1]||(e[1]=d=>o.value=d),x:u.value,y:p.value,items:M,onSelect:C},null,8,["visible","x","y"])],32),i(a(b),{code:D,language:"vue"})]),t("div",S,[e[6]||(e[6]=t("h2",null,"API 参考",-1)),i(B,{props:w,events:h})])]))}});export{X as default};
//# sourceMappingURL=ContextMenuDemo-C9qlxqiY.js.map
