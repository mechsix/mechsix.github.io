"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51918],{39899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/501-1000/interval_list_intersections","title":"986. Interval List Intersections","description":"Python","source":"@site/docs/leetcode/501-1000/986_interval_list_intersections.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/interval_list_intersections","permalink":"/docs/leetcode/501-1000/interval_list_intersections","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"TODO","permalink":"/docs/tags/todo"}],"version":"current","sidebarPosition":986,"frontMatter":{"title":"986. Interval List Intersections","sidebar_label":"986. Interval List Intersections","tags":["Leetcode Medium","TODO"]},"sidebar":"docSidebar","previous":{"title":"985. Sum of Even Numbers After Queries","permalink":"/docs/leetcode/501-1000/sum_of_even_nums_after_queries"},"next":{"title":"987. Vertical Order Traversal of a Binary Tree","permalink":"/docs/leetcode/501-1000/vertical_order_traversal_of_a_binary_tree"}}');var r=t(74848),i=t(28453);const o={title:"986. Interval List Intersections",sidebar_label:"986. Interval List Intersections",tags:["Leetcode Medium","TODO"]},c=void 0,l={},u=[{value:"Python",id:"python",level:2},{value:"Time Exceed Try",id:"time-exceed-try",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"time-exceed-try",children:"Time Exceed Try"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:\n        if not firstList or not secondList:\n            return []\n\n        results = []\n        result = []\n\n        uppbound = max(firstList[-1][1], secondList[-1][1])+1\n        lowerbound = min(firstList[0][0], secondList[0][0])\n        first_current = None\n        second_current = None\n\n        for num in range(lowerbound, uppbound):\n            if not first_current or num > first_current[1]:\n                if firstList:\n                    first_current = firstList.pop(0)\n                if result:\n                    results.append(result)\n                    result = []\n\n            if not second_current or num > second_current[1]:\n                if secondList:\n                    second_current = secondList.pop(0)\n                if result:\n                    results.append(result)\n                    result = []\n\n            first_enabled = (num >= first_current[0] and num <= first_current[1])\n            second_enabled = (num >= second_current[0] and num <= second_current[1])\n\n            if first_enabled and second_enabled:\n                if not result:\n                    result = [num, num]\n                else:\n                    result[1] = num\n\n            if (not first_enabled or not second_enabled) and result:\n                results.append(result)\n                result = []\n\n\n        if result:\n            results.append(result)\n\n        return results\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);