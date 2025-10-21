"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_onboard_index_tsx"],{

/***/ "./assets/images/admin/onboard.png":
/*!*****************************************!*\
  !*** ./assets/images/admin/onboard.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "chunks/images/onboard.png";

/***/ }),

/***/ "./assets/src/admin/components/CheckboxCard.tsx":
/*!******************************************************!*\
  !*** ./assets/src/admin/components/CheckboxCard.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxCard: () => (/* binding */ CheckboxCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */

var CheckboxCard = function CheckboxCard(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    selected = _ref.selected,
    onToggle = _ref.onToggle;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    onClick: onToggle,
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-pointer flex-col rounded-md border p-4 transition-all", selected ? "border-primary" : "border-visual-400"),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "mb-2 bg-visual-100 rounded-[2px] p-[4px] w-max",
      children: icon
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "font-medium text-base",
      children: title
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "text-sm text-muted-foreground",
      children: description
    }), selected && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "absolute right-2 top-2 flex items-center justify-center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-5 h-5 fill-primary-300 stroke-white"
      })
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/onboard/constants.tsx":
/*!*********************************************************!*\
  !*** ./assets/src/admin/features/onboard/constants.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allSteps: () => (/* binding */ allSteps),
/* harmony export */   finalStepsContent: () => (/* binding */ finalStepsContent),
/* harmony export */   restaurantOptions: () => (/* binding */ restaurantOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_features_onboard_steps_ModuleSelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/onboard/steps/ModuleSelection */ "./assets/src/admin/features/onboard/steps/ModuleSelection.tsx");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/icons */ "./assets/src/common/icons/index.ts");
/* harmony import */ var _admin_features_onboard_steps_Schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/features/onboard/steps/Schedule */ "./assets/src/admin/features/onboard/steps/Schedule.tsx");
/* harmony import */ var _admin_features_onboard_steps_Woocommerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/onboard/steps/Woocommerce */ "./assets/src/admin/features/onboard/steps/Woocommerce.tsx");

/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */




var allSteps = [{
  key: "module_selection",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set Up Your Restaurant", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Let’s start with the basics. Fill in your restaurant info to get started.", "wpcafe"),
  fields: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_steps_ModuleSelection__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  key: "schedule",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set Your Weekly Schedule", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tell us when your restaurant is open and when you take breaks.", "wpcafe"),
  fields: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_steps_Schedule__WEBPACK_IMPORTED_MODULE_4__["default"], {})
}, {
  key: "food_ordering",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set Up Online Food Ordering", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Let customers order for pickup or delivery — and choose if you want to accept tips.", "wpcafe"),
  get fields() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_food_order_onboard", null);
  }
}, {
  key: "reservation",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set Up Reservations", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Let customers book tables online. Customize guest limits, time slots, and more.", "wpcafe"),
  get fields() {
    var _a, _b, _c;
    return (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_reservation_onboard", null);
  }
}, {
  key: "woocommerce",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Connect with WooCommerce", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sync your food menu with WooCommerce to manage orders, payments, and categories easily.", "wpcafe"),
  fields: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_steps_Woocommerce__WEBPACK_IMPORTED_MODULE_5__["default"], {})
}];
var restaurantOptions = [{
  value: "food_ordering",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Food Ordering", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Take online orders for delivery or pickup", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_icons__WEBPACK_IMPORTED_MODULE_3__.FoodOrderIcon, {})
}, {
  value: "reservation",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Let customers book a table online", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_icons__WEBPACK_IMPORTED_MODULE_3__.ReservationIcon, {})
}];
var finalStepsContent = {
  food_ordering: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("🍽️ Next Steps to Get Started", "wpcafe"),
    content: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create Food Categories (e.g., Pizza, Pasta)", "wpcafe"),
      action: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Category", "wpcafe"),
        link: "#"
      },
      links: {
        video: "https://youtu.be/aVaopHF8Qpk",
        doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/add-food-category-and-tag/"
      }
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Food Items (WooCommerce products shown as food menu)", "wpcafe"),
      action: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Food Menu", "wpcafe"),
        link: "#"
      },
      links: {
        video: "#",
        doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/add-new-food-item/#add-simple-menu"
      }
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Set Time-Based Menus (e.g., Breakfast, Lunch specials)", "wpcafe"),
      action: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Time-Based Menu", "wpcafe"),
        link: ""
      },
      links: {
        video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
        doc: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/how-to-set-up-time-based-food-menus-in-wpcafe/"
      }
    }]
  },
  reservation: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservations", "wpcafe"),
    content: [{
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How to Configure Reservations in WP Cafe", "wpcafe"),
      action: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Configure", "wpcafe"),
        link: "/reservations"
      },
      links: {
        video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
        doc: "https://support.themewinter.com/docs/plugins/plugin-docs/reservation/general-settings-4/"
      }
    }, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How to Configure Reservations with Food Ordering", "wpcafe"),
      action: {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Configure", "wpcafe"),
        link: "#"
      },
      links: {
        video: "https://www.youtube.com/watch?v=zORxmnxVJd8&list=PLW54c-mt4ObB2k9t8A5ALlwKGjeWxB8zQ",
        doc: "https://support.themewinter.com/docs/plugins/plugin-docs/reservation/reservation-with-food-order-pro/"
      }
    }]
  }
};

