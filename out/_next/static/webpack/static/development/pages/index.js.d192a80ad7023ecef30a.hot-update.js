webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");


var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

/* @jsx jsx */






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([0, 0]),
      coordinates = _useState2[0],
      setCoordinates = _useState2[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var keys_pressed = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])({
    j: false,
    k: false,
    l: false,
    ';': false,
    a: false,
    s: false,
    d: false,
    f: false
  });

  var keys_array = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(keys_pressed.current);

  function downHandler(e) {
    if (keys_array.includes(e.key)) {
      keys_pressed.current[e.key] = true;
    }
  }

  function upHandler(e) {
    if (keys_array.includes(e.key)) {
      keys_pressed.current[e.key] = false;
    }
  }

  function setWindowSize() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function update() {
      var modify = [0, 0];
      if (keys_pressed.current['j']) modify[1] += 1;
      if (keys_pressed.current['k']) modify[1] += -1;
      if (keys_pressed.current['l']) modify[0] += 1;
      if (keys_pressed.current[';']) modify[0] += -1;
      setCoordinates(function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return [x + modify[0], y + modify[1]];
      });
      requestAnimationFrame(update);
    }

    requestRef.current = requestAnimationFrame(update);
    return function () {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(coordinates[0], coordinates[1], 10, 10);
  }, [coordinates]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEUyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIGxldCBjYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleXNfcHJlc3NlZCA9IHVzZVJlZih7XG4gICAgajogZmFsc2UsXG4gICAgazogZmFsc2UsXG4gICAgbDogZmFsc2UsXG4gICAgJzsnOiBmYWxzZSxcbiAgICBhOiBmYWxzZSxcbiAgICBzOiBmYWxzZSxcbiAgICBkOiBmYWxzZSxcbiAgICBmOiBmYWxzZSxcbiAgfSk7XG4gIGxldCBrZXlzX2FycmF5ID0gT2JqZWN0LmtleXMoa2V5c19wcmVzc2VkLmN1cnJlbnQpO1xuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoa2V5c19hcnJheS5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIGtleXNfcHJlc3NlZC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCkge1xuICAgIHNldERpbWVuc2lvbnMoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2luZG93U2l6ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBsZXQgbW9kaWZ5ID0gWzAsIDBdO1xuICAgICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydqJ10pIG1vZGlmeVsxXSArPSAxO1xuICAgICAgaWYgKGtleXNfcHJlc3NlZC5jdXJyZW50WydrJ10pIG1vZGlmeVsxXSArPSAtMTtcbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gMTtcbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnOyddKSBtb2RpZnlbMF0gKz0gLTE7XG4gICAgICBzZXRDb29yZGluYXRlcygoW3gsIHldKSA9PiBbeCArIG1vZGlmeVswXSwgeSArIG1vZGlmeVsxXV0pO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxuICAgIHJlcXVlc3RSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zdHJva2VSZWN0KGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSwgMTAsIDEwKTtcbiAgfSwgW2Nvb3JkaW5hdGVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udHMuYm9keX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdIC0gMiAqIHRoZW1lLnNwYWNlWzBdfVxuICAgICAgICAgIGNzcz17eyBkaXNwbGF5OiBkaW1lbnNpb25zWzBdICE9PSBudWxsID8gJ2Jsb2NrJyA6ICdub25lJyB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjZVsxXSxcbiAgICAgICAgICAgIGxlZnQ6ICcxLjVjaCcsXG4gICAgICAgICAgICByaWdodDogJzEuNWNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeydhc2QnLnNwbGl0KCcnKS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoga2V5c19wcmVzc2VkLmN1cnJlbnRbbF1cbiAgICAgICAgICAgICAgICAgICAgICA/ICdwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeydqa2w7Jy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleXNfcHJlc3NlZC5jdXJyZW50W2xdXG4gICAgICAgICAgICAgICAgICAgICAgPyAncGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1] - 2 * _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].space[0],
    css: {
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, 'asd'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, 'jkl;'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_5__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d192a80ad7023ecef30a.hot-update.js.map