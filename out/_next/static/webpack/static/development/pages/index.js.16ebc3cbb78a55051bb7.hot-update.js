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
      console.log('runnin'); // if (j_pressed) {

      setCoordinates([coordinates[0], coordinates[1] + 5]); // }

      requestAnimationFrame(update);
    }

    var request = requestAnimationFrame(update);
    return function () {
      cancelAnimationFrame(request);
    };
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
      lineNumber: 124
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkgyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbal9wcmVzc2VkLCBzZXRKUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2tfcHJlc3NlZCwgc2V0S1ByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtsX3ByZXNzZWQsIHNldExQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc2VtaWNvbG9uX3ByZXNzZWQsIHNldFNlbWljb2xvblByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFthX3ByZXNzZWQsIHNldEFQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbc19wcmVzc2VkLCBzZXRTUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW2RfcHJlc3NlZCwgc2V0RFByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsXSk7XG4gIGxldCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnaic6XG4gICAgICAgIHNldEpQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdrJzpcbiAgICAgICAgc2V0S1ByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgICBzZXRMUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnOyc6XG4gICAgICAgIHNldFNlbWljb2xvblByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBzZXRBUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHNldFNQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgc2V0RFByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdqJzpcbiAgICAgICAgc2V0SlByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdrJzpcbiAgICAgICAgc2V0S1ByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgc2V0TFByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc7JzpcbiAgICAgICAgc2V0U2VtaWNvbG9uUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgICBzZXRBUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBzZXRTUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgICBzZXREUHJlc3MoZmFsc2UpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChqX3ByZXNzZWQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdqIHByZXNzZWQnKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtqX3ByZXNzZWRdKTtcblxuICBsZXQga2V5X21hcCA9IHtcbiAgICBqOiB7IHZhbDogal9wcmVzc2VkLCBzZXQ6IHNldEpQcmVzcyB9LFxuICAgIGs6IHsgdmFsOiBrX3ByZXNzZWQsIHNldDogc2V0S1ByZXNzIH0sXG4gICAgbDogeyB2YWw6IGxfcHJlc3NlZCwgc2V0OiBzZXRMUHJlc3MgfSxcbiAgICAnOyc6IHsgdmFsOiBzZW1pY29sb25fcHJlc3NlZCwgc2V0OiBzZXRTZW1pY29sb25QcmVzcyB9LFxuICAgIGE6IHsgdmFsOiBhX3ByZXNzZWQsIHNldDogc2V0QVByZXNzIH0sXG4gICAgczogeyB2YWw6IHNfcHJlc3NlZCwgc2V0OiBzZXRTUHJlc3MgfSxcbiAgICBkOiB7IHZhbDogZF9wcmVzc2VkLCBzZXQ6IHNldERQcmVzcyB9LFxuICB9O1xuXG4gIGZ1bmN0aW9uIHNldFdpbmRvd1NpemUoKSB7XG4gICAgc2V0RGltZW5zaW9ucyhbd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodF0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdydW5uaW4nKTtcbiAgICAgIC8vIGlmIChqX3ByZXNzZWQpIHtcbiAgICAgIHNldENvb3JkaW5hdGVzKFtjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0gKyA1XSk7XG4gICAgICAvLyB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG4gICAgbGV0IHJlcXVlc3QgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdCk7XG4gICAgfTtcbiAgfSwgW2pfcHJlc3NlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LnN0cm9rZVJlY3QoY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdLCAxMCwgMTApO1xuICB9LCBbY29vcmRpbmF0ZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250cy5ib2R5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMF19cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RXRjaDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICAgIHN4PXt7IGJhY2tncm91bmQ6ICd3aGl0ZScgfX1cbiAgICAgICAgICB3aWR0aD17ZGltZW5zaW9uc1swXX1cbiAgICAgICAgICBoZWlnaHQ9e2RpbWVuc2lvbnNbMV0gLSAyICogdGhlbWUuc3BhY2VbMF19XG4gICAgICAgICAgY3NzPXt7IGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBib3R0b206IHRoZW1lLnNwYWNlWzFdLFxuICAgICAgICAgICAgbGVmdDogJzEuNWNoJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMS41Y2gnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICB7J2FzZCcuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlfbWFwW2xdLnZhbCA/ICdwaW5rJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIHsnamtsOycuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlfbWFwW2xdLnZhbCA/ICdwaW5rJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMC41LFxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IC0wLjUsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
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
      lineNumber: 149
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
      lineNumber: 156
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
      lineNumber: 165
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    sx: {
      display: 'flex'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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
        lineNumber: 174
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
        lineNumber: 183
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
      lineNumber: 197
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
        lineNumber: 199
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
        lineNumber: 208
      },
      __self: this
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.16ebc3cbb78a55051bb7.hot-update.js.map