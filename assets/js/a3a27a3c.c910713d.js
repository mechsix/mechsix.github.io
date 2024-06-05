"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[71432],{7014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var i=n(74848),c=n(28453);const a={title:"2622. Cache With Time Limit",sidebar_label:"2622. Cache With Time Limit",tags:["Leetcode Medium","JS 30 Days Challenge"]},r=void 0,s={id:"leetcode/2000/cache_with_timelimit",title:"2622. Cache With Time Limit",description:"https://leetcode.com/problems/cache-with-time-limit/",source:"@site/docs/leetcode/2000/2622_cache_with_timelimit.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/cache_with_timelimit",permalink:"/docs/leetcode/2000/cache_with_timelimit",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2622,frontMatter:{title:"2622. Cache With Time Limit",sidebar_label:"2622. Cache With Time Limit",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2621. Sleep",permalink:"/docs/leetcode/2000/sleep"},next:{title:"2623. Memoize",permalink:"/docs/leetcode/2000/memoize"}},o={},m=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/cache-with-time-limit/",children:"https://leetcode.com/problems/cache-with-time-limit/"})}),"\n",(0,i.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var TimeLimitedCache = function() {\n    this.cache = {}\n};\n\n/**\n * @param {number} key\n * @param {number} value\n * @param {number} time until expiration in ms\n * @return {boolean} if un-expired key already existed\n */\nTimeLimitedCache.prototype.set = function(key, value, duration) {\n    const cache = this.cache\n    const isExist = cache.hasOwnProperty(key)\n\n    if (isExist) {\n        clearTimeout(cache[key]['timer'])\n    }\n\n    const timer = setTimeout(() => {\n        delete cache[key]\n    }, duration)\n\n    cache[key] = {\n        timer: timer,\n        value: value\n    }\n    return isExist\n};\n\n/**\n * @param {number} key\n * @return {number} value associated with key\n */\nTimeLimitedCache.prototype.get = function(key) {\n    return this.cache.hasOwnProperty(key) ? this.cache[key]['value'] : -1\n};\n\n/**\n * @return {number} count of non-expired keys\n */\nTimeLimitedCache.prototype.count = function() {\n    return Object.keys(this.cache).length\n};\n\n/**\n * Your TimeLimitedCache object will be instantiated and called as such:\n * var obj = new TimeLimitedCache()\n * obj.set(1, 42, 1000); // false\n * obj.get(1) // 42\n * obj.count() // 1\n */\n"})}),"\n",(0,i.jsx)(t.h2,{id:"typescript",children:"Typescript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"type LimitedCacheType = {\n    timer: ReturnType<typeof setTimeout>;\n    value: number;\n};\n\nclass TimeLimitedCache {\n    cache: {[key: number]: LimitedCacheType}\n\n    constructor() {\n        this.cache = {}\n    }\n\n    set(key: number, value: number, duration: number): boolean {\n        const cache = this.cache\n        const isExist = cache.hasOwnProperty(key)\n\n        if (isExist) {\n            clearTimeout(cache[key]['timer'])\n        }\n\n        const timer = setTimeout(() => {\n            delete cache[key]\n        }, duration)\n\n        cache[key] = {\n            timer: timer,\n            value: value\n        }\n\n        return isExist\n    }\n\n    get(key: number): number {\n        return this.cache.hasOwnProperty(key) ? this.cache[key]['value'] : -1\n    }\n\n\tcount(): number {\n        return Object.keys(this.cache).length\n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const c={},a=i.createContext(c);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);