"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4769],{3905:function(e,n,r){r.d(n,{Zo:function(){return f},kt:function(){return p}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=u(r),p=i,m=d["".concat(l,".").concat(p)]||d[p]||s[p]||o;return r?t.createElement(m,c(c({ref:n},f),{},{components:r})):t.createElement(m,c({ref:n},f))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73377:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return f}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],a={title:"1823. Find the Winner of the Circular Game",sidebar_label:"1823. Find the Winner of the Circular Game",tags:["Leetcode Medium"]},l=void 0,u={unversionedId:"leetcode/1501-2000/find_winner_of_circular_game",id:"leetcode/1501-2000/find_winner_of_circular_game",title:"1823. Find the Winner of the Circular Game",description:"Python",source:"@site/docs/leetcode/1501-2000/1823_find_winner_of_circular_game.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/find_winner_of_circular_game",permalink:"/docs/leetcode/1501-2000/find_winner_of_circular_game",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1823_find_winner_of_circular_game.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:1823,frontMatter:{title:"1823. Find the Winner of the Circular Game",sidebar_label:"1823. Find the Winner of the Circular Game",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"1770. Maximum Score from Performing Multiplication Operations",permalink:"/docs/leetcode/1501-2000/max_score_from_performing_multiplication_operations"},next:{title:"1832. Check if the Sentence Is Pangram",permalink:"/docs/leetcode/1501-2000/check_if_the_sentence_is_pangram"}},f=[{value:"Python",id:"python",children:[],level:2}],s={toc:f};function d(e){var n=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def findTheWinner(self, n: int, k: int) -> int:\n        friends = list(range(n))\n\n        i = 0\n        while len(friends) > 1:\n            i = (i+k-1) % len(friends)\n            print("Remove {} {}".format(i, friends))\n            friends.pop(i)\n\n        return friends[0] + 1\n')))}d.isMDXComponent=!0}}]);