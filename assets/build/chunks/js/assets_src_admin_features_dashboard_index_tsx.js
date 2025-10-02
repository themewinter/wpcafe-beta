"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_dashboard_index_tsx"],{

/***/ "./assets/src/admin/features/dashboard/components/DashboardActions.tsx":
/*!*****************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/DashboardActions.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardActions: () => (/* binding */ DashboardActions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OverviewHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OverviewHeader */ "./assets/src/admin/features/dashboard/components/OverviewHeader.tsx");
/* harmony import */ var _shadcn_components_ui_advanced_date_range_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui/advanced-date-range-picker */ "./assets/src/shadcn/components/ui/advanced-date-range-picker.tsx");

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */


/**
 * Dashboard Actions Component
 *
 * Contains the branch selector and date range picker for the dashboard header.
 * This component encapsulates all the filter actions used in the dashboard overview.
 *
 * @param selectedBranch - Currently selected branch
 * @param dateRange - Current date range filter
 * @param onBranchChange - Callback when branch selection changes
 * @param onDateRangeUpdate - Callback when date range is updated
 */
var DashboardActions = function DashboardActions(_ref) {
  var selectedBranch = _ref.selectedBranch,
    dateRange = _ref.dateRange,
    onBranchChange = _ref.onBranchChange,
    onDateRangeUpdate = _ref.onDateRangeUpdate;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex items-center gap-2 flex-wrap",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OverviewHeader__WEBPACK_IMPORTED_MODULE_2__.DropdownSelect, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location", "wpcafe"),
      value: selectedBranch || "all",
      onChange: onBranchChange
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_advanced_date_range_picker__WEBPACK_IMPORTED_MODULE_3__.AdvancedDateRangePicker, {
      onUpdate: function onUpdate(_ref2) {
        var range = _ref2.range,
          rangeCompare = _ref2.rangeCompare;
        onDateRangeUpdate({
          from: range.from,
          to: range.to || range.from
        }, rangeCompare ? {
          from: rangeCompare.from,
          to: rangeCompare.to || rangeCompare.from
        } : undefined);
      },
      initialDateFrom: dateRange === null || dateRange === void 0 ? void 0 : dateRange.from,
      initialDateTo: dateRange === null || dateRange === void 0 ? void 0 : dateRange.to,
      align: "end",
      locale: "en-US" // TODO: replace it from the localize object
      ,
      showCompare: false,
      showDateInput: false,
      presetPosition: "left",
      updateButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Apply", "wpcafe")
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardActions);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/DashboardOverview.tsx":
/*!******************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/DashboardOverview.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardOverview: () => (/* binding */ DashboardOverview),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var _OverviewHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverviewHeader */ "./assets/src/admin/features/dashboard/components/OverviewHeader.tsx");
/* harmony import */ var _MetricCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MetricCard */ "./assets/src/admin/features/dashboard/components/MetricCard.tsx");
/* harmony import */ var _DashboardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardActions */ "./assets/src/admin/features/dashboard/components/DashboardActions.tsx");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useDashboardApi */ "./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */





/**
 * Dashboard Overview Component
 *
 * Displays the main dashboard metrics in a 4-column grid layout
 * with header section including title, subtitle, and filter actions.
 */
var DashboardOverview = function DashboardOverview() {
  var _useDashboardApi = (0,_hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    dateRange = _useDashboardApi.dateRange,
    selectedBranch = _useDashboardApi.selectedBranch,
    isLoading = _useDashboardApi.isLoading,
    updateDateRange = _useDashboardApi.updateDateRange,
    updateBranch = _useDashboardApi.updateBranch,
    metricsConfig = _useDashboardApi.metricsConfig,
    getOverviewData = _useDashboardApi.getOverviewData;
  // Fetch dashboard data on component mount and when date range changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var startDate = (dateRange === null || dateRange === void 0 ? void 0 : dateRange.from) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(dateRange.from, "yyyy-MM-dd") : undefined;
    var endDate = (dateRange === null || dateRange === void 0 ? void 0 : dateRange.to) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(dateRange.to, "yyyy-MM-dd") : undefined;
    getOverviewData(startDate, endDate, selectedBranch);
  }, [dateRange, selectedBranch]);
  var handleDateRangeUpdate = function handleDateRangeUpdate(newDateRange, compareRange) {
    updateDateRange(newDateRange, compareRange);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_7__.Card, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OverviewHeader__WEBPACK_IMPORTED_MODULE_4__.OverviewHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashboard Overview", "wpcafe"),
      subtitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Monitor your restaurant's key performance metrics and trends.", "wpcafe"),
      actions: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardActions__WEBPACK_IMPORTED_MODULE_6__.DashboardActions, {
        selectedBranch: selectedBranch,
        dateRange: dateRange,
        onBranchChange: updateBranch,
        onDateRangeUpdate: handleDateRangeUpdate
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      children: metricsConfig.map(function (metric, index) {
        var IconComponent = metric.iconComponent;
        var metricCard = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MetricCard__WEBPACK_IMPORTED_MODULE_5__.MetricCard, {
          title: metric.title,
          value: metric.value,
          breakdown: metric.breakdown,
          change: metric.change,
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconComponent, {}),
          iconBgColor: metric.iconBgColor,
          tooltipContent: metric.tooltipContent,
          isLoading: isLoading
        }, index); // Always show Total Revenue and Total Customers
        return metricCard;
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardOverview);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/MetricCard.tsx":
/*!***********************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/MetricCard.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricCard: () => (/* binding */ MetricCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/info.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
/* harmony import */ var _shadcn_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui/tooltip */ "./assets/src/shadcn/components/ui/tooltip.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");

