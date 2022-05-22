"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[761],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39834:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],a={title:"1200. Minimum Absolute Difference",sidebar_label:"1200. Mini Abs Difference",tags:["Leetcode Easy"]},s=void 0,l={unversionedId:"leetcode/1001-1500/min_abs_difference",id:"leetcode/1001-1500/min_abs_difference",title:"1200. Minimum Absolute Difference",description:"Python",source:"@site/docs/leetcode/1001-1500/1200_min_abs_difference.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_abs_difference",permalink:"/docs/leetcode/1001-1500/min_abs_difference",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1200_min_abs_difference.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1200,frontMatter:{title:"1200. Minimum Absolute Difference",sidebar_label:"1200. Mini Abs Difference",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1192. Critical Connections in a Network",permalink:"/docs/leetcode/1001-1500/critical_connections_in_network"},next:{title:"1202. Smallest String With Swaps",permalink:"/docs/leetcode/1001-1500/smallest_string_with_swaps"}},u=[{value:"Python",id:"python",children:[],level:2}],f={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:\n        if not arr:\n            return []\n\n        items = sorted(arr)\n        gap = None\n        results = []\n\n        for i in range(0, len(items)-1):\n            current_gap = items[i+1] - items[i]\n\n            if gap is None:\n                gap = current_gap\n                results.append([items[i], items[i+1]])\n                continue\n\n            if gap == current_gap:\n                results.append([items[i], items[i+1]])\n                continue\n\n            if gap > current_gap:\n                gap = current_gap\n                results = [[items[i], items[i+1]]]\n\n        return results\n")))}p.isMDXComponent=!0}}]);