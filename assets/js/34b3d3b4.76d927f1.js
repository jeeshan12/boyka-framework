"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5578],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(5907),i=(n(79),n(8570));const o={title:"IApiActionsListener",sidebar_position:1},a=void 0,s={unversionedId:"actions/interfaces/listeners/api/api-actions-listener",id:"actions/interfaces/listeners/api/api-actions-listener",title:"IApiActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/api/api-actions-listener.md",sourceDirName:"actions/interfaces/listeners/api",slug:"/actions/interfaces/listeners/api/api-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/api/api-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/api/api-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1694450833,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:1,frontMatter:{title:"IApiActionsListener",sidebar_position:1},sidebar:"api",previous:{title:"TextBoxActions",permalink:"/boyka-framework/api/actions/elements/textbox-actions"},next:{title:"IAndroidDeviceActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/device/android-device-actions-listener"}},c={},l=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onExecute</code>",id:"on-execute",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when the request gets executed, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-execute"},(0,i.kt)("inlineCode",{parentName:"h2"},"onExecute")),(0,i.kt)("p",null,"This method will get executed after the request has been executed. This method will get the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," object which will contain all the details of the response and the request which was executed."))}d.isMDXComponent=!0}}]);