/**
 * WordPress Dependencies
 */



/**
 * Internal Dependencies
 */




/**
 * MetricCard Component
 *
 * A reusable card component for displaying dashboard metrics
 * with an icon, value, title, and optional change indicator.
 */
var MetricCard = function MetricCard(_ref) {
  var title = _ref.title,
    value = _ref.value,
    breakdown = _ref.breakdown,
    change = _ref.change,
    icon = _ref.icon,
    iconBgColor = _ref.iconBgColor,
    tooltipContent = _ref.tooltipContent,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    className = _ref.className;
  var _a, _b;
  var _useModuleStatus = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_7__.useModuleStatus)(undefined),
    modulesData = _useModuleStatus.modulesData;
  var foodOrderingEnabled = ((_a = modulesData === null || modulesData === void 0 ? void 0 : modulesData.food_ordering) === null || _a === void 0 ? void 0 : _a.status) === "on";
  var reservationEnabled = ((_b = modulesData === null || modulesData === void 0 ? void 0 : modulesData.reservation) === null || _b === void 0 ? void 0 : _b.status) === "on";
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipProvider, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("bg-white rounded-lg p-6 border border-gray-200 hover:shadow-sm transition-shadow relative", className),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "absolute top-4 right-4",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("w-12 h-12 rounded-full flex items-center justify-center", iconBgColor),
          children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(icon, {
            className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("w-6 h-6")
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mb-2 pr-16",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
            className: "text-sm font-medium !text-gray-800",
            children: title
          }), tooltipContent && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipTrigger, {
              asChild: true,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: "w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer shrink-0"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipContent, {
              side: "top",
              className: "max-w-xs",
              children: tooltipContent
            })]
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mb-4",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-3xl font-bold text-gray-900", isLoading && "animate-pulse bg-gray-200 rounded h-9 w-20"),
          children: isLoading ? "" : breakdown ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_6__.AdminPrice, {
            price: value
          }) : value
        })
      }), breakdown && !isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-2 items-center mb-2 flex-wrap",
        children: [foodOrderingEnabled && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center justify-between text-sm text-gray-600 shrink-0",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Food order's- ", "wpcafe")
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_6__.AdminPrice, {
            price: breakdown.orders
          })]
        }), reservationEnabled && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center justify-between text-sm text-gray-600 shrink-0",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation's- ", "wpcafe")
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_6__.AdminPrice, {
            price: breakdown.reservations
          })]
        })]
      }), isLoading && title === (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Revenue", "wpcafe") && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-4 space-y-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "animate-pulse bg-gray-200 rounded h-4 w-20"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "animate-pulse bg-gray-200 rounded h-4 w-12"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "animate-pulse bg-gray-200 rounded h-4 w-24"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "animate-pulse bg-gray-200 rounded h-4 w-12"
          })]
        })]
      }), change && !isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("px-2 py-1 rounded text-xs font-medium", change.isPositive !== false ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"),
          children: [change.isPositive !== false ? "+" : "", change.value]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-xs text-gray-500",
          children: change.label
        })]
      }), isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "animate-pulse bg-gray-200 rounded h-5 w-12"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "animate-pulse bg-gray-200 rounded h-3 w-24"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricCard);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/OrdersTable.tsx":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/OrdersTable.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersTable: () => (/* binding */ OrdersTable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shopping-cart.js");
/* harmony import */ var _common_components_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components/table */ "./assets/src/common/components/table/index.ts");
/* harmony import */ var _hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useDashboardApi */ "./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts");
/* harmony import */ var _columns_orderTableColumns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns/orderTableColumns */ "./assets/src/admin/features/dashboard/components/columns/orderTableColumns.tsx");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



/**
 * Orders Table Component
 *
 * Displays a table of food orders with customer information, items count,
 * total amount, and order status. Uses API data from the dashboard store.
 */
var OrdersTable = function OrdersTable(_ref) {
  var _ref$showViewAllButto = _ref.showViewAllButton,
    showViewAllButton = _ref$showViewAllButto === void 0 ? true : _ref$showViewAllButto;
  var _useDashboardApi = (0,_hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    orders = _useDashboardApi.orders,
    getFoodOrdersData = _useDashboardApi.getFoodOrdersData;
  // Fetch orders data on component mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getFoodOrdersData();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "bg-white rounded-lg border border-gray-200 w-full min-w-0",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center justify-between p-4 border-b border-gray-200",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: "!text-lg font-semibold text-gray-900 !my-0",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Food Orders", "wpcafe")
      }), showViewAllButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        className: "text-sm !text-orange-500 hover:text-orange-600 !font-semibold cursor-pointer",
        // open woocommerce orders page in new tab
        onClick: function onClick() {
          window.open("/wp-admin/admin.php?post_type=wc-orders", "_blank");
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("View All", "wpcafe")
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x-auto",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table__WEBPACK_IMPORTED_MODULE_4__.Table, {
        dataSource: orders.data,
        columns: _columns_orderTableColumns__WEBPACK_IMPORTED_MODULE_6__.ORDER_TABLE_COLUMNS,
        rowKey: function rowKey(record) {
          return "order-".concat(record.order_id);
        },
        loading: orders.isLoading,
        error: orders.error,
        pagination: false,
        rowSelection: false,
        className: "rounded-t-none border-t-0",
        loadingSkeleton: {
          rows: 6,
          columns: 5
        },
        emptyScreen: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No food orders found", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New orders will appear here once customers place them.", "wpcafe"),
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-10 h-10 text-gray-500 dark:text-gray-400"
          }),
          className: "h-[360px]"
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersTable);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/OverviewHeader.tsx":
/*!***************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/OverviewHeader.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownSelect: () => (/* binding */ DropdownSelect),
/* harmony export */   OverviewHeader: () => (/* binding */ OverviewHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components_form_input_SelectBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components/form-input/SelectBox */ "./assets/src/common/components/form-input/SelectBox.tsx");
/* harmony import */ var _admin_features_location_hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/features/location/hooks/useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
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
 * Internal Dependencies
 */





