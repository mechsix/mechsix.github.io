"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2522],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={slug:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7Web Application\u7684DateTime\u8655\u7406",title:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7Web Application\u7684DateTime\u8655\u7406",authors:["mech"],tags:["Develop Practice"]},p=void 0,c={permalink:"/blog/\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7Web Application\u7684DateTime\u8655\u7406",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/blog/blog/process-datetime.mdx",source:"@site/blog/process-datetime.mdx",title:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7Web Application\u7684DateTime\u8655\u7406",description:"\u6982\u8ff0",date:"2022-10-10T14:38:45.353Z",formattedDate:"October 10, 2022",tags:[{label:"Develop Practice",permalink:"/blog/tags/develop-practice"}],readingTime:11.675,truncated:!1,authors:[{name:"Mech Tsai",title:"Web Service Mechanic",url:"https://mechsix.github.io",imageURL:"https://avatars.githubusercontent.com/u/5463241?v=4",key:"mech"}]},u={authorsImageUrls:[void 0]},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"\u554f\u984c",id:"\u554f\u984c",children:[{value:"\u4e00\u592924\u5c0f\u6642",id:"\u4e00\u592924\u5c0f\u6642",children:[],level:3},{value:"DMY\u8207YMD",id:"dmy\u8207ymd",children:[],level:3}],level:2},{value:"\u6240\u4ee5\u8981\u600e\u9ebc\u8fa6\uff1f",id:"\u6240\u4ee5\u8981\u600e\u9ebc\u8fa6",children:[{value:"\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",children:[],level:3}],level:2},{value:"\u5169\u7a2e\u60c5\u5883",id:"\u5169\u7a2e\u60c5\u5883",children:[{value:"\u5efa\u7acb\u7684\u60c5\u5883",id:"\u5efa\u7acb\u7684\u60c5\u5883",children:[],level:3},{value:"\u67e5\u8a62\u7684\u60c5\u5883",id:"\u67e5\u8a62\u7684\u60c5\u5883",children:[],level:3}],level:2},{value:"Frontend",id:"frontend",children:[],level:2},{value:"Creation &amp; Query",id:"creation--query",children:[{value:"Scenarios",id:"scenarios",children:[],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"DateTime(\u65e5\u671f\u6642\u9593)\u7684\u8655\u7406\u5728\u73fe\u4ee3\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u5f88\u5e38\u898b\uff0c\u4f46\u8eab\u70ba\u958b\u767c\u8005\uff0c\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u7684\u5de5\u4f5c\u505a\u500b\u5e7e\u5e74\uff0c\u7e3d\u6709\u90a3\u9ebc\u5e7e\u6b21\u6703\u683d\u5728DateTime\u7684\u8655\u7406\u554f\u984c\u4e0a\u3002\u5c31\u65e5\u671f\u4f86\u8aaa\uff0c\u5e74\u8981\u6f64\u8207\u4e0d\u6f64\uff0c\u6708\u662f\u5927\u6708\u5c0f\u6708\uff0c\u96d6\u7136\u90fd\u6709\u4e00\u5b9a\u898f\u5247\u53ef\u5faa\uff0c\u4f46\u5176\u4e2d\u7684\u8907\u96dc\u5ea6\u5728\u958b\u767c\u61c9\u7528\u7a0b\u5f0f\u6642\u6709\u6642\u7a0b\u58d3\u529b\u4e0b\uff0c\u8981\u80fd\u5920\u8655\u7406\u5f97\u597d\u4e5f\u4e0d\u662f\u592a\u5bb9\u6613\u7684\u4e8b\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u6703\u4ee5Web Applicatin\u70ba\u7bc4\u4f8b\uff0c\u7c21\u8ff0\u5e7e\u500bDateTime\u8655\u7406\u4e0a\u53ef\u80fd\u9047\u5230\u7684\u554f\u984c\uff0c\u53ca\u8a72\u601d\u8003\u7684\u9ede"),(0,l.kt)("h2",{id:"\u554f\u984c"},"\u554f\u984c"),(0,l.kt)("h3",{id:"\u4e00\u592924\u5c0f\u6642"},"\u4e00\u592924\u5c0f\u6642"),(0,l.kt)("p",null,"\u6211\u5011\u9019\u88e1\u8ac7\u7684\u4e0d\u662f\u5929\u6587\u4e0a\u6240\u8aaa\u7684\uff0c\u4e00\u5929\u7565\u7b49\u65bc24.25\u5c0f\u6642\u7684\u554f\u984c\u3002\n\u800c\u662f\u6307\u5728\u5df2\u7d93\u88ab\u5ee3\u6cdb\u4f7f\u7528\uff0c\u65e9\u5df2\u8003\u616e\u958f\u5e74\u554f\u984c\u7684\u7684",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E6%A0%BC%E9%87%8C%E6%9B%86"},"\u683c\u91cc\u66c6"),"\u5728\u73fe\u5728\u96fb\u8166\u7cfb\u7d71\u4e2d\uff0c\u8655\u7406\u5c0f\u6642\u8207\u65e5\u671f\u8f49\u63db\u6642\u662f\u5426\u53ef\u4ee5\u5c07\u4e00\u5929\u7576\u4f5c24\u5c0f\u6642\u4f86\u8655\u7406\u7684\u554f\u984c"),(0,l.kt)("p",null,"\u8209\u500b\u4f8b\u5b50\u4f86\u8aaa\uff0c\u6709\u500b\u529f\u80fd\uff0c\u7531\u524d\u7aef\u5411\u5f8c\u7aef\u767c\u51fa\u8acb\u6c42\u53d6\u5f97\u904e\u53bb\u4e00\u5929\u7684\u8cc7\u6599\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u4e00\u500b\u521d\u6b65\u7684\u60f3\u6cd5\u5927\u6982\u6703\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7531\u524d\u7aef\u5411\u5f8c\u7aef\u767c\u8d77\u8acb\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u5f8c\u7aef\u6536\u5230\u8acb\u6c42\u6642\u4ee5server\u7684\u6642\u9593\u70ba\u6e96\u53d6\u5f97\u7576\u4e0b\u6642\u9593Now\u4f5c\u70balte(less than or equal)"),(0,l.kt)("li",{parentName:"ol"},"\u62fflte\u6e1b\u53bb24hr\u4f5c\u70bagte (greater than or equal)")),(0,l.kt)("p",null,"\u4ee5Javascript\u5beb\u8d77\u4f86\u5927\u6982\u662f\u9019\u6a23"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="frontend.js"',title:'"frontend.js"'},"fetch('http://backend.com/api/yesterday-post')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(data) {\n    $('target-pre').html(data);\n  });\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="backend.js"',title:'"backend.js"'},"async function (req, res) {\n    const endTime = new Date()\n    const starTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000)\n    const posts = await Post.find({\n        createdAt: {\n            $gte: `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()} 00:00:00`\n            $lte: `${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} 00:00:00`\n        }\n    })\n    res.json(posts)\n}\n")),(0,l.kt)("p",null,"\u770b\u8d77\u4f86\u61c9\u8a72\u6c92\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"endTime"),"\u662f\u7531Server\u6c7a\u5b9a\u7684\uff0c\u6240\u4ee5\u4e0d\u6703\u53d7\u5230\u524d\u7aef\u4f7f\u7528\u8005\u672c\u5730\u6642\u9593\u7684\u5f71\u97ff\uff0c\u6240\u4ee5\u9019\u96bb\u7a0b\u5f0f\u4e0d\u9700\u64d4\u5fc3\u4f7f\u7528\u8005\u96fb\u8166\u6821\u6642\u6709\u6c92\u6709\u554f\u984c"),(0,l.kt)("p",null,"\u63a5\u8457\u62ff",(0,l.kt)("inlineCode",{parentName:"p"},"endTime"),"\u6e1b\u53bb24hr\u53d6\u5f97gte\uff0c\u53bb\u8ddf\u8cc7\u6599\u5eab\u62ff\u51fa\u9019\u500b\u5340\u9593\u7684\u8cc7\u6599\u56de\u7d66\u524d\u7aef\u986f\u793a\u5728\u756b\u9762\u4e0a\u3002\u6240\u6709\u5f80\u8cc7\u6599\u5eab\u7684\u8f38\u5165\u90fd\u662f\u540c\u4e00\u53f0\u6a5f\u5668\uff0c\u4e5f\u5c31\u662f\u5f8c\u7aef\u6c7a\u5b9a\u7684\uff0c\u4e5f\u6c92\u6709\u88abinject\u7b49\u5b89\u5168\u7591\u616e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f46\u5176\u5be6\u9019\u96bb\u7a0b\u5f0f\u5728\u5f88\u591a\u570b\u5bb6\uff0c\u4e00\u5e74\u6703\u58de\u500b\u5169\u6b21")),(0,l.kt)("p",null,"\u56e0\u70ba\u6bcf\u5e74\u6709\u500b\u90a3\u9ebc\u5169\u5929\uff0c\u5728\u5f88\u591a\u570b\u5bb6\u4e26\u4e0d\u662f24\u5c0f\u6642 - \u65e5\u5149\u7bc0\u7d04(Dalight Saving)\u5207\u63db\u7684\u90a3\u5169\u5929\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4ee52021\u5e74\u4f86\u8aaa\uff0c\u5728\u7f8e\u570b\u6771\u90e8\u6a19\u6e96\u6642\u9593(EST)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mar 14, 2021 01:59:59 \u7684\u4e0b\u4e00\u79d2\u9418\u662f 03:00:00\uff0c\u65e5\u5149\u7bc0\u7d04\u7d50\u675f"),(0,l.kt)("li",{parentName:"ul"},"Nov 7, 2021 02:00:00 \u7684\u4e0b\u4e00\u79d2\u9418\u4e5f\u9084\u662f 02:00:00\uff0c\u65e5\u5149\u7bc0\u7d04\u958b\u59cb")),(0,l.kt)("p",null,"\u65bc\u662f\u57282021\u5e74\u7684\u7f8e\u570b\uff0cMar 14\u53ea\u670923\u5c0f\u6642\uff0c\u800cNov 7\u537b\u670925\u500b\u5c0f\u6642\n\u53ea\u8981\u4f60\u7684\u7a0b\u5f0f\u88ab\u57f7\u884c\u7684\u7576\u4e0b\uff0c\u5f80\u524d\u7b9724\u5c0f\u6642\u6703\u7d93\u904e\u9019\u500b\u88ab\u5207\u63db\u7684\u5c0f\u6642\u7684\u8a71\uff0c\u88ab\u5f9e\u8cc7\u6599\u5eab\u6293\u51fa\u4f86\u7684\u8cc7\u6599\u5c31\u6703\u591a\u6216\u5c11\u4e00\u500b\u5c0f\u6642\u7684\u8cc7\u6599"),(0,l.kt)("h3",{id:"dmy\u8207ymd"},"DMY\u8207YMD"),(0,l.kt)("p",null,"\u4e0d\u540c\u570b\u5bb6\u5c0d\u65bc\u65e5\u671f\u683c\u5f0f\u7684\u4f7f\u7528\u6709\u4e0d\u540c\u7684\u4f7f\u7528\u7fd2\u6163\uff0c1/3\u662f\u6307Mar 1st\uff0c\u9084\u662fJan 3rd\u771f\u7684\u8981\u8655\u7406\u7684\u5c0d\u4e5f\u4e0d\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u9019\u5f35\u5f9e",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Date_format_by_country"},"Wiki"),"\u4f86\u7684\u5716\uff0c",(0,l.kt)("span",{style:{color:"#0ff"}},"\u9752\u8272"),"\u7528\u7684\u662fDMY\uff1b",(0,l.kt)("span",{style:{color:"#ff0"}},"\u9ec3\u8272"),"\u7528\u7684\u662fYMD\uff0c\u800c",(0,l.kt)("span",{style:{color:"#0f0"}},"\u7da0\u8272"),"\u7684\u570b\u5bb6\u5247\u662f\u6df7\u7528"),(0,l.kt)("p",null,"\u8981\u80fd\u6b63\u78ba\u683c\u5f0f\u5316\u9019\u4e9b\u65e5\u671f\u683c\u5f0f\u8b8a\u6210\u8907\u96dc\u7684\u554f\u984c\uff0c\u65bc\u662f\u5728\u6709\u6642\u7a0b\u58d3\u529b\u7684\u60c5\u6cc1\u4e0b\uff0c\u958b\u767c\u7cfb\u7d71\u9047\u5230\u9019\u4ef6\u4e8b\u5c31\u7576\u4f5c\u300c",(0,l.kt)("em",{parentName:"p"},"\u4e0d\u6703\u6709\u8de8\u570b\u4f7f\u7528\u9700\u6c42"),"\u300d\u5ffd\u7565\u904e\u53bb"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"DD",src:n(9956).Z})),(0,l.kt)("h2",{id:"\u6240\u4ee5\u8981\u600e\u9ebc\u8fa6"},"\u6240\u4ee5\u8981\u600e\u9ebc\u8fa6\uff1f"),(0,l.kt)("p",null,"\u554f\u984c\u6211\u5011\u660e\u767d\u4e86\uff0c\u4f46\u662f\u8981\u600e\u9ebc\u8fa6\uff1f\u6709\u6c92\u6709\u4e00\u500b\u6e96\u5247\u6216\u505a\u6cd5\u662f\u80fd\u8b93\u6211\u5011\u5584\u52a0\u5229\u7528\u5225\u4eba\u9020\u597d\u7684\u8f2a\u5b50\uff0c\u4f46\u662f\u5728\u6211\u5011\u81ea\u5df1\u5beb\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\u537b\u53c8\u80fd\u6b63\u78ba\u64cd\u4f5cDateTime\u7684\u8655\u7406\uff1f"),(0,l.kt)("p",null,"\u8b93\u6211\u5011\u4f86\u770b\u4e00\u4e0b\u4e0b\u9762\u9019\u5169\u500b\u65e5\u671f\u6642\u9593\u7684\u8868\u793a\uff0c\u4ed6\u5011\u662f\u76f8\u7b49\u7684\u55ce\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2021-10-13 10:00:00 (UTC+8)"),(0,l.kt)("li",{parentName:"ul"},"2021-10-13 02:00:00 (UTC+0)")),(0,l.kt)("p",null,"\u5982\u679c\u4ed6\u5011\u662f\u5b57\u4e32\uff0c\u7576\u7136\u4e0d\u662f\u76f8\u7b49\u7684\uff0c\u4f46\u5982\u679c\u4ed6\u5011\u662fDateTime\u7269\u4ef6\uff0c\u4ed6\u5011\u5247\u61c9\u8a72\u8981\u662f\u76f8\u7b49\u7684\u3002\u76f8\u4fe1\u770b\u5230\u9019\u88e1\u61c9\u8a72\u6709\u4e9b\u982d\u7dd2\uff0c\u5176\u5be6\u8655\u7406\u65e5\u671f\u6642\u9593\u7684\u554f\u984c\u4e26\u4e0d\u90a3\u9ebc\u8907\u96dc\uff0c\u53ea\u8981\u6211\u5011\u9075\u5faa\u4e00\u500b\u5927\u539f\u5247\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u8981\u53c3\u8207\u4efb\u4f55\u904b\u7b97\u4e4b\u524d\uff0c\u5148\u628a\u5b83\u8f49\u63db\u6210\u5177\u6709\u8655\u7406\u9019\u4e9b\u8907\u96dc\u554f\u984c\u80fd\u529b\u7684\u7269\u4ef6\uff1b\u5728\u8981\u50b3\u905e\u6216\u986f\u793a\u51fa\u4f86\u4e4b\u524d\uff0c\u5c07DateTime\u7269\u4ef6\u5e8f\u5217\u5316(Seralize)\u6210\u53ef\u88ab\u5c0d\u65b9\u8b80\u61c2\u7684\u683c\u5f0f")),(0,l.kt)("p",null,"\u80fd\u5920\u8655\u7406\u9019\u4e9b\u554f\u984c\u7684DateTime\u7269\u4ef6\u5728\u5404\u500b\u8a9e\u8a00\u4e2d\u90fd\u5b58\u5728\uff0cPython\u81ea\u5df1\u7684",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/datetime.html"},"datetime"),"\u8207",(0,l.kt)("a",{parentName:"p",href:"http://pytz.sourceforge.net/"},"pytz"),"\uff0cPHP\u7684",(0,l.kt)("a",{parentName:"p",href:"https://carbon.nesbot.com/docs/"},"Carbon"),"\uff0cJavascript\u81ea\u5df1\u7684",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date"),"\u6216\u4f7f\u7528\u9ad8\u968e\u4e00\u9ede\u7684\u5de5\u5177\u4f8b\u5982",(0,l.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"Moment"),"\uff0c\u6bcf\u4e00\u500b\u90fd\u80fd\u6b63\u78ba\u8655\u7406\u65e5\u671f\u6642\u9593\u7684\u8a08\u7b97\u3001\u5e8f\u5217\u5316\u3001\u8207\u53cd\u5e8f\u5217\u5316\u554f\u984c\u3002"),(0,l.kt)("h3",{id:"\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316"),(0,l.kt)("p",null,"\u800c\u5728\u5e8f\u5217\u5316\u7684\u683c\u5f0f\u4e2d\uff0c\u6700\u5177\u6b0a\u5a01\u6027\u7684\u5c31\u662f",(0,l.kt)("a",{parentName:"p",href:"https://www.iso.org/iso-8601-date-and-time-format.html"},"ISO8601"),"\u683c\u5f0f\uff0c\u4e5f\u56e0\u70ba\u5b83\u662f\u4e00\u7a2e\u8a2d\u8a08\u6a19\u6e96\uff0c\u5e7e\u4e4e\u80fd\u5728\u6240\u6709\u7684\u8a9e\u8a00\u8207\u5e73\u53f0\u4e2d\u88ab\u6b63\u78ba\u7684\u8655\u7406\u3002\u5728ISO8601\u4e2d\uff0c\u5e36\u65e5\u671f\u6642\u9593\u8207\u6642\u5340\u7684\u8868\u793a\u65b9\u6cd5\u9577\u9019\u6a23"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"2021-10-13T10:00:00+08:00\n2021-10-13T02:00:00+00:00")),(0,l.kt)("p",null,"\u6216\u5982\u679c\u4f60\u662fUTC\u6642\u5340\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c07\u6642\u5340\u6539\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"Z")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"2021-10-13T02:00:00Z")),(0,l.kt)("p",null,"\u5982\u679c\u5728Javascript\u5167\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Date()"),"\u539f\u751f\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toISOString()"),"\u5e7e\u4e4e\u5e6b\u4f60\u5305\u8fa6\u4e86\u9019\u4ef6\u4e8b\u3002\u66f4\u65b9\u4fbf\u7684\u662f\uff0c\u5728\u53cd\u5e8f\u5217\u5316\u6642\uff0c\u5c07\u5b57\u4e32\u8b80\u5165\u6210\u70baDateTime\u7269\u4ef6\uff0c\u76f4\u63a5\u5c07",(0,l.kt)("inlineCode",{parentName:"p"},"toISOString()"),"\u7684\u8f38\u51fa\u5b57\u4e32\u62ff\u56de\u4f86\u7d66",(0,l.kt)("inlineCode",{parentName:"p"},"new Date()"),"\u9032\u884c\u53cd\u5e8f\u5217\u5316\u56de\u7269\u4ef6\uff0c\u4f60\u5176\u5be6\u6703\u62ff\u5230\u4e00\u6a23\u7684DateTime\u7269\u4ef6"),(0,l.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u9019\u500bDemo\uff0c\u540c\u6a23\u7684DateTime\u7269\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"now"),"\u88ab\u5e8f\u5217\u5316\u6210ISOString\u4f5c\u70ba\u986f\u793a\u4e4b\u7528\uff1b\u800c\u518d\u5ea6\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"Date"),"\u5c07\u4ed6\u5011\u53cd\u5e8f\u5217\u5316\u56deDateTime\u7269\u4ef6\uff0c\u7a0b\u5f0f\u8a8d\u70ba\u4ed6\u5011\u662f\u76f8\u7b49\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DisplayDateTime() {\n  const [dt, setDt] = useState(new Date())\n  const [isoString, setIsoString] = useState('')\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      const now = new Date()\n\n      setDt(now)\n      setIsoString(now.toISOString())\n    }, 1000)\n    return () => clearInterval(timer)\n  }, [])\n\n  return (\n    <>\n      <p>\n        ISO String: {isoString}\n      </p>\n      <p>\n        DT as timestamp: {dt.getTime()}\n      </p>\n      <p>\n        Unseralize still equal: {\n          (new Date(isoString)).getTime() == dt.getTime()\n          ? 'yes' : 'no'\n          }\n      </p>\n    </>\n  );\n}\n")),(0,l.kt)("p",null,"\u4ed4\u7d30\u89c0\u5bdf\u4f60\u6703\u767c\u73fe\uff0c\u9019\u500b\u5e8f\u5217\u5316\u51fa\u4f86\u7684ISO8601\u5b57\u4e32\u662f\u4ee5Z\u7d50\u5c3e\uff0c\u4e5f\u5c31\u662f\u8aaa\u4ed6\u5176\u5be6\u662fUTC 0\u7684\u6642\u5340\u5728\u8868\u793a\u4f60\u7576\u4e0b\u7684local time\uff0c\u4e5f\u5c31\u662f\u8aaa\u5b83\u5176\u5be6\u662f\u5e36\u6642\u5340\u8cc7\u8a0a\u7684\uff0c\u700f\u89bd\u5668\u8655\u7406\u6642\u662f\u6703\u8b80\u5230\u4f5c\u696d\u7cfb\u7d71\u6240\u8a2d\u5b9a\u7684\u6642\u5340\u3002\u597d\u597d\u638c\u63e1\u9019\u500b\u7279\u6027\uff0c\u8981\u5728\u700f\u89bd\u5668\u4f9d\u7167\u4f7f\u7528\u8005\u7684\u6642\u5340\u4f86\u986f\u793a\u6642\u9593\uff0c\u5176\u5be6\u662f\u975e\u5e38\u65b9\u4fbf\u7684\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e26\u4e0d\u662f\u6240\u6709\u7684\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u751a\u81f3\u662fISO8601\u672c\u8eab\uff0c\u90fd\u80fd\u5920\u6b63\u78ba\u5730\u4fdd\u7559DateTime\u7269\u4ef6\u6240\u5305\u542b\u4e86\u8cc7\u8a0a\u3002\u5728ISO8601\u7684\u4f8b\u5b50\u4e2d\u662f\u56e0\u70ba\u5176\u5be6ISO8601\u5c0d\u65bc\u5176\u683c\u5f0f\u4e2d\u80fd\u4fdd\u7559\u7684\u8a0a\u606f\u7cbe\u78ba\u5ea6\u662f\u53ef\u4ee5\u9078\u64c7\u7684\uff0c\u4f8b\u5982\u4f60\u53ef\u4ee5\u53ea\u62ff\u5b83\u4f86\u8868\u793a\u67d0\u500b\u65e5\u671f\uff0c\u800c\u4e0d\u662f\u8868\u793a\u5230\u5206\u79d2"),(0,l.kt)("p",null,"\u6240\u4ee5\u5728\u5c07DateTime\u7269\u4ef6\u5e8f\u5217\u5316\u6210ISO8601\u6642\uff0c\u4e5f\u5f97\u6ce8\u610f\u662f\u5426\u5c07\u8a0a\u606f\u7684\u7cbe\u78ba\u5ea6\u7d66\u6368\u68c4\u4e86\u3002"),(0,l.kt)("p",null,"\u800c\u5176\u4ed6\u7684\u5e8f\u5217\u5316\u65b9\u5f0f\uff0c\u4f8b\u5982\u5728Javascript\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"toUTCString()"),"\uff0c\u56e0\u70ba\u4ed6\u5e8f\u5217\u5316\u51fa\u4f86\u7684\u683c\u5f0f\u6c92\u8fa6\u6cd5\u5132\u5b58\u5230\u6beb\u79d2\uff0c\u6240\u4ee5\u8981\u662f\u4f60\u62ff\u5b83\u505a\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u4f60\u6703\u767c\u73fe\u53cd\u5e8f\u5217\u5316\u56de\u4f86\u7684\u7d50\u679c\u6703\u56e0\u70ba\u79d2\u4ee5\u4e0b\u7684\u8cc7\u8a0a\u88ab\u6368\u68c4\uff0c\u5c0e\u81f4\u6700\u7d42\u53cd\u5e8f\u5217\u5316\u56de\u4f86\u7684\u7d50\u679c\u4e0d\u662f\u76f8\u7b49\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function DisplayDateTime() {\n  const [dt, setDt] = useState(new Date())\n  const [utcString, setUtcString] = useState('')\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      const now = new Date()\n\n      setDt(now)\n      setUtcString(now.toUTCString())\n    }, 1000)\n    return () => clearInterval(timer)\n  }, [])\n\n  return (\n    <>\n      <p>\n        UTC String: {utcString}\n      </p>\n      <p>\n        DT to timestamp: {dt.getTime()} <br/>\n        UTC String Unseralize Timestamp: {(new Date(utcString)).getTime()}\n      </p>\n      <p>\n        Unseralize still equal: {\n          (new Date(utcString)).getTime() == dt.getTime()\n          ? 'yes' : 'no'\n          }\n      </p>\n    </>\n  );\n}\n")),(0,l.kt)("h2",{id:"\u5169\u7a2e\u60c5\u5883"},"\u5169\u7a2e\u60c5\u5883"),(0,l.kt)("p",null,"\u5728\u7e7c\u7e8c\u8a0e\u8ad6\u524d\uff0c\u6709\u5fc5\u8981\u63d0\u4e00\u4e0bSSoT (Single Source of Truth)\u7684\u6982\u5ff5\u3002\u8cc7\u6599\u5728\u4e0d\u540c\u7684process\u8207\u4e0d\u540c\u7684\u6a5f\u5668\u9593\u50b3\u905e\uff0c\u904e\u7a0b\u4e2d\u56e0\u70ba\u683c\u5f0f\u8f49\u63db\u3001\u50b3\u8f38\u5ef6\u9072\u3001\u907f\u514d\u88ab\u7be1\u6539\u7684\u5b89\u5168\u8003\u91cf\u3001\u751a\u81f3\u662f\u932f\u8aa4\u7684\u5be6\u4f5c(Bug)\uff0c\u90fd\u6709\u53ef\u80fd\u5c0e\u81f4\u540c\u4e00\u4efd\u8cc7\u6599\u5728\u4e0d\u540c\u7684\u6642\u9593\u6216\u5730\u65b9\u800c\u6709\u4e0d\u540c\u7684\u503c"),(0,l.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u524d\u7aef\u768414:00\uff0c\u5728\u5f8c\u7aef\u56e0\u70ba\u6642\u5340\u4e0d\u540c\u6216\u662f\u4e3b\u6a5f\u7684\u6642\u9593\u6821\u6b63\u6709\u554f\u984c\u6709\u53ef\u80fd\u662f13:01"),(0,l.kt)("p",null,"SSoT\u7684\u6982\u5ff5\u6307\u7684\u662f\uff1a\u5230\u5e95\u54ea\u4e00\u4efd\u8cc7\u6599\u662f\u6700\u5177\u6b0a\u5a01\u6027\u7684\uff1f\u5728\u8cc7\u6599\u6709\u843d\u5dee\u7684\u6642\u5019\u53ef\u4ee5\u4ee5\u5b83\u70ba\u6e96\uff1f"),(0,l.kt)("p",null,"\u8981\u80fd\u5920\u6b63\u78ba\u7684\u8655\u7406DateTime\uff0c\u8b58\u5225\u54ea\u4e00\u4efd\u8cc7\u6599\u662fSSoT\u662f\u6700\u91cd\u8981\u7684\u4e00\u500b\u6b65\u9a5f"),(0,l.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4ee53-tier\u7684Web Application\u70ba\u4f8b\u5b50\uff0c\u4e09\u500b\u6700\u4e3b\u8981\u7522\u751f\u8cc7\u6599\u843d\u5dee\u7684SSoT\u5019\u9078\u4eba\u5c31\u662f\u90a3\u4e09\u500btier\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Frontend"),(0,l.kt)("li",{parentName:"ol"},"Backend"),(0,l.kt)("li",{parentName:"ol"},"Database")),(0,l.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u60c5\u5883\u4e0b\uff0cSSoT\u53ef\u80fd\u6703\u5728\u4e0d\u540c\u7684\u5730\u65b9"),(0,l.kt)("h3",{id:"\u5efa\u7acb\u7684\u60c5\u5883"},"\u5efa\u7acb\u7684\u60c5\u5883"),(0,l.kt)("p",null,"\u5728\u5efa\u7acb\u8cc7\u6599\u7684\u60c5\u5883\uff0c\u4f8b\u5982\u8aaa\u524d\u7aef\u6309\u4e0bsubmit\uff0c\u5f8c\u7aef\u6536\u5230\u8acb\u6c42\u5f8c\u5f80\u8cc7\u6599\u5eab\u5efa\u7acb\u8cc7\u6599\uff0c\u9019\u7b46\u8cc7\u6599\u7684Create Time\u7684SSoT\u6703\u662f\u4ee5\u8ab0\u70ba\u57fa\u6e96\uff1f"),(0,l.kt)("p",null,"\u524d\u7aef\u53ef\u4ee5\u5148\u6392\u9664\uff0c\u7562\u7adf\u524d\u7aef\u7684\u7acb\u5834\u662f\u300e\u9001\u51fa\u8acb\u6c42\u300f\uff0c\u52a0\u4e0a\u4f86\u81ea\u524d\u7aef\u7684\u8cc7\u6599\u53ef\u80fd\u88ab\u7be1\u6539\u4e26\u4e0d\u53ef\u4fe1\uff0c\u4e26\u6c92\u8fa6\u6cd5\u4f5c\u70baSSoT"),(0,l.kt)("p",null,"\u5f8c\u7aef\u4ee5\u63a5\u6536\u5230\u8acb\u6c42\u7684\u6642\u9593\u70ba\u6e96\uff0c\u770b\u8d77\u4f86\u662f\u500b\u9078\u9805"),(0,l.kt)("h3",{id:"\u67e5\u8a62\u7684\u60c5\u5883"},"\u67e5\u8a62\u7684\u60c5\u5883"),(0,l.kt)("p",null,'\u4f7f\u7528\u8005\u5728\u524d\u7aef\u9001\u51fa"\u67e5\u8a62\u7684\u689d\u4ef6"\uff0c\u88ab\u67e5\u8a62\u7684\u8cc7\u6599\u5247\u662f\u4ee5\u8cc7\u6599\u5eab\u5167\u7684\u70ba\u6e96'),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8aaa\uff0c\u67e5\u8a62\u7684SSoT\u4f86\u81ea\u524d\u7aef\uff1b\u56de\u61c9\u7684\u8cc7\u6599SSoT\u662f\u8cc7\u6599\u5eab"),(0,l.kt)("h2",{id:"frontend"},"Frontend"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"new Date()\nnew Date('2021-01-01')\n")),(0,l.kt)("h2",{id:"creation--query"},"Creation & Query"),(0,l.kt)("h3",{id:"scenarios"},"Scenarios"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Created At"),(0,l.kt)("li",{parentName:"ul"},"Received At"),(0,l.kt)("li",{parentName:"ul"},"Query between")))}d.isMDXComponent=!0},9956:function(e,t,n){t.Z=n.p+"assets/images/date-format-country-b9807abd5416e7ade7b58478f1e80c3c.png"}}]);