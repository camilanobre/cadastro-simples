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

/***/ "./src/components/Formulario.tsx":
/*!***************************************!*\
  !*** ./src/components/Formulario.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Formulario; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Cliente__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Cliente */ \"./src/core/Cliente.ts\");\n/* harmony import */ var _Botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Botao */ \"./src/components/Botao.tsx\");\n/* harmony import */ var _Entrada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Entrada */ \"./src/components/Entrada.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Formulario(props) {\n    var _props_cliente, _props_cliente1, _props_cliente2;\n    _s();\n    const id = (_props_cliente = props.cliente) === null || _props_cliente === void 0 ? void 0 : _props_cliente.id;\n    var _props_cliente_nome;\n    const [nome, setNome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_props_cliente_nome = (_props_cliente1 = props.cliente) === null || _props_cliente1 === void 0 ? void 0 : _props_cliente1.nome) !== null && _props_cliente_nome !== void 0 ? _props_cliente_nome : \"\");\n    var _props_cliente_idade;\n    const [idade, setIdade] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_props_cliente_idade = (_props_cliente2 = props.cliente) === null || _props_cliente2 === void 0 ? void 0 : _props_cliente2.idade) !== null && _props_cliente_idade !== void 0 ? _props_cliente_idade : 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                somenteLeitura: true,\n                texto: \"C\\xf3digo\",\n                valor: id,\n                className: \"mb-5\"\n            }, void 0, false, {\n                fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this) : false,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                texto: \"Nome\",\n                valor: nome,\n                change: setNome,\n                className: \"mb-5\"\n            }, void 0, false, {\n                fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Entrada__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                texto: \"Idade\",\n                tipo: \"number\",\n                valor: idade,\n                change: setIdade\n            }, void 0, false, {\n                fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mt-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        cor: \"blue\",\n                        className: \"mr-2\",\n                        onClick: ()=>{\n                            var _props_clienteMudou;\n                            return (_props_clienteMudou = props.clienteMudou) === null || _props_clienteMudou === void 0 ? void 0 : _props_clienteMudou.call(props, new _core_Cliente__WEBPACK_IMPORTED_MODULE_2__[\"default\"](nome, +idade, id));\n                        },\n                        children: id ? \"Alterar\" : \"Salvar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: props.cancelado,\n                        children: \"Cancelar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/camilanobre/Documents/Estudos/cadastro-simples/src/components/Formulario.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Formulario, \"hOl06FBBo0nj1CVqnhQ9wMl3bfE=\");\n_c = Formulario;\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0s7QUFDVjtBQUNJO0FBUWpCLFNBQVNJLFdBQVdDLEtBQXNCO1FBQzFDQSxnQkFDc0JBLGlCQUNFQTs7SUFGbkMsTUFBTUMsTUFBS0QsaUJBQUFBLE1BQU1FLE9BQU8sY0FBYkYscUNBQUFBLGVBQWVDLEVBQUU7UUFDS0Q7SUFBakMsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDSyxDQUFBQSx1QkFBQUEsa0JBQUFBLE1BQU1FLE9BQU8sY0FBYkYsc0NBQUFBLGdCQUFlRyxJQUFJLGNBQW5CSCxpQ0FBQUEsc0JBQXVCO1FBQ3JCQTtJQUFuQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUNLLENBQUFBLHdCQUFBQSxrQkFBQUEsTUFBTUUsT0FBTyxjQUFiRixzQ0FBQUEsZ0JBQWVLLEtBQUssY0FBcEJMLGtDQUFBQSx1QkFBd0I7SUFFM0QscUJBQ0ksOERBQUNPOztZQUNJTixtQkFDRyw4REFBQ0gsZ0RBQU9BO2dCQUNKVSxjQUFjO2dCQUNkQyxPQUFNO2dCQUNOQyxPQUFPVDtnQkFDUFUsV0FBVTs7Ozs7dUJBRWQ7MEJBQ0osOERBQUNiLGdEQUFPQTtnQkFDSlcsT0FBTTtnQkFDTkMsT0FBT1A7Z0JBQ1BTLFFBQVFSO2dCQUNSTyxXQUFVOzs7Ozs7MEJBRWQsOERBQUNiLGdEQUFPQTtnQkFDSlcsT0FBTTtnQkFDTkksTUFBSztnQkFDTEgsT0FBT0w7Z0JBQ1BPLFFBQVFOOzs7Ozs7MEJBRVosOERBQUNDO2dCQUFJSSxXQUFVOztrQ0FDWCw4REFBQ2QsOENBQUtBO3dCQUFDaUIsS0FBSTt3QkFBT0gsV0FBVTt3QkFDeEJJLFNBQVM7Z0NBQU1mO29DQUFBQSxzQkFBQUEsTUFBTWdCLFlBQVksY0FBbEJoQiwwQ0FBQUEseUJBQUFBLE9BQXFCLElBQUlKLHFEQUFPQSxDQUFDTyxNQUFNLENBQUNFLE9BQU9KOztrQ0FDN0RBLEtBQUssWUFBWTs7Ozs7O2tDQUV0Qiw4REFBQ0osOENBQUtBO3dCQUFDa0IsU0FBU2YsTUFBTWlCLFNBQVM7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQXRDd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtdWxhcmlvLnRzeD9jMzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2xpZW50ZSBmcm9tIFwiLi4vY29yZS9DbGllbnRlXCI7XG5pbXBvcnQgQm90YW8gZnJvbSBcIi4vQm90YW9cIjtcbmltcG9ydCBFbnRyYWRhIGZyb20gXCIuL0VudHJhZGFcIjtcblxuaW50ZXJmYWNlIEZvcm11bGFyaW9Qcm9wcyB7XG4gICAgY2xpZW50ZTogQ2xpZW50ZVxuICAgIGNsaWVudGVNdWRvdT86IChjbGllbnRlOiBDbGllbnRlKSA9PiB2b2lkXG4gICAgY2FuY2VsYWRvPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtdWxhcmlvKHByb3BzOiBGb3JtdWxhcmlvUHJvcHMpIHtcbiAgICBjb25zdCBpZCA9IHByb3BzLmNsaWVudGU/LmlkXG4gICAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUocHJvcHMuY2xpZW50ZT8ubm9tZSA/PyAnJylcbiAgICBjb25zdCBbaWRhZGUsIHNldElkYWRlXSA9IHVzZVN0YXRlKHByb3BzLmNsaWVudGU/LmlkYWRlID8/IDApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lkID8gKFxuICAgICAgICAgICAgICAgIDxFbnRyYWRhXG4gICAgICAgICAgICAgICAgICAgIHNvbWVudGVMZWl0dXJhXG4gICAgICAgICAgICAgICAgICAgIHRleHRvPVwiQ8OzZGlnb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbG9yPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBmYWxzZX1cbiAgICAgICAgICAgIDxFbnRyYWRhIFxuICAgICAgICAgICAgICAgIHRleHRvPVwiTm9tZVwiXG4gICAgICAgICAgICAgICAgdmFsb3I9e25vbWV9XG4gICAgICAgICAgICAgICAgY2hhbmdlPXtzZXROb21lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxFbnRyYWRhXG4gICAgICAgICAgICAgICAgdGV4dG89XCJJZGFkZVwiXG4gICAgICAgICAgICAgICAgdGlwbz1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsb3I9e2lkYWRlfVxuICAgICAgICAgICAgICAgIGNoYW5nZT17c2V0SWRhZGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG10LTdcIj5cbiAgICAgICAgICAgICAgICA8Qm90YW8gY29yPVwiYmx1ZVwiIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGllbnRlTXVkb3U/LihuZXcgQ2xpZW50ZShub21lLCAraWRhZGUsIGlkKSl9PlxuICAgICAgICAgICAgICAgICAgICB7aWQgPyAnQWx0ZXJhcicgOiAnU2FsdmFyJ31cbiAgICAgICAgICAgICAgICA8L0JvdGFvPlxuICAgICAgICAgICAgICAgIDxCb3RhbyBvbkNsaWNrPXtwcm9wcy5jYW5jZWxhZG99PlxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxuICAgICAgICAgICAgICAgIDwvQm90YW8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNsaWVudGUiLCJCb3RhbyIsIkVudHJhZGEiLCJGb3JtdWxhcmlvIiwicHJvcHMiLCJpZCIsImNsaWVudGUiLCJub21lIiwic2V0Tm9tZSIsImlkYWRlIiwic2V0SWRhZGUiLCJkaXYiLCJzb21lbnRlTGVpdHVyYSIsInRleHRvIiwidmFsb3IiLCJjbGFzc05hbWUiLCJjaGFuZ2UiLCJ0aXBvIiwiY29yIiwib25DbGljayIsImNsaWVudGVNdWRvdSIsImNhbmNlbGFkbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Formulario.tsx\n"));

/***/ })

});