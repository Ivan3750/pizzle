/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/Classes/Cart.js":
/*!************************************!*\
  !*** ./src/script/Classes/Cart.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cart: function() { return /* binding */ Cart; },\n/* harmony export */   cartInstance: function() { return /* binding */ cartInstance; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar cartInstance;\nvar Cart = /*#__PURE__*/function () {\n  function Cart() {\n    _classCallCheck(this, Cart);\n    this.products = [];\n  }\n  return _createClass(Cart, [{\n    key: \"addProduct\",\n    value: function addProduct(product) {\n      var indexProduct = this.products.indexOf(product);\n      var foundProduct = this.products.find(function (e) {\n        return e.id === product.id;\n      });\n      console.log(foundProduct);\n      if (foundProduct !== undefined) {\n        /*  let foundProduct = this.products[indexProduct] */\n        console.log(foundProduct);\n        foundProduct.amount++;\n        localStorage.setItem(\"cart\", JSON.stringify(cartInstance));\n        console.log(\"CREATED ++\");\n      } else {\n        console.log(\"CREATED\");\n        this.products.push(product);\n        localStorage.setItem(\"cart\", JSON.stringify(cartInstance));\n      }\n    }\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(product) {\n      /* const index = this.products.indexOf(product);\r\n      console.log(index)\r\n      if (index !== -1) {\r\n          this.products.splice(index, 1);\r\n          console.log(\"Product removed from cart:\", product);\r\n      } else {\r\n          console.log(\"Product not found in cart:\", product);\r\n          console.log(this.products)\r\n      } */\n      this.products = product;\n      localStorage.setItem(\"cart\", JSON.stringify(cartInstance));\n    }\n  }, {\n    key: \"getProducts\",\n    value: function getProducts() {\n      return this.products;\n    }\n  }, {\n    key: \"changeAmount\",\n    value: function changeAmount(product, id, amount) {\n      var foundProduct = this.products.find(function (e) {\n        return e.id === product.id;\n      });\n      foundProduct.amount = amount;\n      console.log(foundProduct.amount);\n      localStorage.setItem(\"cart\", JSON.stringify(cartInstance));\n    }\n  }]);\n}();\nwindow.addEventListener(\"load\", function () {\n  if (localStorage.cart) {\n    var restoredInstance = Object.assign(new Cart(), JSON.parse(localStorage.cart));\n    localStorage.setItem(\"cart\", JSON.stringify(restoredInstance));\n    cartInstance = restoredInstance;\n  } else {\n    cartInstance = new Cart();\n    localStorage.setItem(\"cart\", JSON.stringify(cartInstance));\n  }\n});\n\n//# sourceURL=webpack://pizzeria/./src/script/Classes/Cart.js?");

/***/ }),

/***/ "./src/script/Classes/Product.js":
/*!***************************************!*\
  !*** ./src/script/Classes/Product.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Product: function() { return /* binding */ Product; }\n/* harmony export */ });\n/* harmony import */ var _Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.js */ \"./src/script/Classes/Cart.js\");\n/* harmony import */ var _Utils_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/modal.js */ \"./src/script/Utils/modal.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n/**\r\n *\r\n *\r\n * @class Product \r\n * This class is used to create a product card in Shop page\r\n */\n/* .modal-product-info-block{\r\n */\n\nvar modalBlock = document.querySelector('.modal-product-info-block');\nvar notification = document.querySelector('.notification');\n\n\n\nvar cartProductNumber = document.querySelector('.products-number');\n\n/* import {Cart} from \"../script/Cart.js\"\r\n */\n\nvar productsBlock = document.querySelector('.shop__products__main');\nvar Product = /*#__PURE__*/_createClass(function Product(id, name, amount, info, price, img, size, weight) {\n  var _this = this;\n  _classCallCheck(this, Product);\n  this.id = id;\n  this.name = name;\n  this.amount = amount;\n  this.info = info;\n  this.price = price;\n  this.img = img;\n  this.size = size;\n  this.weight = weight;\n  var productCard = document.createElement(\"div\");\n  productCard.classList.add(\"product-card\");\n  /* productCard.addEventListener(\"click\", (event)  =>{\r\n      window.location.href = \"../pages/product.html\"\r\n      sessionStorage.setItem(\"activeProduct\", this.id)\r\n      event.stopPropagation()\r\n  })  */\n\n  var productName = document.createElement(\"h4\");\n  productName.classList.add(\"product-name\");\n  productName.innerHTML = this.name;\n  var productInfo = document.createElement(\"p\");\n  productInfo.classList.add(\"product-info\");\n  productInfo.innerHTML = this.info;\n  var productPrice = document.createElement(\"p\");\n  productPrice.classList.add(\"product-price\");\n  productPrice.innerHTML = \"\".concat(this.price, \" \\xA3\");\n  var productImg = document.createElement(\"img\");\n  productImg.classList.add(\"product-img\");\n  console.log();\n  productImg.src = __webpack_require__(\"./src/assets/images/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(this.img));\n  productImg.style.width = \"224px\";\n  productImg.style.style = \"224px\";\n  var productBtn = document.createElement(\"button\");\n  productBtn.classList.add(\"product-btn\");\n  productBtn.innerHTML = \"add to cart\";\n  productBtn.addEventListener(\"click\", function () {\n    modalBlock.classList.add(\"show\");\n    sessionStorage.setItem(\"activeProduct\", _this.id);\n    (0,_Utils_modal_js__WEBPACK_IMPORTED_MODULE_1__.loadProductModal)();\n\n    /*             cartInstance.addProduct(this)             \r\n     */ /*  console.log(modalBlock)\r\n        console.log(cartInstance) */\n    cartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length;\n  });\n  productsBlock.append(productCard);\n  productCard.append(productImg, productName, productInfo, productPrice, productBtn);\n});\ncartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length;\n\n//# sourceURL=webpack://pizzeria/./src/script/Classes/Product.js?");

