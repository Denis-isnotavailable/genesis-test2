"use strict";(self.webpackChunkgenesis_test2=self.webpackChunkgenesis_test2||[]).push([[29],{3029:function(n,t,i){i.r(t),i.d(t,{default:function(){return N}});var e,r,o,s,c,a,u,p,d,l,x,h,f=i(9439),g=i(2791),m=i(9434),b=i(1087),v=i(6710),w=i(168),Z=i(6444),j=Z.ZP.li(e||(e=(0,w.Z)(["\n    position: relative;\n    :not(:last-child) {\n        margin-bottom: 32px;\n    }\n    width: 320px;\n    height: 480px;   \n\n    background-color: #fff;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);\n    border-radius: 4px;    \n\n    @media (min-width: 768px) {\n        :not(:last-child) {\n        margin-bottom: 0;\n    }\n    }\n    \n"]))),P=Z.ZP.div(r||(r=(0,w.Z)(["\n    width: 320px;\n    height: 140px;\n    margin-bottom: 24px;\n"]))),k=Z.ZP.img(o||(o=(0,w.Z)(["\n    display: ",";\n    width: 100%;\n    height: 100%;\n"])),(function(n){return n.isShow?"block":"none"})),S=Z.ZP.div(s||(s=(0,w.Z)(["\n    display: ",";\n"])),(function(n){return n.isShow?"block":"none"})),y=Z.ZP.div(c||(c=(0,w.Z)(["\n    padding: 0 20px;\n\n    text-align: center;\n    color: #000000;\n\n    h2 {\n        height: 84px;\n        margin-bottom: 12px;        \n    }\n\n    h3 {\n        margin-bottom: 8px;\n    }\n"]))),z=Z.ZP.div(a||(a=(0,w.Z)(["\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 16px;\n\n    font-size: 18px;\n    color: #575555;\n\n    span {\n        font-weight: 500;\n        font-size: 20px;\n        color: #000;\n    }\n\n"]))),E=Z.ZP.ul(u||(u=(0,w.Z)([""]))),L=Z.ZP.div(p||(p=(0,w.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    font-size: 32px;\n\n    color: rgb(255, 0, 0);\n"]))),I=i(184),C=function(n){var t=n.course,i=(0,m.v9)((function(n){return n.currentLessons.currentWatchingLesson})),e=(0,g.useState)(!1),r=(0,f.Z)(e,2),o=r[0],s=r[1],c=(0,g.useState)(!1),a=(0,f.Z)(c,2),u=a[0],p=a[1];(0,g.useEffect)((function(){i.find((function(n){return n.courseId===t.id}))&&s(!0)}),[t.id,i]);var d=t.previewImageLink,l=t.title,x=t.lessonsCount,h=t.rating,w=t.meta,Z=t.id;return(0,I.jsx)(j,{onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},children:(0,I.jsxs)(b.OL,{to:Z,style:{textDecoration:"none"},children:[(0,I.jsxs)(P,{children:[(0,I.jsx)(k,{src:"".concat(d,"/cover.webp"),alt:"course poster",width:320,isShow:!u}),(0,I.jsx)(S,{isShow:u,children:(0,I.jsx)(v.Z,{url:w.courseVideoPreview.link,volume:0,muted:!1,loop:!0,controls:!0,playing:!0,config:{file:{attributes:{autoPlay:!0,muted:!0},hlsOptions:{autoStartLoad:!0,startPosition:-1}}},width:"320px",height:"140px"})})]}),o&&(0,I.jsx)(L,{children:"IN PROGRESS"}),(0,I.jsxs)(y,{children:[(0,I.jsx)("h2",{children:l}),(0,I.jsxs)(z,{children:[(0,I.jsxs)("p",{children:["Lessons: ",(0,I.jsx)("span",{children:x})]}),(0,I.jsxs)("p",{children:["Rating: ",(0,I.jsx)("span",{children:h})]})]}),(0,I.jsx)("h3",{children:"Skills:"}),w.skills?(0,I.jsx)(E,{children:w.skills.map((function(n,t){return(0,I.jsx)("li",{children:n},t)}))}):"no skills indicated"]})]})})},D=i(6299),M=Z.ZP.ul(d||(d=(0,w.Z)(["  \n\n    margin-bottom: 48px;\n\n    @media (min-width: 768px) {\n        display: flex;\n        flex-wrap: wrap;        \n        gap: 32px;        \n        padding: 0 28px;        \n    }\n\n    @media (min-width: 1040px) {\n        padding: 0;\n    }\n"]))),O=function(n){var t=n.page,i=(0,m.I0)(),e=(0,m.v9)((function(n){return n.courses.courses}));return(0,g.useEffect)((function(){i((0,D.V3)())}),[i]),(0,I.jsx)(M,{children:e.slice(e.length-(e.length-10*(t-1)),10*t).map((function(n){return(0,I.jsx)(C,{course:n},n.id)}))})},R=Z.ZP.div(l||(l=(0,w.Z)(["\n    width: 320px;\n    margin: 24px auto;\n    padding: 0 20px;    \n\n    h1 {\n        margin-bottom: 32px;\n        text-align: center;\n        font-size: 48px;\n    }\n    \n    @media (min-width: 768px) {        \n        width: 728px;\n        \n        h1 {            \n            font-size: 60px;\n        }\n    }\n\n     @media (min-width: 1064px) {        \n        width: 1024px;     \n        \n        h1 {\n            margin-bottom: 48px;            \n            font-size: 78px;\n        }\n    }\n"]))),A=Z.ZP.ul(x||(x=(0,w.Z)(["\n    display: flex;\n    justify-content: center;\n    gap: 16px;    \n\n"]))),G=Z.ZP.button(h||(h=(0,w.Z)(["\n    width: 38px;\n    height: 38px;\n    padding: 0;\n\n    border-radius: 10px;\n    border: none;\n    background-color: ",";\n\n    font-size: 16px;\n\n    cursor: pointer;\n\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {        \n        transform: scale(1.05);\n    }\n"])),(function(n){return n.active?"#c5c1c1":"#ffffff"})),N=function(){var n=(0,m.I0)(),t=(0,m.v9)((function(n){return n.courses.pages})),i=(0,m.v9)((function(n){return n.courses.currentPage})),e=(0,g.useState)([]),r=(0,f.Z)(e,2),o=r[0],s=r[1];(0,g.useEffect)((function(){var n=t.length;if(n<=5)return s(t);s(1===i||2===i||3===i?t.slice(0,5):i===n||i===n-1||i===n-2?t.slice(n-5,n):t.slice(i-3,i+2))}),[i,t]);return(0,I.jsxs)(R,{children:[(0,I.jsx)("h1",{children:"GENESIS ACADEMY"}),(0,I.jsx)(O,{page:i}),(0,I.jsx)(A,{children:o.map((function(t){var e=t===i;return(0,I.jsx)("li",{children:(0,I.jsx)(G,{type:"button",active:e,onClick:function(){return i=t,n((0,D.D4)(i)),void window.scrollTo({top:0,behavior:"smooth"});var i},children:t})},t)}))})]})}}}]);
//# sourceMappingURL=29.fbd38c80.chunk.js.map