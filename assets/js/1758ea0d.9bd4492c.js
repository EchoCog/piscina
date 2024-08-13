"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4142],{8761:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var n=s(4848),d=s(8453);const l={id:"Release Notes",sidebar_position:1},c=void 0,r={id:"update-log/Release Notes",title:"Release Notes",description:"4.1.0",source:"@site/docs/update-log/release-notes.md",sourceDirName:"update-log",slug:"/update-log/Release Notes",permalink:"/piscina/update-log/Release Notes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Release Notes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ChangeLog",permalink:"/piscina/update-log/changelog"}},a={},t=[{value:"4.1.0",id:"410",level:3},{value:"Features",id:"features",level:4},{value:"Bug Fixes",id:"bug-fixes",level:4},{value:"4.0.0",id:"400",level:3},{value:"3.2.0",id:"320",level:3},{value:"3.1.0",id:"310",level:3},{value:"3.0.0",id:"300",level:3},{value:"2.1.0",id:"210",level:3},{value:"2.0.0",id:"200",level:3},{value:"1.6.1",id:"161",level:3},{value:"1.6.0",id:"160",level:3},{value:"1.5.1",id:"151",level:3},{value:"1.5.0",id:"150",level:3},{value:"1.4.0",id:"140",level:3},{value:"1.3.0",id:"130",level:3},{value:"1.2.0",id:"120",level:3},{value:"1.1.0",id:"110",level:3},{value:"1.0.0",id:"100",level:3}];function h(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"410",children:"4.1.0"}),"\n",(0,n.jsx)(i.h4,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["add ",(0,n.jsx)(i.code,{children:"needsDrain"})," property (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/issues/368",children:"#368"}),") (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/2d49b63368116c172a52e2019648049b4d280162",children:"2d49b63"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["correctly handle process.exit calls outside of a task (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/issues/361",children:"#361"}),") (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/8e6d16e1dc23f8bb39772ed954f6689852ad435f",children:"8e6d16e"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Fix types for TypeScript 4.7 (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/issues/239",children:"#239"}),") (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/a38fb292e8fcc45cc20abab8668f82d908a24dc0",children:"a38fb29"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["use CJS imports (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/issues/374",children:"#374"}),") (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/edf8dc4f1a19e9b49e266109cdb70d9acc86f3ca",children:"edf8dc4"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"400",children:"4.0.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Drop Node.js 14.x support"}),"\n",(0,n.jsx)(i.li,{children:"Add Node.js 20.x to CI"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"320",children:"3.2.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Adds a new ",(0,n.jsx)(i.code,{children:"PISCINA_DISABLE_ATOMICS"})," environment variable as an alternative way of\ndisabling Piscina's internal use of the ",(0,n.jsx)(i.code,{children:"Atomics"})," API. (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/pull/163",children:"https://github.com/piscinajs/piscina/pull/163"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["Fixes a bug with transferable objects. (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/pull/155",children:"https://github.com/piscinajs/piscina/pull/155"}),")"]}),"\n",(0,n.jsxs)(i.li,{children:["Fixes CI issues with TypeScript. (",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/pull/161",children:"https://github.com/piscinajs/piscina/pull/161"}),")"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"310",children:"3.1.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Deprecates ",(0,n.jsx)(i.code,{children:"piscina.runTask()"}),"; adds ",(0,n.jsx)(i.code,{children:"piscina.run()"})," as an alternative.\n",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/d7fa24d7515789001f7237ad6ae9ad42d582fc75",children:"https://github.com/piscinajs/piscina/commit/d7fa24d7515789001f7237ad6ae9ad42d582fc75"})]}),"\n",(0,n.jsxs)(i.li,{children:["Allows multiple exported handler functions from a single file.\n",(0,n.jsx)(i.a,{href:"https://github.com/piscinajs/piscina/commit/d7fa24d7515789001f7237ad6ae9ad42d582fc75",children:"https://github.com/piscinajs/piscina/commit/d7fa24d7515789001f7237ad6ae9ad42d582fc75"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"300",children:"3.0.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Drops Node.js 10.x support"}),"\n",(0,n.jsx)(i.li,{children:"Updates minimum TypeScript target to ES2019"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"210",children:"2.1.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Adds name property to indicate ",(0,n.jsx)(i.code,{children:"AbortError"})," when tasks are\ncanceled using an ",(0,n.jsx)(i.code,{children:"AbortController"})," (or similar)"]}),"\n",(0,n.jsx)(i.li,{children:"More examples"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"200",children:"2.0.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Added unmanaged file descriptor tracking"}),"\n",(0,n.jsx)(i.li,{children:"Updated dependencies"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"161",children:"1.6.1"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Bug fix: Reject if AbortSignal is already aborted"}),"\n",(0,n.jsx)(i.li,{children:"Bug Fix: Use once listener for abort event"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"160",children:"1.6.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Add the ",(0,n.jsx)(i.code,{children:"niceIncrement"})," configuration parameter."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"151",children:"1.5.1"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Bug fixes around abortable task selection."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"150",children:"1.5.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Added ",(0,n.jsx)(i.code,{children:"Piscina.move()"})]}),"\n",(0,n.jsx)(i.li,{children:"Added Custom Task Queues"}),"\n",(0,n.jsx)(i.li,{children:"Added utilization metric"}),"\n",(0,n.jsx)(i.li,{children:"Wait for workers to be ready before considering them as candidates"}),"\n",(0,n.jsx)(i.li,{children:"Additional examples"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"140",children:"1.4.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Added ",(0,n.jsx)(i.code,{children:"maxQueue = 'auto'"})," to autocalculate the maximum queue size."]}),"\n",(0,n.jsx)(i.li,{children:"Added more examples, including an example of implementing a worker\nas a Node.js native addon."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"130",children:"1.3.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Added the ",(0,n.jsx)(i.code,{children:"'drain'"})," event"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"120",children:"1.2.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Added support for ESM and file:// URLs"}),"\n",(0,n.jsxs)(i.li,{children:["Added ",(0,n.jsx)(i.code,{children:"env"}),", ",(0,n.jsx)(i.code,{children:"argv"}),", ",(0,n.jsx)(i.code,{children:"execArgv"}),", and ",(0,n.jsx)(i.code,{children:"workerData"})," options"]}),"\n",(0,n.jsx)(i.li,{children:"More examples"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"110",children:"1.1.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Added support for Worker Thread ",(0,n.jsx)(i.code,{children:"resourceLimits"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"100",children:"1.0.0"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Initial release!"}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>c,x:()=>r});var n=s(6540);const d={},l=n.createContext(d);function c(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);