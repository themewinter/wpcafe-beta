/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/md5-es/build/md5-es.min.js":
/*!*************************************************!*\
  !*** ./node_modules/md5-es/build/md5-es.min.js ***!
  \*************************************************/
/***/ (function(module) {

!function(e,r){ true?module.exports=r():0}(this,function(){return function(e){function r(t){if(n[t])return n[t].exports;var f=n[t]={i:t,l:!1,exports:{}};return e[t].call(f.exports,f,f.exports,r),f.l=!0,f.exports}var n={};return r.m=e,r.c=n,r.i=function(e){return e},r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var f=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),i=function(){function e(){t(this,e)}return f(e,null,[{key:"hash",value:function(r){return e.hex(e.md51(r))}},{key:"md5cycle",value:function(r,n){var t=r[0],f=r[1],i=r[2],u=r[3];t=e.ff(t,f,i,u,n[0],7,-680876936),u=e.ff(u,t,f,i,n[1],12,-389564586),i=e.ff(i,u,t,f,n[2],17,606105819),f=e.ff(f,i,u,t,n[3],22,-1044525330),t=e.ff(t,f,i,u,n[4],7,-176418897),u=e.ff(u,t,f,i,n[5],12,1200080426),i=e.ff(i,u,t,f,n[6],17,-1473231341),f=e.ff(f,i,u,t,n[7],22,-45705983),t=e.ff(t,f,i,u,n[8],7,1770035416),u=e.ff(u,t,f,i,n[9],12,-1958414417),i=e.ff(i,u,t,f,n[10],17,-42063),f=e.ff(f,i,u,t,n[11],22,-1990404162),t=e.ff(t,f,i,u,n[12],7,1804603682),u=e.ff(u,t,f,i,n[13],12,-40341101),i=e.ff(i,u,t,f,n[14],17,-1502002290),f=e.ff(f,i,u,t,n[15],22,1236535329),t=e.gg(t,f,i,u,n[1],5,-165796510),u=e.gg(u,t,f,i,n[6],9,-1069501632),i=e.gg(i,u,t,f,n[11],14,643717713),f=e.gg(f,i,u,t,n[0],20,-373897302),t=e.gg(t,f,i,u,n[5],5,-701558691),u=e.gg(u,t,f,i,n[10],9,38016083),i=e.gg(i,u,t,f,n[15],14,-660478335),f=e.gg(f,i,u,t,n[4],20,-405537848),t=e.gg(t,f,i,u,n[9],5,568446438),u=e.gg(u,t,f,i,n[14],9,-1019803690),i=e.gg(i,u,t,f,n[3],14,-187363961),f=e.gg(f,i,u,t,n[8],20,1163531501),t=e.gg(t,f,i,u,n[13],5,-1444681467),u=e.gg(u,t,f,i,n[2],9,-51403784),i=e.gg(i,u,t,f,n[7],14,1735328473),f=e.gg(f,i,u,t,n[12],20,-1926607734),t=e.hh(t,f,i,u,n[5],4,-378558),u=e.hh(u,t,f,i,n[8],11,-2022574463),i=e.hh(i,u,t,f,n[11],16,1839030562),f=e.hh(f,i,u,t,n[14],23,-35309556),t=e.hh(t,f,i,u,n[1],4,-1530992060),u=e.hh(u,t,f,i,n[4],11,1272893353),i=e.hh(i,u,t,f,n[7],16,-155497632),f=e.hh(f,i,u,t,n[10],23,-1094730640),t=e.hh(t,f,i,u,n[13],4,681279174),u=e.hh(u,t,f,i,n[0],11,-358537222),i=e.hh(i,u,t,f,n[3],16,-722521979),f=e.hh(f,i,u,t,n[6],23,76029189),t=e.hh(t,f,i,u,n[9],4,-640364487),u=e.hh(u,t,f,i,n[12],11,-421815835),i=e.hh(i,u,t,f,n[15],16,530742520),f=e.hh(f,i,u,t,n[2],23,-995338651),t=e.ii(t,f,i,u,n[0],6,-198630844),u=e.ii(u,t,f,i,n[7],10,1126891415),i=e.ii(i,u,t,f,n[14],15,-1416354905),f=e.ii(f,i,u,t,n[5],21,-57434055),t=e.ii(t,f,i,u,n[12],6,1700485571),u=e.ii(u,t,f,i,n[3],10,-1894986606),i=e.ii(i,u,t,f,n[10],15,-1051523),f=e.ii(f,i,u,t,n[1],21,-2054922799),t=e.ii(t,f,i,u,n[8],6,1873313359),u=e.ii(u,t,f,i,n[15],10,-30611744),i=e.ii(i,u,t,f,n[6],15,-1560198380),f=e.ii(f,i,u,t,n[13],21,1309151649),t=e.ii(t,f,i,u,n[4],6,-145523070),u=e.ii(u,t,f,i,n[11],10,-1120210379),i=e.ii(i,u,t,f,n[2],15,718787259),f=e.ii(f,i,u,t,n[9],21,-343485551),r[0]=t+r[0]&4294967295,r[1]=f+r[1]&4294967295,r[2]=i+r[2]&4294967295,r[3]=u+r[3]&4294967295}},{key:"cmn",value:function(e,r,n,t,f,i){return((r=(r+e&4294967295)+(t+i&4294967295)&4294967295)<<f|r>>>32-f)+n&4294967295}},{key:"ff",value:function(r,n,t,f,i,u,o){return e.cmn(n&t|~n&f,r,n,i,u,o)}},{key:"gg",value:function(r,n,t,f,i,u,o){return e.cmn(n&f|t&~f,r,n,i,u,o)}},{key:"hh",value:function(r,n,t,f,i,u,o){return e.cmn(n^t^f,r,n,i,u,o)}},{key:"ii",value:function(r,n,t,f,i,u,o){return e.cmn(t^(n|~f),r,n,i,u,o)}},{key:"md51",value:function(r){var n=r.length,t=[1732584193,-271733879,-1732584194,271733878],f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0,u=64;for(u;u<=n;u+=64)e.md5cycle(t,e.md5blk(r.substring(u-64,u)));for(r=r.substring(u-64),u=0,i=r.length,u;u<i;u++)f[u>>2]|=r.charCodeAt(u)<<(u%4<<3);if(f[u>>2]|=128<<(u%4<<3),u>55)for(e.md5cycle(t,f),u=0;u<16;u++)f[u]=0;return f[14]=8*n,e.md5cycle(t,f),t}},{key:"md5blk",value:function(e){var r=[],n=0;for(n;n<64;n+=4)r[n>>2]=e.charCodeAt(n)+(e.charCodeAt(n+1)<<8)+(e.charCodeAt(n+2)<<16)+(e.charCodeAt(n+3)<<24);return r}},{key:"rhex",value:function(r){var n="";return n+=e.hexArray[r>>4&15]+e.hexArray[r>>0&15],n+=e.hexArray[r>>12&15]+e.hexArray[r>>8&15],n+=e.hexArray[r>>20&15]+e.hexArray[r>>16&15],n+=e.hexArray[r>>28&15]+e.hexArray[r>>24&15]}},{key:"hex",value:function(r){var n=r.length,t=0;for(t;t<n;t++)r[t]=e.rhex(r[t]);return r.join("")}}]),e}();i.hexArray=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],r.default=i},function(e,r,n){e.exports=n(0)}])});
//# sourceMappingURL=md5-es.min.js.map

