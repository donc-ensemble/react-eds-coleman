export const id = "blocks:columns";
export const ids = ["blocks:columns"];
export const modules = {

/***/ "./src/blocks/columns/columns.tsx":
/*!****************************************!*\
  !*** ./src/blocks/columns/columns.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Columns: () => (/* binding */ Columns),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _columns_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./columns.scss */ "./src/blocks/columns/columns.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/columns/columns.tsx";




const extractLeftImageSources = mainDiv => {
  const leftImg = mainDiv.querySelector("picture");
  const leftImgSource = leftImg.querySelectorAll("source");
  const leftImgTag = leftImg.querySelector("img");
  const sources = [];
  leftImgSource.forEach(item => {
    const sourceItem = {
      type: item.getAttribute("type"),
      src: item.getAttribute("srcset")
    };
    sources.push(sourceItem);
  });
  const pictureItem = {
    type: "image",
    src: leftImgTag.getAttribute("src")
  };
  sources.push(pictureItem);
  return sources.map(item => ({
    ...item,
    src: item.src.replace("format=png", "format=webply")
  }));
};
const extractLeftListItems = mainDiv => {
  const list = mainDiv.querySelectorAll("ul li a");
  const leftListItems = [];
  list.forEach(item => {
    const listItem = {
      link: item.getAttribute("href"),
      text: item.getAttribute("title")
    };
    leftListItems.push(listItem);
  });
  return leftListItems;
};
const extractRightImageSources = mainDiv => {
  const picture = mainDiv.querySelector("div:nth-of-type(2) picture");
  const sources = picture.querySelectorAll("source");
  const img = picture.querySelector("img");
  const sourcesList = [];
  sources.forEach(item => {
    const sourceItem = {
      type: item.getAttribute("type"),
      src: item.getAttribute("srcset")
    };
    sourcesList.push(sourceItem);
  });
  const pictureItem = {
    type: "image",
    src: img.getAttribute("src")
  };
  sourcesList.push(pictureItem);
  return sourcesList.map(item => ({
    ...item,
    src: item.src.replace("format=png", "format=webply")
  }));
};
const extractContentFromDOM = block => {
  const mainDiv = block.querySelector("div");
  const leftImageSources = extractLeftImageSources(mainDiv);
  const leftText = mainDiv.querySelector("p:nth-of-type(2)")?.innerHTML;
  const leftListItems = extractLeftListItems(mainDiv);
  const rightImageSources = extractRightImageSources(mainDiv);
  return {
    leftImageSources,
    leftListItems,
    leftText,
    rightImageSources
  };
};
const Columns = ({
  leftImageSources,
  leftListItems,
  leftText,
  rightImageSources
}) => {
  const leftListElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (leftListItems ?? []).map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      href: item.link,
      title: item.text,
      children: item.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, undefined)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 9
  }, undefined)), [leftListItems]);
  const leftImgElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (leftImageSources ?? []).map((item, index) => item.type !== "image" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("source", {
    type: item.type,
    srcSet: item.src,
    media: "(min-width: 600px)"
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 11
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
    loading: "eager",
    alt: "picture",
    src: item.src,
    width: "801",
    height: "251"
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 11
  }, undefined)), [leftImageSources]);
  const rightImgElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (rightImageSources ?? []).map(item => item.type !== "image" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("source", {
    type: item.type,
    srcSet: item.src,
    media: "(min-width: 600px)"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 11
  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
    loading: "lazy",
    alt: "picture",
    src: item.src,
    width: "533",
    height: "349"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 11
  }, undefined)), [rightImageSources]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("picture", {
          children: leftImgElements
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: leftText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        children: leftListElements
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "columns-img-col",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("picture", {
        children: rightImgElements
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, undefined);
};
Columns.displayName = "Columns";
const decorate = async block => {
  const columnsProps = extractContentFromDOM(block);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Columns, {
      ...columnsProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/columns/columns.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/columns/columns.scss ***!
  \**********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.columns > div {
  display: flex;
  flex-direction: column;
}
.columns img {
  width: 100%;
}
.columns > div > div {
  order: 1;
}
.columns > div > .columns-img-col {
  order: 0;
}
.columns > div > .columns-img-col img {
  display: block;
}
.columns.full-width > div {
  gap: unset;
}
.columns.full-width > div:not(.columns-img-col) {
  background-color: #354856;
}
.columns.full-width .columns-img-col {
  order: 1;
}
.columns.full-width > div > div:not(.columns-img-col) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
}
.columns.full-width > div > div:not(.columns-img-col) img {
  max-height: 190px;
  width: auto;
  object-fit: contain;
}
.columns.full-width p {
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin: 0;
}
.columns.full-width > div > div:not(.columns-img-col) p:nth-of-type(2) {
  max-width: 650px;
}
.columns.full-width > div > div:not(.columns-img-col) ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 2rem;
}
.columns.full-width > div > div:not(.columns-img-col) ul li a {
  background-color: #f0ebe2;
  color: #484745;
  border-color: #484745;
  font-size: 14px;
  padding: 1rem 2.5rem;
  border-radius: 4px;
}
.columns.full-width > div > div:not(.columns-img-col) ul li a:hover {
  text-decoration: none;
  background-color: var(--bg-color-red);
  color: #fff;
}

/* Full Width Columns */
/* Media Queries */
@media (width >= 900px) {
  .columns > div {
    align-items: center;
    flex-direction: unset;
    gap: 32px;
  }
  .columns > div > div {
    flex: 1;
    order: unset;
  }
  .columns.full-width > div > div:not(.columns-img-col) ul {
    flex-direction: row;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/columns/columns.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,sBAAA;AAAJ;AAGE;EACE,WAAA;AADJ;AAKI;EACE,QAAA;AAHN;AAMI;EACE,QAAA;AAJN;AAMM;EACE,cAAA;AAJR;AAUI;EACE,UAAA;AARN;AAUM;EACE,yBAAA;AARR;AAYI;EACE,QAAA;AAVN;AAaI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AAXN;AAaM;EACE,iBAAA;EACA,WAAA;EACA,mBAAA;AAXR;AAeI;EACE,WAAA;EACA,eAAA;EACA,kBAAA;EACA,SAAA;AAbN;AAiBM;EACE,gBAAA;AAfR;AAkBM;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;AAhBR;AAkBQ;EACE,yBAAA;EACA,cAAA;EACA,qBAAA;EACA,eAAA;EACA,oBAAA;EACA,kBAAA;AAhBV;AAkBU;EACE,qBAAA;EACA,qCAAA;EACA,WAAA;AAhBZ;;AAwBA,uBAAA;AAEA,kBAAA;AACA;EAEI;IACE,mBAAA;IACA,qBAAA;IACA,SAAA;EAvBJ;EAyBI;IACE,OAAA;IACA,YAAA;EAvBN;EA2BE;IACE,mBAAA;EAzBJ;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/columns/columns.scss":
/*!*****************************************!*\
  !*** ./src/blocks/columns/columns.scss ***!
  \*****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_columns_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./columns.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/columns/columns.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_columns_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_columns_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_columns_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_columns_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./columns.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/columns/columns.tsx");
var __webpack_exports__Columns = __webpack_exports__.Columns;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__Columns as Columns, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzL2NvbHVtbnMvY29sdW1ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2hCO0FBQUE7QUFZeEIsTUFBTU0sdUJBQXVCLEdBQUlDLE9BQXVCLElBQW9CO0VBQzFFLE1BQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDRSxhQUFhLENBQUMsU0FBUyxDQUFFO0VBQ2pELE1BQU1DLGFBQWEsR0FBR0YsT0FBTyxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFDeEQsTUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUU7RUFFaEQsTUFBTUksT0FBc0IsR0FBRyxFQUFFO0VBQ2pDSCxhQUFhLENBQUNJLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0lBQzlCLE1BQU1DLFVBQVUsR0FBRztNQUNqQkMsSUFBSSxFQUFFRixJQUFJLENBQUNHLFlBQVksQ0FBQyxNQUFNLENBQUU7TUFDaENDLEdBQUcsRUFBRUosSUFBSSxDQUFDRyxZQUFZLENBQUMsUUFBUTtJQUNqQyxDQUFDO0lBQ0RMLE9BQU8sQ0FBQ08sSUFBSSxDQUFDSixVQUFVLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0VBRUYsTUFBTUssV0FBVyxHQUFHO0lBQ2xCSixJQUFJLEVBQUUsT0FBTztJQUNiRSxHQUFHLEVBQUVQLFVBQVUsQ0FBQ00sWUFBWSxDQUFDLEtBQUs7RUFDcEMsQ0FBQztFQUNETCxPQUFPLENBQUNPLElBQUksQ0FBQ0MsV0FBVyxDQUFDO0VBRXpCLE9BQU9SLE9BQU8sQ0FBQ1MsR0FBRyxDQUFFUCxJQUFJLEtBQU07SUFDNUIsR0FBR0EsSUFBSTtJQUNQSSxHQUFHLEVBQUVKLElBQUksQ0FBQ0ksR0FBRyxDQUFDSSxPQUFPLENBQUMsWUFBWSxFQUFFLGVBQWU7RUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTUMsb0JBQW9CLEdBQUlqQixPQUF1QixJQUFpQjtFQUNwRSxNQUFNa0IsSUFBSSxHQUFHbEIsT0FBTyxDQUFDSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7RUFDaEQsTUFBTWUsYUFBeUIsR0FBRyxFQUFFO0VBQ3BDRCxJQUFJLENBQUNYLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO0lBQ3JCLE1BQU1ZLFFBQVEsR0FBRztNQUNmQyxJQUFJLEVBQUViLElBQUksQ0FBQ0csWUFBWSxDQUFDLE1BQU0sQ0FBRTtNQUNoQ1csSUFBSSxFQUFFZCxJQUFJLENBQUNHLFlBQVksQ0FBQyxPQUFPO0lBQ2pDLENBQUM7SUFDRFEsYUFBYSxDQUFDTixJQUFJLENBQUNPLFFBQVEsQ0FBQztFQUM5QixDQUFDLENBQUM7RUFFRixPQUFPRCxhQUFhO0FBQ3RCLENBQUM7QUFFRCxNQUFNSSx3QkFBd0IsR0FBSXZCLE9BQXVCLElBQW9CO0VBQzNFLE1BQU13QixPQUFPLEdBQUd4QixPQUFPLENBQUNFLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBRTtFQUNwRSxNQUFNSSxPQUFPLEdBQUdrQixPQUFPLENBQUNwQixnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7RUFDbEQsTUFBTXFCLEdBQUcsR0FBR0QsT0FBTyxDQUFDdEIsYUFBYSxDQUFDLEtBQUssQ0FBRTtFQUV6QyxNQUFNd0IsV0FBMEIsR0FBRyxFQUFFO0VBQ3JDcEIsT0FBTyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztJQUN4QixNQUFNQyxVQUFVLEdBQUc7TUFDakJDLElBQUksRUFBRUYsSUFBSSxDQUFDRyxZQUFZLENBQUMsTUFBTSxDQUFFO01BQ2hDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0csWUFBWSxDQUFDLFFBQVE7SUFDakMsQ0FBQztJQUNEZSxXQUFXLENBQUNiLElBQUksQ0FBQ0osVUFBVSxDQUFDO0VBQzlCLENBQUMsQ0FBQztFQUVGLE1BQU1LLFdBQVcsR0FBRztJQUNsQkosSUFBSSxFQUFFLE9BQU87SUFDYkUsR0FBRyxFQUFFYSxHQUFHLENBQUNkLFlBQVksQ0FBQyxLQUFLO0VBQzdCLENBQUM7RUFDRGUsV0FBVyxDQUFDYixJQUFJLENBQUNDLFdBQVcsQ0FBQztFQUU3QixPQUFPWSxXQUFXLENBQUNYLEdBQUcsQ0FBRVAsSUFBSSxLQUFNO0lBQ2hDLEdBQUdBLElBQUk7SUFDUEksR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLFlBQVksRUFBRSxlQUFlO0VBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELE1BQU1XLHFCQUFxQixHQUFJQyxLQUFrQixJQUFtQjtFQUNsRSxNQUFNNUIsT0FBTyxHQUFHNEIsS0FBSyxDQUFDMUIsYUFBYSxDQUFDLEtBQUssQ0FBRTtFQUUzQyxNQUFNMkIsZ0JBQWdCLEdBQUc5Qix1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDO0VBQ3pELE1BQU04QixRQUFRLEdBQUc5QixPQUFPLENBQUNFLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFNkIsU0FBUztFQUNyRSxNQUFNWixhQUFhLEdBQUdGLG9CQUFvQixDQUFDakIsT0FBTyxDQUFDO0VBQ25ELE1BQU1nQyxpQkFBaUIsR0FBR1Qsd0JBQXdCLENBQUN2QixPQUFPLENBQUM7RUFFM0QsT0FBTztJQUNMNkIsZ0JBQWdCO0lBQ2hCVixhQUFhO0lBQ2JXLFFBQVE7SUFDUkU7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU1DLE9BQStCLEdBQUdBLENBQUM7RUFDOUNKLGdCQUFnQjtFQUNoQlYsYUFBYTtFQUNiVyxRQUFRO0VBQ1JFO0FBQ0YsQ0FBQyxLQUFLO0VBQ0osTUFBTUUsZ0JBQWdCLEdBQUd2Qyw4Q0FBTyxDQUM5QixNQUNFLENBQUN3QixhQUFhLElBQUksRUFBRSxFQUFFSixHQUFHLENBQUMsQ0FBQ1AsSUFBSSxFQUFFMkIsS0FBSyxrQkFDcENyQyw2REFBQTtJQUFBc0MsUUFBQSxlQUNFdEMsNkRBQUE7TUFBR3VDLElBQUksRUFBRTdCLElBQUksQ0FBQ2EsSUFBSztNQUFDaUIsS0FBSyxFQUFFOUIsSUFBSSxDQUFDYyxJQUFLO01BQUFjLFFBQUEsRUFDbEM1QixJQUFJLENBQUNjO0lBQUk7TUFBQWlCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUNUO0VBQUMsR0FIR1AsS0FBSztJQUFBSSxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFJVixDQUNMLENBQUMsRUFDSixDQUFDdkIsYUFBYSxDQUNoQixDQUFDO0VBRUQsTUFBTXdCLGVBQWUsR0FBR2hELDhDQUFPLENBQzdCLE1BQ0UsQ0FBQ2tDLGdCQUFnQixJQUFJLEVBQUUsRUFBRWQsR0FBRyxDQUFDLENBQUNQLElBQUksRUFBRTJCLEtBQUssS0FDdkMzQixJQUFJLENBQUNFLElBQUksS0FBSyxPQUFPLGdCQUNuQlosNkRBQUE7SUFFRVksSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUs7SUFDaEJrQyxNQUFNLEVBQUVwQyxJQUFJLENBQUNJLEdBQUk7SUFDakJpQyxLQUFLLEVBQUM7RUFBb0IsR0FIckJWLEtBQUs7SUFBQUksUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBSVgsQ0FBQyxnQkFFRjVDLDZEQUFBO0lBRUVnRCxPQUFPLEVBQUMsT0FBTztJQUNmQyxHQUFHLEVBQUMsU0FBUztJQUNibkMsR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUk7SUFDZG9DLEtBQUssRUFBQyxLQUFLO0lBQ1hDLE1BQU0sRUFBQztFQUFLLEdBTFBkLEtBQUs7SUFBQUksUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLFlBTVgsQ0FFTCxDQUFDLEVBQ0gsQ0FBQ2IsZ0JBQWdCLENBQ25CLENBQUM7RUFFRCxNQUFNcUIsZ0JBQWdCLEdBQUd2RCw4Q0FBTyxDQUM5QixNQUNFLENBQUNxQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUVqQixHQUFHLENBQUVQLElBQUksSUFDakNBLElBQUksQ0FBQ0UsSUFBSSxLQUFLLE9BQU8sZ0JBQ25CWiw2REFBQTtJQUNFWSxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSztJQUNoQmtDLE1BQU0sRUFBRXBDLElBQUksQ0FBQ0ksR0FBSTtJQUNqQmlDLEtBQUssRUFBQztFQUFvQjtJQUFBTixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDM0IsQ0FBQyxnQkFFRjVDLDZEQUFBO0lBQ0VnRCxPQUFPLEVBQUMsTUFBTTtJQUNkQyxHQUFHLEVBQUMsU0FBUztJQUNibkMsR0FBRyxFQUFFSixJQUFJLENBQUNJLEdBQUk7SUFDZG9DLEtBQUssRUFBQyxLQUFLO0lBQ1hDLE1BQU0sRUFBQztFQUFLO0lBQUFWLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNiLENBRUwsQ0FBQyxFQUNILENBQUNWLGlCQUFpQixDQUNwQixDQUFDO0VBRUQsb0JBQ0VsQyw2REFBQTtJQUFBc0MsUUFBQSxnQkFDRXRDLDZEQUFBO01BQUFzQyxRQUFBLGdCQUNFdEMsNkRBQUE7UUFBQXNDLFFBQUEsZUFDRXRDLDZEQUFBO1VBQUFzQyxRQUFBLEVBQVVPO1FBQWU7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQVU7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFDbkMsQ0FBQyxlQUNKNUMsNkRBQUE7UUFBQXNDLFFBQUEsRUFBSU47TUFBUTtRQUFBUyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsWUFBSSxDQUFDLGVBQ2pCNUMsNkRBQUE7UUFBQXNDLFFBQUEsRUFBS0Y7TUFBZ0I7UUFBQUssUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQUssQ0FBQztJQUFBO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUN4QixDQUFDLGVBQ041Qyw2REFBQTtNQUFLcUQsU0FBUyxFQUFDLGlCQUFpQjtNQUFBZixRQUFBLGVBQzlCdEMsNkRBQUE7UUFBQXNDLFFBQUEsRUFBVWM7TUFBZ0I7UUFBQVgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLFlBQVU7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFDbEMsQ0FBQztFQUFBO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxZQUNILENBQUM7QUFFVixDQUFDO0FBQ0RULE9BQU8sQ0FBQ21CLFdBQVcsR0FBRyxTQUFTO0FBRS9CLE1BQU1DLFFBQVEsR0FBRyxNQUFPekIsS0FBa0IsSUFBSztFQUM3QyxNQUFNMEIsWUFBWSxHQUFHM0IscUJBQXFCLENBQUNDLEtBQUssQ0FBQztFQUVqRGhDLG1FQUFtQixDQUFDZ0MsS0FBSyxDQUFDLENBQUM0QixNQUFNLGNBQy9CMUQsNkRBQUEsQ0FBQ0osNkNBQVU7SUFBQTBDLFFBQUEsZUFDVHRDLDZEQUFBLENBQUNtQyxPQUFPO01BQUEsR0FBS3FCO0lBQVk7TUFBQWYsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQUc7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDbkIsQ0FDZCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlVyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTHZCO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrR0FBa0csVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxZQUFZLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxzQkFBc0I7QUFDdnlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZ2QyxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwSjtBQUMxSjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhIQUFPOzs7O0FBSW9HO0FBQzVILE9BQU8saUVBQWUsOEhBQU8sSUFBSSw4SEFBTyxVQUFVLDhIQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2NvbHVtbnMvY29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2NvbHVtbnMvY29sdW1ucy5zY3NzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbnMuc2Nzcz82MTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdHJpY3RNb2RlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vY29sdW1ucy5zY3NzXCI7XG5cbnR5cGUgQ29sdW1uc1Byb3BzID0ge1xuICBsZWZ0SW1hZ2VTb3VyY2VzPzogSW1hZ2VTb3VyY2VbXTtcbiAgbGVmdExpc3RJdGVtcz86IExpc3RJdGVtW107XG4gIGxlZnRUZXh0Pzogc3RyaW5nO1xuICByaWdodEltYWdlU291cmNlcz86IEltYWdlU291cmNlW107XG59O1xuXG50eXBlIEltYWdlU291cmNlID0geyB0eXBlOiBzdHJpbmc7IHNyYzogc3RyaW5nIH07XG50eXBlIExpc3RJdGVtID0geyBsaW5rOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9O1xuXG5jb25zdCBleHRyYWN0TGVmdEltYWdlU291cmNlcyA9IChtYWluRGl2OiBIVE1MRGl2RWxlbWVudCk6IEltYWdlU291cmNlW10gPT4ge1xuICBjb25zdCBsZWZ0SW1nID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yKFwicGljdHVyZVwiKSE7XG4gIGNvbnN0IGxlZnRJbWdTb3VyY2UgPSBsZWZ0SW1nLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2VcIik7XG4gIGNvbnN0IGxlZnRJbWdUYWcgPSBsZWZ0SW1nLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikhO1xuXG4gIGNvbnN0IHNvdXJjZXM6IEltYWdlU291cmNlW10gPSBbXTtcbiAgbGVmdEltZ1NvdXJjZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc291cmNlSXRlbSA9IHtcbiAgICAgIHR5cGU6IGl0ZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSEsXG4gICAgICBzcmM6IGl0ZW0uZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpISxcbiAgICB9O1xuICAgIHNvdXJjZXMucHVzaChzb3VyY2VJdGVtKTtcbiAgfSk7XG5cbiAgY29uc3QgcGljdHVyZUl0ZW0gPSB7XG4gICAgdHlwZTogXCJpbWFnZVwiLFxuICAgIHNyYzogbGVmdEltZ1RhZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikhLFxuICB9O1xuICBzb3VyY2VzLnB1c2gocGljdHVyZUl0ZW0pO1xuXG4gIHJldHVybiBzb3VyY2VzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAuLi5pdGVtLFxuICAgIHNyYzogaXRlbS5zcmMucmVwbGFjZShcImZvcm1hdD1wbmdcIiwgXCJmb3JtYXQ9d2VicGx5XCIpLFxuICB9KSk7XG59O1xuXG5jb25zdCBleHRyYWN0TGVmdExpc3RJdGVtcyA9IChtYWluRGl2OiBIVE1MRGl2RWxlbWVudCk6IExpc3RJdGVtW10gPT4ge1xuICBjb25zdCBsaXN0ID0gbWFpbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFwidWwgbGkgYVwiKTtcbiAgY29uc3QgbGVmdExpc3RJdGVtczogTGlzdEl0ZW1bXSA9IFtdO1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IHtcbiAgICAgIGxpbms6IGl0ZW0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSEsXG4gICAgICB0ZXh0OiBpdGVtLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpISxcbiAgICB9O1xuICAgIGxlZnRMaXN0SXRlbXMucHVzaChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0TGlzdEl0ZW1zO1xufTtcblxuY29uc3QgZXh0cmFjdFJpZ2h0SW1hZ2VTb3VyY2VzID0gKG1haW5EaXY6IEhUTUxEaXZFbGVtZW50KTogSW1hZ2VTb3VyY2VbXSA9PiB7XG4gIGNvbnN0IHBpY3R1cmUgPSBtYWluRGl2LnF1ZXJ5U2VsZWN0b3IoXCJkaXY6bnRoLW9mLXR5cGUoMikgcGljdHVyZVwiKSE7XG4gIGNvbnN0IHNvdXJjZXMgPSBwaWN0dXJlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzb3VyY2VcIik7XG4gIGNvbnN0IGltZyA9IHBpY3R1cmUucXVlcnlTZWxlY3RvcihcImltZ1wiKSE7XG5cbiAgY29uc3Qgc291cmNlc0xpc3Q6IEltYWdlU291cmNlW10gPSBbXTtcbiAgc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc291cmNlSXRlbSA9IHtcbiAgICAgIHR5cGU6IGl0ZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSEsXG4gICAgICBzcmM6IGl0ZW0uZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpISxcbiAgICB9O1xuICAgIHNvdXJjZXNMaXN0LnB1c2goc291cmNlSXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBpY3R1cmVJdGVtID0ge1xuICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICBzcmM6IGltZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikhLFxuICB9O1xuICBzb3VyY2VzTGlzdC5wdXNoKHBpY3R1cmVJdGVtKTtcblxuICByZXR1cm4gc291cmNlc0xpc3QubWFwKChpdGVtKSA9PiAoe1xuICAgIC4uLml0ZW0sXG4gICAgc3JjOiBpdGVtLnNyYy5yZXBsYWNlKFwiZm9ybWF0PXBuZ1wiLCBcImZvcm1hdD13ZWJwbHlcIiksXG4gIH0pKTtcbn07XG5cbmNvbnN0IGV4dHJhY3RDb250ZW50RnJvbURPTSA9IChibG9jazogSFRNTEVsZW1lbnQpOiBDb2x1bW5zUHJvcHMgPT4ge1xuICBjb25zdCBtYWluRGl2ID0gYmxvY2sucXVlcnlTZWxlY3RvcihcImRpdlwiKSE7XG5cbiAgY29uc3QgbGVmdEltYWdlU291cmNlcyA9IGV4dHJhY3RMZWZ0SW1hZ2VTb3VyY2VzKG1haW5EaXYpO1xuICBjb25zdCBsZWZ0VGV4dCA9IG1haW5EaXYucXVlcnlTZWxlY3RvcihcInA6bnRoLW9mLXR5cGUoMilcIik/LmlubmVySFRNTDtcbiAgY29uc3QgbGVmdExpc3RJdGVtcyA9IGV4dHJhY3RMZWZ0TGlzdEl0ZW1zKG1haW5EaXYpO1xuICBjb25zdCByaWdodEltYWdlU291cmNlcyA9IGV4dHJhY3RSaWdodEltYWdlU291cmNlcyhtYWluRGl2KTtcblxuICByZXR1cm4ge1xuICAgIGxlZnRJbWFnZVNvdXJjZXMsXG4gICAgbGVmdExpc3RJdGVtcyxcbiAgICBsZWZ0VGV4dCxcbiAgICByaWdodEltYWdlU291cmNlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDb2x1bW5zOiBSZWFjdC5GQzxDb2x1bW5zUHJvcHM+ID0gKHtcbiAgbGVmdEltYWdlU291cmNlcyxcbiAgbGVmdExpc3RJdGVtcyxcbiAgbGVmdFRleHQsXG4gIHJpZ2h0SW1hZ2VTb3VyY2VzLFxufSkgPT4ge1xuICBjb25zdCBsZWZ0TGlzdEVsZW1lbnRzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgKGxlZnRMaXN0SXRlbXMgPz8gW10pLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGl0bGU9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpLFxuICAgIFtsZWZ0TGlzdEl0ZW1zXSxcbiAgKTtcblxuICBjb25zdCBsZWZ0SW1nRWxlbWVudHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAobGVmdEltYWdlU291cmNlcyA/PyBbXSkubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAgaXRlbS50eXBlICE9PSBcImltYWdlXCIgPyAoXG4gICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHR5cGU9e2l0ZW0udHlwZX1cbiAgICAgICAgICAgIHNyY1NldD17aXRlbS5zcmN9XG4gICAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDYwMHB4KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcbiAgICAgICAgICAgIGFsdD1cInBpY3R1cmVcIlxuICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgIHdpZHRoPVwiODAxXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjI1MVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgW2xlZnRJbWFnZVNvdXJjZXNdLFxuICApO1xuXG4gIGNvbnN0IHJpZ2h0SW1nRWxlbWVudHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICAocmlnaHRJbWFnZVNvdXJjZXMgPz8gW10pLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgaXRlbS50eXBlICE9PSBcImltYWdlXCIgPyAoXG4gICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgdHlwZT17aXRlbS50eXBlfVxuICAgICAgICAgICAgc3JjU2V0PXtpdGVtLnNyY31cbiAgICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogNjAwcHgpXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgIGFsdD1cInBpY3R1cmVcIlxuICAgICAgICAgICAgc3JjPXtpdGVtLnNyY31cbiAgICAgICAgICAgIHdpZHRoPVwiNTMzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjM0OVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgW3JpZ2h0SW1hZ2VTb3VyY2VzXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8cGljdHVyZT57bGVmdEltZ0VsZW1lbnRzfTwvcGljdHVyZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD57bGVmdFRleHR9PC9wPlxuICAgICAgICA8dWw+e2xlZnRMaXN0RWxlbWVudHN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zLWltZy1jb2xcIj5cbiAgICAgICAgPHBpY3R1cmU+e3JpZ2h0SW1nRWxlbWVudHN9PC9waWN0dXJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuQ29sdW1ucy5kaXNwbGF5TmFtZSA9IFwiQ29sdW1uc1wiO1xuXG5jb25zdCBkZWNvcmF0ZSA9IGFzeW5jIChibG9jazogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY29sdW1uc1Byb3BzID0gZXh0cmFjdENvbnRlbnRGcm9tRE9NKGJsb2NrKTtcblxuICBSZWFjdERPTS5jcmVhdGVSb290KGJsb2NrKS5yZW5kZXIoXG4gICAgPFN0cmljdE1vZGU+XG4gICAgICA8Q29sdW1ucyB7Li4uY29sdW1uc1Byb3BzfSAvPlxuICAgIDwvU3RyaWN0TW9kZT4sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29sdW1ucyA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29sdW1ucyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb2x1bW5zID4gZGl2ID4gZGl2IHtcbiAgb3JkZXI6IDE7XG59XG4uY29sdW1ucyA+IGRpdiA+IC5jb2x1bW5zLWltZy1jb2wge1xuICBvcmRlcjogMDtcbn1cbi5jb2x1bW5zID4gZGl2ID4gLmNvbHVtbnMtaW1nLWNvbCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb2x1bW5zLmZ1bGwtd2lkdGggPiBkaXYge1xuICBnYXA6IHVuc2V0O1xufVxuLmNvbHVtbnMuZnVsbC13aWR0aCA+IGRpdjpub3QoLmNvbHVtbnMtaW1nLWNvbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0ODU2O1xufVxuLmNvbHVtbnMuZnVsbC13aWR0aCAuY29sdW1ucy1pbWctY29sIHtcbiAgb3JkZXI6IDE7XG59XG4uY29sdW1ucy5mdWxsLXdpZHRoID4gZGl2ID4gZGl2Om5vdCguY29sdW1ucy1pbWctY29sKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbn1cbi5jb2x1bW5zLmZ1bGwtd2lkdGggPiBkaXYgPiBkaXY6bm90KC5jb2x1bW5zLWltZy1jb2wpIGltZyB7XG4gIG1heC1oZWlnaHQ6IDE5MHB4O1xuICB3aWR0aDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jb2x1bW5zLmZ1bGwtd2lkdGggcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbHVtbnMuZnVsbC13aWR0aCA+IGRpdiA+IGRpdjpub3QoLmNvbHVtbnMtaW1nLWNvbCkgcDpudGgtb2YtdHlwZSgyKSB7XG4gIG1heC13aWR0aDogNjUwcHg7XG59XG4uY29sdW1ucy5mdWxsLXdpZHRoID4gZGl2ID4gZGl2Om5vdCguY29sdW1ucy1pbWctY29sKSB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBnYXA6IDJyZW07XG59XG4uY29sdW1ucy5mdWxsLXdpZHRoID4gZGl2ID4gZGl2Om5vdCguY29sdW1ucy1pbWctY29sKSB1bCBsaSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWJlMjtcbiAgY29sb3I6ICM0ODQ3NDU7XG4gIGJvcmRlci1jb2xvcjogIzQ4NDc0NTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNvbHVtbnMuZnVsbC13aWR0aCA+IGRpdiA+IGRpdjpub3QoLmNvbHVtbnMtaW1nLWNvbCkgdWwgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItcmVkKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIEZ1bGwgV2lkdGggQ29sdW1ucyAqL1xuLyogTWVkaWEgUXVlcmllcyAqL1xuQG1lZGlhICh3aWR0aCA+PSA5MDBweCkge1xuICAuY29sdW1ucyA+IGRpdiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogdW5zZXQ7XG4gICAgZ2FwOiAzMnB4O1xuICB9XG4gIC5jb2x1bW5zID4gZGl2ID4gZGl2IHtcbiAgICBmbGV4OiAxO1xuICAgIG9yZGVyOiB1bnNldDtcbiAgfVxuICAuY29sdW1ucy5mdWxsLXdpZHRoID4gZGl2ID4gZGl2Om5vdCguY29sdW1ucy1pbWctY29sKSB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Jsb2Nrcy9jb2x1bW5zL2NvbHVtbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFLSTtFQUNFLFFBQUE7QUFITjtBQU1JO0VBQ0UsUUFBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFVSTtFQUNFLFVBQUE7QUFSTjtBQVVNO0VBQ0UseUJBQUE7QUFSUjtBQVlJO0VBQ0UsUUFBQTtBQVZOO0FBYUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFYTjtBQWFNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWVJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFiTjtBQWlCTTtFQUNFLGdCQUFBO0FBZlI7QUFrQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQWhCUjtBQWtCUTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFoQlY7QUFrQlU7RUFDRSxxQkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtBQWhCWjs7QUF3QkEsdUJBQUE7QUFFQSxrQkFBQTtBQUNBO0VBRUk7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsU0FBQTtFQXZCSjtFQXlCSTtJQUNFLE9BQUE7SUFDQSxZQUFBO0VBdkJOO0VBMkJFO0lBQ0UsbUJBQUE7RUF6Qko7QUFDRlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29sdW1ucy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbHVtbnMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0cmljdE1vZGUiLCJ1c2VNZW1vIiwiUmVhY3RET00iLCJqc3hERVYiLCJfanN4REVWIiwiZXh0cmFjdExlZnRJbWFnZVNvdXJjZXMiLCJtYWluRGl2IiwibGVmdEltZyIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0SW1nU291cmNlIiwicXVlcnlTZWxlY3RvckFsbCIsImxlZnRJbWdUYWciLCJzb3VyY2VzIiwiZm9yRWFjaCIsIml0ZW0iLCJzb3VyY2VJdGVtIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInNyYyIsInB1c2giLCJwaWN0dXJlSXRlbSIsIm1hcCIsInJlcGxhY2UiLCJleHRyYWN0TGVmdExpc3RJdGVtcyIsImxpc3QiLCJsZWZ0TGlzdEl0ZW1zIiwibGlzdEl0ZW0iLCJsaW5rIiwidGV4dCIsImV4dHJhY3RSaWdodEltYWdlU291cmNlcyIsInBpY3R1cmUiLCJpbWciLCJzb3VyY2VzTGlzdCIsImV4dHJhY3RDb250ZW50RnJvbURPTSIsImJsb2NrIiwibGVmdEltYWdlU291cmNlcyIsImxlZnRUZXh0IiwiaW5uZXJIVE1MIiwicmlnaHRJbWFnZVNvdXJjZXMiLCJDb2x1bW5zIiwibGVmdExpc3RFbGVtZW50cyIsImluZGV4IiwiY2hpbGRyZW4iLCJocmVmIiwidGl0bGUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJsZWZ0SW1nRWxlbWVudHMiLCJzcmNTZXQiLCJtZWRpYSIsImxvYWRpbmciLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0SW1nRWxlbWVudHMiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSIsImRlY29yYXRlIiwiY29sdW1uc1Byb3BzIiwiY3JlYXRlUm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=