"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[243],{167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(744),a=n(4690),i=(n(5721),n(167)),o=["components"],s={sidebar_position:3,title:"\ud83d\udd2b Execute Request"},p=void 0,l={unversionedId:"guides/api/execute-request",id:"guides/api/execute-request",title:"\ud83d\udd2b Execute Request",description:"Once you have composed your API request, you can execute it using class ApiManager and method execute.",source:"@site/docs/framework-docs/guides/api/execute-request.md",sourceDirName:"guides/api",slug:"/guides/api/execute-request",permalink:"/boyka-framework/docs/guides/api/execute-request",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/guides/api/execute-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1659355595,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd2b Execute Request"},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Compose Request",permalink:"/boyka-framework/docs/guides/api/compose-request"},next:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"}},u={},c=[{value:"Example",id:"example",level:2},{value:"API Response class",id:"api-response-class",level:2},{value:"Verification methods",id:"verification-methods",level:3},{value:"Methods to get response data",id:"methods-to-get-response-data",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you have composed your API request, you can execute it using class ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiManager")," and method ",(0,i.kt)("inlineCode",{parentName:"p"},"execute"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,i.kt)("a",{parentName:"p",href:"/api/api/api-manager"},"ApiManager"),".")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Using request created in previous example.\nfinal ApiResponse response = ApiManager.execute (request);\n")),(0,i.kt)("h2",{id:"api-response-class"},"API Response class"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method will return ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class object which contains methods to verify the response body and status code."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,i.kt)("a",{parentName:"p",href:"/api/builders/api-response"},"ApiResponse"),".")),(0,i.kt)("h3",{id:"verification-methods"},"Verification methods"),(0,i.kt)("p",null,"Following are the methods exposed in ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to verify the response body and status code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyBooleanField"),": Verifies the boolean field in response body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyHeader"),": Verifies the header in response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyIntField"),": Verifies the integer field in response body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifySchema"),": Verifies the response body against the given schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyStatusCode"),": Verifies the status code of response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyStatusMessage"),": Verifies the status message of response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyTextField"),": Verifies the text field in response body.")),(0,i.kt)("h3",{id:"methods-to-get-response-data"},"Methods to get response data"),(0,i.kt)("p",null,"Following are the methods exposed in ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to get response data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getResponseData (expression)"),": Returns the response data as String."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getResponseData (expression, type)"),": Returns the response data as per the specified class type.")))}m.isMDXComponent=!0}}]);