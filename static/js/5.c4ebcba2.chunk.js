(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[5],{294:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var s=n(3),r=n(28),o=n(29),i=n(32),c=n(31),u=n(1),a=n.n(u),l=n(10),h=n(15),g=n(0),p=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(i.a)(u,t);var n=Object(c.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(s.a)({},this.props)):Object(g.jsx)(l.a,{to:"/login"})}}]),u}(a.a.Component);return Object(h.b)(p)(t)}},298:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2LMux",all:"users_all__3OlTA",selectedPage:"users_selectedPage__15ffX",number:"users_number__2GLF4"}},305:function(e,t,n){"use strict";n.r(t);var s=n(28),r=n(29),o=n(32),i=n(31),c=n(1),u=n.n(c),a=n(15),l=n(130),h=n(90),g=n(298),p=n.n(g),j=n(139),d=n(12),f=n(0),b=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);var r=Math.ceil(t/10),o=Object(c.useState)(1),i=Object(h.a)(o,2),u=i[0],a=i[1],l=10*(u-1)+1,g=10*u;return Object(f.jsxs)("div",{className:p.a.all,children:[Object(f.jsx)("div",{className:p.a.number,children:Object(f.jsxs)("div",{className:p.a.paginator,children:[u>1&&Object(f.jsx)("button",{onClick:function(){a(u-1)},children:"PREV"}),n.filter((function(e){return e>=l&&e<=g})).map((function(t){return Object(f.jsxs)("span",{className:e.currentPage===t&&p.a.selectedPage,onClick:function(n){e.onPageChanged(t)},children:[" ",t," "]},t)})),r>u&&Object(f.jsx)("button",{onClick:function(){a(u+1)},children:"NEXT"})]})}),e.users.map((function(t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:Object(f.jsx)(d.b,{to:"/profile/"+t.id,children:Object(f.jsx)("img",{src:null!=t.photos.small?t.photos.small:j.a,className:p.a.userPhoto})})}),Object(f.jsx)("div",{children:t.followed?Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(f.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.name}),Object(f.jsx)("div",{children:t.status}),Object(f.jsx)("div",{children:t.id})]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{children:t.photos.small}),Object(f.jsx)("div",{children:t.photos.large})]})]},t.id)}))]})},O=n(67),P=n(294),x=n(9),m=function(e){return e.usersPage.users},v=function(e){return e.usersPage.pageSize},w=function(e){return e.usersPage.totalUsersCount},C=function(e){return e.usersPage.currentPage},_=function(e){return e.usersPage.isFetching},F=function(e){return e.usersPage.followingInProgress},k=function(e){return e.auth.isAuth},y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(e){return Object(f.jsxs)(f.Fragment,{children:[this.props.isFetching?Object(f.jsx)(O.a,{}):null,Object(f.jsx)(b,{totalItemsCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggelFollowingProgress:this.props.toggelFollowingProgress,onPageChanged:this.onPageChanged})]})}}]),n}(u.a.Component);t.default=Object(x.d)(Object(a.b)((function(e){return{users:m(e),pageSize:v(e),totalUsersCount:w(e),currentPage:C(e),isFetching:_(e),followingInProgress:F(e),isAuth:k(e)}}),{follow:l.b,unfollow:l.f,setCurrentPage:l.d,toggelFollowingProgress:l.e,getUsers:l.c}),P.a)(y)}}]);
//# sourceMappingURL=5.c4ebcba2.chunk.js.map