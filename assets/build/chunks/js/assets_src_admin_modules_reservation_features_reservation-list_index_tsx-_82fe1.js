"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_reservation-list_index_tsx-_82fe1"],{

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/OrderPreview.tsx":
/*!*****************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/OrderPreview.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderPreview: () => (/* binding */ OrderPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shadcn_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/dialog */ "./assets/src/shadcn/components/ui/dialog.tsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers */ "./assets/src/helpers/index.ts");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/link-2.js");

/**
 * WordPress Dependencies
 */

/**
 * Internal Dependencies
 */



var OrderPreview = function OrderPreview(_ref) {
  var open = _ref.open,
    onOpenChange = _ref.onOpenChange,
    reservation = _ref.reservation;
  var _a;
  var orderDetailsUrl = "".concat((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.admin_url, "admin.php?page=wc-orders&wpcafe=true&action=edit&id=").concat(reservation === null || reservation === void 0 ? void 0 : reservation.id);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    open: open,
    onOpenChange: onOpenChange,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
      className: "max-w-[500px] p-0",
      "aria-describedby": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Order Details", "wpcafe"),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {
        className: "flex-row justify-between items-center  border-b-1 border-neutral-200",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
          className: "flex gap-2 !my-0 p-4",
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Order", "wpcafe"), " - ", reservation === null || reservation === void 0 ? void 0 : reservation.invoice, " ", (reservation === null || reservation === void 0 ? void 0 : reservation.payment_method) === "cash" && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cash on delivery", "wpcafe")
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6 px-5 pb-5 pt-0",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "text-base font-semibold pb-2 mb-2 border-b-1 border-neutral-200",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customer details", "wpcafe")
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-2 gap-4",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "font-medium text-sm text-gray-500 mb-1",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customer Info", "wpcafe")
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-1",
                children: [reservation.name && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "font-medium",
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name", "wpcafe"), ":"]
                  }), " ", reservation.name]
                }), reservation.phone && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "font-medium",
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Phone", "wpcafe"), ":"]
                  }), " ", reservation.phone]
                }), reservation.email && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "font-medium",
                    children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Email", "wpcafe"), ":"]
                  }), " ", reservation.email]
                })]
              })]
            }), (reservation === null || reservation === void 0 ? void 0 : reservation.total_amount) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "font-medium text-sm text-gray-500 mb-1",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Total Amount", "wpcafe")
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [reservation === null || reservation === void 0 ? void 0 : reservation.currency, " ", reservation === null || reservation === void 0 ? void 0 : reservation.total_amount]
              })]
            }), (reservation === null || reservation === void 0 ? void 0 : reservation.notes) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "font-medium text-sm text-gray-500 mb-1",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Notes", "wpcafe")
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: reservation === null || reservation === void 0 ? void 0 : reservation.notes
              })]
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "grid grid-cols-2 gap-4",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "font-medium text-sm text-gray-500 mb-1",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date & Time", "wpcafe")
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "space-y-1",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wpDateFormat)(new Date(reservation === null || reservation === void 0 ? void 0 : reservation.date))
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-neutral-400",
                children: [reservation.start_time, " -", " ", reservation.end_time]
              })]
            })]
          }), (reservation === null || reservation === void 0 ? void 0 : reservation.table_id) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "font-medium text-sm text-gray-500 mb-1",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Table Name", "wpcafe")
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              children: reservation === null || reservation === void 0 ? void 0 : reservation.table_id
            })]
          }), (reservation === null || reservation === void 0 ? void 0 : reservation.food_items) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "font-medium text-sm text-gray-500 mb-1",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Order Details", "wpcafe")
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "truncate text-primary/85 hover:text-primary cursor-pointer flex items-center gap-2",
              onClick: function onClick() {
                return window.open(orderDetailsUrl, "_blank");
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "w-4 h-4 text-primary"
              }), "#".concat(reservation === null || reservation === void 0 ? void 0 : reservation.invoice)]
            })]
          })]
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/ReservationFilter.tsx":
/*!**********************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/ReservationFilter.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationFilter: () => (/* binding */ ReservationFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/funnel.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_components_form_input_SearchInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components/form-input/SearchInput */ "./assets/src/common/components/form-input/SearchInput.tsx");
/* harmony import */ var _filter_FilterActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter/FilterActions */ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterActions.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
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
 * External Dependencies
 */

/**
 * Internal Dependencies
 */





