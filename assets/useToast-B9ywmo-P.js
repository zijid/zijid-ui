import{p as u}from"./index-DytvuLaL.js";let a=0;function f(){const t=u([]);function c(e){const n=++a,o={...e,id:n};t.push(o);const s=e.duration??4e3;return s>0&&setTimeout(()=>i(n),s),n}function i(e){const n=t.findIndex(o=>o.id===e);n!==-1&&t.splice(n,1)}function r(){t.splice(0,t.length)}return{toasts:t,show:c,close:i,clear:r}}export{f as u};
//# sourceMappingURL=useToast-B9ywmo-P.js.map
