"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3489],{4230:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(5250),t=i(314);const o={sidebar_position:1,title:"\ud83d\udd78\ufe0f Appium with Selenium Grid 4"},a=void 0,s={id:"tutorials/appium-grid",title:"\ud83d\udd78\ufe0f Appium with Selenium Grid 4",description:"In this tutorials, you will learn how to run Appium tests on Selenium Grid 4 (traditional Hub and Node) using Boyka framework.",source:"@site/docs/framework-docs/tutorials/appium-grid.md",sourceDirName:"tutorials",slug:"/tutorials/appium-grid",permalink:"/boyka-framework/docs/tutorials/appium-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/tutorials/appium-grid.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1709013451,formattedLastUpdatedAt:"Feb 27, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\udd78\ufe0f Appium with Selenium Grid 4"},sidebar:"docs",previous:{title:"\u2705 Write Test class",permalink:"/boyka-framework/docs/guides/ui/write-test"}},l={},d=[{value:"Start Appium Servers",id:"start-appium-servers",level:2},{value:"Start Selenium Grid 4",id:"start-selenium-grid-4",level:2},{value:"Boyka config for Selenium Grid",id:"boyka-config-for-selenium-grid",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this tutorials, you will learn how to run Appium tests on Selenium Grid 4 (traditional Hub and Node) using Boyka framework."}),"\n",(0,r.jsx)(n.h2,{id:"start-appium-servers",children:"Start Appium Servers"}),"\n",(0,r.jsx)(n.p,{children:"First step is to start 2 instances of Appium server, one for Android and one for iOS."}),"\n",(0,r.jsx)(n.p,{children:"To start Appium server for Android, run the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"appium server --config core-java/src/test/resources/grid/appium-android.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that we are using Appium config file located at ",(0,r.jsx)(n.code,{children:"core-java/src/test/resources/grid/appium-android.yml"})," in the Boyka framework repository."]}),"\n",(0,r.jsx)(n.p,{children:"Now, we will start another instance of Appium server for iOS on another terminals by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"appium server --config core-java/src/test/resources/grid/appium-ios.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here also we are using another Appium config file located at ",(0,r.jsx)(n.code,{children:"core-java/src/test/resources/grid/appium-ios.yml"})," in the Boyka framework repository."]}),"\n",(0,r.jsx)(n.h2,{id:"start-selenium-grid-4",children:"Start Selenium Grid 4"}),"\n",(0,r.jsx)(n.p,{children:"Now start Selenium Grid Hub by running the following command on a new terminal window:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"java -jar core-java/libs/selenium-server-4.12.0.jar hub\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here you can download the Selenium server JAR file from the Selenium Website or you can use the one available at ",(0,r.jsx)(n.code,{children:"core-java/libs/selenium-server-4.12.0.jar"})," in Boyka framework repository."]}),"\n",(0,r.jsx)(n.p,{children:"Now, on a new terminal window, run the following command to connect the Android Appium server session node to the Selenium Grid Hub:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"java -jar core-java/libs/selenium-server-4.12.0.jar node --config core-java/src/test/resources/grid/appium-node-android.toml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here we are using Android Node config file located at ",(0,r.jsx)(n.code,{children:"core-java/src/test/resources/grid/appium-node-android.toml"})," in the framework repository."]}),"\n",(0,r.jsx)(n.p,{children:"Same way, we will start another node for iOS by running the following command on a new terminal window:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"java -jar core-java/libs/selenium-server-4.12.0.jar node --config core-java/src/test/resources/grid/appium-node-ios.toml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here we are using iOS node config file located at ",(0,r.jsx)(n.code,{children:"core-java/src/test/resources/grid/appium-node-ios.toml"})," in the framework repository."]}),"\n",(0,r.jsx)(n.h2,{id:"boyka-config-for-selenium-grid",children:"Boyka config for Selenium Grid"}),"\n",(0,r.jsx)(n.p,{children:"We will be using the following Boyka config file for running our tests on Android and iOS platforms:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10,\n      "highlight_delay": 100\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "mobile": {\n      "test_grid_wdio_android": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4444,\n          "driver": "UI_AUTOMATOR",\n          "external": true\n        },\n        "device": {\n          "os": "ANDROID",\n          "version": "11",\n          "name": "Pixel_7_Pro",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "ignore_unimportant_views": true,\n          "full_reset": true,\n          "swipe": {\n            "max_swipe_until_found": 5\n          },\n          "application": {\n            "path": "/apps/android/wdio-demo.apk",\n            "wait_activity": "com.wdiodemoapp.MainActivity",\n            "type": "HYBRID",\n            "install_timeout": 180,\n            "wait_timeout": 120\n          },\n          "virtual_device": {\n            "name": "Pixel_7_Pro",\n            "headless": true\n          }\n        }\n      },\n      "test_grid_wdio_ios": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4444,\n          "driver": "XCUI",\n          "external": true\n        },\n        "device": {\n          "os": "IOS",\n          "version": "16.2",\n          "name": "iPhone 14",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "connect_keyboard": false,\n          "typing_speed": 35,\n          "swipe": {\n            "max_swipe_until_found": 5\n          },\n          "virtual_device": {\n            "headless": true,\n            "launch_timeout": 180\n          },\n          "wda": {\n            "launch_timeout": 120,\n            "connection_timeout": 120\n          },\n          "application": {\n            "path": "/apps/ios/wdio-demo.app.zip",\n            "type": "HYBRID",\n            "install_timeout": 180\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"In this example Boyka config, you must use the correct device details like, device name, platform version, virtual device name, etc."})}),"\n",(0,r.jsx)(n.p,{children:"Now, when you run your tests using these config keys, your test will get executed on the Android and iOS platform with Selenium Grid 4."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},314:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var r=i(79);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);