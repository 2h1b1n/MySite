(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56d2f7c2"],{"1ca1":function(t,a,i){var s=i("a719"),o=i("74e7"),e=i("90fb"),n=e("species");t.exports=function(t,a){var i;return o(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?s(i)&&(i=i[n],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===a?0:a)}},"20a5":function(t,a,i){"use strict";var s=i("1c8b"),o=i("3da3"),e=i("e1d9"),n=i("c7e6"),r=i("efe2"),c=1..toFixed,l=Math.floor,u=function(t,a,i){return 0===a?i:a%2===1?u(t,a-1,i*t):u(t*t,a/2,i)},d=function(t){var a=0,i=t;while(i>=4096)a+=12,i/=4096;while(i>=2)a+=1,i/=2;return a},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));s({target:"Number",proto:!0,forced:f},{toFixed:function(t){var a,i,s,r,c=e(this),f=o(t),h=[0,0,0,0,0,0],v="",C="0",p=function(t,a){var i=-1,s=a;while(++i<6)s+=t*h[i],h[i]=s%1e7,s=l(s/1e7)},g=function(t){var a=6,i=0;while(--a>=0)i+=h[a],h[a]=l(i/t),i=i%t*1e7},m=function(){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==h[t]){var i=String(h[t]);a=""===a?i:a+n.call("0",7-i.length)+i}return a};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(a=d(c*u(2,69,1))-69,i=a<0?c*u(2,-a,1):c/u(2,a,1),i*=4503599627370496,a=52-a,a>0){p(0,i),s=f;while(s>=7)p(1e7,0),s-=7;p(u(10,s,1),0),s=a-1;while(s>=23)g(1<<23),s-=23;g(1<<s),p(1,1),g(2),C=m()}else p(0,i),p(1<<-a,0),C=m()+n.call("0",f);return f>0?(r=C.length,C=v+(r<=f?"0."+n.call("0",f-r)+C:C.slice(0,r-f)+"."+C.slice(r-f))):C=v+C,C}})},4194:function(t,a,i){"use strict";var s=i("1c8b"),o=i("5dfd").find,e=i("258f"),n=i("ff9c"),r="find",c=!0,l=n(r);r in[]&&Array(1)[r]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!l},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(r)},"5dfd":function(t,a,i){var s=i("e349"),o=i("692f"),e=i("3553"),n=i("d88d"),r=i("1ca1"),c=[].push,l=function(t){var a=1==t,i=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,v,C,p){for(var g,m,k=e(h),b=o(k),_=s(v,C,3),A=n(b.length),D=0,w=p||r,x=a?w(h,A):i?w(h,0):void 0;A>D;D++)if((f||D in b)&&(g=b[D],m=_(g,D,k),t))if(a)x[D]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return D;case 2:c.call(x,g)}else if(u)return!1;return d?-1:l||u?u:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},"9cbb":function(t,a,i){},c7e6:function(t,a,i){"use strict";var s=i("3da3"),o=i("2732");t.exports="".repeat||function(t){var a=String(o(this)),i="",e=s(t);if(e<0||e==1/0)throw RangeError("Wrong number of repetitions");for(;e>0;(e>>>=1)&&(a+=a))1&e&&(i+=a);return i}},c84b:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"detail"},[i("van-row",{staticClass:"topsearchNav"},[i("van-col",{attrs:{span:"3"},on:{click:function(a){return t.$router.go(-1)}}},[i("span",{staticClass:"iconfont icon-fanhui2"})]),i("van-col",{attrs:{span:"18"}},[i("span",{staticClass:"t"},[t._v("书籍详情")])]),i("van-col",{staticClass:"clearfix",attrs:{span:"3"}},[i("van-icon",{staticClass:"home-t",attrs:{name:"wap-home"},on:{click:function(a){return t.$router.push("/main/bookcity")}}})],1)],1),i("div",{staticClass:"page-book-detail"},[i("div",{staticClass:"book-detail clearfix"},[i("div",{staticClass:"left-img fl"},[i("img",{staticClass:"auto-img",attrs:{src:t.bookData.cover,alt:""}})]),i("div",{staticClass:"right-detail fl"},[i("div",{staticClass:"desc"},[i("h1",[t._v(t._s(t.bookData.title))]),i("p",{staticClass:"sku"},[i("a",{attrs:{href:""}},[i("span",{staticClass:"c-bule"},[t._v(t._s(t.bookData.author))])]),i("i",[t._v("|")]),i("span",[t._v(t._s(t.bookData.cat))]),i("i",[t._v("|")]),i("span",[t._v(t._s(t.bookData.wordCount)+"万字")])]),i("p",{staticClass:"longIntro"},[t._v(t._s(t.bookData.majorCate))])])])]),i("div",{staticClass:"read-link"},[i("div",{staticClass:"btn-box clearfix"},[i("div",{staticClass:"button fl",on:{click:function(a){return t.addBookshelf()}}},[t._v("加入书架")]),i("div",{staticClass:"button fl",on:{click:function(a){return t.goReading(t.allChapterList[0].link,t.index,t.bookData.title)}}},[t._v("开始阅读")])])]),i("div",{staticClass:"read-data clearfix"},[i("div",{staticClass:"item fl"},[i("p",{staticClass:"key"},[t._v("追人气")]),i("p",{staticClass:"readCount"},[t._v(t._s(t.bookData.latelyFollower)+"万")])]),i("div",{staticClass:"item fl"},[i("p",{staticClass:"key"},[t._v("读者留存率")]),i("p",{staticClass:"readCount"},[t._v(t._s(t.bookData.retentionRatio)+"%")])]),i("div",{staticClass:"item fl"},[i("p",{staticClass:"key"},[t._v("日更字数/天")]),i("p",{staticClass:"readCount"},[t._v(t._s(t.bookData.serializeWordCount))])])]),i("div",{staticClass:"introduction-wraper"},[i("div",{staticClass:"introduction"},[i("p",{staticClass:"introduct-t"},[t._v(t._s(t.bookData.longIntro))])])]),i("div",{staticClass:"catalog clearfix",on:{click:function(a){return t.goCatalogue(t.bookData._id,t.bookData.title)}}},[i("div",{staticClass:"title fl"},[t._v("目录")]),t._m(0),i("span",{staticClass:"text fr"},[t._v("[更新到...] "+t._s(t.bookData.lastChapter))])]),i("div",{staticClass:"hot-comment"},[i("div",{staticClass:"comment-top"},[t._v("热门书评")]),i("ul",{staticClass:"c-comment-list"},t._l(t.commentData,(function(a,s){return i("li",{key:s},[i("div",{staticClass:"comment"},[i("img",{staticClass:"avater",attrs:{src:"http://statics.zhuishushenqi.com/icon/avatar.png",alt:""}}),i("div",{staticClass:"right-c"},[i("p",{staticClass:"name"},[t._v(t._s(a.author.nickname))]),i("p",{staticClass:"content"},[t._v(t._s(a.content))]),t._m(1,!0)])])])})),0)])])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"right-arrow fr"},[s("img",{staticClass:"auto-img",attrs:{src:i("df48"),alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",{staticClass:"score"},[i("i",{staticClass:"star-full"}),i("i",{staticClass:"star-full"}),i("i",{staticClass:"star-full"}),i("i",{staticClass:"star-full"}),i("i",{staticClass:"star-full"})])}],e=(i("4194"),i("77ad"),i("20a5"),i("9cbb"),{data:function(){return{bookData:{},commentData:{},tip:"",chapter_id:"",allChapterList:{},readingData:{},index:0,title:""}},created:function(){this.getDetailById(),this.getBookComment(),this.getReadingContent()},methods:{getDetailById:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"http://novel.kele8.cn/book-info/"+this.$route.query.id}).then((function(a){t.$toast.clear(),200==a.status&&(t.bookData=a.data,t.bookData.cover=unescape(t.bookData.cover).slice(7),t.bookData.latelyFollower=(t.bookData.latelyFollower/1e4).toFixed(2),t.bookData.wordCount=Math.ceil(t.bookData.wordCount/1e4))})).catch((function(a){t.$toast.clear()}))},getBookComment:function(){var t=this;this.axios({method:"GET",url:"http://novel.kele8.cn/book/short-reviews?book="+this.$route.query.id+"&limit=3"}).then((function(a){t.$toast.clear(),a.data.docs&&(t.commentData=a.data.docs)})).catch((function(a){t.$toast.clear()}))},getReadingContent:function(){var t=this;this.axios({method:"GET",url:"http://novel.kele8.cn/book-sources?view=summary&book="+this.$route.query.id}).then((function(a){200==a.status&&(t.chapter_id=a.data[0]._id,t.axios({method:"GET",url:"http://novel.kele8.cn/book-chapters/"+t.chapter_id}).then((function(a){200==a.status&&(t.allChapterList=a.data.chapters)})).catch((function(t){})))})).catch((function(t){}))},goCatalogue:function(t,a){this.$router.push({name:"Catalogue",query:{id:t,title:a}})},goReading:function(t,a,i){this.$router.push({name:"Reading",query:{link:t,id:this.$route.query.id,index:this.index,title:i}})},addBookshelf:function(){var t=this;if(localStorage.getItem("BID")){var a=JSON.parse(localStorage.getItem("BID")),i=a.find((function(a){return t.bookData._id==a&&(t.$toast("已存在此书籍"),!0)}));i||(this.$toast("已加入书架"),a.unshift(this.bookData._id)),localStorage.setItem("BID",JSON.stringify(a))}else{var s=[this.bookData._id];localStorage.setItem("BID",JSON.stringify(s))}}}}),n=e,r=i("9ca4"),c=Object(r["a"])(n,s,o,!1,null,null,null);a["default"]=c.exports},df48:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAArklEQVRYR93X0Q2AIAxF0XYmWEWHlFUYyvBBYvix7XsNUQbwnpSkEZXNRzf35TuA3vtRa23siZkmMOKqeolIK6WcTMQr4BGfXSriFTCqmQgTIBNhBmQhXIAMhBvARoQATEQYwEJAAAYCBqAICgBB/AOArGp4Akh8XB0EQOMQgBEPA1jxEIAZdwPYcRcgI24GZMVNgMy4CbDseeofsRkwEdseJsyHyPotaBUzYNsBN0DMgCEPPyFQAAAAAElFTkSuQmCC"},e1d9:function(t,a,i){var s=i("2118");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}}}]);