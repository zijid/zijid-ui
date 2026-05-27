import{I as v,D as x,A as l,H as d,P as o,w as s,Z as i,M as a,K as V}from"./index-BxmJ7YZy.js";import{A as h}from"./ApiTable-Dwr88J6i.js";const g={class:"demo-page"},D={class:"demo-section"},T={class:"preview-box"},_={class:"demo-section"},w={class:"preview-box"},y={class:"demo-section"},Z={class:"preview-box"},C={class:"demo-section"},k=`<ZTree v-model="selected" :items="treeData" />

<script setup>
const selected = ref('child-1')
const treeData = [{
  id: 'root', label: '根节点',
  children: [{ id: 'child-1', label: '子节点 1' }]
}]
<\/script>`,A=`<ZTree v-model="selected" :items="treeData" :default-expanded-ids="['root']" />

<script setup>
const treeData = [{
  id: 'root', label: '项目',
  children: [{ id: 'src', label: 'src', icon: 'folder' }]
}]
<\/script>`,B=`<ZTree v-model="selected" :items="treeData" :default-expanded-ids="['root']" />

<script setup>
const treeData = [{
  id: 'root', label: '项目',
  children: [{
    id: 'dev', label: '开发',
    children: [{ id: 'fe', label: '前端' }]
  }]
}]
<\/script>`,N=v({__name:"TreeDemo",setup(I){const n=a("child-1"),r=a("sub-1"),c=a("fe"),u=[{id:"root",label:"根节点",icon:"folder",children:[{id:"child-1",label:"子节点 1",icon:"file"},{id:"child-2",label:"子节点 2",icon:"file"}]}],p=[{id:"root",label:"项目",icon:"folder",children:[{id:"sub-1",label:"src",icon:"folder"},{id:"sub-2",label:"public",icon:"folder"},{id:"sub-3",label:"package.json",icon:"file"}]}],m=[{id:"root",label:"项目",icon:"folder",children:[{id:"dev",label:"开发",icon:"folder",children:[{id:"fe",label:"前端",icon:"code"},{id:"be",label:"后端",icon:"server"}]},{id:"docs",label:"文档",icon:"file-text"}]}],f=[{name:"modelValue",type:"string",default:"-",description:"选中节点id"},{name:"items",type:"TreeItem[]",default:"-",description:"树形数据，必填"},{name:"defaultExpandedIds",type:"string[]",default:"[]",description:"默认展开的节点id列表"}],b=[{name:"update:modelValue",params:["value: string"],description:"选中节点变化时触发"}];return(E,e)=>(V(),x("div",g,[e[7]||(e[7]=l("h1",null,"ZTree 树形控件",-1)),e[8]||(e[8]=l("p",{class:"desc"},"清晰展示层级结构的数据，支持图标、展开折叠和选中。",-1)),l("div",D,[e[3]||(e[3]=l("h2",null,"基本用法",-1)),l("div",T,[d(o(s),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),items:u,style:{width:"250px"}},null,8,["modelValue"])]),d(o(i),{code:k,language:"vue"})]),l("div",_,[e[4]||(e[4]=l("h2",null,"展开指定节点",-1)),l("div",w,[d(o(s),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t),items:p,"default-expanded-ids":["root"],style:{width:"250px"}},null,8,["modelValue"])]),d(o(i),{code:A,language:"vue"})]),l("div",y,[e[5]||(e[5]=l("h2",null,"多层嵌套",-1)),l("div",Z,[d(o(s),{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=t=>c.value=t),items:m,"default-expanded-ids":["root","dev"],style:{width:"250px"}},null,8,["modelValue"])]),d(o(i),{code:B,language:"vue"})]),l("div",C,[e[6]||(e[6]=l("h2",null,"API 参考",-1)),d(h,{props:f,events:b})])]))}});export{N as default};
//# sourceMappingURL=TreeDemo-YDeOyGUo.js.map