/***/ }),

/***/ "./src/script/Init/products.js":
/*!*************************************!*\
  !*** ./src/script/Init/products.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Product.js */ \"./src/script/Classes/Product.js\");\n\nvar data = __webpack_require__(/*! ../../data/products.json */ \"./src/data/products.json\");\nvar Index = 0;\nlocalStorage.setItem(\"lastIndex\", Index);\ndata.forEach(function (element) {\n  new _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__.Product(element.id, element.name, 1, element.info, element.price, element.img, \"Medium\", element.weight[1]);\n  console.log(data);\n  /* Створюємо продукт та публікуємо на сайт */\n});\n\n//# sourceURL=webpack://pizzeria/./src/script/Init/products.js?");

/***/ }),

/***/ "./src/script/Init/shop.js":
/*!*********************************!*\
  !*** ./src/script/Init/shop.js ***!
  \*********************************/
/***/ (function() {

eval("/* const modalBlock = document.querySelector('.modal-product-info-block'); \r\nconst modalClose = document.querySelector('.modal-product-close'); \r\n\r\nmodalClose.addEventListener(\"click\", ()=>{\r\n    modalBlock.classList.remove(\"show\")\r\n})\r\n */\n\n//# sourceURL=webpack://pizzeria/./src/script/Init/shop.js?");

/***/ }),

/***/ "./src/script/Utils/category.js":
/*!**************************************!*\
  !*** ./src/script/Utils/category.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Product.js */ \"./src/script/Classes/Product.js\");\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nvar categoryElements = document.querySelectorAll('.shop__sidebar__category__list-element');\nvar productsMain = document.querySelector('.shop__products__main');\n\nvar data = __webpack_require__(/*! ../../data/products.json */ \"./src/data/products.json\");\n/* fetch('../data/products.json')\r\n  .then(response => {\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n    return response.json();\r\n  })\r\n  .then(data => { */\ncategoryElements.forEach(function (e) {\n  e.addEventListener(\"click\", function () {\n    productsMain.innerHTML = \"\";\n    if (e.innerHTML !== \"All\") {\n      var _iterator = _createForOfIteratorHelper(data),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var element = _step.value;\n          for (var i = 0; i < element.category.length; i++) {\n            if (e.innerHTML.trim() == element.category[i]) {\n              new _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__.Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */\n            }\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    } else {\n      var _iterator2 = _createForOfIteratorHelper(data),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var _element = _step2.value;\n          new _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__.Product(_element.id, _element.name, 1, _element.info, _element.price, _element.img); /*  Створюємо продукт та публікуємо на сайт */\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  });\n});\n/* })\r\n.catch(error => {\r\n  console.error('There was a problem with the fetch operation:', error);\r\n}); */\n\n//# sourceURL=webpack://pizzeria/./src/script/Utils/category.js?");

