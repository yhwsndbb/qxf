(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/texts/texts"],{"298b":function(t,e,n){"use strict";(function(t){n("36fd");o(n("66fd"));var e=o(n("fb79"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"58dd":function(t,e,n){"use strict";var o,c=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}))},"7a2b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("15c5"),c=(getApp(),new o.signalR,{data:function(){return{result:[],socketOpen:!1,msg:"",websocketData:{}}},onLoad:function(){_this=this},methods:{getSignalR:function(){var e="https://hk.joyfulboo.com";t.request({url:e,data:{},header:{"content-type":"application/json",Authorization:t.getStorageSync("token")},success:function(t){console.log(t),_this.websocketData=t.data,_this.result.push("request success")}})},openWebSocket:function(){encodeURIComponent(_this.websocketData.ConnectionToken);var e="";console.log(e),t.connectSocket({url:e}),t.onSocketOpen((function(t){console.log(t),_this.socketOpen=!0,console.log("WebSocket连接已打开！"),_this.result.push("WebSocket连接已打开！")})),t.onSocketError((function(t){console.log(t),_this.result.push("WebSocket连接打开失败，请检查！"),console.log("WebSocket连接打开失败，请检查！")})),t.onSocketMessage((function(t){_this.result.push("收到服务器内容："+t.data),console.log("收到服务器内容："+t.data)}))},sendMsg:function(){_this.socketOpen&&t.sendSocketMessage({data:_this.msg})}}});e.default=c}).call(this,n("543d")["default"])},bf90:function(t,e,n){"use strict";n.r(e);var o=n("7a2b"),c=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=c.a},fb79:function(t,e,n){"use strict";n.r(e);var o=n("58dd"),c=n("bf90");for(var s in c)"default"!==s&&function(t){n.d(e,t,(function(){return c[t]}))}(s);var u,a=n("f0c5"),i=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports}},[["298b","common/runtime","common/vendor"]]]);