(self.webpackChunkblue_line=self.webpackChunkblue_line||[]).push([[685],{5162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});r(7294);var n=r(6905);const a={tabItem:"tabItem_Ymn6"};var o=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(7294),a=r(6905),o=r(2466),l=r(6550),i=r(469),s=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function y(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),m=(()=>{const e=u??f;return y({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var P=r(5893);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=s.indexOf(t),a=i[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,P.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,P.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,P.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,P.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,P.jsx)(g,{...e,...t}),(0,P.jsx)(v,{...e,...t})]})}function O(e){const t=(0,b.Z)();return(0,P.jsx)(w,{...e,children:d(e.children)},String(t))}},9996:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function a(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function l(e,t){try{return t in e}catch(r){return!1}}function i(e,t,r){var a={};return r.isMergeableObject(e)&&o(e).forEach((function(t){a[t]=n(e[t],r)})),o(t).forEach((function(o){(function(e,t){return l(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(l(e,o)&&r.isMergeableObject(t[o])?a[o]=function(e,t){if(!t.customMerge)return s;var r=t.customMerge(e);return"function"==typeof r?r:s}(o,r)(e[o],t[o],r):a[o]=n(t[o],r))})),a}function s(e,r,o){(o=o||{}).arrayMerge=o.arrayMerge||a,o.isMergeableObject=o.isMergeableObject||t,o.cloneUnlessOtherwiseSpecified=n;var l=Array.isArray(r);return l===Array.isArray(e)?l?o.arrayMerge(e,r,o):i(e,r,o):n(r,o)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return s(e,r,t)}),{})};var u=s;e.exports=u},9090:e=>{function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},l.type=n.type||"text/javascript",l.charset=n.charset||"utf8",l.async=!("async"in n)||!!n.async,l.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(l,n.attrs),n.text&&(l.text=""+n.text),("onload"in l?t:r)(l,a),l.onload||t(l,a),o.appendChild(l)}},845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function a(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(a=e[r],o=t[r],!(a===o||n(a)&&n(o)))return!1;var a,o;return!0}const o=function(e,t){var r;void 0===t&&(t=a);var n,o=[],l=!1;return function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return l&&r===this&&t(a,o)||(n=e.apply(this,a),l=!0,r=this,o=a),n}}},722:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>P}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var h=d(r(7294)),f=d(r(9590)),b=r(5741),m=r(8045);class P extends h.Component{constructor(){super(...arguments),p(this,"mounted",!1),p(this,"isReady",!1),p(this,"isPlaying",!1),p(this,"isLoading",!0),p(this,"loadOnReady",null),p(this,"startOnPlay",!0),p(this,"seekOnPlay",null),p(this,"onDurationCalled",!1),p(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),p(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),p(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),p(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),p(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),p(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),p(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),p(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),p(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),p(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:a,playbackRate:o,pip:l,loop:i,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,f.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&l&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!l&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==a&&(a?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?h.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}p(P,"displayName","Player"),p(P,"propTypes",b.propTypes),p(P,"defaultProps",b.defaultProps)},390:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{createReactPlayer:()=>I}),e.exports=(n=y,c(o({},"__esModule",{value:!0}),n));var h=d(r(7294)),f=d(r(9996)),b=d(r(845)),m=d(r(9590)),P=r(5741),g=r(8045),v=d(r(722));const w=(0,h.lazy)((()=>r.e(664).then(r.t.bind(r,3855,23)))),O="undefined"!=typeof window&&window.document,k=void 0!==r.g&&r.g.window&&r.g.window.document,T=Object.keys(P.propTypes),_=O||k?h.Suspense:()=>null,j=[],I=(e,t)=>{var r;return r=class extends h.Component{constructor(){super(...arguments),p(this,"state",{showPreview:!!this.props.light}),p(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),p(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),p(this,"showPreview",(()=>{this.setState({showPreview:!0})})),p(this,"getDuration",(()=>this.player?this.player.getDuration():null)),p(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),p(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),p(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),p(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),p(this,"handleReady",(()=>{this.props.onReady(this)})),p(this,"getActivePlayer",(0,b.default)((r=>{for(const t of[...j,...e])if(t.canPlay(r))return t;return t||null}))),p(this,"getConfig",(0,b.default)(((e,t)=>{const{config:r}=this.props;return f.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),p(this,"getAttributes",(0,b.default)((e=>(0,g.omit)(this.props,T)))),p(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return h.default.createElement(v.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,m.default)(this.props,e)||!(0,m.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a}=this.props;return h.default.createElement(w,{url:e,light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:a,wrapper:o}=this.props,{showPreview:l}=this.state,i=this.getAttributes(e),s="string"==typeof o?this.references.wrapper:void 0;return h.default.createElement(o,{ref:s,style:{...t,width:r,height:n},...i},h.default.createElement(_,{fallback:a},l?this.renderPreview(e):this.renderActivePlayer(e)))}},p(r,"displayName","ReactPlayer"),p(r,"propTypes",P.propTypes),p(r,"defaultProps",P.defaultProps),p(r,"addCustomPlayer",(e=>{j.push(e)})),p(r,"removeCustomPlayers",(()=>{j.length=0})),p(r,"canPlay",(t=>{for(const r of[...j,...e])if(r.canPlay(t))return!0;return!1})),p(r,"canEnablePIP",(t=>{for(const r of[...j,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}},2004:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var p=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(6497)),y=r(390);const h=p.default[p.default.length-1];var f=(0,y.createReactPlayer)(p.default,h)},1776:(e,t,r)=>{var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>k,DASH_EXTENSIONS:()=>j,FLV_EXTENSIONS:()=>I,HLS_EXTENSIONS:()=>_,MATCH_URL_DAILYMOTION:()=>g,MATCH_URL_FACEBOOK:()=>y,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>O,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_SOUNDCLOUD:()=>d,MATCH_URL_STREAMABLE:()=>f,MATCH_URL_TWITCH_CHANNEL:()=>P,MATCH_URL_TWITCH_VIDEO:()=>m,MATCH_URL_VIDYARD:()=>w,MATCH_URL_VIMEO:()=>p,MATCH_URL_WISTIA:()=>b,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>T,canPlay:()=>S}),e.exports=(n=s,((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of l(t))i.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e})(a({},"__esModule",{value:!0}),n));var u=r(8045);const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,d=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,p=/vimeo\.com\/(?!progressive_redirect).+/,y=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,f=/streamable\.com\/([a-z0-9]+)$/,b=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,m=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,P=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,g=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,w=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,O=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,k=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,T=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,_=/\.(m3u8)($|\?)/i,j=/\.(mpd)($|\?)/i,I=/\.(flv)($|\?)/i,E=e=>{if(e instanceof Array){for(const t of e){if("string"==typeof t&&E(t))return!0;if(E(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(k.test(e)||T.test(e)||_.test(e)||j.test(e)||I.test(e))},S={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>d.test(e)&&!k.test(e),vimeo:e=>p.test(e)&&!T.test(e)&&!_.test(e),facebook:e=>y.test(e)||h.test(e),streamable:e=>f.test(e),wistia:e=>b.test(e),twitch:e=>m.test(e)||P.test(e),dailymotion:e=>g.test(e),mixcloud:e=>v.test(e),vidyard:e=>w.test(e),kaltura:e=>O.test(e),file:E}},6497:(e,t,r)=>{Object.create;var n,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of l(t))i.call(e,s)||s===r||a(e,s,{get:()=>t[s],enumerable:!(n=o(t,s))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),e.exports=(n=u,s(a({},"__esModule",{value:!0}),n));var c=r(7294),d=r(8045),p=r(1776),y=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(439).then(r.t.bind(r,356,23))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(125).then(r.t.bind(r,2648,23))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(743).then(r.t.bind(r,868,23))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(121).then(r.t.bind(r,1972,23))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(546).then(r.t.bind(r,993,23))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(55).then(r.t.bind(r,8018,23))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(216).then(r.t.bind(r,9482,23))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(596).then(r.t.bind(r,6807,23))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(667).then(r.t.bind(r,3644,23))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(888).then(r.t.bind(r,6596,23))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(261).then(r.t.bind(r,3911,23))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,d.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(11).then(r.t.bind(r,4926,23))))}]},5741:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{defaultProps:()=>T,propTypes:()=>O}),e.exports=(n=d,c(o({},"__esModule",{value:!0}),n));var p=((e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(5697));const{string:y,bool:h,number:f,array:b,oneOfType:m,shape:P,object:g,func:v,node:w}=p.default,O={url:m([y,b,g]),playing:h,loop:h,controls:h,volume:f,muted:h,playbackRate:f,width:m([y,f]),height:m([y,f]),style:g,progressInterval:f,playsinline:h,pip:h,stopOnUnmount:h,light:m([h,y,g]),playIcon:w,previewTabIndex:f,fallback:w,oEmbedUrl:y,wrapper:m([y,v,P({render:v.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:v}),facebook:P({appId:y,version:y,playerId:y,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:y}),file:P({attributes:g,tracks:b,forceVideo:h,forceAudio:h,forceHLS:h,forceSafariHLS:h,forceDisableHls:h,forceDASH:h,forceFLV:h,hlsOptions:g,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:P({options:g,playerId:y,customControls:b}),mixcloud:P({options:g}),twitch:P({options:g,playerId:y}),vidyard:P({options:g})}),onReady:v,onStart:v,onPlay:v,onPause:v,onBuffer:v,onBufferEnd:v,onEnded:v,onError:v,onDuration:v,onSeek:v,onPlaybackRateChange:v,onPlaybackQualityChange:v,onProgress:v,onClickPreview:v,onEnablePIP:v,onDisablePIP:v},k=()=>{},T={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},8045:(e,t,r)=>{var n,a=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))u.call(e,a)||a===r||o(e,a,{get:()=>t[a],enumerable:!(n=l(t,a))||n.enumerable});return e},d=(e,t,r)=>(r=null!=e?a(s(e)):{},c(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(p,{callPlayer:()=>S,getConfig:()=>I,getSDK:()=>j,isBlobUrl:()=>R,isMediaStream:()=>C,omit:()=>E,parseEndTime:()=>w,parseStartTime:()=>v,queryString:()=>k,randomString:()=>O,supportsWebKitPresentationMode:()=>A}),e.exports=(n=p,c(o({},"__esModule",{value:!0}),n));var y=d(r(9090)),h=d(r(9996));const f=/[?&#](?:start|t)=([0-9hms]+)/,b=/[?&#]end=([0-9hms]+)/,m=/(\d+)(h|m|s)/g,P=/^\d+$/;function g(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(m))return function(e){let t=0,r=m.exec(e);for(;null!==r;){const[,n,a]=r;"h"===a&&(t+=60*parseInt(n,10)*60),"m"===a&&(t+=60*parseInt(n,10)),"s"===a&&(t+=parseInt(n,10)),r=m.exec(e)}return t}(e);if(P.test(e))return parseInt(e)}}function v(e){return g(e,f)}function w(e){return g(e,b)}function O(){return Math.random().toString(36).substr(2,5)}function k(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function T(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const _={},j=function(e){0;return e}((function(e,t,r=null,n=(()=>!0),a=y.default){const o=T(t);return o&&n(o)?Promise.resolve(o):new Promise(((n,o)=>{if(_[e])return void _[e].push({resolve:n,reject:o});_[e]=[{resolve:n,reject:o}];const l=t=>{_[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),l(T(t))}}a(e,(n=>{n?(_[e].forEach((e=>e.reject(n))),_[e]=null):r||l(T(t))}))}))}));function I(e,t){return(0,h.default)(t.config,e.config)}function E(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const o of a)-1===r.indexOf(o)&&(n[o]=e[o]);return n}function S(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function C(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream}function R(e){return/^blob:/.test(e)}function A(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t}},1151:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i,a:()=>l});var n=r(7294);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);