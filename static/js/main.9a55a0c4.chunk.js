(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),s=(a(17),a(3)),l=a.n(s),i=a(6),u=a(2),m=a(1),d=a.n(m),f=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],p=function(){var e=Math.floor(Math.random()*f.length);return f[e]},h=a(7),g=a(8),v=a(10),b=a(9),E=a(11),w=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){d.a.Modal.init(this.Modal,{inDuration:250,outDuration:250,opacity:.8,dismissible:!1,startingTop:"4%",endingTop:"10%"})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{ref:function(t){return e.Modal=t},id:"modal1",className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h4",{className:"modal-title",style:{color:this.props.color}},"\u041d\u043e\u0432\u043e\u0441\u0442\u044c"),o.a.createElement("p",{className:"modal-p",style:{color:this.props.color}},this.props.text)),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("a",{href:"/#",style:{color:this.props.color},className:"modal-close waves-effect waves-red btn-flat"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))))}}]),t}(n.Component),y=function(e){var t=e.title,a=void 0===t?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438":t,n=e.color,r=void 0===n?"#fff":n,c=e.fullText,s=void 0===c?"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c":c,l=e.pText,i=void 0===l?"":l,u=e.quotes,m=void 0===u?"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c":u,d=e.button,f=void 0===d?"":d,p=e.generateQuotes,h=void 0===p?function(){}:p;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("style",null,"body { background-color: ".concat(r,"; }")),o.a.createElement("div",{className:"row center"},o.a.createElement("div",{className:"col s12 m10 l8 xl8 offset-m1 offset-s1 offset-l2 offset-xl2"},o.a.createElement("div",{className:"card lighten-5"},o.a.createElement("div",{className:"card-content white-text"},o.a.createElement("span",{className:"card-title",style:{color:r}},a),o.a.createElement("p",{ref:i,className:"quotes-p",style:{color:r}},o.a.createElement("span",{className:"mini-icon modal-trigger waves-light","data-target":"modal1"},"\u270e"),m,o.a.createElement("span",{className:"mini-icon modal-trigger next waves-light","data-target":"modal1"},"\u270e"))),o.a.createElement("div",{className:"card-action"},o.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red favicon",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(s))},o.a.createElement("i",{style:{backgroundColor:r},className:"fab fa-twitter"})),o.a.createElement("a",{href:"/#",ref:f,onClick:h,className:"waves-effect btn btn-size",style:{backgroundColor:r}},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c")),o.a.createElement(w,{color:r,text:s}))))))};setTimeout((function(){d.a.toast({html:"<span>\u0427\u0442\u043e \u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u043d\u043e\u0432\u043e\u0441\u0442\u044c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 &#9998;</span>",displayLength:6e4,classes:"rounded"})}),5e3),setTimeout((function(){d.a.toast({html:'\u0427\u0442\u043e \u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u0430 github \u043d\u0430\u0436\u043c\u0438\u0442\u0435 <a href="https://github.com/MBfilipp" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>',displayLength:6e4,classes:"rounded"})}),1e4);var x=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)("\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),r=Object(u.a)(a,2),c=r[0],s=r[1],m=Object(n.useState)("orange"),d=Object(u.a)(m,2),f=d[0],h=d[1],g=Object(n.useState)("\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),v=Object(u.a)(g,2),b=v[0],E=v[1],w=function(){var a=Object(i.a)(l.a.mark((function a(n){var o,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),e.current.classList.toggle("opacity"),t.current.classList.toggle("disabled"),setTimeout((function(){e.current.classList.toggle("opacity"),t.current.classList.toggle("disabled")}),1e3),a.prev=4,a.next=7,fetch("https://fish-text.ru/get?format=json&number=4&type=sentence",{method:"GET"});case 7:return o=a.sent,a.next=10,o.json();case 10:r=a.sent,E(r.text),setTimeout((function(){var e,t,a;s((e=r.text,t=50,a="...",e.length>t?e.slice(0,t)+a:e))}),700),h(p()),a.next=20;break;case 16:throw a.prev=16,a.t0=a.catch(4),console.log(a.t0.message),a.t0;case 20:case"end":return a.stop()}}),a,null,[[4,16]])})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement(y,{title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",fullText:b,color:f,pText:e,generateQuotes:w,button:t,quotes:c})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.9a55a0c4.chunk.js.map