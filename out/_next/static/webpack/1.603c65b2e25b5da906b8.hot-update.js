webpackHotUpdate(1,{

/***/ "./features/main/components/styles.ts":
/*!********************************************!*\
  !*** ./features/main/components/styles.ts ***!
  \********************************************/
/*! exports provided: ThumbnailContainer, Thumbnail, ThumbnailInfo, CardBody, CardFooter, AuthorFooter, FooterThumbnail, BackDropContainer, ViewCardBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailContainer", function() { return ThumbnailContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Thumbnail", function() { return Thumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailInfo", function() { return ThumbnailInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBody", function() { return CardBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFooter", function() { return CardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorFooter", function() { return AuthorFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterThumbnail", function() { return FooterThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackDropContainer", function() { return BackDropContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCardBody", function() { return ViewCardBody; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme/index.ts");


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  z-index: auto;\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #121212;\n  background-position: 50%;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 999998;\n\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 30px;\n  height: 30px;\n  border-radius: 18px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #000;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 10px 0;\n  height: 30px;\n  display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 300px;\n  background-color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 255px;\n  width: 100%;\n  object-fit: cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 10px;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ThumbnailContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());
var ThumbnailInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var CardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var AuthorFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
var FooterThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject7());
var BackDropContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8(), _theme__WEBPACK_IMPORTED_MODULE_2__["zoomOut"]);
var ViewCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject9()); //     .keyframes(fade-in; {
//       0% {
//         opacity: 0;
//         transform: scale(0.9);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1);
//       }
//     });
//     .animation(fade-in 0.2s ease-out);

/***/ }),

/***/ "./theme/animation.ts":
/*!****************************!*\
  !*** ./theme/animation.ts ***!
  \****************************/
/*! exports provided: zoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return zoomOut; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 0.2s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var scale = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var zoomOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), scale);

/***/ }),

/***/ "./theme/index.ts":
/*!************************!*\
  !*** ./theme/index.ts ***!
  \************************/
/*! exports provided: theme, GlobalStyle, zoomOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.base */ "./theme/theme.base.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme_base__WEBPACK_IMPORTED_MODULE_0__["theme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _theme_base__WEBPACK_IMPORTED_MODULE_0__["GlobalStyle"]; });

/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./theme/animation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomOut", function() { return _animation__WEBPACK_IMPORTED_MODULE_1__["zoomOut"]; });




/***/ })

})
//# sourceMappingURL=1.603c65b2e25b5da906b8.hot-update.js.map