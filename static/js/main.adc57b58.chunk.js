(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(8),a=n.n(s),i=n(4),u=n(5),o=n(27),d=n(9),p=n(10),l=n(12),j=n(11),b=n(3),f=n.n(b),h=n(13),O=n(25),v=n.n(O),m=n(26),x=n.n(m).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),y=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=n(1),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?Object(k.jsx)("div",{className:"header",children:e.name}):null}}]),n}(c.a.Component),E=Object(i.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(w),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return Object(k.jsxs)("div",{className:"item",children:[Object(k.jsx)("i",{className:"large middle aligned icon user"}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"description",children:[Object(k.jsx)("h2",{children:e.title}),Object(k.jsx)("p",{children:e.body})]}),Object(k.jsx)(E,{userId:e.userId})]})]},e.id)}))}},{key:"render",value:function(){return Object(k.jsx)("div",{className:"ui relaxed divided list",children:this.renderList()})}}]),n}(c.a.Component),S=Object(i.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(h.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(y());case 2:v.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(g(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(N),C=function(){return Object(k.jsx)("div",{className:"ui container",children:Object(k.jsx)(S,{})})},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_POSTS"===t.type?t.payload:e},U=n(28),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_USER"===t.type?[].concat(Object(U.a)(e),[t.payload]):e},H=Object(u.b)({posts:T,users:F});var I=Object(u.c)(H,Object(u.a)(o.a));a.a.render(Object(k.jsx)(i.a,{store:I,children:Object(k.jsx)(C,{})}),document.querySelector("#root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.adc57b58.chunk.js.map