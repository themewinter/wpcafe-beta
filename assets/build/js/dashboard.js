/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "wpCafeI18nLoader":
/*!**********************************************!*\
  !*** external ["window","wpCafeI18nLoader"] ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
if(typeof window === 'undefined') { var e = new Error("Cannot find module 'window.wpCafeI18nLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = window.wpCafeI18nLoader;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/js/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "wp-cafe:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/loading @automattic/i18n-loader-webpack-plugin */
/******/ 	(() => {
/******/ 		var installedChunks = {
/******/ 			"assets_src_admin_store_js": 0,
/******/ 			"assets_src_admin_App_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_index_js": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_food-menu_index_tsx-_ead40": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_food-menu_MenuSectionCard_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_food-menu_constants_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_onboard_index_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_products_components_CategorySelect_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_products_hooks_useWooComApi_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_products_store_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_settings_FoodMenu_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_settings_Notifications_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_settings_constants_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_shortcodes_index_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_shortcodes_FoodOrderingForm_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_shortcodes_MapFormFields_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_shortcodes_constants_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_shortcodes_hooks_useFoodOrderShortcode_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_store_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_index_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_index_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_components_IconSelector_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_components_MiniCartStyle_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_components_SvgIconUpload_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_constants_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_mini-cart_wp-hooks_index_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_CustomAmount_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_TipOptionsManagement_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_TippingForm_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_TippingSettings_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_TippingType_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_constants_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_sub-modules_tipping_wp-hooks_index_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_wp-hooks_index_ts": 0,
/******/ 			"assets_src_admin_modules_food-ordering_wp-hooks_foodOrderOnboard_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_wp-hooks_foodOrderSettings_tsx": 0,
/******/ 			"assets_src_admin_modules_food-ordering_wp-hooks_foodOrderShortcode_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_index_js": 0,
/******/ 			"assets_src_admin_modules_reservation_components_reservation-fields_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_components_reservation-fields_constants_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_components_visual-table_LocationVisualTable_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_components_visual-table_OnboardVisualTable_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_onboard_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_index_tsx-_82fe0": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_OrderPreview_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_ReservationFilter_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_constant_ts-node_modules_date--fa54c6": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_filter_FilterActions_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_filter_FilterByDate_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_filter_FilterByFoodOrder_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_filter_FilterByStatus_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_hooks_useGroupedReservationTab-a3ad6e": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_hooks_useReservationApi_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_hooks_useReservationFilter_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_hooks_useReservationHandler_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_store_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_ReservationGroupHeader_t-6e6304": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_ReservationRow_tsx-node_-8e9c8d": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_ReservationTableHeader_t-99f128": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_columns_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_columns_ReservationActions_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_table_columns_Status_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_MessageSettings_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_AddCustomFieldModal_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_FieldOptionsEditor_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_FormTab_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_ProField_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_SingleField_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_SingleTabBtn_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_SingleTabContent_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_constants_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_form-customization_hooks_useFormCustom-2aee98": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_reservation-settings_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_reservation-settings_ReservationButton-a4cf14": 0,
/******/ 			"assets_src_admin_modules_reservation_features_settings_reservation-settings_ReservationStatus-82cbf1": 0,
/******/ 			"assets_src_admin_modules_reservation_features_shortcodes_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_shortcodes_ReservationForm_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_shortcodes_constants_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_features_shortcodes_hooks_useReservationShortcode_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_store_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_sub-modules_visual-table-reservation_index_tsx-_37690": 0,
/******/ 			"assets_src_admin_modules_reservation_wp-hooks_index_ts": 0,
/******/ 			"assets_src_admin_modules_reservation_wp-hooks_reservationOnboard_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_wp-hooks_reservationSettings_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_wp-hooks_reservationshortcode_tsx": 0,
/******/ 			"assets_src_admin_features_modules_index_tsx": 0,
/******/ 			"assets_src_admin_features_onboard_index_tsx": 0,
/******/ 			"assets_src_admin_features_settings_index_tsx": 0,
/******/ 			"assets_src_admin_features_dashboard_index_tsx": 0,
/******/ 			"assets_src_admin_features_location_location-list_index_tsx": 0,
/******/ 			"assets_src_admin_features_location_create-and-update_index_tsx": 0,
/******/ 			"assets_src_admin_features_integrations_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_features_reservation-list_index_tsx-_82fe1": 0,
/******/ 			"assets_src_admin_features_shortcodes_index_tsx": 0,
/******/ 			"assets_src_admin_modules_reservation_sub-modules_visual-table-reservation_index_tsx-_37691": 0,
/******/ 			"assets_src_admin_modules_food-ordering_features_food-menu_index_tsx-_ead41": 0
/******/ 		};
/******/ 		
/******/ 		var loadI18n = (chunkId) => {
/******/ 			var loader = __webpack_require__(/*! wpCafeI18nLoader */ "wpCafeI18nLoader");
/******/ 			if ( loader && loader.downloadI18n )
/******/ 				return loader.downloadI18n( "assets/build/" + __webpack_require__.u( chunkId ), "wpcafe", "plugin" );
/******/ 			return Promise.reject( new Error( "I18n loader is not available. Check that WordPress is exporting wpCafeI18nLoader." ) );
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.wpI18n = (chunkId, promises) => {
/******/ 			if ( installedChunks[chunkId] ) {
/******/ 				promises.push( installedChunks[chunkId] );
/******/ 			} else if ( installedChunks[chunkId] === 0 ) {
/******/ 				promises.push( installedChunks[chunkId] = loadI18n( chunkId ).then(
/******/ 					() => {
/******/ 						installedChunks[chunkId] = false;
/******/ 					},
/******/ 					(e) => {
/******/ 						installedChunks[chunkId] = 0;
/******/ 						// Log only, we don't want i18n failure to break the entire page.
/******/ 						console.error( "Failed to fetch i18n data: ", e );
/******/ 					}
/******/ 				) );
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dashboard": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./assets/src/dashboard.js ***!
  \*********************************/
__webpack_require__.e(/*! import() */ "assets_src_admin_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! @/admin */ "./assets/src/admin/index.js", 23));
})();

/******/ })()
;
//# sourceMappingURL=dashboard.js.map