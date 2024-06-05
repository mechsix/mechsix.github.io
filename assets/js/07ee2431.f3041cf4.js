"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[18784],{75635:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var l=s(74848),c=s(28453);const i={title:"K8S 101",sidebar_label:"K8S 101"},r=void 0,t={id:"k8s/intro",title:"K8S 101",description:"Kubectl",source:"@site/docs/k8s/intro.md",sourceDirName:"k8s",slug:"/k8s/intro",permalink:"/docs/k8s/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"K8S 101",sidebar_label:"K8S 101"},sidebar:"docSidebar",previous:{title:"STS",permalink:"/docs/aws/sts"},next:{title:"JS Data Operations",permalink:"/docs/cheatsheet/js-operation"}},d={},h=[{value:"Kubectl",id:"kubectl",level:2},{value:"Master Node &amp; Worker Node",id:"master-node--worker-node",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Pod / Deployment / ReplicaSet / DaemonSet / Job",id:"pod--deployment--replicaset--daemonset--job",level:2},{value:"Selector &amp; Label",id:"selector--label",level:2},{value:"Service / Ingress",id:"service--ingress",level:2},{value:"Configmap / Secret",id:"configmap--secret",level:2},{value:"ServiceAccount",id:"serviceaccount",level:2},{value:"Helm Chart",id:"helm-chart",level:2},{value:"Tools",id:"tools",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"kubectl",children:"Kubectl"}),"\n",(0,l.jsx)(n.p,{children:"\u547d\u4ee4\u57fa\u672c\u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl <action> <resource>\n# Action, Resource\u90fd\u4e0d\u5206\u5927\u5c0f\u5beb\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709pod"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl get pods\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6aa2\u8996name\u662fapp-7yh8\u7684pod\u7684\u72c0\u614b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl describe pods app-7yh8\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5217\u51fa\u6574\u5ea7cluster\u7684\u6240\u6709pod"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl get pods --all-namespaces\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8981\u5c0f\u5fc3\u7684\u662f\uff0cedit, delete\u9019\u4e9baction\uff0c\u57f7\u884c\u4e0b\u53bb\u5c31\u6703\u5c0dcluster\u76ee\u524d\u7684\u8cc7\u6e90\u7522\u751f\u4fee\u6539"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl edit pod app-7yh8\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u525b\u958b\u59cb\u9032\u6709\u8dd1\u670d\u52d9\u7684K8S Cluster\uff0cdescribe, get\u9019\u4e9b\u4e0d\u6703\u6709side-effect\u7684\u547d\u4ee4\u53ef\u4ee5\u5148\u8a66\u8a66"}),"\n",(0,l.jsx)(n.h2,{id:"master-node--worker-node",children:"Master Node & Worker Node"}),"\n",(0,l.jsx)(n.p,{children:"Node\u662f\u6307\u52a0\u5165Cluster\u7684\u6a5f\u5668\u672c\u8eab\n\u4e00\u822c\u4f86\u8aaa\u5c31\u662f\u6307\u5be6\u9ad4\u6a5f\u5668\u6216VM"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Master Node","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e0d\u80fd\u8dd1Pod"}),"\n",(0,l.jsx)(n.li,{children:"\u6700\u5c0f3\u500b\uff0c\u5fc5\u9808\u662f\u5947\u6578\u500b\uff0c\u5f7c\u6b64\u5728\u8cc7\u6599\u4e0d\u4e00\u81f4\u6642\u6703\u900f\u904e\u9078\u8209\u53d6\u5f97\u5171\u8b58"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Worker Node","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u8dd1Pod\u7684\u5730\u65b9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u770b\u76ee\u524dCluster\u7684Node\u6e05\u55ae"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl get node\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u52a0\u4e0a",(0,l.jsx)(n.code,{children:"-o wide"}),"\uff0c\u53ef\u4ee5\u5728\u6e05\u55ae\u4e2d\u770b\u5230\u66f4\u7d30\u7684\u8cc7\u8a0a\uff0c\u4f8b\u5982\u5404Node\u7684IP Address"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl get node -o wide\n"})}),"\n",(0,l.jsx)(n.h2,{id:"namespace",children:"Namespace"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u62bd\u8c61\u7684\u670d\u52d9\u7a7a\u9593\uff0c\u5728\u540c\u4e00\u500bnamespace\u4e0b\u7684\u8cc7\u6e90\uff0c\u5f7c\u6b64\u6e9d\u901a\u6703\u6bd4\u8f03\u65b9\u4fbf","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6709\u4e9b\u8cc7\u6e90\u7121\u6cd5\u8de8Namespace\u88ab\u5b58\u53d6\uff0c\u4f8b\u5982Secrets, Configmap"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6709\u5e7e\u500b\u4fdd\u7559\u7684namespace","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["default","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6c92\u6709\u6307\u5b9anamespace\u7684\u8cc7\u6e90\u6703\u8d77\u5230default \u9019\u500bnamespace\u4e0b"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["kube-system","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4fdd\u7559\u7d66Cluster\u672c\u8eab\u4f7f\u7528\uff0c\u8dd1\u5728\u9019\u500bnamespace\u7684\u8cc7\u6e90\u90fd\u5c6c\u65bcCluster\u7684\u57fa\u790e\u670d\u52d9\u7684\u4e00\u90e8\u4efd"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl get namespaces\n\n# \u53ef\u4ee5\u7c21\u5beb\nkubectl get ns\n"})}),"\n",(0,l.jsx)(n.h2,{id:"pod--deployment--replicaset--daemonset--job",children:"Pod / Deployment / ReplicaSet / DaemonSet / Job"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pod: \u6700\u5c0f\u88ab\u8abf\u5ea6\u7684\u55ae\u4f4d"}),"\n",(0,l.jsxs)(n.li,{children:["Deployment: Declaration\uff0c\u4e00\u822c\u4f86\u8aaa\u5de5\u7a0b\u5e2b\u64cd\u4f5c\u5230\u9019\u500b\u5c64\u7d1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ReplicaSet"}),"\n",(0,l.jsx)(n.li,{children:"DaemonSet"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Job"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"selector--label",children:"Selector & Label"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Metadata.labels"}),"\n",(0,l.jsxs)(n.li,{children:["\u6709\u4fdd\u7559\u5b57\uff0c\u6709\u4e9b\u540d\u5b57\u4e0d\u80fd\u7528: ",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/labels-annotations-taints/",children:"https://kubernetes.io/docs/reference/labels-annotations-taints/"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"# \u9078\u64c7\u6240\u6709key=value\u7684pod\nkubectl get pods -l key=value\n"})}),"\n",(0,l.jsx)(n.h2,{id:"service--ingress",children:"Service / Ingress"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Service: \u63d0\u4f9b\u670d\u52d9\u7684\u9032\u5165\u9ede"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u56e0\u70baPod\u6703\u88abcluster\u5728\u4e0d\u540c\u60c5\u6cc1\u4e0b\u8abf\u5ea6\u79fb\u52d5\uff0c\u4f7f\u7528Service\u6307\u5411Pod\uff0c\u80fd\u5920\u5728Pod\u88ab\u8abf\u5ea6\u6642\u7dad\u6301\u76f8\u540c\u7684\u5b58\u53d6\u6307\u5b9a"}),"\n",(0,l.jsx)(n.li,{children:"By Selector"}),"\n",(0,l.jsx)(n.li,{children:"\u5c0f\u5fc3\u592a\u5bec\u9b06\u7684selector\uff0c\u6703\u8b93Service\u5c07\u6d41\u91cf\u5c0e\u5411\u932f\u8aa4\u7684\u76ee\u6a19"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Ingress: \u5c07Pod, HTTP/WS\u7684entrypoint"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4e00\u822c\u4f86\u8aaaby Service Name"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configmap--secret",children:"Configmap / Secret"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Secret, Configmap\u53ea\u80fd\u5728\u540c\u4e00\u500bNS"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"serviceaccount",children:"ServiceAccount"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AKS/GKE \u7d66\u4e88pod permission\u7684\u4e3b\u8981\u4f9d\u64da"}),"\n"]}),"\n",(0,l.jsx)(n.h1,{id:"kubectl-config--context",children:"Kubectl Config & Context"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["kubectl\u5176\u5be6\u90fd\u662f\u5728\u8ddfK8S Cluster Master Node\u7684API\u6e9d\u901a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6240\u4ee5\u6709\u8a2d\u5b9a\uff0c\u6709auth token\u4e4b\u985e\u7684\u8cc7\u8a0a"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["kubectl\u5728\u672c\u5730\u57f7\u884c\u6642\uff0c\u76f8\u95dc\u7684\u8a2d\u5b9a\u4ee5\u53cacredentials","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"~/.kube"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"kubectl config set-context --current --namespace some-ns\n"})}),"\n",(0,l.jsx)(n.h2,{id:"helm-chart",children:"Helm Chart"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://helm.sh/docs/helm/helm_create/",children:"https://helm.sh/docs/helm/helm_create/"})}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u5efa\u4e00\u500bHelm Chart"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"helm create\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e3b\u8981\u7684\u5e7e\u500b\u6a94\u6848"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Chart.yaml"}),"\n",(0,l.jsx)(n.li,{children:"values.yaml"}),"\n",(0,l.jsx)(n.li,{children:"./templates"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'helm upgrade application-name ./charts  --install --create-namespace --atomic --debug --timeout 360s \\\n  --namespace ${{ env.namespace }} \\\n  --values "${HELM_VALUE_FILE}" \\\n  --set "Var1=123"\n  --set "Var2=456"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,l.jsxs)(n.p,{children:["AWS CLI\n",(0,l.jsx)(n.a,{href:"https://github.com/venth/aws-adfs",children:"https://github.com/venth/aws-adfs"}),"\nbrew install awscli"]}),"\n",(0,l.jsxs)(n.p,{children:["AWS ADFS\n",(0,l.jsx)(n.a,{href:"https://github.com/venth/aws-adfs",children:"https://github.com/venth/aws-adfs"})]}),"\n",(0,l.jsx)(n.p,{children:"Helm\nbrew install helm"}),"\n",(0,l.jsx)(n.p,{children:"Kubectl\nbrew install kubernetes-cli"}),"\n",(0,l.jsxs)(n.p,{children:["K9S/Lens\n",(0,l.jsx)(n.a,{href:"https://k8slens.dev/",children:"https://k8slens.dev/"}),"\n",(0,l.jsx)(n.a,{href:"https://github.com/derailed/k9s",children:"https://github.com/derailed/k9s"})]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var l=s(96540);const c={},i=l.createContext(c);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);