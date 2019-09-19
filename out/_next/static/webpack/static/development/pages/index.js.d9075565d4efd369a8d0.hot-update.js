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






var once = false;
var size = 14;
var special_keys = 's?'.split('');

Object.fromEntries = function (arr) {
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default.a.apply(Object, [{}].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(arr, function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, k, v);
  }))));
};

var KeyTip = function KeyTip(props) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
    sx: {
      border: 'solid 1px black',
      width: '2ch',
      textAlign: 'center',
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.children);
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      help = _useState2[0],
      toggleHelp = _useState2[1];

  function keyAction(key, repeat) {
    var canvas_width = Math.floor(window.innerWidth / size) * size;
    var canvas_height = Math.floor(window.innerHeight / size) * size;
    var ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'black';
    var octx = overlayCanvasRef.current.getContext('2d');
    octx.strokeStyle = 'hotpink';
    var ostroke = 4;
    octx.lineWidth = ostroke;

    if (special_keys.includes(key)) {
      // if (key === 'x' && !repeat) {
      //   ctx.fillStyle = 'white';
      //   ctx.fillRect(0, 0, canvas_width, canvas_height);
      //   ctx.fillStyle = 'black';
      // }
      if (key === 's' && !repeat) {
        var encoded = canvasRef.current.toDataURL('image/png');
        var link = document.createElement('a');
        link.setAttribute('href', encoded);
        link.setAttribute('download', 'etch.png');
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      } else if (key === '?' && !repeat) {
        toggleHelp(!help);
      }

      return;
    }

    if (key === 'init') {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas_width, canvas_height);
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
      ctx.fillStyle = 'black';
      ctx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
    } else if (keymap.current['e']) {
      ctx.fillStyle = 'white';
      ctx.fillRect(coordinates.current[0], coordinates.current[1], size, size);
    }

    octx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    octx.strokeRect(coordinates.current[0] - ostroke / 2, coordinates.current[1] - ostroke / 2, size + ostroke, size + ostroke);
  }

  function downHandler(e) {
    keymap.current[e.key] = true;
    keyAction(e.key, e.repeat);
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

    if (!once) {
      setTimeout(function () {
        keyAction('init', false);
      }, 0);
      once = true;
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [help]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
    theme: _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2101144674",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}p{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0oyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLEFBS1gsU0FQWCxBQVFBLFdBTG9CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYXJ0cy90aGVtZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgcmVxdWVzdEludGVydmFsIH0gZnJvbSAnLi4vcGFydHMvdXRpbHMnO1xuXG5sZXQgb25jZSA9IGZhbHNlO1xubGV0IHNpemUgPSAxNDtcblxubGV0IHNwZWNpYWxfa2V5cyA9ICdzPycuc3BsaXQoJycpO1xuXG5PYmplY3QuZnJvbUVudHJpZXMgPSBhcnIgPT5cbiAgT2JqZWN0LmFzc2lnbih7fSwgLi4uQXJyYXkuZnJvbShhcnIsIChbaywgdl0pID0+ICh7IFtrXTogdiB9KSkpO1xuXG5sZXQgS2V5VGlwID0gcHJvcHMgPT4gKFxuICA8c3BhblxuICAgIHN4PXt7XG4gICAgICBib3JkZXI6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgd2lkdGg6ICcyY2gnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIH19XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvc3Bhbj5cbik7XG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2RpbWVuc2lvbnMsIHNldERpbWVuc2lvbnNdID0gdXNlU3RhdGUoW251bGwsIG51bGxdKTtcbiAgbGV0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuICBsZXQgb3ZlcmxheUNhbnZhc1JlZiA9IHVzZVJlZigpO1xuICBsZXQgcmVxdWVzdFJlZiA9IHVzZVJlZigpO1xuICBsZXQga2V5bWFwID0gdXNlUmVmKHt9KTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gdXNlUmVmKFswLCAwXSk7XG4gIGxldCBbaGVscCwgdG9nZ2xlSGVscF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCByZXBlYXQpIHtcbiAgICBsZXQgY2FudmFzX3dpZHRoID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aCAvIHNpemUpICogc2l6ZTtcbiAgICBsZXQgY2FudmFzX2hlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gc2l6ZSkgKiBzaXplO1xuXG4gICAgbGV0IGN0eCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5cbiAgICBsZXQgb2N0eCA9IG92ZXJsYXlDYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jdHguc3Ryb2tlU3R5bGUgPSAnaG90cGluayc7XG4gICAgbGV0IG9zdHJva2UgPSA0O1xuICAgIG9jdHgubGluZVdpZHRoID0gb3N0cm9rZTtcblxuICAgIGlmIChzcGVjaWFsX2tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgLy8gaWYgKGtleSA9PT0gJ3gnICYmICFyZXBlYXQpIHtcbiAgICAgIC8vICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAvLyAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNfd2lkdGgsIGNhbnZhc19oZWlnaHQpO1xuICAgICAgLy8gICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIC8vIH1cbiAgICAgIGlmIChrZXkgPT09ICdzJyAmJiAhcmVwZWF0KSB7XG4gICAgICAgIGxldCBlbmNvZGVkID0gY2FudmFzUmVmLmN1cnJlbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZCk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdldGNoLnBuZycpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnPycgJiYgIXJlcGVhdCkge1xuICAgICAgICB0b2dnbGVIZWxwKCFoZWxwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnaW5pdCcpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc193aWR0aCwgY2FudmFzX2hlaWdodCk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSBjb29yZGluYXRlcy5jdXJyZW50O1xuXG4gICAgbGV0IGluYyA9IHNpemU7XG4gICAgbGV0IG1vZGlmeSA9IFswLCAwXTtcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2onXSkgbW9kaWZ5WzFdICs9IGluYztcbiAgICBpZiAoa2V5bWFwLmN1cnJlbnRbJ2snXSkgbW9kaWZ5WzFdICs9IC1pbmM7XG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydoJ10pIG1vZGlmeVswXSArPSAtaW5jO1xuICAgIGlmIChrZXltYXAuY3VycmVudFsnbCddKSBtb2RpZnlbMF0gKz0gaW5jO1xuXG4gICAgbGV0IG5leHQgPSBbY3VycmVudFswXSArIG1vZGlmeVswXSwgY3VycmVudFsxXSArIG1vZGlmeVsxXV07XG4gICAgaWYgKG5leHRbMF0gPCAwKSBuZXh0WzBdID0gY2FudmFzX3dpZHRoIC0gc2l6ZTtcbiAgICBpZiAobmV4dFswXSA+PSBjYW52YXNfd2lkdGgpIG5leHRbMF0gPSAwO1xuICAgIGlmIChuZXh0WzFdIDwgMCkgbmV4dFsxXSA9IGNhbnZhc19oZWlnaHQgLSBzaXplO1xuICAgIGlmIChuZXh0WzFdID49IGNhbnZhc19oZWlnaHQpIG5leHRbMV0gPSAwO1xuICAgIGNvb3JkaW5hdGVzLmN1cnJlbnQgPSBuZXh0O1xuXG4gICAgaWYgKGtleW1hcC5jdXJyZW50WydkJ10pIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY3R4LmZpbGxSZWN0KGNvb3JkaW5hdGVzLmN1cnJlbnRbMF0sIGNvb3JkaW5hdGVzLmN1cnJlbnRbMV0sIHNpemUsIHNpemUpO1xuICAgIH0gZWxzZSBpZiAoa2V5bWFwLmN1cnJlbnRbJ2UnXSkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICBjdHguZmlsbFJlY3QoY29vcmRpbmF0ZXMuY3VycmVudFswXSwgY29vcmRpbmF0ZXMuY3VycmVudFsxXSwgc2l6ZSwgc2l6ZSk7XG4gICAgfVxuXG4gICAgb2N0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgb2N0eC5zdHJva2VSZWN0KFxuICAgICAgY29vcmRpbmF0ZXMuY3VycmVudFswXSAtIG9zdHJva2UgLyAyLFxuICAgICAgY29vcmRpbmF0ZXMuY3VycmVudFsxXSAtIG9zdHJva2UgLyAyLFxuICAgICAgc2l6ZSArIG9zdHJva2UsXG4gICAgICBzaXplICsgb3N0cm9rZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gdHJ1ZTtcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUucmVwZWF0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga2V5bWFwLmN1cnJlbnRbZS5rZXldID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRXaW5kb3dTaXplKCkge1xuICAgIGxldCBjYW52YXNfd2lkdGggPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC8gc2l6ZSkgKiBzaXplO1xuICAgIGxldCBjYW52YXNfaGVpZ2h0ID0gTWF0aC5mbG9vcih3aW5kb3cuaW5uZXJIZWlnaHQgLyBzaXplKSAqIHNpemU7XG4gICAgc2V0RGltZW5zaW9ucyhbY2FudmFzX3dpZHRoLCBjYW52YXNfaGVpZ2h0XSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpbmRvd1NpemUoKTtcbiAgICBpZiAoIW9uY2UpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBrZXlBY3Rpb24oJ2luaXQnLCBmYWxzZSk7XG4gICAgICB9LCAwKTtcbiAgICAgIG9uY2UgPSB0cnVlO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW2hlbHBdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJHt0aGVtZS5mb250cy5ib2R5fTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXNbMF19cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17b3ZlcmxheUNhbnZhc1JlZn1cbiAgICAgICAgICBzeD17eyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnIH19XG4gICAgICAgICAgd2lkdGg9e2RpbWVuc2lvbnNbMF19XG4gICAgICAgICAgaGVpZ2h0PXtkaW1lbnNpb25zWzFdfVxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZGlzcGxheTogZGltZW5zaW9uc1swXSAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgZGlzcGxheTogaGVscCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHJpZ2h0OiBzaXplICogMixcbiAgICAgICAgICAgIGJvdHRvbTogc2l6ZSAqIDIsXG4gICAgICAgICAgICBtYXhXaWR0aDogYGNhbGMoMTAwJSAtICR7c2l6ZSAqIDR9cHhgLFxuICAgICAgICAgICAgcGFkZGluZzogc2l6ZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBzaXplLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzJweCAxcHggMTRweCByZ2JhKDAsMCwwLDAuMyknLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogc2l6ZSAqIDEuNSB9fT5cbiAgICAgICAgICAgIDxwPkV0Y2ggaXMgYSBrZXlib2FyZC1iYXNlZCBkcmF3aW5nIHRvb2wuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHNpemUgKiAxLjUgfX0+XG4gICAgICAgICAgICA8cD5Nb3ZlbWVudDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8S2V5VGlwPmg8L0tleVRpcD4g4oaQJm5ic3A7IDxLZXlUaXA+ajwvS2V5VGlwPiDihpMmbmJzcDt7JyAnfVxuICAgICAgICAgICAgICA8S2V5VGlwPms8L0tleVRpcD4g4oaRJm5ic3A7IDxLZXlUaXA+bDwvS2V5VGlwPiDihpJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBzaXplICogMS41IH19PlxuICAgICAgICAgICAgPHA+RHJhd2luZzwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8S2V5VGlwPmQ8L0tleVRpcD4gZHJhdyZuYnNwOyA8S2V5VGlwPmU8L0tleVRpcD4gZXJhc2VcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAwIH19PlNwZWNpYWw8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEtleVRpcD5zPC9LZXlUaXA+IHNhdmUgYXMgcG5nJm5ic3A7IDxLZXlUaXA+PzwvS2V5VGlwPiB0b2dnbGVcbiAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb25zXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: {
      display: help ? 'block' : 'none',
      position: 'fixed',
      right: size * 2,
      bottom: size * 2,
      maxWidth: "calc(100% - ".concat(size * 4, "px"),
      padding: size,
      fontSize: size,
      lineHeight: 1.5,
      background: 'white',
      borderRadius: 4,
      boxShadow: '2px 1px 14px rgba(0,0,0,0.3)'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginBottom: size * 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Etch is a keyboard-based drawing tool.")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginBottom: size * 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Movement"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "h"), " \u2190\xA0 ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "j"), " \u2193\xA0", ' ', Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "k"), " \u2191\xA0 ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "l"), " \u2192")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginBottom: size * 1.5
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Drawing"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "d"), " draw\xA0 ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "e"), " erase")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    style: {
      marginBottom: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    style: {
      marginBottom: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Special"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a.dynamic([["2101144674", [_parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_8__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "s"), " save as png\xA0 ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_9__["jsx"])(KeyTip, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "?"), " toggle instructions")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d9075565d4efd369a8d0.hot-update.js.map