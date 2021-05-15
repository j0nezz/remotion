(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2510],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64508:function(e,n,t){"use strict";var r=t(20862).default;n.p=void 0;var a=r(t(2784));t(79165);n.p=function(){var e=(0,a.useRef)(null),n=(0,a.useCallback)((function(){var n;null==(n=e.current)||n.classList.toggle("transparent")}),[]);return a.default.createElement("div",null,a.default.createElement("video",{ref:e,src:"/img/transparent-video.webm",controls:!0,autoPlay:!0,loop:!0}),a.default.createElement("p",{className:"tr-centered",onClick:n},a.default.createElement("button",null,"Toggle transparency")))}},73854:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(2784),t(3905)),i=t(64508),s={id:"transparent-videos",title:"Transparent videos"},l={unversionedId:"transparent-videos",id:"transparent-videos",isDocsHomePage:!1,title:"Transparent videos",description:"Chrome and Firefox support WebM videos with alpha channels. That means that on these browsers, you can embed videos with transparency.",source:"@site/docs/transparent-videos.mdx",sourceDirName:".",slug:"/transparent-videos",permalink:"/docs/transparent-videos",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/transparent-videos.mdx",version:"current",frontMatter:{id:"transparent-videos",title:"Transparent videos"},sidebar:"someSidebar",previous:{title:"Encoding Guide",permalink:"/docs/encoding"},next:{title:"Parametrized rendering",permalink:"/docs/parametrized-rendering"}},d=[{value:"Creating a video with Alpha channel",id:"creating-a-video-with-alpha-channel",children:[]},{value:"Creating a fallback version",id:"creating-a-fallback-version",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:d};function p(e){var n=e.components,t=(0,a.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.default)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Chrome and Firefox support WebM videos with alpha channels. That means that on these browsers, you can embed videos with transparency."),(0,o.mdx)("p",null,"If you are lucky enough to visit the website in one of those supported web browsers, check it out:"),(0,o.mdx)(i.p,{mdxType:"TransparentVideoDemo"}),(0,o.mdx)("h2",{id:"creating-a-video-with-alpha-channel"},"Creating a video with Alpha channel"),(0,o.mdx)("p",null,"In order to create a transparent video, you need at least version 1.4 of Remotion. Make sure to not set any background (use the checkerboard button to ensure your video is transparent). In order to render your videos transparent, you need to change 3 settings:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Render each frame as PNG."),(0,o.mdx)("li",{parentName:"ul"},"Use the VP8 or VP9 codec"),(0,o.mdx)("li",{parentName:"ul"},"Use the ",(0,o.mdx)("inlineCode",{parentName:"li"},"yuva420p")," pixel format.")),(0,o.mdx)("p",null,"If you want to set these options and persist them, add this to your ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," file (create it if you don't yet have one);"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {Config} from 'remotion';\n\nConfig.Rendering.setImageFormat('png')\nConfig.Output.setPixelFormat('yuva420p')\nConfig.Output.setCodec('vp8')\n")),(0,o.mdx)("p",null,"You can also set the settings on the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-console"},"--image-format=png --pixel-format=yuva420p --codec=vp8\n")),(0,o.mdx)("h2",{id:"creating-a-fallback-version"},"Creating a fallback version"),(0,o.mdx)("p",null,"Given the poor browser support, consider making two versions of a video, one with alpha channel, and an opaque video as a fallback. You can achieve this in Remotion using standard React props:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{2}","{2}":!0},"const MyVideo: React.FC<{\n  transparent: boolean;\n}> = ({transparent}) => {\n  return (\n    <div style={{backgroundColor: transparent ? undefined : 'white', flex: 1}}>\n      {/* Omit opaque background based on `transparent` prop */}\n    </div>\n  )\n}\n")),(0,o.mdx)("p",null,"It's a good practice to set a default when defining the composition:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{8-10}","{8-10}":!0},'<Composition\n  id="my-video"\n  component={MyVideo}\n  width={1920}\n  height={1080}\n  fps={30}\n  durationInFrames={150}\n  defaultProps={{\n    transparent: true,\n  }}\n/>\n')),(0,o.mdx)("p",null,"You can then have separate render commands in your package.json:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "render": "remotion render src/index.tsx my-video video.mp4",\n  "render-transparent": "remotion render src/index.tsx --image-format=png --pixel-format=yuva420p --codec=vp8 my-video video-transparent.webm"\n}\n')),(0,o.mdx)("p",null,"Now you can render two variants of the same video and serve a different one\nbased on browser support. You can use APIs like ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"},(0,o.mdx)("inlineCode",{parentName:"a"},"<source>"))," or the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event"},(0,o.mdx)("inlineCode",{parentName:"a"},"canplay"))," event to determine programmatically if a browser is able to play a video."),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/cli"},"CLI options")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/config"},"Configuration option"))))}p.isMDXComponent=!0},79165:function(e,n,t){"use strict";t.r(n)}}]);