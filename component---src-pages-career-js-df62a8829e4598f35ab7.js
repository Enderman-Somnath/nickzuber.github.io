webpackJsonp([41802369688294],{45:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){switch(e){case"laptop":return L.default;case"heart":return C.default;case"pencil":return N.default;case"letter":return y.default;case"social":return M.default;case"travel":return x.default;case"wrench":return L.default;case"cap":return O.default;default:return x.default}}t.__esModule=!0;var r=a(1),o=l(r),u=a(9),c=(l(u),a(16)),i=(l(c),a(28)),s=(l(i),a(107)),d=(l(s),a(77)),f=(l(d),a(82)),p=(l(f),a(80)),m=(l(p),a(79)),h=(l(m),a(81)),g=(l(h),a(78)),w=(l(g),a(83)),E=(l(w),a(76)),b=(l(E),a(68)),v=(l(b),a(70)),x=l(v),k=a(74),y=l(k),S=a(73),M=l(S),_=a(72),L=l(_),R=a(69),N=l(R),A=a(71),C=l(A),W=a(75),O=l(W),I=function(e){var t=e.icon;return o.default.createElement("div",{className:"item-icon-base",style:{backgroundImage:"url("+n(t)+")"}})};t.default=I,e.exports=t.default},46:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),o=a(106),u=l(o),c=function(e){var t=e.onChange,a=e.offset;return r.default.createElement("div",{style:{position:"absolute",marginTop:a+"px"}},r.default.createElement(u.default,{onChange:t}))};t.default=c,e.exports=t.default},235:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function r(e,t){if(e){document.querySelector("."+t+" .work-safe-wrapper").classList.add("fade-in");for(var a=0;a<document.querySelectorAll("."+t+" .work-right h1 .work-title").length;a++)document.querySelectorAll("."+t+" .work-right h1 .work-title")[a].classList.add("animate-highlight-text-right");document.querySelector("."+t+" .work-left .item-icon-base").classList.add("has-bursted");var l=document.querySelector("."+t+" .work-left .work-line");l?l.classList.add("fade-in"):null}}t.__esModule=!0;var o=a(1),u=l(o),c=a(9),i=(l(c),a(46)),s=l(i),d=a(98),f=l(d),p=a(45),m=l(p),h=function(e){var t=e.d;return u.default.createElement("svg",{className:"work-line",width:"50",height:"195",viewBox:"62 10 50 200",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},u.default.createElement("g",{fill:"none",fillRule:"evenodd"},u.default.createElement("path",{strokeWidth:"2",stroke:"rgba(50, 77, 90, 0.15)",strokeLinecap:"round",strokeDasharray:"15, 10, 5, 10, 15",d:t})))},g=function(e){var t=e.d,a=e.icon,l=e.children,o=n(e,["d","icon","children"]),c=!o.isLast,i=(0,f.default)(),d="-content-item-"+i;return u.default.createElement("div",{className:"work-block-wrapper "+d},u.default.createElement("div",{className:"work-safe-wrapper"},u.default.createElement("div",{className:"work-left"},u.default.createElement("div",{className:"work-icon"},u.default.createElement(m.default,{icon:a})),c?u.default.createElement(h,{d:t}):null),u.default.createElement("div",{className:"work-right"},u.default.createElement(s.default,{offset:25,onChange:function(e){return r(e,d)}}),l)))};t.default=g,e.exports=t.default},68:function(e,t,a){e.exports=a.p+"static/box.d57c922e.png"},69:function(e,t,a){e.exports=a.p+"static/sprite-sheet-book.0c4db63a.png"},70:function(e,t,a){e.exports=a.p+"static/sprite-sheet-box.6f831f94.png"},71:function(e,t,a){e.exports=a.p+"static/sprite-sheet-coffee.98027fc5.png"},72:function(e,t,a){e.exports=a.p+"static/sprite-sheet-laptop.4ab33634.png"},73:function(e,t,a){e.exports=a.p+"static/sprite-sheet-map.59e8b6d5.png"},74:function(e,t,a){e.exports=a.p+"static/sprite-sheet-paper.bdfcb731.png"},75:function(e,t,a){e.exports=a.p+"static/sprite-sheet-school.6ad3c78e.png"},76:function(e,t,a){e.exports=a.p+"static/sprite-sheet-cap.eb0c6028.png"},77:function(e,t,a){e.exports=a.p+"static/sprite-sheet-heart.c4392bfd.png"},78:function(e,t,a){e.exports=a.p+"static/sprite-sheet-helmet.d114a539.png"},79:function(e,t,a){e.exports=a.p+"static/sprite-sheet-laptop.a50bb94c.png"},80:function(e,t,a){e.exports=a.p+"static/sprite-sheet-letter.d1dc85a7.png"},81:function(e,t,a){e.exports=a.p+"static/sprite-sheet-luggage.83eba191.png"},82:function(e,t,a){e.exports=a.p+"static/sprite-sheet-pencil.78f55d56.png"},83:function(e,t,a){e.exports=a.p+"static/sprite-sheet-wrench.8dfa39db.png"},239:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),r=l(n),o=a(9),u=(l(o),a(16)),c=l(u),i=a(235),s=l(i),d="M 80 40 Q 100 80 80 120 Q 60 160 80 200",f="M 80 40 Q 60 80 80 120 Q 100 160 80 200",p=function(e){var t=e.children;return r.default.createElement("span",{style:{margin:"-7px 0 10px",fontSize:"90%",fontWeight:"500",display:"block",color:"rgba(50, 77, 90, 0.35)",width:"100%"}},t)},m=function(e){var t=e.color,a=e.title,l=e.place,n=e.url;return r.default.createElement("h1",{style:{lineHeight:"1.1em"}},r.default.createElement("span",{className:"work-title"},a),r.default.createElement("br",null)," ",r.default.createElement("span",{style:{fontSize:"80%",fontWeight:"500"}},r.default.createElement("a",{href:n,target:"_blank",style:{color:""+t}},l)))},h=function(){return r.default.createElement("div",{style:{textAlign:"center"}},r.default.createElement(c.default,null),r.default.createElement(s.default,{icon:"wrench",d:d},r.default.createElement(m,{title:"Software Engineer",color:"#EE3F46",place:"Robin",url:"https://robinpowered.com/"}),r.default.createElement(p,null,"June 2018 — current"),r.default.createElement("p",null,"I'll be rejoining the Robin engineering team to make it easier to manage your meeting rooms. Working with React, React Native, and Redux for web, iOS, and Android mobile apps.")),r.default.createElement(s.default,{icon:"cap",d:f},r.default.createElement(m,{title:"Graduated College",color:"#0468b1",place:"University of Massachuetts Lowell",url:"https://uml.edu/"}),r.default.createElement(p,null,"May 2018"),r.default.createElement("p",null,"Recieved a bachelor's degree in Computer Science with a minor in Mathematics.")),r.default.createElement(s.default,{icon:"wrench",d:d},r.default.createElement(m,{title:"Software Engineering Intern",color:"#23a7f0",place:"Box",url:"https://box.com/home/"}),r.default.createElement(p,null,"June 2017 — August 2017"),r.default.createElement("p",null,"Spent the summer working on ClusterRunner, a tool that helps run test suites in the fastest and most efficient way possible. Worked with Python and SQLite to build APIs and developer tools.")),r.default.createElement(s.default,{icon:"wrench",d:f},r.default.createElement(m,{title:"Software Engineering Intern",color:"#EE3F46",place:"Robin",url:"https://robinpowered.com/"}),r.default.createElement(p,null,"May 2016 — August 2016"),r.default.createElement("p",null,"Over the summer, I helped develop Robin's new user facing mobile app. Worked with React Native and Redux for both iOS and Android mobile apps.")),r.default.createElement(s.default,{icon:"wrench",d:d},r.default.createElement(m,{title:"Software Developer",color:"#2cb673",place:"Veranda Outdoors",url:"http://verandaoutdoors.com/"}),r.default.createElement(p,null,"May 2015 — August 2015"),r.default.createElement("p",null,"Led a small team of developers and created a wholesale ordering platform. Worked with PHP and MySQL to build out relational databases and user interfaces.")),r.default.createElement(s.default,{icon:"wrench",d:f},r.default.createElement(m,{title:"Freelance Software Engineer",color:"#0468b1",place:"University of Massachuetts Lowell",url:"https://uml.edu/"}),r.default.createElement(p,null,"February 2015 — June 2015"),r.default.createElement("p",null,"Teamed up with staff to build and design a web app to help automate the class scheduling process at my university. Worked with JavaScript and efficient algorithms to develop an optimized platform.")),r.default.createElement(s.default,{icon:"cap",d:d,isLast:!0},r.default.createElement(m,{title:"Started College",color:"#0468b1",place:"University of Massachuetts Lowell",url:"https://uml.edu/"}),r.default.createElement(p,null,"September 2014"),r.default.createElement("p",null,"Started attending college majoring in Computer Science with a minor in Mathematics.")))};t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-career-js-df62a8829e4598f35ab7.js.map