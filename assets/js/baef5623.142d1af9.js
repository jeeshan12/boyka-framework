"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1616],{167:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7612);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=i,g=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7952:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(3830),i=r(2056),o=(r(7612),r(167)),a=["components"],s={title:"Write Test for Web",sidebar_position:3},c=void 0,u={unversionedId:"guides/web/write-test",id:"guides/web/write-test",title:"Write Test for Web",description:"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework.",source:"@site/docs/framework-docs/guides/web/write-test.md",sourceDirName:"guides/web",slug:"/guides/web/write-test",permalink:"/boyka-framework/docs/guides/web/write-test",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/guides/web/write-test.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1652633957,formattedLastUpdatedAt:"5/15/2022",sidebarPosition:3,frontMatter:{title:"Write Test for Web",sidebar_position:3},sidebar:"docs",previous:{title:"Create Page Object",permalink:"/boyka-framework/docs/guides/web/create-page-object"}},l={},p=[],b={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;\nimport static com.github.wasiqb.boyka.actions.KeyboardActions.enterText;\nimport static com.github.wasiqb.boyka.actions.MouseActions.clickOn;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserTitle;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserUrl;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementDisplayed;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementEnabled;\nimport static com.github.wasiqb.boyka.manager.DriverManager.closeDriver;\nimport static com.github.wasiqb.boyka.manager.DriverManager.createDriver;\nimport static com.github.wasiqb.boyka.testng.web.pages.LoginPage.loginPage;\n\nimport com.github.wasiqb.boyka.enums.ApplicationType;\nimport org.testng.annotations.AfterClass;\nimport org.testng.annotations.BeforeClass;\nimport org.testng.annotations.Test;\n\npublic class TestWeb {\n    private static final String URL = "https://www.saucedemo.com";\n\n    @BeforeClass (description = "Setup test class")\n    public void setupTestClass () {\n        createDriver (ApplicationType.WEB, "test_local_chrome");\n    }\n\n    @AfterClass (description = "Tear down test class")\n    public void tearDownTestClass () {\n        closeDriver ();\n    }\n\n    @Test (description = "Test login functionality")\n    public void testLogin () {\n        navigateTo (URL);\n        verifyBrowserUrl ().startsWith (URL);\n        enterText (loginPage ().getUsername (), "standard_user");\n        enterText (loginPage ().getPassword (), "secret_sauce");\n        clickOn (loginPage ().getLoginButton ());\n        verifyBrowserTitle ().isEqualTo ("Swag Labs");\n        verifyElementDisplayed (homePage ().getMenuButton ()).isTrue ();\n        verifyElementEnabled (homePage ().getMenuButton ()).isTrue ();\n    }\n}\n')))}m.isMDXComponent=!0}}]);