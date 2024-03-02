"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[69499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy","Bit Manipulation","Rust","CTCI"]},i=void 0,s={unversionedId:"leetcode/1-500/valid_anagram",id:"leetcode/1-500/valid_anagram",title:"242. Valid Anagram",description:"https://leetcode.com/problems/valid-anagram/",source:"@site/docs/leetcode/1-500/242_valid_anagram.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/valid_anagram",permalink:"/docs/leetcode/1-500/valid_anagram",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/242_valid_anagram.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"},{label:"Rust",permalink:"/docs/tags/rust"},{label:"CTCI",permalink:"/docs/tags/ctci"}],version:"current",sidebarPosition:242,frontMatter:{title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy","Bit Manipulation","Rust","CTCI"]},sidebar:"docSidebar",previous:{title:"240. Search a 2D Matrix II",permalink:"/docs/leetcode/1-500/search_2d_matrix_ii"},next:{title:"250. Count Univalue Subtrees",permalink:"/docs/leetcode/1-500/count_univalue_subtree"}},o={},u=[{value:"Python",id:"python",level:2},{value:"Sort the string counts",id:"sort-the-string-counts",level:3},{value:"Counter",id:"counter",level:3},{value:"Bit Manipulation",id:"bit-manipulation",level:3},{value:"Rust",id:"rust",level:2},{value:"Mapper",id:"mapper",level:3},{value:"Sort the string",id:"sort-the-string",level:3},{value:"Plus the Minus",id:"plus-the-minus",level:3},{value:"Bit Manipulation",id:"bit-manipulation-1",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-anagram/"},"https://leetcode.com/problems/valid-anagram/")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CTCI 1.2 Check Permutation")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"sort-the-string-counts"},"Sort the string counts"),(0,a.kt)("p",null,"Consider ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," has length ",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"; ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," has length ",(0,a.kt)("inlineCode",{parentName:"p"},"N")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(NlogN * MlogM)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(N+M)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_chars = list(s)\n        t_chars = list(t)\n        s_chars.sort()\n        t_chars.sort()\n\n        for i in range(len(s_chars)-1, -1, -1):\n            s_char = s_chars[i]\n            if s_char != t_chars[-1]:\n                return False\n            t_chars.pop()\n        return True\n")),(0,a.kt)("h3",{id:"counter"},"Counter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(M)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(M+N) worst case")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\nclass Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_counts = Counter(s)\n        t_counts = Counter(t)\n\n        for char, count in s_counts.items():\n            if char not in t_counts or t_counts[char] != count:\n                return False\n        return True\n")),(0,a.kt)("h3",{id:"bit-manipulation"},"Bit Manipulation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e00\u500b\u6574\u6578",(0,a.kt)("inlineCode",{parentName:"li"},"bit_vector"),"\u4f5c\u70bamapper\uff0c\u6bcf\u500bbit\u90fd\u8868\u793a\uff1a\u7279\u5b9a\u5b57\u5143\u7684\u51fa\u73fe\u6b21\u6578\u662f\u5426\u70ba\u5947\u6578",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b2c0bit\uff0c\u8868\u793a'a'\u5728\u5b57\u4e32\u4e2d\u662f\u5426\u51fa\u73fe\u6b21\u6578\u70ba\u5947\u6578"),(0,a.kt)("li",{parentName:"ul"},"\u7d2f\u9032\u6642\u8981\u6ce8\u610fbit\u6709\u6c92\u6709\u91cd\u758a\uff0c\u6709\u91cd\u758a\u5f80\u4e0a\u758a\u6703\u5c0e\u81f4\u9000\u4f4d"))),(0,a.kt)("li",{parentName:"ul"},"\u6700\u7d42\u6aa2\u67e5",(0,a.kt)("inlineCode",{parentName:"li"},"bit_vector"),"\u662f\u5426\u53ea\u6709\u4e00\u500bbit\u70ba1 - \u5373\u8a72\u5b57\u4e32\u7684\u5b57\u5143\u7d44\u5408\u53ef\u4ee5\u7d44\u51fa\u8ff4\u6587",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"b11110 & b00001 = 0"),"\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"li"},"(b11110 - 1) & b11110"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canPermutePalindrome(self, s: str) -> bool:\n        # 1st bit present 'a' is even, 2nd bit present 'b' is event and so on\n        bit_vector = 0\n\n        for letter in s:\n            mask = 1 << (ord(letter) - ord('a'))\n            if bit_vector & mask == 0:\n                # bit has overlay\n                bit_vector |= mask\n            else:\n                bit_vector &= ~mask\n\n        return (bit_vector & (bit_vector - 1)) == 0\n")),(0,a.kt)("h2",{id:"rust"},"Rust"),(0,a.kt)("h3",{id:"mapper"},"Mapper"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn is_anagram(s: String, t: String) -> bool {\n        if s.len() != t.len() {\n            return false\n        }\n\n        let mut mapper_s = [0; 26];\n        let mut mapper_t = [0; 26];\n\n        for i in s.as_bytes().iter() {\n            mapper_s[(i-b'a') as usize] += 1;\n        }\n        for j in t.as_bytes().iter() {\n            mapper_t[(j-b'a') as usize] += 1;\n        }\n\n        mapper_s == mapper_t\n    }\n}\n")),(0,a.kt)("h3",{id:"sort-the-string"},"Sort the string"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(NlogN) // by sort"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::iter::Iterator;\nuse std::iter::FromIterator;\n\n\nimpl Solution {\n    pub fn is_anagram(s: String, t: String) -> bool {\n        if s.len() != t.len() {\n            return false\n        }\n\n        let slice_s: &str = &s[..];\n        let slice_t: &str = &t[..];\n\n        let mut chars_s: Vec<char> = slice_s.chars().collect();\n        let mut chars_t: Vec<char> = slice_t.chars().collect();\n\n        chars_s.sort_by(|pre, cur| cur.cmp(pre));\n        chars_t.sort_by(|pre, cur| cur.cmp(pre));\n\n        let sorted_s = String::from_iter(chars_s);\n        let sorted_t = String::from_iter(chars_t);\n\n        sorted_s == sorted_t\n    }\n}\n")),(0,a.kt)("h3",{id:"plus-the-minus"},"Plus the Minus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u52a0\u4e00\u6e1b\uff0c\u5982\u679c\u662f\u76f8\u540c\u7d44\u5408\uff0c\u6700\u7d42mapper\u61c9\u8a72\u6703\u90fd\u662f0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn is_anagram(s: String, t: String) -> bool {\n        if s.len() != t.len() {\n            return false\n        }\n\n        let mut mapper = [0; 26];\n        for i in s.as_bytes().iter() {\n            mapper[(i-b'a') as usize] += 1;\n        }\n\n        for i in t.as_bytes().iter() {\n            let letter_id = (i - b'a') as usize;\n            mapper[letter_id] -= 1;\n            if mapper[letter_id] < 0 {\n                return false;\n            }\n        }\n\n        true\n    }\n}\n")),(0,a.kt)("h3",{id:"bit-manipulation-1"},"Bit Manipulation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn can_permute_palindrome(s: String) -> bool {\n        let mut bit_vector = 0;\n\n        for letter in s.chars() {\n            let mask = 1 << (letter as u32 - 'a' as u32);\n            if bit_vector & mask == 0 {\n                bit_vector |= mask;\n            } else {\n                bit_vector &= !mask;\n            }\n        }\n\n        (bit_vector & (bit_vector - 1)) == 0\n    }\n}\n")))}m.isMDXComponent=!0}}]);