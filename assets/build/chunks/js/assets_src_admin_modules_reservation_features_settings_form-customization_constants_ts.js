"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_settings_form-customization_constants_ts"],{

/***/ "./assets/src/admin/modules/reservation/features/settings/form-customization/constants.ts":
/*!************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/settings/form-customization/constants.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldTypeOptions: () => (/* binding */ fieldTypeOptions),
/* harmony export */   generateUniqueOptionValue: () => (/* binding */ _generateUniqueOptionValue),
/* harmony export */   typeToSubtitle: () => (/* binding */ typeToSubtitle)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Wordpress Dependencies
 */

var typeToSubtitle = function typeToSubtitle(type) {
  switch ((type || "").toLowerCase()) {
    case "select":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select text box", "wpcafe");
    case "time":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Time input", "wpcafe");
    case "date":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date input", "wpcafe");
    case "textarea":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Textarea", "wpcafe");
    case "number":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number input", "wpcafe");
    case "location":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Location", "wpcafe");
    case "visual_table":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Visual table selector", "wpcafe");
    case "food_menu":
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food menu block", "wpcafe");
    default:
      return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text input", "wpcafe");
  }
};
var fieldTypeOptions = [{
  value: "text",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Input box", "wpcafe")
}, {
  value: "select",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dropdown", "wpcafe")
}, {
  value: "textarea",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Textarea", "wpcafe")
}, {
  value: "radio",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radio group", "wpcafe")
}, {
  value: "checkbox",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Checkbox group", "wpcafe")
}];
// Generate a unique slug-like value from a label
var _generateUniqueOptionValue = function generateUniqueOptionValue(label, takenValues) {
  var attemptIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var slugBase = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  var candidate = attemptIndex === 0 ? slugBase : "".concat(slugBase, "-").concat(attemptIndex);
  if (!takenValues.includes(candidate)) return candidate;
  return _generateUniqueOptionValue(label, takenValues, attemptIndex + 1);
};


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_settings_form-customization_constants_ts.js.map