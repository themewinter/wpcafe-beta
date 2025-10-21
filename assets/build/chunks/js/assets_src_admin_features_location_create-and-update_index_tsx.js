"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_location_create-and-update_index_tsx"],{

/***/ "./assets/src/admin/features/location/create-and-update/LocationBasicInfo.tsx":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/LocationBasicInfo.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */

var LocationBasicInfo = function LocationBasicInfo() {
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    control = _useFormContext.control;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "space-y-6 w-full",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
      control: control,
      name: "restaurant_name",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Name", "wpcafe"),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter your restaurant's name as you'd like it to appear to customers", "wpcafe"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Your restaurant's name", "wpcafe"),
      required: true
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.LocationInput, {
      control: control,
      name: "location",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location", "wpcafe"),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search or enter address (choose from suggestions if available)", "wpcafe"),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Provide your restaurant's physical location or address", "wpcafe"),
      required: true
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationBasicInfo);

/***/ }),

/***/ "./assets/src/admin/features/location/create-and-update/OverrideOnlineOrdering.tsx":
/*!*****************************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/OverrideOnlineOrdering.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */

var OverrideOnlineOrdering = function OverrideOnlineOrdering() {
  var _a, _b, _c, _d, _e, _f;
  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  var setValue = formMethods.setValue,
    watch = formMethods.watch,
    control = formMethods.control;
  var overrideEnabled = watch("override_online_ordering") === "1";
  var handleToggle = function handleToggle(enabled) {
    setValue("override_online_ordering", enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  var handleSubModuleToggle = function handleSubModuleToggle(name, enabled) {
    setValue(name, enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.ModuleConditional, {
    moduleName: "food_ordering",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components__WEBPACK_IMPORTED_MODULE_3__.CardWithToggle, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Default Online Ordering", "wpcafe"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable this to set custom online ordering options for this location", "wpcafe"),
      switchable: true,
      defaultEnabled: overrideEnabled,
      onToggle: handleToggle,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.ModuleConditional, {
        moduleName: "pickup",
        children: (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_pickup_onboarding", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.SingleSwitchBox, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pickup", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable pickup orders for your restaurant.", "wpcafe"),
          name: "pickup",
          isPro: true
        }), {
          control: control,
          InputWithAddonInput: _common_components__WEBPACK_IMPORTED_MODULE_3__.InputWithAddonInput,
          switchable: true,
          defaultEnabled: watch("enable_pickup") === "1",
          onToggle: function onToggle(enabled) {
            return handleSubModuleToggle("enable_pickup", enabled);
          }
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.ModuleConditional, {
        moduleName: "delivery",
        children: (_f = (_e = (_d = window === null || window === void 0 ? void 0 : window.wp) === null || _d === void 0 ? void 0 : _d.hooks) === null || _e === void 0 ? void 0 : _e.applyFilters) === null || _f === void 0 ? void 0 : _f.call(_e, "wpcafe_delivery_onboarding", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.SingleSwitchBox, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delivery", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable delivery orders for your restaurant.", "wpcafe"),
          name: "delivery",
          isPro: true
        }), {
          control: control,
          InputWithAddonInput: _common_components__WEBPACK_IMPORTED_MODULE_3__.InputWithAddonInput,
          switchable: true,
          defaultEnabled: watch("enable_delivery") === "1",
          onToggle: function onToggle(enabled) {
            return handleSubModuleToggle("enable_delivery", enabled);
          }
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideOnlineOrdering);

/***/ }),

/***/ "./assets/src/admin/features/location/create-and-update/OverrideOpenHours.tsx":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/OverrideOpenHours.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _admin_features_settings_tabs_schedule_OverrideSchedulePickup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/features/settings/tabs/schedule/OverrideSchedulePickup */ "./assets/src/admin/features/settings/tabs/schedule/OverrideSchedulePickup.tsx");
/* harmony import */ var _admin_features_settings_tabs_schedule_OverrideScheduleDelivery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/features/settings/tabs/schedule/OverrideScheduleDelivery */ "./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleDelivery.tsx");
/* harmony import */ var _admin_features_settings_tabs_schedule_OverrideScheduleReservation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/features/settings/tabs/schedule/OverrideScheduleReservation */ "./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleReservation.tsx");

