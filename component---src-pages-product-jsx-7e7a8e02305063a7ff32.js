(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{166:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a.n(r),i=a(0),s=a.n(i),o=a(168),l=a.n(o),c=a(174),d=(a(78),a(235)),u=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.getProductList=function(){var e=[];return this.props.productEdges.forEach(function(t){e.push({path:t.node.fields.slug,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,category:t.node.frontmatter.category,excerpt:t.node.excerpt,date:t.node.fields.date,slug:t.node.fields.slug})}),e},a.render=function(){var e=this.props.productEdges?this.getProductList():null;if(e)return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},e.map(function(e,t){return void 0===t&&(t=0),s.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4",key:e.title},s.a.createElement(d.a,{productInfo:e}))})))},t}(s.a.Component),f=a(171),p=a(167),m=a.n(p);a.d(t,"productQuery",function(){return g});var h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark,t=e?s.a.createElement("div",null,s.a.createElement(f.a,{postEdges:e.edges}),s.a.createElement(u,{productEdges:e.edges})):s.a.createElement("h1",null,"Khong co du lieu");return s.a.createElement(c.a,{location:this.props.location,title:"Sản phẩm"},s.a.createElement("div",{className:"index-container"},s.a.createElement(l.a,null,s.a.createElement("title",null,"Sản phẩm"|m.a.siteTitle),s.a.createElement("link",{rel:"canonical",href:m.a.siteUrl+"/product/"}),s.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),s.a.createElement("header",{className:"hn-bg-heading"},s.a.createElement("div",{className:"bg_cover"},s.a.createElement("div",{className:"container post-title hn-breadcrumb"},s.a.createElement("h1",{className:"display-4 text-uppercase text-left text-white"},"Sản phẩm")))),t))},t}(s.a.Component),g=(t.default=h,"2570751949")},170:function(e,t,a){var r,n,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var i=t.join("/"),s=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=s.shift()+(s.length>0?"?":"")+s.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(n="function"==typeof(r=i)?r.call(t,a,t,e):r)||(e.exports=n)},171:function(e,t,a){"use strict";var r=a(8),n=a.n(r),i=a(0),s=a.n(i),o=a(168),l=a.n(o),c=a(170),d=a.n(c),u=a(167),f=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t,a,r,n=this.props,i=n.postNode,o=n.postPath,c=n.postSEO;if(c){var u=i.frontmatter;e=u.title,t=u.description?u.description:i.excerpt,a=d()(f.a.siteUrl,"/assets",u.cover),r=d()(f.a.siteUrl,o)}else e=f.a.siteTitle,t=f.a.siteDescription,a=d()(f.a.siteUrl,f.a.siteLogo);var p=f.a.siteUrl,m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:""}];return c&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:e,alternateName:f.a.siteTitleAlt?f.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),s.a.createElement(l.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),s.a.createElement("meta",{property:"og:url",content:c?r:p}),c?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:f.a.siteFBAppID?f.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:f.a.userTwitter?f.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=p},191:function(e,t,a){"use strict";var r=a(5);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),s=r(a(37)),o=r(a(79)),l=r(a(56)),c=r(a(0)),d=r(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.Tag,E="boolean"==typeof v?"lightgray":v,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var N=m;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&c.default.createElement(y,(0,l.default)({src:N.base64},L)),N.tracedSVG&&c.default.createElement(y,(0,l.default)({src:N.tracedSVG},L)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(y,{alt:a,title:t,src:N.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(h){var R=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=v;t.default=w},192:function(e,t,a){(function(e){function a(e,t){for(var a=0,r=e.length-1;r>=0;r--){var n=e[r];"."===n?e.splice(r,1):".."===n?(e.splice(r,1),a++):a&&(e.splice(r,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return r.exec(e).slice(1)};function i(e,t){if(e.filter)return e.filter(t);for(var a=[],r=0;r<e.length;r++)t(e[r],r,e)&&a.push(e[r]);return a}t.resolve=function(){for(var t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var s=n>=0?arguments[n]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return(r?"/":"")+(t=a(i(t.split("/"),function(e){return!!e}),!r).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),n="/"===s(e,-1);return(e=a(i(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&n&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,a){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var a=e.length-1;a>=0&&""===e[a];a--);return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var n=r(e.split("/")),i=r(a.split("/")),s=Math.min(n.length,i.length),o=s,l=0;l<s;l++)if(n[l]!==i[l]){o=l;break}var c=[];for(l=o;l<n.length;l++)c.push("..");return(c=c.concat(i.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=n(e),a=t[0],r=t[1];return a||r?(r&&(r=r.substr(0,r.length-1)),a+r):"."},t.basename=function(e,t){var a=n(e)[2];return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){return n(e)[3]};var s="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a(193))},235:function(e,t,a){"use strict";var r=a(8),n=a.n(r),i=a(37),s=a.n(i),o=a(0),l=a.n(o),c=a(36),d=a(172),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(s()(s()(a))),a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.productInfo,t=this.state.mobile?162:225;return l.a.createElement("div",{className:"card",key:e.title},l.a.createElement(c.Link,{to:e.path},l.a.createElement(d.a,{postNode:e,coverHeight:t})),l.a.createElement("div",{className:"card-body"},l.a.createElement(c.Link,{to:e.path},l.a.createElement("h5",{className:"media-title"},e.title)),l.a.createElement("p",{className:"card-subtitle text-uppercase"},l.a.createElement("small",{className:"text-muted"},e.category)),l.a.createElement("div",{className:"overflow-hidden"},l.a.createElement("p",{className:"card-text text-justify"},e.excerpt))))},t}(l.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-product-jsx-7e7a8e02305063a7ff32.js.map