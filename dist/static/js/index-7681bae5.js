import{V as i}from"./styles-e1f27bd5.js";import"./_commonjsHelpers-042e6b4d.js";import"./_vue_commonjs-external-c09696f7.js";const u={class:"card-header"},l={class:"font-medium"},d={class:"font-medium"},c=Vue.defineComponent({name:"JsonEditor"}),w=Vue.defineComponent({...c,setup(h){const n={status:200,text:"",error:null,config:void 0,data:[{news_id:51184,title:"iPhone X Review: Innovative future with real black technology",source:"Netease phone"},{news_id:51183,title:"Traffic paradise: How to design streets for people and unmanned vehicles in the future?",source:"Netease smart",link:"http://netease.smart/traffic-paradise/1235"},{news_id:51182,title:"Teslamask's American Business Relations: The government does not pay billions to build factories",source:"AI Finance",members:["Daniel","Mike","John"]}]},e=Vue.reactive({val:JSON.stringify(n),data:n,showLine:!0,showLineNumber:!0,showDoubleQuotes:!0,showLength:!0,editable:!0,showIcon:!0,editableTrigger:"click",deep:3});return Vue.watch(()=>e.val,t=>{try{e.data=JSON.parse(t)}catch{}}),Vue.watch(()=>e.data,t=>{try{e.val=JSON.stringify(t)}catch{}}),(t,o)=>{const a=Vue.resolveComponent("el-link"),r=Vue.resolveComponent("el-card");return Vue.openBlock(),Vue.createBlock(r,null,{header:Vue.withCtx(()=>[Vue.createElementVNode("div",u,[Vue.createElementVNode("span",l,[Vue.createTextVNode(" JSON编辑器组件，采用开源的 "),Vue.createVNode(a,{href:"https://github.com/leezng/vue-json-pretty",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" vue-json-pretty ")]),_:1}),Vue.createTextVNode(" （支持大数据量）。 ")]),Vue.createElementVNode("span",d,[Vue.createTextVNode(" 当然我们还有一款代码编辑器组件推荐（这里就不做演示了），采用开源的 "),Vue.createVNode(a,{href:"https://github.com/surmon-china/vue-codemirror",target:"_blank",style:{"font-size":"16px",margin:"0 4px 5px"}},{default:Vue.withCtx(()=>[Vue.createTextVNode(" codemirror6 ")]),_:1})])])]),default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(i),{data:e.data,"onUpdate:data":o[0]||(o[0]=s=>e.data=s),deep:e.deep,"show-double-quotes":e.showDoubleQuotes,"show-line":e.showLine,"show-length":e.showLength,"show-icon":e.showIcon,"show-line-number":e.showLineNumber,editable:e.editable,"editable-trigger":e.editableTrigger},null,8,["data","deep","show-double-quotes","show-line","show-length","show-icon","show-line-number","editable","editable-trigger"])]),_:1})}}});export{w as default};