/*
 ** Wordpress dependencies
 */

/*
 ** External dependencies
 */





var OverrideOpenHours = function OverrideOpenHours() {
  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  var setValue = formMethods.setValue,
    getValues = formMethods.getValues,
    watch = formMethods.watch;
  /**
   * Get current schedule value with fallback to default
   */
  var currentSchedule = getValues("restaurant_schedule") || _common_components__WEBPACK_IMPORTED_MODULE_3__.defaultSchedule;
  var overrideEnabled = watch("override_restaurant_schedule") === "1";
  /**
   * Handle schedule update
   */
  var handleScheduleUpdate = function handleScheduleUpdate(scheduleData) {
    setValue("restaurant_schedule", scheduleData, {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  var handleToggle = function handleToggle(enabled) {
    setValue("override_restaurant_schedule", enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components__WEBPACK_IMPORTED_MODULE_3__.CardWithToggle, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Default Open Hours", "wpcafe"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable this to set custom open hours for this location", "wpcafe"),
      switchable: true,
      defaultEnabled: overrideEnabled,
      onToggle: handleToggle,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.ScheduleManagement, {
        value: Array.isArray(currentSchedule) ? _common_components__WEBPACK_IMPORTED_MODULE_3__.defaultSchedule : currentSchedule,
        onChange: handleScheduleUpdate,
        className: "border-none !p-0"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_settings_tabs_schedule_OverrideSchedulePickup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        formMethods: formMethods
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_settings_tabs_schedule_OverrideScheduleDelivery__WEBPACK_IMPORTED_MODULE_5__["default"], {
        formMethods: formMethods
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_settings_tabs_schedule_OverrideScheduleReservation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        formMethods: formMethods
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideOpenHours);

/***/ }),

/***/ "./assets/src/admin/features/location/create-and-update/OverrideReservation.tsx":
/*!**************************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/OverrideReservation.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress Dependencies
 */

/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */

var OverrideReservation = function OverrideReservation() {
  var _a, _b, _c;
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    setValue = _useFormContext.setValue,
    watch = _useFormContext.watch;
  var overrideEnabled = watch("override_reservation") === "1";
  var reservationEnabled = watch("enable_reservation") === "1";
  var handleOverrideToggle = function handleOverrideToggle(enabled) {
    setValue("override_reservation", enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  var handleReservationToggle = function handleReservationToggle(enabled) {
    setValue("enable_reservation", enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.ModuleConditional, {
    moduleName: "reservation",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.CardWithToggle, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Default Reservation", "wpcafe"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable this to set custom reservation options for this location", "wpcafe"),
      switchable: true,
      defaultEnabled: overrideEnabled,
      onToggle: handleOverrideToggle,
      children: (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_reservation_onboard", null, {
        switchable: true,
        defaultEnabled: reservationEnabled,
        onToggle: handleReservationToggle
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideReservation);

/***/ }),

/***/ "./assets/src/admin/features/location/create-and-update/index.tsx":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/index.tsx ***!
  \************************************************************************/
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
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/list.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _LocationBasicInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocationBasicInfo */ "./assets/src/admin/features/location/create-and-update/LocationBasicInfo.tsx");
/* harmony import */ var _OverrideOpenHours__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OverrideOpenHours */ "./assets/src/admin/features/location/create-and-update/OverrideOpenHours.tsx");
/* harmony import */ var _OverrideOnlineOrdering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./OverrideOnlineOrdering */ "./assets/src/admin/features/location/create-and-update/OverrideOnlineOrdering.tsx");
/* harmony import */ var _OverrideReservation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OverrideReservation */ "./assets/src/admin/features/location/create-and-update/OverrideReservation.tsx");
/* harmony import */ var _hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var _hooks_useLocationForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useLocationForm */ "./assets/src/admin/features/location/hooks/useLocationForm.ts");
/* harmony import */ var _admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/admin/router/routeDefinition */ "./assets/src/admin/router/routeDefinition.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/*
 ** Wordpress Dependencies
 */



/*
 ** External Dependencies
 */



/*
 ** Internal Dependencies
 */










var LocationCreateEdit = function LocationCreateEdit() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    id = _useParams.id;
  var locationId = id ? Number(id) : null;
  var _useLocationApi = (0,_hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_13__["default"])(),
    createLocation = _useLocationApi.createLocation,
    updateLocation = _useLocationApi.updateLocation,
    clearSingleLocation = _useLocationApi.clearSingleLocation;
  // Use the custom hook for form management
  var _useLocationForm = (0,_hooks_useLocationForm__WEBPACK_IMPORTED_MODULE_14__.useLocationForm)({
      locationId: locationId
    }),
    methods = _useLocationForm.methods,
    handleSubmit = _useLocationForm.handleSubmit,
    reset = _useLocationForm.reset,
    isEditMode = _useLocationForm.isEditMode,
    isLoading = _useLocationForm.isLoading;
  // Access isFiltering state from location store
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_16__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_16__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_16__.stores.location).getLocationState();
    }, []),
    isFiltering = _useSelect.isFiltering;
  var onSubmit = function onSubmit(formData) {
    if (locationId) {
      updateLocation(locationId, formData);
    } else {
      createLocation(formData);
    }
  };
  var handleCancel = function handleCancel() {
    // only reset the form when creating a new location and then navigate back
    if (!isEditMode) {
      reset();
    }
    navigate(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_15__.LOCATION_PATH);
  };
  // Clear single location data when component unmounts or location ID changes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return function () {
      // Clear single location data when leaving the component
      clearSingleLocation();
    };
  }, []);
  // Dynamic page title and button text
  var pageTitle = isEditMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Location", "wpcafe") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create Location", "wpcafe");
  var submitButtonText = isEditMode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Save Changes", "wpcafe") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create", "wpcafe");
  // Show loading only in edit mode while data is being fetched
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_8__.FullscreenSkeleton, {});
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_5__.FormProvider, Object.assign({}, methods, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.TopHeader, {
        title: pageTitle,
        rightContent: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex gap-3",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_8__.Button, {
            type: "button",
            variant: "softSecondary",
            onClick: handleCancel,
            disabled: isFiltering,
            children: _globalConstant__WEBPACK_IMPORTED_MODULE_16__.cancelBtnText
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_8__.Button, {
            type: "submit",
            loading: isFiltering,
            children: submitButtonText
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_7__.Container, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_common_components__WEBPACK_IMPORTED_MODULE_7__.SectionInfo, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Basic Information", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(locationId ? "Update the information for your restaurant location." : "Provide the basic information for your restaurant location.", "wpcafe"),
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
          className: "rounded-sm py-12 w-full max-w-3xl",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LocationBasicInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OverrideOpenHours__WEBPACK_IMPORTED_MODULE_10__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OverrideOnlineOrdering__WEBPACK_IMPORTED_MODULE_11__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OverrideReservation__WEBPACK_IMPORTED_MODULE_12__["default"], {})]
        })
      })]
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationCreateEdit);

