import{I as d,D as r,A as s,H as t,R as e,P as n,s as l,Z as o,K as m}from"./index-BxmJ7YZy.js";import{A as f}from"./ApiTable-Dwr88J6i.js";const c={class:"demo-page"},v={class:"demo-section"},g={class:"preview-box"},b={class:"demo-section"},_={class:"preview-box"},y={class:"demo-section"},B={class:"preview-box",style:{"flex-direction":"column","align-items":"stretch"}},C={class:"demo-section"},x=`<z-status-bar>
  <span>就绪</span>
  <span style="margin-left: auto;">第 1 行，第 1 列</span>
  <span>UTF-8</span>
</z-status-bar>`,z=`<z-status-bar>
  <span>Ln 12, Col 45</span>
  <span style="margin-left: auto;">JavaScript</span>
  <span>Spaces: 2</span>
  <span>UTF-8</span>
</z-status-bar>`,S=`<z-status-bar>
  <span>项目: zijid-ui</span>
  <span style="margin-left: auto;">分支: main</span>
  <span>未保存的更改</span>
</z-status-bar>`,A=d({__name:"StatusBarDemo",setup(F){const i=[{name:"fixed",type:"boolean",default:"false",description:"是否固定在底部"},{name:"height",type:"number",default:"24",description:"状态栏高度（像素）"}],p=[{name:"click",params:["MouseEvent"],description:"点击状态栏时触发"}],u=[{name:"default",description:"状态栏内容",default:!0}];return(T,a)=>(m(),r("div",c,[a[7]||(a[7]=s("h1",null,"ZStatusBar 状态栏",-1)),a[8]||(a[8]=s("p",{class:"desc"},"底部状态栏，显示应用状态信息，支持左右分区和自定义内容。",-1)),s("div",v,[a[1]||(a[1]=s("h2",null,"基本用法",-1)),s("div",g,[t(n(l),null,{default:e(()=>[...a[0]||(a[0]=[s("span",null,"就绪",-1),s("span",{style:{"margin-left":"auto"}},"第 1 行，第 1 列",-1),s("span",null,"UTF-8",-1),s("span",null,"CRLF",-1)])]),_:1})]),t(n(o),{code:x,language:"vue"})]),s("div",b,[a[3]||(a[3]=s("h2",null,"编辑器风格",-1)),s("div",_,[t(n(l),null,{default:e(()=>[...a[2]||(a[2]=[s("span",null,"Ln 12, Col 45",-1),s("span",{style:{"margin-left":"auto"}},"JavaScript",-1),s("span",null,"Spaces: 2",-1),s("span",null,"UTF-8",-1)])]),_:1})]),t(n(o),{code:z,language:"vue"})]),s("div",y,[a[5]||(a[5]=s("h2",null,"应用状态",-1)),s("div",B,[t(n(l),null,{default:e(()=>[...a[4]||(a[4]=[s("span",null,"项目: zijid-ui",-1),s("span",{style:{"margin-left":"auto"}},"分支: main",-1),s("span",null,"未保存的更改",-1)])]),_:1})]),t(n(o),{code:S,language:"vue"})]),s("div",C,[a[6]||(a[6]=s("h2",null,"API 参考",-1)),t(f,{props:i,events:p,slots:u})])]))}});export{A as default};
//# sourceMappingURL=StatusBarDemo-BWQRk6do.js.map
