import{d as m,c as b,a as e,b as s,w as l,u as t,J as a,Z as d,o as p,_ as n,e as i}from"./index-DytvuLaL.js";import{A as f}from"./ApiTable-YVgjCaIY.js";const v={class:"demo-page"},g={class:"demo-section"},x={class:"preview-box"},w={class:"demo-section"},C={class:"preview-box"},_={class:"demo-section"},k={class:"preview-box"},y={class:"demo-section"},B=`<z-toolbar>
  <z-button size="small">新建</z-button>
  <z-button size="small">打开</z-button>
  <z-button size="small">保存</z-button>
</z-toolbar>`,T=`<z-toolbar>
  <z-button size="small" icon="plus">新建</z-button>
  <z-button size="small" icon="folder">打开</z-button>
  <z-button size="small" icon="save">保存</z-button>
</z-toolbar>`,A=`<z-toolbar>
  <z-button size="small" icon="undo">撤销</z-button>
  <z-button size="small" icon="redo">重做</z-button>
  <!-- 分隔线 -->
  <z-button size="small" icon="copy">复制</z-button>
</z-toolbar>`,P=m({__name:"ToolbarDemo",setup(E){const u=[{name:"compact",type:"boolean",default:"false",description:"紧凑模式，减小间距"}],z=[{name:"click",params:["MouseEvent"],description:"点击工具栏时触发"}],r=[{name:"default",description:"工具栏内容",default:!0}];return(N,o)=>(p(),b("div",v,[o[17]||(o[17]=e("h1",null,"ZToolbar 工具栏",-1)),o[18]||(o[18]=e("p",{class:"desc"},"用于放置常用操作按钮的工具栏，支持按钮分组。",-1)),e("div",g,[o[3]||(o[3]=e("h2",null,"基本用法",-1)),e("div",x,[s(t(a),null,{default:l(()=>[s(t(n),{size:"small"},{default:l(()=>[...o[0]||(o[0]=[i("新建",-1)])]),_:1}),s(t(n),{size:"small"},{default:l(()=>[...o[1]||(o[1]=[i("打开",-1)])]),_:1}),s(t(n),{size:"small"},{default:l(()=>[...o[2]||(o[2]=[i("保存",-1)])]),_:1})]),_:1})]),s(t(d),{code:B,language:"vue"})]),e("div",w,[o[8]||(o[8]=e("h2",null,"带图标",-1)),e("div",C,[s(t(a),null,{default:l(()=>[s(t(n),{size:"small",icon:"plus"},{default:l(()=>[...o[4]||(o[4]=[i("新建",-1)])]),_:1}),s(t(n),{size:"small",icon:"folder"},{default:l(()=>[...o[5]||(o[5]=[i("打开",-1)])]),_:1}),s(t(n),{size:"small",icon:"save"},{default:l(()=>[...o[6]||(o[6]=[i("保存",-1)])]),_:1}),s(t(n),{size:"small",icon:"trash",type:"danger"},{default:l(()=>[...o[7]||(o[7]=[i("删除",-1)])]),_:1})]),_:1})]),s(t(d),{code:T,language:"vue"})]),e("div",_,[o[15]||(o[15]=e("h2",null,"密集工具栏",-1)),e("div",k,[s(t(a),null,{default:l(()=>[s(t(n),{size:"small",icon:"undo"},{default:l(()=>[...o[9]||(o[9]=[i("撤销",-1)])]),_:1}),s(t(n),{size:"small",icon:"redo"},{default:l(()=>[...o[10]||(o[10]=[i("重做",-1)])]),_:1}),o[14]||(o[14]=e("span",{style:{width:"1px",height:"24px",background:"#d0d0d0",margin:"0 4px"}},null,-1)),s(t(n),{size:"small",icon:"cut"},{default:l(()=>[...o[11]||(o[11]=[i("剪切",-1)])]),_:1}),s(t(n),{size:"small",icon:"copy"},{default:l(()=>[...o[12]||(o[12]=[i("复制",-1)])]),_:1}),s(t(n),{size:"small",icon:"paste"},{default:l(()=>[...o[13]||(o[13]=[i("粘贴",-1)])]),_:1})]),_:1})]),s(t(d),{code:A,language:"vue"})]),e("div",y,[o[16]||(o[16]=e("h2",null,"API 参考",-1)),s(f,{props:u,events:z,slots:r})])]))}});export{P as default};
//# sourceMappingURL=ToolbarDemo-luQ7olJS.js.map
