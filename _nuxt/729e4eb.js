(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13,17],{434:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1eb89c8e",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n.r(e);var r=n(35),o=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(436),n(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},436:function(t,e,n){"use strict";n(434)},437:function(t,e,n){var r=n(61)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},440:function(t,e,n){"use strict";n.r(e);var r=n(35),o=Object(r.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools"}}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default})},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(433),o=n(432);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()<Date.now()}},453:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(433),o=n(432);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},459:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("84d9f888",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(459)},465:function(t,e,n){var r=n(61)(!1);r.push([t.i,".link-grid[data-v-59631aac]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}.title-link:hover .icon[data-v-59631aac]{display:inline-block}",""]),t.exports=r},474:function(t,e,n){"use strict";n.r(e);n(30),n(19),n(33),n(20),n(37);var r=n(10),o=(n(32),n(29),n(35)),l=n(452),c=n(453),f=n(495);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(o.b)({props:{milestones:{type:Array,default:function(){return[]}}},setup:function(t){var e=Object(o.d)(!1),n=t.milestones.map((function(t){return v(v({},t),{},{deadline:new Date(t.deadline)})})),r=Object(o.a)((function(){return n.filter((function(t){var e=t.deadline;return Object(l.a)(e)}))})),d=Object(o.a)((function(){return n.filter((function(t){var e=t.deadline;return Object(c.a)(e)}))})),m=Object(o.a)((function(){return d.value&&d.value.length?d.value[0]:null}));return{pastMilestones:r,futureMilestones:d,currentMilestone:m,format:f.a,showTasks:e,toggleTasks:function(){return e.value=!e.value}}}}),x=(n(464),n(15)),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.currentMilestone?n("WrapperContentBox",[n("article",{staticClass:"relative pt-8 lg:pt-0"},[n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"clipboard-list"}})],1),t._v(" "),n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.currentMilestone.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n            "+t._s(t.currentMilestone.title)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("p",{staticClass:"mb-4 text-lg text-center"},[t._v("\n          Due\n          "+t._s(t.format(new Date(t.currentMilestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n        ")])],1),t._v(" "),t.currentMilestone.todos.length?n("main",{staticClass:"space-y-8"},[n("p",{staticClass:"text-center"},[t.showTasks?n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.currentMilestone.todos,(function(e){return n("li",{key:e.name,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-blue-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),e.resources?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0):t._e()])])})),0):t._e()]):t._e()])]):t._e()],1)}),[],!1,null,"59631aac",null);e.default=component.exports;installComponents(component,{TIcon:n(151).default,ResourceListItem:n(440).default,WrapperContentBox:n(435).default})}}]);