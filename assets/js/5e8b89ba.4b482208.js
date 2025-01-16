"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7281],{58702:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"leetcode/1501-2000/can_make_arithmetic_progression_from_sequence","title":"1502. Can Make Arithmetic Progression From Sequence","description":"https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/","source":"@site/docs/leetcode/1501-2000/1502_can_make_arithmetic_progression_from_sequence.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/can_make_arithmetic_progression_from_sequence","permalink":"/docs/leetcode/1501-2000/can_make_arithmetic_progression_from_sequence","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Array","permalink":"/docs/tags/array"}],"version":"current","sidebarPosition":1502,"frontMatter":{"title":"1502. Can Make Arithmetic Progression From Sequence","sidebar_label":"1502. Can Make Arithmetic Progression From Sequence","tags":["Leetcode Easy","Array"]},"sidebar":"docSidebar","previous":{"title":"1423. Maximum Points You Can Obtain from Cards","permalink":"/docs/leetcode/1501-2000/max_points_you_can_obtain_from_cards"},"next":{"title":"1512. Number of Good Pairs","permalink":"/docs/leetcode/1501-2000/number_of_good_pairs"}}');var o=n(74848),s=n(28453);const i={title:"1502. Can Make Arithmetic Progression From Sequence",sidebar_label:"1502. Can Make Arithmetic Progression From Sequence",tags:["Leetcode Easy","Array"]},a=void 0,c={},l=[{value:"Python",id:"python",level:2}];function m(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/",children:"https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/"})}),"\n",(0,o.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:\n        arr.sort()\n        diff = arr[1] - arr[0]\n\n        for i in range(2, len(arr)):\n            if arr[i] - arr[i-1] != diff:\n                return False\n        return True\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);