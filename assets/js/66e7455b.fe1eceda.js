"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2435],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12502:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],c={title:"804. Unique Morse Code Words",sidebar_label:"804. Unique Morse Code Words",tags:["Leetcode Easy","Hash"]},a=void 0,l={unversionedId:"leetcode/501-1000/unique_morse_code_words",id:"leetcode/501-1000/unique_morse_code_words",title:"804. Unique Morse Code Words",description:"https://leetcode.com/problems/unique-morse-code-words/",source:"@site/docs/leetcode/501-1000/804_unique_morse_code_words.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/unique_morse_code_words",permalink:"/docs/leetcode/501-1000/unique_morse_code_words",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/804_unique_morse_code_words.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:804,frontMatter:{title:"804. Unique Morse Code Words",sidebar_label:"804. Unique Morse Code Words",tags:["Leetcode Easy","Hash"]},sidebar:"docSidebar",previous:{title:"763. Partition Labels",permalink:"/docs/leetcode/501-1000/all_paths_from_source_to_target"},next:{title:"814. Binary Tree Pruning",permalink:"/docs/leetcode/501-1000/binary_tree_pruning"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-morse-code-words/"},"https://leetcode.com/problems/unique-morse-code-words/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mapped them and remove duplicate with ",(0,i.kt)("inlineCode",{parentName:"li"},"set"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from string import ascii_lowercase\n\n\nclass Solution:\n    def uniqueMorseRepresentations(self, words: List[str]) -> int:\n        mapper = {\n            letter: morse for letter, morse in zip(\n                ascii_lowercase,\n                [\n                    ".-","-...","-.-.","-..",".",\n                    "..-.","--.","....","..",".---",\n                    "-.-",".-..","--","-.","---",\n                    ".--.","--.-",".-.","...","-",\n                    "..-","...-",".--","-..-","-.--",\n                    "--.."\n                ]\n            )\n        }\n\n        morses = set([\'\'.join([mapper[letter] for letter in word]) for word in words])\n        return len(morses)\n')))}p.isMDXComponent=!0}}]);