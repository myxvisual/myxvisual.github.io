webpackJsonp([25,82],{115:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={children:"Button"}},116:function(t,n,e){"use strict";var r=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),i=o.Component,a=o.PropTypes,l=e(115),s=e(119),c=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={},n}return r(n,t),n.prototype.render=function(){var t=this.props,n=t.style,e=t.className,r=t.onClick,i=t.id,a=t.children;return o.createElement("div",{style:n,id:i,className:""+(e?e+" "+s.container:s.container),onClick:function(t){r(t)}},a)},n}(i);c.propTypes={style:a.object,id:a.string,className:a.string},c.defaultProps=Object.assign({},{style:{},className:""},l.default),n.default=c},117:function(t,n,e){n=t.exports=e(2)(),n.push([t.i,"._3NjBR {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t   -moz-box-orient: horizontal;\r\n\t   -moz-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t   -moz-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\r\n\twidth: 100%;\r\n\theight: auto;\r\n\r\n\toutline: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\twidth: 100%;\r\n\t-webkit-border-radius: 0.25rem;\r\n\t   -moz-border-radius: 0.25rem;\r\n\t        border-radius: 0.25rem;\r\n\tcolor: #fff;\r\n\tpadding: 12px 0;\r\n\tpadding: 0.75rem 0;\r\n\tbackground: #3e82f7;\r\n\tfont-size: 18px;\r\n\tfont-size: 1.125rem;\r\n\t-webkit-transition: all .25s 0s cubic-bezier(.04, .89, .44, 1.07);\r\n\t-o-transition: all .25s 0s cubic-bezier(.04, .89, .44, 1.07);\r\n\t-moz-transition: all .25s 0s cubic-bezier(.04, .89, .44, 1.07);\r\n\ttransition: all .25s 0s cubic-bezier(.04, .89, .44, 1.07);\r\n}\r\n",""]),n.locals={container:"_3NjBR"}},119:function(t,n,e){var r=e(117);"string"==typeof r&&(r=[[t.i,r,""]]);e(3)(r,{});r.locals&&(t.exports=r.locals)},198:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={inputs:[{placeholder:"Emaile Address",label:"",button:""},{placeholder:"User ID",label:"",button:""},{placeholder:"Password",label:"",button:""}]}},199:function(t,n,e){"use strict";var r=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),i=o.Component,a=o.PropTypes,l=e(198),s=e(238),c=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={values:Array(n.props.inputs.length).fill("")},n.getValues=function(){return n.state.values},n.hanlderInput=function(t){var e=t.currentTarget.value,r=t.currentTarget.getAttribute("data-index"),o=n.state.values;o[r]=e,n.setState({values:o})},n}return r(n,t),n.prototype.render=function(){var t=this,n=this.props,e=n.style,r=n.className,i=n.inputs;return o.createElement("div",{style:e,className:""+(r?r+" "+s.container:s.container)},o.createElement("form",null,i.map(function(n,e){var r=n.placeholder,i=n.label,a=n.button,l=n.type,s=n.value,c=n.disabled,b=n.maxLength;return o.createElement("div",{key:""+e,style:{borderTop:0===e?"none":"1px solid #ebebeb"}},i?o.createElement("label",null,i):null,o.createElement("input",{type:l||"text",placeholder:r||"","data-index":e,onChange:t.hanlderInput,maxLength:b||"",value:s,disabled:c}),a||null)})))},n}(i);c.propTypes={style:a.object,id:a.string,className:a.string,inputs:a.array},c.defaultProps=Object.assign({},{style:{},className:""},l.default),n.default=c},206:function(t,n,e){n=t.exports=e(2)(),n.push([t.i,"._2SNbg {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t   -moz-box-orient: vertical;\r\n\t   -moz-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t   -moz-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\n._2SNbg form {\r\n\tborder: 1px solid #ebebeb;\r\n\t-webkit-border-radius: 0.25rem;\r\n\t-moz-border-radius: 0.25rem;\r\n\tborder-radius: 0.25rem;\r\n\toverflow: hidden;\r\n\twidth: 100%;\r\n}\n._2SNbg form div {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t-moz-box-orient: horizontal;\r\n\t-moz-box-direction: normal;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-moz-box-align: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n}\n._2SNbg form div input {\r\n\toutline: none;\r\n\tborder: none;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\theight: 3.125rem;\r\n\tborder: none;\r\n\toutline: none;\r\n\tfont-size: 14px;\r\n\tfont-size: 0.875rem;\r\n\tpadding: 0 16px;\r\n\tpadding: 0 1rem\r\n}\n._2SNbg form div input:disabled {\r\n\tbackground: #fff;\r\n}\n._2SNbg form div label {\r\n\t-webkit-box-flex: 0;\r\n\t-webkit-flex: 0 0 auto;\r\n\t-moz-box-flex: 0;\r\n\t-ms-flex: 0 0 auto;\r\n\tflex: 0 0 auto;\r\n\tcolor: rgb(51, 51, 51);\r\n\tmargin-left: 8px;\r\n\tmargin-left: 0.5rem;\r\n}\n._2SNbg form div img, ._2SNbg form div button {\r\n\tmargin-right: 8px;\r\n\tmargin-right: 0.5rem;\r\n}\n._2SNbg form div img {\r\n\twidth: 16px;\r\n\twidth: 1rem;\r\n\t-webkit-transition: all .25s 0s cubic-bezier(0.04, 0.89, 0.44, 1.07);\r\n\t-o-transition: all .25s 0s cubic-bezier(0.04, 0.89, 0.44, 1.07);\r\n\t-moz-transition: all .25s 0s cubic-bezier(0.04, 0.89, 0.44, 1.07);\r\n\ttransition: all .25s 0s cubic-bezier(0.04, 0.89, 0.44, 1.07)\r\n}\n._2SNbg form div img:active {\r\n\t-webkit-transform: scale(1.125);\r\n\t-moz-transform: scale(1.125);\r\n\t-ms-transform: scale(1.125);\r\n\t-o-transform: scale(1.125);\r\n\ttransform: scale(1.125);\r\n}\n._2SNbg form div button {\r\n\t-webkit-box-flex: 0;\r\n\t-webkit-flex: 0 0 auto;\r\n\t-moz-box-flex: 0;\r\n\t-ms-flex: 0 0 auto;\r\n\tflex: 0 0 auto;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t-moz-box-orient: horizontal;\r\n\t-moz-box-direction: normal;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-moz-box-align: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t-moz-box-pack: center;\r\n\t-ms-flex-pack: center;\r\n\tjustify-content: center;\r\n\theight: auto;\r\n\tpadding: 6px 4px;\r\n\tpadding: 0.375rem 0.25rem;\r\n\toutline: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\t-webkit-border-radius: 0.125rem;\r\n\t-moz-border-radius: 0.125rem;\r\n\tborder-radius: 0.125rem;\r\n\tcolor: #fff;\r\n\tbackground: #3e82f7;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n}\r\n",""]),n.locals={container:"_2SNbg"}},238:function(t,n,e){var r=e(206);"string"==typeof r&&(r=[[t.i,r,""]]);e(3)(r,{});r.locals&&(t.exports=r.locals)},67:function(t,n,e){"use strict";var r=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e(1),i=o.Component,a=o.PropTypes,l=e(199),s=e(116),c=e(691),b=e(980),u=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.state={phone:"",canAction:!0,buttonString:"Send OTP"},n.toggleButtonString=function(){var t=n.state,e=t.canAction,r=t.buttonString;if(e)n.setState({canAction:!1,buttonString:"60 S"}),setTimeout(function(){n.toggleButtonString()},1e3);else{var o=r.slice(0,2);if("00"===o)return void n.setState({canAction:!0,buttonString:"Send OTP"});var i=parseInt(o)-1;i=i<10?"0"+i+" S":i+" S",n.setState({buttonString:i}),setTimeout(function(){n.toggleButtonString()},1e3)}},n}return r(n,t),n.prototype.render=function(){var t=this,n=this.props,e=n.style,r=n.id,i=n.className,a=(n.children,n.sendAction,n.doneAction),c=n.phoneHead,u=(n.pattern,this.state),d=(u.phone,u.canAction),m=u.buttonString,f=o.createElement("span",{className:b.send,style:{width:"4.5rem",background:d?"#3e82f7":"#999"},onClick:d?function(){t.toggleButtonString(),"function"==typeof a&&a(t.refs.formValues.getValues())}:function(){}},m);return o.createElement("div",{style:e,id:r,className:""+(i?i+" "+b.container:b.container)},o.createElement("div",{className:b.content},o.createElement("p",{className:b.terms},"Please fill in your mobile number to complete registration."),o.createElement(l.default,{ref:"formValues",style:{marginTop:".75rem"},inputs:[{label:c},{placeholder:"One Time Password",button:f}]}),o.createElement(s.default,{className:b.button,onClick:function(){t.toggleButtonString(),"function"==typeof a&&a(t.refs.formValues.getValues())}},"Register")))},n}(i);u.propTypes={style:a.object,id:a.string,className:a.string},u.defaultProps=Object.assign({},{style:{},id:null,className:null},c.default),n.default=u},691:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={phoneHead:"+65",pattern:/.*/}},841:function(t,n,e){n=t.exports=e(2)(),n.push([t.i,"._39TtI {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t   -moz-box-orient: vertical;\r\n\t   -moz-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t   -moz-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t   -moz-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\n._39TtI .ZzOze {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: column;\r\n\t-moz-box-orient: vertical;\r\n\t-moz-box-direction: normal;\r\n\t-ms-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-moz-box-align: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\t-webkit-justify-content: space-around;\r\n\t-ms-flex-pack: distribute;\r\n\tjustify-content: space-around;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpadding: 0 32px;\r\n\tpadding: 0 2rem;\r\n}\n._39TtI .ZzOze ._2oehS {\r\n\twidth: 192px;\r\n\twidth: 12rem;\r\n\tmargin-top: 24px;\r\n\tmargin-top: 1.5rem;\r\n}\n._39TtI .ZzOze ._2hpiQ {\r\n\tcolor: #666666;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\tmargin-top: 50px;\r\n\tmargin-top: 3.125rem;\r\n}\n._39TtI .ZzOze ._3z_Du {\r\n\t-webkit-box-flex: 0;\r\n\t-webkit-flex: 0 0 auto;\r\n\t-moz-box-flex: 0;\r\n\t-ms-flex: 0 0 auto;\r\n\tflex: 0 0 auto;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -moz-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t-webkit-flex-direction: row;\r\n\t-moz-box-orient: horizontal;\r\n\t-moz-box-direction: normal;\r\n\t-ms-flex-direction: row;\r\n\tflex-direction: row;\r\n\t-webkit-box-align: center;\r\n\t-webkit-align-items: center;\r\n\t-moz-box-align: center;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n\t-webkit-box-pack: center;\r\n\t-webkit-justify-content: center;\r\n\t-moz-box-pack: center;\r\n\t-ms-flex-pack: center;\r\n\tjustify-content: center;\r\n\theight: auto;\r\n\tpadding: 6px 4px;\r\n\tpadding: 0.375rem 0.25rem;\r\n\toutline: none;\r\n\tborder: none;\r\n\tcursor: pointer;\r\n\t-webkit-border-radius: 0.125rem;\r\n\t-moz-border-radius: 0.125rem;\r\n\tborder-radius: 0.125rem;\r\n\tcolor: #fff;\r\n\tbackground: #3e82f7;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tmargin-right: 12px;\r\n\tmargin-right: 0.75rem;\r\n}\n._39TtI .ZzOze .UnqFf {\r\n\tmargin-top: 32px;\r\n\tmargin-top: 2rem;\r\n}\r\n",""]),n.locals={container:"_39TtI",content:"ZzOze",logo:"_2oehS",terms:"_2hpiQ",send:"_3z_Du",button:"UnqFf"}},980:function(t,n,e){var r=e(841);"string"==typeof r&&(r=[[t.i,r,""]]);e(3)(r,{});r.locals&&(t.exports=r.locals)}});