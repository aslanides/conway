parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";var a=800,r=50;function t(){var t=document.getElementById("canvas"),f=t.getContext("2d");t.height=a,t.width=a,f.fillStyle="#000000",f.fillRect(0,0,a,a);var v=new Uint8ClampedArray(a*a),d=new Uint8ClampedArray(a*a),i=0;window.addEventListener("keydown",function(a){"r"===a.key?e(f,v):" "===a.key&&(i?(clearInterval(i),i=0):i=setInterval(function(){o(v,d),n(f,v)},Math.floor(1e3/r)))}),e(f,v)}function e(r,t){for(var e=0;e<a;e++)for(var o=0;o<a;o++)t[o+a*e]=Math.round(Math.random());n(r,t)}function n(r,t){for(var e=r.getImageData(0,0,a,a),n=0;n<a;n++)for(var o=0;o<a;o++){var f=255*t[o+a*n];e.data[4*(o+a*n)]=f,e.data[4*(o+a*n)+1]=f,e.data[4*(o+a*n)+2]=f}r.putImageData(e,0,0)}function o(r,t){for(var e=0;e<a;e++)for(var n=0;n<a;n++){for(var o=0,f=-1;f<=1;f++)for(var v=-1;v<=1;v++)0===f&&0===v||(o+=r[n+a*(e+f)+v]);var d=r[n+a*e];(o>3||o<2)&&(d=0),3===o&&(d=1),t[n+a*e]=d}for(e=0;e<a;e++)for(n=0;n<a;n++)r[n+a*e]=t[n+a*e]}t();
},{}]},{},["QCba"], null)
//# sourceMappingURL=src.eec7d70c.js.map