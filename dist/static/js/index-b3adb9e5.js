import{w as r,h as a}from"./index-9d9ea18e.js";import"./index-8c77f9cd.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-cf4dcfeb.js";import"./index-5e5694dd.js";import"./multiTags-d9cd5aad.js";import"./index-4b83e049.js";import"./index-fb744333.js";const c=Vue.createElementVNode("div",{class:"card-header"},"组件方式判断权限",-1),l=Vue.createElementVNode("div",{class:"card-header"},"函数方式判断权限",-1),i=Vue.createElementVNode("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),_=Vue.defineComponent({name:"PermissionButton"}),v=Vue.defineComponent({..._,setup(s){const t=Vue.computed(()=>({width:"85vw",justifyContent:"start"}));return(p,h)=>{const n=Vue.resolveComponent("el-tag"),e=Vue.resolveComponent("el-button"),u=Vue.resolveComponent("Auth"),o=Vue.resolveComponent("el-card"),V=Vue.resolveComponent("el-space"),d=Vue.resolveDirective("auth");return Vue.openBlock(),Vue.createBlock(V,{direction:"vertical",size:"large"},{default:Vue.withCtx(()=>[Vue.createVNode(n,{style:Vue.normalizeStyle(Vue.unref(t)),size:"large",effect:"dark"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 当前拥有的code列表："+Vue.toDisplayString(Vue.unref(r)()),1)]),_:1},8,["style"]),Vue.createVNode(o,{shadow:"never",style:Vue.normalizeStyle(Vue.unref(t))},{header:Vue.withCtx(()=>[c]),default:Vue.withCtx(()=>[Vue.createVNode(u,{value:"btn_add"},{default:Vue.withCtx(()=>[Vue.createVNode(e,{type:"success"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),Vue.createVNode(u,{value:["btn_edit"]},{default:Vue.withCtx(()=>[Vue.createVNode(e,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),Vue.createVNode(u,{value:["btn_add","btn_edit","btn_delete"]},{default:Vue.withCtx(()=>[Vue.createVNode(e,{type:"danger"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1},8,["style"]),Vue.createVNode(o,{shadow:"never",style:Vue.normalizeStyle(Vue.unref(t))},{header:Vue.withCtx(()=>[l]),default:Vue.withCtx(()=>[Vue.unref(a)("btn_add")?(Vue.openBlock(),Vue.createBlock(e,{key:0,type:"success"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：'btn_add' 权限可见 ")]),_:1})):Vue.createCommentVNode("",!0),Vue.unref(a)(["btn_edit"])?(Vue.openBlock(),Vue.createBlock(e,{key:1,type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):Vue.createCommentVNode("",!0),Vue.unref(a)(["btn_add","btn_edit","btn_delete"])?(Vue.openBlock(),Vue.createBlock(e,{key:2,type:"danger"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):Vue.createCommentVNode("",!0)]),_:1},8,["style"]),Vue.createVNode(o,{shadow:"never",style:Vue.normalizeStyle(Vue.unref(t))},{header:Vue.withCtx(()=>[i]),default:Vue.withCtx(()=>[Vue.withDirectives((Vue.openBlock(),Vue.createBlock(e,{type:"success"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[d,"btn_add"]]),Vue.withDirectives((Vue.openBlock(),Vue.createBlock(e,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[d,["btn_edit"]]]),Vue.withDirectives((Vue.openBlock(),Vue.createBlock(e,{type:"danger"},{default:Vue.withCtx(()=>[Vue.createTextVNode(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[d,["btn_add","btn_edit","btn_delete"]]])]),_:1},8,["style"])]),_:1})}}});export{v as default};
