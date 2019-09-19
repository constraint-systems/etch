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
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
      lineNumber: 65
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "693492221",
    dynamic: [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body],
    __self: this
  }, "*{box-sizing:border-box;}html{font-family:".concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, ";font-size:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], "px;background:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, ";line-height:").concat(_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body, ";}body{margin:0;}textarea{font-family:inherit;font-size:inherit;line-height:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludF9zeXN0ZW1zL2V0Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0UyQixBQUdtQyxBQUdtQixBQU1oQyxBQUdXLFNBRnRCLFdBR29CLEVBWnBCLGdCQWFzQixHQVZxQixpQkFXM0Msd0JBVjBDLHdDQUNDLHlDQUMzQyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnRfc3lzdGVtcy9ldGNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYXJ0cy90aGVtZSc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBsZXQgW2pfcHJlc3NlZCwgc2V0SlByZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgbGV0IFtrX3ByZXNzZWQsIHNldEtQcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBbbF9wcmVzc2VkLCBzZXRMUHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3NlbWljb2xvbl9wcmVzc2VkLCBzZXRTZW1pY29sb25QcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ2onOlxuICAgICAgICBzZXRKUHJlc3ModHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnayc6XG4gICAgICAgIHNldEtQcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsJzpcbiAgICAgICAgc2V0TFByZXNzKHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJzsnOlxuICAgICAgICBzZXRTZW1pY29sb25QcmVzcyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnaic6XG4gICAgICAgIHNldEpQcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnayc6XG4gICAgICAgIHNldEtQcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbCc6XG4gICAgICAgIHNldExQcmVzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnOyc6XG4gICAgICAgIHNldFNlbWljb2xvblByZXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbGV0IGtleV9tYXAgPSB7XG4gICAgajogeyB2YWw6IGpfcHJlc3NlZCwgc2V0OiBzZXRKUHJlc3MgfSxcbiAgICBrOiB7IHZhbDoga19wcmVzc2VkLCBzZXQ6IHNldEtQcmVzcyB9LFxuICAgIGw6IHsgdmFsOiBsX3ByZXNzZWQsIHNldDogc2V0TFByZXNzIH0sXG4gICAgJzsnOiB7IHZhbDogc2VtaWNvbG9uX3ByZXNzZWQsIHNldDogc2V0U2VtaWNvbG9uUHJlc3MgfSxcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udHMuYm9keX07XG4gICAgICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzWzBdfXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkV0Y2g8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICBib3R0b206IDEsXG4gICAgICAgICAgICBsZWZ0OiAxLFxuICAgICAgICAgICAgcmlnaHQ6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsnamtsOycuc3BsaXQoJycpLm1hcChsID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzNjaCcsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBrZXlfbWFwW2xdLnZhbCA/ICdwaW5rJyA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjUsXG4gICAgICAgICAgICAgICAgICB0b3A6IC0wLjUsXG4gICAgICAgICAgICAgICAgICByaWdodDogLTAuNSxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTAuNSxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXG4gICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint_systems/etch/pages/index.js */")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Etch")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    style: {
      display: 'flex',
      position: 'fixed',
      bottom: 1,
      left: 1,
      right: 1
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, 'jkl;'.split('').map(function (l) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      sx: {
        position: 'relative',
        width: '3ch',
        textAlign: 'center',
        background: key_map[l].val ? 'pink' : 'transparent'
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["693492221", [_parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizes[0], _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.background, _parts_theme__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeights.body]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
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
        lineNumber: 109
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.70a77808e04d50d36fc6.hot-update.js.map