import{d as x,c as w,a as l,b as a,u as s,q as n,t as d,Z as i,i as t,o as C}from"./index-WzoAP_LW.js";import{A as U}from"./ApiTable-BL1aRZnM.js";const j={class:"demo-page"},O={class:"demo-section"},B={class:"preview-box"},E={class:"demo-section"},_={class:"preview-box"},k={class:"demo-section"},A={class:"preview-box"},F={class:"demo-section"},q={class:"preview-box"},N={class:"demo-section"},P={class:"preview-box"},T={class:"demo-section"},D={class:"preview-box"},G={class:"demo-section"},I={class:"preview-box"},L={class:"demo-section"},M=`<ZSelect
  v-model="value"
  :options="[
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' }
  ]"
  placeholder="请选择"
/>`,$='<ZSelect v-model="value" :options="options" placeholder="已禁用" disabled />',H=`<ZSelect
  v-model="value"
  :options="options"
  multiple
  placeholder="请选择多个"
/>`,J='<ZSelect v-model="value" :options="options" placeholder="可清空" clearable />',K=`<ZSelect
  v-model="value"
  :options="[
    {
      label: '水果',
      options: [
        { label: '苹果', value: 'apple' },
        { label: '香蕉', value: 'banana' }
      ]
    },
    {
      label: '蔬菜',
      options: [
        { label: '西红柿', value: 'tomato' },
        { label: '黄瓜', value: 'cucumber' }
      ]
    }
  ]"
  placeholder="请选择产品"
/>`,Q=`<ZSelect
  v-model="value"
  :options="options"
  filterable
  placeholder="输入搜索"
/>`,R=`<ZSelect v-model="value" :options="options" size="small" placeholder="小" />
<ZSelect v-model="value" :options="options" size="medium" placeholder="中" />
<ZSelect v-model="value" :options="options" size="large" placeholder="大" />`,le=x({__name:"SelectView",setup(W){const p=t(""),b=t(""),v=t([]),g=t(""),m=t(""),V=t(""),h=t(""),f=t(""),r=t(""),u=[{label:"选项 1",value:"1"},{label:"选项 2",value:"2"},{label:"选项 3",value:"3"}],c=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"}],z=[{label:"水果",options:[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"}]},{label:"蔬菜",options:[{label:"西红柿",value:"tomato"},{label:"黄瓜",value:"cucumber"},{label:"胡萝卜",value:"carrot"}]}],S=[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"},{label:"杭州",value:"hangzhou"},{label:"成都",value:"chengdu"},{label:"武汉",value:"wuhan"},{label:"南京",value:"nanjing"},{label:"重庆",value:"chongqing"},{label:"西安",value:"xian"},{label:"苏州",value:"suzhou"},{label:"天津",value:"tianjin"}],y=[{name:"modelValue / v-model",type:"string / string[]",default:"''",description:"选中的值（双向绑定）；多选时为数组"},{name:"options",type:"SelectOption[] / SelectGroup[]",default:"[]",description:"选项数据，支持分组"},{name:"placeholder",type:"string",default:"'请选择'",description:"占位提示文本"},{name:"label",type:"string",default:"-",description:"选择器的标签文本"},{name:"disabled",type:"boolean",default:"false",description:"是否禁用"},{name:"multiple",type:"boolean",default:"false",description:"是否开启多选"},{name:"clearable",type:"boolean",default:"false",description:"是否可清空"},{name:"filterable",type:"boolean",default:"false",description:"是否可搜索筛选选项"},{name:"emptyText",type:"string",default:"''",description:"空数据时显示的文本"},{name:"size",type:"'small' | 'medium' | 'large'",default:"'medium'",description:"选择器尺寸"}],Z=[{name:"update:modelValue",params:["string | string[]"],description:"选中值变化时触发"},{name:"change",params:["string | string[]"],description:"选中值变化后触发"},{name:"focus",params:["FocusEvent"],description:"获得焦点时触发"},{name:"blur",params:["FocusEvent"],description:"失去焦点时触发"},{name:"clear",params:[],description:"清空值时触发"}];return(X,e)=>(C(),w("div",j,[e[17]||(e[17]=l("h1",null,"ZSelect 选择器",-1)),e[18]||(e[18]=l("p",{class:"desc"},"下拉选择器，支持单选、多选、禁用、分组选择和可搜索筛选。",-1)),l("div",O,[e[9]||(e[9]=l("h2",null,"基本用法",-1)),l("div",B,[a(s(n),{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=o=>p.value=o),options:c,placeholder:"请选择城市"},null,8,["modelValue"]),l("span",null,"已选: "+d(p.value),1)]),a(s(i),{code:M,language:"vue"})]),l("div",E,[e[10]||(e[10]=l("h2",null,"禁用状态",-1)),l("div",_,[a(s(n),{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=o=>b.value=o),options:u,placeholder:"此选择器已禁用",disabled:""},null,8,["modelValue"])]),a(s(i),{code:$,language:"vue"})]),l("div",k,[e[11]||(e[11]=l("h2",null,"多选",-1)),l("div",A,[a(s(n),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=o=>v.value=o),options:c,multiple:"",placeholder:"请选择多个城市"},null,8,["modelValue"]),l("span",null,"已选: "+d(v.value.join(", ")),1)]),a(s(i),{code:H,language:"vue"})]),l("div",F,[e[12]||(e[12]=l("h2",null,"可清空",-1)),l("div",q,[a(s(n),{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=o=>m.value=o),options:c,placeholder:"可选择也可清空",clearable:""},null,8,["modelValue"]),l("span",null,"已选: "+d(m.value),1)]),a(s(i),{code:J,language:"vue"})]),l("div",N,[e[13]||(e[13]=l("h2",null,"分组选择",-1)),l("div",P,[a(s(n),{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=o=>g.value=o),options:z,placeholder:"请选择产品"},null,8,["modelValue"])]),a(s(i),{code:K,language:"vue"})]),l("div",T,[e[14]||(e[14]=l("h2",null,"可搜索筛选",-1)),l("div",D,[a(s(n),{modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=o=>r.value=o),options:S,filterable:"",placeholder:"输入搜索城市"},null,8,["modelValue"]),l("span",null,"已选: "+d(r.value),1)]),a(s(i),{code:Q,language:"vue"})]),l("div",G,[e[15]||(e[15]=l("h2",null,"尺寸",-1)),l("div",I,[a(s(n),{modelValue:V.value,"onUpdate:modelValue":e[6]||(e[6]=o=>V.value=o),options:u,size:"small",placeholder:"小尺寸"},null,8,["modelValue"]),a(s(n),{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=o=>h.value=o),options:u,size:"medium",placeholder:"中尺寸"},null,8,["modelValue"]),a(s(n),{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=o=>f.value=o),options:u,size:"large",placeholder:"大尺寸"},null,8,["modelValue"])]),a(s(i),{code:R,language:"vue"})]),l("div",L,[e[16]||(e[16]=l("h2",null,"API 参考",-1)),a(U,{props:y,events:Z})])]))}});export{le as default};
//# sourceMappingURL=SelectView-DyuXIGTm.js.map