/***/ }),

/***/ "./tools/decorators.ts":
/*!*****************************!*\
  !*** ./tools/decorators.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterModule: () => (/* binding */ RegisterModule),
/* harmony export */   ValidateDownloadI18n: () => (/* binding */ ValidateDownloadI18n)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
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
/**
 * Decorator for registering a module
 * the module must be a class
 */
function RegisterModule(handlerName) {
  return function (constructor) {
    var Module = /*#__PURE__*/function (_constructor) {
      function Module() {
        var _this;
        _classCallCheck(this, Module);
        var _a, _b;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Module, [].concat(args));
        // @ts-ignore
        _this.state = ((_b = (_a = window.wp) === null || _a === void 0 ? void 0 : _a.wpCafeI18nLoader) === null || _b === void 0 ? void 0 : _b.state) || {
          baseUrl: null,
          locale: "en_US",
          domainMap: {},
          domainPaths: {}
        };
        return _this;
      }
      _inherits(Module, _constructor);
      return _createClass(Module);
    }(constructor);
    Object.defineProperty(window, handlerName, {
      value: new Module(),
      writable: false,
      configurable: false,
      enumerable: false
    });
  };
}
/**
 * validate downloadI18n method
 */
function ValidateDownloadI18n(_target, _propertyKey, descriptor) {
  var originalMethod = descriptor.value;
  descriptor.value = function () {
    var arguments_1 = arguments;
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
      var state;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            state = this.state;
            if (!(!state || !state.locale)) {
              _context.n = 1;
              break;
            }
            console.warn("i18n state not properly initialized");
            return _context.a(2);
          case 1:
            if (!(state.locale === "en_US")) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            if (!(typeof fetch === "undefined")) {
              _context.n = 3;
              break;
            }
            throw new Error("Fetch API is not available.");
          case 3:
            originalMethod.apply(this, arguments_1);
          case 4:
            return _context.a(2);
        }
      }, _callee, this);
    }));
  };
}

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./tools/i18n-loader.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var md5_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5-es */ "./node_modules/md5-es/build/md5-es.min.js");
/* harmony import */ var md5_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./tools/decorators.ts");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * this file is responsible for downloading and registering translations
 *
 * @author Ashraf Mollah<mollah.dev@gmail.com>
 * @Version 1.0.2
 *
 * @learn https://github.com/Automattic/i18n-loader-webpack-plugin/tree/trunk
 */
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

