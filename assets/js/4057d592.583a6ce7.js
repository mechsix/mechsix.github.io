"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75528],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=(n(67294),n(3905));const o={title:"528. Random Pick with Weight",sidebar_label:"528. Random Pick with Weight",tags:["Leetcode Medium","Random","Prefix Sum"]},a=void 0,c={unversionedId:"leetcode/501-1000/random_pick_with_weight",id:"leetcode/501-1000/random_pick_with_weight",title:"528. Random Pick with Weight",description:"https://leetcode.com/problems/random-pick-with-weight/",source:"@site/docs/leetcode/501-1000/528_random_pick_with_weight.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/random_pick_with_weight",permalink:"/docs/leetcode/501-1000/random_pick_with_weight",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/528_random_pick_with_weight.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Random",permalink:"/docs/tags/random"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"}],version:"current",sidebarPosition:528,frontMatter:{title:"528. Random Pick with Weight",sidebar_label:"528. Random Pick with Weight",tags:["Leetcode Medium","Random","Prefix Sum"]},sidebar:"docSidebar",previous:{title:"525. Contiguous Array",permalink:"/docs/leetcode/501-1000/contiguous_array"},next:{title:"530. Minimum Absolute Difference in BST",permalink:"/docs/leetcode/501-1000/min_absolute_diff_in_bst"}},l={},u=[{value:"Python",id:"python",level:2},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",level:3},{value:"Prefix Sum",id:"prefix-sum",level:3}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/random-pick-with-weight/"},"https://leetcode.com/problems/random-pick-with-weight/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"brute-force-timelimit-exceed"},"Brute Force (Timelimit Exceed)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from random import randrange\n\n\nclass Solution:\n\n    def __init__(self, w: List[int]):\n        self.memory = []\n        for index, weight in enumerate(w):\n            for i in range(weight):\n                self.memory.append(index)\n\n    def pickIndex(self) -> int:\n        pick = randrange(len(self.memory))\n        return self.memory[pick]\n")),(0,i.kt)("h3",{id:"prefix-sum"},"Prefix Sum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://www.twblogs.net/a/5edebd5274efa30adcc735cc"},"https://www.twblogs.net/a/5edebd5274efa30adcc735cc"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from random import randrange\n\n\nclass Solution:\n\n    def __init__(self, w: List[int]):\n        prefix_sum = []\n        total = 0\n        for weight in w:\n            total += weight\n            prefix_sum.append(total)\n\n        self.prefix_sum = prefix_sum\n        self.total = total\n\n    def pickIndex(self) -> int:\n        # target = 0 ~ total\n        target = randrange(self.total)\n\n        left, right = 0, len(self.prefix_sum)\n\n        # Binary search the section of picked target\n        while left < right:\n            pivot = left + (right-left) // 2\n\n            if target >= self.prefix_sum[pivot]:\n                left = pivot + 1\n            else:\n                right = pivot\n\n        return left\n")))}m.isMDXComponent=!0}}]);