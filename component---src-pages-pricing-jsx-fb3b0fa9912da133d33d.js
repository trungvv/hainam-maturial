(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(168),l=a.n(c),s=a(174),m=a(190),p=a(171),d=a(167),u=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e?o.a.createElement("div",null,o.a.createElement(p.a,{postEdges:e.edges}),o.a.createElement(m.a,{postEdges:e.edges})):o.a.createElement("h1",null,"Khong co du lieu");return o.a.createElement(s.a,{location:this.props.location,title:"Pricing"},o.a.createElement("div",{className:"index-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/pricing/"}),o.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),o.a.createElement("header",{className:"hn-bg-heading"},o.a.createElement("div",{className:"bg_cover"},o.a.createElement("div",{className:"container post-title hn-breadcrumb"},o.a.createElement("h1",{className:"display-4 text-uppercase text-left text-white"},"Bảng giá")))),t))},t}(o.a.Component);t.default=h;var f="3293374535"},170:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},171:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(168),l=a.n(c),s=a(170),m=a.n(s),p=a(167),d=a.n(p),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,c=r.postPath,s=r.postSEO;if(s){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,a=m()(d.a.siteUrl,"/assets",p.cover),n=m()(d.a.siteUrl,c)}else e=d.a.siteTitle,t=d.a.siteDescription,a=m()(d.a.siteUrl,d.a.siteLogo);var u=d.a.siteUrl,h=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return s&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:s?n:u}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=u},189:function(e,t,a){},190:function(e,t,a){"use strict";a(78);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(37),l=a.n(c),s=a(36),m=a(176),p=a.n(m),d=a(172),u=a(167),h=a.n(u),f=(a(189),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t?162:225;return o.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4"},o.a.createElement("div",{className:"card",key:e.title},o.a.createElement(s.Link,{to:e.path},o.a.createElement(d.a,{postNode:e,coverHeight:a})),o.a.createElement("div",{className:"card-body"},o.a.createElement(s.Link,{to:e.path},o.a.createElement("h5",{className:"media-title"},e.title)),o.a.createElement("p",{className:"card-subtitle"},o.a.createElement("small",{className:"text-muted"},p()(e.date).format(h.a.dateFormat))),o.a.createElement("div",{className:"overflow-hidden"},o.a.createElement("p",{className:"card-text text-justify"},e.excerpt)))))},t}(i.Component)),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,templateKey:t.node.frontmatter.templateKey})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},e.map(function(e){return o.a.createElement(f,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-pricing-jsx-fb3b0fa9912da133d33d.js.map