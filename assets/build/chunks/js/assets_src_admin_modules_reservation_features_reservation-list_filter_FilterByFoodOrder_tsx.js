"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_reservation-list_filter_FilterByFoodOrder_tsx"],{

/***/ "../wpcafe-pro/assets/src/api/api-base.ts":
/*!************************************************!*\
  !*** ../wpcafe-pro/assets/src/api/api-base.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiBase)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
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

/**
 * Function to handle notifications based on API response.
 * @param res - API response object.
 * @param method - HTTP method used in the request.
 */
const notify = ({
  res,
  method
}) => {
  var _a, _b, _c, _d, _e, _f;
  if (method !== "GET") {
    // Handle regular API responses which are wrapped in a common response format
    const type = (res === null || res === void 0 ? void 0 : res.success) ? "success" : "error";
    (_c = (_b = (_a = window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.doAction) === null || _c === void 0 ? void 0 : _c.call(_b, "notification", {
      type,
      message: res === null || res === void 0 ? void 0 : res.message
    });
  } else if (method === "GET" && !(res === null || res === void 0 ? void 0 : res.success)) {
    if (Array.isArray(res)) return;
    (_f = (_e = (_d = window.wp) === null || _d === void 0 ? void 0 : _d.hooks) === null || _e === void 0 ? void 0 : _e.doAction) === null || _f === void 0 ? void 0 : _f.call(_e, "notification", {
      type: "error",
      message: res === null || res === void 0 ? void 0 : res.message
    });
  }
};
class ApiBase {
  constructor(prefix = "") {
    Object.defineProperty(this, "apiFetch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.apiFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default());
    this.prefix = prefix;
  }
  /**
   * Add prefix to the path.
   * @param path - The endpoint path.
   * @returns The full path with the prefix.
   */
  addPrefix(path) {
    return path ? `${this.prefix}/${path}` : this.prefix;
  }
  /**
   * Build query parameters string from an object.
   * @param params - The query parameters.
   * @returns The query string.
   */
  buildQueryParams(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return queryString ? `?${queryString}` : "";
  }
  /**
   * Send API request.
   * @param params - The request options.
   * @returns The API response in JSON format.
   */
  sendRequest() {
    return __awaiter(this, arguments, void 0, function* (params = {}) {
      const {
        path = "",
        method = "GET",
        data = {},
        showToast = true
      } = params;
      const isGet = method === "GET";
      const fullPath = isGet ? path : this.addPrefix(path);
      const fetchParams = Object.assign(Object.assign(Object.assign({
        method
      }, isGet ? {} : {
        body: JSON.stringify(data)
      }), {
        path: fullPath
      }), (data === null || data === void 0 ? void 0 : data.format) === "csv" ? {
        parse: false
      } : {});
      try {
        const res = yield this.apiFetch(fetchParams);
        if (showToast) {
          notify({
            res,
            method
          });
        }
        return res;
      } catch (error) {
        notify({
          res: error,
          method
        });
        throw error;
      }
    });
  }
  /**
   * Send a GET request.
   * @param path - The endpoint path.
   * @param params - The query parameters.
   * @returns The API response.
   */
  get(path, params) {
    return __awaiter(this, void 0, void 0, function* () {
      const method = "GET";
      const queryString = this.buildQueryParams(params);
      const fullPath = `${this.addPrefix(path)}${queryString}`;
      const res = yield this.sendRequest({
        path: fullPath,
        method
      });
      return res;
    });
  }
  /**
   * Send a POST request.
   * @param path - The endpoint path.
   * @param data - The request data.
   * @returns The API response.
   */
  post(path_1) {
    return __awaiter(this, arguments, void 0, function* (path, data = {}, showToast = true) {
      const method = "POST";
      const res = yield this.sendRequest({
        path,
        method,
        data,
        showToast
      });
      return res;
    });
  }
  /**
   * Send a PUT request.
   * @param path - The endpoint path.
   * @param data - The request data.
   * @returns The API response.
   */
  put(path_1) {
    return __awaiter(this, arguments, void 0, function* (path, data = {}, showToast = true) {
      const method = "PUT";
      const res = yield this.sendRequest({
        path,
        method,
        data,
        showToast
      });
      return res;
    });
  }
  /**
   * Send a DELETE request.
   * @param path - The endpoint path.
   * @param data - The request data.
   * @returns The API response.
   */
  delete(path, data) {
    return __awaiter(this, void 0, void 0, function* () {
      const method = "DELETE";
      const res = yield this.sendRequest({
        path,
        method,
        data
      });
      return res;
    });
  }
}

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/constant.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationStatus: () => (/* binding */ ReservationStatus),
/* harmony export */   foodOrderOptions: () => (/* binding */ foodOrderOptions),
/* harmony export */   formatDateForDisplay: () => (/* binding */ formatDateForDisplay),
/* harmony export */   getGroupSelectionState: () => (/* binding */ getGroupSelectionState),
/* harmony export */   getMasterSelectionState: () => (/* binding */ getMasterSelectionState),
/* harmony export */   getRowKey: () => (/* binding */ getRowKey),
/* harmony export */   groupReservationsByDate: () => (/* binding */ groupReservationsByDate),
/* harmony export */   handleGroupSelection: () => (/* binding */ handleGroupSelection),
/* harmony export */   handleMasterSelection: () => (/* binding */ handleMasterSelection),
/* harmony export */   handleRowSelection: () => (/* binding */ handleRowSelection),
/* harmony export */   parseDateString: () => (/* binding */ parseDateString)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Wordpress Dependencies
 */

/**
 * Date utility functions for reservation list
 */

/**
 * Format date string for display
 * @param dateString - Date in DD-MM-YYYY format
 * @returns Formatted date string
 */
var formatDateForDisplay = function formatDateForDisplay(dateString) {
  try {
    // Handle DD-MM-YYYY format from API
    var parsedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(dateString, "dd-MM-yyyy", new Date());
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(parsedDate)) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(parsedDate, "MMMM d, yyyy");
    }
    // Fallback: try other common date formats
    var isoDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(dateString, "yyyy-MM-dd", new Date());
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(isoDate)) {
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(isoDate, "MMMM d, yyyy");
    }
    return dateString;
  } catch (_a) {
    return dateString;
  }
};
/**
 * Group reservations by date and sort them
 * @param reservationList - Array of reservations
 * @returns Grouped and sorted reservations
 */
var groupReservationsByDate = function groupReservationsByDate(reservationList) {
  if (!reservationList || reservationList.length === 0) return [];
  var groups = {};
  reservationList.forEach(function (reservation) {
    var date = reservation.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reservation);
  });
  // Convert to array and sort by date using date-fns
  return Object.entries(groups).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      date = _ref2[0],
      reservations = _ref2[1];
    return {
      date: date,
      reservations: reservations,
      count: reservations.length
    };
  }).sort(function (a, b) {
    // Sort by date (newest first)
    try {
      var dateA = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(a.date, "dd-MM-yyyy", new Date());
      var dateB = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(b.date, "dd-MM-yyyy", new Date());
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(dateA) && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(dateB)) {
        return dateB.getTime() - dateA.getTime();
      }
      // Fallback: string comparison
      return b.date.localeCompare(a.date);
    } catch (_a) {
      return b.date.localeCompare(a.date);
    }
  });
};
/**
 * Generate a unique key for table rows
 * @param record - Reservation record
 * @param index - Row index
 * @returns Unique key string
 */
var getRowKey = function getRowKey(record, index) {
  var _a;
  return ((_a = record.id) === null || _a === void 0 ? void 0 : _a.toString()) || index.toString();
};
/**
 * Calculate selection state for a reservation group
 * @param group - Grouped reservation data
 * @param selectedRows - Array of selected row IDs
 * @returns Selection state information
 */
var getGroupSelectionState = function getGroupSelectionState(group, selectedRows) {
  var groupIds = group.reservations.map(function (r) {
    return r.id;
  });
  var selectedInGroup = groupIds.filter(function (id) {
    return selectedRows.includes(id);
  });
  var selectedCount = selectedInGroup.length;
  var totalCount = groupIds.length;
  var isAllSelected = totalCount > 0 && selectedCount === totalCount;
  return {
    selectedCount: selectedCount,
    isAllSelected: isAllSelected
  };
};
/**
 * Handle individual row selection
 * @param record - Reservation record
 * @param selected - Whether the row is selected
 * @param selectedRows - Current selected rows
 * @param onSelectionChange - Callback to update selection
 */
var handleRowSelection = function handleRowSelection(record, selected, selectedRows, onSelectionChange) {
  var currentKeys = selectedRows || [];
  var newSelectedKeys;
  if (selected) {
    newSelectedKeys = [].concat(_toConsumableArray(currentKeys), [record.id]);
  } else {
    newSelectedKeys = currentKeys.filter(function (k) {
      return k !== record.id;
    });
  }
  onSelectionChange(newSelectedKeys);
};
/**
 * Handle group selection (select/deselect all items in a group)
 * @param group - Grouped reservation data
 * @param selected - Whether the group should be selected
 * @param selectedRows - Current selected rows
 * @param onSelectionChange - Callback to update selection
 */
