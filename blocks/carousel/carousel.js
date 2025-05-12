export const id = "blocks:carousel";
export const ids = ["blocks:carousel"];
export const modules = {

/***/ "./src/blocks/carousel/carousel.tsx":
/*!******************************************!*\
  !*** ./src/blocks/carousel/carousel.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.scss */ "./src/blocks/carousel/carousel.scss");
/* harmony import */ var _scripts_aem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scripts/aem.js */ "../scripts/aem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/carousel/carousel.tsx";





const Carousel = ({
  block,
  blockConfig
}) => {
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [carouselData, setCarouselData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isPrevDisabled, setIsPrevDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [isNextDisabled, setIsNextDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const maxScrollWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const carousel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTitle(blockConfig?.title);
    fetch(blockConfig?.service).then(res => res.json()).then(json => {
      const carouselItems = json.data;
      setCarouselData(carouselItems);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
  }, []);
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };
  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  const isDisabled = direction => {
    if (direction === 'prev') {
      setIsPrevDisabled(currentIndex <= 0);
      return currentIndex <= 0;
    }
    if (direction === 'next' && carousel.current !== null && currentIndex > 0) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }
    return false;
  };
  const carouselElements = carouselData?.map((item, index) => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "slider-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        href: item.url,
        children: [item.bestseller ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "best-seller",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            children: "Best Seller"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, undefined) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "slider-image",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "image-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("picture", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("source", {
                type: "image/webp",
                srcSet: item.image + "?width=200&amp;format=webply&amp;optimize=medium"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 29
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                loading: "eager",
                alt: item.name,
                src: item.image + "?width=200&amp;format=webply&amp;optimize=medium",
                width: "200",
                height: "200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "slider-text",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("strong", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 46
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "price",
          children: item.price
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, undefined)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 16
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "default-content-wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        id: "new-arrivalstop-picks",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      className: 'slider',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "slider-control prev",
        onClick: movePrev,
        disabled: isDisabled('prev'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          className: "gg-chevron-left-o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 104
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        className: "slider-control next",
        onClick: moveNext,
        disabled: isDisabled('next'),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
          className: "gg-chevron-right-o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 104
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "slider-container",
        "data-multislide": "false",
        "data-step": "sm",
        ref: carousel,
        children: carouselElements
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};
Carousel.displayName = "Carousel";
const decorate = async block => {
  const blockConfig = (0,_scripts_aem_js__WEBPACK_IMPORTED_MODULE_3__.readBlockConfig)(block);
  block.parentElement.classList.add('section');
  block.parentElement.classList.add('carousel-container');
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Carousel, {
      block: block,
      blockConfig: blockConfig
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 9
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/carousel/carousel.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/carousel/carousel.scss ***!
  \************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.carousel .slider {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.carousel .slider-container {
  cursor: grab;
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
.carousel .slider-container.dragging {
  scroll-behavior: auto;
  cursor: grabbing;
}
.carousel .slider-item {
  box-sizing: border-box;
  padding: 12px;
  flex: 0 0 auto;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel .slider-image {
  width: fit-content;
}
.carousel .slider-container[data-step=sm] .slider-item {
  max-width: 100%;
}
.carousel .slider-control {
  border: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #FFF 0 0 no-repeat padding-box;
  box-shadow: 0 4px 8px rgba(38, 38, 38, 0.1);
  border-radius: 40px;
  z-index: 1;
  position: absolute;
  line-height: 0;
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
}
.carousel .slider-control.prev {
  left: 0;
}
.carousel .slider-control.next {
  right: 0;
}
.carousel .slider-control.prev[disabled=true], .carousel .slider-control.next[disabled=true] {
  background-color: var(--color-neutral-200);
}
.carousel .slider-item a {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(72, 71, 69);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px rgba(38, 38, 38, 0.1019607843);
  width: 100%;
  height: 100%;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
}
.carousel .slider-item a:hover {
  border: 1.5px solid black;
}
.carousel .slider-item .best-seller {
  position: absolute;
  top: 0;
  left: 0;
  background: #34302b;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 0 0 2px 0;
  padding: 2px 8px;
}
.carousel .slider-item a .price {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  font-size: 18px;
  width: 100%;
  font-weight: 500;
}
.carousel .slider-item a .price span {
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0rem;
  padding: 0.25rem;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-left: 0.75rem;
  color: var(--color-white);
  background-color: var(--color-red);
}
.carousel .slider-item a:hover {
  text-decoration: none;
}
.carousel .slider-item img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  --webkit-user-select:none;
}
.carousel .slider-item .image-wrapper {
  margin: 0 auto;
}
.carousel .slider-item picture img {
  border-radius: 5px;
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.carousel .slider-text {
  border-radius: 5px;
  text-align: start;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  text-align: left;
}
.carousel .slider-text p {
  margin: 0 5px;
  padding: 5px;
  display: contents;
}
.carousel .slider-text a {
  font-size: inherit;
  width: 100%;
}
.carousel .slider-text a:hover {
  color: inherit;
}
.carousel .gg-chevron-right-o, .carousel .gg-chevron-left-o {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
}
.carousel .gg-chevron-right-o::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  border-bottom: 1.5px solid;
  border-right: 1.5px solid;
  transform: translate(-50%, -50%) rotate(-45deg);
  left: 50%;
  top: 50%;
}
.carousel .gg-chevron-left-o::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  border-bottom: 1.5px solid;
  border-left: 1.5px solid;
  transform: translate(-50%, -50%) rotate(45deg);
  left: 50%;
  top: 50%;
}
.carousel .slider-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.carousel .slider-dot {
  width: 10px;
  height: 10px;
  background-color: var(--color-brand-700);
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.carousel .slider-dot.active {
  background-color: var(--color-brand-500);
}
.carousel .slider-container.dragging a {
  pointer-events: none;
}

@media (width <= 768px) {
  .carousel .slider-item picture img {
    width: revert-layer;
  }
}
/* icons */
@media (width >= 768px) {
  .carousel .slider-container[data-step=sm] .slider-item {
    max-width: 33.3333333333%;
  }
}
@media (width >= 1024px) {
  .carousel .slider-container[data-step=sm] .slider-item {
    max-width: 25%;
  }
}
@media (width >= 1440px) {
  .carousel .slider-container[data-step=sm] .slider-item {
    max-width: 20%;
  }
}
@media (width >= 1900px) {
  .carousel .slider-container[data-step=sm] .slider-item {
    max-width: 16.6666666667%;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/carousel/carousel.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/carousel/carousel.scss":
/*!*******************************************!*\
  !*** ./src/blocks/carousel/carousel.scss ***!
  \*******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./carousel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/carousel/carousel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_carousel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./carousel.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/carousel/carousel.tsx");
var __webpack_exports__Carousel = __webpack_exports__.Carousel;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__Carousel as Carousel, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0dBQW9HLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLHNCQUFzQjtBQUNqcUU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUHZDLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTJKO0FBQzNKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsK0hBQU87Ozs7QUFJcUc7QUFDN0gsT0FBTyxpRUFBZSwrSEFBTyxJQUFJLCtIQUFPLFVBQVUsK0hBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvY2Fyb3VzZWwvY2Fyb3VzZWwudHN4Iiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9jYXJvdXNlbC9jYXJvdXNlbC5zY3NzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vc3JjL2Jsb2Nrcy9jYXJvdXNlbC9jYXJvdXNlbC5zY3NzP2FkZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7U3RyaWN0TW9kZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9jYXJvdXNlbC5zY3NzXCI7XG5pbXBvcnQge3JlYWRCbG9ja0NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uLy4uL3NjcmlwdHMvYWVtLmpzXCI7XG5cbnR5cGUgQ2Fyb3VzZWxQcm9wcyA9IHtcbiAgICBibG9jazogSFRNTEVsZW1lbnQ7XG4gICAgYmxvY2tDb25maWc6IFtdO1xufVxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWw6ICh7YmxvY2ssIGJsb2NrQ29uZmlnfTogQ2Fyb3VzZWxQcm9wcykgPT4gdm9pZCA9ICh7YmxvY2ssIGJsb2NrQ29uZmlnfTogQ2Fyb3VzZWxQcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2Nhcm91c2VsRGF0YSwgc2V0Q2Fyb3VzZWxEYXRhXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtpc1ByZXZEaXNhYmxlZCwgc2V0SXNQcmV2RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2lzTmV4dERpc2FibGVkLCBzZXRJc05leHREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWF4U2Nyb2xsV2lkdGggPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGNhcm91c2VsID0gdXNlUmVmKG51bGwpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUaXRsZShibG9ja0NvbmZpZz8udGl0bGUpO1xuICAgICAgICBmZXRjaChibG9ja0NvbmZpZz8uc2VydmljZSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcm91c2VsSXRlbXMgPSBqc29uLmRhdGE7XG4gICAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWxEYXRhKGNhcm91c2VsSXRlbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNhcm91c2VsICE9PSBudWxsICYmIGNhcm91c2VsLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhcm91c2VsLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IGNhcm91c2VsLmN1cnJlbnQub2Zmc2V0V2lkdGggKiBjdXJyZW50SW5kZXg7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudEluZGV4XSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBtYXhTY3JvbGxXaWR0aC5jdXJyZW50ID0gY2Fyb3VzZWwuY3VycmVudFxuICAgICAgICAgICAgPyBjYXJvdXNlbC5jdXJyZW50LnNjcm9sbFdpZHRoIC0gY2Fyb3VzZWwuY3VycmVudC5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgOiAwO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG1vdmVQcmV2ID0gKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSAtIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdmVOZXh0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjYXJvdXNlbC5jdXJyZW50ICE9PSBudWxsICYmXG4gICAgICAgICAgICBjYXJvdXNlbC5jdXJyZW50Lm9mZnNldFdpZHRoICogY3VycmVudEluZGV4IDw9IG1heFNjcm9sbFdpZHRoLmN1cnJlbnRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICBzZXRJc1ByZXZEaXNhYmxlZChjdXJyZW50SW5kZXggPD0gMCk7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEluZGV4IDw9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcgJiYgY2Fyb3VzZWwuY3VycmVudCAhPT0gbnVsbCAmJiBjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGNhcm91c2VsLmN1cnJlbnQub2Zmc2V0V2lkdGggKiBjdXJyZW50SW5kZXggPj0gbWF4U2Nyb2xsV2lkdGguY3VycmVudFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2Fyb3VzZWxFbGVtZW50cyA9IGNhcm91c2VsRGF0YT8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGEgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmJlc3RzZWxsZXIgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVzdC1zZWxsZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QmVzdCBTZWxsZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PXtpdGVtLmltYWdlICsgXCI/d2lkdGg9MjAwJmFtcDtmb3JtYXQ9d2VicGx5JmFtcDtvcHRpbWl6ZT1tZWRpdW1cIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz1cImVhZ2VyXCIgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2UgKyBcIj93aWR0aD0yMDAmYW1wO2Zvcm1hdD13ZWJwbHkmYW1wO29wdGltaXplPW1lZGl1bVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIi8+PC9waWN0dXJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci10ZXh0XCI+PHN0cm9uZz57aXRlbS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj57aXRlbS5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWZhdWx0LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMyBpZD1cIm5ldy1hcnJpdmFsc3RvcC1waWNrc1wiPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9eydzbGlkZXInfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXItY29udHJvbCBwcmV2XCIgb25DbGljaz17bW92ZVByZXZ9IGRpc2FibGVkPXtpc0Rpc2FibGVkKCdwcmV2Jyl9PjxpIGNsYXNzTmFtZT1cImdnLWNoZXZyb24tbGVmdC1vXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXItY29udHJvbCBuZXh0XCIgb25DbGljaz17bW92ZU5leHR9IGRpc2FibGVkPXtpc0Rpc2FibGVkKCduZXh0Jyl9PjxpIGNsYXNzTmFtZT1cImdnLWNoZXZyb24tcmlnaHQtb1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCIgZGF0YS1tdWx0aXNsaWRlPVwiZmFsc2VcIiBkYXRhLXN0ZXA9XCJzbVwiIHJlZj17Y2Fyb3VzZWx9PlxuICAgICAgICAgICAgICAgICAgICB7Y2Fyb3VzZWxFbGVtZW50c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcblxufVxuQ2Fyb3VzZWwuZGlzcGxheU5hbWUgPSBcIkNhcm91c2VsXCI7XG5cbmNvbnN0IGRlY29yYXRlID0gYXN5bmMgKGJsb2NrOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrQ29uZmlnID0gcmVhZEJsb2NrQ29uZmlnKGJsb2NrKTtcbiAgICBibG9jay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgICBibG9jay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsLWNvbnRhaW5lcicpO1xuXG4gICAgUmVhY3RET00uY3JlYXRlUm9vdChibG9jaykucmVuZGVyKFxuICAgICAgICA8U3RyaWN0TW9kZT5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBibG9jaz17YmxvY2t9IGJsb2NrQ29uZmlnPXtibG9ja0NvbmZpZ30vPlxuICAgICAgICA8L1N0cmljdE1vZGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29yYXRlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jYXJvdXNlbCAuc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWNvbnRhaW5lciB7XG4gIGN1cnNvcjogZ3JhYjtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1jb250YWluZXIuZHJhZ2dpbmcge1xuICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1pdGVtIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweDtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcm91c2VsIC5zbGlkZXItaW1hZ2Uge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1jb250YWluZXJbZGF0YS1zdGVwPXNtXSAuc2xpZGVyLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1jb250cm9sIHtcbiAgYm9yZGVyOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGIDAgMCBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDM4LCAzOCwgMzgsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xufVxuLmNhcm91c2VsIC5zbGlkZXItY29udHJvbC5wcmV2IHtcbiAgbGVmdDogMDtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWNvbnRyb2wubmV4dCB7XG4gIHJpZ2h0OiAwO1xufVxuLmNhcm91c2VsIC5zbGlkZXItY29udHJvbC5wcmV2W2Rpc2FibGVkPXRydWVdLCAuY2Fyb3VzZWwgLnNsaWRlci1jb250cm9sLm5leHRbZGlzYWJsZWQ9dHJ1ZV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uZXV0cmFsLTIwMCk7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1pdGVtIGEge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgY29sb3I6IHJnYig3MiwgNzEsIDY5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgzOCwgMzgsIDM4LCAwLjEwMTk2MDc4NDMpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcm91c2VsIC5zbGlkZXItaXRlbSBhOmhvdmVyIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWl0ZW0gLmJlc3Qtc2VsbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMzNDMwMmI7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMDtcbiAgcGFkZGluZzogMnB4IDhweDtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWl0ZW0gYSAucHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1pdGVtIGEgLnByaWNlIHNwYW4ge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWl0ZW0gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWl0ZW0gaW1nIHtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XG4gIC1tb3otdXNlci1kcmFnOiBub25lO1xuICAtby11c2VyLWRyYWc6IG5vbmU7XG4gIC0td2Via2l0LXVzZXItc2VsZWN0Om5vbmU7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1pdGVtIC5pbWFnZS13cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1pdGVtIHBpY3R1cmUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uY2Fyb3VzZWwgLnNsaWRlci10ZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLXRleHQgcCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci10ZXh0IGEge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcm91c2VsIC5zbGlkZXItdGV4dCBhOmhvdmVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uY2Fyb3VzZWwgLmdnLWNoZXZyb24tcmlnaHQtbywgLmNhcm91c2VsIC5nZy1jaGV2cm9uLWxlZnQtbyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uY2Fyb3VzZWwgLmdnLWNoZXZyb24tcmlnaHQtbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xufVxuLmNhcm91c2VsIC5nZy1jaGV2cm9uLWxlZnQtbzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJvdXNlbCAuc2xpZGVyLWRvdCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTcwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcm91c2VsIC5zbGlkZXItZG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyYW5kLTUwMCk7XG59XG4uY2Fyb3VzZWwgLnNsaWRlci1jb250YWluZXIuZHJhZ2dpbmcgYSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDc2OHB4KSB7XG4gIC5jYXJvdXNlbCAuc2xpZGVyLWl0ZW0gcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiByZXZlcnQtbGF5ZXI7XG4gIH1cbn1cbi8qIGljb25zICovXG5AbWVkaWEgKHdpZHRoID49IDc2OHB4KSB7XG4gIC5jYXJvdXNlbCAuc2xpZGVyLWNvbnRhaW5lcltkYXRhLXN0ZXA9c21dIC5zbGlkZXItaXRlbSB7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA+PSAxMDI0cHgpIHtcbiAgLmNhcm91c2VsIC5zbGlkZXItY29udGFpbmVyW2RhdGEtc3RlcD1zbV0gLnNsaWRlci1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA+PSAxNDQwcHgpIHtcbiAgLmNhcm91c2VsIC5zbGlkZXItY29udGFpbmVyW2RhdGEtc3RlcD1zbV0gLnNsaWRlci1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA+PSAxOTAwcHgpIHtcbiAgLmNhcm91c2VsIC5zbGlkZXItY29udGFpbmVyW2RhdGEtc3RlcD1zbV0gLnNsaWRlci1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYmxvY2tzL2Nhcm91c2VsL2Nhcm91c2VsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREo7QUFHSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtB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cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJvdXNlbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RyaWN0TW9kZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUmVhY3RET00iLCJyZWFkQmxvY2tDb25maWciLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJDYXJvdXNlbCIsImJsb2NrIiwiYmxvY2tDb25maWciLCJ0aXRsZSIsInNldFRpdGxlIiwiY2Fyb3VzZWxEYXRhIiwic2V0Q2Fyb3VzZWxEYXRhIiwiaXNQcmV2RGlzYWJsZWQiLCJzZXRJc1ByZXZEaXNhYmxlZCIsImlzTmV4dERpc2FibGVkIiwic2V0SXNOZXh0RGlzYWJsZWQiLCJtYXhTY3JvbGxXaWR0aCIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNhcm91c2VsIiwiZmV0Y2giLCJzZXJ2aWNlIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXJvdXNlbEl0ZW1zIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsIm1vdmVQcmV2IiwicHJldlN0YXRlIiwibW92ZU5leHQiLCJpc0Rpc2FibGVkIiwiZGlyZWN0aW9uIiwiY2Fyb3VzZWxFbGVtZW50cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaHJlZiIsInVybCIsImJlc3RzZWxsZXIiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0eXBlIiwic3JjU2V0IiwiaW1hZ2UiLCJsb2FkaW5nIiwiYWx0IiwibmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicHJpY2UiLCJpZCIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInJlZiIsImRpc3BsYXlOYW1lIiwiZGVjb3JhdGUiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlUm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=