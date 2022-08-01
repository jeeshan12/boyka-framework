"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3311],{167:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var i=r(5721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),v=n,y=u["".concat(c,".").concat(v)]||u[v]||f[v]||a;return r?i.createElement(y,o(o({ref:t},p),{},{components:r})):i.createElement(y,o({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var i=r(744),n=r(4690),a=(r(5721),r(167)),o=["components"],s={title:"VerifyDriverActions",sidebar_position:6},c=void 0,l={unversionedId:"actions/verify-driver-actions",id:"actions/verify-driver-actions",title:"VerifyDriverActions",description:"verifyAcceptAlert",source:"@site/docs/api/actions/verify-driver-actions.md",sourceDirName:"actions",slug:"/actions/verify-driver-actions",permalink:"/boyka-framework/api/actions/verify-driver-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/verify-driver-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1659342196,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:6,frontMatter:{title:"VerifyDriverActions",sidebar_position:6},sidebar:"api",previous:{title:"MouseActions",permalink:"/boyka-framework/api/actions/mouse-actions"},next:{title:"VerifyDropDownActions",permalink:"/boyka-framework/api/actions/verify-drop-down-actions"}},p={},f=[{value:"<code>verifyAcceptAlert</code>",id:"verify-accept-alert",level:2},{value:"<code>verifyAcceptAlert (text)</code>",id:"verify-accept-alert-text",level:2},{value:"<code>verifyBrowserTitle</code>",id:"verify-browser-title",level:2},{value:"<code>verifyBrowserUrl</code>",id:"verify-browser-url",level:2},{value:"<code>verifyDismissAlert</code>",id:"verify-dismiss-alert",level:2}],u={toc:f};function v(e){var t=e.components,r=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"verify-accept-alert"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyAcceptAlert")),(0,a.kt)("p",null,"This method is used to verify the alert message after accepting the alert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyAcceptAlert;\n. . .\nverifyAcceptAlert ().isEqualTo ("Swag Labs");\n')),(0,a.kt)("h2",{id:"verify-accept-alert-text"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyAcceptAlert (text)")),(0,a.kt)("p",null,"This method is used to verify the alert message after entering the text in the prompt and accepting it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyAcceptAlert;\n. . .\nverifyAcceptAlert ("Sample text").isEqualTo ("Swag Labs");\n')),(0,a.kt)("h2",{id:"verify-browser-title"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyBrowserTitle")),(0,a.kt)("p",null,"This method is used to verify the browser title."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserTitle;\n. . .\nverifyBrowserTitle (title).isEqualTo ("Swag Labs");\n')),(0,a.kt)("h2",{id:"verify-browser-url"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyBrowserUrl")),(0,a.kt)("p",null,"This method is used to verify the browser url."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserUrl;\n. . .\nverifyBrowserUrl (url).isEqualTo ("https://www.swaglabs.com/");\n')),(0,a.kt)("h2",{id:"verify-dismiss-alert"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyDismissAlert")),(0,a.kt)("p",null,"This method is used to verify the alert message after dismissing the alert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyDismissAlert;\n. . .\nverifyDismissAlert ().isEqualTo ("Swag Labs");\n')))}v.isMDXComponent=!0}}]);