/***/ }),

/***/ "./src/script/Utils/modal.js":
/*!***********************************!*\
  !*** ./src/script/Utils/modal.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProductModal: function() { return /* binding */ loadProductModal; }\n/* harmony export */ });\n/* harmony import */ var _Classes_Cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Cart.js */ \"./src/script/Classes/Cart.js\");\n\n\nvar notification = document.querySelector('.notification');\nfunction loadProductModal() {\n  var data = __webpack_require__(/*! ../../data/products.json */ \"./src/data/products.json\");\n  var modalBlock = document.querySelector('.modal-product-info-block');\n  var modalProductName = document.querySelector('.modal-product-name');\n  var modalProductInfo = document.querySelector('.modal-product-info');\n  var modalProductPrice = document.querySelector('.modal-product-price');\n  var modalProductImg = document.querySelector(\".modal-product-img\");\n  var modalProductBTN = document.querySelector(\".modal-product-add\");\n  var productButtonSize = document.querySelectorAll('.product-btn-size');\n  var cartProductNumber = document.querySelector('.products-number');\n  var closeModal = document.querySelector('.modal-product-close');\n  var inputNumber = document.querySelector('.input-number');\n  var inputMinus = document.querySelector('.input-minus');\n  var inputPlus = document.querySelector('.input-plus');\n  closeModal.addEventListener(\"click\", function () {\n    return modalBlock.classList.remove(\"show\");\n  });\n  var sizeIndex = 0;\n  var amount = 1;\n  var activeProduct;\n  var activeProductID = sessionStorage.activeProduct;\n  console.log(activeProductID);\n  /*  if (activeProductID) {\r\n     activeProductID = JSON.parse(activeProductID);\r\n   } */\n  /* fetch('../data/products.json')\r\n    .then(response => {\r\n      if (!response.ok) {\r\n        throw new Error('Network response was not ok');\r\n      }\r\n      return response.json();\r\n    })\r\n    .then(data => { */\n  console.log(data);\n  activeProduct = data.find(function (product) {\n    return product.id == activeProductID;\n  });\n  modalProductName.innerHTML = activeProduct.name;\n  modalProductInfo.innerHTML = activeProduct.info;\n  modalProductPrice.innerHTML = \" \\xA3 \".concat((activeProduct.price * amount).toFixed(2));\n  var IMG_SRC = __webpack_require__(\"./src/assets/images/products sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(activeProduct.img));\n  modalProductImg.src = IMG_SRC;\n  modalProductBTN.addEventListener(\"click\", function () {\n    var productObj = {};\n    productObj.amount = amount;\n    productObj.id = activeProduct.id;\n    productObj.name = activeProduct.name;\n    productObj.info = activeProduct.info;\n    productObj.price = activeProduct.price;\n    productObj.img = IMG_SRC;\n    productObj.size = \"Medium\";\n    productObj.weight = \"0g\";\n    notification.classList.add(\"active\");\n    setTimeout(function () {\n      notification.classList.remove(\"active\");\n    }, 2000);\n    console.log(_Classes_Cart_js__WEBPACK_IMPORTED_MODULE_0__.cartInstance);\n    _Classes_Cart_js__WEBPACK_IMPORTED_MODULE_0__.cartInstance.addProduct(productObj);\n    cartProductNumber.innerHTML = JSON.parse(localStorage.cart).products.length;\n    modalBlock.classList.remove(\"show\");\n  });\n  inputMinus.addEventListener(\"click\", function () {\n    if (amount > 0) {\n      amount--;\n    }\n    inputNumber.innerHTML = amount;\n    modalProductPrice.innerHTML = \" \\xA3 \".concat(activeProduct.price * amount);\n  });\n  inputPlus.addEventListener(\"click\", function () {\n    amount++;\n    inputNumber.innerHTML = amount;\n    modalProductPrice.innerHTML = \" \\xA3 \".concat(activeProduct.price * amount);\n  });\n  productButtonSize.forEach(function (btn) {\n    btn.addEventListener(\"click\", function () {\n      productButtonSize.forEach(function (btn) {\n        return btn.classList.remove(\"active\");\n      });\n      switch (btn.innerHTML) {\n        case \"Large\":\n          sizeIndex = 2;\n          break;\n        case \"Medium\":\n          sizeIndex = 1;\n          break;\n        case \"Small\":\n          sizeIndex = 0;\n          break;\n      }\n      if (btn.classList.contains(\"active\")) {\n        btn.classList.remove(\"active\");\n      } else {\n        btn.classList.add(\"active\");\n      }\n    });\n  });\n  /*   })\r\n      .catch(error => {\r\n      console.error('There was a problem with the fetch operation:', error);\r\n    }); */\n}\n\n//# sourceURL=webpack://pizzeria/./src/script/Utils/modal.js?");

