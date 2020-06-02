(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=a(5),s=a(2),i=a(3),u=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement(s.b,{to:"/",className:"logo__link"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo__img"})))},m=function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container footer__container"},c.a.createElement(u,null),c.a.createElement("div",{className:"footer__links"},c.a.createElement(s.b,{to:"/",className:"footer__link"},"Github"),c.a.createElement(s.b,{to:"/",className:"footer__link"},"Contacts"),c.a.createElement(s.b,{to:"/",className:"footer__link"},"Rights")),c.a.createElement("div",{className:"footer__top-button-container"},c.a.createElement("p",{className:"footer__paragraph"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e}))))},d=a(6),p=function(e){var t=e.title,a=e.link,n=e.exact,r=e.headerItemRef,o=Object(i.g)();return c.a.createElement("li",{className:"nav__item"},c.a.createElement(s.c,{to:a,ref:o.pathname===a?r:null,exact:n,className:"nav__link"},t))},f=[{title:"Home",link:"/",exact:!0},{title:"Phones",link:"/phones",exact:!1},{title:"Tablets",link:"/tablets",exact:!1},{title:"Accessories",link:"/accessories",exact:!1}],b=function(e){var t=e.headerItemRef;return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},f.map((function(e){var a=e.title,n=e.link,r=e.exact;return c.a.createElement(p,{key:a,title:a,link:n,exact:r,headerItemRef:t})}))))},_=a(11),E=a.n(_),h=a(13),g=a(12),v=a(27),O=a(28),N=function(e){return{type:"SET_PRODUCTS",products:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return t.products;default:return e}},k="https://mate-academy.github.io/react_phone-catalog/api/products",y=function(){var e=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,".json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/").concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=a(30),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITES":return[].concat(Object(C.a)(e),[t.product]);case"DELETE_FAVORITE":return e.filter((function(e){return e.id!==t.id}));default:return e}},P=Object(g.combineReducers)({products:j,favorites:w}),x=function(e){return e.products},R=function(e){return e.favorites},M=function(){return function(){var e=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:a=e.sent,t(N(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")||""):{},F=Object(g.createStore)(P,T,Object(v.composeWithDevTools)(Object(g.applyMiddleware)(O.a)));F.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(F.getState()))}));var I,A=F;!function(e){e.NEWEST="Newest",e.FROM_A_TO_Z="From-A-to-Z",e.FROM_Z_TO_A="From-Z-to-A",e.CHEAPEST="Cheapest"}(I||(I={}));var L="left",q="right",B="Items on page",D="Sort by",V=[{option:I.NEWEST},{option:I.FROM_A_TO_Z},{option:I.FROM_Z_TO_A},{option:I.CHEAPEST}],W=[{option:"4"},{option:"8"},{option:"16"},{option:"All"}],Z={phone:"phones",tablet:"tablets",favorites:"favorites"},H="phone",z="tablet",G="/phones",J="/tablets",U="/favorites",X="/cart",$="Hot prices",K="Brand new models",Q="Mobile phones",Y="Tablets",ee="Favorites",te=function(e){var t=e.headerItemRef,a=Object(l.c)(R),n=Object(i.g)();return c.a.createElement("div",{className:"favorites",ref:n.pathname===U?t:null},c.a.createElement(s.b,{to:"/favorites",className:"favorites__button"},a.length>0&&c.a.createElement("span",{className:"favorites__indicator"},a.length)))},ae=function(e){var t=e.headerItemRef,a=Object(i.g)();return c.a.createElement("div",{className:"cart"},c.a.createElement(s.b,{to:"/",ref:a.pathname===X?t:null,className:"cart__button"}))},ne=a(4),ce=a.n(ne);var re=function(e,t){var a;return function(){for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];clearTimeout(a),a=setTimeout((function(){e.apply(void 0,c)}),t)}},oe=function(){var e=Object(i.f)(),t=Object(i.g)(),a=Object(l.b)(),c=new URLSearchParams(t.search),r=Object(n.useMemo)((function(){return c.get("query")||""}),[c]),o=c.get("sortBy"),s=Object(n.useState)(r),u=Object(d.a)(s,2),m=u[0],p=u[1],f=Object(l.c)(x),b=Object(l.c)(R);Object(n.useEffect)((function(){return a(M()),function(){return p("")}}),[a,t.pathname]);var _=Object(n.useCallback)(re((function(t){c.set("query",t.toLowerCase()),c.get("query")||c.delete("query"),e.push({search:c.toString()})}),500),[]),E=Object(n.useCallback)((function(e){var t=e.target.value;p(t),_(t)}),[_]),h=Object(n.useMemo)((function(){return t.pathname===U?b.filter((function(e){return e.name.toLowerCase().includes(r)})):f.filter((function(e){return e.name.toLowerCase().includes(r)})).slice().sort((function(e,t){switch(o){case I.NEWEST:return e.age-t.age;case I.FROM_A_TO_Z:return e.name.localeCompare(t.name);case I.FROM_Z_TO_A:return t.name.localeCompare(e.name);case I.CHEAPEST:return e.price-t.price;default:return 0}}))}),[f,r,o,b,t.pathname]),g=Object(n.useCallback)((function(){p(""),c.get("query")||c.delete("query"),e.push({search:""})}),[c,e]);return{inputValue:m,searchProducts:E,searchedProducts:h,location:t,history:e,search:c,searchReset:g}},le=function(e){var t=e.inputValue,a=e.searchProducts,r=e.searchReset,o=Object(n.useRef)(null),l=oe().location,s=Object(n.useCallback)((function(){r(),o&&o.current&&o.current.focus()}),[r]),i=Object(n.useMemo)((function(){switch(l.pathname){case G:return"phones";case J:return"tablets";case U:return"favorites";default:return"products"}}),[l.pathname]);return c.a.createElement("div",{className:"search"},c.a.createElement("input",{ref:o,type:"text",value:t,className:"search__input",placeholder:"Search in ".concat(i,"..."),onChange:a}),c.a.createElement("button",{type:"button","aria-label":"Clear input",className:ce()({search__button:!0,"search__button--clear":t}),onClick:s,disabled:0===t.length}))},se=function(){var e=oe(),t=e.inputValue,a=e.searchProducts,r=e.searchReset,o=e.location,l=Object(n.useState)(0),s=Object(d.a)(l,2),i=s[0],m=s[1],p=Object(n.useState)(0),f=Object(d.a)(p,2),_=f[0],E=f[1],h=Object(n.useCallback)((function(e){null!==e&&(m(e.getBoundingClientRect().width),E(e.getBoundingClientRect().x))}),[]);return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(u,null)),c.a.createElement("div",{className:"header__nav"},c.a.createElement(b,{headerItemRef:h}))),c.a.createElement("div",{className:"header__flex-wrap"},"/"!==o.pathname&&c.a.createElement(le,{inputValue:t,searchProducts:a,searchReset:r}),c.a.createElement(te,{headerItemRef:h}),c.a.createElement(ae,{headerItemRef:h})),c.a.createElement("span",{className:"nav--active-element",style:{width:"".concat(i,"px"),left:"".concat(_,"px")}}))},ie=function(e){var t=e.name,a=e.type,r=e.imageUrl,o=e.price,i=e.screen,u=e.capacity,m=e.ram,d=e.discount,p=e.id,f=e.productCardRef,b=Object(n.useMemo)((function(){return i.replace(" inches",'"')}),[i]),_=Object(n.useMemo)((function(){return o*(d/100)+o}),[o,d]),E=Object(n.useMemo)((function(){return"".concat(parseInt(u||"32000",10)," MB")}),[u]),h=Object(n.useMemo)((function(){return"".concat(parseInt(m||"1000",10)," MB")}),[m]),g=Object(l.c)(R),v=Object(l.c)(x),O=Object(l.b)(),N=Object(n.useCallback)((function(e,t){var a=v.find((function(e){return e.id===t}));e.target.checked?O(function(e){return{type:"SET_FAVORITES",product:e}}(a)):O(function(e){return{type:"DELETE_FAVORITE",id:e}}(t))}),[O,v]);return c.a.createElement("article",{id:p,className:"product",ref:f},c.a.createElement(s.b,{to:"".concat(Z[a],"/").concat(p),className:"product__link"},c.a.createElement("img",{className:"product__image",src:r,alt:t}),c.a.createElement("p",{className:"product__title"},t)),c.a.createElement("div",{className:"product__price-container"},c.a.createElement("span",{className:"product__price"},"$".concat(o)),d>0&&c.a.createElement("span",{className:"product__discount"},"$".concat(_))),c.a.createElement("span",{className:"product__split-line"}),c.a.createElement("div",{className:"product__details"},c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Screen"),c.a.createElement("span",{className:"product__details-info"},b)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"Capacity"),c.a.createElement("span",{className:"product__details-info"},E)),c.a.createElement("div",{className:"product__details-container"},c.a.createElement("span",{className:"product__details-title"},"RAM"),c.a.createElement("span",{className:"product__details-info"},h))),c.a.createElement("div",{className:"product__buttons__container"},c.a.createElement("button",{className:"product__button",type:"button"},"Add to cart"),c.a.createElement("label",{className:"product__button-favorite",htmlFor:"button-favorite-".concat(p)},c.a.createElement("input",{className:"product__button-favorite-input",type:"checkbox",id:"button-favorite-".concat(p),checked:g.some((function(e){return e.id===p})),onChange:function(e){return N(e,p)}}),c.a.createElement("span",{className:"product__button-favorite-checkmark"}))))},ue=function(e){var t=e.products,a=e.position,r=e.animationDuration,o=e.productCardRef,l=e.itemWidth,s=e.frameSize,i=Object(n.useMemo)((function(){return s*l}),[s,l]);return c.a.createElement("div",{className:"slider",style:{width:"".concat(i,"px")}},c.a.createElement("div",{className:"slider__list",style:{transform:"translateX(".concat(a,"px)"),transition:"transform ".concat(r,"ms")}},t.map((function(e){return c.a.createElement(ie,Object.assign({key:e.id},e,{productCardRef:o}))}))))},me=a(29),de=function(e){var t=e.handleSlide,a=e.direction,r=e.position,o=e.maxPosition,l=a===L,s=a===q,i=0===r,u=r===o,m=Object(n.useCallback)((function(){return t(a)}),[t,a]);return c.a.createElement("button",{type:"button","aria-label":"Slide ".concat(a),className:ce()(Object(me.a)({slider__button:!0},"slider__button-".concat(a),!0)),onClick:m,disabled:l&&i||s&&u})},pe=function(e){var t=e.title;return c.a.createElement("h2",{className:"section__heading heading"},t)},fe=function(e){var t=e.title,a=function(e){var t=Object(l.b)(),a=Object(l.c)(x),c=Object(n.useState)(0),r=Object(d.a)(c,2),o=r[0],s=r[1],i=Object(n.useState)(0),u=Object(d.a)(i,2),m=u[0],p=u[1];Object(n.useEffect)((function(){t(M())}),[t]);var f=Object(n.useMemo)((function(){return m+16}),[m]),b=Object(n.useMemo)((function(){return a.filter((function(e){return 0!==e.discount}))}),[a]),_=Object(n.useMemo)((function(){return a.filter((function(e){return e.age<10&&!e.discount}))}),[a]),E=Object(n.useMemo)((function(){switch(e){case $:return b;case K:return _;default:return[]}}),[e,b,_]),h=Object(n.useMemo)((function(){return 2*f}),[f]),g=Object(n.useMemo)((function(){return 4*f}),[f]),v=Object(n.useMemo)((function(){return f*E.length}),[f,E]),O=Object(n.useMemo)((function(){return g-v}),[g,v]),N=Object(n.useCallback)((function(e){null!==e&&p(e.getBoundingClientRect().width)}),[]),j=Object(n.useCallback)((function(e){s(e===L?o+h>0?0:o+h:o-h<O?O:o-h)}),[o,O,h]);return{currentProducts:E,position:o,step:2,itemWidth:f,animationDuration:700,handleSlide:j,maxPosition:O,productCardRef:N,frameSize:4}}(t),r=a.currentProducts,o=a.position,s=a.step,i=a.itemWidth,u=a.animationDuration,m=a.handleSlide,p=a.maxPosition,f=a.productCardRef,b=a.frameSize;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__heading-container"},c.a.createElement(pe,{title:t}),c.a.createElement("div",{className:"slider__controls"},c.a.createElement(de,{handleSlide:m,direction:L,position:o,maxPosition:p}),c.a.createElement(de,{handleSlide:m,direction:q,position:o,maxPosition:p}))),c.a.createElement(ue,{products:r,position:o,step:s,itemWidth:i,frameSize:b,animationDuration:u,productCardRef:f}))},be=function(e){var t=e.slides,a=e.toMove,n=e.duration;return c.a.createElement("ul",{className:"carousel__list",style:{transform:"translateX(".concat(-a,"px)"),transitionDuration:"".concat(n,"s")}},t.map((function(e){var t=e.id,a=e.name,n=e.src;return c.a.createElement("li",{key:t,className:"carousel__item"},c.a.createElement("img",{className:"carousel__image",src:n,alt:a}))})))},_e=function(e){var t=e.slides,a=e.active,n=e.goToSlide;return c.a.createElement("div",{className:"carousel__rectangles"},t.map((function(e,t){return c.a.createElement("button",{key:e.id,type:"button","aria-label":"Got to ".concat(t+1," slide"),onClick:function(){return n(t)},className:ce()({carousel__rectangle:!0,"carousel__rectangle--active":a===t})})})))},Ee=function(e){var t=e.changeSlide,a=e.direction;return c.a.createElement("button",{type:"button",className:"carousel__btn carousel__btn--".concat(a),"aria-label":"Slide ".concat(a),onClick:function(){return t(a)}})},he=[{id:1,name:"phones",src:"./img/showcase-carousel/first.jpg"},{id:2,name:"tablets",src:"./img/showcase-carousel/second.jpg"},{id:3,name:"accessories",src:"./img/showcase-carousel/third.jpg"}],ge=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),l=Object(d.a)(o,2),s=l[0],i=l[1],u=Object(n.useState)(0),m=Object(d.a)(u,2),p=m[0],f=m[1],b=he.length-1,_=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().width)}),[]),E=Object(n.useCallback)((function(e){e===L&&(a<=0?(r(a+p*b),i(b)):(r(a-p),i(s-1))),e===q&&(a>=p*b?(r(0),i(0)):(r(a+p),i(s+1)))}),[a,p,s,b]);Object(n.useEffect)((function(){var e=setInterval((function(){return E(q)}),4e3);return function(){return clearInterval(e)}}),[E]);var h=Object(n.useCallback)((function(e){r(e<s?a-p*(s-e):a+p*(e-s)),i(e)}),[s,a,p]);return c.a.createElement("div",{className:"carousel section__carousel"},c.a.createElement("div",{className:"carousel__container",ref:_},c.a.createElement(Ee,{changeSlide:E,direction:L}),c.a.createElement(Ee,{changeSlide:E,direction:q}),c.a.createElement(be,{slides:he,toMove:a,duration:.7}),c.a.createElement(_e,{slides:he,active:s,goToSlide:h})))},ve=function(){var e=oe(),t=e.searchedProducts,a=e.history,c=e.search,r=e.location,o=Object(n.useMemo)((function(){return t.filter((function(e){return e.type===H}))}),[t]),l=Object(n.useMemo)((function(){return t.filter((function(e){return e.type===z}))}),[t]),s="All"===c.get("perPage")?t.length:c.get("perPage"),i=Number(c.get("page"))||1,u=Number(s)||Number(W[0].option),m=Object(n.useMemo)((function(){return i*u}),[i,u]),d=Object(n.useMemo)((function(){return m-u}),[m,u]),p=Object(n.useMemo)((function(){return r.pathname===G?{numberOfProducts:o.length,currentProducts:o.slice(d,m)}:{numberOfProducts:l.length,currentProducts:l.slice(d,m)}}),[o,l,d,m,r.pathname]),f=p.numberOfProducts,b=void 0===f?0:f,_=p.currentProducts;return{currentProducts:void 0===_?t:_,numberOfProducts:b,changePage:function(e){c.set("page",e.toString()),a.push({search:c.toString()})},queryCondition:Object(n.useCallback)((function(){return c.get("query")?"result":r.pathname===U?"item":"model"}),[c,r.pathname]),perPage:u,page:i,search:c,phones:o,tablets:l,location:r}},Oe=function(e){var t=e.title,a=ve(),r=a.phones,o=a.tablets,s=a.queryCondition,i=Object(l.c)(R),u=t.toLowerCase(),m=Object(n.useMemo)((function(){switch(!0){case u.includes(Z.phone):return r.length;case u.includes(Z.tablet):return o.length;case u.includes(Z.favorites):return i.length;default:return 0}}),[r,o,i,u]);return c.a.createElement("p",{className:"products-amount categories__amount"},m," ",s(),1!==m&&"s")},Ne=function(e){var t=e.title,a=e.link;return c.a.createElement("div",{className:"categories__category"},c.a.createElement(s.b,{to:"/".concat(a),className:"categories__link"},c.a.createElement("div",{className:"categories__photo"},c.a.createElement("img",{className:"categories__image",src:"./img/categories/category-".concat(a,".jpg"),alt:a})),c.a.createElement("h3",{className:"categories__title"},t),c.a.createElement(Oe,{title:t})))},je=[{title:"Mobile phones",link:"phones"},{title:"Tablets",link:"tablets"},{title:"Accessories",link:"accessories"}],ke=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(pe,{title:"Shop by category"}),c.a.createElement("div",{className:"categories"},je.map((function(e){var t=e.title,a=e.link;return c.a.createElement(Ne,{key:t,title:t,link:a})}))))},ye=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"visually-hidden"},"React Products Catalog"),c.a.createElement("section",{className:"section"},c.a.createElement(ge,null)),c.a.createElement("section",{className:"section"},c.a.createElement(fe,{title:$})),c.a.createElement("section",{className:"section"},c.a.createElement(ke,null)),c.a.createElement("section",{className:"section"},c.a.createElement(fe,{title:K})))},Se=function(e){for(var t=e.total,a=e.perPage,n=e.page,r=e.changePage,o=[],l=1;l<=Math.ceil(t/a);l+=1)o.push(l);return c.a.createElement("div",{className:"pagination section__pagination"},c.a.createElement("button",{type:"button","aria-label":"Go left",className:"pagination__button pagination__button--left",onClick:function(){return r(n-1)},disabled:1===n}),c.a.createElement("ul",{className:"pagination__list"},o.map((function(e){return c.a.createElement("li",{className:"pagination__item",key:e},c.a.createElement("button",{type:"button",onClick:function(){return r(e)},className:ce()({pagination__button:!0,"pagination__button--active":n===e})},e))}))),c.a.createElement("button",{type:"button","aria-label":"Go right",className:"pagination__button pagination__button--right",onClick:function(){return r(n+1)},disabled:n===o.length}))},Ce=function(e){var t=e.to,a=e.label,n=e.isLast;return c.a.createElement("li",{className:"breadcrumbs__item"},c.a.createElement("span",{className:"breadcrumbs__arrow"}),n?c.a.createElement("span",{className:"breadcrumbs__last"},a):c.a.createElement(s.c,{to:t,className:"breadcrumbs__link",activeClassName:"breadcrumbs__link--active"},a))},we=[{to:"/phones",label:"Phones"},{to:"/tablets",label:"Tablets"},{to:"/favorites",label:"Favorites"}],Pe=function(){var e=Object(i.g)(),t=Object(n.useMemo)((function(){return we.filter((function(t){return t.to===e.pathname}))}),[e]);return c.a.createElement("ul",{className:"breadcrumbs section__breadcrumbs"},c.a.createElement(s.c,{to:"/",className:"breadcrumbs__item breadcrumbs__home",activeClassName:"breadcrumb__link--active"}),t.map((function(e,a){return c.a.createElement(Ce,Object.assign({},e,{key:e.to,isLast:a===t.length-1}))})))},xe=function(e){var t=e.isListOpen;return c.a.createElement("span",{className:ce()({dropdown__arrow:!0,"dropdown__arrow--up":t})})},Re=function(e){var t=e.list,a=e.heading,r=function(e,t){var a=Object(n.useState)(!1),c=Object(d.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(e[0].option),s=Object(d.a)(l,2),i=s[0],u=s[1],m=Object(n.useCallback)((function(){return o(!1)}),[o]),p=oe(),f=p.search,b=p.history;Object(n.useEffect)((function(){r?window.addEventListener("click",m):window.removeEventListener("click",m)}),[r,m]);var _=Object(n.useCallback)((function(){return o(!r)}),[r]),E=Object(n.useCallback)((function(e){u(e),t===D&&f.set("sortBy",e.split(" ").join("-")),t===B&&("All"===e&&f.set("perPage",e),f.set("perPage",e)),f.delete("page"),b.push({search:f.toString()})}),[b,f,t]);return{toggleList:_,selectedOption:i,isListOpen:r,handleSort:E}}(t,a),o=r.toggleList,l=r.selectedOption,s=r.isListOpen,i=r.handleSort,u=Object(n.useCallback)((function(e,t){e.preventDefault(),i(t)}),[i]);return c.a.createElement("div",{className:"dropdown"},c.a.createElement("p",{className:"dropdown__heading"},a),c.a.createElement("div",{className:"dropdown__wrapper"},c.a.createElement("button",{type:"button",className:"dropdown__header",onClick:o},l,c.a.createElement(xe,{isListOpen:s})),c.a.createElement("ul",{className:ce()({dropdown__list:!0,"dropdown__list--is-open":s})},t.map((function(e){var t=e.option;return c.a.createElement("li",{key:t},c.a.createElement("a",{href:"#!",className:ce()({"dropdown__list-item":!0,"dropdown__list-item--active":l===t}),onClick:function(e){return u(e,t)}},t))})))))},Me=function(){var e=ve(),t=e.currentProducts,a=e.numberOfProducts;return c.a.createElement(c.a.Fragment,null,a?c.a.createElement("div",{className:"products section__products"},t.map((function(e){return c.a.createElement(ie,Object.assign({key:e.id},e))}))):c.a.createElement("p",{className:"section__no-products-info"},"No products with such title...try again."))},Te=function(){var e=ve(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,o=e.search,l=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:ce()({section:!0,pt24:"/"!==l.pathname})},!o.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe,null),c.a.createElement(pe,{title:Q})),0!==t&&c.a.createElement(Oe,{title:Z.phone}),!o.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(Re,{heading:D,list:V}),c.a.createElement(Re,{heading:B,list:W})),c.a.createElement(Me,null),t>n&&c.a.createElement(Se,{total:t,perPage:n,page:r,changePage:a})))},Fe=function(){var e=ve(),t=e.numberOfProducts,a=e.changePage,n=e.perPage,r=e.page,o=e.search,l=e.location;return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:ce()({section:!0,pt24:"/"!==l.pathname})},!o.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe,null),c.a.createElement(pe,{title:Y})),0!==t&&c.a.createElement(Oe,{title:Z.tablet}),!o.get("query")&&c.a.createElement("div",{className:"section__dropdowns"},c.a.createElement(Re,{heading:D,list:V}),c.a.createElement(Re,{heading:B,list:W})),c.a.createElement(Me,null),t>n&&c.a.createElement(Se,{total:t,perPage:n,page:r,changePage:a})))},Ie=function(){var e=ve(),t=e.search,a=e.location,r=oe().searchedProducts,o=Object(n.useMemo)((function(){return r.length>0}),[r]);return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:ce()({section:!0,pt24:"/"!==a.pathname})},o?c.a.createElement(c.a.Fragment,null,!t.get("query")&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe,null),c.a.createElement(pe,{title:ee})),o&&c.a.createElement(Oe,{title:Z.favorites}),c.a.createElement("div",{className:"products section__products"},r.map((function(e){return c.a.createElement(ie,Object.assign({key:e.id},e))})))):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"section__no-favorites-info"},"Favorites list is empty.",c.a.createElement("br",null),"Please, take a look at our new models."),c.a.createElement(fe,{title:K}))))},Ae=function(){var e=Object(i.h)(),t=Object(n.useState)({}),a=Object(d.a)(t,2),r=a[0],o=a[1],l=function(){var e=Object(h.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l(e.params.productId)}),[e]),console.log(r),c.a.createElement("div",null,c.a.createElement("h5",null,"HI"))},Le=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(se,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:ye}),c.a.createElement(i.a,{exact:!0,path:"/phones",component:Te}),c.a.createElement(i.a,{exact:!0,path:"/tablets",component:Fe}),c.a.createElement(i.a,{exact:!0,path:"/favorites",component:Ie}),c.a.createElement(i.a,{exact:!0,path:"/:productType/:productId",component:Ae})),c.a.createElement(m,null))};a(42);o.a.render(c.a.createElement(l.a,{store:A},c.a.createElement(s.a,null,c.a.createElement(Le,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d323c048.chunk.js.map