"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_food-ordering_features_shortcodes_hooks_useFoodOrderShortcode_ts"],{

/***/ "./assets/src/admin/modules/food-ordering/features/shortcodes/hooks/useFoodOrderShortcode.ts":
/*!***************************************************************************************************!*\
  !*** ./assets/src/admin/modules/food-ordering/features/shortcodes/hooks/useFoodOrderShortcode.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers */ "./assets/src/helpers/index.ts");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * WordPress Dependencies
 */

/**
 * Internal dependencies
 */


var useFoodOrderShortcode = function useFoodOrderShortcode() {
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores.shortcodes),
    setShortcodeState = _useDispatch.setShortcodeState;
  var shortcodeState = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
    return select(_globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_1__.stores.shortcodes).getShortcodeState();
  }, []);
  var generateShortcode = function generateShortcode(values) {
    var _a;
    var template = values.template,
      rest = __rest(values, ["template"]);
    var baseId = template || ((_a = shortcodeState === null || shortcodeState === void 0 ? void 0 : shortcodeState.selectedShortcode) === null || _a === void 0 ? void 0 : _a.id);
    var formatValue = function formatValue(v) {
      if (v === undefined || v === null) return null;
      if (Array.isArray(v)) {
        var list = v.map(function (x) {
          return String(x).trim();
        }).filter(Boolean).join(",");
        return list.length ? list : null;
      }
      if (typeof v === "string") {
        var s = v.trim();
        return s.length ? s : null;
      }
      if (typeof v === "number") return String(v);
      if (typeof v === "boolean") return String(v);
      return null; // skip objects and other unsupported types
    };
    var attrs = Object.entries(rest).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];
      var val = formatValue(v);
      return val ? "".concat(k, "=\"").concat(val, "\"") : null;
    }).filter(Boolean).join(" ");
    var shortcode = attrs ? "[".concat(baseId, " ").concat(attrs, "]") : "[".concat(baseId, "]");
    setShortcodeState({
      generatedShortcode: shortcode
    });
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.scrollBottomToModal)();
  };
  return Object.assign(Object.assign({}, shortcodeState), {
    generateShortcode: generateShortcode
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFoodOrderShortcode);

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

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_food-ordering_features_shortcodes_hooks_useFoodOrderShortcode_ts.js.map