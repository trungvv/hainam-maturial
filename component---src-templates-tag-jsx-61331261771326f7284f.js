(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(167),c=n.n(s),l=n(173),d=n(224),m=n(165),p=n.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,{location:this.props.location,title:"Tagged in "+(e.charAt(0).toUpperCase()+e.slice(1))},o.a.createElement("div",{className:"tag-container"},o.a.createElement(c.a,null,o.a.createElement("title",null,'Posts tagged as "'+e+'" | '+p.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/tags/"+e}),o.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),o.a.createElement(d.a,{postEdges:t})))},t}(o.a.Component),f="3824571933"},178:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(184),o=n.n(i),s=n(0),c=n.n(s),l=n(36),d=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return c.a.createElement("div",{className:"post-tag-container"},"Tags: ",e&&e.map(function(e){return c.a.createElement(l.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+o()(e)},c.a.createElement("span",{className:"badge badge-pill badge-light"},e))}))},t}(s.Component));t.a=d},179:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){"use strict";n(77);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(37),c=n.n(s),l=n(36),d=n(218),m=n.n(d),p=(n(178),n(181)),u=n(165),f=n.n(u),h=(n(223),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(c()(c()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t?162:225;return o.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4"},o.a.createElement("div",{className:"card",key:e.title},o.a.createElement(l.Link,{to:e.path},o.a.createElement(p.a,{postNode:e,coverHeight:n})),o.a.createElement("div",{className:"card-body"},o.a.createElement(l.Link,{to:e.path},o.a.createElement("h5",{className:"media-title"},e.title)),o.a.createElement("p",{className:"card-subtitle"},o.a.createElement("small",{className:"text-muted"},m()(e.date).format(f.a.dateFormat))),o.a.createElement("div",{className:"overflow-hidden"},o.a.createElement("p",{className:"card-text text-justify"},e.excerpt)))))},t}(i.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},e.map(function(e){return o.a.createElement(h,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=g}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-61331261771326f7284f.js.map