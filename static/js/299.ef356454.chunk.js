"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[299],{1299:function(n,e,r){r.r(e),r.d(e,{MoviesPage:function(){return S}});var t,o,a,i,c=r(5861),l=r(885),s=r(7757),u=r.n(s),p=r(2791),d=r(501),x=r(6871),f=r(577),m=(r(5462),r(168)),b=r(5751),h=b.ZP.form(t||(t=(0,m.Z)(["\n  border-color: black;\n\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,\n    rgb(0 0 0 / 20%) 0px 2px 1px;\n"]))),g=b.ZP.label(o||(o=(0,m.Z)(["\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 500;\n"]))),v=b.ZP.input(a||(a=(0,m.Z)(["\n  margin-right: 10px;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: 400;\n"]))),Z=b.ZP.button(i||(i=(0,m.Z)(["\n  display: inline-flex;\n  padding: 5px 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  font-size: 12px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 400;\n  background-color: yellow;\n\n  :hover {\n    color: white;\n    background-color: royalblue;\n    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),y=r(184);function w(n){var e=n.formSubmit,r=(0,p.useState)(""),t=(0,l.Z)(r,2),o=t[0],a=t[1],i=function(){return a("")};return(0,y.jsxs)(h,{onSubmit:function(n){n.preventDefault(),e({name:o}),i()},children:[(0,y.jsx)(g,{children:(0,y.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoComplete:"off",value:o,onChange:function(n){n.preventDefault();var e=n.currentTarget,r=e.name,t=e.value;if("name"===r)a(t);else console.log("Field type name - ".concat(r," is not processed"));""!==r.trim()||f.Am.error("Enter the name of the picture")}})}),(0,y.jsx)(Z,{type:"submit",children:"Search"})]})}var k,j,z=r(4234),A=b.ZP.li(k||(k=(0,m.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),P=(0,b.ZP)(d.rU)(j||(j=(0,m.Z)(["\n  padding: 5px 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  font-size: 14px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-weight: 400;\n\n  :hover {\n    background-color: royalblue;\n    color: white;\n    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),_=function(n){var e=n.data,r=n.location,t=e.id,o=e.original_title,a=e.name;return(0,y.jsx)(A,{children:(0,y.jsx)(P,{to:"/movies/".concat(t),state:{from:r},children:o||a})},t)},C=function(n){var e=n.data,r=n.location;return(0,y.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.original_title,o=n.name;return(0,y.jsx)(_,{data:{id:e,original_title:t,name:o},location:r},e)}))})},S=function(){var n=(0,p.useState)([]),e=(0,l.Z)(n,2),r=e[0],t=e[1],o=(0,d.lr)(),a=(0,l.Z)(o,2),i=a[0],s=a[1],m=(0,x.TH)(),b=i.get("query");(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!b){n.next=7;break}return n.next=4,(0,z.e9)(b);case 4:e=n.sent,t(e.results),0===e.results.length&&f.Am.error("No video for your request");case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f.Am.error("No video for your request");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[b]);return(0,y.jsxs)("main",{children:[(0,y.jsx)(w,{formSubmit:function(n){var e=n.name;s({query:e})}}),r&&(0,y.jsx)(C,{data:r,location:m})]})}}}]);
//# sourceMappingURL=299.ef356454.chunk.js.map