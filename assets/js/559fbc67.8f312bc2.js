"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8253],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,a=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return n?r.createElement(f,i(i({ref:t},a),{},{components:n})):r.createElement(f,i({ref:t},a))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53265:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return a}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],s={title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},l=void 0,u={unversionedId:"leetcode/1001-1500/longest_common_subsequence",id:"leetcode/1001-1500/longest_common_subsequence",title:"1143. Longest Common Subsequence",description:"https://leetcode.com/problems/longest-common-subsequence/",source:"@site/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/longest_common_subsequence",permalink:"/docs/leetcode/1001-1500/longest_common_subsequence",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1143,frontMatter:{title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"1114. Print in Order",permalink:"/docs/leetcode/1001-1500/print_in_order"},next:{title:"1167. Minimum Cost to Connect Sticks",permalink:"/docs/leetcode/1001-1500/min_cost_to_connect_sticks"}},a=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:a};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-subsequence/"},"https://leetcode.com/problems/longest-common-subsequence/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("h2",{id:"javascript"},"Javascript"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestCommonSubsequence = function(text1, text2) {\n    const dp = [...new Array(text1.length + 1)].map(() => new Array(text2.length + 1).fill(0));\n    \n    for (let i = 0; i <= text1.length; i++) {\n        for (let j = 0; j <= text2.length; j++) {\n            \n            if (i === 0 || j === 0) dp[i][j] = 0;\n            else {\n                if (text1[i - 1] === text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n    }\n    \n    return dp[text1.length][text2.length];\n};\n\n/**\n *   0 a c e\n * 0 0 0 0 0\n * a 0 1 1 1\n * b 0 1 1 1\n * c 0 1 2 2\n * d 0 1 2 2\n * e 0 1 2 3\n */\n")))}p.isMDXComponent=!0}}]);