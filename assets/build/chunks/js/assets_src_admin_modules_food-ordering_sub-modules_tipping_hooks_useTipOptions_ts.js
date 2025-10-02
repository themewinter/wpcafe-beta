"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_sub-modules_tipping_hooks_useTipOptions_ts"],{

/***/ "./assets/src/admin/modules/food-ordering/sub-modules/tipping/hooks/useTipOptions.ts":
/*!*******************************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/sub-modules/tipping/hooks/useTipOptions.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useTipOptions: () => (/* binding */ useTipOptions)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * External Dependencies
 */

/**
 * Custom hook to manage tipping options
 */
var useTipOptions = function useTipOptions() {
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useFormContext)(),
    control = _useFormContext.control,
    watch = _useFormContext.watch,
    setValue = _useFormContext.setValue,
    getValues = _useFormContext.getValues;
  var tippingCalculationMethod = watch === null || watch === void 0 ? void 0 : watch("tipping_calculation_method");
  var safeSetValue = function safeSetValue(name, value) {
    setValue(name, value, {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  // Get current tip options or initialize as empty array
  var tipOptions = (watch === null || watch === void 0 ? void 0 : watch("tip_options")) || [];
  var addTipOption = function addTipOption() {
    var currentOptions = (getValues === null || getValues === void 0 ? void 0 : getValues("tip_options")) || [];
    var next = [].concat(_toConsumableArray(currentOptions), [0]);
    safeSetValue("tip_options", next);
  };
  var removeTipOption = function removeTipOption(index) {
    var currentOptions = (getValues === null || getValues === void 0 ? void 0 : getValues("tip_options")) || [];
    var newOptions = currentOptions.filter(function (_, i) {
      return i !== index;
    });
    safeSetValue("tip_options", newOptions);
  };
  return {
    tipOptions: tipOptions,
    addTipOption: addTipOption,
    removeTipOption: removeTipOption,
    tippingCalculationMethod: tippingCalculationMethod,
    control: control
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTipOptions);

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_sub-modules_tipping_hooks_useTipOptions_ts.js.map