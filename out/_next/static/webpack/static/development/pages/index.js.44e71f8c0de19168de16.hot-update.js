webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/theme */ "./parts/theme.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _parts_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/utils */ "./parts/utils.js");





var _jsxFileName = "/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

/* @jsx jsx */






var special_keys = 'xs'.split('');

Object.fromEntries = function (arr) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default.a.apply(Object, [{}].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(arr, function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, k, v);
  }))));
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([null, null]),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var overlayCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var requestRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
  var keymap = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var coordinates = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([0, 0]);
  var size = 14;

  function keyAction(key) {
    var canvas_width = Math.floor(window.innerWidth / size) * size;
    var canvas_height = Math.floor(window.innerHeight / size) * size;
    var ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';
    var octx = overlayCanvasRef.current.getContext('2d');
    octx.fillStyle = 'pink';

    if (special_keys.includes(key)) {
      if (key === 'x') {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      } else if (key === 's') {
        var encoded = canvasRef.current.toDataURL('image/png');
        var link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'etch.png');
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      }

      return;
    }

    var current = coordinates.current;
    var inc = size;
    var modify = [0, 0];
    if (keymap.current['j']) modify[1] += inc;
    if (keymap.current['k']) modify[1] += -inc;
    if (keymap.current['h']) modify[0] += -inc;
    if (keymap.current['l']) modify[0] += inc;
    var next = [current[0] + modify[0], current[1] + modify[1]];
    if (next[0] < 0) next[0] = canvas_width - size;
    if (next[0] >= canvas_width) next[0] = 0;
    if (next[1] < 0) next[1] = canvas_height - size;
    if (next[1] >= canvas_height) next[1] = 0;
    coordinates.current = next;

    if (keymap.current['d']) {
      ctx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
    }

    octx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    octx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key);
  }

  function upHandler(e) {
    keymap.current[e.key] = false;
  }

  function setWindowSize() {
    var canvas_width = Math.floor(window.innerWidth / size) * size;
    var canvas_height = Math.floor(window.innerHeight / size) * size;
    setDimensions([canvas_width, canvas_height]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    setWindowSize();
    setTimeout(function () {
      keyAction(null);
    }, 0);
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEcyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhcnRzL3RoZW1lJztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyByZXF1ZXN0SW50ZXJ2YWwgfSBmcm9tICcuLi9wYXJ0cy91dGlscyc7XG5cbmxldCBzcGVjaWFsX2tleXMgPSAneHMnLnNwbGl0KCcnKTtcblxuT2JqZWN0LmZyb21FbnRyaWVzID0gYXJyID0+XG4gIE9iamVjdC5hc3NpZ24oe30sIC4uLkFycmF5LmZyb20oYXJyLCAoW2ssIHZdKSA9PiAoeyBba106IHYgfSkpKTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsXSk7XG4gIGxldCBjYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IG92ZXJsYXlDYW52YXNSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IHJlcXVlc3RSZWYgPSB1c2VSZWYoKTtcbiAgbGV0IGtleW1hcCA9IHVzZVJlZih7fSk7XG4gIGxldCBjb29yZGluYXRlcyA9IHVzZVJlZihbMCwgMF0pO1xuXG4gIGxldCBzaXplID0gMTQ7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgLyBzaXplKSAqIHNpemU7XG5cbiAgICBsZXQgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcblxuICAgIGxldCBvY3R4ID0gb3ZlcmxheUNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgb2N0eC5maWxsU3R5bGUgPSAncGluayc7XG5cbiAgICBpZiAoc3BlY2lhbF9rZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGlmIChrZXkgPT09ICd4Jykge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzJykge1xuICAgICAgICBsZXQgZW5jb2RlZCA9IGNhbnZhc1JlZi5jdXJyZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGVuY29kZWQpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnZXRjaC5wbmcnKTtcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuXG4gICAgbGV0IGluYyA9IHNpemU7XG4gICAgbGV0IG1vZGlmeSA9IFswLCAwXTtcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2snXSkgbW9kaWZ5WzFdICs9IC1pbmM7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydoJ10pIG1vZGlmeVswXSArPSAtaW5jO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuXG4gICAgbGV0IG5leHQgPSBbY3VycmVudFswXSArIG1vZGlmeVswXSwgY3VycmVudFsxXSArIG1vZGlmeVsxXV07XG4gICAgaWYgKG5leHRbMF0gPCAwKSBuZXh0WzBdID0gY2FudmFzX3dpZHRoIC0gc2l6ZTtcbiAgICBpZiAobmV4dFswXSA+PSBjYW52YXNfd2lkdGgpIG5leHRbMF0gPSAwO1xuICAgIGlmIChuZXh0WzFdIDwgMCkgbmV4dFsxXSA9IGNhbnZhc19oZWlnaHQgLSBzaXplO1xuICAgIGlmIChuZXh0WzFdID49IGNhbnZhc19oZWlnaHQpIG5leHRbMV0gPSAwO1xuICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSBuZXh0O1xuXG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydkJ10pIHtcbiAgICAgIGN0eC5maWxsUmVjdChjb29yZGluYXRlcy5jdXJyZW50WzBdLCBjb29yZGluYXRlcy5jdXJyZW50WzFdLCBzaXplLCBzaXplKTtcbiAgICB9XG5cbiAgICBvY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICBvY3R4LmZpbGxSZWN0KGNvb3JkaW5hdGVzLmN1cnJlbnRbMF0sIGNvb3JkaW5hdGVzLmN1cnJlbnRbMV0sIHNpemUsIHNpemUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGtleW1hcC5jdXJyZW50W2Uua2V5XSA9IHRydWU7XG4gICAga2V5QWN0aW9uKGUua2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgLyBzaXplKSAqIHNpemU7XG4gICAgc2V0RGltZW5zaW9ucyhbY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0XSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGtleUFjdGlvbihudWxsKTtcbiAgICB9LCAwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnRzLmJvZHl9O1xuICAgICAgICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1swXX1weDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuYm9keX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5FdGNoPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZDogJ3doaXRlJyB9fVxuICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zWzBdfVxuICAgICAgICAgIGhlaWdodD17ZGltZW5zaW9uc1sxXX1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e292ZXJsYXlDYW52YXNSZWZ9XG4gICAgICAgICAgc3g9e3sgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyB9fVxuICAgICAgICAgIHdpZHRoPXtkaW1lbnNpb25zWzBdfVxuICAgICAgICAgIGhlaWdodD17ZGltZW5zaW9uc1sxXX1cbiAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6IGRpbWVuc2lvbnNbMF0gIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("canvas", {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.44e71f8c0de19168de16.hot-update.js.map