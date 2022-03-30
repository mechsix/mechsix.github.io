"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[761],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39834:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=["components"],a={title:"1200. Minimum Absolute Difference",sidebar_label:"1200. Mini Abs Difference",tags:["Leetcode Easy"]},s=void 0,u={unversionedId:"leetcode/1001-1500/min_abs_difference",id:"leetcode/1001-1500/min_abs_difference",title:"1200. Minimum Absolute Difference",description:"Python",source:"@site/docs/leetcode/1001-1500/1200_min_abs_difference.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_abs_difference",permalink:"/docs/leetcode/1001-1500/min_abs_difference",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1200_min_abs_difference.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1200,frontMatter:{title:"1200. Minimum Absolute Difference",sidebar_label:"1200. Mini Abs Difference",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1167. Minimum Cost to Connect Sticks",permalink:"/docs/leetcode/1001-1500/min_cost_to_connect_sticks"},next:{title:"1217. Min Cost Move to Same Pos",permalink:"/docs/leetcode/1001-1500/min_cost_move_chips_to_same_pos"}},l=[{value:"Python",id:"python",children:[],level:2}],f={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:\n        if not arr:\n            return []\n\n        items = sorted(arr)\n        gap = None\n        results = []\n\n        for i in range(0, len(items)-1):\n            current_gap = items[i+1] - items[i]\n\n            if gap is None:\n                gap = current_gap\n                results.append([items[i], items[i+1]])\n                continue\n\n            if gap == current_gap:\n                results.append([items[i], items[i+1]])\n                continue\n\n            if gap > current_gap:\n                gap = current_gap\n                results = [[items[i], items[i+1]]]\n\n        return results\n")))}p.isMDXComponent=!0}}]);