(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b18f5434"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),o=r("07e3"),a=r("8e60"),i=r("63b6"),s=r("9138"),c=r("ebfd").KEY,u=r("294c"),l=r("dbdb"),f=r("45f2"),d=r("62a0"),p=r("5168"),v=r("ccb9"),m=r("6718"),b=r("47ee"),h=r("9003"),g=r("e4ae"),y=r("f772"),_=r("36c3"),x=r("1bc3"),C=r("aebd"),w=r("a159"),O=r("0395"),j=r("bf0b"),P=r("d9f6"),S=r("c3a1"),E=j.f,N=P.f,k=O.f,M=n.Symbol,$=n.JSON,F=$&&$.stringify,D="prototype",I=p("_hidden"),T=p("toPrimitive"),q={}.propertyIsEnumerable,A=l("symbol-registry"),J=l("symbols"),W=l("op-symbols"),L=Object[D],z="function"==typeof M,R=n.QObject,G=!R||!R[D]||!R[D].findChild,K=a&&u(function(){return 7!=w(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=E(L,e);n&&delete L[e],N(t,e,r),n&&t!==L&&N(L,e,n)}:N,U=function(t){var e=J[t]=w(M[D]);return e._k=t,e},B=z&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Y=function(t,e,r){return t===L&&Y(W,e,r),g(t),e=x(e,!0),g(r),o(J,e)?(r.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),r=w(r,{enumerable:C(0,!1)})):(o(t,I)||N(t,I,C(1,{})),t[I][e]=!0),K(t,e,r)):N(t,e,r)},Q=function(t,e){g(t);var r,n=b(e=_(e)),o=0,a=n.length;while(a>o)Y(t,r=n[o++],e[r]);return t},H=function(t,e){return void 0===e?w(t):Q(w(t),e)},V=function(t){var e=q.call(this,t=x(t,!0));return!(this===L&&o(J,t)&&!o(W,t))&&(!(e||!o(this,t)||!o(J,t)||o(this,I)&&this[I][t])||e)},X=function(t,e){if(t=_(t),e=x(e,!0),t!==L||!o(J,e)||o(W,e)){var r=E(t,e);return!r||!o(J,e)||o(t,I)&&t[I][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=k(_(t)),n=[],a=0;while(r.length>a)o(J,e=r[a++])||e==I||e==c||n.push(e);return n},tt=function(t){var e,r=t===L,n=k(r?W:_(t)),a=[],i=0;while(n.length>i)!o(J,e=n[i++])||r&&!o(L,e)||a.push(J[e]);return a};z||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===L&&e.call(W,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),K(this,t,C(1,r))};return a&&G&&K(L,t,{configurable:!0,set:e}),U(t)},s(M[D],"toString",function(){return this._k}),j.f=X,P.f=Y,r("6abf").f=O.f=Z,r("355d").f=V,r("9aa9").f=tt,a&&!r("b8e3")&&s(L,"propertyIsEnumerable",V,!0),v.f=function(t){return U(p(t))}),i(i.G+i.W+i.F*!z,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)p(et[rt++]);for(var nt=S(p.store),ot=0;nt.length>ot;)m(nt[ot++]);i(i.S+i.F*!z,"Symbol",{for:function(t){return o(A,t+="")?A[t]:A[t]=M(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),i(i.S+i.F*!z,"Object",{create:H,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),$&&i(i.S+i.F*(!z||u(function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(r=e=n[1],(y(e)||void 0!==t)&&!B(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!B(e))return e}),n[1]=e,F.apply($,n)}}),M[D][T]||r("35e8")(M[D],T,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),o=r("6abf").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?s(t):o(n(t))}},"07e3":function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},"0fc9":function(t,e,r){var n=r("3a38"),o=Math.max,a=Math.min;t.exports=function(t,e){return t=n(t),t<0?o(t+e,0):a(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1bc3":function(t,e,r){var n=r("f772");t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,r){var n=r("f772"),o=r("e53d").document,a=n(o)&&n(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},"241e":function(t,e,r){var n=r("25eb");t.exports=function(t){return Object(n(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"268f":function(t,e,r){t.exports=r("fde4")},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"32a6":function(t,e,r){var n=r("241e"),o=r("c3a1");r("ce7e")("keys",function(){return function(t){return o(n(t))}})},"32fc":function(t,e,r){var n=r("e53d").document;t.exports=n&&n.documentElement},"335c":function(t,e,r){var n=r("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,r){var n=r("d9f6"),o=r("aebd");t.exports=r("8e60")?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},"36c3":function(t,e,r){var n=r("335c"),o=r("25eb");t.exports=function(t){return n(o(t))}},"3a38":function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"45f2":function(t,e,r){var n=r("d9f6").f,o=r("07e3"),a=r("5168")("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47ee":function(t,e,r){var n=r("c3a1"),o=r("9aa9"),a=r("355d");t.exports=function(t){var e=n(t),r=o.f;if(r){var i,s=r(t),c=a.f,u=0;while(s.length>u)c.call(t,i=s[u++])&&e.push(i)}return e}},5168:function(t,e,r){var n=r("dbdb")("wks"),o=r("62a0"),a=r("e53d").Symbol,i="function"==typeof a,s=t.exports=function(t){return n[t]||(n[t]=i&&a[t]||(i?a:o)("Symbol."+t))};s.store=n},5559:function(t,e,r){var n=r("dbdb")("keys"),o=r("62a0");t.exports=function(t){return n[t]||(n[t]=o(t))}},"584a":function(t,e){var r=t.exports={version:"2.6.4"};"number"==typeof __e&&(__e=r)},"5b4e":function(t,e,r){var n=r("36c3"),o=r("b447"),a=r("0fc9");t.exports=function(t){return function(e,r,i){var s,c=n(e),u=o(c.length),l=a(i,u);if(t&&r!=r){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}}},"62a0":function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},"63b6":function(t,e,r){var n=r("e53d"),o=r("584a"),a=r("d864"),i=r("35e8"),s=r("07e3"),c="prototype",u=function(t,e,r){var l,f,d,p=t&u.F,v=t&u.G,m=t&u.S,b=t&u.P,h=t&u.B,g=t&u.W,y=v?o:o[e]||(o[e]={}),_=y[c],x=v?n:m?n[e]:(n[e]||{})[c];for(l in v&&(r=e),r)f=!p&&x&&void 0!==x[l],f&&s(y,l)||(d=f?x[l]:r[l],y[l]=v&&"function"!=typeof x[l]?r[l]:h&&f?a(d,n):g&&x[l]==d?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):b&&"function"==typeof d?a(Function.call,d):d,b&&((y.virtual||(y.virtual={}))[l]=d,t&u.R&&_&&!_[l]&&i(_,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6718:function(t,e,r){var n=r("e53d"),o=r("584a"),a=r("b8e3"),i=r("ccb9"),s=r("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:i.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),o=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},"6b4c":function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"794b":function(t,e,r){t.exports=!r("8e60")&&!r("294c")(function(){return 7!=Object.defineProperty(r("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e90":function(t,e,r){var n=r("d9f6"),o=r("e4ae"),a=r("c3a1");t.exports=r("8e60")?Object.defineProperties:function(t,e){o(t);var r,i=a(e),s=i.length,c=0;while(s>c)n.f(t,r=i[c++],e[r]);return t}},"85f2":function(t,e,r){t.exports=r("454f")},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},"8e60":function(t,e,r){t.exports=!r("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},9138:function(t,e,r){t.exports=r("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a159:function(t,e,r){var n=r("e4ae"),o=r("7e90"),a=r("1691"),i=r("5559")("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=r("1ec9")("iframe"),n=a.length,o="<",i=">";e.style.display="none",r("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),u=t.F;while(n--)delete u[c][a[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(s[c]=n(t),r=new s,s[c]=null,r[i]=t):r=u(),void 0===e?r:o(r,e)}},a4bb:function(t,e,r){t.exports=r("8aae")},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,r){var n=r("3a38"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bf0b:function(t,e,r){var n=r("355d"),o=r("aebd"),a=r("36c3"),i=r("1bc3"),s=r("07e3"),c=r("794b"),u=Object.getOwnPropertyDescriptor;e.f=r("8e60")?u:function(t,e){if(t=a(t),e=i(e,!0),c)try{return u(t,e)}catch(r){}if(s(t,e))return o(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),o=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(n(t),e)}})},c3a1:function(t,e,r){var n=r("e6f3"),o=r("1691");t.exports=Object.keys||function(t){return n(t,o)}},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var n=r("63b6"),o=r("584a"),a=r("294c");t.exports=function(t,e){var r=(o.Object||{})[t]||Object[t],i={};i[t]=e(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},cebc:function(t,e,r){"use strict";var n=r("268f"),o=r.n(n),a=r("e265"),i=r.n(a),s=r("a4bb"),c=r.n(s),u=r("85f2"),l=r.n(u);function f(t,e,r){return e in t?l()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=c()(r);"function"===typeof i.a&&(n=n.concat(i()(r).filter(function(t){return o()(r,t).enumerable}))),n.forEach(function(e){f(t,e,r[e])})}return t}r.d(e,"a",function(){return d})},cf2a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",{staticClass:"mt-4"},[t._v("模擬訂單")]),r("div",{staticClass:"product-list"},[r("div",{staticClass:"row mt-4"},t._l(t.products,function(e){return r("div",{key:e.id,staticClass:"col-md-4 mb-3"},[r("div",{staticClass:"card mt-0 bg-white rounded-0 h-100 prod-card"},[r("div",{staticClass:"product-img",staticStyle:{"padding-bottom":"45%","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),r("div",{staticClass:"card-body"},[r("div",{staticClass:"prod-info mb-3"},[r("h5",{staticClass:"card-title mb-3 font-weight-bold overflow-hidden"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v(t._s(e.description))])]),r("div",{staticClass:"d-flex justify-content-between align-items-baseline prod-price"},[e.price?t._e():r("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(e.origin_price))+"元")]),e.price?r("del",{staticClass:"font-italic"},[t._v("原價 "+t._s(t._f("currency")(e.origin_price)))]):t._e(),e.price?r("div",{staticClass:"h5 text-danger font-weight-bold"},[t._v("售價 "+t._s(t._f("currency")(e.price)))]):t._e()])]),r("div",{staticClass:"card-footer d-flex"},[r("button",{staticClass:"btn btn-outline-info btn-sm",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.getProduct(e.id)}}},[r("i",{staticClass:"fas fa-search"}),t._v("\n              查看商品\n            ")]),r("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.addtoCart(e.id)}}},[r("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n              加入購物車\n            ")])])])])}),0),r("pagination",{attrs:{"page-data":t.pagination},on:{changepage:t.getProducts}})],1),r("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title font-weight-bold",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._m(0)]),r("div",{staticClass:"modal-body"},[r("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),r("div",{staticClass:"mt-3"},[r("div",{staticClass:"h5 pb-2 font-weight-bold title"},[t._v("產品描述")]),r("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),r("p",[t._v(t._s(t.product.description))])]),r("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():r("div",{staticClass:"h5"},[t._v(t._s(t._f("currency")(t.product.origin_price))+" 元")]),t.product.price?r("del",{staticClass:"font-italic"},[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price))+" 元")]):t._e(),t.product.price?r("div",{staticClass:"h5 text-danger font-weight-bold"},[t._v("售價 "+t._s(t._f("currency")(t.product.price))+" 元")]):t._e()]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.buyNum,expression:"buyNum"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.buyNum=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("請選擇商品數量")]),t._l(10,function(e){return r("option",{key:e,domProps:{value:e}},[t._v("選購 "+t._s(e)+" "+t._s(t.product.unit))])})],2)]),r("div",{staticClass:"modal-footer"},[r("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("小計\n            "),r("strong",[t._v(t._s(t._f("currency")(t.buyNum*t.product.price)))]),t._v(" 元\n          ")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addtoCart(t.product.id,t.buyNum)}}},[t.status.loadingItem==t.product.id?r("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])]),0!==t.carts.total?r("div",{staticClass:"my-5 row justify-content-center"},[r("div",{staticClass:"col-md-6"},[r("h3",{staticClass:"text-center mb-4"},[t._v("購物車明細")]),r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.carts.carts,function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(r){return r.preventDefault(),t.removeCart(e.id)}}},[r("i",{staticClass:"far fa-trash-alt"})])]),r("td",{staticClass:"align-middle"},[t._v("\n              "+t._s(e.product.title)+"\n              "),e.coupon?r("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]),t.carts.final_total!==t.carts.total?r("tr",[r("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),r("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]),r("div",{staticClass:"input-group mb-3 input-group-sm"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addCouponCode(e)}}},[t._v("套用優惠碼")])])])])]):t._e(),0!==t.carts.total?r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.creatOrder(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useremail"}},[t._v("Email")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?r("span",{staticClass:"text-danger"},[t._v("給個Emial很困難??")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?r("span",{staticClass:"text-danger"},[t._v("請不要當個隱姓埋名的大俠")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("phone")},attrs:{type:"tel",id:"usertel",name:"phone",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("phone")?r("span",{staticClass:"text-danger"},[t._v("您不輸入就無法聯絡您喔")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?r("span",{staticClass:"text-danger"},[t._v("商品將永遠存放倉庫")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[t._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(2)])]):t._e()])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th"),r("th",[t._v("品名")]),r("th",{staticClass:"text-right"},[t._v("數量")]),r("th",{staticClass:"text-center"},[t._v("單價")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],a=r("cebc"),i=r("1157"),s=r.n(i),c=r("2f62"),u={data:function(){return{product:{},coupon_code:"",buyNum:1,form:{user:{}}}},methods:Object(a["a"])({},Object(c["b"])("productsModules",["getProducts"]),Object(c["b"])("cartModules",["getCart"]),{getProduct:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/product/").concat(t);this.$http.get(r).then(function(t){t.data.success&&(e.product=t.data.product,e.buyNum=1,s()("#productModal").modal("show"))})},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this;r.$store.dispatch("cartModules/addtoCart",{id:t,qty:e}),s()("#productModal").modal("hide")},removeCart:function(t){var e=this;e.$store.dispatch("cartModules/removeCart",t)},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/coupon"),r={code:t.coupon_code};t.$store.dispatch("updateLoading",!0),this.$http.post(e,{data:r}).then(function(e){t.$store.dispatch("updateLoading",!1),e.data.success?t.$store.dispatch("cartModules/getCart"):alert(e.data.message)})},creatOrder:function(){var t=this,e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("cloudsu","/order");this.$validator.validate().then(function(n){n?t.$http.post(r,{data:e.form}).then(function(t){e.$router.push("/customer_checkout/".concat(t.data.orderId))}):console.log("欄位不完整")})}}),computed:Object(a["a"])({},Object(c["c"])("productsModules",["products"]),Object(c["c"])(["pagination","status"]),Object(c["c"])("cartModules",["carts"])),created:function(){this.$store.dispatch("productsModules/getProducts"),this.$store.dispatch("cartModules/getCart")}},l=u,f=r("2877"),d=Object(f["a"])(l,n,o,!1,null,null,null);e["default"]=d.exports},d864:function(t,e,r){var n=r("79aa");t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,r){var n=r("e4ae"),o=r("794b"),a=r("1bc3"),i=Object.defineProperty;e.f=r("8e60")?Object.defineProperty:function(t,e,r){if(n(t),e=a(e,!0),n(r),o)try{return i(t,e,r)}catch(s){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},dbdb:function(t,e,r){var n=r("584a"),o=r("e53d"),a="__core-js_shared__",i=o[a]||(o[a]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e265:function(t,e,r){t.exports=r("ed33")},e4ae:function(t,e,r){var n=r("f772");t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},e6f3:function(t,e,r){var n=r("07e3"),o=r("36c3"),a=r("5b4e")(!1),i=r("5559")("IE_PROTO");t.exports=function(t,e){var r,s=o(t),c=0,u=[];for(r in s)r!=i&&n(s,r)&&u.push(r);while(e.length>c)n(s,r=e[c++])&&(~a(u,r)||u.push(r));return u}},ebfd:function(t,e,r){var n=r("62a0")("meta"),o=r("f772"),a=r("07e3"),i=r("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},u=!r("294c")(function(){return c(Object.preventExtensions({}))}),l=function(t){i(t,n,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[n].i},d=function(t,e){if(!a(t,n)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[n].w},p=function(t){return u&&v.NEED&&c(t)&&!a(t,n)&&l(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-b18f5434.d440bc7a.js.map