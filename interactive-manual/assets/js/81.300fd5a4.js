(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{333:function(t,e,n){n(383)(n(382));var r={characterSets:n(339),period:n(338),namedNumber:n(337),checker:n(336),defaults:{calculationsPerSecond:1e10,good:315576e8,ok:31557600}};t.exports=r},334:function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},379:function(t,e,n){},384:function(t,e,n){"use strict";var r=n(3),s=n(4),i=n(13),o=n(82),a=n(81),c=n(83),u=n(84),d=n(5),h=n(6),f=n(87),l=n(52),p=n(88);t.exports=function(t,e,n,v,_,g){var w=r[t],m=w,k=_?"set":"add",S=m&&m.prototype,y={},b=function(t){var e=S[t];i(S,t,"delete"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!d(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof m&&(g||S.forEach&&!h(function(){(new m).entries().next()}))){var C=new m,I=C[k](g?{}:-0,1)!=C,x=h(function(){C.has(1)}),E=f(function(t){new m(t)}),P=!g&&h(function(){for(var t=new m,e=5;e--;)t[k](e,e);return!t.has(-0)});E||((m=e(function(e,n){u(e,m,t);var r=p(new w,e,m);return void 0!=n&&c(n,_,r[k],r),r})).prototype=S,S.constructor=m),(x||P)&&(b("delete"),b("has"),_&&b("get")),(P||I)&&b(k),g&&S.clear&&delete S.clear}else m=v.getConstructor(e,t,_,k),o(m.prototype,n),a.NEED=!0;return l(m,t),y[t]=m,s(s.G+s.W+s.F*(m!=w),y),g||v.setStrong(m,t,_),m}},385:function(t,e,n){"use strict";var r=n(10).f,s=n(89),i=n(82),o=n(14),a=n(84),c=n(83),u=n(80),d=n(90),h=n(64),f=n(8),l=n(81).fastKey,p=n(334),v=f?"_s":"size",_=function(t,e){var n,r=l(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var d=t(function(t,r){a(t,d,e,"_i"),t._t=e,t._i=s(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&c(r,n,t[u],t)});return i(d.prototype,{clear:function(){for(var t=p(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var n=p(this,e),r=_(n,t);if(r){var s=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=s),s&&(s.p=i),n._f==r&&(n._f=s),n._l==r&&(n._l=i),n[v]--}return!!r},forEach:function(t){p(this,e);for(var n,r=o(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(p(this,e),t)}}),f&&r(d.prototype,"size",{get:function(){return p(this,e)[v]}}),d},def:function(t,e,n){var r,s,i=_(t,e);return i?i.v=n:(t._l=i={i:s=l(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==s&&(t._i[s]=i)),t},getEntry:_,setStrong:function(t,e,n){u(t,e,function(t,n){this._t=p(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?d(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,d(1))},n?"entries":"values",!n,!0),h(e)}}},386:function(t,e,n){"use strict";var r=n(385),s=n(334);t.exports=n(384)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(s(this,"Set"),t=0===t?0:t,t)}},r)},387:function(t,e,n){var r=n(60),s=n(18);t.exports=function(t){return function(e,n){var i,o,a=String(s(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===u||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):i:t?a.slice(c,c+2):o-56320+(i-55296<<10)+65536}}},388:function(t,e,n){"use strict";var r=n(387)(!0);n(80)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},444:function(t,e,n){"use strict";var r=n(379);n.n(r).a},534:function(t,e,n){"use strict";n.r(e);n(12),n(19),n(388),n(386);var r=n(200),s=n(333),i={data:function(){return{password:"",speed:10,ok:31557600,good:315576e5}},computed:{digit:function(){return/[0-9]/.test(this.password)},lower:function(){return/[a-z]/.test(this.password)},upper:function(){return/[A-Z]/.test(this.password)},symbol:function(){return/[$-/:-?{-~!"^_`\[\]]/.test(this.password)},alpha:function(){var t=[];return this.symbol&&(t=t.concat(r.range(32,48))),this.upper&&(t=t.concat(r.range(65,91))),this.digit&&(t=t.concat(r.range(48,58))),this.symbol&&(t=t.concat(r.range(58,65))),this.lower&&(t=t.concat(r.range(97,123))),this.symbol&&(t=t.concat(r.range(123,127))),new Set(r.flatten(t))},possibleCombinations:function(){return Math.pow(this.alpha.size,this.password.length)},calculationsPerSecond:function(){return 4*Math.pow(10,this.speed)},timeInSeconds:function(){return this.possibleCombinations/this.calculationsPerSecond},time:function(){if(s.checker(this.password).isInsecure())return"Instantly";var t=s.period(this.timeInSeconds),e=t.getLength(),n=s.namedNumber(e).getName();return n+" "+("1"===n?t.getSingular():t.getPlural())},security:function(){var t,e;return this.password.length>0&&(t="bad",(e=s.checker(this.password)).isInsecure()?t="insecure":this.timeInSeconds>=this.good?t=e.hasWarnings()?"ok":"good":this.timeInSeconds>=this.ok&&(t="ok")),t},checks:function(){return s.checker(this.password).getChecks()}},methods:{changeSpeed:function(t){this.speed=parseInt(t)},reset:function(){this.password="",this.speed=10}}},o=(n(444),n(1)),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hsimp-wrapper"},[n("div",{staticClass:"hsimp",class:t.security},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"ENTER PASSWORD"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("Password-Cracker",{attrs:{password:t.password,speed:t.speed},on:{"change-speed":t.changeSpeed,reset:t.reset}}),n("div",{staticClass:"content"},[t.password.length>0?n("div",{staticClass:"time"},["insecure"==t.security?n("span",[t._v("\n          Your password would be cracked\n        ")]):n("span",[t._v("\n          It will take a computer about\n        ")]),t._v("\n        "+t._s(t.time)+"\n        "),"insecure"!=t.security?n("span",[t._v("\n          to crack your password.\n        ")]):t._e()]):t._e(),t.checks?n("dl",[t._l(t.checks,function(e){return[n("dt",{class:e.level},[t._v(t._s(e.name))]),n("dd",[t._v(t._s(e.message))])]})],2):t._e()])],1)])},[],!1,null,"19ff80d6",null);e.default=a.exports}}]);