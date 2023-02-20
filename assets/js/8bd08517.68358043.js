"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[87563],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"2306. Naming a Company",sidebar_label:"2306. Naming a Company",tags:["Leetcode Hard","Hash"]},i=void 0,c={unversionedId:"leetcode/2000/naming_a_company",id:"leetcode/2000/naming_a_company",title:"2306. Naming a Company",description:"https://leetcode.com/problems/naming-a-company/",source:"@site/docs/leetcode/2000/2306_naming_a_company.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/naming_a_company",permalink:"/docs/leetcode/2000/naming_a_company",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2306_naming_a_company.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:2306,frontMatter:{title:"2306. Naming a Company",sidebar_label:"2306. Naming a Company",tags:["Leetcode Hard","Hash"]},sidebar:"docSidebar",previous:{title:"2246. Longest Path With Different Adjacent Characters",permalink:"/docs/leetcode/2000/longest_path_with_different_adjacent_chars"},next:{title:"2477. Minimum Fuel Cost to Report to the Capital",permalink:"/docs/leetcode/2000/min_fuel_cost_to_report_to_the_capital"}},l={},p=[{value:"Python",id:"python",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/naming-a-company/"},"https://leetcode.com/problems/naming-a-company/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nfrom string import ascii_lowercase\n\n\nclass Solution:\n    def distinctNames(self, ideas: List[str]) -> int:\n        mapper = defaultdict(set)\n        for idea in ideas:\n            mapper[idea[0]].add(idea[1:])\n\n        ans = 0\n        for i in range(25):\n            for j in range(i+1, 26):\n                prefix1 = ascii_lowercase[i]\n                prefix2 = ascii_lowercase[j]\n\n                mutuals = len(mapper[prefix1] & mapper[prefix2])\n\n                ans += 2 * (len(mapper[prefix1]) - mutuals) * (len(mapper[prefix2]) - mutuals)\n\n        return ans\n")))}m.isMDXComponent=!0}}]);