/***/ }),

/***/ "./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts":
/*!*************************************************************************!*\
  !*** ./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _admin_features_settings_hooks_useSettingsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/settings/hooks/useSettingsApi */ "./assets/src/admin/features/settings/hooks/useSettingsApi.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers */ "./assets/src/helpers/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Wordpress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



var useNavigationHandler = function useNavigationHandler(_ref) {
  var form = _ref.form;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.onboard).getOnboardState();
    }, []),
    currentStep = _useSelect.currentStep,
    totalSteps = _useSelect.totalSteps,
    data = _useSelect.data,
    steps = _useSelect.steps;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.onboard),
    setOnboardState = _useDispatch.setOnboardState;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var _useSettingsApi = (0,_admin_features_settings_hooks_useSettingsApi__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    editSettings = _useSettingsApi.editSettings;
  var navigateToDashboard = function navigateToDashboard() {
    window.location.href = "admin.php?page=wpcafe#/";
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.scrollTop)();
  };
  var skipAllSteps = function skipAllSteps() {
    if (currentStep === 1) {
      navigate("/");
    } else {
      navigateToDashboard();
    }
  };
  var resetCurrentStepForm = function resetCurrentStepForm(_ref2) {
    var stepNumber = _ref2.stepNumber;
    var _a;
    return form === null || form === void 0 ? void 0 : form.reset(data[(_a = steps === null || steps === void 0 ? void 0 : steps[stepNumber - 1]) === null || _a === void 0 ? void 0 : _a.key] || {});
  };
  var navigateNextStep = function navigateNextStep() {
    var stepNumber = currentStep + 1;
    setOnboardState({
      currentStep: stepNumber
    });
    resetCurrentStepForm({
      stepNumber: stepNumber
    });
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.scrollTop)();
  };
  var navigatePreviousStep = function navigatePreviousStep() {
    var stepNumber = currentStep - 1;
    setOnboardState({
      currentStep: stepNumber
    });
    resetCurrentStepForm({
      stepNumber: stepNumber
    });
    (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.scrollTop)();
  };
  var handleOnboardSubmit = function handleOnboardSubmit(values) {
    var _a;
    navigateNextStep();
    if (currentStep === totalSteps) {
      setOnboardState({
        stepsCompleted: true
      });
      return;
    }
    var isEdited = Object.values(values).some(function (value) {
      return !!value;
    });
    if (isEdited) {
      editSettings(values);
    }
    setOnboardState({
      data: Object.assign(Object.assign({}, data), _defineProperty({}, (_a = steps === null || steps === void 0 ? void 0 : steps[currentStep - 1]) === null || _a === void 0 ? void 0 : _a.key, values))
    });
  };
  return {
    skipAllSteps: skipAllSteps,
    navigateToDashboard: navigateToDashboard,
    navigateNextStep: navigateNextStep,
    navigatePreviousStep: navigatePreviousStep,
    handleOnboardSubmit: handleOnboardSubmit
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNavigationHandler);

/***/ }),

/***/ "./assets/src/admin/features/onboard/hooks/useOnboardservice.ts":
/*!**********************************************************************!*\
  !*** ./assets/src/admin/features/onboard/hooks/useOnboardservice.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/features/onboard/constants */ "./assets/src/admin/features/onboard/constants.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */


