(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{224:function(t,e,n){var content=n(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("14112743",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("47c2dfad",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";var r=n(224);n.n(r).a},351:function(t,e,n){(e=n(31)(!1)).push([t.i,".form{max-width:24rem;margin:0 auto 2rem}.status p{line-height:1.5}",""]),t.exports=e},352:function(t,e,n){"use strict";var r=n(225);n.n(r).a},353:function(t,e,n){(e=n(31)(!1)).push([t.i,".signup-wrapper{width:400px;margin-left:auto;margin-right:auto}.signup{width:100%;height:450px}.status-card{margin-top:2rem}",""]),t.exports=e},391:function(t,e,n){"use strict";n.r(e);n(25),n(19);var r=n(3),o={name:"MailchimpForm",data:function(){return{form:{email:"",name:"",consent:!0},errorEmail:!1,errorConsent:!1,loading:!1}},methods:{submit:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var data,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loading=!0,data={email:t,name:e},r.prev=2,r.next=5,n.$axios.$post("https://a696oel4ti.execute-api.eu-central-1.amazonaws.com/dev/add-to-list",data,{headers:{"Content-Type":"application/json"}});case 5:o=r.sent,console.log("SUCCESS"),console.log(o),n.$emit("success"),r.next=16;break;case 11:r.prev=11,r.t0=r.catch(2),console.log("ERROR"),console.error(r.t0),n.$emit("failure");case 16:return r.prev=16,n.loading=!1,r.finish(16);case 19:case"end":return r.stop()}}),r,null,[[2,11,16,19]])})))()},checkForm:function(t){this.errorConsent=!this.form.consent,this.errorEmail=!1,this.form.email&&this.validEmail(this.form.email)||(this.errorEmail=!0),this.errorConsent||this.errorEmail||this.submit(this.form.email,this.form.name),t.preventDefault()},validEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},l=(n(350),n(9)),c={name:"PageNewsletter",components:{MailchimpForm:Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card timeline-event status-card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"status"},[n("h3",[t._v("\n        TechLabs Berlin Newsletter\n      ")]),t._v(" "),n("p",[t._v("\n        Stay in the loop and get notifications about upcoming events,\n        workshops, new application dates, partnership opportunities, and more.\n      ")]),t._v(" "),n("div",{staticClass:"form has-text-left"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input is-medium",attrs:{type:"text",placeholder:"Enter your name",disabled:t.loading},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input is-medium",class:{"is-danger":t.errorEmail},attrs:{type:"email",placeholder:"Enter your email",disabled:t.loading},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),t.errorEmail?n("p",{staticClass:"help is-danger"},[t._v("\n            This email is invalid\n          ")]):t._e()]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.consent,expression:"form.consent"}],attrs:{type:"checkbox",disabled:t.loading},domProps:{checked:Array.isArray(t.form.consent)?t._i(t.form.consent,null)>-1:t.form.consent},on:{change:function(e){var n=t.form.consent,r=e.target,o=!!r.checked;if(Array.isArray(n)){var l=t._i(n,null);r.checked?l<0&&t.$set(t.form,"consent",n.concat([null])):l>-1&&t.$set(t.form,"consent",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.form,"consent",o)}}}),t._v("\n              I agree to subscribe to the newsletter and receive emails from\n              TechLabs Berlin. I can unsubscribe at any time.\n            ")])]),t._v(" "),t.errorConsent?n("p",{staticClass:"help is-danger"},[t._v("\n            You need to agree, otherwise we cannot add you to our list.\n          ")]):t._e()]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("div",{staticClass:"control"},[n("button",{staticClass:"techlabs-button",class:{"is-loading":t.loading},on:{click:t.checkForm}},[t._v("\n              Subscribe\n            ")])]),t._v(" "),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-text",attrs:{disabled:t.loading},on:{click:function(e){return t.$router.push("/")}}},[t._v("\n              Cancel\n            ")])])])])])])])}),[],!1,null,null,null).exports},data:function(){return{status:this.$route.query.status}}},m=(n(352),Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["success"===t.status?n("div",{staticClass:"card timeline-event status-card"},[t._m(0)]):"failure"===t.status?n("div",{staticClass:"card timeline-event status-card"},[t._m(1)]):n("div",[n("MailchimpForm",{on:{success:function(e){t.status="success"},failure:function(e){t.status="failure"}}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"status"},[e("h3",[this._v("Done!")]),this._v(" "),e("p",[this._v("\n          Thank you for the support and we'll be in touch :)\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"status"},[e("h3",[this._v("Ooops...")]),this._v(" "),e("p",[this._v("\n          ... something went wrong! Wanna try again?\n        ")])])])}],!1,null,null,null));e.default=m.exports}}]);