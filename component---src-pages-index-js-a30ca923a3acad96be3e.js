webpackJsonp([35783957827783],{54:function(e,t,n){"use strict";var a=n(1),r=n(82);if("undefined"==typeof a)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var i=(new a.Component).updater;e.exports=r(a.Component,a.isValidElement,i)},27:function(e,t){(function(t){"use strict";var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(t,function(){return this}())},67:function(e,t){e.exports=function(e,t,n){var a=e.direction,r=e.value;switch(a){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},29:function(e,t,n){"use strict";var a=n(1),r=n(59),i=n(7),o=n(54),l=n(67),s=i.any;"undefined"!=typeof window&&(s=i.instanceOf(window.Element)),e.exports=o({displayName:"VisibilitySensor",propTypes:{onChange:i.func,active:i.bool,partialVisibility:i.oneOfType([i.bool,i.oneOf(["top","right","bottom","left"])]),delayedCall:i.bool,offset:i.oneOfType([i.shape({top:i.number,left:i.number,bottom:i.number,right:i.number}),i.shape({direction:i.oneOf(["top","right","bottom","left"]),value:i.number})]),scrollCheck:i.bool,scrollDelay:i.number,scrollThrottle:i.number,resizeCheck:i.bool,resizeDelay:i.number,resizeThrottle:i.number,intervalCheck:i.bool,intervalDelay:i.number,containment:s,children:i.oneOfType([i.element,i.func]),minTopValue:i.number},getDefaultProps:function(){return{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:a.createElement("span")}},getInitialState:function(){return{isVisible:null,visibilityRect:{}}},componentDidMount:function(){this.node=r.findDOMNode(this),this.props.active&&this.startWatching()},componentWillUnmount:function(){this.stopWatching()},componentWillReceiveProps:function(e){e.active&&!this.props.active?(this.setState(this.getInitialState()),this.startWatching()):e.active||this.stopWatching()},getContainer:function(){return this.props.containment||window},addEventListener:function(e,t,n,a){this.debounceCheck||(this.debounceCheck={});var r,i,o=function(){r=null,this.check()}.bind(this);i=a>-1?function(){r||(r=setTimeout(o,a||0))}:function(){clearTimeout(r),r=setTimeout(o,n||0)};var l={target:e,fn:i,getLastTimeout:function(){return r}};e.addEventListener(t,l.fn),this.debounceCheck[t]=l},startWatching:function(){this.debounceCheck||this.interval||(this.props.intervalCheck&&(this.interval=setInterval(this.check,this.props.intervalDelay)),this.props.scrollCheck&&this.addEventListener(this.getContainer(),"scroll",this.props.scrollDelay,this.props.scrollThrottle),this.props.resizeCheck&&this.addEventListener(window,"resize",this.props.resizeDelay,this.props.resizeThrottle),!this.props.delayedCall&&this.check())},stopWatching:function(){if(this.debounceCheck)for(var e in this.debounceCheck)if(this.debounceCheck.hasOwnProperty(e)){var t=this.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),this.debounceCheck[e]=null}this.debounceCheck=null,this.interval&&(this.interval=clearInterval(this.interval))},check:function(){var e,t,n=this.node;if(!n)return this.state;if(e=n.getBoundingClientRect(),this.props.containment){var a=this.props.containment.getBoundingClientRect();t={top:a.top,left:a.left,bottom:a.bottom,right:a.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=this.props.offset||{},i="object"==typeof r;i&&(t.top+=r.top||0,t.left+=r.left||0,t.bottom-=r.bottom||0,t.right-=r.right||0);var o={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},s=o.top&&o.left&&o.bottom&&o.right;if(this.props.partialVisibility){var c=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof this.props.partialVisibility&&(c=o[this.props.partialVisibility]),s=this.props.minTopValue?c&&e.top<=t.bottom-this.props.minTopValue:c}"string"==typeof r.direction&&"number"==typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),s=l(r,e,t));var u=this.state;return this.state.isVisible!==s&&(u={isVisible:s,visibilityRect:o},this.setState(u),this.props.onChange&&this.props.onChange(s,o)),u},render:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):a.Children.only(this.props.children)}})},229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){e&&(document.querySelector("."+t+" .item-safe-wrapper").classList.add("fade-in"),document.querySelector("."+t+" .item-content h1").classList.add("animate-highlight-text-right"),document.querySelector("."+t+" .item-icon .item-icon-base").classList.add("has-bursted"))}t.__esModule=!0;var i=n(1),o=a(i),l=n(11),s=(a(l),n(95)),c=a(s),u=n(27),f=a(u),h=n(22),d=(a(h),n(30)),p=(a(d),n(93)),m=a(p),b=function(e){var t=e.icon,n=e.children,a=(0,f.default)(),i="-content-item-"+a;return o.default.createElement("div",{className:"item-wrapper "+i},o.default.createElement("div",{className:"item-safe-wrapper"},o.default.createElement("div",{className:"item-icon"},o.default.createElement(m.default,{icon:t})),o.default.createElement("div",{className:"item-content"},o.default.createElement(c.default,{offset:100,onChange:function(e){return r(e,i)}}),n)))};t.default=b,e.exports=t.default},30:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=n(1),o=a(i),l=n(29),s=a(l),c=n(27),u=a(c),f={textTransform:"capitalize"},h=function(e){var t=e.style,n=e.children,a=(0,u.default)(),i="header-"+a;return o.default.createElement("div",null,o.default.createElement("h1",{className:i,style:r({},f,t)},n),o.default.createElement(s.default,{onChange:function(e){e&&document.querySelector("."+i).classList.add("animate-highlight-text-right")}}))};t.default=h,e.exports=t.default},93:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){switch(e){case"laptop":return v.default;case"heart":return h.default;case"pencil":return p.default;case"letter":return b.default;case"social":return k.default;case"travel":return y.default;case"robin":return x.default;case"box":return _.default;case"veranda":return I.default;case"uml":return W.default;default:return x.default}}t.__esModule=!0;var i=n(1),o=a(i),l=n(11),s=(a(l),n(22)),c=(a(s),n(30)),u=(a(c),n(154)),f=(a(u),n(148)),h=a(f),d=n(153),p=a(d),m=n(151),b=a(m),g=n(150),v=a(g),E=n(152),y=a(E),w=n(149),k=a(w),C=n(155),x=a(C),z=n(147),_=a(z),T=n(157),I=a(T),V=n(156),W=a(V),L=function(e){var t=e.icon;return o.default.createElement("div",{className:"item-icon-base",style:{backgroundImage:"url("+r(t)+")"}})};t.default=L,e.exports=t.default},95:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),i=a(r),o=n(29),l=a(o),s=function(e){var t=e.onChange,n=e.offset;return i.default.createElement("div",{style:{position:"absolute",marginTop:n+"px"}},i.default.createElement(l.default,{onChange:t}))};t.default=s,e.exports=t.default},147:function(e,t,n){e.exports=n.p+"static/sprite-sheet-box.6a2eda0e.png"},148:function(e,t,n){e.exports=n.p+"static/sprite-sheet-heart.7c9d5901.png"},149:function(e,t,n){e.exports=n.p+"static/sprite-sheet-helmet.3aab5e85.png"},150:function(e,t,n){e.exports=n.p+"static/sprite-sheet-laptop.ec428541.png"},151:function(e,t,n){e.exports=n.p+"static/sprite-sheet-letter.d1dc85a7.png"},152:function(e,t,n){e.exports=n.p+"static/sprite-sheet-luggage.60ab17a3.png"},153:function(e,t,n){e.exports=n.p+"static/sprite-sheet-pencil.c9056c3d.png"},155:function(e,t,n){e.exports=n.p+"static/sprite-sheet-robin.984a12d3.png"},156:function(e,t,n){e.exports=n.p+"static/sprite-sheet-uml.96023e09.png"},157:function(e,t,n){e.exports=n.p+"static/sprite-sheet-veranda.8842ea97.png"},235:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=n(1),i=a(r),o=n(11),l=a(o),s=n(22),c=a(s),u=n(229),f=a(u),h=function(e){var t=e.data,n=t.allMarkdownRemark.edges,a=n[0].node.frontmatter;return i.default.createElement("div",null,i.default.createElement(c.default,null),i.default.createElement(f.default,{icon:"laptop"},i.default.createElement("h1",null,"What I've been up to"),i.default.createElement("p",null,"Last summer, I was at ",i.default.createElement("a",{href:"https://box.com/home"},"Box")," working on ",i.default.createElement("a",{href:"https://github.com/box/ClusterRunner"},"ClusterRunner"),", a tool that helps run test suites in the fastest and most efficient way possible. Working with ",i.default.createElement("a",{href:"https://www.python.org/"},"Python")," and ",i.default.createElement("a",{href:"http://www.tornadoweb.org/en/stable/"},"SQLite")," to help build developer tools.")),i.default.createElement(f.default,{icon:"heart"},i.default.createElement("h1",null,"Some things I've made"),i.default.createElement("p",null,i.default.createElement("a",{href:"https://github.com/nickzuber/infrared"},"infrared"),", ",i.default.createElement("a",{href:"https://github.com/nickzuber/needle"},"needle"),", ",i.default.createElement("a",{href:"https://github.com/nickzuber/mark-up"},"markup"),", ",i.default.createElement("a",{href:"https://github.com/nickzuber/add-reason"},"add-reason"),", and ",i.default.createElement("a",{href:"https://github.com/nickzuber/doxide"},"doxide")," are a few of my projects. You can find more on ",i.default.createElement("a",{href:"https://github.com/nickzuber"},"GitHub"),". Some of these projects collectively have over 16K installs on ",i.default.createElement("a",{href:"https://www.npmjs.com/~nickzuber"},"NPM"),".")),i.default.createElement(f.default,{icon:"pencil"},i.default.createElement("h1",null,"Writings and thoughts"),i.default.createElement("p",null,"When I'm not reading about new things, I like ",i.default.createElement(l.default,{to:"/blog/"},"writing about them"),". I've recently learned about ",i.default.createElement(l.default,{to:a.path},a.title),".")),i.default.createElement(f.default,{icon:"letter"},i.default.createElement("h1",null,"Experience and resume"),i.default.createElement("p",null,"I've been around the block a few times, learning plenty of new skills and gaining tons of experience along the way. You can ",i.default.createElement("a",{href:"./NickZuberResume.pdf"},"take a look at my resume")," to see what I've been up to lately.")),i.default.createElement(f.default,{icon:"social"},i.default.createElement("h1",null,"Where to find me"),i.default.createElement("p",null,"There are plenty of ways to get in touch. You can find me on ",i.default.createElement("a",{href:"http://stackoverflow.com/users/5055063/nick-zuber"},"Stack Overflow"),", ",i.default.createElement("a",{href:"https://github.com/nickzuber"},"GitHub"),", ",i.default.createElement("a",{href:"https://www.linkedin.com/in/nickzuber"},"LinkedIn"),", ",i.default.createElement("a",{href:"https://angel.co/nicholas-zuber"},"AngelList"),", ",i.default.createElement("a",{href:"https://twitter.com/nick_zuber"},"Twitter"),", ",i.default.createElement("a",{href:"https://www.facebook.com/zuber.nicholas"},"Facebook"),", or just ",i.default.createElement("a",{href:"mailto:zuber.nicholas@gmail.com"},"shoot me an email"),".")),i.default.createElement(f.default,{icon:"travel"},i.default.createElement("h1",null,"Where I've been"),i.default.createElement("p",null,"Over the years, I've had the privilege of ",i.default.createElement(l.default,{to:"/work/"},"working for some amazing companies and organizations"),". Here's a small overview on where I've been recently.")))};t.pageQuery="** extracted graphql fragment **";t.default=h}});
//# sourceMappingURL=component---src-pages-index-js-a30ca923a3acad96be3e.js.map