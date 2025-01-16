"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43684],{94798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/1-500/insert_interval","title":"57. Insert Interval","description":"https://leetcode.com/problems/insert-interval/","source":"@site/docs/leetcode/1-500/57_insert_interval.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/insert_interval","permalink":"/docs/leetcode/1-500/insert_interval","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Interval","permalink":"/docs/tags/interval"},{"inline":true,"label":"Leetcode Optimable","permalink":"/docs/tags/leetcode-optimable"}],"version":"current","sidebarPosition":57,"frontMatter":{"title":"57. Insert Interval","sidebar_label":"57. Insert Interval","tags":["Leetcode Medium","Interval","Leetcode Optimable"]},"sidebar":"docSidebar","previous":{"title":"56. Merge Intervals","permalink":"/docs/leetcode/1-500/merge_intervals"},"next":{"title":"58. Length of Last Word","permalink":"/docs/leetcode/1-500/len_last_word"}}');var l=n(74848),i=n(28453);const s={title:"57. Insert Interval",sidebar_label:"57. Insert Interval",tags:["Leetcode Medium","Interval","Leetcode Optimable"]},a=void 0,o={},c=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://leetcode.com/problems/insert-interval/",children:"https://leetcode.com/problems/insert-interval/"})}),"\n",(0,l.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Time: O(n)"}),"\n",(0,l.jsx)(t.li,{children:"Space: O(n+1)"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:\n        if len(intervals) < 1:\n            return intervals + [newInterval]\n\n        result = []\n        start, end = newInterval\n\n        for interval in intervals:\n            if interval[1] < start or interval[0] > end:\n                result.append(interval)\n                continue\n\n            start = min(interval[0], start)\n            end = max(interval[1], end)\n        result.append([start, end])\n\n        # TODO: should able to finish without sort\n        result.sort(key=lambda pair: pair[0])\n\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const l={},i=r.createContext(l);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);