var ReservationFilter = function ReservationFilter(_ref) {
  var onSearchChange = _ref.onSearchChange,
    _ref$selectedCount = _ref.selectedCount,
    selectedCount = _ref$selectedCount === void 0 ? 0 : _ref$selectedCount,
    onBulkDelete = _ref.onBulkDelete,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    searchValue = _ref.searchValue;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFilterVisible = _useState2[0],
    setIsFilterVisible = _useState2[1];
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores.reservation;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(storeName).getReservationState();
    }, []),
    isFiltering = _useSelect.isFiltering;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-3.5 bg-card text-card-foreground border border-neutral-200 rounded-t-lg",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-2 w-full sm:w-auto",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "outline",
          onClick: function onClick() {
            return setIsFilterVisible(!isFilterVisible);
          },
          className: "flex items-center gap-2",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "h-4 w-4"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Filter", "wpcafe")]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_form_input_SearchInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
          searchFunc: onSearchChange,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search by customer name, email...", "wpcafe"),
          className: "w-full sm:w-64 md:w-80",
          debounceDelay: 1500,
          disabled: disabled,
          value: searchValue
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex items-center gap-2 w-full sm:w-auto justify-end",
        children: selectedCount > 0 && onBulkDelete && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_6__.DeleteConfirmationDialog, {
          onConfirm: onBulkDelete,
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Selected Reservations", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete ".concat(selectedCount, " selected reservation").concat(selectedCount > 1 ? "s" : "", "? This action cannot be undone."), "wpcafe"),
          trigger: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
            variant: "outlineDark",
            className: "text-red-600 hover:text-red-700",
            disabled: isFiltering,
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Selected", "wpcafe"), " (", selectedCount, ")"]
          })
        })
      })]
    }), isFilterVisible && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_filter_FilterActions__WEBPACK_IMPORTED_MODULE_8__.FilterActions, {})]
  });
};

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isValid.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers */ "./assets/src/helpers/index.ts");
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
    var isoDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(dateString, "yyyy-MM-dd", new Date());
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(isoDate)) {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.wpDateFormat)(isoDate);
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
      var dateA = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(a.date, "dd-MM-yyyy", new Date());
      var dateB = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(b.date, "dd-MM-yyyy", new Date());
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(dateA) && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(dateB)) {
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
  var parsed = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.parse)(dateStr, "yyyy-MM-dd", new Date());
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isValid)(parsed) ? parsed : undefined;
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterActions.tsx":
/*!*************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterActions.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterActions: () => (/* binding */ FilterActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _shadcn_components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui/button */ "./assets/src/shadcn/components/ui/button.tsx");
/* harmony import */ var _hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts");
/* harmony import */ var _FilterByStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterByStatus */ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByStatus.tsx");
/* harmony import */ var _FilterByFoodOrder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FilterByFoodOrder */ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByFoodOrder.tsx");
/* harmony import */ var _FilterByDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterByDate */ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByDate.tsx");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */





var FilterActions = function FilterActions(_ref) {
  var className = _ref.className;
  var _useReservationFilter = (0,_hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_4__.useReservationFilter)(),
    isFilterApplied = _useReservationFilter.isFilterApplied,
    handleClearFilters = _useReservationFilter.handleClearFilters;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "p-4 bg-white border border-neutral-200 ".concat(className),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex justify-between gap-4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-w-[200px] flex items-center justify-start gap-1.5",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterByStatus__WEBPACK_IMPORTED_MODULE_5__.FilterByStatus, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterByFoodOrder__WEBPACK_IMPORTED_MODULE_6__.FilterByFoodOrder, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FilterByDate__WEBPACK_IMPORTED_MODULE_7__.FilterByDate, {})]
      }), isFilterApplied && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex justify-end",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "ghost",
          size: "sm",
          onClick: handleClearFilters,
          className: "text-red-600 hover:text-red-700 hover:bg-red-50 gap-2",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "h-4 w-4"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear Filters", "wpcafe")]
        })
      })]
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByDate.tsx":
/*!************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByDate.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByDate: () => (/* binding */ FilterByDate)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui_date_range_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui/date-range-picker */ "./assets/src/shadcn/components/ui/date-range-picker.tsx");
/* harmony import */ var _hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * Internal Dependencies
 */



