parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("section-title--animate")})},{threshold:.5});document.querySelectorAll(".section-title").forEach(function(t){e.observe(t)});var t=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("compare__products--animate")})});t.observe(document.querySelector(".compare__products"));var r=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("move-free__description--animate")})});r.observe(document.querySelector(".move-free__description"));var n=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("contact__wrapper--animate")})});n.observe(document.querySelector(".contact__wrapper"));var c=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add("description--animate")})},{threshold:.5});document.querySelectorAll(".description").forEach(function(e){c.observe(e)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.2d9bc555.js.map