var handleGroupSelection = function handleGroupSelection(group, selected, selectedRows, onSelectionChange) {
  var groupIds = group.reservations.map(function (r) {
    return r.id;
  });
  var currentKeys = selectedRows || [];
  var newSelectedKeys;
  if (selected) {
    // Add all group IDs that aren't already selected
    var newIds = groupIds.filter(function (id) {
      return !currentKeys.includes(id);
    });
    newSelectedKeys = [].concat(_toConsumableArray(currentKeys), _toConsumableArray(newIds));
  } else {
    // Remove all group IDs
    newSelectedKeys = currentKeys.filter(function (id) {
      return !groupIds.includes(id);
    });
  }
  onSelectionChange(newSelectedKeys);
};
/**
 * Handle master selection (select/deselect all items)
 * @param checked - Whether all items should be selected
 * @param reservationList - All reservations
 * @param onSelectionChange - Callback to update selection
 */
var handleMasterSelection = function handleMasterSelection(checked, reservationList, onSelectionChange) {
  if (checked) {
    onSelectionChange(reservationList.map(function (r) {
      return r.id;
    }));
  } else {
    onSelectionChange([]);
  }
};
/**
 * Calculate master selection state
 * @param selectedRows - Current selected rows
 * @param reservationList - All reservations
 * @returns Whether master checkbox should be checked
 */
var getMasterSelectionState = function getMasterSelectionState(selectedRows, reservationList) {
  return selectedRows.length > 0 && selectedRows.length === reservationList.length;
};
var ReservationStatus = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pending", "wpcafe"),
  value: "pending",
  color: "bg-yellow-500"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Confirmed", "wpcafe"),
  value: "confirmed",
  color: "bg-green-500"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cancelled", "wpcafe"),
  value: "cancelled",
  color: "bg-red-500"
}];
var foodOrderOptions = [{
  value: "yes",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Yes", "wpcafe")
}, {
  value: "no",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No", "wpcafe")
}];
// Helper function to safely parse date strings
var parseDateString = function parseDateString(dateStr) {
  var parsed = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(dateStr, "yyyy-MM-dd", new Date());
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(parsed) ? parsed : undefined;
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByFoodOrder.tsx":
/*!*****************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByFoodOrder.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByFoodOrder: () => (/* binding */ FilterByFoodOrder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/select */ "./assets/src/shadcn/components/ui/select.tsx");
/* harmony import */ var _hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */


var FilterByFoodOrder = function FilterByFoodOrder() {
  var _useReservationFilter = (0,_hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_3__.useReservationFilter)(),
    searchQuery = _useReservationFilter.searchQuery,
    isFiltering = _useReservationFilter.isFiltering,
    handleFoodOrderFilter = _useReservationFilter.handleFoodOrderFilter;
  // Ensure we always have a defined value for the controlled Select
  var selectedFoodOrder = (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.food_order) || "";
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.Select, {
    value: selectedFoodOrder,
    onValueChange: function onValueChange(value) {
      return handleFoodOrderFilter(value || null);
    },
    disabled: isFiltering,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectTrigger, {
      className: "w-[148px] cursor-pointer",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectValue, {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Food Order", "wpcafe")
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectContent, {
      children: _constant__WEBPACK_IMPORTED_MODULE_4__.foodOrderOptions.map(function (option) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectItem, {
          value: option.value,
          children: option.label
        }, option.value);
      })
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts":
/*!***************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ "./assets/src/api/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// import { useNavigate } from "react-router-dom";
/**
 * Internal dependencies
 */


var _ref = ((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.globalConstant) || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.pagination,
  pagination = _ref.pagination;
/**
 * Custom hook for managing reservation-related API operations in WordPress.
 * Provides functions to create, update, fetch, and delete reservations.
 */
function useReservationApi() {
  var _this = this;
  // const navigate = useNavigate();
  // Access reservation states from the store
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.reservation;
  var reservationStates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select(storeName).getReservationState();
  }, []);
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(storeName),
    setReservationState = _useDispatch.setReservationState;
  var searchQuery = reservationStates.searchQuery;
  /**
   * Fetches reservations based on a search query and pagination.
   */
  var getReservations = function getReservations() {
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
              setReservationState({
                isFiltering: true,
                error: null
              });
              _context.p = 1;
              _context.n = 2;
              return (_a = _api__WEBPACK_IMPORTED_MODULE_1__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_1__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_1__["default"].reservations) === null || _a === void 0 ? void 0 : _a.getReservations(params);
            case 2:
              res = _context.v;
              if (res === null || res === void 0 ? void 0 : res.success) {
                setReservationState({
                  reservationList: ((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.items) || [],
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
              console.error("Error fetching reservations:", _t);
            case 4:
              _context.p = 4;
              setReservationState({
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
   * Deletes a single reservation by ID.
   */
  var deleteReservation = function deleteReservation(id) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      var _a, res, _select$getReservatio, currentReservationList, updatedReservationList, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            _context2.p = 0;
            _context2.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_1__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_1__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_1__["default"].reservations) === null || _a === void 0 ? void 0 : _a.deleteReservation(id);
          case 1:
            res = _context2.v;
            if (res === null || res === void 0 ? void 0 : res.success) {
              // Get latest reservation list from store
              _select$getReservatio = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.reservation).getReservationState(), currentReservationList = _select$getReservatio.reservationList; // Update state by filtering out the deleted reservation
              updatedReservationList = currentReservationList === null || currentReservationList === void 0 ? void 0 : currentReservationList.filter(function (item) {
                return item.id !== id;
              });
              setReservationState({
                reservationList: updatedReservationList,
                total: (currentReservationList === null || currentReservationList === void 0 ? void 0 : currentReservationList.length) - 1
              });
            }
            return _context2.a(2, res);
          case 2:
            _context2.p = 2;
            _t2 = _context2.v;
            console.error("Error deleting reservation:", _t2);
            setReservationState({
              error: "Failed to delete reservation"
            });
            throw _t2;
          case 3:
            return _context2.a(2);
        }
      }, _callee2, null, [[0, 2]]);
    }));
  };
  /**
   * Deletes multiple reservations by their IDs.
   */
  var bulkDeleteReservations = function bulkDeleteReservations() {
    for (var _len2 = arguments.length, args_1 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args_1[_key2] = arguments[_key2];
    }
    return __awaiter(_this, [].concat(args_1), void 0, function () {
      var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return /*#__PURE__*/_regenerator().m(function _callee3() {
        var _a, res, _select$getReservatio2, currentReservationList, currentTotal, updatedReservationList, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return (_a = _api__WEBPACK_IMPORTED_MODULE_1__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_1__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_1__["default"].reservations) === null || _a === void 0 ? void 0 : _a.bulkDeleteReservations(ids);
            case 1:
              res = _context3.v;
              if (res === null || res === void 0 ? void 0 : res.success) {
                // Get latest reservation list from store
                _select$getReservatio2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.reservation).getReservationState(), currentReservationList = _select$getReservatio2.reservationList, currentTotal = _select$getReservatio2.total; // Update state by filtering out the deleted reservations
                updatedReservationList = currentReservationList.filter(function (item) {
                  return !ids.includes(item.id);
                });
                setReservationState({
                  reservationList: updatedReservationList,
                  total: currentTotal - (ids.length || 0)
                });
              }
              return _context3.a(2, res);
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("Error bulk deleting reservations:", _t3);
              setReservationState({
                error: "Failed to delete reservations"
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
    setReservationState({
      searchQuery: Object.assign(Object.assign({}, searchQuery), {
        paged: paged,
        per_page: per_page
      })
    });
    getReservations({
      paged: paged,
      per_page: per_page
    });
  };
  /**
   * Updates an existing reservation
   */
  var updateReservation = function updateReservation(id, values) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
      var _a, res, _select$getReservatio3, currentReservationList, currentTotal, updatedList, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            setReservationState({
              isFiltering: true,
              error: null
            });
            _context4.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_1__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_1__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_1__["default"].reservations) === null || _a === void 0 ? void 0 : _a.updateReservation(id, values);
          case 1:
            res = _context4.v;
            if (!(res === null || res === void 0 ? void 0 : res.success)) {
              _context4.n = 2;
              break;
            }
            // Get latest reservation list from store
            _select$getReservatio3 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.reservation).getReservationState(), currentReservationList = _select$getReservatio3.reservationList, currentTotal = _select$getReservatio3.total; // Update the reservation in the list
            updatedList = currentReservationList === null || currentReservationList === void 0 ? void 0 : currentReservationList.map(function (reservation) {
              var _a;
              return reservation.id === ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.id) ? res === null || res === void 0 ? void 0 : res.data : reservation;
            });
            setReservationState({
              reservationList: updatedList,
              total: currentTotal
            });
            return _context4.a(2, res);
          case 2:
            return _context4.a(2, res);
          case 3:
            _context4.p = 3;
            _t4 = _context4.v;
            console.error("Error updating reservation:", _t4);
            setReservationState({
              error: "Failed to update reservation",
              isFiltering: false
            });
          case 4:
            _context4.p = 4;
            setReservationState({
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
   * Updates the status of a reservation with loading state management
   */
  var updateReservationStatus = function updateReservationStatus(id, newStatus) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
      var result;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            // Set loading state for this specific reservation
            setReservationState({
              loadingStatuses: Object.assign(Object.assign({}, (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(storeName).getReservationState().loadingStatuses), _defineProperty({}, id, true))
            });
            // Make the API call
            _context5.n = 1;
            return updateReservation(id, {
              status: newStatus
            });
          case 1:
            result = _context5.v;
            return _context5.a(2, result);
          case 2:
            _context5.p = 2;
            // Clear loading state for this specific reservation
            setReservationState({
              loadingStatuses: Object.assign(Object.assign({}, (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(storeName).getReservationState().loadingStatuses), _defineProperty({}, id, false))
            });
            return _context5.f(2);
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0,, 2, 3]]);
    }));
  };
  // Return an object containing all reservation API functions and state
  return {
    // API Functions
    getReservations: getReservations,
    updateReservation: updateReservation,
    updateReservationStatus: updateReservationStatus,
    deleteReservation: deleteReservation,
    bulkDeleteReservations: bulkDeleteReservations,
    onPaginationChange: onPaginationChange
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useReservationApi);

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts":
/*!******************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReservationFilter: () => (/* binding */ useReservationFilter)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _useReservationApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useReservationApi */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
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
 * External Dependencies
 */

