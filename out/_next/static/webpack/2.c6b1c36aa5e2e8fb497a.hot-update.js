webpackHotUpdate(2,{

/***/ "./components/Layout/MasterLayout.tsx":
/*!********************************************!*\
  !*** ./components/Layout/MasterLayout.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "C:\\Users\\AnhHa\\Downloads\\Compressed\\nextjs\\dashboard\\components\\Layout\\MasterLayout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  background: ", ";\n  padding: 24px;\n  min-height: 280px;\n  margin: 24px 24px 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var MainLayout = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a)(_templateObject());
var MainContent = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2(), function (props) {
  return props.theme.colors.white;
});

var MasterLayoutPage = function MasterLayoutPage(_ref) {
  var children = _ref.children,
      pathname = _ref.router.pathname;
  return __jsx(MainLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Home"))), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Login"))))), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content, {
    style: {
      padding: '0 50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(MainContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, children))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(MasterLayoutPage));

/***/ })

})
//# sourceMappingURL=2.c6b1c36aa5e2e8fb497a.hot-update.js.map