"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{373:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var r=i(5721),a=i(4817),n=i(5731),o=i(2238),s="features_ez_S",l="featureSvg_bdXF",c=i(9797),m=function(e){var t=e.title,i=e.image;return r.createElement("div",{className:"text--center"},r.createElement("img",{className:l,alt:t,src:(0,c.Z)(i)}))},u=function(e){var t=e.title,i=e.description;return r.createElement("div",{className:"text--center padding-horiz--md"},r.createElement("h2",null,t),r.createElement("p",null,i))},d=function(e){var t=e.title,i=e.image,a=e.description;return r.createElement("div",{className:(0,o.Z)("col col--4")},r.createElement(m,{title:t,image:i}),r.createElement(u,{title:t,description:a}))},g=function(e){var t=e.features;return r.createElement("section",{className:s},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement(d,(0,n.Z)({key:t},e))})))))},p=JSON.parse('{"BH":"/img/boyka-banner.png","TN":"","WL":"Ultimate Test Automation framework for Web, API, Android and iOS automation testing","ZY":[{"id":1,"text":"Get Started","type":"button--primary","href":"/docs/intro","target":"_self"},{"id":2,"text":"View on GitHub","type":"button--info","href":"https://github.com/WasiqBhamla/boyka-framework","target":"_self"},{"id":3,"text":"Join us on Discord","type":"button--info","href":"https://discord.gg/dUg8K9DAsR","target":"_blank"}],"tr":[{"id":1,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Star"},{"id":2,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Watch"},{"id":3,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Fork"}],"R2":[{"title":"Zero boilerplate code","image":"img/home/no-code.svg","description":"Exposes ready to use static methods to perform various actions on web, mobile and API platforms, thus reducing the need to write any boilerplate codes."},{"title":"Configurable","image":"img/home/configurable.svg","description":"Highly configurable via JSON files and environment variables. It is easy to extend and customize the framework."},{"title":"API Testing","image":"img/home/api-testing.svg","description":"Supports API testing with simple and easy to write test cases."},{"title":"Web Testing","image":"img/home/web-testing.svg","description":"Supports Web testing with Chrome, Firefox, Edge and Safari browsers."},{"title":"Cloud Support","image":"img/home/cloud-support.svg","description":"Provides facility to run tests on Cloud platforms like BrowserStack."},{"title":"Parallel execution","image":"img/home/parallel.svg","description":"Allows parallel and sequential execution of tests using any testing framework."},{"title":"Logging events","image":"img/home/logging.svg","description":"Provides logging support using Log4J2 to log all events occurred during test execution."},{"title":"Inbuilt verification","image":"img/home/inline-check.svg","description":"Provides inbuilt verification for inline assertion of element properties and API responses."},{"title":"Response schema verification","image":"img/home/schema-validation.svg","description":"Provides API response schema verification for Rest APIs."}]}'),f="HeroContainer_v2Am",v="HeroContent_wUuq",h="HeroTitle_d7d0",b="HeroDescription_Bq3r",E="CallToActions_tDGG",k="ctaButtons_Nl6G",y="SocialButtons_sdl9",w=i(3669),N=function(e){var t=e.userId,i=e.repoName,a=void 0===i?void 0:i,n=e.type,o=void 0===n?"Follow":n,s=""+t,l=""+o,c=""+o;return"Follow"!==o&&a&&(l+=" "+(s+="/"+a)),"Watch"===o?s+="/subscription":"Fork"===o?s+="/fork":"Follow"===o&&(c+=" @"+t),r.createElement(w.Z,{href:"https://github.com/"+s,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":l+" on GitHub"},c)},I=i(8935),_=function(e){var t=e.href,i=e.type,a=e.target,n=e.text;return r.createElement(I.Z,{className:(0,o.Z)("button",i),to:t,target:a},n)},x=i(8157),B=i.n(x),A=function(e){var t=e.title,i=e.tagLine;return r.createElement("div",{className:v},r.createElement("h1",{className:h},t),r.createElement(B(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1}},r.createElement("p",{className:b},i)))},S=function(e){var t=e.buttons;return r.createElement("div",{className:k},t&&t.map((function(e){return r.createElement(_,{key:e.id,href:(0,c.Z)(e.href),text:e.text,type:e.type,target:e.target})})))},W=function(e){var t=e.gitButtons;return r.createElement("div",{className:y},t&&t.map((function(e){return r.createElement(N,{key:e.id,id:e.id,userId:e.userId,repoName:e.repoName,type:e.type})})))},P=function(e){var t=e.title,i=e.tagLine,a=e.image,n=e.buttons,o=void 0===n?[]:n,s=e.gitButtons,l=void 0===s?[]:s;return r.createElement("section",{className:f,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(0,c.Z)(a)+")"}},r.createElement(A,{title:t,tagLine:i}),r.createElement("div",{className:E},r.createElement(S,{buttons:o}),r.createElement(W,{gitButtons:l})))},Z=function(){return r.createElement(a.Z,{title:p.TN,description:p.WL},r.createElement("main",null,r.createElement(P,{title:p.TN,tagLine:p.WL,image:p.BH,buttons:p.ZY,gitButtons:p.tr}),r.createElement(g,{features:p.R2})))}}}]);