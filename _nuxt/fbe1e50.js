(window.webpackJsonp=window.webpackJsonp||[]).push([[25,21],{452:function(e,t,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("1eb89c8e",content,!0,{sourceMap:!1})},457:function(e,t,n){"use strict";n(452)},458:function(e,t,n){var r=n(56)(!1);r.push([e.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),e.exports=r},459:function(e,t,n){"use strict";n.r(t);var r=n(10),o=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(457),n(16)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":e.faded,"bg-white shadow-xl":e.emphasized,"shadow-lg bg-white":!e.faded&&!e.emphasized}},[e._t("default")],2)}),[],!1,null,"44197f55",null);t.default=component.exports},531:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(34),n(10)),l=Object(o.b)({setup:function(){Object(o.i)({title:"Media"});var e=Object(o.g)().$content,t=Object(o.e)(null),n=Object(o.h)(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e("media").fetch();case 2:t.value=n.sent;case 3:case"end":return n.stop()}}),n)})))).fetchState;return{mediaItems:t,fetchState:n}},head:{}}),c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"h-full py-4 md:py-8 lg:mx-auto lg:max-w-2xl"},[n("h1",{staticClass:"mb-8 text-4xl font-bold text-center"},[e._v("Media")]),e._v(" "),e.fetchState.pending?e._e():[e.mediaItems.items&&e.mediaItems.items.length?e._l(e.mediaItems.items,(function(t){return n("WrapperContentBox",{key:t.title,staticClass:"mb-4 md:mb-8"},[n("div",{staticClass:"flex justify-between mb-4"},[n("div",[n("h2",{staticClass:"text-xl font-bold"},[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v(e._s(t.date))])]),e._v(" "),n("div",[n("a",{staticClass:"flex items-center px-4 py-2 space-x-2 border-2 border-gray-700 rounded-xl hover:border-pink-600 hover:text-pink-600",attrs:{href:t.youtubeURL,target:"_blank"}},[n("span",[n("TIcon",{staticClass:"text-xl",attrs:{icon:"youtube"}})],1),n("span",{staticClass:"whitespace-nowrap"},[e._v("Watch it on YouTube")])])])]),e._v(" "),n("div",{staticClass:"prose",domProps:{innerHTML:e._s(e.$md.render(t.description))}})])})):[n("WrapperContentBox",[n("p",[e._v("\n            As the semester progresses, we'll add videos of all our events\n            here.\n          ")])])]]],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WrapperContentBox:n(459).default,TIcon:n(152).default})}}]);