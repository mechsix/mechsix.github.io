"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1892],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,m=f["".concat(a,".").concat(p)]||f[p]||d[p]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],c={title:"605. Can Place Flowers",sidebar_label:"605. Can Place Flowers",tags:["Leetcode Easy","Leetcode Fail Review"]},a=void 0,s={unversionedId:"leetcode/1-500/place_flowers",id:"leetcode/1-500/place_flowers",title:"605. Can Place Flowers",description:"Python",source:"@site/docs/leetcode/1-500/605_place_flowers.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/place_flowers",permalink:"/docs/leetcode/1-500/place_flowers",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/605_place_flowers.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"}],version:"current",sidebarPosition:605,frontMatter:{title:"605. Can Place Flowers",sidebar_label:"605. Can Place Flowers",tags:["Leetcode Easy","Leetcode Fail Review"]},sidebar:"docSidebar",previous:{title:"487. Max Consecutive Ones II",permalink:"/docs/leetcode/1-500/max_consecutive_ones_ii"},next:{title:"540. Single Element in a Sorted Array",permalink:"/docs/leetcode/501-1000/single_elm_in_sotrted_array"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:\n        if not n:\n            return True\n\n        flowerbed = [0] + flowerbed + [0]\n\n        i = 1\n        while i < len(flowerbed)-1:\n            if flowerbed[i] == 1:\n                i += 1\n                continue\n\n            if flowerbed[i-1] == 0 and flowerbed[i+1] == 0:\n                n -= 1\n                flowerbed[i] = 1\n                if n == 0:\n                    return True\n            i += 1\n\n        return False\n")))}f.isMDXComponent=!0}}]);