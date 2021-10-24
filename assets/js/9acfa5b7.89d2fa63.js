"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[309],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return i},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],s={sidebar_label:"useState & useMemo"},u=void 0,l={unversionedId:"react/use-state",id:"react/use-state",isDocsHomePage:!1,title:"use-state",description:"Multiple Set State",source:"@site/docs/react/use-state.md",sourceDirName:"react",slug:"/react/use-state",permalink:"/docs/react/use-state",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/react/use-state.md",tags:[],version:"current",frontMatter:{sidebar_label:"useState & useMemo"},sidebar:"tutorialSidebar",previous:{title:"Route53",permalink:"/docs/aws/route53"},next:{title:"Tutorial Intro",permalink:"/docs/tutorial-basics/intro"}},i=[{value:"Multiple Set State",id:"multiple-set-state",children:[]},{value:"useState on Object",id:"usestate-on-object",children:[]},{value:"useMemo &amp; useCallback",id:"usememo--usecallback",children:[]}],p={toc:i};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"multiple-set-state"},"Multiple Set State"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const [moo, setMoo] = useState(0);\n  const [foo, setFoo] = useState(0);\n\n  const handleClick = () => {\n    setMoo(moo + 1)\n    setMoo(moo + 1) // ??!!\n    \n    setFoo(foo + 1)\n  }\n\n  return (\n    <>\n      <p>\n        <button onClick={handleClick}>Click Me</button>\n      </p>\n      <p>Moo: {moo}</p>\n      <p>Foo: {foo}</p>\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"usestate-on-object"},"useState on Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const [counter, setCounter] = useState(0);\n  const [animal, setAnimal] = useState('dog');\n\n  const obj = {\n    type: (animal === 'dog') ? 'Mammals' : 'Bird',\n    move: (animal === 'dog') ? 'walk' : 'fly'\n  }\n  \n  // const obj = useMemo(() => ({\n  //   type: (animal === 'dog') ? 'Mammals' : 'Bird',\n  //   move: (animal === 'dog') ? 'walk' : 'fly'\n  // }), [animal])\n\n  const handleIncrease = () => {\n    setCounter(counter => counter + 1)\n  }\n\n  const handleChange = () => {\n    if (animal === 'dog') {\n      setAnimal('duck')\n    } else {\n      setAnimal('dog')\n    }\n  }\n  \n  useEffect(() => {\n    console.log('Obj changed', obj)\n  }, [obj])\n\n  return (\n    <>\n      <p>\n        <button onClick={handleIncrease}>Increase</button>\n        <button onClick={handleChange}>Change</button>\n      </p>\n      <p>Counter: {counter}</p>\n      <p>{obj.type} can {obj.move}</p>\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"usememo--usecallback"},"useMemo & useCallback"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usememo"},"useMemo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"useCallback(fn, [dep])\nuseMemo(() => fn, [deps])\n")))}m.isMDXComponent=!0}}]);