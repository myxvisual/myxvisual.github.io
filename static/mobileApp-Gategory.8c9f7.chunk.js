webpackJsonp([16],{916:function(t,e,o,i){var n=o(i);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},424:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={products:Array(8).fill({image:"//ae01.alicdn.com/kf/HTB1H1ELKFXXXXbzaXXXq6xXFXXXl.jpg_350x350.jpg",link:"#",title:"Dresses"})}},607:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".container_2J3Ig{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;-ms-flex-pack:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:100%;background:#fff;height:auto}.container_2J3Ig,.container_2J3Ig .product_1Dgkv{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-moz-box-direction:normal;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center}.container_2J3Ig .product_1Dgkv{-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;-ms-flex-pack:center;color:inherit;text-decoration:none;width:50%}.container_2J3Ig .product_1Dgkv>img{padding:4px;padding:.25rem;max-width:100%}.container_2J3Ig .product_1Dgkv>p{color:inherit;text-decoration:none;font-size:12px;font-size:.75rem;color:#333}",""]),e.locals={container:"container_2J3Ig",product:"product_1Dgkv"}},830:[916,607],425:function(t,e,o){"use strict";var i=function(t,e){function o(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},n=o(3),r=o(424),a=o(830),l=function(t){function e(){var e=t.apply(this,arguments)||this;return e.state={products:e.props.products},e.updateProducts=function(t){e.setState({products:t})},e}return i(e,t),e.prototype.shouldComponentUpdate=function(t,e){return t!==this.props||e!==this.state},e.prototype.render=function(){var t=this.props,e=t.style,o=t.id,i=t.className,r=this.state.products;return n.createElement("div",{style:e,id:o,className:""+(i?i+" "+a.container:a.container)},(Array.isArray(r)?r:[r]).map(function(t,e){var o=t.title,i=t.image,r=t.link;return n.createElement("a",{href:r,key:""+e,className:a.product},n.createElement("img",{src:i,alt:""}),n.createElement("p",null,o))}))},e}(n.Component);l.defaultProps=Object.assign({},r.default,{style:{},id:null,className:null}),Object.defineProperty(e,"__esModule",{value:!0}),e.default=l},426:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={items:[{title:"Women"},{title:"Home & Garden"},{title:"Baby & Kids"},{title:"Shoes,Bags & Accesso…"},{title:"Health & Beauty"},{title:"Mobile & Tablet"},{title:"Gift,Craft & Stationery"},{title:"Sports & Outdoors"}],action:function(){console.log("Default SiderNav Function Working...")}}},831:[916,608],608:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".container_3FK4y{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;height:100%;width:auto;background:#ebebeb}.container_3FK4y .item_OQGRX{padding:12px 8px;padding:.75rem .5rem;background:#ebebeb;-webkit-transition:all 1.5s cubic-bezier(.04,.89,.44,1.07) 0s;-o-transition:all 1.5s 0s cubic-bezier(.04,.89,.44,1.07);-moz-transition:all 1.5s 0s cubic-bezier(.04,.89,.44,1.07);transition:all 1.5s cubic-bezier(.04,.89,.44,1.07) 0s;width:100%;font-size:14px;font-size:.875rem;color:#666}",""]),e.locals={container:"container_3FK4y",item:"item_OQGRX"}},427:function(t,e,o){"use strict";var i=function(t,e){function o(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},n=o(3),r=o(426),a=o(831),l=function(t){function e(){var e=t.apply(this,arguments)||this;return e.state={focusIndex:0},e.getFocus=function(){return e.state.focusIndex},e.toggleFocusindex=function(t){e.setState({focusIndex:t})},e}return i(e,t),e.prototype.render=function(){var t=this,e=this.props,o=e.style,i=e.id,r=e.className,l=e.items,s=e.action,c=this.state.focusIndex;return n.createElement("div",{style:o,id:i,className:""+(r?r+" "+a.container:a.container)},(Array.isArray(l)?l:[l]).map(function(e,o){var i=e.title;return n.createElement("span",{key:""+o,className:a.item,style:{background:""+(o===c?"#fff":"#ebebeb")},onClick:function(){s(),t.toggleFocusindex(o)}},i)}))},e}(n.Component);l.defaultProps=Object.assign({},r.default,{style:{},id:null,className:null}),Object.defineProperty(e,"__esModule",{value:!0}),e.default=l},428:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},609:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".container_34dBE{-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:absolute;width:100%;height:100%}.container_34dBE,.container_34dBE .siderNav_y4cs-{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-moz-box-direction:normal}.container_34dBE .siderNav_y4cs-{-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;min-height:100%;background:#eaeaea}",""]),e.locals={container:"container_34dBE",siderNav:"siderNav_y4cs-"}},832:[913,609],429:function(t,e,o){"use strict";var i=function(t,e){function o(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},n=o(3),r=o(427),a=o(425),l=o(428),s=o(832),c=function(t){function e(){var e=t.apply(this,arguments)||this;return e.state={},e}return i(e,t),e.prototype.render=function(){var t=this.props,e=t.style,o=t.className,i=t.id;return n.createElement("div",{style:e,id:i,className:""+(o?o+" "+s.container:s.container)},n.createElement("div",{className:s.siderNav},n.createElement(r.default,{style:{width:"6.75rem"}}),n.createElement(a.default,{style:{width:"16.6875rem"}})))},e}(n.Component);c.defaultProps=Object.assign({},l.default,{style:{},id:null,className:null}),Object.defineProperty(e,"__esModule",{value:!0}),e.default=c}});