var useOnboardservice = function useOnboardservice() {
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.onboard),
    setOnboardState = _useDispatch.setOnboardState;
  /**
   * Handles the selection and deselection of a module in a multi-select list,
   * updates the step flow based on selected modules.
   */
  var handleModuleSelection = function handleModuleSelection(_ref) {
    var selectedValue = _ref.selectedValue,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange;
    // Check if the selected value is already in the list
    var exists = value.includes(selectedValue);
    // If it exists, remove it (deselect); otherwise, add it (select)
    var newValue = exists ? value.filter(function (v) {
      return v !== selectedValue;
    }) : [].concat(_toConsumableArray(value), [selectedValue]);
    // Trigger the update with the new list of selected modules
    onChange(newValue);
    // Define the available modules that can impact step rendering
    var modules = ["food_ordering", "reservation"];
    // Find which expected modules are missing from the new selection
    var missingModules = modules.filter(function (item) {
      return !newValue.includes(item);
    });
    // Filter out steps associated with missing modules
    var updatedSteps = _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_1__.allSteps.filter(function (step) {
      return !missingModules.includes(step.key);
    });
    // Update onboarding state with the new step list and total count
    setOnboardState({
      steps: updatedSteps,
      totalSteps: updatedSteps.length
    });
  };
  return {
    handleModuleSelection: handleModuleSelection
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnboardservice);

/***/ }),

/***/ "./assets/src/admin/features/onboard/index.tsx":
/*!*****************************************************!*\
  !*** ./assets/src/admin/features/onboard/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_features_onboard_step_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/onboard/step-container */ "./assets/src/admin/features/onboard/step-container/index.tsx");
/* harmony import */ var _admin_features_onboard_steps_FinalStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/features/onboard/steps/FinalStep */ "./assets/src/admin/features/onboard/steps/FinalStep.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */



var Onboard = function Onboard() {
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.onboard).getOnboardState();
    }, []),
    stepsCompleted = _useSelect.stepsCompleted;
  return stepsCompleted ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_steps_FinalStep__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_step_container__WEBPACK_IMPORTED_MODULE_2__.StepContainer, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Onboard);

/***/ }),

/***/ "./assets/src/admin/features/onboard/onboardSchema.ts":
/*!************************************************************!*\
  !*** ./assets/src/admin/features/onboard/onboardSchema.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   locationValueSchema: () => (/* binding */ locationValueSchema),
/* harmony export */   onboardSchema: () => (/* binding */ onboardSchema)
/* harmony export */ });
/* harmony import */ var _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/features/settings/settingsSchema */ "./assets/src/admin/features/settings/settingsSchema.ts");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Wordpress Dependencies
 */


/**
 * External Dependencies
 */

var locationValueSchema = zod__WEBPACK_IMPORTED_MODULE_2__.object({
  address: zod__WEBPACK_IMPORTED_MODULE_2__.string(),
  lat: zod__WEBPACK_IMPORTED_MODULE_2__.number(),
  lng: zod__WEBPACK_IMPORTED_MODULE_2__.number()
});
// Now selectively require certain fields
var onboardSchema = _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_0__.settingsSchema.extend({
  restaurant_type: zod__WEBPACK_IMPORTED_MODULE_2__.preprocess(function (val) {
    return val === undefined ? [] : val;
  }, zod__WEBPACK_IMPORTED_MODULE_2__.array(zod__WEBPACK_IMPORTED_MODULE_2__["enum"](["food_ordering", "reservation"])).min(1, {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select at least one restaurant type", "wpcafe")
  })),
  restaurant_name: zod__WEBPACK_IMPORTED_MODULE_2__.string().trim().min(1, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant name is required", "wpcafe")),
  restaurant_location: zod__WEBPACK_IMPORTED_MODULE_2__.union([zod__WEBPACK_IMPORTED_MODULE_2__.string().trim().min(1, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant location is required", "wpcafe")), locationValueSchema, zod__WEBPACK_IMPORTED_MODULE_2__["null"]()]).refine(function (val) {
    if (!val) return false;
    if (typeof val === "string") return val.trim().length > 0;
    if (_typeof(val) === "object" && val.address) return val.address.trim().length > 0;
    return false;
  }, {
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant location is required", "wpcafe")
  }),
  terms_agreed: zod__WEBPACK_IMPORTED_MODULE_2__.boolean().optional() // Optional checkbox for updates
});

/***/ }),

