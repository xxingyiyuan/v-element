import{d as c,b as y,e as f,f as B,n as b,o as g}from"./vue.esm-bundler-B8YVH4-n.js";const q=["disabled","type"],t=c({name:"XxButton",__name:"Button",props:{type:{},size:{},plain:{type:Boolean},round:{type:Boolean},circle:{type:Boolean},disabled:{type:Boolean},nativeType:{default:"button"},autofocus:{type:Boolean}},setup(n,{expose:d}){const r=y();return d({ref:r}),(e,v)=>(g(),f("button",{ref_key:"_ref",ref:r,class:b(["xx-button",{[`xx-button--${e.type}`]:e.type,[`xx-button--${e.size}`]:e.size,"is-plain":e.plain,"is-round":e.round,"is-circle":e.circle,"is-disabled":e.disabled}]),disabled:e.disabled,type:e.nativeType},[B(e.$slots,"default")],10,q))}});t.__docgenInfo={name:"XxButton",exportName:"default",displayName:"Button",description:"",tags:{},expose:[{name:"ref"}],props:[{name:"type",required:!1,type:{name:"ButtonType"}},{name:"size",required:!1,type:{name:"ButtonSize"}},{name:"plain",required:!1,type:{name:"boolean"}},{name:"round",required:!1,type:{name:"boolean"}},{name:"circle",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"nativeType",required:!1,type:{name:"NativeType"},defaultValue:{func:!1,value:"'button'"}},{name:"autofocus",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["E:/work/imooc/693-打造媲美ElementPlus的组件库/v-element/src/components/Button/Button.vue"]};const _={component:t,argTypes:{type:{options:["primary","success","warning","danger","info"],control:{type:"radio"}},size:{options:["large","small"],control:{type:"radio"}}},render:n=>({components:{Button:t},setup(){return{args:n}},template:'<Button v-bind="args">Button</Button>'})},o={},a={args:{type:"primary"}};var s,p,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'primary'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const T=["ButtonDemo","ButtonPrimary"];export{o as ButtonDemo,a as ButtonPrimary,T as __namedExportsOrder,_ as default};