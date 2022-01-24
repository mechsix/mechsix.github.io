"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1892],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),l=["components"],i={title:"605. Can Place Flowers",sidebar_label:"605. Can Place Flowers",tags:["Leetcode Easy","Leetcode Fail Review"]},a=void 0,s={unversionedId:"leetcode/1-500/place_flowers",id:"leetcode/1-500/place_flowers",title:"605. Can Place Flowers",description:"Python",source:"@site/docs/leetcode/1-500/605_place_flowers.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/place_flowers",permalink:"/docs/leetcode/1-500/place_flowers",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/605_place_flowers.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"}],version:"current",sidebarPosition:605,frontMatter:{title:"605. Can Place Flowers",sidebar_label:"605. Can Place Flowers",tags:["Leetcode Easy","Leetcode Fail Review"]},sidebar:"docSidebar",previous:{title:"487. Max Consecutive Ones II",permalink:"/docs/leetcode/1-500/max_consecutive_ones_ii"},next:{title:"520. Detect Capital",permalink:"/docs/leetcode/501-1000/detect_capital"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:\n        if not n:\n            return True\n\n        flowerbed = [0] + flowerbed + [0]\n\n        i = 1\n        while i < len(flowerbed)-1:\n            if flowerbed[i] == 1:\n                i += 1\n                continue\n\n            if flowerbed[i-1] == 0 and flowerbed[i+1] == 0:\n                n -= 1\n                flowerbed[i] = 1\n                if n == 0:\n                    return True\n            i += 1\n\n        return False\n")))}f.isMDXComponent=!0}}]);