/***/ }),

/***/ "./assets/src/admin/features/location/create-and-update/schema.ts":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/location/create-and-update/schema.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocationDefaultsFromSettings: () => (/* binding */ getLocationDefaultsFromSettings),
/* harmony export */   locationFormSchema: () => (/* binding */ locationFormSchema)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ "./node_modules/zod/v4/classic/schemas.js");
/* harmony import */ var _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/features/settings/settingsSchema */ "./assets/src/admin/features/settings/settingsSchema.ts");
/* harmony import */ var _admin_features_onboard_onboardSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/features/onboard/onboardSchema */ "./assets/src/admin/features/onboard/onboardSchema.ts");
/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */


/**
 * Location-specific fields schema
 */
var locationSpecificSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
  // Location-specific required fields
  location: _admin_features_onboard_onboardSchema__WEBPACK_IMPORTED_MODULE_2__.onboardSchema.shape.restaurant_location,
  status: zod__WEBPACK_IMPORTED_MODULE_0__["enum"](["publish", "draft"]),
  // Location-specific override toggle fields
  override_restaurant_schedule: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  override_online_ordering: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  override_reservation: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  // Location-specific module enable/disable fields
  enable_pickup: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  enable_delivery: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  enable_reservation: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional(),
  reservation_enable_table_layout: _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.trueFalseField.optional()
});
/**
 * Location Create/Edit Form Schema
 * Selectively picks needed schemas from settings instead of extending all
 */
