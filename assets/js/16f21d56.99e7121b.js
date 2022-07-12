"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2293],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38311:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={title:"473. Matchsticks to Square",sidebar_label:"473. Matchsticks to Square",tags:["Leetcode Medium","DP"]},s=void 0,l={unversionedId:"leetcode/1-500/matchsticks_to_square",id:"leetcode/1-500/matchsticks_to_square",title:"473. Matchsticks to Square",description:"https://leetcode.com/problems/matchsticks-to-square/",source:"@site/docs/leetcode/1-500/473_matchsticks_to_square.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/matchsticks_to_square",permalink:"/docs/leetcode/1-500/matchsticks_to_square",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/473_matchsticks_to_square.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:473,frontMatter:{title:"473. Matchsticks to Square",sidebar_label:"473. Matchsticks to Square",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"462. Minimum Moves to Equal Array Elements II",permalink:"/docs/leetcode/1-500/minimum_moves_to_equal_array_elements_ii"},next:{title:"485. Max Consecutive Ones",permalink:"/docs/leetcode/1-500/max_consecutive_ones"}},u=[{value:"Python",id:"python",children:[{value:"Top Down DP",id:"top-down-dp",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/matchsticks-to-square/"},"https://leetcode.com/problems/matchsticks-to-square/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sort\u662f\u56e0\u70ba\u8003\u616e\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"edges"),"\u5143\u7d20\u76f8\u540c\u4f46\u9806\u5e8f\u4e0d\u540c\u53ef\u4ee5\u8996\u70ba\u540c\u4e00\u500bcase")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def makesquare(self, matchsticks: List[int]) -> bool:\n        perimeter = sum(matchsticks)\n\n        if perimeter % 4 != 0:\n            return False\n\n        target = perimeter / 4\n\n        @cache\n        def dp(i: int, edges: tuple):\n            if i >= len(matchsticks):\n                if edges[0]==target and edges[1]==target and edges[2]==target and edges[3]==target:\n                    return True\n                else:\n                    return False\n\n            is_makable = False\n            stick = matchsticks[i]\n            for j in range(4):\n                if edges[j] == target:\n                    continue\n\n                if edges[j]+stick <= target:\n                    new_edges = sorted(list(edges[:j] + tuple([edges[j]+stick]) + edges[j+1:]))\n                    is_makable = is_makable or dp(i+1, tuple(new_edges))\n\n            return is_makable\n\n        return dp(0, (0, 0, 0, 0))\n")))}p.isMDXComponent=!0}}]);