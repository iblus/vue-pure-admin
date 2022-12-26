import{x as $}from"./index-9d9ea18e.js";import{g as z}from"./system-1a54a2ca.js";import{u as v}from"./hooks-8de8f790.js";import{d as M}from"./git-branch-line-94a7fefb.js";import{S}from"./search-4b9e88d3.js";import{M as B}from"./more-2-fill-7f8ca5b5.js";import{d as R}from"./office-building-cc7a1721.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-8c77f9cd.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cf4dcfeb.js";import"./index-5e5694dd.js";import"./multiTags-d9cd5aad.js";import"./index-4b83e049.js";import"./index-fb744333.js";import"./index-02c38b19.js";const L={width:24,height:24,body:'<path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"/>'},O=L,H={width:1024,height:1024,body:'<path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"/><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"/><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"/>'},T=H,j={width:"32",height:"32",viewBox:"0 0 24 24"},A=Vue.createElementVNode("path",{fill:"currentColor",d:"M22 4V2H2v2h9v14.17l-5.5-5.5-1.42 1.41L12 22l7.92-7.92-1.42-1.41-5.5 5.5V4h9Z"},null,-1),q=[A];function U(u,a){return Vue.openBlock(),Vue.createElementBlock("svg",j,q)}const Z={render:U},F={width:"32",height:"32",viewBox:"0 0 24 24"},P=Vue.createElementVNode("path",{fill:"currentColor",d:"M4 2H2v20h2v-9h14.17l-5.5 5.5 1.41 1.42L22 12l-7.92-7.92-1.41 1.42 5.5 5.5H4V2Z"},null,-1),G=[P];function J(u,a){return Vue.openBlock(),Vue.createElementBlock("svg",F,G)}const K={render:J},Q=u=>(Vue.pushScopeId("data-v-628f3521"),u=u(),Vue.popScopeId(),u),W={class:"h-full min-h-[780px] bg-bg_color overflow-auto"},X={class:"flex items-center h-[34px]"},Y=Q(()=>Vue.createElementVNode("p",{class:"flex-1 ml-2 font-bold text-base truncate",title:"部门列表"}," 部门列表 ",-1)),ee=Vue.defineComponent({__name:"tree",setup(u){const a=Vue.ref(),s=Vue.ref([]),c=Vue.ref(!0),l=Vue.ref(""),n=Vue.ref({}),{proxy:x}=Vue.getCurrentInstance(),g={children:"children",label:"name"},d=Vue.computed(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]),C=(t,e)=>t?e.name.includes(t):!0;function w(t){var o;const e=t.$treeNodeId;n.value[e]=(o=n.value[e])!=null&&o.highlight?Object.assign({id:e},n.value[e],{highlight:!1}):Object.assign({id:e},n.value[e],{highlight:!0}),Object.values(n.value).forEach(i=>{i.id!==e&&(i.highlight=!1)})}function p(t){c.value=t;const e=x.$refs.treeRef.store._getAllNodes();for(let o=0;o<e.length;o++)e[o].expanded=t}function y(){n.value={},l.value="",p(!0)}return Vue.watch(l,t=>{a.value.filter(t)}),Vue.onMounted(async()=>{const{data:t}=await z();s.value=$(t)}),(t,e)=>{const o=Vue.resolveComponent("IconifyIconOffline"),i=Vue.resolveComponent("el-icon"),N=Vue.resolveComponent("el-input"),V=Vue.resolveComponent("el-button"),h=Vue.resolveComponent("el-dropdown-item"),k=Vue.resolveComponent("el-dropdown-menu"),b=Vue.resolveComponent("el-dropdown"),I=Vue.resolveComponent("el-divider"),E=Vue.resolveComponent("el-tree");return Vue.openBlock(),Vue.createElementBlock("div",W,[Vue.createElementVNode("div",X,[Y,Vue.createVNode(N,{style:{flex:"2"},size:"small",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=r=>l.value=r),placeholder:"请输入部门名称",clearable:""},{suffix:Vue.withCtx(()=>[Vue.createVNode(i,{class:"el-input__icon"},{default:Vue.withCtx(()=>[Vue.withDirectives(Vue.createVNode(o,{icon:Vue.unref(S)},null,8,["icon"]),[[Vue.vShow,l.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),Vue.createVNode(b,{"hide-on-click":!1},{dropdown:Vue.withCtx(()=>[Vue.createVNode(k,null,{default:Vue.withCtx(()=>[Vue.createVNode(h,null,{default:Vue.withCtx(()=>[Vue.createVNode(V,{class:Vue.normalizeClass(Vue.unref(d)),link:"",type:"primary",icon:Vue.unref(v)(c.value?Vue.unref(Z):Vue.unref(K)),onClick:e[1]||(e[1]=r=>p(!c.value))},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(c.value?"折叠全部":"展开全部"),1)]),_:1},8,["class","icon"])]),_:1}),Vue.createVNode(h,null,{default:Vue.withCtx(()=>[Vue.createVNode(V,{class:Vue.normalizeClass(Vue.unref(d)),link:"",type:"primary",icon:Vue.unref(v)(Vue.unref(O)),onClick:y},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 重置状态 ")]),_:1},8,["class","icon"])]),_:1})]),_:1})]),default:Vue.withCtx(()=>[Vue.createVNode(o,{class:"w-[28px] cursor-pointer",width:"18px",icon:Vue.unref(B)},null,8,["icon"])]),_:1})]),Vue.createVNode(I),Vue.createVNode(E,{ref_key:"treeRef",ref:a,data:s.value,"node-key":"id",size:"small",props:g,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":C,onNodeClick:w},{default:Vue.withCtx(({node:r,data:f})=>{var _,m;return[Vue.createElementVNode("span",{class:Vue.normalizeClass(["pl-1","pr-1","rounded","flex","items-center","select-none",l.value.trim().length>0&&r.label.includes(l.value)&&"text-red-500",(_=n.value[r.id])!=null&&_.highlight?"dark:text-primary":""]),style:Vue.normalizeStyle({background:(m=n.value[r.id])!=null&&m.highlight?"var(--el-color-primary-light-7)":"transparent"})},[Vue.createVNode(o,{icon:f.type===1?Vue.unref(R):f.type===2?Vue.unref(T):Vue.unref(M)},null,8,["icon"]),Vue.createTextVNode(" "+Vue.toDisplayString(r.label),1)],6)]}),_:1},8,["data"])])}}});const me=D(ee,[["__scopeId","data-v-628f3521"]]);export{me as default};
