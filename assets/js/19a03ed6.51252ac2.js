"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[19152],{47410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/2000/min_max_of_array","title":"2439. Minimize Maximum of Array","description":"https://leetcode.com/problems/minimize-maximum-of-array","source":"@site/docs/leetcode/2000/2439_min_max_of_array.md","sourceDirName":"leetcode/2000","slug":"/leetcode/2000/min_max_of_array","permalink":"/docs/leetcode/2000/min_max_of_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Greedy","permalink":"/docs/tags/greedy"}],"version":"current","sidebarPosition":2439,"frontMatter":{"title":"2439. Minimize Maximum of Array","sidebar_label":"2439. Minimize Maximum of Array","tags":["Leetcode Medium","Greedy"]},"sidebar":"docSidebar","previous":{"title":"2405. Optimal Partition of String","permalink":"/docs/leetcode/2000/optimal_partition_of_string"},"next":{"title":"2477. Minimum Fuel Cost to Report to the Capital","permalink":"/docs/leetcode/2000/min_fuel_cost_to_report_to_the_capital"}}');var r=t(74848),o=t(28453);const a={title:"2439. Minimize Maximum of Array",sidebar_label:"2439. Minimize Maximum of Array",tags:["Leetcode Medium","Greedy"]},l=void 0,s={},c=[{value:"Python",id:"python",level:2},{value:"Greedy",id:"greedy",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/minimize-maximum-of-array",children:"https://leetcode.com/problems/minimize-maximum-of-array"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"greedy",children:"Greedy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u52a0\u8207\u6e1b\u8981\u540c\u6642\u767c\u751f\uff0c\u6240\u4ee5\u6574\u500barray\u7684\u7e3d\u548c\u4e0d\u8b8a"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nums[0]"}),"\u7121\u6cd5\u88ab\u6e1b\uff0c\u56e0\u6b64\u7b54\u6848\u53ea\u6703\u5927\u65bc\u6216\u7b49\u65bc",(0,r.jsx)(n.code,{children:"nums[0]"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from math import ceil\n\n\nclass Solution:\n    def minimizeArrayValue(self, nums: List[int]) -> int:\n        total = nums[0]\n        n = len(nums)\n\n        ans, i = 0, 1\n\n        while i < n:\n            till_now = ceil(total/i)\n\n            total += nums[i]\n            i += 1\n\n            current = ceil(total/i)\n            ans = max(till_now, current, ans)\n\n        return ans\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);