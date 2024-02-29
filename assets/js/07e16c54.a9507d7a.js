"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[49725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={title:"567. Permutation in String",sidebar_label:"567. Permutation in String",tags:["Leetcode Medium","Sliding Window","CTCI"]},l=void 0,a={unversionedId:"leetcode/501-1000/permutation_in_string",id:"leetcode/501-1000/permutation_in_string",title:"567. Permutation in String",description:"https://leetcode.com/problems/permutation-in-string/",source:"@site/docs/leetcode/501-1000/567_permutation_in_string.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/permutation_in_string",permalink:"/docs/leetcode/501-1000/permutation_in_string",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/567_permutation_in_string.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sliding Window",permalink:"/docs/tags/sliding-window"},{label:"CTCI",permalink:"/docs/tags/ctci"}],version:"current",sidebarPosition:567,frontMatter:{title:"567. Permutation in String",sidebar_label:"567. Permutation in String",tags:["Leetcode Medium","Sliding Window","CTCI"]},sidebar:"docSidebar",previous:{title:"566. Reshape the Matrix",permalink:"/docs/leetcode/501-1000/reshape_matrix"},next:{title:"576. Out of Boundary Paths",permalink:"/docs/leetcode/501-1000/out_of_boundary_paths"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Slide Window",id:"slide-window",level:3},{value:"Rust",id:"rust",level:2},{value:"Slide Window",id:"slide-window-1",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/permutation-in-string/"},"https://leetcode.com/problems/permutation-in-string/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CTCI 1.2 Check Permutation")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"slide-window"},"Slide Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def checkInclusion(self, s1: str, s2: str) -> bool:\n        length_diff = len(s2) - len(s1)\n\n        if length_diff < 0:\n            return False\n\n        s1_count = Counter(s1)\n\n        for i in range(0, length_diff+1):\n            for char, count in Counter(s2[i:i+len(s1)]).items():\n                if s1_count.get(char) != count:\n                    break\n            else:\n                # If inner loop not be broken, there is the answer\n                return True\n\n        return False\n")),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("h3",{id:"slide-window-1"},"Slide Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use std::collections::HashMap;\n\n\nimpl Solution {\n    fn gen_map(s: &String) -> String {\n        let mut mapper = [0; 26];\n        for i in s.as_bytes().iter() {\n            mapper[(i-b'a') as usize] += 1;\n        }\n        mapper.iter().map(|&count| count.to_string()).collect()\n    }\n\n    pub fn check_inclusion(s1: String, s2: String) -> bool {\n        if s1.len() > s2.len() {\n            return false;\n        }\n\n        let mapper = Solution::gen_map(&s1);\n        let len_diff = s2.len() - s1.len();\n\n        for i in 0..len_diff+1 {\n            let sub_s2 = &s2[i..i+s1.len()].to_string();\n            let sub_s2_map = Solution::gen_map(&sub_s2);\n\n            if sub_s2_map == mapper {\n                return true;\n            }\n        }\n\n        false\n    }\n}\n")))}d.isMDXComponent=!0}}]);