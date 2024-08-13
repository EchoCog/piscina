"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6179],{3494:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const a={id:"N-API Native Addon",sidebar_position:9},o=void 0,r={id:"examples/N-API Native Addon",title:"N-API Native Addon",description:"For CPU-intensive tasks or when implementing workers in languages such as C++ or Rust, you can leverage Piscina's support for native addons as worker implementations.",source:"@site/docs/examples/n-api.mdx",sourceDirName:"examples",slug:"/examples/N-API Native Addon",permalink:"/piscina/examples/N-API Native Addon",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"N-API Native Addon",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Multiple Workers in One File",permalink:"/piscina/examples/Multiple Workers in One File"},next:{title:"Named Tasks",permalink:"/piscina/examples/Named Tasks"}},l={},c=[{value:"Setup",id:"setup",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"For CPU-intensive tasks or when implementing workers in languages such as C++ or Rust, you can leverage Piscina's support for native addons as worker implementations."}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["First, get the example from the ",(0,s.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/n-api",children:"Piscina GitHub repository"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Then install the dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"npm i\n"})}),"\n",(0,s.jsx)(n.p,{children:"Build the native addon artifacts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"npm run prebuild\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"prebuild"})," command will build the binary artifacts for the native\naddon and will put them in the ",(0,s.jsx)(n.code,{children:"prebuilds"})," folder. Because of how\nprebuilds work, we need to use an intermediate JavaScript file to\nload and export them. For this example native addon, you'll find\nthat in the ",(0,s.jsx)(n.code,{children:"examples"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"index.js"})," illustrates how to load and use the native addon as the\nworker implementation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"const Piscina = require('piscina');\nconst { resolve } = require('path');\n\nconst pool = new Piscina({\n  filename: resolve(__dirname, 'example')\n});\n\n(async () => {\n  // Submit 5 concurrent tasks\n  console.log(await Promise.all([\n    pool.run(),\n    pool.run(),\n    pool.run(),\n    pool.run(),\n    pool.run()\n  ]));\n})();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also check out this example on ",(0,s.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/n-api",children:"github"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);