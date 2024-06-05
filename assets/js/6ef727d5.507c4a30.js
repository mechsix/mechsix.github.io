"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94005],{2642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(74848),i=n(28453);const o={title:"1396. Design Underground System",sidebar_label:"1396. Design Underground System",tags:["Leetcode Medium","Hash","System Design"]},r=void 0,d={id:"leetcode/1001-1500/design_underground_system",title:"1396. Design Underground System",description:"https://leetcode.com/problems/design-underground-system/",source:"@site/docs/leetcode/1001-1500/1396_design_underground_system.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/design_underground_system",permalink:"/docs/leetcode/1001-1500/design_underground_system",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"System Design",permalink:"/docs/tags/system-design"}],version:"current",sidebarPosition:1396,frontMatter:{title:"1396. Design Underground System",sidebar_label:"1396. Design Underground System",tags:["Leetcode Medium","Hash","System Design"]},sidebar:"docSidebar",previous:{title:"1383. Maximum Performance of a Team",permalink:"/docs/leetcode/1001-1500/max_performance_of_team"},next:{title:"1413. Mini Value to Possitive Sum",permalink:"/docs/leetcode/1001-1500/min_value_get_positive_sum"}},a={},l=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/design-underground-system/",children:"https://leetcode.com/problems/design-underground-system/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from collections import defaultdict\n\n\nclass UndergroundSystem:\n\n    def __init__(self):\n        self.traveling = dict()\n        self.mapper = defaultdict(list)\n\n    def checkIn(self, id: int, stationName: str, t: int) -> None:\n        if id in self.traveling:\n            # Duplicate check-in\n            return\n\n        self.traveling[id] = (stationName, t)\n\n\n    def checkOut(self, id: int, stationName: str, t: int) -> None:\n        if id not in self.traveling:\n            # Traveler not checked-in\n            return\n\n        in_station, in_t = self.traveling.pop(id)\n        out_station, out_t = stationName, t\n\n        self.mapper[(in_station, out_station)].append(out_t - in_t)\n\n    def getAverageTime(self, startStation: str, endStation: str) -> float:\n        if (startStation, endStation) not in self.mapper:\n            # No data\n            return\n\n        time_list = self.mapper[(startStation, endStation)]\n        return sum(time_list) / len(time_list)\n\n\n# Your UndergroundSystem object will be instantiated and called as such:\n# obj = UndergroundSystem()\n# obj.checkIn(id,stationName,t)\n# obj.checkOut(id,stationName,t)\n# param_3 = obj.getAverageTime(startStation,endStation)\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);