/**
 * Internal Dependencies
 */



var useReservationFilter = function useReservationFilter() {
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.reservation;
  var _useReservationApi = (0,_useReservationApi__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    getReservations = _useReservationApi.getReservations;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(storeName),
    setReservationState = _useDispatch.setReservationState,
    resetReservationState = _useDispatch.resetReservationState;
  // Get current state from store
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(storeName).getReservationState();
    }, []),
    searchQuery = _useSelect.searchQuery,
    isFiltering = _useSelect.isFiltering;
  var _useSearchEmptyState = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_5__.useSearchEmptyState)(searchQuery || {}),
    isQueried = _useSearchEmptyState.isQueried;
  // Handler for search input changes
  var handleSearchChange = function handleSearchChange(query) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      var searchTerm, updatedQuery;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            searchTerm = query.search.trim(); // Only make API call if search term is different from current
            if (!((searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.search) === searchTerm)) {
              _context.n = 1;
              break;
            }
            return _context.a(2, {
              complete: true
            });
          case 1:
            updatedQuery = Object.assign(Object.assign({}, searchQuery), {
              search: searchTerm,
              paged: 1
            });
            setReservationState({
              searchQuery: updatedQuery,
              reservationList: null // Clear current list to show loading state
            });
            // Make API call with the query
            _context.n = 2;
            return getReservations(updatedQuery);
          case 2:
            return _context.a(2, {
              complete: true
            });
        }
      }, _callee);
    }));
  };
  // Handler for filtering by status
  var handleStatusFilter = function handleStatusFilter(status) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      var updatedQuery;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (status) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, handleClearFilters());
          case 1:
            // Create API query params
            updatedQuery = Object.assign(Object.assign({}, searchQuery), {
              status: status,
              paged: 1
            });
            setReservationState({
              searchQuery: updatedQuery,
              reservationList: null // Clear current list to show loading state
            });
            // Make API call with the query
            _context2.n = 2;
            return getReservations(updatedQuery);
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
  };
  var handleFoodOrderFilter = function handleFoodOrderFilter(foodOrder) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
      var updatedQuery;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (foodOrder) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, handleClearFilters());
          case 1:
            // Create API query params
            updatedQuery = Object.assign(Object.assign({}, searchQuery), {
              food_order: foodOrder,
              paged: 1
            });
            setReservationState({
              searchQuery: updatedQuery,
              reservationList: null // Clear current list to show loading state
            });
            // Make API call with the query
            _context3.n = 2;
            return getReservations(updatedQuery);
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
  };
  // Handler for date range filter
  var handleDateFilter = function handleDateFilter(dateRange) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
      var fromDate, toDate, updatedQuery;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (!(!(dateRange === null || dateRange === void 0 ? void 0 : dateRange.from) || !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(dateRange.from))) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, handleClearFilters());
          case 1:
            // Format dates to YYYY-MM-DD using date-fns
            fromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(dateRange.from, "yyyy-MM-dd"); // If no end date is selected or invalid, use the start date
            toDate = dateRange.to && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isValid)(dateRange.to) ? (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(dateRange.to, "yyyy-MM-dd") : fromDate; // Create API query params
            updatedQuery = Object.assign(Object.assign({}, searchQuery), {
              "date_range[0]": fromDate,
              "date_range[1]": toDate,
              paged: 1
            });
            setReservationState({
              searchQuery: updatedQuery,
              reservationList: null // Clear current list to show loading state
            });
            // Make API call with the query
            _context4.n = 2;
            return getReservations(updatedQuery);
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
  };
  // Handler for clearing all filters
  var handleClearFilters = function handleClearFilters() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            // First, reset the store state completely
            resetReservationState();
            // Make API call with clean query
            _context5.n = 1;
            return getReservations({
              resetFilter: true
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
  };
  return {
    searchQuery: searchQuery,
    isFiltering: isFiltering,
    isFilterApplied: isQueried,
    handleSearchChange: handleSearchChange,
    handleStatusFilter: handleStatusFilter,
    handleFoodOrderFilter: handleFoodOrderFilter,
    handleDateFilter: handleDateFilter,
    handleClearFilters: handleClearFilters
  };
};

/***/ }),

/***/ "./assets/src/api/api-base.ts":
/*!************************************!*\
  !*** ./assets/src/api/api-base.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiBase)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

/**
 * External Dependencies
 */

/**
 * Function to handle notifications based on API response.
 * @param res - API response object.
 * @param method - HTTP method used in the request.
 */
var notify = function notify(_ref) {
  var res = _ref.res,
    method = _ref.method;
  if (method !== "GET") {
    // Handle regular API responses which are wrapped in a common response format
    var type = (res === null || res === void 0 ? void 0 : res.success) ? "success" : "error";
    sonner__WEBPACK_IMPORTED_MODULE_1__.toast[type](res === null || res === void 0 ? void 0 : res.message);
  } else if (method === "GET" && !(res === null || res === void 0 ? void 0 : res.success)) {
    if (Array.isArray(res)) return;
    sonner__WEBPACK_IMPORTED_MODULE_1__.toast.error(res === null || res === void 0 ? void 0 : res.message);
  }
};
var ApiBase = /*#__PURE__*/function () {
  function ApiBase() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    _classCallCheck(this, ApiBase);
    Object.defineProperty(this, "apiFetch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.apiFetch = (_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default());
    this.prefix = prefix;
  }
  /**
   * Add prefix to the path.
   * @param path - The endpoint path.
   * @returns The full path with the prefix.
   */
  return _createClass(ApiBase, [{
    key: "addPrefix",
    value: function addPrefix(path) {
      return path ? "".concat(this.prefix, "/").concat(path) : this.prefix;
    }
    /**
     * Build query parameters string from an object.
     * @param params - The query parameters.
     * @returns The query string.
     */
  }, {
    key: "buildQueryParams",
    value: function buildQueryParams() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var queryString = new URLSearchParams(params).toString();
      return queryString ? "?".concat(queryString) : "";
    }
    /**
     * Send API request.
     * @param params - The request options.
     * @returns The API response in JSON format.
     */
  }, {
    key: "sendRequest",
    value: function sendRequest() {
      return __awaiter(this, arguments, void 0, function () {
        var _this = this;
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return /*#__PURE__*/_regenerator().m(function _callee() {
          var _params$path, path, _params$method, method, _params$data, data, _params$showToast, showToast, isGet, fullPath, fetchParams, res, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                _params$path = params.path, path = _params$path === void 0 ? "" : _params$path, _params$method = params.method, method = _params$method === void 0 ? "GET" : _params$method, _params$data = params.data, data = _params$data === void 0 ? {} : _params$data, _params$showToast = params.showToast, showToast = _params$showToast === void 0 ? true : _params$showToast;
                isGet = method === "GET";
                fullPath = isGet ? path : _this.addPrefix(path);
                fetchParams = Object.assign(Object.assign(Object.assign({
                  method: method
                }, isGet ? {} : {
                  body: JSON.stringify(data)
                }), {
                  path: fullPath
                }), (data === null || data === void 0 ? void 0 : data.format) === "csv" ? {
                  parse: false
                } : {});
                _context.p = 1;
                _context.n = 2;
                return _this.apiFetch(fetchParams);
              case 2:
                res = _context.v;
                if (showToast) {
                  notify({
                    res: res,
                    method: method
                  });
                }
                return _context.a(2, res);
              case 3:
                _context.p = 3;
                _t = _context.v;
                notify({
                  res: _t,
                  method: method
                });
                throw _t;
              case 4:
                return _context.a(2);
            }
          }, _callee, null, [[1, 3]]);
        })();
      });
    }
    /**
     * Send a GET request.
     * @param path - The endpoint path.
     * @param params - The query parameters.
     * @returns The API response.
     */
  }, {
    key: "get",
    value: function get(path, params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        var method, queryString, fullPath, res;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              method = "GET";
              queryString = this.buildQueryParams(params);
              fullPath = "".concat(this.addPrefix(path)).concat(queryString);
              _context2.n = 1;
              return this.sendRequest({
                path: fullPath,
                method: method
              });
            case 1:
              res = _context2.v;
              return _context2.a(2, res);
          }
        }, _callee2, this);
      }));
    }
    /**
     * Send a POST request.
     * @param path - The endpoint path.
     * @param data - The request data.
     * @returns The API response.
     */
  }, {
    key: "post",
    value: function post(path_1) {
      return __awaiter(this, arguments, void 0, function (path) {
        var _this2 = this;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var showToast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        return /*#__PURE__*/_regenerator().m(function _callee3() {
          var method, res;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                method = "POST";
                _context3.n = 1;
                return _this2.sendRequest({
                  path: path,
                  method: method,
                  data: data,
                  showToast: showToast
                });
              case 1:
                res = _context3.v;
                return _context3.a(2, res);
            }
          }, _callee3);
        })();
      });
    }
    /**
     * Send a PUT request.
     * @param path - The endpoint path.
     * @param data - The request data.
     * @returns The API response.
     */
  }, {
    key: "put",
    value: function put(path_1) {
      return __awaiter(this, arguments, void 0, function (path) {
        var _this3 = this;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var showToast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        return /*#__PURE__*/_regenerator().m(function _callee4() {
          var method, res;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                method = "PUT";
                _context4.n = 1;
                return _this3.sendRequest({
                  path: path,
                  method: method,
                  data: data,
                  showToast: showToast
                });
              case 1:
                res = _context4.v;
                return _context4.a(2, res);
            }
          }, _callee4);
        })();
      });
    }
    /**
     * Send a DELETE request.
     * @param path - The endpoint path.
     * @param data - The request data.
     * @returns The API response.
     */
  }, {
    key: "delete",
    value: function _delete(path, data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
        var method, res;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              method = "DELETE";
              _context5.n = 1;
              return this.sendRequest({
                path: path,
                method: method,
                data: data
              });
            case 1:
              res = _context5.v;
              return _context5.a(2, res);
          }
        }, _callee5, this);
      }));
    }
  }]);
}();


