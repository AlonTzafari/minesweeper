(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(7),s=n.n(r),c=(n(15),n(2)),u=(n(16),n(17),Object(a.createContext)()),l=u,o=(u.Provider,n(0));var b=function(){var e=Object(a.useContext)(l),t=e.setStart,n=e.gameConfig,i=e.setGameConfig,r=Object(a.useState)(n.width),s=Object(c.a)(r,2),u=s[0],b=s[1],h=Object(a.useState)(n.height),f=Object(c.a)(h,2),d=f[0],j=f[1],m=Object(a.useState)(16),v=Object(c.a)(m,2),p=v[0],O=v[1],g=Object(a.useRef)(),x=Object(a.useRef)(),y=Object(a.useRef)(),w=Object(a.useRef)();return Object(a.useEffect)((function(){b(n.width),j(n.height),g.current.value=n.width,x.current.value=n.height,y.current.value=n.mines,w.current.checked=n.superman}),[]),Object(a.useEffect)((function(){O(u*d)}),[u,d]),Object(o.jsxs)("div",{"data-testid":"menu",className:"menu page",children:[Object(o.jsxs)("form",{name:"menu-options",onSubmit:function(e){var n={width:u,height:d,mines:Number(y.current.value),superman:w.current.checked};i(n),t(!0),e.preventDefault()},children:[Object(o.jsx)("h2",{children:"Minesweeper"}),Object(o.jsx)("label",{htmlFor:"width",children:"Width"}),Object(o.jsx)("input",{ref:g,onChange:function(e){b(Number(e.currentTarget.value))},type:"number",id:"width",name:"width",min:"4",max:"300",step:"1",required:!0}),Object(o.jsx)("label",{htmlFor:"height",children:"Height"}),Object(o.jsx)("input",{ref:x,onChange:function(e){j(Number(e.currentTarget.value))},type:"number",id:"height",name:"height",min:"4",max:"300",step:"1",required:!0}),Object(o.jsx)("label",{htmlFor:"mines",children:"Mines"}),Object(o.jsx)("input",{ref:y,type:"number",id:"mines",name:"mines",min:"1",max:"".concat(p),step:"1",required:!0}),Object(o.jsx)("label",{htmlFor:"superman",children:"Superman Mode"}),Object(o.jsx)("input",{ref:w,type:"checkbox",id:"superman",name:"superman"}),Object(o.jsx)("div",{className:"btnContainer",children:Object(o.jsx)("button",{type:"submit",children:"START"})})]}),Object(o.jsxs)("div",{className:"tutorial",children:[Object(o.jsx)("p",{children:"to place a flag"}),Object(o.jsx)("p",{children:"keyboard: shift+leftClick"}),Object(o.jsx)("p",{children:"mobile: long press"})]})]})};n(19);var h=function(e){var t=e.flags,n=e.endGame;return Object(o.jsxs)("header",{className:"gameInfo",children:[Object(o.jsx)("span",{children:"flags: ".concat(t,"\ud83d\udea9")}),Object(o.jsx)("button",{onClick:n,children:"End Game"})]})};n(20),n(21);var f=function(e){var t,n=e.tile,a=e.superman,i=e.reveal,r=e.flag,s=function(e,t,n){var a,i;return[function(){i=!1,a=new Date},function(){var r=new Date-a;i||(r>=n?t():e())},function(){i=!0}]}(i,r,400),u=Object(c.a)(s,3),l=u[0],b=u[1],h=u[2];return Object(o.jsxs)("div",{className:"tile",onClick:function(e){e.shiftKey?r():i(),e.preventDefault()},onTouchStart:l,onTouchEnd:b,onTouchMove:h,children:[Object(o.jsx)("span",{className:"content",children:(t=n.value,0===t?"":"bomb"===t?"\ud83d\udca3":"number"===typeof t&&t>0?t:void 0)}),"visible"!==n.state?Object(o.jsx)("span",{className:"cover ".concat(a?"transparent":null),children:"flag"===n.state?"\ud83d\udea9":null}):null]})};var d=function(e){var t=e.game,n=e.update;return Object(o.jsx)("div",{className:"gameBoard",children:Object(o.jsx)("table",{cellSpacing:"0",cellPadding:"0",children:Object(o.jsx)("tbody",{children:t.board.map((function(e,a){return Object(o.jsx)("tr",{children:e.map((function(e,i){return Object(o.jsx)("td",{children:Object(o.jsx)(f,{tile:e,superman:t.superman,reveal:function(){t.reveal(i,a),n()},flag:function(){t.flag(i,a),n()}})},i)}))},a)}))})})})},j=n(6),m=n(10),v=n(8),p=n(9);var O=function(){function e(t){Object(v.a)(this,e);var n=t.width,a=t.height,i=t.mines,r=t.superman;this.flagsLeft=i,this.superman=r,this.minesLeft=i,this.board=function(e,t,n){return new Array(t).fill(0).map((function(){return new Array(e).fill(0).map((function(){return n()}))}))}(n,a,(function(){return{state:"hidden",value:0}}));var s=this.placeMinesRandomly(i);this.calculateTileValues(s)}return Object(p.a)(e,[{key:"reveal",value:function(e,t){var n=this.board[t][e];if("visible"!==n.state&&"flag"!==n.state)if("bomb"===n.value)n.state="visible",this.onLose();else if("number"===typeof n.value&&n.value>0)n.state="visible";else for(var a=[[e,t]];a.length>0;){var i=a.pop();r.apply(void 0,[this.board].concat(Object(m.a)(i),[a]))}function r(e,t,n,a){if(!(t<0||t>=e[0].length)&&!(n<0||n>=e.length)){var i=e[n][t];"bomb"!==i.value&&("number"===typeof i.value&&i.value>0?i.state="visible":"visible"!==i.state&&(i.state="visible",a.push([t-1,n]),a.push([t+1,n]),a.push([t,n-1]),a.push([t,n+1])))}}}},{key:"flag",value:function(e,t){var n=this.board[t][e];if("visible"!==n.state)return"flag"===n.state?(n.state="hidden",void this.flagsLeft++):void(0!==this.flagsLeft?(n.state="flag",this.flagsLeft--,"bomb"===n.value&&(this.minesLeft--,0===this.minesLeft&&this.onWin())):this.noFlags())}},{key:"placeMinesRandomly",value:function(e){for(var t=[],n=e;n>0;){var a=Math.floor(Math.random()*this.board[0].length),i=Math.floor(Math.random()*this.board.length);"bomb"!==this.board[i][a].value&&(this.board[i][a].value="bomb",n--,t.push({x:a,y:i}))}return t}},{key:"calculateTileValues",value:function(e){var t,n=this.board.length,a=this.board[0].length,i=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],r=Object(j.a)(e);try{for(r.s();!(t=r.n()).done;){var s,c=t.value,u=Object(j.a)(i);try{for(u.s();!(s=u.n()).done;){var l=s.value,o=l.x+c.x,b=l.y+c.y;if(!(o<0||o>=a)&&!(b<0||b>=n)){var h=this.board[b][o];"bomb"!==h.value&&h.value++}}}catch(f){u.e(f)}finally{u.f()}}}catch(f){r.e(f)}finally{r.f()}}}]),e}();var g=function(){var e=Object(a.useContext)(l),t=e.setStart,n=e.gameConfig,i=Object(a.useState)((function(){return new O(n)})),r=Object(c.a)(i,1)[0];r.onLose=function(){return setTimeout((function(){alert("You Lost!"),t(!1)}),200)},r.onWin=function(){return setTimeout((function(){alert("You Win!"),t(!1)}),200)},r.noFlags=function(){return alert("No Flags Left!")};var s=Object(a.useState)(0),u=Object(c.a)(s,2),b=u[0],f=u[1];return Object(o.jsxs)("div",{className:"page","data-testid":"game",children:[Object(o.jsx)(h,{flags:r.flagsLeft,endGame:function(){t(!1)}}),Object(o.jsx)(d,{game:r,update:function(){f(1-b)}})]})};var x=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)({width:8,height:8,mines:8,superman:!1}),s=Object(c.a)(r,2),u=s[0],h=s[1];return Object(o.jsx)(l.Provider,{value:{start:n,setStart:i,gameConfig:u,setGameConfig:h},children:Object(o.jsx)("div",{className:"App",children:n?Object(o.jsx)(g,{}):Object(o.jsx)(b,{})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),y()}],[[22,1,2]]]);
//# sourceMappingURL=main.07c9820a.chunk.js.map