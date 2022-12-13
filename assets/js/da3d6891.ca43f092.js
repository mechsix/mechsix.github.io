"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4450],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74578:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var n=r(83117),o=(r(67294),r(3905));const c={title:"692. Top K Frequent Words",sidebar_label:"692. Top K Frequent Words",tags:["Leetcode Medium","Sort"]},i=void 0,a={unversionedId:"leetcode/501-1000/top_k_frequent_words",id:"leetcode/501-1000/top_k_frequent_words",title:"692. Top K Frequent Words",description:"https://leetcode.com/problems/top-k-frequent-words/",source:"@site/docs/leetcode/501-1000/692_top_k_frequent_words.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/top_k_frequent_words",permalink:"/docs/leetcode/501-1000/top_k_frequent_words",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/692_top_k_frequent_words.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sort",permalink:"/docs/tags/sort"}],version:"current",sidebarPosition:692,frontMatter:{title:"692. Top K Frequent Words",sidebar_label:"692. Top K Frequent Words",tags:["Leetcode Medium","Sort"]},sidebar:"docSidebar",previous:{title:"682. Baseball Game",permalink:"/docs/leetcode/501-1000/baseball_game"},next:{title:"695. Max Area of Island",permalink:"/docs/leetcode/501-1000/max_area_of_islands"}},l={},u=[{value:"Python",id:"python",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/top-k-frequent-words/"},"https://leetcode.com/problems/top-k-frequent-words/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter, defaultdict\n\n\nclass Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        counts = [(-item[1], item[0]) for item in Counter(words).items()]\n        counts.sort()\n        \n        return [item[1] for item in counts[:k]]\n")))}p.isMDXComponent=!0}}]);