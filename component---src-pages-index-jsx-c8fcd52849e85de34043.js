(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{163:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),l=a(0),s=a.n(l),r=a(169),c=a.n(r),o=a(1),m=a.n(o),d=a(173),p=a(172),h=a(168),u=a.n(h),g=(a(26),a(37)),E=a.n(g),v=a(259),N=a.n(v),b=a(36),w=(a(260),a(261),a(420),a(171)),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:225},a.handleResize=a.handleResize.bind(E()(E()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){this.setState({mobile:window.innerWidth/2.7})},a.render=function(){var e=this.state.mobile,t=this.props.bannerImage.bannerImage.map(function(t){var a={cover:t.image};return s.a.createElement("div",{className:"card",key:t.id},s.a.createElement(w.a,{postNode:a,coverHeight:e}))});return s.a.createElement("div",{className:"container-fluid"},s.a.createElement(N.a,Object.assign({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},{className:"row"}),t))},t}(l.Component),y=(a(78),a(421),a(262)),T=function(e){var t=e.productTitle,a=void 0===t?null:t,n=e.productSubtitle,i=void 0===n?null:n,l=e.productsHome,r=[];l.edges.length>0&&l.edges.forEach(function(e){r.push({path:e.node.fields.slug,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,category:e.node.frontmatter.category,excerpt:e.node.excerpt,date:e.node.fields.date,slug:e.node.fields.slug})});var c=r.length>0?r.map(function(e){return s.a.createElement("div",{className:"col"},s.a.createElement(y.a,{key:e.title,productInfo:e}))}):s.a.createElement("p",null,"Chưa có sản phẩm nào được chọn!"),o=r.length>2?s.a.createElement(N.a,Object.assign({},{dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]},{className:"mt-sm-5 row"}),c):{slides:c};return s.a.createElement("div",{className:"jumbotron bg-light mb-0 container",id:"ProductSection"},s.a.createElement("h1",{className:"display-4 text-center"},a),s.a.createElement("p",{className:"lead text-center"},i),s.a.createElement("hr",{className:"line bg-secondary"}),s.a.createElement("div",{className:"container-fluid"},o))},x=(a(422),[{id:1,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_concert_2-min-370x222.jpg",altText:"Slide 1",caption:"Slide 1",category:"Phim",title:"Media",desc:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content."},{id:2,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_sport_2-2-370x222.jpg",altText:"Slide 2",caption:"Slide 2",category:"Phim",title:"Public Relations",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:3,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_3-min-370x222.jpg",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"Tổ chức sự kiện",desc:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:4,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"Digital Marketing",desc:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:5,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_festival_3-min-370x222.jpg",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"OOH",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:6,src:"https://ovatheme.com/em4u/wp-content/uploads/2017/10/event_conference_2-2-370x222.jpg",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"Khác",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}]),S=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){this.props.t;var e=x.map(function(e){return s.a.createElement("div",{className:"col-md-6 col-lg-4",key:e.id},s.a.createElement("div",{className:"media border media-style"},s.a.createElement("div",{className:"mr-3 btn rounded-circle bg-secondary num"},e.id),s.a.createElement("div",{className:"media-body"},s.a.createElement("h3",{className:"media-title"},e.title),s.a.createElement("div",{className:"overflow-hidden"},s.a.createElement("p",{className:"media-text "},e.desc)))))});return s.a.createElement("div",{className:"jumbotron container-fluid rounded-0 mb-0",id:"service"},s.a.createElement("h1",{className:"display-4 text-center"},"Dịch vụ"),s.a.createElement("p",{className:"lead text-center"},"There is a lot of exciting stuff going on in the stars above us that makes"),s.a.createElement("hr",{className:"line bg-secondary"}),s.a.createElement("div",{className:"row mt-5"},e))},t}(l.Component),k=(a(423),[{id:1,src:"assets/customers-hp-logo.png",altText:"Slide 1",caption:"Slide 1",category:"Customer",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:2,src:"assets/customers-ichnhan-logo.png",altText:"Slide 2",caption:"Slide 2",category:"Phim",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:3,src:"assets/customers-namduoc-logo.png",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:4,src:"assets/customers-pnj-logo.png",altText:"Slide 3",caption:"Slide 3",category:"Phim",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:5,src:"assets/customers-rmit-logo.png",altText:"Slide 1",caption:"Slide 1",category:"Customer",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},{id:6,src:"assets/customers-sabeco.png",altText:"Slide 2",caption:"Slide 2",category:"Phim",title:"Card title",desc:"his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}]),P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){this.props.t;var e=k.map(function(e){return s.a.createElement("div",{className:"col",key:e.id},s.a.createElement("img",{className:"card-img-top",src:e.src,alt:e.desc}))});return s.a.createElement("div",{className:"jumbotron bg-light mb-0",id:"customers"},s.a.createElement("h1",{className:"display-4 text-center"},"Khách hàng"),s.a.createElement("hr",{className:"line bg-secondary"}),s.a.createElement(N.a,Object.assign({},{dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]},{className:"mt-sm-5 row"}),e))},t}(l.Component),C=(a(424),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"jumbotron container-fluid rounded-0 mb-0"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-6"},s.a.createElement("h3",{className:"display-4 "},"Báo giá"),s.a.createElement("p",{className:"lead"},"Hotline: 0903.531.777 ",s.a.createElement("br",null)," Email: minhnguyet@hainammedia.com")),s.a.createElement("div",{className:"col-sm-12 col-md-6"},s.a.createElement("div",{className:"mt-4"},s.a.createElement(b.Link,{className:"btn btn-secondary btn-lg",to:"#"},"Xem chi tiết báo giá"))))))},t}(l.Component)),j=a(220),z=a(221),H=(a(425),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-md-12 col-lg-4 "},s.a.createElement("div",{className:"d-flex flex-column border-styled"},s.a.createElement("div",{className:"p-2 mt-4"},s.a.createElement("h3",{className:"media-title title-center"},"Trụ sở chính")),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.a})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"147 Thanh Thủy, Phường Thanh Bình, Quận Hải Châu, TP. Đà Nẵng"))),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.c})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"Điện thoại: 0236.3550.288 - 0236.3711.031"),s.a.createElement("p",{className:"media-title"},"Fax: 0236.3550.28"),s.a.createElement("p",{className:"media-title"},"Hotline: 0903.531.777"))))),s.a.createElement("div",{className:"col-md-12 col-lg-4 "},s.a.createElement("div",{className:"d-flex flex-column border-styled"},s.a.createElement("div",{className:"p-2 mt-4"},s.a.createElement("h3",{className:"media-title title-center"},"VP Hà Nội")),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.a})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"Phòng 1012- Toà nhà An Lạc. Ngõ 43 Phùng Khoang – Từ Liêm – Hà Nội"))),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.c})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"Điện thoại: 024.62875362"),s.a.createElement("p",{className:"media-title"},"Fax: 024.62875361"),s.a.createElement("p",{className:"media-title"},"Hotline: 0912.825.126"))))),s.a.createElement("div",{className:"col-md-12 col-lg-4 "},s.a.createElement("div",{className:"d-flex flex-column border-styled"},s.a.createElement("div",{className:"p-2 mt-4"},s.a.createElement("h3",{className:"media-title title-center"},"VP Hồ Chí Minh")),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.a})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"Số 30 Đặng Tất. Phường Tân Định, Quận 1 – TP.HCM"))),s.a.createElement("div",{className:"p-2 media"},s.a.createElement("div",{className:"icon-styled"},s.a.createElement(j.a,{icon:z.c})),s.a.createElement("div",{className:"media-body"},s.a.createElement("p",{className:"media-title"},"Điện thoại: 028.62730592"),s.a.createElement("p",{className:"media-title"},"Fax: 028.730.48179"),s.a.createElement("p",{className:"media-title"},"Hotline: 0916.245.008"))))));return s.a.createElement("div",{className:"jumbotron container-fluid bg-light rounded-0 mb-0 contact-styled"},s.a.createElement("h1",{className:"display-4 text-center"},"Liên hệ"),s.a.createElement("p",{className:"lead text-center"},"There is a lot of exciting stuff going on in the stars above us that makes"),s.a.createElement("hr",{className:"line bg-secondary"}),e)},t}(l.Component));a.d(t,"homepageQuery",function(){return L});var _=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.homePageData.edges[0].node.frontmatter,t=this.props.data.productsHome;return s.a.createElement(d.a,{location:this.props.location,title:"Home"},s.a.createElement("div",{className:"index-container"},s.a.createElement(c.a,null,s.a.createElement("title",null,u.a.siteTitle),s.a.createElement("link",{rel:"canonical",href:""+u.a.siteUrl}),s.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),s.a.createElement(p.a,null),s.a.createElement(f,{bannerImage:e}),s.a.createElement(T,{productTitle:e.productTitle,productSubtitle:e.productSubtitle,productsHome:t}),s.a.createElement(S,null),s.a.createElement(P,null),s.a.createElement(C,null),s.a.createElement(H,null)))},t}(s.a.Component);_.propTypes={data:m.a.shape({allMarkdownRemark:m.a.shape({edges:m.a.array})})};t.default=_;var L="4194189742"},172:function(e,t,a){"use strict";var n=a(8),i=a.n(n),l=a(0),s=a.n(l),r=a(169),c=a.n(r),o=a(170),m=a.n(o),d=a(168),p=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t,a,n,i=this.props,l=i.postNode,r=i.postPath,o=i.postSEO;if(o){var d=l.frontmatter;e=d.title,t=d.description?d.description:l.excerpt,a=m()(p.a.siteUrl,"/assets",d.cover),n=m()(p.a.siteUrl,r)}else e=p.a.siteTitle,t=p.a.siteDescription,a=m()(p.a.siteUrl,p.a.siteLogo);var h=p.a.siteUrl,u=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return o&&u.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),s.a.createElement(c.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:a}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)),s.a.createElement("meta",{property:"og:url",content:o?n:h}),o?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:a}),s.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:a}))},t}(l.Component);t.a=h},262:function(e,t,a){"use strict";var n=a(8),i=a.n(n),l=a(37),s=a.n(l),r=a(0),c=a.n(r),o=a(36),m=a(171),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(s()(s()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.productInfo,t=this.state.mobile?162:225;return c.a.createElement("div",{className:"card",key:e.title},c.a.createElement(o.Link,{to:e.path},c.a.createElement(m.a,{postNode:e,coverHeight:t})),c.a.createElement("div",{className:"card-body"},c.a.createElement(o.Link,{to:e.path},c.a.createElement("h5",{className:"media-title"},e.title)),c.a.createElement("p",{className:"card-subtitle text-uppercase"},c.a.createElement("small",{className:"text-muted"},e.category)),c.a.createElement("div",{className:"overflow-hidden"},c.a.createElement("p",{className:"card-text text-justify"},e.excerpt))))},t}(c.a.Component);t.a=d},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c8fcd52849e85de34043.js.map