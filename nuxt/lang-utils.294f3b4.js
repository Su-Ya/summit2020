(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(e,r,t){"use strict";t.r(r),t.d(r,"extractLanguageFromTable",(function(){return v})),t.d(r,"extractLanguageFromProposal",(function(){return j}));t(54),t(25),t(208),t(45);var n=t(21),o=(t(22),t(12),t(442),t(55),t(617)),c=t.n(o);function f(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var O={en:!0,"英語":!0,"英文":!0,"英":!0};function v(e){var r=e.rows,t=e.isEn,n=void 0===t||t;return r.map((function(e){var r={};for(var t in e){var o=t.split("-");if(o.length<2)r[t]=e[t];else{var f=c.a.last(o)in O;if(n&&f||!n&&!f)r[o.slice(0,-1).join("-")]=e[t]}}return r}))}function j(e){var r=e.proposals,t=e.isEn,n=void 0===t||t;return Object.values(r).map((function(e){var r=v({rows:[e.timeSheet],isEn:n}),t=l(l({},e),{},{timeSheet:r[0]});return Object.keys(t).forEach((function(e){if(e.endsWith("_en")){var r=(t[e]||"").trim();if(n&&r){var o=e.split("_").slice(0,-1).join("_");t[o]=r}delete t[e]}})),t}))}}}]);