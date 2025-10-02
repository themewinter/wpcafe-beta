"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_features_shortcodes_constants_tsx"],{

/***/ "./assets/src/admin/modules/food-ordering/features/shortcodes/constants.tsx":
/*!**********************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/features/shortcodes/constants.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignmentOptions: () => (/* binding */ alignmentOptions),
/* harmony export */   orderOptions: () => (/* binding */ orderOptions),
/* harmony export */   shortcodes: () => (/* binding */ shortcodes),
/* harmony export */   yesNoOptions: () => (/* binding */ yesNoOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _a, _b, _c;
/**
 * WordPress dependencies
 */

var foodMenuTemplates = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu Tab", "wpcafe"),
  value: "wpc_food_menu_tab"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu List", "wpcafe"),
  value: "wpc_food_menu_list"
}];
var shortcodes = [
//Food Menu
// [wpc_food_menu_tab style='style-1' wpc_menu_order='ASC' no_of_product = 20 wpc_food_categories = 21,19,20 wpc_show_desc='yes' wpc_desc_limit = 20 title_link_show='yes' title_link_show='yes' show_thumbnail='yes' wpc_cart_button='yes' wpc_price_show='yes']
{
  id: "wpc_food_menu_list",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  fields: ["template", "style", "wpc_menu_order", "no_of_product", "wpc_food_categories", "wpc_show_desc", "wpc_desc_limit", "title_link_show", "show_item_status", "show_thumbnail", "wpc_cart_button", "wpc_price_show"],
  template_options: foodMenuTemplates,
  style_option: 3,
  defaultValues: {
    template: "wpc_food_menu_list",
    style: "style-1",
    wpc_menu_order: "ASC",
    no_of_product: 20,
    wpc_food_categories: [],
    wpc_show_desc: "yes",
    wpc_desc_limit: 20,
    title_link_show: "yes",
    show_item_status: "yes",
    show_thumbnail: "yes",
    wpc_cart_button: "yes",
    wpc_price_show: "yes"
  }
},
//[wpc_food_location_menu style='style-1' wpc_menu_order='ASC' no_of_product = 20 wpc_show_desc='yes' wpc_desc_limit = 20 title_link_show='yes' show_item_status='yes' show_thumbnail='yes' wpc_cart_button='yes' wpc_delivery_time_show='yes' wpc_price_show='yes']
{
  id: "wpc_food_location_menu",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Filter Food Menu By Location", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  fields: ["template",
  //fixed
  "style",
  //fixed
  "wpc_menu_order", "no_of_product", "wpc_show_desc", "wpc_desc_limit", "title_link_show", "show_item_status", "show_thumbnail", "wpc_cart_button", "wpc_price_show"],
  template_options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu List", "wpcafe"),
    value: "wpc_food_menu_list"
  }],
  style_option: 1,
  defaultValues: {
    template: "wpc_food_menu_list",
    style: "style-1",
    wpc_menu_order: "ASC",
    no_of_product: 20,
    wpc_show_desc: "yes",
    wpc_desc_limit: 20,
    title_link_show: "yes",
    show_item_status: "yes",
    show_thumbnail: "yes",
    wpc_cart_button: "yes",
    wpc_price_show: "yes"
  }
},
//[food_location_filter location_alignment = center]
{
  id: "food_location_filter",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Location Filter", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  fields: ["template",
  //fixed
  "location_alignment"],
  template_options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Location Filter", "wpcafe"),
    value: "food_location_filter"
  }],
  defaultValues: {
    template: "food_location_filter",
    location_alignment: "center"
  }
}].concat(_toConsumableArray((_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_pro_food_order_shortcodes", [{
  id: "wpc_pro_menu_category_list",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Category List (Pro)", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  isPro: true
}, {
  id: "wpc_pro_menu_location_list",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Location List (Pro)", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  isPro: true
}, {
  id: "wpc_pro_food_menu_list",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu List and Tab (Pro)", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  isPro: true
}, {
  id: "wpc_pro_menu_tab_with_slider",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu Slider (Pro)", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  isPro: true
}, {
  id: "wpc_pro_food_menu_loadmore",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu Loadmore (Pro)", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("You can generate shortcode", "wpcafe"),
  isPro: true
}])));
var yesNoOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yes", "wpcafe"),
  value: "yes"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No", "wpcafe"),
  value: "no"
}];
var orderOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ASC", "wpcafe"),
  value: "ASC"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("DESC", "wpcafe"),
  value: "DESC"
}];
var alignmentOptions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpcafe"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "wpcafe"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpcafe"),
  value: "right"
}];

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_features_shortcodes_constants_tsx.js.map