(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return f});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(166),c=n.n(s),l=n(194),m=n(171),d=n(164),p=n.n(d),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(m.a,{location:this.props.location,title:e.charAt(0).toUpperCase()+e.slice(1)},i.a.createElement("div",{className:"category-container"},i.a.createElement(c.a,null,i.a.createElement("title",null,'Posts in category "'+e+'" | '+p.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/categories/"+e}),i.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),i.a.createElement(l.a,{postEdges:t})))},t}(i.a.Component),f="4191571131"},168:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(177),i=n.n(o),s=n(0),c=n.n(s),l=n(36),m=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return c.a.createElement("div",{className:"post-tag-container"},"Tags: ",e&&e.map(function(e){return c.a.createElement(l.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+i()(e)},c.a.createElement("span",{className:"badge badge-pill badge-light"},e))}))},t}(s.Component));t.a=m},169:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){"use strict";n(77);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(37),c=n.n(s),l=n(36),m=n(188),d=n.n(m),p=(n(168),n(172)),u=n(164),f=n.n(u),h=(n(193),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(c()(c()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t?162:225;return i.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4"},i.a.createElement("div",{className:"card",key:e.title},i.a.createElement(l.Link,{to:e.path},i.a.createElement(p.a,{postNode:e,coverHeight:n})),i.a.createElement("div",{className:"card-body"},i.a.createElement(l.Link,{to:e.path},i.a.createElement("h5",{className:"media-title"},e.title)),i.a.createElement("p",{className:"card-subtitle"},i.a.createElement("small",{className:"text-muted"},d()(e.date).format(f.a.dateFormat))),i.a.createElement("div",{className:"overflow-hidden"},i.a.createElement("p",{className:"card-text text-justify"},e.excerpt)))))},t}(o.Component)),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},e.map(function(e){return i.a.createElement(h,{key:e.title,postInfo:e})})))},t}(i.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-templates-category-jsx-fafc7a6df123c734cc8d.js.map