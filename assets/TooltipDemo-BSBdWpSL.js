import{d as u,c as m,a as l,b as o,w as n,u as e,L as s,Z as d,o as r,_ as i,e as p,k as c}from"./index-DytvuLaL.js";import{A as Z}from"./ApiTable-YVgjCaIY.js";const f={class:"demo-page"},g={class:"demo-section"},T={class:"preview-box"},v={class:"demo-section"},x={class:"preview-box",style:{display:"flex","flex-wrap":"wrap","justify-content":"center","align-items":"flex-start",gap:"48px 64px",padding:"48px 24px"}},B={class:"demo-section"},_={class:"preview-box"},y={class:"demo-section"},w={class:"preview-box"},b={class:"demo-section"},C={class:"preview-box",style:{display:"flex",gap:"24px","justify-content":"center"}},k={class:"demo-section"},z={class:"preview-box",style:{display:"flex",gap:"16px","justify-content":"center"}},j={class:"demo-section"},A=`<ZTooltip content="这是一个提示信息">
  <ZButton>鼠标移入查看</ZButton>
</ZTooltip>`,N=`<ZTooltip content="顶部提示" placement="top">
  <ZButton size="small">上</ZButton>
</ZTooltip>

<ZTooltip content="左侧提示" placement="left">
  <ZButton size="small">左</ZButton>
</ZTooltip>

<ZTooltip content="右侧提示" placement="right">
  <ZButton size="small">右</ZButton>
</ZTooltip>

<ZTooltip content="底部提示" placement="bottom">
  <ZButton size="small">下</ZButton>
</ZTooltip>`,V=`<ZTooltip content="点击触发的提示，点击外部区域关闭" trigger="click">
  <ZButton>点击我</ZButton>
</ZTooltip>`,D=`<ZTooltip content="这是一段较长的提示信息，用于展示 Tooltip 在多行文本情况下的显示效果。">
  <ZButton>长提示</ZButton>
</ZTooltip>`,I=`<ZTooltip content="窄宽度提示，文字会自动换行显示" :max-width="120">
  <ZButton>窄提示 (120px)</ZButton>
</ZTooltip>

<ZTooltip content="更宽的提示框可以容纳更多文字内容在一行显示" :max-width="400">
  <ZButton>宽提示 (400px)</ZButton>
</ZTooltip>`,P=`<ZTooltip content="保存当前修改的内容" placement="top">
  <ZButton type="primary" icon="save">保存</ZButton>
</ZTooltip>

<ZTooltip content="删除选中的项目，此操作不可恢复" placement="top">
  <ZButton type="danger" icon="trash">删除</ZButton>
</ZTooltip>

<ZTooltip content="下载文件到本地" placement="top">
  <ZButton type="default" icon="download">下载</ZButton>
</ZTooltip>`,S=u({__name:"TooltipDemo",setup(E){const a=[{name:"content",type:"string",default:"''",description:"提示内容文字"},{name:"placement",type:"'top' | 'bottom' | 'left' | 'right'",default:"'top'",description:"提示框出现位置，相对于触发元素"},{name:"trigger",type:"'hover' | 'click'",default:"'hover'",description:"触发方式：hover 鼠标悬停触发，click 点击触发，点击外部关闭"},{name:"maxWidth",type:"number | string",default:"280",description:'提示框最大宽度，number 为像素值，string 支持 CSS 单位（如 "50%"）'}];return(L,t)=>(r(),m("div",f,[t[19]||(t[19]=l("h1",null,"ZTooltip 文字提示",-1)),t[20]||(t[20]=l("p",{class:"desc"},"鼠标悬停或点击时显示提示信息的文字气泡框，支持多种位置和触发方式。",-1)),l("div",g,[t[1]||(t[1]=l("h2",null,"基本用法",-1)),l("div",T,[o(e(s),{content:"这是一个提示信息"},{default:n(()=>[o(e(i),null,{default:n(()=>[...t[0]||(t[0]=[p("鼠标移入查看",-1)])]),_:1})]),_:1})]),o(e(d),{code:A,language:"vue"})]),l("div",v,[t[6]||(t[6]=l("h2",null,"不同位置",-1)),l("div",x,[o(e(s),{content:"顶部提示",placement:"top"},{default:n(()=>[o(e(i),{size:"small"},{default:n(()=>[...t[2]||(t[2]=[p("上",-1)])]),_:1})]),_:1}),o(e(s),{content:"左侧提示",placement:"left"},{default:n(()=>[o(e(i),{size:"small"},{default:n(()=>[...t[3]||(t[3]=[p("左",-1)])]),_:1})]),_:1}),o(e(s),{content:"右侧提示",placement:"right"},{default:n(()=>[o(e(i),{size:"small"},{default:n(()=>[...t[4]||(t[4]=[p("右",-1)])]),_:1})]),_:1}),o(e(s),{content:"底部提示",placement:"bottom"},{default:n(()=>[o(e(i),{size:"small"},{default:n(()=>[...t[5]||(t[5]=[p("下",-1)])]),_:1})]),_:1})]),o(e(d),{code:N,language:"vue"})]),l("div",B,[t[8]||(t[8]=l("h2",null,"点击触发",-1)),l("div",_,[o(e(s),{content:"点击触发的提示，点击外部区域关闭",trigger:"click"},{default:n(()=>[o(e(i),null,{default:n(()=>[...t[7]||(t[7]=[p("点击我",-1)])]),_:1})]),_:1})]),o(e(d),{code:V,language:"vue"})]),l("div",y,[t[10]||(t[10]=l("h2",null,"长文本提示",-1)),l("div",w,[o(e(s),{content:"这是一段较长的提示信息，用于展示 Tooltip 在多行文本情况下的显示效果。"},{default:n(()=>[o(e(i),null,{default:n(()=>[...t[9]||(t[9]=[p("长提示",-1)])]),_:1})]),_:1})]),o(e(d),{code:D,language:"vue"})]),l("div",b,[t[13]||(t[13]=l("h2",null,"自定义宽度",-1)),l("div",C,[o(e(s),{content:"窄宽度提示，文字会自动换行显示","max-width":120},{default:n(()=>[o(e(i),null,{default:n(()=>[...t[11]||(t[11]=[p("窄提示 (120px)",-1)])]),_:1})]),_:1}),o(e(s),{content:"更宽的提示框可以容纳更多文字内容在一行显示","max-width":400},{default:n(()=>[o(e(i),null,{default:n(()=>[...t[12]||(t[12]=[p("宽提示 (400px)",-1)])]),_:1})]),_:1})]),o(e(d),{code:I,language:"vue"})]),l("div",k,[t[17]||(t[17]=l("h2",null,"悬停在按钮组",-1)),l("div",z,[o(e(s),{content:"保存当前修改的内容",placement:"top"},{default:n(()=>[o(e(i),{type:"primary",icon:"save"},{default:n(()=>[...t[14]||(t[14]=[p("保存",-1)])]),_:1})]),_:1}),o(e(s),{content:"删除选中的项目，此操作不可恢复",placement:"top"},{default:n(()=>[o(e(i),{type:"danger",icon:"trash"},{default:n(()=>[...t[15]||(t[15]=[p("删除",-1)])]),_:1})]),_:1}),o(e(s),{content:"下载文件到本地",placement:"top"},{default:n(()=>[o(e(i),{type:"default",icon:"download"},{default:n(()=>[...t[16]||(t[16]=[p("下载",-1)])]),_:1})]),_:1})]),o(e(d),{code:P,language:"vue"})]),l("div",j,[t[18]||(t[18]=l("h2",null,"API 参考",-1)),o(Z,{props:a})])]))}}),q=c(S,[["__scopeId","data-v-daecc2ce"]]);export{q as default};
//# sourceMappingURL=TooltipDemo-BSBdWpSL.js.map
