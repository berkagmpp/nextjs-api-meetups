"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar MeetupDetail = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.image,\n                alt: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: props.address\n            }, void 0, false, {\n                fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.description\n            }, void 0, false, {\n                fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\components\\\\meetups\\\\MeetupDetail.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\components\\\\meetups\\\\MeetupDetail.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = MeetupDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDO0FBRWpDLElBQU1DLFlBQVksR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDNUIscUJBQ0ksOERBQUNGLDJDQUFROzswQkFDTCw4REFBQ0csS0FBRztnQkFBQ0MsR0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQUs7Z0JBQ2hCQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ssS0FBSzs7Ozs7cUJBQUk7MEJBQ3pCLDhEQUFDQyxJQUFFOzBCQUFFTixLQUFLLENBQUNLLEtBQUs7Ozs7O3FCQUFNOzBCQUN0Qiw4REFBQ0UsU0FBTzswQkFBRVAsS0FBSyxDQUFDTyxPQUFPOzs7OztxQkFBVzswQkFDbEMsOERBQUNDLEdBQUM7MEJBQUVSLEtBQUssQ0FBQ1MsV0FBVzs7Ozs7cUJBQUs7Ozs7OzthQUNuQixDQUNiO0NBQ0w7QUFWS1YsS0FBQUEsWUFBWTtBQVlsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanM/MzFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWVldHVwRGV0YWlsID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBcclxuICAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDsiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJoMSIsImFkZHJlc3MiLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\nvar _this = undefined;\n\n\nvar MeetupDetails = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        image: \"https://www.interest.co.nz/sites/default/files/feature_images/65%20Federal%20Harbour%20View.jpg\",\n        title: \"The First Meetup\",\n        address: \"5 Howe Street, Freemansbay, Auckland\",\n        description: \"This is the first meetup!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\c_practice\\\\react\\\\nextjs-api-meetups_project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = MeetupDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBaUU7QUFFakUsSUFBTUMsYUFBYSxHQUFHLFdBQU07SUFDeEIscUJBQ0ksOERBQUNELHdFQUFZO1FBQUNFLEtBQUssRUFBQyxpR0FBaUc7UUFDdkdDLEtBQUssRUFBQyxrQkFBa0I7UUFDeEJDLE9BQU8sRUFBQyxzQ0FBc0M7UUFDOUNDLFdBQVcsRUFBQywyQkFBMkI7Ozs7O2FBQUcsQ0FDMUQ7Q0FDTDtBQVBLSixLQUFBQSxhQUFhO0FBU25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcclxuXHJcbmNvbnN0IE1lZXR1cERldGFpbHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZWV0dXBEZXRhaWwgaW1hZ2U9XCJodHRwczovL3d3dy5pbnRlcmVzdC5jby5uei9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZlYXR1cmVfaW1hZ2VzLzY1JTIwRmVkZXJhbCUyMEhhcmJvdXIlMjBWaWV3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRoZSBGaXJzdCBNZWV0dXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz1cIjUgSG93ZSBTdHJlZXQsIEZyZWVtYW5zYmF5LCBBdWNrbGFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cCFcIiAvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sIm5hbWVzIjpbIk1lZXR1cERldGFpbCIsIk1lZXR1cERldGFpbHMiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

});