/***/ }),

/***/ "./assets/src/api/dashboard.ts":
/*!*************************************!*\
  !*** ./assets/src/api/dashboard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Dashboard = /*#__PURE__*/function (_ApiBase) {
  function Dashboard() {
    var _this;
    _classCallCheck(this, Dashboard);
    _this = _callSuper(this, Dashboard, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/dashboard")
    });
    return _this;
  }
  _inherits(Dashboard, _ApiBase);
  return _createClass(Dashboard, [{
    key: "getDashboardOverviewData",
    value: function getDashboardOverviewData(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        var endpoint, queryParts;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              endpoint = "overview";
              if ((params === null || params === void 0 ? void 0 : params.start_date) || (params === null || params === void 0 ? void 0 : params.end_date)) {
                queryParts = [];
                if (params.start_date) {
                  queryParts.push("start_date=".concat(params.start_date));
                }
                if (params.end_date) {
                  queryParts.push("end_date=".concat(params.end_date));
                }
                if (params.location) {
                  queryParts.push("location=".concat(params.location));
                }
                endpoint = "overview?".concat(queryParts.join("&"));
              }
              return _context.a(2, this.get(endpoint));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getReservations",
    value: function getReservations() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.get("reservations"));
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getFoodOrders",
    value: function getFoodOrders() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, this.get("food-orders"));
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getTopSales",
    value: function getTopSales() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, this.get("top-sales"));
          }
        }, _callee4, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/index.ts":
/*!*********************************!*\
  !*** ./assets/src/api/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/plugins */ "./assets/src/api/plugins.ts");
/* harmony import */ var _api_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/settings */ "./assets/src/api/settings.ts");
/* harmony import */ var _api_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/dashboard */ "./assets/src/api/dashboard.ts");
/* harmony import */ var _api_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/modules */ "./assets/src/api/modules.ts");
/* harmony import */ var _api_locations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/locations */ "./assets/src/api/locations.ts");
/* harmony import */ var _api_integrations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/integrations */ "./assets/src/api/integrations.ts");
/* harmony import */ var _api_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/products */ "./assets/src/api/products.ts");
/* harmony import */ var _api_reservations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/reservations */ "./assets/src/api/reservations.ts");








var Api = {
  dashboard: new _api_dashboard__WEBPACK_IMPORTED_MODULE_2__["default"](),
  settings: new _api_settings__WEBPACK_IMPORTED_MODULE_1__["default"](),
  plugins: new _api_plugins__WEBPACK_IMPORTED_MODULE_0__["default"](),
  modules: new _api_modules__WEBPACK_IMPORTED_MODULE_3__["default"](),
  location: new _api_locations__WEBPACK_IMPORTED_MODULE_4__["default"](),
  integrations: new _api_integrations__WEBPACK_IMPORTED_MODULE_5__["default"](),
  products: new _api_products__WEBPACK_IMPORTED_MODULE_6__["default"](),
  reservations: new _api_reservations__WEBPACK_IMPORTED_MODULE_7__["default"]()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./assets/src/api/integrations.ts":
/*!****************************************!*\
  !*** ./assets/src/api/integrations.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Integrations)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Integrations = /*#__PURE__*/function (_ApiBase) {
  function Integrations() {
    var _this;
    _classCallCheck(this, Integrations);
    _this = _callSuper(this, Integrations, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/integrations")
    });
    return _this;
  }
  _inherits(Integrations, _ApiBase);
  return _createClass(Integrations, [{
    key: "getIntegrations",
    value: function getIntegrations() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get(""));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "updateIntegrationStatus",
    value: function updateIntegrationStatus(integrationData) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.put("", integrationData));
          }
        }, _callee2, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/locations.ts":
/*!*************************************!*\
  !*** ./assets/src/api/locations.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Location)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Location = /*#__PURE__*/function (_ApiBase) {
  function Location() {
    var _this;
    _classCallCheck(this, Location);
    _this = _callSuper(this, Location, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/locations")
    });
    return _this;
  }
  _inherits(Location, _ApiBase);
  return _createClass(Location, [{
    key: "getLocations",
    value: function getLocations(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get("", params));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getSingleLocation",
    value: function getSingleLocation(locationId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.get("".concat(locationId)));
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "createLocation",
    value: function createLocation(data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, this.post("", data));
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "updateLocation",
    value: function updateLocation(locationId, data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, this.put("".concat(locationId), data));
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "deleteLocation",
    value: function deleteLocation(locationId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              return _context5.a(2, this["delete"]("".concat(locationId)));
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "bulkDeleteLocations",
    value: function bulkDeleteLocations(locationIds) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              return _context6.a(2, this["delete"]("", {
                ids: locationIds
              }));
          }
        }, _callee6, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/modules.ts":
/*!***********************************!*\
  !*** ./assets/src/api/modules.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modules)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Modules = /*#__PURE__*/function (_ApiBase) {
  function Modules() {
    var _this;
    _classCallCheck(this, Modules);
    _this = _callSuper(this, Modules, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/extentions")
    });
    return _this;
  }
  _inherits(Modules, _ApiBase);
  return _createClass(Modules, [{
    key: "getModules",
    value: function getModules() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get(""));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "updateModuleStatus",
    value: function updateModuleStatus(moduleData) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.put("", moduleData));
          }
        }, _callee2, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/plugins.ts":
/*!***********************************!*\
  !*** ./assets/src/api/plugins.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plugins)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Plugins = /*#__PURE__*/function (_ApiBase) {
  function Plugins() {
    var _this;
    _classCallCheck(this, Plugins);
    _this = _callSuper(this, Plugins, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/plugins")
    });
    return _this;
  }
  _inherits(Plugins, _ApiBase);
  return _createClass(Plugins, [{
    key: "getPlugins",
    value: function getPlugins() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get(""));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "activatePlugins",
    value: function activatePlugins(data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.put("", data));
          }
        }, _callee2, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/products.ts":
/*!************************************!*\
  !*** ./assets/src/api/products.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products)
/* harmony export */ });
/* harmony import */ var _wpcafe_pro_assets_src_api_api_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../wpcafe-pro/assets/src/api/api-base */ "../wpcafe-pro/assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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

var _ref = ((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.globalConstant) || {},
  API_PATH_PREFIX = _ref.API_PATH_PREFIX;
var Products = /*#__PURE__*/function (_ApiBase) {
  function Products() {
    var _this;
    _classCallCheck(this, Products);
    _this = _callSuper(this, Products, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(API_PATH_PREFIX)
    });
    return _this;
  }
  _inherits(Products, _ApiBase);
  return _createClass(Products, [{
    key: "getProducts",
    value: function getProducts() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        var custom_path;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              custom_path = "products";
              return _context.a(2, this.get(custom_path));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        var custom_path;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              custom_path = "product-categories";
              return _context2.a(2, this.get(custom_path));
          }
        }, _callee2, this);
      }));
    }
  }]);
}(_wpcafe_pro_assets_src_api_api_base__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/src/api/reservations.ts":
/*!****************************************!*\
  !*** ./assets/src/api/reservations.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reservations)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Reservations = /*#__PURE__*/function (_ApiBase) {
  function Reservations() {
    var _this;
    _classCallCheck(this, Reservations);
    _this = _callSuper(this, Reservations, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/reservations")
    });
    return _this;
  }
  _inherits(Reservations, _ApiBase);
  return _createClass(Reservations, [{
    key: "getReservations",
    value: function getReservations(params) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get("", params));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "createReservation",
    value: function createReservation(data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.post("", data));
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "updateReservation",
    value: function updateReservation(reservationId, data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2, this.put("".concat(reservationId), data));
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "deleteReservation",
    value: function deleteReservation(reservationId) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2, this["delete"]("".concat(reservationId)));
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "bulkDeleteReservations",
    value: function bulkDeleteReservations(reservationIds) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              return _context5.a(2, this["delete"]("", {
                ids: reservationIds
              }));
          }
        }, _callee5, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/api/settings.ts":
/*!************************************!*\
  !*** ./assets/src/api/settings.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-base */ "./assets/src/api/api-base.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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