var DropdownSelect = function DropdownSelect(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    className = _ref.className;
  var _useLocationApi = (0,_admin_features_location_hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    getLocations = _useLocationApi.getLocations;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_8__.stores.location).getLocationState();
    }, []),
    locationList = _useSelect.locationList;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (locationList) {
      return;
    }
    getLocations();
  }, [getLocations]);
  // Only show if there are more than 2 locations
  if (!locationList || locationList.length < 2) {
    return null;
  }
  // Transform location data to SelectOption format
  var locationOptions = locationList.map(function (location) {
    return {
      value: location.restaurants_name,
      label: location.restaurants_name
    };
  });
  // Add "All" option at the beginning
  var allOptions = [{
    value: "all",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("All Locations", "wpcafe")
  }].concat(_toConsumableArray(locationOptions));
  var handleLocationChange = function handleLocationChange(newValue) {
    if (typeof newValue === "string" && onChange) {
      onChange(newValue);
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center gap-2", className),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
      className: "text-sm text-gray-600",
      children: [label, ":"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_form_input_SelectBox__WEBPACK_IMPORTED_MODULE_6__.SelectBox, {
      options: allOptions,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select location", "wpcafe"),
      defaultValue: value,
      onChange: handleLocationChange,
      createNewOption: false,
      valueType: "string",
      isMulti: false
    })]
  });
};
/**
 * OverviewHeader Component
 *
 * A reusable header component for dashboard sections
 * with title, subtitle, and action area.
 */
var OverviewHeader = function OverviewHeader(_ref2) {
  var title = _ref2.title,
    subtitle = _ref2.subtitle,
    actions = _ref2.actions,
    className = _ref2.className;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center flex-wrap justify-between mb-6", className),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: "!text-lg font-bold text-gray-900 !my-0",
        children: title
      }), subtitle && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-sm text-gray-500",
        children: subtitle
      })]
    }), actions && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "flex items-center gap-4",
      children: actions
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewHeader);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/ReservationsTable.tsx":
/*!******************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/ReservationsTable.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationsTable: () => (/* binding */ ReservationsTable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useDashboardApi */ "./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts");
/* harmony import */ var _common_components_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components/table */ "./assets/src/common/components/table/index.ts");
/* harmony import */ var _columns_reservationTableColumns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./columns/reservationTableColumns */ "./assets/src/admin/features/dashboard/components/columns/reservationTableColumns.tsx");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */



/**
 * Reservations Table Component
 *
 * Displays a table of restaurant reservations with customer information,
 * reservation date/time, seats count, and status. Uses API data from the dashboard store.
 */
var ReservationsTable = function ReservationsTable(_ref) {
  var _ref$showViewAllButto = _ref.showViewAllButton,
    showViewAllButton = _ref$showViewAllButto === void 0 ? true : _ref$showViewAllButto;
  var _useDashboardApi = (0,_hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    reservations = _useDashboardApi.reservations,
    getReservationsData = _useDashboardApi.getReservationsData;
  // Fetch reservations data on component mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getReservationsData();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "bg-white rounded-lg border border-gray-200 w-full min-w-0",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center justify-between p-4 border-b border-gray-200",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: "!text-lg font-semibold text-gray-900 !my-0",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation list", "wpcafe")
      }), showViewAllButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/reservations",
        className: "!text-sm !text-orange-500 !hover:text-orange-600 font-semibold",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("View All", "wpcafe")
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x-auto",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table__WEBPACK_IMPORTED_MODULE_6__.Table, {
        dataSource: reservations.data,
        columns: _columns_reservationTableColumns__WEBPACK_IMPORTED_MODULE_7__.RESERVATION_TABLE_COLUMNS,
        rowKey: function rowKey(record) {
          return "".concat(record.id, "-").concat(record.name, "-").concat(record.date);
        },
        loading: reservations.isLoading,
        error: reservations.error,
        pagination: false,
        rowSelection: false,
        className: "rounded-t-none border-t-0",
        loadingSkeleton: {
          rows: 6,
          columns: 5
        },
        emptyScreen: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No reservations found", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New reservations will appear here once customers make bookings.", "wpcafe"),
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-10 h-10 text-gray-500 dark:text-gray-400"
          }),
          className: "h-[360px]"
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationsTable);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/TopSalesTable.tsx":
/*!**************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/TopSalesTable.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopSalesTable: () => (/* binding */ TopSalesTable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-line.js");
/* harmony import */ var _hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useDashboardApi */ "./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts");
/* harmony import */ var _common_components_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/table */ "./assets/src/common/components/table/index.ts");
/* harmony import */ var _columns_TopSalesColumns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./columns/TopSalesColumns */ "./assets/src/admin/features/dashboard/components/columns/TopSalesColumns.tsx");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



/**
 * Reservations Table Component
 *
 * Displays a table of restaurant reservations with customer information,
 * reservation date/time, seats count, and status. Uses API data from the dashboard store.
 */
