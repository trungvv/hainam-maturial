(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(166),l=n.n(c),s=n(171),m=n(194),p=n(170),u=n(164),d=n.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e?o.a.createElement("div",null,o.a.createElement(p.a,{postEdges:e.edges}),o.a.createElement(m.a,{postEdges:e.edges})):o.a.createElement("h1",null,"Khong co du lieu");return o.a.createElement(s.a,{location:this.props.location,title:"HaiNamer"},o.a.createElement("div",{className:"index-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,d.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:d.a.siteUrl+"/hainamer/"}),o.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),t))},t}(o.a.Component);t.default=h;var f="2750608900"},167:function(e,t,n){var a,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(a>0&&(r=r.replace(/^[\/]+/,"")),r=a<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r)},168:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(177),o=n.n(i),c=n(0),l=n.n(c),s=n(36),m=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return l.a.createElement("div",{className:"post-tag-container"},"Tags: ",e&&e.map(function(e){return l.a.createElement(s.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+o()(e)},l.a.createElement("span",{className:"badge badge-pill badge-light"},e))}))},t}(c.Component));t.a=m},169:function(e,t,n){},170:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(166),l=n.n(c),s=n(167),m=n.n(s),p=n(164),u=n.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,c=r.postPath,s=r.postSEO;if(s){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=m()(u.a.siteUrl,u.a.pathPrefix,c)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=m()(u.a.siteUrl,u.a.pathPrefix,n);var d=m()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return s&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:s?a:d}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=d},193:function(e,t,n){},194:function(e,t,n){"use strict";n(77);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(37),l=n.n(c),s=n(36),m=n(188),p=n.n(m),u=(n(168),n(172)),d=n(164),h=n.n(d),f=(n(193),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t?162:225;return o.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4"},o.a.createElement("div",{className:"card",key:e.title},o.a.createElement(s.Link,{to:e.path},o.a.createElement(u.a,{postNode:e,coverHeight:n})),o.a.createElement("div",{className:"card-body"},o.a.createElement(s.Link,{to:e.path},o.a.createElement("h5",{className:"media-title"},e.title)),o.a.createElement("p",{className:"card-subtitle"},o.a.createElement("small",{className:"text-muted"},p()(e.date).format(h.a.dateFormat))),o.a.createElement("div",{className:"overflow-hidden"},o.a.createElement("p",{className:"card-text text-justify"},e.excerpt)))))},t}(i.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},e.map(function(e){return o.a.createElement(f,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=g}}]);
//# sourceMappingURL=component---src-pages-hainamer-jsx-401f79ce5fe9ad0314c0.js.map