/***/ "./assets/src/admin/features/onboard/step-container/Footer.tsx":
/*!*********************************************************************!*\
  !*** ./assets/src/admin/features/onboard/step-container/Footer.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/onboard/hooks/useNavigationHandler */ "./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */


/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */



var SubmitBtn = function SubmitBtn(_ref) {
  var _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
    type: "submit",
    disabled: disabled,
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Continue", "wpcafe")
  });
};
var Footer = function Footer() {
  var _a;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores.onboard).getOnboardState();
    }, []),
    currentStep = _useSelect.currentStep,
    totalSteps = _useSelect.totalSteps,
    data = _useSelect.data;
  var _useSelect2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores.settings).getSettingsState();
    }, []),
    settings = _useSelect2.data;
  var form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  var _useNavigationHandler = (0,_admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_6__["default"])({
      form: form
    }),
    navigateNextStep = _useNavigationHandler.navigateNextStep,
    navigatePreviousStep = _useNavigationHandler.navigatePreviousStep;
  // Step 1: If we're on the first step of onboarding,
  // we check if the user has agreed to the terms (`terms_agreed` field).
  // Only enable the submit button when the user has checked the agreement box.
  if (currentStep === 1) {
    // const agreed = form?.watch("terms_agreed");
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "flex justify-end",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubmitBtn, {})
    });
  }
  // Determine if the submit button should be disabled on the final step,
  // specifically when the user has selected the "food_ordering" module
  // but WooCommerce is not activated on the site.
  var shouldDisableForWoocom = currentStep === totalSteps && ((_a = data === null || data === void 0 ? void 0 : data.module_selection) === null || _a === void 0 ? void 0 : _a.restaurant_type.includes("food_ordering")) && (settings === null || settings === void 0 ? void 0 : settings.wc_status) !== "active" ? true : false;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex items-center justify-between",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "lightOutline",
      onClick: navigatePreviousStep,
      type: "button",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-4 h-4"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Previous", "wpcafe")]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex gap-2",
      children: [currentStep !== totalSteps ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "lightOutline",
        onClick: navigateNextStep,
        type: "button",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Skip", "wpcafe")
      }) : null, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubmitBtn, {
        disabled: shouldDisableForWoocom
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/src/admin/features/onboard/step-container/OnboardForm.tsx":
/*!**************************************************************************!*\
  !*** ./assets/src/admin/features/onboard/step-container/OnboardForm.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardForm: () => (/* binding */ OnboardForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ "./node_modules/@hookform/resolvers/zod/dist/zod.mjs");
/* harmony import */ var _admin_features_onboard_step_container_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/features/onboard/step-container/Footer */ "./assets/src/admin/features/onboard/step-container/Footer.tsx");
/* harmony import */ var _admin_features_onboard_onboardSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/onboard/onboardSchema */ "./assets/src/admin/features/onboard/onboardSchema.ts");
/* harmony import */ var _admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/onboard/hooks/useNavigationHandler */ "./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts");
/* harmony import */ var _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/features/settings/settingsSchema */ "./assets/src/admin/features/settings/settingsSchema.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */

/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */





var OnboardForm = function OnboardForm(_ref) {
  var fields = _ref.fields;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores.onboard).getOnboardState();
    }, []),
    currentStep = _useSelect.currentStep;
  var schema = currentStep === 1 ? _admin_features_onboard_onboardSchema__WEBPACK_IMPORTED_MODULE_5__.onboardSchema : _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_7__.settingsSchema;
  var form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(schema),
    mode: "onChange"
  });
  var _useNavigationHandler = (0,_admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_6__["default"])({
      form: form
    }),
    handleOnboardSubmit = _useNavigationHandler.handleOnboardSubmit;
  var onSubmit = function onSubmit(values) {
    handleOnboardSubmit(values);
    form.reset();
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, form, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: form.handleSubmit(onSubmit),
      className: "space-y-8",
      children: [fields, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_step_container_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })
  }));
};

/***/ }),

