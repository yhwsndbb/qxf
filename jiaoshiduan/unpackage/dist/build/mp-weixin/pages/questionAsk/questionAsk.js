(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/questionAsk/questionAsk"],{"19ff":function(t,e,a){"use strict";a.r(e);var s=a("5024"),o=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);e["default"]=o.a},"47aa":function(t,e,a){},5024:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{IssueLogList:[],showInput:!1,Content:"",ParentId:"",RecordCount:"",ClassroomLogId:"",ChapterId:"",TeachClassId:"",ChapterName:"",TeachClass:""}},methods:{onLoading:function(){this.GetIssueLogList()},SaveIssueLogStatus:function(e,a){var s=this,o=!e;t.request({method:"POST",url:"https://hk.joyfulboo.com/Campus/IssueApp/SaveIssueLogStatus",data:{IssueLogId:a,IsPublish:o},header:{"content-type":"application/json",Authorization:t.getStorageSync("token")},success:function(e){console.log(e,"修改问答状态");var a=e.data;if(1!=a.Success)return t.showToast({title:a.Message,icon:"none"}),!1;t.showToast({title:"更改状态成功",duration:3e3}),s.GetIssueLogList()}})},SaveIssueLog:function(){var e=this;t.request({method:"POST",url:"https://hk.joyfulboo.com/Campus/IssueApp/SaveIssueLog",data:{classroomLogId:this.$data.ClassroomLogId,ParentId:this.$data.ParentId,Content:this.$data.Content},header:{"content-type":"application/json",Authorization:t.getStorageSync("token")},success:function(a){console.log(a,"保存回答数据");var s=a.data;if(1!=s.Success)return t.showToast({title:s.Message,icon:"none"}),!1;t.showToast({title:"发送成功",duration:3e3}),e.$data.Content="",e.GetIssueLogList()}})},bindInputMsg:function(t){this.$data.Content=t.detail.value},onShowInput:function(t){this.$data.showInput=!0,this.$data.ParentId=t},onHideInput:function(){var t=this;setTimeout((function(){t.$data.showInput=!1}),5e3)},GetIssueLogList:function(){var e=this;t.request({method:"GET",url:"https://hk.joyfulboo.com/Campus/IssueApp/GetIssueLogList",data:{classroomLogId:this.$data.ClassroomLogId,chapterId:this.$data.ChapterId,classId:this.$data.TeachClassId,currentPage:1,pageSize:10},header:{"content-type":"application/json",Authorization:t.getStorageSync("token")},success:function(a){console.log(a,"问答列表");var s=a.data;if(1!=s.Success)return t.showToast({title:s.Message,icon:"none"}),!1;e.$data.IssueLogList=s.Data,e.$data.RecordCount=s.RecordCount}})},timeChangeover:function(t){var e,a=6e4,s=60*a,o=24*s,n=30*o,u=(new Date).getTime();t=t.replace(/-/g,"/");var i=Date.parse(t),r=u-i;if(!(r<0)){var c=r/n,d=r/(7*o),l=r/o,h=r/s,f=r/a;return e=c>=1?c<=12?parseInt(c)+"月前":parseInt(c/12)+"年前":d>=1?parseInt(d)+"周前":l>=1?parseInt(l)+"天前":h>=1?parseInt(h)+"小时前":f>=1?parseInt(f)+"分钟前":"刚刚",e}}},onLoad:function(t){this.$data.ClassroomLogId=t.ClassroomLogId,this.$data.ChapterId=t.ChapterId,this.$data.ChapterName=t.ChapterName,this.$data.TeachClass=t.TeachClass,this.GetIssueLogList()}};e.default=a}).call(this,a("543d")["default"])},"7e1e":function(t,e,a){"use strict";a.r(e);var s=a("bbc9"),o=a("19ff");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("86b1");var u,i=a("f0c5"),r=Object(i["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],u);e["default"]=r.exports},"86b1":function(t,e,a){"use strict";var s=a("47aa"),o=a.n(s);o.a},"9a95":function(t,e,a){"use strict";(function(t){a("36fd");s(a("66fd"));var e=s(a("7e1e"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},bbc9:function(t,e,a){"use strict";var s,o=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.IssueLogList,(function(e,a){var s=t.timeChangeover(e.CreateDatetime);return{$orig:t.__get_orig(e),m0:s}})));t.$mp.data=Object.assign({},{$root:{l0:a}})},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s}))}},[["9a95","common/runtime","common/vendor"]]]);