var FilterByDate = function FilterByDate() {
  var _useReservationFilter = (0,_hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_2__.useReservationFilter)(),
    searchQuery = _useReservationFilter.searchQuery,
    isFiltering = _useReservationFilter.isFiltering,
    handleDateFilter = _useReservationFilter.handleDateFilter;
  var currentDateRange = searchQuery && {
    from: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery["date_range[0]"]) ? (0,_constant__WEBPACK_IMPORTED_MODULE_3__.parseDateString)(searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery["date_range[0]"]) : undefined,
    to: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery["date_range[1]"]) ? (0,_constant__WEBPACK_IMPORTED_MODULE_3__.parseDateString)(searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery["date_range[1]"]) : undefined
  };
  var dateRangeVal = (currentDateRange === null || currentDateRange === void 0 ? void 0 : currentDateRange.from) && (currentDateRange === null || currentDateRange === void 0 ? void 0 : currentDateRange.to) ? currentDateRange : {
    from: undefined,
    to: undefined
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "w-[280px] cursor-pointer",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_date_range_picker__WEBPACK_IMPORTED_MODULE_1__.DateRangePicker, {
      value: dateRangeVal,
      onChange: function onChange(range) {
        return handleDateFilter(range);
      },
      disabled: isFiltering
    })
  });
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

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByStatus.tsx":
/*!**************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/filter/FilterByStatus.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByStatus: () => (/* binding */ FilterByStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/select */ "./assets/src/shadcn/components/ui/select.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");
/* harmony import */ var _hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */


var FilterByStatus = function FilterByStatus() {
  var _useReservationFilter = (0,_hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_4__.useReservationFilter)(),
    searchQuery = _useReservationFilter.searchQuery,
    isFiltering = _useReservationFilter.isFiltering,
    handleStatusFilter = _useReservationFilter.handleStatusFilter;
  // Ensure we always have a defined value for the controlled Select
  var selectedStatus = (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.status) || "";
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.Select, {
    value: selectedStatus,
    onValueChange: function onValueChange(value) {
      return handleStatusFilter(value || null);
    },
    disabled: isFiltering,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectTrigger, {
      className: "w-[148px] cursor-pointer",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectValue, {
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Status", "wpcafe")
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectContent, {
      children: _constant__WEBPACK_IMPORTED_MODULE_3__.ReservationStatus.map(function (option) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_2__.SelectItem, {
          value: option.value,
          children: option.label
        }, option.value);
      })
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useGroupedReservationTable.ts":
/*!************************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/hooks/useGroupedReservationTable.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGroupedReservationTable: () => (/* binding */ useGroupedReservationTable)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");
/* harmony import */ var _useReservationApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useReservationApi */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts");
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
 * Custom hook for grouped reservation table logic
 */





var useGroupedReservationTable = function useGroupedReservationTable(_ref) {
  var selectedRows = _ref.selectedRows;
  var _useReservationApi = (0,_useReservationApi__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    deleteReservation = _useReservationApi.deleteReservation,
    onPaginationChange = _useReservationApi.onPaginationChange;
  // Access reservation states directly from the store
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_2__.stores.reservation;
  var reservationStates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
    return select(storeName).getReservationState();
  }, []);
  var reservationList = reservationStates.reservationList,
    searchQuery = reservationStates.searchQuery,
    total = reservationStates.total;
  // Calculate pagination from state
  var pagination = {
    currentPage: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.paged) || 1,
    totalItems: total || 0,
    perPage: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.per_page) || 10
  };
  // Group reservations by date
  var groupedReservations = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_constant__WEBPACK_IMPORTED_MODULE_3__.groupReservationsByDate)(reservationList);
  }, [reservationList]);
  // Delete handler
  var handleDeleteReservation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (id) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return deleteReservation(id);
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
  }, [deleteReservation]);
  // Group selection state calculator
  var getGroupSelection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (group) {
    return (0,_constant__WEBPACK_IMPORTED_MODULE_3__.getGroupSelectionState)(group, selectedRows);
  }, [selectedRows]);
  return {
    // State
    reservationList: reservationList,
    groupedReservations: groupedReservations,
    pagination: pagination,
    // Handlers
    handleDeleteReservation: handleDeleteReservation,
    getGroupSelection: getGroupSelection,
    onPaginationChange: onPaginationChange
  };
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

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationHandler.ts":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationHandler.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReservationApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReservationApi */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts");
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


var useReservationHandler = function useReservationHandler(_ref) {
  var selectedRows = _ref.selectedRows,
    setSelectedRows = _ref.setSelectedRows;
  var _useReservationApi = (0,_useReservationApi__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    bulkDeleteReservations = _useReservationApi.bulkDeleteReservations;
  var handleEditReservation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (reservation) {
    // Navigate to edit reservation page
    // navigate(`/reservations/update/${reservation.id}`);
    console.log("Edit reservation:", reservation);
  }, []);
  var handleBulkDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(selectedRows.length === 0)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return bulkDeleteReservations(selectedRows);
          case 2:
            setSelectedRows([]);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
  }, [selectedRows, bulkDeleteReservations, setSelectedRows]);
  return {
    handleEditReservation: handleEditReservation,
    handleBulkDelete: handleBulkDelete
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useReservationHandler);

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/index.tsx":
/*!**********************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/index.tsx ***!
  \**********************************************************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _ReservationFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/ReservationFilter.tsx");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table */ "./assets/src/admin/modules/reservation/features/reservation-list/table/index.tsx");
