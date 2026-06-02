import{d as f,c as _,a as s,b as l,u as t,A as i,Z as n,t as b,w as u,_ as d,i as v,o as x,e as p,k as P}from"./index-WzoAP_LW.js";import{A as w}from"./ApiTable-BL1aRZnM.js";const Z={class:"demo-page"},C={class:"demo-section"},I={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch","max-width":"500px"}},k={class:"progress-item"},y={class:"progress-item"},V={class:"progress-item"},A={class:"progress-item"},B={class:"demo-section"},N={class:"preview-box",style:{"flex-direction":"column","align-items":"flex-start","max-width":"500px"}},T={class:"progress-item",style:{width:"100%"}},j={class:"btn-group"},z={class:"demo-section"},D=`<ZProgress :value="25" />
<ZProgress :value="50" />
<ZProgress :value="75" />
<ZProgress :value="100" />`,E=`<script setup>
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
</template>`,R=f({__name:"ProgressView",setup(S){const o=v(0),r=v(!1);let a=null;const m=()=>{r.value||(r.value=!0,a=setInterval(()=>{if(o.value>=100){clearInterval(a),a=null,r.value=!1;return}o.value+=5},200))},g=()=>{a&&(clearInterval(a),a=null),o.value=0,r.value=!1},c=[{name:"value",type:"number",default:"0",description:"进度值，范围 0-100"}];return(W,e)=>(x(),_("div",Z,[e[9]||(e[9]=s("h1",null,"ZProgress 进度条",-1)),e[10]||(e[10]=s("p",{class:"desc"},"Windows 10 风格的进度条组件，支持固定值和动态值两种模式。",-1)),s("div",C,[e[4]||(e[4]=s("h2",null,"不同进度值",-1)),s("div",I,[s("div",k,[e[0]||(e[0]=s("label",null,"25%",-1)),l(t(i),{value:25})]),s("div",y,[e[1]||(e[1]=s("label",null,"50%",-1)),l(t(i),{value:50})]),s("div",V,[e[2]||(e[2]=s("label",null,"75%",-1)),l(t(i),{value:75})]),s("div",A,[e[3]||(e[3]=s("label",null,"100%",-1)),l(t(i),{value:100})])]),l(t(n),{code:D,language:"vue"})]),s("div",B,[e[7]||(e[7]=s("h2",null,"动态进度演示",-1)),s("div",N,[s("div",T,[s("label",null,"当前进度: "+b(o.value)+"%",1),l(t(i),{value:o.value},null,8,["value"])]),s("div",j,[l(t(d),{onClick:m,disabled:r.value},{default:u(()=>[...e[5]||(e[5]=[p("开始",-1)])]),_:1},8,["disabled"]),l(t(d),{onClick:g,disabled:!r.value&&o.value===0},{default:u(()=>[...e[6]||(e[6]=[p("重置",-1)])]),_:1},8,["disabled"])])]),l(t(n),{code:E,language:"vue"})]),s("div",z,[e[8]||(e[8]=s("h2",null,"API 参考",-1)),l(w,{props:c})])]))}}),q=P(R,[["__scopeId","data-v-52ef64f8"]]);export{q as default};
//# sourceMappingURL=ProgressView-CvdoO7xo.js.map
