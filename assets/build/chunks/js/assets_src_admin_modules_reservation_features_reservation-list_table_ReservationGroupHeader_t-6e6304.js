"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_reservation-list_table_ReservationGroupHeader_t-6e6304"],{

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

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationGroupHeader.tsx":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationGroupHeader.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationGroupHeader: () => (/* binding */ ReservationGroupHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui/checkbox */ "./assets/src/shadcn/components/ui/checkbox.tsx");
/* harmony import */ var _shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/table */ "./assets/src/shadcn/components/ui/table.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * Group Header Component for Grouped Reservation Table
 */




var ReservationGroupHeader = function ReservationGroupHeader(_ref) {
  var group = _ref.group,
    groupSelectionState = _ref.groupSelectionState,
    selectedRows = _ref.selectedRows,
    onSelectionChange = _ref.onSelectionChange,
    colSpan = _ref.colSpan;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
    className: "bg-gray-50 border-gray-200",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
      colSpan: colSpan,
      className: "px-4 py-3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex items-center justify-between",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
            className: "cursor-pointer",
            checked: groupSelectionState.isAllSelected,
            onCheckedChange: function onCheckedChange(checked) {
              return (0,_constant__WEBPACK_IMPORTED_MODULE_3__.handleGroupSelection)(group, !!checked, selectedRows, onSelectionChange);
            }
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "font-semibold text-gray-900",
            children: [(0,_constant__WEBPACK_IMPORTED_MODULE_3__.formatDateForDisplay)(group.date), " (", group.count, ")"]
          })]
        })
      })
    })
  }, "group-".concat(group.date));
};

/***/ }),

/***/ "./assets/src/shadcn/components/ui/checkbox.tsx":
/*!******************************************************!*\
  !*** ./assets/src/shadcn/components/ui/checkbox.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "./node_modules/@radix-ui/react-checkbox/dist/index.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Checkbox(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_1__.Root, Object.assign({
    "data-slot": "checkbox",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className)
  }, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_1__.Indicator, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "size-3.5"
      })
    })
  }));
}


/***/ }),

/***/ "./assets/src/shadcn/components/ui/table.tsx":
/*!***************************************************!*\
  !*** ./assets/src/shadcn/components/ui/table.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShadcnTable: () => (/* binding */ Table),
/* harmony export */   TableBody: () => (/* binding */ TableBody),
/* harmony export */   TableCaption: () => (/* binding */ TableCaption),
/* harmony export */   TableCell: () => (/* binding */ TableCell),
/* harmony export */   TableFooter: () => (/* binding */ TableFooter),
/* harmony export */   TableHead: () => (/* binding */ TableHead),
/* harmony export */   TableHeader: () => (/* binding */ TableHeader),
/* harmony export */   TableRow: () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


function Table(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", Object.assign({
      "data-slot": "table",
      className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("w-full caption-bottom text-sm", className)
    }, props))
  });
}
function TableHeader(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", Object.assign({
    "data-slot": "table-header",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("[&_tr]:border-b", className)
  }, props));
}
function TableBody(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", Object.assign({
    "data-slot": "table-body",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("[&_tr:last-child]:border-0", className)
  }, props));
}
function TableFooter(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", Object.assign({
    "data-slot": "table-footer",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)
  }, props));
}
function TableRow(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", Object.assign({
    "data-slot": "table-row",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("hover:bg-[#fd6cad03] data-[state=selected]:bg-[#fd6cad03] border-b border-neutral-300 transition-colors", className)
  }, props));
}
function TableHead(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", Object.assign({
    "data-slot": "table-head",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
  }, props));
}
function TableCell(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", Object.assign({
    "data-slot": "table-cell",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)
  }, props));
}
function TableCaption(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", Object.assign({
    "data-slot": "table-caption",
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("text-muted-foreground mt-4 text-sm", className)
  }, props));
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

/***/ }),

/***/ "./node_modules/@radix-ui/primitive/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@radix-ui/primitive/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeEventHandlers: () => (/* binding */ composeEventHandlers)
/* harmony export */ });
// packages/core/primitive/src/primitive.tsx
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-use-previous/dist/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@radix-ui/react-use-previous/dist/index.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePrevious: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
// packages/react/use-previous/src/use-previous.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@radix-ui/react-use-size/dist/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@radix-ui/react-use-size/dist/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSize: () => (/* binding */ useSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
// packages/react/use-size/src/use-size.tsx


function useSize(element) {
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/date-fns/addDays.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");



/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_1__.toDate)(date, options?.in);
  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/check.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_reservation-list_table_ReservationGroupHeader_t-6e6304.js.map