(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(28),s=n.n(c),i=n(8),u=n(20),o=n(5),l=n(9),j=n.n(l),d=n(15),b=n(18);n(36),n(47),n(46);b.a.initializeApp({apiKey:"AIzaSyDWhqZUT8bRa3pg_WX6OXBDOTV4zZWl4-8",authDomain:"nwitter-5fbc7.firebaseapp.com",projectId:"nwitter-5fbc7",storageBucket:"nwitter-5fbc7.appspot.com",messagingSenderId:"22284426631",appId:"1:22284426631:web:eee4f6dad5bc36d50f4722"});var p=b.a,f=b.a.auth(),h=b.a.firestore(),O=b.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],h=b[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(m.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Log In"}),v]}),Object(m.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:p?"Sign in":"Create Account"})]})},v=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsx)("button",{onClick:e,name:"google",className:"authBtn",children:"Continue with Google"}),Object(m.jsx)("button",{onClick:e,name:"github",className:"authBtn",children:"Continue with Github"})]})]})},g=n(30),y=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),b=l[0],p=l[1],f=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,O.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},v=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:v,className:"container nweetedit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update",className:"formBtn"})]}),Object(m.jsx)("button",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(m.jsx)("img",{src:t.attachmentURL}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:"Delete"}),Object(m.jsx)("span",{onClick:x,children:"Edit"})]})]})})},w=n(49),N=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],b=o[1],p=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,r,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=O.ref().child("".concat(t.uid,"/").concat(Object(w.a)(),"/")),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentURL:a},e.next=15,h.collection("nweets").add(u);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsx)("label",{for:"attach-file",className:"factoryInput__label",children:Object(m.jsx)("span",{children:"Add photos"})}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsx)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:Object(m.jsx)("span",{children:"Remove"})})]})]})},k=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(N,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(m.jsx)(y,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/",style:{marginRight:10},children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:Object(m.jsx)("span",{style:{marginTop:3},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})})})]})})},I=function(e){var t=e.refreshUser,n=e.userObj,r=Object(o.f)(),c=Object(a.useState)(n.displayName),s=Object(i.a)(c,2),u=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),r.push("/")},children:"Log Out"})]})},C=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(u.a,{children:[n&&Object(m.jsx)(S,{userObj:a}),Object(m.jsx)(o.c,{children:n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(k,{userObj:a})}),Object(m.jsx)(o.a,{exact:!0,path:"/profile",children:Object(m.jsx)(I,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(v,{})})})]})};var U=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[n?Object(m.jsx)(C,{refreshUser:function(){var e=f.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(m.jsxs)("footer",{children:["\xa9 Nwitter ",(new Date).getFullYear()]})]})};n(44);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.87c40e52.chunk.js.map