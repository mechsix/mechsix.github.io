"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[74043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),v=o,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},67547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"435. Non-overlapping Intervals",sidebar_label:"435. Non-overlapping Intervals",tags:["Leetcode Medium","Interval"]},a=void 0,i={unversionedId:"leetcode/1-500/non_overlapping_intervals",id:"leetcode/1-500/non_overlapping_intervals",title:"435. Non-overlapping Intervals",description:"https://leetcode.com/problems/non-overlapping-intervals/",source:"@site/docs/leetcode/1-500/435_non_overlapping_intervals.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/non_overlapping_intervals",permalink:"/docs/leetcode/1-500/non_overlapping_intervals",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/435_non_overlapping_intervals.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Interval",permalink:"/docs/tags/interval"}],version:"current",sidebarPosition:435,frontMatter:{title:"435. Non-overlapping Intervals",sidebar_label:"435. Non-overlapping Intervals",tags:["Leetcode Medium","Interval"]},sidebar:"docSidebar",previous:{title:"430. Flatten Doubly Linked List",permalink:"/docs/leetcode/1-500/flatten_multilevel_doubly_linked_list"},next:{title:"437. Path Sum III",permalink:"/docs/leetcode/1-500/path_sum_iii"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/non-overlapping-intervals/"},"https://leetcode.com/problems/non-overlapping-intervals/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:\n        intervals.sort(key=lambda interval: interval[0])\n\n        result = 0\n        end = intervals[0][1]\n\n        for interval in intervals[1:]:\n            if interval[0] < end:\n                result += 1\n                if interval[1] < end:\n                    end = interval[1]\n            else:\n                end = interval[1]\n\n\n        return result\n")))}d.isMDXComponent=!0}}]);