/***/ }),

/***/ "./src/script/Utils/search.js":
/*!************************************!*\
  !*** ./src/script/Utils/search.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Classes/Product.js */ \"./src/script/Classes/Product.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\nvar searchInput = document.querySelector('.shop__sidebar__searchbar-input');\nvar searchBtn = document.querySelector('.shop__sidebar__searchbar-btn');\nvar productsMain = document.querySelector('.shop__products__main');\nvar searchInputValue;\nfunction getSearch() {\n  searchInputValue = searchInput.value;\n}\nvar data = __webpack_require__(/*! ../../data/products.json */ \"./src/data/products.json\");\n/* fetch(\"../data/products.json\")\r\n.then(response => {\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n    return response.json();\r\n  })\r\n  .then(data => { */\n\nsearchBtn.addEventListener(\"click\", function () {\n  search();\n});\nwindow.addEventListener(\"keydown\", function () {\n  if (event.key === \"Enter\") {\n    search();\n  }\n});\nfunction search() {\n  productsMain.innerHTML = \"\";\n  console.log(productsMain.innerHTML.trim() === '');\n  var _iterator = _createForOfIteratorHelper(data.entries()),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _step$value = _slicedToArray(_step.value, 2),\n        index = _step$value[0],\n        element = _step$value[1];\n      if (element.name.toLowerCase().includes(searchInput.value)) {\n        console.log(\"We found this\" + element);\n        var product = new _Classes_Product_js__WEBPACK_IMPORTED_MODULE_0__.Product(element.id, element.name, 1, element.info, element.price, element.img); /*  Створюємо продукт та публікуємо на сайт */\n        console.log(product.name);\n      } else {\n        if (productsMain.innerHTML.trim() === '' && index === data.length - 1) {\n          productsMain.innerHTML = \"Nothing\";\n        }\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n/*   })\r\n  .catch(error => {\r\n    console.error('There was a problem with the fetch operation:', error);\r\n  }); */\n\n//# sourceURL=webpack://pizzeria/./src/script/Utils/search.js?");

/***/ }),

