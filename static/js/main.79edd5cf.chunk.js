(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{16:function(e,a,t){e.exports=t(28)},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(13),s=t.n(l),i=t(1),r=function(e){var a=e.name,t=e.imageUrl,n=e.price,l=e.screen,s=e.capacity,i=e.ram,r=e.discount,o=e.id;return c.a.createElement("article",{className:"phone"},c.a.createElement("img",{className:"phone__image",src:t,alt:a}),c.a.createElement("p",{className:"phone__title"},a),c.a.createElement("div",{className:"phone__price-container"},c.a.createElement("span",{className:"phone__price"},"$",n),c.a.createElement("span",{className:"phone__discount"},"$",n*(r/100)+n)),c.a.createElement("div",{className:"phone__split-line"}),c.a.createElement("div",{className:"phone__details"},c.a.createElement("div",{className:"phone__details-container"},c.a.createElement("span",{className:"phone__details-title"},"Screen"),c.a.createElement("span",{className:"phone__details-info"},l)),c.a.createElement("div",{className:"phone__details-container"},c.a.createElement("span",{className:"phone__details-title"},"Capacity"),c.a.createElement("span",{className:"phone__details-info"},"".concat(parseInt(s,10)," MB"))),c.a.createElement("div",{className:"phone__details-container"},c.a.createElement("span",{className:"phone__details-title"},"RAM"),c.a.createElement("span",{className:"phone__details-info"},"".concat(parseInt(i,10)," MB")))),c.a.createElement("div",{className:"phone__buttons__container"},c.a.createElement("button",{className:"phone__button",type:"button"},"Add to cart"),c.a.createElement("label",{className:"phone__button-favorite",htmlFor:"button-favorite-".concat(o)},c.a.createElement("input",{className:"phone__button-favorite-input",type:"checkbox",id:"button-favorite-".concat(o)}),c.a.createElement("span",{className:"phone__button-favorite-checkmark"}))))},o=function(e){var a=e.phones,t=e.frameSize,n=e.position,l=e.animationDuration,s=e.itemWidth,i=e.marginsWidth;return c.a.createElement("div",{className:"slider",style:{width:"".concat(t*s+i,"px")}},c.a.createElement("div",{className:"slider__list",style:{transform:"translateX(".concat(n,"px)"),transition:"transform ".concat(l,"ms")}},a.map((function(e){return c.a.createElement(r,Object.assign({key:e.id},e))}))))},m=t(6),_=t(14),u=t.n(_),p=function(e){var a,t=e.handleSlide,n=e.direction,l=e.position,s=e.maxPosition,i="left"===n,r="right"===n,o=0===l,_=l===s;return c.a.createElement("button",{type:"button","aria-label":i?"Slide left":"Slide right",className:u()((a={slider__button:!0},Object(m.a)(a,"slider__button-".concat(n),!0),Object(m.a)(a,"slider__button--disabled",i&&o||r&&_),a)),onClick:function(){return t(n)},disabled:i&&o||r&&_})},d=t(10),h=t(4),E=t.n(h),v=t(7),f="https://mate-academy.github.io/react_phone-catalog/api/products",N=function(){var e=Object(v.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,".json"));case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(0),s=Object(d.a)(l,2),i=s[0],r=s[1];Object(n.useEffect)((function(){N().then((function(e){return c(e)}))}),[]);var o=Object(n.useMemo)((function(){return t.filter((function(e){return 0!==e.discount}))}),[t]),m=1120-(272*o.length+32)-128,_=Object(n.useCallback)((function(e){r("left"===e?i+576>0?0:i+576:i-576<m?m:i-576)}),[i,m,576]);return{hotPricesPhones:o,position:i,step:2,frameSize:4,itemWidth:272,animationDuration:1e3,handleSlide:_,maxPosition:m,marginsWidth:64}}(),a=e.hotPricesPhones,t=e.position,l=e.step,s=e.frameSize,i=e.itemWidth,r=e.animationDuration,m=e.handleSlide,_=e.maxPosition,u=e.marginsWidth;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__heading-container"},c.a.createElement("h2",null,"Hot prices"),c.a.createElement("div",{className:"slider__controls"},c.a.createElement(p,{handleSlide:m,direction:"left",position:t,maxPosition:_}),c.a.createElement(p,{handleSlide:m,direction:"right",position:t,maxPosition:_}))),c.a.createElement(o,{phones:a,position:t,step:l,frameSize:s,itemWidth:i,animationDuration:r,marginsWidth:u}))},g=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement(i.b,{to:"/",className:"logo__link"},c.a.createElement("img",{src:"./img/logo.svg",alt:"logo",className:"logo__img"})))},k=function(){var e=Object(n.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container footer__container"},c.a.createElement(g,null),c.a.createElement("div",{className:"footer__links"},c.a.createElement(i.b,{to:"/",className:"footer__link"},"Github"),c.a.createElement(i.b,{to:"/",className:"footer__link"},"Contacts"),c.a.createElement(i.b,{to:"/",className:"footer__link"},"Rights")),c.a.createElement("div",{className:"footer__top-button-container"},c.a.createElement("p",{className:"footer__paragraph"},"Back to top"),c.a.createElement("button",{type:"button","aria-label":"BackToTop",className:"footer__top-button",onClick:e}))))},j=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.c,{to:"/",exact:!0,className:"nav__link",activeClassName:"nav__link--active"},"Home")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.c,{to:"/phones",className:"nav__link",activeClassName:"nav__link--active"},"Phones")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.c,{to:"/tablets",className:"nav__link",activeClassName:"nav__link--active"},"Tablets")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(i.c,{to:"/accessories",className:"nav__link",activeClassName:"nav__link--active"},"Accessories"))))},x=function(){return c.a.createElement("div",{className:"favorites"},c.a.createElement(i.b,{to:"/",className:"favorites__button"}))},S=function(){return c.a.createElement("div",{className:"cart"},c.a.createElement(i.b,{to:"/",className:"cart__button"}))},y=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement("div",{className:"header__logo"},c.a.createElement(g,null)),c.a.createElement("div",{className:"header__nav"},c.a.createElement(j,null))),c.a.createElement("div",{className:"header__flex-wrap"},c.a.createElement(x,null),c.a.createElement(S,null)))},O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"visually-hidden"},"React Phone Catalog"),c.a.createElement(y,null),c.a.createElement(b,null),c.a.createElement(k,null))};t(27);s.a.render(c.a.createElement(i.a,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.79edd5cf.chunk.js.map