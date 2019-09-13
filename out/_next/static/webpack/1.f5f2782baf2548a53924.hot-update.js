webpackHotUpdate(1,{

/***/ "./features/main/components/ImageCard.tsx":
/*!************************************************!*\
  !*** ./features/main/components/ImageCard.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./features/main/components/styles.ts");


var _jsxFileName = "C:\\Users\\AnhHa\\Downloads\\Compressed\\nextjs\\dashboard\\features\\main\\components\\ImageCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Item = function Item(_ref) {
  var item = _ref.item,
      openPreview = _ref.openPreview;
  var user = item.user;
  return __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ThumbnailContainer"], {
    onClick: function onClick() {
      return openPreview(item);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
    alt: "thumbnail",
    src: item.images.downsized_still.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ThumbnailInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: item.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "heart",
    theme: "filled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CardFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, user && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["FooterThumbnail"], {
    alt: "avt",
    src: user.avatar_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["AuthorFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, item.username || '-')));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=1.f5f2782baf2548a53924.hot-update.js.map