// @ts-ignore;


var I18nLoader =
/*#__PURE__*/
//@ts-ignore
function () {
  function I18nLoader() {
    _classCallCheck(this, I18nLoader);
    Object.defineProperty(this, "locationMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        plugin: "plugins/",
        theme: "themes/",
        core: ""
      }
    });
    Object.defineProperty(this, "state", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        baseUrl: null,
        locale: null,
        domainMap: {},
        domainPaths: {}
      }
    });
  }
  return _createClass(I18nLoader, [{
    key: "getPathPrefix",
    value: function getPathPrefix(domain) {
      if (domain in this.state.domainPaths) {
        return this.state.domainPaths[domain];
      }
      return "";
    }
  }, {
    key: "hasOwn",
    value: function hasOwn(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    /**
     * download translations
     *
     * @param _path
     * @param _domain
     * @param _location
     */
  }, {
    key: "downloadI18n",
    value: function downloadI18n(path, domain, location) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
        var pathPrefix, hash, query, i, locationAndDomain, res, data, localeData;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              // Extract any query part and hash the script name like WordPress does.
              pathPrefix = this.getPathPrefix(domain);
              i = path.indexOf("?");
              if (i >= 0) {
                // @ts-ignore
                hash = md5_es__WEBPACK_IMPORTED_MODULE_1___default().hash((pathPrefix + path.substring(0, i)).replace(/\\/g, "/"));
                query = path.substring(i);
              } else {
                // @ts-ignore
                hash = md5_es__WEBPACK_IMPORTED_MODULE_1___default().hash((pathPrefix + path).replace(/\\/g, "/"));
                query = "";
              }
              // Download.
              locationAndDomain = this.hasOwn(this.state.domainMap, domain) ? this.state.domainMap[domain] : this.locationMap[location] + domain;
              _context.n = 1;
              return fetch(// prettier-ignore
              "".concat(this.state.baseUrl).concat(locationAndDomain, "-").concat(this.state.locale, "-").concat(hash, ".json").concat(query));
            case 1:
              res = _context.v;
              if (res.ok) {
                _context.n = 2;
                break;
              }
              throw new Error("HTTP request failed: ".concat(res.status, " ").concat(res.statusText));
            case 2:
              _context.n = 3;
              return res.json();
            case 3:
              data = _context.v;
              // Extract the messages from the file and register them.
              localeData = this.hasOwn(data.locale_data, domain) ? data.locale_data[domain] : data.locale_data.messages;
              localeData[""].domain = domain;
              (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.setLocaleData)(localeData, domain);
            case 4:
              return _context.a(2);
          }
        }, _callee, this);
      }));
    }
  }]);
}();
__decorate([_decorators__WEBPACK_IMPORTED_MODULE_2__.ValidateDownloadI18n], I18nLoader.prototype, "downloadI18n", null);
I18nLoader = __decorate([(0,_decorators__WEBPACK_IMPORTED_MODULE_2__.RegisterModule)("wpCafeI18nLoader")
//@ts-ignore
], I18nLoader);
})();

/******/ })()
;
//# sourceMappingURL=i18n-loader.js.map