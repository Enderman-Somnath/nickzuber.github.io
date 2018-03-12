webpackJsonp([41802369688294],{54:function(e,t,n){"use strict";var i=n(1),r=n(82);if("undefined"==typeof i)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var a=(new i.Component).updater;e.exports=r(i.Component,i.isValidElement,a)},27:function(e,t){(function(t){"use strict";var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(t,function(){return this}())},67:function(e,t){e.exports=function(e,t,n){var i=e.direction,r=e.value;switch(i){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},29:function(e,t,n){"use strict";var i=n(1),r=n(59),a=n(7),o=n(54),l=n(67),s=a.any;"undefined"!=typeof window&&(s=a.instanceOf(window.Element)),e.exports=o({displayName:"VisibilitySensor",propTypes:{onChange:a.func,active:a.bool,partialVisibility:a.oneOfType([a.bool,a.oneOf(["top","right","bottom","left"])]),delayedCall:a.bool,offset:a.oneOfType([a.shape({top:a.number,left:a.number,bottom:a.number,right:a.number}),a.shape({direction:a.oneOf(["top","right","bottom","left"]),value:a.number})]),scrollCheck:a.bool,scrollDelay:a.number,scrollThrottle:a.number,resizeCheck:a.bool,resizeDelay:a.number,resizeThrottle:a.number,intervalCheck:a.bool,intervalDelay:a.number,containment:s,children:a.oneOfType([a.element,a.func]),minTopValue:a.number},getDefaultProps:function(){return{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.createElement("span")}},getInitialState:function(){return{isVisible:null,visibilityRect:{}}},componentDidMount:function(){this.node=r.findDOMNode(this),this.props.active&&this.startWatching()},componentWillUnmount:function(){this.stopWatching()},componentWillReceiveProps:function(e){e.active&&!this.props.active?(this.setState(this.getInitialState()),this.startWatching()):e.active||this.stopWatching()},getContainer:function(){return this.props.containment||window},addEventListener:function(e,t,n,i){this.debounceCheck||(this.debounceCheck={});var r,a,o=function(){r=null,this.check()}.bind(this);a=i>-1?function(){r||(r=setTimeout(o,i||0))}:function(){clearTimeout(r),r=setTimeout(o,n||0)};var l={target:e,fn:a,getLastTimeout:function(){return r}};e.addEventListener(t,l.fn),this.debounceCheck[t]=l},startWatching:function(){this.debounceCheck||this.interval||(this.props.intervalCheck&&(this.interval=setInterval(this.check,this.props.intervalDelay)),this.props.scrollCheck&&this.addEventListener(this.getContainer(),"scroll",this.props.scrollDelay,this.props.scrollThrottle),this.props.resizeCheck&&this.addEventListener(window,"resize",this.props.resizeDelay,this.props.resizeThrottle),!this.props.delayedCall&&this.check())},stopWatching:function(){if(this.debounceCheck)for(var e in this.debounceCheck)if(this.debounceCheck.hasOwnProperty(e)){var t=this.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),this.debounceCheck[e]=null}this.debounceCheck=null,this.interval&&(this.interval=clearInterval(this.interval))},check:function(){var e,t,n=this.node;if(!n)return this.state;if(e=n.getBoundingClientRect(),this.props.containment){var i=this.props.containment.getBoundingClientRect();t={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=this.props.offset||{},a="object"==typeof r;a&&(t.top+=r.top||0,t.left+=r.left||0,t.bottom-=r.bottom||0,t.right-=r.right||0);var o={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},s=o.top&&o.left&&o.bottom&&o.right;if(this.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof this.props.partialVisibility&&(c=o[this.props.partialVisibility]),s=this.props.minTopValue?c&&e.top<=t.bottom-this.props.minTopValue:c}"string"==typeof r.direction&&"number"==typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),s=l(r,e,t));var u=this.state;return this.state.isVisible!==s&&(u={isVisible:s,visibilityRect:o},this.setState(u),this.props.onChange&&this.props.onChange(s,o)),u},render:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.Children.only(this.props.children)}})},30:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(1),o=i(a),l=n(29),s=i(l),c=n(27),u=i(c),d={textTransform:"capitalize"},f=function(e){var t=e.style,n=e.children,i=(0,u.default)(),a="header-"+i;return o.default.createElement("div",null,o.default.createElement("h1",{className:a,style:r({},d,t)},n),o.default.createElement(s.default,{onChange:function(e){e&&document.querySelector("."+a).classList.add("animate-highlight-text-right")}}))};t.default=f,e.exports=t.default},93:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){switch(e){case"laptop":return v.default;case"heart":return f.default;case"pencil":return h.default;case"letter":return g.default;case"social":return k.default;case"travel":return y.default;case"wrench":return x.default;case"cap":return _.default;default:return RobinSheet}}t.__esModule=!0;var a=n(1),o=i(a),l=n(11),s=(i(l),n(22)),c=(i(s),n(30)),u=(i(c),n(154)),d=(i(u),n(148)),f=i(d),p=n(153),h=i(p),m=n(151),g=i(m),b=n(150),v=i(b),w=n(152),y=i(w),E=n(149),k=i(E),C=n(155),x=i(C),S=n(147),_=i(S),T=function(e){var t=e.icon;return o.default.createElement("div",{className:"item-icon-base",style:{backgroundImage:"url("+r(t)+")"}})};t.default=T,e.exports=t.default},95:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=i(r),o=n(29),l=i(o),s=function(e){var t=e.onChange,n=e.offset;return a.default.createElement("div",{style:{position:"absolute",marginTop:n+"px"}},a.default.createElement(l.default,{onChange:t}))};t.default=s,e.exports=t.default},229:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function a(e,t){if(e){document.querySelector("."+t+" .work-safe-wrapper").classList.add("fade-in");for(var n=0;n<document.querySelectorAll("."+t+" .work-right h1 .work-title").length;n++)document.querySelectorAll("."+t+" .work-right h1 .work-title")[n].classList.add("animate-highlight-text-right");document.querySelector("."+t+" .work-left .item-icon-base").classList.add("has-bursted");var i=document.querySelector("."+t+" .work-left .work-line");i?i.classList.add("fade-in"):null}}t.__esModule=!0;var o=n(1),l=i(o),s=n(11),c=(i(s),n(95)),u=i(c),d=n(27),f=i(d),p=n(93),h=i(p),m=function(e){var t=e.d;return l.default.createElement("svg",{className:"work-line",width:"50",height:"195",viewBox:"62 10 50 200",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.default.createElement("g",{fill:"none",fillRule:"evenodd"},l.default.createElement("path",{strokeWidth:"2",stroke:"rgba(50, 77, 90, 0.25)",strokeLinecap:"round",strokeDasharray:"15, 10, 5, 10, 15",d:t})))},g=function(e){var t=e.d,n=e.icon,i=e.children,o=r(e,["d","icon","children"]),s=!o.isLast,c=(0,f.default)(),d="-content-item-"+c;return l.default.createElement("div",{className:"work-block-wrapper "+d},l.default.createElement("div",{className:"work-safe-wrapper"},l.default.createElement("div",{className:"work-left"},l.default.createElement("div",{className:"work-icon"},l.default.createElement(h.default,{icon:n})),s?l.default.createElement(m,{d:t}):null),l.default.createElement("div",{className:"work-right"},l.default.createElement(u.default,{offset:75,onChange:function(e){return a(e,d)}}),i)))};t.default=g,e.exports=t.default},147:function(e,t,n){e.exports=n.p+"static/sprite-sheet-cap.eb0c6028.png"},148:function(e,t,n){e.exports=n.p+"static/sprite-sheet-heart.c4392bfd.png"},149:function(e,t,n){e.exports=n.p+"static/sprite-sheet-helmet.d114a539.png"},150:function(e,t,n){e.exports=n.p+"static/sprite-sheet-laptop.a50bb94c.png"},151:function(e,t,n){e.exports=n.p+"static/sprite-sheet-letter.d1dc85a7.png"},152:function(e,t,n){e.exports=n.p+"static/sprite-sheet-luggage.83eba191.png"},153:function(e,t,n){e.exports=n.p+"static/sprite-sheet-pencil.78f55d56.png"},155:function(e,t,n){e.exports=n.p+"static/sprite-sheet-wrench.8dfa39db.png"},233:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=i(r),o=n(11),l=(i(o),n(22)),s=i(l),c=n(229),u=i(c),d=550,f="M 80 40 Q 100 80 80 120 Q 60 160 80 200",p="M 80 40 Q 60 80 80 120 Q 100 160 80 200",h=function(e){var t=e.children;return a.default.createElement("span",{style:{margin:"-7px 0 10px",fontSize:"90%",fontWeight:"500",display:"block",color:"rgba(50, 77, 90, 0.35)",width:"100%"}},t)},m=function(e){var t=e.color,n=e.title,i=e.place,r=1/0;"undefined"!=typeof window&&(r=window.outerWidth);var o=n.split(" "),l=[];if(o.length<d&&r<d){for(var s=[],c=0;c<o.length;c++)2===s.length&&(l.push(s.join(" ")),s=[]),s.push(o[c]);s.length>0&&l.push(s.join(" "))}else l.push(n);return a.default.createElement("h1",{style:{lineHeight:"1.1em"}},l.map(function(e){return a.default.createElement("span",{id:e,className:"work-title"},e)}),a.default.createElement("br",null)," ",a.default.createElement("span",{style:{fontSize:"80%",fontWeight:"500"}},"at ",a.default.createElement("span",{style:{color:""+t}},i)))},g=function(){return a.default.createElement("div",{style:{textAlign:"center"}},a.default.createElement(s.default,null),a.default.createElement(u.default,{icon:"wrench",d:f},a.default.createElement(m,{title:"Software Engineer",color:"#EE3F46",place:"Robin"}),a.default.createElement(h,null,"May 2018 — current"),a.default.createElement("p",null,"I'll be rejoining the Robin engineering team to make it easier to manage your meeting rooms. Working with React, React Native, and Redux for web, iOS, and Android mobile apps.")),a.default.createElement(u.default,{icon:"wrench",d:p},a.default.createElement(m,{title:"Software Engineering Intern",color:"rgb(17, 82, 216)",place:"Box"}),a.default.createElement(h,null,"June 2017 — August 2017"),a.default.createElement("p",null,"Spent the summer working on ClusterRunner, a tool that helps run test suites in the fastest and most efficient way possible. Worked with Python and SQLite to build APIs and developer tools.")),a.default.createElement(u.default,{icon:"wrench",d:f},a.default.createElement(m,{title:"Software Engineering Intern",color:"#EE3F46",place:"Robin"}),a.default.createElement(h,null,"May 2016 — August 2016"),a.default.createElement("p",null,"Over the summer, I helped develop Robin's new user facing mobile app. Worked with React Native and Redux for both iOS and Android mobile apps.")),a.default.createElement(u.default,{icon:"wrench",d:p},a.default.createElement(m,{title:"Software Developer",color:"#2cb673",place:"Veranda Outdoors"}),a.default.createElement(h,null,"May 2015 — August 2015"),a.default.createElement("p",null,"Led a small team of developers and created a wholesale ordering platform. Worked with PHP and MySQL to build out relational databases and user interfaces.")),a.default.createElement(u.default,{icon:"wrench",d:f},a.default.createElement(m,{title:"Freelance Software Engineer",color:"#0468b1",place:"University of Massachuetts Lowell"}),a.default.createElement(h,null,"February 2015 — June 2015"),a.default.createElement("p",null,"Teamed up with staff to build and design a web app to help automate the class scheduling process at my university. Worked with JavaScript and efficient algorithms to develop an optimized platform.")),a.default.createElement(u.default,{icon:"cap",d:f,isLast:!0},a.default.createElement(m,{title:"Started College",color:"#0468b1",place:"University of Massachuetts Lowell"}),a.default.createElement(h,null,"September 2014"),a.default.createElement("p",null,"Started attending college majoring in Computer Science with a minor in Mathematics.")))};t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-career-js-1fd5777cd444b8e55084.js.map