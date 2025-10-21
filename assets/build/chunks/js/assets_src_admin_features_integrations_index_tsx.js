"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_integrations_index_tsx"],{

/***/ "./assets/src/admin/features/integrations/components/IntegrationCard.tsx":
/*!*******************************************************************************!*\
  !*** ./assets/src/admin/features/integrations/components/IntegrationCard.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_components_FeatureCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components/FeatureCard */ "./assets/src/common/components/FeatureCard.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var IntegrationCard = function IntegrationCard(_ref) {
  var name = _ref.name,
    title = _ref.title,
    description = _ref.description,
    status = _ref.status,
    is_pro = _ref.is_pro,
    doc_link = _ref.doc_link,
    settings_link = _ref.settings_link,
    onToggle = _ref.onToggle,
    icon = _ref.icon,
    configContent = _ref.configContent;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_4__.stores.integrations).getIntegrationsState();
    }, []),
    updatingIntegration = _useSelect.updatingIntegration;
  var shouldShowConfigureButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    // escape twilio, thermal-printer, clover-pos from showing configure button
    if (name === "twilio" || name === "thermal-printer" || name === "clover-pos") {
      return false;
    }
    return true;
  }, []);
  var isCurrentIntegrationUpdating = updatingIntegration === name;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_FeatureCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    title: title,
    description: description,
    status: status,
    is_pro: is_pro,
    doc_link: doc_link,
    settings_link: settings_link,
    onToggle: onToggle,
    icon: icon,
    loading: isCurrentIntegrationUpdating,
    showConfigureButton: shouldShowConfigureButton,
    configContent: configContent
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegrationCard);

/***/ }),

/***/ "./assets/src/admin/features/integrations/components/IntegrationsSkeleton.tsx":
/*!************************************************************************************!*\
  !*** ./assets/src/admin/features/integrations/components/IntegrationsSkeleton.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntegrationsSkeleton: () => (/* binding */ IntegrationsSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _admin_features_modules_components_ModulesSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/features/modules/components/ModulesSkeleton */ "./assets/src/admin/features/modules/components/ModulesSkeleton.tsx");


/**
 * Internal dependencies
 */


var IntegrationsSkeleton = function IntegrationsSkeleton() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Integrations", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "bg-white rounded-lg border border-muted p-6",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "space-y-4",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [1, 2, 3, 4, 5, 6].map(function (i) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_features_modules_components_ModulesSkeleton__WEBPACK_IMPORTED_MODULE_3__.ModuleCardSkeleton, {}, i);
            })
          })
        })
      })
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/integrations/config-content/index.tsx":
/*!*************************************************************************!*\
  !*** ./assets/src/admin/features/integrations/config-content/index.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configContent: () => (/* binding */ configContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");

/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * FluentCRM Configuration Content
 */
var FluentCRMConfig = function FluentCRMConfig() {
  var settingsFormMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    control: settingsFormMethods.control,
    name: "fluentcrm_webhook_url",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Webhook URL", "wpcafe"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter your Webhook URL", "wpcafe")
  });
};
/**
 * FluentCRM Configuration Content
 */
var ZapierConfig = function ZapierConfig() {
  var _a, _b, _c;
  var _useFormContext = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    control = _useFormContext.control;
  return (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wp_cafe_config_zapier", null, {
    control: control,
    TextInput: _common_components__WEBPACK_IMPORTED_MODULE_3__.TextInput
  });
};
/**
 * Pabbly Configuration Content
 */
var PabblyConfig = function PabblyConfig() {
  var _a, _b, _c;
  var _useFormContext2 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    control = _useFormContext2.control;
  return (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wp_cafe_config_pabbly", null, {
    control: control,
    TextInput: _common_components__WEBPACK_IMPORTED_MODULE_3__.TextInput
  });
};
/**
 * Google Map Configuration Content
 */
var GoogleMapConfig = function GoogleMapConfig() {
  var _a, _b, _c;
  var _useFormContext3 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)(),
    control = _useFormContext3.control;
  return (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.wp) === null || _a === void 0 ? void 0 : _a.hooks) === null || _b === void 0 ? void 0 : _b.applyFilters) === null || _c === void 0 ? void 0 : _c.call(_b, "wp_cafe_config_google_map", null, {
    control: control,
    TextInput: _common_components__WEBPACK_IMPORTED_MODULE_3__.TextInput
  });
};
/**
 * Configuration content mapping
 * This can be extended with more integrations
 */
var configContent = {
  "fluent-crm": (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FluentCRMConfig, {}),
  zapier: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ZapierConfig, {}),
  pabbly: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PabblyConfig, {}),
  "google-map": (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GoogleMapConfig, {})
};

/***/ }),

/***/ "./assets/src/admin/features/integrations/index.tsx":
/*!**********************************************************!*\
  !*** ./assets/src/admin/features/integrations/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _hooks_useIntegrationsApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useIntegrationsApi */ "./assets/src/admin/features/integrations/hooks/useIntegrationsApi.ts");
/* harmony import */ var _components_IntegrationCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/IntegrationCard */ "./assets/src/admin/features/integrations/components/IntegrationCard.tsx");
/* harmony import */ var _components_IntegrationsSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/IntegrationsSkeleton */ "./assets/src/admin/features/integrations/components/IntegrationsSkeleton.tsx");
/* harmony import */ var _config_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-content */ "./assets/src/admin/features/integrations/config-content/index.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






var Integrations = function Integrations() {
  var _useIntegrationsApi = (0,_hooks_useIntegrationsApi__WEBPACK_IMPORTED_MODULE_5__.useIntegrationsApi)(),
    getIntegrations = _useIntegrationsApi.getIntegrations,
    updateIntegrationStatus = _useIntegrationsApi.updateIntegrationStatus;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores.integrations).getIntegrationsState();
    }, []),
    integrationsData = _useSelect.integrations,
    isLoading = _useSelect.loading;
  // Fetch integrations data on component mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    getIntegrations();
  }, []);
  var handleToggleIntegration = function handleToggleIntegration(name, status) {
    updateIntegrationStatus(name, status);
  };
  // Show skeleton while loading
  if (isLoading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IntegrationsSkeleton__WEBPACK_IMPORTED_MODULE_7__.IntegrationsSkeleton, {});
  }
  // Convert integrations object to array for rendering
  var integrationsArray = integrationsData ? Object.values(integrationsData) : [];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Integrations", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "space-y-6",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "bg-white rounded-lg border border-muted p-6",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
            children: integrationsArray.length > 0 ? integrationsArray.map(function (integration) {
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IntegrationCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
                name: integration.name,
                title: integration.title,
                description: integration.description,
                status: integration.status,
                is_pro: integration.is_pro,
                doc_link: integration.doc_link,
                settings_link: integration.settings_link,
                icon: integration.icon,
                onToggle: handleToggleIntegration,
                configContent: _config_content__WEBPACK_IMPORTED_MODULE_8__.configContent[integration.name]
              }, integration.name);
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "col-span-3 text-center py-12",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-neutral-500",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No integrations available at the moment.", "wpcafe")
              })
            })
          })
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integrations);

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

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_features_integrations_index_tsx.js.map