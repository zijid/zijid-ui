import{I as f,D as V,A as s,H as t,P as l,v as o,Z as n,M as d,K as g}from"./index-BxmJ7YZy.js";import{A as x}from"./ApiTable-Dwr88J6i.js";const _={class:"demo-page"},w={class:"demo-section"},y={class:"preview-box"},C={class:"demo-section"},I={class:"preview-box"},A={class:"demo-section"},B={class:"preview-box"},k={class:"demo-section"},z=`<z-list v-model="selected" :items="items" />

<script setup>
const selected = ref('item-1')
const items = [
  { label: '项目 1', value: 'item-1' },
  { label: '项目 2', value: 'item-2' },
]
<\/script>`,D=`<z-list v-model="selected" :items="items" />

<script setup>
const items = [
  { label: '项目 1', value: 'desc-1', description: '描述文字' },
]
<\/script>`,L=`<z-list v-model="selected" :items="items" />

<script setup>
const items = [
  { label: '项目 1', value: 'icon-1', icon: 'file', description: '文件' },
]
<\/script>`,N=f({__name:"ListDemo",setup(P){const a=d("item-1"),c=d("desc-1"),m=d("icon-1"),u=[{label:"项目 1",value:"item-1"},{label:"项目 2",value:"item-2"},{label:"项目 3",value:"item-3"}],p=[{label:"项目 1",value:"desc-1",description:"描述文字 1"},{label:"项目 2",value:"desc-2",description:"描述文字 2"},{label:"项目 3",value:"desc-3",description:"描述文字 3"}],r=[{label:"项目 1",value:"icon-1",icon:"file",description:"文件描述"},{label:"项目 2",value:"icon-2",icon:"edit"},{label:"项目 3",value:"icon-3",icon:"settings",description:"设置描述"}],v=[{name:"modelValue",type:"string",default:"-",description:"选中项的值"},{name:"items",type:"ListItem[]",default:"-",description:"列表项数组，必填"}],b=[{name:"update:modelValue",params:["value: string"],description:"选中项变化时触发"}];return(U,e)=>(g(),V("div",_,[e[7]||(e[7]=s("h1",null,"ZList 列表",-1)),e[8]||(e[8]=s("p",{class:"desc"},"简洁的列表选择组件，支持图标和辅助文字。",-1)),s("div",w,[e[3]||(e[3]=s("h2",null,"基本用法",-1)),s("div",y,[t(l(o),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i),items:u,style:{width:"240px"}},null,8,["modelValue"])]),t(l(n),{code:z,language:"vue"})]),s("div",C,[e[4]||(e[4]=s("h2",null,"带描述",-1)),s("div",I,[t(l(o),{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=i=>c.value=i),items:p,style:{width:"240px"}},null,8,["modelValue"])]),t(l(n),{code:D,language:"vue"})]),s("div",A,[e[5]||(e[5]=s("h2",null,"图标列表",-1)),s("div",B,[t(l(o),{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=i=>m.value=i),items:r,style:{width:"240px"}},null,8,["modelValue"])]),t(l(n),{code:L,language:"vue"})]),s("div",k,[e[6]||(e[6]=s("h2",null,"API 参考",-1)),t(x,{props:v,events:b})])]))}});export{N as default};
//# sourceMappingURL=ListDemo-C_IlZ2IF.js.map
