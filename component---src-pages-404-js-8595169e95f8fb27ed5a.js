(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(145),A=n(148);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(A.a,{title:"404"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},135:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return r});n(66),n(46),n(149);var a=n(133),i={primary:"#464646",secondary:"#878787",accent:"#fdb826",dark:"#152140",light:"#D9D6D8",black:"#000",white:"#fff",gray:"#464a4c",page:"#929292"},o={primary:'"Roboto", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',secondary:'"Roboto Slab", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'},A={phone:576,mobile:768,tablet:992,desktop:1200},r=Object.keys(A).reduce(function(e,t){return e[t]=function(){return Object(a.b)(["@media (max-width:","px){",";}"],A[t],a.b.apply(void 0,arguments))},e},{});Object.keys(A).reduce(function(e,t){return e[t]=function(){return Object(a.b)(["@media (min-width:","px){",";}"],A[t],a.b.apply(void 0,arguments))},e},{})},136:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return g});var a=n(0),i=n.n(a),o=n(4),A=n.n(o),r=n(134),c=n.n(r);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return r.withPrefix}),n.d(t,"navigate",function(){return r.navigate}),n.d(t,"push",function(){return r.push}),n.d(t,"replace",function(){return r.replace}),n.d(t,"navigateTo",function(){return r.navigateTo});var l=n(138),m=n.n(l);n.d(t,"PageRenderer",function(){return m.a});var u=n(28);n.d(t,"parsePath",function(){return u.a});var s=i.a.createContext({}),g=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},138:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},139:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(133),A=n(4),r=n.n(A),c=o.c.div.withConfig({displayName:"ContainerBlock",componentId:"sc-1qppn0h-0"})(["max-width:970px;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;"]),l=function(e){var t=e.className,n=e.children;return i.a.createElement(c,{className:t},n)};l.propTypes={className:r.a.string,children:r.a.node.isRequired},t.a=l},140:function(e){e.exports={data:{site:{siteMetadata:{title:"PHoto"}}}}},141:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),o=n(4),A=n.n(o),r=n(47),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=l},142:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0QjRBMjZFQ0IzRDExRTg5ODAwQUFGQkM5MjA3OEFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0QjRBMjZGQ0IzRDExRTg5ODAwQUFGQkM5MjA3OEFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDdERTlERjVDQjNCMTFFODk4MDBBQUZCQzkyMDc4QUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDdERTlERjZDQjNCMTFFODk4MDBBQUZCQzkyMDc4QUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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"},143:function(e,t,n){"use strict";var a=n(140),i=n(0),o=n.n(i),A=n(133),r=n(4),c=n.n(r),l=n(150),m=n.n(l),u=n(136),s=(n(151),n(137)),g=n.n(s),p=n(144),d=n(135);function f(){var e=g()(["\n  /* Reset the box-sizing, position and others */\n  html {\n    box-sizing: border-box;\n    min-width: 320px;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n    /* Fix some resize in flexbox elements */\n    min-width: 0;\n    min-height: 0;\n  }\n  ::selection {\n    color: ",";\n    /* Fix Chrome selection */\n    background: ",";\n  }\n  ::-moz-selection {\n    color: ",";\n    background: ",";\n  }\n  *:focus {\n    outline: none;\n  }\n  body {\n    background: url(",") top center;\n    color: ",";\n    font-family: ",";\n    font-size: 12px;\n    line-height: 2;\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n  }\n  /* Links */\n  a {\n    color: blue;\n    text-decoration: underline;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"]);return f=function(){return e},e}var E=Object(A.a)(f(),d.a.primary,Object(p.b)(d.a.accent,.99),d.a.primary,d.a.accent,function(e){return e.back},d.a.page,d.b.primary),I=n(142),h=n.n(I),B=n(139),x=n(152),b=n.n(x),Q=A.c.footer.withConfig({displayName:"FooterBlock",componentId:"sc-1xqajj9-0"})(["padding:30px 0;text-align:center;"]),C=Object(A.c)(B.a).withConfig({displayName:"FooterInner",componentId:"sc-1xqajj9-1"})([""]),y=A.c.div.withConfig({displayName:"FooterText",componentId:"sc-1xqajj9-2"})([""]),R=function(e){var t=e.text;return o.a.createElement(Q,null,o.a.createElement(C,null,o.a.createElement(y,null,"© ",t,", ",b()().format("YYYY"))))},w=A.c.div.withConfig({displayName:"LayoutBlock",componentId:"vcm2r8-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),k=A.c.div.withConfig({displayName:"LayoutContent",componentId:"vcm2r8-1"})(["flex:1 1 100%;"]),M=function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{back:h.a}),o.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:400,500,700"})),o.a.createElement(w,null,o.a.createElement(k,null,t),o.a.createElement(R,{text:e.site.siteMetadata.title})))},data:a})};M.propTypes={children:c.a.node.isRequired};var v=M;t.a=v},145:function(e,t,n){"use strict";var a=n(137),i=n.n(a),o=n(0),A=n.n(o),r=n(133),c=n(135),l=n(143),m=n(139),u=n(144),s=n(146),g=n(136),p=Object(r.c)(g.Link).withConfig({displayName:"LogoBlock",componentId:"sc-1rahkvg-0"})(["color:",";font-family:",";font-size:36px;line-height:1;font-weight:400;text-decoration:none;cursor:pointer;&:hover{color:",";}span{color:",";font-weight:400;}"],c.a.primary,c.b.secondary,c.a.primary,c.a.accent),d=function(e){e.data;return A.a.createElement(g.StaticQuery,{query:"1708394091",render:function(e){return A.a.createElement(p,{to:"/"},e.site.siteMetadata.title," ",A.a.createElement("span",null,"/"))},data:s})};function f(){var e=i()(["\n    display: inline-block;\n    margin-top: 0;\n    padding: 0 10px;\n  "]);return f=function(){return e},e}var E=r.c.nav.withConfig({displayName:"NavigationBlock",componentId:"sc-113dz3n-0"})(["font-size:12px;line-height:1;"]),I=r.c.ul.withConfig({displayName:"NavigationList",componentId:"sc-113dz3n-1"})(["list-style:none;margin:0;padding:0;"]),h=r.c.li.withConfig({displayName:"NavigationItem",componentId:"sc-113dz3n-2"})(["margin-top:12px;text-transform:uppercase;font-weight:500;&:first-child{margin-top:0;}",""],c.c.mobile(f())),B=Object(r.c)(g.Link).withConfig({displayName:"NavigationLink",componentId:"sc-113dz3n-3"})(["display:inline-block;color:",";text-decoration:none;cursor:pointer;&:hover{color:",";}"],c.a.primary,c.a.accent),x=function(){return A.a.createElement(E,null,A.a.createElement(I,null,A.a.createElement(h,null,A.a.createElement(B,{to:"/"},"Home")),A.a.createElement(h,null,A.a.createElement(B,{to:"/about"},"About")),A.a.createElement(h,null,A.a.createElement(B,{to:"/work"},"Work")),A.a.createElement(h,null,A.a.createElement(B,{to:"/contact"},"Contact"))))};function b(){var e=i()(["\n    width: 200px;\n    display: inline-block;\n  "]);return b=function(){return e},e}function Q(){var e=i()(["\n    text-align: center;\n    margin-bottom: 35px;\n  "]);return Q=function(){return e},e}var C=r.c.aside.withConfig({displayName:"SidebarBlock",componentId:"sc-2hp16i-0"})(["text-align:right;",""],c.c.mobile(Q())),y=r.c.div.withConfig({displayName:"SidebarItem",componentId:"sc-2hp16i-1"})(["margin-bottom:20px;"]),R=r.c.div.withConfig({displayName:"SidebarSlogan",componentId:"sc-2hp16i-2"})(["position:relative;padding:10px 0;color:",";font-family:'Georgia',sans-serif;font-style:italic;font-size:12px;line-height:18px;"," &:before,&:after{content:'';position:absolute;left:0;width:100%;height:2px;background:#ced2d5;border-bottom:1px solid #f7f6f7;}&:before{top:0;}&:after{bottom:0;}"],Object(u.a)(.18,c.a.page),c.c.mobile(b())),w=function(){return A.a.createElement(C,null,A.a.createElement(y,null,A.a.createElement(d,null)),A.a.createElement(y,null,A.a.createElement(R,null,"A clean & simple website layout.")),A.a.createElement(y,null,A.a.createElement(x,null)))};function k(){var e=i()(["\n    max-width: 100%;\n    padding-right: 0;\n  "]);return k=function(){return e},e}function M(){var e=i()(["\n    display: block;\n  "]);return M=function(){return e},e}var v=r.c.div.withConfig({displayName:"MainBlock",componentId:"sc-14uipae-0"})(["padding:154px 0 0 0;"]),G=Object(r.c)(m.a).withConfig({displayName:"MainInner",componentId:"sc-14uipae-1"})(["display:flex;flex-wrap:wrap;",""],c.c.mobile(M())),D=r.c.div.withConfig({displayName:"MainSidebar",componentId:"sc-14uipae-2"})(["flex:0 0 185px;max-width:185px;padding-right:30px;",""],c.c.mobile(k())),H=r.c.div.withConfig({displayName:"MainContent",componentId:"sc-14uipae-3"})(["flex:1 1 0%;max-width:100%;margin-bottom:30px;"]);t.a=function(e){var t=e.children;return A.a.createElement(l.a,null,A.a.createElement(v,null,A.a.createElement(G,null,A.a.createElement(D,null,A.a.createElement(w,null)),A.a.createElement(H,null,t))))}},146:function(e){e.exports={data:{site:{siteMetadata:{title:"PHoto"}}}}},147:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0QjRBMjc2Q0IzRDExRTg5ODAwQUFGQkM5MjA3OEFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0QjRBMjc3Q0IzRDExRTg5ODAwQUFGQkM5MjA3OEFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjRCNEEyNzRDQjNEMTFFODk4MDBBQUZCQzkyMDc4QUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjRCNEEyNzVDQjNEMTFFODk4MDBBQUZCQzkyMDc4QUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAADAAYDAREAAhEBAxEB/8QAUgABAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAABAAAQQDAQAAAAAAAAAAAAAAFBMjMyQAFUVVEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwB/0WzhDrPqggsSWdwMrBc1k1pDA//Z"},148:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(133),A=n(147),r=n.n(A),c=o.c.h1.withConfig({displayName:"PageTitleBlock",componentId:"hvzmgw-0"})(["margin:10px 0 20px;color:#464646;font-size:12px;line-height:18px;text-transform:uppercase;&:after{content:'';display:block;height:3px;margin:5px 0 0;background:url(",") repeat-x;opacity:0.1;}"],r.a),l=function(e){var t=e.title;return i.a.createElement(c,null,t)};t.a=l}}]);
//# sourceMappingURL=component---src-pages-404-js-8595169e95f8fb27ed5a.js.map