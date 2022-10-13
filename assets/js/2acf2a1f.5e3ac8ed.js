"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[34325],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},74887:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"55. Jump Game",sidebar_label:"55. Jump Game",tags:["Leetcode Medium","DP"]},u=void 0,p={unversionedId:"leetcode/1-500/jump_gamp",id:"leetcode/1-500/jump_gamp",title:"55. Jump Game",description:"https://leetcode.com/problems/jump-game/",source:"@site/docs/leetcode/1-500/55_jump_gamp.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/jump_gamp",permalink:"/docs/leetcode/1-500/jump_gamp",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/55_jump_gamp.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:55,frontMatter:{title:"55. Jump Game",sidebar_label:"55. Jump Game",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"54. Spiral Matrix",permalink:"/docs/leetcode/1-500/spiral_matrix"},next:{title:"56. Merge Intervals",permalink:"/docs/leetcode/1-500/merge_intervals"}},l=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/jump-game/"},"https://leetcode.com/problems/jump-game/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function(nums) {\n    \n    function recursive(idx, memo = {}) {\n        if (memo.hasOwnProperty(idx)) return memo[idx];\n        if (idx === nums.length - 1) return true;\n        \n        const steps = nums[idx];\n        \n        for (let step = 1; step <= steps; step++) {\n            const nextStep = idx + step;\n            \n            if (recursive(nextStep, memo)) {\n                memo[idx] = true;\n                return true;\n            }\n        }\n        \n        memo[idx] = false;\n        return false;\n    }\n    \n    return recursive(0);\n};\n")))}s.isMDXComponent=!0}}]);