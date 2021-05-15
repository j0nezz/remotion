(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6504],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){return function(t){var n=c(t.components);return o.createElement(e,i({},t,{components:n}))}},c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||s[m]||i;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70611:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var o=n(22122),r=n(19756),i=(n(2784),n(3905)),a={title:"<Video />",id:"video"},l={unversionedId:"video",id:"video",isDocsHomePage:!1,title:"<Video />",description:"This component allows you to include a video file in your Remotion project. While in the preview, the video will just play in a HTML5 `` tag, during render, the exact frame needed will be extracted.",source:"@site/docs/video.md",sourceDirName:".",slug:"/video",permalink:"/docs/video",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/video.md",version:"current",frontMatter:{title:"<Video />",id:"video"},sidebar:"someSidebar",previous:{title:"<Sequence />",permalink:"/docs/sequence"},next:{title:"<AbsoluteFill />",permalink:"/docs/absolute-fill"}},d=[{value:"API / Example",id:"api--example",children:[]},{value:"Codec support",id:"codec-support",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,r.default)(e,["components"]);return(0,i.mdx)("wrapper",(0,o.default)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This component allows you to include a video file in your Remotion project. While in the preview, the video will just play in a HTML5 ",(0,i.mdx)("inlineCode",{parentName:"p"},"<video>")," tag, during render, the exact frame needed will be extracted."),(0,i.mdx)("h2",{id:"api--example"},"API / Example"),(0,i.mdx)("p",null,"Use an import or require to load an video file and pass it as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," prop. All the props that the native ",(0,i.mdx)("inlineCode",{parentName:"p"},"<video>")," element accepts (except ",(0,i.mdx)("inlineCode",{parentName:"p"},"autoplay")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"controls"),") will be forwarded (but of course not all are useful for Remotion). This means you can use all CSS to style the video."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<Video>")," also accepts a ",(0,i.mdx)("inlineCode",{parentName:"p"},"volume")," prop which allows you to control the volume for the whole track or change it on a per-frame basis. Refer to the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/using-audio#controlling-volume"},"using audio")," guide to learn how to use it."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"<Video>")," has two more helper props: ",(0,i.mdx)("inlineCode",{parentName:"p"},"startFrom")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"endAt")," to define when the video should start and end. Both are optional and do not get forwarded to the native ",(0,i.mdx)("inlineCode",{parentName:"p"},"<video>")," element but tell Remotion which portion of the video to use."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {Video} from 'remotion';\nimport video from './video.webm';\n\nexport const MyVideo = () => {\n  return (\n    <div>\n      <div>Hello World!</div>\n      <Video\n        src={video}\n        startFrom={59} // if video is 30fps, then it will start at 2s\n        endAt={120} // if video is 30fps, then it will end at 4s\n        style={{height: 1080 / 2, width: 1920 / 2}}\n      />\n    </div>\n  )\n}\n")),(0,i.mdx)("h2",{id:"codec-support"},"Codec support"),(0,i.mdx)("p",null,"Pay attention to the codec of the video that you are importing. During the render process, Chrome needs to support playing the video that you are embedding. If Remotion cannot find a preinstalled version of Chrome, it will download a Chromium executable which does not support the playback of H264 (common codec for MP4 videos). To work around this problem, you have multiple options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Tell Remotion which path for Chrome to use by using the command line flag ",(0,i.mdx)("inlineCode",{parentName:"li"},"--browser-executable")," or ",(0,i.mdx)("a",{parentName:"li",href:"/docs/config#setbrowserexecutable"},"configure")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"Config.Puppeteer.setBrowserExecutable()")," in a config file."),(0,i.mdx)("li",{parentName:"ul"},"Convert your videos to WebM before embedding them.")),(0,i.mdx)("p",null,"Prior to Remotion 1.5, Remotion will always use an internal Puppeteer binary and MP4 videos are therefore not supported."),(0,i.mdx)("p",null,"If you would like Remotion to warn you when you import an MP4 video, you can turn on the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@remotion/no-mp4-import")," ESLint rule."),(0,i.mdx)("h2",{id:"see-also"},"See also"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"<Audio />")))))}u.isMDXComponent=!0}}]);