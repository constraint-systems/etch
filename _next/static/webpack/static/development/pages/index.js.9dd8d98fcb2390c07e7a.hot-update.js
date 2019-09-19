webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _parts_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/utils */ "./parts/utils.js");






var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

/* @jsx jsx */







Object.fromEntries = function (arr) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_4___default.a.apply(Object, [{}].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default()(arr, function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, k, v);
  }))));
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  var active_keys = 'asdfghjkl'.split('');
  var keymap = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])(Object.fromEntries(active_keys.map(function (l) {
    return [l, false];
  })));
  var keys_pressed = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])({
    h: false,
    j: false,
    k: false,
    l: false,
    x: false,
    s: false,
    d: false
  });
  var coordinates = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])([0, 0]);
  var overlayCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();

  var keys_array = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(keys_pressed.current);

  function keyAction(key) {
    var octx = overlayCanvasRef.current.getContext('2d');
    var current = coordinates.current;
    var inc = 5;
    if (key === 'j') coordinates.current = [current[0], current[1] + inc];
    if (key === 'k') coordinates.current = [current[0], current[1] - inc];
    if (key === 'h') coordinates.current = [current[0] - inc, current[1]];
    if (key === 'l') coordinates.current = [current[0] + inc, current[1]];
    octx.fillRect(coordinates.current[0], coordinates.current[1], 5, 5);
  }

  function downHandler(e) {
    if (active_keys.includes(e.key)) {
      keymap[e.key] = true;
    }

    console.log(keymap); // console.log(e.key);
    // keyAction(e.key);
    // if (keys_array.includes(e.key)) {
    //   keys_pressed.current[e.key] = true;
    // }
  }

  function upHandler(e) {
    keymap[e.key] = false; // if (keys_array.includes(e.key)) {
    //   keys_pressed.current[e.key] = false;
    // }
  }

  function setWindowSize() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {// let octx = overlayCanvasRef.current.getContext('2d');
    // octx.fillStyle = 'pink';
    // let ctx = canvasRef.current.getContext('2d');
    // function update() {
    //   let modify = [0, 0];
    //   let inc = 5;
    //   if (keys_pressed.current['h']) modify[0] += -inc;
    //   if (keys_pressed.current['j']) modify[1] += inc;
    //   if (keys_pressed.current['k']) modify[1] += -inc;
    //   if (keys_pressed.current['l']) modify[0] += inc;
    //   let current = coordinates.current;
    //   coordinates.current = [current[0] + modify[0], current[1] + modify[1]];
    //   octx.clearRect(0, 0, dimensions[0], dimensions[1]);
    //   octx.fillRect(current[0], current[1], 5, 5);
    //   if (keys_pressed.current['d']) {
    //     ctx.fillRect(current[0], current[1], 5, 5);
    //   }
    // }
    // requestRef.current = requestInterval(update, 50);
    // return () => {
    //   cancelAnimationFrame(requestRef.current);
    // };
  }, [dimensions]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_10__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0cyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyByZXF1ZXN0SW50ZXJ2YWwgfSBmcm9tICcuLi9wYXJ0cy91dGlscyc7XG5cbk9iamVjdC5mcm9tRW50cmllcyA9IGFyciA9PlxuICBPYmplY3QuYXNzaWduKHt9LCAuLi5BcnJheS5mcm9tKGFyciwgKFtrLCB2XSkgPT4gKHsgW2tdOiB2IH0pKSk7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCByZXF1ZXN0UmVmID0gdXNlUmVmKCk7XG4gIGxldCBhY3RpdmVfa2V5cyA9ICdhc2RmZ2hqa2wnLnNwbGl0KCcnKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZihPYmplY3QuZnJvbUVudHJpZXMoYWN0aXZlX2tleXMubWFwKGwgPT4gW2wsIGZhbHNlXSkpKTtcbiAgbGV0IGtleXNfcHJlc3NlZCA9IHVzZVJlZih7XG4gICAgaDogZmFsc2UsXG4gICAgajogZmFsc2UsXG4gICAgazogZmFsc2UsXG4gICAgbDogZmFsc2UsXG4gICAgeDogZmFsc2UsXG4gICAgczogZmFsc2UsXG4gICAgZDogZmFsc2UsXG4gIH0pO1xuICBsZXQgY29vcmRpbmF0ZXMgPSB1c2VSZWYoWzAsIDBdKTtcbiAgbGV0IG92ZXJsYXlDYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleXNfYXJyYXkgPSBPYmplY3Qua2V5cyhrZXlzX3ByZXNzZWQuY3VycmVudCk7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSkge1xuICAgIGxldCBvY3R4ID0gb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuICAgIGxldCBpbmMgPSA1O1xuICAgIGlmIChrZXkgPT09ICdqJykgY29vcmRpbmF0ZXMuY3VycmVudCA9IFtjdXJyZW50WzBdLCBjdXJyZW50WzFdICsgaW5jXTtcbiAgICBpZiAoa2V5ID09PSAnaycpIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSBbY3VycmVudFswXSwgY3VycmVudFsxXSAtIGluY107XG4gICAgaWYgKGtleSA9PT0gJ2gnKSBjb29yZGluYXRlcy5jdXJyZW50ID0gW2N1cnJlbnRbMF0gLSBpbmMsIGN1cnJlbnRbMV1dO1xuICAgIGlmIChrZXkgPT09ICdsJykgY29vcmRpbmF0ZXMuY3VycmVudCA9IFtjdXJyZW50WzBdICsgaW5jLCBjdXJyZW50WzFdXTtcblxuICAgIG9jdHguZmlsbFJlY3QoY29vcmRpbmF0ZXMuY3VycmVudFswXSwgY29vcmRpbmF0ZXMuY3VycmVudFsxXSwgNSwgNSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGFjdGl2ZV9rZXlzLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAga2V5bWFwW2Uua2V5XSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGtleW1hcCk7XG4gICAgLy8gY29uc29sZS5sb2coZS5rZXkpO1xuICAgIC8vIGtleUFjdGlvbihlLmtleSk7XG4gICAgLy8gaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgLy8gICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5bWFwW2Uua2V5XSA9IGZhbHNlO1xuICAgIC8vIGlmIChrZXlzX2FycmF5LmluY2x1ZGVzKGUua2V5KSkge1xuICAgIC8vICAga2V5c19wcmVzc2VkLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gICAgLy8gfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0V2luZG93U2l6ZSgpIHtcbiAgICBzZXREaW1lbnNpb25zKFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gbGV0IG9jdHggPSBvdmVybGF5Q2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBvY3R4LmZpbGxTdHlsZSA9ICdwaW5rJztcbiAgICAvLyBsZXQgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gICBsZXQgbW9kaWZ5ID0gWzAsIDBdO1xuICAgIC8vICAgbGV0IGluYyA9IDU7XG4gICAgLy8gICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2gnXSkgbW9kaWZ5WzBdICs9IC1pbmM7XG4gICAgLy8gICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICAvLyAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnayddKSBtb2RpZnlbMV0gKz0gLWluYztcbiAgICAvLyAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuICAgIC8vICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuICAgIC8vICAgY29vcmRpbmF0ZXMuY3VycmVudCA9IFtjdXJyZW50WzBdICsgbW9kaWZ5WzBdLCBjdXJyZW50WzFdICsgbW9kaWZ5WzFdXTtcbiAgICAvLyAgIG9jdHguY2xlYXJSZWN0KDAsIDAsIGRpbWVuc2lvbnNbMF0sIGRpbWVuc2lvbnNbMV0pO1xuICAgIC8vICAgb2N0eC5maWxsUmVjdChjdXJyZW50WzBdLCBjdXJyZW50WzFdLCA1LCA1KTtcbiAgICAvLyAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnZCddKSB7XG4gICAgLy8gICAgIGN0eC5maWxsUmVjdChjdXJyZW50WzBdLCBjdXJyZW50WzFdLCA1LCA1KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gcmVxdWVzdFJlZi5jdXJyZW50ID0gcmVxdWVzdEludGVydmFsKHVwZGF0ZSwgNTApO1xuICAgIC8vIHJldHVybiAoKSA9PiB7XG4gICAgLy8gICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpO1xuICAgIC8vIH07XG4gIH0sIFtkaW1lbnNpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udHMuYm9keX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17b3ZlcmxheUNhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjZVsxXSxcbiAgICAgICAgICAgIGxlZnQ6ICcxLjVjaCcsXG4gICAgICAgICAgICByaWdodDogJzEuNWNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeyd4c2QnLnNwbGl0KCcnKS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoga2V5c19wcmVzc2VkLmN1cnJlbnRbbF1cbiAgICAgICAgICAgICAgICAgICAgICA/ICdwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeydoamtsJy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleXNfcHJlc3NlZC5jdXJyZW50W2xdXG4gICAgICAgICAgICAgICAgICAgICAgPyAncGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("canvas", {
    ref: overlayCanvasRef,
    sx: {
      background: 'transparent'
    },
    width: dimensions[0],
    height: dimensions[1],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    style: {
      display: 'none',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, 'xsd'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, 'hjkl'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_9__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9dd8d98fcb2390c07e7a.hot-update.js.map