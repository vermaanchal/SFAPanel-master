"use strict";(self.webpackChunkSFA_Admin_Panel=self.webpackChunkSFA_Admin_Panel||[]).push([[257],{47257:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var s=o(65043),i=o(96446),n=o(12110),l=o(26494),r=o(85865),d=o(39336),a=o(68903),c=o(53149),x=o(71942),h=o(53487),m=o(53968),j=o(68931);const p=function(){const[e,t]=(0,s.useState)(null),[o,i]=(0,s.useState)(!0),[n,l]=(0,s.useState)(null);return(0,s.useEffect)((()=>{fetch("".concat(j.K,"GetDasboardDetails")).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{t(e),i(!1)})).catch((e=>{l(e),i(!1)})).finally((()=>{i(!1)}))}),[]),{data:e,loading:o,error:n}};var f=o(23305),g=o(97929),u=o(70579);const A=e=>{let{title:t,totalBet:o,winAmount:s,profit:a,color:j}=e;return(0,u.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"".concat(j),borderRadius:5},children:[(0,u.jsx)(n.A,{className:"flex-grow-1",sx:{borderTopRightRadius:16,borderBottomRightRadius:16,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderLeft:"1px solid ".concat(j),borderTop:"1px solid ".concat(j),borderBottom:"1px solid ".concat(j),boxShadow:0},children:(0,u.jsxs)(l.A,{sx:{padding:0},children:[(0,u.jsx)(i.A,{sx:{padding:2},children:(0,u.jsx)(r.A,{variant:"subtitle1",fontWeight:"bold",children:t})}),(0,u.jsx)(d.A,{sx:{borderBottomWidth:2,borderColor:j}}),(0,u.jsxs)(i.A,{className:"d-flex justify-content-between align-items-center mt-3 px-3",children:[(0,u.jsxs)("div",{style:b.statBox,children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.yellow},children:(0,u.jsx)("img",{src:h,alt:"Total Bet",style:b.iconImg})}),(0,u.jsxs)("span",{children:["Total Bet = ",(0,u.jsx)("strong",{children:o})]})]}),(0,u.jsxs)("div",{style:b.statBox,children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.pink},children:(0,u.jsx)("img",{src:x,alt:"Total Win",style:b.iconImg})}),(0,u.jsxs)("span",{children:["Win amount  =  ",(0,u.jsx)("strong",{style:b.profitGreen,children:s})]})]})]}),(0,u.jsxs)(i.A,{className:"d-flex  align-items-center mt-4 mx-3",sx:{gap:2},children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.green},children:(0,u.jsx)("img",{src:c,alt:"Profit",style:b.iconImg})}),(0,u.jsxs)("span",{style:b.statBox,children:["Profit = ",(0,u.jsx)("strong",{style:b.profitGreen,children:a}),(0,u.jsx)(r.A,{variant:"body2",children:"\u27a4"})]})]})]})}),(0,u.jsx)(i.A,{children:(0,u.jsx)(m.A,{sx:{color:"#fff"}})})]})},y=()=>{const{data:e,loading:t,error:o}=p();console.log("lalal",e);return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)("div",{style:{zIndex:1050,height:"54%",width:"75%"},className:"d-flex justify-content-center  align-items-center position-absolute",children:(0,u.jsx)(f.FontAwesomeIcon,{icon:g.z1G,spin:!0,size:"3x",style:{color:"#EF9848"}})}),(0,u.jsxs)(a.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,u.jsx)(a.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,u.jsx)(r.A,{variant:"h5",children:"Dashboard"})}),(0,u.jsx)(a.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashCard",children:[(0,u.jsx)("h5",{children:"Total Downloads"}),(0,u.jsxs)("p",{children:[null===e||void 0===e?void 0:e.totalDownloads," "]})]})}),(0,u.jsx)(a.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashCard2",children:[(0,u.jsx)("h5",{children:"Active Users"}),(0,u.jsxs)("p",{children:[null===e||void 0===e?void 0:e.activeUsers," "]})]})}),(0,u.jsx)(a.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashCard3",children:[(0,u.jsx)("h5",{children:"Total Admin"}),(0,u.jsxs)("p",{children:[null===e||void 0===e?void 0:e.totalAdmin," "]})]})}),(0,u.jsx)(a.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashCard4",children:[(0,u.jsx)("h5",{children:"Total Agency"}),(0,u.jsxs)("p",{children:[null===e||void 0===e?void 0:e.totalAgency," "]})]})})]}),(0,u.jsx)(a.Ay,{container:!0,rowSpacing:2,columnSpacing:2.75,padding:3,children:[{title:"SFA GUESS",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#52c7b8"},{title:"Teen Patti",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#f0ad4e"},{title:"777 Slot",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#9b59b6"},{title:"SFA Ludo",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#F1729B"},{title:"Fruit Slot",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#F48478"},{title:"SFA Keno",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#AD7ED4"},{title:"SFA Dreamcatcher",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#3DA5D9"}].map(((e,t)=>(0,u.jsx)(a.Ay,{item:!0,xs:12,md:6,lg:6,children:(0,u.jsx)(A,{...e})},t)))})]})},b={statBox:{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",color:"#333"},iconBox:{width:"28px",height:"28px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},yellow:{backgroundColor:"#ffe9b5"},pink:{backgroundColor:"#ffd7ec"},green:{backgroundColor:"#ccffe5"},iconImg:{width:"16px",height:"16px"},profitGreen:{color:"#00b97d"},profitRed:{color:"red"}}},53968:(e,t,o)=>{var s=o(24994);t.A=void 0;var i=s(o(40039)),n=o(70579);t.A=(0,i.default)((0,n.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=257.5b06f1a2.chunk.js.map