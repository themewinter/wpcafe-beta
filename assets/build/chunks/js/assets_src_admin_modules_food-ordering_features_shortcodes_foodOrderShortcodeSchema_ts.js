"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_features_shortcodes_foodOrderShortcodeSchema_ts"],{

/***/ "./assets/src/admin/modules/food-ordering/features/shortcodes/foodOrderShortcodeSchema.ts":
/*!************************************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/features/shortcodes/foodOrderShortcodeSchema.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foodOrderShortcodeSchema: () => (/* binding */ foodOrderShortcodeSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");
/**
 * External Dependencies
 */

var foodOrderShortcodeSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  template: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  style: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_menu_order: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  no_of_product: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  wpc_food_categories: zod__WEBPACK_IMPORTED_MODULE_0__.array(zod__WEBPACK_IMPORTED_MODULE_0__.number()),
  wpc_show_desc: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_desc_limit: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  title_link_show: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  show_item_status: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  product_thumbnail: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_cart_button: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_price_show: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  location_alignment: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  // Pro fields
  hide_empty: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  category_limit: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  show_count: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  grid_column: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  location_ids: zod__WEBPACK_IMPORTED_MODULE_0__.array(zod__WEBPACK_IMPORTED_MODULE_0__.number()),
  location_limit: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  live_search: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_delivery_time_show: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_nav_position: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_slider_count: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
  wpc_auto_play: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_slider_nav_show: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
  wpc_slider_dot_show: zod__WEBPACK_IMPORTED_MODULE_0__.string()
}).partial(); //all fields are optional

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_features_shortcodes_foodOrderShortcodeSchema_ts.js.map