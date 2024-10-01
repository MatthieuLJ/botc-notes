import{u as g,a as j,r as l,j as e,b as T,s as E,c as R,_ as k,d as _,e as P,f as D,g as O,h as A,i as I}from"./index-CqE5JmRW.js";import{T as V,D as N,a as B,c as F,C as L,A as x}from"./index-BSEcmVSo.js";import{B as f,I as q,m as M}from"./mdi-DZtbSFbO.js";import"./role-BNc36tb4.js";function K(){const o=g(t=>t.players.players),u=j(),[p,n]=l.useState(!1),[c,r]=l.useState(""),[a,s]=l.useState(0),h=()=>{n(!1)},i=()=>{u(E({index:a,name:c})),n(!1)},d=l.useRef(null);return l.useEffect(()=>{setTimeout(()=>{p&&d.current&&(d.current.focus(),d.current.select())},100)},[p]),e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx("div",{className:"relative flex w-full flex-grow place-content-center max-h-full",children:e.jsx("div",{className:"aspect-square max-h-full max-w-full",children:e.jsx(V,{tapAction:t=>{n(!0),s(t),r(o[t].name)},canDrag:!0,canRemove:!0,children:e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx(f,{id:"add_player",onClick:()=>{u(T({}))},children:e.jsx(q,{path:M,size:2})})})})})}),e.jsx(N,{open:p,onClose:h,disableRestoreFocus:!0,children:e.jsxs("form",{method:"dialog",children:[e.jsx("p",{children:"Set the player's name"}),e.jsx(B,{type:"text",value:c,autoFocus:!0,inputRef:d,onKeyDown:t=>{t.key==="Enter"&&i()},onChange:t=>r(t.currentTarget.value)}),e.jsx(f,{onClick:i,children:"OK"}),e.jsx(f,{onClick:()=>{r(""),n(!1)},children:"Cancel"})]})})]})}const w=[{name:"Trouble Brewing",file:"troubleBrewing"},{name:"Sects & Violets",file:"sectsAndViolets"},{name:"Bad Moon Rising",file:"badMoonRising"}],z=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));function H(){const[o,u]=l.useState(""),[p,n]=l.useState(""),c=g(s=>s.roles.script),r=j();l.useEffect(()=>{c!==""&&(n(c),u(c))},[c]),l.useEffect(()=>{o!==""&&(r(R({script:o})),k(Object.assign({"../game_scripts/badMoonRising.ts":()=>_(()=>import("./badMoonRising-C1cSTL1Q.js"),[]),"../game_scripts/scripts.ts":()=>_(()=>Promise.resolve().then(()=>z),void 0),"../game_scripts/sectsAndViolets.ts":()=>_(()=>import("./sectsAndViolets-JlA5fA-s.js"),[]),"../game_scripts/troubleBrewing.ts":()=>_(()=>import("./troubleBrewing-DOet0cCm.js"),[])}),`../game_scripts/${o}.ts`,3).then(s=>{const h=s.default;r(P({roles:h.slice(1)}))}).catch(s=>console.log("Error loading script!",s)))},[r,o]);const a=s=>{n(s.target.value),u(s.target.value)};return e.jsxs("div",{id:"script_setup",children:[e.jsx("label",{htmlFor:"script_select",children:"Choose a script"}),e.jsxs("select",{name:"scripts",id:"script_select",value:p,onChange:a,children:[o===""?e.jsx("option",{value:""},"none"):null,w.map(s=>e.jsx("option",{value:s.file,children:s.name},s.name))]})]})}function G(){const o=g(t=>t.roles.roles),u=g(t=>t.settings.tutorialStage),[p,n]=l.useState(!1),c=D(),r=j(),a=g(t=>t.players.players.length),s=[{target:"body",content:"Let's go on a tour!",placement:"center"},{target:".token",content:"This represents a player, click on it to change their name, drag them around to place them"},{target:"#add_player",content:`You can add more players on this button
or drag some to the trash to remove them`},{target:"#script_setup",content:"Choose which script you want to play here",placement:"top"},{target:"#go_play",content:"When you are done, click  here",placement:"top"}],h=t=>{const{action:m}=t;[x.CLOSE,x.STOP,x.SKIP].includes(m)&&r(I({stage:1}))},i=[,,,,,[3,0,1,1],[3,1,1,1],[5,0,1,1],[5,1,1,1],[5,2,1,1],[7,0,2,1],[7,1,2,1],[7,2,2,1],[9,0,3,1],[9,1,3,1],[9,2,3,1]];function d(){var m,v,y,S,C,b;if(a<5||a>15)return null;const t="This is a "+a+" game, base count is "+((m=i[a])==null?void 0:m.at(0))+" townsfolks, "+((v=i[a])==null?void 0:v.at(1))+" outsider"+((((y=i[a])==null?void 0:y.at(1))??0)>1?"s":"")+", "+((S=i[a])==null?void 0:S.at(2))+" minion"+((((C=i[a])==null?void 0:C.at(2))??0)>1?"s":"")+", and "+((b=i[a])==null?void 0:b.at(3))+" demon.";return console.log(t),t}return e.jsxs("div",{className:"h-dvh",children:[e.jsx(F,{steps:s,showSkipButton:!0,continuous:!0,callback:h,run:u<1}),e.jsx("div",{className:"h-2/3",children:e.jsx(K,{})}),e.jsxs("div",{className:"h-1/3",children:[e.jsx(H,{}),e.jsx(f,{onClick:()=>{n(!0)},disabled:o.length===0,children:"Show script"}),e.jsx("p",{id:"go_play",children:e.jsx(f,{onClick:()=>{const t=d();return t!=null&&r(O({note:[t]})),r(A()),c("/play/townsquare",{replace:!0})},disabled:o.length===0,children:"Done"})})]}),e.jsx(N,{open:p,onClose:()=>{n(!1)},children:e.jsx(L,{highlights:null,closeDialog:()=>{n(!1)},tapCharacter:()=>{}})})]})}export{G as default};
