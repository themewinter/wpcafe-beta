"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_modules_reservation_features_settings_form-customization_hooks_useCustomFiel-98240b"],{

/***/ "./assets/src/admin/modules/reservation/features/settings/form-customization/hooks/useCustomFieldModal.ts":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/admin/modules/reservation/features/settings/form-customization/hooks/useCustomFieldModal.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useCustomFieldModal: () => (/* binding */ useCustomFieldModal)
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
 * WordPress Dependencies
 */

var useCustomFieldModal = function useCustomFieldModal(_ref) {
  var editingField = _ref.editingField,
    onCreate = _ref.onCreate,
    onUpdate = _ref.onUpdate,
    openExternal = _ref.openExternal,
    onOpenChangeExternal = _ref.onOpenChangeExternal;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    internalOpen = _useState2[0],
    setInternalOpen = _useState2[1];
  var open = typeof openExternal === "boolean" ? openExternal : internalOpen;
  var setOpen = function setOpen(next) {
    if (onOpenChangeExternal) onOpenChangeExternal(next);else setInternalOpen(next);
  };
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      var _a, _b;
      return {
        type: (editingField === null || editingField === void 0 ? void 0 : editingField.type) || "text",
        required: (_a = editingField === null || editingField === void 0 ? void 0 : editingField.required) !== null && _a !== void 0 ? _a : true,
        label: (editingField === null || editingField === void 0 ? void 0 : editingField.label) || "",
        placeholder: (editingField === null || editingField === void 0 ? void 0 : editingField.placeholder) || "",
        options: ((_b = editingField === null || editingField === void 0 ? void 0 : editingField.options) === null || _b === void 0 ? void 0 : _b.length) && ["select", "radio", "checkbox"].includes(editingField.type) ? editingField.options : [{
          label: "",
          value: ""
        }]
      };
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    fieldDraft = _useState4[0],
    setFieldDraft = _useState4[1];
  // Keep draft synced when editing target changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _a, _b;
    if (!editingField) return;
    setFieldDraft({
      type: editingField.type,
      required: (_a = editingField.required) !== null && _a !== void 0 ? _a : true,
      label: editingField.label,
      placeholder: editingField.placeholder || "",
      options: ((_b = editingField.options) === null || _b === void 0 ? void 0 : _b.length) && ["select", "radio", "checkbox"].includes(editingField.type) ? editingField.options : [{
        label: "",
        value: ""
      }]
    });
  }, [editingField]);
  var reset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _a, _b;
    if (editingField) {
      setFieldDraft({
        type: editingField.type,
        required: (_a = editingField.required) !== null && _a !== void 0 ? _a : true,
        label: editingField.label,
        placeholder: editingField.placeholder || "",
        options: ((_b = editingField.options) === null || _b === void 0 ? void 0 : _b.length) && ["select", "radio", "checkbox"].includes(editingField.type) ? editingField.options : [{
          label: "",
          value: ""
        }]
      });
    } else {
      setFieldDraft({
        type: "text",
        required: true,
        label: "",
        placeholder: "",
        options: [{
          label: "",
          value: ""
        }]
      });
    }
  }, [editingField]);
  var isOptionType = ["select", "radio", "checkbox"].includes(fieldDraft.type);
  var canSubmit = !isOptionType || fieldDraft.options.some(function (o) {
    return o.label.trim();
  });
  var handleOptionsChange = function handleOptionsChange(next) {
    return setFieldDraft(function (prev) {
      return Object.assign(Object.assign({}, prev), {
        options: next
      });
    });
  };
  var submit = function submit() {
    if (!canSubmit) return;
    var payload = {
      type: fieldDraft.type,
      required: fieldDraft.required,
      label: fieldDraft.label.trim(),
      placeholder: fieldDraft.placeholder.trim(),
      options: isOptionType ? fieldDraft.options.filter(function (o) {
        return o.label.trim();
      }).map(function (o) {
        return Object.assign(Object.assign({}, o), {
          label: o.label.trim()
        });
      }) : undefined
    };
    if (editingField && onUpdate) onUpdate(editingField.id, payload);else onCreate(payload);
    setOpen(false);
    if (!editingField) reset();
  };
  var showPlaceholder = !["visual_table", "food_menu"].includes(fieldDraft.type);
  return {
    open: open,
    setOpen: setOpen,
    fieldDraft: fieldDraft,
    setFieldDraft: setFieldDraft,
    isOptionType: isOptionType,
    canSubmit: canSubmit,
    submit: submit,
    handleOptionsChange: handleOptionsChange,
    showPlaceholder: showPlaceholder
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCustomFieldModal);

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_modules_reservation_features_settings_form-customization_hooks_useCustomFiel-98240b.js.map