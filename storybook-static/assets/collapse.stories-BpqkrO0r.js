import{d as p,g,e as u,f as d,p as I,o as n,j as c,n as f,k as P,w as m,m as V,t as E,T as A,l as D,q as b,s as x,u as $,v as q,b as T,x as y,y as F,F as S}from"./vue.esm-bundler-B8YVH4-n.js";const N=Symbol("collapseContextKey"),X={class:"xx-collapse"},k=p({name:"XxCollapse",__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:s}){const t=l,o=s,a=g({get(){return t.modelValue},set(e){o("update:modelValue",e)}});return I(N,{activeNames:a,handleItemClick:e=>{if(t.accordion){a.value=[a.value[0]===e?"":e];return}const r=a.value.indexOf(e);r>-1?a.value.splice(r,1):a.value.push(e)}}),(e,r)=>(n(),u("div",X,[d(e.$slots,"default")]))}});k.__docgenInfo={name:"XxCollapse",exportName:"default",displayName:"Collapse",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"NameType"}]}},{name:"accordion",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"NameType"}]}}],slots:[{name:"default"}],sourceFiles:["E:/work/imooc/693-打造媲美ElementPlus的组件库/v-element/src/components/Collapse/Collapse.vue"]};const H=["id"],L={class:"xx-collapse-item__wrapper"},j=["id"],B=p({name:"XxCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(l){const s=l,t=D(N),o=()=>{s.disabled||t==null||t.handleItemClick(s.name)},a=g(()=>t==null?void 0:t.activeNames.value.includes(s.name)),v={beforeEnter(e){e.style.height="0px",e.style.overflow="hidden"},enter(e){e.style.height=`${e.scrollHeight}px`},afterEnter(e){e.style.height="",e.style.overflow=""},beforeLeave(e){e.style.height=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.style.height="0px"},afterLeave(e){e.style.height="",e.style.overflow=""}};return(e,r)=>(n(),u("div",{class:f(["xx-collapse-item",{"is-disabled":e.disabled}])},[c("div",{class:f(["xx-collapse-item__header",{"is-disabled":e.disabled,"is-active":a.value}]),id:`item-header-${e.name}`,onClick:o},[d(e.$slots,"title",{},()=>[b(x(e.title),1)])],10,H),P(A,V({name:"slide"},E(v)),{default:m(()=>[$(c("div",L,[c("div",{class:"xx-collapse-item__content",id:`item-content-${e.name}`},[d(e.$slots,"default")],8,j)],512),[[q,a.value]])]),_:3},16)],2))}});B.__docgenInfo={name:"XxCollapseItem",exportName:"default",displayName:"CollapseItem",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"NameType"}},{name:"title",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["E:/work/imooc/693-打造媲美ElementPlus的组件库/v-element/src/components/Collapse/CollapseItem.vue"]};const w=p({__name:"PureCollapse",props:{collapseData:{},accordion:{type:Boolean}},setup(l){const s=T([]);return(t,o)=>(n(),y(k,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),accordion:t.accordion},{default:m(()=>[(n(!0),u(S,null,F(t.collapseData,a=>(n(),y(B,{name:a.name,title:a.title,key:a.name,disabled:a.disabled},{default:m(()=>[b(x(a.content),1)]),_:2},1032,["name","title","disabled"]))),128))]),_:1},8,["modelValue","accordion"]))}});w.__docgenInfo={exportName:"default",displayName:"PureCollapse",description:"",tags:{},props:[{name:"collapseData",required:!0,type:{name:"Array",elements:[{name:"CollapseItemData"}]}},{name:"accordion",required:!1,type:{name:"boolean"}}],sourceFiles:["E:/work/imooc/693-打造媲美ElementPlus的组件库/v-element/src/components/Collapse/PureCollapse.vue"]};const O={argTypes:{accordion:{control:"boolean"}},render:l=>({components:{PureCollapse:w},setup(){return{args:l}},template:'<PureCollapse v-bind="args"></PureCollapse>'})},i={args:{collapseData:[{title:"title A",content:"content A",name:"A"},{title:"title B",content:"content B",name:"B"},{title:"title C",content:"content C",name:"C",disabled:!0}]}};var C,_,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    collapseData: [{
      title: 'title A',
      content: 'content A',
      name: 'A'
    }, {
      title: 'title B',
      content: 'content B',
      name: 'B'
    }, {
      title: 'title C',
      content: 'content C',
      name: 'C',
      disabled: true
    }]
  }
}`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const z=["PureCollapseDemo"];export{i as PureCollapseDemo,z as __namedExportsOrder,O as default};