/***/ "./src/script/modules/shop.js":
/*!************************************!*\
  !*** ./src/script/modules/shop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_standart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/standart.scss */ \"./src/styles/standart.scss\");\n/* harmony import */ var _styles_shop_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/shop.scss */ \"./src/styles/shop.scss\");\n/* harmony import */ var _script_Classes_Product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../script/Classes/Product.js */ \"./src/script/Classes/Product.js\");\n/* harmony import */ var _script_Init_products_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../script/Init/products.js */ \"./src/script/Init/products.js\");\n/* harmony import */ var _script_Utils_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../script/Utils/search.js */ \"./src/script/Utils/search.js\");\n/* harmony import */ var _script_Classes_Cart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../script/Classes/Cart.js */ \"./src/script/Classes/Cart.js\");\n/* harmony import */ var _script_Utils_category_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../script/Utils/category.js */ \"./src/script/Utils/category.js\");\n/* harmony import */ var _script_Init_shop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../script/Init/shop.js */ \"./src/script/Init/shop.js\");\n/* harmony import */ var _script_Init_shop_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_script_Init_shop_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _script_Utils_modal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../script/Utils/modal.js */ \"./src/script/Utils/modal.js\");\n\n\n\n\n\n\n\n\n\n\n/* \r\n<link rel=\"stylesheet\" href=\"../styles/standart.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0\" />\r\n<link rel=\"stylesheet\" href=\"../styles/shop.css\"> */\n\n/* \r\n<script src=\"../script/Utils/onload.js\"></script>\r\n<script type=\"module\" src=\"../script/Utils/search.js\"></script>\r\n<script type=\"module\" src=\"../script/Classes/Cart.js\"></script>\r\n<script type=\"module\" src=\"../script/Utils/category.js\"></script>\r\n<script type=\"module\" src=\"../script/Classes/Product.js\"></script>\r\n<script type=\"module\" src=\"../script/Init/products.js\"></script>\r\n<script type=\"module\" src=\"../script/Init/shop.js\"></script>\r\n<script type=\"module\" src=\"../script/Utils/modal.js\"></script> */\n\n//# sourceURL=webpack://pizzeria/./src/script/modules/shop.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-env browser */\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\n\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this;\n    // eslint-disable-next-line prefer-rest-params\n    var args = arguments;\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n    clearTimeout(timeout);\n\n    // @ts-ignore\n    timeout = setTimeout(functionCall, time);\n  };\n}\nfunction noop() {}\n\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n  if (!src) {\n    if (document.currentScript) {\n      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n    srcByModuleId[moduleId] = src;\n  }\n\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    }\n\n    // eslint-disable-next-line\n    url = el.href.split(\"?\")[0];\n  }\n  if (!isUrlRequest( /** @type {string} */url)) {\n    return;\n  }\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\nfunction getReloadUrl(href, src) {\n  var ret;\n\n  // eslint-disable-next-line no-param-reassign\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n    var url = getReloadUrl(el.href, src);\n    if (!isUrlRequest(url)) {\n      return;\n    }\n    if (el.visited === true) {\n      return;\n    }\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n    updateCss(el);\n  });\n}\n\n/**\n * @param {string} url\n * @returns {boolean}\n */\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n  return true;\n}\n\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://pizzeria/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n      case \".\":\n        break;\n      default:\n        accumulator.push(item);\n    }\n    return accumulator;\n  }, /** @type {string[]} */[]).join(\"/\");\n}\n\n/**\n * @param {string} urlString\n * @returns {string}\n */\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://pizzeria/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/styles/shop.scss":
/*!******************************!*\
  !*** ./src/styles/shop.scss ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1716594771699\n        var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://pizzeria/./src/styles/shop.scss?");

/***/ }),

/***/ "./src/styles/standart.scss":
/*!**********************************!*\
  !*** ./src/styles/standart.scss ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1716595100052\n        var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://pizzeria/./src/styles/standart.scss?");

/***/ }),

/***/ "./src/assets/images/products sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./src/assets/images/products/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./bugar_2.png\": \"./src/assets/images/products/bugar_2.png\",\n\t\"./burgur-1.png\": \"./src/assets/images/products/burgur-1.png\",\n\t\"./french-fries.jpg\": \"./src/assets/images/products/french-fries.jpg\",\n\t\"./french-fries.png\": \"./src/assets/images/products/french-fries.png\",\n\t\"./ice-cream-1.png\": \"./src/assets/images/products/ice-cream-1.png\",\n\t\"./ice-cream-2.png\": \"./src/assets/images/products/ice-cream-2.png\",\n\t\"./juice_1.png\": \"./src/assets/images/products/juice_1.png\",\n\t\"./juice_2.png\": \"./src/assets/images/products/juice_2.png\",\n\t\"./juice_3.png\": \"./src/assets/images/products/juice_3.png\",\n\t\"./pasta.png\": \"./src/assets/images/products/pasta.png\",\n\t\"./pizza-cheese.png\": \"./src/assets/images/products/pizza-cheese.png\",\n\t\"./pizza_slide_2.png\": \"./src/assets/images/products/pizza_slide_2.png\",\n\t\"./pizza_slide_4 (1).png\": \"./src/assets/images/products/pizza_slide_4 (1).png\",\n\t\"./pizza_slide_4.png\": \"./src/assets/images/products/pizza_slide_4.png\",\n\t\"./product-12.png\": \"./src/assets/images/products/product-12.png\",\n\t\"./salad_1.png\": \"./src/assets/images/products/salad_1.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images/products sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/assets/images/products/bugar_2.png":
/*!************************************************!*\
  !*** ./src/assets/images/products/bugar_2.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bugar_2.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/bugar_2.png?");

/***/ }),

