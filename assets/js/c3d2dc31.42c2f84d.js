"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2852],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37306:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Event Listener",sidebar_label:"Event Listener",tags:["Frontend"]},l=void 0,u={unversionedId:"react/event_listener",id:"react/event_listener",title:"Event Listener",description:"Native event & React",source:"@site/docs/react/event_listener.md",sourceDirName:"react",slug:"/react/event_listener",permalink:"/docs/react/event_listener",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/react/event_listener.md",tags:[{label:"Frontend",permalink:"/docs/tags/frontend"}],version:"current",frontMatter:{title:"Event Listener",sidebar_label:"Event Listener",tags:["Frontend"]},sidebar:"docSidebar",previous:{title:"Event Bubbling",permalink:"/docs/react/event_bubbling"},next:{title:"useState & useMemo",permalink:"/docs/react/use-state"}},s=[{value:"Native event &amp; React",id:"native-event--react",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"native-event--react"},"Native event & React"),(0,o.kt)("p",null,"Example to demostrate why component lifecycle matters in a React component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const [rCounter, setRCounter] = useState(0)\n  let nCounterRef = useRef()\n\n  useEffect(() => {\n    const handleNativeClick = (e) => {\n        nCounterRef.current.innerText = (parseInt(nCounterRef.current.innerText) + 1)\n    }\n\n    document.getElementById('btn-example-native').addEventListener('click', handleNativeClick);\n\n    // return () => {\n    //   document.getElementById('btn-example-native').removeEventListener('click', handleNativeClick)\n    // }\n  })\n\n  const handleReactClick = () => {\n    setRCounter(rCounter => rCounter + 1)\n  }\n\n  return (\n    <table><tbody>\n        <tr><td>\n            <button id=\"btn-example-native\">Native Click</button>\n        </td><td>\n            <span ref={nCounterRef}>0</span>\n        </td></tr>\n        <tr><td>\n            <button onClick={handleReactClick}>React Click</button>\n        </td><td>\n            <span>{rCounter}</span>\n        </td></tr>\n    </tbody></table>\n  );\n}\n")))}d.isMDXComponent=!0}}]);