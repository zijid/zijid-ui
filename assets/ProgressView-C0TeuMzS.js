import{I as f,D as _,A as s,H as l,P as t,c as i,Z as n,O as b,R as u,g as d,M as v,K as P,G as p,_ as x}from"./index-BxmJ7YZy.js";import{A as Z}from"./ApiTable-Dwr88J6i.js";const w={class:"demo-page"},I={class:"demo-section"},C={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch","max-width":"500px"}},y={class:"progress-item"},V={class:"progress-item"},k={class:"progress-item"},A={class:"progress-item"},B={class:"demo-section"},N={class:"preview-box",style:{"flex-direction":"column","align-items":"flex-start","max-width":"500px"}},D={class:"progress-item",style:{width:"100%"}},R={class:"btn-group"},T={class:"demo-section"},j=`<ZProgress :value="25" />
<ZProgress :value="50" />
<ZProgress :value="75" />
<ZProgress :value="100" />`,z=`<script setup>
import { ref } from 'vue'
import { ZProgress } from 'zijid-ui'

const value = ref(0)
const timer = setInterval(() => {
  if (value.value >= 100) {
    clearInterval(timer)
    return
  }
  value.value += 5
}, 200)
<\/script>

<template>
  <ZProgress :value="value" />
</template>`,E=f({__name:"ProgressView",setup(G){const o=v(0),r=v(!1);let a=null;const m=()=>{r.value||(r.value=!0,a=setInterval(()=>{if(o.value>=100){clearInterval(a),a=null,r.value=!1;return}o.value+=5},200))},g=()=>{a&&(clearInterval(a),a=null),o.value=0,r.value=!1},c=[{name:"value",type:"number",default:"0",description:"进度值，范围 0-100"}];return(H,e)=>(P(),_("div",w,[e[9]||(e[9]=s("h1",null,"ZProgress 进度条",-1)),e[10]||(e[10]=s("p",{class:"desc"},"Windows 10 风格的进度条组件，支持固定值和动态值两种模式。",-1)),s("div",I,[e[4]||(e[4]=s("h2",null,"不同进度值",-1)),s("div",C,[s("div",y,[e[0]||(e[0]=s("label",null,"25%",-1)),l(t(i),{value:25})]),s("div",V,[e[1]||(e[1]=s("label",null,"50%",-1)),l(t(i),{value:50})]),s("div",k,[e[2]||(e[2]=s("label",null,"75%",-1)),l(t(i),{value:75})]),s("div",A,[e[3]||(e[3]=s("label",null,"100%",-1)),l(t(i),{value:100})])]),l(t(n),{code:j,language:"vue"})]),s("div",B,[e[7]||(e[7]=s("h2",null,"动态进度演示",-1)),s("div",N,[s("div",D,[s("label",null,"当前进度: "+b(o.value)+"%",1),l(t(i),{value:o.value},null,8,["value"])]),s("div",R,[l(t(d),{onClick:m,disabled:r.value},{default:u(()=>[...e[5]||(e[5]=[p("开始",-1)])]),_:1},8,["disabled"]),l(t(d),{onClick:g,disabled:!r.value&&o.value===0},{default:u(()=>[...e[6]||(e[6]=[p("重置",-1)])]),_:1},8,["disabled"])])]),l(t(n),{code:z,language:"vue"})]),s("div",T,[e[8]||(e[8]=s("h2",null,"API 参考",-1)),l(Z,{props:c})])]))}}),O=x(E,[["__scopeId","data-v-52ef64f8"]]);export{O as default};
//# sourceMappingURL=ProgressView-C0TeuMzS.js.map
