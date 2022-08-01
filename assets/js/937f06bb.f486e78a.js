"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8011],{167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5405:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(744),o=n(4690),i=(n(5721),n(167)),r=["components"],l={title:"ElementActions",sidebar_position:3},c=void 0,s={unversionedId:"actions/element-actions",id:"actions/element-actions",title:"ElementActions",description:"attributeOf (locator, attribute)",source:"@site/docs/api/actions/element-actions.md",sourceDirName:"actions",slug:"/actions/element-actions",permalink:"/boyka-framework/api/actions/element-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/element-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1659342196,formattedLastUpdatedAt:"Aug 1, 2022",sidebarPosition:3,frontMatter:{title:"ElementActions",sidebar_position:3},sidebar:"api",previous:{title:"DropDownActions",permalink:"/boyka-framework/api/actions/drop-down-actions"},next:{title:"KeyboardActions",permalink:"/boyka-framework/api/actions/keyboard-actions"}},u={},d=[{value:"<code>attributeOf (locator, attribute)</code>",id:"attribute-of",level:2},{value:"<code>clear (locator)</code>",id:"clear",level:2},{value:"<code>isDisplayed (locator)</code>",id:"isDisplayed",level:2},{value:"<code>isEnabled (locator)</code>",id:"isEnabled",level:2},{value:"<code>isSelected (locator)</code>",id:"isSelected",level:2},{value:"<code>styleOf (locator, attribute)</code>",id:"styleOf",level:2},{value:"<code>submit (locator)</code>",id:"submit",level:2},{value:"<code>textOf (locator)</code>",id:"textOf",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"attribute-of"},(0,i.kt)("inlineCode",{parentName:"h2"},"attributeOf (locator, attribute)")),(0,i.kt)("p",null,"This method is used to get the attribute of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.ElementActions.attributeOf;\n. . .\nString attribute = attributeOf ("href");\n')),(0,i.kt)("h2",{id:"clear"},(0,i.kt)("inlineCode",{parentName:"h2"},"clear (locator)")),(0,i.kt)("p",null,"This method is used to clear the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.clear;\n. . .\nclear (locator);\n")),(0,i.kt)("h2",{id:"isDisplayed"},(0,i.kt)("inlineCode",{parentName:"h2"},"isDisplayed (locator)")),(0,i.kt)("p",null,"This method is used to check whether the given element is displayed or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isDisplayed;\n. . .\nboolean displayed = isDisplayed (locator);\n")),(0,i.kt)("h2",{id:"isEnabled"},(0,i.kt)("inlineCode",{parentName:"h2"},"isEnabled (locator)")),(0,i.kt)("p",null,"This method is used to check whether the given element is enabled or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isEnabled;\n. . .\nboolean enabled = isEnabled (locator);\n")),(0,i.kt)("h2",{id:"isSelected"},(0,i.kt)("inlineCode",{parentName:"h2"},"isSelected (locator)")),(0,i.kt)("p",null,"This method is used to check whether the given element is selected or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.isSelected;\n. . .\nboolean selected = isSelected (locator);\n")),(0,i.kt)("h2",{id:"styleOf"},(0,i.kt)("inlineCode",{parentName:"h2"},"styleOf (locator, attribute)")),(0,i.kt)("p",null,"This method will return the style of the given element for the given attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.ElementActions.styleOf;\n. . .\nString backgroundColor = styleOf (locator, "background-color");\n')),(0,i.kt)("h2",{id:"submit"},(0,i.kt)("inlineCode",{parentName:"h2"},"submit (locator)")),(0,i.kt)("p",null,"This method is used to submit the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.submit;\n. . .\nsubmit (locator);\n")),(0,i.kt)("h2",{id:"textOf"},(0,i.kt)("inlineCode",{parentName:"h2"},"textOf (locator)")),(0,i.kt)("p",null,"This method is used to get the text of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.ElementActions.textOf;\n. . .\nString text = textOf (locator));\n")))}m.isMDXComponent=!0}}]);