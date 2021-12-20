"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2679],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=l.createContext({}),d=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return l.createElement(o.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),s=i,m=p["".concat(o,".").concat(s)]||p[s]||v[s]||c;return t?l.createElement(m,a(a({ref:n},u),{},{components:t})):l.createElement(m,a({ref:n},u))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,a=new Array(c);a[0]=p;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var d=2;d<c;d++)a[d]=t[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var l=t(87462),i=t(63366),c=(t(67294),t(3905)),a=["components"],r={title:"Event Bubbling",sidebar_label:"Event Bubbling",tags:["Frontend"]},o=void 0,d={unversionedId:"react/event_bubbling",id:"react/event_bubbling",title:"Event Bubbling",description:"Event Bubbling in Vanilla JS",source:"@site/docs/react/event_bubbling.mdx",sourceDirName:"react",slug:"/react/event_bubbling",permalink:"/docs/react/event_bubbling",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/react/event_bubbling.mdx",tags:[{label:"Frontend",permalink:"/docs/tags/frontend"}],version:"current",frontMatter:{title:"Event Bubbling",sidebar_label:"Event Bubbling",tags:["Frontend"]},sidebar:"docSidebar",previous:{title:"React with NX",permalink:"/docs/react/nx-react"},next:{title:"Event Listener",permalink:"/docs/react/event_listener"}},u=[{value:"Event Bubbling in Vanilla JS",id:"event-bubbling-in-vanilla-js",children:[],level:2},{value:"Event Bubbling in React",id:"event-bubbling-in-react",children:[],level:2}],v={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,l.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"event-bubbling-in-vanilla-js"},"Event Bubbling in Vanilla JS"),(0,c.kt)("p",null,"Demostrate the native event handling under ",(0,c.kt)("a",{parentName:"p",href:"http://vanilla-js.com/"},"VanillaJS")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  useEffect(() => {\n    const handleBtnClick = (e) => { console.log('Button clicked'); }\n    const handleLiClick  = (e) => { console.log('Li clicked'); }\n    const handleUlClick  = (e) => { console.log('Ul clicked'); }\n    const handleDivClick = (e) => { console.log('Div clicked'); }\n    const handleBtnClickCap = (e) => { console.log('Button clicked (Capture)'); }\n    const handleLiClickCap  = (e) => { console.log('Li clicked (Capture)'); }\n    const handleUlClickCap  = (e) => { console.log('Ul clicked (Capture)'); }\n    const handleDivClickCap = (e) => { console.log('Div clicked (Capture)'); }\n\n    document.getElementById('btn-example-vanilla').addEventListener('click', handleBtnClick)\n    document.getElementById('li-example-vanilla').addEventListener('click', handleLiClick)\n    document.getElementById('ul-example-vanilla').addEventListener('click', handleUlClick)\n    document.getElementById('div-example-vanilla').addEventListener('click', handleDivClick)\n    document.getElementById('btn-example-vanilla').addEventListener('click', handleBtnClickCap, true)\n    document.getElementById('li-example-vanilla').addEventListener('click', handleLiClickCap, true)\n    document.getElementById('ul-example-vanilla').addEventListener('click', handleUlClickCap, true)\n    document.getElementById('div-example-vanilla').addEventListener('click', handleDivClickCap, true)\n\n    return () => {\n      document.getElementById('btn-example-vanilla').removeEventListener('click', handleBtnClick)\n      document.getElementById('li-example-vanilla').removeEventListener('click', handleLiClick)\n      document.getElementById('ul-example-vanilla').removeEventListener('click', handleUlClick)\n      document.getElementById('div-example-vanilla').removeEventListener('click', handleDivClick)\n      document.getElementById('btn-example-vanilla').removeEventListener('click', handleBtnClick, true)\n      document.getElementById('li-example-vanilla').removeEventListener('click', handleLiClick, true)\n      document.getElementById('ul-example-vanilla').removeEventListener('click', handleUlClick, true)\n      document.getElementById('div-example-vanilla').removeEventListener('click', handleDivClick, true)\n    }\n  })\n  return (\n    <div id=\"div-example-vanilla\">\n      <ul id=\"ul-example-vanilla\">\n        <li id=\"li-example-vanilla\">\n          <button id=\"btn-example-vanilla\">Click</button>\n        </li>\n      </ul>\n    </div>\n  );\n}\n")),(0,c.kt)("h2",{id:"event-bubbling-in-react"},"Event Bubbling in React"),(0,c.kt)("p",null,"Same example, but implemented in React"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const handleBtnClick = (e) => { console.log('Button clicked'); }\n  const handleLiClick  = (e) => { console.log('Li clicked'); }\n  const handleUlClick  = (e) => { console.log('Ul clicked'); }\n  const handleDivClick = (e) => { console.log('Div clicked'); }\n  const handleBtnClickCap = (e) => { console.log('Button clicked (Capture)'); }\n  const handleLiClickCap  = (e) => { console.log('Li clicked (Capture)'); }\n  const handleUlClickCap  = (e) => { console.log('Ul clicked (Capture)'); }\n  const handleDivClickCap = (e) => { console.log('Div clicked (Capture)'); }\n\n  return (\n    <div onClick={handleDivClick} onClickCapture={handleDivClickCap}>\n      <ul onClick={handleUlClick} onClickCapture={handleUlClickCap}>\n        <li onClick={handleLiClick} onClickCapture={handleLiClickCap}>\n          <button onClick={handleBtnClick} onClickCapture={handleBtnClickCap}>\n            Click\n          </button>\n        </li>\n      </ul>\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);