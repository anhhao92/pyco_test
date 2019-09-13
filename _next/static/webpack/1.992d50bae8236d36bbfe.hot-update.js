webpackHotUpdate(1,{

/***/ "./features/main/MainScreen.tsx":
/*!**************************************!*\
  !*** ./features/main/MainScreen.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony import */ var _hooks_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/context */ "./hooks/context.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.ts");
/* harmony import */ var _components_ListCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ListCard */ "./features/main/components/ListCard.tsx");
var _jsxFileName = "C:\\Users\\AnhHa\\Downloads\\Compressed\\nextjs\\dashboard\\features\\main\\MainScreen.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var MainScreen = function MainScreen() {
  var store = Object(_hooks_context__WEBPACK_IMPORTED_MODULE_2__["useAppContext"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    store.init();
  }, []);
  console.log(store.initialized, store.loading);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["MasterLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, store.initialized && !store.loading && __jsx(_components_ListCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openPreview: store.openPreviewModal,
    images: store.gifs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(MainScreen));

/***/ })

})
//# sourceMappingURL=1.992d50bae8236d36bbfe.hot-update.js.map