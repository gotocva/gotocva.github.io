"use strict";(self.webpackChunkgotocva_blog=self.webpackChunkgotocva_blog||[]).push([[3465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"nodejs-getting-started",title:"Nodejs - Getting started",authors:{name:"Sivabharathy",title:"Sparkout tech solutions",url:"https://github.com/gotocva",image_url:"https://github.com/gotocva.png"},tags:["nodejs","getting started"]},i=void 0,s={permalink:"/blog/nodejs-getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/nodejs-crash-course/getting-started.mdx",source:"@site/blog/nodejs-crash-course/getting-started.mdx",title:"Nodejs - Getting started",description:"Introduction",date:"2022-10-17T15:10:54.864Z",formattedDate:"October 17, 2022",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"getting started",permalink:"/blog/tags/getting-started"}],readingTime:2.605,hasTruncateMarker:!1,authors:[{name:"Sivabharathy",title:"Sparkout tech solutions",url:"https://github.com/gotocva",image_url:"https://github.com/gotocva.png",imageURL:"https://github.com/gotocva.png"}],frontMatter:{slug:"nodejs-getting-started",title:"Nodejs - Getting started",authors:{name:"Sivabharathy",title:"Sparkout tech solutions",url:"https://github.com/gotocva",image_url:"https://github.com/gotocva.png",imageURL:"https://github.com/gotocva.png"},tags:["nodejs","getting started"]},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:3},{value:"Learning path :",id:"learning-path-",level:3},{value:"Installation",id:"installation",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"So, you want to run JavaScript on the server? You\u2019ve come to the right place. Node.js is an open source, cross-platform JavaScript runtime environment for developing server-side and networking applications. This popular server platform is built on Chrome's V8 JavaScript engine and enables you to use JavaScript code outside of a browser."),(0,o.kt)("p",null,"A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm."),(0,o.kt)("p",null,"When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back."),(0,o.kt)("p",null,"This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs."),(0,o.kt)("p",null,"Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language."),(0,o.kt)("p",null,"In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags."),(0,o.kt)("h3",{id:"learning-path-"},"Learning path :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the node program itself, along with npm for managing Node projects"),(0,o.kt)("li",{parentName:"ul"},"Take a tour of Node.js, including the Node runtime, the Read-Eval-Print Loop, the non-blocking I/O model, and the npm     ecosystem"),(0,o.kt)("li",{parentName:"ul"},"Examine Node's module system"),(0,o.kt)("li",{parentName:"ul"},"Learn how to use the Chrome V8 profiler"),(0,o.kt)("li",{parentName:"ul"},"Get an overview of promises"),(0,o.kt)("li",{parentName:"ul"},"Explore event loops, including creating custom events, using streams, and passing arguments to timer callbacks"),(0,o.kt)("li",{parentName:"ul"},"Join a mock Node project team, where you write your first Node.js application"),(0,o.kt)("li",{parentName:"ul"},"Understand the Node package manager and Node dependency management"),(0,o.kt)("li",{parentName:"ul"},"Learn about several tools that can help you test your Node applications to catch any bugs")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Node.js can be installed in different ways. This post highlights the most common and convenient ones. Official packages for all the major platforms are available at ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/download/"},"https://nodejs.dev/download/"),"."),(0,o.kt)("p",null,"One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own. Other package managers for MacOS, Linux, and Windows are listed in ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/download/package-manager/"},"https://nodejs.dev/download/package-manager/")),(0,o.kt)("p",null,"nvm is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks. It is also very useful to test your code with old Node.js versions."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," for more information about this option."),(0,o.kt)("p",null,"In any case, when Node.js is installed you'll have access to the node executable program in the command line.\nCheck the nodejs installation using command line. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3530).Z,width:"682",height:"483"})))}u.isMDXComponent=!0},3530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nodejs-getting-started-18e7ea103a1f9e104d0d56be23690205.png"}}]);