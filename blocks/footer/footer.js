export const id = "blocks:footer";
export const ids = ["blocks:footer"];
export const modules = {

/***/ "../blocks/fragment/fragment.js":
/*!**************************************!*\
  !*** ../blocks/fragment/fragment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ decorate),
/* harmony export */   loadFragment: () => (/* binding */ loadFragment)
/* harmony export */ });
/* harmony import */ var _scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/_scripts.js */ "../scripts/_scripts.js");
/* harmony import */ var _scripts_aem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scripts/aem.js */ "../scripts/aem.js");
/*
 * Fragment Block
 * Include content on a page as a fragment.
 * https://www.aem.live/developer/block-collection/fragment
 */





/**
 * Loads a fragment.
 * @param {string} path The path to the fragment
 * @returns {Promise<HTMLElement>} The root element of the fragment
 */
async function loadFragment(path) {
  if (path && path.startsWith('/')) {
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();

      // reset base path for media to fragment base
      const resetAttributeBase = (tag, attr) => {
        main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
          elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
        });
      };
      resetAttributeBase('img', 'src');
      resetAttributeBase('source', 'srcset');

      (0,_scripts_scripts_js__WEBPACK_IMPORTED_MODULE_0__.decorateMain)(main);
      await (0,_scripts_aem_js__WEBPACK_IMPORTED_MODULE_1__.loadBlocks)(main);
      return main;
    }
  }
  return null;
}

async function decorate(block) {
  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  const fragment = await loadFragment(path);
  if (fragment) {
    const fragmentSection = fragment.querySelector(':scope .section');
    if (fragmentSection) {
      block.closest('.section').classList.add(...fragmentSection.classList);
      block.closest('.fragment').replaceWith(...fragment.childNodes);
    }
  }
}


/***/ }),

/***/ "./src/blocks/footer/footer.tsx":
/*!**************************************!*\
  !*** ./src/blocks/footer/footer.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _scripts_aem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scripts/aem.js */ "../scripts/aem.js");
/* harmony import */ var _blocks_fragment_fragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/fragment/fragment.js */ "../blocks/fragment/fragment.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.scss */ "./src/blocks/footer/footer.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/footer/footer.tsx";






