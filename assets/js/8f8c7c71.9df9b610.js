"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1767],{167:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var A={};for(var l in t)hasOwnProperty.call(t,l)&&(A[l]=t[l]);A.originalType=e,A.mdxType="string"==typeof e?e:a,i[1]=A;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return A},metadata:function(){return c},toc:function(){return d}});var r=n(744),a=n(4690),o=(n(5721),n(167)),i=["components"],A={title:"\ud83c\udfd7\ufe0f Building the project",sidebar_position:2},l=void 0,c={unversionedId:"machine-setup/build-project",id:"machine-setup/build-project",title:"\ud83c\udfd7\ufe0f Building the project",description:"Cloning the Project",source:"@site/docs/contributing/machine-setup/build-project.md",sourceDirName:"machine-setup",slug:"/machine-setup/build-project",permalink:"/boyka-framework/contributing/machine-setup/build-project",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/machine-setup/build-project.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1659085203,formattedLastUpdatedAt:"Jul 29, 2022",sidebarPosition:2,frontMatter:{title:"\ud83c\udfd7\ufe0f Building the project",sidebar_position:2},sidebar:"contributing",previous:{title:"\u2328\ufe0f Suggested IDE",permalink:"/boyka-framework/contributing/machine-setup/suggested-ide"},next:{title:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Join our Discord server",permalink:"/boyka-framework/contributing/machine-setup/join-discord"}},s={},d=[{value:"Cloning the Project",id:"cloning-the-project",level:2},{value:"Java project",id:"java-project",level:2},{value:"Build the project",id:"build-project",level:3},{value:"Installing Maven on Windows",id:"installing-maven-on-windows",level:4},{value:"Installing Maven on MacOS",id:"installing-maven-on-macos",level:4},{value:"Documentation project",id:"documentation-project",level:2},{value:"Build the project",id:"build-documentation-project",level:3},{value:"Run the project",id:"run-the-project",level:3},{value:"Upgrade outdated dependencies",id:"upgrade-outdated-dependencies",level:3}],p={toc:d};function u(e){var t=e.components,A=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cloning-the-project"},"Cloning the Project"),(0,o.kt)("p",null,"The first step to take before you start contributing to this project is to Clone the project."),(0,o.kt)("p",null,"Run the following command if you want to clone using ",(0,o.kt)("inlineCode",{parentName:"p"},"SSH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone git@github.com:WasiqBhamla/boyka-framework.git\n")),(0,o.kt)("p",null,"Run the following command if you want to clone using ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/WasiqBhamla/boyka-framework.git\n")),(0,o.kt)("p",null,"Run the following command if you want to clone using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cli/cli"},"Github CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone gh repo clone WasiqBhamla/boyka-framework\n")),(0,o.kt)("p",null,"The above URLs for SSH, HTTPS and Github CLI can be found on the github repo main page as well."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Github repo main page",src:n(7873).Z})),(0,o.kt)("h2",{id:"java-project"},"Java project"),(0,o.kt)("p",null,"The main Java project is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"core-java/")," directory."),(0,o.kt)("h3",{id:"build-project"},"Build the project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Maven")," is the build tool we would be using for this project. So need to have Maven installed on your machine before you proceed to build the project.\nIn case Maven is not installed on your machine, the following steps should help."),(0,o.kt)("h4",{id:"installing-maven-on-windows"},"Installing Maven on Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the Maven Zip File from the maven download page and extract it."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"MAVEN_HOME")," System Variable.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Open the Start menu and search for environment variables. Click on the Edit System environment variables result."),(0,o.kt)("li",{parentName:"ol"},"Under the Advanced tab in the System Properties window, click Environment Variables.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"System Properties Tab",src:n(3040).Z})),(0,o.kt)("li",{parentName:"ol"},"Click the New button under the System variables section to add a new system environment variable."),(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"MAVEN_HOME")," as the variable name and the path to the Maven directory as the variable value. Click OK to save the new system variable.\n",(0,o.kt)("img",{alt:"New System Variable Dialog box",src:n(5275).Z})))),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"MAVEN_HOME")," directory in the PATH Variable.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Select the Path variable under the System variables section in the Environment Variables window. Click the Edit button to edit the variable."),(0,o.kt)("li",{parentName:"ol"},"Click the New button in the Edit environment variable window.\n",(0,o.kt)("img",{alt:"Environment Variable",src:n(8823).Z})),(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"%MAVEN_HOME%\\bin")," in the new field. Click OK to save changes to the Path variable."),(0,o.kt)("li",{parentName:"ol"},"Click OK in the Environment Variables window to save the changes to the system variables.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"Edit env Variable",src:n(3440).Z})))),(0,o.kt)("li",{parentName:"ol"},"Verify if Maven is installed correctly.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Open Command Prompt and run the command: ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn -v")),(0,o.kt)("li",{parentName:"ol"},"It should display the Maven version as shown in the screenshot below:\n",(0,o.kt)("img",{alt:"Maven Version Check",src:n(5899).Z}))))),(0,o.kt)("h4",{id:"installing-maven-on-macos"},"Installing Maven on MacOS"),(0,o.kt)("p",null,"Installation of Maven on a Mac machine can be easily done using the Homebrew software.\nAfter installing Homebrew, just run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install maven"),", and it will install Maven within seconds on your machine, and you could straight away start using maven."),(0,o.kt)("p",null,"Once Maven installation is complete, from the root repository directory, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> mvn install -f core-java/pom.xml -DskipTests\n")),(0,o.kt)("p",null,"This will resolve the dependencies and run checkstyle for the project."),(0,o.kt)("h2",{id:"documentation-project"},"Documentation project"),(0,o.kt)("p",null,"The documentation project is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"website/")," directory."),(0,o.kt)("h3",{id:"build-documentation-project"},"Build the project"),(0,o.kt)("p",null,"To build the project, ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," is required to be installed on your machine.\nOpen your terminal or command prompt and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npm install --global yarn\n")),(0,o.kt)("p",null,"Once the installation is complete you can check by running the following command to verify that ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," was installed correctly on your machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn --version\n")),(0,o.kt)("p",null,"Once ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," is installed on your machine, navigate to the root folder of the project and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn install\n> yarn build:site\n")),(0,o.kt)("p",null,"This will install all dependencies and build the documentation site."),(0,o.kt)("h3",{id:"run-the-project"},"Run the project"),(0,o.kt)("p",null,"From the root repository directory, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn start:site\n")),(0,o.kt)("p",null,"This will start the documentation site on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"."),(0,o.kt)("h3",{id:"upgrade-outdated-dependencies"},"Upgrade outdated dependencies"),(0,o.kt)("p",null,"From the root repository directory, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> yarn upgrade-interactive\n")),(0,o.kt)("p",null,"This will prompt to select the version to which we need to upgrade any particular dependency."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can upgrade any dependency to latest version even if it is upgrading to major version, except for the following dependencies:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"react-dom")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@mdx-js/react")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@docusaurus/*"))),(0,o.kt)("p",{parentName:"admonition"},"Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-core")," team will upgrade the above dependencies.")))}u.isMDXComponent=!0},5899:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4AAAADCCAMAAAAvklyfAAAAz1BMVEUMDAz///8ODQ0VxgwTxg0Uqw0Rqw0Ocw0VkA0NVA0SVA0RMw0NMw0QkA0QDQ0Ucw0AAADs7OxwcHDd3d3o6ejj4+PV1dX//7aQ2/9mADr/25CPkpf/tma2//86kNtmtv///9sAZrbb///bkDqQOgBmAGY6AAC2ZgCQOjpmAAA6AGbKzM0AOpDT2eAAAGY6OpAAADry8vI6ZrZmOpCQtv/q6uq2/8BQkJBmtsNoeZGQtpCQ27b/tqM6ZpC2kDq2Zjq2tv8AZpA6OmZmOjo6OgAA7xOsAAAZlElEQVR42uybC1PTQBSFu6UCKkqQYkttE9oIpYpYkJeKb///b/KcmyxsE+qEYbC0no82vUnu3Z1h8s0+CrWjo43m1gsnhJgBJuCmBBRiBlDAjdMtCSjETKCATQkoRDUkoBCLhAQUYobUNk6bmy8loBCzgAJuBQK+KuCEEAXuU8B3no/8kYBC3CMUsDkh4NsJvIA7r6PoYOBca7eHs2GCaLvtXLePC61R39l5axRFUexAl8FEHi8dnqG6IuwQ1UO005pexcaFmGeKAkYT5AJ29hIcTpw5RZ94CYalMQXc/p2JRh3Mxu64DYPiMK/zpocGUF1kikWt7w4l6BJ3fVURCSjmnwoCQqYrBTrHPLwfuPT82O3st03ATzjPBaQ2TLcgyOty/GR1kekW2cjHWl9VRAKK+acsoHMRcIGAHL4ILIIPJsXO/meoZy+OUbEXkLIy3ZLCvFGcXctmlxdwFM01GWLi2sdAGR1S5b0oSf08ts8jaq3KypIggyXnJqAVn2HEpeXWkBNiTigJ6CifCwW0EY/wAe9SjmHS+jD41oYimYB4hQIynUGQR3/oXGxi8cBWLEQZ37jXGh0MuhFEgkIprCTDmFWsZ8fXGVA6cekYPfriXSwx89gJ8UCIrnA3UhbQZ5dHQAKjqA/USeM0zgXEBS8gp4x+BAzyABeSrOaqkHWILUQZrqGzPiP/vl5JZn1mjQYZ1NwS82LXheE+FmJOmDIC8lBeA5JhwiHxa+I6X6CYCUhRLm5YAwZ5JLVRj0GUeC0RoqysV9YTJc6ivwpotyggY80/xTwxbQ1IC10moH+2T2wnpXNMI8fc8DzseQEx8ozzXdAE6bwxisO8SxvNrBrAvc7PX+0sZBmzJ/S67PGYLQNZhepCRj4FZWTF+RR0pPmnmCeq7ILSL34PaALaqJQyGkIPL6C5gO2UMWIKG1HZMM+2WqwaN2GkXc3CoW3CTE5BeQ7BIhBblbWQBBksPrdh14p/QFD0hlhTUDFHVBIw5I57HL6a08rKaF9FLCoQcCZ/C8olnBD/PV7AfwoXh/oKXYhMQP07khDVkIBCLBISUIjqSEAhFgkJKER1JKAQi4QEFKI6ElCIRSIXsCaEmAESUIhbIAGFWCSKAtaXH9Vrt2GtsbS0Xiszvb3HVXpYWVqqkJa3//CoL/O3IkQ1AeuNdT7zT2//QNcbT+zzGRrw+LOV1TsIuGrt+GN1AcsmPLc2CkLbeTmP4qxO3F9r8LPeoFDlfH/fG+c/2YIEFFUF/MO+GSjHCQJhuKPnoSD6/m9bWP2qhXOqGdM2l/+fNhzssmCGLyjnjl3XpKUcrvcfHxPLrcCHn+gjAA7tBOPXtQRwBkrM18d06jp+zXO2/5s9/czTjT5daajjYh9tjpQCULoKYAzj/Az5zq9fV5j9JXezs7J5pvq0lp46AKZuWX0J4Ey85unTFhJsZ7GtZenPPjcTtwAws2dDsCMxH/yJTzzGQc1zWhlObRtBVR0/G2roms3uulRdfeYqLnZoy6UAlD4A4DC78PS7rScsHKRlnxaiLT7XNWxq1F1rmsrlNvSZvjgTL/ER7FPsbYHTf1nc0RO3AND86Zf/Mx/MOBKPcRCbaP4xPiC8ruMHhdgzhADIRrz3x9488m8iUApA6RqAaRF1fQOAu9XjbHWF8bFuI+uNF/WjW9AUL6Z/fgPEs7NYSf8xMTwnI3H3ALLMs5mhmA/+OBKPcSqwuoRTSEZTVd/f7drTHfZ8WYSLqSz9sTeP3looBaB0DcD+RzQQNmBY3gBljdzzUT8GcOxjqAHkFo/+zWOKCfxA3AJAIyL3SThkBZrxx5F4hwCmvttF1XX8bCD/mLCnUIRzqaUCELv9gUg/KAWgdBXApD0w88bBfsczW/+HHTC3ej/Mz/ASQGclC3aO4TERdxOkxd71DL01439uB7T57J756jp+3D9jj63Jw1/pj73J/nY9XgBK1wHkvpMFzS0eC56TQdqoA6BR9RuA3dQ8ugrA3G9oreSk0Q89cV8AmL29cUjzy6NW4h0AaDaLkeh4UcePD9jZ/Xkmrvyxm7/rGkoBKH0IwObJaaZbT0F71h2Hl1ZSB8DtCzTclwMR4gFGcm+7XNI/2nMTcWsAWfDm0NP8y5/4xCsAZIuamB7xqjp+0cJgNzFdsxf+2M1/K3UII331V9ESaV9cAlASgFckAKUT+i4Atu1/+ZKn3gWVvgWAkvQtJAAl6bwEoCS9kzYAx/0zl72dsumGfMG7dH0evDhDeSIeL8l8ioav/HAroVsBPHrXGN2ZL0j861wSB2DO8V98ze+uAMh4AlBCnwJgsdKqhXpzvuAKswuff7jv5mf4E4BIAEp/WQAIKOxMpMyhm/MF2RfxIw75fGV7BsHqxDnOA6xJcvMhgMQv4rU+dUsfAuNxXVU/8hSxU8c+kldIeyq/9vcr0icB6OAqvNpr7s4XBHf8tjitz/Wy/YfzKQSZr2fyALeBhq45BpD4tMfeYto8rCXu8K37kaeInXr1e4k9Nu2AUg2grbqNuur16tvzBc1t8yOODZHKsp1JEOdEFgRedD8AkPgA7e0T8RiP6yr7cYnYqWPP5T6fMZUCUHoFoMFFUT2q3J0vCID4EQcAy/YlIRAgTuUBEo8uBwBSK3bAAkCuq+xHniJ26rt3yad9PmP6LAClwx2Qolqpd+cL8gyIH3Fgtm6fr+6AAGLgngeQR74SQLuuqh+bM/Y6bzH6gXxG5usEoHTwDMitVInMbfmCKC6noPjtAGQXoh1gLcWJOEd5gKQLoWGZQjgLYLPOlniMh0fVLxZtsRxl6GPY/NZ8SOYpSeUpqHt5Cnp3viD98dsAtPBVux26+q4hTpkHeARgnC0o86ZfvZPR7qwkHuNxXVU/JoydOna+X6R9yYcUgNKr7wH/g3wgW/j/TrZZ2nYrSVd1/5swZ/ReAA5tWCiUpBt0+7ugtd4LwOUWVPxJf5CyISTpLSQAJem8BKAkvZMEoCSdlwCUpHeSAJSk8xKAkvRO+sneHeg4DQNBAEWXQtOW9v7/b8naejg6XUSAQ1eiGQkZO7trO83UaS7rCQGDYD9CwCA4EkLAINiPEDAIjoQQMAj2IwQMgiMhBAyC/QgBg+BICAGDYD9CwCA4EkLAINiPEDAIjgQE/EsRonsE0YPgjwlI7Qjs0GTn6V8EYU+Pr+9IPa90Be9TNSzt1Zhdx4KgAwHp9a23J9tPQPb0+MqvbUlLV9AaudDzVvGijxAEKwLaFNROzoQWEHBL/047e3p85Vf7a9IVHAS8vla8ivMor3nRATtNNzp67+r8Nb/s1xkcEp2ANpBHQMseAm7p32lnT4+v+317pSs4CPhoGl00ci/T9T4tx3+h81ehImoSHBGdgPbBhrfqQ1v6d9rZ0+NDQLqCKwKeX1uQRr5aN8/zYkdHb0vlqI5/+qa9QQD/moC4h4Bb+nfa2dPjQ0C6gisCvnxd4nlcg4B09N4SsHdYsep41EyCw+Htb0DojEHALf077ezp8fkNSFdwRcClNm5BEZCO3uYK2I8HwdHQCUivz29Aj2FeTn57va9/5//s6fG11ew0D13BFQG/zx7CDALS0dskYB3PI5jgeOgEpNc3CNjIQH9vU/9OO3t6fG0lXNwRcPwd8FE+NyRDQP1uEbCO5BFMcEAgIAwgwk5E+zwI8i5oEPxXCAGDYD9CwCA4EkLAINiPEDAIjoROwGfWbpfp9AFPYb1b8/q3cf74fImvBOP62PP96Zr/wU4CyuP7zQtq5PvtxX1ymQkwTcO9YjEYFtfh147Lwpi/KMeFzc6EyuAx6sLJ6ljbcUQM46tmcdX5qYvHzvnyZpB5bhHQuMyHv/mCfvUjrhJgzPMy5UW+pwQCVh7f7xNw5PvtBwq8yXKQTvhurj2/Os5v/BvEYVcWc1Uvk9fIl7oEq4pa4561V7NBieMNuJYFJa46P3Xx2DlfMkjMc4uAxmU+/M0X9KsfcZWswLgqUt7ke0p0AsrjG/l49/YStEz5pf1btftGBfl+7OXtsRMPUGpNRpx474JzkF8d11oXsLL3X6X456+X1v+jvvrVecrquGk3JnGMH9nFVeenLh4750sGiXmKr3R+jct8+Juv8ehXP+IqfQ7Kn+PKPgTPik5AeXzLHdC1fZOe69t+KS/9Kurt8898QJDvx943MTv5fRuUarevdRu7TcDuzM/xYlU1KKsvK4oXwavKVP08NZRf3R5etb+czu0WThzj9yUhrjo/dfHYtfOF+vOYp/hK59e4zIe/+RqPfvUjrtLnoDSubNvztLAlRct08P7nzS2ST807mvIBecv3U5G3x47favnzk0aEnlAP574wgOWHn+P99mt6jLKnVrCrcQ8CqlsBy/T7qRKBtb+cihDirOfZr2dx1fmpi8fOebTymKf4SudXZ+bD33yNR7/6EVfpc1COcSWf+Unxg7073HIaBKIA7NH1uKdaff+3tRQ/U+/ak1CbmG1nfiyFDMMQuCVlc5kOQDw+A993D5BgJwDiA6qN70cfb49eAtC3+fS5TXp5ZfQ1PNVz/dzA4eW71KMbPcwMAJT/DcCTb8228tbl9ocd/qNNsSuvnjx79NxH814/2Zeqwi/9UV9/+aNd7bArNQ5SftWrursVR1J8ArjzXOgMoZZ/uwJeCr4ffbw9eurlNvzVs15AJlZA9VzXuLRN38tNjuOnsxxoy0+/tfpjpPK28jSn2eE//LErr548e/QAyAOsfrIv1T1+6Y/6+uujdrXDrtQ4SPlVuzC7lQ5APL6+Er72R6HTfrcjJwDJKkTQjejj7dFLACLwttnVie4/zhNM3vVoQbnUvJQ2nJ7S1o7rmqUm77lSX3xv9MdndlzzG41defXk2aPnPvpW0E/2pe4vvzisPns+a1c5u1LjIP3lVx3dul/pAMTjQ/c7b84dPn/EEwQkfMAEIH28PXoBwF7c2gK489L7Vd712LJRLrUpKO122vag6xOw+uZGALAbgjE8x1PKzm//X3p9duXVk2ePXq9uaZz6yb7U/eWX/qjPngLtKmdXahyk/Kpd0N1KB+Ae3nipM7dXk3oC3a/sHoAfX3bn0nuUehNmp7J7AH74Vrt39S7o40qxIUpKlksBsKTkkaQAWFKyXHYCQL8V19rbdOB26u+Vt3hqt45PLLkdgF7oXQuA4gXmzopXrGa2zemvC8Bx3mIBsOQ+AMTrWwuA4gWmAWvbDADprwfAcd7iLlbekncvADjE68N3ax/O+uL80c+VAEUo4w8CIDtSAMz4g/wb5C3ybzXeonY9Ond7tfNfshCAo7w+/EB64vzRTwCKlpTxB01zdqQAqE36/BvlLfJvLd4i/h6Pm71696RkMQBHeX3yoieJ8UCfXgIwHzEBkB2p6xl/kH+jvEX+rcJb1C6/e774PyUDABzk9cm3opYxwenPAVARALIjNZEz/iD/lvIWxRfk31z/6C/kLdIvAJb8GwDneH0jK2BI/AYkDXnzK2DGH+TfKG+Rf/fmLdYKWHIXAA7x+uRN/OMU6ZZ+/gYULzDjDwIgO1ITOeMP8m+Ut8i/tXiL/CkAltwEwFFen7z4gSY4/QSgeIHK2QBAdqTNTLOT8Qf5N8hb5N9avEVm+F0ALHkHr6LdEH+w/u9W8mDyPt8FLQCWPIgUAEtKBqQAWFLyQFIALClZLgXAkpJHkrsBcD90nDts/ycfcX/3p9nZDw/zUu94cRBrnWm3FIBHb5BtMjHE7UteXbAYxONbAYBYF2PH+GFd3DTz7wDAsLMdD3NmftCbAeDguD8Hdq2A257cKm4fVkHGs4v4fHcHYGsDv285AJ1U/4VDmx5vys72PEyYGAogCYC3j/tznCQcAAy+nDwJHl27kV+mo6APHmGsMHhx+Y0tbt9bWg/7JMJDkGt8PnH3tM+/bL813iq5nrxCE5H9JOmmfe0rT7s9/Njr1fuTor43auiFnc14mHPzg16r1vLGoQf80cHRcX+KJTAAGHw5edrBo2sToUcIiTc36eHF5cSAgRwI8ezmTua9xucTd891/mk/j9R3PXmFVNhPCkfax09UnnbN92v3J0V9AKSXdrbiYc7ND3raNA5njs3r8nF/whOZA4DBl5OnnTy6lm+Z5O1hNeQ7kTkQyasTzy5ZPynX+Hzi7mmff1n9CICuxyOTfrCfBIi0jw2hPOwC4OL7o77r0rSzFQ9zbn7Q0+ZF/EP4Gx/3/76bt4EkAJMvJ087eXRuu2ciA4HXNwfAvNPi2eWvrpRrfD5x97TPP5IroOvJK6TCfjqd9gFQedgFnMX3R/05AG7Fw5ybH/RUMA4fjpwaH/cnOdHjTwAmX06edvDoDJeNjcEVMD9NcfbmxuEan0/cPe3/HYAm3svB9eQV6gf7+ViU9vETlYfdgRVwDIBb8TDn5gc9bRqHU6GH+kXj/nz4+9neueioDUNBtGppQ5eF/P/fNk50ZJj0rr3IQsaZUdUtxPb1a5qw5OTyWMLrz3W+hJfLr5FwdCwX/+ZvuD42TvAZULk78uzl1ywfr1HA85F3j/j0L8entcfjyhXmk6RS8NtvQbV9eEDe13b5gBXPD+PTC8WUfJRy+3ZexWGW9gfliJnzLM5Y6ZvrfhT/cQZMlxJp4MrL8RoJR8ciwe3Bw8H1RQYkb59yd+Sz4zX599j6KOL5yLtH/MiAely5QsZB+4jjUp9iYbsMLJwfHd/9JewFA+7aeRmHWdoflMOArMMaZfr18dy6HyKh09vcijb1vBzL5nuf8T3NYZbLORf9qAb8PPXsv2TAocf3ranw0xgHNGDnMp+YL3nxn1zwJ9maNqBldSUb0LLqZQNa1kgKDfgJEFLk5Hj/5XxduX3G0eq3h13wjtZI2gwIN1ZxKyyUwFzGd/T498UdGjyIs7Z9+sc4XmxAqArl4ODc4OGOxL1ZXxvwtr+HoiMDCppSa0BaeP33Z3CDysHBuU3z0bg3q2DAR86PjZvz8T3c9Q6Xhh45sszVUZ/jEbemXJ8aMDqPUZ72lb9jHMrpwdFF8ek/9eDbJP8fANyHjof+Ug4OLqNM89G4N6tkwLQT4MqmX6tu8F5iQDkDKueWuTrqczzi1pTrUwMu+/+/DoTDo33l7xiHcnpwdFF8+k89+DbJ/5fv/9xfP2j/NgNizmk+Gvdm1RgQrkyS61UbEMNwmPoRX4eU61MDrmek7MswL5/ydwRTTo97KKP4VKfe8iePQygFIssdx9q/9BYUDjzckbg3q8KAcGW4BN6rzoDKud3Vj/g6xPuxAdMP3o8NSDw1oHJ6GDCKT/+pB9+mBuQMWGtAPh3ivCNxN1bFZ0B5sAC817fPgGxK6itfp+L9LwyoXBvl6SqXwIUzoBgwiM8h6sG37Q0oH4XlspL+YUD8hkvtv8NrMyDcGFwZuwbeCy6NDchuRMK5wdVRP9cLuLUwD+FpzqEm5eY0L5/yd4wj90sNGMWn/9SDb1MDLmC4jEe4wdy/v5lzo8b5SNybVfwe8CODbWxceC+4NHgxAC6knBvcHPU5HnBrUZ4+2uPKkq0d5uVT/o5x0I4aMIqv3B98G3HujPq/8TB+ms0c3OmehzsU92YNcivacm7qh0L4PG1YuCkJ6xgGTNxcRxs8XUEmF9qA1kgGhB87d8/hrZegl377Z/WuLg1oWUeRDWhZ9bIBLWsktTMgT1jlq60wjZZSBfXttk6Xpu03K6efAevbYX7i8mXekXHDSbZdL63vrzIbGPAxS87cgQFXfg5K4WUG1LiI168zYFqIeSv5ZdyQE2Hckw3YtTYDki8vRmPqvxhb/jzP1Sk/R964crtN+q1xkfSjgQHDdnjA8ActnJeXUfky74gB268X9c0zNjAg+fLk/1PJu3cr5qPT5CfKz2n+PsqRj07yyGneONQ6X2EhbrEfzA/x4QlTvD8ST6TzmvPqkSYp3v8YcN8O42YpmKe26+WvWJoZkIlV7g7uDc6ukI8O8bR1su2E+fsot5VSoEDyxola5Sssxy33g/khfuYJlzpxvP28Mj+nCSjlEhsw847SDvMu42+5Xn7EZ1MDki9PuTvueWSVSvno0OdSbr5LdxXl76McN5ipETRvHGqZr7Act9wP5of4nMHK8fbzus3Tee1JaqfmDKjtqAEhWlqtV9+JAt5KcgaEuxMDcjd0mI9un77vupS7sKBR/j7Kca2oRtC8cahtvsJS3HI/mB/iU7QUbz+vNzY++QYrDEg7oQExz4+G6+XnXLc0IPny7rk75eP0f2oU8H3z9QKnF+fvoxx4jhpB88ahxvkKC3HL/WB+sgHrzoA6r8xPWorU3+uvVaHxldtUA97zm9Pcbr2cBKKxAcmXp6gfCwFnV8pHl+udF2PAz8X5+yin5sEI5I1D8ICN8xVGcYlX7AfzQ3wu0UrxdF6ZnzXepNmGNK5ym7EBU7nft7br5c+BDQ2o3J0aEM4uzEenuib2jTx2cf6+XO4xLvwcWJ+iro3zFYZx2fClfjA/xIcHLMbTeWV+Urz80TuMiwG1HcbNT85XTdfLz7Lp8E6YLzVUnsDKfvQS11xGp3ozA/aSR6+yH/3EnXy+6lNvZkDrKU1+7EWvsgEtq142oGWNJBvQsuplA1rWSLIBLateNqBljSQb0LLqZQNa1kiyAS2rXjagZY0kG9Cy6mUDWtZIsgEtq142oGWNJBvQsuplA1rWSLIBLateNqBljSQb0LIaqLEBSQ5SIcpblvWkAcnmc58sIP3gichRbS2f09nxOM45PRHosj1v87y8n950PivL2vQPWd6f1iTgaVcAAAAASUVORK5CYII="},3440:function(e,t,n){t.Z=n.p+"assets/images/edit-env-variable-6bf8e6d6d43b5dbf5b30bb7621bd186c.png"},8823:function(e,t){t.Z="data:image/png;base64,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"},7873:function(e,t,n){t.Z=n.p+"assets/images/gh-repo-main-page-60cc1902774ba314442826ed3b13763d.png"},5275:function(e,t){t.Z="data:image/png;base64,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"},3040:function(e,t,n){t.Z=n.p+"assets/images/system-properties-window-40143246359931ebfa6b2248a8208eb4.png"}}]);