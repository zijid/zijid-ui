import{I as w,D as g,A as s,H as t,R as i,P as o,q as d,Z as m,K as _,g as l,G as a}from"./index-BxmJ7YZy.js";import{A as D}from"./ApiTable-Dwr88J6i.js";const B={class:"demo-page"},y={class:"demo-section"},x={class:"preview-box"},C={class:"demo-section"},I={class:"preview-box",style:{"justify-content":"center",gap:"24px"}},k={class:"demo-section"},A={class:"preview-box"},S={class:"demo-section"},z={class:"preview-box"},N={class:"demo-section"},P=`<ZDropdown :items="items" @select="onSelect">
  <ZButton>下拉菜单</ZButton>
</ZDropdown>

<script setup>
const items = [
  { id: 'action-1', label: '动作 1' },
  { id: 'action-2', label: '动作 2' }
]
<\/script>`,V=`<ZDropdown :items="items" placement="bottom-start">
  <ZButton>左下</ZButton>
</ZDropdown>

<ZDropdown :items="items" placement="bottom">
  <ZButton>居中</ZButton>
</ZDropdown>

<ZDropdown :items="items" placement="bottom-end">
  <ZButton>右下</ZButton>
</ZDropdown>`,E=`<ZDropdown :items="items" trigger="hover">
  <ZButton>鼠标悬停</ZButton>
</ZDropdown>`,T=`<ZDropdown :items="items" @select="onSelect">
  <ZButton>高级菜单</ZButton>
</ZDropdown>

<script setup>
const items = [
  { id: 'copy', label: '复制', icon: 'file' },
  { id: 'paste', label: '粘贴', disabled: true },
  { id: 'divider', label: '', divider: true },
  { id: 'delete', label: '删除', icon: 'trash' }
]
<\/script>`,G=w({__name:"DropdownDemo",setup($){function n(p){console.log("Dropdown select:",p)}const r=[{id:"action-1",label:"动作 1"},{id:"action-2",label:"动作 2"}],u=[{id:"new",label:"新建",icon:"plus"},{id:"open",label:"打开",icon:"folder-open"},{id:"save",label:"保存",icon:"save"},{id:"delete",label:"删除",icon:"trash"}],c=[{id:"view",label:"查看详情"},{id:"edit",label:"编辑"},{id:"share",label:"分享"}],b=[{id:"copy",label:"复制",icon:"file"},{id:"cut",label:"剪切",icon:"edit"},{id:"paste",label:"粘贴",icon:"edit",disabled:!0},{id:"divider-1",label:"",divider:!0},{id:"delete",label:"删除",icon:"trash"},{id:"rename",label:"重命名",icon:"edit"}],v=[{name:"items",type:"MenuItem[]",default:"-",description:"菜单项列表，必填"},{name:"placement",type:"'bottom' | 'bottom-start' | 'bottom-end'",default:"'bottom'",description:"菜单弹出位置"},{name:"trigger",type:"'click' | 'hover'",default:"'click'",description:"触发方式"}],f=[{name:"select",params:["id: string"],description:"选择菜单项时触发"}],Z=[{name:"default",description:"触发元素",default:!0}];return(p,e)=>(_(),g("div",B,[e[12]||(e[12]=s("h1",null,"ZDropdown 下拉菜单",-1)),e[13]||(e[13]=s("p",{class:"desc"},"向下弹出的列表，通常用于操作集合，支持多种触发方式和菜单位置。",-1)),s("div",y,[e[2]||(e[2]=s("h2",null,"基本用法",-1)),s("div",x,[t(o(d),{items:r,onSelect:n},{default:i(()=>[t(o(l),null,{default:i(()=>[...e[0]||(e[0]=[a("下拉菜单",-1)])]),_:1})]),_:1}),t(o(d),{items:u,onSelect:n},{default:i(()=>[t(o(l),{type:"primary"},{default:i(()=>[...e[1]||(e[1]=[a("带图标",-1)])]),_:1})]),_:1})]),t(o(m),{code:P,language:"vue"})]),s("div",C,[e[6]||(e[6]=s("h2",null,"菜单位置",-1)),s("div",I,[t(o(d),{items:r,placement:"bottom-start",onSelect:n},{default:i(()=>[t(o(l),{size:"small"},{default:i(()=>[...e[3]||(e[3]=[a("左下",-1)])]),_:1})]),_:1}),t(o(d),{items:r,placement:"bottom",onSelect:n},{default:i(()=>[t(o(l),{size:"small"},{default:i(()=>[...e[4]||(e[4]=[a("居中",-1)])]),_:1})]),_:1}),t(o(d),{items:r,placement:"bottom-end",onSelect:n},{default:i(()=>[t(o(l),{size:"small"},{default:i(()=>[...e[5]||(e[5]=[a("右下",-1)])]),_:1})]),_:1})]),t(o(m),{code:V,language:"vue"})]),s("div",k,[e[8]||(e[8]=s("h2",null,"悬停触发",-1)),s("div",A,[t(o(d),{items:c,trigger:"hover",onSelect:n},{default:i(()=>[t(o(l),null,{default:i(()=>[...e[7]||(e[7]=[a("鼠标悬停",-1)])]),_:1})]),_:1})]),t(o(m),{code:E,language:"vue"})]),s("div",S,[e[10]||(e[10]=s("h2",null,"禁用项与分隔线",-1)),s("div",z,[t(o(d),{items:b,onSelect:n},{default:i(()=>[t(o(l),{type:"primary"},{default:i(()=>[...e[9]||(e[9]=[a("高级菜单",-1)])]),_:1})]),_:1})]),t(o(m),{code:T,language:"vue"})]),s("div",N,[e[11]||(e[11]=s("h2",null,"API 参考",-1)),t(D,{props:v,events:f,slots:Z})])]))}});export{G as default};
//# sourceMappingURL=DropdownDemo-zEFNTlkH.js.map
