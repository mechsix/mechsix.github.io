"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406","metadata":{"permalink":"/blog/\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406","editUrl":"https://github.dev/mechsix/mechsix.github.io.source/tree/master/blog/blog/process-datetime.mdx","source":"@site/blog/process-datetime.mdx","title":"\u4e00\u5929\u662f24\u5c0f\u6642\u55ce\uff1f\u8ac7DateTime\u8655\u7406","description":"\u4e00\u592924\u5c0f\u6642","date":"2021-12-21T16:40:22.700Z","formattedDate":"December 21, 2021","tags":[{"label":"Develop Practice","permalink":"/blog/tags/develop-practice"}],"readingTime":3.095,"truncated":false,"authors":[{"name":"Mech Tsai","title":"Web Service Mechanic","url":"https://mechsix.github.io","imageURL":"https://avatars.githubusercontent.com/u/5463241?v=4","key":"mech"}]},"content":"## \u4e00\u592924\u5c0f\u6642\\n\\n\u6211\u5011\u9019\u88e1\u8ac7\u7684\u53ef\u4e0d\u662f\u5929\u6587\u4e0a\u6240\u8aaa\u7684\uff0c\u4e00\u5929\u7565\u7b49\u65bc24.25\u5c0f\u6642\u7684\u554f\u984c\u3002\\n\u800c\u662f\u6307\u5728\u5df2\u7d93\u88ab\u5ee3\u6cdb\u4f7f\u7528\u5728\u5404\u7a2e\u96fb\u8166\u7cfb\u7d71\u4e2d\uff0c\u65e9\u5df2\u8003\u616e\u958f\u5e74\u554f\u984c\u7684\u7684\u683c\u91cc\u66c6(Gregorian calendar)\u4e2d\u768424\u5c0f\u6642\\n\\n\u5047\u8a2d\u6709\u500b\u529f\u80fd\u8981\u5411\u5f8c\u7aef\u53d6\u56de\u904e\u53bb\u4e00\u5929\u7684\u8cc7\u6599\u986f\u793a\u5728\u756b\u9762\u4e0a\uff0c\u4e00\u500b\u76f4\u89ba\u7684\u505a\u6cd5\u5927\u6982\u662f\uff1a\\n\\n1. \u7531\u524d\u7aef\u5411\u5f8c\u7aef\u767c\u8d77\u8acb\u6c42\\n2. \u5f8c\u7aef\u6536\u5230\u8acb\u6c42\u6642\u4ee5server\u7684\u6642\u9593\u70ba\u6e96\u53d6\u5f97\u7576\u4e0b\u6642\u9593Now\u4f5c\u70balte(less than or equal)\\n3. \u62fflte\u6e1b\u53bb24hr\u4f5c\u70bagte (greater than or equal)\\n\\n\u4ee5Javascript\u5beb\u8d77\u4f86\u5927\u6982\u662f\u9019\u6a23\\n\\n```javascript title=\\"frontend.js\\"\\nfetch(\'http://backend.com/api/yesterday-post\')\\n  .then(function(response) {\\n    return response.json();\\n  })\\n  .then(function(data) {\\n    $(\'target-pre\').html(data);\\n  });\\n```\\n\\n```javascript title=\\"backend.js\\"\\nasync function (req, res) {\\n    const endTime = new Date()\\n    const starTime = new Date(endTime.getTime() - 24 * 60 * 60 * 1000)\\n    const posts = await Post.find({\\n        createdAt: {\\n            $gte: `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()} 00:00:00`\\n            $lte: `${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} 00:00:00`\\n        }\\n    })\\n    res.json(posts)\\n}\\n```\\n\\n\u770b\u8d77\u4f86\u61c9\u8a72\u6c92\u4ec0\u9ebc\u554f\u984c\uff1f\\n\\n`endTime`\u662f\u7531Server\u6c7a\u5b9a\u7684\uff0c\u6240\u4ee5\u4e0d\u6703\u53d7\u5230\u524d\u7aef\u4f7f\u7528\u8005\u672c\u5730\u6642\u9593\u7684\u5f71\u97ff\uff0c\\n\u7136\u5f8c\u62ff`endTime`\u6e1b\u53bb24hr\u53d6\u5f97gte\uff0c\u53bb\u8ddf\u8cc7\u6599\u5eab\u62ff\u51fa\u9019\u500b\u5340\u9593\u7684\u8cc7\u6599\u56de\u7d66\u524d\u7aef\u986f\u793a\u5728\u756b\u9762\u4e0a\u3002\u6240\u6709\u5f80\u8cc7\u6599\u5eab\u7684\u8f38\u5165\u90fd\u662f\u5f8c\u7aef\u6c7a\u5b9a\u7684\uff0c\u4e5f\u6c92\u6709\u88abinject\u7b49\u5b89\u5168\u7591\u616e\\n\\n**\u4f46\u5176\u5be6\u9019\u96bb\u7a0b\u5f0f\u5728\u5f88\u591a\u570b\u5bb6\uff0c\u4e00\u5e74\u6703\u58de\u500b\u5169\u6b21**\\n\\n\u56e0\u70ba\u6bcf\u5e74\u6709\u500b\u90a3\u9ebc\u5169\u5929\uff0c\u5728\u5f88\u591a\u570b\u5bb6\u4e26\u4e0d\u662f24\u5c0f\u6642 - Dalight Saving\u5207\u63db\u7684\u90a3\u5169\u5929\u3002 \u4f8b\u59822021\u5e74\u4f86\u8aaa\uff0c\u5728\u7f8e\u570b\u6771\u5cb8(EST)\\n\\n* Mar 14, 2021 01:59:59 \u7684\u4e0b\u4e00\u79d2\u9418\u662f 03:00:00\\n* Nov 7, 2021 02:00:00 \u7684\u4e0b\u4e00\u79d2\u9418\u4e5f\u9084\u662f 02:00:00\\n\\n\u65bc\u662f\u57282021\u5e74\u7684\u7f8e\u570b\uff0cMar 14\u53ea\u670923hr\uff0cNov 7\u537b\u670925hr\\n\u53ea\u8981\u4f60\u7684\u7a0b\u5f0f\u88ab\u57f7\u884c\u7684\u7576\u4e0b\uff0c\u5f80\u524d\u7b9724hr\u6703\u7d93\u904e\u9019\u500b\u88ab\u5207\u63db\u7684\u5c0f\u6642\u7684\u8a71\uff0c\u88ab\u5f9e\u8cc7\u6599\u5eab\u6293\u51fa\u4f86\u7684\u8cc7\u6599\u5c31\u6703\u591a\u6216\u5c11\u4e00\u500b\u5c0f\u6642\u7684\u8cc7\u6599\\n\\n## Frontend\\n\\n```javascript\\nnew Date()\\nnew Date(\'2021-01-01\')\\n```\\n\\n## Single Source of Truth\\n\\n\u5728Web Application\u4e2d\uff0c\u540c\u4e00\u4efd\u8cc7\u6599\u5728\u4e0d\u540c\u7684\u7a0b\u5f0f\u4e4b\u9593\u50b3\u905e\u662f\u518d\u5e38\u898b\u4e0d\u904e\u7684\u4e8b\\n\u4f46\u50b3\u905e\u904e\u7a0b\u4e2d\u56e0\u70ba\u683c\u5f0f\u8f49\u63db\u3001\u50b3\u8f38\u5ef6\u9072\u5ef6\u9072\u5dee\u7570\u3001\u751a\u81f3\u662f\u932f\u8aa4\u7684implementation\uff0c\u90fd\u6709\u53ef\u80fd\u5c0e\u81f4\u540c\u4e00\u4efd\u8cc7\u6599\u6709\u4e0d\u540c\u7684\u8868\u73fe\\n\\nSingle Source of Truth (SSoT)\u7684\u6982\u5ff5\u6307\u7684\u662f\uff1a\u54ea\u4e00\u4efd\u8cc7\u6599\u662f\u6700\u5177\u6b0a\u5a01\u6027\u7684\\n\\n\\n## Creation & Query\\n\\n## How to?\\n\\nFE, BE, DB\\n\\n## Transfer with spec, process as object\\n\\n* Node: Date(), Moment.js\\n* Python: pytz\\n* PHP: Carbon\\n\\n### Scenarios\\n\\n* Created At\\n* Received At\\n* Query between\\n\\n\\n## References"}]}')}}]);