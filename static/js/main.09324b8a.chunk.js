(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(5),o=n.n(c),r=(n(12),n(1));var s=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),i=t[0],c=t[1],o=Object(a.useState)(10),s=Object(r.a)(o,2),u=s[0],l=s[1],d=Object(a.useState)(u),m=Object(r.a)(d,2),f=m[0],g=m[1],p=Object(a.useState)(!1),b=Object(r.a)(p,2),h=b[0],O=b[1],w=Object(a.useState)(!1),j=Object(r.a)(w,2),v=j[0],E=j[1],y=Object(a.useState)(0),C=Object(r.a)(y,2),L=C[0],R=C[1],S=n(13);return Object(a.useEffect)((function(){h&&f>0?setTimeout((function(){g((function(e){return e-1}))}),1e3):0===f&&(O(!1),E(!0))}),[f,h]),{isTimeRunning:h,timeRemaining:f,gameLength:u,updateGameLength:function(e){g(e),l(e)},startGame:function(){E(!1),O(!0),g(u),R(0);var e=S({exactly:1,maxLength:8});c(e.toString().toUpperCase())},word:i,wordCompleted:function(){R((function(e){return e+1}));var e=S({exactly:1,maxLength:8});c(e.toString().toUpperCase())},wordCount:L,displayResults:v}},u=n(6);var l=function(e){var t=e.word.split(""),n=Object(a.useState)(""),c=Object(r.a)(n,2),o=c[0],s=c[1],l=Object(a.useState)([]),d=Object(r.a)(l,2),m=d[0],f=d[1];document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("keydown",(function(e){var t=e.key.toUpperCase();-1!=="ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t)&&s(t)}))})),Object(a.useEffect)((function(){o!==t[m.length]||e.isDisabled||f((function(e){return[].concat(Object(u.a)(e),[o])})),s("")}),[o,m,t,e.isDisabled]),Object(a.useEffect)((function(){m.length===t.length&&0!==t.length&&(e.wordCompleted(),f([]))}),[m,t,e]),Object(a.useEffect)((function(){!1===e.displayResults&&f([])}),[e.displayResults]);var g=t.map((function(e,t){var n="";return t+1<=m.length&&(n="matched"),i.a.createElement("span",{key:e+t,id:e+t,className:n},e)})),p=null;return!0===e.displayResults&&(p=i.a.createElement("span",{id:"results"},e.wordCount," word",e.wordCount>1||!e.wordCount?"s ":" ","typed in ",e.gameLength," seconds")),i.a.createElement("div",{id:"game-display",className:e.isDisabled?"disabled":""},i.a.createElement("p",{id:"the-word",className:e.isDisabled?"disabled":""},g),p)};n(14);var d=function(e){var t=Object(a.useState)(10),n=Object(r.a)(t,2),c=n[0],o=n[1];function s(e){return c===e}Object(a.useEffect)((function(){e.updateGameLength(c)}),[e.isTimeRunning]);var u=[5,10,15,30].map((function(t){return i.a.createElement("button",{key:"time-".concat(t),className:"time ".concat(s(t)?"selected":""),onClick:function(){return function(t){e.updateGameLength(t),o(t)}(t)},disabled:e.isTimeRunning},t)}));return i.a.createElement("div",{className:"time-selector"},u)};n(15);var m=function(){var e=s(),t=e.isTimeRunning,n=e.timeRemaining,a=e.updateGameLength,c=e.gameLength,o=e.startGame,r=e.word,u=e.wordCompleted,m=e.wordCount,f=e.displayResults;return i.a.createElement("div",null,i.a.createElement("h1",null,"How fast do you type?"),i.a.createElement(l,{word:r,wordCompleted:u,isDisabled:!t,gameLength:c,displayResults:f,wordCount:m}),i.a.createElement("h4",null,"Time remaining: ",n),i.a.createElement(d,{updateGameLength:a,isTimeRunning:t}),i.a.createElement("button",{onClick:o,disabled:t},"Start"),i.a.createElement("h1",null,"Word count: ",m))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.09324b8a.chunk.js.map