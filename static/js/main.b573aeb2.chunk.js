(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(8),a=n.n(s),i=n(3),o=n(4),u=n(26),d=n(9),p=n(10),l=n(12),j=n(11),b=n(5),h=n.n(b),f=n(15),O=n(25),v=n.n(O).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),y=n(1),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser(this.props.userId)}},{key:"render",value:function(){var e=this.props.user;return e?Object(y.jsx)("div",{className:"header",children:e.name}):null}}]),n}(c.a.Component),x=Object(i.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}),{fetchUser:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(m),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return Object(y.jsxs)("div",{className:"item",children:[Object(y.jsx)("i",{className:"large middle aligned icon user"}),Object(y.jsxs)("div",{className:"content",children:[Object(y.jsxs)("div",{className:"description",children:[Object(y.jsx)("h2",{children:e.title}),Object(y.jsx)("p",{children:e.body})]}),Object(y.jsx)(x,{userId:e.userId})]})]},e.id)}))}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"ui relaxed divided list",children:this.renderList()})}}]),n}(c.a.Component),k=Object(i.b)((function(e){return{posts:e.posts}}),{fetchPosts:function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(g),N=function(){return Object(y.jsx)("div",{className:"ui container",children:Object(y.jsx)(k,{})})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_POSTS"===t.type?t.payload:e},w=n(27),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_USER"===t.type?[].concat(Object(w.a)(e),[t.payload]):e},E=Object(o.b)({posts:S,users:C});var T=Object(o.c)(E,Object(o.a)(u.a));a.a.render(Object(y.jsx)(i.a,{store:T,children:Object(y.jsx)(N,{})}),document.querySelector("#root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b573aeb2.chunk.js.map