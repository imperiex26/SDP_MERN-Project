(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(t,e,n){t.exports={card:"Card_card__165Vu",headingWrapper:"Card_headingWrapper__1-4fN",heading:"Card_heading__3XssA"}},15:function(t,e,n){t.exports={cardWrapper:"StepOtp_cardWrapper__2lzdy",actionButtonWrap:"StepOtp_actionButtonWrap__imMM2",bottomParagraph:"StepOtp_bottomParagraph__1FIfy"}},18:function(t,e,n){t.exports={text:"Home_text__1D0C6",cardWrapper:"Home_cardWrapper__2LlRn",signinWrapper:"Home_signinWrapper__2YuS6"}},19:function(t,e,n){t.exports={buttons:"Button_buttons__3LLag",arrow:"Button_arrow__3Z5-G"}},25:function(t,e,n){t.exports={navbar:"Navigation_navbar__2lrvJ"}},26:function(t,e,n){t.exports={input:"TextInput_input__r6EwE"}},31:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(23),i=n.n(r),o=n(10),s=n(13),j=(n(31),n(12)),l=n(2),u=n(18),b=n.n(u),d=n(14),p=n.n(d),h=n(0),x=function(t){var e=t.title,n=t.icon,a=t.children;return Object(h.jsxs)("div",{className:p.a.card,children:[Object(h.jsxs)("div",{className:p.a.headingWrapper,children:[Object(h.jsx)("img",{src:"/images/".concat(n,".png"),alt:"logo"}),Object(h.jsx)("h1",{className:p.a.heading,children:e})]}),a]})},O=n(19),m=n.n(O),g=function(t){var e=t.text,n=t.onClick;return Object(h.jsxs)("button",{onClick:n,className:m.a.buttons,children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("img",{className:m.a.arrow,src:"/images/arrow-forward.png",alt:"logo"})]})},_=function(){var t=Object(l.g)();return Object(h.jsx)("div",{className:b.a.cardWrapper,children:Object(h.jsxs)(x,{title:"Welcome to PodHut",icon:"logo",children:[Object(h.jsx)("p",{className:b.a.text,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut dignissimos corrupti accusantium architecto a similique sit exercitationem facere. Sint! ipsum dolor sit amet consectetur, adipisicing elit. Temporibus"}),Object(h.jsx)("div",{children:Object(h.jsx)(g,{onClick:function(){t.push("/authenticate")},text:"Let's Go"})})]})})},f=n(25),v=n.n(f),N=function(){return Object(h.jsx)("nav",{className:"".concat(v.a.navbar," container"),children:Object(h.jsxs)(j.b,{style:{color:"#fff",textDecoration:"none",fontWeight:"bold",fontSize:"22px",display:"flex",allignItems:"center"},to:"/",children:[Object(h.jsx)("img",{src:"/images/logo.png",alt:"logo"}),Object(h.jsx)("span",{style:{marginLeft:"10px"},children:"PodHut"})]})})},W=n(8),S=n(26),P=n.n(S),y=function(t){return Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(o.a)({className:P.a.input,type:"text"},t))})},C=n(5),B=n.n(C),E={phone:function(t){var e=t.onNext,n=Object(a.useState)(""),c=Object(W.a)(n,2),r=c[0],i=c[1];return Object(h.jsxs)(x,{title:"Enter phone no",icon:"phone",children:[Object(h.jsx)(y,{value:r,onChange:function(t){return i(t.target.value)}}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:B.a.actionButtonWrap,children:Object(h.jsx)(g,{text:"Next",onClick:e})}),Object(h.jsx)("p",{className:B.a.bottomParagraph,children:"By entering your number, you are agreeing to our Terms of Services and Privacy Policy."})]})]})},email:function(t){var e=t.onNext,n=Object(a.useState)(""),c=Object(W.a)(n,2),r=c[0],i=c[1];return Object(h.jsxs)(x,{title:"Enter email ID",icon:"email-emoji",children:[Object(h.jsx)(y,{value:r,onChange:function(t){return i(t.target.value)}}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:B.a.actionButtonWrap,children:Object(h.jsx)(g,{text:"Next",onClick:e})}),Object(h.jsx)("p",{className:B.a.bottomParagraph,children:"By entering your email, you are agreeing to our Terms of Services and Privacy Policy."})]})]})}},w=function(t){var e=t.onNext,n=Object(a.useState)("phone"),c=Object(W.a)(n,2),r=c[0],i=c[1],o=E[r];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:B.a.cardWrapper,children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:B.a.buttonWrap,children:[Object(h.jsx)("button",{className:"".concat(B.a.tabButton," ").concat("phone"===r?B.a.active:""),onClick:function(){return i("phone")},children:Object(h.jsx)("img",{src:"/images/phone-white.png",alt:"phone"})}),Object(h.jsx)("button",{className:"".concat(B.a.tabButton," ").concat("email"===r?B.a.active:""),onClick:function(){return i("email")},children:Object(h.jsx)("img",{src:"/images/mail-white.png",alt:"email"})})]}),Object(h.jsx)(o,{onNext:e})]})})})},k=n(15),L=n.n(k),F={1:w,2:function(t){t.onNext;var e=Object(a.useState)(""),n=Object(W.a)(e,2),c=n[0],r=n[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:L.a.cardWrapper,children:Object(h.jsxs)(x,{title:"Enter the code we just sent you",icon:"lock-emoji",children:[Object(h.jsx)(y,{value:c,onChange:function(t){return r(t.target.value)}}),Object(h.jsx)("div",{className:L.a.actionButtonWrap,children:Object(h.jsx)(g,{onClick:function(){},text:"Next"})}),Object(h.jsx)("p",{className:L.a.bottomParagraph,children:"Enter the one time code that was sent to you."})]})})})}},H=function(){var t=Object(a.useState)(1),e=Object(W.a)(t,2),n=e[0],c=e[1],r=F[n];return Object(h.jsx)(r,{onNext:function(){c(n+1)}})},I=function(){return Object(h.jsx)("div",{children:"activat"})},T=function(){return Object(h.jsx)("div",{children:"rooms"})},D=["children"],M=["children"],J=["children"];var z=function(t){var e=t.children,n=Object(s.a)(t,D);return Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(t){t.location;return e}}))},G=function(t){t.children;var e=Object(s.a)(t,M);return Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},e),{},{render:function(t){var e=t.location;return Object(h.jsx)(l.a,{to:{pathname:"/",state:{from:e}}})}}))},V=function(t){t.children;var e=Object(s.a)(t,J);return Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},e),{},{render:function(t){var e=t.location;return Object(h.jsx)(l.a,{to:{pathname:"/",state:{from:e}}})}}))},Y=function(){return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(N,{}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(z,{path:"/",exact:!0,children:Object(h.jsx)(_,{})}),Object(h.jsx)(z,{path:"/authenticate",children:Object(h.jsx)(H,{})}),Object(h.jsx)(G,{path:"/activate",children:Object(h.jsx)(I,{})}),Object(h.jsx)(V,{path:"/rooms",children:Object(h.jsx)(T,{})})]})]})},q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),q()},5:function(t,e,n){t.exports={cardWrapper:"StepPhoneEmail_cardWrapper__1HYmS",buttonWrap:"StepPhoneEmail_buttonWrap__2MH1L",tabButton:"StepPhoneEmail_tabButton__2yvCB",active:"StepPhoneEmail_active__2vL70",actionButtonWrap:"StepPhoneEmail_actionButtonWrap__6KD16",bottomParagraph:"StepPhoneEmail_bottomParagraph__39Vx6"}}},[[38,1,2]]]);
//# sourceMappingURL=main.a855e3fa.chunk.js.map