var Settings = /*#__PURE__*/function (_ApiBase) {
  function Settings() {
    var _this;
    _classCallCheck(this, Settings);
    _this = _callSuper(this, Settings, arguments);
    Object.defineProperty(_this, "prefix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "".concat(_globalConstant__WEBPACK_IMPORTED_MODULE_0__.API_PATH_PREFIX, "/settings")
    });
    return _this;
  }
  _inherits(Settings, _ApiBase);
  return _createClass(Settings, [{
    key: "getSettings",
    value: function getSettings() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, this.get(""));
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "editSettings",
    value: function editSettings(settings) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2, this.put("", settings));
          }
        }, _callee2, this);
      }));
    }
  }]);
}(_api_base__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/src/common/hooks/index.ts":
/*!******************************************!*\
  !*** ./assets/src/common/hooks/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAdminLicenseCheck: () => (/* reexport safe */ _useAdminLicenseCheck__WEBPACK_IMPORTED_MODULE_1__.useAdminLicenseCheck),
/* harmony export */   useClipboard: () => (/* reexport safe */ _useClipboard__WEBPACK_IMPORTED_MODULE_7__.useClipboard),
/* harmony export */   useColorPicker: () => (/* reexport safe */ _useColorPicker__WEBPACK_IMPORTED_MODULE_0__.useColorPicker),
/* harmony export */   useIsMobile: () => (/* reexport safe */ _useMobile__WEBPACK_IMPORTED_MODULE_4__.useIsMobile),
/* harmony export */   useModal: () => (/* reexport safe */ _useModal__WEBPACK_IMPORTED_MODULE_5__.useModal),
/* harmony export */   useModuleStatus: () => (/* reexport safe */ _useModuleStatus__WEBPACK_IMPORTED_MODULE_3__.useModuleStatus),
/* harmony export */   useSearchEmptyState: () => (/* reexport safe */ _useSearchEmptyState__WEBPACK_IMPORTED_MODULE_2__.useSearchEmptyState),
/* harmony export */   useUrlParams: () => (/* reexport safe */ _useUrlParams__WEBPACK_IMPORTED_MODULE_6__.useUrlParams)
/* harmony export */ });
/* harmony import */ var _useColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useColorPicker */ "./assets/src/common/hooks/useColorPicker.ts");
/* harmony import */ var _useAdminLicenseCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAdminLicenseCheck */ "./assets/src/common/hooks/useAdminLicenseCheck.ts");
/* harmony import */ var _useSearchEmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSearchEmptyState */ "./assets/src/common/hooks/useSearchEmptyState.ts");
/* harmony import */ var _useModuleStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useModuleStatus */ "./assets/src/common/hooks/useModuleStatus.ts");
/* harmony import */ var _useMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMobile */ "./assets/src/common/hooks/useMobile.ts");
/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useModal */ "./assets/src/common/hooks/useModal.ts");
/* harmony import */ var _useUrlParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useUrlParams */ "./assets/src/common/hooks/useUrlParams.ts");
/* harmony import */ var _useClipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useClipboard */ "./assets/src/common/hooks/useClipboard.ts");









/***/ }),

/***/ "./assets/src/common/hooks/useAdminLicenseCheck.ts":
/*!*********************************************************!*\
  !*** ./assets/src/common/hooks/useAdminLicenseCheck.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAdminLicenseCheck: () => (/* binding */ useAdminLicenseCheck)
/* harmony export */ });
var useAdminLicenseCheck = function useAdminLicenseCheck() {
  var _a;
  var isProActivated = Boolean( true && window.wpCafePro || window.wpCafePro || ((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.wpcafePro) === "1");
  return isProActivated;
};

/***/ }),

/***/ "./assets/src/common/hooks/useClipboard.ts":
/*!*************************************************!*\
  !*** ./assets/src/common/hooks/useClipboard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClipboard: () => (/* binding */ useClipboard)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */

function useClipboard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? 2000 : _ref$timeout;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    copied = _useState4[0],
    setCopied = _useState4[1];
  var timeoutRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var handleCopyResult = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(function () {
      return setCopied(false);
    }, timeout);
    setCopied(value);
  }, [timeout]);
  // Robust fallback using a hidden textarea appended inside the nearest dialog (if present)
  // to play nicely with focus traps used by modal libraries.
  var fallbackCopy = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (valueToCopy) {
    var _a, _b;
    // Prefer the closest open dialog from the active element, then known containers
    var active = document.activeElement || undefined;
    var candidates = [(_a = active === null || active === void 0 ? void 0 : active.closest) === null || _a === void 0 ? void 0 : _a.call(active, '[role="dialog"]'), document.querySelector('[data-testid="shortcode-modal-scroller"]'), document.querySelector('[role="dialog"]'), document.body];
    var container = (_b = candidates.find(Boolean)) !== null && _b !== void 0 ? _b : document.body;
    var textarea = document.createElement("textarea");
    textarea.value = valueToCopy;
    textarea.setAttribute("readonly", "");
    // Place offscreen in a way that remains focusable in most browsers
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    container.appendChild(textarea);
    try {
      // Focus without scrolling viewport
      if (typeof textarea.focus === "function") {
        try {
          textarea.focus({
            preventScroll: true
          });
        } catch (_) {
          textarea.focus();
        }
      }
      textarea.select();
      // iOS Safari sometimes needs explicit range selection
      textarea.setSelectionRange(0, textarea.value.length);
      var successful = document.execCommand("copy");
      if (!successful) {
        throw new Error("Copy command was unsuccessful");
      }
      handleCopyResult(true);
    } finally {
      container.removeChild(textarea);
    }
  }, [handleCopyResult]);
  var copy = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (valueToCopy) {
    var _a;
    setError(null);
    var canUseAsyncClipboard = typeof window !== "undefined" && (
    // Prefer secure-context async API when available
    (_a = window.isSecureContext) !== null && _a !== void 0 ? _a : false) && !!navigator.clipboard && typeof navigator.clipboard.writeText === "function";
    if (canUseAsyncClipboard) {
      navigator.clipboard.writeText(valueToCopy).then(function () {
        return handleCopyResult(true);
      })["catch"](function (err) {
        // If async API fails (permissions, blocked), fallback to execCommand
        try {
          fallbackCopy(valueToCopy);
        } catch (e) {
          setError(e || err);
        }
      });
      return;
    }
    // Fallback path for non-secure contexts or when async API is unavailable/blocked.
    try {
      fallbackCopy(valueToCopy);
    } catch (e) {
      setError(e);
    }
  }, [handleCopyResult, fallbackCopy]);
  var reset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setCopied(false);
    setError(null);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  return {
    copy: copy,
    reset: reset,
    error: error,
    copied: copied
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClipboard);

/***/ }),

/***/ "./assets/src/common/hooks/useColorPicker.ts":
/*!***************************************************!*\
  !*** ./assets/src/common/hooks/useColorPicker.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useColorPicker: () => (/* binding */ useColorPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

/**
 * Custom hook for ColorPicker component
 *
 * Manages all state, validation, and color manipulation logic for the ColorPicker component.
 * Provides a clean separation of concerns by extracting business logic from the UI component.
 */
var useColorPicker = function useColorPicker(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    onChange = _ref.onChange,
    _ref$format = _ref.format,
    format = _ref$format === void 0 ? "hex" : _ref$format;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isValidColor = _useState6[0],
    setIsValidColor = _useState6[1];
  var colorPickerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // Update input value when prop changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setInputValue(value);
    setIsValidColor(value ? isValidHexColor(value) : true);
  }, [value]);
  /**
   * Validate hex color format
   */
  var isValidHexColor = function isValidHexColor(color) {
    var hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(color);
  };
  /**
   * Validate RGB color format
   */
  var isValidRgbColor = function isValidRgbColor(color) {
    var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    return rgbRegex.test(color);
  };
  /**
   * Convert hex to RGB
   */
  var hexToRgb = function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result && result[1] && result[2] && result[3]) {
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    }
    return hex;
  };
  /**
   * Convert RGB to hex
   */
  var rgbToHex = function rgbToHex(rgb) {
    var match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (match && match[1] && match[2] && match[3]) {
      var r = parseInt(match[1]);
      var g = parseInt(match[2]);
      var b = parseInt(match[3]);
      return "#".concat(((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }
    return rgb;
  };
  /**
   * Format color based on format prop
   */
  var formatColor = function formatColor(color) {
    if (format === "rgb" && isValidHexColor(color)) {
      return hexToRgb(color);
    } else if (format === "hex" && isValidRgbColor(color)) {
      return rgbToHex(color);
    }
    return color;
  };
  /**
   * Handle color selection
   */
  var handleColorSelect = function handleColorSelect(color) {
    var formattedColor = formatColor(color);
    setInputValue(formattedColor);
    setIsValidColor(true);
    onChange === null || onChange === void 0 ? void 0 : onChange(formattedColor);
  };
  /**
   * Handle manual input change
   */
  var handleInputChange = function handleInputChange(e) {
    var newValue = e.target.value;
    setInputValue(newValue);
    var isValid = format === "hex" ? isValidHexColor(newValue) : isValidRgbColor(newValue);
    setIsValidColor(isValid);
    if (isValid) {
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }
  };
  /**
   * Handle custom color picker change
   */
  var handleCustomColorChange = function handleCustomColorChange(e) {
    handleColorSelect(e.target.value);
  };
  /**
   * Apply current input value
   */
  var handleApply = function handleApply() {
    if (isValidColor) {
      onChange === null || onChange === void 0 ? void 0 : onChange(inputValue);
      setOpen(false);
    }
  };
  /**
   * Cancel and revert to original value
   */
  var handleCancel = function handleCancel() {
    setInputValue(value);
    setIsValidColor(true);
    setOpen(false);
  };
  /**
   * Clear the color value
   */
  var handleClear = function handleClear() {
    setInputValue("");
    setIsValidColor(true);
    onChange === null || onChange === void 0 ? void 0 : onChange("");
  };
  /**
   * Get display color for preview
   */
  var getDisplayColor = function getDisplayColor() {
    if (isValidColor && inputValue) {
      return format === "rgb" && isValidHexColor(inputValue) ? hexToRgb(inputValue) : inputValue;
    }
    // Return transparent when no color is selected
    return "transparent";
  };
  return {
    // State
    open: open,
    inputValue: inputValue,
    isValidColor: isValidColor,
    colorPickerRef: colorPickerRef,
    // Handlers
    setOpen: setOpen,
    handleColorSelect: handleColorSelect,
    handleInputChange: handleInputChange,
    handleCustomColorChange: handleCustomColorChange,
    handleApply: handleApply,
    handleCancel: handleCancel,
    handleClear: handleClear,
    // Utilities
    getDisplayColor: getDisplayColor,
    isValidHexColor: isValidHexColor,
    isValidRgbColor: isValidRgbColor,
    hexToRgb: hexToRgb,
    rgbToHex: rgbToHex,
    formatColor: formatColor
  };
};

/***/ }),

