(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5,15,22],{435:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1eb89c8e",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),o=(n(438),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},438:function(t,e,n){"use strict";n(435)},439:function(t,e,n){var r=n(61)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},441:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(442),l=n(433);function o(t,e){Object(l.a)(2,arguments);var n=Object(r.a)(t),o=Object(r.a)(e);return n.getTime()===o.getTime()}},442:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(434),l=n(433);function o(t){Object(l.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}},443:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools"}}}}),o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default})},444:function(t,e,n){var content=n(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6a9fdfc0",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(434),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},447:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(441),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t,Date.now())}},448:function(t,e,n){"use strict";n.r(e);var r=n(468),l=n(508),o=n(453),c=n(35),f=Object(c.b)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.date),n=Object(c.a)((function(){return t.tlEvent.resources||t.tlEvent.forms||t.tlEvent.meetings})),f=Object(c.a)((function(){return Object(r.a)(e,new Date)<=60})),v=Object(c.a)((function(){return Object(r.a)(e,new Date)}));return{format:l.a,isPast:o.a,eventDate:e,hasResources:n,isInOneHour:f,diff:v}}}),v=(n(451),n(15)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastEvent,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.eventDate}}):t._e(),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n            "+t._s(t.tlEvent.name)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.name)+"\n        ")])],t._v(" "),n("div",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.isPast(t.eventDate)?"Took":"Takes")+" place on\n          "+t._s(t.format(t.eventDate,"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.$md.render(t.tlEvent.description))}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[t.isInOneHour&&t.tlEvent.meetings&&t.tlEvent.meetings.length?[n("EventListItemResourceList",{attrs:{resources:t.tlEvent.meetings,title:"Meeting Rooms"}})]:t.isCurrentEvent?[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n          Links and other resources will be posted soon!\n        ")])]:t._e(),t._v(" "),t.showResources?[t.tlEvent.forms&&t.tlEvent.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.resources&&t.tlEvent.resources.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.resources,title:"Resources"}}):t._e()]:t._e()],2):t._e()],1)])}),[],!1,null,"018bcec4",null);e.default=component.exports;installComponents(component,{Stamp:n(449).default,TIcon:n(151).default,EventListItemResourceList:n(450).default,WrapperContentBox:n(437).default})},449:function(t,e,n){"use strict";n.r(e);var r=n(35),l=n(445),o=n(447),c=Object(r.b)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(r.a)((function(){return Object(l.a)(t.date)})),n=Object(r.a)((function(){return Object(o.a)(t.date)})),text=Object(r.a)((function(){return n.value?"today!":e.value?"next":"live!"})),c=Object(r.a)((function(){return e.value&&!n.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:e,isTodayDate:n,text:text,classNames:c}}}),f=n(15),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},450:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(443).default})},451:function(t,e,n){"use strict";n(444)},452:function(t,e,n){var r=n(61)(!1);r.push([t.i,".title-link:hover .icon[data-v-018bcec4]{display:inline-block}",""]),t.exports=r},453:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(434),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t).getTime()<Date.now()}},468:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(434),l=n(433);function o(t,e){Object(l.a)(2,arguments);var n=Object(r.a)(t),o=Object(r.a)(e);return n.getTime()-o.getTime()}function c(t,e){Object(l.a)(2,arguments);var n=o(t,e)/6e4;return n>0?Math.floor(n):Math.ceil(n)}},484:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{show:{type:Boolean},events:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(r.d)(!1);return{showEvents:t,toggle:function(){return t.value=!t.value}}}}),o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[t.show?n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.slug},[n("EventListItem",{attrs:{"tl-event":t,"is-past-event":"","show-resources":"","show-permalink":""}})],1)})),0):t._e()]:n("div",[n("p",[t._v("No Past Events.")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EventListItem:n(448).default})}}]);