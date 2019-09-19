webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* @jsx jsx */






var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      j_pressed = _useState[0],
      setJPress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      k_pressed = _useState2[0],
      setKPress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      l_pressed = _useState3[0],
      setLPress = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      semicolon_pressed = _useState4[0],
      setSemicolonPress = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      x_pressed = _useState5[0],
      setXPress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      s_pressed = _useState6[0],
      setSPress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([null, null]),
      dimensions = _useState7[0],
      setDimensions = _useState7[1];

  function downHandler(e) {
    switch (e.key) {
      case 'j':
        setJPress(true);
        break;

      case 'k':
        setKPress(true);
        break;

      case 'l':
        setLPress(true);
        break;

      case ';':
        setSemicolonPress(true);
        break;

      case 'x':
        setXPress(true);
        break;

      case 's':
        setSPress(true);
        break;
    }
  }

  function upHandler(e) {
    switch (e.key) {
      case 'j':
        setJPress(false);
        break;

      case 'k':
        setKPress(false);
        break;

      case 'l':
        setLPress(false);
        break;

      case ';':
        setSemicolonPress(false);
        break;

      case 'x':
        setXPress(false);
        break;

      case 's':
        setSPress(false);
        break;
    }
  }

  var key_map = {
    j: {
      val: j_pressed,
      set: setJPress
    },
    k: {
      val: k_pressed,
      set: setKPress
    },
    l: {
      val: l_pressed,
      set: setLPress
    },
    ';': {
      val: semicolon_pressed,
      set: setSemicolonPress
    },
    x: {
      val: x_pressed,
      set: setXPress
    },
    s: {
      val: s_pressed,
      set: setSPress
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setDimensions([window.innerWidth, window.innerHeight]);
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0YyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYXJ0cy90aGVtZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2pfcHJlc3NlZCwgc2V0SlByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtrX3ByZXNzZWQsIHNldEtQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbbF9wcmVzc2VkLCBzZXRMUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3NlbWljb2xvbl9wcmVzc2VkLCBzZXRTZW1pY29sb25QcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbeF9wcmVzc2VkLCBzZXRYUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3NfcHJlc3NlZCwgc2V0U1ByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsXSk7XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ2onOlxuICAgICAgICBzZXRKUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnayc6XG4gICAgICAgIHNldEtQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgc2V0TFByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzsnOlxuICAgICAgICBzZXRTZW1pY29sb25QcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgc2V0WFByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBzZXRTUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ2onOlxuICAgICAgICBzZXRKUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2snOlxuICAgICAgICBzZXRLUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgICBzZXRMUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzsnOlxuICAgICAgICBzZXRTZW1pY29sb25QcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHNldFhQcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHNldFNQcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGxldCBrZXlfbWFwID0ge1xuICAgIGo6IHsgdmFsOiBqX3ByZXNzZWQsIHNldDogc2V0SlByZXNzIH0sXG4gICAgazogeyB2YWw6IGtfcHJlc3NlZCwgc2V0OiBzZXRLUHJlc3MgfSxcbiAgICBsOiB7IHZhbDogbF9wcmVzc2VkLCBzZXQ6IHNldExQcmVzcyB9LFxuICAgICc7JzogeyB2YWw6IHNlbWljb2xvbl9wcmVzc2VkLCBzZXQ6IHNldFNlbWljb2xvblByZXNzIH0sXG4gICAgeDogeyB2YWw6IHhfcHJlc3NlZCwgc2V0OiBzZXRYUHJlc3MgfSxcbiAgICBzOiB7IHZhbDogc19wcmVzc2VkLCBzZXQ6IHNldFNQcmVzcyB9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGltZW5zaW9ucyhbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udHMuYm9keX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHtkaW1lbnNpb25zWzBdICE9PSBudWxsID8gKFxuICAgICAgICAgIDxDYW52YXNcbiAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zWzBdfVxuICAgICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjZVsxXSxcbiAgICAgICAgICAgIGxlZnQ6ICcxLjVjaCcsXG4gICAgICAgICAgICByaWdodDogJzEuNWNoJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeyd4cycuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlfbWFwW2xdLnZhbCA/ICdwaW5rJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgIG1yOiAxLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7J2prbDsnLnNwbGl0KCcnKS5tYXAobCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMmNoJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDoga2V5X21hcFtsXS52YWwgPyAncGluaycgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Etch")), dimensions[0] !== null ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Canvas, {
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }) : null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      bottom: _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].space[1],
      left: '1.5ch',
      right: '1.5ch'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, 'xs'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: key_map[l].val ? 'pink' : 'transparent',
        mr: 1
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    style: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, 'jkl;'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '2ch',
        textAlign: 'center',
        background: key_map[l].val ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, l, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      css: {
        position: 'absolute',
        left: -0.5,
        top: -0.5,
        right: -0.5,
        bottom: -0.5,
        border: 'solid 1px black',
        pointerEvents: 'none'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f9b2978e6e852c3aac37.hot-update.js.map