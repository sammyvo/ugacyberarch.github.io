(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{398:function(t,s,i){},475:function(t,s,i){"use strict";var n=i(398);i.n(n).a},541:function(t,s,i){"use strict";i.r(s);var n=i(410),e={props:["items"],mounted:function(){var t=this.$refs,s=t.container,i=t.proxy,e=0,r=this;n.a.create(i,{type:"y",trigger:s,throwProps:!0,onDrag:function(){this.y>e?r.items.unshift(r.items.pop()):r.items.push(r.items.shift()),e=this.y,r.$emit("rotated")},lockAxis:!0,liveSnap:!0,edgeResistance:.65,snap:{y:function(t){return 30*Math.round(t/30)}},cursor:"grab"})}},r=(i(475),i(1)),a=Object(r.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"carousel"},[i("div",{ref:"container",staticClass:"container"},[i("div",{staticClass:"boxes"},t._l(t.items,function(s){return i("div",{staticClass:"box"},[t._v("\n            "+t._s(s)+"\n            ")])}))]),i("div",{ref:"proxy"})])},[],!1,null,"65426fa5",null);s.default=a.exports}}]);