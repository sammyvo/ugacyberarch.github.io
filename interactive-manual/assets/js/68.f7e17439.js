(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{205:function(t,s,n){},363:function(t,s,n){},434:function(t,s,n){"use strict";var e=n(363);n.n(e).a},556:function(t,s,n){"use strict";n.r(s);n(205);var e={props:["answers"]},o=(n(434),n(1)),a=Object(o.a)(e,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"results"},[n("a",{staticClass:"close hvr-grow",on:{click:function(s){t.$emit("goto","menu")}}},[n("i",{staticClass:"far fa-times-circle"})]),n("h1",[t._v("Results")]),0==t.answers.total?n("div",[n("button",{staticClass:"next",on:{click:function(s){t.$emit("goto","play")}}},[t._v("\n      Try Again\n    ")])]):t.answers.correct.length==t.answers.total?n("div",[n("p",[t._v("Awesome! You were never hooked!")]),n("p",{staticClass:"score"},[n("span",[t._v(t._s(t.answers.correct.length)+" of "+t._s(t.answers.total))]),t._v(" correct\n    ")]),n("button",{staticClass:"next",on:{click:function(s){t.$emit("goto","play")}}},[t._v("\n      Play Again\n    ")])]):n("div",[n("p",[t._v("Uh-oh. You took the bait!")]),n("p",{staticClass:"score"},[n("span",[t._v(t._s(t.answers.correct.length)+" of "+t._s(t.answers.total))]),t._v(" correct\n    ")]),n("button",{staticClass:"next",on:{click:function(s){t.$emit("goto","review")}}},[t._v("\n      Show Me\n    ")])])])},[],!1,null,"35d1e749",null);s.default=a.exports}}]);