var locationFormSchema = _admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.restaurantInfoSchema.merge(_admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.scheduleManagementSchema).merge(_admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.pickupSchema).merge(_admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.deliverySchema).merge(_admin_features_settings_settingsSchema__WEBPACK_IMPORTED_MODULE_1__.reservationSchema).merge(locationSpecificSchema).partial(); // All fields are optional except location-specific required ones
/**
 * Utility function to extract location-relevant fields from settings data
 * This ensures we only get the fields that are actually used in location forms
 */
var getLocationDefaultsFromSettings = function getLocationDefaultsFromSettings(settingsData) {
  if (!settingsData) return {};
  // Get the shape of locationFormSchema to know which fields to pick
  var locationSchemaKeys = Object.keys(locationFormSchema.shape);
  // Pick only the fields that exist in both settingsData and locationFormSchema
  var locationDefaults = {};
  locationSchemaKeys.forEach(function (key) {
    if (settingsData[key] !== undefined) {
      locationDefaults[key] = settingsData[key];
    }
  });
  return locationDefaults;
};

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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./assets/src/admin/features/location/utils.ts");
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
      var _a, _b, payload, res, _select$getLocationSt3, currentLocationList, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setLocationState({
              isFiltering: true,
              error: null
            });
            // Prepare payload with restaurant_type based on overrides
            payload = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.prepareLocationPayload)(values);
            console.log("✨ ~ createLocation ~ payload:", payload);
            _context5.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.createLocation(payload);
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
      var _a, payload, res, _select$getLocationSt4, currentLocationList, updatedList, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            setLocationState({
              isFiltering: true,
              updatingLocationId: id,
              error: null
            });
            // Prepare payload with restaurant_type based on overrides
            payload = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.prepareLocationPayload)(values);
            _context6.n = 1;
            return (_a = _api__WEBPACK_IMPORTED_MODULE_2__["default"] === null || _api__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : _api__WEBPACK_IMPORTED_MODULE_2__["default"].location) === null || _a === void 0 ? void 0 : _a.updateLocation(id, payload);
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

/***/ "./assets/src/admin/features/location/hooks/useLocationForm.ts":
/*!*********************************************************************!*\
  !*** ./assets/src/admin/features/location/hooks/useLocationForm.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocationForm: () => (/* binding */ useLocationForm)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/zod */ "./node_modules/@hookform/resolvers/zod/dist/zod.mjs");
/* harmony import */ var _create_and_update_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-and-update/schema */ "./assets/src/admin/features/location/create-and-update/schema.ts");
/* harmony import */ var _useLocationApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
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
 * Custom hook to manage location form state and operations
 * Handles both create and edit modes with proper data loading and form initialization
 */
