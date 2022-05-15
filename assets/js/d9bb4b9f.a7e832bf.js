"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6111],{167:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7612);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3695:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(3830),a=t(2056),i=(t(7612),t(167)),o=["components"],c={title:"DriverManager",sidebar_position:7},l=void 0,s={unversionedId:"web/driver-manager",id:"web/driver-manager",title:"DriverManager",description:"closeDriver",source:"@site/docs/api/web/driver-manager.md",sourceDirName:"web",slug:"/web/driver-manager",permalink:"/boyka-framework/api/web/driver-manager",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/web/driver-manager.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1652633957,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:7,frontMatter:{title:"DriverManager",sidebar_position:7},sidebar:"api",previous:{title:"VerifyElementActions",permalink:"/boyka-framework/api/web/verify-element-actions"},next:{title:"JsonParser",permalink:"/boyka-framework/api/web/json-parser"}},p={},u=[{value:"<code>closeDriver</code>",id:"closedriver",level:2},{value:"<code>createDriver</code>",id:"createdriver",level:2}],d={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"closedriver"},(0,i.kt)("inlineCode",{parentName:"h2"},"closeDriver")),(0,i.kt)("p",null,"This method is used to close the driver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.DriverActions.closeDriver;\n. . .\ncloseDriver ();\n")),(0,i.kt)("h2",{id:"createdriver"},(0,i.kt)("inlineCode",{parentName:"h2"},"createDriver")),(0,i.kt)("p",null,"This method is used to create the driver for given application type and config key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.DriverActions.createDriver;\n. . .\ncreateDriver (ApplicationType.WEB, "config-key");\n')))}m.isMDXComponent=!0}}]);