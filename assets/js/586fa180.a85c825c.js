"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83654],{25108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"leetcode/1001-1500/search_suggestions_system","title":"1268. Search Suggestions System","description":"https://leetcode.com/problems/search-suggestions-system/","source":"@site/docs/leetcode/1001-1500/1268_search_suggestions_system.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/search_suggestions_system","permalink":"/docs/leetcode/1001-1500/search_suggestions_system","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Trie","permalink":"/docs/tags/trie"}],"version":"current","sidebarPosition":1268,"frontMatter":{"title":"1268. Search Suggestions System","sidebar_label":"1268. Search Suggestions System","tags":["Leetcode Medium","Trie"]},"sidebar":"docSidebar","previous":{"title":"1260. Shift 2D Grid","permalink":"/docs/leetcode/1001-1500/shift_2d_grid"},"next":{"title":"1288. Remove Covered Intervals","permalink":"/docs/leetcode/1001-1500/remove_covered_intervals"}}');var s=r(74848),o=r(28453);const c={title:"1268. Search Suggestions System",sidebar_label:"1268. Search Suggestions System",tags:["Leetcode Medium","Trie"]},i=void 0,d={},a=[{value:"Python",id:"python",level:2},{value:"Tire Tree with member of matched words",id:"tire-tree-with-member-of-matched-words",level:3},{value:"Javascript",id:"javascript",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/search-suggestions-system/",children:"https://leetcode.com/problems/search-suggestions-system/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.h3,{id:"tire-tree-with-member-of-matched-words",children:"Tire Tree with member of matched words"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    MATCHED_KEY = '#'\n    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:\n        products.sort()\n\n        # Build the trie tree, and remember the matched products under a special key: MATCHED_KEY\n        trie = {}\n        cur = trie\n        for product in products:\n            cur = trie\n            for letter in product:\n                cur = cur.setdefault(letter, {})\n                matched = cur.setdefault(self.MATCHED_KEY, [])\n                if len(matched) < 3:\n                    matched.append(product)\n\n\n        # Travel the characters in searchWord, and get the result from the memory\n        result = []\n        cur = trie\n\n        is_matched = True  # Default from empty string, which \"is_matched\" true\n        for i, char in enumerate(searchWord):\n            if char not in cur:\n                is_matched = False\n\n            if not is_matched:\n                result.append([])\n                continue\n\n            cur = cur[char]\n            result.append(cur[self.MATCHED_KEY])\n\n        return result\n"})}),"\n",(0,s.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'var suggestedProducts = function (products, searchWord) {\n\tconst trie = new Trie();\n\ttrie.insert(products);\n\treturn trie.find(searchWord);\n};\n\nclass Trie {\n\tconstructor() {\n\t\tthis.root = { childs: {} };\n\t\tthis.max = 3;\n\t}\n\n\tinsert(products) {\n    for (let product of products) {\n      let node = this.root;\n      for (let char of product) {\n\t\t\t\tif (!node.childs[char]) node.childs[char] = { childs: {} };\n        node = node.childs[char];\n      }\n      node.isMatched = product;\n    }\n\t}\n\n\tfind(searchWord) {\n    let node = this.root;\n    const res = [];\n    for (const char of searchWord) {\n      if (node) {\n        res.push(this.deeper(node.childs[char]))\n        node = node.childs[char];\n      } else {\n        res.push([])\n      }\n    }\n    return res;\n\t}\n\n  deeper(node, result = []) {\n    if (result.length === this.max || !node) return result;\n    if (node.isMatched) {\n      result.push(node.isMatched)\n    }\n\n\t\tfor (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {\n\t\t\tconst char = String.fromCharCode(i);\n\t\t\tif (node.childs[char]) {\n\t\t\t\tthis.deeper(node.childs[char], result);\n\t\t\t}\n\t\t}\n    return result;\n  }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(96540);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);