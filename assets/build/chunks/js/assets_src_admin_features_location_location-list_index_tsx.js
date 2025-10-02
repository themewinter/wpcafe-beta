"use strict";
(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_features_location_location-list_index_tsx"],{

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

/***/ "./assets/src/admin/features/location/hooks/useLocationHandler.ts":
/*!************************************************************************!*\
  !*** ./assets/src/admin/features/location/hooks/useLocationHandler.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useLocationApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/router/routeDefinition */ "./assets/src/admin/router/routeDefinition.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
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






var useLocationHandler = function useLocationHandler(_ref) {
  var selectedRows = _ref.selectedRows,
    setSelectedRows = _ref.setSelectedRows;
  var _useLocationApi = (0,_useLocationApi__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    bulkDeleteLocations = _useLocationApi.bulkDeleteLocations,
    getLocations = _useLocationApi.getLocations;
  // Access location states from the store
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores.location).getLocationState();
    }, []),
    searchQuery = _useSelect.searchQuery;
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_5__.stores.location),
    setLocationState = _useDispatch.setLocationState,
    resetLocationState = _useDispatch.resetLocationState;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var handleCreateLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    navigate("".concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__.LOCATION_PATH, "/").concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__.CREATE_PATH));
  }, [navigate]);
  var handleEditLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (location) {
    navigate("".concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_4__.LOCATION_PATH, "/update/").concat(location.term_id));
  }, [navigate]);
  var handleLiveOrder = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (location) {
    var _a;
    window.location.replace("".concat((_a = window === null || window === void 0 ? void 0 : window.wpCafe) === null || _a === void 0 ? void 0 : _a.admin_url, "admin.php?page=wc-orders&wpcafe=true&wpc_location=").concat(location === null || location === void 0 ? void 0 : location.term_id));
  }, []);
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
            setLocationState({
              searchQuery: updatedQuery,
              locationList: null // Clear current list to show loading state
            });
            // Make API call with the query
            _context.n = 2;
            return getLocations(updatedQuery);
          case 2:
            return _context.a(2, {
              complete: true
            });
        }
      }, _callee);
    }));
  };
  var handleBulkDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!(selectedRows.length === 0)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return bulkDeleteLocations(selectedRows);
          case 2:
            setSelectedRows([]);
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
  }, [selectedRows, bulkDeleteLocations, setSelectedRows]);
  // Handler for clearing all filters
  var handleClearFilters = function handleClearFilters() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            // First, reset the store state completely
            resetLocationState();
            // Make API call with clean query
            _context3.n = 1;
            return getLocations({
              resetFilter: true
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
  };
  return {
    handleCreateLocation: handleCreateLocation,
    handleEditLocation: handleEditLocation,
    handleLiveOrder: handleLiveOrder,
    handleSearchChange: handleSearchChange,
    handleBulkDelete: handleBulkDelete,
    handleClearFilters: handleClearFilters
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocationHandler);

/***/ }),

/***/ "./assets/src/admin/features/location/location-list/LocationFilter.tsx":
/*!*****************************************************************************!*\
  !*** ./assets/src/admin/features/location/location-list/LocationFilter.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationFilter: () => (/* binding */ LocationFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _shadcn_components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shadcn/components/ui */ "./assets/src/shadcn/components/ui/index.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _common_components_form_input_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components/form-input/SearchInput */ "./assets/src/common/components/form-input/SearchInput.tsx");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * WordPress Dependencies
 */


/**
 * External Dependencies
 */

/**
 * Internal Dependencies
 */




