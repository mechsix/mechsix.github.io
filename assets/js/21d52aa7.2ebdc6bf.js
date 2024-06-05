"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36086],{281:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=e(74848),o=e(28453);const i={title:"401. Binary Watch",sidebar_label:"401. Binary Watch",tags:["Leetcode Easy","Backtracking"]},a=void 0,c={id:"leetcode/1-500/binary_watch",title:"401. Binary Watch",description:"https://leetcode.com/problems/binary-watch/",source:"@site/docs/leetcode/1-500/401_binary_watch.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_watch",permalink:"/docs/leetcode/1-500/binary_watch",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:401,frontMatter:{title:"401. Binary Watch",sidebar_label:"401. Binary Watch",tags:["Leetcode Easy","Backtracking"]},sidebar:"docSidebar",previous:{title:"399. Evaluate Division",permalink:"/docs/leetcode/1-500/evaluate_division"},next:{title:"404. Sum of Left Leaf",permalink:"/docs/leetcode/1-500/left_leaf_sum"}},s={},u=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}];function l(n){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/binary-watch/",children:"https://leetcode.com/problems/binary-watch/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'class Solution:\n    def readBinaryWatch(self, turnedOn: int) -> List[str]:\n        options = [\n            ("h", 8), ("h", 4), ("h", 2), ("h", 1),\n            ("m", 32), ("m", 16), ("m", 8), ("m", 4), ("m", 2), ("m", 1)\n        ]\n\n        used = set()\n        result = set()\n\n        def backtrack(track, hour, minute):\n            if len(track) == turnedOn:\n                result.add(\'{h:d}:{m:02d}\'.format(h=hour, m=minute))\n                return\n\n            for option in options:\n                if option in used:\n                    continue\n\n                track.append(option)\n                used.add(option)\n\n                if option[0] == \'h\':\n                    if hour + option[1] < 12:\n                        backtrack(track, hour+option[1], minute)\n                else:\n                    if minute + option[1] < 60:\n                        backtrack(track, hour, minute+option[1])\n\n                track.pop()\n                used.remove(option)\n\n        backtrack([], 0, 0)\n\n        return [string for string in result]\n'})}),"\n",(0,r.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'/**\n * H [1,2,4,8]\n * M [1,2,4,8,16,32]\n *\n * Example 1:\n * turnedOn = 1 => [0,1], [1,0]\n * turnedOn = 2 => [0,2], [2,0], [1, 1]\n */\n\n/**\n * @param {number} turnedOn\n * @return {string[]}\n */\nvar readBinaryWatch = function (turnedOn) {\n  if (turnedOn >= 9) return [];\n\tconst hourDigits = [1, 2, 4, 8];\n\tconst minDigits = [1, 2, 4, 8, 16, 32];\n\tconst n = turnedOn;\n\tconst result = [];\n\n\tfor (let i = 0; i <= n; i++) {\n\t\tconst hours = createDigit(hourDigits, i);\n\t\tconst mins = createDigit(minDigits, n - i);\n\t\t // console.log(hours, i)\n\t\t // console.log(mins, n - i)\n\n     for (hour of hours) {\n      for (min of mins) {\n        if (hour >= 12 || min >= 60) break;\n        result.push(`${hour}:${padZero(min)}`);\n      }\n     }\n\t}\n\treturn result;\n};\n\nfunction createDigit(list, max) {\n\tconst result = [];\n\tpickByMax(list, max, 0, [], result);\n\treturn result;\n}\n\nfunction pickByMax(ary, max, start, record = [], result) {\n\tif (record.length === max) {\n\t\tconst sum = record.reduce((acc, num) => acc + num, 0);\n\t\tresult.push(sum);\n\t\treturn;\n\t}\n\n\tfor (let i = start; i < ary.length; i++) {\n\t\trecord.push(ary[i]);\n\t\tpickByMax(ary, max, i + 1, record, result);\n\t\trecord.pop();\n\t}\n}\n\nfunction padZero(num) {\n\tif (!num) return "00";\n\n\tconst target = 2;\n\tconst max = Math.max(target - num.toString().length, 0);\n\tconst pad = "0".repeat(max);\n\treturn `${pad}${num}`;\n}\n'})})]})}function d(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>c});var r=e(96540);const o={},i=r.createContext(o);function a(n){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),r.createElement(i.Provider,{value:t},n.children)}}}]);