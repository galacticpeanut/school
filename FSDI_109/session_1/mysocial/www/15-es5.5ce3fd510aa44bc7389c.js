(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{W9vR:function(n,l,u){"use strict";u.r(l);var o=u("CcnG"),e=function(){return function(){}}(),r=u("pMnS"),i=u("oBZk"),t=u("ZZ/e"),b=u("gIcY"),a=u("Ip0R"),c=function(){return function(){this.belongsTo="Robert"}}(),s=u("EnSQ"),d=function(){function n(n){var l=this;this.data=n,this.model=new c,this.myFriends=[],this.data.getAllFriends().subscribe((function(n){l.myFriends=[],l.myFriends=n}))}return n.prototype.saveFriend=function(){console.log("saving Friend",this.model),this.data.saveFriend(this.model),this.model=new c},n}(),g=o.qb({encapsulation:0,styles:[[".background[_ngcontent-%COMP%]{--background:linear-gradient(153deg, rgba(0,144,247,1) 0%, rgba(10,81,170,1) 100%)}ion-card-header[_ngcontent-%COMP%]{background-color:#c5c5c5;color:#0090f7;border-bottom:1px solid #f0f0f0;text-align:center}ion-card[_ngcontent-%COMP%]{background-color:#fafafa;border-bottom:1px solid #f0f0f0}"]],data:{}});function h(n){return o.Jb(0,[(n()(),o.sb(0,0,null,null,2,"ion-item",[],null,null,null,i.E,i.l)),o.rb(1,49152,null,0,t.E,[o.h,o.k,o.z],null,null),(n()(),o.Ib(2,0,[" "," "]))],null,(function(n,l){n(l,2,0,l.context.$implicit.name)}))}function m(n){return o.Jb(0,[(n()(),o.sb(0,0,null,null,6,"ion-header",[],null,null,null,i.B,i.i)),o.rb(1,49152,null,0,t.y,[o.h,o.k,o.z],null,null),(n()(),o.sb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,i.L,i.s)),o.rb(3,49152,null,0,t.zb,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.sb(4,0,null,0,2,"ion-title",[],null,null,null,i.K,i.r)),o.rb(5,49152,null,0,t.xb,[o.h,o.k,o.z],null,null),(n()(),o.Ib(-1,0,[" My Friends "])),(n()(),o.sb(7,0,null,null,27,"ion-content",[["class","background"]],null,null,null,i.A,i.h)),o.rb(8,49152,null,0,t.r,[o.h,o.k,o.z],null,null),(n()(),o.sb(9,0,null,0,21,"ion-card",[],null,null,null,i.z,i.c)),o.rb(10,49152,null,0,t.j,[o.h,o.k,o.z],null,null),(n()(),o.sb(11,0,null,0,2,"ion-card-header",[],null,null,null,i.w,i.e)),o.rb(12,49152,null,0,t.l,[o.h,o.k,o.z],null,null),(n()(),o.Ib(-1,0,[" Save Friend "])),(n()(),o.sb(14,0,null,0,16,"ion-card-content",[],null,null,null,i.v,i.d)),o.rb(15,49152,null,0,t.k,[o.h,o.k,o.z],null,null),(n()(),o.sb(16,0,null,0,11,"ion-item",[],null,null,null,i.E,i.l)),o.rb(17,49152,null,0,t.E,[o.h,o.k,o.z],null,null),(n()(),o.sb(18,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,i.F,i.m)),o.rb(19,49152,null,0,t.K,[o.h,o.k,o.z],{position:[0,"position"]},null),(n()(),o.Ib(-1,0,["Name:"])),(n()(),o.sb(21,0,null,0,6,"ion-input",[["name","name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,r=n.component;return"ionBlur"===l&&(e=!1!==o.Eb(n,23)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==o.Eb(n,23)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(r.model.name=u)&&e),e}),i.D,i.k)),o.rb(22,49152,null,0,t.D,[o.h,o.k,o.z],{name:[0,"name"]},null),o.rb(23,16384,null,0,t.Hb,[o.k],null,null),o.Fb(1024,null,b.b,(function(n){return[n]}),[t.Hb]),o.rb(25,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Fb(2048,null,b.c,null,[b.e]),o.rb(27,16384,null,0,b.d,[[4,b.c]],null,null),(n()(),o.sb(28,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["size","medium"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==n.component.saveFriend()&&o),o}),i.u,i.b)),o.rb(29,49152,null,0,t.h,[o.h,o.k,o.z],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(n()(),o.Ib(-1,0,["Save Friend"])),(n()(),o.sb(31,0,null,0,3,"ion-list",[],null,null,null,i.G,i.n)),o.rb(32,49152,null,0,t.L,[o.h,o.k,o.z],null,null),(n()(),o.hb(16777216,null,0,1,null,h)),o.rb(34,278528,null,0,a.h,[o.N,o.K,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var u=l.component;n(l,3,0,"primary"),n(l,19,0,"stacked"),n(l,22,0,"name"),n(l,25,0,"name",u.model.name),n(l,29,0,"primary","block","medium"),n(l,34,0,u.myFriends)}),(function(n,l){n(l,21,0,o.Eb(l,27).ngClassUntouched,o.Eb(l,27).ngClassTouched,o.Eb(l,27).ngClassPristine,o.Eb(l,27).ngClassDirty,o.Eb(l,27).ngClassValid,o.Eb(l,27).ngClassInvalid,o.Eb(l,27).ngClassPending)}))}function p(n){return o.Jb(0,[(n()(),o.sb(0,0,null,null,1,"app-tab3",[],null,null,null,m,g)),o.rb(1,49152,null,0,d,[s.a],null,null)],null,null)}var f=o.ob("app-tab3",d,p,{},{},[]),k=u("ZYCi");u.d(l,"Tab3PageModuleNgFactory",(function(){return C}));var C=o.pb(e,[],(function(n){return o.Bb([o.Cb(512,o.j,o.ab,[[8,[r.a,f]],[3,o.j],o.x]),o.Cb(4608,a.k,a.j,[o.u,[2,a.q]]),o.Cb(4608,t.a,t.a,[o.z,o.g]),o.Cb(4608,t.Db,t.Db,[t.a,o.j,o.q]),o.Cb(4608,t.Gb,t.Gb,[t.a,o.j,o.q]),o.Cb(4608,b.g,b.g,[]),o.Cb(1073742336,a.b,a.b,[]),o.Cb(1073742336,t.Bb,t.Bb,[]),o.Cb(1073742336,b.f,b.f,[]),o.Cb(1073742336,b.a,b.a,[]),o.Cb(1073742336,k.n,k.n,[[2,k.s],[2,k.m]]),o.Cb(1073742336,e,e,[]),o.Cb(1024,k.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);