import{a3 as h,D as s,O as E}from"./2TsBnew0.js";var $={},g=h.extend({style:$});function m(o){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(o)}function v(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),t.push.apply(t,r)}return t}function F(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?v(Object(t),!0).forEach(function(r){S(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function S(o,e,t){return e=y(e),e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function y(o){var e=O(o,"string");return m(e)=="symbol"?e:String(e)}function O(o,e){if(m(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e||"default");if(m(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var T=g.extend("focustrap",{mounted:function(e,t){var r=t.value||{},n=r.disabled;n||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},n=r.disabled;n&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,n=t.value||{},u=n.onFocusIn,l=n.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(c){c.forEach(function(f){if(f.type==="childList"&&!e.contains(document.activeElement)){var p=function d(a){var i=s.isFocusableElement(a)?s.isFocusableElement(a,r.getComputedSelector(e.$_pfocustrap_focusableselector))?a:s.getFirstFocusableElement(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):s.getFirstFocusableElement(a);return E.isNotEmpty(i)?i:a.nextSibling&&d(a.nextSibling)};s.focus(p(f.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(c){return u&&u(c)},e.$_pfocustrap_focusoutlistener=function(c){return l&&l(c)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:F(F({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},n=r.autoFocusSelector,u=n===void 0?"":n,l=r.firstFocusableSelector,c=l===void 0?"":l,f=r.autoFocus,p=f===void 0?!1:f,d=s.getFirstFocusableElement(e,"[autofocus]".concat(this.getComputedSelector(u)));p&&!d&&(d=s.getFirstFocusableElement(e,this.getComputedSelector(c))),s.focus(d)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,n=e.relatedTarget,u=n===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(n))?s.getFirstFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;s.focus(u)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,n=e.relatedTarget,u=n===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(n))?s.getLastFocusableElement(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;s.focus(u)},createHiddenFocusableElements:function(e,t){var r=this,n=t.value||{},u=n.tabIndex,l=u===void 0?0:u,c=n.firstFocusableSelector,f=c===void 0?"":c,p=n.lastFocusableSelector,d=p===void 0?"":p,a=function(_){return s.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:l,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:_==null?void 0:_.bind(r)})},i=a(this.onFirstHiddenElementFocus),b=a(this.onLastHiddenElementFocus);i.$_pfocustrap_lasthiddenfocusableelement=b,i.$_pfocustrap_focusableselector=f,i.setAttribute("data-pc-section","firstfocusableelement"),b.$_pfocustrap_firsthiddenfocusableelement=i,b.$_pfocustrap_focusableselector=d,b.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(i),e.append(b)}}});export{T as F};