/***/ "./assets/src/common/hooks/useMobile.ts":
/*!**********************************************!*\
  !*** ./assets/src/common/hooks/useMobile.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMobile: () => (/* binding */ useIsMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var MOBILE_BREAKPOINT = 1024; // Changed to match Tailwind's lg breakpoint
function useIsMobile() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(undefined),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isMobile = _React$useState2[0],
    setIsMobile = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
    var onChange = function onChange() {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return function () {
      return mql.removeEventListener("change", onChange);
    };
  }, []);
  return !!isMobile;
}

/***/ }),

/***/ "./assets/src/common/hooks/useModal.ts":
/*!*********************************************!*\
  !*** ./assets/src/common/hooks/useModal.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModal: () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */

/**
 * Simple modal hook for managing modal state
 */
var useModal = function useModal() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
      isOpen: false,
      title: "",
      children: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modalState = _useState2[0],
    setModalState = _useState2[1];
  var openModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (title, children) {
    setModalState({
      isOpen: true,
      title: title,
      children: children
    });
  }, []);
  var closeModal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setModalState({
      isOpen: false,
      title: "",
      children: null
    });
  }, []);
  return Object.assign(Object.assign({}, modalState), {
    openModal: openModal,
    closeModal: closeModal
  });
};

/***/ }),

/***/ "./assets/src/common/hooks/useModuleStatus.ts":
/*!****************************************************!*\
  !*** ./assets/src/common/hooks/useModuleStatus.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModuleStatus: () => (/* binding */ useModuleStatus)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */

/**
 * Hook to get all modules data with convenience getters
 */
var useModuleStatus = function useModuleStatus(moduleName) {
  var _a;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores.modules).getModulesState();
    }, []),
    modulesData = _useSelect.data,
    isLoading = _useSelect.loading;
  var isEnabled = moduleName ? ((_a = modulesData === null || modulesData === void 0 ? void 0 : modulesData[moduleName]) === null || _a === void 0 ? void 0 : _a.status) === "on" : false;
  return {
    isEnabled: isEnabled,
    modulesData: modulesData,
    isLoading: isLoading
  };
};

/***/ }),

/***/ "./assets/src/common/hooks/useSearchEmptyState.ts":
/*!********************************************************!*\
  !*** ./assets/src/common/hooks/useSearchEmptyState.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSearchEmptyState: () => (/* binding */ useSearchEmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/*
 Wordpress dependencies
*/

/**
 * Custom hook to determine if the search query state contains any active filters or queries
 * beyond the default pagination keys.
 *
 * @param searchQuery - The current store's query state object, which may include pagination,
 *                      search terms, and additional filter properties.
 * @param defaultKeys - An array of keys considered default (e.g., pagination keys) that should
 *                      not be counted as active queries or filters. Defaults to ["paged", "per_page"].
 * @returns An object with `isQueried` boolean indicating whether any non-default query or filter
 *          is present in the searchQuery state.
 */
var useSearchEmptyState = function useSearchEmptyState(searchQuery) {
  var defaultKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["paged", "per_page"];
  var isQueried = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Object.keys(searchQuery).some(function (key) {
      return !defaultKeys.includes(key) && searchQuery[key] !== undefined && searchQuery[key] !== null && searchQuery[key] !== "";
    });
  }, [searchQuery, defaultKeys]);
  return {
    isQueried: isQueried
  };
};

/***/ }),

/***/ "./assets/src/common/hooks/useUrlParams.ts":
/*!*************************************************!*\
  !*** ./assets/src/common/hooks/useUrlParams.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUrlParams: () => (/* binding */ useUrlParams)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress Dependencies
 */

/**
 * External dependencies
 */

/**
 * Read-only helper for all URLSearchParams from the current location.
 */
var useUrlParams = function useUrlParams() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var params = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new URLSearchParams(location.search);
  }, [location.search]);
  var getParams = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var _a;
    return (_a = searchParams.get("tab")) !== null && _a !== void 0 ? _a : defaultValue;
  }, [searchParams]);
  var setParams = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  }, [searchParams]);
  return {
    params: params,
    getParams: getParams,
    setParams: setParams
  };
};

/***/ }),

/***/ "./assets/src/globalConstant.ts":
/*!**************************************!*\
  !*** ./assets/src/globalConstant.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_PATH_PREFIX: () => (/* binding */ API_PATH_PREFIX),
/* harmony export */   URLS: () => (/* binding */ URLS),
/* harmony export */   cancelBtnText: () => (/* binding */ cancelBtnText),
/* harmony export */   defaultSettings: () => (/* binding */ defaultSettings),
/* harmony export */   pagination: () => (/* binding */ pagination),
/* harmony export */   reservationFormCustomization: () => (/* binding */ reservationFormCustomization),
/* harmony export */   stores: () => (/* binding */ stores)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers */ "./assets/src/helpers/index.ts");
var _a, _b, _c;
/**
 * Wordpress Dependencies
 */

/**
 * Internal Dependencies
 */

var API_PATH_PREFIX = "/wpcafe/v2";
var reservationFormCustomization = [{
  id: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateRandomId)(),
  label: "Booking Info",
  isDefault: true,
  fields: [{
    id: "branch",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Which branch of our restaurant", "wpcafe"),
    type: "location",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Delivery Location", "wpcafe"),
    required: true,
    visible: false,
    inGroup: true
  }, {
    id: "date",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date", "wpcafe"),
    type: "date",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Booking date here", "wpcafe"),
    required: true,
    visible: true,
    inGroup: true,
    neverHide: true
  }, {
    id: "start_time",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("From when?", "wpcafe"),
    type: "time",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Start time here", "wpcafe"),
    required: true,
    visible: true,
    inGroup: true,
    neverHide: true
  }, {
    id: "end_time",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Until?", "wpcafe"),
    type: "time",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("End time here", "wpcafe"),
    required: true,
    visible: true,
    inGroup: true
  }, {
    id: "visual_table",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select table", "wpcafe"),
    type: "visual_table",
    required: false,
    visible: false,
    inGroup: true,
    isPro: true
  }, {
    id: "name",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Your Name", "wpcafe"),
    type: "text",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Name here", "wpcafe"),
    required: true,
    visible: true,
    notDeletable: true
  }, {
    id: "email",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Your Email", "wpcafe"),
    type: "email",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Email here", "wpcafe"),
    required: true,
    visible: true,
    notDeletable: true
  }, {
    id: "phone",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How can we contact you?", "wpcafe"),
    type: "tel",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Phone Number here", "wpcafe"),
    required: true,
    visible: true
  }, {
    id: "total_guest",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Total Guests", "wpcafe"),
    type: "number",
    placeholder: "1",
    required: true,
    visible: true,
    notDeletable: true
  }, {
    id: "notes",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Additional Information", "wpcafe"),
    type: "textarea",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Your Message here", "wpcafe"),
    required: false,
    visible: true
  }, {
    id: "food_menu",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Food Item", "wpcafe"),
    type: "food_menu",
    required: false,
    visible: false,
    isPro: true
  }]
}];
var defaultSettings = {
  mini_cart_style: "style-1",
  reservation_status: "pending",
  reservation_form_customization: reservationFormCustomization
};
var URLS = {
  empty_screen_video_url: "https://www.youtube.com/embed/zORxmnxVJd8?si=b_3kyWUMGcGW8-D1",
  wcf_help_url: "https://themewinter.com/wp-cafe",
  wcf_pro_url: "https://themewinter.com/wp-cafe",
  wcf_pricing_url: "https://themewinter.com/wp-cafe/pricing/",
  wcf_upgrade_url: "https://themewinter.com/wp-cafe",
  video_thumbnail: "https://themewinter.com/wp-cafe"
};
var pagination = {
  pageSizeOptions: ["10", "20", "50", "100"],
  paged: 1,
  per_page: 10
};
var stores = (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_stores", {
  modules: "wpcafe/modules",
  settings: "wpcafe/settings",
  onboard: "wpcafe/onboard",
  reservation: "wpcafe/reservation",
  location: "wpcafe/location",
  dashboard: "wpcafe/dashboard",
  integrations: "wpcafe/integrations",
  shortcodes: "wpcafe/shortcodes",
  wooCom: "wpcafe/woo-com",
  frontend: "wpcafe/frontend"
});
var cancelBtnText = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Close", "wpcafe");

