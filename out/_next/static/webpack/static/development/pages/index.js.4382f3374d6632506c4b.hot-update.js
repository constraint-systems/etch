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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _parts_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/utils */ "./parts/utils.js");

var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/* @jsx jsx */







var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var keys_pressed = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    h: false,
    j: false,
    k: false,
    l: false,
    x: false,
    s: false,
    d: false
  });
  var coordinates = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([0, 0]);
  var overlayCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var keys_array = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(keys_pressed.current);

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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var octx = overlayCanvasRef.current.getContext('2d');
    octx.fillStyle = 'pink';
    var ctx = canvasRef.current.getContext('2d');

    function update() {
      var modify = [0, 0];
      var inc = 5;
      if (keys_pressed.current['h']) modify[0] += -inc;
      if (keys_pressed.current['j']) modify[1] += inc;
      if (keys_pressed.current['k']) modify[1] += -inc;
      if (keys_pressed.current['l']) modify[0] += inc;
      var current = coordinates.current;
      coordinates.current = [current[0] + modify[0], current[1] + modify[1]];
      octx.clearRect(0, 0, dimensions[0], dimensions[1]);
      octx.fillRect(current[0], current[1], 5, 5);

      if (keys_pressed.current['d']) {
        ctx.fillRect(current[0], current[1], 5, 5);
      }
    }

    requestRef.current = Object(_parts_utils__WEBPACK_IMPORTED_MODULE_6__["requestInterval"])(update, 20);
    return function () {
      cancelAnimationFrame(requestRef.current);
    };
  }, [dimensions]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0YyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyByZXF1ZXN0SW50ZXJ2YWwgfSBmcm9tICcuLi9wYXJ0cy91dGlscyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbZGltZW5zaW9ucywgc2V0RGltZW5zaW9uc10gPSB1c2VTdGF0ZShbbnVsbCwgbnVsbF0pO1xuICBsZXQgY2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCByZXF1ZXN0UmVmID0gdXNlUmVmKCk7XG4gIGxldCBrZXlzX3ByZXNzZWQgPSB1c2VSZWYoe1xuICAgIGg6IGZhbHNlLFxuICAgIGo6IGZhbHNlLFxuICAgIGs6IGZhbHNlLFxuICAgIGw6IGZhbHNlLFxuICAgIHg6IGZhbHNlLFxuICAgIHM6IGZhbHNlLFxuICAgIGQ6IGZhbHNlLFxuICB9KTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gdXNlUmVmKFswLCAwXSk7XG4gIGxldCBvdmVybGF5Q2FudmFzUmVmID0gdXNlUmVmKCk7XG4gIGxldCBrZXlzX2FycmF5ID0gT2JqZWN0LmtleXMoa2V5c19wcmVzc2VkLmN1cnJlbnQpO1xuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoa2V5c19hcnJheS5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIGtleXNfcHJlc3NlZC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGtleXNfYXJyYXkuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICBrZXlzX3ByZXNzZWQuY3VycmVudFtlLmtleV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCkge1xuICAgIHNldERpbWVuc2lvbnMoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2luZG93U2l6ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb2N0eCA9IG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jdHguZmlsbFN0eWxlID0gJ3BpbmsnO1xuXG4gICAgbGV0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICBsZXQgbW9kaWZ5ID0gWzAsIDBdO1xuICAgICAgbGV0IGluYyA9IDU7XG4gICAgICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2gnXSkgbW9kaWZ5WzBdICs9IC1pbmM7XG4gICAgICBpZiAoa2V5c19wcmVzc2VkLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnayddKSBtb2RpZnlbMV0gKz0gLWluYztcbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuXG4gICAgICBsZXQgY3VycmVudCA9IGNvb3JkaW5hdGVzLmN1cnJlbnQ7XG4gICAgICBjb29yZGluYXRlcy5jdXJyZW50ID0gW2N1cnJlbnRbMF0gKyBtb2RpZnlbMF0sIGN1cnJlbnRbMV0gKyBtb2RpZnlbMV1dO1xuXG4gICAgICBvY3R4LmNsZWFyUmVjdCgwLCAwLCBkaW1lbnNpb25zWzBdLCBkaW1lbnNpb25zWzFdKTtcbiAgICAgIG9jdHguZmlsbFJlY3QoY3VycmVudFswXSwgY3VycmVudFsxXSwgNSwgNSk7XG5cbiAgICAgIGlmIChrZXlzX3ByZXNzZWQuY3VycmVudFsnZCddKSB7XG4gICAgICAgIGN0eC5maWxsUmVjdChjdXJyZW50WzBdLCBjdXJyZW50WzFdLCA1LCA1KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdFJlZi5jdXJyZW50ID0gcmVxdWVzdEludGVydmFsKHVwZGF0ZSwgMjApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0UmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtkaW1lbnNpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udHMuYm9keX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdIC0gMiAqIHRoZW1lLnNwYWNlWzBdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17b3ZlcmxheUNhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdIC0gMiAqIHRoZW1lLnNwYWNlWzBdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjZVsxXSxcbiAgICAgICAgICAgIGxlZnQ6ICcxLjVjaCcsXG4gICAgICAgICAgICByaWdodDogJzEuNWNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeyd4c2QnLnNwbGl0KCcnKS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoga2V5c19wcmVzc2VkLmN1cnJlbnRbbF1cbiAgICAgICAgICAgICAgICAgICAgICA/ICdwaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeydoamtsJy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleXNfcHJlc3NlZC5jdXJyZW50W2xdXG4gICAgICAgICAgICAgICAgICAgICAgPyAncGluaydcbiAgICAgICAgICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1] - 2 * _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].space[0],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("canvas", {
    ref: overlayCanvasRef,
    sx: {
      background: 'transparent'
    },
    width: dimensions[0],
    height: dimensions[1] - 2 * _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].space[0],
    css: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, 'xsd'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, 'hjkl'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: keys_pressed.current[l] ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_4__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4382f3374d6632506c4b.hot-update.js.map