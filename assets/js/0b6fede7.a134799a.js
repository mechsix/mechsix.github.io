"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2522],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={slug:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406",title:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406",authors:["mech"],tags:["Develop Practice"]},c=void 0,u={permalink:"/blog/\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/blog/blog/process-datetime.mdx",source:"@site/blog/process-datetime.mdx",title:"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406",description:"\u300e\u51fa\u4f86\u6df7\u9072\u65e9\u8981\u9084\u7684\u300f",date:"2021-12-21T16:40:22.700Z",formattedDate:"December 21, 2021",tags:[{label:"Develop Practice",permalink:"/blog/tags/develop-practice"}],readingTime:4.895,truncated:!1,authors:[{name:"Mech Tsai",title:"Web Service Mechanic",url:"https://mechsix.github.io",imageURL:"https://avatars.githubusercontent.com/u/5463241?v=4",key:"mech"}]},p={authorsImageUrls:[void 0]},s=[{value:"\u300e\u51fa\u4f86\u6df7\u9072\u65e9\u8981\u9084\u7684\u300f",id:"\u51fa\u4f86\u6df7\u9072\u65e9\u8981\u9084\u7684",children:[],level:2},{value:"\u4e00\u5929\u768424\u5c0f\u6642",id:"\u4e00\u5929\u768424\u5c0f\u6642",children:[],level:2},{value:"SSoT",id:"ssot",children:[],level:2},{value:"\u5169\u7a2e\u60c5\u5883",id:"\u5169\u7a2e\u60c5\u5883",children:[{value:"\u5efa\u7acb\u7684\u60c5\u5883",id:"\u5efa\u7acb\u7684\u60c5\u5883",children:[],level:3},{value:"\u67e5\u8a62\u7684\u60c5\u5883",id:"\u67e5\u8a62\u7684\u60c5\u5883",children:[],level:3}],level:2},{value:"Frontend",id:"frontend",children:[],level:2},{value:"Creation &amp; Query",id:"creation--query",children:[],level:2},{value:"How to?",id:"how-to",children:[],level:2},{value:"Transfer with spec, process as object",id:"transfer-with-spec-process-as-object",children:[{value:"Scenarios",id:"scenarios",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u51fa\u4f86\u6df7\u9072\u65e9\u8981\u9084\u7684"},"\u300e\u51fa\u4f86\u6df7\u9072\u65e9\u8981\u9084\u7684\u300f"),(0,a.kt)("p",null,"\u7576\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u4e5f\u7e3d\u6709\u90a3\u9ebc\u5e7e\u6b21\u6703\u683d\u5728\u65e5\u671f\u6642\u9593\u7684\u8655\u7406\u554f\u984c\u4e0a"),(0,a.kt)("p",null,"\u672c\u6587\u6703\u4ee5Web Applicatin\u70ba\u7bc4\u4f8b\uff0c\u7c21\u8ff0\u5e7e\u500b\u53ef\u80fd\u9047\u5230\u7684\u554f\u984c\uff0c\u53ca\u8a72\u601d\u8003\u7684\u9ede"),(0,a.kt)("h2",{id:"\u4e00\u5929\u768424\u5c0f\u6642"},"\u4e00\u5929\u768424\u5c0f\u6642"),(0,a.kt)("p",null,"\u6240\u4ee5\u4e00\u5929\u4e0d\u662f24\u5c0f\u6642\u55ce\uff1f"),(0,a.kt)("p",null,"\u6211\u5011\u9019\u88e1\u8ac7\u7684\u53ef\u4e0d\u662f\u5929\u6587\u4e0a\u6240\u8aaa\u7684\uff0c\u4e00\u5929\u7565\u7b49\u65bc24.25\u5c0f\u6642\u7684\u554f\u984c\u3002\n\u800c\u662f\u6307\u5728\u5df2\u7d93\u88ab\u5ee3\u6cdb\u4f7f\u7528\u5728\u5404\u7a2e\u96fb\u8166\u7cfb\u7d71\u4e2d\uff0c\u65e9\u5df2\u8003\u616e\u958f\u5e74\u554f\u984c\u7684\u7684\u683c\u91cc\u66c6(Gregorian calendar)\u4e2d\u768424\u5c0f\u6642"),(0,a.kt)("p",null,"\u8209\u500b\u4f8b\u5b50\u4f86\u8aaa\uff0c\u6709\u500b\u529f\u80fd\uff0c\u7531\u524d\u7aef\u5411\u5f8c\u7aef\u767c\u51fa\u8acb\u6c42\u53d6\u5f97\u904e\u53bb\u4e00\u5929\u7684\u8cc7\u6599\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u76f4\u89ba\u7684\u505a\u6cd5\u5927\u6982\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7531\u524d\u7aef\u5411\u5f8c\u7aef\u767c\u8d77\u8acb\u6c42"),(0,a.kt)("li",{parentName:"ol"},"\u5f8c\u7aef\u6536\u5230\u8acb\u6c42\u6642\u4ee5server\u7684\u6642\u9593\u70ba\u6e96\u53d6\u5f97\u7576\u4e0b\u6642\u9593Now\u4f5c\u70balte(less than or equal)"),(0,a.kt)("li",{parentName:"ol"},"\u62fflte\u6e1b\u53bb24hr\u4f5c\u70bagte (greater than or equal)")),(0,a.kt)("p",null,"\u4ee5Javascript\u5beb\u8d77\u4f86\u5927\u6982\u662f\u9019\u6a23"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="frontend.js"',title:'"frontend.js"'},"fetch('http://backend.com/api/yesterday-post')\n  .then(function(response) {\n    return response.json();\n  })\n  .then(function(data) {\n    $('target-pre').html(data);\n  });\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="backend.js"',title:'"backend.js"'},"async function (req, res) {\n    const endTime = new Date()\n    const starTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000)\n    const posts = await Post.find({\n        createdAt: {\n            $gte: `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()} 00:00:00`\n            $lte: `${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} 00:00:00`\n        }\n    })\n    res.json(posts)\n}\n")),(0,a.kt)("p",null,"\u770b\u8d77\u4f86\u61c9\u8a72\u6c92\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,a.kt)("p",null,"\u7531\u65bc",(0,a.kt)("inlineCode",{parentName:"p"},"endTime"),"\u662f\u7531Server\u6c7a\u5b9a\u7684\uff0c\u6240\u4ee5\u4e0d\u6703\u53d7\u5230\u524d\u7aef\u4f7f\u7528\u8005\u672c\u5730\u6642\u9593\u7684\u5f71\u97ff\uff0c\n\u7136\u5f8c\u62ff",(0,a.kt)("inlineCode",{parentName:"p"},"endTime"),"\u6e1b\u53bb24hr\u53d6\u5f97gte\uff0c\u53bb\u8ddf\u8cc7\u6599\u5eab\u62ff\u51fa\u9019\u500b\u5340\u9593\u7684\u8cc7\u6599\u56de\u7d66\u524d\u7aef\u986f\u793a\u5728\u756b\u9762\u4e0a\u3002\u6240\u6709\u5f80\u8cc7\u6599\u5eab\u7684\u8f38\u5165\u90fd\u662f\u5f8c\u7aef\u6c7a\u5b9a\u7684\uff0c\u4e5f\u6c92\u6709\u88abinject\u7b49\u5b89\u5168\u7591\u616e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f46\u5176\u5be6\u9019\u96bb\u7a0b\u5f0f\u5728\u5f88\u591a\u570b\u5bb6\uff0c\u4e00\u5e74\u6703\u58de\u500b\u5169\u6b21")),(0,a.kt)("p",null,"\u56e0\u70ba\u6bcf\u5e74\u6709\u500b\u90a3\u9ebc\u5169\u5929\uff0c\u5728\u5f88\u591a\u570b\u5bb6\u4e26\u4e0d\u662f24\u5c0f\u6642 - Dalight Saving\u5207\u63db\u7684\u90a3\u5169\u5929\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u4ee52021\u5e74\u4f86\u8aaa\uff0c\u5728\u7f8e\u570b\u6771\u5cb8(EST)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mar 14, 2021 01:59:59 \u7684\u4e0b\u4e00\u79d2\u9418\u662f 03:00:00"),(0,a.kt)("li",{parentName:"ul"},"Nov 7, 2021 02:00:00 \u7684\u4e0b\u4e00\u79d2\u9418\u4e5f\u9084\u662f 02:00:00")),(0,a.kt)("p",null,"\u65bc\u662f\u57282021\u5e74\u7684\u7f8e\u570b\uff0cMar 14\u53ea\u670923hr\uff0c\u800cNov 7\u537b\u670925hr\n\u53ea\u8981\u4f60\u7684\u7a0b\u5f0f\u88ab\u57f7\u884c\u7684\u7576\u4e0b\uff0c\u5f80\u524d\u7b9724hr\u6703\u7d93\u904e\u9019\u500b\u88ab\u5207\u63db\u7684\u5c0f\u6642\u7684\u8a71\uff0c\u88ab\u5f9e\u8cc7\u6599\u5eab\u6293\u51fa\u4f86\u7684\u8cc7\u6599\u5c31\u6703\u591a\u6216\u5c11\u4e00\u500b\u5c0f\u6642\u7684\u8cc7\u6599"),(0,a.kt)("h2",{id:"ssot"},"SSoT"),(0,a.kt)("p",null,"\u5728\u7e7c\u7e8c\u8a0e\u8ad6\u524d\uff0c\u6709\u5fc5\u8981\u63d0\u4e00\u4e0bSSoT (Single Source of Truth)\u7684\u6982\u5ff5"),(0,a.kt)("p",null,"\u8cc7\u6599\u5728\u4e0d\u540c\u7684process\u8207\u4e0d\u540c\u7684\u6a5f\u5668\u9593\u50b3\u905e\uff0c\u904e\u7a0b\u4e2d\u56e0\u70ba\u683c\u5f0f\u8f49\u63db\u3001\u50b3\u8f38\u5ef6\u9072\u3001\u907f\u514d\u88ab\u7be1\u6539\u7684\u5b89\u5168\u8003\u91cf\u3001\u751a\u81f3\u662f\u932f\u8aa4\u7684\u5be6\u4f5c(Bug)\uff0c\u90fd\u6709\u53ef\u80fd\u5c0e\u81f4\u540c\u4e00\u4efd\u8cc7\u6599\u5728\u4e0d\u540c\u7684\u6642\u9593\u6216\u5730\u65b9\u800c\u6709\u4e0d\u540c\u7684\u503c"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u524d\u7aef\u768414:00\uff0c\u5728\u5f8c\u7aef\u56e0\u70ba\u6642\u5340\u4e0d\u540c\u6216\u662f\u4e3b\u6a5f\u7684\u6642\u9593\u6821\u6b63\u6709\u554f\u984c\u6709\u53ef\u80fd\u662f13:01"),(0,a.kt)("p",null,"SSoT\u7684\u6982\u5ff5\u6307\u7684\u662f\uff1a\u5230\u5e95\u54ea\u4e00\u4efd\u8cc7\u6599\u662f\u6700\u5177\u6b0a\u5a01\u6027\u7684\uff1f\u5728\u8cc7\u6599\u6709\u843d\u5dee\u7684\u6642\u5019\u53ef\u4ee5\u4ee5\u5b83\u70ba\u6e96\uff1f"),(0,a.kt)("p",null,"\u8981\u80fd\u5920\u6b63\u78ba\u7684\u8655\u7406DateTime\uff0c\u8b58\u5225\u54ea\u4e00\u4efd\u8cc7\u6599\u662fSSoT\u662f\u6700\u91cd\u8981\u7684\u4e00\u500b\u6b65\u9a5f"),(0,a.kt)("h2",{id:"\u5169\u7a2e\u60c5\u5883"},"\u5169\u7a2e\u60c5\u5883"),(0,a.kt)("p",null,"\u82e5\u4ee53-tier\u7684Web Application\u4f86\u8a0e\u8ad6\uff0c\u4e09\u500b\u6700\u4e3b\u8981\u7522\u751f\u8cc7\u6599\u843d\u5dee\u7684SSoT\u5019\u9078\u4eba\u5c31\u662f\u90a3\u4e09\u500btier\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Frontend"),(0,a.kt)("li",{parentName:"ol"},"Backend"),(0,a.kt)("li",{parentName:"ol"},"Database")),(0,a.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u60c5\u5883\u4e0b\uff0cSSoT\u53ef\u80fd\u6703\u5728\u4e0d\u540c\u7684\u5730\u65b9"),(0,a.kt)("h3",{id:"\u5efa\u7acb\u7684\u60c5\u5883"},"\u5efa\u7acb\u7684\u60c5\u5883"),(0,a.kt)("p",null,"\u5728\u5efa\u7acb\u8cc7\u6599\u7684\u60c5\u5883\uff0c\u4f8b\u5982\u8aaa\u524d\u7aef\u6309\u4e0bsubmit\uff0c\u5f8c\u7aef\u6536\u5230\u8acb\u6c42\u5f8c\u5f80\u8cc7\u6599\u5eab\u5efa\u7acb\u8cc7\u6599\uff0c\u9019\u7b46\u8cc7\u6599\u7684Create Time\u7684SSoT\u6703\u662f\u4ee5\u8ab0\u70ba\u57fa\u6e96\uff1f"),(0,a.kt)("p",null,"\u524d\u7aef\u53ef\u4ee5\u5148\u6392\u9664\uff0c\u7562\u7adf\u524d\u7aef\u7684\u7acb\u5834\u662f\u300e\u9001\u51fa\u8acb\u6c42\u300f\uff0c\u52a0\u4e0a\u4f86\u81ea\u524d\u7aef\u7684\u8cc7\u6599\u53ef\u80fd\u88ab\u7be1\u6539\u4e26\u4e0d\u53ef\u4fe1\uff0c\u4e26\u6c92\u8fa6\u6cd5\u4f5c\u70baSSoT"),(0,a.kt)("p",null,"\u5f8c\u7aef\u4ee5\u63a5\u6536\u5230\u8acb\u6c42\u7684\u6642\u9593\u70ba\u6e96\uff0c\u770b\u8d77\u4f86\u662f\u500b\u9078\u9805"),(0,a.kt)("h3",{id:"\u67e5\u8a62\u7684\u60c5\u5883"},"\u67e5\u8a62\u7684\u60c5\u5883"),(0,a.kt)("p",null,"(TODO)"),(0,a.kt)("h2",{id:"frontend"},"Frontend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"new Date()\nnew Date('2021-01-01')\n")),(0,a.kt)("h2",{id:"creation--query"},"Creation & Query"),(0,a.kt)("h2",{id:"how-to"},"How to?"),(0,a.kt)("p",null,"FE, BE, DB"),(0,a.kt)("h2",{id:"transfer-with-spec-process-as-object"},"Transfer with spec, process as object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node: Date(), Moment.js"),(0,a.kt)("li",{parentName:"ul"},"Python: pytz"),(0,a.kt)("li",{parentName:"ul"},"PHP: Carbon")),(0,a.kt)("h3",{id:"scenarios"},"Scenarios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Created At"),(0,a.kt)("li",{parentName:"ul"},"Received At"),(0,a.kt)("li",{parentName:"ul"},"Query between")),(0,a.kt)("h2",{id:"references"},"References"))}m.isMDXComponent=!0}}]);