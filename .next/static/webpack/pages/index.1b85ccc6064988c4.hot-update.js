"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Tabela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Tabela */ \"./src/components/Tabela.tsx\");\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Cliente */ \"./src/core/Cliente.ts\");\n/* harmony import */ var _components_Botao__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _components_Formulario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Formulario */ \"./src/components/Formulario.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const clientes = [\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Camila\", 30, \"1\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Gustavo\", 28, \"2\"),\n        new _core_Cliente__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Azeitona\", 5, \"3\")\n    ];\n    function clienteSelecionado(cliente) {\n        console.log(cliente.nome);\n    }\n    const [visivel, setVisivel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n      flex h-screen justify-center items-center\\n      bg-pink-100\\n      text-white\\n    \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            titulo: \"Cadastro Simples\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Botao__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"mb-4\",\n                        children: \"Novo Cliente\"\n                    }, void 0, false, {\n                        fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tabela__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    clientes: clientes,\n                    clienteSelecionado: clienteSelecionado\n                }, void 0, false, {\n                    fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 10\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Formulario__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cliente: clientes[0]\n                }, void 0, false, {\n                    fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UF+nA3gl4F6f4h6zoIbWDi7ltqc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMwQztBQUNGO0FBQ0U7QUFDSjtBQUNFO0FBQ1U7QUFFbkMsU0FBU087O0lBRXRCLE1BQU1DLFdBQVc7UUFDZixJQUFJSixxREFBT0EsQ0FBQyxVQUFVLElBQUk7UUFDMUIsSUFBSUEscURBQU9BLENBQUMsV0FBVyxJQUFJO1FBQzNCLElBQUlBLHFEQUFPQSxDQUFDLFlBQVksR0FBRztLQUM1QjtJQUVELFNBQVNLLG1CQUFtQkMsT0FBZ0I7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUUcsSUFBSTtJQUMxQjtJQUVBLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUE7SUFFdEMscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVk7a0JBS2YsNEVBQUNqQiwwREFBTUE7WUFBQ2tCLFFBQU87OzhCQUNYLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ1oseURBQUtBO3dCQUFDWSxXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs4QkFFekIsOERBQUNkLDBEQUFNQTtvQkFBQ0ssVUFBVUE7b0JBQVVDLG9CQUFvQkE7Ozs7Ozs4QkFDaEQsOERBQUNILDhEQUFVQTtvQkFBQ0ksU0FBU0YsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpDO0dBN0J3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhYmVsYSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWJlbGFcIjtcbmltcG9ydCBDbGllbnRlIGZyb20gXCIuLi9jb3JlL0NsaWVudGVcIjtcbmltcG9ydCBCb3RhbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3Rhb1wiO1xuaW1wb3J0IEZvcm11bGFyaW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybXVsYXJpb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGNsaWVudGVzID0gW1xuICAgIG5ldyBDbGllbnRlKCdDYW1pbGEnLCAzMCwgJzEnKSwgXG4gICAgbmV3IENsaWVudGUoJ0d1c3Rhdm8nLCAyOCwgJzInKSwgXG4gICAgbmV3IENsaWVudGUoJ0F6ZWl0b25hJywgNSwgJzMnKVxuICBdXG5cbiAgZnVuY3Rpb24gY2xpZW50ZVNlbGVjaW9uYWRvKGNsaWVudGU6IENsaWVudGUpIHtcbiAgICBjb25zb2xlLmxvZyhjbGllbnRlLm5vbWUpXG4gIH1cblxuICBjb25zdCBbdmlzaXZlbCwgc2V0VmlzaXZlbF0gPSB1c2VTdGF0ZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YFxuICAgICAgZmxleCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgIGJnLXBpbmstMTAwXG4gICAgICB0ZXh0LXdoaXRlXG4gICAgYH0+XG4gICAgICA8TGF5b3V0IHRpdHVsbz1cIkNhZGFzdHJvIFNpbXBsZXNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8Qm90YW8gY2xhc3NOYW1lPVwibWItNFwiPk5vdm8gQ2xpZW50ZTwvQm90YW8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8VGFiZWxhIGNsaWVudGVzPXtjbGllbnRlc30gY2xpZW50ZVNlbGVjaW9uYWRvPXtjbGllbnRlU2VsZWNpb25hZG99PjwvVGFiZWxhPlxuICAgICAgICAgPEZvcm11bGFyaW8gY2xpZW50ZT17Y2xpZW50ZXNbMF19PjwvRm9ybXVsYXJpbz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJUYWJlbGEiLCJDbGllbnRlIiwiQm90YW8iLCJGb3JtdWxhcmlvIiwiSG9tZSIsImNsaWVudGVzIiwiY2xpZW50ZVNlbGVjaW9uYWRvIiwiY2xpZW50ZSIsImNvbnNvbGUiLCJsb2ciLCJub21lIiwidmlzaXZlbCIsInNldFZpc2l2ZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXR1bG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});