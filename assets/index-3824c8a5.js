(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();function d(r,e,...o){let t=Object.assign(Object.assign({},e),{children:[...(e==null?void 0:e.children)||[],...o]});return typeof r=="function"?r(t):{element:r,props:t}}const br=Symbol("Yaff.Fragment");function ar(r){return["number","string"].includes(typeof r)}function tr(r,e){var o,t,n,a;if(!((o=r.props)===null||o===void 0)&&o.children){if(ar(r.props.children)){e.appendChild(document.createTextNode(r.props.children.toString()));return}Array.isArray((t=r.props)===null||t===void 0?void 0:t.children)&&((a=(n=r.props)===null||n===void 0?void 0:n.children)===null||a===void 0||a.forEach(i=>{if(console.log(i),Array.isArray(i)){i.forEach(s=>{B(s,e)});return}i!=null&&B(i,e)}))}}function B(r,e){if(ar(r))return e.appendChild(document.createTextNode(r.toString()));const o=r;if(o.element===br)return tr(o,e);const t=document.createElement(o.element);o.props&&Object.keys(o.props).filter(n=>n!=="children").forEach(n=>{["svg","path"].includes(o.element)?t.setAttribute(n,o.props[n]):t[n]=o.props[n]}),tr(o,t),e.appendChild(t)}function sr(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(o=sr(r[e]))&&(t&&(t+=" "),t+=o);else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function gr(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=sr(r))&&(t&&(t+=" "),t+=e);return t}function mr(){for(var r=0,e,o,t="";r<arguments.length;)(e=arguments[r++])&&(o=lr(e))&&(t&&(t+=" "),t+=o);return t}function lr(r){if(typeof r=="string")return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=lr(r[t]))&&(o&&(o+=" "),o+=e);return o}var _="-";function vr(r){var e=yr(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,n=t===void 0?{}:t;function a(s){var c=s.split(_);return c[0]===""&&c.length!==1&&c.shift(),cr(c,e)||hr(s)}function i(s,c){var f=o[s]||[];return c&&n[s]?[].concat(f,n[s]):f}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function cr(r,e){var i;if(r.length===0)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),n=t?cr(r.slice(1),t):void 0;if(n)return n;if(e.validators.length!==0){var a=r.join(_);return(i=e.validators.find(function(s){var c=s.validator;return c(a)}))==null?void 0:i.classGroupId}}var or=/^\[(.+)\]$/;function hr(r){if(or.test(r)){var e=or.exec(r)[1],o=e==null?void 0:e.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}function yr(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]},n=wr(Object.entries(r.classGroups),o);return n.forEach(function(a){var i=a[0],s=a[1];U(s,t,i,e)}),t}function U(r,e,o,t){r.forEach(function(n){if(typeof n=="string"){var a=n===""?e:nr(e,n);a.classGroupId=o;return}if(typeof n=="function"){if(xr(n)){U(n(t),e,o,t);return}e.validators.push({validator:n,classGroupId:o});return}Object.entries(n).forEach(function(i){var s=i[0],c=i[1];U(c,nr(e,s),o,t)})})}function nr(r,e){var o=r;return e.split(_).forEach(function(t){o.nextPart.has(t)||o.nextPart.set(t,{nextPart:new Map,validators:[]}),o=o.nextPart.get(t)}),o}function xr(r){return r.isThemeGetter}function wr(r,e){return e?r.map(function(o){var t=o[0],n=o[1],a=n.map(function(i){return typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(s){var c=s[0],f=s[1];return[e+c,f]})):i});return[t,a]}):r}function Cr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(a,i){o.set(a,i),e++,e>r&&(e=0,t=o,o=new Map)}return{get:function(i){var s=o.get(i);if(s!==void 0)return s;if((s=t.get(i))!==void 0)return n(i,s),s},set:function(i,s){o.has(i)?o.set(i,s):n(i,s)}}}var dr="!";function Ar(r){var e=r.separator||":",o=e.length===1,t=e[0],n=e.length;return function(i){for(var s=[],c=0,f=0,g,b=0;b<i.length;b++){var m=i[b];if(c===0){if(m===t&&(o||i.slice(b,b+n)===e)){s.push(i.slice(f,b)),f=b+n;continue}if(m==="/"){g=b;continue}}m==="["?c++:m==="]"&&c--}var y=s.length===0?i:i.substring(f),x=y.startsWith(dr),v=x?y.substring(1):y,w=g&&g>f?g-f:void 0;return{modifiers:s,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:w}}}function kr(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(t){var n=t[0]==="[";n?(e.push.apply(e,o.sort().concat([t])),o=[]):o.push(t)}),e.push.apply(e,o.sort()),e}function Mr(r){return{cache:Cr(r.cacheSize),splitModifiers:Ar(r),...vr(r)}}var Sr=/\s+/;function zr(r,e){var o=e.splitModifiers,t=e.getClassGroupId,n=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(Sr).map(function(i){var s=o(i),c=s.modifiers,f=s.hasImportantModifier,g=s.baseClassName,b=s.maybePostfixModifierPosition,m=t(b?g.substring(0,b):g),y=!!b;if(!m){if(!b)return{isTailwindClass:!1,originalClassName:i};if(m=t(g),!m)return{isTailwindClass:!1,originalClassName:i};y=!1}var x=kr(c).join(":"),v=f?x+dr:x;return{isTailwindClass:!0,modifierId:v,classGroupId:m,originalClassName:i,hasPostfixModifier:y}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var s=i.modifierId,c=i.classGroupId,f=i.hasPostfixModifier,g=s+c;return a.has(g)?!1:(a.add(g),n(c,f).forEach(function(b){return a.add(s+b)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function Gr(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,n,a,i=s;function s(f){var g=e[0],b=e.slice(1),m=b.reduce(function(y,x){return x(y)},g());return t=Mr(m),n=t.cache.get,a=t.cache.set,i=c,c(f)}function c(f){var g=n(f);if(g)return g;var b=zr(f,t);return a(f,b),b}return function(){return i(mr.apply(null,arguments))}}function u(r){var e=function(t){return t[r]||[]};return e.isThemeGetter=!0,e}var ur=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ir=/^\d+\/\d+$/,Nr=new Set(["px","full","screen"]),Pr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Er=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Rr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return S(r)||Nr.has(r)||Ir.test(r)||$(r)}function $(r){return z(r,"length",Fr)}function jr(r){return z(r,"size",fr)}function Or(r){return z(r,"position",fr)}function Tr(r){return z(r,"url",Vr)}function O(r){return z(r,"number",S)}function S(r){return!Number.isNaN(Number(r))}function Lr(r){return r.endsWith("%")&&S(r.slice(0,-1))}function N(r){return ir(r)||z(r,"number",ir)}function l(r){return ur.test(r)}function P(){return!0}function M(r){return Pr.test(r)}function Wr(r){return z(r,"",Br)}function z(r,e,o){var t=ur.exec(r);return t?t[1]?t[1]===e:o(t[2]):!1}function Fr(r){return Er.test(r)}function fr(){return!1}function Vr(r){return r.startsWith("url(")}function ir(r){return Number.isInteger(Number(r))}function Br(r){return Rr.test(r)}function Ur(){var r=u("colors"),e=u("spacing"),o=u("blur"),t=u("brightness"),n=u("borderColor"),a=u("borderRadius"),i=u("borderSpacing"),s=u("borderWidth"),c=u("contrast"),f=u("grayscale"),g=u("hueRotate"),b=u("invert"),m=u("gap"),y=u("gradientColorStops"),x=u("gradientColorStopPositions"),v=u("inset"),w=u("margin"),k=u("opacity"),A=u("padding"),H=u("saturate"),T=u("scale"),Z=u("sepia"),J=u("skew"),K=u("space"),X=u("translate"),L=function(){return["auto","contain","none"]},W=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",l,e]},p=function(){return[l,e]},Q=function(){return["",C]},E=function(){return["auto",S,l]},D=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},R=function(){return["solid","dashed","dotted","double","none"]},rr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},V=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",l]},er=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[S,O]},j=function(){return[S,l]};return{cacheSize:500,theme:{colors:[P],spacing:[C],blur:["none","",M,l],brightness:I(),borderColor:[r],borderRadius:["none","","full",M,l],borderSpacing:p(),borderWidth:Q(),contrast:I(),grayscale:G(),hueRotate:j(),invert:G(),gap:p(),gradientColorStops:[r],gradientColorStopPositions:[Lr,$],inset:F(),margin:F(),opacity:I(),padding:p(),saturate:I(),scale:I(),sepia:G(),skew:j(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":er()}],"break-before":[{"break-before":er()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(D(),[l])}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",N]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",N]},l]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[N]},l]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(V())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(V(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(V(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",l,e]}],"min-w":[{"min-w":["min","max","fit",l,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,l]}],h:[{h:[l,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",l,C]}],"max-h":[{"max-h":[l,e,"min","max","fit"]}],"font-size":[{text:["base",M,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",S,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",l,C]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(R(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",l,C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(D(),[Or])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Tr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[].concat(R(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:R()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(R())}],"outline-offset":[{"outline-offset":[l,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",M,Wr]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":rr()}],"bg-blend":[{"bg-blend":rr()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[g]}],invert:[{invert:[b]}],saturate:[{saturate:[H]}],sepia:[{sepia:[Z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[Z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[N,l]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,O]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var $r=Gr(Ur);function pr(...r){return $r(gr(r))}function q({children:r,className:e}){return d("div",{className:pr("max-w-[1200px] mx-auto px-3",e)},r)}function Y({href:r,children:e,className:o}){return d("a",{href:r,className:pr(o)},e)}function Yr(){return d("header",{className:"border-b border-gray-500 h-[50px]"},d(q,{className:"h-full gap-[8px] flex justify-between items-center"},d(Y,{href:"/",className:"font-extrabold text-2xl"},"YAFF"),d("span",null," Check it on ",d(Y,{className:"hover:no-underline underline",href:"https://github.com/eone666/yaff"},"Github"))))}function _r(){return d("footer",{className:"border-t border-gray-500 h-[50px]"},d(q,{className:"h-full gap-[8px] flex justify-center items-center"},d("span",null,"Made with"),d(Y,{href:"https://github.com/eone666/yaff",className:"hover:no-underline underline"},"YAFF")))}function qr(){return d("div",{className:"grid grid-rows-body min-h-screen"},d(Yr,null),d("main",null,d(q,{className:"flex flex-col items-center justify-center gap-2 h-full text-center"},d("h1",{className:"font-bold text-3xl sm:text-5xl"},"YAFF"),d("span",{className:"font-bold text-xl sm:text-3xl"},"Yet Another Frontend Framework"),d("span",{className:"font-bold text-lg sm:text-2xl"},"Dumb React Re-Implementation"),d("div",{className:"mt-10"},d("div",{className:"text-center font-bold"},"TODO"),d("ul",{className:"text-center"},d("li",null,"Hooks"),d("li",null,"Router"),d("li",null,"Changes Detection"),d("li",null,"Partial Update"))))),d(_r,null))}B(d(qr,null),document.getElementById("root"));