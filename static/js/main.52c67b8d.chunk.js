(this.webpackJsonptry=this.webpackJsonptry||[]).push([[0],{15:function(s,l,W){"use strict";W.r(l);var t=W(0),e=W(1),I=W.n(e),a=W(5),h=W.n(a),n=(W(4),W(6)),o=W(7),c=W(2),i=W(9),d=W(8),r=["Linus Torvalds","Harold Abelson","John Woods","Martin Fowler","Larry Niven"],u=["\u201cTalk is cheap. Show me the code.\u201d","\u201cPrograms must be written for people to read, and only incidentally for machines to execute.\u201d","\u201cAlways code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live\u201d","\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d","\u201cThat's the thing about people who think they hate computers. What they really hate is lousy programmers.\u201d"],A=function(s){Object(i.a)(W,s);var l=Object(d.a)(W);function W(s){var t;return Object(n.a)(this,W),(t=l.call(this,s)).state={author:r[0],quote:u[0]},t.handleClick=t.handleClick.bind(Object(c.a)(t)),t}return Object(o.a)(W,[{key:"handleClick",value:function(){var s=Math.floor(Math.random()*u.length);this.setState({author:r[s],quote:u[s]})}},{key:"render",value:function(){return Object(t.jsxs)("div",{id:"quote-box",children:[Object(t.jsx)("p",{id:"text",className:"box1",children:this.state.quote}),Object(t.jsx)("span",{id:"author",className:"box2",children:this.state.author}),Object(t.jsxs)("div",{class:"container",children:[Object(t.jsx)("a",{className:"box3",href:"twitter.com/intent/tweet",id:"tweet-quote",target:"_blank",children:Object(t.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAFWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7lWs7js058cAAAD/dFJOUwAC/QX8BPv+AQP6+Af57QoOKSAL9uoiBhaCEODvNBHoGvFoDPUu1OvzEuW/3/ce2iHi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",height:"40",alt:"twitter logo"})}),Object(t.jsx)("input",{type:"button",id:"new-quote",value:"new quote",className:"box4",onClick:this.handleClick})]})]})}}]),W}(I.a.Component);h.a.render(Object(t.jsx)(I.a.StrictMode,{children:Object(t.jsx)(A,{})}),document.getElementById("root"))},4:function(s,l,W){}},[[15,1,2]]]);
//# sourceMappingURL=main.52c67b8d.chunk.js.map