var LocationFilter = function LocationFilter(_ref) {
  var onSearchChange = _ref.onSearchChange,
    onCreateLocation = _ref.onCreateLocation,
    _ref$selectedCount = _ref.selectedCount,
    selectedCount = _ref$selectedCount === void 0 ? 0 : _ref$selectedCount,
    onBulkDelete = _ref.onBulkDelete,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_7__.stores.location).getLocationState();
    }, []),
    isFiltering = _useSelect.isFiltering,
    searchQuery = _useSelect.searchQuery;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-t-xl rounded-b-0 border-b-1 p-3.5 bg-card text-card-foreground border border-concitional-stock",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "w-full sm:w-auto",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_form_input_SearchInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        searchFunc: onSearchChange,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Search by locations...", "wpcafe"),
        className: "w-full sm:w-64",
        debounceDelay: 1500,
        disabled: disabled,
        value: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.search) || ""
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center gap-2 w-full sm:w-auto justify-end",
      children: [selectedCount > 0 && onBulkDelete && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmationDialog, {
        onConfirm: onBulkDelete,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Selected Locations", "wpcafe"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete ".concat(selectedCount, " selected location").concat(selectedCount > 1 ? "s" : "", "? This action cannot be undone."), "wpcafe"),
        trigger: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "outlineDark",
          className: "text-red-600 hover:text-red-700",
          disabled: isFiltering,
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Selected", "wpcafe"), " (", selectedCount, ")"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: onCreateLocation,
        disabled: disabled,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "mr-2 h-4 w-4"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add Location", "wpcafe")]
      })]
    })]
  });
};

/***/ }),

/***/ "./assets/src/admin/features/location/location-list/LocationTable.tsx":
/*!****************************************************************************!*\
  !*** ./assets/src/admin/features/location/location-list/LocationTable.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationTable: () => (/* binding */ LocationTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var _common_components_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/components/table */ "./assets/src/common/components/table/index.ts");
/* harmony import */ var _shadcn_components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shadcn/components/ui/button */ "./assets/src/shadcn/components/ui/button.tsx");
/* harmony import */ var _LocationTableColumns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LocationTableColumns */ "./assets/src/admin/features/location/location-list/LocationTableColumns.tsx");
/* harmony import */ var _hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
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






var LocationTable = function LocationTable(_ref) {
  var onEditLocation = _ref.onEditLocation,
    onSelectionChange = _ref.onSelectionChange,
    selectedRows = _ref.selectedRows,
    onLiveOrder = _ref.onLiveOrder,
    onResetFilters = _ref.onResetFilters;
  var _useLocationApi = (0,_hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    deleteLocation = _useLocationApi.deleteLocation,
    onPaginationChange = _useLocationApi.onPaginationChange,
    getLocations = _useLocationApi.getLocations,
    updateLocation = _useLocationApi.updateLocation;
  // Access location states directly from the store
  var locationStates = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select(_globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores.location).getLocationState();
  }, []);
  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores.location),
    resetLocationState = _useDispatch.resetLocationState;
  var locationList = locationStates.locationList,
    error = locationStates.error,
    searchQuery = locationStates.searchQuery,
    total = locationStates.total;
  // Check if user has applied any search/filter
  var _useSearchEmptyState = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_10__.useSearchEmptyState)(searchQuery || {}),
    isQueried = _useSearchEmptyState.isQueried;
  // Calculate pagination from state
  var pagination = {
    currentPage: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.paged) || 1,
    totalItems: total || 0,
    perPage: (searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.per_page) || 10
  };
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_11__.stores.settings).getSettingsState();
    }, []),
    data = _useSelect.data;
  // Get global schedule from settings
  var globalSchedule = data === null || data === void 0 ? void 0 : data.restaurant_schedule;
  var handleDeleteLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (id) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return deleteLocation(id);
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
  }, []);
  var handleUpdateLocation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (id, data) {
    updateLocation(id, data);
  }, []);
  var handleResetFilters = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    if (onResetFilters) {
      onResetFilters();
    } else {
      // Fallback to default behavior
      resetLocationState();
      getLocations({
        resetFilter: true
      });
    }
  }, [onResetFilters, resetLocationState, getLocations]);
  // Create custom empty screens based on query state
  var getEmptyScreen = function getEmptyScreen() {
    if (isQueried) {
      // User has searched/filtered but no results found
      return {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No locations found for your search", "wpcafe"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Try adjusting your search terms or filters to find what you're looking for.", "wpcafe"),
        icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "w-10 h-10 text-gray-500 dark:text-gray-400"
        }),
        action: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
          variant: "outlinePrimary",
          onClick: handleResetFilters,
          className: "mt-4",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "mr-2 h-4 w-4"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clear Filters", "wpcafe")]
        })
      };
    }
  };
  var emptyScreenConfig = getEmptyScreen();
  var tableColumns = (0,_LocationTableColumns__WEBPACK_IMPORTED_MODULE_8__.useLocationTableColumns)({
    onDeleteLocation: handleDeleteLocation,
    onEditLocation: onEditLocation,
    onUpdateLocation: handleUpdateLocation,
    onLiveOrder: onLiveOrder,
    globalSchedule: globalSchedule
  });
  var tableProps = {
    columns: tableColumns,
    dataSource: locationList || [],
    loading: !locationList,
    error: error ? {
      message: error
    } : undefined,
    pagination: {
      current: (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) || 1,
      total: (pagination === null || pagination === void 0 ? void 0 : pagination.totalItems) || 0,
      pageSize: (pagination === null || pagination === void 0 ? void 0 : pagination.perPage) || 10,
      showSizeChanger: false,
      onChange: onPaginationChange
    },
    rowSelection: {
      selectedRowKeys: selectedRows,
      onChange: function onChange(selectedRowKeys) {
        onSelectionChange(selectedRowKeys.map(function (key) {
          return Number(key);
        }));
      }
    },
    rowKey: "term_id",
    emptyScreen: emptyScreenConfig,
    className: "border-t-0 rounded-t-none"
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components_table__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, tableProps));
};

