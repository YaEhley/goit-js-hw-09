import"./assets/modulepreload-polyfill-3cfb730f.js";const o="user-data",t=document.querySelector(".feedback-form");t.querySelector("textarea");t.addEventListener("input",m);t.addEventListener("submit",s);function s(e){e.preventDefault();const a=t.elements.email.value.trim(),n=t.elements.message.value.trim();console.log({email:a,message:n}),localStorage.removeItem(o),t.reset()}function m(){const e=t.elements.email.value.trim(),a=t.elements.message.value.trim();l(o,{email:e,message:a})}function l(e,a){const n=JSON.stringify(a);localStorage.setItem(e,n)}function r(e){const a=localStorage.getItem(e);return a!==null?JSON.parse(a):a}function c(){const e=r(o)||{};t.elements.email.value=e.email||"",t.elements.message.value=e.message||""}c();
//# sourceMappingURL=commonHelpers2.js.map