"use strict";(self.webpackChunkgotocva_blog=self.webpackChunkgotocva_blog||[]).push([[5101],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(a),d=n,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return a?r.createElement(m,s(s({ref:t},u),{},{components:a})):r.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={slug:"js-data-structures",title:"Data structures in JS",authors:["gotocva"],tags:["javascript","arrays","data structures"],keywords:["data structures","javascript","data structures in js"],image:"https://gotocva.github.io/img/banners/banner-01.png",hide_table_of_contents:!1},s=void 0,i={permalink:"/blog/js-data-structures",source:"@site/blog/javascript/data-structures.md",title:"Data structures in JS",description:"What is a data structure ?",date:"2022-10-28T09:58:51.000Z",formattedDate:"October 28, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"arrays",permalink:"/blog/tags/arrays"},{label:"data structures",permalink:"/blog/tags/data-structures"}],readingTime:4.935,hasTruncateMarker:!0,authors:[{name:"Sivabharathy",title:"Technical Architect at Sparkout tech solutions",url:"https://github.com/gotocva",imageURL:"https://github.com/gotocva.png",key:"gotocva"}],frontMatter:{slug:"js-data-structures",title:"Data structures in JS",authors:["gotocva"],tags:["javascript","arrays","data structures"],keywords:["data structures","javascript","data structures in js"],image:"https://gotocva.github.io/img/banners/banner-01.png",hide_table_of_contents:!1},prevItem:{title:"HTTP Status codes",permalink:"/blog/http-status-codes"}},c={authorsImageUrls:[void 0]},l=[{value:"What is a data structure ?",id:"what-is-a-data-structure-",level:3},{value:"1. Arrays",id:"1-arrays",level:3},{value:"2. Objects",id:"2-objects",level:3}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"what-is-a-data-structure-"},"What is a data structure ?"),(0,n.kt)("p",null,"In software engineering, a data structure is an organisation to coordinate, oversee and store data in a way that permits proficient access and change."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://gotocva.github.io/img/banners/banner-01.png",alt:"banner image"}),"\nAll the more exactly, a data structure is an assortment of data esteems, the connections among them, and the capabilities or tasks that can be applied to that data."),(0,n.kt)("p",null,"These definitions could sound a piece theoretical from the start, yet consider it. In the event that you've been coding for a brief period, you probably utilised data structures previously."),(0,n.kt)("p",null,"Have you utilised exhibits and items? Those are data structures. Every one of them are an assortment of values that connect with one another, and can be worked on by you."),(0,n.kt)("p",null,"JavaScript has crude (worked in) and non-crude (not implicit) data structures."),(0,n.kt)("p",null,"Crude data structures drop of course with the programming language and you can carry out them out of the crate (like exhibits and articles). Non-crude data structures don't stop as a matter of course and you need to code them up to utilize them."),(0,n.kt)("p",null,"Various data structures exist since some of them are more qualified for particular sort of tasks. You can likely handle most programming errands with worked in data structures, however for a few unmistakable undertakings a non-crude data structure might prove to be useful."),(0,n.kt)("p",null,"Presently we should go through the most famous data structures out there, and perceive how every one of them functions, in what events they're valuable, and the way in which we can code them up in JavaScript."),(0,n.kt)("h3",{id:"1-arrays"},"1. Arrays"),(0,n.kt)("p",null,"An array is an assortment of things put away at bordering memory areas."),(0,n.kt)("p",null,"Every thing can be gotten to through its list (position) number. Arrays generally start at file 0, so in an array of 4 components we could get to the third component utilizing the list number 2."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const students = ['siva', 'chan', 'ruban', 'geetha']\nconsole.log(students[2])// ruban\n")),(0,n.kt)("p",null,"The length property of an array is characterized as the quantity of components it contains. In the event that the array contains 4 components, we can say the array has a length of 4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const students = ['siva', 'chan', 'ruban', 'geetha']\nconsole.log(students.length)//4\n")),(0,n.kt)("p",null,"In some programming dialects, the client can store upsides of a similar sort in one array and the length of the array must be characterized right now of its creation and can't be changed subsequently."),(0,n.kt)("p",null,"In JavaScript that is not the situation, as we can store upsides of any kind in a similar array and its length can be dynamic (it can develop or recoil as much as required)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const users = ['siva', 27, 'chan', 28, 'ruban', 25, 'geetha', 26]\n")),(0,n.kt)("p",null,"Any data type can be put away in an array, and that incorporates arrays as well. An array that includes different arrays inside itself is known as a multi-layered array."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [\n    ['siva', 'chan', 'ruban', 'geetha'],\n    [27, 28, 25, 26]\n]\n")),(0,n.kt)("p",null,"In JavaScript, arrays accompany many underlying properties and techniques we can use with various purposes, for example, adding or erasing things from the array, arranging it, sifting its qualities, know its, length, etc. You can track down a full rundown of array techniques here."),(0,n.kt)("p",null,"As I referenced, in arrays, every component has a record characterized by its situation in the array. At the point when we add another thing toward the finish of the array, it simply takes the file number that follows the past last thing in the array."),(0,n.kt)("p",null,"However, when we add/erase another thing toward the start or the center of the array, the lists of the relative multitude of components that come after the component added/erased must be changed. This obviously has a computational expense, and is one of the shortcomings of this data structure."),(0,n.kt)("p",null,"Arrays are helpful when we need to store individual qualities and add/erase values from the finish of the data structure. In any case, when we want to add/erase from any piece of it, there are different data structures that perform all the more effectively (we'll discuss them later on)."),(0,n.kt)("h3",{id:"2-objects"},"2. Objects"),(0,n.kt)("p",null,"In JavaScript, an object is a collection of key-value pairs. This data structure is also called map, dictionary or hash-table in other programming languages."),(0,n.kt)("p",null,"A run of the mill JS object seems to be this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n    prop1: "I\'m",\n    prop2: "an",\n    prop3: "object"\n}\n')),(0,n.kt)("p",null,"We utilize wavy supports to announce the object. Then, at that point, pronounce each critical followed by a colon, and the relating esteem."),(0,n.kt)("p",null,"Something critical to specify is that each key includes to be exceptional inside the object. You can't have two keys with a similar name."),(0,n.kt)("p",null,"Objects can store the two qualities and capabilities. While discussing objects, values are called properties, and capabilities are called techniques."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'const obj = {\n    prop1: "Hi!",\n    prop3: capability() {console.log("I\'m a property buddy!")}\n}\n')),(0,n.kt)("p",null,"To get to properties you can utilize two unique punctuations, either object.property or object",'["property"]',". To get to strategies we call object.method()."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log(obj.prop1)//"Hi!"\nconsole.log(obj["prop1"])//"Hi!"\nobj.prop3()//"I\'m a property man!"\n')),(0,n.kt)("p",null,"The linguistic structure to allocate new qualities is very comparable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'obj.prop4 = 125\nobj["prop5"] = "The new prop on the block"\nobj.prop6 = () => console.log("yet another model")\n\nconsole.log(obj.prop4)//125\nconsole.log(obj["prop5"])//"The new prop on the block"\nobj.prop6()//"one more model"\n')),(0,n.kt)("p",null,"Like clusters, in JavaScript objects accompany many implicit strategies that permit us to perform various tasks and get data from a given object. A full rundown can be viewed as here."),(0,n.kt)("p",null,"Objects are an effective method for gathering data that share something practically speaking or are some way or another related. Likewise, because of the way that property names are remarkable, objects prove to be useful when we need to isolate data in light of a novel condition."),(0,n.kt)("p",null,"A model could be counting the number of individuals that like various food sources:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const obj = {\n    pizzaLovers: 1000,\n    pastaLovers: 750,\n    argentinianAsadoLovers: 12312312312313123\n}\n")))}p.isMDXComponent=!0}}]);