/***/ }),

/***/ "./assets/src/admin/features/location/location-list/LocationTableColumns.tsx":
/*!***********************************************************************************!*\
  !*** ./assets/src/admin/features/location/location-list/LocationTableColumns.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocationTableColumns: () => (/* binding */ useLocationTableColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/square-pen.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shopping-cart.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shadcn/components/ui/dropdown-menu */ "./assets/src/shadcn/components/ui/dropdown-menu.tsx");
/* harmony import */ var _shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shadcn/components/ui/select */ "./assets/src/shadcn/components/ui/select.tsx");
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./assets/src/admin/features/location/utils.ts");
/* harmony import */ var _admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/admin/router/routeDefinition */ "./assets/src/admin/router/routeDefinition.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");

/**
 * WordPress Dependencies
 */


/**
 * Internal Dependencies
 */


/**
 * Internal Dependencies
 */








// Status dropdown component for changing location status
var StatusDropdown = function StatusDropdown(_ref) {
  var location = _ref.location,
    onUpdateLocation = _ref.onUpdateLocation;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_13__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_13__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_13__.stores.location).getLocationState();
    }, []),
    updatingLocationId = _useSelect.updatingLocationId;
  var currentStatus = location.status || "publish";
  var handleStatusChange = function handleStatusChange(newStatus) {
    if (newStatus !== currentStatus) {
      onUpdateLocation(location.term_id, Object.assign(Object.assign({}, location), {
        status: newStatus
      }));
    }
  };
  var getStatusConfig = function getStatusConfig(status) {
    switch (status) {
      case "publish":
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Published", "wpcafe"),
          color: "bg-green-500"
        };
      case "draft":
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Draft", "wpcafe"),
          color: "bg-yellow-500"
        };
      default:
        return {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Published", "wpcafe"),
          color: "bg-green-500"
        };
    }
  };
  var isUpdating = updatingLocationId === (location === null || location === void 0 ? void 0 : location.term_id);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__.Select, {
    value: currentStatus,
    onValueChange: handleStatusChange,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__.SelectTrigger, {
      className: "w-32 h-8 border border-neutral-300 p-0 pr-2.5",
      loading: isUpdating,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_10__.StatusBadge, {
        label: getStatusConfig(currentStatus).label,
        color: getStatusConfig(currentStatus).color,
        className: "border-none"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__.SelectContent, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__.SelectItem, {
        value: "publish",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "w-2 h-2 rounded-full bg-green-500"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Published", "wpcafe")]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_select__WEBPACK_IMPORTED_MODULE_9__.SelectItem, {
        value: "draft",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "w-2 h-2 rounded-full bg-yellow-500"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Draft", "wpcafe")]
        })
      })]
    })]
  });
};
// Helper function to determine restaurant types based on override settings
var getRestaurantTypes = function getRestaurantTypes(location) {
  var types = [];
  if (location.override_online_ordering === "1") {
    types.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Online order", "wpcafe"),
      color: "bg-blue-500"
    });
  }
  if (location.override_reservation === "1") {
    types.push({
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reservation", "wpcafe"),
      color: "bg-green-500"
    });
  }
  return types;
};
// Create a separate component for actions to properly use hooks
var LocationActionsCell = function LocationActionsCell(_ref2) {
  var location = _ref2.location,
    onDeleteLocation = _ref2.onDeleteLocation,
    onEditLocation = _ref2.onEditLocation,
    onLiveOrder = _ref2.onLiveOrder;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex items-center gap-2",
    children: [onLiveOrder && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_10__.IconTooltipButton, {
      icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "h-4 w-4"
      }),
      tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Live Order", "wpcafe"),
      onClick: function onClick() {
        return onLiveOrder(location);
      },
      variant: "icon",
      size: "iconCircle",
      tooltipAppendPos: "top",
      buttonClassName: "hover:bg-gray-100 !text-sm font-normal rounded-sm"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenu, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuTrigger, {
        asChild: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_10__.IconTooltipButton, {
          icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "h-4 w-4"
          }),
          tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Options", "wpcafe"),
          variant: "icon",
          size: "iconCircle",
          tooltipAppendPos: "top",
          buttonClassName: "hover:bg-gray-100 !text-sm font-normal rounded-sm"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuContent, {
        align: "end",
        className: "border border-neutral-300 rounded-sm",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuItem, {
          onClick: function onClick() {
            return onEditLocation(location);
          },
          className: "px-2.5 h-auto !text-sm font-normal gap-2 rounded-sm cursor-pointer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "mr-2 h-4 w-4 text-neutral-900"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit location", "wpcafe")]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_10__.DeleteConfirmationDialog, {
          onConfirm: function onConfirm() {
            return onDeleteLocation(location.term_id);
          },
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Location", "wpcafe"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this location? This action cannot be undone.", "wpcafe"),
          trigger: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shadcn_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__.DropdownMenuItem, {
            className: "px-2.5 flex items-center gap-2 cursor-pointer text-red-600 hover:!text-red-700 hover:bg-red-50",
            onSelect: function onSelect(e) {
              return e.preventDefault();
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "mr-2 h-4 w-4 text-red-600"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "wpcafe")]
          })
        })]
      })]
    })]
  });
};
var useLocationTableColumns = function useLocationTableColumns(_ref3) {
  var onDeleteLocation = _ref3.onDeleteLocation,
    onEditLocation = _ref3.onEditLocation,
    onUpdateLocation = _ref3.onUpdateLocation,
    onLiveOrder = _ref3.onLiveOrder,
    globalSchedule = _ref3.globalSchedule;
  return [{
    key: "name",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Location", "wpcafe"),
    render: function render(_, location) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
        to: "".concat(_admin_router_routeDefinition__WEBPACK_IMPORTED_MODULE_12__.LOCATION_PATH, "/update/").concat(location.term_id),
        className: "location-address text-gray-600 text-sm mt-1 max-w-48 truncate block",
        title: (location === null || location === void 0 ? void 0 : location.restaurants_name) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No address", "wpcafe"),
        children: (location === null || location === void 0 ? void 0 : location.restaurants_name) || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No address", "wpcafe")
      });
    }
  }, {
    key: "restaurant_type",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Restaurant Type", "wpcafe"),
    render: function render(_, location) {
      var types = getRestaurantTypes(location);
      if (types.length === 0) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "text-gray-400 text-sm",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No type set", "wpcafe")
        });
      }
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex gap-2 flex-wrap",
        children: types.map(function (typeInfo, index) {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_10__.StatusBadge, {
            label: typeInfo.label,
            color: typeInfo.color
          }, index);
        })
      });
    }
  }, {
    key: "holidays",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Holidays", "wpcafe"),
    render: function render(_, location) {
      var holidays = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.calculateLocationHolidays)(location, globalSchedule);
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        children: holidays
      });
    }
  }, {
    key: "status",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Status", "wpcafe"),
    render: function render(_, location) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StatusDropdown, {
        location: location,
        onUpdateLocation: onUpdateLocation
      });
    }
  }, {
    key: "actions",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Actions", "wpcafe"),
    render: function render(_, location) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LocationActionsCell, {
        location: location,
        onDeleteLocation: onDeleteLocation,
        onEditLocation: onEditLocation,
        onLiveOrder: onLiveOrder
      });
    }
  }];
};

