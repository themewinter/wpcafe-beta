"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_modules_index_tsx"],{

/***/ "./assets/src/admin/features/modules/components/MainModule.tsx":
/*!*********************************************************************!*\
  !*** ./assets/src/admin/features/modules/components/MainModule.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainModule: () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui/switch */ "./assets/src/shadcn/components/ui/switch.tsx");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");

/**
 * Internal dependencies
 */


var MainModule = function MainModule(_ref) {
  var module = _ref.module,
    isEnabled = _ref.isEnabled,
    onToggle = _ref.onToggle;
  if (!module) return null;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: "flex flex-row items-center justify-between p-4 rounded-md rounded-b-none",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex-1 space-y-2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: "!text-base !my-0 font-semibold text-gray-900",
        children: module.title
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-sm text-gray-600 !my-0",
        children: module.description
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_switch__WEBPACK_IMPORTED_MODULE_1__.Switch, {
      checked: isEnabled,
      onCheckedChange: function onCheckedChange(checked) {
        return onToggle(module.slug, checked ? "on" : "off");
      }
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/modules/components/ModulesSkeleton.tsx":
/*!**************************************************************************!*\
  !*** ./assets/src/admin/features/modules/components/ModulesSkeleton.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleCardSkeleton: () => (/* binding */ ModuleCardSkeleton),
/* harmony export */   ModulesSkeleton: () => (/* binding */ ModulesSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");


/**
 * Internal dependencies
 */


var ModulesSkeleton = function ModulesSkeleton() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modules", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          className: "h-6 w-80"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "space-y-4",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "bg-white rounded-lg border border-muted p-6",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2",
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                  className: "h-6 w-48"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                  className: "h-4 w-72"
                })]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                className: "h-6 w-12"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: [1, 2, 3].map(function (j) {
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "bg-white border border-muted rounded-lg p-4",
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-2",
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                      className: "h-5 w-32"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                      className: "h-4 w-full"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                      className: "h-4 w-3/4"
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "flex justify-between items-center pt-2",
                      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                        className: "h-4 w-12"
                      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
                        className: "h-5 w-10"
                      })]
                    })]
                  })
                }, j);
              })
            })]
          })
        })]
      })
    })]
  });
};
var ModuleCardSkeleton = function ModuleCardSkeleton() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "bg-white border border-muted rounded-lg p-4",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "space-y-2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        className: "h-5 w-32"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        className: "h-4 w-full"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
        className: "h-4 w-3/4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-between items-center pt-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          className: "h-4 w-12"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
          className: "h-5 w-10"
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/features/modules/components/SubModuleCard.tsx":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/modules/components/SubModuleCard.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _common_components_FeatureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/components/FeatureCard */ "./assets/src/common/components/FeatureCard.tsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * Internal dependencies
 */



var SubModuleCard = function SubModuleCard(_ref) {
  var name = _ref.name,
    title = _ref.title,
    description = _ref.description,
    status = _ref.status,
    is_pro = _ref.is_pro,
    doc_link = _ref.doc_link,
    onToggle = _ref.onToggle,
    icon = _ref.icon,
    settings_link = _ref.settings_link;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.modules).getModulesState();
    }, []),
    updatingModule = _useSelect.updatingModule;
  // Only show loading for the specific module being updated
  var isCurrentModuleUpdating = updatingModule === name;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_FeatureCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    title: title,
    description: description,
    status: status,
    is_pro: is_pro,
    loading: isCurrentModuleUpdating,
    doc_link: doc_link,
    onToggle: onToggle,
    icon: icon,
    showConfigureButton: true,
    settings_link: settings_link
  }, name);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubModuleCard);

/***/ }),

/***/ "./assets/src/admin/features/modules/components/SubModuleList.tsx":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/modules/components/SubModuleList.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubModuleList: () => (/* binding */ SubModuleList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _SubModuleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubModuleCard */ "./assets/src/admin/features/modules/components/SubModuleCard.tsx");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");



