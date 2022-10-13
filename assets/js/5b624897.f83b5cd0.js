"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[26634],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35046:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"875. Koko Eating Bananas",sidebar_label:"875. Koko Eating Bananas",tags:["Binary Search","Leetcode Medium"]},c=void 0,l={unversionedId:"leetcode/501-1000/koko_eating_bananas",id:"leetcode/501-1000/koko_eating_bananas",title:"875. Koko Eating Bananas",description:"Python",source:"@site/docs/leetcode/501-1000/875_koko_eating_bananas.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/koko_eating_bananas",permalink:"/docs/leetcode/501-1000/koko_eating_bananas",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/875_koko_eating_bananas.md",tags:[{label:"Binary Search",permalink:"/docs/tags/binary-search"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:875,frontMatter:{title:"875. Koko Eating Bananas",sidebar_label:"875. Koko Eating Bananas",tags:["Binary Search","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"871. Minimum Number of Refueling Stops",permalink:"/docs/leetcode/501-1000/minimum_number_of_refueling_stops"},next:{title:"876. Middle of the Linked List",permalink:"/docs/leetcode/501-1000/middle_of_linked_list"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Min speed between 1~max(slices)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\n        min_speed, max_speed = 1, max(piles)\n\n        while min_speed <= max_speed:\n            speed = min_speed + (max_speed - min_speed) // 2\n            time = self._eating_speed(piles, speed)\n\n            if time <= h:\n                # Too fast\n                max_speed = speed - 1\n            else:\n                # Too slow\n                min_speed = speed + 1\n        return min_speed\n\n    @staticmethod\n    def _eating_speed(piles, speed):\n        time = 0\n        for pile in piles:\n            time += math.ceil(pile / speed)\n        return time\n")))}d.isMDXComponent=!0}}]);