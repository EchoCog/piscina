"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6068],{4086:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=s(4848),r=s(8453);const o={id:"Class",sidebar_position:2},t=void 0,d={id:"api-reference/Class",title:"Class",description:"Class: Piscina",source:"@site/docs/api-reference/class.md",sourceDirName:"api-reference",slug:"/api-reference/Class",permalink:"/piscina/api-reference/Class",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Class",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Overview",permalink:"/piscina/api-reference/API Overview"},next:{title:"Methods",permalink:"/piscina/api-reference/Methods"}},a={},l=[{value:"Class: <code>Piscina</code>",id:"class-piscina",level:2},{value:"Constructor: <code>new Piscina([options])</code>",id:"constructor-new-piscinaoptions",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h2,{id:"class-piscina",children:["Class: ",(0,i.jsx)(n.code,{children:"Piscina"})]}),"\n",(0,i.jsx)(n.p,{children:"Piscina works by creating a pool of Node.js Worker Threads to which\none or more tasks may be dispatched. Each worker thread executes a\nsingle exported function defined in a separate file. Whenever a\ntask is dispatched to a worker, the worker invokes the exported\nfunction and reports the return value back to Piscina when the\nfunction completes."}),"\n",(0,i.jsxs)(n.p,{children:["This class extends ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/events.html",children:(0,i.jsx)(n.code,{children:"EventEmitter"})})," from Node.js."]}),"\n",(0,i.jsxs)(n.h3,{id:"constructor-new-piscinaoptions",children:["Constructor: ",(0,i.jsx)(n.code,{children:"new Piscina([options])"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following optional configuration is supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"filename"}),": (",(0,i.jsx)(n.code,{children:"string | null"}),") Provides the default source for the code that\nruns the tasks on Worker threads. This should be an absolute path or an\nabsolute ",(0,i.jsx)(n.code,{children:"file://"})," URL to a file that exports a JavaScript ",(0,i.jsx)(n.code,{children:"function"})," or\n",(0,i.jsx)(n.code,{children:"async function"})," as its default export or ",(0,i.jsx)(n.code,{children:"module.exports"}),". ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/esm.html",children:"ES modules"}),"\nare supported."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"name"}),": (",(0,i.jsx)(n.code,{children:"string | null"}),") Provides the name of the default exported worker\nfunction. The default is ",(0,i.jsx)(n.code,{children:"'default'"}),", indicating the default export of the\nworker module."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"minThreads"}),": (",(0,i.jsx)(n.code,{children:"number"}),") Sets the minimum number of threads that are always\nrunning for this thread pool. The default is the number provided by ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/os.html#osavailableparallelism",children:(0,i.jsx)(n.code,{children:"os.availableParallelism"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"maxThreads"}),": (",(0,i.jsx)(n.code,{children:"number"}),") Sets the maximum number of threads that are\nrunning for this thread pool. The default is the number provided by ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/os.html#osavailableparallelism",children:(0,i.jsx)(n.code,{children:"os.availableParallelism"})})," * 1.5."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"idleTimeout"}),": (",(0,i.jsx)(n.code,{children:"number"}),") A timeout in milliseconds that specifies how long\na ",(0,i.jsx)(n.code,{children:"Worker"})," is allowed to be idle, i.e. not handling any tasks, before it is\nshut down. By default, this is immediate."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"idleTimeout"})," can lead to some performance loss in the application because of the overhead involved with stopping and starting new worker threads. To improve performance, try setting the ",(0,i.jsx)(n.code,{children:"idleTimeout"})," explicitly."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"maxQueue"}),": (",(0,i.jsx)(n.code,{children:"number"})," | ",(0,i.jsx)(n.code,{children:"string"}),") The maximum number of tasks that may be\nscheduled to run, but not yet running due to lack of available threads, at\na given time. By default, there is no limit. The special value ",(0,i.jsx)(n.code,{children:"'auto'"}),"\nmay be used to have Piscina calculate the maximum as the square of ",(0,i.jsx)(n.code,{children:"maxThreads"}),".\nWhen ",(0,i.jsx)(n.code,{children:"'auto'"})," is used, the calculated ",(0,i.jsx)(n.code,{children:"maxQueue"})," value may be found by checking\nthe ",(0,i.jsx)(n.a,{href:"#property-options-readonly",children:(0,i.jsx)(n.code,{children:"options.maxQueue"})})," property."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"concurrentTasksPerWorker"}),": (",(0,i.jsx)(n.code,{children:"number"}),") Specifies how many tasks can share\na single Worker thread simultaneously. The default is ",(0,i.jsx)(n.code,{children:"1"}),". This generally\nonly makes sense to specify if there is some kind of asynchronous component\nto the task. Keep in mind that Worker threads are generally not built for\nhandling I/O in parallel."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useAtomics"}),": (",(0,i.jsx)(n.code,{children:"boolean"}),") Use the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics",children:(0,i.jsx)(n.code,{children:"Atomics"})})," API for faster communication\nbetween threads. This is on by default. You can disable ",(0,i.jsx)(n.code,{children:"Atomics"})," globally by\nsetting the environment variable ",(0,i.jsx)(n.code,{children:"PISCINA_DISABLE_ATOMICS"})," to ",(0,i.jsx)(n.code,{children:"1"}),".\nIf ",(0,i.jsx)(n.code,{children:"useAtomics"})," is ",(0,i.jsx)(n.code,{children:"true"}),", it will cause to pause threads (stoping all execution)\nbetween tasks. Ideally, threads should wait for all operations to finish before\nreturning control to the main thread (avoid having open handles within a thread)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"resourceLimits"}),": (",(0,i.jsx)(n.code,{children:"object"}),") See ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options",children:"Node.js new Worker options"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"maxOldGenerationSizeMb"}),": (",(0,i.jsx)(n.code,{children:"number"}),") The maximum size of each worker threads\nmain heap in MB."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"maxYoungGenerationSizeMb"}),": (",(0,i.jsx)(n.code,{children:"number"}),") The maximum size of a heap space for\nrecently created objects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"codeRangeSizeMb"}),": (",(0,i.jsx)(n.code,{children:"number"}),") The size of a pre-allocated memory range used\nfor generated code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stackSizeMb"})," : (",(0,i.jsx)(n.code,{children:"number"}),") The default maximum stack size for the thread.\nSmall values may lead to unusable Worker instances. Default: 4"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"env"}),": (",(0,i.jsx)(n.code,{children:"object"}),") If set, specifies the initial value of ",(0,i.jsx)(n.code,{children:"process.env"})," inside\nthe worker threads. See ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options",children:"Node.js new Worker options"})," for details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"argv"}),": (",(0,i.jsx)(n.code,{children:"any[]"}),") List of arguments that will be stringified and appended to\n",(0,i.jsx)(n.code,{children:"process.argv"})," in the worker. See ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options",children:"Node.js new Worker options"})," for details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"execArgv"}),": (",(0,i.jsx)(n.code,{children:"string[]"}),") List of Node.js CLI options passed to the worker.\nSee ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options",children:"Node.js new Worker options"})," for details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"workerData"}),": (",(0,i.jsx)(n.code,{children:"any"}),") Any JavaScript value that can be cloned and made\navailable as ",(0,i.jsx)(n.code,{children:"require('piscina').workerData"}),". See ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/worker_threads.html#worker_threads_new_worker_filename_options",children:"Node.js new Worker options"}),"\nfor details. Unlike regular Node.js Worker Threads, ",(0,i.jsx)(n.code,{children:"workerData"})," must not\nspecify any value requiring a ",(0,i.jsx)(n.code,{children:"transferList"}),". This is because the ",(0,i.jsx)(n.code,{children:"workerData"}),"\nwill be cloned for each pooled worker."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"taskQueue"}),": (",(0,i.jsx)(n.code,{children:"TaskQueue"}),") By default, Piscina uses a first-in-first-out\nqueue for submitted tasks. The ",(0,i.jsx)(n.code,{children:"taskQueue"})," option can be used to provide an\nalternative implementation. See ",(0,i.jsx)(n.a,{href:"https://github.com/piscinajs/piscina#custom_task_queues",children:"Custom Task Queues"})," for additional detail."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"niceIncrement"}),": (",(0,i.jsx)(n.code,{children:"number"}),") An optional value that decreases priority for\nthe individual threads, i.e. the higher the value, the lower the priority\nof the Worker threads. This value is only used on Linux and requires the\noptional ",(0,i.jsx)(n.a,{href:"https://npmjs.org/package/nice-napi",children:(0,i.jsx)(n.code,{children:"nice-napi"})})," module to be installed.\nSee ",(0,i.jsx)(n.a,{href:"https://linux.die.net/man/2/nice",children:(0,i.jsx)(n.code,{children:"nice(2)"})})," for more details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"trackUnmanagedFds"}),": (",(0,i.jsx)(n.code,{children:"boolean"}),") An optional setting that, when ",(0,i.jsx)(n.code,{children:"true"}),", will\ncause Workers to track file descriptors managed using ",(0,i.jsx)(n.code,{children:"fs.open()"})," and\n",(0,i.jsx)(n.code,{children:"fs.close()"}),", and will close them automatically when the Worker exits.\nDefaults to ",(0,i.jsx)(n.code,{children:"true"}),". (This option is only supported on Node.js 12.19+ and\nall Node.js versions higher than 14.6.0)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"closeTimeout"}),": (",(0,i.jsx)(n.code,{children:"number"}),") An optional time (in milliseconds) to wait for the pool to\ncomplete all in-flight tasks when ",(0,i.jsx)(n.code,{children:"close()"})," is called. The default is ",(0,i.jsx)(n.code,{children:"30000"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"recordTiming"}),": (",(0,i.jsx)(n.code,{children:"boolean"}),") By default, run and wait time will be recorded\nfor the pool. To disable, set to ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Use caution when setting resource limits. Setting limits that are too low may\nresult in the ",(0,i.jsx)(n.code,{children:"Piscina"})," worker threads being unusable."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);