var SubModuleList = function SubModuleList(_ref) {
  var subModules = _ref.subModules,
    onToggle = _ref.onToggle;
  if (subModules.length === 0) return null;
  return (
    // radius will be applied only bottom left right edge and top left right will be sharp
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
      className: "rounded-b-sm rounded-t-none border-t-0 bg-white",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
        children: subModules.map(function (subModule) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SubModuleCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: subModule.name,
            title: subModule.title,
            description: subModule.description,
            status: subModule.status,
            is_pro: subModule.is_pro,
            doc_link: subModule.doc_link,
            onToggle: onToggle,
            icon: subModule.icon,
            settings_link: subModule.settings_link,
            showConfigureButton: true
          }, subModule.name);
        })
      })
    })
  );
};

/***/ }),

/***/ "./assets/src/admin/features/modules/components/Tabs.tsx":
/*!***************************************************************!*\
  !*** ./assets/src/admin/features/modules/components/Tabs.tsx ***!
  \***************************************************************/
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
        className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[15px] font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-[24px] py-[16px] cursor-pointer border", activeTab === tab.id ? "border-primary bg-white text-primary shadow-sm" : "border-transparent hover:bg-background/60 text-neutral-500"),
        children: [tab.icon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "mr-2",
          children: tab.icon
        }), tab.label]
      }, tab.id);
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/features/modules/constant.tsx":
/*!********************************************************!*\
  !*** ./assets/src/admin/features/modules/constant.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATIC_TABS: () => (/* binding */ STATIC_TABS),
/* harmony export */   TAB_MODULE_MAP: () => (/* binding */ TAB_MODULE_MAP)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/hand-platter.js");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/icons */ "./assets/src/common/icons/index.ts");

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
  id: "food_ordering",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Online Food Order", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 18
  })
}, {
  id: "reservation",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Reservation", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_icons__WEBPACK_IMPORTED_MODULE_3__.TableReservation, {})
}, {
  id: "addons",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Addons", "wpcafe"),
  icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_icons__WEBPACK_IMPORTED_MODULE_3__.AddonsGearIcon, {})
}];
// Map tab IDs to module slugs for filtering
var TAB_MODULE_MAP = {
  food_ordering: ["food_ordering"],
  reservation: ["reservation"],
  addons: []
};

/***/ }),

/***/ "./assets/src/admin/features/modules/hooks/useModuleData.ts":
/*!******************************************************************!*\
  !*** ./assets/src/admin/features/modules/hooks/useModuleData.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModuleData: () => (/* binding */ useModuleData)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/features/modules/constant.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var useModuleData = function useModuleData(activeTab) {
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      var state = select(_globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.modules).getModulesState();
      return {
        data: state === null || state === void 0 ? void 0 : state.data,
        loading: (state === null || state === void 0 ? void 0 : state.loading) || false
      };
    }, []),
    data = _useSelect.data;
  var getSubModules = function getSubModules(parentSlug) {
    if (!data) return [];
    return Object.values(data).filter(function (module) {
      return module.parent === parentSlug;
    });
  };
  var getMainModules = function getMainModules() {
    if (!data) return [];
    return Object.values(data).filter(function (module) {
      return !module.parent;
    });
  };
  var getMainModuleBySlug = function getMainModuleBySlug(slug) {
    if (!data) return undefined;
    return Object.values(data).find(function (module) {
      return module.slug === slug && !module.parent;
    });
  };
  // Filter modules based on active tab
  var getFilteredModules = function getFilteredModules() {
    var mainModules = getMainModules();
    var allowedModules = _constant__WEBPACK_IMPORTED_MODULE_1__.TAB_MODULE_MAP[activeTab] || [];
    return mainModules.filter(function (module) {
      return allowedModules.some(function (allowed) {
        return module.slug === allowed;
      });
    });
  };
  var filteredModules = getFilteredModules();
  return {
    data: data,
    filteredModules: filteredModules,
    getSubModules: getSubModules,
    getMainModuleBySlug: getMainModuleBySlug
  };
};

/***/ }),