var TopSalesTable = function TopSalesTable(_ref) {
  var _ref$showViewAllButto = _ref.showViewAllButton,
    showViewAllButton = _ref$showViewAllButto === void 0 ? true : _ref$showViewAllButto;
  var _useDashboardApi = (0,_hooks_useDashboardApi__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    topSales = _useDashboardApi.topSales,
    getTopSalesData = _useDashboardApi.getTopSalesData;
  // Fetch reservations data on component mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getTopSalesData();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "bg-white rounded-lg border border-gray-200 w-full min-w-0",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center justify-between p-4 border-b border-gray-200",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
        className: "!text-lg font-semibold text-gray-900 !my-0",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top Sales", "wpcafe")
      }), showViewAllButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "/wp-admin/admin.php?page=wc-orders",
        target: "_blank",
        className: "!text-sm !text-orange-500 !hover:text-orange-600 font-semibold",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("View All", "wpcafe")
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "overflow-x-auto",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table__WEBPACK_IMPORTED_MODULE_5__.Table, {
        dataSource: topSales.data,
        columns: _columns_TopSalesColumns__WEBPACK_IMPORTED_MODULE_6__.TOP_SALES_TABLE_COLUMNS,
        rowKey: function rowKey(record) {
          return "".concat(record.product_id);
        },
        loading: topSales.isLoading,
        error: topSales.error,
        pagination: false,
        rowSelection: false,
        className: "rounded-t-none border-t-0",
        loadingSkeleton: {
          rows: 6,
          columns: 5
        },
        emptyScreen: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No top sales found", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("New top sales will appear here once customers make purchases frequently.", "wpcafe"),
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-10 h-10 text-gray-500 dark:text-gray-400"
          }),
          className: "h-[360px]"
        }
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopSalesTable);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/columns/TopSalesColumns.tsx":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/columns/TopSalesColumns.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOP_SALES_TABLE_COLUMNS: () => (/* binding */ TOP_SALES_TABLE_COLUMNS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress Dependencies
 */

/**
 * Order table column definitions
 * product name, category, quantity, total revenue
 */
var TOP_SALES_TABLE_COLUMNS = [{
  key: "product_name",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Product Id", "wpcafe"),
  render: function render(_, record) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "font-medium text-gray-900",
      children: ["#", record.product_name]
    });
  }
}, {
  key: "category",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Category", "wpcafe"),
  dataIndex: "category"
}, {
  key: "quantity",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Quantity", "wpcafe"),
  dataIndex: "quantity"
}, {
  key: "total_revenue",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total", "wpcafe"),
  render: function render(_, record) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "font-medium text-gray-900",
      children: ["$", record.total_revenue.toFixed(2)]
    });
  }
}];

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/columns/orderTableColumns.tsx":
/*!**************************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/columns/orderTableColumns.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ORDER_TABLE_COLUMNS: () => (/* binding */ ORDER_TABLE_COLUMNS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_StatusBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/StatusBadge */ "./assets/src/common/components/StatusBadge.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant */ "./assets/src/admin/features/dashboard/constant.ts");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */



/**
 * Order table column definitions
 */
var ORDER_TABLE_COLUMNS = [{
  key: "orderId",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Order Id", "wpcafe"),
  render: function render(_, record) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
      className: "font-medium text-gray-900",
      children: ["#", record.order_id]
    });
  }
}, {
  key: "customer",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customer", "wpcafe"),
  dataIndex: "customer_name"
}, {
  key: "items",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Items", "wpcafe"),
  dataIndex: "items_count"
}, {
  key: "total",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total", "wpcafe"),
  render: function render(_, record) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.AdminPrice, {
      className: "font-medium text-gray-900",
      price: record.total_amount
    });
  }
}, {
  key: "status",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Status", "wpcafe"),
  render: function render(_, record) {
    var statusInfo = (0,_constant__WEBPACK_IMPORTED_MODULE_3__.getOrderStatus)(record.status);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_StatusBadge__WEBPACK_IMPORTED_MODULE_2__.StatusBadge, {
      label: statusInfo.label,
      color: statusInfo.color
    });
  }
}];

/***/ }),

/***/ "./assets/src/admin/features/dashboard/components/columns/reservationTableColumns.tsx":
/*!********************************************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/components/columns/reservationTableColumns.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESERVATION_TABLE_COLUMNS: () => (/* binding */ RESERVATION_TABLE_COLUMNS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_StatusBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components/StatusBadge */ "./assets/src/common/components/StatusBadge.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant */ "./assets/src/admin/features/dashboard/constant.ts");

/**
 * Wordpress dependencies
 */

/**
 * Internal imports
 */


/**
 * Reservation table column definitions
 */
var RESERVATION_TABLE_COLUMNS = [{
  key: "reservationDate",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation date", "wpcafe"),
  render: function render(_, record) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "font-medium",
        children: record.date || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("N/A", "wpcafe")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "text-sm text-gray-500",
        children: record.start_time || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("N/A", "wpcafe")
      })]
    });
  }
}, {
  key: "name",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("name", "wpcafe"),
  dataIndex: "name"
}, {
  key: "seats",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("seats", "wpcafe"),
  render: function render(_, record) {
    return record.total_guest || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("N/A", "wpcafe");
  }
}, {
  key: "email",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("email", "wpcafe"),
  render: function render(_, record) {
    return record.email || record.phone || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("N/A", "wpcafe");
  }
}, {
  key: "status",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Status", "wpcafe"),
  render: function render(_, record) {
    var statusInfo = (0,_constant__WEBPACK_IMPORTED_MODULE_3__.getReservationStatus)(record === null || record === void 0 ? void 0 : record.status);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_StatusBadge__WEBPACK_IMPORTED_MODULE_2__.StatusBadge, {
      label: statusInfo.label,
      color: statusInfo.color
    });
  }
}];

/***/ }),

/***/ "./assets/src/admin/features/dashboard/constant.ts":
/*!*********************************************************!*\
  !*** ./assets/src/admin/features/dashboard/constant.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrderStatus: () => (/* binding */ getOrderStatus),
