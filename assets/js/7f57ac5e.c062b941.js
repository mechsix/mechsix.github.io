"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23568],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(a,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72499:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"27. Remove Element",sidebar_label:"27. Remove Element",tags:["Leetcode Easy"]},c=void 0,l={unversionedId:"leetcode/1-500/remove_element",id:"leetcode/1-500/remove_element",title:"27. Remove Element",description:"https://leetcode.com/problems/remove-element",source:"@site/docs/leetcode/1-500/27_remove_element.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/remove_element",permalink:"/docs/leetcode/1-500/remove_element",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/27_remove_element.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:27,frontMatter:{title:"27. Remove Element",sidebar_label:"27. Remove Element",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"26. Remove Duplicates from Sorted Array",permalink:"/docs/leetcode/1-500/rm_duplicate_from_sorted_array"},next:{title:"28. Find the Index of the First Occurrence in a String",permalink:"/docs/leetcode/1-500/find_the_index_of_the_first_occurence_in_a_string"}},a={},u=[{value:"Python",id:"python",level:2}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-element"},"https://leetcode.com/problems/remove-element")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Hard to understand, but since the rest of elements in array are not matters\nSimply use the dual cur alg will work"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeElement(self, nums, val: int) -> int:\n        max_index = len(nums) - 1\n        i = 0\n        while i <= max_index:\n            if nums[i] == val:\n                nums[i], nums[max_index] = nums[max_index], nums[i]\n                max_index -= 1\n                continue\n            i += 1\n        return i\n")))}s.isMDXComponent=!0}}]);