/***/ "./assets/src/admin/features/onboard/step-container/ProgressBar.tsx":
/*!**************************************************************************!*\
  !*** ./assets/src/admin/features/onboard/step-container/ProgressBar.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * Internal Dependencies
 */


var ProgressBar = function ProgressBar(_ref) {
  var currentStep = _ref.currentStep,
    totalSteps = _ref.totalSteps;
  var percentage = Math.round(currentStep / totalSteps * 100);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex gap-2 items-center",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_1__.Progress, {
      value: percentage
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components__WEBPACK_IMPORTED_MODULE_2__.Muted, {
      className: "text-neural-500",
      children: [currentStep, "/", totalSteps]
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/onboard/step-container/SkipAllSteps.tsx":
/*!***************************************************************************!*\
  !*** ./assets/src/admin/features/onboard/step-container/SkipAllSteps.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/onboard/hooks/useNavigationHandler */ "./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");

/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */


var SkipAllSteps = function SkipAllSteps() {
  var _useNavigationHandler = (0,_admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_2__["default"])({}),
    skipAllSteps = _useNavigationHandler.skipAllSteps;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "link",
    className: "text-neutral-400 text-sm! block text-center",
    onClick: skipAllSteps,
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("I already know, skip all steps!", "wpcafe")
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkipAllSteps);

/***/ }),

/***/ "./assets/src/admin/features/onboard/step-container/index.tsx":
/*!********************************************************************!*\
  !*** ./assets/src/admin/features/onboard/step-container/index.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepContainer: () => (/* binding */ StepContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_features_onboard_step_container_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/onboard/step-container/ProgressBar */ "./assets/src/admin/features/onboard/step-container/ProgressBar.tsx");
/* harmony import */ var _admin_features_onboard_step_container_OnboardForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/features/onboard/step-container/OnboardForm */ "./assets/src/admin/features/onboard/step-container/OnboardForm.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _admin_features_onboard_step_container_SkipAllSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/onboard/step-container/SkipAllSteps */ "./assets/src/admin/features/onboard/step-container/SkipAllSteps.tsx");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */







var StepContainer = function StepContainer() {
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores.onboard).getOnboardState();
    }, []),
    steps = _useSelect.steps,
    currentStep = _useSelect.currentStep,
    totalSteps = _useSelect.totalSteps;
  var data = steps[currentStep - 1];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col p-2 sm:p-5",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Card, {
      className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("w-full max-w-[820px] mx-auto space-y-4 p-4 sm:p-[50px]"),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-4",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
          children: data === null || data === void 0 ? void 0 : data.title
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.Muted, {
          children: data === null || data === void 0 ? void 0 : data.description
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_step_container_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.ProgressBar, {
          currentStep: currentStep,
          totalSteps: totalSteps
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_step_container_OnboardForm__WEBPACK_IMPORTED_MODULE_3__.OnboardForm, {
        fields: data === null || data === void 0 ? void 0 : data.fields
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_onboard_step_container_SkipAllSteps__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/onboard/steps/FinalStep.tsx":
/*!***************************************************************!*\
  !*** ./assets/src/admin/features/onboard/steps/FinalStep.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FinalStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _images_admin_onboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../images/admin/onboard.png */ "./assets/images/admin/onboard.png");
/* harmony import */ var _admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/onboard/hooks/useNavigationHandler */ "./assets/src/admin/features/onboard/hooks/useNavigationHandler.ts");
/* harmony import */ var _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/onboard/constants */ "./assets/src/admin/features/onboard/constants.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_components_InstructionCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components/InstructionCard */ "./assets/src/common/components/InstructionCard.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */


/**
 * Internal Dependencies
 */







function FinalStep() {
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores.onboard).getOnboardState();
    }, []),
    data = _useSelect.data;
  var _useNavigationHandler = (0,_admin_features_onboard_hooks_useNavigationHandler__WEBPACK_IMPORTED_MODULE_5__["default"])({}),
    navigateToDashboard = _useNavigationHandler.navigateToDashboard;
  var _ref = (data === null || data === void 0 ? void 0 : data.module_selection) || {},
    _ref$restaurant_type = _ref.restaurant_type,
    restaurant_type = _ref$restaurant_type === void 0 ? ["food_ordering", "reservation"] : _ref$restaurant_type;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "lg:grid lg:grid-cols-5 min-h-screen w-full",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "col-span-2 bg-[#F9FAFB] flex flex-col items-center justify-center text-center p-2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: _images_admin_onboard_png__WEBPACK_IMPORTED_MODULE_4__,
        alt: "Setup complete",
        className: "max-w-xs mb-6"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-base text-neutral-500 max-w-sm",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Thank you again for configuring your own WPCafe in WordPress. To manage items via form, we are suggesting to install", "wpcafe"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://wordpress.org/plugins/woocommerce/",
          target: "_blank",
          className: "text-[#7F54B3]! mx-1",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WooCommerce", "wpcafe")
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("plugin.", "wpcafe")]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "col-span-3 flex items-center justify-center p-4",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Card, {
        className: "max-w-[700px] w-full rounded-xl",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
          className: "space-y-10 py-8",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-3",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.SectionTitle, {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Congratulations!", "wpcafe")
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.Muted, {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WPCafe is now ready for online food ordering. Let’s finish setting up your menu using WooCommerce products.", "wpcafe")
            })]
          }), restaurant_type === null || restaurant_type === void 0 ? void 0 : restaurant_type.map(function (key) {
            var content = _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_6__.finalStepsContent[key];
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_InstructionCard__WEBPACK_IMPORTED_MODULE_8__.InstructionCard, {
              instructionData: content
            }, key);
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: "bg-neutral-500",
            onClick: navigateToDashboard,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Go to Dashboard", "wpcafe")
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./assets/src/admin/features/onboard/steps/ModuleSelection.tsx":
/*!*********************************************************************!*\
  !*** ./assets/src/admin/features/onboard/steps/ModuleSelection.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _admin_components_CheckboxCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/CheckboxCard */ "./assets/src/admin/components/CheckboxCard.tsx");
