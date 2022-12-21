"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43934],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,k=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=(n(67294),n(3905));const a={title:"Intro",sidebar_title:"Intro",sidebar_position:1},o="Overview",l={unversionedId:"rust/intro",id:"rust/intro",title:"Intro",description:"Command Line Interface",source:"@site/docs/rust/intro.md",sourceDirName:"rust",slug:"/rust/intro",permalink:"/docs/rust/intro",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/rust/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Intro",sidebar_title:"Intro",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Functools",permalink:"/docs/python/functools"},next:{title:"Crate & Module",permalink:"/docs/rust/crate_and_module"}},u={},p=[{value:"Command Line Interface",id:"command-line-interface",level:2},{value:"rustup",id:"rustup",level:3},{value:"\u6aa2\u8996\u985e\u547d\u4ee4",id:"\u6aa2\u8996\u985e\u547d\u4ee4",level:4},{value:"\u67e5\u8a62\u985e\u547d\u4ee4",id:"\u67e5\u8a62\u985e\u547d\u4ee4",level:4},{value:"\u5b89\u88dd\uff40\u66f4\u65b0\u547d\u4ee4",id:"\u5b89\u88dd\u66f4\u65b0\u547d\u4ee4",level:4},{value:"rustc",id:"rustc",level:3},{value:"rustdoc",id:"rustdoc",level:3},{value:"cargo",id:"cargo",level:3},{value:"Switch build target",id:"switch-build-target",level:2},{value:"ENV Variables",id:"env-variables",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,i.kt)("h3",{id:"rustup"},"rustup"),(0,i.kt)("p",null,"Rust\u7684\u5b89\u88dd\u5de5\u5177\uff0c\u53ef\u4ee5\u5354\u52a9\u7ba1\u7406\u4e0d\u540c\u7248\u672c\u7684rust\u3002\u985e\u4f3cPython\u7684pyenv\u6216Node\u7684nvm/fnm\uff0c\u4f46\u662f\u662fRust\u5b98\u65b9\u7684\u6771\u897f"),(0,i.kt)("h4",{id:"\u6aa2\u8996\u985e\u547d\u4ee4"},"\u6aa2\u8996\u985e\u547d\u4ee4"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup show")," \u986f\u793a\u76ee\u524d\u555f\u7528\u4e2d\u7684rust"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup check")," \u6aa2\u67e5\u6709\u6c92\u6709\u66f4\u65b0\u7248\u7684rust version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup toolchain list")," \u5217\u51fa\u6240\u6709\u5df2\u5b89\u88dd\u7684rust version"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup which rustc")," \u67e5\u76ee\u524d\u555f\u7528\u4e2d\u7684rustc location"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup which cargo")," \u67e5\u76ee\u524d\u555f\u7528\u4e2d\u7684cargo location"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup component list")," \u5217\u51fa\u76ee\u524d\u5df2\u5b89\u88dd\u7684components"),(0,i.kt)("h4",{id:"\u67e5\u8a62\u985e\u547d\u4ee4"},"\u67e5\u8a62\u985e\u547d\u4ee4"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rust target")," \u5217\u51fa\u53ef\u4ee5\u7528rustup\u5b89\u88dd\u7684\u7248\u672c"),(0,i.kt)("h4",{id:"\u5b89\u88dd\u66f4\u65b0\u547d\u4ee4"},"\u5b89\u88dd\uff40\u66f4\u65b0\u547d\u4ee4"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustup toolchain install [--allow-downgrade] [-t <target>]")),(0,i.kt)("h3",{id:"rustc"},"rustc"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustc")," \u7de8\u8b6f\u5668"),(0,i.kt)("h3",{id:"rustdoc"},"rustdoc"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rustdoc")," \u6587\u4ef6\u7522\u751f\u5de5\u5177\u3002\u5728Rust source code\u5167\u5bebcomment\uff0c\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"rustdoc"),"\u8f49\u6210HTML\u6587\u4ef6"),(0,i.kt)("h3",{id:"cargo"},"cargo"),(0,i.kt)("p",null,"\u7de8\u8b6f\u7ba1\u7406\u5668\u8207\u5957\u4ef6\u7ba1\u7406\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo new <ProjectName>")," \u5efa\u7acb\u65b0\u7684Rust project"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo run")," \u7de8\u8b6fCargo\u5c08\u6848\u4e26\u57f7\u884c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo build")," \u7de8\u51fa\u4f86\u7684binary\u6703\u653e\u5728./target/debug/\u4e0b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cargo clean")),(0,i.kt)("h2",{id:"switch-build-target"},"Switch build target"),(0,i.kt)("p",null,"(\u4ee5M1 Mac\u70ba\u4f8b\uff0cbuild\u51fax86)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rustup target list")," \u5217\u51fa\u53ef\u7528\u7684target")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rustup target add x86_64-apple-darwin --toolchain stable")," \u52a0\u5165target\u7d66\u7279\u5b9atoolchain\uff0c\u6b64\u4f8b\u70bastable")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7de8\u8f2f",(0,i.kt)("inlineCode",{parentName:"p"},"~/.cargo"),"\uff0c\u52a0\u5165"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[build]\ntarget = x86_64-apple-darwin\n")),(0,i.kt)("p",null,"\u4e4b\u5f8c\u7684cargo build\u547d\u4ee4\u5c31\u6703build\u51fa\u6307\u5b9a\u5e73\u53f0\u7684binary"),(0,i.kt)("h2",{id:"env-variables"},"ENV Variables"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RUSTUP_HOME")," \u6307\u5411",(0,i.kt)("inlineCode",{parentName:"p"},"rustup"),"\u7ba1\u7406\u8207\u5b89\u88ddrust\u7684\u76ee\u9304\uff0c\u9810\u8a2d\u662f~/.rustup"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CARGO_HOME")," \u6307\u5411",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),"\u7ba1\u7406\u8207\u5b89\u88ddpackage\u7684Toolchain\u76ee\u9304\uff0c\u9810\u8a2d\u662f~/.cargo"))}s.isMDXComponent=!0}}]);