/* harmony import */ var _hooks_useReservationApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useReservationApi */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts");
/* harmony import */ var _hooks_useReservationHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useReservationHandler */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationHandler.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
/* harmony import */ var _hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useReservationFilter */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationFilter.ts");
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
 * External Dependencies
 */

/**
 * Internal Dependencies
 */








var ReservationList = function ReservationList() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRows = _useState2[0],
    setSelectedRows = _useState2[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var _useReservationApi = (0,_hooks_useReservationApi__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    getReservations = _useReservationApi.getReservations;
  var _useReservationFilter = (0,_hooks_useReservationFilter__WEBPACK_IMPORTED_MODULE_12__.useReservationFilter)(),
    handleClearFilters = _useReservationFilter.handleClearFilters,
    handleSearchChange = _useReservationFilter.handleSearchChange;
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_10__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_10__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_10__.stores.reservation;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(storeName).getReservationState();
    }, []),
    reservationList = _useSelect.reservationList,
    searchQuery = _useSelect.searchQuery;
  // Check if user has applied any search/filter
  var _useSearchEmptyState = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_11__.useSearchEmptyState)(searchQuery || {}),
    isQueried = _useSearchEmptyState.isQueried;
  var _useReservationHandle = (0,_hooks_useReservationHandler__WEBPACK_IMPORTED_MODULE_9__["default"])({
      selectedRows: selectedRows,
      setSelectedRows: setSelectedRows
    }),
    handleEditReservation = _useReservationHandle.handleEditReservation,
    handleBulkDelete = _useReservationHandle.handleBulkDelete;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getReservations();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservations", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.Container, {
      children:
      // Show empty screen if no reservations found and no search/filter applied (Initial state)
      !isQueried && (reservationList === null || reservationList === void 0 ? void 0 : reservationList.length) === 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.EmptyScreen, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No reservations found", "wpcafe"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("You don't have any reservations yet. Reservations will appear here once customers start booking tables. You can customize the reservation form in the settings.", "wpcafe"),
        learnMoreText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Read Documentation", "wpcafe"),
        learnMoreUrl: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/reservation-settings/",
        videoTooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How to manage reservations in Wp Cafe?", "wpcafe"),
        addButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customize Reservation form", "wpcafe"),
        onAddButtonClick: function onAddButtonClick() {
          return navigate("/settings?tab=reservation-rules");
        }
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReservationFilter__WEBPACK_IMPORTED_MODULE_6__.ReservationFilter, {
          onSearchChange: handleSearchChange,
          selectedCount: selectedRows.length,
          onBulkDelete: handleBulkDelete,
          searchValue: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.search) || "",
          disabled: (reservationList === null || reservationList === void 0 ? void 0 : reservationList.length) === 0 || !reservationList
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_table__WEBPACK_IMPORTED_MODULE_7__.GroupedReservationTable, {
          onEditReservation: handleEditReservation,
          onSelectionChange: setSelectedRows,
          selectedRows: selectedRows,
          onResetFilters: handleClearFilters
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationList);

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

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationRow.tsx":
/*!*************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationRow.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationRow: () => (/* binding */ ReservationRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui/checkbox */ "./assets/src/shadcn/components/ui/checkbox.tsx");
/* harmony import */ var _shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/table */ "./assets/src/shadcn/components/ui/table.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * Individual Reservation Row Component
 */



var ReservationRow = function ReservationRow(_ref) {
  var reservation = _ref.reservation,
    index = _ref.index,
    isSelected = _ref.isSelected,
    selectedRows = _ref.selectedRows,
    onSelectionChange = _ref.onSelectionChange,
    tableColumns = _ref.tableColumns;
  var key = (0,_constant__WEBPACK_IMPORTED_MODULE_3__.getRowKey)(reservation, index);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
    className: "border-gray-200 ".concat(isSelected ? "bg-[#fd6cad03]" : ""),
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
      className: "px-4",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        className: "cursor-pointer",
        checked: isSelected,
        onCheckedChange: function onCheckedChange(checked) {
          return (0,_constant__WEBPACK_IMPORTED_MODULE_3__.handleRowSelection)(reservation, !!checked, selectedRows, onSelectionChange);
        }
      })
    }), tableColumns.map(function (column) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
        className: "px-4",
        style: {
          textAlign: column.align || "left"
        },
        children: column.render ? column.render(column.dataIndex ? reservation[column.dataIndex] : undefined, reservation) : column.dataIndex ? reservation[column.dataIndex] : null
      }, column.key);
    })]
  }, key);
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationTableHeader.tsx":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationTableHeader.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationTableHeader: () => (/* binding */ ReservationTableHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shadcn/components/ui/checkbox */ "./assets/src/shadcn/components/ui/checkbox.tsx");
/* harmony import */ var _shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shadcn/components/ui/table */ "./assets/src/shadcn/components/ui/table.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * Table Header Component for Grouped Reservation Table
 */



