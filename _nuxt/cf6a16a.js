(window.webpackJsonp=window.webpackJsonp||[]).push([[18,17],{432:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("1eb89c8e",content,!0,{sourceMap:!1})},433:function(t,e,n){"use strict";n.r(e);var o=n(27),r=Object(o.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),c=(n(435),n(14)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},435:function(t,e,n){"use strict";n(432)},436:function(t,e,n){var o=n(53)(!1);o.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=o},461:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("0b023fcb",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";n(461)},470:function(t,e,n){var o=n(53)(!1);o.push([t.i,'.section-title[data-v-57c5fa62]:after{content:"";--tw-bg-opacity:1;background-color:rgba(250,30,90,var(--tw-bg-opacity));width:40px;height:4px;position:absolute;left:0;bottom:-10px}',""]),t.exports=o},489:function(t,e,n){"use strict";n.r(e);n(28);var o=n(5),r=n(27),c=Object(r.b)({setup:function(){var t=Object(r.f)().$content,e=Object(r.d)(null),n=Object(r.g)(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t("faq").fetch();case 2:e.value=n.sent;case 3:case"end":return n.stop()}}),n)})))).fetchState;return{faq:e,fetchState:n}}}),l=(n(469),n(14)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"py-4 md:py-8 lg:mx-auto lg:max-w-2xl"},[n("h1",{staticClass:"mb-8 text-4xl font-bold text-center"},[t._v("\n      Frequently Asked Questions\n    ")]),t._v(" "),t.fetchState.pending?t._e():t._l(t.faq.sections,(function(section){return n("WrapperContentBox",{key:section.title,staticClass:"mb-4 md:mb-8"},[n("h2",{staticClass:"relative mb-8 text-2xl font-bold section-title"},[t._v("\n          "+t._s(section.title)+"\n        ")]),t._v(" "),t._l(section.questions,(function(e){return n("div",{key:e.title},[n("h3",{staticClass:"mb-2 text-base font-bold"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"mb-4 prose",domProps:{innerHTML:t._s(t.$md.render(e.content))}})])}))],2)}))],2)])}),[],!1,null,"57c5fa62",null);e.default=component.exports;installComponents(component,{WrapperContentBox:n(433).default})}}]);