/***/ "./assets/src/admin/features/modules/hooks/useModuleHandlers.ts":
/*!**********************************************************************!*\
  !*** ./assets/src/admin/features/modules/hooks/useModuleHandlers.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModuleHandlers: () => (/* binding */ useModuleHandlers)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useModulesApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useModulesApi */ "./assets/src/admin/features/modules/hooks/useModulesApi.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */
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
 * Internal dependencies
 */


var useModuleHandlers = function useModuleHandlers() {
  var _useUrlParams = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_2__.useUrlParams)(),
    setParams = _useUrlParams.setParams,
    getParams = _useUrlParams.getParams;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return getParams("food_ordering");
    }),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  var _useModulesApi = (0,_useModulesApi__WEBPACK_IMPORTED_MODULE_1__.useModulesApi)(),
    updateModuleStatus = _useModulesApi.updateModuleStatus;
  var handleTabChange = function handleTabChange(tabId) {
    setActiveTab(tabId);
    setParams(tabId);
  };
  var handleModuleToggle = function handleModuleToggle(moduleSlug, status) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return updateModuleStatus(moduleSlug, status);
          case 1:
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Failed to update module:", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
  };
  return {
    activeTab: activeTab,
    handleTabChange: handleTabChange,
    handleModuleToggle: handleModuleToggle
  };
};

/***/ }),

/***/ "./assets/src/admin/features/modules/index.tsx":
/*!*****************************************************!*\
  !*** ./assets/src/admin/features/modules/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Tabs */ "./assets/src/admin/features/modules/components/Tabs.tsx");
/* harmony import */ var _components_MainModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MainModule */ "./assets/src/admin/features/modules/components/MainModule.tsx");
/* harmony import */ var _components_SubModuleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SubModuleList */ "./assets/src/admin/features/modules/components/SubModuleList.tsx");
/* harmony import */ var _components_ModulesSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ModulesSkeleton */ "./assets/src/admin/features/modules/components/ModulesSkeleton.tsx");
/* harmony import */ var _hooks_useModuleHandlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useModuleHandlers */ "./assets/src/admin/features/modules/hooks/useModuleHandlers.ts");
/* harmony import */ var _hooks_useModuleData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useModuleData */ "./assets/src/admin/features/modules/hooks/useModuleData.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constant */ "./assets/src/admin/features/modules/constant.tsx");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */








var Modules = function Modules() {
  var _useModuleHandlers = (0,_hooks_useModuleHandlers__WEBPACK_IMPORTED_MODULE_7__.useModuleHandlers)(),
    activeTab = _useModuleHandlers.activeTab,
    handleTabChange = _useModuleHandlers.handleTabChange,
    handleModuleToggle = _useModuleHandlers.handleModuleToggle;
  var _useModuleData = (0,_hooks_useModuleData__WEBPACK_IMPORTED_MODULE_8__.useModuleData)(activeTab),
    data = _useModuleData.data,
    filteredModules = _useModuleData.filteredModules,
    getSubModules = _useModuleData.getSubModules,
    getMainModuleBySlug = _useModuleData.getMainModuleBySlug;
  // Show skeleton loading if no data
  if (!data) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ModulesSkeleton__WEBPACK_IMPORTED_MODULE_6__.ModulesSkeleton, {});
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Modules", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
          tabs: _constant__WEBPACK_IMPORTED_MODULE_9__.STATIC_TABS,
          activeTab: activeTab,
          onTabChange: handleTabChange
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: filteredModules.length === 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "text-center py-8 text-gray-500",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No modules found for this category.", "wpcafe")
          }) : filteredModules.map(function (module) {
            var subModules = getSubModules(module.slug);
            var mainModule = getMainModuleBySlug(module.slug);
            var isMainModuleEnabled = (mainModule === null || mainModule === void 0 ? void 0 : mainModule.status) === "on";
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MainModule__WEBPACK_IMPORTED_MODULE_4__.MainModule, {
                module: mainModule,
                isEnabled: isMainModuleEnabled,
                onToggle: handleModuleToggle
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SubModuleList__WEBPACK_IMPORTED_MODULE_5__.SubModuleList, {
                subModules: subModules,
                onToggle: handleModuleToggle
              })]
            }, module.slug);
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modules);

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_modules_index_tsx.js.map