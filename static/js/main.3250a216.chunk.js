(this["webpackJsonpcoriolis-companion"]=this["webpackJsonpcoriolis-companion"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},137:function(e){e.exports=JSON.parse('[{"id":0,"name":"Arrash","bonusEffects":["-1 to all skill tests"],"cost":25,"weight":0.25,"techTier":"P","description":"Strong stimulant with pain-relieving properties. Usually smoked in a hookah or added to so-called dream wine. Leathery pieces of pressed arrash can be eaten directly, but this is considered a sign of strong addiction. The user becomes drowsy and calm. -1 to all skill tests.","category":0},{"id":1,"name":"Cell","bonusEffects":null,"cost":50,"weight":0.25,"techTier":"O","description":"A hydrogen fuel cell, usually new, but refueled cells can also be used. Refueling stations can be found here and there on Coriolis and in other civilized places. A refueled cell is unpredictable and the GM can deplete it at the cost of 1 DP.","category":0},{"id":2,"name":"Ballistic M-Injector","bonusEffects":["If hit, injector counts as m-dose","+1 to Medicurgy"],"cost":1000,"weight":0.25,"techTier":"O","description":"A medicurgical injector that can be fired with a Vulcan weapon to lend medical assistance from afar (Short Range). First, test ranged combat to hit the target \u2013 if you hit, the injector counts as an m-dose.","category":1}]')},138:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e){e.exports=JSON.parse('[{"dataId":0,"title":"Welcome to the Knowledge Center","subTitle":"All things related to the world of the Third Horizon","content":"To start select a section on the left for more information on a topic."},{"dataId":1,"title":"Coriolis Station","subTitle":"All things related to Coriolis Staion","content":"Blah Blah Blah"}]')},149:function(e){e.exports=JSON.parse('[{"id":"0","name":"Welcome","children":[]},{"id":"1","name":"Coriolis Station","children":[{"id":"2","name":"The Core"},{"id":"3","name":"The Ring"}]},{"id":"4","name":"Factions","children":[{"id":"5","name":"The Legion"},{"id":"6","name":"The Hegemony"}]}]')},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var i,c=n(0),a=n.n(c),r=n(39),o=n.n(r),s=(n(135),n(35)),l=n(50),d=n(18),j=(n(136),n(224)),u=n(16),b=n(9),h=n(6),O=n(37),x=new function e(){Object(O.a)(this,e),this.getBazaarInventory=function(e){return n(137).filter((function(t){return t.category===e}))}},m=(n(138),n(5)),f=n(227),p=n(205),g=n(94),v=n(228),C=n(220),y=n(230),S=n(231),I=n(232),E=n(233),T=n(234),N=n(235),w=n(229),L=n(236),k=n(237),A=n(109),_=n.n(A),R=n(108),B=n.n(R);!function(e){e[e.EVERYDAY_ITEMS=0]="EVERYDAY_ITEMS",e[e.MEDICURGICAL_TECHNOLOGY=1]="MEDICURGICAL_TECHNOLOGY",e[e.TOOLS_REPAIRS=2]="TOOLS_REPAIRS",e[e.SURVIVAL_COLONIZATION=3]="SURVIVAL_COLONIZATION",e[e.EXOS_VEHICLES=4]="EXOS_VEHICLES",e[e.RECON_INFILTRATION=5]="RECON_INFILTRATION",e[e.WEAPON_GEAR_COMBAT=6]="WEAPON_GEAR_COMBAT"}(i||(i={}));var z=[{id:i.EVERYDAY_ITEMS,title:"Everyday Items"},{id:i.MEDICURGICAL_TECHNOLOGY,title:"Medicurgical Technology"},{id:i.TOOLS_REPAIRS,title:"Tools & Repairs"},{id:i.SURVIVAL_COLONIZATION,title:"Survival & Colonization"},{id:i.EXOS_VEHICLES,title:"Exos & Vehicles"},{id:i.RECON_INFILTRATION,title:"Recon & Infiltration"},{id:i.WEAPON_GEAR_COMBAT,title:"Weapon Gear & Combat"}],M=Object(c.createContext)({cart:[],setCart:function(e){}}),G=n(1),P=Object(m.a)(f.a)((function(e){return{backgroundColor:e.theme.palette.primary.main}})),D=Object(m.a)(p.a)((function(e){var t,n=e.theme;return t={},Object(h.a)(t,"&.".concat(g.a.head),{backgroundColor:n.palette.primary,color:n.palette.common.white}),Object(h.a)(t,"&.".concat(g.a.body),{fontSize:14}),t})),V=Object(m.a)(v.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),H=function(e){var t=z.find((function(t){return t.id===e.categoryId})),n=Object(c.useState)([]),i=Object(b.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)(""),l=Object(b.a)(o,2),d=l[0],h=l[1];Object(c.useEffect)((function(){t?r(x.getBazaarInventory(t.id)):h("Error: Category does not exist.")}),[]);var O=function(e){var t,n=e.row,i=Object(c.useState)(!1),a=Object(b.a)(i,2),r=a[0],o=a[1],l=Object(c.useState)(0),d=Object(b.a)(l,2),h=d[0],O=d[1],x=Object(c.useContext)(M),m=x.cart,f=x.setCart;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(V,{children:[Object(G.jsx)(D,{children:n.name}),Object(G.jsx)(D,{children:n.cost}),Object(G.jsx)(D,{children:(t=n.bonusEffects,t=t||[],Object(G.jsx)("ul",{children:t.map((function(e){return Object(G.jsx)("li",{children:e},e)}))}))}),Object(G.jsx)(D,{children:n.weight}),Object(G.jsx)(D,{children:n.techTier}),Object(G.jsx)(D,{children:Object(G.jsxs)(j.a,{container:!0,spacing:1,style:{display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"},children:[Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(C.a,{id:"quantity-".concat(n.id),label:"Quantity",type:"number",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){O(+e.target.value)},value:h})}),Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(){return function(e){var t={quantity:h,total:0},n=Object(s.a)(Object(s.a)({},e),t),i=[].concat(Object(u.a)(m),[n]);f(i),O(0)}(n)},children:"Add"})})]})}),Object(G.jsx)(D,{align:"right",children:Object(G.jsx)(S.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!r)},children:r?Object(G.jsx)(B.a,{}):Object(G.jsx)(_.a,{})})})]}),Object(G.jsx)(V,{children:Object(G.jsx)(D,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(G.jsx)(I.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(G.jsxs)(E.a,{sx:{margin:1},children:[Object(G.jsx)(T.a,{variant:"subtitle1",gutterBottom:!0,children:"Description"}),n.description]})})})})]})},m=Object(c.useMemo)((function(){return a.map((function(e){return Object(G.jsx)(O,{row:e},e.id)}))}),[a]);return d?Object(G.jsx)("div",{children:d}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(T.a,{color:"white",variant:"h6",children:null===t||void 0===t?void 0:t.title}),Object(G.jsx)(N.a,{component:w.a,children:Object(G.jsxs)(L.a,{children:[Object(G.jsx)(P,{children:Object(G.jsxs)(v.a,{children:[Object(G.jsx)(D,{width:"15%",children:"Name"}),Object(G.jsx)(D,{width:"5%",children:"Cost"}),Object(G.jsx)(D,{width:"40%",children:"Bonus Effects"}),Object(G.jsx)(D,{width:"5%",children:"Weight"}),Object(G.jsx)(D,{width:"10%",children:"Tech Tier"}),Object(G.jsx)(D,{width:"20%",children:"Quantity"}),Object(G.jsx)(D,{width:"5%"})]})}),Object(G.jsx)(k.a,{children:m})]})})]})},W=n(238),F=(n(145),function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],a=Object(c.useContext)(M),r=a.cart,o=a.setCart;Object(c.useEffect)((function(){var e=[];r.forEach((function(t){if(!e.find((function(e){return e.itemId===t.id}))){var n=r.filter((function(e){return e.id===t.id})).map((function(e){return e.quantity})).reduce((function(e,t){return e+t})),i=t.cost*n;e.push({itemId:t.id,quantity:n,itemName:t.name,total:i})}})),i(e)}),[r]);var s={display:"flex",alignItems:"flex-end"};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(T.a,{variant:"body2",gutterBottom:!0,component:"div",children:n.map((function(e){return Object(G.jsxs)(j.a,{container:!0,spacing:1,style:s,children:[Object(G.jsx)(j.a,{item:!0,xs:6,children:e.itemName}),Object(G.jsx)(j.a,{item:!0,xs:3,children:Object(G.jsxs)(E.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:["x",Object(G.jsx)(C.a,{id:"totalItemQuantity-".concat(e.itemId),value:e.quantity,label:"",type:"number",InputLabelProps:{shrink:!0},variant:"standard",margin:"dense",sx:{ml:1},onChange:function(t){return function(e,t){var n=r.filter((function(e){return e.id===t}))[0];if(n){n.quantity=+e.target.value;var i=[];n.quantity<=0?i=r.filter((function(e){return e.id!==t})):r.forEach((function(e){e.id===n.id?i.filter((function(e){return e.id===n.id})).length<1&&i.push(n):i.push(e)})),o(i)}}(t,e.itemId)}})]})}),Object(G.jsx)(j.a,{item:!0,xs:3,children:Object(G.jsx)(E.a,{display:"flex",justifyContent:"flex-end",children:e.total})})]},e.itemId)}))}),Object(G.jsxs)(T.a,{variant:"h6",children:[Object(G.jsx)(W.a,{}),Object(G.jsxs)(j.a,{container:!0,spacing:1,children:[Object(G.jsx)(j.a,{item:!0,xs:6,children:"Total:"}),Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(E.a,{display:"flex",justifyContent:"flex-end",children:n.map((function(e){return e.total})).reduce((function(e,t){return e+t}),0)})})]})]}),Object(G.jsx)(y.a,{fullWidth:!0,variant:"contained",color:"secondary",children:"Checkout"})]})}),Y=function(e){var t=e.children,n=Object(c.useState)([]),i=Object(b.a)(n,2),a=i[0],r=i[1];return Object(G.jsx)(M.Provider,{value:{cart:a,setCart:r},children:t})},U=n(211),q=n(212),Q=n(210),Z=n(225),X=n(239),J=n(240),K=n(30),$=(n(146),function(e){var t=e.children,n=e.sliderTitle,i=Object(c.useState)(!1),a=Object(b.a)(i,2),r=a[0],o=a[1],s=(Object(K.a)(),275),l=275;return Object(G.jsxs)(E.a,{sx:{position:"fixed",right:"0px",zIndex:"9999",width:"auto"},children:[Object(G.jsx)(Q.a,{in:!r,timeout:{enter:500,exit:200},children:Object(G.jsx)(Z.a,{variant:"rounded",sx:{float:"right",right:"0px",position:"fixed"},children:Object(G.jsx)(S.a,{size:"large",color:"secondary",onClick:function(){return o(!r)},children:Object(G.jsx)(U.a,{})})})}),Object(G.jsx)(Q.a,{in:r,timeout:{enter:200,exit:200},children:Object(G.jsxs)(X.a,{sx:{minWidth:s,maxWidth:l,display:r?"block":"none"},children:[Object(G.jsx)(Q.a,{in:r,timeout:{enter:600,exit:0},children:Object(G.jsxs)(S.a,{size:"large",color:"secondary",sx:{display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"},onClick:function(){return o(!r)},children:[Object(G.jsx)(q.a,{}),n,Object(G.jsx)(q.a,{})]})}),Object(G.jsx)(J.a,{children:t})]})})]})}),ee=function(e){return Object(G.jsxs)(Y,{children:[Object(G.jsx)($,{sliderTitle:"Bazaar Cart",children:Object(G.jsx)(F,{})}),Object(G.jsx)(j.a,{container:!0,spacing:1,children:Object(G.jsxs)(j.a,{item:!0,xs:12,children:[Object(G.jsx)(H,{categoryId:i.EVERYDAY_ITEMS}),Object(G.jsx)(H,{categoryId:i.MEDICURGICAL_TECHNOLOGY})]})})]})},te=function(e){return Object(c.useEffect)((function(){}),[]),Object(G.jsx)("p",{children:"This is the home page"})},ne=(n(147),function(){Object(c.useEffect)((function(){document.addEventListener("keydown",t)}));var e=function(e){var t,n,i,c,a,r,o,s,l,d,j,b=document.getElementsByClassName("selected")[0],h=null===(t=j="next"==e?b.nextElementSibling:"prev"==e?b.previousElementSibling:e)||void 0===t?void 0:t.nextElementSibling,O=null===(n=j)||void 0===n?void 0:n.previousElementSibling,x=null===O||void 0===O?void 0:O.previousElementSibling,m=null===h||void 0===h?void 0:h.nextElementSibling;null===(i=j)||void 0===i||(c=i.classList).remove.apply(c,Object(u.a)(null===(a=j)||void 0===a?void 0:a.classList)),null===(r=j)||void 0===r||r.classList.add("selected"),null===O||void 0===O||(o=O.classList).remove.apply(o,Object(u.a)(null===O||void 0===O?void 0:O.classList)),null===h||void 0===h||(s=h.classList).remove.apply(s,Object(u.a)(null===h||void 0===h?void 0:h.classList)),null===O||void 0===O||O.classList.add("prev"),null===h||void 0===h||h.classList.add("next"),null===m||void 0===m||(l=m.classList).remove.apply(l,Object(u.a)(null===m||void 0===m?void 0:m.classList)),null===x||void 0===x||(d=x.classList).remove.apply(d,Object(u.a)(null===x||void 0===x?void 0:x.classList)),null===m||void 0===m||m.classList.add("nextRightSecond"),null===x||void 0===x||x.classList.add("prevLeftSecond"),document.querySelectorAll("#carousel div:not(.nextSecond):not(.prevSecond):not(.next):not(.prev):not(.selected)").forEach((function(e){var t;console.log(e),(t=e.classList).remove.apply(t,Object(u.a)(e.classList)),e.classList.add("hide")}))},t=function(t){switch(t.which){case 37:e("prev");break;case 39:e("next");break;default:return}t.preventDefault()};return Object(G.jsx)(j.a,{container:!0,children:Object(G.jsxs)(j.a,{item:!0,xs:12,children:[Object(G.jsxs)("div",{id:"carousel",children:[Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"selected",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/messenger.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"next",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/dancer.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/gambler.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/deckhand.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/merchant.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/judge.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/traveler.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/lady_of_tears.jpg"})}),Object(G.jsx)("div",{onClick:function(t){return e(t.currentTarget)},className:"hide",children:Object(G.jsx)("img",{src:"/Coriolis_Companion/assets/img/faceless.jpg"})})]}),Object(G.jsxs)("div",{className:"buttons",children:[Object(G.jsx)("button",{id:"prev",onClick:function(){e("prev")},children:"Prev"}),Object(G.jsx)("button",{id:"next",onClick:function(){e("next")},children:"Next"})]})]})})}),ie=function(e){return Object(G.jsx)(j.a,{container:!0,spacing:1,children:Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(ne,{})})})},ce=n(207),ae=new function e(){Object(O.a)(this,e),this.getSectionData=function(e){return n(148).find((function(t){return t.dataId===e}))},this.getTableOfContents=function(){return n(149)}},re=(n(150),function(e){var t=e.dataId,n=Object(c.useState)(void 0),i=Object(b.a)(n,2),a=i[0],r=i[1],o=Object(c.useState)(!1),s=Object(b.a)(o,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){d(!1),setTimeout((function(){r(ae.getSectionData(t)),d(!0)}),200)}),[t]),Object(G.jsx)(ce.a,{in:l,timeout:{enter:500,exit:200},children:Object(G.jsxs)(E.a,{display:"flex",flexDirection:"column",children:[Object(G.jsx)(T.a,{variant:"h3",component:"div",sx:{alignSelf:"center"},children:null===a||void 0===a?void 0:a.title}),Object(G.jsx)(T.a,{variant:"subtitle1",component:"div",sx:{alignSelf:"center"},gutterBottom:!0,children:null===a||void 0===a?void 0:a.subTitle}),Object(G.jsx)(T.a,{variant:"body1",component:"div",children:null===a||void 0===a?void 0:a.content})]})})}),oe=n(110),se=n.n(oe),le=n(111),de=n.n(le),je=(n(151),n(223)),ue=n(246),be=function(e){var t=e.selectSection,n=Object(c.useState)(),i=Object(b.a)(n,2),a=i[0],r=i[1];Object(c.useEffect)((function(){r(ae.getTableOfContents())}),[]);var o=function e(t){return Object(G.jsx)(je.a,{nodeId:t.id,label:t.name,children:t.children?t.children.map((function(t){return e(t)})):null},t.id)};return Object(G.jsx)(ue.a,{"aria-label":"Knowledge Center navigator",defaultCollapseIcon:Object(G.jsx)(se.a,{}),defaultExpandIcon:Object(G.jsx)(de.a,{}),onNodeSelect:function(e,n){t(+n)},sx:{height:240,flexGrow:1,maxWidth:400,overflowY:"auto"},children:null===a||void 0===a?void 0:a.map((function(e){return o(e)}))})},he=function(e){var t=Object(c.useState)(0),n=Object(b.a)(t,2),i=n[0],a=n[1];return Object(G.jsxs)(j.a,{container:!0,xs:12,spacing:1,component:w.a,sx:{marginLeft:0,marginTop:0},children:[Object(G.jsx)(j.a,{item:!0,xs:3,sx:{borderRight:"grey solid 1px"},children:Object(G.jsx)(be,{selectSection:function(e){a(e)}})}),Object(G.jsx)(j.a,{item:!0,xs:9,children:Object(G.jsx)(re,{dataId:i})})]})},Oe=n(112),xe=n(215),me=n(245),fe=n(216),pe=n(217),ge=n(218),ve=(n(152),n(153),n(34)),Ce=n.n(ve),ye=n.p+"static/media/star_marker.0d2f81f4.png",Se=n(241);function Ie(e){var t=Object(c.useState)(),n=Object(b.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){a(e.system)}),[e.system]),Object(G.jsx)(X.a,{sx:{minWidth:275},children:Object(G.jsxs)(J.a,{children:[Object(G.jsx)(T.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"System Information"}),Object(G.jsx)(T.a,{component:"span",variant:"body2",children:Object(G.jsxs)(j.a,{container:!0,spacing:12,children:[Object(G.jsxs)(j.a,{item:!0,xs:6,children:["Name: ",null===i||void 0===i?void 0:i.name]}),Object(G.jsxs)(j.a,{item:!0,xs:6,children:["Planet Count: ",null===i||void 0===i?void 0:i.planetCount]})]})})]})})}var Ee=n(49),Te=n.n(Ee),Ne=n(70),we=n(82);n(163);we.a.initializeApp({apiKey:"AIzaSyBTspdBxs-o9ojlzvBGqd2Z6CjtYViHtHU",authDomain:"coriolis-companion.firebaseapp.com",projectId:"coriolis-companion",storageBucket:"coriolis-companion.appspot.com",messagingSenderId:"822472227525",appId:"1:822472227525:web:cef77815cf94284b3a0eac",measurementId:"G-26XHGZ6X3X"});var Le=we.a.firestore(),ke=(we.a,new function e(){Object(O.a)(this,e),this.getSystemDetails=function(){var e=Object(Ne.a)(Te.a.mark((function e(t){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le.collection("Systems").doc(t).get().then((function(e){return e.data()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getSystems=Object(Ne.a)(Te.a.mark((function e(){return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le.collection("Systems").get().then((function(e){return e.docs.map((function(e){return e.data()}))})));case 1:case"end":return e.stop()}}),e)})))}),Ae=Ce.a.icon({iconSize:[15,15],iconUrl:ye});Ce.a.Marker.prototype.options.icon=Ae;var _e=new ve.LatLngBounds([52,-153],[83,0]);function Re(){Object(Oe.b)("click",(function(e){console.log(e.latlng)}));return null}function Be(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(),r=Object(b.a)(a,2),o=r[0],s=r[1];return Object(c.useEffect)((function(){ke.getSystems().then((function(e){s(e)}))}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(Se.a,{id:"mapid",children:Object(G.jsxs)(xe.a,{center:[74,-83],bounds:_e,zoom:3,scrollWheelZoom:!0,children:[Object(G.jsx)(me.a,{url:"/Coriolis_Companion/assets/maptiles/{z}-{x}-{y}.jpg"}),Object(G.jsx)(Re,{}),null===o||void 0===o?void 0:o.map((function(e,t){return Object(G.jsx)(fe.a,{position:[e.lat_long.latitude,e.lat_long.longitude],eventHandlers:{click:function(t){i(e)}},children:Object(G.jsx)(pe.a,{children:Object(G.jsxs)("span",{children:["A pretty CSS3 popup. ",Object(G.jsx)("br",{})," Easily customizable."]})})},"marker-".concat(t))})),Object(G.jsx)(ge.a,{children:function(e){return e.setMaxZoom(5),e.setMinZoom(3),e.setMaxBounds(_e),null}})]})}),Object(G.jsx)(Se.a,{children:Object(G.jsx)(Ie,{system:n})})]})}var ze=n(242),Me=new function e(){Object(O.a)(this,e),this.getNames=function(){var e=Object(Ne.a)(Te.a.mark((function e(t){var n,i;return Te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=fetch("".concat("https://randomuser.me/api/","?nat=TR&gender=").concat("m"===t?"male":"female")),e.next=3,n;case 3:return i=e.sent,e.abrupt("return",i.json().then((function(e){return{firstName:e.results[0].name.first,lastName:e.results[0].name.last}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRandomQuote=function(){var e=["That which cannot be seen follows you.","Arrash... please!","This isn't any ordinary accelerator pistol."];return e[Math.floor(Math.random()*e.length)]}};n(156);function Ge(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),i=n[0],a=n[1];Object(c.useEffect)((function(){a(Me.getRandomQuote())}),[]);return Object(G.jsxs)(X.a,{sx:{minWidth:275},children:[Object(G.jsxs)(J.a,{children:[Object(G.jsx)(T.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Quote of the Day"}),Object(G.jsx)(T.a,{variant:"body2",children:i})]}),Object(G.jsx)(ze.a,{children:Object(G.jsx)(y.a,{variant:"contained",onClick:function(){a(Me.getRandomQuote())},children:"Generate Quote"})})]})}n(157);function Pe(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){Me.getNames("m").then((function(e){i("".concat(e.firstName," ").concat(e.lastName))}))}),[]);return Object(G.jsxs)(X.a,{sx:{minWidth:275},children:[Object(G.jsxs)(J.a,{children:[Object(G.jsx)(T.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Generated Name"}),Object(G.jsx)(T.a,{variant:"body2",children:n})]}),Object(G.jsx)(ze.a,{children:Object(G.jsx)(y.a,{variant:"contained",onClick:function(){Me.getNames("m").then((function(e){i("".concat(e.firstName," ").concat(e.lastName))}))},children:"Generate Name"})})]})}var De=[{path:"/",name:"Home Page",component:te,exact:!0},{path:"/tools",name:"Tools Page",component:function(e){return Object(G.jsxs)(j.a,{container:!0,spacing:1,children:[Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(Pe,{})}),Object(G.jsx)(j.a,{item:!0,xs:6,children:Object(G.jsx)(Ge,{})}),Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(Be,{})})]})},exact:!0},{path:"/bazaar",name:"Bazaar Page",component:ee,exact:!0},{path:"/knowledge-center",name:"Knowledge Center Page",component:he,exact:!0},{path:"/Icons",name:"Icons Page",component:ie,exact:!0}],Ve=n(243),He=n(244),We=(n(158),function(){return Object(G.jsx)(E.a,{sx:{flexGrow:1},children:Object(G.jsx)(Ve.a,{position:"static",children:Object(G.jsxs)(He.a,{children:[Object(G.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Coriolis Companion"}),Object(G.jsx)(y.a,{color:"inherit",component:l.b,to:"/",children:"Home"}),Object(G.jsx)(y.a,{color:"inherit",component:l.b,to:"/tools",children:"Tools"}),Object(G.jsx)(y.a,{color:"inherit",component:l.b,to:"/bazaar",children:"Bazaar"}),Object(G.jsx)(y.a,{color:"inherit",component:l.b,to:"/knowledge-center",children:"Knowledge Center"}),Object(G.jsx)(y.a,{color:"inherit",component:l.b,to:"/Icons",children:"Icons"})]})})})}),Fe=function(){return Object(c.useEffect)((function(){}),[]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("div",{className:"stars"}),Object(G.jsx)("div",{className:"twinkling"}),Object(G.jsx)("div",{className:"clouds"}),Object(G.jsx)(Se.a,{fixed:!0,sx:{zIndex:10,position:"relative"},children:Object(G.jsxs)(l.a,{basename:"/Coriolis_Companion",children:[Object(G.jsx)(We,{}),Object(G.jsx)(d.c,{children:De.map((function(e,t){return Object(G.jsx)(d.a,{path:e.path,exact:e.exact,render:function(t){return Object(G.jsx)(e.component,Object(s.a)(Object(s.a)({name:e.name},t),e.props))}},t)}))})]})})]})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,247)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},Ue=n(114),qe=n(55),Qe=Object(Ue.a)({palette:{primary:{main:"#334B48"},secondary:{main:"#19857B"},error:{main:qe.a.A400}}}),Ze=n(226),Xe=n(219);o.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsxs)(Ze.a,{theme:Qe,children:[Object(G.jsx)(Xe.a,{}),Object(G.jsx)(Fe,{})]})}),document.getElementById("root")),Ye()}},[[162,1,2]]]);
//# sourceMappingURL=main.3250a216.chunk.js.map