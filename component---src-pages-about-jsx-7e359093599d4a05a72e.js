(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(e,t,n){"use strict";n.r(t);var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(166),u=n.n(l),c=n(179),f=n(186),s=n.n(f),d=n(182),p=n.n(d),h=n(280),b=n(163),m=n.n(b),y=(n(570),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"about-container md-grid mobile-fix"},i.a.createElement(s.a,{className:"md-grid md-cell--8"},i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("img",{src:m.a.userAvatar,className:"about-img",alt:m.a.userName}),i.a.createElement(p.a,null,i.a.createElement("p",{className:"about-text md-body-1"},m.a.userDescription)),i.a.createElement(h.a,{labeled:!0,config:m.a}))))},t}(r.Component)),w=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{location:this.props.location,title:"About"},i.a.createElement("div",{className:"about-container"},i.a.createElement(u.a,null,i.a.createElement("title",null,"About | "+m.a.siteTitle),i.a.createElement("link",{rel:"canonical",href:m.a.siteUrl+"/about/"}),i.a.createElement("link",{href:"/logos/favicon.ico",rel:"icon",type:"image/x-icon"})),i.a.createElement(y,null)))},t}(r.Component);t.default=w},167:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),r=s(a),i=s(n(1)),l=s(n(165)),u=s(n(180)),c=s(n(192)),f=s(n(164));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.iconClassName,n=e.children,a=e.tooltip,i=e.floating,l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["iconClassName","children","tooltip","floating"]);return delete l.tooltipLabel,delete l.tooltipPosition,r.default.createElement(f.default,o({},l,{icon:!i,floating:i}),a,r.default.createElement(u.default,{iconClassName:t},n))},t}(a.PureComponent);d.propTypes={iconClassName:i.default.string,children:i.default.node,className:i.default.string,type:i.default.string,disabled:i.default.bool,href:i.default.string,onClick:i.default.func,tooltipLabel:i.default.node,tooltipPosition:i.default.oneOf(["top","right","bottom","left"]),tooltipDelay:i.default.number,tooltip:i.default.node,floating:i.default.bool,deprecated:(0,l.default)("The behavior of the `IconButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `icon`.")},d.defaultProps={type:"button"},t.default=(0,c.default)(d)},175:function(e,t,n){"use strict";t.__esModule=!0,t.IconButton=t.FloatingButton=t.RaisedButton=t.FlatButton=t.Button=void 0;var o=u(n(164)),a=u(n(176)),r=u(n(177)),i=u(n(178)),l=u(n(167));function u(e){return e&&e.__esModule?e:{default:e}}t.default=o.default,t.Button=o.default,t.FlatButton=a.default,t.RaisedButton=r.default,t.FloatingButton=i.default,t.IconButton=l.default},176:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),r=c(a),i=c(n(1)),l=c(n(165)),u=c(n(164));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(u.default,o({},this.props,{flat:!0}))},t}(a.PureComponent);f.propTypes={label:i.default.node.isRequired,className:i.default.string,iconBefore:i.default.bool,children:i.default.node,type:i.default.string,primary:i.default.bool,secondary:i.default.bool,disabled:i.default.bool,href:i.default.string,onClick:i.default.func,deprecated:(0,l.default)("The behavior of the `FlatButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `flat`.")},f.defaultProps={type:"button",iconBefore:!0},t.default=f},177:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),r=c(a),i=c(n(1)),l=c(n(165)),u=c(n(164));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(u.default,o({},this.props,{raised:!0}))},t}(a.PureComponent);f.propTypes={label:i.default.node.isRequired,className:i.default.string,iconBefore:i.default.bool,children:i.default.node,type:i.default.string,primary:i.default.bool,secondary:i.default.bool,disabled:i.default.bool,href:i.default.string,onClick:i.default.func,deprecated:(0,l.default)("The behavior of the `RaisedButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `raised`.")},f.defaultProps={type:"button",iconBefore:!0},t.default=f},178:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),r=f(a),i=f(n(1)),l=f(n(162)),u=f(n(165)),c=f(n(167));function f(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.fixed,a=e.mini,i=e.children,u=e.iconClassName,f=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["className","fixed","mini","children","iconClassName"]);return r.default.createElement(c.default,o({},f,{className:(0,l.default)({"md-btn--floating-fixed":n,"md-btn--floating-mini":a},t),iconClassName:u,floating:!0}),i)},t}(a.PureComponent);s.propTypes={iconClassName:i.default.string,children:i.default.node,className:i.default.string,type:i.default.string,disabled:i.default.bool,href:i.default.string,onClick:i.default.func,tooltipLabel:i.default.node,tooltipPosition:i.default.oneOf(["top","right","bottom","left"]),tooltipDelay:i.default.number,fixed:i.default.bool,mini:i.default.bool,primary:i.default.bool,secondary:i.default.bool,deprecated:(0,u.default)("The behavior of the `FloatingButton` can be achieved with the `Button` component without the additional bundle size. Switch to the `Button` component and add a prop `floating`.")},t.default=s},280:function(e,t,n){"use strict";var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(175),u=n.n(l),c=(n(281),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return i.a.createElement(u.a,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},n.render=function(){return this.props.config.userLinks?i.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(r.Component));t.a=c},281:function(e,t,n){},570:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-about-jsx-7e359093599d4a05a72e.js.map