import{m as y}from"./message-7116a117.js";import{a as V}from"./system-1a54a2ca.js";import"./index-8c77f9cd.js";import"./index-9d9ea18e.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cf4dcfeb.js";import"./index-5e5694dd.js";import"./multiTags-d9cd5aad.js";import"./index-4b83e049.js";import"./index-fb744333.js";function R(){const r=Vue.reactive({name:"",code:"",status:""}),l=Vue.ref([]),n=Vue.ref(!0),a=Vue.ref({}),i=Vue.reactive({total:0,pageSize:10,currentPage:1,background:!0}),s=[{type:"selection",width:55,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"角色编号",prop:"id",minWidth:100},{label:"角色名称",prop:"name",minWidth:120},{label:"角色标识",prop:"code",minWidth:150},{label:"角色类型",prop:"type",minWidth:150,cellRenderer:({row:e,props:t})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:t.size,type:e.type===1?"danger":"",effect:"plain"},{default:()=>[e.type===1?"内置":"自定义"]})},{label:"显示顺序",prop:"sort",minWidth:100},{label:"状态",minWidth:130,cellRenderer:e=>{var t;return Vue.createVNode(Vue.resolveComponent("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=a.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":v=>e.row.status=v,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>c(e)},null)}},{label:"创建时间",minWidth:180,prop:"createTime",formatter:({createTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],u=Vue.computed(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function c({row:e,index:t}){ElementPlus.ElMessageBox.confirm(`确认要<strong>${e.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${e.name}</strong>角色吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!0}),setTimeout(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!1}),y("已成功修改角色状态",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function d(e){}function m(e){}function p(e){}function g(e){}function h(e){}async function o(){n.value=!0;const{data:e}=await V();l.value=e.list,i.total=e.total,setTimeout(()=>{n.value=!1},500)}const f=e=>{e&&(e.resetFields(),o())};return Vue.onMounted(()=>{o()}),{form:r,loading:n,columns:s,dataList:l,pagination:i,buttonClass:u,onSearch:o,resetForm:f,handleUpdate:d,handleDelete:m,handleSizeChange:p,handleCurrentChange:g,handleSelectionChange:h}}export{R as useRole};
