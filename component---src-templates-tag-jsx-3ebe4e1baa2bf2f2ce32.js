(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return h});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(169),l=n.n(s),c=n(172),d=n(204),m=n(168),p=n.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return i.a.createElement(c.a,{location:this.props.location,title:"Tagged in "+(e.charAt(0).toUpperCase()+e.slice(1))},i.a.createElement("div",{className:"tag-container"},i.a.createElement(l.a,null,i.a.createElement("title",null,'Posts tagged as "'+e+'" | '+p.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:p.a.siteUrl+"/tags/"+e}),i.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),i.a.createElement(d.a,{postEdges:t})))},t}(i.a.Component),h="3824571933"},203:function(e,t,n){},204:function(e,t,n){"use strict";n(78);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),s=n(37),l=n.n(s),c=n(36),d=n(184),m=n.n(d),p=n(173),u=n(168),h=n.n(u),f=(n(203),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=t?162:225;return i.a.createElement("div",{className:"col-lg-4 col-md-6 mt-4 mb-4"},i.a.createElement("div",{className:"card",key:e.title},i.a.createElement(c.Link,{to:e.path},i.a.createElement(p.a,{postNode:e,coverHeight:n})),i.a.createElement("div",{className:"card-body"},i.a.createElement(c.Link,{to:e.path},i.a.createElement("h5",{className:"media-title"},e.title)),i.a.createElement("p",{className:"card-subtitle"},i.a.createElement("small",{className:"text-muted"},m()(e.date).format(h.a.dateFormat))),i.a.createElement("div",{className:"overflow-hidden"},i.a.createElement("p",{className:"card-text text-justify"},e.excerpt)))))},t}(o.Component)),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,templateKey:t.node.frontmatter.templateKey})}),e},n.render=function(){var e=this.getPostList();return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},e.map(function(e){return i.a.createElement(f,{key:e.title,postInfo:e})})))},t}(i.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-3ebe4e1baa2bf2f2ce32.js.map