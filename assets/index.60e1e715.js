import{a as du,d as M,u as X,b as pu,r as w,c as vu,e as q,f as mu,g as gu,o as Fu,E as D,h as _u,i as _,j as p,k as m,l as n,n as K,m as F,w as h,p as t,q as B,s as g,t as hu,v as Eu,F as G,x as b,y as A,z as Q,A as H,B as uu,C as eu,D as fu,G as $,H as Au,I as j,J as Cu,K as Du,L as Bu,M as wu,N as ku}from"./vendor.98726fec.js";const Iu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}};Iu();var yu="/assets/header-left-gc-logo.8feaaa26.webp",bu="/assets/gc-front-of-main.3318ef28.png";const ju=u=>{const e=new window.FormData;for(let a in u)typeof u[a]!="function"&&typeof u[a]!="symbol"&&typeof u[a]!="object"&&e.set(a,u[a]);return e},y=async(u,e,a)=>{try{let o={};a&&(o={"x-token-u":a,"content-type":"multipart/form-data"});const s=ju(e);return s.set("act",u),(await du.post("http://f.gamecreator.com.cn/sdk/matchApi.php",s,{headers:o})).data}catch(o){const s=o;return`Error: ${s.name}, Status: ${s.code}, Message: ${s.message}`}},U={async login(u){const e=await y("login",u);return typeof e=="string"?"\u7F51\u7EDC\u9519\u8BEF\uFF1A"+e:e.code!==200?!1:e.data},async signup(u,e){const a=await y("signup",u,e);if(typeof a=="string")return"\u7F51\u7EDC\u9519\u8BEF\uFF1A"+a;if(a.code===402)return"\u8BF7\u52FF\u91CD\u590D\u63D0\u4EA4";if(a.code===401)return!1;if(a.code===200)return!0;throw new Error("\u4E0D\u5E94\u8BE5\u6267\u884C\u5230\u8FD9\u6765")},async getSignupInfo(u){const e=await y("signupInfo",void 0,u);if(console.log(e),typeof e=="string")return"\u7F51\u7EDC\u9519\u8BEF\uFF1A"+e;if(e.code===401)return e.message==="\u6B64\u7528\u6237\u6CA1\u6709\u62A5\u540D"?null:!1;if(e.code===200)return e.data;throw new Error("\u4E0D\u5E94\u8BE5\u6267\u884C\u5230\u8FD9\u6765")},async getWorks(){const u=await y("works",void 0);if(typeof u=="string")return"\u7F51\u7EDC\u9519\u8BEF\uFF1A"+u;if(u.code===401)return!1;if(u.code===200)return u.data;throw new Error("\u4E0D\u5E94\u8BE5\u6267\u884C\u5230\u8FD9\u6765")}};const Su=t("div",{class:"app-header-left"},[t("img",{src:yu})],-1),Ru={class:"app-header-tab"},Nu=t("a",{class:"app-header-tab-item",href:"http://f.gamecreator.com.cn/gcsitev2/gc2021indiegameAwards/#/",target:"_blank"},"\u5F80\u671F\u8D5B\u4E8B",-1),Lu={class:"app-header-right"},Uu={key:0},Gu=b(" | "),Mu={key:0,href:"http://f.gamecreator.com.cn/reg.php?r=gameIndex.php",target:"_blank",class:"app-header-right-reg-btn"},Tu=["href"],Ou=["src"],Zu=t("span",{class:"app-header-right-logged-in-nickname"},"\u4E34\u65F6\u6635\u79F0",-1),Wu={key:0,src:bu},zu=t("div",{style:{height:"16px"}},null,-1),Yu=t("span",null,"\u4F7F\u7528 GC \u8D26\u53F7\u767B\u5F55",-1),Vu=b(" \u53D6\u6D88 "),xu=b(" \u767B\u5F55 "),Qu=M({setup(u){const e=X(),a=pu(),o=c=>a.path===c?"app-header-tab-item-selected":"",s=w(!1),r=w({username:"",password:""}),d=vu(()=>{if(!(f==null?void 0:f.value))return"";const c=String(f==null?void 0:f.value);let i="";for(let l=0;l<9;l++)9-c.length<=l?i+=c.charAt(Math.abs(9-c.length-l)):i+="0",(l===2||l===4||l===6)&&(i+="/");return i}),C=()=>{if(!r.value.password||!r.value.username){D.warning("\u8BF7\u5148\u8F93\u5165\u7528\u6237\u540D\u6216\u5BC6\u7801");return}s.value=!0,U.login(r.value).then(c=>{s.value=!1,typeof c=="string"?D.error("\u51FA\u9519\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF0C"+c):typeof c=="boolean"?D.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF"):(D.success("\u767B\u5F55\u6210\u529F"),R(c.token),N(c.uid),localStorage.setItem("gcUserToken",c.token),localStorage.setItem("gcUserId",String(c.uid)),v())})},v=()=>{r.value={username:"",password:""},W(!1)},T=w(!1),au=()=>{T.value=!0},O=q(),{token:Z,uid:f,showingLoginDialog:S}=mu(O,["token","uid","showingLoginDialog"]),{setToken:R,setSignupInfo:ou,setUserId:N,setShowLoginDialog:W,setWorks:iu}=gu(O,["setToken","setSignupInfo","setUserId","setShowLoginDialog","setWorks"]),z=w({}),Y=new ResizeObserver(c=>c.forEach(i=>{i.target===document.body&&(z.value.top=i.contentRect.height-360+"px")}));return Fu(()=>{const c=localStorage.getItem("gcUserToken"),i=localStorage.getItem("gcUserId");c&&U.getSignupInfo(c).then(l=>{typeof l=="string"?console.warn("\u83B7\u53D6\u62A5\u540D\u4FE1\u606F\u65F6\u51FA\u73B0\u9519\u8BEF\uFF0C"+l):typeof l=="boolean"?(localStorage.removeItem("gcUserToken"),localStorage.removeItem("gcUserId")):l?(ou(l),R(c),N(parseInt(i))):(N(parseInt(i)),R(c))}),U.getWorks().then(l=>{if(typeof l=="string"||typeof l=="boolean")D.warning("\u83B7\u53D6\u53C2\u8D5B\u4F5C\u54C1\u5931\u8D25");else{let I="2022";I="2021",iu(l.filter(L=>L.year===I))}}),Y.observe(document.body)}),_u(()=>{Y.unobserve(document.body)}),(c,i)=>{const l=_("el-header"),I=_("router-view"),L=_("el-scrollbar"),ru=_("el-main"),nu=_("el-footer"),cu=_("el-container"),V=_("el-input"),x=_("el-button"),lu=_("el-dialog");return p(),m(G,null,[n("\u53EA\u6709\u9996\u9875\u6709\u7684\u6D6E\u52A8\u5C0F\u7F8A"),o("/")?(p(),m("div",{key:0,class:"sheep-img",style:K(z.value)},null,4)):n("v-if",!0),F(cu,{class:"app-container"},{default:h(()=>[n("\u9875\u5934"),F(l,{class:"app-header",height:"72px"},{default:h(()=>[n("\u9875\u5934\u5DE6\u4FA7\u90E8\u5206"),Su,n("\u9875\u5934\u4E2D\u95F4\u90E8\u5206"),t("div",Ru,[t("div",{class:B(["app-header-tab-item",o("/")]),onClick:i[0]||(i[0]=E=>g(e).push("/"))}," \u9996\u9875 ",2),t("div",{class:B(["app-header-tab-item",o("/works")]),onClick:i[1]||(i[1]=E=>g(e).push("/works"))}," \u53C2\u8D5B\u4F5C\u54C1 ",2),t("div",{class:B(["app-header-tab-item",o("/signup")]),onClick:i[2]||(i[2]=E=>g(e).push("/signup"))}," \u6211\u8981\u53C2\u8D5B ",2),n("\u8D5B\u4E8B\u7ED3\u679C\u6682\u65F6\u4E0D\u5C55\u793A"),n("v-if",!0),Nu]),n("\u9875\u5934\u53F3\u4FA7\u90E8\u5206"),t("div",Lu,[g(Z)?(p(),m("a",{key:1,href:"http://f.gamecreator.com.cn/home.php?mod=space&uid="+g(f),target:"_blank",class:"app-header-right-logged-in"},[t("img",{onError:au,src:T.value?"http://f.gamecreator.com.cn/gc/img/oldface/0":`http://f.gamecreator.com.cn/uc_server/data/avatar/${g(d)}_avatar_big.jpg`,height:"46",width:"46",class:"app-header-right-logged-in-avatar"},null,40,Ou),n("\u7B49\u5468\u4E00\u5927\u5355\u66F4\u65B0 API"),Zu],8,Tu)):(p(),m("div",Uu,[t("span",{onClick:i[3]||(i[3]=E=>g(W)(!0)),class:"app-header-right-login-btn"},"\u767B\u5F55"),Gu,g(Z)?n("v-if",!0):(p(),m("a",Mu,"\u6CE8\u518C"))]))])]),_:1}),n("\u4E3B\u8981\u5185\u5BB9"),F(ru,{class:"app-main"},{default:h(()=>[F(L,null,{default:h(()=>[t("div",{class:B(["container",o("/")?"container-home":""])},[n("\u4E3B\u56FE"),t("div",{class:B(["main-pic",o("/")?"":"main-pic-for-other-page"])},[n("\u4E3B\u56FE\u4E0A\u7684 GC \u5A18"),o("/")?(p(),m("img",Wu)):n("v-if",!0)],2),F(I)],2)]),_:1})]),_:1}),n("\u9875\u811A"),F(nu,{class:"app-footer"})]),_:1}),n(" \u767B\u5F55\u6846 "),F(lu,{"close-on-click-modal":!1,"show-close":!1,"close-on-press-escape":!1,modelValue:g(S),"onUpdate:modelValue":i[6]||(i[6]=E=>Eu(S)?S.value=E:null)},{title:h(()=>[Yu]),footer:h(()=>[F(x,{onClick:v,loading:s.value},{default:h(()=>[Vu]),_:1},8,["loading"]),F(x,{onClick:C,loading:s.value,type:"primary"},{default:h(()=>[xu]),_:1},8,["loading"])]),default:h(()=>[F(V,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",modelValue:r.value.username,"onUpdate:modelValue":i[4]||(i[4]=E=>r.value.username=E)},null,8,["modelValue"]),zu,F(V,{onKeyup:hu(C,["enter"]),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801","show-password":"",modelValue:r.value.password,"onUpdate:modelValue":i[5]||(i[5]=E=>r.value.password=E)},null,8,["onKeyup","modelValue"])]),_:1},8,["modelValue"])],64)}}}),Hu="modulepreload",J={},$u="/",P=function(e,a){return!a||a.length===0?e():Promise.all(a.map(o=>{if(o=`${$u}${o}`,o in J)return;J[o]=!0;const s=o.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":Hu,s||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),s)return new Promise((C,v)=>{d.addEventListener("load",C),d.addEventListener("error",v)})})).then(()=>e())};var Ju="/assets/pic-info-title.1fc5236d.png",Pu="/assets/signup-btn.7e2f8c48.png",Xu="/assets/roadmap-title.3a9827db.png",qu="/assets/roadmap-content.80a1a387.png",Ku="/assets/awards-title.f460f7f0.png",ue="/assets/car-right.2f22f4ba.png",ee="/assets/judges-title.72eaf989.png",te="/assets/supports-title.fd53fe12.png",se="/assets/gc-girl-left.beeb0e13.png",ae="/assets/works-title.dd8e4836.png",oe="/assets/partners-title.7b176070.png",ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4wLWMwMDAgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDMtMTRUMTk6MTU6MzIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAzLTE0VDE5OjE2OjQyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTAzLTE0VDE5OjE2OjQyKzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5YjgyZDM0LWQ4NTYtNDVkOS04YmI4LWYxOWI5YzZhOWU5ZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QjYyN0Q3NEEzODUxMUVDQjRFQUYwQUM5NkE0REVCMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlCNjI3RDc0QTM4NTExRUNCNEVBRjBBQzk2QTRERUIxIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUI2MjdENzFBMzg1MTFFQ0I0RUFGMEFDOTZBNERFQjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUI2MjdENzJBMzg1MTFFQ0I0RUFGMEFDOTZBNERFQjEiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzliODJkMzQtZDg1Ni00NWQ5LThiYjgtZjE5YjljNmE5ZTllIiBzdEV2dDp3aGVuPSIyMDIyLTAzLTE0VDE5OjE2OjQyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FxSsbAAACHUlEQVQokX2Qy2pTURSGv73PNTm5Ge0FlNoqWCO2YMEbivgKCj6AoIMOfQHH4iM4FSuOBBFn4qQIFSp0oDYDxZbG2PakSU6SJjmXvR20trFWf1iT9d8WS8TLNfzZOYhjnOtnVlRla5QjmY/hh29X5fgQqqcQ7Tb2xdNL2m9MKcte4evaBAiM6VNI9qGNrBjzbk3aTli/AuhBzlpfnc6fRHiyMT7ImUAWqObvX8K9MwVK4hTAMpZo1HaE2VKW9EwRgojUcJrUZAH/dUUDwmw9X7yXvjbmubfPQ9mHvIeuJ9gTOdywS2Iq0qWj6HqEVkCYILMW3oRHD9bMZKN+w74wAq0+pGyIIvSajw4hN5UHIdA9hU4AsTthgll0UNXguDQyjqU221DMgG2j5z9DIwDbQkUaFSq00jvG3zAESZiAlNrANZ9d7gyTLuVhoYz+vgmZ1J+GAxCeQXthg8c/3wn56O1TO27FuvXwDXQDRCF9uGv377Jo0/vSoB86AEICESA7fU+3F5uIgonMGAhj/wQhBNKVyIJJt9xk632N3W9gDnTIYLmj+n5FZGaO4eQlwpU7zbEm6Wu2PzVpzv9AZuy99MEAABm2VOK/WpGpc0NYORO0Ju4qwmqHqBLsNf8rAMAw827YL9essOghHAtVayNt+Zd5L2Bk7u7BfcF/8KKjqgFqvYV9dlTHqw15UARw6BLYBsTLE9UwN3vzyX90/AIQudsRjRHpAQAAAABJRU5ErkJggg==";var tu=(u,e)=>{const a=u.__vccOpts||u;for(const[o,s]of e)a[o]=s;return a};const su=u=>(uu("data-v-cf68be22"),u=u(),eu(),u),re=["href"],ne={key:0,class:"work-mask"},ce={class:"work-mask-title"},le=su(()=>t("div",{class:"work-mask-divider"},null,-1)),de={class:"work-mask-author"},pe={key:1,class:"work-hits"},ve=su(()=>t("img",{src:ie},null,-1)),me=M({props:{work:{type:null,required:!0},isInHome:{type:Boolean,required:!0}},setup(u){return(e,a)=>(p(),m("a",{href:`http://f.gamecreator.com.cn/game.php?id=${u.work.gid}`,class:"work-item"},[t("div",{style:K(`background: url('${u.work.cover}?imageView2/1/w/320/h/180/interlace/1;')`),class:"work-cover"},[u.isInHome?(p(),m("div",ne,[t("div",ce,A(u.work.name),1),le,t("div",de,"\u4F5C\u8005\uFF1A"+A(u.work.author),1)])):(p(),m("div",pe,[ve,t("span",null,A(u.work.hit),1)]))],4),Q(t("div",{class:"work-name"},A(u.work.name),513),[[H,!u.isInHome]]),Q(t("div",{class:"work-author"},"\u4F5C\u8005\uFF1A"+A(u.work.author),513),[[H,!u.isInHome]])],8,re))}});var ge=tu(me,[["__scopeId","data-v-cf68be22"]]),Fe=[{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"},{avatar:"http://f.gamecreator.com.cn/uc_server/data/avatar/000/00/42/47_avatar_big.jpg",name:"\u67E0\u55B5",position:"\u4E0D\u662F\u6E38\u620F\u5DE5\u7A0B\u5E08"}];const k=u=>(uu("data-v-57509004"),u=u(),eu(),u),_e={class:"main-pic-and-info"},he={class:"info"},Ee=j('<div class="info-title" data-v-57509004><div class="" data-v-57509004></div><div class="info-title-background-text" data-v-57509004><img src="'+Ju+'" class="info-title-foreground-pic" data-v-57509004></div></div><div class="info-text" data-v-57509004> \u6E38\u620F\u521B\u4F5C\u5927\u8D5B\u662F\u7531GC\u5E73\u53F0\u4E3B\u529E\uFF0C\u65E8\u5728\u901A\u8FC7\u8BC4\u9009\u548C\u8868\u5F70\u4F18\u79C0\u6E38\u620F\u8BBE\u8BA1\u4F5C\u54C1\u53CA\u8BBE\u8BA1\u5E08\uFF0C\u6765\u4FC3\u8FDB\u5236\u4F5C\u8005\u521B\u4F5C\u66F4\u6E38 \u620F\u7684\u521B\u4F5C.\u53C2\u8D5B\u8005\u53EF\u4EE5\u4E3A\u4E2A\u4EBA\u6216\u56E2\u961F\u7EC4\u6210\uFF0C\u56E2\u961F\u7531\u961F\u957F\u62A5\u540D\u5373\u53EF\uFF0C\u53C2\u8D5B\u8005\u901A\u8FC7\u7F51\u7AD9\uFF0C\u7533\u8BF7\u62A5\u540D\u5E76 \u5B8C\u6574\u586B\u5199\u7533\u8BF7\u8868\u5373\u53EF\u5B8C\u6210\u62A5\u540D.\u53C2\u8D5B\u8005\u5FC5\u987B\u5728\u63D0\u4EA4\u9636\u6BB5\u622A\u81F3\u524D\u63D0\u4EA4\u4F5C\u54C1 </div>',2),fe=j('<div class="road-map" data-v-57509004><img src="'+Xu+'" class="road-map-title" data-v-57509004><img src="'+qu+'" class="road-map-content" data-v-57509004></div><div class="awards" data-v-57509004><img src="'+Ku+'" class="awards-title" data-v-57509004></div>',2),Ae={class:"judges-and-support"},Ce=k(()=>t("div",{class:"judges-and-support-header"},[t("img",{src:ue,class:"judges-and-support-header-car"})],-1)),De={class:"judges-and-support-body"},Be={class:"judges-and-support-body-content"},we={class:"judges"},ke=k(()=>t("img",{class:"judges-title",src:ee},null,-1)),Ie={class:"judges-container"},ye=["src"],be={class:"judge-item-name"},je={class:"judge-item-position"},Se=j('<div class="selection-criteria" data-v-57509004><div class="selection-criteria-content" data-v-57509004><span class="selection-criteria-content-title" data-v-57509004>\u8BC4\u9009\u6807\u51C6</span><div class="selection-criteria-content-item" data-v-57509004> 1.\u6240\u6709\u6E38\u620F\u5C06\u6309\u7F8E\u672F\uFF0C\u5267\u60C5\uFF0C\u97F3\u6548\u7531\u8BC4\u59D4\u6253\u5206\uFF0C\u5206\u6570\u4E3A1-10.\u6700\u7EC8\u5F97\u5206\u4E3A\u8BC4\u9009\u603B\u5206\u9664\u4EE5\u8BC4\u5BA1\u4EBA\u6570\uFF0C\u5F97\u5206\u6700\u9AD8\u8005\u51E0\u4F4D\u83B7\u5956\u4F5C\u54C1 </div><div class="selection-criteria-content-item" data-v-57509004> 2.\u6700\u4F73\u4F5C\u54C1\u5956\u7531\u4E09\u4E2A\u5956\u9879\u5E73\u5747\u5206\u76F8\u52A0\u6700\u9AD8\u8005\u83B7\u5F97\u3002 </div><div class="selection-criteria-content-item" data-v-57509004> 3.\u6700\u4F73\u4EBA\u6C14\u5956\u7531\u7528\u6237\u5728GC\u5143\u5B87\u5B99\u4E2D\u8FDB\u884C\u7968\u9009\uFF0C\u83B7\u5F97\u7968\u6570\u6700\u591A\u8005\u83B7\u5F97\u8BE5\u5956\u5956\u9879\u3002 </div><div class="selection-criteria-content-item" data-v-57509004> 4.\u6700\u7EC8\u7ED3\u679C\u4E5F\u5C06\u663E\u793A\u5E73\u5747\u5206\uFF0C\u4E0D\u5355\u72EC\u5217\u51FA\u6240\u6709\u8BC4\u5BA1\u5206\u6570\u3002 </div></div></div>',1),Re=j('<div class="support" data-v-57509004><img class="support-title" src="'+te+'" data-v-57509004><div class="support-items" data-v-57509004><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div><div class="support-item" data-v-57509004><div class="support-item-title" data-v-57509004> \u8D44\u6E90\u6276\u6301 </div><div class="support-item-text" data-v-57509004> \u5927\u8D5B\u671F\u95F4\u6211\u4EEC\u5C06\u514D\u8D39\u5F00\u653E \u6240\u6709\u6A21\u677F\u548C\u90E8\u5206\u7D20\u6750 </div></div></div></div>',1),Ne=k(()=>t("div",{class:"judges-and-support-footer"},[t("img",{src:se,class:"judges-and-support-footer-gc-girl"})],-1)),Le={class:"works-and-partners"},Ue={class:"works-and-partners-body"},Ge={class:"works"},Me=k(()=>t("img",{class:"works-title",src:ae},null,-1)),Te={key:0},Oe={class:"works-container"},Ze={class:"works-actions"},We=b(" \u66F4\u591A\u4F5C\u54C1\xA0\xA0> "),ze=k(()=>t("div",{class:"partners"},[t("img",{class:"partners-title",src:oe})],-1)),Ye=M({setup(u){const e=q(),{getTop9Works:a}=fu(e,["getTop9Works"]),o=w(!0),s=X();return(r,d)=>{const C=_("el-button");return p(),m("div",_e,[n("\u4ECB\u7ECD"),t("div",he,[Ee,n("\u53C2\u8D5B\u6309\u94AE"),t("img",{onClick:d[0]||(d[0]=v=>g(s).push("/signup")),class:"info-signup-btn",src:Pu,width:"248",height:"80"})]),fe,n("\u8BC4\u59D4\u548C\u652F\u6301"),t("div",Ae,[Ce,t("div",De,[t("div",Be,[n("\u4E13\u4E1A\u8BC4\u59D4"),t("div",we,[ke,t("div",Ie,[(p(!0),m(G,null,$(g(Fe),v=>(p(),m("div",{class:"judge-item",key:v.name},[t("img",{src:v.avatar,class:"judge-item-avatar"},null,8,ye),t("span",be,A(v.name),1),t("span",je,A(v.position),1)]))),128))]),Se]),n("\u5927\u8D5B\u652F\u6301"),Re])]),Ne]),n("\u4F5C\u54C1\u548C\u5408\u4F5C\u4F19\u4F34"),t("div",Le,[t("div",Ue,[t("div",Ge,[Me,o.value?(p(),m("div",Te," \u7531\u4E8E\u4ECA\u5E74\u7684\u5927\u8D5B\u8FD8\u6CA1\u5F00\u59CB\uFF0C\u6D4B\u8BD5\u9875\u5C55\u793A\u7684\u662F\u53BB\u5E74\u7684\u70B9\u51FB\u91CF\u6392\u540D\u524D9\u4E2A\u53C2\u8D5B\u4F5C\u54C1 ")):n("v-if",!0),t("div",Oe,[(p(!0),m(G,null,$(g(a),v=>(p(),Au(ge,{"is-in-home":!0,key:v.gid,work:v,class:"work-item"},null,8,["work"]))),128))]),t("div",Ze,[F(C,{class:"works-more",onClick:d[1]||(d[1]=v=>g(s).push("/works"))},{default:h(()=>[We]),_:1})]),ze])])])])}}});var Ve=tu(Ye,[["__scopeId","data-v-57509004"]]);const xe=[{name:"index",path:"/",component:Ve,props:!0},{name:"signup",path:"/signup",component:()=>P(()=>import("./signup.06186c09.js"),["assets/signup.06186c09.js","assets/signup.41e97361.css","assets/vendor.98726fec.js"]),props:!0},{name:"works",path:"/works",component:()=>P(()=>import("./works.170f8ee1.js"),["assets/works.170f8ee1.js","assets/works.9f46e932.css","assets/vendor.98726fec.js"]),props:!0}];const Qe={setToken(u,e){u.token=e},setSignupInfo(u,e){u.signupInfo=e},setUserId(u,e){u.uid=e},setShowLoginDialog(u,e){u.showingLoginDialog=e},setWorks(u,e){u.works=e}},He={getTop9Works(u,e){return u.works.slice(0,9)}},$e=Cu({state:{showingLoginDialog:!1,works:[]},mutations:Qe,getters:He}),Je=Du({routes:xe,history:Bu()});wu(Qu).use(Je).use($e).use(ku).mount("#app");export{U as A,tu as _,ge as w};