/***/ }),

/***/ "./assets/src/admin/features/location/location-list/index.tsx":
/*!********************************************************************!*\
  !*** ./assets/src/admin/features/location/location-list/index.tsx ***!
  \********************************************************************/
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
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/components */ "./assets/src/common/components/index.ts");
/* harmony import */ var _LocationFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocationFilter */ "./assets/src/admin/features/location/location-list/LocationFilter.tsx");
/* harmony import */ var _LocationTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocationTable */ "./assets/src/admin/features/location/location-list/LocationTable.tsx");
/* harmony import */ var _hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useLocationApi */ "./assets/src/admin/features/location/hooks/useLocationApi.ts");
/* harmony import */ var _hooks_useLocationHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useLocationHandler */ "./assets/src/admin/features/location/hooks/useLocationHandler.ts");
/* harmony import */ var _globalConstant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/globalConstant */ "./assets/src/globalConstant.ts");
/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/hooks */ "./assets/src/common/hooks/index.ts");
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
 * Internal Dependencies
 */







var LocationList = function LocationList() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRows = _useState2[0],
    setSelectedRows = _useState2[1];
  var _useLocationApi = (0,_hooks_useLocationApi__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    getLocations = _useLocationApi.getLocations;
  var _useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(function (select) {
      return select(_globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === null || _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores === void 0 ? void 0 : _globalConstant__WEBPACK_IMPORTED_MODULE_9__.stores.location).getLocationState();
    }, []),
    locationList = _useSelect.locationList,
    searchQuery = _useSelect.searchQuery;
  // Check if user has applied any search/filter
  var _useSearchEmptyState = (0,_common_hooks__WEBPACK_IMPORTED_MODULE_10__.useSearchEmptyState)(searchQuery || {}),
    isQueried = _useSearchEmptyState.isQueried;
  var _useLocationHandler = (0,_hooks_useLocationHandler__WEBPACK_IMPORTED_MODULE_8__["default"])({
      selectedRows: selectedRows,
      setSelectedRows: setSelectedRows
    }),
    handleCreateLocation = _useLocationHandler.handleCreateLocation,
    handleEditLocation = _useLocationHandler.handleEditLocation,
    handleLiveOrder = _useLocationHandler.handleLiveOrder,
    handleSearchChange = _useLocationHandler.handleSearchChange,
    handleBulkDelete = _useLocationHandler.handleBulkDelete,
    handleClearFilters = _useLocationHandler.handleClearFilters;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (locationList) {
      return;
    }
    getLocations();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.TopHeader, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Locations", "wpcafe")
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children:
      // Show empty screen if no locations found and no search/filter applied (Initial state)
      !isQueried && (locationList === null || locationList === void 0 ? void 0 : locationList.length) === 0 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_components__WEBPACK_IMPORTED_MODULE_4__.EmptyScreen, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No locations found", "wpcafe"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("You haven't created any locations yet. Click on the button below to create your first location.", "wpcafe"),
        addButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create Location", "wpcafe"),
        onAddButtonClick: handleCreateLocation,
        learnMoreText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Read Documentation", "wpcafe"),
        learnMoreUrl: "https://support.themewinter.com/docs/plugins/plugin-docs/food-ordering/general-settings-5/",
        videoTooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("How to manage locations in Wp Cafe?", "wpcafe")
      }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LocationFilter__WEBPACK_IMPORTED_MODULE_5__.LocationFilter, {
          onSearchChange: handleSearchChange,
          onCreateLocation: handleCreateLocation,
          selectedCount: selectedRows.length,
          onBulkDelete: handleBulkDelete
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LocationTable__WEBPACK_IMPORTED_MODULE_6__.LocationTable, {
          onEditLocation: handleEditLocation,
          onLiveOrder: handleLiveOrder,
          onSelectionChange: setSelectedRows,
          selectedRows: selectedRows,
          onResetFilters: handleClearFilters
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationList);

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
/* harmony export */   getLocationAddress: () => (/* binding */ getLocationAddress)
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
  if (location.override_open_hours === "1" && Array.isArray(location.open_hours) === false) {
    // Use location-specific schedule
    holidays = getHolidaysFromSchedule(location.open_hours);
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
//# sourceMappingURL=assets_src_admin_features_location_location-list_index_tsx.js.map