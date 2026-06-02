import{d as A,c as I,a as t,M as v,b as i,u as a,N as m,Z as b,i as s,o as Z}from"./index-DytvuLaL.js";import{A as B}from"./ApiTable-YVgjCaIY.js";const V={class:"demo-page"},k={class:"demo-section"},N={class:"demo-section"},j={class:"demo-section"},E=`<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'copy', label: '复制' },
  { id: 'paste', label: '粘贴' },
]
<\/script>`,P=`<template>
  <div @contextmenu.prevent="showMenu">右键触发</div>
  <ZContextMenu :visible="visible" :x="x" :y="y" :items="items" @select="handleAction" />
</template>

<script setup>
const items = [
  { id: 'new', label: '新建文件', icon: 'file' },
  { id: 'separator', label: '-', separator: true },
  { id: 'delete', label: '删除', icon: 'trash' },
]
<\/script>`,Y=A({__name:"ContextMenuDemo",setup(S){const o=s(!1),c=s(0),r=s(0),x=[{id:"copy",label:"复制",icon:"file"},{id:"paste",label:"粘贴",icon:"edit"},{id:"separator",label:"-",separator:!0},{id:"delete",label:"删除",icon:"trash"}],f=n=>{c.value=n.clientX,r.value=n.clientY,o.value=!0},y=n=>{console.log(n),o.value=!1},l=s(!1),u=s(0),p=s(0),M=[{id:"new",label:"新建文件",icon:"file"},{id:"new-folder",label:"新建文件夹",icon:"folder"},{id:"separator",label:"-",separator:!0},{id:"rename",label:"重命名",icon:"edit"},{id:"properties",label:"属性",icon:"settings"}],g=n=>{u.value=n.clientX,p.value=n.clientY,l.value=!0},C=n=>{console.log(n),l.value=!1},w=[{name:"visible",type:"boolean",default:"-",description:"是否显示"},{name:"x",type:"number",default:"-",description:"菜单位置x坐标，必填"},{name:"y",type:"number",default:"-",description:"菜单位置y坐标，必填"},{name:"items",type:"ContextMenuItem[]",default:"-",description:"菜单项列表，必填"}],h=[{name:"select",params:["id: string"],description:"选择菜单项时触发"},{name:"close",params:[],description:"关闭菜单时触发"}];return(n,e)=>(Z(),I("div",V,[e[7]||(e[7]=t("h1",null,"ZContextMenu 右键菜单",-1)),e[8]||(e[8]=t("p",{class:"desc"},"在特定区域点击右键弹出的操作菜单，支持图标、分隔线和嵌套层级。",-1)),t("div",k,[e[3]||(e[3]=t("h2",null,"基本用法",-1)),t("div",{class:"preview-box",onContextmenu:v(f,["prevent"]),style:{height:"150px",border:"1px dashed #ccc","justify-content":"center"}},[e[2]||(e[2]=t("span",null,"在此区域点击右键",-1)),i(a(m),{visible:o.value,"onUpdate:visible":e[0]||(e[0]=d=>o.value=d),x:c.value,y:r.value,items:x,onSelect:y},null,8,["visible","x","y"])],32),i(a(b),{code:E,language:"vue"})]),t("div",N,[e[5]||(e[5]=t("h2",null,"带图标菜单",-1)),t("div",{class:"preview-box",onContextmenu:v(g,["prevent"]),style:{height:"150px",border:"1px dashed #ccc","justify-content":"center"}},[e[4]||(e[4]=t("span",null,"在此区域点击右键",-1)),i(a(m),{visible:l.value,"onUpdate:visible":e[1]||(e[1]=d=>l.value=d),x:u.value,y:p.value,items:M,onSelect:C},null,8,["visible","x","y"])],32),i(a(b),{code:P,language:"vue"})]),t("div",j,[e[6]||(e[6]=t("h2",null,"API 参考",-1)),i(B,{props:w,events:h})])]))}});export{Y as default};
//# sourceMappingURL=ContextMenuDemo-YoZhgcnx.js.map