/* harmony import */ var _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/features/onboard/constants */ "./assets/src/admin/features/onboard/constants.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _admin_features_onboard_hooks_useOnboardservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/onboard/hooks/useOnboardservice */ "./assets/src/admin/features/onboard/hooks/useOnboardservice.ts");

/**
 * Wordpress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */




var ModuleSelection = function ModuleSelection() {
  // Get form context here instead of receiving control as prop
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    control = _useFormContext.control;
  var _useOnboardservice = (0,_admin_features_onboard_hooks_useOnboardservice__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    handleModuleSelection = _useOnboardservice.handleModuleSelection;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "space-y-5",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.FormInput, {
      control: control,
      name: "restaurant_type",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Type", "wpcafe"),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select how your restaurant serves customers. Choose one or both options: 'Food Ordering' for online orders or 'Reservation' for table booking.", "wpcafe"),
      required: true,
      inputField: function inputField(_ref) {
        var _ref$value = _ref.value,
          value = _ref$value === void 0 ? [] : _ref$value,
          onChange = _ref.onChange;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
          children: _admin_features_onboard_constants__WEBPACK_IMPORTED_MODULE_4__.restaurantOptions.map(function (option) {
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_components_CheckboxCard__WEBPACK_IMPORTED_MODULE_3__.CheckboxCard, {
              title: option.title,
              description: option.description,
              icon: option.icon,
              value: option.value,
              selected: value.includes(option.value),
              onToggle: function onToggle() {
                return handleModuleSelection({
                  selectedValue: option.value,
                  value: value,
                  onChange: onChange
                });
              }
            }, option.value);
          })
        });
      }
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
      control: control,
      name: "restaurant_name",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Name", "wpcafe"),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter your restaurant's name as you'd like it to appear to customers (e.g., Café Aroma).", "wpcafe"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("e.g. Café Aroma", "wpcafe"),
      required: true
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.LocationInput, {
      control: control,
      name: "restaurant_location",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location", "wpcafe"),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Provide your restaurant’s physical location or city so customers can find and order from you.", "wpcafe"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search or enter address (choose from suggestions if available)", "wpcafe"),
      required: true
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
        control: control,
        name: "restaurant_email",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Email Address", "wpcafe"),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("youremail@email.com", "wpcafe")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.TextInput, {
        control: control,
        name: "restaurant_phone",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Contact Number", "wpcafe"),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("123 456 7890", "wpcafe")
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.CheckboxInput, {
      inlineLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yes, I want helpful updates (no spam, ever!)", "wpcafe"),
      control: control,
      name: "terms_agreed",
      required: false
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleSelection);

/***/ }),

