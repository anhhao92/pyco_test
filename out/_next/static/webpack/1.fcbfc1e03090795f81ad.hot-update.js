webpackHotUpdate(1,{

/***/ "./features/main/components/ListCard.tsx":
/*!***********************************************!*\
  !*** ./features/main/components/ListCard.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ImageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageCard */ "./features/main/components/ImageCard.tsx");




var _jsxFileName = "C:\\Users\\AnhHa\\Downloads\\Compressed\\nextjs\\dashboard\\features\\main\\components\\ListCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var ListCard = function ListCard(_ref) {
  var images = _ref.images,
      openPreview = _ref.openPreview;
  return (// <div className="homepage">
    __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      gutter: 16,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, images.data.map(function (m) {
      return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: m.id,
        sm: 12,
        md: 8,
        lg: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        openPreview: openPreview,
        item: m,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    })) // </div>

  );
};

/* harmony default export */ __webpack_exports__["default"] = (ListCard);

/***/ })

})
//# sourceMappingURL=1.fcbfc1e03090795f81ad.hot-update.js.map