"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepizzeria"]("news",{

/***/ "./src/script/Classes/News.js":
/*!************************************!*\
  !*** ./src/script/Classes/News.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   News: function() { return /* binding */ News; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nvar newsBlock = document.querySelector('.news-block');\nvar News = /*#__PURE__*/_createClass(function News(title, info, dato) {\n  var tag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : none;\n  var img = arguments.length > 4 ? arguments[4] : undefined;\n  _classCallCheck(this, News);\n  this.title = title;\n  this.info = info;\n  this.dato = dato;\n  this.tag = tag;\n  this.img = img;\n  var newsCard = document.createElement(\"div\");\n  newsCard.classList.add(\"news-card\");\n  var newsImg = document.createElement(\"img\");\n  newsImg.classList.add(\"news-img\");\n  newsImg.src = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  var newsBox = document.createElement(\"div\");\n  newsBox.classList.add(\"news-box\");\n  var newsTitle = document.createElement(\"h4\");\n  newsTitle.classList.add(\"news-title\");\n  newsTitle.innerHTML = this.title;\n  var newsInfo = document.createElement(\"p\");\n  newsInfo.classList.add(\"news-info\");\n  newsInfo.innerHTML = this.info;\n  var newsDato = document.createElement(\"p\");\n  newsDato.classList.add(\"news-dato\");\n  newsDato.innerHTML = this.dato;\n  newsBlock.append(newsCard);\n  newsCard.append(newsImg, newsBox);\n  newsBox.append(newsTitle, newsInfo, newsDato);\n});\n\n//# sourceURL=webpack://pizzeria/./src/script/Classes/News.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0e2540aa33ef1c81f86c"; }
/******/ }();
/******/ 
/******/ }
);