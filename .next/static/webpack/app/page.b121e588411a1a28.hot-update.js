"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,Task auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getTasks = ()=>{\n        const stor = localStorage.getItem(\"tasks\");\n        if (stor) {\n            return JSON.parse(stor);\n        }\n        return [];\n    };\n    const addTask = ()=>{\n        alert(\"The button has been pressed\");\n    };\n    // mount when component loads, reads tasks from local components \n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTasks(getTasks());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-left text-yellow-600\",\n                    children: \"Demo todo app\"\n                }, void 0, false, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"my-4 border-t border-yellow-400\"\n                }, void 0, false, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"task-list mt-4\",\n                    children: [\n                        tasks.length > 0 ? tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Task, {\n                                task: task\n                            }, index, false, {\n                                fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"You have no tasks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addTask,\n                            className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"px-5 rounded-lg duration-200 hover:border-2 border-yellow-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Todo item...\",\n                                    className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-white text-yellow-500 font-semibold rounded-lg shadow-md \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"bBd6yqkqV9dlkj9ENgRyXKaiXpk=\");\n_c = Home;\n// todo task component\nfunction Task(param) {\n    let { task } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: task\n    }, void 0, false, {\n        fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNpQztBQUVqRCxTQUFTSTs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTU0sV0FBVztRQUNmLE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztRQUVsQyxJQUFHRixNQUFLO1lBQ04sT0FBT0csS0FBS0MsS0FBSyxDQUFDSjtRQUNwQjtRQUVBLE9BQU8sRUFBRTtJQUNYO0lBRUEsTUFBTUssVUFBVTtRQUNkQyxNQUFNO0lBQ1I7SUFFQSxpRUFBaUU7SUFDakVaLGdEQUFTQSxDQUFDO1FBQ1JJLFNBQVNDO0lBQ1gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBK0M7Ozs7Ozs4QkFHN0QsOERBQUNHO29CQUFHSCxXQUFVOzs7Ozs7OEJBR2QsOERBQUNDO29CQUFJRCxXQUFVOzt3QkFDWlgsTUFBTWUsTUFBTSxHQUFHLElBQ2RmLE1BQU1nQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNDO2dDQUFpQkYsTUFBTUE7K0JBQWJDOzs7O3NEQUdiLDhEQUFDRTtzQ0FBRTs7Ozs7O3NDQUlQLDhEQUFDQzs0QkFBT0MsU0FBU2Q7NEJBQVNHLFdBQVU7c0NBQWlLOzs7Ozs7c0NBS3JNLDhEQUFDWTs0QkFBS1osV0FBVTs7OENBQ2QsOERBQUNhO29DQUFNQyxNQUFLO29DQUFPQyxhQUFZO29DQUFlZixXQUFVOzs7Ozs7OENBQ3hELDhEQUFDYTtvQ0FBTUMsTUFBSztvQ0FBU2QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0F2RHdCWjtLQUFBQTtBQXlEeEIsc0JBQXNCO0FBQ2YsU0FBU29CLEtBQUssS0FBTTtRQUFOLEVBQUNGLElBQUksRUFBQyxHQUFOO0lBQ25CLHFCQUNFLDhEQUFDRztrQkFBR0g7Ozs7OztBQUVSO01BSmdCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VJbnNlcnRpb25FZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG5cbiAgICBpZihzdG9yKXtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJUaGUgYnV0dG9uIGhhcyBiZWVuIHByZXNzZWRcIik7XG4gIH1cblxuICAvLyBtb3VudCB3aGVuIGNvbXBvbmVudCBsb2FkcywgcmVhZHMgdGFza3MgZnJvbSBsb2NhbCBjb21wb25lbnRzIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRhc2tzKGdldFRhc2tzKCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1sZWZ0IHRleHQteWVsbG93LTYwMFwiPlxuICAgICAgICAgICAgRGVtbyB0b2RvIGFwcFxuICAgICAgICA8L2gxPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNCBib3JkZXItdCBib3JkZXIteWVsbG93LTQwMFwiPjwvaHI+XG5cbiAgICAgICAgey8qIGRpc3BsYXkgYWxsIHRhc2tzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2stbGlzdCBtdC00XCI+XG4gICAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICB0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYXNrIGtleT17aW5kZXh9IHRhc2s9e3Rhc2t9IC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5Zb3UgaGF2ZSBubyB0YXNrczwvcD5cbiAgICAgICAgICApfVxuXG4gICAgICAgIHsvKiBhZGQgYW4gdG9kbyBpdGVtICovfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRhc2t9IGNsYXNzTmFtZT1cIm1iLTQgbXItNCBtdC00IHB4LTQgcHktMiBiZy15ZWxsb3ctNTAwIGhvdmVyOmJnLXllbGxvdy02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy15ZWxsb3ctMzAwXCI+XG4gICAgICAgICAgK1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7LyogYWRkIHRhc2sgZmllbGQgKi99XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB4LTUgcm91bmRlZC1sZyBkdXJhdGlvbi0yMDAgaG92ZXI6Ym9yZGVyLTIgYm9yZGVyLXllbGxvdy02MDBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRvZG8gaXRlbS4uLlwiIGNsYXNzTmFtZT1cIm1iLTQgbXItNCBtdC00IHB4LTQgcHktMiBiZy13aGl0ZSB0ZXh0LXllbGxvdy01MDAgZm9udC1zZW1pYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1tZCBcIj48L2lucHV0PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWItNCBtci00IG10LTQgcHgtNCBweS0yIGJnLXllbGxvdy01MDAgaG92ZXI6YmcteWVsbG93LTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXllbGxvdy0zMDBcIj48L2lucHV0PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG4vLyB0b2RvIHRhc2sgY29tcG9uZW50XG5leHBvcnQgZnVuY3Rpb24gVGFzayh7dGFza30pe1xuICByZXR1cm4gKFxuICAgIDxwPnt0YXNrfTwvcD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VJbnNlcnRpb25FZmZlY3QiLCJIb21lIiwidGFza3MiLCJzZXRUYXNrcyIsImdldFRhc2tzIiwic3RvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJhZGRUYXNrIiwiYWxlcnQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJociIsImxlbmd0aCIsIm1hcCIsInRhc2siLCJpbmRleCIsIlRhc2siLCJwIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});