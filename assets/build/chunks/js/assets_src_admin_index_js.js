(globalThis["webpackChunkwp_cafe"] = globalThis["webpackChunkwp_cafe"] || []).push([["assets_src_admin_index_js"],{

/***/ "./assets/src/admin/index.js":
/*!***********************************!*\
  !*** ./assets/src/admin/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Ensure modules (and their wp-hooks) load before the App initializes the router
// Bootstrap app with controlled load order so wp-hooks (filters) register
// only if the corresponding module is enabled, and before router creation.
_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var _yield$import, App, rootEl, _t;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.p = _context.n) {
      case 0:
        _context.p = 0;
        _context.n = 1;
        return __webpack_require__.e(/*! import() */ "assets_src_admin_modules_lazy_recursive_-assets_src_admin_modules_index_ts").then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules */ "./assets/src/admin/modules/index.ts", 23));
      case 1:
        _context.n = 2;
        return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_date-fns_addMonths_js-node_modules_date-fns_format_js-node_modules_date--3a89da"), __webpack_require__.e("vendors-node_modules_react_jsx-runtime_js"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_createLucideIcon_js-node_modules_radix-ui_react-co-5c9578"), __webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js"), __webpack_require__.e("vendors-node_modules_aria-hidden_dist_es2015_index_js-node_modules_react-remove-scroll_dist_e-6c470e"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_chevron-down_js-node_modules_lucide-react_di-a83797"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_check_js-node_modules_lucide-react_dist_esm_-ea4fb6"), __webpack_require__.e("vendors-node_modules_radix-ui_react-checkbox_dist_index_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_calendar_js-node_modules_lucide-react_dist_e-4dbed2"), __webpack_require__.e("vendors-node_modules_zod_v4_classic_iso_js-node_modules_zod_v4_classic_schemas_js"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_x_js-node_modules_radix-ui_react-dialog_dist-6f99dc"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_bell_js-node_modules_lucide-react_dist_esm_i-1a2fd2"), __webpack_require__.e("assets_src_admin_store_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./store */ "./assets/src/admin/store.js"));
      case 2:
        _context.n = 3;
        return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_date-fns_addMonths_js-node_modules_date-fns_format_js-node_modules_date--3a89da"), __webpack_require__.e("vendors-node_modules_react_jsx-runtime_js"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_createLucideIcon_js-node_modules_radix-ui_react-co-5c9578"), __webpack_require__.e("vendors-node_modules_react-router-dom_dist_index_js"), __webpack_require__.e("vendors-node_modules_aria-hidden_dist_es2015_index_js-node_modules_react-remove-scroll_dist_e-6c470e"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_chevron-down_js-node_modules_lucide-react_di-a83797"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_check_js-node_modules_lucide-react_dist_esm_-ea4fb6"), __webpack_require__.e("vendors-node_modules_radix-ui_react-checkbox_dist_index_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_calendar_js-node_modules_lucide-react_dist_e-4dbed2"), __webpack_require__.e("vendors-node_modules_zod_v4_classic_iso_js-node_modules_zod_v4_classic_schemas_js"), __webpack_require__.e("vendors-node_modules_react-hook-form_dist_index_esm_mjs"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_x_js-node_modules_radix-ui_react-dialog_dist-6f99dc"), __webpack_require__.e("vendors-node_modules_lucide-react_dist_esm_icons_bell_js-node_modules_lucide-react_dist_esm_i-1a2fd2"), __webpack_require__.e("assets_src_admin_App_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./App */ "./assets/src/admin/App.tsx"));
      case 3:
        _yield$import = _context.v;
        App = _yield$import["default"];
        rootEl = ReactDOM.createRoot(document.getElementById("wpcafe_dashboard"));
        rootEl.render(/*#__PURE__*/React.createElement(App, null));
        _context.n = 5;
        break;
      case 4:
        _context.p = 4;
        _t = _context.v;
        console.error("Failed to bootstrap WPCafe admin app:", _t);
      case 5:
        return _context.a(2);
    }
  }, _callee, null, [[0, 4]]);
}))();

/***/ })

}]);
//# sourceMappingURL=assets_src_admin_index_js.js.map