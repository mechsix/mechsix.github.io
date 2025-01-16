"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41831],{99315:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"react/event_bubbling","title":"Event Bubbling","description":"Event Bubbling in Vanilla JS","source":"@site/docs/react/event_bubbling.mdx","sourceDirName":"react","slug":"/react/event_bubbling","permalink":"/docs/react/event_bubbling","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Frontend","permalink":"/docs/tags/frontend"}],"version":"current","frontMatter":{"title":"Event Bubbling","sidebar_label":"Event Bubbling","tags":["Frontend"]},"sidebar":"docSidebar","previous":{"title":"React with NX","permalink":"/docs/react/nx-react"},"next":{"title":"Event Listener","permalink":"/docs/react/event_listener"}}');var i=l(74848),c=l(28453);const a={title:"Event Bubbling",sidebar_label:"Event Bubbling",tags:["Frontend"]},o=void 0,d={},r=[{value:"Event Bubbling in Vanilla JS",id:"event-bubbling-in-vanilla-js",level:2},{value:"Event Bubbling in React",id:"event-bubbling-in-react",level:2}];function s(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"event-bubbling-in-vanilla-js",children:"Event Bubbling in Vanilla JS"}),"\n",(0,i.jsxs)(n.p,{children:["Demostrate the native event handling under ",(0,i.jsx)(n.a,{href:"http://vanilla-js.com/",children:"VanillaJS"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\n  useEffect(() => {\n    const handleBtnClick = (e) => { console.log('Button clicked'); }\n    const handleLiClick  = (e) => { console.log('Li clicked'); }\n    const handleUlClick  = (e) => { console.log('Ul clicked'); }\n    const handleDivClick = (e) => { console.log('Div clicked'); }\n    const handleBtnClickCap = (e) => { console.log('Button clicked (Capture)'); }\n    const handleLiClickCap  = (e) => { console.log('Li clicked (Capture)'); }\n    const handleUlClickCap  = (e) => { console.log('Ul clicked (Capture)'); }\n    const handleDivClickCap = (e) => { console.log('Div clicked (Capture)'); }\n\n    document.getElementById('btn-example-vanilla').addEventListener('click', handleBtnClick)\n    document.getElementById('li-example-vanilla').addEventListener('click', handleLiClick)\n    document.getElementById('ul-example-vanilla').addEventListener('click', handleUlClick)\n    document.getElementById('div-example-vanilla').addEventListener('click', handleDivClick)\n    document.getElementById('btn-example-vanilla').addEventListener('click', handleBtnClickCap, true)\n    document.getElementById('li-example-vanilla').addEventListener('click', handleLiClickCap, true)\n    document.getElementById('ul-example-vanilla').addEventListener('click', handleUlClickCap, true)\n    document.getElementById('div-example-vanilla').addEventListener('click', handleDivClickCap, true)\n\n    return () => {\n      document.getElementById('btn-example-vanilla').removeEventListener('click', handleBtnClick)\n      document.getElementById('li-example-vanilla').removeEventListener('click', handleLiClick)\n      document.getElementById('ul-example-vanilla').removeEventListener('click', handleUlClick)\n      document.getElementById('div-example-vanilla').removeEventListener('click', handleDivClick)\n      document.getElementById('btn-example-vanilla').removeEventListener('click', handleBtnClick, true)\n      document.getElementById('li-example-vanilla').removeEventListener('click', handleLiClick, true)\n      document.getElementById('ul-example-vanilla').removeEventListener('click', handleUlClick, true)\n      document.getElementById('div-example-vanilla').removeEventListener('click', handleDivClick, true)\n    }\n  })\n  return (\n    <div id=\"div-example-vanilla\">\n      <ul id=\"ul-example-vanilla\">\n        <li id=\"li-example-vanilla\">\n          <button id=\"btn-example-vanilla\">Click</button>\n        </li>\n      </ul>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"event-bubbling-in-react",children:"Event Bubbling in React"}),"\n",(0,i.jsx)(n.p,{children:"Same example, but implemented in React"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Example() {\n  const handleBtnClick = (e) => { console.log('Button clicked'); }\n  const handleLiClick  = (e) => { console.log('Li clicked'); }\n  const handleUlClick  = (e) => { console.log('Ul clicked'); }\n  const handleDivClick = (e) => { console.log('Div clicked'); }\n  const handleBtnClickCap = (e) => { console.log('Button clicked (Capture)'); }\n  const handleLiClickCap  = (e) => { console.log('Li clicked (Capture)'); }\n  const handleUlClickCap  = (e) => { console.log('Ul clicked (Capture)'); }\n  const handleDivClickCap = (e) => { console.log('Div clicked (Capture)'); }\n\n  return (\n    <div onClick={handleDivClick} onClickCapture={handleDivClickCap}>\n      <ul onClick={handleUlClick} onClickCapture={handleUlClickCap}>\n        <li onClick={handleLiClick} onClickCapture={handleLiClickCap}>\n          <button onClick={handleBtnClick} onClickCapture={handleBtnClickCap}>\n            Click\n          </button>\n        </li>\n      </ul>\n    </div>\n  );\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>o});var t=l(96540);const i={},c=t.createContext(i);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);