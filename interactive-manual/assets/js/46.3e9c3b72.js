(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{209:function(t,r,e){"use strict";function n(t){return function(){var r=this,e=arguments;return new Promise(function(n,i){var o=t.apply(r,e);function a(t,r){try{var e=o[t](r),a=e.value}catch(t){return void i(t)}e.done?n(a):Promise.resolve(a).then(s,c)}function s(t){a("next",t)}function c(t){a("throw",t)}s()})}}e.d(r,"a",function(){return n})},210:function(t,r){!function(r){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"==typeof t,u=r.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=r.regeneratorRuntime=l?t.exports:{}).wrap=x;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(S([])));m&&m!==n&&i.call(m,a)&&(v=m);var w=L.prototype=k.prototype=Object.create(v);b.prototype=w.constructor=L,L.constructor=b,L[c]=b.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[s]=function(){return this},u.AsyncIterator=O,u.async=function(t,r,e,n){var i=new O(x(t,r,e,n));return u.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},u.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;G(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}}}function x(t,r,e,n){var i=r&&r.prototype instanceof k?r:k,o=Object.create(i.prototype),a=new N(n||[]);return o._invoke=function(t,r,e){var n=f;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var s=j(a,e);if(s){if(s===g)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var c=_(t,r,e);if("normal"===c.type){if(n=e.done?p:h,c.arg===g)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n=p,e.method="throw",e.arg=c.arg)}}}(t,e,a),o}function _(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function k(){}function b(){}function L(){}function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function O(t){var r;this._invoke=function(e,n){function o(){return new Promise(function(r,o){!function r(e,n,o,a){var s=_(t[e],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,o,a)},function(t){r("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},a)}a(s.arg)}(e,n,r,o)})}return r=r?r.then(o,o):o()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=_(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},507:function(t,r,e){"use strict";e.r(r);e(210);var n,i=e(209),o={methods:{sleep:function(t){return new Promise(function(r){return setTimeout(r,t)})},progressBar:(n=Object(i.a)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=2;case 1:return document.getElementById("svg_69").style.width=r,r+=5,t.next=5,this.sleep(2e3);case 5:if(!(r>72)){t.next=9;break}return r=0,t.next=9,this.sleep(2e3);case 9:t.next=1;break;case 11:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},mounted:function(){this.$nextTick(function(){this.progressBar()})}},a=e(0),s=Object(a.a)(o,function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("svg",{attrs:{width:"276",height:"186",xmlns:"http://www.w3.org/2000/svg"}},[r("g",[r("title",[this._v("Update Screen")]),r("rect",{attrs:{fill:"#fff",id:"canvas_background",height:"188",width:"278",y:"-1",x:"-1"}}),r("g",{attrs:{display:"none",overflow:"visible",y:"0",x:"0",height:"100%",width:"100%",id:"canvasGrid"}},[r("rect",{attrs:{fill:"url(#gridpattern)","stroke-width":"0",y:"0",x:"0",height:"100%",width:"100%"}})])]),r("g",[r("title",[this._v("MacOs Update ")]),r("g",{attrs:{stroke:"null",id:"svg_38"}},[r("g",{attrs:{stroke:"null",transform:"matrix(3.109119313250213,0,0,3.109119313250213,-7421.313990900875,-4935.579907223614) ",id:"svg_23",display:"inline"}},[r("g",{attrs:{stroke:"null",id:"svg_24","clip-rule":"evenodd","fill-rule":"evenodd",transform:"matrix(0.21167,0,0,0.21167,-2.392,-13.258) "}},[r("rect",{attrs:{stroke:"null",x:"11239.466892",y:"7448.367001",id:"svg_25",fill:"none",width:"512",height:"512"}}),r("rect",{attrs:{stroke:"null",id:"svg_26",fill:"#000000",y:"7791.969001",x:"11328.584892",width:"332.046",height:"14.309"}}),r("path",{attrs:{stroke:"null",id:"svg_27",fill:"#1a1a1a",d:"m11334.352892,7584.721001l320.496,0c3.172,0 5.768,2.596 5.768,5.768l0,205.45c0,3.173 -2.596,5.769 -5.768,5.769l-320.496,0c-3.173,0 -5.769,-2.596 -5.769,-5.769l0,-205.45c0,-3.172 2.596,-5.768 5.769,-5.768z"}}),r("g",{attrs:{stroke:"null",id:"svg_28"}},[r("rect",{attrs:{stroke:"#000000",id:"svg_29",fill:"black","stroke-width":"0.125102",y:"7596.889001",x:"11339.198892",width:"312.421",height:"194.209"}},[r("text",{attrs:{stroke:"null",id:"svg_30",fill:"blue","font-size":"35","font-family":"Verdana",y:"50",x:"0"}},[this._v("Hello")])])]),r("rect",{attrs:{stroke:"null",id:"svg_31",fill:"#cccccc",y:"7806.220001",x:"11290.326892",width:"410.281",height:"10.95"}}),r("path",{attrs:{stroke:"null",id:"svg_32",fill:"#999999",d:"m11467.150892,7806.220001l56.632,0l0,1.706a3.844,3.844 0 0 1 -3.833,3.833l-48.967,0a3.844,3.844 0 0 1 -3.832,-3.833l0,-1.706z"}}),r("path",{attrs:{stroke:"null",id:"svg_33",fill:"#b3b3b3",d:"m11495.466892,7817.170001l204.626,0a0.17,0.17 0 0 1 0.17,0.17c0,3.18 -14.04,5.969 -22.38,6.673l-364.832,0c-8.339,-0.704 -22.38,-3.492 -22.38,-6.673c0,-0.093 0.077,-0.17 0.17,-0.17l204.626,0z"}}),r("g",{attrs:{stroke:"null",id:"svg_34"}},[r("circle",{attrs:{stroke:"null",cx:"7108.01858",cy:"-1506.561282",id:"svg_35",fill:"#424242",transform:"matrix(1.30067,1.32352,-1.32373,1.30047,255.134,142.182) ",r:"1.2"}}),r("circle",{attrs:{stroke:"null",cx:"9183.232876",cy:"-1946.385573",id:"svg_36",fill:"#595959",transform:"matrix(1.00675,1.02443,-1.02459,1.00659,255.134,142.182) ",r:"1.2"}}),r("path",{attrs:{stroke:"null",id:"svg_37",fill:"#636363",d:"m11495.830892,7589.340001a1.723,1.723 0 0 1 -0.436,2.738c-0.48,-0.256 -0.895,-0.719 -1.127,-1.32c-0.258,-0.669 -0.232,-1.364 0.019,-1.905c0.544,-0.1 1.127,0.062 1.544,0.487z"}})])])])]),r("g",{attrs:{transform:"matrix(0.8601419402098309,0,0,0.8601419402098309,-2024.0589622659118,-1379.1443728984782) ",stroke:"null",id:"svg_71"}},[r("g",{attrs:{stroke:"null",transform:"matrix(2.363657112323039,0,0,-2.363657112323039,-421.4672678873852,-504.12344220905027) ",id:"svg_73"}},[r("path",{attrs:{stroke:"null",d:"m1244.674513,-930.390422c-0.018,2.008 1.64,2.972 1.715,3.019c-0.933,1.365 -2.385,1.552 -2.903,1.574c-1.235,0.125 -2.411,-0.727 -3.037,-0.727c-0.626,0 -1.594,0.709 -2.618,0.689c-1.348,-0.02 -2.589,-0.783 -3.283,-1.989c-1.399,-2.427 -0.357,-6.024 1.005,-7.994c0.667,-0.963 1.461,-2.048 2.505,-2.008c1.006,0.04 1.386,0.65 2.6,0.65c1.214,0 1.556,-0.65 2.619,-0.631c1.081,0.021 1.767,0.984 2.429,1.95c0.764,1.118 1.08,2.2 1.098,2.257c-0.024,0.01 -2.108,0.809 -2.13,3.21",id:"svg_74",fill:"#f9f9f9"}})]),r("path",{attrs:{stroke:"null",d:"m2515.796129,1681.063924c1.30945,-1.58601 2.19345,-3.79134 1.94997,-5.98945c-1.88634,0.07572 -4.1695,1.25749 -5.52392,2.8435c-1.21252,1.40172 -2.27616,3.64713 -1.98792,5.80049c2.10373,0.16309 4.25221,-1.07085 5.56187,-2.65454",id:"svg_72",fill:"#f9f9f9"}})]),r("rect",{attrs:{transform:"matrix(0.8601419402098309,0,0,0.8601419402098309,-2024.0589622659118,-1379.1443728984782) ",stroke:"#ffffff",fill:"#000000","stroke-width":"0.5",x:"2473.738186",y:"1746.935951",width:"73.4999",height:"3.102616",id:"svg_70",rx:"2"}}),r("rect",{staticStyle:{width:"2",height:"3.142342"},attrs:{transform:"matrix(0.8601419402098309,0,0,0.8601419402098309,-2024.0589622659118,-1379.1443728984782) ",stroke:"#ffffff",fill:"#ffffff","stroke-width":"0.5",x:"2473.738185",y:"1746.896225",id:"svg_69",rx:"2"}})])])])},[],!1,null,null,null);r.default=s.exports}}]);