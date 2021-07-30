(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(7),s=n.n(r),c=(n(15),n(2)),u=(n(16),n(17),n(18),n(0));var l=function(){return Object(u.jsx)("div",{className:"loader",children:"Loading..."})},o=Object(a.createContext)(),b=o;o.Provider;var f=function(){var e=Object(a.useContext)(b),t=e.setStart,n=e.gameConfig,i=e.setGameConfig,r=Object(a.useState)(n.width),s=Object(c.a)(r,2),o=s[0],f=s[1],h=Object(a.useState)(n.height),j=Object(c.a)(h,2),d=j[0],m=j[1],v=Object(a.useState)(16),p=Object(c.a)(v,2),O=p[0],g=p[1],x=Object(a.useState)(!1),y=Object(c.a)(x,2),w=y[0],S=y[1],C=Object(a.useRef)(),L=Object(a.useRef)(),N=Object(a.useRef)(),k=Object(a.useRef)();return Object(a.useEffect)((function(){f(n.width),m(n.height),C.current.value=n.width,L.current.value=n.height,N.current.value=n.mines,k.current.checked=n.superman}),[]),Object(a.useEffect)((function(){g(o*d)}),[o,d]),Object(a.useEffect)((function(){w&&t(!0)}),[w,t]),Object(u.jsxs)("div",{"data-testid":"menu",className:"menu page",children:[Object(u.jsxs)("form",{name:"menu-options",onSubmit:function(e){var t={width:o,height:d,mines:Number(N.current.value),superman:k.current.checked};i(t),S(!0),e.preventDefault()},children:[Object(u.jsx)("h2",{children:"Minesweeper"}),Object(u.jsx)("label",{htmlFor:"width",children:"Width"}),Object(u.jsx)("input",{ref:C,onChange:function(e){f(Number(e.currentTarget.value))},type:"number",id:"width",name:"width",min:"4",max:"300",step:"1",required:!0}),Object(u.jsx)("label",{htmlFor:"height",children:"Height"}),Object(u.jsx)("input",{ref:L,onChange:function(e){m(Number(e.currentTarget.value))},type:"number",id:"height",name:"height",min:"4",max:"300",step:"1",required:!0}),Object(u.jsx)("label",{htmlFor:"mines",children:"Mines"}),Object(u.jsx)("input",{ref:N,type:"number",id:"mines",name:"mines",min:"1",max:"".concat(O),step:"1",required:!0}),Object(u.jsx)("label",{htmlFor:"superman",children:"Superman Mode"}),Object(u.jsx)("input",{ref:k,type:"checkbox",id:"superman",name:"superman"}),Object(u.jsx)("div",{className:"btnContainer",children:w?Object(u.jsx)(l,{}):Object(u.jsx)("button",{type:"submit",children:"START"})})]}),Object(u.jsxs)("div",{className:"tutorial",children:[Object(u.jsx)("p",{children:"to place a flag"}),Object(u.jsx)("p",{children:"keyboard: shift+leftClick"}),Object(u.jsx)("p",{children:"mobile: long press"})]})]})};n(20),n(21);var h=function(e){var t=e.flags,n=e.endGame;return Object(u.jsxs)("header",{className:"gameInfo",children:[Object(u.jsx)("span",{children:"flags: ".concat(t,"\ud83d\udea9")}),Object(u.jsx)("button",{onClick:n,children:"End Game"})]})};n(22),n(23);var j=function(e){var t,n=e.tile,a=e.superman,i=e.reveal,r=e.flag,s=function(e,t,n){var a,i;return[function(){i=!1,a=new Date},function(){var r=new Date-a;i||(r>=n?t():e())},function(){i=!0}]}(i,r,400),l=Object(c.a)(s,3),o=l[0],b=l[1],f=l[2];return Object(u.jsxs)("div",{className:"tile",onClick:function(e){e.shiftKey?r():i(),e.preventDefault()},onTouchStart:o,onTouchEnd:b,onTouchMove:f,children:[Object(u.jsx)("span",{className:"content",children:(t=n.value,0===t?"":"bomb"===t?"\ud83d\udca3":"number"===typeof t&&t>0?t:void 0)}),"visible"!==n.state?Object(u.jsx)("span",{className:"cover ".concat(a?"transparent":null),children:"flag"===n.state?"\ud83d\udea9":null}):null]})};var d=function(e){var t=e.game,n=e.update;return Object(u.jsx)("div",{className:"gameBoard",children:Object(u.jsx)("table",{cellSpacing:"0",cellPadding:"0",children:Object(u.jsx)("tbody",{children:t.board.map((function(e,a){return Object(u.jsx)("tr",{children:e.map((function(e,i){return Object(u.jsx)("td",{children:Object(u.jsx)(j,{tile:e,superman:t.superman,reveal:function(){t.reveal(i,a),n()},flag:function(){t.flag(i,a),n()}})},i)}))},a)}))})})})},m=n(6),v=n(10),p=n(8),O=n(9);var g=function(){function e(t){Object(p.a)(this,e);var n=t.width,a=t.height,i=t.mines,r=t.superman;this.flagsLeft=i,this.superman=r,this.minesLeft=i,this.board=function(e,t,n){return new Array(t).fill(0).map((function(){return new Array(e).fill(0).map((function(){return n()}))}))}(n,a,(function(){return{state:"hidden",value:0}}));var s=this.placeMinesRandomly(i);this.calculateTileValues(s)}return Object(O.a)(e,[{key:"reveal",value:function(e,t){var n=this.board[t][e];if("visible"!==n.state&&"flag"!==n.state)if("bomb"===n.value)n.state="visible",this.onLose();else if("number"===typeof n.value&&n.value>0)n.state="visible";else for(var a=[[e,t]];a.length>0;){var i=a.pop();r.apply(void 0,[this].concat(Object(v.a)(i),[a]))}function r(e,t,n,a){var i=e.board;if(!(t<0||t>=i[0].length)&&!(n<0||n>=i.length)){var r=i[n][t];"bomb"!==r.value&&"visible"!==r.state&&("flag"===r.state&&e.flagsLeft++,r.state="visible",0===r.value&&(a.push([t-1,n-1]),a.push([t,n-1]),a.push([t+1,n-1]),a.push([t-1,n]),a.push([t+1,n]),a.push([t-1,n+1]),a.push([t,n+1]),a.push([t+1,n+1])))}}}},{key:"flag",value:function(e,t){var n=this.board[t][e];if("visible"!==n.state)return"flag"===n.state?("bomb"===n.value&&this.minesLeft++,n.state="hidden",void this.flagsLeft++):void(0!==this.flagsLeft?(n.state="flag",this.flagsLeft--,"bomb"===n.value&&(this.minesLeft--,0===this.minesLeft&&this.onWin())):this.noFlags())}},{key:"placeMinesRandomly",value:function(e){for(var t=[],n=e;n>0;){var a=Math.floor(Math.random()*this.board[0].length),i=Math.floor(Math.random()*this.board.length);"bomb"!==this.board[i][a].value&&(this.board[i][a].value="bomb",n--,t.push({x:a,y:i}))}return t}},{key:"calculateTileValues",value:function(e){var t,n=this.board.length,a=this.board[0].length,i=[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}],r=Object(m.a)(e);try{for(r.s();!(t=r.n()).done;){var s,c=t.value,u=Object(m.a)(i);try{for(u.s();!(s=u.n()).done;){var l=s.value,o=l.x+c.x,b=l.y+c.y;if(!(o<0||o>=a)&&!(b<0||b>=n)){var f=this.board[b][o];"bomb"!==f.value&&f.value++}}}catch(h){u.e(h)}finally{u.f()}}}catch(h){r.e(h)}finally{r.f()}}}]),e}();var x=function(){var e=Object(a.useContext)(b),t=e.setStart,n=e.gameConfig,i=Object(a.useState)((function(){return new g(n)})),r=Object(c.a)(i,1)[0];r.onLose=function(){return setTimeout((function(){alert("You Lost!"),t(!1)}),200)},r.onWin=function(){return setTimeout((function(){alert("You Win!"),t(!1)}),200)},r.noFlags=function(){return alert("No Flags Left!")};var s=Object(a.useState)(0),l=Object(c.a)(s,2),o=l[0],f=l[1];return Object(u.jsxs)("div",{className:"game page","data-testid":"game",children:[Object(u.jsx)(h,{flags:r.flagsLeft,endGame:function(){t(!1)}}),Object(u.jsx)(d,{game:r,update:function(){f(1-o)}})]})};var y=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)({width:30,height:16,mines:99,superman:!1}),s=Object(c.a)(r,2),l=s[0],o=s[1];return Object(u.jsx)(b.Provider,{value:{start:n,setStart:i,gameConfig:l,setGameConfig:o},children:Object(u.jsx)("div",{className:"App",children:n?Object(u.jsx)(x,{}):Object(u.jsx)(f,{})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),w()}],[[24,1,2]]]);
//# sourceMappingURL=main.d6f0ab13.chunk.js.map