var ReservationTableHeader = function ReservationTableHeader(_ref) {
  var tableColumns = _ref.tableColumns,
    selectedRows = _ref.selectedRows,
    reservationList = _ref.reservationList,
    onSelectionChange = _ref.onSelectionChange;
  var masterSelectionState = (0,_constant__WEBPACK_IMPORTED_MODULE_3__.getMasterSelectionState)(selectedRows, reservationList);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
      className: "border-gray-200",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
        className: "w-12 px-4",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
          className: "cursor-pointer",
          checked: masterSelectionState,
          onCheckedChange: function onCheckedChange(checked) {
            return (0,_constant__WEBPACK_IMPORTED_MODULE_3__.handleMasterSelection)(!!checked, reservationList, onSelectionChange);
          }
        })
      }), tableColumns.map(function (column) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
          className: "text-gray-600 font-medium px-4 whitespace-nowrap",
          style: {
            width: column.width
          },
          children: column.title
        }, column.key);
      })]
    })
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/ReservationActions.tsx":
/*!*************************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/columns/ReservationActions.tsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationActions: () => (/* binding */ ReservationActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/square-pen.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/eye.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shadcn/components/ui/dropdown-menu */ "./assets/src/shadcn/components/ui/dropdown-menu.tsx");
/* harmony import */ var _OrderPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../OrderPreview */ "./assets/src/admin/modules/reservation/features/reservation-list/OrderPreview.tsx");
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
 * External Dependencies
 */




var ReservationActions = function ReservationActions(_ref) {
  var record = _ref.record,
    onDeleteReservation = _ref.onDeleteReservation,
    onEditReservation = _ref.onEditReservation;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showOrderPreview = _useState2[0],
    setShowOrderPreview = _useState2[1];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center gap-1.5",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.IconTooltipButton, {
        icon: function icon() {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "h-4 w-4"
          });
        },
        tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("View Order", "wpcafe"),
        onClick: function onClick() {
          return setShowOrderPreview(true);
        },
        variant: "icon",
        size: "iconCircle",
        tooltipAppendPos: "top",
        buttonClassName: "hover:bg-gray-100 !text-sm font-normal rounded-sm"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenu, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuTrigger, {
          asChild: true,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.IconTooltipButton, {
            icon: function icon() {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                className: "h-4 w-4"
              });
            },
            tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Options", "wpcafe"),
            variant: "icon",
            size: "iconCircle",
            tooltipAppendPos: "top",
            buttonClassName: "hover:bg-gray-100 !text-sm font-normal rounded-sm"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuContent, {
          align: "end",
          className: "w-[160px]",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuItem, {
            className: "flex items-center gap-2 cursor-pointer",
            onClick: function onClick() {
              return onEditReservation(record);
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "h-4 w-4"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Reservation", "wpcafe")
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.DeleteConfirmationDialog, {
            onConfirm: function onConfirm() {
              return onDeleteReservation(record.id);
            },
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Reservation", "wpcafe"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this reservation? This action cannot be undone.", "wpcafe"),
            trigger: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuItem, {
              className: "flex items-center gap-2 cursor-pointer text-red-600 hover:!text-red-700 hover:bg-red-50",
              onSelect: function onSelect(e) {
                return e.preventDefault();
              },
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                className: "h-4 w-4 text-red-600"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "wpcafe")
              })]
            })
          }, record.id)]
        })]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrderPreview__WEBPACK_IMPORTED_MODULE_9__.OrderPreview, {
      open: showOrderPreview,
      onOpenChange: setShowOrderPreview,
      reservation: record
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/Status.tsx":
/*!*************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/columns/Status.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusDropdown: () => (/* binding */ StatusDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _hooks_useReservationApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useReservationApi */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useReservationApi.ts");
/* harmony import */ var _shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui/select */ "./assets/src/shadcn/components/ui/select.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constant */ "./assets/src/admin/modules/reservation/features/reservation-list/constant.ts");

/**
 * WordPress Dependencies
 */


/**
 * Internal Dependencies
 */





var StatusDropdown = function StatusDropdown(_ref) {
  var reservation = _ref.reservation;
  var currentStatus = reservation.status;
  var storeName = _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_3__.stores.reservation;
  var _useReservationApi = (0,_hooks_useReservationApi__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    updateReservationStatus = _useReservationApi.updateReservationStatus;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      var _a;
      return {
        isLoading: ((_a = select(storeName).getReservationState("loadingStatuses")) === null || _a === void 0 ? void 0 : _a[reservation.id]) || false
      };
    }, [reservation.id]),
    isLoading = _useSelect.isLoading;
  var handleStatusChange = function handleStatusChange(newStatus) {
    if (newStatus !== currentStatus) {
      updateReservationStatus(reservation.id, newStatus);
    }
  };
  var getStatusConfig = function getStatusConfig(status) {
    switch (status) {
      case "confirmed":
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Confirmed", "wpcafe"),
          color: "bg-green-500"
        };
      case "pending":
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pending", "wpcafe"),
          color: "bg-yellow-500"
        };
      default:
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cancelled", "wpcafe"),
          color: "bg-red-500"
        };
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {
    value: currentStatus,
    onValueChange: handleStatusChange,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {
      className: "w-36 h-8 border border-neutral-300 p-0 pr-3",
      disabled: isLoading,
      loading: isLoading,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_6__.StatusBadge, {
        label: getStatusConfig(currentStatus).label,
        color: getStatusConfig(currentStatus).color,
        className: "border-none"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {
      children: _constant__WEBPACK_IMPORTED_MODULE_7__.ReservationStatus.map(function (status) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
          value: status.value,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "w-2 h-2 rounded-full ".concat(status.color)
            }), status.label]
          })
        }, status.value);
      })
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/index.tsx":
/*!************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/columns/index.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReservationTableColumns: () => (/* binding */ useReservationTableColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/phone.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Status */ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/Status.tsx");
/* harmony import */ var _ReservationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReservationActions */ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/ReservationActions.tsx");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */



var useReservationTableColumns = function useReservationTableColumns(_ref) {
  var onDeleteReservation = _ref.onDeleteReservation,
    onEditReservation = _ref.onEditReservation;
  return [{
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Date & Time", "wpcafe"),
    dataIndex: "date",
    key: "date",
    width: 150,
    render: function render(_, record) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-sm text-neutral-400",
        children: [record.start_time, " - ", record.end_time]
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Invoice", "wpcafe"),
    dataIndex: "invoice",
    key: "invoice",
    width: 100,
    render: function render(invoice) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "text-sm font-mono",
        children: invoice
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Customer Name", "wpcafe"),
    dataIndex: "name",
    key: "name",
    width: 200,
    render: function render(name) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "font-medium text-sm",
        children: name
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Contact Info", "wpcafe"),
    dataIndex: "name",
    key: "name",
    width: 200,
    render: function render(_, record) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-1.5 text-sm",
        children: [record.email && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: " text-neutral-400 flex items-center gap-1",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "h-3 w-3"
          }), record.email]
        }), record.phone && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: " text-neutral-400 flex items-center gap-1",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "h-3 w-3"
          }), record.phone]
        })]
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Food Order", "wpcafe"),
    dataIndex: "food_items",
    key: "food_items",
    width: 80,
    render: function render(food_items) {
      var isFoodOrder = food_items && (food_items === null || food_items === void 0 ? void 0 : food_items.length) > 0;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "font-medium text-sm ".concat(isFoodOrder ? "text-green-400" : "text-red-400"),
        children: isFoodOrder ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Yes", "wpcafe") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No", "wpcafe")
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Guests", "wpcafe"),
    dataIndex: "total_guest",
    key: "total_guest",
    width: 80,
    render: function render(guests) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-1",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "h-3 w-3"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-sm",
          children: guests
        })]
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Status", "wpcafe"),
    dataIndex: "status",
    key: "status",
    width: 120,
    render: function render(_, record) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Status__WEBPACK_IMPORTED_MODULE_5__.StatusDropdown, {
        reservation: record
      });
    }
  }, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Actions", "wpcafe"),
    key: "actions",
    width: 120,
    render: function render(_, record) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReservationActions__WEBPACK_IMPORTED_MODULE_6__.ReservationActions, {
        record: record,
        onDeleteReservation: onDeleteReservation,
        onEditReservation: onEditReservation
      });
    }
  }];
};

/***/ }),

