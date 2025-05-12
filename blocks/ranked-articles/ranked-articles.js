export const id = "blocks:ranked-articles";
export const ids = ["blocks:ranked-articles"];
export const modules = {

/***/ "./src/blocks/ranked-articles/ranked-articles.tsx":
/*!********************************************************!*\
  !*** ./src/blocks/ranked-articles/ranked-articles.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RankedArticles: () => (/* binding */ RankedArticles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _ranked_articles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranked-articles.scss */ "./src/blocks/ranked-articles/ranked-articles.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/ranked-articles/ranked-articles.tsx";




const extractContentFromDOM = block => {
  const div = block.querySelector("div");
  const filteredBy = div.querySelector("div:first-child").innerText;
  const filteredByWord = div.querySelector("div:last-child").innerText.toLowerCase().replaceAll(" ", "-");
  return {
    filterBy: filteredBy,
    filterByQuery: filteredByWord
  };
};
const RankedArticles = ({
  filterBy,
  filterByQuery
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "ranked-articles-text",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "ranked-articles-left",
      children: filterByQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "ranked-articles-right",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "ranked-articles-view",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: `/${filterBy}/${filterByQuery}`,
          "aria-label": "VIEW ALL",
          children: "VIEW ALL"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "ranked-articles-arrow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: `/${filterBy}/${filterByQuery}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: "/icons/hot-topic-arrow.svg",
            alt: "Orange arrow",
            width: "23px",
            height: "16px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};
RankedArticles.displayName = "RankedArticles";
const decorate = async block => {
  const rankedArticlesProps = extractContentFromDOM(block);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(RankedArticles, {
      ...rankedArticlesProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/ranked-articles/ranked-articles.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/ranked-articles/ranked-articles.scss ***!
  \**************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.ranked-articles-wrapper {
  background: var(--ranked-articles-bg-color);
  width: 100%;
}

.ranked-articles-wrapper .ranked-articles {
  background: var(--ranked-articles-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16px;
  font-family: var(--body-font-family);
}

.ranked-articles-wrapper .ranked-articles .ranked-articles-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 20px;
}

@media only screen and (width <= 576px) {
  .ranked-articles-wrapper .ranked-articles .ranked-articles-text {
    padding-top: 30px;
    padding-bottom: 10px;
    margin: 0;
  }
}
.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-left {
  font-size: 22.78px;
  font-weight: 700;
  line-height: 27px;
  color: var(--text-color-bold);
  text-align: left;
  padding: 0 30px;
}

@media only screen and (width >= 576px) and (width <= 767px) {
  .ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-left {
    font-size: 25.63px;
    line-height: var(--line-height-l);
  }
}
@media only screen and (width >= 768px) {
  .ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-left {
    font-size: var(--body-font-size-xl);
  }
}
.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right {
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding-right: 35px;
}

@media only screen and (width <= 768px) {
  .ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right {
    gap: 35px;
  }
}
.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right .ranked-articles-view {
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right .ranked-articles-arrow a img {
  font-size: 10px;
}

.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right .ranked-articles-view a {
  font-size: var(--body-font-size-xxs);
  font-family: var(--body-font-family);
  color: var(--blue-color);
  font-weight: 700;
  letter-spacing: 0.72px;
  line-height: 20.16px;
}

.ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right .ranked-articles-view a:hover {
  color: var(--ranked-articles-link-hover-color);
}

@media only screen and (width <= 576px) {
  .ranked-articles-wrapper .ranked-articles .ranked-articles-text .ranked-articles-right .ranked-articles-view {
    display: none;
  }
}
.ranked-articles-wrapper .ranked-articles .wrap {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 32px 20px;
}

@media only screen and (width >= 576px) {
  .ranked-articles-wrapper .ranked-articles .wrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles {
    width: calc(50% - 16px);
    padding-right: 16px;
  }
}
.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper {
  display: flex;
  flex-direction: row;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image {
  flex: 1;
  width: 100%;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  object-fit: cover;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .text-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 7px;
  flex: 3;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .text-wrap .ranked-articles {
  padding-bottom: 24px;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-title {
  line-height: 22px;
  margin-top: -4px;
  font-size: var(--body-font-size-s);
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-title a {
  font-weight: 700;
  color: var(--text-color-bold);
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-author a {
  font-size: var(--body-font-size-xxs);
  font-weight: 700;
  line-height: var(--line-height-xs);
  color: var(--blue-color);
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-title.lock a {
  position: relative;
}
.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-title.lock a::after {
  content: var(--lock-svg);
  margin-left: 3px;
  bottom: -5px;
  position: relative;
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-title a:hover {
  color: var(--ranked-articles-link-hover-color);
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-author a:hover {
  color: var(--ranked-articles-link-hover-color);
}

.ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-date {
  color: #6f6f6f;
  font-size: var(--body-font-size-xxs);
  line-height: var(--line-height-xs);
  font-family: var(--regular-font-size);
}

@media only screen and (width >= 577px) and (width <= 1024px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper {
    display: flex;
    flex-direction: row;
  }
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image {
    flex: 1;
    width: 100%;
  }
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 7px;
    flex: 3;
  }
}
@media only screen and (width <= 576px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    height: 64px;
    width: 64px;
  }
}
@media only screen and (width >= 577px) and (width <= 767px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    padding-right: 0;
    max-width: 46px;
    min-height: 40px;
    max-height: 46px;
  }
}
@media only screen and (width >= 768px) and (width <= 899px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    width: 40px;
    min-height: 37px;
    max-height: 40px;
    padding-right: 0;
  }
}
@media only screen and (width >= 900px) and (width <= 1023px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    width: 52px;
    min-height: 48px;
    max-height: 52px;
    padding-right: 0;
  }
}
@media only screen and (width >= 1024px) {
  .ranked-articles-wrapper .ranked-articles .wrap .ranked-articles .ranked-articles-context-wrapper .ranked-articles-image a img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    padding-right: 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/ranked-articles/ranked-articles.scss"],"names":[],"mappings":"AAAA;EACE,2CAAA;EACA,WAAA;AACF;;AAEA;EACE,2CAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBAAA;EACA,oCAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,oBAAA;AACF;;AAEA;EACE;IACE,iBAAA;IACA,oBAAA;IACA,SAAA;EACF;AACF;AAEA;EAIE,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,gBAAA;EACA,eAAA;AAHF;;AAMA;EACE;IAIE,kBAAA;IACA,iCAAA;EANF;AACF;AASA;EACE;IAIE,mCAAA;EAVF;AACF;AAaA;EAIE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;AAdF;;AAiBA;EACE;IAIE,SAAA;EAjBF;AACF;AAoBA;EAKE,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAtBF;;AAyBA;EAOE,eAAA;AA5BF;;AA+BA;EAME,oCAAA;EACA,oCAAA;EACA,wBAAA;EACA,gBAAA;EACA,sBAAA;EACA,oBAAA;AAjCF;;AAoCA;EAME,8CAAA;AAtCF;;AAyCA;EACE;IAKE,aAAA;EA1CF;AACF;AA6CA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,oBAAA;AA3CF;;AA8CA;EACE;IACE,aAAA;IACA,mBAAA;IACA,8BAAA;EA3CF;EA8CA;IACE,uBAAA;IACA,mBAAA;EA5CF;AACF;AA+CA;EAKE,aAAA;EACA,mBAAA;AAjDF;;AAoDA;EAME,OAAA;EACA,WAAA;AAtDF;;AAyDA;EAQE,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;AA7DF;;AAgEA;EAME,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,iBAAA;EACA,OAAA;AAlEF;;AAqEA;EAOE,oBAAA;AAxEF;;AA2EA;EAME,iBAAA;EACA,gBAAA;EACA,kCAAA;AA7EF;;AAgFA;EAOE,gBAAA;EACA,6BAAA;AAnFF;;AAsFA;EAOE,oCAAA;EACA,gBAAA;EACA,kCAAA;EACA,wBAAA;AAzFF;;AA4FA;EAOE,kBAAA;AA/FF;AAiGE;EACE,wBAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;AA/FJ;;AAmGA;EAOE,8CAAA;AAtGF;;AAyGA;EAOE,8CAAA;AA5GF;;AA+GA;EAME,cAAA;EACA,oCAAA;EACA,kCAAA;EACA,qCAAA;AAjHF;;AAoHA;EACE;IAKE,aAAA;IACA,mBAAA;EArHF;EAwHA;IAME,OAAA;IACA,WAAA;EA3HF;EA8HA;IAQE,uBAAA;IACA,mBAAA;IACA,eAAA;EAnIF;EAsIA;IAME,aAAA;IACA,sBAAA;IACA,8BAAA;IACA,iBAAA;IACA,OAAA;EAzIF;AACF;AA4IA;EACE;IAQE,YAAA;IACA,WAAA;EAjJF;AACF;AAoJA;EACE;IAQE,gBAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;EAzJF;AACF;AA4JA;EACE;IAQE,WAAA;IACA,gBAAA;IACA,gBAAA;IACA,gBAAA;EAjKF;AACF;AAoKA;EACE;IAQE,WAAA;IACA,gBAAA;IACA,gBAAA;IACA,gBAAA;EAzKF;AACF;AA4KA;EACE;IAQE,WAAA;IACA,YAAA;IACA,iBAAA;IACA,gBAAA;EAjLF;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/ranked-articles/ranked-articles.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/ranked-articles/ranked-articles.scss ***!
  \*********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ranked_articles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ranked-articles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/ranked-articles/ranked-articles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ranked_articles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ranked_articles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ranked_articles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ranked_articles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./ranked-articles.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/ranked-articles/ranked-articles.tsx");
var __webpack_exports__RankedArticles = __webpack_exports__.RankedArticles;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__RankedArticles as RankedArticles, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tzL3JhbmtlZC1hcnRpY2xlcy9yYW5rZWQtYXJ0aWNsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRjtBQUNSO0FBQUE7QUFPaEMsTUFBTUsscUJBQXFCLEdBQUlDLEtBQWtCLElBQTBCO0VBQ3pFLE1BQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsS0FBSyxDQUFFO0VBQ3ZDLE1BQU1DLFVBQVUsR0FDZEYsR0FBRyxDQUFDQyxhQUFhLENBQWlCLGlCQUFpQixDQUFDLENBQUVFLFNBQVM7RUFDakUsTUFBTUMsY0FBYyxHQUFHSixHQUFHLENBQ3ZCQyxhQUFhLENBQWlCLGdCQUFnQixDQUFDLENBQy9DRSxTQUFTLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQ3ZCQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUV2QixPQUFPO0lBQ0xDLFFBQVEsRUFBRUwsVUFBVTtJQUNwQk0sYUFBYSxFQUFFSjtFQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU1LLGNBQTZDLEdBQUdBLENBQUM7RUFDNURGLFFBQVE7RUFDUkM7QUFDbUIsQ0FBQyxLQUFLO0VBQ3pCLG9CQUNFWCw2REFBQTtJQUFLYSxTQUFTLEVBQUUsc0JBQXVCO0lBQUFDLFFBQUEsZ0JBQ3JDZCw2REFBQTtNQUFLYSxTQUFTLEVBQUUsc0JBQXVCO01BQUFDLFFBQUEsRUFBRUg7SUFBYTtNQUFBSSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBTSxDQUFDLGVBQzdEbEIsNkRBQUE7TUFBS2EsU0FBUyxFQUFDLHVCQUF1QjtNQUFBQyxRQUFBLGdCQUNwQ2QsNkRBQUE7UUFBS2EsU0FBUyxFQUFDLHNCQUFzQjtRQUFBQyxRQUFBLGVBQ25DZCw2REFBQTtVQUFHbUIsSUFBSSxFQUFFLElBQUlULFFBQVEsSUFBSUMsYUFBYSxFQUFHO1VBQUMsY0FBVyxVQUFVO1VBQUFHLFFBQUEsRUFBQztRQUVoRTtV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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrSEFBa0gsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sc0JBQXNCO0FBQ243RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQdkMsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBa0s7QUFDbEs7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzSUFBTzs7OztBQUk0RztBQUNwSSxPQUFPLGlFQUFlLHNJQUFPLElBQUksc0lBQU8sVUFBVSxzSUFBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9yYW5rZWQtYXJ0aWNsZXMvcmFua2VkLWFydGljbGVzLnRzeCIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvcmFua2VkLWFydGljbGVzL3JhbmtlZC1hcnRpY2xlcy5zY3NzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9yYW5rZWQtYXJ0aWNsZXMvcmFua2VkLWFydGljbGVzLnNjc3M/Yjk5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuL3JhbmtlZC1hcnRpY2xlcy5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFJhbmtlZEFydGljbGVzUHJvcHMgPSB7XG4gIGZpbHRlckJ5OiBzdHJpbmc7XG4gIGZpbHRlckJ5UXVlcnk6IHN0cmluZztcbn07XG5cbmNvbnN0IGV4dHJhY3RDb250ZW50RnJvbURPTSA9IChibG9jazogSFRNTEVsZW1lbnQpOiBSYW5rZWRBcnRpY2xlc1Byb3BzID0+IHtcbiAgY29uc3QgZGl2ID0gYmxvY2sucXVlcnlTZWxlY3RvcihcImRpdlwiKSE7XG4gIGNvbnN0IGZpbHRlcmVkQnkgPVxuICAgIGRpdi5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcImRpdjpmaXJzdC1jaGlsZFwiKSEuaW5uZXJUZXh0O1xuICBjb25zdCBmaWx0ZXJlZEJ5V29yZCA9IGRpdlxuICAgIC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihcImRpdjpsYXN0LWNoaWxkXCIpIVxuICAgIC5pbm5lclRleHQudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIik7XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXJCeTogZmlsdGVyZWRCeSxcbiAgICBmaWx0ZXJCeVF1ZXJ5OiBmaWx0ZXJlZEJ5V29yZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBSYW5rZWRBcnRpY2xlczogUmVhY3QuRkM8UmFua2VkQXJ0aWNsZXNQcm9wcz4gPSAoe1xuICBmaWx0ZXJCeSxcbiAgZmlsdGVyQnlRdWVyeSxcbn06IFJhbmtlZEFydGljbGVzUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYW5rZWQtYXJ0aWNsZXMtdGV4dFwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhbmtlZC1hcnRpY2xlcy1sZWZ0XCJ9PntmaWx0ZXJCeVF1ZXJ5fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5rZWQtYXJ0aWNsZXMtcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5rZWQtYXJ0aWNsZXMtdmlld1wiPlxuICAgICAgICAgIDxhIGhyZWY9e2AvJHtmaWx0ZXJCeX0vJHtmaWx0ZXJCeVF1ZXJ5fWB9IGFyaWEtbGFiZWw9XCJWSUVXIEFMTFwiPlxuICAgICAgICAgICAgVklFVyBBTExcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmtlZC1hcnRpY2xlcy1hcnJvd1wiPlxuICAgICAgICAgIDxhIGhyZWY9e2AvJHtmaWx0ZXJCeX0vJHtmaWx0ZXJCeVF1ZXJ5fWB9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaWNvbnMvaG90LXRvcGljLWFycm93LnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIk9yYW5nZSBhcnJvd1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjNweFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuUmFua2VkQXJ0aWNsZXMuZGlzcGxheU5hbWUgPSBcIlJhbmtlZEFydGljbGVzXCI7XG5cbmNvbnN0IGRlY29yYXRlID0gYXN5bmMgKGJsb2NrOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCByYW5rZWRBcnRpY2xlc1Byb3BzID0gZXh0cmFjdENvbnRlbnRGcm9tRE9NKGJsb2NrKTtcblxuICBSZWFjdERPTS5jcmVhdGVSb290KGJsb2NrKS5yZW5kZXIoXG4gICAgPFN0cmljdE1vZGU+XG4gICAgICA8UmFua2VkQXJ0aWNsZXMgey4uLnJhbmtlZEFydGljbGVzUHJvcHN9IC8+XG4gICAgPC9TdHJpY3RNb2RlPixcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJhbmtlZC1hcnRpY2xlcy1iZy1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJhbmtlZC1hcnRpY2xlcy1iZy1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoIDw9IDU3NnB4KSB7XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLXRleHQgLnJhbmtlZC1hcnRpY2xlcy1sZWZ0IHtcbiAgZm9udC1zaXplOiAyMi43OHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItYm9sZCk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGggPj0gNTc2cHgpIGFuZCAod2lkdGggPD0gNzY3cHgpIHtcbiAgLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IC5yYW5rZWQtYXJ0aWNsZXMtbGVmdCB7XG4gICAgZm9udC1zaXplOiAyNS42M3B4O1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1sKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGggPj0gNzY4cHgpIHtcbiAgLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IC5yYW5rZWQtYXJ0aWNsZXMtbGVmdCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ib2R5LWZvbnQtc2l6ZS14bCk7XG4gIH1cbn1cbi5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtdGV4dCAucmFua2VkLWFydGljbGVzLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aCA8PSA3NjhweCkge1xuICAucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLXRleHQgLnJhbmtlZC1hcnRpY2xlcy1yaWdodCB7XG4gICAgZ2FwOiAzNXB4O1xuICB9XG59XG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLXRleHQgLnJhbmtlZC1hcnRpY2xlcy1yaWdodCAucmFua2VkLWFydGljbGVzLXZpZXcge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IC5yYW5rZWQtYXJ0aWNsZXMtcmlnaHQgLnJhbmtlZC1hcnRpY2xlcy1hcnJvdyBhIGltZyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IC5yYW5rZWQtYXJ0aWNsZXMtcmlnaHQgLnJhbmtlZC1hcnRpY2xlcy12aWV3IGEge1xuICBmb250LXNpemU6IHZhcigtLWJvZHktZm9udC1zaXplLXh4cyk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQtZmFtaWx5KTtcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC43MnB4O1xuICBsaW5lLWhlaWdodDogMjAuMTZweDtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy10ZXh0IC5yYW5rZWQtYXJ0aWNsZXMtcmlnaHQgLnJhbmtlZC1hcnRpY2xlcy12aWV3IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcmFua2VkLWFydGljbGVzLWxpbmstaG92ZXItY29sb3IpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aCA8PSA1NzZweCkge1xuICAucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLXRleHQgLnJhbmtlZC1hcnRpY2xlcy1yaWdodCAucmFua2VkLWFydGljbGVzLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCAzMnB4IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoID49IDU3NnB4KSB7XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cbn1cbi5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtaW1hZ2Uge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWltYWdlIGEgaW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC50ZXh0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBmbGV4OiAzO1xufVxuXG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC50ZXh0LXdyYXAgLnJhbmtlZC1hcnRpY2xlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgZm9udC1zaXplOiB2YXIoLS1ib2R5LWZvbnQtc2l6ZS1zKTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLXRpdGxlIGEge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ib2xkKTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWF1dGhvciBhIHtcbiAgZm9udC1zaXplOiB2YXIoLS1ib2R5LWZvbnQtc2l6ZS14eHMpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMpO1xuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XG59XG5cbi5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcy10aXRsZS5sb2NrIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtdGl0bGUubG9jayBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IHZhcigtLWxvY2stc3ZnKTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgYm90dG9tOiAtNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcy10aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXJhbmtlZC1hcnRpY2xlcy1saW5rLWhvdmVyLWNvbG9yKTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWF1dGhvciBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXJhbmtlZC1hcnRpY2xlcy1saW5rLWhvdmVyLWNvbG9yKTtcbn1cblxuLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWRhdGUge1xuICBjb2xvcjogIzZmNmY2ZjtcbiAgZm9udC1zaXplOiB2YXIoLS1ib2R5LWZvbnQtc2l6ZS14eHMpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMpO1xuICBmb250LWZhbWlseTogdmFyKC0tcmVndWxhci1mb250LXNpemUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aCA+PSA1NzdweCkgYW5kICh3aWR0aCA8PSAxMDI0cHgpIHtcbiAgLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcy1pbWFnZSB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtaW1hZ2UgYSBpbWcge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIgLnRleHQtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBmbGV4OiAzO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aCA8PSA1NzZweCkge1xuICAucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtaW1hZ2UgYSBpbWcge1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGggPj0gNTc3cHgpIGFuZCAod2lkdGggPD0gNzY3cHgpIHtcbiAgLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWltYWdlIGEgaW1nIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogNDZweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoID49IDc2OHB4KSBhbmQgKHdpZHRoIDw9IDg5OXB4KSB7XG4gIC5yYW5rZWQtYXJ0aWNsZXMtd3JhcHBlciAucmFua2VkLWFydGljbGVzIC53cmFwIC5yYW5rZWQtYXJ0aWNsZXMgLnJhbmtlZC1hcnRpY2xlcy1jb250ZXh0LXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcy1pbWFnZSBhIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWluLWhlaWdodDogMzdweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoID49IDkwMHB4KSBhbmQgKHdpZHRoIDw9IDEwMjNweCkge1xuICAucmFua2VkLWFydGljbGVzLXdyYXBwZXIgLnJhbmtlZC1hcnRpY2xlcyAud3JhcCAucmFua2VkLWFydGljbGVzIC5yYW5rZWQtYXJ0aWNsZXMtY29udGV4dC13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMtaW1hZ2UgYSBpbWcge1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgbWF4LWhlaWdodDogNTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aCA+PSAxMDI0cHgpIHtcbiAgLnJhbmtlZC1hcnRpY2xlcy13cmFwcGVyIC5yYW5rZWQtYXJ0aWNsZXMgLndyYXAgLnJhbmtlZC1hcnRpY2xlcyAucmFua2VkLWFydGljbGVzLWNvbnRleHQtd3JhcHBlciAucmFua2VkLWFydGljbGVzLWltYWdlIGEgaW1nIHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Jsb2Nrcy9yYW5rZWQtYXJ0aWNsZXMvcmFua2VkLWFydGljbGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFB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eHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmFua2VkLWFydGljbGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmFua2VkLWFydGljbGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJpY3RNb2RlIiwiUmVhY3RET00iLCJqc3hERVYiLCJfanN4REVWIiwiZXh0cmFjdENvbnRlbnRGcm9tRE9NIiwiYmxvY2siLCJkaXYiLCJxdWVyeVNlbGVjdG9yIiwiZmlsdGVyZWRCeSIsImlubmVyVGV4dCIsImZpbHRlcmVkQnlXb3JkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiZmlsdGVyQnkiLCJmaWx0ZXJCeVF1ZXJ5IiwiUmFua2VkQXJ0aWNsZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXlOYW1lIiwiZGVjb3JhdGUiLCJyYW5rZWRBcnRpY2xlc1Byb3BzIiwiY3JlYXRlUm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=