var useLocationForm = function useLocationForm(_ref) {
  var locationId = _ref.locationId;
  var _useLocationApi = (0,_useLocationApi__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    getSingleLocation = _useLocationApi.getSingleLocation;
  // Access states from stores
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores.settings).getSettingsState();
    }, []),
    settingsData = _useSelect.data;
  var _useSelect2 = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_6__.stores.location).getLocationState();
    }, []),
    singleLocation = _useSelect2.singleLocation;
  // Get only location-relevant fields from settings data
  var settingsDefaults = (0,_create_and_update_schema__WEBPACK_IMPORTED_MODULE_4__.getLocationDefaultsFromSettings)(settingsData);
  var defaultValues = Object.assign(Object.assign({}, settingsDefaults), {
    // Location-specific defaults
    restaurant_name: "",
    location: "",
    status: "publish",
    override_restaurant_schedule: "0",
    override_online_ordering: "0",
    override_reservation: "0",
    override_pickup_schedule: "0",
    override_delivery_schedule: "0",
    override_reservation_schedule: "0",
    // Location-specific module enable/disable defaults
    enable_pickup: "0",
    enable_delivery: "0",
    enable_reservation: "0",
    reservation_enable_table_layout: "0"
  });
  // Map location data to form values
  var mapLocationToFormValues = function mapLocationToFormValues(location) {
    // Start with default values and override with location-specific values
    var mappedValues = Object.assign({}, defaultValues);
    // Override with location data where available
    Object.keys(defaultValues).forEach(function (key) {
      var locationValue = location === null || location === void 0 ? void 0 : location[key];
      if (locationValue !== undefined && locationValue !== null) {
        mappedValues[key] = locationValue;
      }
    });
    // Ensure required location-specific fields have proper defaults
    mappedValues.restaurant_name = (location === null || location === void 0 ? void 0 : location.restaurant_name) || defaultValues.restaurant_name;
    mappedValues.location = (location === null || location === void 0 ? void 0 : location.location) || defaultValues.location;
    mappedValues.status = (location === null || location === void 0 ? void 0 : location.status) || defaultValues.status;
    // Ensure override fields have proper string defaults
    mappedValues.override_restaurant_schedule = (location === null || location === void 0 ? void 0 : location.override_restaurant_schedule) || defaultValues.override_restaurant_schedule;
    mappedValues.override_online_ordering = (location === null || location === void 0 ? void 0 : location.override_online_ordering) || defaultValues.override_online_ordering;
    mappedValues.override_reservation = (location === null || location === void 0 ? void 0 : location.override_reservation) || defaultValues.override_reservation;
    mappedValues.override_pickup_schedule = (location === null || location === void 0 ? void 0 : location.override_pickup_schedule) || defaultValues.override_pickup_schedule;
    mappedValues.override_delivery_schedule = (location === null || location === void 0 ? void 0 : location.override_delivery_schedule) || defaultValues.override_delivery_schedule;
    mappedValues.override_reservation_schedule = (location === null || location === void 0 ? void 0 : location.override_reservation_schedule) || defaultValues.override_reservation_schedule;
    // Ensure location-specific module enable/disable fields have proper defaults
    mappedValues.enable_pickup = (location === null || location === void 0 ? void 0 : location.enable_pickup) || defaultValues.enable_pickup;
    mappedValues.enable_delivery = (location === null || location === void 0 ? void 0 : location.enable_delivery) || defaultValues.enable_delivery;
    mappedValues.enable_reservation = (location === null || location === void 0 ? void 0 : location.enable_reservation) || defaultValues.enable_reservation;
    mappedValues.reservation_enable_table_layout = (location === null || location === void 0 ? void 0 : location.reservation_enable_table_layout) || defaultValues.reservation_enable_table_layout;
    return mappedValues;
  };
  // Initialize form with proper configuration
  var methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(Object.assign({
    resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_3__.zodResolver)(_create_and_update_schema__WEBPACK_IMPORTED_MODULE_4__.locationFormSchema),
    // Fallback default values for create mode
    defaultValues: defaultValues
  }, locationId && singleLocation && {
    values: mapLocationToFormValues(singleLocation)
  }));
  // Fetch location data for edit mode
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!locationId) return;
    if (singleLocation && singleLocation.term_id === locationId) return; // Check if we have the correct location data
    getSingleLocation(locationId);
  }, [locationId]);
  // Determine mode
  var isEditMode = Boolean(locationId);
  var isLoading = isEditMode && (!singleLocation || singleLocation.term_id !== locationId);
  return {
    // Form methods
    methods: methods,
    // Convenience destructured methods
    handleSubmit: methods.handleSubmit,
    reset: methods.reset,
    // State
    isEditMode: isEditMode,
    isLoading: isLoading,
    locationId: locationId,
    // Data
    settingsData: settingsData,
    singleLocation: singleLocation
  };
};

/***/ }),

/***/ "./assets/src/admin/features/location/utils.ts":
/*!*****************************************************!*\
  !*** ./assets/src/admin/features/location/utils.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateLocationHolidays: () => (/* binding */ calculateLocationHolidays),