/***/ "./assets/src/admin/modules/reservation/features/reservation-list/table/index.tsx":
/*!****************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/reservation-list/table/index.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupedReservationTable: () => (/* binding */ GroupedReservationTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var _shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shadcn/components/ui/table */ "./assets/src/shadcn/components/ui/table.tsx");
/* harmony import */ var _common_components_table_TablePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components/table/TablePagination */ "./assets/src/common/components/table/TablePagination.tsx");
/* harmony import */ var _common_components_table_TableSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components/table/TableSkeleton */ "./assets/src/common/components/table/TableSkeleton.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./columns */ "./assets/src/admin/modules/reservation/features/reservation-list/table/columns/index.tsx");
/* harmony import */ var _hooks_useGroupedReservationTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useGroupedReservationTable */ "./assets/src/admin/modules/reservation/features/reservation-list/hooks/useGroupedReservationTable.ts");
/* harmony import */ var _ReservationTableHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReservationTableHeader */ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationTableHeader.tsx");
/* harmony import */ var _ReservationGroupHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReservationGroupHeader */ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationGroupHeader.tsx");
/* harmony import */ var _ReservationRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ReservationRow */ "./assets/src/admin/modules/reservation/features/reservation-list/table/ReservationRow.tsx");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components_table_hooks_useTableWidth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/common/components/table/hooks/useTableWidth */ "./assets/src/common/components/table/hooks/useTableWidth.ts");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */











var GroupedReservationTable = function GroupedReservationTable(_ref) {
  var onEditReservation = _ref.onEditReservation,
    onSelectionChange = _ref.onSelectionChange,
    selectedRows = _ref.selectedRows,
    onResetFilters = _ref.onResetFilters;
  var _useTableWidth = (0,_common_components_table_hooks_useTableWidth__WEBPACK_IMPORTED_MODULE_15__.useTableWidth)(),
    width = _useTableWidth.width;
  // Use the custom hook for all table logic
  var _useGroupedReservatio = (0,_hooks_useGroupedReservationTable__WEBPACK_IMPORTED_MODULE_10__.useGroupedReservationTable)({
      selectedRows: selectedRows,
      onSelectionChange: onSelectionChange
    }),
    reservationList = _useGroupedReservatio.reservationList,
    groupedReservations = _useGroupedReservatio.groupedReservations,
    pagination = _useGroupedReservatio.pagination,
    handleDeleteReservation = _useGroupedReservatio.handleDeleteReservation,
    getGroupSelection = _useGroupedReservatio.getGroupSelection,
    onPaginationChange = _useGroupedReservatio.onPaginationChange;
  var tableColumns = (0,_columns__WEBPACK_IMPORTED_MODULE_9__.useReservationTableColumns)({
    onDeleteReservation: handleDeleteReservation,
    onEditReservation: onEditReservation
  });
  // If loading, render skeleton
  if (!reservationList) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "bg-white rounded-lg border border-gray-200 border-t-0 rounded-t-none",
      style: {
        width: "".concat(width, "px")
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table_TableSkeleton__WEBPACK_IMPORTED_MODULE_7__.TableSkeleton, {
        rows: 5,
        columns: tableColumns.length
      })
    });
  }
  // Handle empty result screen
  if (reservationList.length === 0) {
    var config = {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No reservations found!", "wpcafe"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Try adjusting your search terms or filters to find what you're looking for.", "wpcafe"),
      icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-10 h-10 text-gray-500 dark:text-gray-400"
      }),
      action: onResetFilters ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_14__.Button, {
        variant: "outlinePrimary",
        onClick: onResetFilters,
        className: "mt-4",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "mr-2 h-4 w-4"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear Filters", "wpcafe")]
      }) : undefined,
      className: "bg-white p-6 rounded-b-lg border border-gray-200"
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_8__.TableEmptyScreen, Object.assign({}, config));
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "bg-white rounded-lg border border-gray-200 border-t-0 rounded-t-none",
    style: {
      width: "".concat(width, "px")
    },
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_5__.ShadcnTable, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReservationTableHeader__WEBPACK_IMPORTED_MODULE_11__.ReservationTableHeader, {
        tableColumns: tableColumns,
        selectedRows: selectedRows,
        reservationList: reservationList,
        onSelectionChange: onSelectionChange
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_table__WEBPACK_IMPORTED_MODULE_5__.TableBody, {
        children: groupedReservations === null || groupedReservations === void 0 ? void 0 : groupedReservations.map(function (group, groupIndex) {
          var groupSelectionState = getGroupSelection(group);
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReservationGroupHeader__WEBPACK_IMPORTED_MODULE_12__.ReservationGroupHeader, {
              group: group,
              groupSelectionState: groupSelectionState,
              selectedRows: selectedRows,
              onSelectionChange: onSelectionChange,
              colSpan: tableColumns.length + 1
            }), group.reservations.map(function (reservation, index) {
              var isSelected = selectedRows.includes(reservation.id);
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ReservationRow__WEBPACK_IMPORTED_MODULE_13__.ReservationRow, {
                reservation: reservation,
                index: index,
                isSelected: isSelected,
                selectedRows: selectedRows,
                onSelectionChange: onSelectionChange,
                tableColumns: tableColumns
              }, reservation.id);
            })]
          }, "group-".concat(group.date, "-").concat(groupIndex));
        })
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table_TablePagination__WEBPACK_IMPORTED_MODULE_6__.TablePaginationComponent, {
      current: pagination.currentPage,
      total: pagination.totalItems,
      pageSize: pagination.perPage,
      showSizeChanger: false,
      onChange: onPaginationChange
    })]
  });
};

