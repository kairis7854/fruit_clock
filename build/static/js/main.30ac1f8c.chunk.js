(this["webpackJsonpday994-fruit-clock"]=this["webpackJsonpday994-fruit-clock"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(6),c=n.n(i),o=n(3),r=n(10),l="test",d="normal ",u="slow",j="speedy",m="fast",b="nowMission";var h={id:"",missoin:"",time:"",smoke:""};var _=Object(r.a)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(t.data,n){case l:return++e;default:return e}},speed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.data;switch(n){case d:case u:case j:case m:return s;default:return e}},mission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.data;switch(n){case b:return s;default:return e}}}),O=Object(r.b)(_),f=n(2),p=n(16),v=n.n(p),x=n(17),y=n(7),g=n(11),N=n(9);function k(){C.mission.bulkAdd([{id:1,mission:"\u6253\u75ab\u82d7",time:3,smoke:!1},{id:2,mission:"\u5403\u98ef",time:6,smoke:!1},{id:3,mission:"\u7761\u89ba",time:3,smoke:!1},{id:4,mission:"\u6253\u4ee3\u78bc",time:3,smoke:!1}])}var C=new(function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;return Object(y.a)(this,n),(e=t.call(this,"FruitClockDB")).version(.1).stores({mission:"id,mission,time,smoke"}),e.version(.2).stores({mission:"id,mission,time,smoke",plan:"id,mission,time,smoke,[year+month+date],state"}),e}return n}(n(14).default));C.on("populate",k);n(28);var w=n(0);function I(){var e=Object(s.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],i=function(){C.transaction("rw",C.mission,C.plan,Object(x.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(C.tables.map((function(e){return e.clear()})));case 2:return e.next=4,k();case 4:case"end":return e.stop()}}),e)})))),window.location.reload()};return Object(w.jsxs)("div",{className:"Reset",children:[Object(w.jsx)("div",{className:"Reset__imgWrap",children:Object(w.jsx)("div",{className:"Reset__imgWrap__img",onClick:function(){a(!n)}})}),Object(w.jsxs)("div",{className:"Reset__question",style:{display:n?"block":"none"},children:[Object(w.jsx)("p",{children:"\u662f\u5426\u56de\u5230\u521d\u59cb\u72c0\u614b\uff1f"}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"button",value:"YES",onClick:function(){i()}}),Object(w.jsx)("input",{type:"button",value:"NO",onClick:function(){a(!1)}})]})]})}var T=n.p+"static/media/calendar.2fd75d1b.svg",Y=n.p+"static/media/clock.67daedf5.svg";n(30);function M(e){var t=e.props,n=t.homeType,s=t.setHomeType;return Object(w.jsx)("div",{className:"CalendarButton",children:Object(w.jsx)("div",{className:"CalendarButton__CalendarButtonImgWrap",children:Object(w.jsx)("div",{className:"CalendarButton__CalendarButtonImgWrap__IMG",onClick:function(){s(!n)},style:{backgroundImage:"url(".concat(n?T:Y,")")}})})})}n(31);function F(e){return Object(w.jsxs)("div",{className:"TopNav",children:[Object(w.jsx)(M,{props:e}),Object(w.jsx)(I,{})]})}n(32);var R=function(){var e=Object(o.b)();return Object(w.jsxs)("div",{className:"speedButton",children:[Object(w.jsxs)("button",{className:"speedButton__normalButton",onClick:function(){e({type:d,data:1e3})},children:["NORMAL",Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]}),Object(w.jsxs)("button",{className:"speedButton__slowButton",onClick:function(){e({type:u,data:2e3})},children:["SLOW",Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]}),Object(w.jsxs)("button",{className:"speedButton__speedyButton",onClick:function(){e({type:j,data:500})},children:["SPEEDY",Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]}),Object(w.jsxs)("button",{className:"speedButton__fastButton",onClick:function(){e({type:m,data:6.7})},children:["FAST",Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{}),Object(w.jsx)("span",{})]})]})},A=a.a.memo(R),D=n(4),S=n.p+"static/media/play-button.bb43f381.svg",L=n.p+"static/media/pause-button.a5abb526.svg",B=n.p+"static/media/blackout_harp1.c533454e.mp3",E=n.p+"static/media/blackout_harp2.b001a8e8.mp3";n(33);function W(e){var t=e%60,n=parseInt(e/60),s=t<10?0:"";return["".concat(n<10?0:"").concat(n,":").concat(s).concat(t)]}var G=new Audio(B),H=new Audio(E),P=function(e){var t=Object(o.c)((function(e){return e.mission})),n=Object(o.c)((function(e){return e.speed})),a=Object(s.useState)(Number),i=Object(f.a)(a,2),c=i[0],r=i[1],l=Object(s.useState)(!1),d=Object(f.a)(l,2),u=d[0],j=d[1],m=Object(s.useState)({id:"",mission:"",time:"",smoke:""}),b=Object(f.a)(m,2),h=b[0],_=b[1],O=Object(w.jsx)("img",{className:"clock__mission__switch",src:L,onClick:function(){v()},style:{display:e.isRun?"block":"none"},alt:"icon_pause"}),p=Object(w.jsx)("img",{className:"clock__mission__switch",src:S,onClick:function(){x()},style:{display:e.isRun?"none":"block"},alt:"icon_pause"});Object(s.useEffect)((function(){C.mission.toArray().then((function(e){_({id:e[0]?e[0].id:0,mission:e[0]?e[0].mission:"\u4efb\u52d9",time:e[0]?e[0].time:0,smoke:!!e[0]&&e[0].smoke})}))}),[]),Object(s.useEffect)((function(){_(t)}),[t]),Object(s.useEffect)((function(){var t;return e.isRun?t=setInterval((function(){r((function(e){return e-1}))}),n):clearInterval(t),function(){return clearInterval(t)}}),[e.isRun,n]),Object(s.useEffect)((function(){if(!u&&e.isRun&&0===c)return r(2),j(!0),void G.play();u&&0===c&&(e.setIsRun(!e.isRun),j(!1),H.play(),C.mission.delete(h.id),C.plan.update(h.id,{state:"done"}),_({mission:"\u5b8c\u6210",time:0}))}),[c]);var v=function(){e.setIsRun(!e.isRun),_(Object(D.a)(Object(D.a)({},h),{},{time:c,smoke:!!u})),C.mission.put({id:h.id,mission:h.mission,time:c,smoke:!!u}),j(!1)},x=function(){0!==h.id?"\u5b8c\u6210"!==h.mission?(!0===h.smoke&&j(!0),e.setIsRun(!e.isRun),r(h.time)):alert("\u4efb\u52d9\u5df2\u5b8c\u6210!\u8acb\u9078\u64c7\u65b0\u7684\u4efb\u52d9\u3002"):alert("\u8acb\u5275\u5efa\u65b0\u7684\u4efb\u52d9\u3002")};return Object(w.jsxs)("div",{className:"clock",children:[Object(w.jsxs)("div",{className:"clock__mission",children:[u?"\u4f11\u606f":h.mission,u?null:h.smoke&&"(\u4f11\u606f)",O,p]}),Object(w.jsx)("div",{className:"clock__timeWrap",children:Object(w.jsx)("p",{className:"clock__timeWrap__time",children:e.isRun?W(c):W(h.time)})})]})},Q=n.p+"static/media/shopping-list.aadce41e.svg",q=n.p+"static/media/plus.b03e3495.svg",J=n(5);n(34);function $(){var e=new Date,t=e.getDate(),n=e.getMonth()+1;return{year:e.getFullYear(),month:n,date:t}}var z=function(e){var t=Object(J.useLiveQuery)((function(){return C.mission.toArray()})),n=Object(J.useLiveQuery)((function(){return C.plan.where({year:$().year,month:$().month,date:$().date}).and((function(e){return"wait"===e.state})).toArray()}),[]),a=Object(o.b)();return Object(s.useEffect)((function(){n&&n.length>0&&n.forEach((function(e,t){C.mission.add({id:e.id,mission:e.mission,time:2*e.time,smoke:!1}),C.plan.update(e.id,{state:"start"})}))}),[n]),Object(w.jsxs)("div",{className:"list",children:[Object(w.jsx)("div",{className:"list__iconList",children:Object(w.jsx)("img",{src:Q,className:"list__iconList__IMG",alt:"logo"})}),Object(w.jsx)("ul",{className:"list__ul",children:t?t.map((function(t){return Object(w.jsx)("li",{className:"list__ul__li",onClick:function(){!function(t){e.isRun||a({type:b,data:t})}(t)},children:t.mission},t.id)})):null}),Object(w.jsx)("div",{className:"list__iconAdd",onClick:function(){e.setListType(!0)},children:Object(w.jsx)("img",{src:q,className:"list__iconAdd__IMG",alt:"logo"})})]})};function K(e,t){return e.isRun===t.isRun}var U=a.a.memo(z,K),V=n(8),X=(n(35),/^\d*?$/),Z=function(e){var t=new Date,n=Object(s.useState)({mission:"",time:""}),a=Object(f.a)(n,2),i=a[0],c=a[1],o=function(e){"time"!==e.target.name||X.test(e.target.value)?c(Object(D.a)(Object(D.a)({},i),{},Object(V.a)({},e.target.name,e.target.value))):alert("\u8acb\u8f38\u5165\u6578\u5b57")};return Object(w.jsxs)("div",{className:"ListAdd",children:[Object(w.jsx)("div",{className:"ListAdd__iconAdd",children:Object(w.jsx)("img",{src:q,className:"ListAdd__iconAdd__IMG",alt:"logo"})}),Object(w.jsxs)("form",{className:"ListAdd__form",onSubmit:function(e){e.preventDefault(),i.mission&&i.time?i.time>9999?alert("\u6642\u9593\u4e0d\u80fd\u8d85\u904e9999\u5206\u9418!"):(C.mission.add({id:t.getTime(),mission:i.mission,time:2*i.time,smoke:!1}),c({mission:"",time:""}),alert("\u6dfb\u52a0\u4efb\u52d9\u6210\u529f!")):alert("\u4efb\u52d9\u540d\u7a31\u6216\u6642\u9593\u4e0d\u80fd\u70ba\u7a7a!")},children:[Object(w.jsxs)("label",{children:["\u4efb\u52d9\uff1a",Object(w.jsx)("br",{}),Object(w.jsx)("input",{name:"mission",type:"text",value:i.mission,onChange:o,autoComplete:"off"})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{children:["\u6642\u9593(\u5206)\uff1a",Object(w.jsx)("input",{name:"time",type:"text",value:i.time,onChange:o.bind(undefined),autoComplete:"off"})]}),Object(w.jsx)("button",{children:"\u78ba\u5b9a"})]}),Object(w.jsx)("div",{className:"ListAdd__iconList",onClick:function(){e.setListType(!1)},children:Object(w.jsx)("img",{src:Q,className:"ListAdd__iconList__IMG",alt:"logo"})})]})};n(36);function ee(e){var t=e.isRun,n=Object(s.useState)(!1),a=Object(f.a)(n,2),i=a[0],c=a[1];return Object(w.jsxs)("div",{className:"list",children:[Object(w.jsx)("div",{style:{display:i?"none":"block"},children:Object(w.jsx)(U,{isRun:t,setListType:c})}),Object(w.jsx)("div",{style:{display:i?"block":"none"},children:Object(w.jsx)(Z,{setListType:c})})]})}n(37);var te=function(e){var t=Object(s.useState)(!1),n=Object(f.a)(t,2),a=n[0],i=n[1];return Object(w.jsxs)("div",{className:"Main",style:{opacity:e.homeType?1:0,display:e.homeType?"flex":"none"},children:[Object(w.jsx)("div",{className:"Main__SpeedButton",children:Object(w.jsx)(A,{})}),Object(w.jsx)("div",{className:"Main__Clock",children:Object(w.jsx)(P,{isRun:a,setIsRun:i})}),Object(w.jsx)("div",{className:"Main__List",children:Object(w.jsx)(ee,{isRun:a})})]})},ne=n(18),se=(n(38),/^\d*?$/),ae=function(e){var t=Object(s.useState)(""),n=Object(f.a)(t,2),a=n[0],i=n[1],c=Object(s.useState)(""),o=Object(f.a)(c,2),r=o[0],l=o[1],d=function(e){i(e.target.value)},u=function(e){se.test(e.target.value)?l(e.target.value):alert("\u8acb\u8f38\u5165\u6578\u5b57")},j=function(){if(a&&r)if(r>9999)alert("\u6642\u9593\u4e0d\u80fd\u8d85\u904e9999\u5206\u9418!");else{var t=new Date;C.plan.add({id:t.getTime(),mission:a,time:r,smoke:!1,year:e.timeInfo.year,month:e.timeInfo.month,date:e.timeInfo.date,state:"wait"}),alert("\u63d0\u4ea4\u6210\u529f"),i(""),l(""),e.closeForm()}else alert("\u4efb\u52d9\u540d\u7a31\u6216\u6642\u9593\u4e0d\u80fd\u70ba\u7a7a!")},m=Object(J.useLiveQuery)((function(){return C.plan.where({year:e.timeInfo.year,month:e.timeInfo.month,date:e.timeInfo.date}).toArray()}),[e.timeInfo]);return Object(w.jsxs)("div",{className:"CalendarForm",children:[Object(w.jsx)("div",{className:"CalendarForm__outside",onClick:e.closeForm}),Object(w.jsxs)("form",{className:"CalendarForm__inner",children:[Object(w.jsx)("div",{className:"CalendarForm__inner__close",onClick:e.closeForm}),Object(w.jsx)("div",{className:"CalendarForm__inner__date",children:e.timeInfo.date}),Object(w.jsxs)("div",{className:"CalendarForm__inner__plan",children:[Object(w.jsx)("strong",{children:" \u8a08\u5283\uff1a"}),Object(w.jsx)("ul",{children:m?m.map((function(e){return Object(w.jsxs)("li",{children:[e.mission,"/",e.time,"\u5206\u9418",Object(w.jsx)("div",{onClick:function(){var t;t=e.id,C.plan.delete(t)},children:"\u522a\u9664"})]},e.id)})):""})]}),function(){var t=e.timeInfo,n=t.initYear,s=t.initMonth,i=t.today,c=t.year,o=t.month,l=t.date,m=new Date(n,s-1,i),b=new Date(c,o-1,l);return m.getTime()<=b.getTime()?Object(w.jsxs)("div",{className:"CalendarForm__inner__addPlan",children:[Object(w.jsx)("strong",{children:" \u65b0\u589e\u8a08\u5283\uff1a"}),Object(w.jsxs)("div",{children:["\u540d\u7a31  ",Object(w.jsx)("input",{type:"text",name:"mission",autoComplete:"off",onChange:d.bind(undefined),value:a})]}),Object(w.jsxs)("div",{children:["\u6642\u9593  ",Object(w.jsx)("input",{type:"text",name:"time",autoComplete:"off",onChange:u,value:r,placeholder:"\u55ae\u4f4d:\u5206\u9418"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{type:"button",value:"\u53d6\u6d88",onClick:e.closeForm}),Object(w.jsx)("input",{type:"button",value:"\u63d0\u4ea4",onClick:j})]})]}):null}()]})]})},ie=(n(39),function(e){var t=Object(s.useState)(""),n=Object(f.a)(t,2),a=n[0],i=n[1];Object(s.useEffect)((function(){C.plan.where({year:e.dateInfo.year,month:e.dateInfo.month,date:e.dateInfo.date}).toArray().then((function(e){return i(e)}))}),[e.dateInfo]);var c=function(e){switch(e.state){case"wait":return Object(w.jsx)("strong",{style:{color:"purple"},children:"(\u7b49\u5f85)"});case"start":return Object(w.jsx)("strong",{style:{color:"blue"},children:"(\u53ef\u57f7\u884c)"});case"done":return Object(w.jsx)("strong",{style:{color:"green"},children:"(\u5b8c\u6210)"});case"fail":return Object(w.jsx)("strong",{style:{color:"red"},children:"(\u903e\u671f)"});default:return null}};return Object(w.jsx)(w.Fragment,{children:a?a.map((function(e,t){return Object(w.jsxs)("li",{className:"CalendarLiContent",children:[e.mission,c(e)]},t)})):null})});n(40);function ce(e){var t=e.toString();return 1===t.length&&(t="0".concat(t)),t}var oe=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(y.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={initYear:"",initMonth:"",today:"",year:"",month:"",date:"",allDate:"",showForm:!1},e.changeYear=function(t){if("\u8acb\u9078\u64c7"!==t.target.value){var n=Number(t.target.value),s=new Date(n,e.state.month,0).getDate();e.setState({year:n,totalDate:s})}},e.changeMonth=function(t){if("\u8acb\u9078\u64c7"!==t.target.value){var n=Number(t.target.value),s=new Date(e.state.year,n,0).getDate();e.setState({month:n,totalDate:s})}},e.closeForm=function(){e.setState({showForm:!1})},e.openForm=function(t){e.setState({showForm:!0,date:t})},e}return Object(ne.a)(n,[{key:"componentDidMount",value:function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,s=e.getFullYear(),a=new Date(s,n,0).getDate();this.setState({initYear:s,initMonth:n,today:t,year:s,month:n,date:t,totalDate:a}),C.plan.where("state").notEqual("done").and((function(e){return"".concat(e.year).concat(ce(e.month)).concat(ce(e.date))<"".concat(s).concat(ce(n)).concat(ce(t))})).modify({state:"fail"})}},{key:"render",value:function(){var e=this,t=this.props.homeType,n=new Array(this.state.totalDate).fill("").map((function(t,n){return Object(w.jsxs)("li",{className:"Calendar__ul__li",onClick:function(){e.openForm(n+1)},children:[Object(w.jsx)("div",{children:n+1}),Object(w.jsx)("ul",{className:"Calendar__ul__li__ul",children:Object(w.jsx)(ie,{dateInfo:{year:e.state.year,month:e.state.month,date:n+1}})})]},n+1)})),s=new Array(12).fill("").map((function(t,n){return Object(w.jsx)("li",{onClick:e.changeMonth,value:n+1,children:n+1},n+1)}));return Object(w.jsxs)("div",{className:"Calendar",style:{display:t?"none":"flex"},children:[Object(w.jsxs)("div",{className:"Calendar__Top",children:[Object(w.jsxs)("div",{className:"Calendar__Top__Month",children:[Object(w.jsx)("div",{className:"Calendar__Top__Month__menu",children:Object(w.jsxs)("div",{className:"Calendar__Top__Month__menu__select",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"Calendar__Top__Month__menu__select__title",children:this.state.month}),Object(w.jsx)("div",{className:"Calendar__Top__Month__menu__select__icon"})]}),Object(w.jsx)("ul",{className:"Calendar__Top__Month__menu__select__ul",children:s})]})}),Object(w.jsx)("div",{children:"Month"})]}),Object(w.jsxs)("div",{className:"Calendar__Top__Year",children:[Object(w.jsx)("div",{className:"Calendar__Top__Year__menu",children:Object(w.jsxs)("div",{className:"Calendar__Top__Year__menu__select",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:this.state.year}),Object(w.jsx)("div",{className:"Calendar__Top__Year__menu__select__icon"})]}),Object(w.jsxs)("ul",{className:"Calendar__Top__Year__menu__select__ul",children:[Object(w.jsx)("li",{onClick:this.changeYear,value:this.state.initYear,children:this.state.initYear}),Object(w.jsx)("li",{onClick:this.changeYear,value:this.state.initYear+1,children:this.state.initYear+1}),Object(w.jsx)("li",{onClick:this.changeYear,value:this.state.initYear+2,children:this.state.initYear+2}),Object(w.jsx)("li",{onClick:this.changeYear,value:this.state.initYear+3,children:this.state.initYear+3}),Object(w.jsx)("li",{onClick:this.changeYear,value:this.state.initYear+4,children:this.state.initYear+4})]})]})}),Object(w.jsx)("div",{children:"Year"})]})]}),Object(w.jsx)("ul",{className:"Calendar__ul",children:n}),Object(w.jsx)("div",{className:"CalendarForm",style:{display:this.state.showForm?"block":"none"},children:Object(w.jsx)(ae,{closeForm:this.closeForm,timeInfo:{year:this.state.year,month:this.state.month,date:this.state.date,initYear:this.state.initYear,initMonth:this.state.initMonth,today:this.state.today}})})]})}}]),n}(s.Component);n(41);function re(){var e=Object(s.useState)(!0),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(w.jsxs)("div",{className:"Home",children:[Object(w.jsx)(F,{homeType:n,setHomeType:a}),Object(w.jsx)(te,{homeType:n}),Object(w.jsx)(oe,{homeType:n})]})}n(42);var le=function(){return Object(w.jsx)("div",{className:"app",children:Object(w.jsx)(re,{})})};c.a.render(Object(w.jsx)(o.a,{store:O,children:Object(w.jsx)(le,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.30ac1f8c.chunk.js.map