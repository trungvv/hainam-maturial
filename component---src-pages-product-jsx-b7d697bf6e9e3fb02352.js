(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{162:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),o=a(0),i=a.n(o),c=a(166),l=a.n(c),s=a(176),m=(a(78),a(36)),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.productInfo;return i.a.createElement("div",{className:"col col-sm-6 col-md-4 col-lg-3"},i.a.createElement("div",{className:"card",key:e.title},i.a.createElement(m.Link,{to:e.path},i.a.createElement("div",{className:"custom-card-img"},i.a.createElement("img",{className:"card-img-top",src:e.cover,alt:"Card image cap"}))),i.a.createElement("div",{className:"card-body"},i.a.createElement(m.Link,{to:e.path},i.a.createElement("h5",{className:"media-title"},e.title)),i.a.createElement("p",{className:"card-subtitle"},i.a.createElement("small",{className:"text-muted"},e.category)),i.a.createElement("div",{className:"overflow-hidden"},i.a.createElement("p",{className:"card-text text-justify"},e.shortDesc)))))},t}(i.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.getProductList=function(){var e=[];return this.props.productEdges.forEach(function(t){e.push({path:t.node.fields.slug,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,category:t.node.frontmatter.category,shortDesc:t.node.frontmatter.shortDesc,date:t.node.fields.date,slug:t.node.fields.slug})}),e},a.render=function(){var e=this.props.productEdges?this.getProductList():null;if(e)return i.a.createElement("div",{className:"row"},e.map(function(e){return i.a.createElement(p,{key:e.title,productInfo:e})}))},t}(i.a.Component),d=a(191),f=a(165),h=a.n(f);a.d(t,"productQuery",function(){return E});var g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e?i.a.createElement("div",null,i.a.createElement(d.a,{postEdges:e.edges}),i.a.createElement(u,{productEdges:e.edges})):i.a.createElement("h1",null,"Khong co du lieu");return i.a.createElement(s.a,{location:this.props.location,title:"Sản phẩm"},i.a.createElement("div",{className:"index-container"},i.a.createElement(l.a,null,i.a.createElement("title",null,"Sản phẩm"|h.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:h.a.siteUrl+"/product/"}),i.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),t))},t}(i.a.Component),E=(t.default=g,"3430068229")},171:function(e,t,a){var r,n,o;o=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var o=t.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(n="function"==typeof(r=o)?r.call(t,a,t,e):r)||(e.exports=n)},191:function(e,t,a){"use strict";var r=a(8),n=a.n(r),o=a(0),i=a.n(o),c=a(166),l=a.n(c),s=a(171),m=a.n(s),p=a(165),u=a.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t,a,r,n=this.props,o=n.postNode,c=n.postPath,s=n.postSEO;if(s){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,a=p.cover,r=m()(u.a.siteUrl,u.a.pathPrefix,c)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=m()(u.a.siteUrl,u.a.pathPrefix,a);var d=m()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return s&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:s?r:d}),s?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:a}))},t}(o.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-product-jsx-b7d697bf6e9e3fb02352.js.map