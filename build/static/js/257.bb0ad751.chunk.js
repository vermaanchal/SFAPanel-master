"use strict";(self.webpackChunkSFA_Admin_Panel=self.webpackChunkSFA_Admin_Panel||[]).push([[257],{47257:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var l=s(65043),o=s(96446),n=s(12110),i=s(26494),r=s(85865),a=s(39336),d=s(68903),c=s(53149),x=s(71942),h=s(53487),m=s(53968),j=s(68931);const A=function(){const[e,t]=(0,l.useState)(null),[s,o]=(0,l.useState)(!0),[n,i]=(0,l.useState)(null);return(0,l.useEffect)((()=>{fetch("".concat(j.K,"GetDasboardDetails")).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{t(e),o(!1)})).catch((e=>{i(e),o(!1)})).finally((()=>{o(!1)}))}),[]),{data:e,loading:s,error:n}};var f=s(23305),g=s(97929),u=s(70579);const p=e=>{let{title:t,totalBet:s,winAmount:l,profit:d,color:j}=e;return(0,u.jsxs)(o.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5},children:[(0,u.jsx)(n.A,{className:"flex-grow-1",sx:{boxShadow:0,borderRadius:5},children:(0,u.jsxs)(i.A,{children:[(0,u.jsx)(o.A,{sx:{padding:2},children:(0,u.jsx)(r.A,{variant:"subtitle1",fontWeight:"bold",children:t})}),(0,u.jsx)(a.A,{sx:{borderBottomWidth:2,borderColor:"#EAEAEB"}}),(0,u.jsx)(o.A,{className:"d-flex justify-content-between align-items-center mt-3 px-3",children:(0,u.jsxs)("div",{style:b.statBox,children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.yellow},children:(0,u.jsx)("img",{src:h,alt:"Total Bet",style:b.iconImg})}),(0,u.jsxs)("span",{children:["Total Bet = ",(0,u.jsx)("strong",{children:s})]})]})}),(0,u.jsx)(o.A,{children:(0,u.jsxs)("div",{className:"d-flex  align-items-center mt-4 mx-3",sx:{gap:2},children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.pink},children:(0,u.jsx)("img",{src:x,alt:"Total Win",style:b.iconImg})}),(0,u.jsxs)("span",{className:"mx-2",children:["Win amount  =  ",(0,u.jsx)("strong",{style:b.profitGreen,children:l})]})]})}),(0,u.jsxs)(o.A,{className:"d-flex  align-items-center mt-4 mx-3",sx:{gap:2},children:[(0,u.jsx)("div",{style:{...b.iconBox,...b.green},children:(0,u.jsx)("img",{src:c,alt:"Profit",style:b.iconImg})}),(0,u.jsxs)("span",{style:b.statBox,children:["Profit = ",(0,u.jsx)("strong",{style:b.profitGreen,children:d}),(0,u.jsx)(r.A,{variant:"body2",children:"\u27a4"})]})]})]})}),(0,u.jsx)(o.A,{children:(0,u.jsx)(m.A,{sx:{color:"#fff"}})})]})},y=()=>{const{data:e,loading:t,error:s}=A();console.log("lalal",e);return(0,u.jsxs)(u.Fragment,{children:[t&&(0,u.jsx)("div",{style:{zIndex:1050,height:"54%",width:"75%"},className:"d-flex justify-content-center  align-items-center position-absolute",children:(0,u.jsx)(f.FontAwesomeIcon,{icon:g.z1G,spin:!0,size:"3x",style:{color:"#EF9848"}})}),(0,u.jsxs)(d.Ay,{container:!0,rowSpacing:4.5,columnSpacing:2.75,children:[(0,u.jsx)(d.Ay,{item:!0,xs:12,sx:{mb:-2.25},children:(0,u.jsx)(r.A,{variant:"h5",children:"Dashboard"})}),(0,u.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashboardCard",children:[(0,u.jsx)("h6",{style:{color:"#312F2F"},children:"Total Downloads"}),(0,u.jsxs)("h4",{children:[null===e||void 0===e?void 0:e.totalDownloads," "]})]})}),(0,u.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashboardCard",children:[(0,u.jsx)("h6",{style:{color:"#312F2F"},children:"Active Users"}),(0,u.jsxs)("h4",{children:[null===e||void 0===e?void 0:e.activeUsers," "]})]})}),(0,u.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashboardCard",children:[(0,u.jsx)("h6",{style:{color:"#312F2F"},children:"Total Admin"}),(0,u.jsxs)("h4",{children:[null===e||void 0===e?void 0:e.totalAdmin," "]})]})}),(0,u.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,u.jsxs)("div",{className:"dashboardCard",children:[(0,u.jsx)("h6",{style:{color:"#312F2F"},children:"Total Agency"}),(0,u.jsxs)("h4",{children:[null===e||void 0===e?void 0:e.totalAgency," "]})]})})]}),(0,u.jsx)(d.Ay,{container:!0,rowSpacing:2,columnSpacing:2.75,padding:3,children:[{title:"SFA GUESS",totalBet:1e5,winAmount:3e3,profit:1e5},{title:"Teen Patti",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#f0ad4e"},{title:"777 Slot",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#9b59b6"},{title:"SFA Ludo",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#F1729B"},{title:"Fruit Slot",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#F48478"},{title:"SFA Keno",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#AD7ED4"},{title:"SFA Dreamcatcher",totalBet:1e5,winAmount:3e3,profit:1e5,color:"#3DA5D9"}].map(((e,t)=>(0,u.jsx)(d.Ay,{item:!0,xs:4,md:4,lg:4,children:(0,u.jsx)(p,{...e})},t)))})]})},b={statBox:{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",color:"#333"},iconBox:{width:"28px",height:"28px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},yellow:{backgroundColor:"#ffe9b5"},pink:{backgroundColor:"#ffd7ec"},green:{backgroundColor:"#ccffe5"},iconImg:{width:"16px",height:"16px"},profitGreen:{color:"#00b97d"},profitRed:{color:"red"}}},53968:(e,t,s)=>{var l=s(24994);t.A=void 0;var o=l(s(40039)),n=s(70579);t.A=(0,o.default)((0,n.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=257.bb0ad751.chunk.js.map