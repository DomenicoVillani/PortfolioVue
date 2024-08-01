import{s as L}from"./D9-rP_xz.js";import{B as N,a8 as l,Z as h,O as Z,D as K,U as M,R as V,v as z,o as s,c,A as u,E as d,x as i,F as R,a as b,t as P,K as F,I as H,y as q,g as O,w as C,b as W,a4 as J,h as Q}from"./2TsBnew0.js";import{s as k}from"./ChVMtYH6.js";import{s as w}from"./BKvi-Ugu.js";import{s as T,a as j}from"./BnnMAuJf.js";import{s as X}from"./_s2_PRoF.js";import{s as E}from"./o9fY9W6N.js";import"./BPb7JAzM.js";function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function g(e,t,n){return t=Y(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){var t=$(e,"string");return f(t)=="symbol"?t:String(t)}function $(e,t){if(f(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(f(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _={root:function(t){var n=t.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},ee={root:function(t){var n=t.props,o=t.instance;return["p-toast p-component p-toast-"+n.position,{"p-ripple-disabled":o.$primevue.config.ripple===!1}]},container:function(t){var n=t.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success","p-toast-message-secondary":n.message.severity==="secondary","p-toast-message-contrast":n.message.severity==="contrast"}]},content:"p-toast-message-content",icon:function(t){var n=t.props;return["p-toast-message-icon",g(g(g(g({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-icon-close p-link",closeIcon:"p-toast-icon-close-icon"},te=N.extend({name:"toast",classes:ee,inlineStyles:_}),ne={name:"BaseToast",extends:k,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:te,provide:function(){return{$parentInstance:this}}},U={name:"ToastMessage",hostName:"Toast",extends:k,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var t=this;this.message.life&&(this.closeTimeout=setTimeout(function(){t.close({message:t.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(t){this.$emit("close",t)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&T,success:!this.successIcon&&w,warn:!this.warnIcon&&j,error:!this.errorIcon&&E}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:X,InfoCircleIcon:T,CheckIcon:w,ExclamationTriangleIcon:j,TimesCircleIcon:E},directives:{ripple:V}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(o){oe(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function oe(e,t,n){return t=re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=se(e,"string");return p(t)=="symbol"?t:String(t)}function se(e,t){if(p(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(p(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ie=["aria-label"];function ae(e,t,n,o,a,r){var v=z("ripple");return s(),c("div",i({class:[e.cx("container"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("container")),[n.templates.container?(s(),u(d(n.templates.container),{key:0,message:n.message,onClose:r.onCloseClick,closeCallback:r.onCloseClick},null,40,["message","onClose","closeCallback"])):(s(),c("div",i({key:1,class:[e.cx("content"),n.message.contentStyleClass]},e.ptm("content")),[n.templates.message?(s(),u(d(n.templates.message),{key:1,message:n.message},null,8,["message"])):(s(),c(R,{key:0},[(s(),u(d(n.templates.icon?n.templates.icon:r.iconComponent&&r.iconComponent.name?r.iconComponent:"span"),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"])),b("div",i({class:e.cx("text")},e.ptm("text")),[b("span",i({class:e.cx("summary")},e.ptm("summary")),P(n.message.summary),17),b("div",i({class:e.cx("detail")},e.ptm("detail")),P(n.message.detail),17)],16)],64)),n.message.closable!==!1?(s(),c("div",F(i({key:2},e.ptm("buttonContainer"))),[H((s(),c("button",i({class:e.cx("closeButton"),type:"button","aria-label":r.closeAriaLabel,onClick:t[0]||(t[0]=function(){return r.onCloseClick&&r.onCloseClick.apply(r,arguments)}),autofocus:""},m(m(m({},n.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[(s(),u(d(n.templates.closeicon||"TimesIcon"),i({class:[e.cx("closeIcon"),n.closeIcon]},m(m({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))],16,ie)),[[v]])],16)):q("",!0)],16))],16)}U.render=ae;function le(e){return fe(e)||me(e)||ue(e)||ce()}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(e,t){if(e){if(typeof e=="string")return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}}function me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fe(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var pe=0,ye={name:"Toast",extends:ne,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){l.on("add",this.onAdd),l.on("remove",this.onRemove),l.on("remove-group",this.onRemoveGroup),l.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&h.clear(this.$refs.container),l.off("add",this.onAdd),l.off("remove",this.onRemove),l.off("remove-group",this.onRemoveGroup),l.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(t){t.id==null&&(t.id=pe++),this.messages=[].concat(le(this.messages),[t])},remove:function(t){var n=this.messages.findIndex(function(o){return o.id===t.message.id});n!==-1&&(this.messages.splice(n,1),this.$emit(t.type,{message:t.message}))},onAdd:function(t){this.group==t.group&&this.add(t)},onRemove:function(t){this.remove({message:t,type:"close"})},onRemoveGroup:function(t){this.group===t&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&h.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var t=this;this.$refs.container&&this.autoZIndex&&Z.isEmpty(this.messages)&&setTimeout(function(){h.clear(t.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",K.setAttribute(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var o in this.breakpoints){var a="";for(var r in this.breakpoints[o])a+=r+":"+this.breakpoints[o][r]+"!important;";n+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(a,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return M()}},components:{ToastMessage:U,Portal:L}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(o){de(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function de(e,t,n){return t=ge(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){var t=be(e,"string");return y(t)=="symbol"?t:String(t)}function be(e,t){if(y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(y(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ve(e,t,n,o,a,r){var v=O("ToastMessage"),x=O("Portal");return s(),u(x,null,{default:C(function(){return[b("div",i({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},e.ptmi("root")),[W(J,i({name:"p-toast-message",tag:"div",onEnter:r.onEnter,onLeave:r.onLeave},D(D({},e.ptm("message")),e.ptm("transition"))),{default:C(function(){return[(s(!0),c(R,null,Q(a.messages,function(S){return s(),u(v,{key:S.id,message:S,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,onClose:t[0]||(t[0]=function(G){return r.remove(G)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}ye.render=ve;export{ye as default};