/* harmony export */   getReservationStatus: () => (/* binding */ getReservationStatus)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Reservation status mappings
 */
var getReservationStatus = function getReservationStatus(status) {
  var statusMappings = {
    pending: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pending", "wpcafe"),
      color: "bg-yellow-500"
    },
    confirmed: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Confirmed", "wpcafe"),
      color: "bg-green-500"
    },
    cancelled: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cancelled", "wpcafe"),
      color: "bg-red-500"
    },
    completed: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Completed", "wpcafe"),
      color: "bg-blue-500"
    },
    rejected: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rejected", "wpcafe"),
      color: "bg-gray-500"
    }
  };
  return statusMappings[status] || {
    label: status || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unknown", "wpcafe"),
    color: "bg-gray-400"
  };
};
/**
 * Order status mappings
 */
var getOrderStatus = function getOrderStatus(status) {
  var statusMappings = {
    pending: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pending", "wpcafe"),
      color: "bg-yellow-500"
    },
    processing: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Processing", "wpcafe"),
      color: "bg-blue-500"
    },
    completed: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Completed", "wpcafe"),
      color: "bg-green-500"
    },
    cancelled: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cancelled", "wpcafe"),
      color: "bg-red-500"
    },
    refunded: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Refunded", "wpcafe"),
      color: "bg-purple-500"
    },
    delivered: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delivered", "wpcafe"),
      color: "bg-teal-500"
    },
    "on-hold": {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("On Hold", "wpcafe"),
      color: "bg-orange-500"
    },
    failed: {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Failed", "wpcafe"),
      color: "bg-red-600"
    }
  };
  return statusMappings[status] || {
    label: status || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Unknown", "wpcafe"),
    color: "bg-gray-400"
  };
};

/***/ }),

/***/ "./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts":
/*!**********************************************************************!*\
  !*** ./assets/src/admin/features/dashboard/hooks/useDashboardApi.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/icons */ "./assets/src/common/icons/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ "./assets/src/api/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
 * WordPress Dependencies
 */


/**
 * Internal dependencies
 */