/***/ }),

/***/ "./assets/src/common/components/form-input/SearchInput.tsx":
/*!*****************************************************************!*\
  !*** ./assets/src/common/components/form-input/SearchInput.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shadcn_components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shadcn/components/ui/input */ "./assets/src/shadcn/components/ui/input.tsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
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
 * WordPress Dependencies
 */


/**
 * Internal Dependencies
 */



var SearchInput = function SearchInput(_ref) {
  var searchFunc = _ref.searchFunc,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search...", "wpcafe") : _ref$placeholder,
    className = _ref.className,
    _ref$debounceDelay = _ref.debounceDelay,
    debounceDelay = _ref$debounceDelay === void 0 ? 1300 : _ref$debounceDelay,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    value = _ref.value;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(value || ""),
    _useState4 = _slicedToArray(_useState3, 2),
    localValue = _useState4[0],
    setLocalValue = _useState4[1];
  var debounceTimer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  // Sync local state with external value (for reset functionality)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setLocalValue(value || "");
  }, [value]);
  // Stable debounced search function using useCallback and useRef
  var debouncedSearch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (searchTerm) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            // Clear any existing timer
            if (debounceTimer.current) {
              clearTimeout(debounceTimer.current);
            }
            // Set new timer
            debounceTimer.current = setTimeout(function () {
              return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                var res, _t;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.p = _context.n) {
                    case 0:
                      setLoading(true);
                      _context.p = 1;
                      _context.n = 2;
                      return searchFunc({
                        search: searchTerm
                      });
                    case 2:
                      res = _context.v;
                      if ((res === null || res === void 0 ? void 0 : res.complete) !== false) {
                        setLoading(false);
                      }
                      _context.n = 4;
                      break;
                    case 3:
                      _context.p = 3;
                      _t = _context.v;
                      console.error("Search error:", _t);
                      setLoading(false);
                    case 4:
                      return _context.a(2);
                  }
                }, _callee, null, [[1, 3]]);
              }));
            }, debounceDelay);
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
  }, [searchFunc, debounceDelay]);
  // Cleanup timer on unmount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);
  var handleInputChange = function handleInputChange(e) {
    var inputValue = e.target.value;
    setLocalValue(inputValue); // Update local state immediately for UI feedback
    debouncedSearch(inputValue); // Trigger debounced search ONLY after delay
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "relative",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "absolute left-3 top-1/2 transform -translate-y-1/2! text-muted-foreground",
      children: loading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "h-4 w-4 animate-spin"
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "h-4 w-4"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
      type: "text",
      placeholder: placeholder,
      value: localValue,
      onChange: handleInputChange,
      disabled: disabled || loading,
      className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("!pl-8 pr-4", className)
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/eye.js":
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/eye.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("eye", __iconNode);


//# sourceMappingURL=eye.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/funnel.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/funnel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Funnel)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("funnel", __iconNode);


//# sourceMappingURL=funnel.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/link-2.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/link-2.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Link2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
];
const Link2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("link-2", __iconNode);


//# sourceMappingURL=link-2.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/mail.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/mail.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Mail)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mail", __iconNode);


//# sourceMappingURL=mail.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/phone.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/phone.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Phone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("phone", __iconNode);


//# sourceMappingURL=phone.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ RotateCcw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rotate-ccw", __iconNode);


//# sourceMappingURL=rotate-ccw.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/search.js":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/search.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("search", __iconNode);


//# sourceMappingURL=search.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/square-pen.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/square-pen.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ SquarePen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
];
const SquarePen = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("square-pen", __iconNode);


//# sourceMappingURL=square-pen.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_reservation-list_index_tsx-_82fe1.js.map