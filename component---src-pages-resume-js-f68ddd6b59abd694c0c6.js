(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var a=n(195),r=n.n(a),i=n(0),o=n.n(i),c=n(150),u=n(181),s=n(142),l=n(196),d=n(159),p=n(237),f=n.n(p);n(238);function m(){var e=r()(["\n  0% {\n    background: ",";\n  }\n  50% {\n    background: ",";\n  }\n  100% {\n    background: ",";\n  }\n"]);return m=function(){return e},e}var g=.1,b=2500,x="#eee",h="#ccc",y=Object(u.b)(m(),x,h,x),v=Object(c.a)("div")({position:"relative",minHeight:"100vh",width:"100%",display:"flex",justifyContent:"center",background:"#525659"}),w=Object(c.a)("div")({position:"relative",display:"block",background:"#fff",margin:"60px 0",animation:y+" 1.25s ease infinite",width:800,height:1035},function(e){var t=e.width;return{width:t,height:1.294*t}}),k=Object(c.a)("div")({position:"fixed",zIndex:99,background:"rgb(50, 54, 57)",boxShadow:"rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px",top:0,left:0,right:0,height:48,display:"flex",fontFamily:"sans-serif",alignItems:"center",fontSize:14,paddingLeft:24,fontWeight:500,color:"#fff"},function(e){return{transition:"all 300ms ease-in-out",transform:e.active?null:"translateY(-50px)"}}),E=Object(c.a)("div")({position:"fixed",zIndex:99,right:40,bottom:48}),S=Object(c.a)("button")({position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:36,width:36,background:"rgb(242, 242, 242)",color:"#616161",fontFamily:"sans-serif",fontWeight:300,boxShadow:"rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px",fontSize:24,lineHeight:"1px",outline:"none",border:"none",marginTop:10,borderRadius:"100%",cursor:"pointer"},function(e){var t=e.offset;return{transition:"all 300ms ease",transitionDelay:.075*(void 0===t?1:t)+"s",transform:e.active?null:"translateX(90px)"}}),j=Object(c.a)(s.Link)({position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:36,width:36,background:"rgb(242, 242, 242)",color:"#616161",fontFamily:"sans-serif",fontWeight:300,boxShadow:"rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px",fontSize:24,lineHeight:"1px",outline:"none",border:"none",marginTop:10,borderRadius:"100%",cursor:"pointer"},function(e){var t=e.offset;return{transition:"all 300ms ease",transitionDelay:.075*(void 0===t?1:t)+"s",transform:e.active?null:"translateX(90px)"}});t.default=function(){var e=o.a.useRef(),t=o.a.useState(1),n=t[0],a=t[1],r=o.a.useState(!0),i=r[0],c=r[1],u=0;"undefined"!=typeof window&&(u=window.document.querySelector("body").getBoundingClientRect().width);var s=Math.min(.8*u,800)*n;function p(e){a(Math.min(Math.max(e,.4),2))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{keywords:["nick","zuber","zubes","software","engineer","javascript"]}),o.a.createElement(v,{onMouseOver:function(){i||c(!0),clearTimeout(e.current),e.current=setTimeout(function(){return c(!1)},b)},onTouchStart:function(){clearTimeout(e.current),c(!0)},onTouchEnd:function(){clearTimeout(e.current),e.current=setTimeout(function(){return c(!1)},b)}},o.a.createElement(k,{active:i},"NickZuberResume.pdf"),o.a.createElement(l.Document,{file:f.a,loading:o.a.createElement(w,{width:s})},o.a.createElement(l.Page,{className:"pdf-page",width:s,pageNumber:1})),o.a.createElement(E,null,o.a.createElement(j,{offset:3,active:i,style:{marginBottom:24},className:"exit",to:"/"},"×"),o.a.createElement(S,{offset:2,active:i,className:"plus",onClick:function(){return p(n+g)}},"+"),o.a.createElement(S,{offset:1,active:i,className:"minus",onClick:function(){return p(n-g)}},"–"))))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(141),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(154),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},158:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(165),s=n.n(u),l=n(142),d="Nick Zuber ⊇ Software Engineer";function p(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,u=void 0===c?d:c;return i.a.createElement(l.StaticQuery,{query:f,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:u,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string},t.a=p;var f="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Nick Zuber",description:"Softare engineer man.",author:"Nick Zuber <zuber.nicholas@gmail.com>"}}}}},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},237:function(e,t,n){e.exports=n.p+"static/NickZuberResume-6d41583ba779d4ed69352afe037a1fdb.pdf"},238:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-resume-js-f68ddd6b59abd694c0c6.js.map