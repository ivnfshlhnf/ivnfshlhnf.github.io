import{r as S,o as a,c as g,a as k,d as p,b as V,e as h,f as e,t as d,u,F as m,g as t,h as C,i as I,w as b,j as v,k as N,l as j,m as E,n as F}from"./vendor.e44cce33.js";const A=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};A();var $=(n,s)=>{const i=n.__vccOpts||n;for(const[l,o]of s)i[l]=o;return i};const P={};function H(n,s){const i=S("router-view");return a(),g(i)}var L=$(P,[["render",H]]),_;(function(n){n.INCREMENT="INCREMENT"})(_||(_={}));const R={[_.INCREMENT](n,s=1){n.count+=s}};var y;(function(n){n.initApp="initApp"})(y||(y={}));const D={[y.initApp]({state:n,commit:s,dispatch:i}){console.log("app inited!")}},O={isReady(n){return!n.isInitialized}},B="1.11.0",M={debug:!1,version:B,isInitialized:!1,count:0},w=k({state:M,getters:O,mutations:R,actions:D});function W(){return w}const G={class:"!mt-0"},U=e("p",null,[t("Edit "),e("code",null,"components/HelloWorld.vue"),t(" to test hot module replacement.")],-1),x=p({props:{msg:null,optionalProp:null},setup(n){const s=n,i=W(),l=V(()=>i.state.count);function o(){i.commit(_.INCREMENT,1)}return(r,c)=>(a(),h(m,null,[e("h2",G,d(s.msg),1),e("button",{class:"px-3 py-2 bg-white border border-gray-300 rounded-md shadow",onClick:o}," count is: "+d(u(l)),1),U],64))}}),z={class:"container px-4 mx-auto mt-6 prose-sm md:px-6 md:prose"},J=e("p",{class:"pb-4 text-xl leading-relaxed tracking-wide text-gray-700"}," Opinionated, production ready template for Vite and Vue 3 ",-1),Y=e("div",{class:"github-ribbon",style:{position:"absolute",right:"0px",top:"0px",width:"150px",height:"150px",overflow:"hidden","z-index":"99999"}},[e("a",{style:{display:"inline-block",width:"200px",overflow:"hidden",padding:"6px 0px","text-align":"center",transform:"rotate(45deg)","text-decoration":"none",color:"rgb(255, 255, 255)",position:"inherit",top:"45px",right:"-40px","border-width":"1px 0px","border-style":"dotted","border-color":"rgba(255, 255, 255, 0.7)",font:"700 13px 'Helvetica Neue', Helvetica, Arial, sans-serif","box-shadow":"rgba(0, 0, 0, 0.5) 0px 2px 3px 0px","background-color":"rgb(170, 0, 0)"},href:"https://github.com/Uninen/vite-ts-tailwind-starter"},"Fork me on GitHub")],-1),q={class:"container mx-auto"},K={class:"p-4 mx-auto prose bg-white md:px-6 prose-indigo sm:rounded-md"},X={class:"container py-6 mx-auto text-sm text-center text-gray-700"},Q=t(" Vite-ts-tailwind-starter by "),Z=e("a",{class:"underline",href:"https://twitter.com/uninen"},"@Uninen",-1),ee=t(" Development mode. "),T=p({props:{title:null},setup(n){const s=n;C({bodyAttrs:{title:s.title},meta:[{property:"og:title",content:s.title},{name:"twitter:title",content:s.title}]});const i="1.11.0",l=new Date(Number("1643098705822")),o=new Date().getFullYear();return(r,c)=>(a(),h(m,null,[e("header",z,[e("h1",null,"Vite + Vue 3 + TypeScript + Tailwind + Cypress Starter Template v"+d(u(i)),1),J,Y]),e("main",q,[e("div",K,[I(r.$slots,"default")])]),e("footer",X,[e("p",null,[Q,Z,t(" \xA9 2020-"+d(u(o))+". ",1),u(l)?(a(),h(m,{key:0},[t(" Site built "+d(u(l).toLocaleDateString())+". ",1)],64)):(a(),h(m,{key:1},[ee],64))])])],64))}}),te=p({setup(n){return(s,i)=>(a(),g(T,null,{default:b(()=>[v(x,{msg:"haha"})]),_:1}))}});var oe="/assets/editor_screenshot.8801cdf3.png";const ne=e("h2",null,"Template Project Features",-1),se=e("img",{src:oe,alt:""},null,-1),ie=e("p",null," The idea of this template is to bundle as many often used and useful features pre-configured as possible. If you don't need something, just remove it! ",-1),re=e("ul",null,[e("li",null,"Fully typed Vuex store"),e("li",null,"Routing using vue-router"),e("li",null,"TailwindCSS w/ JIT-mode, purge, and plugins pre-configured"),e("li",null,"Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking"),e("li",null,[t("Alias "),e("code",null,"@"),t(" to "),e("code",null,"project_root/src")]),e("li",null,"Predefined and typed global variables"),e("li",null,"Cypress.io e2e and component tests preconfigured (similarly to vue-cli)"),e("li",null," Github Workflows and Gitlab CI preconfigured to run e2e and component tests automatically on every push ")],-1),le=e("h2",null,"Project setup and usage",-1),ae=e("p",null,[t(" Using "),e("a",{href:"https://github.com/johnsoncodehk/volar"},"Volar extension for VSCode"),t(" is recommended to take full advance of the new script setup sugar and full TypeScript support in Vue SFC templates. (This is totally optional but recommended as it results much better DX!) See "),e("a",{href:"https://v3.vuejs.org/api/sfc-tooling.html#ide-support"},"official IDE Support documentation"),t(" for more details. ")],-1),ce=e("h4",null,"Install dependencies",-1),de=e("pre",null,"yarn",-1),ue=e("h4",null,"Run development server",-1),pe=e("pre",null,"yarn dev",-1),he=e("h4",null,"Open Cypress test runner",-1),me=e("p",{class:"text-gray-500"}," Note: the development server needs to be running when using the Cypress test runner. ",-1),_e=e("pre",null,"yarn test",-1),fe=e("h4",null,"Build for production",-1),ge=e("pre",null,"yarn build",-1),ye=e("h4",null,"Other",-1),be=e("p",null,[t("See "),e("code",null,"package.json"),t(" for all available commands.")],-1),ve=e("h2",null,"Notes and further documentation",-1),we=e("h3",null,"Typed Vuex Actions",-1),xe=e("p",null," If you need more than one parameter in the typed Vuex actions, use `payload` object instead of multiple parameters. For example: ",-1),Te=e("pre",null,`[Action.updateItem](
  { commit }: AugmentedActionContext,
  payload: {
    id: string
    obj: Partial<MyItem>
  }
): Promise<void>`,-1),Se=e("h3",null,"Typed ENV Variables",-1),ke=e("p",null,[t(" Vite exposes a special "),e("code",null,"meta.env"),t(" object for ENV variables (see "),e("a",{href:"https://vitejs.dev/guide/env-and-mode.html"},"official docs"),t("). This template extends that object and adds custom typed variables which you can easily use and modify to your needs. ")],-1),Ve=e("p",null,[t(" See "),e("code",null,"vite.config.js"),t(" and "),e("code",null,"src/env.d.ts"),t(" for the configuration and "),e("code",null,"src/pages/BaseTemplate.vue"),t(" for usage example. ")],-1),Ce=e("h3",null,"Custom `firefox` variant for Tailwind",-1),Ie=e("p",null,[t(" FireFox is important browser to the open Web. One of the very few things it still doesn't do is "),e("a",{href:"https://caniuse.com/css-backdrop-filter"},[e("em",null,"backdrop-filter"),t(" CSS property")]),t(". The included "),e("code",null,"tailwind.config.js"),t(" has a custom plugin that allows you to use a "),e("strong",null,"'firefox' variant"),t(" in your Tailwind markup to target FireFox. The setup uses Tailwind JIT mode and PurgeCSS so this doesn't add any weight to your CSS if you don't use it. But, it's there if you happen to need it! ")],-1),Ne=e("p",null,"Here's an example markup for a div that has a different background opacity for FireFox:",-1),je=e("pre",null,`<div class="bg-black bg-opacity-20 firefox:bg-opacity-80 backdrop-filter backdrop-blur-lg">
    Foo
</div>`,-1),Ee=e("h3",null,"Code Coverage",-1),Fe=e("p",null," TL;DR: due to Vite and esbuild design decisions and ongoing work in this area, code coverage is not yet added to this template. ",-1),Ae=e("p",null,[t(" I have a fully configured Vue 3 + TypeScript + Cypress + Coverage reporting + GitLab and GitHub CI `vue-cli` template project available at "),e("a",{href:"https://gitlab.com/uninen/vue-cli-template"},"https://gitlab.com/uninen/vue-cli-template"),t(". That's a real world example of proper coverage configuration that works automatically in CI. But. This setup doesn't work with Vite. ")],-1),$e=e("p",null,[t(" Typical Vite pipelines doesn't use babel at all which is needed above for automatically instrument the transpilated code. Vite is powered by eslint which has decided "),e("a",{href:"https://github.com/evanw/esbuild/issues/184"}," code coverage being out of scope "),t(". There's a "),e("a",{href:"https://github.com/vitejs/vite/issues/1955"}," ticket tracking proper Jest integration w/ Vite "),t(" which would probably sort code coverage as well. For now, you should either build whatever custom pipeline you need manually. If you have a smart solution for this, PRs welcome! ")],-1),Pe=e("h2",null,"Elsewhere",-1),He=e("ul",null,[e("li",null,[t("Follow "),e("a",{href:"https://twitter.com/uninen"},"@Uninen on Twitter")]),e("li",null,[t(" Lots of continuously updating learnings from Vite / Vue / TypeScript and other Web development topics on my "),e("a",{href:"https://til.unessa.net/"},"Today I Learned"),t(" site ")])],-1),Le=e("h2",null,"Contributing",-1),Re=e("p",null,[t(" Contributions are welcome! Please follow "),e("a",{href:"https://www.contributor-covenant.org/version/2/0/code_of_conduct/"}," the code of conduct "),t(" when interacting with others. ")],-1),De=p({setup(n){return(s,i)=>(a(),g(T,{title:"Vite-TS-Tailwind Starter"},{default:b(()=>[v(x,{msg:"Hello World Component"}),ne,se,ie,re,le,ae,ce,de,ue,pe,he,me,_e,fe,ge,ye,be,ve,we,xe,Te,Se,ke,Ve,Ce,Ie,Ne,je,Ee,Fe,Ae,$e,Pe,He,Le,Re]),_:1}))}}),Oe=[{path:"/",component:te,meta:{title:"Hello!"}},{path:"/guide",component:De,meta:{title:"Vite + Vue + TypeScript + Tailwind Starter Template"}}],Be=N({history:j(),routes:Oe});const Me=E(),f=F(L);f.use(w);f.use(Be);f.use(Me);f.mount("#app");
