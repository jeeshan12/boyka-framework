"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[950],{8570:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>m});var n=i(79);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(i),u=o,m=p["".concat(s,".").concat(u)]||p[u]||v[u]||r;return i?n.createElement(m,a(a({ref:t},l),{},{components:i})):n.createElement(m,a({ref:t},l))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var d=2;d<r;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3823:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(5907),o=(i(79),i(8570));const r={title:"DeviceActions",sidebar_position:2},a=void 0,c={unversionedId:"actions/device/device-actions",id:"actions/device/device-actions",title:"DeviceActions",description:"Static methods",source:"@site/docs/api/actions/device/device-actions.md",sourceDirName:"actions/device",slug:"/actions/device/device-actions",permalink:"/boyka-framework/api/actions/device/device-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/device/device-actions.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1694450833,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:2,frontMatter:{title:"DeviceActions",sidebar_position:2},sidebar:"api",previous:{title:"AndroidDeviceActions",permalink:"/boyka-framework/api/actions/device/android-device-actions"},next:{title:"AlertActions",permalink:"/boyka-framework/api/actions/drivers/alert-actions"}},s={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onDevice</code>",id:"on-device",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>isKeyboardVisible</code>",id:"is-keyboard-visible",level:3},{value:"<code>hideKeyboard</code>",id:"hide-keyboard",level:3}],l={toc:d},p="wrapper";function v(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"static-methods"},"Static methods"),(0,o.kt)("h3",{id:"on-device"},(0,o.kt)("inlineCode",{parentName:"h3"},"onDevice")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"IDeviceActions")," which will expose different methods to handle different device specific actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"IDeviceActions deviceActions = DeviceActions.onDevice ();\n")),(0,o.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,o.kt)("h3",{id:"is-keyboard-visible"},(0,o.kt)("inlineCode",{parentName:"h3"},"isKeyboardVisible")),(0,o.kt)("p",null,"This method is used to determine if the Mobile keyboard is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.device.DeviceActions.onDevice;\n. . .\nvar isKeyboardDisplayed = onDevice ().isKeyboardVisible ();\n")),(0,o.kt)("h3",{id:"hide-keyboard"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideKeyboard")),(0,o.kt)("p",null,"This method is used to hide the keyboard on the mobile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.device.DeviceActions.onDevice;\n. . .\nonDevice ().hideKeyboard ();\n")))}v.isMDXComponent=!0}}]);