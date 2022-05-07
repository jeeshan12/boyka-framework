"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[145],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7612);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=i,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return f}});var r=n(3830),i=n(2056),o=(n(7612),n(167)),a=["components"],s={title:"Setup Configuration file",sidebar_position:1},c=void 0,u={unversionedId:"guides/api/setup-config",id:"guides/api/setup-config",title:"Setup Configuration file",description:"We can set multiple configurations in the configuration file with different key name for different end points.",source:"@site/docs/framework-docs/guides/api/setup-config.md",sourceDirName:"guides/api",slug:"/guides/api/setup-config",permalink:"/boyka-java/docs/guides/api/setup-config",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-java/edit/main/website/docs/framework-docs/guides/api/setup-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1651917438,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:1,frontMatter:{title:"Setup Configuration file",sidebar_position:1},sidebar:"docs",previous:{title:"API",permalink:"/boyka-java/docs/category/api"},next:{title:"Compose Request",permalink:"/boyka-java/docs/guides/api/compose-request"}},p={},f=[],l={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can set multiple configurations in the configuration file with different key name for different end points."),(0,o.kt)("p",null,"Let's see how to set configuration in the configuration file for API end-points."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',title:'"src/test/resources/boyka-config.json"'},'{\n  "ui": {\n    ...\n  },\n  "api": {\n    "test_reqres": {\n      "base_uri": "https://reqres.in",\n      "base_path": "/api",\n      "read_timeout": 2,\n      "write_timeout": 2,\n      "connection_timeout": 1,\n      "logging": {\n        "request": true,\n        "response": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about API configurations, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/configuration#api-config"},"API configuration guide"),"."))))}d.isMDXComponent=!0}}]);