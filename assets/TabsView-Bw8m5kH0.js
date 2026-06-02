import{d as I,c as f,a as t,b as a,w as o,u as s,z as m,Z as c,F as $,r as h,i,o as y,t as n,e as U,_ as z,v as r}from"./index-WzoAP_LW.js";import{A as N}from"./ApiTable-BL1aRZnM.js";const P={class:"demo-page"},q={class:"demo-section"},E={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch"}},F={class:"demo-section"},j={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch"}},D={class:"demo-section"},L={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch"}},S={style:{"margin-bottom":"16px",display:"flex",gap:"8px"}},G={class:"demo-section"},H={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch"}},J={class:"demo-section"},M=`<ZTabs v-model="activeKey" :items="items">
  <p>当前内容</p>
</ZTabs>

<script setup>
import { ZTabs } from 'zijid-ui'
const activeKey = ref('docs')
const items = [
  { label: '文档', value: 'docs' },
  { label: '设置', value: 'settings' }
]
<\/script>`,O=`<ZTabs v-model="activeKey" :items="items" type="card">
  <p>当前内容</p>
</ZTabs>`,Q=`<ZTabs v-model="activeKey" :items="items" position="left">
  <p>当前内容</p>
</ZTabs>`,R=`<ZTabs v-model="activeKey" :items="items">
  <p>当前内容</p>
</ZTabs>

<script setup>
const items = [
  { label: '标签 A', value: 'a' },
  { label: '标签 B', value: 'b', disabled: true },
  { label: '标签 C', value: 'c' }
]
<\/script>`,te=I({__name:"TabsView",setup(W){const u=i("docs"),p=i("tab1"),b=i("tab1"),d=i("tab1"),v=i("top"),g=[{label:"上",value:"top"},{label:"左",value:"left"},{label:"下",value:"bottom"},{label:"右",value:"right"}],V=[{label:"文档",value:"docs"},{label:"设置",value:"settings"},{label:"关于",value:"about"}],_=[{label:"标签一",value:"tab1"},{label:"标签二",value:"tab2"},{label:"标签三",value:"tab3"}],x=[{label:"内容一",value:"tab1"},{label:"内容二",value:"tab2"},{label:"内容三",value:"tab3"}],T=[{label:"标签 A",value:"tab1"},{label:"标签 B（禁用）",value:"tab2",disabled:!0},{label:"标签 C",value:"tab3"}],C=r(()=>u.value==="docs"?"文档内容区域...":u.value==="settings"?"设置内容区域...":"关于内容区域..."),Z=r(()=>`卡片标签 ${p.value} 的内容区域`),K=r(()=>`${{top:"上",left:"左",bottom:"下",right:"右"}[v.value]}方位置 - 标签 ${b.value} 的内容`),w=r(()=>d.value==="tab1"?"标签 A 的内容":d.value==="tab3"?"标签 C 的内容":""),k=[{name:"modelValue",type:"string",default:"-",required:!0,description:"当前选中的标签值"},{name:"items",type:"TabItem[]",default:"-",required:!0,description:"标签项数组"},{name:"type",type:"'default' | 'card'",default:"'default'",description:"标签风格类型"},{name:"position",type:"'top' | 'left' | 'bottom' | 'right'",default:"'top'",description:"标签位置"}],A=[{name:"update:modelValue",params:["value: string"],description:"标签切换时触发"}];return(B,e)=>(y(),f("div",P,[e[9]||(e[9]=t("h1",null,"ZTabs 标签页",-1)),e[10]||(e[10]=t("p",{class:"desc"},"用于在同一区域内切换多组相关内容，支持基础标签、卡片风格和不同位置。",-1)),t("div",q,[e[4]||(e[4]=t("h2",null,"基本用法",-1)),t("div",E,[a(s(m),{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=l=>u.value=l),items:V},{default:o(()=>[t("p",null,n(C.value),1)]),_:1},8,["modelValue"])]),a(s(c),{code:M,language:"vue"})]),t("div",F,[e[5]||(e[5]=t("h2",null,"卡片风格",-1)),t("div",j,[a(s(m),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),items:_,type:"card"},{default:o(()=>[t("p",null,n(Z.value),1)]),_:1},8,["modelValue"])]),a(s(c),{code:O,language:"vue"})]),t("div",D,[e[6]||(e[6]=t("h2",null,"标签位置",-1)),t("div",L,[t("div",S,[(y(),f($,null,h(g,l=>a(s(z),{key:l.value,size:"small",type:v.value===l.value?"primary":"default",onClick:X=>v.value=l.value},{default:o(()=>[U(n(l.label),1)]),_:2},1032,["type","onClick"])),64))]),a(s(m),{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=l=>b.value=l),items:x,position:v.value},{default:o(()=>[t("p",null,n(K.value),1)]),_:1},8,["modelValue","position"])]),a(s(c),{code:Q,language:"vue"})]),t("div",G,[e[7]||(e[7]=t("h2",null,"禁用标签",-1)),t("div",H,[a(s(m),{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=l=>d.value=l),items:T},{default:o(()=>[t("p",null,n(w.value),1)]),_:1},8,["modelValue"])]),a(s(c),{code:R,language:"vue"})]),t("div",J,[e[8]||(e[8]=t("h2",null,"API 参考",-1)),a(N,{props:k,events:A})])]))}});export{te as default};
//# sourceMappingURL=TabsView-Bw8m5kH0.js.map
