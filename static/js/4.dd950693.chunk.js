(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[4],{294:function(e,n,s){"use strict";s.d(n,"a",(function(){return m}));var i=s(3),r=s(37),t=s(38),c=s(41),a=s(40),d=s(1),j=s.n(d),o=s(10),f=s(15),u=s(0),b=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var n=function(n){Object(c.a)(d,n);var s=Object(a.a)(d);function d(){return Object(r.a)(this,d),s.apply(this,arguments)}return Object(t.a)(d,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(i.a)({},this.props)):Object(u.jsx)(o.a,{to:"/login"})}}]),d}(j.a.Component);return Object(f.b)(b)(n)}},299:function(e,n,s){e.exports={frItem:"FriendsItem_frItem__HlRDx",iconFr:"FriendsItem_iconFr__17ZYU",frname:"FriendsItem_frname__ZZ49S"}},300:function(e,n,s){e.exports={frmess:"FriendsMess_frmess__2TVli",fricon:"FriendsMess_fricon__CqBeE",mess:"FriendsMess_mess__4MFDJ"}},301:function(e,n,s){e.exports={friendspag:"Friends_friendspag__D549c"}},304:function(e,n,s){"use strict";s.r(n);s(1);var i=s(299),r=s.n(i),t=s(13),c=s(0),a=function(e){return Object(c.jsxs)("div",{className:r.a.frItem,children:[Object(c.jsx)("div",{className:r.a.iconFr,children:Object(c.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/1884/1884203.png"})}),Object(c.jsx)("div",{className:r.a.frname,children:Object(c.jsx)(t.b,{to:"/friends/"+e.id,children:e.name})})]})},d=s(300),j=s.n(d),o=function(e){return Object(c.jsxs)("div",{className:j.a.frmess,children:[Object(c.jsx)("div",{className:j.a.fricon,children:Object(c.jsx)("img",{src:"https://www.pngfind.com/pngs/m/24-247995_like-png-icon-love-icon-round-png-transparent.png"})}),Object(c.jsx)("div",{className:j.a.mess,children:e.message})]})},f=s(301),u=s.n(f),b=s(132),m=s(133),l=s(44),O=s(29),p=Object(O.a)(20),h=Object(m.a)({form:"friendsAddMessage"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(b.a,{name:"newMessageFriends",component:l.b,placeholder:"Messages friend",validate:[O.c,p]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Add messege friend"})})]})})),x=function(e){var n=e.friends.map((function(e){return Object(c.jsx)(a,{name:e.name,id:e.id})})),s=e.friendsMess.map((function(e){return Object(c.jsx)(o,{message:e.message,id:e.id})}));return Object(c.jsxs)("div",{className:u.a.friendspag,children:[Object(c.jsx)("div",{children:n}),Object(c.jsx)("div",{children:s}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onSubmit:function(n){e.SendFriendsClick(n.newMessageFriends)}})})]})},g=s(130),_=s(15),v=s(294),F=s(9);n.default=Object(F.d)(Object(_.b)((function(e){return{newMessageFriends:e.sidebar.newMessageFriends,friends:e.sidebar.friends,friendsMess:e.sidebar.friendsMess}}),(function(e){return{SendFriendsClick:function(n){e(Object(g.b)(n))}}})),v.a)(x)}}]);
//# sourceMappingURL=4.dd950693.chunk.js.map