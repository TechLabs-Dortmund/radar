(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18,19,20,21],{451:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(452),c=n(446);function l(e,t){Object(c.a)(2,arguments);var n=Object(r.a)(e),l=Object(r.a)(t);return n.getTime()===l.getTime()}},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(447),c=n(446);function l(e){Object(c.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(0,0,0,0),t}},459:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(447),c=n(446);function l(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()>Date.now()}},461:function(e,t,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("c391995c",content,!0,{sourceMap:!1})},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(451),c=n(446);function l(e){return Object(c.a)(1,arguments),Object(r.a)(e,Date.now())}},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(447),c=n(446);function l(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()<Date.now()}},469:function(e,t,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("e96499d0",content,!0,{sourceMap:!1})},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(447),c=n(450),l=n(446);function o(e,t){Object(l.a)(1,arguments);var n=t||{},o=n.locale,f=o&&o.options&&o.options.weekStartsOn,v=null==f?0:Object(c.a)(f),d=null==n.weekStartsOn?v:Object(c.a)(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=Object(r.a)(e),O=m.getDay(),w=(O<d?7:0)+O-d;return m.setDate(m.getDate()-w),m.setHours(0,0,0,0),m}},473:function(e,t,n){"use strict";n(461)},474:function(e,t,n){var r=n(56)(!1);r.push([e.i,".mt-05[data-v-462682c3]{margin-top:.05rem}",""]),e.exports=r},476:function(e,t,n){"use strict";n.r(t);var r=n(31),c=n(459),l=n(481),o=n(462),f=n(525),v=Object(r.b)({props:{event:{type:Object,required:!0},weekStatus:{type:String,default:"current"}},setup:function(e){var t=Object(r.a)((function(){return Object(c.a)(Object(l.a)(e.event.date))||Object(o.a)(Object(l.a)(e.event.date))}));return{format:f.a,isFutureEvent:t}}}),d=(n(473),n(15)),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:"current"===e.weekStatus&&e.isFutureEvent?"text-pink-600":"text-gray-300",attrs:{icon:"calendar-day"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureEvent}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/event/"+e.event.slug}},[e._v(e._s(e.event.title))])],1),e._v(" "),n("p",[e._v("\n      "+e._s(e.format(new Date(e.event.date),"MMM d"))+"\n    ")])])])}),[],!1,null,"462682c3",null);t.default=component.exports;installComponents(component,{TIcon:n(149).default})},477:function(e,t,n){"use strict";n.r(t);var r=n(31),c=Object(r.b)({props:{weekStatus:{type:String,default:"current"},events:{type:Array,default:function(){}}},setup:function(){return{}}}),l=n(15),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-1 text-xs",class:{"opacity-75":"past"===e.weekStatus}},e._l(e.events,(function(t){return n("li",{key:t.slug},[e._t("event",null,{event:t})],2)})),0)}),[],!1,null,null,null);t.default=component.exports},478:function(e,t,n){"use strict";n.r(t);var r=n(31),c=n(459),l=n(481),o=n(462),f=n(525),v=Object(r.b)({props:{milestone:{type:Object,required:!0}},setup:function(e){var t=Object(r.a)((function(){return Object(c.a)(Object(l.a)(e.milestone.deadline))||Object(o.a)(Object(l.a)(e.milestone.deadline))}));return{format:f.a,isFutureMilestone:t}}}),d=n(15),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:e.isFutureMilestone?"text-pink-600":"text-gray-300",attrs:{icon:"cutoff"===e.milestone.type?"exclamation-circle":"check-square"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureMilestone}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/milestone/"+e.milestone.slug}},[e._v(e._s(e.milestone.title))])],1),e._v(" "),n("p",[e._v("Due "+e._s(e.format(new Date(e.milestone.deadline),"MMM d")))])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(149).default})},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(450),c=n(446),l=36e5,o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,v=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(e,t){Object(c.a)(1,arguments);var n=t||{},l=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==l&&1!==l&&0!==l)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,f=O(e);if(f.date){var v=w(f.date,l);o=j(v.restDateString,v.year)}if(isNaN(o)||!o)return new Date(NaN);var d,m=o.getTime(),time=0;if(f.time&&(time=y(f.time),isNaN(time)||null===time))return new Date(NaN);if(!f.timezone){var k=new Date(m+time),D=new Date(0);return D.setFullYear(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate()),D.setHours(k.getUTCHours(),k.getUTCMinutes(),k.getUTCSeconds(),k.getUTCMilliseconds()),D}return d=h(f.timezone),isNaN(d)?new Date(NaN):new Date(m+time+d)}function O(e){var t,n={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var c=o.timezone.exec(t);c?(n.time=t.replace(c[1],""),n.timezone=c[1]):n.time=t}return n}function w(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var c=r[1]&&parseInt(r[1]),l=r[2]&&parseInt(r[2]);return{year:null==l?c:100*l,restDateString:e.slice((r[1]||r[2]).length)}}function j(e,t){if(null===t)return null;var n=e.match(f);if(!n)return null;var r=!!n[4],c=k(n[1]),l=k(n[2])-1,o=k(n[3]),v=k(n[4]),d=k(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,v,d)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var c=r.getUTCDay()||7,l=7*(t-1)+n+1-c;return r.setUTCDate(r.getUTCDate()+l),r}(t,v,d):new Date(NaN);var m=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(x[t]||(T(e)?29:28))}(t,l,o)&&function(e,t){return t>=1&&t<=(T(e)?366:365)}(t,c)?(m.setUTCFullYear(t,l,Math.max(c,o)),m):new Date(NaN)}function k(e){return e?parseInt(e):1}function y(e){var t=e.match(v);if(!t)return null;var n=D(t[1]),r=D(t[2]),c=D(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,c)?n*l+6e4*r+1e3*c:NaN}function D(e){return e&&parseFloat(e.replace(",","."))||0}function h(e){if("Z"===e)return 0;var t=e.match(d);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),c=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,c)?n*(r*l+6e4*c):NaN}var x=[31,null,31,30,31,30,31,31,30,31,30,31];function T(e){return e%400==0||e%4==0&&e%100}},482:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},483:function(e,t,n){"use strict";n(469)},484:function(e,t,n){var r=n(56)(!1);r.push([e.i,".mt-05[data-v-683883f6]{margin-top:.05rem}",""]),e.exports=r},486:function(e,t,n){"use strict";n.r(t);n(40);var r=n(495),c=n(466),l=n(525),o=n(472),f=n(496),v=n(482),d=n(31),m=Object(d.b)({props:{week:{type:Object,required:!0}},setup:function(e){var t=Object(d.a)((function(){return new Date(e.week.week)})),n=Object(d.a)((function(){return Object(r.a)(new Date,t.value,{weekStartsOn:1})?"current":Object(c.a)(t.value)?"past":"future"})),m=Object(d.a)((function(){return"".concat(Object(l.a)(Object(o.a)(t.value,{weekStartsOn:1}),"MMM d")," → ").concat(Object(l.a)(Object(f.a)(t.value,{weekStartsOn:1}),"MMM d"))}));return{format:l.a,weekStatus:n,weekDates:m,clsx:v.a}}}),O=(n(483),n(15)),component=Object(O.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-start space-x-2"},[n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tl"},expression:"{ theme: 'tl' }"}],staticClass:"relative flex items-center justify-center flex-none w-10 h-10 font-mono text-sm font-semibold border rounded-lg shadow",class:e.clsx({"text-pink-600":"current"===e.weekStatus,"bg-gray-100 text-gray-500":"past"===e.weekStatus,"bg-white":"future"===e.weekStatus}),attrs:{content:e.weekDates}},[e._v("\n    W"+e._s(e.week.number)+"\n    "),["current","past"].includes(e.weekStatus)?[n("TIcon",{staticClass:"absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1",class:"current"===e.weekStatus?"text-pink-600":"text-gray-700",attrs:{icon:"current"===e.weekStatus?"hourglass-half":"check-circle"}})]:e._e()],2),e._v(" "),n("div",[e.week.events.length||e.week.milestones.length?[e.week.events.length?n("TimelineWeekItems",{attrs:{events:e.week.events},scopedSlots:e._u([{key:"event",fn:function(t){var r=t.event;return[n("TimelineWeekEvent",{attrs:{event:r,"week-status":e.weekStatus}})]}}],null,!1,1570511934)}):e._e(),e._v(" "),e.week.milestones.length?n("TimelineWeekItems",{attrs:{events:e.week.milestones},scopedSlots:e._u([{key:"event",fn:function(e){var t=e.event;return[n("TimelineWeekMilestone",{attrs:{milestone:t}})]}}],null,!1,1244855301)}):e._e()]:n("p",{staticClass:"text-xs italic text-gray-400"},[e._v("—")])],2)])}),[],!1,null,"683883f6",null);t.default=component.exports;installComponents(component,{TIcon:n(149).default,TimelineWeekEvent:n(476).default,TimelineWeekItems:n(477).default,TimelineWeekMilestone:n(478).default})},495:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(472),c=n(446);function l(e,t,n){Object(c.a)(2,arguments);var l=Object(r.a)(e,n),o=Object(r.a)(t,n);return l.getTime()===o.getTime()}},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(447),c=n(450),l=n(446);function o(e,t){Object(l.a)(1,arguments);var n=t||{},o=n.locale,f=o&&o.options&&o.options.weekStartsOn,v=null==f?0:Object(c.a)(f),d=null==n.weekStartsOn?v:Object(c.a)(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=Object(r.a)(e),O=m.getDay(),w=6+(O<d?-7:0)-(O-d);return m.setDate(m.getDate()+w),m.setHours(23,59,59,999),m}},498:function(e,t,n){"use strict";n.r(t);n(28),n(22),n(33),n(18),n(36);var r=n(10),c=(n(34),n(27),n(31)),l=n(452),o=n(508),f=n(523),v=n(495),d=n(481);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=Object(c.b)({props:{timeline:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(e){return{compiledTimeline:Object(c.d)(function(t){var n=t.timeline;if(!n)return[];var r=0;return n.map((function(t){var n=Object(l.a)(new Date(t.startDate)),c=Object(o.a)(new Date(t.endDate)),m=Object(f.a)({start:n,end:c},{weekStartsOn:1}).map((function(t){var n=r,c=function(e,t){return t.filter((function(t){return Object(v.a)(new Date(e),Object(d.a)(t.date),{weekStartsOn:1})}))}(t,e.events),l=function(e,t){return t.filter((function(t){return Object(v.a)(new Date(e),Object(d.a)(t.deadline),{weekStartsOn:1})}))}(t,e.milestones);return r++,{number:n,events:c,milestones:l,week:t}}));return O(O({},t),{},{weeks:m})}))}(e.timeline))}}}),j=n(15),component=Object(j.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"w-full p-8 mx-auto bg-white border shadow-lg rounded-xl"},[e.compiledTimeline.length?n("ul",{staticClass:"space-y-8"},e._l(e.compiledTimeline,(function(t){return n("li",{key:t.startDate},[n("h3",{staticClass:"flex items-center justify-between mb-4 text-xs font-semibold tracking-wide uppercase"},[n("span",[e._v(e._s(t.title))]),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",theme:"tl"},expression:"{ placement: 'right', theme: 'tl' }"}],staticClass:"py-1 pl-2 text-gray-500",attrs:{content:t.description}},[n("TIcon",{attrs:{icon:"question-circle"}})],1)]),e._v(" "),n("div",{staticClass:"space-y-4"},e._l(t.weeks,(function(e){return n("TimelineWeek",{key:e.number,attrs:{week:e}})})),1)])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(149).default,TimelineWeek:n(486).default})},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(447),c=n(446);function l(e){Object(c.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(23,59,59,999),t}},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(450),c=n(447),l=n(446);function o(e,t){Object(l.a)(2,arguments);var n=Object(c.a)(e),o=Object(r.a)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}function f(e,t){Object(l.a)(2,arguments);var n=Object(r.a)(t),c=7*n;return o(e,c)}var v=n(472);function d(e,t){Object(l.a)(1,arguments);var n=e||{},r=Object(c.a)(n.start),o=Object(c.a)(n.end),d=o.getTime();if(!(r.getTime()<=d))throw new RangeError("Invalid interval");var m=Object(v.a)(r,t),O=Object(v.a)(o,t);m.setHours(15),O.setHours(15),d=O.getTime();for(var w=[],j=m;j.getTime()<=d;)j.setHours(0),w.push(Object(c.a)(j)),(j=f(j,1)).setHours(15);return w}}}]);