"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[867],{9613:function(e,n,r){r.d(n,{Z:function(){return c}});var a=r.p+"static/media/error.42292aa12b6bc303ce99.gif",t=r(184);function c(){return(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error Gif"})}},8371:function(e,n,r){r.r(n),r.d(n,{default:function(){return M}});var a=r(885),t=r(2791),c=r(4304),s=r(1145),i=r(9613),l=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=r(184),u=function(e){var n=e.char,r=(0,c.Z)().checkAvailableImage,a=n.name,t=n.description,s=n.homepage,i=n.wiki,l=n.thumbnail,u=r(l);return(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:l,alt:"Random character",className:"randomchar__img",style:u}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:t}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,t.useState)({}),n=(0,a.Z)(e,2),r=n[0],d=n[1],h=(0,c.Z)(),m=h.loading,f=h.error,x=h.getSingleMarvelData,v=h.clearError,p=function(e){d(e)},_=function(){var e=Math.floor(400*Math.random()+1011e3);v(),x("characters",e).then(p)};(0,t.useEffect)((function(){_()}),[]);var j=f?(0,o.jsx)(i.Z,{}):null,b=m?(0,o.jsx)(s.Z,{}):null,g=m||f?null:(0,o.jsx)(u,{char:r});return(0,o.jsxs)("div",{className:"randomchar",children:[j,b,g,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",onClick:_,children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=r(1413),m=r(2982),f=r(6752),x=r(5660),v={transition:"opacity ".concat(500,"ms ease-in-out"),opacity:0},p={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},_=function(e){var n=e.onCharSelected,r=(0,t.useState)([]),l=(0,a.Z)(r,2),u=l[0],d=l[1],_=(0,t.useState)(!1),j=(0,a.Z)(_,2),b=j[0],g=j[1],N=(0,t.useState)(215),Z=(0,a.Z)(N,2),k=Z[0],y=Z[1],w=(0,t.useState)(!1),C=(0,a.Z)(w,2),S=C[0],E=C[1];(0,t.useEffect)((function(){D(k,!0)}),[]);var A=(0,c.Z)(),F=A.loading,I=A.error,T=A.getMarvelData,M=A.checkAvailableImage,D=function(e,n){g(!n),T("characters",9,e).then(L)},L=function(e){var n=!1;e.length<9&&(n=!0),d((function(n){return[].concat((0,m.Z)(n),(0,m.Z)(e))})),y((function(e){return e+9})),g(!1),E(n)},O=(0,t.useRef)([]),R=function(e){O.current.forEach((function(e){return e.classList.remove("char__item_selected")})),O.current[e].classList.add("char__item_selected"),O.current[e].focus()},q=function(e){var r=e.map((function(e,r){var a=e.name,t=e.thumbnail,c=e.id,s=M(t);return(0,o.jsx)(f.ZP,{timeout:500,mountOnEnter:!0,children:function(e){return(0,o.jsxs)("li",{ref:function(e){return O.current[r]=e},tabIndex:0,className:"char__item",onClick:function(){n(c),R(r)},onKeyPress:function(e){" "!==e.key&&"Enter"!==e.key||(n(c),R(r))},style:(0,h.Z)((0,h.Z)({},v),p[e]),children:[(0,o.jsx)("img",{src:t,alt:a,style:s}),(0,o.jsx)("div",{className:"char__name",children:a})]})}},c)}));return(0,o.jsx)("ul",{className:"char__grid",children:(0,o.jsx)(x.Z,{component:null,children:r})})}(u),B=I?(0,o.jsx)(i.Z,{}):null,P=F&&!b?(0,o.jsx)(s.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[q,P,B,(0,o.jsx)("button",{className:"button button__main button__long",disabled:b,style:{display:S?"none":"block"},onClick:function(){return D(k,!1)},children:(0,o.jsx)("div",{className:"inner",children:"Load More"})})]})},j=r(1523),b=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},g=function(e){var n=e.char,r=n.name,a=n.description,t=n.thumbnail,s=n.homepage,i=n.wiki,l=n.comics,u=(0,(0,c.Z)().checkAvailableImage)(t),d=l.map((function(e,n){var r=e.resourceURI.split("/"),a=r[r.length-1];if(!(n>9))return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(j.rU,{to:"/comics/".concat(a),children:e.name})},n)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:t,alt:r,style:u}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:r}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:s,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:i,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:a}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsx)("ul",{className:"char__comics-list",children:0===d.length?"Comics not found":d})]})},N=function(e){var n=e.charId,r=(0,t.useState)(null),l=(0,a.Z)(r,2),u=l[0],d=l[1],h=(0,c.Z)(),m=h.loading,f=h.error,x=h.getSingleMarvelData,v=h.clearError;(0,t.useEffect)((function(){p()}),[n]);var p=function(){n&&(v(),x("characters",n).then(d))},_=u||m||f?null:(0,o.jsx)(b,{}),j=f?(0,o.jsx)(i.Z,{}):null,N=m?(0,o.jsx)(s.Z,{}):null,Z=m||f||!u?null:(0,o.jsx)(g,{char:u});return(0,o.jsxs)("div",{className:"char__info",children:[_,j,Z,N]})},Z=r(5705),k=r(8796),y=function(e){var n=e.char,r=e.loading,a=e.error,t=null!==n&!r?"There is! Visit ".concat(n.name," page?"):a?"The character was not found. Check the name and try again":null,c=null!==n?"find__succes":"find__error";return null===n?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:c,children:t})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:c,children:t}),(0,o.jsx)(w,{name:n.name})]})},w=function(e){var n=e.name;return(0,o.jsx)(j.rU,{to:"/marvel_info/characters/".concat(n),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})},C=function(){var e,n=(0,t.useState)(null),r=(0,a.Z)(n,2),s=r[0],i=r[1],l=(0,t.useState)(!1),u=(0,a.Z)(l,2),d=u[0],h=u[1],m=(0,c.Z)(),f=m.findCharByName,x=m.loading,v=m.error,p=m.clearError;return e=!v&!d&!x?null:(0,o.jsx)(y,{char:s,loading:x,error:v}),(0,o.jsx)(Z.J9,{initialValues:{name:""},validationSchema:k.Ry({name:k.Z_().min(3,"At least 3 symbols...").required("This field is required")}),onSubmit:function(e){return n=e.name,p(),h(!0),i((function(e){return null})),void f(n).then((function(e){return i((function(n){return e}))})).catch((function(e){return i(null)}));var n},children:(0,o.jsx)(Z.l0,{children:(0,o.jsxs)("div",{className:"find__box",children:[(0,o.jsx)("div",{className:"find__title",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"find__inner-container",children:[(0,o.jsx)(Z.gN,{name:"name",placeholder:"Enter name",className:"find__input"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"Find"})}),(0,o.jsx)(Z.Bc,{name:"name",component:"div",className:"find__error"}),e]})]})})})},S=r(5671),E=r(3144),A=r(136),F=r(7277),I=function(e){(0,A.Z)(r,e);var n=(0,F.Z)(r);function r(){var e;(0,S.Z)(this,r);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=n.call.apply(n,[this].concat(t))).state={error:!1},e}return(0,E.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(i.Z,{}):this.props.children}}]),r}(t.Component),T=r.p+"static/media/vision.067d4ae1936d64a577ce.png",M=function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],c=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I,{children:(0,o.jsx)(d,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(I,{children:(0,o.jsx)(_,{onCharSelected:function(e){c(e)}})}),(0,o.jsx)(I,{children:(0,o.jsxs)("div",{className:"char__section",children:[(0,o.jsx)(N,{charId:r}),(0,o.jsx)(C,{})]})})]}),(0,o.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})]})}},4304:function(e,n,r){r.d(n,{Z:function(){return i}});var a=r(4165),t=r(5861),c=r(885),s=r(2791),i=function(){var e="https://gateway.marvel.com:443/v1/public/",n="apikey=df45cf660f835fae11e3961d7b9575b8",r=function(){var e=(0,s.useState)(!1),n=(0,c.Z)(e,2),r=n[0],i=n[1],l=(0,s.useState)(null),o=(0,c.Z)(l,2),u=o[0],d=o[1],h=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var r,t,c,s,l,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"GET",t=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},i(!0),e.prev=4,e.next=7,fetch(n,{method:r,body:t,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(s.state));case 10:return e.next=12,s.json();case 12:if(l=e.sent,i(!1),0!==l.data.results.length){e.next=16;break}throw new Error("No matches found");case 16:return e.abrupt("return",l);case 19:throw e.prev=19,e.t0=e.catch(4),i(!1),d(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:r,error:u,request:h,clearError:(0,s.useCallback)((function(){d(null)}),[])}}(),i=r.loading,l=r.request,o=r.error,u=r.clearError,d=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t,c){var s,i,o=arguments;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=o.length>2&&void 0!==o[2]?o[2]:215,r.next=3,l("".concat(e).concat(t,"?limit=").concat(c,"&offset=").concat(s,"&").concat(n));case 3:if(i=r.sent,"characters"!==t){r.next=8;break}return r.next=7,i.data.results.map(f);case 7:case 10:return r.abrupt("return",r.sent);case 8:return r.next=10,i.data.results.map(x);case 11:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t,c){var s;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(e).concat(t,"/").concat(c,"?").concat(n));case 2:if(s=r.sent,"characters"!==t){r.next=5;break}return r.abrupt("return",f(s.data.results[0]));case 5:return r.abrupt("return",x(s.data.results[0]));case 6:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),m=function(){var r=(0,t.Z)((0,a.Z)().mark((function r(t){var c;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l("".concat(e,"characters?name=").concat(t,"&").concat(n));case 2:return c=r.sent,r.abrupt("return",f(c.data.results[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(e){var n=e.description;return n.length<=0&&(n="There is no information about this character"),n.length>150&&(n=n.slice(0,150)+"..."),{id:e.id,name:e.name,description:n,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",price:0===e.prices[0].price?"NOT AVAILABLE":e.prices[0].price+"$",language:e.textObjects.language||"en-us",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,url:e.urls[0].url}};return{loading:i,error:o,getMarvelData:d,getSingleMarvelData:h,checkAvailableImage:function(e){var n={objectFit:"fill"};return/image_not_available/gi.test(e)&&(n.objectFit="unset"),n},clearError:u,findCharByName:m}}}}]);
//# sourceMappingURL=867.2bffea95.chunk.js.map