(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9299],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,h=l["".concat(i,".").concat(d)]||l[d]||c[d]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6214:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(2784),n(3905)),i={slug:"1-3",title:"Remotion 1.3",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},p={permalink:"/blog/1-3",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-15-remotion-1-3.md",source:"@site/blog/2021-02-15-remotion-1-3.md",title:"Remotion 1.3",description:"Only 1 week after the initial launch, here is Remotion 1.3! In just 7 days, we have merged over 40 pull requests - just amazing! Let's go over the changes in this release.",date:"2021-02-15T00:00:00.000Z",formattedDate:"February 15, 2021",tags:[],readingTime:3.18,truncated:!1,prevItem:{title:"Remotion 1.4",permalink:"/blog/1-4"},nextItem:{title:"Remotion 1.2",permalink:"/blog/1-2"}},m=[{value:"2x faster - again!",id:"2x-faster---again",children:[]},{value:"Plain-Javascript support",id:"plain-javascript-support",children:[]},{value:"Type-safe configuration file",id:"type-safe-configuration-file",children:[]},{value:"Easing API",id:"easing-api",children:[]},{value:"The small things",id:"the-small-things",children:[]},{value:"In case you missed it",id:"in-case-you-missed-it",children:[]}],s={toc:m};function l(e){var t=e.components,n=(0,a.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.default)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Only 1 week after the initial launch, here is Remotion 1.3! In just 7 days, we have merged over 40 pull requests - just amazing! Let's go over the changes in this release."),(0,o.mdx)("h2",{id:"2x-faster---again"},"2x faster - again!"),(0,o.mdx)("p",null,"2 days ago, the rendering time was cut in half, and in this release, we managed to half it again! Check out this benchmark of the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion-wrapped"},"Spotify Wrapped")," example:"),(0,o.mdx)("p",null,"Remotion 1.1"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-console"},"hyperfine --min-runs 5  'npm run build -- --overwrite --concurrency=16'\nBenchmark #1: npm run build -- --overwrite --concurrency=16\n  Time (mean \xb1 \u03c3):     98.972 s \xb1  0.650 s    [User: 123.329 s, System: 10.103 s]\n  Range (min \u2026 max):   97.951 s \u2026 99.540 s    5 runs\n")),(0,o.mdx)("p",null,"Remotion 1.3"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-console"},"hyperfine --min-runs 5  'npm run build -- --overwrite --concurrency=16'\nBenchmark #1: npm run build -- --overwrite --concurrency=16\n  Time (mean \xb1 \u03c3):     17.921 s \xb1  0.224 s    [User: 36.492 s, System: 3.482 s]\n  Range (min \u2026 max):   17.650 s \u2026 18.264 s    5 runs\n")),(0,o.mdx)("p",null,"From 98 to 18 seconds - that's 5.5 times faster! At the same time, we have reached an important milestone: This 19-second long 720p video was rendered faster than realtime. Granted, my computer is faster than most (8-core Intel i9-9900K chip), but still very impressive!"),(0,o.mdx)("p",null,"We achieved this performance gain through various Puppeteer rendering pipeline optimizations. Big shoutout to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/jeetiss"},"jeetiss")," who implemented a sophisticated performance optimization that doesn't require a page reload for each frame anymore."),(0,o.mdx)("h2",{id:"plain-javascript-support"},"Plain-Javascript support"),(0,o.mdx)("p",null,"My goal was to force Typescript on everybody - but I failed. Support for plain Javascript is now added! See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/javascript"},"here")," how to enable it. Proceed carefully \ud83d\ude48"),(0,o.mdx)("h2",{id:"type-safe-configuration-file"},"Type-safe configuration file"),(0,o.mdx)("p",null,"Many options which you could pass in via CLI flags, you can now also add by adding a ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," file in the repo. For example, if you want to increase the parallelism to the amount of threads you have and never want to write ",(0,o.mdx)("inlineCode",{parentName:"p"},"--overwrite"),", you can add the following to the config file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import os from 'os';\nimport {Config} from 'remotion';\n\nConfig.Rendering.setConcurrency(os.cpus().length);\nConfig.Output.setOverwriteOutput(true);\n")),(0,o.mdx)("p",null,"You can see all the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.remotion.dev/docs/config"},"options on this page"),". The goal of making a config file in Typescript is to provide autocomplete, to easily highlight deprecated options and making it easier to show how to migrate in case the options change in the future."),(0,o.mdx)("h2",{id:"easing-api"},"Easing API"),(0,o.mdx)("p",null,"While there was an Easing API, it was undocumented. Learn which ",(0,o.mdx)("a",{parentName:"p",href:"/docs/easing"},"Easing methods")," are available and how to use it with ",(0,o.mdx)("a",{parentName:"p",href:"/docs/interpolate"},(0,o.mdx)("inlineCode",{parentName:"a"},"interpolate()")),"!"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {interpolate, Easing} from 'remotion';\n\ninterpolate(frame, [0, 100], {\n  easing: Easing.bezier(0.8, 0.22, 0.96, 0.65),\n  extrapolateLeft: 'clamp',\n  extrapolateRight: 'clamp',\n})\n")),(0,o.mdx)("h2",{id:"the-small-things"},"The small things"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"The exports of Remotion have been cleaned up and the internal stuff has been moved into ",(0,o.mdx)("inlineCode",{parentName:"p"},"Internals"),". You shouldn't rely on these APIs are you are at risk of them changing over time.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/83"},"The bundling step now has a progress indicator."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setpixelformat"},"You can now configure a different pixel format that will be passed to FFMPEG"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/95"},"Class properties are now supported."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/91"},"PNG sequences now have padded filenames (",(0,o.mdx)("inlineCode",{parentName:"a"},"element-0000.png")," instead of ",(0,o.mdx)("inlineCode",{parentName:"a"},"element-0.png"),") for better interoperability with ImageMagick and for ensuring the right order in file explorers"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/98"},"Better error messages for when FFMPEG is not correctly linked on Windows"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/92"},"Lots")," ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/93"},"of")," ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/85"},"spelling")," mistakes fixed!")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/78"},"Added analytics for docs")," - You can see how many page views the Remotion docs get ",(0,o.mdx)("a",{parentName:"p",href:"https://app.splitbee.io/public/remotion.dev"},"here"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/97"},"Fixed an issue with PowerShell"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/issues/69"},'Fixed a puppeteer issue "Session closed. Most likely the page has been closed"'),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Big files have been removed from the repository so it's faster to clone."))),(0,o.mdx)("h2",{id:"in-case-you-missed-it"},"In case you missed it"),(0,o.mdx)("p",null,"Another example was added - ",(0,o.mdx)("a",{parentName:"p",href:"https://twitter.com/JNYBGR/status/1360269270526136320"},"Spotify Wrapped!")," This is a fully dynamic example where you can replace all data with a command line flag. There's a 2 hour tutorial on YouTube and the source code is on Github."))}l.isMDXComponent=!0}}]);