const CLASS_NAME = "className";
const SRC_SET = "srcSet";
const STYLE = "style";
const COLEMAN_URL = "https://www.coleman.com/";
var TagName = /*#__PURE__*/function (TagName) {
  TagName["P"] = "P";
  TagName["PICTURE"] = "PICTURE";
  TagName["IMG"] = "IMG";
  TagName["SOURCE"] = "SOURCE";
  return TagName;
}(TagName || {});
const countryFlags = {
  "United States": "/icons/american-flag.svg"
};
const Footer = ({
  footerFragment
}) => {
  const [firstImageRendered, setFirstImageRendered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const mapAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    return Array.from(element.attributes).reduce((acc, attr) => {
      let name = attr.name;
      if (name === "class") name = CLASS_NAME;
      if (name === "srcset") name = SRC_SET;
      if (name === STYLE) {
        acc[name] = parseStyle(attr.value);
      } else {
        acc[name] = attr.value;
      }
      return acc;
    }, {});
  }, []);
  const parseStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(style => {
    return style.split(";").filter(style => style.trim()).reduce((styleObj, style) => {
      const [key, value] = style.split(":").map(s => s.trim());
      if (key && value) {
        const camelCaseKey = key.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        styleObj[camelCaseKey] = value;
      }
      return styleObj;
    }, {});
  }, []);
  const renderCountryFlag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((countryName, key) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      className: "icon icon-country-flag",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        "data-icon-name": `${countryName.toLowerCase().replace(" ", "-")}-flag`,
        src: countryFlags[countryName],
        alt: `${countryName} Flag`,
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, undefined), countryName]
  }, key, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 7
  }, undefined), []);
  const renderContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node, key) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node;
      const attributes = mapAttributes(element);
      if (element.tagName === TagName.P) {
        const countryName = element.textContent?.trim();
        if (countryName && countryFlags[countryName]) {
          return renderCountryFlag(countryName, key);
        }
      }
      if (element.tagName === TagName.PICTURE && !firstImageRendered) {
        setFirstImageRendered(true);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          href: COLEMAN_URL,
          children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(element.tagName.toLowerCase(), {
            ...attributes,
            key
          }, Array.from(element.childNodes).map((child, idx) => renderContent(child, `${key}-${idx}`)))
        }, `link-${key}`, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, undefined);
      }
      if ([TagName.IMG, TagName.SOURCE].includes(element.tagName)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(element.tagName.toLowerCase(), {
          ...attributes,
          key
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(element.tagName.toLowerCase(), {
        ...attributes,
        key
      }, Array.from(element.childNodes).map((child, idx) => renderContent(child, `${key}-${idx}`)));
    } else if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }
    return null;
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: Array.from(footerFragment.children).map((child, index) => renderContent(child, `footer-child-${index}`))
  }, void 0, false);
};
Footer.displayName = "Footer";
const decorate = async block => {
  const footerMeta = (0,_scripts_aem_js__WEBPACK_IMPORTED_MODULE_2__.getMetadata)("footer");
  const footerPath = footerMeta ? new URL(footerMeta).pathname : "/footer";
  const footerFragment = await (0,_blocks_fragment_fragment_js__WEBPACK_IMPORTED_MODULE_3__.loadFragment)(footerPath);
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Footer, {
      footerFragment: footerFragment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/footer/footer.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/footer/footer.scss ***!
  \********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `footer {
  padding: 2rem;
  background-color: #484745;
  font-size: var(--body-font-size-s);
  width: 100%;
  box-sizing: border-box;
}
footer .footer {
  max-width: 1440px;
  margin: auto;
  color: #fff;
}
footer .footer p {
  margin: 0;
}
footer .footer a {
  color: #fff;
}
footer .footer .default-content-wrapper > ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  gap: 1rem;
}
footer .footer .default-content-wrapper > ul > li {
  font-size: 16px;
  font-weight: 700;
}
footer .footer div.section:nth-of-type(2) {
  margin-top: 5rem;
}
footer .footer div.section:nth-of-type(2) .default-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
footer .footer div.section:nth-of-type(2) .default-content-wrapper p {
  font-size: 12px;
  font-weight: 400;
}
footer .footer div.section:nth-of-type(2) .default-content-wrapper p:first-of-type img {
  height: 40px;
  width: auto;
  object-fit: contain;
}
footer .footer div.section:nth-of-type(2) .default-content-wrapper p:nth-of-type(2) {
  margin-left: 3rem;
  margin-right: auto;
}
footer .footer div.section:nth-of-type(2) .default-content-wrapper p:last-of-type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
}
@media (min-width: 660px) and (max-width: 860px) {
  footer .footer .default-content-wrapper ul {
    flex-direction: column;
  }
}
@media (max-width: 659px) {
  footer .footer .default-content-wrapper ul {
    flex-direction: column;
  }
  footer .footer div.section:nth-of-type(2) .default-content-wrapper {
    flex-direction: column;
  }
  footer .footer div.section:nth-of-type(2) .default-content-wrapper p:nth-of-type(2) {
    margin: 0 auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/footer/footer.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,yBAAA;EACA,kCAAA;EACA,WAAA;EACA,sBAAA;AACF;AACE;EACE,iBAAA;EACA,YAAA;EACA,WAAA;AACJ;AACI;EACE,SAAA;AACN;AAEI;EACE,WAAA;AAAN;AAIM;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;AAFR;AAIQ;EACE,eAAA;EACA,gBAAA;AAFV;AAOI;EACE,gBAAA;AALN;AAOM;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AALR;AAOQ;EACE,eAAA;EACA,gBAAA;AALV;AAOU;EACE,YAAA;EACA,WAAA;EACA,mBAAA;AALZ;AAQU;EACE,iBAAA;EACA,kBAAA;AANZ;AASU;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AAPZ;AAcE;EAGM;IACE,sBAAA;EAdR;AACF;AAmBE;EAGM;IACE,sBAAA;EAnBR;EAwBM;IACE,sBAAA;EAtBR;EAwBU;IACE,cAAA;EAtBZ;AACF","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/footer/footer.scss":
/*!***************************************!*\
  !*** ./src/blocks/footer/footer.scss ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../scripts/_scripts.js":
/*!******************************!*\
  !*** ../scripts/_scripts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decorateMain: () => (/* binding */ decorateMain)
/* harmony export */ });
/* harmony import */ var _aem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aem.js */ "../scripts/aem.js");


/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append((0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.buildBlock)('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadCSS)(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
function decorateMain(main) {
  // hopefully forward compatible button decoration
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.decorateButtons)(main);
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.decorateIcons)(main);
  buildAutoBlocks(main);
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.decorateSections)(main);
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.decorateBlocks)(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.decorateTemplateAndTheme)();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadSection)(main.querySelector('.section'), _aem_js__WEBPACK_IMPORTED_MODULE_0__.waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadSections)(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)(doc.querySelector('header'));
  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadFooter)(doc.querySelector('footer'));

  (0,_aem_js__WEBPACK_IMPORTED_MODULE_0__.loadCSS)(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(
    () =>
      import(
        /* webpackIgnore: true */
        `${window.hlx.codeBasePath}/scripts/delayed.js`
      ),
    3000,
  );
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();


/***/ })

};
;

// load runtime
import __webpack_require__ from "../../scripts/bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./footer.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/footer/footer.tsx");
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNPO0FBQ1A7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCLEVBQUUsc0RBQWE7QUFDZjtBQUNBLEVBQUUseURBQWdCO0FBQ2xCLEVBQUUsdURBQWM7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUF3QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQVcsaUNBQWlDLHNEQUFpQjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVk7O0FBRXBCLFVBQVUsT0FBTztBQUNqQjtBQUNBOztBQUVBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaLEVBQUUsZ0RBQU8sSUFBSSx3QkFBd0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4uL2Jsb2Nrcy9mcmFnbWVudC9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzPzc3OWIiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi4vc2NyaXB0cy9fc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRnJhZ21lbnQgQmxvY2tcbiAqIEluY2x1ZGUgY29udGVudCBvbiBhIHBhZ2UgYXMgYSBmcmFnbWVudC5cbiAqIGh0dHBzOi8vd3d3LmFlbS5saXZlL2RldmVsb3Blci9ibG9jay1jb2xsZWN0aW9uL2ZyYWdtZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgZGVjb3JhdGVNYWluLFxufSBmcm9tICcuLi8uLi9zY3JpcHRzL19zY3JpcHRzLmpzJztcblxuaW1wb3J0IHtcbiAgbG9hZEJsb2Nrcyxcbn0gZnJvbSAnLi4vLi4vc2NyaXB0cy9hZW0uanMnO1xuXG4vKipcbiAqIExvYWRzIGEgZnJhZ21lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZnJhZ21lbnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxFbGVtZW50Pn0gVGhlIHJvb3QgZWxlbWVudCBvZiB0aGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRGcmFnbWVudChwYXRoKSB7XG4gIGlmIChwYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke3BhdGh9LnBsYWluLmh0bWxgKTtcbiAgICBpZiAocmVzcC5vaykge1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gYXdhaXQgcmVzcC50ZXh0KCk7XG5cbiAgICAgIC8vIHJlc2V0IGJhc2UgcGF0aCBmb3IgbWVkaWEgdG8gZnJhZ21lbnQgYmFzZVxuICAgICAgY29uc3QgcmVzZXRBdHRyaWJ1dGVCYXNlID0gKHRhZywgYXR0cikgPT4ge1xuICAgICAgICBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFnfVske2F0dHJ9Xj1cIi4vbWVkaWFfXCJdYCkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGVsZW1bYXR0cl0gPSBuZXcgVVJMKGVsZW0uZ2V0QXR0cmlidXRlKGF0dHIpLCBuZXcgVVJMKHBhdGgsIHdpbmRvdy5sb2NhdGlvbikpLmhyZWY7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlc2V0QXR0cmlidXRlQmFzZSgnaW1nJywgJ3NyYycpO1xuICAgICAgcmVzZXRBdHRyaWJ1dGVCYXNlKCdzb3VyY2UnLCAnc3Jjc2V0Jyk7XG5cbiAgICAgIGRlY29yYXRlTWFpbihtYWluKTtcbiAgICAgIGF3YWl0IGxvYWRCbG9ja3MobWFpbik7XG4gICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlY29yYXRlKGJsb2NrKSB7XG4gIGNvbnN0IGxpbmsgPSBibG9jay5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gIGNvbnN0IHBhdGggPSBsaW5rID8gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6IGJsb2NrLnRleHRDb250ZW50LnRyaW0oKTtcbiAgY29uc3QgZnJhZ21lbnQgPSBhd2FpdCBsb2FkRnJhZ21lbnQocGF0aCk7XG4gIGlmIChmcmFnbWVudCkge1xuICAgIGNvbnN0IGZyYWdtZW50U2VjdGlvbiA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSAuc2VjdGlvbicpO1xuICAgIGlmIChmcmFnbWVudFNlY3Rpb24pIHtcbiAgICAgIGJsb2NrLmNsb3Nlc3QoJy5zZWN0aW9uJykuY2xhc3NMaXN0LmFkZCguLi5mcmFnbWVudFNlY3Rpb24uY2xhc3NMaXN0KTtcbiAgICAgIGJsb2NrLmNsb3Nlc3QoJy5mcmFnbWVudCcpLnJlcGxhY2VXaXRoKC4uLmZyYWdtZW50LmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFN0cmljdE1vZGUsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zY3JpcHRzL2FlbS5qc1wiO1xuaW1wb3J0IHsgbG9hZEZyYWdtZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2Jsb2Nrcy9mcmFnbWVudC9mcmFnbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9mb290ZXIuc2Nzc1wiO1xuXG5jb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmNvbnN0IFNSQ19TRVQgPSBcInNyY1NldFwiO1xuY29uc3QgU1RZTEUgPSBcInN0eWxlXCI7XG5jb25zdCBDT0xFTUFOX1VSTCA9IFwiaHR0cHM6Ly93d3cuY29sZW1hbi5jb20vXCI7XG5cbmVudW0gVGFnTmFtZSB7XG4gIFAgPSBcIlBcIixcbiAgUElDVFVSRSA9IFwiUElDVFVSRVwiLFxuICBJTUcgPSBcIklNR1wiLFxuICBTT1VSQ0UgPSBcIlNPVVJDRVwiLFxufVxuXG5jb25zdCBjb3VudHJ5RmxhZ3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFwiVW5pdGVkIFN0YXRlc1wiOiBcIi9pY29ucy9hbWVyaWNhbi1mbGFnLnN2Z1wiLFxufTtcblxuZXhwb3J0IHR5cGUgRm9vdGVyUHJvcHMgPSB7XG4gIGZvb3RlckZyYWdtZW50OiBIVE1MRWxlbWVudDtcbn07XG5cbmNvbnN0IEZvb3RlcjogUmVhY3QuRkM8Rm9vdGVyUHJvcHM+ID0gKHsgZm9vdGVyRnJhZ21lbnQgfSkgPT4ge1xuICBjb25zdCBbZmlyc3RJbWFnZVJlbmRlcmVkLCBzZXRGaXJzdEltYWdlUmVuZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1hcEF0dHJpYnV0ZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLnJlZHVjZShcbiAgICAgIChhY2MsIGF0dHIpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBhdHRyLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwiY2xhc3NcIikgbmFtZSA9IENMQVNTX05BTUU7XG4gICAgICAgIGlmIChuYW1lID09PSBcInNyY3NldFwiKSBuYW1lID0gU1JDX1NFVDtcbiAgICAgICAgaWYgKG5hbWUgPT09IFNUWUxFKSB7XG4gICAgICAgICAgYWNjW25hbWVdID0gcGFyc2VTdHlsZShhdHRyLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2NbbmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sXG4gICAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PixcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcGFyc2VTdHlsZSA9IHVzZUNhbGxiYWNrKChzdHlsZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0eWxlXG4gICAgICAuc3BsaXQoXCI7XCIpXG4gICAgICAuZmlsdGVyKChzdHlsZSkgPT4gc3R5bGUudHJpbSgpKVxuICAgICAgLnJlZHVjZSgoc3R5bGVPYmo6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIHN0eWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHN0eWxlLnNwbGl0KFwiOlwiKS5tYXAoKHMpID0+IHMudHJpbSgpKTtcbiAgICAgICAgaWYgKGtleSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGNhbWVsQ2FzZUtleSA9IGtleS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoXywgY2hhcikgPT5cbiAgICAgICAgICAgIGNoYXIudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHN0eWxlT2JqW2NhbWVsQ2FzZUtleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVPYmo7XG4gICAgICB9LCB7fSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJDb3VudHJ5RmxhZyA9IHVzZUNhbGxiYWNrKFxuICAgIChjb3VudHJ5TmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gKFxuICAgICAgPHAga2V5PXtrZXl9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY291bnRyeS1mbGFnXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgZGF0YS1pY29uLW5hbWU9e2Ake2NvdW50cnlOYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIiBcIiwgXCItXCIpfS1mbGFnYH1cbiAgICAgICAgICAgIHNyYz17Y291bnRyeUZsYWdzW2NvdW50cnlOYW1lXX1cbiAgICAgICAgICAgIGFsdD17YCR7Y291bnRyeU5hbWV9IEZsYWdgfVxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAge2NvdW50cnlOYW1lfVxuICAgICAgPC9wPlxuICAgICksXG4gICAgW10sXG4gICk7XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9IHVzZUNhbGxiYWNrKFxuICAgIChub2RlOiBDaGlsZE5vZGUsIGtleTogc3RyaW5nKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG1hcEF0dHJpYnV0ZXMoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gVGFnTmFtZS5QKSB7XG4gICAgICAgICAgY29uc3QgY291bnRyeU5hbWUgPSBlbGVtZW50LnRleHRDb250ZW50Py50cmltKCk7XG4gICAgICAgICAgaWYgKGNvdW50cnlOYW1lICYmIGNvdW50cnlGbGFnc1tjb3VudHJ5TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJDb3VudHJ5RmxhZyhjb3VudHJ5TmFtZSwga2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSBUYWdOYW1lLlBJQ1RVUkUgJiYgIWZpcnN0SW1hZ2VSZW5kZXJlZCkge1xuICAgICAgICAgIHNldEZpcnN0SW1hZ2VSZW5kZXJlZCh0cnVlKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17Q09MRU1BTl9VUkx9IGtleT17YGxpbmstJHtrZXl9YH0+XG4gICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHsgLi4uYXR0cmlidXRlcywga2V5IH0sXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLm1hcCgoY2hpbGQsIGlkeCkgPT5cbiAgICAgICAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoY2hpbGQsIGAke2tleX0tJHtpZHh9YCksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIFtUYWdOYW1lLklNRywgVGFnTmFtZS5TT1VSQ0VdLmluY2x1ZGVzKGVsZW1lbnQudGFnTmFtZSBhcyBUYWdOYW1lKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSwge1xuICAgICAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIHsgLi4uYXR0cmlidXRlcywga2V5IH0sXG4gICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpLm1hcCgoY2hpbGQsIGlkeCkgPT5cbiAgICAgICAgICAgIHJlbmRlckNvbnRlbnQoY2hpbGQsIGAke2tleX0tJHtpZHh9YCksXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0FycmF5LmZyb20oZm9vdGVyRnJhZ21lbnQuY2hpbGRyZW4pLm1hcCgoY2hpbGQsIGluZGV4KSA9PlxuICAgICAgICByZW5kZXJDb250ZW50KGNoaWxkLCBgZm9vdGVyLWNoaWxkLSR7aW5kZXh9YCksXG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJGb290ZXJcIjtcblxuY29uc3QgZGVjb3JhdGUgPSBhc3luYyAoYmxvY2s6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGZvb3Rlck1ldGE6IHN0cmluZyB8IG51bGwgPSBnZXRNZXRhZGF0YShcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyUGF0aCA9IGZvb3Rlck1ldGEgPyBuZXcgVVJMKGZvb3Rlck1ldGEpLnBhdGhuYW1lIDogXCIvZm9vdGVyXCI7XG4gIGNvbnN0IGZvb3RlckZyYWdtZW50ID0gYXdhaXQgbG9hZEZyYWdtZW50KGZvb3RlclBhdGgpO1xuXG4gIFJlYWN0RE9NLmNyZWF0ZVJvb3QoYmxvY2spLnJlbmRlcihcbiAgICA8U3RyaWN0TW9kZT5cbiAgICAgIDxGb290ZXIgZm9vdGVyRnJhZ21lbnQ9e2Zvb3RlckZyYWdtZW50fSAvPlxuICAgIDwvU3RyaWN0TW9kZT4sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBmb290ZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0NzQ1O1xuICBmb250LXNpemU6IHZhcigtLWJvZHktZm9udC1zaXplLXMpO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmZvb3RlciAuZm9vdGVyIHtcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgLmZvb3RlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuZm9vdGVyIC5mb290ZXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIC5mb290ZXIgLmRlZmF1bHQtY29udGVudC13cmFwcGVyID4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxcmVtO1xufVxuZm9vdGVyIC5mb290ZXIgLmRlZmF1bHQtY29udGVudC13cmFwcGVyID4gdWwgPiBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmZvb3RlciAuZm9vdGVyIGRpdi5zZWN0aW9uOm50aC1vZi10eXBlKDIpIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cbmZvb3RlciAuZm9vdGVyIGRpdi5zZWN0aW9uOm50aC1vZi10eXBlKDIpIC5kZWZhdWx0LWNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZm9vdGVyIC5mb290ZXIgZGl2LnNlY3Rpb246bnRoLW9mLXR5cGUoMikgLmRlZmF1bHQtY29udGVudC13cmFwcGVyIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5mb290ZXIgLmZvb3RlciBkaXYuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgcDpmaXJzdC1vZi10eXBlIGltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5mb290ZXIgLmZvb3RlciBkaXYuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgcDpudGgtb2YtdHlwZSgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5mb290ZXIgLmZvb3RlciBkaXYuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgcDpsYXN0LW9mLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcbiAgZm9vdGVyIC5mb290ZXIgLmRlZmF1bHQtY29udGVudC13cmFwcGVyIHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjU5cHgpIHtcbiAgZm9vdGVyIC5mb290ZXIgLmRlZmF1bHQtY29udGVudC13cmFwcGVyIHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGZvb3RlciAuZm9vdGVyIGRpdi5zZWN0aW9uOm50aC1vZi10eXBlKDIpIC5kZWZhdWx0LWNvbnRlbnQtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBmb290ZXIgLmZvb3RlciBkaXYuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ibG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7QUFBTjtBQUlNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUZWO0FBT0k7RUFDRSxnQkFBQTtBQUxOO0FBT007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxSO0FBT1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFMVjtBQU9VO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUxaO0FBUVU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFTVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUFo7QUFjRTtFQUdNO0lBQ0Usc0JBQUE7RUFkUjtBQUNGO0FBbUJFO0VBR007SUFDRSxzQkFBQTtFQW5CUjtFQXdCTTtJQUNFLHNCQUFBO0VBdEJSO0VBd0JVO0lBQ0UsY0FBQTtFQXRCWjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7XG4gIGJ1aWxkQmxvY2ssXG4gIGxvYWRIZWFkZXIsXG4gIGxvYWRGb290ZXIsXG4gIGRlY29yYXRlQnV0dG9ucyxcbiAgZGVjb3JhdGVJY29ucyxcbiAgZGVjb3JhdGVTZWN0aW9ucyxcbiAgZGVjb3JhdGVCbG9ja3MsXG4gIGRlY29yYXRlVGVtcGxhdGVBbmRUaGVtZSxcbiAgd2FpdEZvckZpcnN0SW1hZ2UsXG4gIGxvYWRTZWN0aW9uLFxuICBsb2FkU2VjdGlvbnMsXG4gIGxvYWRDU1MsXG59IGZyb20gJy4vYWVtLmpzJztcblxuLyoqXG4gKiBCdWlsZHMgaGVybyBibG9jayBhbmQgcHJlcGVuZHMgdG8gbWFpbiBpbiBhIG5ldyBzZWN0aW9uLlxuICogQHBhcmFtIHtFbGVtZW50fSBtYWluIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBidWlsZEhlcm9CbG9jayhtYWluKSB7XG4gIGNvbnN0IGgxID0gbWFpbi5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBwaWN0dXJlID0gbWFpbi5xdWVyeVNlbGVjdG9yKCdwaWN0dXJlJyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gIGlmIChoMSAmJiBwaWN0dXJlICYmIChoMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihwaWN0dXJlKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmFwcGVuZChidWlsZEJsb2NrKCdoZXJvJywgeyBlbGVtczogW3BpY3R1cmUsIGgxXSB9KSk7XG4gICAgbWFpbi5wcmVwZW5kKHNlY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogbG9hZCBmb250cy5jc3MgYW5kIHNldCBhIHNlc3Npb24gc3RvcmFnZSBmbGFnXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb250cygpIHtcbiAgYXdhaXQgbG9hZENTUyhgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vc3R5bGVzL2ZvbnRzLmNzc2ApO1xuICB0cnkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKCdsb2NhbGhvc3QnKSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZm9udHMtbG9hZGVkJywgJ3RydWUnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhbGwgc3ludGhldGljIGJsb2NrcyBpbiBhIGNvbnRhaW5lciBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBtYWluIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBidWlsZEF1dG9CbG9ja3MobWFpbikge1xuICB0cnkge1xuICAgIGJ1aWxkSGVyb0Jsb2NrKG1haW4pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignQXV0byBCbG9ja2luZyBmYWlsZWQnLCBlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWNvcmF0ZXMgdGhlIG1haW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWFpbiBUaGUgbWFpbiBlbGVtZW50XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVNYWluKG1haW4pIHtcbiAgLy8gaG9wZWZ1bGx5IGZvcndhcmQgY29tcGF0aWJsZSBidXR0b24gZGVjb3JhdGlvblxuICBkZWNvcmF0ZUJ1dHRvbnMobWFpbik7XG4gIGRlY29yYXRlSWNvbnMobWFpbik7XG4gIGJ1aWxkQXV0b0Jsb2NrcyhtYWluKTtcbiAgZGVjb3JhdGVTZWN0aW9ucyhtYWluKTtcbiAgZGVjb3JhdGVCbG9ja3MobWFpbik7XG59XG5cbi8qKlxuICogTG9hZHMgZXZlcnl0aGluZyBuZWVkZWQgdG8gZ2V0IHRvIExDUC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZG9jIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRWFnZXIoZG9jKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2VuJztcbiAgZGVjb3JhdGVUZW1wbGF0ZUFuZFRoZW1lKCk7XG4gIGNvbnN0IG1haW4gPSBkb2MucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBpZiAobWFpbikge1xuICAgIGRlY29yYXRlTWFpbihtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgIGF3YWl0IGxvYWRTZWN0aW9uKG1haW4ucXVlcnlTZWxlY3RvcignLnNlY3Rpb24nKSwgd2FpdEZvckZpcnN0SW1hZ2UpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvKiBpZiBkZXNrdG9wIChwcm94eSBmb3IgZmFzdCBjb25uZWN0aW9uKSBvciBmb250cyBhbHJlYWR5IGxvYWRlZCwgbG9hZCBmb250cy5jc3MgKi9cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTAwIHx8IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZvbnRzLWxvYWRlZCcpKSB7XG4gICAgICBsb2FkRm9udHMoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBldmVyeXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHRvIGJlIGRlbGF5ZWQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGRvYyBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZExhenkoZG9jKSB7XG4gIGNvbnN0IG1haW4gPSBkb2MucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBhd2FpdCBsb2FkU2VjdGlvbnMobWFpbik7XG5cbiAgY29uc3QgeyBoYXNoIH0gPSB3aW5kb3cubG9jYXRpb247XG4gIGNvbnN0IGVsZW1lbnQgPSBoYXNoID8gZG9jLmdldEVsZW1lbnRCeUlkKGhhc2guc3Vic3RyaW5nKDEpKSA6IGZhbHNlO1xuICBpZiAoaGFzaCAmJiBlbGVtZW50KSBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG5cbiAgbG9hZEhlYWRlcihkb2MucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICBsb2FkRm9vdGVyKGRvYy5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSk7XG5cbiAgbG9hZENTUyhgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vc3R5bGVzL2xhenktc3R5bGVzLmNzc2ApO1xuICBsb2FkRm9udHMoKTtcbn1cblxuLyoqXG4gKiBMb2FkcyBldmVyeXRoaW5nIHRoYXQgaGFwcGVucyBhIGxvdCBsYXRlcixcbiAqIHdpdGhvdXQgaW1wYWN0aW5nIHRoZSB1c2VyIGV4cGVyaWVuY2UuXG4gKi9cbmZ1bmN0aW9uIGxvYWREZWxheWVkKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG4gIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgYCR7d2luZG93LmhseC5jb2RlQmFzZVBhdGh9L3NjcmlwdHMvZGVsYXllZC5qc2BcbiAgICAgICksXG4gICAgMzAwMCxcbiAgKTtcbiAgLy8gbG9hZCBhbnl0aGluZyB0aGF0IGNhbiBiZSBwb3N0cG9uZWQgdG8gdGhlIGxhdGVzdCBoZXJlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBhd2FpdCBsb2FkRWFnZXIoZG9jdW1lbnQpO1xuICBhd2FpdCBsb2FkTGF6eShkb2N1bWVudCk7XG4gIGxvYWREZWxheWVkKCk7XG59XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJpY3RNb2RlIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsIlJlYWN0RE9NIiwiZ2V0TWV0YWRhdGEiLCJsb2FkRnJhZ21lbnQiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJDTEFTU19OQU1FIiwiU1JDX1NFVCIsIlNUWUxFIiwiQ09MRU1BTl9VUkwiLCJUYWdOYW1lIiwiY291bnRyeUZsYWdzIiwiRm9vdGVyIiwiZm9vdGVyRnJhZ21lbnQiLCJmaXJzdEltYWdlUmVuZGVyZWQiLCJzZXRGaXJzdEltYWdlUmVuZGVyZWQiLCJtYXBBdHRyaWJ1dGVzIiwiZWxlbWVudCIsIkFycmF5IiwiZnJvbSIsImF0dHJpYnV0ZXMiLCJyZWR1Y2UiLCJhY2MiLCJhdHRyIiwibmFtZSIsInBhcnNlU3R5bGUiLCJ2YWx1ZSIsInN0eWxlIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmltIiwic3R5bGVPYmoiLCJrZXkiLCJtYXAiLCJzIiwiY2FtZWxDYXNlS2V5IiwicmVwbGFjZSIsIl8iLCJjaGFyIiwidG9VcHBlckNhc2UiLCJyZW5kZXJDb3VudHJ5RmxhZyIsImNvdW50cnlOYW1lIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0b0xvd2VyQ2FzZSIsInNyYyIsImFsdCIsImxvYWRpbmciLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJyZW5kZXJDb250ZW50Iiwibm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInRhZ05hbWUiLCJQIiwidGV4dENvbnRlbnQiLCJQSUNUVVJFIiwiaHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJpZHgiLCJJTUciLCJTT1VSQ0UiLCJpbmNsdWRlcyIsIlRFWFRfTk9ERSIsImluZGV4IiwiZGlzcGxheU5hbWUiLCJkZWNvcmF0ZSIsImJsb2NrIiwiZm9vdGVyTWV0YSIsImZvb3RlclBhdGgiLCJVUkwiLCJwYXRobmFtZSIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9