"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{293:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3289),r=n(4009),i={breadcrumbsContainer:"breadcrumbsContainer_I1fW"},l=n(2238),c=n(2537),s=n(3244);function o(e){var t=e.children,n=e.href,r="breadcrumbs__link";return n?a.createElement(c.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r,itemProp:"item name"},t)}function m(e){var t=e.children,n=e.active,r=e.index;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function u(){var e=(0,s.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.Z,{className:(0,l.Z)("breadcrumbs__link",i.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function d(){var e=(0,r.s1)(),t=(0,r.Ns)();return e?a.createElement("nav",{className:(0,l.Z)(r.kM.docs.docBreadcrumbs,i.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(u,null),e.map((function(t,n){return a.createElement(m,{key:n,active:n===e.length-1,index:n},a.createElement(o,{href:n<e.length-1?t.href:void 0},t.label))})))):null}},627:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(3289),r=n(4009),i=n(2537),l=n(2238),c="cardContainer_vdAS",s="cardTitle_CGNL",o="cardDescription_lHR3",m=n(3972),u=n(4888);function d(e){var t=e.href,n=e.children;return a.createElement(i.Z,{href:t,className:(0,l.Z)("card padding--lg",c)},n)}function v(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,l.Z)("text--truncate",s),title:r},n," ",r),i&&a.createElement("p",{className:(0,l.Z)("text--truncate",o),title:i},i))}function h(e){var t=e.item,n=(0,r.Wl)(t);return n?a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t,n=e.item,i=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,r.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:i,title:n.label,description:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return a.createElement(b,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return a.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,r.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{key:t,item:e}))})))}var E=n(3700),p=n(6578),Z=n(8105),N=n(293),k=n(6107),_=n(3244),L="generatedIndexPage_kRCd",y="title_UQDx";function T(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,_.Z)(t.image)})}function w(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return a.createElement(a.Fragment,null,a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,_.Z)(t.image)}),a.createElement("div",{className:L},a.createElement(p.Z,null),a.createElement(N.Z,null),a.createElement(Z.Z,null),a.createElement("header",null,a.createElement(k.Z,{as:"h1",className:y},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("main",{className:"margin-top--lg"},a.createElement(g,{items:n.items})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(E.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function x(e){return a.createElement(a.Fragment,null,a.createElement(T,e),a.createElement(w,e))}},3700:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5161),r=n(3289),i=n(4888),l=n(9399);function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},8105:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3289),r=n(4888),i=n(4009),l=n(2238);function c(e){var t=e.className,n=(0,i.E6)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,i.kM.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},6578:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3289),r=n(1945),i=n(2537),l=n(4888),c=n(8326),s=n(4009),o=n(2238);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function u(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function d(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,n=e.className,i=e.versionMetadata,l=(0,r.Z)().siteConfig.title,m=(0,c.gA)({failfast:!0}).pluginId,v=(0,s.J)(m).savePreferredVersionName,h=(0,c.Jo)(m),b=h.latestDocSuggestion,f=h.latestVersionSuggestion,g=null!=b?b:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,o.Z)(n,s.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(u,{siteTitle:l,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(d,{versionLabel:f.label,to:g.path,onClick:function(){return v(f.name)}})))}function h(e){var t=e.className,n=(0,s.E6)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},6107:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(5161),r=n(9675),i=n(3289),l=n(2238),c=n(4888),s=n(4009),o="anchorWithStickyNavbar_j99H",m="anchorWithHideOnScrollNavbar_JLIX",u=["as","id"],d=["as"];function v(e){var t=e.as,n=e.id,d=(0,r.Z)(e,u),v=(0,s.LU)().navbar.hideOnScroll;return n?i.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",v?m:o),id:n}),d.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,d)}function h(e){var t=e.as,n=(0,r.Z)(e,d);return"h1"===t?i.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):i.createElement(v,(0,a.Z)({as:t},n))}},9399:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(3289),r=n(2537);function i(e){var t=e.permalink,n=e.title,i=e.subLabel;return a.createElement(r.Z,{className:"pagination-nav__link",to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);