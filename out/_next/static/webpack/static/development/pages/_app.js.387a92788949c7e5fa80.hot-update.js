webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./stores/AppStore.ts":
/*!****************************!*\
  !*** ./stores/AppStore.ts ***!
  \****************************/
/*! exports provided: AppStore, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime-corejs2/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime-corejs2/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./services/index.ts");









var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;



var AppStore = (_class = (_temp =
/*#__PURE__*/
function () {
  function AppStore() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppStore);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "initialized", _descriptor, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "loading", _descriptor2, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "gifs", _descriptor3, this);

    Object(_babel_runtime_corejs2_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "visible", _descriptor4, this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(AppStore, [{
    key: "init",
    value: function () {
      var _init = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this = this;

        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                _context.next = 3;
                return _services__WEBPACK_IMPORTED_MODULE_9__["giphyService"].fetchTrendingGifs();

              case 3:
                response = _context.sent;
                Object(mobx__WEBPACK_IMPORTED_MODULE_8__["runInAction"])(function () {
                  _this.gifs = response.data;
                  _this.loading = false;
                  _this.initialized = true;
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "openPreviewModal",
    value: function openPreviewModal() {}
  }]);

  return AppStore;
}(), _temp), (_descriptor = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "initialized", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "loading", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "gifs", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "visible", [mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "init", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "init"), _class.prototype), Object(_babel_runtime_corejs2_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__["default"])(_class.prototype, "openPreviewModal", [mobx__WEBPACK_IMPORTED_MODULE_8__["action"]], _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, "openPreviewModal"), _class.prototype)), _class);
var store = new AppStore();

/***/ })

})
//# sourceMappingURL=_app.js.387a92788949c7e5fa80.hot-update.js.map