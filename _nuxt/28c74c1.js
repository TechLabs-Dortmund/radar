(window.webpackJsonp=window.webpackJsonp||[]).push([[12,14],{460:function(t,e,n){"use strict";n.r(e);var o=n(10),l=Object(o.b)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),r=n(16),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:t.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:t.resource.url,target:"_blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(152).default})},467:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("5938dd72",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";n(467)},478:function(t,e,n){var o=n(56)(!1);o.push([t.i,".milestone-grid[data-v-759248b7]{display:grid;grid-gap:1rem;grid-template-columns:auto 1fr}.shadow-inner-pink[data-v-759248b7]{--tw-shadow:inset 0 4px 8px 0 rgba(250,30,90,0.15);box-shadow:0 0 #fa1e5a,0 0 #fa1e5a,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #fa1e5a),var(--tw-ring-shadow,0 0 #fa1e5a),var(--tw-shadow)}.title-link:hover .icon[data-v-759248b7]{display:inline-block}",""]),t.exports=o},482:function(t,e,n){"use strict";n.r(e);var o=n(10),l=n(533),r=Object(o.b)({props:{milestone:{type:Object,required:!0},alwaysShowTasks:{type:Boolean}},setup:function(){var t=Object(o.e)(!1);return{showTasks:t,toggleTasks:function(){return t.value=!t.value},format:l.a}}}),c=(n(477),n(16)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 bg-pink-100 border shadow-inner-pink lg:p-6 rounded-xl"},[n("article",{staticClass:"relative pt-8 lg:pt-0 milestone-grid"},[n("div",{staticClass:"-mt-1 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("header",{staticClass:"flex items-center space-x-4"},[n("div",[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.milestone.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold text-pink-900 hover:underline"},[t._v("\n            "+t._s(t.milestone.title)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-pink-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("ClientOnly",[t.milestone.starts?n("p",{staticClass:"text-lg"},[t._v("\n            Starts\n            "+t._s(t.format(new Date(t.milestone.starts),"MMMM do, 'at' h:mm aaaa"))+"\n          ")]):t._e(),t._v(" "),n("p",{staticClass:"text-lg"},[t._v("\n            Due\n            "+t._s(t.format(new Date(t.milestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n          ")])])],1)]),t._v(" "),n("div"),t._v(" "),n("main",{staticClass:"space-y-8"},[n("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.milestone.description))}}),t._v(" "),t.milestone.todos.length?[t.alwaysShowTasks?t._e():n("p",[t.showTasks?n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide text-pink-900 uppercase border-2 border-pink-900 rounded-lg focus:outline-none active:outline-none",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks||t.alwaysShowTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.milestone.todos,(function(e){return n("li",{key:e.name,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-pink-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),e.resources?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t,"on-pink":""}})],1)})),0):t._e()])])})),0):t._e()]:t._e()],2)])])}),[],!1,null,"759248b7",null);e.default=component.exports;installComponents(component,{TIcon:n(152).default,ResourceListItem:n(460).default})}}]);