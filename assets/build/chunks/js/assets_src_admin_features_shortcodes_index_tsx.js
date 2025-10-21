"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_shortcodes_index_tsx"],{

/***/ "./assets/src/admin/features/shortcodes/components/CopyShortcode.tsx":
/*!***************************************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/components/CopyShortcode.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/clipboard.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
/* harmony import */ var _hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useShortcodeGeneration */ "./assets/src/admin/features/shortcodes/hooks/useShortcodeGeneration.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
 * WordPress dependencies
 */
// no-op

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




var CopyShortcode = function CopyShortcode() {
  var _useShortcodeGenerati = (0,_hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    generatedShortcode = _useShortcodeGenerati.generatedShortcode;
  var _useClipboard = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_4__.useClipboard)(),
    copy = _useClipboard.copy,
    copied = _useClipboard.copied;
  var handleCopy = function handleCopy() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (generatedShortcode) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            copy(generatedShortcode);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
  };
  if (!generatedShortcode) return null;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex items-center gap-2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
      readOnly: true,
      value: generatedShortcode
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.TooltipProvider, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        open: !!copied,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.TooltipTrigger, {
          asChild: true,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "button",
            onClick: handleCopy,
            className: "inline-flex items-center gap-2",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "h-4 w-4",
              "aria-hidden": "true"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Copy", "wpcafe")
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.TooltipContent, {
          side: "top",
          align: "end",
          className: "py-1 px-2 text-xs",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Copied!", "wpcafe")
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyShortcode);

/***/ }),

/***/ "./assets/src/admin/features/shortcodes/components/GenerateShortcodeModal.tsx":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/components/GenerateShortcodeModal.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useShortcodeGeneration */ "./assets/src/admin/features/shortcodes/hooks/useShortcodeGeneration.ts");
/* harmony import */ var _admin_features_shortcodes_components_CopyShortcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/shortcodes/components/CopyShortcode */ "./assets/src/admin/features/shortcodes/components/CopyShortcode.tsx");

/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var GenerateShortcodeModal = function GenerateShortcodeModal() {
  var _a, _b, _c, _d, _e, _f;
  var _useShortcodeGenerati = (0,_hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    activeTab = _useShortcodeGenerati.activeTab,
    modalOpen = _useShortcodeGenerati.modalOpen,
    selectedShortcode = _useShortcodeGenerati.selectedShortcode,
    close = _useShortcodeGenerati.close;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    open: !!modalOpen,
    onOpenChange: function onOpenChange(o) {
      return !o && close();
    },
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {
      className: "sm:max-w-xl md:max-w-3xl",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {
          className: "m-0! pb-2!",
          children: (selectedShortcode === null || selectedShortcode === void 0 ? void 0 : selectedShortcode.label) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generate Shortcode", "wpcafe")
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_3__.DialogDescription, {
          className: "text-sm text-gray-600 leading-relaxed",
          children: activeTab === "reservation" ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: "/settings?tab=customization",
              className: "text-primary hover:text-primary/80 underline font-medium",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customize your reservation form", "wpcafe")
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" by adding fields, setting up steps, and configuring display options. Here you can generate and copy the shortcode for embedding your reservation form anywhere on your website.", "wpcafe")]
          }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("First, ", "wpcafe"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: "/food-menu",
              className: "text-primary hover:text-primary/80 underline font-medium",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("set up your food menu", "wpcafe")
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(" by adding food items, categories, and configuring display settings. Then return here to generate and copy the shortcode for displaying your food menu on any page or post.", "wpcafe")]
          })
        })]
      }), activeTab === "reservation" ? (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_reservation_shortcode_form", null) : (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.wp) === null || _d === void 0 ? void 0 : _d.hooks) === null || _e === void 0 ? void 0 : _e.applyFilters) === null || _f === void 0 ? void 0 : _f.call(_e, "wpcafe_food_ordering_shortcode_form", null), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_shortcodes_components_CopyShortcode__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenerateShortcodeModal);

/***/ }),

/***/ "./assets/src/admin/features/shortcodes/components/Tabs.tsx":
/*!******************************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/components/Tabs.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");

/**
 * Internal dependencies
 */

var Tabs = function Tabs(_ref) {
  var tabs = _ref.tabs,
    activeTab = _ref.activeTab,
    onTabChange = _ref.onTabChange;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "inline-flex p-4 bg-white items-center justify-start rounded-md gap-2 text-muted-foreground shadow w-full flex-wrap",
    children: tabs.map(function (tab) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: function onClick() {
          return onTabChange(tab.id);
        },
        className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[15px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-[24px] py-[16px] cursor-pointer border", activeTab === tab.id ? "border-primary bg-white text-[#F45925] shadow-sm" : "border-transparent hover:bg-background/60 text-neutral-500"),
        children: [tab.icon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "mr-2",
          children: tab.icon
        }), tab.label]
      }, tab.id);
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/features/shortcodes/constants.tsx":
/*!************************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/constants.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATIC_TABS: () => (/* binding */ STATIC_TABS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/hand-platter.js");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/icons */ "./assets/src/common/icons/index.ts");
var _a, _b, _c, _d, _e, _f;

/*
 ** WordPress Dependencies
 */

/*
 ** External Dependencies
 */

