export const id = "blocks:cards";
export const ids = ["blocks:cards"];
export const modules = {

/***/ "./src/blocks/cards/cards.tsx":
/*!************************************!*\
  !*** ./src/blocks/cards/cards.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cards: () => (/* binding */ Cards),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.scss */ "./src/blocks/cards/cards.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/cards/cards.tsx";




const extractContentFromDOM = block => {
  const cards = [];
  [...block.children].forEach(row => {
    if (row.firstElementChild) {
      const firstChild = row.firstElementChild;
      const secondChild = firstChild.nextElementSibling;
      const imgSourceType = firstChild.querySelector("source").getAttribute("type");
      const imgSourceSrc = firstChild.querySelector("source").getAttribute("srcset");
      const img = firstChild.querySelector("img").getAttribute("src").replace("format=png", "format=webply");
      const text = firstChild.querySelector("p:nth-of-type(2)")?.innerHTML;
      const title = secondChild?.querySelector("p strong")?.innerHTML;
      const textBody = secondChild?.querySelector("p:nth-of-type(2)")?.innerHTML;
      const [firstButton, secondButton] = secondChild.querySelectorAll("p.button-container a");
      const firstButtonHref = firstButton.getAttribute("href");
      const firstButtonText = firstButton.innerHTML;
      const secondButtonHref = secondButton?.getAttribute("href");
      const secondButtonText = secondButton?.innerHTML;
      const card = {
        imageSide: {
          imgSourceType: imgSourceType,
          imgSourceSrc: imgSourceSrc,
          imgSrc: img,
          text
        },
        bodySide: {
          title: title,
          textBody: textBody,
          firstButtonHref: firstButtonHref,
          firstButtonText: firstButtonText,
          secondButtonHref: secondButtonHref,
          secondButtonText: secondButtonText
        }
      };
      cards.push(card);
    }
  });
  return {
    cards,
    showSecondButton: block.classList.contains("grid-3")
  };
};
const Cards = ({
  cards,
  showSecondButton
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "cards-container",
    children: cards?.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "cards-element",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "cards-card-image",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("picture", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("source", {
              type: card.imageSide.imgSourceType,
              srcSet: card.imageSide.imgSourceSrc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              loading: "lazy",
              alt: "",
              src: card.imageSide.imgSrc.replace("format=png", "format=webply")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: card.imageSide.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "cards-card-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
            children: card.bodySide.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: card.bodySide.textBody
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "button-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: card.bodySide.firstButtonHref,
            title: card.bodySide.firstButtonText,
            className: "button",
            children: card.bodySide.firstButtonText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, undefined), showSecondButton && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "button-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: card.bodySide.secondButtonHref,
            title: card.bodySide.secondButtonText,
            className: "button",
            children: card.bodySide.secondButtonText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, undefined);
};
Cards.displayName = "Cards";
const decorate = async block => {
  const cardsProps = extractContentFromDOM(block);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Cards, {
      ...cardsProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/cards/cards.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/cards/cards.scss ***!
  \******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.cards > .cards-container {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));
  grid-gap: 16px;
}
.cards > .cards-container > .cards-element {
  background-color: transparent;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.cards .cards-card-body {
  margin: 16px;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cards .cards-card-body p {
  margin: 0;
}
.cards .cards-card-body p:nth-of-type(2) {
  font-size: 16px;
  padding: 0 1rem 0.5rem;
  margin-bottom: auto;
}
.cards .cards-card-body a {
  margin: 0;
  border: 0.0625rem solid transparent;
  font-size: 16px;
  font-weight: 400;
  background-color: #f0ebe2;
  color: #484745;
  border-color: #484745;
  border-radius: 4px;
  min-width: 11.1875rem;
  padding: 0.5rem 0;
}
.cards .cards-card-body a:hover {
  text-decoration: none;
  background-color: var(--bg-color-red);
  color: #fff;
}
.cards .cards-card-image {
  line-height: 0;
}
.cards .cards-card-body > *:first-child {
  margin-top: 0;
}
.cards > .cards-container > .cards-element img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.cards.grid-3 > .cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px 30px;
}
.cards.grid-3 > .cards-container .cards-card-image {
  line-height: 0;
  position: relative;
}
.cards.grid-3 > .cards-container .cards-card-image p {
  margin: 0;
}
.cards.grid-3 > .cards-container .cards-card-image p:last-of-type {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.cards.grid-2 > .cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 30px;
}

/* Grid 3 */
/* Grid 2 */
@media (width <= 768px) {
  .cards.grid-3 > .cards-container, .cards.grid-2 > .cards-container {
    grid-template-columns: unset;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/cards/cards.scss"],"names":[],"mappings":"AACE;EACE,gBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,4DAAA;EACA,cAAA;AAAJ;AAEI;EACE,6BAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;AAAN;AAIE;EACE,YAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAFJ;AAII;EAOE,SAAA;AARN;AAEM;EACE,eAAA;EACA,sBAAA;EACA,mBAAA;AAAR;AAMI;EACE,SAAA;EACA,mCAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,qBAAA;EACA,iBAAA;AAJN;AAMM;EACE,qBAAA;EACA,qCAAA;EACA,WAAA;AAJR;AASE;EACE,cAAA;AAPJ;AAUE;EACE,aAAA;AARJ;AAWE;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;AATJ;AAYE;EACE,aAAA;EACA,kCAAA;EACA,mBAAA;AAVJ;AAYI;EACE,cAAA;EACA,kBAAA;AAVN;AAYM;EACE,SAAA;AAVR;AAYQ;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oCAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAVV;AAgBE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAdJ;;AAkBA,WAAA;AAEA,WAAA;AAEA;EAEI;IACE,4BAAA;EAlBJ;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/cards/cards.scss":
/*!*************************************!*\
  !*** ./src/blocks/cards/cards.scss ***!
  \*************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./cards.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/cards/cards.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cards_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./cards.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/cards/cards.tsx");
var __webpack_exports__Cards = __webpack_exports__.Cards;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__Cards as Cards, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSWtHO0FBQzFILE9BQU8saUVBQWUsNEhBQU8sSUFBSSw0SEFBTyxVQUFVLDRIQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2NhcmRzL2NhcmRzLnRzeCIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvY2FyZHMvY2FyZHMuc2NzcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvY2FyZHMvY2FyZHMuc2Nzcz82N2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vY2FyZHMuc2Nzc1wiO1xuXG50eXBlIENhcmRzUHJvcHMgPSB7XG4gIGNhcmRzOiBDYXJkW107XG4gIHNob3dTZWNvbmRCdXR0b246IGJvb2xlYW47XG59O1xuXG50eXBlIENhcmQgPSB7XG4gIGJvZHlTaWRlOiB7XG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICB0ZXh0Qm9keTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGZpcnN0QnV0dG9uVGV4dDogc3RyaW5nO1xuICAgIGZpcnN0QnV0dG9uSHJlZjogc3RyaW5nO1xuICAgIHNlY29uZEJ1dHRvbkhyZWY/OiBzdHJpbmcgfCBudWxsO1xuICAgIHNlY29uZEJ1dHRvblRleHQ/OiBzdHJpbmcgfCBudWxsO1xuICB9O1xuICBpbWFnZVNpZGU6IHtcbiAgICBpbWdTcmM6IHN0cmluZztcbiAgICBpbWdTb3VyY2VTcmM6IHN0cmluZztcbiAgICBpbWdTb3VyY2VUeXBlOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xufTtcblxuY29uc3QgZXh0cmFjdENvbnRlbnRGcm9tRE9NID0gKGJsb2NrOiBIVE1MRWxlbWVudCk6IENhcmRzUHJvcHMgPT4ge1xuICBjb25zdCBjYXJkczogQ2FyZFtdID0gW107XG5cbiAgWy4uLmJsb2NrLmNoaWxkcmVuXS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBpZiAocm93LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBjb25zdCBmaXJzdENoaWxkID0gcm93LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgY29uc3Qgc2Vjb25kQ2hpbGQgPSBmaXJzdENoaWxkLm5leHRFbGVtZW50U2libGluZyE7XG4gICAgICBjb25zdCBpbWdTb3VyY2VUeXBlID0gZmlyc3RDaGlsZFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcInNvdXJjZVwiKSFcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcInR5cGVcIikhO1xuICAgICAgY29uc3QgaW1nU291cmNlU3JjID0gZmlyc3RDaGlsZFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcInNvdXJjZVwiKSFcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcInNyY3NldFwiKSE7XG4gICAgICBjb25zdCBpbWcgPSBmaXJzdENoaWxkXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwic3JjXCIpIVxuICAgICAgICAucmVwbGFjZShcImZvcm1hdD1wbmdcIiwgXCJmb3JtYXQ9d2VicGx5XCIpITtcbiAgICAgIGNvbnN0IHRleHQgPSBmaXJzdENoaWxkLnF1ZXJ5U2VsZWN0b3IoXCJwOm50aC1vZi10eXBlKDIpXCIpPy5pbm5lckhUTUw7XG4gICAgICBjb25zdCB0aXRsZSA9IHNlY29uZENoaWxkPy5xdWVyeVNlbGVjdG9yKFwicCBzdHJvbmdcIik/LmlubmVySFRNTDtcbiAgICAgIGNvbnN0IHRleHRCb2R5ID1cbiAgICAgICAgc2Vjb25kQ2hpbGQ/LnF1ZXJ5U2VsZWN0b3IoXCJwOm50aC1vZi10eXBlKDIpXCIpPy5pbm5lckhUTUw7XG4gICAgICBjb25zdCBbZmlyc3RCdXR0b24sIHNlY29uZEJ1dHRvbl0gPSBzZWNvbmRDaGlsZC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcInAuYnV0dG9uLWNvbnRhaW5lciBhXCIsXG4gICAgICApO1xuICAgICAgY29uc3QgZmlyc3RCdXR0b25IcmVmID0gZmlyc3RCdXR0b24uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSE7XG4gICAgICBjb25zdCBmaXJzdEJ1dHRvblRleHQgPSBmaXJzdEJ1dHRvbi5pbm5lckhUTUw7XG4gICAgICBjb25zdCBzZWNvbmRCdXR0b25IcmVmID0gc2Vjb25kQnV0dG9uPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgY29uc3Qgc2Vjb25kQnV0dG9uVGV4dCA9IHNlY29uZEJ1dHRvbj8uaW5uZXJIVE1MO1xuXG4gICAgICBjb25zdCBjYXJkOiBDYXJkID0ge1xuICAgICAgICBpbWFnZVNpZGU6IHtcbiAgICAgICAgICBpbWdTb3VyY2VUeXBlOiBpbWdTb3VyY2VUeXBlLFxuICAgICAgICAgIGltZ1NvdXJjZVNyYzogaW1nU291cmNlU3JjLFxuICAgICAgICAgIGltZ1NyYzogaW1nLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlTaWRlOiB7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIHRleHRCb2R5OiB0ZXh0Qm9keSxcbiAgICAgICAgICBmaXJzdEJ1dHRvbkhyZWY6IGZpcnN0QnV0dG9uSHJlZixcbiAgICAgICAgICBmaXJzdEJ1dHRvblRleHQ6IGZpcnN0QnV0dG9uVGV4dCxcbiAgICAgICAgICBzZWNvbmRCdXR0b25IcmVmOiBzZWNvbmRCdXR0b25IcmVmLFxuICAgICAgICAgIHNlY29uZEJ1dHRvblRleHQ6IHNlY29uZEJ1dHRvblRleHQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgY2FyZHMucHVzaChjYXJkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FyZHMsXG4gICAgc2hvd1NlY29uZEJ1dHRvbjogYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZC0zXCIpLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IENhcmRzOiBSZWFjdC5GQzxDYXJkc1Byb3BzPiA9ICh7XG4gIGNhcmRzLFxuICBzaG93U2Vjb25kQnV0dG9uLFxufTogQ2FyZHNQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRzLWNvbnRhaW5lclwifT5cbiAgICAgIHtjYXJkcz8ubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYXJkcy1lbGVtZW50XCJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhcmRzLWNhcmQtaW1hZ2VcIn0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgPHNvdXJjZVxuICAgICAgICAgICAgICAgICAgdHlwZT17Y2FyZC5pbWFnZVNpZGUuaW1nU291cmNlVHlwZX1cbiAgICAgICAgICAgICAgICAgIHNyY1NldD17Y2FyZC5pbWFnZVNpZGUuaW1nU291cmNlU3JjfVxuICAgICAgICAgICAgICAgID48L3NvdXJjZT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkLmltYWdlU2lkZS5pbWdTcmMucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXQ9cG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0PXdlYnBseVwiLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57Y2FyZC5pbWFnZVNpZGUudGV4dH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FyZHMtY2FyZC1ib2R5XCJ9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2NhcmQuYm9keVNpZGUudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57Y2FyZC5ib2R5U2lkZS50ZXh0Qm9keX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17Y2FyZC5ib2R5U2lkZS5maXJzdEJ1dHRvbkhyZWZ9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2NhcmQuYm9keVNpZGUuZmlyc3RCdXR0b25UZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2FyZC5ib2R5U2lkZS5maXJzdEJ1dHRvblRleHR9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIHtzaG93U2Vjb25kQnV0dG9uICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtjYXJkLmJvZHlTaWRlLnNlY29uZEJ1dHRvbkhyZWYhfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2NhcmQuYm9keVNpZGUuc2Vjb25kQnV0dG9uVGV4dCF9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXJkLmJvZHlTaWRlLnNlY29uZEJ1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbkNhcmRzLmRpc3BsYXlOYW1lID0gXCJDYXJkc1wiO1xuXG5jb25zdCBkZWNvcmF0ZSA9IGFzeW5jIChibG9jazogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgY2FyZHNQcm9wcyA9IGV4dHJhY3RDb250ZW50RnJvbURPTShibG9jayk7XG5cbiAgUmVhY3RET00uY3JlYXRlUm9vdChibG9jaykucmVuZGVyKFxuICAgIDxTdHJpY3RNb2RlPlxuICAgICAgPENhcmRzIHsuLi5jYXJkc1Byb3BzfSAvPlxuICAgIDwvU3RyaWN0TW9kZT4sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2FyZHMgPiAuY2FyZHMtY29udGFpbmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNzhweCwgMWZyKSk7XG4gIGdyaWQtZ2FwOiAxNnB4O1xufVxuLmNhcmRzID4gLmNhcmRzLWNvbnRhaW5lciA+IC5jYXJkcy1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jYXJkcyAuY2FyZHMtY2FyZC1ib2R5IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZHMgLmNhcmRzLWNhcmQtYm9keSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmRzIC5jYXJkcy1jYXJkLWJvZHkgcDpudGgtb2YtdHlwZSgyKSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxcmVtIDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jYXJkcyAuY2FyZHMtY2FyZC1ib2R5IGEge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGViZTI7XG4gIGNvbG9yOiAjNDg0NzQ1O1xuICBib3JkZXItY29sb3I6ICM0ODQ3NDU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLXdpZHRoOiAxMS4xODc1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cbi5jYXJkcyAuY2FyZHMtY2FyZC1ib2R5IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXJlZCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmRzIC5jYXJkcy1jYXJkLWltYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG4uY2FyZHMgLmNhcmRzLWNhcmQtYm9keSA+ICo6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNhcmRzID4gLmNhcmRzLWNvbnRhaW5lciA+IC5jYXJkcy1lbGVtZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDQvMztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2FyZHMuZ3JpZC0zID4gLmNhcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAyNHB4IDMwcHg7XG59XG4uY2FyZHMuZ3JpZC0zID4gLmNhcmRzLWNvbnRhaW5lciAuY2FyZHMtY2FyZC1pbWFnZSB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZHMuZ3JpZC0zID4gLmNhcmRzLWNvbnRhaW5lciAuY2FyZHMtY2FyZC1pbWFnZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmRzLmdyaWQtMyA+IC5jYXJkcy1jb250YWluZXIgLmNhcmRzLWNhcmQtaW1hZ2UgcDpsYXN0LW9mLXR5cGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZHMuZ3JpZC0yID4gLmNhcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDI0cHggMzBweDtcbn1cblxuLyogR3JpZCAzICovXG4vKiBHcmlkIDIgKi9cbkBtZWRpYSAod2lkdGggPD0gNzY4cHgpIHtcbiAgLmNhcmRzLmdyaWQtMyA+IC5jYXJkcy1jb250YWluZXIsIC5jYXJkcy5ncmlkLTIgPiAuY2FyZHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHVuc2V0O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYmxvY2tzL2NhcmRzL2NhcmRzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtBQUFKO0FBRUk7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFJRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSUk7RUFPRSxTQUFBO0FBUk47QUFFTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFNSTtFQUNFLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBSk47QUFNTTtFQUNFLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FBSlI7QUFTRTtFQUNFLGNBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtBQVJKO0FBV0U7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFWTjtBQVlNO0VBQ0UsU0FBQTtBQVZSO0FBWVE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBVlY7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWtCQSxXQUFBO0FBRUEsV0FBQTtBQUVBO0VBRUk7SUFDRSw0QkFBQTtFQWxCSjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJkcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcmRzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJpY3RNb2RlIiwiUmVhY3RET00iLCJqc3hERVYiLCJfanN4REVWIiwiZXh0cmFjdENvbnRlbnRGcm9tRE9NIiwiYmxvY2siLCJjYXJkcyIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInJvdyIsImZpcnN0RWxlbWVudENoaWxkIiwiZmlyc3RDaGlsZCIsInNlY29uZENoaWxkIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW1nU291cmNlVHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJpbWdTb3VyY2VTcmMiLCJpbWciLCJyZXBsYWNlIiwidGV4dCIsImlubmVySFRNTCIsInRpdGxlIiwidGV4dEJvZHkiLCJmaXJzdEJ1dHRvbiIsInNlY29uZEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEJ1dHRvbkhyZWYiLCJmaXJzdEJ1dHRvblRleHQiLCJzZWNvbmRCdXR0b25IcmVmIiwic2Vjb25kQnV0dG9uVGV4dCIsImNhcmQiLCJpbWFnZVNpZGUiLCJpbWdTcmMiLCJib2R5U2lkZSIsInB1c2giLCJzaG93U2Vjb25kQnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJDYXJkcyIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwidHlwZSIsInNyY1NldCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImxvYWRpbmciLCJhbHQiLCJzcmMiLCJocmVmIiwiZGlzcGxheU5hbWUiLCJkZWNvcmF0ZSIsImNhcmRzUHJvcHMiLCJjcmVhdGVSb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==