/* harmony export */   getHolidaysFromSchedule: () => (/* binding */ getHolidaysFromSchedule),
/* harmony export */   getLocationAddress: () => (/* binding */ getLocationAddress),
/* harmony export */   getRestaurantTypeFromOverrides: () => (/* binding */ getRestaurantTypeFromOverrides),
/* harmony export */   prepareLocationPayload: () => (/* binding */ prepareLocationPayload)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress Dependencies
 */

var DAY_NAMES_SHORT = {
  Mon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mon", "wpcafe"),
  Tue: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tue", "wpcafe"),
  Wed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wed", "wpcafe"),
  Thu: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thu", "wpcafe"),
  Fri: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fri", "wpcafe"),
  Sat: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sat", "wpcafe"),
  Sun: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sun", "wpcafe")
};
/**
 * Extract holidays from schedule data
 */
var getHolidaysFromSchedule = function getHolidaysFromSchedule(schedule) {
  var holidays = [];
  Object.entries(schedule).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      day = _ref2[0],
      daySchedule = _ref2[1];
    if (daySchedule.status === "off") {
      holidays.push(DAY_NAMES_SHORT[day]);
    }
  });
  return holidays;
};
/**
 * Calculate holidays for a location based on override settings
 */
var calculateLocationHolidays = function calculateLocationHolidays(location, globalSchedule) {
  var holidays = [];
  if (location.override_restaurant_schedule === "1" && Array.isArray(location.restaurant_schedule) === false) {
    // Use location-specific schedule
    holidays = getHolidaysFromSchedule(location.restaurant_schedule);
  } else if (globalSchedule) {
    // Use global schedule from settings
    holidays = getHolidaysFromSchedule(globalSchedule);
  }
  if (holidays.length === 0) {
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "wpcafe");
  }
  return holidays.join(", ");
};
/**
 * Extract address string from location data (either string or LocationValue object)
 */
var getLocationAddress = function getLocationAddress(location) {
  if (!location) {
    return "";
  }
  if (typeof location === "string") {
    return location;
  }
  if (_typeof(location) === "object" && location !== null && "address" in location) {
    return location.address || "";
  }
  return "";
};
/**
 * Manipulate restaurant_type array based on override toggles for location payload
 *
 * @param formData - The location form data
 * @returns Array of restaurant types based on override settings
 */
var getRestaurantTypeFromOverrides = function getRestaurantTypeFromOverrides(formData) {
  var restaurantTypes = [];
  // If override_online_ordering = "1" then push "food_ordering"
  if (formData.override_online_ordering === "1") {
    restaurantTypes.push("food_ordering");
  }
  // If override_reservation = "1" then push "reservation"
  if (formData.override_reservation === "1") {
    restaurantTypes.push("reservation");
  }
  // If both are "0", return empty array
  // If one or both are "1", return the corresponding types
  return restaurantTypes;
};
/**
 * Prepare location payload by manipulating restaurant_type based on overrides
 *
 * @param formData - The location form data
 * @returns Processed form data ready for API submission
 */
var prepareLocationPayload = function prepareLocationPayload(formData) {
  var payload = Object.assign({}, formData);
  // Override restaurant_type based on module overrides
  payload.restaurant_type = getRestaurantTypeFromOverrides(formData);
  return payload;
};

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

/***/ "./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleDelivery.tsx":
/*!***************************************************************************************!*\
  !*** ./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleDelivery.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var OverrideScheduleDelivery = function OverrideScheduleDelivery(_ref) {
  var formMethods = _ref.formMethods;
  var _a, _b, _c;
  //  Pro enabled and delivery module enabled - show full functionality
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.ModuleConditional, {
    moduleName: "delivery",
    children: (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_override_delivery_schedule", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.SingleSwitchBox, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Delivery Schedule", "wpcafe"),
      name: "override_delivery_schedule",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override resturant schedule for delivery", "wpcafe"),
      isPro: true
    }), {
      formMethods: formMethods,
      ScheduleManagement: _common_components__WEBPACK_IMPORTED_MODULE_2__.ScheduleManagement,
      scheduleManagementClassName: "border-none !p-0"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideScheduleDelivery);

/***/ }),