/*
 ** Internal Dependencies
 */

// Static tab definitions
var STATIC_TABS = [{
  id: "food-ordering",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Online Food Order", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  }),
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Online Food Order Shortcodes", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shortcodes for online food ordering", "wpcafe"),
  children: (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_food_ordering_shortcode", null)
}, {
  id: "reservation",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Reservation", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_icons__WEBPACK_IMPORTED_MODULE_3__.TableReservation, {}),
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Reservation Shortcodes", "wpcafe"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shortcodes for restaurant reservation", "wpcafe"),
  children: (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.wp) === null || _d === void 0 ? void 0 : _d.hooks) === null || _e === void 0 ? void 0 : _e.applyFilters) === null || _f === void 0 ? void 0 : _f.call(_e, "wpcafe_reservation_shortcode", null)
}];

/***/ }),

/***/ "./assets/src/admin/features/shortcodes/hooks/useShortcodeGeneration.ts":
/*!******************************************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/hooks/useShortcodeGeneration.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
/**
 * WordPress Dependencies
 */

/**
 * Internal dependencies
 */


var useShortcodeGeneration = function useShortcodeGeneration() {
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores.shortcodes),
    setShortcodeState = _useDispatch.setShortcodeState;
  var shortcodeState = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select(_globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores.shortcodes).getShortcodeState();
  }, []);
  var _useUrlParams = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_2__.useUrlParams)(),
    setParams = _useUrlParams.setParams;
  var handleTabChange = function handleTabChange(tabId) {
    setShortcodeState({
      activeTab: tabId
    });
    setParams(tabId);
  };
  var close = function close() {
    return setShortcodeState({
      modalOpen: false,
      generatedShortcode: ""
    });
  };
  return Object.assign(Object.assign({}, shortcodeState), {
    handleTabChange: handleTabChange,
    close: close
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useShortcodeGeneration);

/***/ }),

/***/ "./assets/src/admin/features/shortcodes/index.tsx":
/*!********************************************************!*\
  !*** ./assets/src/admin/features/shortcodes/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Tabs */ "./assets/src/admin/features/shortcodes/components/Tabs.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./assets/src/admin/features/shortcodes/constants.tsx");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _admin_features_shortcodes_hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/features/shortcodes/hooks/useShortcodeGeneration */ "./assets/src/admin/features/shortcodes/hooks/useShortcodeGeneration.ts");
/* harmony import */ var _components_GenerateShortcodeModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/GenerateShortcodeModal */ "./assets/src/admin/features/shortcodes/components/GenerateShortcodeModal.tsx");
/* harmony import */ var _admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/admin/router/routeDefinition */ "./assets/src/admin/router/routeDefinition.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");

/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */








var Modules = function Modules() {
  var _a;
  var _useShortcodeGenerati = (0,_admin_features_shortcodes_hooks_useShortcodeGeneration__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    activeTab = _useShortcodeGenerati.activeTab,
    handleTabChange = _useShortcodeGenerati.handleTabChange;
  var activeTabData = _constants__WEBPACK_IMPORTED_MODULE_5__.STATIC_TABS.find(function (tab) {
    return tab.id === activeTab;
  });
  var _useModuleStatus = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_10__.useModuleStatus)(),
    modulesData = _useModuleStatus.modulesData;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var navigateToModule = function navigateToModule(module) {
    navigate("".concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_9__.MODULES_PATH, "?tab=").concat(module));
  };
  var tabContent = ((_a = modulesData === null || modulesData === void 0 ? void 0 : modulesData[activeTab === "food-ordering" ? "food_ordering" : activeTab]) === null || _a === void 0 ? void 0 : _a.status) === "on" ? activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.children : null;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shortcodes", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GenerateShortcodeModal__WEBPACK_IMPORTED_MODULE_8__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Tabs__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
          tabs: _constants__WEBPACK_IMPORTED_MODULE_5__.STATIC_TABS,
          activeTab: activeTab,
          onTabChange: handleTabChange
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: "space-y-6",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-2",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "text-lg font-semibold",
              children: activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.title
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.Description, {
              children: activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.description
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "space-y-4 w-full max-w-3xl",
            children: tabContent || (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.EmptyScreen, {
              title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable ".concat(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.label, " module"), "wpcafe"),
              description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("To access ".concat(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.label, " shortcodes, please enable the ").concat(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.label, " module from the Modules section."), "wpcafe"),
              addButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Go to ".concat(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.label, " module"), "wpcafe"),
              onAddButtonClick: function onAddButtonClick() {
                return navigateToModule(activeTab);
              },
              learnMoreText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Read Documentation", "wpcafe"),
              learnMoreUrl: "https://support.themewinter.com/docs/plugins/plugin-docs/getting-started/wpcafe-shortcode/".concat(activeTab === "food-ordering" ? "" : "#reservation-form"),
              videoTooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How to enable ".concat(activeTabData === null || activeTabData === void 0 ? void 0 : activeTabData.label, " module?"), "wpcafe")
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modules);

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/clipboard.js":
/*!***************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/clipboard.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Clipboard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
];
const Clipboard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clipboard", __iconNode);


//# sourceMappingURL=clipboard.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_shortcodes_index_tsx.js.map