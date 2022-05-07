"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{6211:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3830),r=n(7612),i=n(705),l=n(8086),c=n(40),s={breadcrumbsContainer:"breadcrumbsContainer_G5g_",breadcrumbHomeIcon:"breadcrumbHomeIcon_VYUB"},o=n(2238),m=n(8348),d=n(9864),u=n(3653);function v(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function b(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(m.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function h(e){var t=e.children,n=e.active,i=e.index,l=e.addMicrodata;return r.createElement("li",(0,a.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(m.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,o.Z)("breadcrumbs__link",s.breadcrumbsItemLink),href:e},r.createElement(v,{className:s.breadcrumbHomeIcon})))}function f(){var e=(0,i.s1)(),t=(0,l.Ns)();return e?r.createElement("nav",{className:(0,o.Z)(c.k.docs.docBreadcrumbs,s.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(g,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},9683:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(7612),r=n(7712),i=n(705),l=n(2238),c=n(8348),s="cardContainer_gJsy",o="cardTitle_vXwv",m="cardDescription_bGAX",d=n(985),u=n(3653);function v(e){var t=e.href,n=e.children;return a.createElement(c.Z,{href:t,className:(0,l.Z)("card padding--lg",s)},n)}function b(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(v,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",o),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",m),title:i},i))}function h(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,r=(0,d.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(b,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,l.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{key:t,item:e}))})))}var E=n(8408),Z=n(3141),N=n(2645),k=n(6211),L=n(280),_=n(9864),y="generatedIndexPage_uwi8",T="list_vVHT",w="title_UCLA";function x(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,_.Z)(t.image)})}function I(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,_.Z)(t.image)}),a.createElement("div",{className:y},a.createElement(Z.Z,null),a.createElement(k.Z,null),a.createElement(N.Z,null),a.createElement("header",null,a.createElement(L.Z,{as:"h1",className:w},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(p,{items:n.items,className:T})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(E.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function C(e){return a.createElement(a.Fragment,null,a.createElement(x,e),a.createElement(I,e))}},8408:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3830),r=n(7612),i=n(3653),l=n(6997);function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},2645:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7612),r=n(3653),i=n(2638),l=n(40),c=n(2238);function s(e){var t=e.className,n=(0,i.E)();return n.badge?a.createElement("span",{className:(0,c.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3141:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7612),r=n(7316),i=n(8348),l=n(3653),c=n(7357),s=n(4174),o=n(40),m=n(2638),d=n(2238);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,u=(0,s.J)(m).savePreferredVersionName,h=(0,c.Jo)(m),g=h.latestDocSuggestion,f=h.latestVersionSuggestion,p=null!=g?g:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,d.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:f.label,to:p.path,onClick:function(){return u(f.name)}})))}function g(e){var t=e.className,n=(0,m.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},280:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3830),r=n(2056),i=n(7612),l=n(2238),c=n(3653),s=n(6299),o="anchorWithStickyNavbar_JNi5",m="anchorWithHideOnScrollNavbar_JLbY",d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?i.createElement(t,(0,a.Z)({},u,{className:(0,l.Z)("anchor",v?m:o),id:n}),u.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,a.Z)({},u,{id:void 0}))}},6997:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7612),r=n(2238),i=n(8348);function l(e){var t=e.permalink,n=e.title,l=e.subLabel,c=e.isNext;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);