"use strict";(self.webpackChunkgotocva_blog=self.webpackChunkgotocva_blog||[]).push([[5704],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,v=h["".concat(i,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(v,l(l({ref:t},d),{},{components:a})):n.createElement(v,l({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"nodejs-var-let-const",title:"var, let, and const in javaScript",authors:{name:"Sivabharathy",title:"Sparkout tech solutions",url:"https://github.com/gotocva",image_url:"https://github.com/gotocva.png"},tags:["nodejs","getting started"]},l=void 0,s={unversionedId:"nodejs-crash-course/var-let-const",id:"nodejs-crash-course/var-let-const",title:"var, let, and const in javaScript",description:"In JavaScript, variables can be declared using three different methods:",source:"@site/docs/nodejs-crash-course/02.var-let-const.mdx",sourceDirName:"nodejs-crash-course",slug:"/nodejs-crash-course/nodejs-var-let-const",permalink:"/docs/nodejs-crash-course/nodejs-var-let-const",draft:!1,tags:[{label:"nodejs",permalink:"/docs/tags/nodejs"},{label:"getting started",permalink:"/docs/tags/getting-started"}],version:"current",sidebarPosition:2,frontMatter:{slug:"nodejs-var-let-const",title:"var, let, and const in javaScript",authors:{name:"Sivabharathy",title:"Sparkout tech solutions",url:"https://github.com/gotocva",image_url:"https://github.com/gotocva.png"},tags:["nodejs","getting started"]},sidebar:"tutorialSidebar",previous:{title:"Nodejs - Getting started",permalink:"/docs/nodejs-crash-course/nodejs-getting-started"},next:{title:"Operators in javascript",permalink:"/docs/nodejs-crash-course/operators-in-javascript"}},i={},c=[{value:"let is Block Scoped",id:"let-is-block-scoped",level:3},{value:"The const Keyword in JavaScript",id:"the-const-keyword-in-javascript",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In JavaScript, variables can be declared using three different methods: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"var"),(0,r.kt)("li",{parentName:"ul"},"let"),(0,r.kt)("li",{parentName:"ul"},"const")),(0,r.kt)("p",null,"In this article, we will discuss the differences between these three ways of creating variables."),(0,r.kt)("p",null,"Variables declared with var and const are scoped to the immediate function body.\nVariables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in their enclosing scope even before they are declared.\nVariables declared with the let keyword are block-scoped, which means the variables will have scope to the immediate enclosing block."),(0,r.kt)("p",null,"Issues with var for Variable Declaration\nOne of the issues is that the variables declared with the var keyword can be re-declared or updated in the same scope. This could lead to a serious problem if we declare another variable with the same name in the same scope; the new value will replace the old one. Check out the following code-snippet for illustration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var name ="sivabharathy";\nvar name= "gotocva";\nconsole.log(name); // output gotocva\nvar name="siva";\nconsole.log(name); // output siva\n')),(0,r.kt)("p",null,"Another issue with the var keyword is that if you declare a variable without the keyword var, then that variable will have global scope. To get a better understanding, consider the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for(x = 0; x < array.length; x++){  //index has a global scope\n   //code\n}\n")),(0,r.kt)("p",null,"In the above code snippet, the JavaScript for loop will create variable x in the global scope. If you would create a new variable with the same name x and use it somewhere else in the program, then that new variable\u2019s value will get overwritten."),(0,r.kt)("h3",{id:"let-is-block-scoped"},"let is Block Scoped"),(0,r.kt)("p",null,"The let keyword should be used in situations where you want to declare a variable that should be restricted to the block in which it is restricted. Also, variables declared with the let keyword cannot be updated or re-declared. Here is an example of how to use let to declare variables in JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function func() {\n    let x = 10; \n \n    if(x === 10) {\n        let y = 20; \n \n        console.log(x); //Output 10\n        console.log(y); //Output 20\n    }\n     \n    console.log(x); // Output 10\n    console.log(y); // \u2019undefined'\n}\nfunc();\n")),(0,r.kt)("p",null,"Note that the variable y declared with the let keyword is not accessible beyond the if block in which it is declared. If we would have declared it with the var keyword, then it would have been available, because var has global scope within a function. The following code snippet will help you to better understand this train of thought:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function func() {\n    console.log(x);     //Output 'undefined'\n    console.log(y);     //Error - \"Uncaught ReferenceError: y is not defined\"\n     \n    var x = 10;\n    let y = 20;\n}\n \nfunc();\n")),(0,r.kt)("p",null,"Another thing to consider is that let cannot be used before its declaration. If you do so, it will result in a ReferenceError."),(0,r.kt)("h3",{id:"the-const-keyword-in-javascript"},"The const Keyword in JavaScript"),(0,r.kt)("p",null,"The const keyword follows the same rules as the let keyword. The only difference with const is that const is used to define only constant values in JavaScript programs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const PI = 3.14;\n \nPI = 3.141; // Uncaught TypeError: Assignment to constant variable.\n")),(0,r.kt)("p",null,"const Declarations are Block Scoped\nThe scoping principles of const are the same as that of the let keyword. Like let, the variables declared with the const keyword will also have scope restricted to the block in which they are declared."),(0,r.kt)("p",null,"Some important pointers for const include:"),(0,r.kt)("p",null,"const declares a variable with a constant value.\nUse the const keyword if the variable that you are declaring should not be allowed to be reassigned in the future."))}u.isMDXComponent=!0}}]);