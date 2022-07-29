"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4537],{167:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return u}});var n=i(5721);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(i),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return i?n.createElement(h,r(r({ref:t},d),{},{components:i})):n.createElement(h,r({ref:t},d))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3870:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=i(744),a=i(4690),o=(i(5721),i(167)),r=["components"],l={title:"DriverActions",sidebar_position:1},c=void 0,s={unversionedId:"actions/driver-actions",id:"actions/driver-actions",title:"DriverActions",description:"acceptAlert",source:"@site/docs/api/actions/driver-actions.md",sourceDirName:"actions",slug:"/actions/driver-actions",permalink:"/boyka-framework/api/actions/driver-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/driver-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1659085203,formattedLastUpdatedAt:"Jul 29, 2022",sidebarPosition:1,frontMatter:{title:"DriverActions",sidebar_position:1},sidebar:"api",previous:{title:"Introduction",permalink:"/boyka-framework/api/intro"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/element-actions"}},d={},m=[{value:"<code>acceptAlert</code>",id:"acceptalert",level:2},{value:"<code>acceptAlert(string)</code>",id:"acceptalertstring",level:2},{value:"<code>closeWindow</code>",id:"closewindow",level:2},{value:"<code>cookie(string)</code>",id:"cookiestring",level:2},{value:"<code>cookies</code>",id:"cookies",level:2},{value:"<code>currentWindowHandle</code>",id:"currentwindowhandle",level:2},{value:"<code>deleteAllCookies</code>",id:"deleteallcookies",level:2},{value:"<code>deleteCookie(string)</code>",id:"deletecookiestring",level:2},{value:"<code>dismissAlert</code>",id:"dismissalert",level:2},{value:"<code>executeScript(string, object[])</code>",id:"executescriptstring-object",level:2},{value:"<code>fullScreen</code>",id:"fullscreen",level:2},{value:"<code>goBack</code>",id:"goback",level:2},{value:"<code>goForward</code>",id:"goforward",level:2},{value:"<code>maximize</code>",id:"maximize",level:2},{value:"<code>minimize</code>",id:"minimize",level:2},{value:"<code>navigateTo</code>",id:"navigateto",level:2},{value:"<code>refresh</code>",id:"refresh",level:2},{value:"<code>switchToFrame(string)</code>",id:"switchtoframestring",level:2},{value:"<code>switchToMainWindow</code>",id:"switchtomainwindow",level:2},{value:"<code>switchToNewWindow</code>",id:"switchtonewwindow",level:2},{value:"<code>switchToParentFrame</code>",id:"switchtoparentframe",level:2},{value:"<code>switchToWindow(string)</code>",id:"switchtowindowstring",level:2},{value:"<code>takeScreenshot</code>",id:"takescreenshot",level:2},{value:"<code>takeScreenshot(string)</code>",id:"takescreenshotstring",level:2},{value:"<code>title</code>",id:"title",level:2},{value:"<code>url</code>",id:"url",level:2},{value:"<code>waitUntil</code>",id:"waituntil",level:2},{value:"<code>windowHandles</code>",id:"windowhandles",level:2}],p={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"acceptalert"},(0,o.kt)("inlineCode",{parentName:"h2"},"acceptAlert")),(0,o.kt)("p",null,"This method returns the alert text and accepts the alert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.acceptAlert;\n. . .\nSystem.out.println (acceptAlert ());\n")),(0,o.kt)("h2",{id:"acceptalertstring"},(0,o.kt)("inlineCode",{parentName:"h2"},"acceptAlert(string)")),(0,o.kt)("p",null,"This method returns the alert text, enter text in prompt and accepts the prompt alert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.acceptAlert;\n. . .\nSystem.out.println (acceptAlert ("Hello World"));\n')),(0,o.kt)("h2",{id:"closewindow"},(0,o.kt)("inlineCode",{parentName:"h2"},"closeWindow")),(0,o.kt)("p",null,"This method will close the open browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.closeWindow;\n. . .\ncloseWindow ();\n")),(0,o.kt)("h2",{id:"cookiestring"},(0,o.kt)("inlineCode",{parentName:"h2"},"cookie(string)")),(0,o.kt)("p",null,"This method will get the cookie from the browser based on it's name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.cookie;\nimport org.openqa.selenium.Cookie;\n. . .\nCookie c = cookie ("cookie-name");\n')),(0,o.kt)("h2",{id:"cookies"},(0,o.kt)("inlineCode",{parentName:"h2"},"cookies")),(0,o.kt)("p",null,"This method will get all the cookie from the browser and return all the cookie names as list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.cookies;\n. . .\nList<String> cookieNames = cookies ();\n")),(0,o.kt)("h2",{id:"currentwindowhandle"},(0,o.kt)("inlineCode",{parentName:"h2"},"currentWindowHandle")),(0,o.kt)("p",null,"This method returns the current window handle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.currentWindowHandle;\n. . .\nSystem.out.println (currentWindowHandle ());\n")),(0,o.kt)("h2",{id:"deleteallcookies"},(0,o.kt)("inlineCode",{parentName:"h2"},"deleteAllCookies")),(0,o.kt)("p",null,"This method will delete all the cookies from the browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.deleteAllCookies;\n. . .\ndeleteAllCookies ();\n")),(0,o.kt)("h2",{id:"deletecookiestring"},(0,o.kt)("inlineCode",{parentName:"h2"},"deleteCookie(string)")),(0,o.kt)("p",null,"This method will delete the cookie from the browser based on it's name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.deleteCookie;\n. . .\ndeleteCookie ("cookie-name");\n')),(0,o.kt)("h2",{id:"dismissalert"},(0,o.kt)("inlineCode",{parentName:"h2"},"dismissAlert")),(0,o.kt)("p",null,"This method will dismiss the alert and returns the alert text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.dismissAlert;\n. . .\nString message = dismissAlert ();\n")),(0,o.kt)("h2",{id:"executescriptstring-object"},(0,o.kt)("inlineCode",{parentName:"h2"},"executeScript(string, object[])")),(0,o.kt)("p",null,"This method will execute the JS script and returns the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.executeScript;\n. . .\nString output = executeScript (\"alert('Hello World');\");\n")),(0,o.kt)("h2",{id:"fullscreen"},(0,o.kt)("inlineCode",{parentName:"h2"},"fullScreen")),(0,o.kt)("p",null,"This method will on-demand do full screen on the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.fullScreen;\n. . .\nfullScreen ();\n")),(0,o.kt)("h2",{id:"goback"},(0,o.kt)("inlineCode",{parentName:"h2"},"goBack")),(0,o.kt)("p",null,"This method will go back to the previous page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.goBack;\n. . .\ngoBack ();\n")),(0,o.kt)("h2",{id:"goforward"},(0,o.kt)("inlineCode",{parentName:"h2"},"goForward")),(0,o.kt)("p",null,"This method will go forward to the next page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.goForward;\n. . .\ngoForward ();\n")),(0,o.kt)("h2",{id:"maximize"},(0,o.kt)("inlineCode",{parentName:"h2"},"maximize")),(0,o.kt)("p",null,"This method will maximize the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.maximize;\n. . .\nmaximize ();\n")),(0,o.kt)("h2",{id:"minimize"},(0,o.kt)("inlineCode",{parentName:"h2"},"minimize")),(0,o.kt)("p",null,"This method will minimize the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.minimize;\n. . .\nminimize ();\n")),(0,o.kt)("h2",{id:"navigateto"},(0,o.kt)("inlineCode",{parentName:"h2"},"navigateTo")),(0,o.kt)("p",null,"This method is used to navigate to the given URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;\n. . .\nnavigateTo ("https://google.com");\n')),(0,o.kt)("h2",{id:"refresh"},(0,o.kt)("inlineCode",{parentName:"h2"},"refresh")),(0,o.kt)("p",null,"This method will refresh the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.refresh;\n. . .\nrefresh ();\n")),(0,o.kt)("h2",{id:"switchtoframestring"},(0,o.kt)("inlineCode",{parentName:"h2"},"switchToFrame(string)")),(0,o.kt)("p",null,"This method will switch to the given frame by it's name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.switchToFrame;\n. . .\nswitchToFrame ("frame-name");\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order to come out of this frame, use ",(0,o.kt)("a",{parentName:"p",href:"#switchtoparentframe"},(0,o.kt)("inlineCode",{parentName:"a"},"switchToParentFrame"))," method.")),(0,o.kt)("h2",{id:"switchtomainwindow"},(0,o.kt)("inlineCode",{parentName:"h2"},"switchToMainWindow")),(0,o.kt)("p",null,"This method will switch to the first window after you close any of the other opened windows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.switchToMainWindow;\n. . .\nswitchToMainWindow ();\n")),(0,o.kt)("h2",{id:"switchtonewwindow"},(0,o.kt)("inlineCode",{parentName:"h2"},"switchToNewWindow")),(0,o.kt)("p",null,"This method is used to switch to new window of given type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.switchToNewWindow;\nimport org.openqa.selenium.WindowType;\n. . .\nswitchToNewWindow (WindowType.TAB);\n")),(0,o.kt)("h2",{id:"switchtoparentframe"},(0,o.kt)("inlineCode",{parentName:"h2"},"switchToParentFrame")),(0,o.kt)("p",null,"This method will switch to the parent frame of the current frame. This method is used to come out of any iframe."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.switchToParentFrame;\n. . .\nswitchToParentFrame ();\n")),(0,o.kt)("h2",{id:"switchtowindowstring"},(0,o.kt)("inlineCode",{parentName:"h2"},"switchToWindow(string)")),(0,o.kt)("p",null,"This method is used to switch to window of given handle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.switchToWindow;\n. . .\nswitchToWindow ("window-handle");\n')),(0,o.kt)("h2",{id:"takescreenshot"},(0,o.kt)("inlineCode",{parentName:"h2"},"takeScreenshot")),(0,o.kt)("p",null,"This method will take the screenshot of the current page and save it at the path configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-config.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.takeScreenshot;\n. . .\ntakeScreenshot ();\n")),(0,o.kt)("h2",{id:"takescreenshotstring"},(0,o.kt)("inlineCode",{parentName:"h2"},"takeScreenshot(string)")),(0,o.kt)("p",null,"This method will take the screenshot of the current page and save it at the path mentioned in the parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.takeScreenshot;\n. . .\ntakeScreenshot ("path/to/screenshot.png");\n')),(0,o.kt)("h2",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h2"},"title")),(0,o.kt)("p",null,"This method will get the title of the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.title;\n. . .\nSystem.out.println (title ());\n")),(0,o.kt)("h2",{id:"url"},(0,o.kt)("inlineCode",{parentName:"h2"},"url")),(0,o.kt)("p",null,"This method will get the URL of the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.url;\n. . .\nSystem.out.println (url ());\n")),(0,o.kt)("h2",{id:"waituntil"},(0,o.kt)("inlineCode",{parentName:"h2"},"waitUntil")),(0,o.kt)("p",null,"This method will wait for any given condition to be true. It takes in Selenium WebDrivers ",(0,o.kt)("inlineCode",{parentName:"p"},"ExpectedCondition<Boolean>")," object as parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.waitUntil;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\n. . .\nwaitUntil (ExpectedConditions.urlMatches (URL));\n")),(0,o.kt)("h2",{id:"windowhandles"},(0,o.kt)("inlineCode",{parentName:"h2"},"windowHandles")),(0,o.kt)("p",null,"This method will get the list of all open window handles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.windowHandles;\n. . .\nSystem.out.println (windowHandles ());\n")))}u.isMDXComponent=!0}}]);