/***/ "./src/assets/images/products/burgur-1.png":
/*!*************************************************!*\
  !*** ./src/assets/images/products/burgur-1.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/burgur-1.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/burgur-1.png?");

/***/ }),

/***/ "./src/assets/images/products/french-fries.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/products/french-fries.jpg ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/french-fries.jpg\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/french-fries.jpg?");

/***/ }),

/***/ "./src/assets/images/products/french-fries.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/products/french-fries.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/french-fries.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/french-fries.png?");

/***/ }),

/***/ "./src/assets/images/products/ice-cream-1.png":
/*!****************************************************!*\
  !*** ./src/assets/images/products/ice-cream-1.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ice-cream-1.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/ice-cream-1.png?");

/***/ }),

/***/ "./src/assets/images/products/ice-cream-2.png":
/*!****************************************************!*\
  !*** ./src/assets/images/products/ice-cream-2.png ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ice-cream-2.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/ice-cream-2.png?");

/***/ }),

/***/ "./src/assets/images/products/juice_1.png":
/*!************************************************!*\
  !*** ./src/assets/images/products/juice_1.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/juice_1.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/juice_1.png?");

/***/ }),

/***/ "./src/assets/images/products/juice_2.png":
/*!************************************************!*\
  !*** ./src/assets/images/products/juice_2.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/juice_2.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/juice_2.png?");

/***/ }),

/***/ "./src/assets/images/products/juice_3.png":
/*!************************************************!*\
  !*** ./src/assets/images/products/juice_3.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/juice_3.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/juice_3.png?");

/***/ }),

/***/ "./src/assets/images/products/pasta.png":
/*!**********************************************!*\
  !*** ./src/assets/images/products/pasta.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pasta.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/pasta.png?");

/***/ }),

/***/ "./src/assets/images/products/pizza-cheese.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/products/pizza-cheese.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pizza-cheese.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/pizza-cheese.png?");

/***/ }),

/***/ "./src/assets/images/products/pizza_slide_2.png":
/*!******************************************************!*\
  !*** ./src/assets/images/products/pizza_slide_2.png ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pizza_slide_2.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/pizza_slide_2.png?");

/***/ }),

/***/ "./src/assets/images/products/pizza_slide_4 (1).png":
/*!**********************************************************!*\
  !*** ./src/assets/images/products/pizza_slide_4 (1).png ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pizza_slide_4 (1).png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/pizza_slide_4_(1).png?");

/***/ }),

/***/ "./src/assets/images/products/pizza_slide_4.png":
/*!******************************************************!*\
  !*** ./src/assets/images/products/pizza_slide_4.png ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pizza_slide_4.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/pizza_slide_4.png?");

/***/ }),

/***/ "./src/assets/images/products/product-12.png":
/*!***************************************************!*\
  !*** ./src/assets/images/products/product-12.png ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/product-12.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/product-12.png?");

/***/ }),

/***/ "./src/assets/images/products/salad_1.png":
/*!************************************************!*\
  !*** ./src/assets/images/products/salad_1.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/salad_1.png\";\n\n//# sourceURL=webpack://pizzeria/./src/assets/images/products/salad_1.png?");

/***/ }),