/***/ }),

/***/ "./assets/src/helpers/dateLocales.ts":
/*!*******************************************!*\
  !*** ./assets/src/helpers/dateLocales.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calendarLanguageOptions: () => (/* binding */ calendarLanguageOptions),
/* harmony export */   getDateFnsLocale: () => (/* binding */ getDateFnsLocale)
/* harmony export */ });
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * dateLocales helper
 *
 * Builds a list of available date-fns locales and exposes them as
 * user-friendly select options for settings UIs (e.g., “Calendar Language”).
 *
 * Notes
 * - date-fns locales export an object with a `code` (e.g., "en-US", "bn").
 * - We derive display labels using Intl.DisplayNames, falling back to the raw
 *   locale code when the environment lacks full Intl data.
 * - The generated `calendarLanguageOptions` can be plugged directly into a
 *   <SelectInput/> or similar component.
 */

/**
 * Map of locale code (e.g., "en-US") to its date-fns Locale object.
 * We populate this by scanning all exports from date-fns/locale and
 * keeping only the objects that include a string `code`.
 */
var localeMapByCode = {};
Object.values(date_fns_locale__WEBPACK_IMPORTED_MODULE_0__).forEach(function (loc) {
  // date-fns/locale exports a variety of named exports; we only want
  // the actual locale objects that include a `code` property.
  if (loc && _typeof(loc) === "object" && typeof loc.code === "string") {
    localeMapByCode[loc.code] = loc;
  }
});
/**
 * Resolve a date-fns Locale by its BCP 47 code with sensible fallbacks.
 *
 * Strategy
 * 1) Exact match by code (e.g., "en-US").
 * 2) Language-only match (e.g., "bn" will match any "bn-*" or exact "bn").
 * 3) Fallback to "en-US" if available.
 */
function getDateFnsLocale(code) {
  if (!code) return undefined;
  // Exact match
  var exact = localeMapByCode[code];
  if (exact) return exact;
  // Language-only fallback (e.g., "pt-BR" -> "pt" or a "pt-*" variant)
  var lang = code.split("-")[0];
  for (var _i = 0, _Object$entries = Object.entries(localeMapByCode); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      candidateCode = _Object$entries$_i[0],
      candidateLocale = _Object$entries$_i[1];
    if (candidateCode === lang || candidateCode.startsWith("".concat(lang, "-"))) {
      return candidateLocale;
    }
  }
  // Final fallback to en-US if present
  return localeMapByCode["en-US"];
}
/**
 * Build a human-readable label for a given BCP 47 language tag.
 *
 * Examples
 * - "en-US" -> "English (United States)"
 * - "bn"    -> "Bengali"
 *
 * We prefer to present labels in the UI language (default "en").
 * If Intl.DisplayNames is not available or fails, we return the raw code.
 *
 * @param code - BCP 47 locale code from date-fns (e.g., "en-US", "bn")
 * @param displayLocale - UI language for the label, defaults to "en"
 * @returns A localized, readable label for the locale code
 */
function toDisplayLabel(code) {
  var displayLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en";
  try {
    var _code$split = code.split("-"),
      _code$split2 = _slicedToArray(_code$split, 2),
      lang = _code$split2[0],
      region = _code$split2[1];
    var languageNames = new Intl.DisplayNames([displayLocale], {
      type: "language"
    });
    var regionNames = new Intl.DisplayNames([displayLocale], {
      type: "region"
    });
    var langLabel = languageNames.of(lang) || code;
    if (region) {
      var regionLabel = regionNames.of(region) || region;
      return "".concat(langLabel, " (").concat(regionLabel, ")");
    }
    return langLabel;
  } catch (_a) {
    // Fallback when Intl.DisplayNames is unavailable or incomplete.
    return code;
  }
}
/**
 * calendarLanguageOptions
 *
 * Array of language options suitable for select inputs.
 * - `label`: user-facing, localized name (e.g., "English (United States)")
 * - `value`: the exact date-fns locale `code` (e.g., "en-US")
 *
 * The list is alphabetically sorted by the display label for better UX.
 */
var calendarLanguageOptions = Object.keys(localeMapByCode).sort(function (a, b) {
  return toDisplayLabel(a).localeCompare(toDisplayLabel(b));
}).map(function (code) {
  return {
    label: toDisplayLabel(code),
    value: code
  };
});

/***/ }),

/***/ "./assets/src/helpers/formatDate.ts":
/*!******************************************!*\
  !*** ./assets/src/helpers/formatDate.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
var formatDate = function formatDate(d) {
  if (!d) return undefined;
  var dt = d instanceof Date ? d : new Date(d);
  if (isNaN(dt.getTime())) return undefined;
  var y = dt.getFullYear();
  var m = String(dt.getMonth() + 1).padStart(2, "0");
  var day = String(dt.getDate()).padStart(2, "0");
  return "".concat(y, "-").concat(m, "-").concat(day); // YYYY-MM-DD
};

/***/ }),

/***/ "./assets/src/helpers/generateRandomId.ts":
/*!************************************************!*\
  !*** ./assets/src/helpers/generateRandomId.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateRandomId: () => (/* binding */ generateRandomId)
/* harmony export */ });
var generateRandomId = function generateRandomId() {
  return Math.random().toString(36).substr(2, 9); // generates a random ID
};

/***/ }),

/***/ "./assets/src/helpers/index.ts":
/*!*************************************!*\
  !*** ./assets/src/helpers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calendarLanguageOptions: () => (/* reexport safe */ _dateLocales__WEBPACK_IMPORTED_MODULE_2__.calendarLanguageOptions),
/* harmony export */   formatDate: () => (/* reexport safe */ _formatDate__WEBPACK_IMPORTED_MODULE_3__.formatDate),
/* harmony export */   generateRandomId: () => (/* reexport safe */ _generateRandomId__WEBPACK_IMPORTED_MODULE_6__.generateRandomId),
/* harmony export */   getDateFnsLocale: () => (/* reexport safe */ _dateLocales__WEBPACK_IMPORTED_MODULE_2__.getDateFnsLocale),
/* harmony export */   openNotification: () => (/* reexport safe */ _openNotification__WEBPACK_IMPORTED_MODULE_4__.openNotification),
/* harmony export */   scrollBottomToModal: () => (/* reexport safe */ _scrollBottomOfShortcodeModal__WEBPACK_IMPORTED_MODULE_7__.scrollBottomToModal),
/* harmony export */   scrollTop: () => (/* reexport safe */ _scrollTop__WEBPACK_IMPORTED_MODULE_0__.scrollTop),
/* harmony export */   uploadFromMedia: () => (/* reexport safe */ _uploadFromMedia__WEBPACK_IMPORTED_MODULE_1__.uploadFromMedia),
/* harmony export */   wpDateFormat: () => (/* reexport safe */ _wpDateFormat__WEBPACK_IMPORTED_MODULE_5__.wpDateFormat)
/* harmony export */ });
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollTop */ "./assets/src/helpers/scrollTop.ts");
/* harmony import */ var _uploadFromMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploadFromMedia */ "./assets/src/helpers/uploadFromMedia.ts");
/* harmony import */ var _dateLocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateLocales */ "./assets/src/helpers/dateLocales.ts");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatDate */ "./assets/src/helpers/formatDate.ts");
/* harmony import */ var _openNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openNotification */ "./assets/src/helpers/openNotification.ts");
/* harmony import */ var _wpDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wpDateFormat */ "./assets/src/helpers/wpDateFormat.ts");
/* harmony import */ var _generateRandomId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generateRandomId */ "./assets/src/helpers/generateRandomId.ts");
/* harmony import */ var _scrollBottomOfShortcodeModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scrollBottomOfShortcodeModal */ "./assets/src/helpers/scrollBottomOfShortcodeModal.ts");










/***/ }),

/***/ "./assets/src/helpers/openNotification.ts":
/*!************************************************!*\
  !*** ./assets/src/helpers/openNotification.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openNotification: () => (/* binding */ openNotification)
/* harmony export */ });
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/**
 * External dependencies
 */

var openNotification = function openNotification(data) {
  var type = data.type,
    message = data.message;
  sonner__WEBPACK_IMPORTED_MODULE_0__.toast[type](message);
};

/***/ }),

/***/ "./assets/src/helpers/scrollBottomOfShortcodeModal.ts":
/*!************************************************************!*\
  !*** ./assets/src/helpers/scrollBottomOfShortcodeModal.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollBottomToModal: () => (/* binding */ scrollBottomToModal)
/* harmony export */ });
var scrollBottomToModal = function scrollBottomToModal() {
  var scrollToBottom = function scrollToBottom() {
    var container = document.querySelector('[data-testid="shortcode-modal-scroller"]');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
      });
    }
  };
  if ("requestAnimationFrame" in window) {
    window.requestAnimationFrame(function () {
      // Double rAF helps ensure layout is settled in some browsers
      window.requestAnimationFrame(scrollToBottom);
    });
  } else {
    // Fallback if rAF is unavailable
    setTimeout(scrollToBottom, 0);
  }
};

/***/ }),

/***/ "./assets/src/helpers/scrollTop.ts":
/*!*****************************************!*\
  !*** ./assets/src/helpers/scrollTop.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollTop: () => (/* binding */ scrollTop)
