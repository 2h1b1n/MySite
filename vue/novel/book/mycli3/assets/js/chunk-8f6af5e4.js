(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f6af5e4"],{"1ca1":function(t,e,a){var s=a("a719"),o=a("74e7"),n=a("90fb"),i=n("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?s(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"2dbd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAArlBMVEX////9/P+Qj5T5+fz7+v/4+Pv7+/2NjJH08/eTkpbe3uDKys2Lio6MjI/n5uv39/nT0tfHxsubm52WlZq6ub6Ghonu7vGTk5b29frz8vXw7/Ph4ePW1tnMy8+pqauJiI2ysbWlpamYmJuPj5LZ2dvT09XQ0NLOztDExMe/v8KhoKOIiIrb2929vMCurbKrqq+Wlpjq6uyjoqWdnKCEhIbl5eeXl5m2triAf4R+fYIt4g+bAAABxUlEQVQ4y+2TaW/bMAyGX1qWfCpunPqKj8TOfZ/ttv//x0ZnG7CtQj8U6LdS4AtJfChSEITPNAklSboQ9FgSXEk8FyaW6KFScly8c6ZiBIzQnxoMc5Iywj2lGHfdXynEbrAHxUKqDz9cChYjSRyJgm2y2yXXWnImjCQUKUHjRXZPui5JzlXBxY3gwN/v5/PDzInbpmlus2yz932/vPxTlUXIRofOTuv7tuz35q+evp+TcNe+IUVzzl7P3bapJISkYnWNdZzF8fT/6ygxr+rVMliWAkSkEM0X62WwqHy8QYGi4NP+LkRj1/SSKgpWzKlL2qel6Ri4rJamu0dlHFeR8KcHTooOz3slh/E2NaEvll4ptdaZgCgsb0G00V4Bg5XebAF8y0KCcnddQFjPsshE+s7oycazZdmEgeUFoKFluV/kB0l6GXlM1lmbg9I2rnLadJOxgRSl5z1JDIY1wc7rOgU2nWMiyddOJUF5znPk3AK/ppFEaU2Wrm3bILIFQcr8kMxSE5m2P+Lj8XSaHqdTllPbeN+vhQF03WA0mYTORIdas1hJEt5q2/jfB5ubwyiP37JdG9tEROj7owhkQ7LbkleELwN+AmK6JDKO8B81AAAAAElFTkSuQmCC"},"2eeb":function(t,e,a){"use strict";var s=a("1c8b"),o=a("5dfd").map,n=a("1ea7"),i=a("ff9c"),c=n("map"),r=i("map");s({target:"Array",proto:!0,forced:!c||!r},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"5dfd":function(t,e,a){var s=a("e349"),o=a("692f"),n=a("3553"),i=a("d88d"),c=a("1ca1"),r=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,f=4==t,u=6==t,d=5==t||u;return function(h,p,v,b){for(var g,k,m=n(h),A=o(m),C=s(p,v,3),y=i(A.length),S=0,x=b||c,I=e?x(h,y):a?x(h,0):void 0;y>S;S++)if((d||S in A)&&(g=A[S],k=C(g,S,m),t))if(e)I[S]=k;else if(k)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:r.call(I,g)}else if(f)return!1;return u?-1:l||f?f:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},"82af":function(t,e,a){},e263:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookshelf"},[s("van-row",{staticClass:"topsearchNav"},[s("van-col",{attrs:{span:"3"},on:{click:function(e){return t.$router.go(-1)}}},[s("span",{staticClass:"iconfont icon-fanhui2"})]),s("van-col",{attrs:{span:"18"}},[s("span",{staticClass:"t"},[t._v("我的书架")])]),s("van-col",{staticClass:"clearfix",attrs:{span:"3"}},[s("span",{staticClass:"manage fl",on:{click:t.delTag}},[t._v("管理")])])],1),s("div",{staticClass:"tabs"},[s("div",{staticClass:"selectContainer"},t._l(t.bookDatas,(function(e,o){return s("div",{key:o,staticClass:"bookshelf-box clearfix"},[s("div",{staticClass:"book-content fl clearfix",on:{click:function(e){return t.goReading(t.bookChapters[0].link,t.bookDatas[0]._id,o)}}},[s("div",{staticClass:"leftimg fl"},[s("img",{staticClass:"auto-img",attrs:{src:e.cover,alt:""}})]),s("div",{staticClass:"right fl"},[s("h4",{staticClass:"name"},[t._v(t._s(e.title))]),s("p",{staticClass:"lastChapter"},[t._v(t._s(e.lastChapter))]),s("p",[t._v(t._s(e.cat))])])]),t.isDel?s("div",{staticClass:"Del fr",on:{click:function(a){return t.delSelectBook(e._id)}}},[s("img",{staticClass:"auto-img",attrs:{src:a("2dbd"),alt:""}})]):t._e()])})),0)])],1)},o=[],n=(a("2eeb"),a("77ad"),a("ea69"),a("82af"),{data:function(){return{bookShelfDatas:{},bookDatas:[],bookChapters:{},chapter_id:"",index:0,isDel:!1}},created:function(){this.setBookshelfLists()},methods:{setBookshelfLists:function(){var t=this,e=JSON.parse(localStorage.getItem("BID"));e&&(e.map((function(e){t.getBookIdDatas(e)})),e.map((function(e){t.getReadingPage(e)})))},getBookIdDatas:function(t){var e=this;this.axios({method:"GET",url:"http://novel.kele8.cn/book-info/"+t}).then((function(t){200==t.status&&(e.bookShelfDatas=t.data,e.bookShelfDatas.cover=unescape(e.bookShelfDatas.cover).slice(7)),e.bookDatas.push(e.bookShelfDatas)})).catch((function(t){}))},getReadingPage:function(t){var e=this;this.axios({method:"GET",url:"http://novel.kele8.cn/book-sources?view=summary&book="+t}).then((function(t){200==t.status&&(e.chapter_id=t.data[0]._id,e.axios({method:"GET",url:"http://novel.kele8.cn/book-chapters/"+e.chapter_id}).then((function(t){200==t.status&&(e.bookChapters=t.data.chapters)})).catch((function(t){})))})).catch((function(t){}))},goReading:function(t,e,a){this.$router.push({name:"Reading",query:{link:t,id:e,index:this.index}})},delTag:function(){this.isDel=!this.isDel},delSelectBook:function(t){for(var e=JSON.parse(localStorage.getItem("BID")),a=0;a<e.length;a++)e[a]==t&&e.splice(a,1);this.bookDatas=[],localStorage.setItem("BID",JSON.stringify(e)),this.setBookshelfLists()}}}),i=n,c=a("9ca4"),r=Object(c["a"])(i,s,o,!1,null,"2ced555e",null);e["default"]=r.exports},ea69:function(t,e,a){"use strict";var s=a("1c8b"),o=a("e1d6"),n=a("3da3"),i=a("d88d"),c=a("3553"),r=a("1ca1"),l=a("1bbd"),f=a("1ea7"),u=a("ff9c"),d=f("splice"),h=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var a,s,f,u,d,h,k=c(this),m=i(k.length),A=o(t,m),C=arguments.length;if(0===C?a=s=0:1===C?(a=0,s=m-A):(a=C-2,s=v(p(n(e),0),m-A)),m+a-s>b)throw TypeError(g);for(f=r(k,s),u=0;u<s;u++)d=A+u,d in k&&l(f,u,k[d]);if(f.length=s,a<s){for(u=A;u<m-s;u++)d=u+s,h=u+a,d in k?k[h]=k[d]:delete k[h];for(u=m;u>m-s+a;u--)delete k[u-1]}else if(a>s)for(u=m-s;u>A;u--)d=u+s-1,h=u+a-1,d in k?k[h]=k[d]:delete k[h];for(u=0;u<a;u++)k[u+A]=arguments[u+2];return k.length=m-s+a,f}})}}]);