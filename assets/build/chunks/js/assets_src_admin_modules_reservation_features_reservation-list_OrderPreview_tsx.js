"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_reservation-list_OrderPreview_tsx"],{

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

/***/ "./assets/src/helpers/getDefaultDateRange.ts":
/*!***************************************************!*\
  !*** ./assets/src/helpers/getDefaultDateRange.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultDateRange: () => (/* binding */ getDefaultDateRange)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addMonths.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.js");
/**
 * External Dependencies
 */

/**
 * Get default date range for reservation system
 * Returns today's date as start and 15th of next month as end
 */
var getDefaultDateRange = function getDefaultDateRange() {
  var today = new Date();
  var nextMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.addMonths)(today, 1);
  var fifteenthOfNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 15);
  return {
    startDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(today, "yyyy-MM-dd"),
    endDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(fifteenthOfNextMonth, "yyyy-MM-dd")
  };
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
/* harmony export */   getDefaultDateRange: () => (/* reexport safe */ _getDefaultDateRange__WEBPACK_IMPORTED_MODULE_8__.getDefaultDateRange),
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
/* harmony import */ var _getDefaultDateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getDefaultDateRange */ "./assets/src/helpers/getDefaultDateRange.ts");











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
function wpDateFormat(date, locale) {
  var _a, _b, _c;
  var pattern = (_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.date_format;
  // Use provided locale, fallback to wpCafeI18nLoader locale, then navigator language, finally 'en-US'
  var resolvedLocale = locale || ((_c = (_b = window === null || window === void 0 ? void 0 : window.wpCafeI18nLoader) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.locale) || (typeof navigator !== "undefined" ? navigator.language : "en-US");
  var fallback = function fallback() {
    return date.toLocaleDateString(resolvedLocale, {
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
  var resolved = resolvedLocale;
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

/***/ "./assets/src/shadcn/components/ui/dialog.tsx":
/*!****************************************************!*\
  !*** ./assets/src/shadcn/components/ui/dialog.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogClose: () => (/* binding */ DialogClose),
/* harmony export */   DialogContent: () => (/* binding */ DialogContent),
/* harmony export */   DialogDescription: () => (/* binding */ DialogDescription),
/* harmony export */   DialogFooter: () => (/* binding */ DialogFooter),
/* harmony export */   DialogHeader: () => (/* binding */ DialogHeader),
/* harmony export */   DialogOverlay: () => (/* binding */ DialogOverlay),
/* harmony export */   DialogPortal: () => (/* binding */ DialogPortal),
/* harmony export */   DialogTitle: () => (/* binding */ DialogTitle),
/* harmony export */   DialogTrigger: () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-dialog */ "./node_modules/@radix-ui/react-dialog/dist/index.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shadcn/lib/utils */ "./assets/src/shadcn/lib/utils.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Root;
var DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Trigger;
var DialogPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Portal;
var DialogClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Close;
var DialogOverlay = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay, Object.assign({
    ref: ref,
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
  }, props));
});
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Overlay.displayName;
var DialogContent = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogOverlay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content, Object.assign({
        ref: ref,
        className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative grid w-full max-w-lg gap-4 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-lg", className)
      }, props, {
        children: [children, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Close, {
          className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-visual-100 cursor-pointer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "h-4 w-4"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "sr-only",
            children: "Close"
          })]
        })]
      }))
    })]
  });
});
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Content.displayName;
var DialogHeader = function DialogHeader(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className)
  }, props));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = function DialogFooter(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
  }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title, Object.assign({
    ref: ref,
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-lg font-semibold leading-none tracking-tight", className)
  }, props));
});
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Title.displayName;
var DialogDescription = _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description, Object.assign({
    ref: ref,
    className: (0,_shadcn_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("text-sm text-gray-500", className)
  }, props));
});
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__.Description.displayName;


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


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_reservation-list_OrderPreview_tsx.js.map