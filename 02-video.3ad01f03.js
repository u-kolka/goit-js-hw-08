function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(e,t,n){var o,i,r,u,f,a,c=0,l=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function T(e){return c=e,f=setTimeout(j,t),l?b(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=r}function j(){var e=v();if(h(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-a);return s?p(n,r-(e-c)):n}(e))}function w(e){return f=void 0,y&&o?b(e):(o=i=void 0,u)}function x(){var e=v(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return T(a);if(s)return f=setTimeout(j,t),b(a)}return void 0===f&&(f=setTimeout(j,t)),u}return t=g(t)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},x.flush=function(){return void 0===f?u:w(v())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector("iframe"),T=new Vimeo.Player(b);T.on("timeupdate",e(t)((function({seconds:e}){localStorage.setItem("videoplayer-current-time",e),console.log(e)}),1e3)),function(){const e=localStorage.getItem("videoplayer-current-time");e&&(T.setCurrentTime(e),console.log(`The video plays from: ${e} second`))}();
//# sourceMappingURL=02-video.3ad01f03.js.map