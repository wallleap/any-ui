(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i.index={},i.Vue))})(this,function(i,e){"use strict";const B="",g=["disabled"],h={key:0,t:"1692610610160",class:"any-icon icon-loading",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4056",width:"200",height:"200"},b=[e.createElementVNode("path",{d:"M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 128a298.666667 298.666667 0 1 0 0 597.333334 298.666667 298.666667 0 0 0 0-597.333334z",fill:"currentColor","fill-opacity":".05","p-id":"4057"},null,-1),e.createElementVNode("path",{d:"M813.696 813.696c166.613333-166.613333 166.613333-436.778667 0-603.392-166.613333-166.613333-436.778667-166.613333-603.392 0A64 64 0 0 0 300.8 300.8a298.666667 298.666667 0 1 1 422.4 422.4 64 64 0 0 0 90.496 90.496z",fill:"currentColor","p-id":"4058"},null,-1)],p=e.defineComponent({__name:"index",props:{theme:{type:String,default:""},size:{type:String,default:""},shape:{type:String,default:""},disabled:{type:Boolean,default:!1},status:{type:String,default:"normal"},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!1}},setup(n){const t=n,o=e.computed(()=>["any-button",t.theme,t.size,t.shape,t.status,{"any-button-block":t.block}]);return(a,l)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(o.value),disabled:t.disabled},[t.loading?(e.openBlock(),e.createElementBlock("svg",h,b)):e.createCommentVNode("",!0),e.createTextVNode(),e.renderSlot(a.$slots,"default")],10,g))}}),A="",f=e.defineComponent({__name:"index",props:{size:{type:String,default:""},direction:{type:String,default:"row"},align:{type:String,default:"start"},justify:{type:String,default:"start"},wrap:{type:String,default:"wrap"},gap:{type:String,default:"16px"}},setup(n){const t=n,o=e.computed(()=>({display:"flex",flexDirection:t.direction,alignItems:t.align,justifyContent:t.justify,flexWrap:t.wrap,gap:t.gap}));return(a,l)=>(e.openBlock(),e.createElementBlock("div",{class:"any-space",style:e.normalizeStyle(o.value)},[e.renderSlot(a.$slots,"default")],4))}});window._iconfont_svg_string_4221203='<svg><symbol id="icon-like" viewBox="0 0 1024 1024"><path d="M760.384 64c47.808 0 91.968 11.968 132.352 35.84a264.32 264.32 0 0 1 95.872 97.152A263.68 263.68 0 0 1 1024 330.88c0 34.752-6.592 68.544-19.712 101.312a262.4 262.4 0 0 1-57.536 87.424L512 960 77.248 519.68A268.8 268.8 0 0 1 0 330.88c0-48.384 11.776-93.056 35.392-133.952A264.32 264.32 0 0 1 131.2 99.84 255.296 255.296 0 0 1 263.68 64 260.736 260.736 0 0 1 449.92 142.208l62.08 62.912 62.144-62.912a258.944 258.944 0 0 1 86.336-58.24A259.584 259.584 0 0 1 760.512 64h-0.128z m0 88.96a174.272 174.272 0 0 0-124.16 52.16L511.872 330.88 387.84 205.12a174.272 174.272 0 0 0-124.288-52.16c-32 0-61.504 7.936-88.384 23.808a175.36 175.36 0 0 0-63.808 64.64 176.32 176.32 0 0 0-23.552 89.536c0 23.168 4.352 45.632 13.056 67.392 8.704 21.824 21.504 41.28 38.4 58.432L512 834.176l372.672-377.408c16.896-17.152 29.696-36.608 38.4-58.432 8.704-21.76 13.056-44.224 13.056-67.392 0-32.448-7.808-62.336-23.488-89.536a175.36 175.36 0 0 0-63.872-64.64 170.688 170.688 0 0 0-88.32-23.808z"  ></path></symbol></svg>',function(n){var o=(o=document.getElementsByTagName("script"))[o.length-1],t=o.getAttribute("data-injectcss"),o=o.getAttribute("data-disable-injectsvg");if(!o){var a,l,d,r,u,w=function(c,s){s.parentNode.insertBefore(c,s)};if(t&&!n.__iconfont__svg__cssinject__){n.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}a=function(){var c,s=document.createElement("div");s.innerHTML=n._iconfont_svg_string_4221203,(s=s.getElementsByTagName("svg")[0])&&(s.setAttribute("aria-hidden","true"),s.style.position="absolute",s.style.width=0,s.style.height=0,s.style.overflow="hidden",s=s,(c=document.body).firstChild?w(s,c.firstChild):c.appendChild(s))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(a,0):(l=function(){document.removeEventListener("DOMContentLoaded",l,!1),a()},document.addEventListener("DOMContentLoaded",l,!1)):document.attachEvent&&(d=a,r=n.document,u=!1,y(),r.onreadystatechange=function(){r.readyState=="complete"&&(r.onreadystatechange=null,m())})}function m(){u||(u=!0,d())}function y(){try{r.documentElement.doScroll("left")}catch{return void setTimeout(y,50)}m()}}(window);const x=["xlink:href"],S=e.defineComponent({__name:"index",props:{name:{type:String,required:!0},rotate:{type:Number,default:0},spin:{type:Boolean,default:!1},style:{type:Object,default:()=>({})}},setup(n){const t=n,o=e.computed(()=>[{transform:`rotate(${t.rotate}deg)`},t.style]),a=e.computed(()=>({"any-icon":!0,[`icon-${t.name}`]:!0,spin:t.spin}));return(l,d)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(a.value),style:e.normalizeStyle(o.value),"aria-hidden":"true"},[e.createElementVNode("use",{"xlink:href":`#icon-${t.name}`},null,8,x)],6))}}),E="",_=((n,t)=>{const o=n.__vccOpts||n;for(const[a,l]of t)o[a]=l;return o})(S,[["__scopeId","data-v-b1494f2d"]]),v={install(n){n.component("AnyButton",p),n.component("AnySpace",f),n.component("AnyIcon",_)}};i.AnyButton=p,i.AnyIcon=_,i.AnySpace=f,i.default=v,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
