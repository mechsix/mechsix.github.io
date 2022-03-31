"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6149],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return k}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),N=p(t),k=r,u=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(u,s(s({ref:a},o),{},{components:t})):n.createElement(u,s({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<m;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},75149:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return N}});var n=t(87462),r=t(63366),m=(t(67294),t(3905)),s=["components"],i={title:"1539. Kth Missing Positive Number",sidebar_label:"1539. Kth Missing Positive Number",tags:["Leetcode Easy","Binary Search"]},l=void 0,p={unversionedId:"leetcode/1501-2000/kth_missing_possitive_num",id:"leetcode/1501-2000/kth_missing_possitive_num",title:"1539. Kth Missing Positive Number",description:"https://leetcode.com/problems/kth-missing-positive-number/",source:"@site/docs/leetcode/1501-2000/1539_kth_missing_possitive_num.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/kth_missing_possitive_num",permalink:"/docs/leetcode/1501-2000/kth_missing_possitive_num",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1539_kth_missing_possitive_num.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:1539,frontMatter:{title:"1539. Kth Missing Positive Number",sidebar_label:"1539. Kth Missing Positive Number",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"1446. Consecutive Characters",permalink:"/docs/leetcode/1001-1500/consecutive_chars"},next:{title:"1557. Minimum Number of Vertices to Reach All Nodes",permalink:"/docs/leetcode/1501-2000/min_number_vertice_reach_all_nodes"}},o=[{value:"Python",id:"python",children:[{value:"Linear Search",id:"linear-search",children:[],level:3},{value:"Binary Search",id:"binary-search",children:[{value:"Considering",id:"considering",children:[],level:4}],level:3}],level:2}],c={toc:o};function N(e){var a=e.components,t=(0,r.Z)(e,s);return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/kth-missing-positive-number/"},"https://leetcode.com/problems/kth-missing-positive-number/")),(0,m.kt)("h2",{id:"python"},"Python"),(0,m.kt)("h3",{id:"linear-search"},"Linear Search"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,m.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findKthPositive(self, arr: List[int], k: int) -> int:\n        low, high = arr[0], arr[-1]\n\n        # The lowest larger than k, won't need to search missing within arr\n        if low > k:\n            return k\n\n        k = k - low + 1\n        i = 0\n        last_missed = None\n\n        for num in range(low, high+1):\n            if k == 0:\n                return last_missed\n\n            # Num is not the missing\n            if num == arr[i]:\n                i += 1\n                continue\n\n            # Missing found, num not in arr\n            last_missed = num\n            k -= 1\n\n        # There are remains k after search missing within arr, ans is the highest arr num + k\n        return high + k\n")),(0,m.kt)("h3",{id:"binary-search"},"Binary Search"),(0,m.kt)("p",null,"Leetcode offical solution"),(0,m.kt)("h4",{id:"considering"},"Considering"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"\u89c0\u5bdfarr value\u8207index\u7684\u95dc\u4fc2")),(0,m.kt)("p",null,"\u4ee5 ","[2,3,4,7.11]","\u70ba\u4f8b"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"numValue"),(0,m.kt)("th",{parentName:"tr",align:null},"numIndex"),(0,m.kt)("th",{parentName:"tr",align:null},"missingCount"),(0,m.kt)("th",{parentName:"tr",align:null},"relation"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"2"),(0,m.kt)("td",{parentName:"tr",align:null},"0"),(0,m.kt)("td",{parentName:"tr",align:null},"1"),(0,m.kt)("td",{parentName:"tr",align:null},"2 - (0 + 1)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"3"),(0,m.kt)("td",{parentName:"tr",align:null},"1"),(0,m.kt)("td",{parentName:"tr",align:null},"1"),(0,m.kt)("td",{parentName:"tr",align:null},"3 - (2 + 1)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"4"),(0,m.kt)("td",{parentName:"tr",align:null},"2"),(0,m.kt)("td",{parentName:"tr",align:null},"1"),(0,m.kt)("td",{parentName:"tr",align:null},"4 - (2 + 1)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"7"),(0,m.kt)("td",{parentName:"tr",align:null},"3"),(0,m.kt)("td",{parentName:"tr",align:null},"3"),(0,m.kt)("td",{parentName:"tr",align:null},"7 - (3 + 1)")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"11"),(0,m.kt)("td",{parentName:"tr",align:null},"4"),(0,m.kt)("td",{parentName:"tr",align:null},"6"),(0,m.kt)("td",{parentName:"tr",align:null},"11 - (4 + 1)")))),(0,m.kt)("ol",{start:2},(0,m.kt)("li",{parentName:"ol"},"\u6b78\u7d0d\u51fa\u898f\u5247")),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"C"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"V"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"I"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"missingCount = numValue - (numIndex + 1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.77777em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,m.kt)("ol",{start:3},(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"\u4e8c\u5206\u641c\u5c0b\u627e\u53f3\u754c\uff0c\u7b2c\u4e00\u500b\u4e0d\u5c0f\u65bck\u7684\u4f4d\u7f6e\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e00\u500b\u6e1bk\u70ba\u96f6\u7684\u4f4d\u7f6e")),(0,m.kt)("li",{parentName:"ol"})),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findKthPositive(self, arr: List[int], k: int) -> int:\n        left, right = 0, len(arr) - 1\n        while left <= right:\n            pivot = (left + right) // 2\n            if arr[pivot] - pivot - 1 < k:\n                left = pivot + 1\n            else:\n                right = pivot - 1\n\n        # At the end of the loop, left = right + 1,\n        # and the kth missing is in-between arr[right] and arr[left].\n        # The number of integers missing before arr[right] is\n        # arr[right] - right - 1 --\x3e\n        # the number to return is\n        # arr[right] + k - (arr[right] - right - 1) = k + left\n        return left + k\n\n")))}N.isMDXComponent=!0}}]);