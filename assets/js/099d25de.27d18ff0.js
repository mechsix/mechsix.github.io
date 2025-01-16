"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36395],{85774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/501-1000/encode_decode_tinyurl","title":"535. Encode and Decode TinyURL","description":"Python","source":"@site/docs/leetcode/501-1000/535_encode_decode_tinyurl.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/encode_decode_tinyurl","permalink":"/docs/leetcode/501-1000/encode_decode_tinyurl","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":535,"frontMatter":{"title":"535. Encode and Decode TinyURL","sidebar_label":"535. Encode and Decode TinyURL","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"530. Minimum Absolute Difference in BST","permalink":"/docs/leetcode/501-1000/min_absolute_diff_in_bst"},"next":{"title":"538. Convert BST to Greater Tree","permalink":"/docs/leetcode/501-1000/feat1038_convert_bst_greater_tree"}}');var r=t(74848),d=t(28453);const c={title:"535. Encode and Decode TinyURL",sidebar_label:"535. Encode and Decode TinyURL",tags:["Leetcode Medium"]},s=void 0,i={},l=[{value:"Python",id:"python",level:2}];function a(e){const n={code:"code",h2:"h2",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import random\nfrom urllib.parse import urljoin\nfrom string import ascii_letters, digits\n\nclass Codec:\n    CHARS = ascii_letters + digits\n    BASE_URL = \'https://tinyurl.com/\'\n\n    def __init__(self):\n        self.mapper = dict()\n        self.used = set()\n\n    def _generate(self):\n        return \'\'.join([random.choice(self.CHARS) for i in range(8)])\n\n    def encode(self, longUrl: str) -> str:\n        """Encodes a URL to a shortened URL.\n        """\n        cand = self._generate()\n        while cand in self.used:\n            cand = self._generate()\n\n        url = urljoin(self.BASE_URL, cand)\n        self.mapper[url] = longUrl\n        self.used.add(cand)\n        return url\n\n    def decode(self, shortUrl: str) -> str:\n        """Decodes a shortened URL to its original URL.\n        """\n        if shortUrl not in self.mapper:\n            return\n        return self.mapper[shortUrl]\n\n# Your Codec object will be instantiated and called as such:\n# codec = Codec()\n# codec.decode(codec.encode(url))\n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var o=t(96540);const r={},d=o.createContext(r);function c(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);