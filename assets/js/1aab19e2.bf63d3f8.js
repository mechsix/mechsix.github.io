"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27275],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95024:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],c={title:"729. My Calendar I",sidebar_label:"729. My Calendar I",tags:["Leetcode Medium","Interval"]},i=void 0,d={unversionedId:"leetcode/501-1000/my_calendar_1",id:"leetcode/501-1000/my_calendar_1",title:"729. My Calendar I",description:"https://leetcode.com/problems/my-calendar-i/",source:"@site/docs/leetcode/501-1000/729_my_calendar_1.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/my_calendar_1",permalink:"/docs/leetcode/501-1000/my_calendar_1",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/729_my_calendar_1.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Interval",permalink:"/docs/tags/interval"}],version:"current",sidebarPosition:729,frontMatter:{title:"729. My Calendar I",sidebar_label:"729. My Calendar I",tags:["Leetcode Medium","Interval"]},sidebar:"docSidebar",previous:{title:"723. Candy Crush",permalink:"/docs/leetcode/501-1000/candy_crush"},next:{title:"733. Flood Fill",permalink:"/docs/leetcode/501-1000/flood_fill"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/my-calendar-i/"},"https://leetcode.com/problems/my-calendar-i/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"book")," method:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(logN) # N: The booked schedule"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1) # If the (start, end) pair accepted, each time took O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MyCalendar:\n\n    def __init__(self):\n        self.booked = []\n        \n    def book(self, start: int, end: int) -> bool:\n        for i in range(len(self.booked)):\n            s_start, s_end = self.booked[i]\n            if start >= s_end:\n                continue\n            if end > s_start:\n                return False\n            self.booked.insert(i, (start, end))\n            return True\n        \n        self.booked.append((start, end))\n        return True\n")))}p.isMDXComponent=!0}}]);