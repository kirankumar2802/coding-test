(()=>{var t={926:t=>{function e(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,i)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise((function(i,o){var a=t.apply(n,r);function c(t){e(a,i,o,c,s,"next",t)}function s(t){e(a,i,o,c,s,"throw",t)}c(void 0)}))}}},575:t=>{t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},913:t=>{function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},713:t=>{t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new q(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===m)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?f:p,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",m="executing",f="completed",d={};function y(){}function v(){}function g(){}var _={};_[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(E([])));w&&w!==n&&r.call(w,o)&&(_=w);var S=g.prototype=y.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=S.constructor=g,g.constructor=v,v.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},L(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(S),s(S,c,"Generator"),S[o]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(757),e=n.n(t),r=n(926),i=n.n(r),o=n(575),a=n.n(o),c=n(913),s=n.n(c),u=new(function(){function t(){a()(this,t)}var n;return s()(t,[{key:"get",value:(n=i()(e().mark((function t(n){var r,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:return r=t.sent,t.next=5,r.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})}]),t}()),l=new(function(){function t(){a()(this,t),this.items=document.querySelector(".shop__items")}return s()(t,[{key:"showItems",value:function(t){var e="";t.map((function(t){e+='\n        <div class="shop__item">\n          <span class="shop__item__discount">'.concat(t.discount,'% off</span>\n          <div class="shop__item__img">\n            <img\n              src=\'').concat(t.image,'\'\n              alt="img1"\n            />\n          </div>\n          <div class="shop__item__desc">\n            <div class="shop__item__title"><h4>').concat(t.name,'</h4></div>\n            <div class="shop__item__details">\n              <span class="shop__item__price"><span>₹').concat(t.price.display,"</span>₹").concat(t.price.actual,'</span\n              ><span data-id="').concat(t.id,'" class="shop__item__submit btn">Add to cart</span>\n            </div>\n          </div>\n        </div>\n        ')})),this.items.innerHTML=e}}]),t}()),h=n(713),p=n.n(h);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){p()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=new(function(){function t(){return a()(this,t),t.instance?t.instance:(t.instance=this,this.items=[],this.table=document.querySelector(".shop__table"),this.summaryHead=document.querySelector("#shop__summary-head"),this.undiscountedTotal=document.querySelector("#shop__summary-undiscounted"),this.discount=document.querySelector("#shop__summary-discount"),this.discountedTotal=document.querySelector("#shop__summary-discounted"),this)}return s()(t,[{key:"add",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=f(f({},t),{},{quantity:n}),i=!1;return 0===this.items.length?this.items.push(r):(this.items.map((function(r,o){r.id===t.id&&(n+=r.quantity,e.items[o].quantity=n,i=!0)})),i||this.items.push(r),this.items)}},{key:"show",value:function(){var t=this.items.map((function(t){return t.quantity}));t=this.conditionCheckHelper(t);var e="\n    <tr>\n        <th>Items (".concat(t,")</th>\n        <th>Qty</th>\n        <th>Price</th>\n    </tr>\n    ");this.items.map((function(t){e+='\n      <tr>\n      <td>\n        <span class="shop__table__item"\n          ><span\n            ><img\n              src="'.concat(t.image,'"\n              alt=""\n            />\n            <h5>').concat(t.name,'</h5></span\n          >\n          <span class="shop__table__remove-item" data-id="').concat(t.id,'">x</span></span\n        >\n      </td>\n      <td>\n        <span class="shop__table__quantity">\n          <div class="quantity-button" id="decrease" data-id="').concat(t.id,'">-</div>\n          <input type="number" id="number" value="').concat(t.quantity,'" />\n          <div class="quantity-button" id="increase" data-id="').concat(t.id,'">+</div>\n        </span>\n      </td>\n      <td>₹').concat(t.price.display,"</td>\n    </tr>\n        ")})),this.table.innerHTML=e}},{key:"showWithItems",value:function(t){var e=t.map((function(t){return t.quantity}));e=this.conditionCheckHelper(e);var n="\n      <tr>\n          <th>Items (".concat(e,")</th>\n          <th>Qty</th>\n          <th>Price</th>\n      </tr>\n      ");t.map((function(t){n+='\n        <tr>\n        <td>\n          <span class="shop__table__item"\n            ><span\n              ><img\n                src="'.concat(t.image,'"\n                alt=""\n              />\n              <h5>').concat(t.name,'</h5></span\n            >\n            <span class="shop__table__remove-item" data-id="').concat(t.id,'">x</span></span\n          >\n        </td>\n        <td>\n          <span class="shop__table__quantity">\n            <div class="quantity-button" id="decrease" data-id="').concat(t.id,'">-</div>\n            <input type="number" id="number" value="').concat(t.quantity,'" />\n            <div class="quantity-button" id="increase" data-id="').concat(t.id,'">+</div>\n          </span>\n        </td>\n        <td>₹').concat(t.price.display,"</td>\n      </tr>\n          ")})),this.table.innerHTML=n}},{key:"conditionCheckHelper",value:function(t){return t.length>1?t.reduce((function(t,e){return t+e})):1===t.length?t[0]:0}},{key:"updateCartSummary",value:function(){var t=this.items.map((function(t){return t.quantity}));t=this.conditionCheckHelper(t);var e=this.items.map((function(t){return t.price.display*t.quantity}));e=this.conditionCheckHelper(e);var n=this.items.map((function(t){return t.price.display*t.quantity-t.price.actual*t.quantity}));n=this.conditionCheckHelper(n);var r=this.items.map((function(t){return t.price.actual*t.quantity}));r=this.conditionCheckHelper(r),this.summaryHead.innerHTML="items(".concat(t,")"),this.undiscountedTotal.innerHTML="₹".concat(e),this.discount.innerHTML="-₹".concat(n),this.discountedTotal.innerHTML="₹".concat(r)}},{key:"updateCartSummaryWithItems",value:function(t){var e=t.map((function(t){return t.quantity}));e=this.conditionCheckHelper(e);var n=t.map((function(t){return t.price.display*t.quantity}));n=this.conditionCheckHelper(n);var r=t.map((function(t){return t.price.display*t.quantity-t.price.actual*t.quantity}));r=this.conditionCheckHelper(r);var i=t.map((function(t){return t.price.actual*t.quantity}));i=this.conditionCheckHelper(i),this.summaryHead.innerHTML="items(".concat(e,")"),this.undiscountedTotal.innerHTML="₹".concat(n),this.discount.innerHTML="-₹".concat(r),this.discountedTotal.innerHTML="₹".concat(i)}},{key:"removeItemWithQuantity",value:function(t,e){var n=this;return e?this.items=this.items.map((function(r){return r.id===t&&(e>=r.quantity?n.removeItem(t):r.quantity-=e),r})):this.removeItem(t),this.items}},{key:"removeItem",value:function(t){return this.items=this.items.filter((function(e){return e.id!=t})),this.items}},{key:"getItem",value:function(t){return this.items.filter((function(e){return e.attributes.id===t}))[0]}},{key:"removeAll",value:function(){this.items=[]}},{key:"getTotalCost",value:function(){var t=0,e=0,n=0;return this.items.map((function(r){var i=r.quantity*r.attributes.price,o=r.quantity*r.attributes.price*r.discount/100;t+=i,1===r.discount?e+=i:(e+=i-o,n+=o)})),{total:t,totalAfterDiscount:e,saving:n}}}]),t}()),y=new(function(){function t(){a()(this,t),this.items=[],this.cart=[]}return s()(t,[{key:"initStorage",value:function(t,e){null===localStorage.getItem(e)&&localStorage.setItem(e,JSON.stringify(t)),"items"===e&&(this.items=t),"cart"===e&&(this.cart=t)}},{key:"storeItem",value:function(t,e){var n;null===localStorage.getItem(e)?((n=[]).push(t),"cart"===e&&this.cart.push(t),localStorage.setItem(e,JSON.stringify(n))):((n=JSON.parse(localStorage.getItem(e))).push(t),localStorage.setItem(e,JSON.stringify(n)))}},{key:"getItemsFromStorage",value:function(t){return null===localStorage.getItem(t)?[]:JSON.parse(localStorage.getItem(t))}},{key:"updateItemStorage",value:function(t,e){var n=JSON.parse(localStorage.getItem(e));n.forEach((function(e,r){t.id===e.id&&n.splice(r,1,t)})),localStorage.setItem(e,JSON.stringify(n))}},{key:"getItemFromStorage",value:function(t,e){var n;return JSON.parse(localStorage.getItem(e)).forEach((function(e,r){t===e.id&&(n=e)})),n}},{key:"deleteItemFromStorage",value:function(t,e){var n=JSON.parse(localStorage.getItem(e));n.forEach((function(e,r){t===e.id&&n.splice(r,1)})),localStorage.setItem(e,JSON.stringify(n))}},{key:"clearItemsFromStorage",value:function(t){localStorage.removeItem(t)}}]),t}());document.addEventListener("DOMContentLoaded",(function(){u.get("./store/data.json").then((function(t){var e=t.items.map((function(t){return t.id=Math.random().toString(36).substr(2,9),t}));y.clearItemsFromStorage("items"),y.initStorage(e,"items"),l.showItems(e),d.show()})).catch((function(t){return console.log(t)}))})),document.querySelector(".shop__items").addEventListener("click",(function(t){if(t.target.classList.contains("shop__item__submit")){var e=t.target.dataset.id,n=y.getItemFromStorage(e,"items");d.add(n,1),d.show(),d.updateCartSummary()}})),document.querySelector(".shop__table").addEventListener("click",(function(t){var e=t.target.dataset.id;if(t.target.classList.contains("shop__table__remove-item")&&(d.removeItem(e),d.show(),d.updateCartSummary()),"decrease"===t.target.getAttribute("id")&&(1==document.querySelector("#number").value?(console.log("empty"),d.removeItem(e)):d.removeItemWithQuantity(e,1),d.show(),d.updateCartSummary()),"increase"===t.target.getAttribute("id")){var n=y.getItemFromStorage(e,"items");d.add(n,1),d.show(),d.updateCartSummary()}})),console.log("Production mode")})()})();