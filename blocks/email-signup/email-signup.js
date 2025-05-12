export const id = "blocks:email-signup";
export const ids = ["blocks:email-signup"];
export const modules = {

/***/ "./src/blocks/email-signup/email-signup.tsx":
/*!**************************************************!*\
  !*** ./src/blocks/email-signup/email-signup.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailSignup: () => (/* binding */ EmailSignup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var _email_signup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-signup.scss */ "./src/blocks/email-signup/email-signup.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/email-signup/email-signup.tsx";




const extractContentFromDOM = block => {
  const label = block.querySelector("div:first-child div p")?.innerHTML;
  const checkboxLabel = block.querySelector("div:nth-of-type(2) div p")?.innerHTML;
  const additionalText = block.querySelector("div:nth-of-type(3) div p:first-child")?.innerHTML;
  const policy = block.querySelector("div:nth-of-type(3) div p:first-child")?.innerHTML;
  return {
    label,
    checkboxLabel,
    additionalText,
    policy
  };
};
const EmailSignup = ({
  label,
  checkboxLabel,
  additionalText,
  policy
}) => {
  const checkboxId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "label",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "input-fields",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "text-input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          children: "Email Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          placeholder: "Email Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "checkbox-input",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "checkbox",
          id: checkboxId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
          htmlFor: checkboxId,
          children: checkboxLabel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "information",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: additionalText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: policy
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
EmailSignup.displayName = "EmailSignup";
const decorate = async block => {
  const emailSignupProps = extractContentFromDOM(block);
  react_dom_client__WEBPACK_IMPORTED_MODULE_0__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(EmailSignup, {
      ...emailSignupProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/email-signup/email-signup.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/email-signup/email-signup.scss ***!
  \********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section.email-signup-container {
  border-top: 1px solid #ccc;
  padding: 32px;
}

.email-signup {
  width: 41%;
}
.email-signup .label div {
  font-size: 14px;
  font-weight: 700;
}
.email-signup .information br {
  margin: 5px 0;
}
.email-signup .information p {
  font-size: 12px;
  font-weight: 400;
}
.email-signup .input-fields .text-input {
  display: flex;
  flex-direction: row;
}
.email-signup .input-fields .text-input label {
  display: none;
}
.email-signup .input-fields .text-input input[type=text] {
  padding: 16px 8px;
  border-radius: 0;
  border: 1px solid #000;
  height: 55px;
  width: 77%;
  box-sizing: border-box;
  outline: none;
}
.email-signup .input-fields .text-input button {
  margin: 0;
  border-radius: 0 4px 4px 0;
  background-color: #484745;
  color: #ffffff;
  font-size: 12px;
  border: 1px solid #484745;
}
.email-signup .input-fields .checkbox-input label {
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
}
.email-signup .input-fields .text-input button:hover {
  background-color: var(--bg-color-red);
}

@media (width <= 1200px) {
  .email-signup {
    width: 60%;
  }
}
@media (width <= 768px) {
  .email-signup {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/email-signup/email-signup.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,aAAA;AACF;;AAEA;EACE,UAAA;AACF;AACE;EACE,eAAA;EACA,gBAAA;AACJ;AAGI;EACE,aAAA;AADN;AAII;EACE,eAAA;EACA,gBAAA;AAFN;AAOI;EACE,aAAA;EACA,mBAAA;AALN;AAOM;EACE,aAAA;AALR;AAQM;EACE,iBAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,UAAA;EACA,sBAAA;EACA,aAAA;AANR;AASM;EACE,SAAA;EACA,0BAAA;EACA,yBAAA;EACA,cAAA;EACA,eAAA;EACA,yBAAA;AAPR;AAWI;EACE,eAAA;EACA,gBAAA;EACA,iBAAA;AATN;AAYI;EACE,qCAAA;AAVN;;AAeA;EACE;IACE,UAAA;EAZF;AACF;AAeA;EACE;IACE,WAAA;EAbF;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/email-signup/email-signup.scss":
/*!***************************************************!*\
  !*** ./src/blocks/email-signup/email-signup.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_email_signup_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./email-signup.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/email-signup/email-signup.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_email_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_email_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_email_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_email_signup_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./email-signup.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/email-signup/email-signup.tsx");
var __webpack_exports__EmailSignup = __webpack_exports__.EmailSignup;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__EmailSignup as EmailSignup, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvYmxvY2tzL2VtYWlsLXNpZ251cC9lbWFpbC1zaWdudXAudHN4Iiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9lbWFpbC1zaWdudXAvZW1haWwtc2lnbnVwLnNjc3MiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2VtYWlsLXNpZ251cC9lbWFpbC1zaWdudXAuc2Nzcz9iMTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IFN0cmljdE1vZGUsIHVzZUlkIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2VtYWlsLXNpZ251cC5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIEVtYWlsU2lnbnVwUHJvcHMgPSB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nO1xuICBhZGRpdGlvbmFsVGV4dD86IHN0cmluZztcbiAgcG9saWN5Pzogc3RyaW5nO1xufTtcblxuY29uc3QgZXh0cmFjdENvbnRlbnRGcm9tRE9NID0gKGJsb2NrOiBIVE1MRWxlbWVudCk6IEVtYWlsU2lnbnVwUHJvcHMgPT4ge1xuICBjb25zdCBsYWJlbCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCJkaXY6Zmlyc3QtY2hpbGQgZGl2IHBcIik/LmlubmVySFRNTDtcbiAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJkaXY6bnRoLW9mLXR5cGUoMikgZGl2IHBcIixcbiAgKT8uaW5uZXJIVE1MO1xuICBjb25zdCBhZGRpdGlvbmFsVGV4dCA9IGJsb2NrLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCJkaXY6bnRoLW9mLXR5cGUoMykgZGl2IHA6Zmlyc3QtY2hpbGRcIixcbiAgKT8uaW5uZXJIVE1MO1xuICBjb25zdCBwb2xpY3kgPSBibG9jay5xdWVyeVNlbGVjdG9yKFxuICAgIFwiZGl2Om50aC1vZi10eXBlKDMpIGRpdiBwOmZpcnN0LWNoaWxkXCIsXG4gICk/LmlubmVySFRNTDtcblxuICByZXR1cm4ge1xuICAgIGxhYmVsLFxuICAgIGNoZWNrYm94TGFiZWwsXG4gICAgYWRkaXRpb25hbFRleHQsXG4gICAgcG9saWN5LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEVtYWlsU2lnbnVwOiBSZWFjdC5GQzxFbWFpbFNpZ251cFByb3BzPiA9ICh7XG4gIGxhYmVsLFxuICBjaGVja2JveExhYmVsLFxuICBhZGRpdGlvbmFsVGV4dCxcbiAgcG9saWN5LFxufTogRW1haWxTaWdudXBQcm9wcykgPT4ge1xuICBjb25zdCBjaGVja2JveElkID0gdXNlSWQoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+XG4gICAgICAgIDxkaXY+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWw+RW1haWwgU2lnbiBVcDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBTaWduIFVwXCIgLz5cbiAgICAgICAgICA8YnV0dG9uPlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e2NoZWNrYm94SWR9IC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NoZWNrYm94SWR9PntjaGVja2JveExhYmVsfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9ybWF0aW9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+e2FkZGl0aW9uYWxUZXh0fTwvcD5cbiAgICAgICAgICA8cD57cG9saWN5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5FbWFpbFNpZ251cC5kaXNwbGF5TmFtZSA9IFwiRW1haWxTaWdudXBcIjtcblxuY29uc3QgZGVjb3JhdGUgPSBhc3luYyAoYmxvY2s6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVtYWlsU2lnbnVwUHJvcHMgPSBleHRyYWN0Q29udGVudEZyb21ET00oYmxvY2spO1xuXG4gIFJlYWN0RE9NLmNyZWF0ZVJvb3QoYmxvY2spLnJlbmRlcihcbiAgICA8U3RyaWN0TW9kZT5cbiAgICAgIDxFbWFpbFNpZ251cCB7Li4uZW1haWxTaWdudXBQcm9wc30gLz5cbiAgICA8L1N0cmljdE1vZGU+LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdGU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb24uZW1haWwtc2lnbnVwLWNvbnRhaW5lciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAzMnB4O1xufVxuXG4uZW1haWwtc2lnbnVwIHtcbiAgd2lkdGg6IDQxJTtcbn1cbi5lbWFpbC1zaWdudXAgLmxhYmVsIGRpdiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5lbWFpbC1zaWdudXAgLmluZm9ybWF0aW9uIGJyIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5lbWFpbC1zaWdudXAgLmluZm9ybWF0aW9uIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZW1haWwtc2lnbnVwIC5pbnB1dC1maWVsZHMgLnRleHQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmVtYWlsLXNpZ251cCAuaW5wdXQtZmllbGRzIC50ZXh0LWlucHV0IGxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5lbWFpbC1zaWdudXAgLmlucHV0LWZpZWxkcyAudGV4dC1pbnB1dCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgcGFkZGluZzogMTZweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGhlaWdodDogNTVweDtcbiAgd2lkdGg6IDc3JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5lbWFpbC1zaWdudXAgLmlucHV0LWZpZWxkcyAudGV4dC1pbnB1dCBidXR0b24ge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0NzQ1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDg0NzQ1O1xufVxuLmVtYWlsLXNpZ251cCAuaW5wdXQtZmllbGRzIC5jaGVja2JveC1pbnB1dCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZW1haWwtc2lnbnVwIC5pbnB1dC1maWVsZHMgLnRleHQtaW5wdXQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcmVkKTtcbn1cblxuQG1lZGlhICh3aWR0aCA8PSAxMjAwcHgpIHtcbiAgLmVtYWlsLXNpZ251cCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICAuZW1haWwtc2lnbnVwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Jsb2Nrcy9lbWFpbC1zaWdudXAvZW1haWwtc2lnbnVwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHSTtFQUNFLGFBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRk47QUFPSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxOO0FBT007RUFDRSxhQUFBO0FBTFI7QUFRTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTlI7QUFTTTtFQUNFLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVBSO0FBV0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVROO0FBWUk7RUFDRSxxQ0FBQTtBQVZOOztBQWVBO0VBQ0U7SUFDRSxVQUFBO0VBWkY7QUFDRjtBQWVBO0VBQ0U7SUFDRSxXQUFBO0VBYkY7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZW1haWwtc2lnbnVwLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZW1haWwtc2lnbnVwLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3RET00iLCJSZWFjdCIsIlN0cmljdE1vZGUiLCJ1c2VJZCIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImV4dHJhY3RDb250ZW50RnJvbURPTSIsImJsb2NrIiwibGFiZWwiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiY2hlY2tib3hMYWJlbCIsImFkZGl0aW9uYWxUZXh0IiwicG9saWN5IiwiRW1haWxTaWdudXAiLCJjaGVja2JveElkIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImh0bWxGb3IiLCJkaXNwbGF5TmFtZSIsImRlY29yYXRlIiwiZW1haWxTaWdudXBQcm9wcyIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9