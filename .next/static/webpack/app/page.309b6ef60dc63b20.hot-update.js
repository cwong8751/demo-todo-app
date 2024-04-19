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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default,Task auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [addTaskFormVisibility, setAddTaskFormVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Boolean);\n    const [taskInputItem, setTaskInputItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(String);\n    const getTasks = ()=>{\n        const stor = localStorage.getItem(\"tasks\");\n        if (stor) {\n            return JSON.parse(stor);\n        }\n        return [];\n    };\n    const addTask = ()=>{\n        if (addTaskFormVisibility) {\n            setAddTaskFormVisibility(false);\n        } else {\n            setAddTaskFormVisibility(true);\n        }\n    };\n    const submitAddTask = (event)=>{\n        event.preventDefault();\n        document.getElementById(\"add-task-text-field\").alert(\"Submit add task has been pressed\");\n    };\n    // mount when component loads, reads tasks from local components \n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setTasks(getTasks());\n        setAddTaskFormVisibility(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold text-left text-yellow-600\",\n                    children: \"Demo todo app\"\n                }, void 0, false, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"my-4 border-t border-yellow-400\"\n                }, void 0, false, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"task-list mt-4\",\n                    children: [\n                        tasks.length > 0 ? tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Task, {\n                                task: task\n                            }, index, false, {\n                                fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"You have no tasks\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addTask,\n                            className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: submitAddTask,\n                            hidden: addTaskFormVisibility,\n                            className: \" px-5 rounded-lg border-2 border-yellow-600\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"add-task-text-field\",\n                                    type: \"text\",\n                                    placeholder: \"Todo item...\",\n                                    className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-white text-yellow-500 font-semibold rounded-lg shadow-md \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    className: \"mb-4 mr-4 mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4NRk6zYiGslXpGyG06j9sWeVzCI=\");\n_c = Home;\n// todo task component\nfunction Task(param) {\n    let { task } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: task\n    }, void 0, false, {\n        fileName: \"/Users/carl/Desktop/reactdemo/demo/src/app/page.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Task;\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNpQztBQUVqRCxTQUFTSTs7SUFFdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDTSx1QkFBdUJDLHlCQUF5QixHQUFHUCwrQ0FBUUEsQ0FBQ1E7SUFDbkUsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1YsK0NBQVFBLENBQUNXO0lBRW5ELE1BQU1DLFdBQVc7UUFDZixNQUFNQyxPQUFPQyxhQUFhQyxPQUFPLENBQUM7UUFFbEMsSUFBR0YsTUFBSztZQUNOLE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0o7UUFDcEI7UUFFQSxPQUFPLEVBQUU7SUFDWDtJQUVBLE1BQU1LLFVBQVU7UUFDZCxJQUFHWix1QkFBc0I7WUFDdkJDLHlCQUF5QjtRQUMzQixPQUNJO1lBQ0ZBLHlCQUF5QjtRQUMzQjtJQUNGO0lBRUEsTUFBTVksZ0JBQWdCLENBQUNDO1FBQ3JCQSxNQUFNQyxjQUFjO1FBRXBCQyxTQUFTQyxjQUFjLENBQUMsdUJBRXhCQyxLQUFLLENBQUM7SUFDUjtJQUVBLGlFQUFpRTtJQUNqRXZCLGdEQUFTQSxDQUFDO1FBQ1JJLFNBQVNPO1FBQ1RMLHlCQUF5QjtJQUMzQixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2tCO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBK0M7Ozs7Ozs4QkFHN0QsOERBQUNHO29CQUFHSCxXQUFVOzs7Ozs7OEJBR2QsOERBQUNDO29CQUFJRCxXQUFVOzt3QkFDWnRCLE1BQU0wQixNQUFNLEdBQUcsSUFDZDFCLE1BQU0yQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNDO2dDQUFpQkYsTUFBTUE7K0JBQWJDOzs7O3NEQUdiLDhEQUFDRTtzQ0FBRTs7Ozs7O3NDQUlQLDhEQUFDQzs0QkFBT0MsU0FBU25COzRCQUFTUSxXQUFVO3NDQUFpSzs7Ozs7O3NDQUtyTSw4REFBQ1k7NEJBQUtDLFVBQVVwQjs0QkFBZXFCLFFBQVFsQzs0QkFBdUJvQixXQUFVOzs4Q0FDdEUsOERBQUNlO29DQUFNQyxJQUFHO29DQUFzQkMsTUFBSztvQ0FBT0MsYUFBWTtvQ0FBZWxCLFdBQVU7Ozs7Ozs4Q0FDakYsOERBQUNlO29DQUFNRSxNQUFLO29DQUFTakIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0F2RXdCdkI7S0FBQUE7QUF5RXhCLHNCQUFzQjtBQUNmLFNBQVMrQixLQUFLLEtBQU07UUFBTixFQUFDRixJQUFJLEVBQUMsR0FBTjtJQUNuQixxQkFDRSw4REFBQ0c7a0JBQUdIOzs7Ozs7QUFFUjtNQUpnQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlSW5zZXJ0aW9uRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthZGRUYXNrRm9ybVZpc2liaWxpdHksIHNldEFkZFRhc2tGb3JtVmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShCb29sZWFuKTtcbiAgY29uc3QgW3Rhc2tJbnB1dEl0ZW0sIHNldFRhc2tJbnB1dEl0ZW1dID0gdXNlU3RhdGUoU3RyaW5nKTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJyk7XG5cbiAgICBpZihzdG9yKXtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgaWYoYWRkVGFza0Zvcm1WaXNpYmlsaXR5KXtcbiAgICAgIHNldEFkZFRhc2tGb3JtVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBzZXRBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3VibWl0QWRkVGFzayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRleHQtZmllbGRcIikuXG5cbiAgICBhbGVydChcIlN1Ym1pdCBhZGQgdGFzayBoYXMgYmVlbiBwcmVzc2VkXCIpO1xuICB9XG5cbiAgLy8gbW91bnQgd2hlbiBjb21wb25lbnQgbG9hZHMsIHJlYWRzIHRhc2tzIGZyb20gbG9jYWwgY29tcG9uZW50cyBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUYXNrcyhnZXRUYXNrcygpKTtcbiAgICBzZXRBZGRUYXNrRm9ybVZpc2liaWxpdHkodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWxlZnQgdGV4dC15ZWxsb3ctNjAwXCI+XG4gICAgICAgICAgICBEZW1vIHRvZG8gYXBwXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxociBjbGFzc05hbWU9XCJteS00IGJvcmRlci10IGJvcmRlci15ZWxsb3ctNDAwXCI+PC9ocj5cblxuICAgICAgICB7LyogZGlzcGxheSBhbGwgdGFza3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFzay1saXN0IG10LTRcIj5cbiAgICAgICAgICB7dGFza3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIHRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRhc2sga2V5PXtpbmRleH0gdGFzaz17dGFza30gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPllvdSBoYXZlIG5vIHRhc2tzPC9wPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgey8qIGFkZCBhbiB0b2RvIGl0ZW0gKi99XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVGFza30gY2xhc3NOYW1lPVwibWItNCBtci00IG10LTQgcHgtNCBweS0yIGJnLXllbGxvdy01MDAgaG92ZXI6YmcteWVsbG93LTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXllbGxvdy0zMDBcIj5cbiAgICAgICAgICArXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHsvKiBhZGQgdGFzayBmaWVsZCAqL31cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEFkZFRhc2t9IGhpZGRlbj17YWRkVGFza0Zvcm1WaXNpYmlsaXR5fSBjbGFzc05hbWU9XCIgcHgtNSByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci15ZWxsb3ctNjAwXCI+XG4gICAgICAgICAgPGlucHV0IGlkPVwiYWRkLXRhc2stdGV4dC1maWVsZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUb2RvIGl0ZW0uLi5cIiBjbGFzc05hbWU9XCJtYi00IG1yLTQgbXQtNCBweC00IHB5LTIgYmctd2hpdGUgdGV4dC15ZWxsb3ctNTAwIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbWQgXCI+PC9pbnB1dD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1iLTQgbXItNCBtdC00IHB4LTQgcHktMiBiZy15ZWxsb3ctNTAwIGhvdmVyOmJnLXllbGxvdy02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy15ZWxsb3ctMzAwXCI+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuLy8gdG9kbyB0YXNrIGNvbXBvbmVudFxuZXhwb3J0IGZ1bmN0aW9uIFRhc2soe3Rhc2t9KXtcbiAgcmV0dXJuIChcbiAgICA8cD57dGFza308L3A+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRUYXNrRm9ybVZpc2liaWxpdHkiLCJzZXRBZGRUYXNrRm9ybVZpc2liaWxpdHkiLCJCb29sZWFuIiwidGFza0lucHV0SXRlbSIsInNldFRhc2tJbnB1dEl0ZW0iLCJTdHJpbmciLCJnZXRUYXNrcyIsInN0b3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiYWRkVGFzayIsInN1Ym1pdEFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFsZXJ0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaHIiLCJsZW5ndGgiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJUYXNrIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJoaWRkZW4iLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});