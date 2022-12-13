"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9793],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"890. Find and Replace Pattern",sidebar_label:"890. Find and Replace Pattern",tags:["Leetcode Medium","Hash"]},c=void 0,i={unversionedId:"leetcode/501-1000/find_and_replace_pattern",id:"leetcode/501-1000/find_and_replace_pattern",title:"890. Find and Replace Pattern",description:"https://leetcode.com/problems/findandreplace_pattern/",source:"@site/docs/leetcode/501-1000/890_find_and_replace_pattern.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/find_and_replace_pattern",permalink:"/docs/leetcode/501-1000/find_and_replace_pattern",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/890_find_and_replace_pattern.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:890,frontMatter:{title:"890. Find and Replace Pattern",sidebar_label:"890. Find and Replace Pattern",tags:["Leetcode Medium","Hash"]},sidebar:"docSidebar",previous:{title:"878. Nth Magical Number",permalink:"/docs/leetcode/501-1000/nth_magical_num"},next:{title:"897. Increasing Order Search Tree",permalink:"/docs/leetcode/501-1000/increasing_order_bst"}},p={},l=[{value:"Python",id:"python",level:2}],d={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find_and_replace_pattern/"},"https://leetcode.com/problems/find_and_replace_pattern/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:\n        result = []\n        \n        for word in words:\n            if len(word) != len(pattern):\n                continue\n            \n            mapper, mapped = dict(), set()\n            for i in range(len(pattern)):\n                p, c = pattern[i], word[i]\n                if p not in mapper:\n                    if c in mapped:\n                        break\n\n                    mapper[p] = c\n                    mapped.add(c)\n                else:\n                    if mapper[p] != c:\n                        break\n            else:\n                result.append(word)\n        \n        return result\n")))}s.isMDXComponent=!0}}]);