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
      a_pressed = _useState5[0],
      setAPress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      s_pressed = _useState6[0],
      setSPress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      d_pressed = _useState7[0],
      setDPress = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([null, null]),
      dimensions = _useState8[0],
      setDimensions = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]),
      coordinates = _useState9[0],
      setCoordinates = _useState9[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

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

      case 'a':
        setAPress(true);
        break;

      case 's':
        setSPress(true);
        break;

      case 'd':
        setDPress(true);
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

      case 'a':
        setAPress(false);
        break;

      case 's':
        setSPress(false);
        break;

      case 'd':
        setDPress(false);
        break;
    }
  } // useEffect(() => {
  //   if (j_pressed) {
  //     console.log('j pressed');
  //   }
  // }, [j_pressed]);


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
    a: {
      val: a_pressed,
      set: setAPress
    },
    s: {
      val: s_pressed,
      set: setSPress
    },
    d: {
      val: d_pressed,
      set: setDPress
    }
  };

  function setWindowSize() {
    setDimensions([window.innerWidth, window.innerHeight]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setWindowSize();
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function update() {
      if (j_pressed) {
        setCoordinates(coordinates[0], coordinates[1] + 5);
      }
    }

    update();
  }, [j_pressed]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    ctx.strokeRect(coordinates[0], coordinates[1], 10, 10);
  }, [coordinates]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0gyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbal9wcmVzc2VkLCBzZXRKUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2tfcHJlc3NlZCwgc2V0S1ByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtsX3ByZXNzZWQsIHNldExQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc2VtaWNvbG9uX3ByZXNzZWQsIHNldFNlbWljb2xvblByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFthX3ByZXNzZWQsIHNldEFQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc19wcmVzc2VkLCBzZXRTUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2RfcHJlc3NlZCwgc2V0RFByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsXSk7XG4gIGxldCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnaic6XG4gICAgICAgIHNldEpQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdrJzpcbiAgICAgICAgc2V0S1ByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgICBzZXRMUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnOyc6XG4gICAgICAgIHNldFNlbWljb2xvblByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBzZXRBUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHNldFNQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgc2V0RFByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdqJzpcbiAgICAgICAgc2V0SlByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdrJzpcbiAgICAgICAgc2V0S1ByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgc2V0TFByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc7JzpcbiAgICAgICAgc2V0U2VtaWNvbG9uUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBzZXRBUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBzZXRTUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgICBzZXREUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChqX3ByZXNzZWQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdqIHByZXNzZWQnKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtqX3ByZXNzZWRdKTtcblxuICBsZXQga2V5X21hcCA9IHtcbiAgICBqOiB7IHZhbDogal9wcmVzc2VkLCBzZXQ6IHNldEpQcmVzcyB9LFxuICAgIGs6IHsgdmFsOiBrX3ByZXNzZWQsIHNldDogc2V0S1ByZXNzIH0sXG4gICAgbDogeyB2YWw6IGxfcHJlc3NlZCwgc2V0OiBzZXRMUHJlc3MgfSxcbiAgICAnOyc6IHsgdmFsOiBzZW1pY29sb25fcHJlc3NlZCwgc2V0OiBzZXRTZW1pY29sb25QcmVzcyB9LFxuICAgIGE6IHsgdmFsOiBhX3ByZXNzZWQsIHNldDogc2V0QVByZXNzIH0sXG4gICAgczogeyB2YWw6IHNfcHJlc3NlZCwgc2V0OiBzZXRTUHJlc3MgfSxcbiAgICBkOiB7IHZhbDogZF9wcmVzc2VkLCBzZXQ6IHNldERQcmVzcyB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIHNldFdpbmRvd1NpemUoKSB7XG4gICAgc2V0RGltZW5zaW9ucyhbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGlmIChqX3ByZXNzZWQpIHtcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdICsgNSk7XG4gICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZSgpO1xuICB9LCBbal9wcmVzc2VkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguc3Ryb2tlUmVjdChjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0sIDEwLCAxMCk7XG4gIH0sIFtjb29yZGluYXRlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnRzLmJvZHl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1swXX1weDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuYm9keX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5FdGNoPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zWzBdfVxuICAgICAgICAgIGhlaWdodD17ZGltZW5zaW9uc1sxXSAtIDIgKiB0aGVtZS5zcGFjZVswXX1cbiAgICAgICAgICBjc3M9e3sgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIGJvdHRvbTogdGhlbWUuc3BhY2VbMV0sXG4gICAgICAgICAgICBsZWZ0OiAnMS41Y2gnLFxuICAgICAgICAgICAgcmlnaHQ6ICcxLjVjaCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHsnYXNkJy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleV9tYXBbbF0udmFsID8gJ3BpbmsnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgeydqa2w7Jy5zcGxpdCgnJykubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGtleV9tYXBbbF0udmFsID8gJ3BpbmsnIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2x9XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("canvas", {
    ref: canvasRef,
    sx: {
      background: 'white'
    },
    width: dimensions[0],
    height: dimensions[1] - 2 * _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].space[0],
    css: {
      display: dimensions[0] !== null ? 'block' : 'none'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
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
      lineNumber: 151
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
      lineNumber: 160
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, 'asd'.split('').map(function (l) {
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
        lineNumber: 169
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
        lineNumber: 178
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
      lineNumber: 192
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
        lineNumber: 194
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
        lineNumber: 203
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d405f9af01fcf24d8d5b.hot-update.js.map