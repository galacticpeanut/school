(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CqG3:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(n){for(var e in n)t.hasOwnProperty(e)||(t[e]=n[e])}(e("g+7Q"))},Dl6n:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return s}));const r=(n,t)=>null!==t.closest(n),o=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,i=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,s=async(n,t,e)=>{if(null!=n&&"#"!==n[0]&&!a.test(n)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(n,e)}return!1}},EnSQ:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e("CqG3");var r=e("8Y7J"),o=e("Xr7G");let i=(()=>{class n{constructor(n){this.fb=n,this.postCollection=n.collection("posts"),this.friendCollection=n.collection("friends"),this.posts=this.postCollection.valueChanges(),this.friends=this.friendCollection.valueChanges()}saveFriend(n){var t=Object.assign({},n);this.friendCollection.add(t)}savePost(n){var t=Object.assign({},n);this.postCollection.add(t)}getAllPosts(){return this.posts}getAllFriends(){return this.friends}}return n.ngInjectableDef=r.Kb({factory:function(){return new n(r.Lb(o.a))},token:n,providedIn:"root"}),n})()},K6rM:function(n,t,e){"use strict";e.d(t,"a",(function(){return w})),e.d(t,"b",(function(){return M})),e.d(t,"c",(function(){return v})),e.d(t,"d",(function(){return y})),e.d(t,"e",(function(){return i}));var r=e("c1op"),o=e("kBU6");const i=n=>new Promise((t,e)=>{Object(r.m)(()=>{a(n),s(n).then(e=>{e.animation&&e.animation.destroy(),c(n),t(e)},t=>{c(n),e(t)})})}),a=n=>{const t=n.enteringEl,e=n.leavingEl;E(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),y(t,!1),e&&y(e,!1)},s=async n=>{const t=await u(n);return t?l(t,n):d(n)},c=n=>{const t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},u=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await(()=>e.e(97).then(e.bind(null,"5+Pq")))()).iosTransitionAnimation:(await(()=>e.e(98).then(e.bind(null,"RRi8")))()).mdTransitionAnimation},l=async(n,t)=>{let r;await f(t,!0);try{const o=await e.e(5).then(e.bind(null,"gHMO"));r=await o.create(n,t.baseEl,t)}catch(i){r=n(t.baseEl,t)}m(t.enteringEl,t.leavingEl);const o=await p(r,t);return t.progressCallback&&t.progressCallback(void 0),o&&g(t.enteringEl,t.leavingEl),{hasCompleted:o,animation:r}},d=async n=>{const t=n.enteringEl,e=n.leavingEl;return await f(n,!1),m(t,e),g(t,e),{hasCompleted:!0}},f=async(n,t)=>{const e=(void 0!==n.deepWait?n.deepWait:t)?[w(n.enteringEl),w(n.leavingEl)]:[b(n.enteringEl),b(n.leavingEl)];await Promise.all(e),await h(n.viewIsReady,n.enteringEl)},h=async(n,t)=>{n&&await n(t)},p=(n,t)=>{const e=t.progressCallback,r=new Promise(t=>{n.onFinish(e=>{"number"==typeof e?t(1===e):void 0!==n.hasCompleted&&t(n.hasCompleted)})});return e?(n.progressStart(!0),e(n)):n.play(),r},m=(n,t)=>{v(t,o.c),v(n,o.a)},g=(n,t)=>{v(n,o.b),v(t,o.d)},v=(n,t)=>{if(n){const e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},b=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),w=async n=>{const t=n;if(t){if(null!=t.componentOnReady&&null!=await t.componentOnReady())return;await Promise.all(Array.from(t.children).map(w))}},y=(n,t)=>{t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=(n,t,e)=>{void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")},M=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},YtD4:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const r=n=>{try{if("string"!=typeof n||""===n)return n;const t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,s.forEach(n=>{const e=t.querySelectorAll(n);for(let r=e.length-1;r>=0;r--){const n=e[r];n.parentNode?n.parentNode.removeChild(n):t.removeChild(n);const a=i(n);for(let t=0;t<a.length;t++)o(a[t])}});const r=i(t);for(let n=0;n<r.length;n++)o(r[n]);const a=document.createElement("div");a.appendChild(t);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},o=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let e=n.attributes.length-1;e>=0;e--){const t=n.attributes.item(e),r=t.name;if(!a.includes(r.toLowerCase())){n.removeAttribute(r);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}const t=i(n);for(let e=0;e<t.length;e++)o(t[e])},i=n=>null!=n.children?n.children:n.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},"g+7Q":function(n,t,e){"use strict";e.r(t);var r=e("Xr7G"),o=e("m7gy"),i=e("m+Ru"),a=e("fKx8"),s=e("bMVn"),c=e("iKj2"),u=e("cNHj");e.d(t,"EnablePersistenceToken",(function(){return r.c})),e.d(t,"PersistenceSettingsToken",(function(){return r.e})),e.d(t,"FirestoreSettingsToken",(function(){return r.d})),e.d(t,"DefaultFirestoreSettings",(function(){return r.b})),e.d(t,"associateQuery",(function(){return r.f})),e.d(t,"AngularFirestore",(function(){return r.a})),e.d(t,"AngularFirestoreModule",(function(){return o.a})),e.d(t,"validateEventsArray",(function(){return i.b})),e.d(t,"AngularFirestoreCollection",(function(){return i.a})),e.d(t,"AngularFirestoreCollectionGroup",(function(){return a.a})),e.d(t,"AngularFirestoreDocument",(function(){return s.a})),e.d(t,"docChanges",(function(){return c.c})),e.d(t,"sortedChanges",(function(){return c.d})),e.d(t,"combineChanges",(function(){return c.b})),e.d(t,"combineChange",(function(){return c.a})),e.d(t,"fromRef",(function(){return u.c})),e.d(t,"fromDocRef",(function(){return u.b})),e.d(t,"fromCollectionRef",(function(){return u.a}))},m9yc:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));const r=async(n,t,e,r,o)=>{if(n)return n.attachViewToDom(t,e,o,r);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e;return r&&r.forEach(n=>i.classList.add(n)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},"nN+u":function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r}));const r=(n,t,e)=>{const r=new MutationObserver(n=>{e(o(n,t))});return r.observe(n,{childList:!0,subtree:!0}),r},o=(n,t)=>{let e;return n.forEach(n=>{for(let r=0;r<n.addedNodes.length;r++)e=i(n.addedNodes[r],t)||e}),e},i=(n,t)=>{if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find(n=>!0===n.checked)}},opz7:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return r}));const r=()=>{const n=window.TapticEngine;n&&n.selection()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},a=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));class r{constructor(n,t){this.x=n,this.y=t}}const o=(n,t,e,r,o)=>{const s=a(n.y,t.y,e.y,r.y,o);return i(n.x,t.x,e.x,r.x,s[0])},i=(n,t,e,r,o)=>o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+r*o))-n*Math.pow(o-1,3),a=(n,t,e,r,o)=>s((r-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(n=>n>=0&&n<=1),s=(n,t,e,r)=>{if(0===n)return((n,t,e)=>{const r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]})(t,e,r);const o=(3*(e/=n)-(t/=n)*t)/3,i=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];const a=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(i/2,.5)-t/3];if(a>0)return[Math.pow(-i/2+Math.sqrt(a),1/3)-Math.pow(i/2+Math.sqrt(a),1/3)-t/3];const s=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),u=2*Math.pow(s,1/3);return[u*Math.cos(c/3)-t/3,u*Math.cos((c+2*Math.PI)/3)-t/3,u*Math.cos((c+4*Math.PI)/3)-t/3]}}}]);