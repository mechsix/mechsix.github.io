"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={title:"729. My Calendar I",sidebar_label:"729. My Calendar I",tags:["Leetcode Medium","Interval"]},l=void 0,i={unversionedId:"leetcode/501-1000/my_calendar_1",id:"leetcode/501-1000/my_calendar_1",title:"729. My Calendar I",description:"https://leetcode.com/problems/my-calendar-i/",source:"@site/docs/leetcode/501-1000/729_my_calendar_1.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/my_calendar_1",permalink:"/docs/leetcode/501-1000/my_calendar_1",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/729_my_calendar_1.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Interval",permalink:"/docs/tags/interval"}],version:"current",sidebarPosition:729,frontMatter:{title:"729. My Calendar I",sidebar_label:"729. My Calendar I",tags:["Leetcode Medium","Interval"]},sidebar:"docSidebar",previous:{title:"724. Find Pivot Index",permalink:"/docs/leetcode/501-1000/find_pivot_index"},next:{title:"733. Flood Fill",permalink:"/docs/leetcode/501-1000/flood_fill"}},c={},d=[{value:"Python",id:"python",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/my-calendar-i/"},"https://leetcode.com/problems/my-calendar-i/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"book")," method:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(logN) # N: The booked schedule"),(0,o.kt)("li",{parentName:"ul"},"Space: O(1) # If the (start, end) pair accepted, each time took O(1)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyCalendar:\n\n    def __init__(self):\n        self.booked = []\n        \n    def book(self, start: int, end: int) -> bool:\n        for i in range(len(self.booked)):\n            s_start, s_end = self.booked[i]\n            if start >= s_end:\n                continue\n            if end > s_start:\n                return False\n            self.booked.insert(i, (start, end))\n            return True\n        \n        self.booked.append((start, end))\n        return True\n")))}u.isMDXComponent=!0}}]);