var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=i);var n=i("iQIUW");n.Notify.init({width:"300px",clickToClose:!0});document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:i}=e.currentTarget.elements;let r=Number(t.value),l=0,a=0;const s=setInterval((()=>{var e,t;l!==Number(i.value)?(l+=1,a+=1,(e=a,t=r,new Promise(((o,i)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))).then((({position:e,delay:t})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),r+=Number(o.value)):clearInterval(s)}),0)}));
//# sourceMappingURL=03-promises.7e691136.js.map