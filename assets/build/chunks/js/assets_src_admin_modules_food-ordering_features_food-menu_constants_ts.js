"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_features_food-menu_constants_ts"],{

/***/ "./assets/src/admin/modules/food-ordering/features/food-menu/constants.ts":
/*!********************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/features/food-menu/constants.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOOD_MENU_INSTRUCTIONS: () => (/* binding */ FOOD_MENU_INSTRUCTIONS),
/* harmony export */   FOOD_MENU_SECTIONS: () => (/* binding */ FOOD_MENU_SECTIONS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
var _a, _b, _c;
/*
 * Wordpress imports
 */

// Food Menu Management Sections
var FOOD_MENU_SECTIONS = [{
  id: "food-menus",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu's", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Admin adds/edit food item via Products", "wpcafe"),
  buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add & Manage Products", "wpcafe"),
  action: "add_item",
  action_url: "".concat((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.admin_url, "edit.php?post_type=product&wpcafe=true")
}, {
  id: "food-category",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Category", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assigns category as 'Food Menu' or specific food type", "wpcafe"),
  buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add & Manage Category", "wpcafe"),
  action: "add_category",
  action_url: "".concat((_b = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _b === void 0 ? void 0 : _b.admin_url, "edit-tags.php?taxonomy=product_cat&post_type=product&wpcafe=true")
}, {
  id: "menus-labels",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Menu's Brands", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Admin adds/edit food item brand labels via Products", "wpcafe"),
  buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add & Manage Brands", "wpcafe"),
  action: "add_labels",
  action_url: "".concat((_c = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _c === void 0 ? void 0 : _c.admin_url, "edit-tags.php?taxonomy=product_brand&post_type=product&wpcafe=true")
}];
// Food Menu Instruction Content (for the guide card)
var FOOD_MENU_INSTRUCTIONS = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Food Menu Instructions", "wpcafe"),
  content: [{
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assigns category as 'Food Menu' or specific food type", "wpcafe"),
    action: {
      label: "",
      link: ""
    },
    links: {
      video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
      doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/add-food-category-and-tag/"
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Special menus with popup content, duration, and schedule, specific page wise condition.", "wpcafe"),
    action: {
      label: "",
      link: ""
    },
    links: {
      video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
      doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/special-menus/"
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assigns category as 'Food Menu' or specific food type", "wpcafe"),
    action: {
      label: "",
      link: ""
    },
    links: {
      video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
      doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/add-food-category-and-tag/"
    }
  }]
};

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_features_food-menu_constants_ts.js.map