/* harmony export */ });
var scrollTop = function scrollTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

/***/ }),

/***/ "./assets/src/helpers/uploadFromMedia.ts":
/*!***********************************************!*\
  !*** ./assets/src/helpers/uploadFromMedia.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadFromMedia: () => (/* binding */ uploadFromMedia)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * Open WordPress media uploader with generic setters
 */
var uploadFromMedia = function uploadFromMedia(event, setFileUrl, options, setFileId) {
  var _a;
  event.preventDefault();
  var title = options.title,
    buttonText = options.buttonText,
    libraryType = options.libraryType,
    mimeCheck = options.mimeCheck,
    cacheKey = options.cacheKey,
    allowedMime = options.allowedMime;
  if (!((_a = window.wp) === null || _a === void 0 ? void 0 : _a.media)) {
    console.error("WordPress media library is not available");
    return;
  }
  var mediaUploader;
  // Reuse or create media frame. We don't early-return so we can rebind the select handler per field instance.
  if (window[cacheKey]) {
    mediaUploader = window[cacheKey];
  } else {
    mediaUploader = window[cacheKey] = window.wp.media({
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(title, "wpcafe"),
      button: {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(buttonText || title, "wpcafe")
      },
      library: {
        type: libraryType
      },
      multiple: false
    });
  }
  // When frame opens, refine the query to only allowedMime if provided.
  if (allowedMime) {
    mediaUploader.on("open", function () {
      var library = mediaUploader.state().get("library");
      if (library && library.props && typeof library.props.set === "function") {
        library.props.set("type", allowedMime);
        library.props.set("query", true);
        if (typeof library.more === "function") {
          library.more();
        }
      }
    });
  }
  // Manage select handler to avoid duplicates: store reference on frame instance.
  var handlerKey = "__wpcafe_select_handler_".concat(cacheKey);
  // Track latest invocation id to prevent stale handlers from updating other fields.
  var invocationId = Date.now();
  mediaUploader[handlerKey + "_latest"] = invocationId;
  var selectHandler = function selectHandler() {
    if (mediaUploader[handlerKey + "_latest"] !== invocationId) {
      return; // A newer handler was registered
    }
    var selection = mediaUploader.state().get("selection");
    if (selection.length > 0) {
      var selectedFile = selection.first().toJSON();
      if (mimeCheck(selectedFile.mime)) {
        setFileUrl(selectedFile.url);
        if (setFileId) setFileId(selectedFile.id);
      } else {
        alert((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Please select a valid file.", "wpcafe"));
      }
    }
  };
  mediaUploader.on("select", selectHandler);
  mediaUploader[handlerKey] = selectHandler; // kept for potential future cleanup
  mediaUploader.open();
};

/***/ }),

/***/ "./assets/src/helpers/wpDateFormat.ts":
/*!********************************************!*\
  !*** ./assets/src/helpers/wpDateFormat.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wpDateFormat: () => (/* binding */ wpDateFormat)
/* harmony export */ });
// Shared helpers to format dates using WordPress date_format
// Supports common PHP date() tokens: d,j,S,m,n,M,F,y,Y,D,l
// Escaping with \\ is supported to output literal characters.
function wpDateFormat(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
  var _a;
  var pattern = (_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.date_format;
  var fallback = function fallback() {
    return date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };
  if (!pattern || typeof pattern !== "string") return fallback();
  var pad2 = function pad2(n) {
    return String(n).padStart(2, "0");
  };
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var resolved = locale || (typeof navigator !== "undefined" ? navigator.language : "en-US");
  var monthLong = new Intl.DateTimeFormat(resolved, {
    month: "long"
  }).format(date);
  var monthShort = new Intl.DateTimeFormat(resolved, {
    month: "short"
  }).format(date);
  var weekdayLong = new Intl.DateTimeFormat(resolved, {
    weekday: "long"
  }).format(date);
  var weekdayShort = new Intl.DateTimeFormat(resolved, {
    weekday: "short"
  }).format(date);
  var ordinal = function ordinal(d) {
    var last = d % 10;
    var last2 = d % 100;
    if (last === 1 && last2 !== 11) return "st";
    if (last === 2 && last2 !== 12) return "nd";
    if (last === 3 && last2 !== 13) return "rd";
    return "th";
  };
  var out = "";
  for (var i = 0; i < pattern.length; i++) {
    var ch = pattern[i];
    if (ch === "\\") {
      i++;
      if (i < pattern.length) out += pattern[i];
      continue;
    }
    switch (ch) {
      case "d":
        out += pad2(day);
        break;
      case "j":
        out += String(day);
        break;
      case "S":
        out += ordinal(day);
        break;
      case "m":
        out += pad2(monthIndex + 1);
        break;
      case "n":
        out += String(monthIndex + 1);
        break;
      case "M":
        out += monthShort;
        break;
      case "F":
        out += monthLong;
        break;
      case "y":
        out += String(year).slice(-2);
        break;
      case "Y":
        out += String(year);
        break;
      case "D":
        out += weekdayShort;
        break;
      case "l":
        out += weekdayLong;
        break;
      default:
        out += ch;
    }
  }
  return out || fallback();
}

/***/ }),

/***/ "./assets/src/shadcn/components/ui/select.tsx":
/*!****************************************************!*\
  !*** ./assets/src/shadcn/components/ui/select.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   SelectContent: () => (/* binding */ SelectContent),
/* harmony export */   SelectGroup: () => (/* binding */ SelectGroup),
/* harmony export */   SelectItem: () => (/* binding */ SelectItem),
/* harmony export */   SelectLabel: () => (/* binding */ SelectLabel),
/* harmony export */   SelectScrollDownButton: () => (/* binding */ SelectScrollDownButton),
/* harmony export */   SelectScrollUpButton: () => (/* binding */ SelectScrollUpButton),
/* harmony export */   SelectSeparator: () => (/* binding */ SelectSeparator),
/* harmony export */   SelectTrigger: () => (/* binding */ SelectTrigger),
/* harmony export */   SelectValue: () => (/* binding */ SelectValue)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-select */ "./node_modules/@radix-ui/react-select/dist/index.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-up.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Select(_a) {
  var props = __rest(_a, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Root, Object.assign({
    "data-slot": "select"
  }, props));
}
function SelectGroup(_a) {
  var props = __rest(_a, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Group, Object.assign({
    "data-slot": "select-group"
  }, props));
}
function SelectValue(_a) {
  var props = __rest(_a, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Value, Object.assign({
    "data-slot": "select-value"
  }, props));
}
function SelectTrigger(_a) {
  var className = _a.className,
    _a$size = _a.size,
    size = _a$size === void 0 ? "default" : _a$size,
    children = _a.children,
    loading = _a.loading,
    props = __rest(_a, ["className", "size", "children", "loading"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Trigger, Object.assign({
    "data-slot": "select-trigger",
    "data-size": size,
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-11 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className)
  }, props, {
    children: [children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      asChild: true,
      children: loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "size-4 opacity-50 animate-spin"
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "size-4 opacity-50"
      })
    })]
  }));
}
function SelectContent(_a) {
  var className = _a.className,
    children = _a.children,
    _a$position = _a.position,
    position = _a$position === void 0 ? "popper" : _a$position,
    props = __rest(_a, ["className", "children", "position"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Portal, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Content, Object.assign({
      "data-slot": "select-content",
      className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md drop-shadow", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position: position
    }, props, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollUpButton, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Viewport, {
        className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
        children: children
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollDownButton, {})]
    }))
  });
}
function SelectLabel(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Label, Object.assign({
    "data-slot": "select-label",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("text-muted-foreground px-2 py-1.5 text-xs", className)
  }, props));
}
function SelectItem(_a) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Item, Object.assign({
    "data-slot": "select-item",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className)
  }, props, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "absolute right-2 flex size-3.5 items-center justify-center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.ItemIndicator, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "size-4"
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.ItemText, {
      children: children
    })]
  }));
}
function SelectSeparator(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.Separator, Object.assign({
    "data-slot": "select-separator",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("bg-border pointer-events-none -mx-1 my-1 h-px", className)
  }, props));
}
function SelectScrollUpButton(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.ScrollUpButton, Object.assign({
    "data-slot": "select-scroll-up-button",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "size-4"
    })
  }));
}
function SelectScrollDownButton(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_1__.ScrollDownButton, Object.assign({
    "data-slot": "select-scroll-down-button",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "size-4"
    })
  }));
}


/***/ }),

/***/ "./assets/src/shadcn/lib/utils.ts":
/*!****************************************!*\
  !*** ./assets/src/shadcn/lib/utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");



function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
/**
 * Helper function to show notifications with fallback
 */
var showNotification = function showNotification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "error";
  try {
    // Try to use toast first with a small delay to ensure Toaster is ready
    if (sonner__WEBPACK_IMPORTED_MODULE_1__.toast && typeof sonner__WEBPACK_IMPORTED_MODULE_1__.toast[type] === "function") {
      console.log("Using toast notification:", message);
      sonner__WEBPACK_IMPORTED_MODULE_1__.toast[type](message);
    } else {
      // Fallback to console and alert
      console.error("Toast not available, using fallback:", message);
      alert(message);
    }
  } catch (error) {
    // If toast fails, use fallback
    console.error("Toast error, using fallback:", error);
    alert(message);
  }
};

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_reservation-list_filter_FilterByFoodOrder_tsx.js.map