import{m as l}from"./message-7116a117.js";import{t as r}from"./data-c667adbf.js";import"./index-8c77f9cd.js";function s(){const o=[{label:"日期",prop:"date",cellRenderer:({row:e})=>Vue.createVNode("div",{style:"display: flex; align-items: center"},[Vue.createVNode(Vue.resolveComponent("iconify-icon-online"),{icon:"ep:timer"},null),Vue.createVNode("span",{style:"margin-left: 10px"},[e.date])])},{label:"姓名",prop:"name",cellRenderer:({row:e})=>Vue.createVNode(Vue.resolveComponent("el-popover"),{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:()=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode("div",null,[Vue.createTextVNode("name: "),e.name]),Vue.createVNode("div",null,[Vue.createTextVNode("address: "),e.address])]),reference:()=>Vue.createVNode(Vue.resolveComponent("el-tag"),null,{default:()=>[e.name]})})},{label:"地址",prop:"address"},{label:"操作",cellRenderer:({index:e,row:t})=>Vue.createVNode(Vue.Fragment,null,[Vue.createVNode(Vue.resolveComponent("el-button"),{size:"small",onClick:()=>a(e+1,t)},{default:()=>[Vue.createTextVNode("Edit")]}),Vue.createVNode(Vue.resolveComponent("el-button"),{size:"small",type:"danger",onClick:()=>n(e+1,t)},{default:()=>[Vue.createTextVNode("Delete")]})])}],a=(e,t)=>{l(`您编辑了第 ${e} 行，数据为：${JSON.stringify(t)}`,{type:"success"})},n=(e,t)=>{l(`您删除了第 ${e} 行，数据为：${JSON.stringify(t)}`)};return{columns:o,tableData:r}}export{s as useColumns};
