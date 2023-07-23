"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"149. Max Points on a Line",sidebar_label:"149. Max Points on a Line",tags:["Leetcode Hard","Hash"]},a=void 0,s={unversionedId:"leetcode/1-500/max_points_on_a_line",id:"leetcode/1-500/max_points_on_a_line",title:"149. Max Points on a Line",description:"https://leetcode.com/problems/max-points-on-a-line/description/",source:"@site/docs/leetcode/1-500/149_max_points_on_a_line.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_points_on_a_line",permalink:"/docs/leetcode/1-500/max_points_on_a_line",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/149_max_points_on_a_line.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:149,frontMatter:{title:"149. Max Points on a Line",sidebar_label:"149. Max Points on a Line",tags:["Leetcode Hard","Hash"]},sidebar:"docSidebar",previous:{title:"148. Sort List",permalink:"/docs/leetcode/1-500/sort_list"},next:{title:"151. Reverse Words in a String",permalink:"/docs/leetcode/1-500/reverse_words_in_string"}},l={},p=[{value:"Python",id:"python",level:2},{value:"Slopes as Hash Key",id:"slopes-as-hash-key",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/max-points-on-a-line/description/"},"https://leetcode.com/problems/max-points-on-a-line/description/")),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("h3",{id:"slopes-as-hash-key"},"Slopes as Hash Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time: O(NlogN)"),(0,r.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from collections import defaultdict\n\n\nclass Solution:\n    def maxPoints(self, points: List[List[int]]) -> int:\n        if len(points) < 2:\n            return 1\n\n        ans = 0\n        for i in range(len(points)-1):\n            mapper = defaultdict(int)\n            for j in range(i+1, len(points)):\n                point1 = points[i]\n                point2 = points[j]\n\n                # Case of vertical line\n                if point1[0] == point2[0]:\n                    mapper["v"] += 1\n                    continue\n\n                # Case of others\n                slope = (point1[1]-point2[1]) / (point1[0]-point2[0])\n                mapper[slope] += 1\n\n            # print("From", points[i], ", the points with same slope", mapper)\n\n            ans = max(ans, max(mapper.values())+1 )\n        return ans\n')))}u.isMDXComponent=!0}}]);