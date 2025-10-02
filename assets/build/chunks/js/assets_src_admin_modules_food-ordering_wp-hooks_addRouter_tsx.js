"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_wp-hooks_addRouter_tsx"],{

/***/ "./assets/src/admin/modules/food-ordering/router/addRouterList.tsx":
/*!*************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/router/addRouterList.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routeDefinition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routeDefinition */ "./assets/src/admin/modules/food-ordering/router/routeDefinition.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/**
 * WordPress Dependencies
 */

/**
 * Internal dependencies
 */

var FoodMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_sonner_dist_index_mjs"), __webpack_require__.e("vendors-node_modules_date-fns__lib_normalizeDates_js-node_modules_date-fns_locale_en-US_js-no-c66743"), __webpack_require__.e("vendors-node_modules_date-fns_locale_js"), __webpack_require__.e("vendors-node_modules_date-fns_format_js"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_createLucideIcon_js-node_modules_radix-ui_react-co-5c9578"), __webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js"), __webpack_require__.e("vendors-node_modules_aria-hidden_dist_es2015_index_js-node_modules_react-remove-scroll_dist_e-6c470e"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_chevron-down_js-node_modules_lucide-react_di-a83797"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_check_js-node_modules_lucide-react_dist_esm_-ea4fb6"), __webpack_require__.e("vendors-node_modules_radix-ui_react-checkbox_dist_index_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_calendar_js-node_modules_lucide-react_dist_e-4dbed2"), __webpack_require__.e("vendors-node_modules_zod_v4_classic_iso_js-node_modules_zod_v4_classic_schemas_js"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_x_js-node_modules_radix-ui_react-dialog_dist-6f99dc"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_bell_js-node_modules_lucide-react_dist_esm_i-1a2fd2"), __webpack_require__.e("assets_src_admin_modules_food-ordering_features_food-menu_index_tsx-_ead41")]).then(__webpack_require__.bind(__webpack_require__, /*! @/admin/modules/food-ordering/features/food-menu */ "./assets/src/admin/modules/food-ordering/features/food-menu/index.tsx"));
});
function addRouterList(list, Router) {
  var _a, _b, _c;
  // Create a new array with the existing routes to avoid direct mutation
  var newList = _toConsumableArray(list);
  // Attach the Router instance to the global `window.wpCafe` object for access outside of this module.
  window.wpCafe = Object.assign((_a = window.wpCafe) !== null && _a !== void 0 ? _a : {}, {
    router: Router
  });
  (_c = (_b = newList === null || newList === void 0 ? void 0 : newList[0]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.unshift({
    path: _routeDefinition__WEBPACK_IMPORTED_MODULE_2__.FOOD_MENU_PATH,
    element: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FoodMenu, {}),
    errorElement: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Router.ErrorPage, {})
  });
  return newList;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addRouterList);

/***/ }),

/***/ "./assets/src/admin/modules/food-ordering/router/routeDefinition.ts":
/*!**************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/router/routeDefinition.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOOD_MENU_PATH: () => (/* binding */ FOOD_MENU_PATH)
/* harmony export */ });
var FOOD_MENU_PATH = "/food-menu";

/***/ }),

/***/ "./assets/src/admin/modules/food-ordering/wp-hooks/addRouter.tsx":
/*!***********************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/wp-hooks/addRouter.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_addRouterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router/addRouterList */ "./assets/src/admin/modules/food-ordering/router/addRouterList.tsx");
/**
 * Internal dependencies
 */
var _a, _b, _c;

(_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.addFilter) === null || _c === void 0 ? void 0 : _c.call(_b, "wp_cafe_router", "WPCafe",
// Namespace for the filter to track its origin
_router_addRouterList__WEBPACK_IMPORTED_MODULE_0__["default"],
// Callback function that extends the router list
10);

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_wp-hooks_addRouter_tsx.js.map