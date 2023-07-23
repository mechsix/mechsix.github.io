"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={title:"20. Valid Parentheses",sidebar_label:"20. Valid Parentheses",tags:["Leetcode Easy","Rust"]},o=void 0,l={unversionedId:"leetcode/1-500/valid_parentheses",id:"leetcode/1-500/valid_parentheses",title:"20. Valid Parentheses",description:"https://leetcode.com/problems/valid-parentheses",source:"@site/docs/leetcode/1-500/20_valid_parentheses.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/valid_parentheses",permalink:"/docs/leetcode/1-500/valid_parentheses",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/20_valid_parentheses.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:20,frontMatter:{title:"20. Valid Parentheses",sidebar_label:"20. Valid Parentheses",tags:["Leetcode Easy","Rust"]},sidebar:"docSidebar",previous:{title:"19. Remove Nth Node From End of List",permalink:"/docs/leetcode/1-500/remove_nth_from_eof_linked_list"},next:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/1-500/merge_sorted_list"}},c={},i=[{value:"Python",id:"python",level:2},{value:"Rust",id:"rust",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-parentheses"},"https://leetcode.com/problems/valid-parentheses")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("p",null,"N = len(s)\nO(logN)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def isValid(self, s: str) -> bool:\n        if len(s) % 2 != 0:\n            return False\n\n        brackets = {\n            ")": "(",\n            "]": "[",\n            "}": "{",\n        }\n        lefts = brackets.values()\n        rights = brackets.keys()\n\n\n        stack = []\n\n        for char in s:\n            if char in lefts:\n                stack.append(char)\n                continue\n\n            if char in rights:\n                if not stack:\n                    return False\n\n                if brackets[char] == stack[-1]:\n                    stack.pop()\n                    continue\n                return False\n\n            # Corner case, should never happen\n            return False\n\n        return not bool(stack)\n')),(0,a.kt)("h2",{id:"rust"},"Rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use std::collections::HashMap;\n\n\nimpl Solution {\n    pub fn is_valid(s: String) -> bool {\n        let brackets: HashMap<char, char> = [('(', ')'), ('[', ']'), ('{', '}')].into_iter().cloned().collect();\n\n        let mut stack = Vec::new();\n\n        for letter in s.chars() {\n            match brackets.get(&letter) {\n                Some(opposite) => {\n                    stack.push(*opposite)\n                },\n                None => {\n                    if stack.pop() != Some(letter) {\n                        return false\n                    }\n                }\n            }\n        }\n        stack.is_empty()\n    }\n}\n")))}d.isMDXComponent=!0}}]);