/***/ "./src/data/products.json":
/*!********************************!*\
  !*** ./src/data/products.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":0,\"name\":\"BBQ Pizza TinTin\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"10.99\",\"img\":\"pizza_slide_4.png\",\"category\":[\"Pizza\"],\"size\":[\"20cm\",\"30cm\",\"40cm\"],\"weight\":[\"400g\",\"500g\",\"600g\"]},{\"id\":1,\"name\":\"Chocolate Donuts\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"22.70\",\"img\":\"pizza_slide_2.png\",\"category\":[\"Pizza\"],\"size\":[\"20cm\",\"30cm\",\"40cm\"],\"weight\":[\"400g\",\"500g\",\"600g\"]},{\"id\":2,\"name\":\"Lemon Juice\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"12.30\",\"img\":\"juice_1.png\",\"category\":[\"Drinks\"],\"size\":[\"300ml\",\"500ml\",\"750ml\"],\"weight\":\"none\"},{\"id\":3,\"name\":\"Coke Soft Drinks\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"13.60\",\"img\":\"juice_3.png\",\"category\":[\"Drinks\"],\"size\":[\"300ml\",\"500ml\",\"750ml\"],\"weight\":\"none\"},{\"id\":4,\"name\":\"Orange Juice\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"10.20\",\"img\":\"juice_2.png\",\"category\":[\"Drinks\"],\"size\":[\"300ml\",\"500ml\",\"750ml\"],\"weight\":\"none\"},{\"id\":5,\"name\":\"Chicken Hamburger\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"40.30\",\"img\":\"bugar_2.png\",\"category\":[\"Sandwich\",\"Chicken\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"200g\",\"300g\",\"400g\"]},{\"id\":6,\"name\":\"Bolognese Pasta\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"15.30\",\"img\":\"pasta.png\",\"category\":[\"Pasta\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"300g\",\"500g\",\"700g\"]},{\"id\":7,\"name\":\"Greek Salad\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"07.40\",\"img\":\"salad_1.png\",\"category\":[\"Salad\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"100g\",\"300g\",\"400g\"]},{\"id\":8,\"name\":\"Flavour Cream Ice\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"14.20\",\"img\":\"ice-cream-2.png\",\"category\":[\"Desserts\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"150g\",\"200g\",\"250g\"]},{\"id\":9,\"name\":\"Vanilla Ice Cream\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"13.30\",\"img\":\"ice-cream-1.png\",\"category\":[\"Desserts\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"150g\",\"200g\",\"250g\"]},{\"id\":10,\"name\":\"Black Hamburger\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"42.10\",\"img\":\"burgur-1.png\",\"category\":[\"Sandwich\"],\"size\":[\"small\",\"medium\",\"large\"],\"weight\":[\"200g\",\"300g\",\"400g\"]},{\"id\":11,\"name\":\"BBQ Pizza TinTin\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"24.00\",\"img\":\"pizza_slide_4 (1).png\",\"category\":[\"Pizza\"],\"size\":[\"20cm\",\"30cm\",\"40cm\"],\"weight\":[\"400g\",\"500g\",\"600g\"]},{\"id\":12,\"name\":\"Hot Wings\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"36.70\",\"img\":\"product-12.png\",\"category\":[\"Another\"],\"size\":\"none\",\"weight\":[\"400g\",\"500g\",\"600g\"]},{\"id\":13,\"name\":\"BBQ Pizza TinTin\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"27.10\",\"img\":\"pizza-cheese.png\",\"category\":[\"Pizza\"],\"size\":[\"20cm\",\"30cm\",\"40cm\"],\"weight\":[\"400g\",\"500g\",\"600g\"]},{\"id\":14,\"name\":\"French Fries\",\"info\":\"Gourmet burger with arugula, feta cheese, quail eggs and...\",\"price\":\"16.70\",\"img\":\"french-fries.png\",\"category\":[\"Another\"],\"size\":\"none\",\"weight\":[\"400g\",\"500g\",\"600g\"]}]');\n\n//# sourceURL=webpack://pizzeria/./src/data/products.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "shop." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "b74b3125dd8a643bcf56"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pizzeria:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"shop": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatepizzeria"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/modules/shop.js");
/******/ 	
/******/ })()
;