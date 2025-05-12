export const id = "blocks:promo-banner";
export const ids = ["blocks:promo-banner"];
export const modules = {

/***/ "./src/blocks/promo-banner/promo-banner.tsx":
/*!**************************************************!*\
  !*** ./src/blocks/promo-banner/promo-banner.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromoBanner: () => (/* binding */ PromoBanner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _promo_banner_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promo-banner.scss */ "./src/blocks/promo-banner/promo-banner.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/promo-banner/promo-banner.tsx";




const extractPictureSources = picture => {
  const sources = Array.from(picture.querySelectorAll("source")).map(source => ({
    type: source.getAttribute("type"),
    src: source.getAttribute("srcset")
  }));
  const img = picture.querySelector("img");
  if (img) {
    sources.push({
      type: "image",
      src: img.getAttribute("src")
    });
  }
  return sources.map(item => ({
    ...item,
    src: item.src?.replace("format=png", "format=webply") ?? null
  }));
};
const extractText = element => {
  return element?.innerHTML || "";
};
const extractContentFromDOM = block => {
  const wrapper = block.querySelector("div");
  const picture = wrapper?.querySelector("picture");
  const paragraph = wrapper?.querySelector("p");
  const pictureSources = picture ? extractPictureSources(picture) : [];
  const texts = paragraph ? extractText(paragraph).split("<br>").map(p => p) : [];
  return {
    pictureSources,
    texts
  };
};
const PromoBanner = ({
  pictureSources,
  texts
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "wrapper",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("picture", {
        children: pictureSources.map((source, index) => source.type !== "image" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("source", {
          type: source.type || "",
          srcSet: source.src || ""
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          loading: "lazy",
          alt: "",
          src: source.src || "",
          width: "1600",
          height: "333"
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: texts.map((text, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: text
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};
PromoBanner.displayName = "PromoBanner";
const decorate = async block => {
  const promoBannerProps = extractContentFromDOM(block);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__["default"].StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(PromoBanner, {
      ...promoBannerProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/promo-banner/promo-banner.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/promo-banner/promo-banner.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.promo-banner-wrapper {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
}

.promo-banner img {
  width: 100%;
  height: auto;
  display: block;
}
.promo-banner .wrapper {
  position: relative;
}
.promo-banner .wrapper div:nth-of-type(1) img {
  width: 100%;
  object-fit: cover;
}
.promo-banner .wrapper div:nth-of-type(2) {
  position: absolute;
  top: 50%;
  right: 0;
  width: 50%;
  transform: translateY(-50%);
  text-align: left;
}
.promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(1) {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
  padding-right: 5rem;
  margin: 2rem 0;
}
.promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(2) {
  font-size: 16px;
  margin: 0;
  font-weight: 400;
}
@media (max-width: 1300px) {
  .promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(1) {
    font-size: 28px;
    padding-right: 3rem;
  }
}
@media (max-width: 900px) {
  .promo-banner .wrapper div:nth-of-type(2) {
    position: unset;
    width: 100%;
    transform: unset;
    text-align: center;
  }
  .promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(1) {
    font-size: 24px;
    padding: 0 1rem;
  }
  .promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(2) {
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  .promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(1) {
    font-size: 20px;
    padding: 0 1rem;
  }
  .promo-banner .wrapper div:nth-of-type(2) > p:nth-of-type(2) {
    font-size: 14px;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/promo-banner/promo-banner.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,oBAAA;EACA,0BAAA;AACJ;;AAEI;EACE,WAAA;EACA,YAAA;EACA,cAAA;AACN;AAEI;EACE,kBAAA;AAAN;AAGQ;EACE,WAAA;EACA,iBAAA;AADV;AAKM;EACE,kBAAA;EACA,QAAA;EACA,QAAA;EACA,UAAA;EACA,2BAAA;EACA,gBAAA;AAHR;AAKQ;EACE,eAAA;EACA,gBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAHV;AAMQ;EACE,eAAA;EACA,SAAA;EACA,gBAAA;AAJV;AASI;EAGM;IACE,eAAA;IACA,mBAAA;EATV;AACF;AAcI;EAEI;IACE,eAAA;IACA,WAAA;IACA,gBAAA;IACA,kBAAA;EAbR;EAeQ;IACE,eAAA;IACA,eAAA;EAbV;EAgBQ;IACE,cAAA;EAdV;AACF;AAmBI;EAGM;IACE,eAAA;IACA,eAAA;EAnBV;EAsBQ;IACE,eAAA;EApBV;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/promo-banner/promo-banner.scss":
/*!***************************************************!*\
  !*** ./src/blocks/promo-banner/promo-banner.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_banner_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./promo-banner.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/promo-banner/promo-banner.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_promo_banner_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./promo-banner.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/promo-banner/promo-banner.tsx");
var __webpack_exports__PromoBanner = __webpack_exports__.PromoBanner;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__PromoBanner as PromoBanner, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQStKO0FBQy9KO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUlBQU87Ozs7QUFJeUc7QUFDakksT0FBTyxpRUFBZSxtSUFBTyxJQUFJLG1JQUFPLFVBQVUsbUlBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvcHJvbW8tYmFubmVyL3Byb21vLWJhbm5lci50c3giLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL3Byb21vLWJhbm5lci9wcm9tby1iYW5uZXIuc2NzcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvcHJvbW8tYmFubmVyL3Byb21vLWJhbm5lci5zY3NzPzNiZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuL3Byb21vLWJhbm5lci5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFByb21vQmFubmVyUHJvcHMgPSB7XG4gIHBpY3R1cmVTb3VyY2VzOiBTb3VyY2VJdGVtW107XG4gIHRleHRzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFNvdXJjZUl0ZW0gPSB7XG4gIHR5cGU6IHN0cmluZyB8IG51bGw7XG4gIHNyYzogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IGV4dHJhY3RQaWN0dXJlU291cmNlcyA9IChwaWN0dXJlOiBIVE1MUGljdHVyZUVsZW1lbnQpOiBTb3VyY2VJdGVtW10gPT4ge1xuICBjb25zdCBzb3VyY2VzID0gQXJyYXkuZnJvbShwaWN0dXJlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2VcIikpLm1hcChcbiAgICAoc291cmNlKSA9PiAoe1xuICAgICAgdHlwZTogc291cmNlLmdldEF0dHJpYnV0ZShcInR5cGVcIiksXG4gICAgICBzcmM6IHNvdXJjZS5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIiksXG4gICAgfSksXG4gICk7XG5cbiAgY29uc3QgaW1nID0gcGljdHVyZS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICBpZiAoaW1nKSB7XG4gICAgc291cmNlcy5wdXNoKHtcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgIHNyYzogaW1nLmdldEF0dHJpYnV0ZShcInNyY1wiKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAuLi5pdGVtLFxuICAgIHNyYzogaXRlbS5zcmM/LnJlcGxhY2UoXCJmb3JtYXQ9cG5nXCIsIFwiZm9ybWF0PXdlYnBseVwiKSA/PyBudWxsLFxuICB9KSk7XG59O1xuXG5jb25zdCBleHRyYWN0VGV4dCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZWxlbWVudD8uaW5uZXJIVE1MIHx8IFwiXCI7XG59O1xuXG5jb25zdCBleHRyYWN0Q29udGVudEZyb21ET00gPSAoYmxvY2s6IEhUTUxFbGVtZW50KTogUHJvbW9CYW5uZXJQcm9wcyA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBibG9jay5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICBjb25zdCBwaWN0dXJlID0gd3JhcHBlcj8ucXVlcnlTZWxlY3RvcihcInBpY3R1cmVcIik7XG4gIGNvbnN0IHBhcmFncmFwaCA9IHdyYXBwZXI/LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gIGNvbnN0IHBpY3R1cmVTb3VyY2VzID0gcGljdHVyZSA/IGV4dHJhY3RQaWN0dXJlU291cmNlcyhwaWN0dXJlKSA6IFtdO1xuICBjb25zdCB0ZXh0cyA9IHBhcmFncmFwaFxuICAgID8gZXh0cmFjdFRleHQocGFyYWdyYXBoKVxuICAgICAgICAuc3BsaXQoXCI8YnI+XCIpXG4gICAgICAgIC5tYXAoKHApID0+IHApXG4gICAgOiBbXTtcblxuICByZXR1cm4geyBwaWN0dXJlU291cmNlcywgdGV4dHMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm9tb0Jhbm5lcjogUmVhY3QuRkM8UHJvbW9CYW5uZXJQcm9wcz4gPSAoe1xuICBwaWN0dXJlU291cmNlcyxcbiAgdGV4dHMsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICB7cGljdHVyZVNvdXJjZXMubWFwKChzb3VyY2UsIGluZGV4KSA9PlxuICAgICAgICAgICAgc291cmNlLnR5cGUgIT09IFwiaW1hZ2VcIiA/IChcbiAgICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgdHlwZT17c291cmNlLnR5cGUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBzcmNTZXQ9e3NvdXJjZS5zcmMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHNyYz17c291cmNlLnNyYyB8fCBcIlwifVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTYwMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzMzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9waWN0dXJlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dGV4dHMubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxwIGtleT17aW5kZXh9Pnt0ZXh0fTwvcD5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Qcm9tb0Jhbm5lci5kaXNwbGF5TmFtZSA9IFwiUHJvbW9CYW5uZXJcIjtcblxuY29uc3QgZGVjb3JhdGUgPSBhc3luYyAoYmxvY2s6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHByb21vQmFubmVyUHJvcHMgPSBleHRyYWN0Q29udGVudEZyb21ET00oYmxvY2spO1xuXG4gIFJlYWN0RE9NLmNyZWF0ZVJvb3QoYmxvY2spLnJlbmRlcihcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgIDxQcm9tb0Jhbm5lciB7Li4ucHJvbW9CYW5uZXJQcm9wc30gLz5cbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdGU7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb21vLWJhbm5lci13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9tby1iYW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucHJvbW8tYmFubmVyIC53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMSkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMikgPiBwOm50aC1vZi10eXBlKDEpIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgcGFkZGluZy1yaWdodDogNXJlbTtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4ucHJvbW8tYmFubmVyIC53cmFwcGVyIGRpdjpudGgtb2YtdHlwZSgyKSA+IHA6bnRoLW9mLXR5cGUoMikge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMikgPiBwOm50aC1vZi10eXBlKDEpIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wcm9tby1iYW5uZXIgLndyYXBwZXIgZGl2Om50aC1vZi10eXBlKDIpIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB1bnNldDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMikgPiBwOm50aC1vZi10eXBlKDEpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIC5wcm9tby1iYW5uZXIgLndyYXBwZXIgZGl2Om50aC1vZi10eXBlKDIpID4gcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucHJvbW8tYmFubmVyIC53cmFwcGVyIGRpdjpudGgtb2YtdHlwZSgyKSA+IHA6bnRoLW9mLXR5cGUoMSkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbiAgLnByb21vLWJhbm5lciAud3JhcHBlciBkaXY6bnRoLW9mLXR5cGUoMikgPiBwOm50aC1vZi10eXBlKDIpIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ibG9ja3MvcHJvbW8tYmFubmVyL3Byb21vLWJhbm5lci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUdRO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRFY7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBS1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFY7QUFNUTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFKVjtBQVNJO0VBR007SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFUVjtBQUNGO0FBY0k7RUFFSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQWJSO0VBZVE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQWJWO0VBZ0JRO0lBQ0UsY0FBQTtFQWRWO0FBQ0Y7QUFtQkk7RUFHTTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBbkJWO0VBc0JRO0lBQ0UsZUFBQTtFQXBCVjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9tby1iYW5uZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9tby1iYW5uZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwianN4REVWIiwiX2pzeERFViIsImV4dHJhY3RQaWN0dXJlU291cmNlcyIsInBpY3R1cmUiLCJzb3VyY2VzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsInNvdXJjZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJpbWciLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsIml0ZW0iLCJyZXBsYWNlIiwiZXh0cmFjdFRleHQiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwiZXh0cmFjdENvbnRlbnRGcm9tRE9NIiwiYmxvY2siLCJ3cmFwcGVyIiwicGFyYWdyYXBoIiwicGljdHVyZVNvdXJjZXMiLCJ0ZXh0cyIsInNwbGl0IiwicCIsIlByb21vQmFubmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpbmRleCIsInNyY1NldCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImxvYWRpbmciLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRleHQiLCJkaXNwbGF5TmFtZSIsImRlY29yYXRlIiwicHJvbW9CYW5uZXJQcm9wcyIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==