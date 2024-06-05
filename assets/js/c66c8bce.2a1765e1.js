"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78391],{33945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(74848),a=t(28453);const r={title:"936. Stamping The Sequence",sidebar_label:"936. Stamping The Sequence",tags:["Leetcode Hard","TODO"]},i=void 0,o={id:"leetcode/501-1000/stamping_the_sequence",title:"936. Stamping The Sequence",description:"https://leetcode.com/problems/stamping-the-sequence/",source:"@site/docs/leetcode/501-1000/936_stamping_the_sequence.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/stamping_the_sequence",permalink:"/docs/leetcode/501-1000/stamping_the_sequence",draft:!1,unlisted:!1,tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:936,frontMatter:{title:"936. Stamping The Sequence",sidebar_label:"936. Stamping The Sequence",tags:["Leetcode Hard","TODO"]},sidebar:"docSidebar",previous:{title:"931. Minimum Falling Path Sum",permalink:"/docs/leetcode/501-1000/minimum_falling_path_sum"},next:{title:"938. Range Sum of BST",permalink:"/docs/leetcode/501-1000/range_sum_bst"}},d={},l=[{value:"Python",id:"python",level:2},{value:"Find path from reverse order (Failed Try)",id:"find-path-from-reverse-order-failed-try",level:3},{value:"Offical Solution",id:"offical-solution",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/stamping-the-sequence/",children:"https://leetcode.com/problems/stamping-the-sequence/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.h3,{id:"find-path-from-reverse-order-failed-try",children:"Find path from reverse order (Failed Try)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6982\u5ff5\u4e0a\u662f\u53cd\u8457\u627e\u56de\u4f86\uff0c\u627e\u5230stamp\u5728target\u5167\u7684\u4f4d\u7f6e\uff0c\u8996\u70ba",(0,s.jsx)(n.code,{children:"\u6700\u5f8c\u4e00\u500b\u84cb\u4e0b\u53bb\u7684\u7ae0"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5f9e\u6700\u5f8c\u4e00\u500b\u7ae0\u7684\u4f4d\u7f6e\u5f80\u5de6\u53f3\u63a8\uff0c\u6bcf\u6b21\u90fd\u8a66\u8457\u627e\u51fa",(0,s.jsx)(n.code,{children:"\u8986\u84cb\u6700\u5927"}),"\u7684\u7ae0"]}),"\n",(0,s.jsx)(n.li,{children:"\u932f\u5728\u6c92\u8003\u91cf\u5230\u6709\u6642\u5019\u7ae0\u662f\u8df3\u8457\u84cb\u7684\uff0c\u4e0d\u4e00\u5b9a\u6703\u8ddf\u4e0b\u500b\u7ae0(\u9019\u500b\u89e3\u6cd5\u51fa\u767c\u7684\u65b9\u5411)\u6709\u9023\u7e8c\u6216\u91cd\u758a"}),"\n",(0,s.jsx)(n.li,{children:"\u505a\u500b\u7d00\u9304"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Test Case"}),(0,s.jsx)(n.th,{children:"Passed"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"abc" "ababc"'}),(0,s.jsx)(n.td,{children:"Passed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"abca" "aabcaca"'}),(0,s.jsx)(n.td,{children:"Passed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"oz" "ooozz"'}),(0,s.jsx)(n.td,{children:"Passed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:'"de" "ddeddeddee"'}),(0,s.jsx)(n.td,{children:"Failed"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\nclass Solution:\n    def movesToStamp(self, stamp: str, target: str) -> List[int]:\n        if stamp not in target:\n            return []\n\n\n        current = ['?'] * len(target)\n\n        left = target.index(stamp)\n        right = left + len(stamp)\n\n        # The lastest stamp, as beginning\n        ans = deque([left])\n        self.stamp_on(current, stamp, left)\n\n        # Count of the stampeed actions\n        step = 1\n\n\n        # Find largest sequence to take the stamp in the left\n        start = max(0, left-len(stamp))\n        end = min(start+len(stamp), left)\n        while left > 0:\n            if step > 10:\n                break\n            print(\"<\", (start, end), ''.join(target[start:end]), stamp[:end-start])\n            if ''.join(target[start:end]) == stamp[:end-start]:\n                ans.appendleft(start)\n                self.stamp_on(current, stamp, start)\n                left = start\n                start = max(0, left-len(stamp))\n                end = min(start+len(stamp), left)\n                step += 1\n            else:\n                start += 1\n\n\n        # Find largest sequence to take the stamp in the right\n        end = min(right+len(stamp), len(target))\n        start = max(end-len(stamp), right)\n        while right < len(target):\n            if step > 10:\n                break\n            print(\">\", (start, end), ''.join(target[start:end]), stamp[start-end:])\n            if ''.join(target[start:end]) == stamp[start-end:]:\n                ans.appendleft(end-len(stamp))\n                self.stamp_on(current, stamp, end-len(stamp))\n                right = end\n                end = min(right+len(stamp), len(target))\n                start = max(end-len(stamp), right)\n                step += 1\n            else:\n                end -= 1\n\n\n        return ans\n\n    def stamp_on(self, current, stamp, start):\n        end = min(start+len(stamp), len(current))\n        for i in range(start, end):\n            if current[i] != '?':\n                continue\n            current[i] = stamp[i-start]\n        print(\"stamp at {}: {}\".format(\n            start,\n            ''.join(current)\n        ))\n"})}),"\n",(0,s.jsx)(n.h3,{id:"offical-solution",children:"Offical Solution"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Details see: ",(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/stamping-the-sequence/solution/",children:"https://leetcode.com/problems/stamping-the-sequence/solution/"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution(object):\n    def movesToStamp(self, stamp, target):\n        M, N = len(stamp), len(target)\n\n        queue = collections.deque()\n        done = [False] * N\n        ans = []\n        A = []\n        for i in range(N - M + 1):\n            # For each window [i, i+M),\n            # A[i] will contain info on what needs to change\n            # before we can reverse stamp at i.\n\n            made, todo = set(), set()\n            for j, c in enumerate(stamp):\n                a = target[i+j]\n                if a == c:\n                    made.add(i+j)\n                else:\n                    todo.add(i+j)\n            A.append((made, todo))\n\n            # If we can reverse stamp at i immediately,\n            # enqueue letters from this window.\n            if not todo:\n                ans.append(i)\n                for j in range(i, i + len(stamp)):\n                    if not done[j]:\n                        queue.append(j)\n                        done[j] = True\n\n        # For each enqueued letter,\n        while queue:\n            i = queue.popleft()\n\n            # For each window that is potentially affected,\n            # j: start of window\n            for j in range(max(0, i-M+1), min(N-M, i)+1):\n                if i in A[j][1]:  # This window is affected\n                    A[j][1].discard(i) # Remove it from todo list of this window\n                    if not A[j][1]:  # Todo list of this window is empty\n                        ans.append(j)\n                        for m in A[j][0]: # For each letter to potentially enqueue,\n                            if not done[m]:\n                                queue.append(m)\n                                done[m] = True\n\n        return ans[::-1] if all(done) else []\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);