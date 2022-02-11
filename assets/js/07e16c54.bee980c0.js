"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9725],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],l={title:"567. Permutation in String",sidebar_label:"567. Permutation in String",tags:["Leetcode Medium","Slide Window"]},a=void 0,u={unversionedId:"leetcode/501-1000/permutation_in_string",id:"leetcode/501-1000/permutation_in_string",title:"567. Permutation in String",description:"https://leetcode.com/problems/permutation-in-string/",source:"@site/docs/leetcode/501-1000/567_permutation_in_string.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/permutation_in_string",permalink:"/docs/leetcode/501-1000/permutation_in_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/567_permutation_in_string.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Slide Window",permalink:"/docs/tags/slide-window"}],version:"current",sidebarPosition:567,frontMatter:{title:"567. Permutation in String",sidebar_label:"567. Permutation in String",tags:["Leetcode Medium","Slide Window"]},sidebar:"docSidebar",previous:{title:"566. Reshape the Matrix",permalink:"/docs/leetcode/501-1000/reshape_matrix"},next:{title:"605. Can Place Flowers",permalink:"/docs/leetcode/501-1000/place_flowers"}},s=[{value:"Python",id:"python",children:[{value:"Slide Window",id:"slide-window",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/permutation-in-string/"},"https://leetcode.com/problems/permutation-in-string/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"slide-window"},"Slide Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        length_diff = len(s2) - len(s1)\n\n        if length_diff < 0:\n            return False\n\n        s1_count = Counter(s1)\n\n        for i in range(0, length_diff+1):\n            for char, count in Counter(s2[i:i+len(s1)]).items():\n                if s1_count.get(char) != count:\n                    break\n            else:\n                # If inner loop not be broken, there is the answer\n                return True\n\n        return False\n")))}d.isMDXComponent=!0}}]);