var useDashboardApi = function useDashboardApi() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.dashboard),
    setDashboardState = _useDispatch.setDashboardState;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.dashboard).getDashboardState();
    }, []),
    overview = _useSelect.overview,
    dateRange = _useSelect.dateRange,
    selectedBranch = _useSelect.selectedBranch,
    isLoading = _useSelect.isLoading,
    reservations = _useSelect.reservations,
    orders = _useSelect.orders,
    topSales = _useSelect.topSales;
  var _useSelect2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.modules).getModulesState();
    }, []),
    modulesData = _useSelect2.data,
    isLoadingModules = _useSelect2.loading;
  /**
   * Update date range filter
   */
  var updateDateRange = function updateDateRange(dateRange, compareRange) {
    setDashboardState({
      dateRange: dateRange,
      compareRange: compareRange || null
    });
  };
  /**
   * Update selected branch
   */
  var updateBranch = function updateBranch(branch) {
    setDashboardState({
      selectedBranch: branch
    });
  };
  /**
   * Generate metrics configuration with dynamic data
   */
  var baseConfig = [{
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Revenue", "wpcafe"),
    module: "",
    value: (_a = overview === null || overview === void 0 ? void 0 : overview.total_revenue) === null || _a === void 0 ? void 0 : _a.total,
    breakdown: {
      orders: (_b = overview === null || overview === void 0 ? void 0 : overview.total_revenue) === null || _b === void 0 ? void 0 : _b.orders_revenue,
      reservations: (_c = overview === null || overview === void 0 ? void 0 : overview.total_revenue) === null || _c === void 0 ? void 0 : _c.reservations_revenue
    },
    change: {
      value: "".concat(((_d = overview === null || overview === void 0 ? void 0 : overview.total_revenue) === null || _d === void 0 ? void 0 : _d.change_percentage) || 0, "%"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("since last period", "wpcafe"),
      isPositive: ((_e = overview === null || overview === void 0 ? void 0 : overview.total_revenue) === null || _e === void 0 ? void 0 : _e.change_direction) === "up"
    },
    iconComponent: _common_icons__WEBPACK_IMPORTED_MODULE_2__.RevenueIcon,
    iconBgColor: "bg-[#FF5D87]",
    tooltipContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total revenue generated from all orders including food orders and reservations during the selected time period.", "wpcafe")
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Customers", "wpcafe"),
    module: "",
    value: ((_g = (_f = overview === null || overview === void 0 ? void 0 : overview.total_customers) === null || _f === void 0 ? void 0 : _f.total) === null || _g === void 0 ? void 0 : _g.toString()) || "0",
    change: {
      value: "".concat(((_h = overview === null || overview === void 0 ? void 0 : overview.total_customers) === null || _h === void 0 ? void 0 : _h.change_percentage) || 0, "%"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("since last period", "wpcafe"),
      isPositive: ((_j = overview === null || overview === void 0 ? void 0 : overview.total_customers) === null || _j === void 0 ? void 0 : _j.change_direction) === "up"
    },
    iconComponent: _common_icons__WEBPACK_IMPORTED_MODULE_2__.CustomersIcon,
    iconBgColor: "bg-[#9333E9]",
    tooltipContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The total number of unique customers who placed food orders or made table reservations.", "wpcafe")
  }];
  var moduleDependentMetrics = [{
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Orders", "wpcafe"),
    module: "food_ordering",
    value: ((_l = (_k = overview === null || overview === void 0 ? void 0 : overview.total_orders) === null || _k === void 0 ? void 0 : _k.total) === null || _l === void 0 ? void 0 : _l.toString()) || "0",
    change: {
      value: "".concat(((_m = overview === null || overview === void 0 ? void 0 : overview.total_orders) === null || _m === void 0 ? void 0 : _m.change_percentage) || 0, "%"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("since last period", "wpcafe"),
      isPositive: ((_o = overview === null || overview === void 0 ? void 0 : overview.total_orders) === null || _o === void 0 ? void 0 : _o.change_direction) === "up"
    },
    iconComponent: _common_icons__WEBPACK_IMPORTED_MODULE_2__.OrdersIcon,
    iconBgColor: "bg-[#FF9900]",
    tooltipContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The total number of food orders, including pickup, delivery, and food ordered during reservations.", "wpcafe")
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Reservations", "wpcafe"),
    module: "reservation",
    value: ((_q = (_p = overview === null || overview === void 0 ? void 0 : overview.total_reservations) === null || _p === void 0 ? void 0 : _p.total) === null || _q === void 0 ? void 0 : _q.toString()) || "0",
    change: {
      value: "".concat(((_r = overview === null || overview === void 0 ? void 0 : overview.total_reservations) === null || _r === void 0 ? void 0 : _r.change_percentage) || 0, "%"),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("since last period", "wpcafe"),
      isPositive: ((_s = overview === null || overview === void 0 ? void 0 : overview.total_reservations) === null || _s === void 0 ? void 0 : _s.change_direction) === "up"
    },
    iconComponent: _common_icons__WEBPACK_IMPORTED_MODULE_2__.TableReservationIcon,
    iconBgColor: "bg-[#417DFF]",
    tooltipContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The total count of table reservations, excluding pickup and delivery orders.", "wpcafe")
  }];
  /*
   * Filter module-dependent metrics based on enabled modules
   * Always show base metrics (Total Revenue, Total Customers) regardless of module status
   */
  var enabledModuleMetrics = moduleDependentMetrics.filter(function (metric) {
    var _a;
    return ((_a = modulesData === null || modulesData === void 0 ? void 0 : modulesData[metric.module]) === null || _a === void 0 ? void 0 : _a.status) === "on";
  });
  /**
   * Simplified function to get overview data if not already loaded
   */
  var getOverviewData = function getOverviewData(startDate, endDate, location) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      var params, response, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!isLoading) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            setDashboardState({
              isLoading: true
            });
            params = {};
            if (startDate) params.start_date = startDate;
            if (endDate) params.end_date = endDate;
            if (location) params.location = location;
            _context.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].dashboard.getDashboardOverviewData(params);
          case 2:
            response = _context.v;
            if (response.success) {
              setDashboardState({
                overview: response.data,
                isLoading: false
              });
            }
            return _context.a(2, response);
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("Error fetching dashboard overview:", _t);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
  };
  /**
   * Fetch reservations data from API
   */
  var getReservationsData = function getReservationsData() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      var response, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!reservations.isLoading) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            setDashboardState({
              reservations: Object.assign(Object.assign({}, reservations), {
                isLoading: true,
                error: null
              })
            });
            _context2.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].dashboard.getReservations();
          case 2:
            response = _context2.v;
            if (response.success) {
              setDashboardState({
                reservations: {
                  data: response.data,
                  isLoading: false,
                  error: null
                }
              });
            } else {
              setDashboardState({
                reservations: {
                  data: [],
                  isLoading: false,
                  error: response.message || "Failed to fetch reservations"
                }
              });
            }
            return _context2.a(2, response);
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("Error fetching reservations:", _t2);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
  };
  /**
   * Fetch food orders data from API
   */
  var getFoodOrdersData = function getFoodOrdersData() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
      var _a, response, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!orders.isLoading) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.p = 1;
            setDashboardState({
              orders: Object.assign(Object.assign({}, orders), {
                isLoading: true,
                error: null
              })
            });
            _context3.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].dashboard.getFoodOrders();
          case 2:
            response = _context3.v;
            if (response.success) {
              setDashboardState({
                orders: {
                  data: ((_a = response.data) === null || _a === void 0 ? void 0 : _a.orders) || [],
                  isLoading: false,
                  error: null
                }
              });
            }
            return _context3.a(2, response);
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            console.error("Error fetching food orders:", _t3);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
  };
  /**
   * Fetch top sales data from API
   */
  var getTopSalesData = function getTopSalesData() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
      var _a, response, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!isLoading) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            setDashboardState({
              isLoading: true
            });
            _context4.n = 2;
            return _api__WEBPACK_IMPORTED_MODULE_3__["default"].dashboard.getTopSales();
          case 2:
            response = _context4.v;
            if (response.success) {
              setDashboardState({
                topSales: ((_a = response.data) === null || _a === void 0 ? void 0 : _a.top_sales) || [],
                isLoading: false
              });
            }
            return _context4.a(2, response);
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.error("Error fetching top sales:", _t4);
          case 4:
            _context4.p = 4;
            setDashboardState({
              isLoading: false
            });
            return _context4.f(4);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 3, 4, 5]]);
    }));
  };
  return {
    // Current state
    overview: overview,
    dateRange: dateRange,
    selectedBranch: selectedBranch,
    isLoading: isLoading || isLoadingModules || false,
    reservations: reservations,
    orders: orders,
    topSales: topSales,
    // Computed data - always show base metrics + only enabled module metrics
    metricsConfig: [].concat(baseConfig, _toConsumableArray(enabledModuleMetrics)),
    // Actions
    updateDateRange: updateDateRange,
    updateBranch: updateBranch,
    // getDashboardOverviewData,
    getOverviewData: getOverviewData,
    // New simplified function
    getReservationsData: getReservationsData,
    // Reservations fetch function
    getFoodOrdersData: getFoodOrdersData,
    // Food orders fetch function
    getTopSalesData: getTopSalesData // Top sales fetch function
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDashboardApi);