/***/ "./assets/src/admin/features/settings/tabs/schedule/OverrideSchedulePickup.tsx":
/*!*************************************************************************************!*\
  !*** ./assets/src/admin/features/settings/tabs/schedule/OverrideSchedulePickup.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

var OverrideSchedulePickup = function OverrideSchedulePickup(_ref) {
  var formMethods = _ref.formMethods;
  var _a, _b, _c;
  // Pro enabled and pickup module enabled - show full functionality
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.ModuleConditional, {
    moduleName: "pickup",
    children: (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wpcafe_override_pickup_schedule", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.SingleSwitchBox, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Pickup Schedule", "wpcafe"),
      name: "override_pickup_schedule",
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override resturant schedule for pickup", "wpcafe"),
      isPro: true
    }), {
      formMethods: formMethods,
      ScheduleManagement: _common_components__WEBPACK_IMPORTED_MODULE_2__.ScheduleManagement,
      scheduleManagementClassName: "border-none !p-0"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideSchedulePickup);

/***/ }),

/***/ "./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleReservation.tsx":
/*!******************************************************************************************!*\
  !*** ./assets/src/admin/features/settings/tabs/schedule/OverrideScheduleReservation.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_components_schedule_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components/schedule-management */ "./assets/src/common/components/schedule-management/index.ts");

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var OverrideScheduleReservation = function OverrideScheduleReservation(_ref) {
  var formMethods = _ref.formMethods;
  if (!formMethods) return null;
  var setValue = formMethods.setValue,
    watch = formMethods.watch,
    getValues = formMethods.getValues;
  var overrideEnabled = watch("override_reservation_schedule") === "1";
  var handleToggle = function handleToggle(enabled) {
    setValue("override_reservation_schedule", enabled ? "1" : "0", {
      shouldDirty: true,
      shouldTouch: true
    });
    // If enabling override, initialize with restaurant schedule or default
    if (enabled) {
      var restaurantSchedule = getValues("restaurant_schedule");
      var currentReservationSchedule = getValues("reservation_schedule");
      if (!currentReservationSchedule) {
        setValue("reservation_schedule", restaurantSchedule || _common_components_schedule_management__WEBPACK_IMPORTED_MODULE_3__.defaultSchedule, {
          shouldDirty: true,
          shouldTouch: true
        });
      }
      // Initialize slot interval if not set
      var currentSlotInterval = getValues("reservation_slot_interval");
      var globalSlotInterval = getValues("slot_interval");
      if (!currentSlotInterval) {
        setValue("reservation_slot_interval", globalSlotInterval || 30, {
          shouldDirty: true,
          shouldTouch: true
        });
      }
    }
  };
  var handleScheduleUpdate = function handleScheduleUpdate(scheduleData) {
    setValue("reservation_schedule", scheduleData, {
      shouldDirty: true,
      shouldTouch: true
    });
  };
  var currentSchedule = getValues("reservation_schedule") || getValues("restaurant_schedule") || _common_components_schedule_management__WEBPACK_IMPORTED_MODULE_3__.defaultSchedule;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.ModuleConditional, {
    moduleName: "reservation",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.CardWithToggle, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override Reservation Schedule", "wpcafe"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Override restaurant schedule for reservation", "wpcafe"),
      switchable: true,
      defaultEnabled: overrideEnabled,
      onToggle: handleToggle,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_schedule_management__WEBPACK_IMPORTED_MODULE_3__.ScheduleManagement, {
        value: currentSchedule,
        onChange: handleScheduleUpdate,
        slotIntervalName: "reservation_slot_interval",
        slotIntervalLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation Time Intervals", "wpcafe"),
        slotIntervalTooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The interval between reservation slots. This is used to generate the slots for reservation booking.", "wpcafe"),
        slotIntervalHelperText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This affects reservation booking slots", "wpcafe"),
        className: "border-none !p-0"
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverrideScheduleReservation);

/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/list.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/list.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
];
const List = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("list", __iconNode);


//# sourceMappingURL=list.js.map


/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_location_create-and-update_index_tsx.js.map