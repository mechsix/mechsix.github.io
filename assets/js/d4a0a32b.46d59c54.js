"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[93099],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,p=m["".concat(c,".").concat(d)]||m[d]||f[d]||o;return t?r.createElement(p,s(s({ref:n},l),{},{components:t})):r.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"967. Numbers With Same Consecutive Differences",sidebar_label:"967. Numbers With Same Consecutive Differences",tags:["Leetcode Medium","DFS","Go"]},s=void 0,a={unversionedId:"leetcode/501-1000/numbers_with_same_consecutive_differences",id:"leetcode/501-1000/numbers_with_same_consecutive_differences",title:"967. Numbers With Same Consecutive Differences",description:"Python",source:"@site/docs/leetcode/501-1000/967_numbers_with_same_consecutive_differences.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/numbers_with_same_consecutive_differences",permalink:"/docs/leetcode/501-1000/numbers_with_same_consecutive_differences",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/967_numbers_with_same_consecutive_differences.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:967,frontMatter:{title:"967. Numbers With Same Consecutive Differences",sidebar_label:"967. Numbers With Same Consecutive Differences",tags:["Leetcode Medium","DFS","Go"]},sidebar:"docSidebar",previous:{title:"958. Check Completeness of a Binary Tree",permalink:"/docs/leetcode/501-1000/check_completeness_of_binary_tree"},next:{title:"973. K Closest Points to Origin",permalink:"/docs/leetcode/501-1000/k_closest_points_to_origin"}},c={},u=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3},{value:"Go",id:"go",level:2},{value:"DFS",id:"dfs-1",level:3}],l={toc:u},m="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"dfs"},"DFS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:\n        if n == 1:\n            return [num for num in range(10)]\n\n        ans = set()\n        def dfs(num):\n            if len(str(num)) == n:\n                ans.add(num)\n                return\n\n            tail = num % 10\n\n            for digit in [tail+k, tail-k]:\n                if (digit >= 0 and digit < 10):\n                    new_num = num*10 + digit\n                    dfs(new_num)\n\n        for num in range(1, 10):\n            dfs(num)\n\n        return list(ans)\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("h3",{id:"dfs-1"},"DFS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func numsSameConsecDiff(n int, k int) []int {\n    ans := make(map[int]int)\n\n    for num := 1; num < 10; num++ {\n        dfs(n, k, num, ans)\n    }\n\n    keys := make([]int, 0, len(ans))\n    for key := range(ans) {\n        keys = append(keys, key)\n    }\n\n    return keys\n}\n\n\nfunc dfs(n int, k int, num int, ans map[int]int) {\n    if (len(strconv.Itoa(num)) == n) {\n        ans[num] = num\n        return\n    }\n\n    tail := num % 10\n\n    upper := tail + k\n    lower := tail - k\n\n    if upper < 10 {\n        new_num := num*10 + upper\n        dfs(n, k, new_num, ans)\n    }\n    if lower >= 0 {\n        new_num := num*10 + lower\n        dfs(n, k, new_num, ans)\n    }\n}\n")))}f.isMDXComponent=!0}}]);