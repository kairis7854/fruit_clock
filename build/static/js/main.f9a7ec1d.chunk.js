(this["webpackJsonpday994-fruit-clock"]=this["webpackJsonpday994-fruit-clock"]||[]).push([[0],{27:function(t,e,s){},29:function(t,e,s){},30:function(t,e,s){},31:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){},34:function(t,e,s){"use strict";s.r(e);var i=s(1),n=s.n(i),c=s(6),a=s.n(c),o=s(3),r=s(9),l="test",u="tomato",j="watermelon",m="strawberry",b="cantaloupe";var d,O=Object(r.a)({test:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,s=e.type;switch(e.data,s){case l:return++t;default:return t}},fruit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",e=arguments.length>1?arguments[1]:void 0,s=e.type;switch(e.data,s){case u:return"1";case m:return"2";case j:return"3";case b:return"4";default:return t}}}),p=Object(r.b)(O),f=s(2),y=s(13),v=s(14),x=s(17),h=s(15),k=(s(27),s(0)),N=(Object(o.b)((function(t){return{test:t.test}}),{testAdd:function(t){return{type:l,data:t}}})(d=function(t){Object(x.a)(s,t);var e=Object(h.a)(s);function s(){return Object(y.a)(this,s),e.apply(this,arguments)}return Object(v.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"testDiv",children:Object(k.jsx)("div",{className:"testDiv2"})}),Object(k.jsx)("p",{children:this.props.test}),Object(k.jsx)("button",{onClick:this.props.testAdd,children:"+"})]})}}]),s}(i.Component)),s(29),function(){var t=Object(o.c)();return Object(k.jsxs)("div",{className:"fruitButton-wrap",children:[Object(k.jsx)("button",{className:"fruitButton_tomatoButton",onClick:function(){t({type:u})},children:Object(k.jsx)("div",{className:"fruitButton_tomatoIMG"})}),Object(k.jsx)("button",{className:"fruitButton_strawberryButton",onClick:function(){t({type:m})},children:Object(k.jsx)("div",{className:"fruitButton_strawberryIMG"})}),Object(k.jsx)("button",{className:"fruitButton_watermelonButton",onClick:function(){t({type:j})},children:Object(k.jsx)("div",{className:"fruitButton_watermelonIMG"})}),Object(k.jsx)("button",{className:"fruitButton_cantaloupeButton",onClick:function(){t({type:b})},children:Object(k.jsx)("div",{className:"fruitButton_cantaloupeIMG"})})]})}),w=n.a.memo(N),g=s(4),M=s.p+"static/media/play-button.bb43f381.svg",R=s.p+"static/media/pause-button.a5abb526.svg",B=s.p+"static/media/blackout_harp1.c533454e.mp3",C=s.p+"static/media/blackout_harp2.b001a8e8.mp3",I=s.p+"static/media/tomato.7f1b1aa7.png",A=s.p+"static/media/strawberry.2289a785.png",_=s.p+"static/media/watermelon.1bee71d4.png",L=s.p+"static/media/cantaloupe.4727635b.png";s(30);function S(t){var e=t%60,s=parseInt(t/60),i=e<10?0:"";return["".concat(s<10?0:"").concat(s,":").concat(i).concat(e)]}var T=new Audio(B),G=new Audio(C),D=function(t){var e=Object(o.d)((function(t){return t.fruit})),s=Object(i.useState)(Number),n=Object(f.a)(s,2),c=n[0],a=n[1],r=Object(i.useState)(!1),l=Object(f.a)(r,2),u=l[0],j=l[1];Object(i.useEffect)((function(){var e;return t.isRun?e=setInterval((function(){a((function(t){return t-1}))}),1e3):clearInterval(e),function(){return clearInterval(e)}}),[t.isRun]),Object(i.useEffect)((function(){if(!u&&t.isRun&&0===c)return a(300),j(!0),void T.play();u&&0===c&&(t.setNowMission({key:0,mission:"\u5b8c\u6210",time:0}),t.setIsRun(!t.isRun),j(!1),G.play(),t.setMission((function(e){var s=[];return e.find((function(e){return t.nowMission.key===e.key||s.push(e),null})),s})))}),[c]);var m=Object(k.jsx)("img",{className:"clock-fruit",src:I,style:{display:"1"===e?"block":"none"},alt:"fruit"}),b=Object(k.jsx)("img",{className:"clock-fruit",src:A,style:{display:"2"===e?"block":"none"},alt:"fruit"}),d=Object(k.jsx)("img",{className:"clock-fruit",src:_,style:{display:"3"===e?"block":"none"},alt:"fruit"}),O=Object(k.jsx)("img",{className:"clock-fruit",src:L,style:{display:"4"===e?"block":"none"},alt:"fruit"}),p=Object(k.jsx)("img",{className:"clock-icon",src:R,onClick:function(){v()},style:{display:t.isRun?"block":"none"},alt:"icon_pause"}),y=Object(k.jsx)("img",{className:"clock-icon",src:M,onClick:function(){x()},style:{display:t.isRun?"none":"block"},alt:"icon_pause"}),v=function(){t.setIsRun(!t.isRun),t.setNowMission(Object(g.a)(Object(g.a)({},t.nowMission),{},{time:c})),t.setMission((function(e){return e.find((function(e){return e.key===t.nowMission.key?e.time=c:null})),e}))},x=function(){0!==t.nowMission.key?(t.setIsRun(!t.isRun),a(t.nowMission.time)):alert("\u4efb\u52d9\u5df2\u5b8c\u6210!\u8acb\u9078\u64c7\u65b0\u7684\u4efb\u52d9\u3002")};return Object(k.jsxs)("div",{className:"clock-wrap",children:[Object(k.jsxs)("div",{className:"clock-mission",children:[u?"\u4f11\u606f":t.nowMission.mission,p,y]}),m,b,d,O,Object(k.jsx)("div",{children:Object(k.jsx)("p",{className:"clock-Time",children:t.isRun?S(c):S(t.nowMission.time)})})]})},E=s.p+"static/media/shopping-list.aadce41e.svg",J=s.p+"static/media/plus.b03e3495.svg",q=(s(31),function(t){return Object(k.jsxs)("div",{className:"list-wrap",children:[Object(k.jsx)("div",{className:"list-icon-list-wrap",children:Object(k.jsx)("img",{src:E,className:"list-icon-list",alt:"logo"})}),Object(k.jsx)("ul",{className:"list-ul",children:t.mission.map((function(e,s){return Object(k.jsx)("li",{className:"list-li",onClick:function(){t.changeMission(e)},children:e.mission},e.key)}))}),Object(k.jsx)("div",{className:"list-icon-add-wrap",onClick:function(){t.setListType(!0)},children:Object(k.jsx)("img",{src:J,className:"list-icon-add",alt:"logo"})})]})});function z(t,e){return t.mission===e.mission&&t.isRun===e.isRun}var F=n.a.memo(q,z),H=s(16),K=s(8),P=s(18),Q=(s(32),function(t){var e=Object(i.useState)({key:"",mission:"",time:""}),s=Object(f.a)(e,2),n=s[0],c=s[1],a=function(t){c(Object(g.a)(Object(g.a)({},n),{},Object(K.a)({},t.target.name,t.target.value)))};return Object(k.jsxs)("div",{className:"ListAdd-wrap",children:[Object(k.jsx)("div",{className:"ListAdd-icon-listAdd-wrap",children:Object(k.jsx)("img",{src:J,className:"ListAdd-icon-listAdd",alt:"logo"})}),Object(k.jsxs)("form",{className:"ListAdd",onSubmit:function(e){e.preventDefault(),n.mission&&n.time?n.time>9999?alert("\u6642\u9593\u4e0d\u80fd\u8d85\u904e9999\u5206\u9418!"):(t.setMission([].concat(Object(H.a)(t.mission),[Object(g.a)(Object(g.a)({},n),{},{time:60*n.time,key:Object(P.a)()})])),c({key:"",mission:"",time:""}),alert("\u6dfb\u52a0\u4efb\u52d9\u6210\u529f!")):alert("\u4efb\u52d9\u540d\u7a31\u6216\u6642\u9593\u4e0d\u80fd\u70ba\u7a7a!")},children:[Object(k.jsxs)("label",{children:["\u4efb\u52d9:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{name:"mission",type:"text",value:n.mission,onChange:a})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("label",{children:["\u6642\u9593(\u5206):",Object(k.jsx)("input",{name:"time",type:"text",value:n.time,onChange:a.bind(undefined)})]}),Object(k.jsx)("button",{children:"\u78ba\u5b9a"})]}),Object(k.jsx)("div",{className:"ListAdd-icon-list-wrap",onClick:function(){t.setListType(!1)},children:Object(k.jsx)("img",{src:E,className:"ListAdd-icon-list",alt:"logo"})})]})});function U(t,e){return t.mission.length===e.mission.length}var V=n.a.memo(Q,U),W=(s(33),function(){var t=Object(i.useState)(!1),e=Object(f.a)(t,2),s=e[0],n=e[1],c=Object(i.useState)(!1),a=Object(f.a)(c,2),o=a[0],r=a[1],l=Object(i.useState)([{key:1,mission:"\u6253\u75ab\u82d7",time:10},{key:4,mission:"\u5403\u98ef",time:12},{key:2,mission:"\u7761\u89ba",time:1800},{key:3,mission:"\u6253\u4ee3\u78bc",time:1800}]),u=Object(f.a)(l,2),j=u[0],m=u[1],b=Object(i.useState)({key:j?j[0].key:"",mission:j?j[0].mission:"\u4efb\u52d9",time:j?j[0].time:0}),d=Object(f.a)(b,2),O=d[0],p=d[1];return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)("div",{className:"wrap1",children:Object(k.jsx)(w,{})}),Object(k.jsx)("div",{className:"wrap2",children:Object(k.jsx)(D,{nowMission:O,setNowMission:p,isRun:s,setIsRun:n,mission:j,setMission:m})}),Object(k.jsx)("div",{className:"wrap3",style:{display:o?"none":"block"},children:Object(k.jsx)(F,{isRun:s,mission:j,changeMission:function(t){s||p({key:t.key,mission:t.mission,time:t.time})},setListType:r})}),Object(k.jsx)("div",{className:"wrap3",style:{display:o?"block":"none"},children:Object(k.jsx)(V,{mission:j,setMission:m,setListType:r})})]})});a.a.render(Object(k.jsx)(o.a,{store:p,children:Object(k.jsx)(W,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f9a7ec1d.chunk.js.map