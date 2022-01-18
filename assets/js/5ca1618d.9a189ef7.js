"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4547],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74007:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={title:"461. Hamming Distance",sidebar_label:"461. Hamming Distance",tags:["Leetcode Easy"]},l=void 0,s={unversionedId:"leetcode/1-500/hamming_distance",id:"leetcode/1-500/hamming_distance",title:"461. Hamming Distance",description:"Python",source:"@site/docs/leetcode/1-500/461_hamming_distance.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/hamming_distance",permalink:"/docs/leetcode/1-500/hamming_distance",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/461_hamming_distance.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:461,frontMatter:{title:"461. Hamming Distance",sidebar_label:"461. Hamming Distance",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"452. Minimum Number of Arrows to Burst Balloons",permalink:"/docs/leetcode/1-500/min_arrow_bust_balloons"},next:{title:"485. Max Consecutive Ones",permalink:"/docs/leetcode/1-500/max_consecutive_ones"}},u=[{value:"Python",id:"python",children:[],level:2}],m={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def hammingDistance(self, x: int, y: int) -> int:\n        bin_x = "{0:b}".format(x)\n        bin_y = "{0:b}".format(y)\n\n        len_x = len(bin_x)\n        len_y = len(bin_y)\n        max_len = max(len_x, len_y)\n\n        bin_x = bin_x.zfill(max_len)\n        bin_y = bin_y.zfill(max_len)\n\n        counter = 0\n        for i in range(0, max_len):\n            if int(bin_x[i]) ^ int(bin_y[i]) == 1:\n                counter += 1\n        return counter\n')))}p.isMDXComponent=!0}}]);