/***/ }),

/***/ "./assets/src/admin/features/dashboard/index.tsx":
/*!*******************************************************!*\
  !*** ./assets/src/admin/features/dashboard/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DashboardOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DashboardOverview */ "./assets/src/admin/features/dashboard/components/DashboardOverview.tsx");
/* harmony import */ var _components_OrdersTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OrdersTable */ "./assets/src/admin/features/dashboard/components/OrdersTable.tsx");
/* harmony import */ var _components_ReservationsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ReservationsTable */ "./assets/src/admin/features/dashboard/components/ReservationsTable.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_hooks_useModuleStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/hooks/useModuleStatus */ "./assets/src/common/hooks/useModuleStatus.ts");
/* harmony import */ var _components_TopSalesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TopSalesTable */ "./assets/src/admin/features/dashboard/components/TopSalesTable.tsx");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






var Dashboard = function Dashboard() {
  var foodOrdering = (0,_common_hooks_useModuleStatus__WEBPACK_IMPORTED_MODULE_6__.useModuleStatus)("food_ordering");
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashboard", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components__WEBPACK_IMPORTED_MODULE_5__.Container, {
      className: "space-y-4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_DashboardOverview__WEBPACK_IMPORTED_MODULE_2__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: !(foodOrdering === null || foodOrdering === void 0 ? void 0 : foodOrdering.isEnabled) ? "grid gap-4" : "grid gap-4 lg:grid-cols-2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.ModuleConditional, {
          moduleName: "food_ordering",
          skeletonClassName: "h-[420px]",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_OrdersTable__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.ModuleConditional, {
          moduleName: "reservation",
          skeletonClassName: "h-[420px]",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ReservationsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {})
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.ModuleConditional, {
        moduleName: "food_ordering",
        skeletonClassName: "h-[420px]",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TopSalesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {})
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./assets/src/admin/features/location/hooks/useLocationApi.ts":
/*!********************************************************************!*\
  !*** ./assets/src/admin/features/location/hooks/useLocationApi.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api */ "./assets/src/api/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/router/routeDefinition */ "./assets/src/admin/router/routeDefinition.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var _a;
/**
 * WordPress Dependencies
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var _ref = ((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.globalConstant) || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.pagination,
  pagination = _ref.pagination;
/**
 * Custom hook for managing location-related API operations in WordPress.
 * Provides functions to create, update, fetch, duplicate, and delete locations.
 */
function useLocationApi() {
  var _this = this;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  // Access location states from the store
  var locationStates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location).getLocationState();
  }, []);
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location),
    setLocationState = _useDispatch.setLocationState;
  var searchQuery = locationStates.searchQuery,
    total = locationStates.total;
  /**
   * Fetches locations based on a search query and pagination.
   */
  var getLocations = function getLocations() {
    for (var _len = arguments.length, args_1 = new Array(_len), _key = 0; _key < _len; _key++) {
      args_1[_key] = arguments[_key];
    }
    return __awaiter(_this, [].concat(args_1), void 0, function () {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_regenerator().m(function _callee() {
        var _a, _b, _c, _d, params, res, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              // Handle reset filter case

              if (query === null || query === void 0 ? void 0 : query.resetFilter) {
                params = {
                  paged: 1,
                  per_page: (pagination === null || pagination === void 0 ? void 0 : pagination.per_page) || 10
                };
              } else {
                // Only merge queries for non-reset cases
                params = Object.assign(Object.assign({}, searchQuery), query);
              }
              setLocationState({
                isFiltering: true,
                error: null
              });
              _context.p = 1;
              _context.n = 2;
              return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.getLocations(params);
            case 2:
              res = _context.v;
              if (res === null || res === void 0 ? void 0 : res.success) {
                setLocationState({
                  locationList: ((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.items) || [],
                  total: ((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.total) || 0,
                  searchQuery: Object.assign(Object.assign({}, params), {
                    paged: ((_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.current_page) || params.paged || 1
                  })
                });
              }
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Error fetching locations:", _t);
              setLocationState({
                error: "Failed to fetch locations",
                isFiltering: false
              });
            case 4:
              _context.p = 4;
              setLocationState({
                isFiltering: false
              });
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      })();
    });
  };
  /**
   * Deletes a single location by ID.
   */
  var deleteLocation = function deleteLocation(id) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      var _a, res, _select$getLocationSt, currentLocationList, currentTotal, updatedLocationList, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.deleteLocation(id);
          case 1:
            res = _context2.v;
            if (res === null || res === void 0 ? void 0 : res.success) {
              // Get latest location list from store
              _select$getLocationSt = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location).getLocationState(), currentLocationList = _select$getLocationSt.locationList, currentTotal = _select$getLocationSt.total; // Update state by filtering out the deleted location
              updatedLocationList = currentLocationList === null || currentLocationList === void 0 ? void 0 : currentLocationList.filter(function (item) {
                return item.term_id !== id;
              });
              setLocationState({
                locationList: updatedLocationList,
                total: currentTotal - 1
              });
            }
            return _context2.a(2, res);
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            console.error("Error deleting location:", _t2);
            setLocationState({
              error: "Failed to delete location"
            });
            throw _t2;
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
  };
  /**
   * Deletes multiple locations by their IDs.
   */
  var bulkDeleteLocations = function bulkDeleteLocations() {
    for (var _len2 = arguments.length, args_1 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args_1[_key2] = arguments[_key2];
    }
    return __awaiter(_this, [].concat(args_1), void 0, function () {
      var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return /*#__PURE__*/_regenerator().m(function _callee3() {
        var _a, res, _select$getLocationSt2, currentLocationList, currentTotal, updatedLocationList, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.bulkDeleteLocations(ids);
            case 1:
              res = _context3.v;
              if (res === null || res === void 0 ? void 0 : res.success) {
                // Get latest location list from store
                _select$getLocationSt2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location).getLocationState(), currentLocationList = _select$getLocationSt2.locationList, currentTotal = _select$getLocationSt2.total; // Update state by filtering out the deleted locations
                updatedLocationList = currentLocationList.filter(function (item) {
                  return !ids.includes(item.term_id);
                });
                setLocationState({
                  locationList: updatedLocationList,
                  total: currentTotal - ids.length
                });
              }
              return _context3.a(2, res);
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("Error bulk deleting locations:", _t3);
              setLocationState({
                error: "Failed to delete locations"
              });
              throw _t3;
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      })();
    });
  };
  /**
   * Handles pagination changes.
   */
  var onPaginationChange = function onPaginationChange(paged, per_page) {
    setLocationState({
      searchQuery: Object.assign(Object.assign({}, searchQuery), {
        paged: paged,
        per_page: per_page
      })
    });
    getLocations({
      paged: paged,
      per_page: per_page
    });
  };
  /**
   * Gets a single location by ID and updates the state
   */
  var getSingleLocation = function getSingleLocation(id) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
      var _a, res, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setLocationState({
              isFiltering: true,
              error: null
            });
            _context4.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.getSingleLocation(id);
          case 1:
            res = _context4.v;
            if (!(res === null || res === void 0 ? void 0 : res.success)) {
              _context4.n = 2;
              break;
            }
            setLocationState({
              singleLocation: res === null || res === void 0 ? void 0 : res.data,
              isFiltering: false
            });
            return _context4.a(2, res === null || res === void 0 ? void 0 : res.data);
          case 2:
            _context4.n = 4;
            break;
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.error("Error fetching single location:", _t4);
            setLocationState({
              error: "Failed to fetch location",
              isFiltering: false
            });
          case 4:
            _context4.p = 4;
            setLocationState({
              isFiltering: false
            });
            return _context4.f(4);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 3, 4, 5]]);
    }));
  };
  /**
   * Creates a new location
   */
  var createLocation = function createLocation(values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
      var _a, _b, res, _select$getLocationSt3, currentLocationList, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setLocationState({
              isFiltering: true,
              error: null
            });
            _context5.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.createLocation(Object.assign(Object.assign({}, values), {
              status: "publish"
            }));
          case 1:
            res = _context5.v;
            if (!(res === null || res === void 0 ? void 0 : res.success)) {
              _context5.n = 2;
              break;
            }
            // Get latest location list from store
            _select$getLocationSt3 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location).getLocationState(), currentLocationList = _select$getLocationSt3.locationList;
            setLocationState({
              locationList: [res === null || res === void 0 ? void 0 : res.data].concat(_toConsumableArray(currentLocationList || [])),
              total: total + 1,
              singleLocation: res === null || res === void 0 ? void 0 : res.data,
              isFiltering: false
            });
            navigate("".concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__.LOCATION_PATH, "/update/").concat((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.term_id));
            return _context5.a(2, res);
          case 2:
            return _context5.a(2, res);
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            console.error("Error creating location:", _t5);
            setLocationState({
              error: "Failed to create location",
              isFiltering: false
            });
            throw _t5;
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 3]]);
    }));
  };
  /**
   * Updates an existing location
   */
  var updateLocation = function updateLocation(id, values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
      var _a, res, _select$getLocationSt4, currentLocationList, updatedList, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setLocationState({
              isFiltering: true,
              updatingLocationId: id,
              error: null
            });
            _context6.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.updateLocation(id, values);
          case 1:
            res = _context6.v;
            if (!(res === null || res === void 0 ? void 0 : res.success)) {
              _context6.n = 2;
              break;
            }
            // Get latest location list from store
            _select$getLocationSt4 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.location).getLocationState(), currentLocationList = _select$getLocationSt4.locationList; // Update the location in the list
            updatedList = currentLocationList === null || currentLocationList === void 0 ? void 0 : currentLocationList.map(function (location) {
              var _a;
              return location.term_id === ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.term_id) ? res === null || res === void 0 ? void 0 : res.data : location;
            });
            setLocationState({
              locationList: updatedList
            });
            return _context6.a(2, res);
          case 2:
            return _context6.a(2, res);
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            console.error("Error updating location:", _t6);
            setLocationState({
              error: "Failed to update location",
              isFiltering: false
            });
            throw _t6;
          case 4:
            _context6.p = 4;
            setLocationState({
              isFiltering: false,
              updatingLocationId: null
            });
            return _context6.f(4);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3, 4, 5]]);
    }));
  };
  /**
   * Clears single location data from store
   */
  var clearSingleLocation = function clearSingleLocation() {
    setLocationState({
      singleLocation: null
    });
  };
  // Return an object containing all location API functions and state
  return {
    // API Functions
    getLocations: getLocations,
    getSingleLocation: getSingleLocation,
    createLocation: createLocation,
    updateLocation: updateLocation,
    deleteLocation: deleteLocation,
    bulkDeleteLocations: bulkDeleteLocations,
    onPaginationChange: onPaginationChange,
    clearSingleLocation: clearSingleLocation
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocationApi);

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chart-line.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chart-line.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChartLine)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chart-line", __iconNode);


//# sourceMappingURL=chart-line.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/shopping-cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/shopping-cart.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ShoppingCart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("shopping-cart", __iconNode);


//# sourceMappingURL=shopping-cart.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_dashboard_index_tsx.js.map