/***/ "./assets/src/admin/features/onboard/steps/Schedule.tsx":
/*!**************************************************************!*\
  !*** ./assets/src/admin/features/onboard/steps/Schedule.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

var Schedule = function Schedule() {
  var form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  // Watch the current schedule value, use defaultSchedule as fallback
  var currentSchedule = form.watch("restaurant_schedule") || _common_components__WEBPACK_IMPORTED_MODULE_2__.defaultSchedule;
  /**
   * Handle schedule changes
   */
  var handleScheduleChange = function handleScheduleChange(schedule) {
    form.setValue("restaurant_schedule", schedule, {
      shouldValidate: true,
      shouldDirty: true
    });
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.ScheduleManagement, {
    value: currentSchedule,
    onChange: handleScheduleChange,
    name: "restaurant_schedule",
    className: "w-full"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Schedule);

/***/ }),

/***/ "./assets/src/admin/features/onboard/steps/Woocommerce.tsx":
/*!*****************************************************************!*\
  !*** ./assets/src/admin/features/onboard/steps/Woocommerce.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _admin_features_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/features/plugins */ "./assets/src/admin/features/plugins/index.tsx");

/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */



var Woocommerce = function Woocommerce() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: "border rounded-lg p-4",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-wrap items-center justify-between gap-2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "text-neutral-light text-base font-medium leading-none tracking-tight",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Woocommerce", "wpcafe")
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.Description, {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("To use this plugin, please install and activate WooCommerce first.", "wpcafe")
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_plugins__WEBPACK_IMPORTED_MODULE_4__.WoocomBtn, {})]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Woocommerce);

/***/ }),

/***/ "./assets/src/admin/features/plugins/hooks/usePluginApi.ts":
/*!*****************************************************************!*\
  !*** ./assets/src/admin/features/plugins/hooks/usePluginApi.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./assets/src/api/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
/**
 * Wordpress Dependencies
 */


/**
 * Internal dependencies
 */


var usePluginApi = function usePluginApi() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setloading = _useState2[1];
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.settings),
    setSettingsState = _useDispatch.setSettingsState;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.settings).getSettingsState();
    }, []),
    data = _useSelect.data;
  var activatePlugin = function activatePlugin() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      var res, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setloading(true);
            _context.n = 1;
            return _api__WEBPACK_IMPORTED_MODULE_2__["default"].plugins.activatePlugins({
              name: "woocommerce",
              status: "activate"
            });
          case 1:
            res = _context.v;
            if (res === null || res === void 0 ? void 0 : res.success) {
              setSettingsState({
                data: Object.assign(Object.assign({}, data), {
                  wc_status: "active"
                })
              });
            }
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error(_t);
          case 3:
            _context.p = 3;
            setloading(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
  };
  return {
    activatePlugin: activatePlugin,
    loading: loading
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePluginApi);

/***/ }),

/***/ "./assets/src/admin/features/plugins/index.tsx":
/*!*****************************************************!*\
  !*** ./assets/src/admin/features/plugins/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WoocomBtn: () => (/* binding */ WoocomBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _admin_features_plugins_hooks_usePluginApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/plugins/hooks/usePluginApi */ "./assets/src/admin/features/plugins/hooks/usePluginApi.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Wordpress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



var WoocomBtn = function WoocomBtn() {
  var _usePluginApi = (0,_admin_features_plugins_hooks_usePluginApi__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    activatePlugin = _usePluginApi.activatePlugin,
    loading = _usePluginApi.loading;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores.settings).getSettingsState();
    }, []),
    data = _useSelect.data;
  var _ref = data || {},
    wc_status = _ref.wc_status;
  return wc_status === "active" ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-6 h-6 fill-success stroke-white"
  }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "infoOutline",
    onClick: activatePlugin,
    loading: loading,
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(wc_status === "not-installed" ? "Install and activate" : "Activate", "wpcafe")
  });
};

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/arrow-left.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-check.js":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-check.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleCheck)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-check", __iconNode);


//# sourceMappingURL=circle-check.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_onboard_index_tsx.js.map