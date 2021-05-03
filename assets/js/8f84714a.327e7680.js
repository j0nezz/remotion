(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3259],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3238:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o={title:"measureSpring()",id:"measure-spring"},s={unversionedId:"measure-spring",id:"measure-spring",isDocsHomePage:!1,title:"measureSpring()",description:"Based on a spring() configuration and the frame rate, return how long it takes for a spring animation to settle.",source:"@site/docs/measure-spring.md",sourceDirName:".",slug:"/measure-spring",permalink:"/docs/measure-spring",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/measure-spring.md",version:"current",frontMatter:{title:"measureSpring()",id:"measure-spring"},sidebar:"someSidebar",previous:{title:"getInputProps()",permalink:"/docs/get-input-props"},next:{title:"random()",permalink:"/docs/random"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>fps</code>",id:"fps",children:[]},{value:"<code>threshold</code>",id:"threshold",children:[]},{value:"<code>config?</code>",id:"config",children:[]},{value:"<code>from?</code>",id:"from",children:[]},{value:"<code>to?</code>",id:"to",children:[]}]},{value:"See also",id:"see-also",children:[]}],l={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Based on a ",(0,i.kt)("a",{parentName:"p",href:"/docs/spring"},"spring()")," configuration and the frame rate, return how long it takes for a spring animation to settle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  measureSpring,\n  SpringConfig\n} from 'remotion';\n\n\nconst config: SpringConfig = {\n  damping: 200,\n}\n\nmeasureSpring({\n  fps: 30,\n  config: {\n    damping: 200\n  }\n}); // => 23\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Theoretically, a spring animation never ends. There is always a miniscule amount or energy left in the spring that causes tiny movements. Instead, we set a threshold to define when the spring animation is considered done."))),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,"An object with these keys:"),(0,i.kt)("h3",{id:"fps"},(0,i.kt)("inlineCode",{parentName:"h3"},"fps")),(0,i.kt)("p",null,"The frame rate on which the spring animation is based on."),(0,i.kt)("h3",{id:"threshold"},(0,i.kt)("inlineCode",{parentName:"h3"},"threshold")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"optional - default: ",(0,i.kt)("inlineCode",{parentName:"em"},"0.005"))),(0,i.kt)("p",null,"Defines when the animation should be considered finished. ",(0,i.kt)("inlineCode",{parentName:"p"},"0.01")," means that the animation is finished when it always stays within 1% of the ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," value. For example an animation that goes from 0 to 1 is considered finished when the value never leaves the range ","[0.99, 1.01]"," after the end point."),(0,i.kt)("p",null,"Lower values mean the spring duration is longer, higher values result in the spring duration being shorter."),(0,i.kt)("h3",{id:"config"},(0,i.kt)("inlineCode",{parentName:"h3"},"config?")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"optional")),(0,i.kt)("p",null,"The spring configuration that you pass to ",(0,i.kt)("a",{parentName:"p",href:"/docs/spring#config"},"spring()"),"."),(0,i.kt)("h3",{id:"from"},(0,i.kt)("inlineCode",{parentName:"h3"},"from?")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"optional - default: ",(0,i.kt)("inlineCode",{parentName:"em"},"1"))),(0,i.kt)("p",null,"The initial value of the animation."),(0,i.kt)("h3",{id:"to"},(0,i.kt)("inlineCode",{parentName:"h3"},"to?")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"optional - default: ",(0,i.kt)("inlineCode",{parentName:"em"},"1"))),(0,i.kt)("p",null,"The end value of the animation. Note that depending on the parameters, spring animations may overshoot the target a bit, before they bounce back to their final target."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/spring"},"spring()"))))}c.isMDXComponent=!0}}]);