"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[425],{1748:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(2982),i=t(885),c=t(2791),a=t(1523),s=t(4304),o=t(9613),l=t(1145),u=t(3957),m=t(184),d=function(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),t=e[0],d=e[1],f=(0,c.useState)(!1),h=(0,i.Z)(f,2),v=h[0],_=h[1],b=(0,c.useState)(0),j=(0,i.Z)(b,2),x=j[0],Z=j[1],p=(0,c.useState)(!1),y=(0,i.Z)(p,2),g=y[0],N=y[1],S=(0,s.Z)(),k=S.loading,w=S.error,A=S.getMarvelData;(0,c.useEffect)((function(){C(x,!0)}),[]);var C=function(n,e){_(!e),A("comics",8,n).then(E)},E=function(n){var e=!1;n.length<8&&(e=!0),d((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),Z((function(n){return n+8})),_(!1),N(e)},F=function(n){var e=n.map((function(n,e){var t=n.title,r=n.price,i=(n.url,n.thumbnail),c=n.id;return(0,m.jsx)("li",{className:"comics__item",children:(0,m.jsxs)(a.rU,{to:"/marvel_info/comics/".concat(c),children:[(0,m.jsx)("img",{src:i,alt:t,className:"comics__item-img"}),(0,m.jsx)("div",{className:"comics__item-name",children:t}),(0,m.jsx)("div",{className:"comics__item-price",children:r})]})},e)}));return(0,m.jsx)("ul",{className:"comics__grid",children:e})}(t),I=w?(0,m.jsx)(o.Z,{}):null,M=k&&!v?(0,m.jsx)(l.Z,{}):null;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.Z,{}),(0,m.jsxs)("div",{className:"comics__list",children:[F,M,I,(0,m.jsx)("button",{className:"button button__main button__long",disabled:v,style:{display:g?"none":"block"},onClick:function(){return C(x,!1)},children:(0,m.jsx)("div",{className:"inner",children:"Load More"})})]})]})},f=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d,{})})}},2982:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(907);var i=t(181);function c(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,i.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=425.0afcb0f3.chunk.js.map