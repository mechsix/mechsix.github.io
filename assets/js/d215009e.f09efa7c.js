"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[67701],{66312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(74848),o=t(28453);const s={title:"1288. Remove Covered Intervals",sidebar_label:"1288. Remove Covered Intervals",tags:["Leetcode Medium"]},i=void 0,l={id:"leetcode/1001-1500/remove_covered_intervals",title:"1288. Remove Covered Intervals",description:"https://leetcode.com/problems/remove-covered-intervals/",source:"@site/docs/leetcode/1001-1500/1288_remove_covered_intervals.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/remove_covered_intervals",permalink:"/docs/leetcode/1001-1500/remove_covered_intervals",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:1288,frontMatter:{title:"1288. Remove Covered Intervals",sidebar_label:"1288. Remove Covered Intervals",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"1268. Search Suggestions System",permalink:"/docs/leetcode/1001-1500/search_suggestions_system"},next:{title:"1290. Binary Num Linked List to Integer",permalink:"/docs/leetcode/1001-1500/bin_linked_list_to_decimal"}},c={},d=[{value:"Python",id:"python",level:2},{value:"Force Busted",id:"force-busted",level:3},{value:"Sort",id:"sort",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/remove-covered-intervals/",children:"https://leetcode.com/problems/remove-covered-intervals/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"force-busted",children:"Force Busted"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Time: O(nlogn)"}),"\n",(0,r.jsx)(n.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:\n        result = len(intervals)\n        for i in range(len(intervals)):\n            for j in range(len(intervals)):\n                if i == j or not intervals[i] or not intervals[j]:\n                    continue\n                if intervals[i][0] <= intervals[j][0] and intervals[i][1] >= intervals[j][1]:\n                    intervals[j] = None\n                    result -= 1\n        return result\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sort",children:"Sort"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Solution from leetcode offical"}),"\n",(0,r.jsxs)(n.li,{children:["Sort the intervals first","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sort start in incremental"}),"\n",(0,r.jsx)(n.li,{children:"Sort end in decremental if start are the same"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from functools import cmp_to_key\n\n\nclass Solution:\n    def removeCoveredIntervals(self, intervals: List[List[int]]) -> int:\n        def comp(cur, pre):\n            start1, end1 = pre\n            start2, end2 = cur\n\n            if start1 == start2:\n                return end1 - end2\n            else:\n                return start2 - start1\n\n        intervals.sort(key=cmp_to_key(comp))\n\n        count = 0\n        prev_end = 0\n        for interval in intervals:\n            end = interval[1]\n            if end > prev_end:\n                count += 1\n                prev_end = end\n        return count\n"})})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);