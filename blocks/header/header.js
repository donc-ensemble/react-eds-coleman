export const id = "blocks:header";
export const ids = ["blocks:header"];
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

/***/ "./src/blocks/header/header.tsx":
/*!**************************************!*\
  !*** ./src/blocks/header/header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.mjs");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/preact/compat/client.mjs");
/* harmony import */ var _scripts_aem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scripts/aem.js */ "../scripts/aem.js");
/* harmony import */ var _blocks_fragment_fragment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/fragment/fragment.js */ "../blocks/fragment/fragment.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.scss */ "./src/blocks/header/header.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs");
var _jsxFileName = "/Users/donc/Documents/AllAboutEDS/react-eds-coleman/react/src/blocks/header/header.tsx";






async function extractContentFromDOM() {
  const navMeta = (0,_scripts_aem_js__WEBPACK_IMPORTED_MODULE_2__.getMetadata)("nav");
  const navPath = navMeta ? new URL(navMeta).pathname : "/nav";
  const fragment = await (0,_blocks_fragment_fragment_js__WEBPACK_IMPORTED_MODULE_3__.loadFragment)(navPath);
  const [brandsContainer, headerItemsContainer, navItemsContainer] = fragment.children;
  const brandItems = [...brandsContainer.querySelectorAll("p")].map(p => ({
    link: p.querySelector("a").getAttribute("href"),
    source: p.querySelector("picture source:nth-of-type(2)").getAttribute("srcset"),
    imgSrc: p.querySelector("img").getAttribute("src").replace("format=png", "format=webply"),
    text: p.querySelector("img").getAttribute("alt")
  }));
  const headerItems = [{
    link: headerItemsContainer.querySelector("p:first-child a").getAttribute("href"),
    source: headerItemsContainer.querySelector("p:first-child a picture source:nth-of-type(2)").getAttribute("srcset"),
    imgSrc: headerItemsContainer.querySelector("p:first-child a img").getAttribute("src"),
    text: "Logo"
  }, {
    link: "",
    imgSrc: headerItemsContainer.querySelector("p:nth-of-type(2) img").getAttribute("src"),
    text: "SearchIcon"
  }, ...[...headerItemsContainer.querySelectorAll("ul li")].map(li => ({
    link: "",
    imgSrc: li.querySelector("img").getAttribute("src"),
    text: li.querySelector("img").getAttribute("data-icon-name")
  }))];
  const navItems = [...navItemsContainer.querySelectorAll("ul li")].map(li => ({
    link: li.querySelector("a")?.getAttribute("href") ?? "",
    text: li.outerText
  }));
  return {
    brandItems: brandItems,
    headerItems: headerItems,
    navItems: navItems
  };
}
const Header = ({
  brandItems,
  headerItems,
  navItems
}) => {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [menuLabel, setMenuLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Close navigation");
  const brands = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => brandItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
      href: item.link,
      title: "link",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("picture", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("source", {
          type: "image/webp",
          srcset: item.source
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          loading: "lazy",
          alt: "{item.text}",
          src: item.imgSrc,
          width: "54",
          height: "10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }, undefined)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, undefined)), [brandItems]);
  const headerLeftSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        href: headerItems[0].link,
        title: "link",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("picture", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("source", {
            type: "image/webp",
            srcset: headerItems[0].source
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            alt: headerItems[0].text,
            src: headerItems[0].imgSrc.replace("format=png", "format=webply"),
            width: "614",
            height: "201"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        type: "text",
        placeholder: "What are you looking for?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        className: "icon icon-search",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          "data-icon-name": "search",
          src: headerItems[1].imgSrc,
          alt: headerItems[1].text,
          loading: "lazy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }, undefined)]
  }, void 0, true), [headerItems]);
  const profileListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      className: "icon icon-user-profile",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        "data-icon-name": "user-profile",
        src: item.imgSrc,
        alt: item.text,
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "tool-link-register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: ["Welcome ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "\u2304"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "links",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Sign In"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, undefined), " or ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 37
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "mobile-label",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }, undefined)]
  }, index, true, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 7
  }, undefined), []);
  const listItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
      className: `icon icon-${item.text}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        "data-icon-name": item.text,
        src: item.imgSrc,
        alt: item.text + "image",
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }, undefined), item.text === "shoppingbag" ? "bag" : "support"]
  }, index, true, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 7
  }, undefined), []);
  const headerRightSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => headerItems.slice(2).map((item, index) => item.text === "userprofile" ? profileListItem(item, index) : listItem(item, index)), [headerItems]);
  const navItemsList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => navItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
    "aria-expanded": expanded,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
      href: item.link,
      title: item.text,
      children: item.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }, undefined)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 211,
    columnNumber: 9
  }, undefined)), [navItems]);
  const toggleMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setMenuLabel(expanded ? "Close navigation" : "Open navigation");
    setExpanded(!expanded);
  }, [expanded, setExpanded, setMenuLabel]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "nav-wrapper",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      id: "nav",
      "aria-expanded": expanded,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "section nav-brand",
        "data-section-status": "loaded",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "default-content-wrapper",
          children: brands
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "section nav-tools",
        "data-section-status": "loaded",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "default-content-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "nav-hamburger",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              type: "button",
              "aria-controls": "nav",
              "aria-label": menuLabel,
              onClick: () => toggleMenu(),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                className: "nav-hamburger-icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, undefined), headerLeftSection, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
            children: headerRightSection
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "section nav-sections",
        "data-sections-status": "loaded",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "default-content-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
            children: navItemsList
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 5
  }, undefined);
};
Header.displayName = "Header";
const decorate = async block => {
  const headerProps = await extractContentFromDOM();
  react_dom_client__WEBPACK_IMPORTED_MODULE_1__["default"].createRoot(block).render(/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Header, {
      ...headerProps
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 262,
    columnNumber: 5
  }, undefined));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (decorate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/header/header.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/header/header.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* header and nav layout */
header .nav-wrapper {
  background-color: var(--bg-color-white);
  width: 100%;
  z-index: 2;
  position: fixed;
}
header nav {
  box-sizing: border-box;
  align-items: center;
  gap: 0 2em;
  margin: auto;
  width: 100%;
  font-family: var(--body-font-family);
}
header nav > div {
  padding: 0 1rem;
}
header nav .section {
  width: 100%;
  box-sizing: border-box;
}
header .section > div {
  max-width: 1440px;
  margin: 0 auto;
}
header nav[aria-expanded=true] {
  grid-template: "hamburger brand" var(--nav-height) "sections sections" 1fr "tools tools" var(--nav-height)/auto 1fr;
  overflow-y: auto;
  min-height: 100vh;
}
header nav p {
  margin: 0;
  line-height: 1;
}
header nav a:any-link {
  color: currentcolor;
}
header nav .nav-hamburger {
  grid-area: hamburger;
  height: 22px;
  display: flex;
  align-items: center;
}
header nav .nav-hamburger button {
  height: 22px;
  margin: 0;
  border: 0;
  border-radius: 0;
  padding: 0;
  background-color: transparent;
  color: inherit;
  overflow: initial;
  text-overflow: initial;
  white-space: initial;
}
header nav .nav-hamburger-icon {
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 20px;
}
header nav .nav-hamburger-icon::before, header nav .nav-hamburger-icon::after {
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 20px;
}
header nav .nav-hamburger-icon::before, header nav .nav-hamburger-icon::after {
  content: "";
  position: absolute;
  background: currentcolor;
}
header nav[aria-expanded=false] .nav-hamburger-icon {
  height: 2px;
  border-radius: 2px;
  background: currentcolor;
}
header nav[aria-expanded=false] .nav-hamburger-icon::before, header nav[aria-expanded=false] .nav-hamburger-icon::after {
  height: 2px;
  border-radius: 2px;
  background: currentcolor;
}
header nav[aria-expanded=false] .nav-hamburger-icon::before {
  top: -6px;
}
header nav[aria-expanded=false] .nav-hamburger-icon::after {
  top: 6px;
}
header nav[aria-expanded=true] .nav-hamburger-icon {
  height: 22px;
}
header nav[aria-expanded=true] .nav-hamburger-icon::before {
  top: 3px;
  left: 1px;
  transform: rotate(45deg);
  transform-origin: 2px 1px;
  width: 24px;
  height: 2px;
  border-radius: 2px;
}
header nav[aria-expanded=true] .nav-hamburger-icon::after {
  top: 3px;
  left: 1px;
  transform: rotate(45deg);
  transform-origin: 2px 1px;
  width: 24px;
  height: 2px;
  border-radius: 2px;
  top: unset;
  bottom: 3px;
  transform: rotate(-45deg);
}
header .nav-brand {
  grid-area: brand;
  /* flex-basis: 128px; */
  font-size: var(--heading-font-size-s);
  font-weight: 700;
  line-height: 1;
  background-color: var(--bg-color-white);
  margin: 0 auto;
  padding: 5px 1rem;
}
header .nav-brand > div {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
header nav .nav-brand img {
  width: auto;
  height: auto;
}
header nav .nav-sections {
  grid-area: sections;
  flex: 1 1 auto;
  display: none;
  visibility: hidden;
  background-color: var(--bg-color-beige);
  height: 100%;
}
header nav[aria-expanded=true] .nav-sections {
  display: block;
  visibility: visible;
  align-self: start;
}
header nav .nav-sections ul {
  list-style: none;
  padding-left: 0;
  font-size: 14px;
  font-weight: 500;
}
header nav .nav-sections ul > li {
  font-weight: 700;
}
header nav .nav-sections ul > li > a:hover {
  text-decoration: none;
}
header nav .nav-sections ul > li > ul {
  margin-top: 0;
}
header nav .nav-sections ul > li > ul > li {
  font-weight: 500;
  display: flex;
  flex-direction: column;
  font-weight: 900;
}
header nav .nav-sections ul > li > ul > li > a {
  padding: 0.25rem 0;
}
header nav .nav-sections ul > li > ul > li > a:hover {
  text-decoration: underline;
}
header nav .nav-sections ul > li > ul > li > ul {
  display: block;
}
header nav .nav-sections ul > li > ul > li > ul > li {
  color: #696158;
  font-weight: 400;
}
header nav .nav-tools {
  grid-area: tools;
  background-color: var(--bg-color-beige);
}
header nav .nav-tools img {
  height: 40px;
  width: auto;
  object-fit: contain;
}
header nav .nav-tools > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  gap: 3rem;
}
header nav .nav-tools ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
header nav .nav-tools > div p:nth-of-type(2) {
  margin-right: auto;
}
header nav .nav-tools p:nth-of-type(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}
header nav .nav-tools p:nth-of-type(2) input[type=text] {
  height: auto;
  width: auto;
  padding: 1rem 0.75rem;
  min-width: 20rem;
  background-color: var(--bg-color-beige);
  font-size: 16px;
  border: 1px solid;
  border-radius: 2px 0 0 2px;
}
header nav .nav-tools p:nth-of-type(2) .icon-search {
  display: block;
  width: auto;
  height: auto;
  padding: 0.9rem;
  background-color: #484745;
  border-radius: 0 5px 5px 0;
}
header nav .nav-tools p:nth-of-type(2) .icon-search:hover {
  background-color: var(--bg-color-red);
  cursor: pointer;
  transition: 0.15s ease-in-out;
}
header nav .nav-tools p:nth-of-type(2) .icon-search img {
  width: 20px;
  height: 20px;
  filter: invert(1);
}
header nav .nav-tools ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
header nav .nav-tools ul li:hover {
  color: var(--bg-color-red);
  cursor: pointer;
}
header nav .nav-tools ul li:nth-of-type(2), header nav .nav-tools ul li:nth-of-type(3) {
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
}
header nav .nav-tools ul li span {
  height: 28px;
  width: 28px;
}
header nav .nav-tools .icon img {
  height: 30px;
  width: 30px;
}
header nav .nav-tools .tool-link-register {
  margin-left: 0.5rem;
}
header nav .nav-tools .tool-link-register > div:not(.links) span {
  margin-left: 35px;
}
header nav .nav-tools .tool-link-register .links span {
  text-decoration: underline;
}
header nav .nav-tools .tool-link-register .mobile-label {
  display: none;
}

@media (width <= 1440px) {
  header .section > div {
    max-width: 1080px;
    margin: 0 auto;
  }
}
/* header nav . */
@media (width >= 900px) {
  header nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  header nav[aria-expanded=true] {
    min-height: 0;
    overflow: visible;
  }
}
/* hamburger */
@media (width >= 900px) {
  header nav .nav-hamburger {
    display: none;
    visibility: hidden;
  }
}
/* brand */
/* sections */
@media (width >= 900px) {
  header nav .nav-sections {
    display: block;
    visibility: visible;
    white-space: nowrap;
  }
  header nav[aria-expanded=true] .nav-sections {
    align-self: unset;
  }
  header nav .nav-sections .nav-drop {
    position: relative;
    cursor: pointer;
  }
  header nav .nav-sections ul {
    display: flex;
    gap: 1rem;
    margin: 0;
    justify-content: center;
  }
  header nav .nav-sections .default-content-wrapper > ul > li {
    flex: 0 1 auto;
    position: relative;
    font-weight: 500;
    padding: 0.5rem;
    line-height: normal;
  }
  header nav .nav-sections .default-content-wrapper > ul > li.nav-drop:hover {
    color: var(--bg-color-red);
    background-color: #e3dfd6;
  }
  header nav .nav-sections .default-content-wrapper > ul > li > ul {
    display: none;
    position: relative;
  }
  header nav .nav-sections .default-content-wrapper > ul > li[aria-expanded=true] > ul {
    display: block;
    position: absolute;
    left: 0;
    width: 200px;
    margin-top: 7px;
    padding: 1em;
    background-color: #e3dfd6;
    white-space: initial;
  }
  header nav .nav-sections ul > li > ul > li > a {
    padding: 0.5rem 0;
  }
  header nav .nav-sections .default-content-wrapper > ul > li > ul > li {
    padding: 8px 0;
    color: #000;
  }
  /* header nav .nav-sections .nav-drop::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: .5em;
    right: 2px;
    transform: rotate(135deg);
    width: 6px;
    height: 6px;
    border: 2px solid currentcolor;
    border-radius: 0 1px 0 0;
    border-width: 2px 2px 0 0;
  }

  header nav .nav-sections .nav-drop[aria-expanded="true"]::after {
    top: unset;
    bottom: .5em;
    transform: rotate(315deg);
  } */
  /* header nav .nav-sections .default-content-wrapper > ul > li > ul::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--light-color);
  } */
}
/* tools */
@media (width <= 992px) {
  header nav .nav-tools .tool-link-register div:not(.mobile-label) {
    display: none;
  }
  header nav .nav-tools .tool-link-register .mobile-label {
    display: block;
  }
  header nav .nav-tools ul {
    gap: 1.5rem;
  }
  header nav .nav-tools ul li {
    display: flex;
    flex-direction: column;
  }
  header nav .nav-tools > div {
    gap: 1.5rem;
  }
  header nav .nav-tools p:nth-of-type(2) input[type=text] {
    min-width: 15rem;
    background-color: var(--bg-color-white);
  }
  header nav .nav-sections ul {
    margin: 0;
  }
  header nav .nav-tools img {
    height: 30px;
  }
}
@media (width <= 768px) {
  header nav .nav-tools ul li:nth-of-type(1), header nav .nav-tools ul li:nth-of-type(2) {
    display: none;
  }
  header nav .nav-tools p:nth-of-type(2) {
    display: none;
  }
}
@media (width <= 900px) {
  header nav .nav-sections {
    height: 100vh;
  }
}`, "",{"version":3,"sources":["webpack://./src/blocks/header/header.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/header/header.scss":
/*!***************************************!*\
  !*** ./src/blocks/header/header.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
import * as __webpack_chunk_0__ from "./header.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./src/blocks/header/header.tsx");
var __webpack_exports__Header = __webpack_exports__.Header;
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__Header as Header, __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0dBQXNHLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVB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QUNBOztBQUVBLEVBQUUsbURBQVU7QUFDWixFQUFFLG1EQUFVOztBQUVaLEVBQUUsZ0RBQU8sSUFBSSx3QkFBd0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4uL2Jsb2Nrcy9mcmFnbWVudC9mcmFnbWVudC5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9zcmMvYmxvY2tzL2hlYWRlci9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzPzUyNjMiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi4vc2NyaXB0cy9fc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRnJhZ21lbnQgQmxvY2tcbiAqIEluY2x1ZGUgY29udGVudCBvbiBhIHBhZ2UgYXMgYSBmcmFnbWVudC5cbiAqIGh0dHBzOi8vd3d3LmFlbS5saXZlL2RldmVsb3Blci9ibG9jay1jb2xsZWN0aW9uL2ZyYWdtZW50XG4gKi9cblxuaW1wb3J0IHtcbiAgZGVjb3JhdGVNYWluLFxufSBmcm9tICcuLi8uLi9zY3JpcHRzL19zY3JpcHRzLmpzJztcblxuaW1wb3J0IHtcbiAgbG9hZEJsb2Nrcyxcbn0gZnJvbSAnLi4vLi4vc2NyaXB0cy9hZW0uanMnO1xuXG4vKipcbiAqIExvYWRzIGEgZnJhZ21lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZnJhZ21lbnRcbiAqIEByZXR1cm5zIHtQcm9taXNlPEhUTUxFbGVtZW50Pn0gVGhlIHJvb3QgZWxlbWVudCBvZiB0aGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRGcmFnbWVudChwYXRoKSB7XG4gIGlmIChwYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke3BhdGh9LnBsYWluLmh0bWxgKTtcbiAgICBpZiAocmVzcC5vaykge1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gYXdhaXQgcmVzcC50ZXh0KCk7XG5cbiAgICAgIC8vIHJlc2V0IGJhc2UgcGF0aCBmb3IgbWVkaWEgdG8gZnJhZ21lbnQgYmFzZVxuICAgICAgY29uc3QgcmVzZXRBdHRyaWJ1dGVCYXNlID0gKHRhZywgYXR0cikgPT4ge1xuICAgICAgICBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFnfVske2F0dHJ9Xj1cIi4vbWVkaWFfXCJdYCkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgIGVsZW1bYXR0cl0gPSBuZXcgVVJMKGVsZW0uZ2V0QXR0cmlidXRlKGF0dHIpLCBuZXcgVVJMKHBhdGgsIHdpbmRvdy5sb2NhdGlvbikpLmhyZWY7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJlc2V0QXR0cmlidXRlQmFzZSgnaW1nJywgJ3NyYycpO1xuICAgICAgcmVzZXRBdHRyaWJ1dGVCYXNlKCdzb3VyY2UnLCAnc3Jjc2V0Jyk7XG5cbiAgICAgIGRlY29yYXRlTWFpbihtYWluKTtcbiAgICAgIGF3YWl0IGxvYWRCbG9ja3MobWFpbik7XG4gICAgICByZXR1cm4gbWFpbjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlY29yYXRlKGJsb2NrKSB7XG4gIGNvbnN0IGxpbmsgPSBibG9jay5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gIGNvbnN0IHBhdGggPSBsaW5rID8gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA6IGJsb2NrLnRleHRDb250ZW50LnRyaW0oKTtcbiAgY29uc3QgZnJhZ21lbnQgPSBhd2FpdCBsb2FkRnJhZ21lbnQocGF0aCk7XG4gIGlmIChmcmFnbWVudCkge1xuICAgIGNvbnN0IGZyYWdtZW50U2VjdGlvbiA9IGZyYWdtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSAuc2VjdGlvbicpO1xuICAgIGlmIChmcmFnbWVudFNlY3Rpb24pIHtcbiAgICAgIGJsb2NrLmNsb3Nlc3QoJy5zZWN0aW9uJykuY2xhc3NMaXN0LmFkZCguLi5mcmFnbWVudFNlY3Rpb24uY2xhc3NMaXN0KTtcbiAgICAgIGJsb2NrLmNsb3Nlc3QoJy5mcmFnbWVudCcpLnJlcGxhY2VXaXRoKC4uLmZyYWdtZW50LmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFN0cmljdE1vZGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBnZXRNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zY3JpcHRzL2FlbS5qc1wiO1xuaW1wb3J0IHsgbG9hZEZyYWdtZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2Jsb2Nrcy9mcmFnbWVudC9mcmFnbWVudC5qc1wiO1xuaW1wb3J0IFwiLi9oZWFkZXIuc2Nzc1wiO1xuXG5leHBvcnQgdHlwZSBIZWFkZXJQcm9wcyA9IHtcbiAgYnJhbmRJdGVtczogQnJhbmRJdGVtW107XG4gIGhlYWRlckl0ZW1zOiBIZWFkZXJJdGVtW107XG4gIG5hdkl0ZW1zOiBOYXZJdGVtW107XG59O1xuZXhwb3J0IHR5cGUgQnJhbmRJdGVtID0ge1xuICBsaW5rOiBzdHJpbmc7XG4gIGltZ1NyYzogc3RyaW5nO1xuICBzb3VyY2U6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIEhlYWRlckl0ZW0gPSB7XG4gIGxpbms6IHN0cmluZztcbiAgaW1nU3JjOiBzdHJpbmc7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufTtcbmV4cG9ydCB0eXBlIE5hdkl0ZW0gPSB7XG4gIGxpbms6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdENvbnRlbnRGcm9tRE9NKCk6IFByb21pc2U8SGVhZGVyUHJvcHM+IHtcbiAgY29uc3QgbmF2TWV0YSA9IGdldE1ldGFkYXRhKFwibmF2XCIpO1xuICBjb25zdCBuYXZQYXRoID0gbmF2TWV0YSA/IG5ldyBVUkwobmF2TWV0YSkucGF0aG5hbWUgOiBcIi9uYXZcIjtcbiAgY29uc3QgZnJhZ21lbnQgPSBhd2FpdCBsb2FkRnJhZ21lbnQobmF2UGF0aCk7XG5cbiAgY29uc3QgW2JyYW5kc0NvbnRhaW5lciwgaGVhZGVySXRlbXNDb250YWluZXIsIG5hdkl0ZW1zQ29udGFpbmVyXSA9XG4gICAgZnJhZ21lbnQuY2hpbGRyZW47XG5cbiAgY29uc3QgYnJhbmRJdGVtczogQnJhbmRJdGVtW10gPSBbXG4gICAgLi4uYnJhbmRzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpLFxuICBdLm1hcCgocCkgPT4gKHtcbiAgICBsaW5rOiBwLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpIS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpISxcbiAgICBzb3VyY2U6IHBcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwicGljdHVyZSBzb3VyY2U6bnRoLW9mLXR5cGUoMilcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpISxcbiAgICBpbWdTcmM6IHBcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIVxuICAgICAgLmdldEF0dHJpYnV0ZShcInNyY1wiKSFcbiAgICAgIC5yZXBsYWNlKFwiZm9ybWF0PXBuZ1wiLCBcImZvcm1hdD13ZWJwbHlcIiksXG4gICAgdGV4dDogcC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIS5nZXRBdHRyaWJ1dGUoXCJhbHRcIikhLFxuICB9KSk7XG4gIGNvbnN0IGhlYWRlckl0ZW1zOiBIZWFkZXJJdGVtW10gPSBbXG4gICAge1xuICAgICAgbGluazogaGVhZGVySXRlbXNDb250YWluZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJwOmZpcnN0LWNoaWxkIGFcIikhXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpISxcbiAgICAgIHNvdXJjZTogaGVhZGVySXRlbXNDb250YWluZXJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJwOmZpcnN0LWNoaWxkIGEgcGljdHVyZSBzb3VyY2U6bnRoLW9mLXR5cGUoMilcIikhXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNzZXRcIikhLFxuICAgICAgaW1nU3JjOiBoZWFkZXJJdGVtc0NvbnRhaW5lclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcInA6Zmlyc3QtY2hpbGQgYSBpbWdcIikhXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikhLFxuICAgICAgdGV4dDogXCJMb2dvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiBcIlwiLFxuICAgICAgaW1nU3JjOiBoZWFkZXJJdGVtc0NvbnRhaW5lclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcInA6bnRoLW9mLXR5cGUoMikgaW1nXCIpIVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwic3JjXCIpISxcbiAgICAgIHRleHQ6IFwiU2VhcmNoSWNvblwiLFxuICAgIH0sXG4gICAgLi4uWy4uLmhlYWRlckl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bCBsaVwiKV0ubWFwKChsaSkgPT4gKHtcbiAgICAgIGxpbms6IFwiXCIsXG4gICAgICBpbWdTcmM6IGxpLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikhLmdldEF0dHJpYnV0ZShcInNyY1wiKSEsXG4gICAgICB0ZXh0OiBsaS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpIS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWljb24tbmFtZVwiKSEsXG4gICAgfSkpLFxuICBdO1xuICBjb25zdCBuYXZJdGVtczogTmF2SXRlbVtdID0gW1xuICAgIC4uLm5hdkl0ZW1zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTExJRWxlbWVudD4oXCJ1bCBsaVwiKSxcbiAgXS5tYXAoKGxpKSA9PiAoe1xuICAgIGxpbms6IGxpLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID8/IFwiXCIsXG4gICAgdGV4dDogbGkub3V0ZXJUZXh0LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBicmFuZEl0ZW1zOiBicmFuZEl0ZW1zLFxuICAgIGhlYWRlckl0ZW1zOiBoZWFkZXJJdGVtcyxcbiAgICBuYXZJdGVtczogbmF2SXRlbXMsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7XG4gIGJyYW5kSXRlbXMsXG4gIGhlYWRlckl0ZW1zLFxuICBuYXZJdGVtcyxcbn06IEhlYWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVudUxhYmVsLCBzZXRNZW51TGFiZWxdID0gdXNlU3RhdGUoXCJDbG9zZSBuYXZpZ2F0aW9uXCIpO1xuXG4gIGNvbnN0IGJyYW5kcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGJyYW5kSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8cCBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IHRpdGxlPVwibGlua1wiPlxuICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cImltYWdlL3dlYnBcIiBzcmNzZXQ9e2l0ZW0uc291cmNlfSAvPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIGFsdD1cIntpdGVtLnRleHR9XCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTRcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICkpLFxuICAgIFticmFuZEl0ZW1zXSxcbiAgKTtcblxuICBjb25zdCBoZWFkZXJMZWZ0U2VjdGlvbiA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGEgaHJlZj17aGVhZGVySXRlbXNbMF0ubGlua30gdGl0bGU9e1wibGlua1wifT5cbiAgICAgICAgICAgIDxwaWN0dXJlPlxuICAgICAgICAgICAgICA8c291cmNlIHR5cGU9XCJpbWFnZS93ZWJwXCIgc3Jjc2V0PXtoZWFkZXJJdGVtc1swXS5zb3VyY2V9Pjwvc291cmNlPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PXtoZWFkZXJJdGVtc1swXS50ZXh0fVxuICAgICAgICAgICAgICAgIHNyYz17aGVhZGVySXRlbXNbMF0uaW1nU3JjLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICBcImZvcm1hdD1wbmdcIixcbiAgICAgICAgICAgICAgICAgIFwiZm9ybWF0PXdlYnBseVwiLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgd2lkdGg9e1wiNjE0XCJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtcIjIwMVwifVxuICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gcGxhY2Vob2xkZXI9e1wiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yP1wifSAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJpY29uIGljb24tc2VhcmNoXCJ9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBkYXRhLWljb24tbmFtZT17XCJzZWFyY2hcIn1cbiAgICAgICAgICAgICAgc3JjPXtoZWFkZXJJdGVtc1sxXS5pbWdTcmN9XG4gICAgICAgICAgICAgIGFsdD17aGVhZGVySXRlbXNbMV0udGV4dH1cbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvPlxuICAgICksXG4gICAgW2hlYWRlckl0ZW1zXSxcbiAgKTtcblxuICBjb25zdCBwcm9maWxlTGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogSGVhZGVySXRlbSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiaWNvbiBpY29uLXVzZXItcHJvZmlsZVwifT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBkYXRhLWljb24tbmFtZT1cInVzZXItcHJvZmlsZVwiXG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgYWx0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2wtbGluay1yZWdpc3RlclwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBXZWxjb21lIDxzcGFuPuKMhDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsaW5rc1wifT5cbiAgICAgICAgICAgIDxzcGFuPlNpZ24gSW48L3NwYW4+IG9yIDxzcGFuPlJlZ2lzdGVyPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm1vYmlsZS1sYWJlbFwifT5BY2NvdW50PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICApLFxuICAgIFtdLFxuICApO1xuXG4gIGNvbnN0IGxpc3RJdGVtID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IEhlYWRlckl0ZW0sIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaWNvbiBpY29uLSR7aXRlbS50ZXh0fWB9PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGRhdGEtaWNvbi1uYW1lPXtpdGVtLnRleHR9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgYWx0PXtpdGVtLnRleHQgKyBcImltYWdlXCJ9XG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7aXRlbS50ZXh0ID09PSBcInNob3BwaW5nYmFnXCIgPyBcImJhZ1wiIDogXCJzdXBwb3J0XCJ9XG4gICAgICA8L2xpPlxuICAgICksXG4gICAgW10sXG4gICk7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHRTZWN0aW9uID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaGVhZGVySXRlbXNcbiAgICAgICAgLnNsaWNlKDIpXG4gICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICAgIGl0ZW0udGV4dCA9PT0gXCJ1c2VycHJvZmlsZVwiXG4gICAgICAgICAgICA/IHByb2ZpbGVMaXN0SXRlbShpdGVtLCBpbmRleClcbiAgICAgICAgICAgIDogbGlzdEl0ZW0oaXRlbSwgaW5kZXgpLFxuICAgICAgICApLFxuICAgIFtoZWFkZXJJdGVtc10sXG4gICk7XG5cbiAgY29uc3QgbmF2SXRlbXNMaXN0ID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgbmF2SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30gdGl0bGU9e2l0ZW0udGV4dH0+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpLFxuICAgIFtuYXZJdGVtc10sXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRNZW51TGFiZWwoZXhwYW5kZWQgPyBcIkNsb3NlIG5hdmlnYXRpb25cIiA6IFwiT3BlbiBuYXZpZ2F0aW9uXCIpO1xuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XG4gIH0sIFtleHBhbmRlZCwgc2V0RXhwYW5kZWQsIHNldE1lbnVMYWJlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LXdyYXBwZXJcIn0+XG4gICAgICA8bmF2IGlkPVwibmF2XCIgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWN0aW9uIG5hdi1icmFuZFwifSBkYXRhLXNlY3Rpb24tc3RhdHVzPXtcImxvYWRlZFwifT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkZWZhdWx0LWNvbnRlbnQtd3JhcHBlclwifT57YnJhbmRzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2VjdGlvbiBuYXYtdG9vbHNcIn0gZGF0YS1zZWN0aW9uLXN0YXR1cz17XCJsb2FkZWRcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGVmYXVsdC1jb250ZW50LXdyYXBwZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaGFtYnVyZ2VyXCJ9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtcIm5hdlwifVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e21lbnVMYWJlbH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVNZW51KCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibmF2LWhhbWJ1cmdlci1pY29uXCJ9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtoZWFkZXJMZWZ0U2VjdGlvbn1cbiAgICAgICAgICAgIDx1bD57aGVhZGVyUmlnaHRTZWN0aW9ufTwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzZWN0aW9uIG5hdi1zZWN0aW9uc1wifSBkYXRhLXNlY3Rpb25zLXN0YXR1cz17XCJsb2FkZWRcIn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZGVmYXVsdC1jb250ZW50LXdyYXBwZXJcIn0+XG4gICAgICAgICAgICA8dWw+e25hdkl0ZW1zTGlzdH08L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbkhlYWRlci5kaXNwbGF5TmFtZSA9IFwiSGVhZGVyXCI7XG5cbmNvbnN0IGRlY29yYXRlID0gYXN5bmMgKGJsb2NrOiBIVE1MRWxlbWVudCkgPT4ge1xuICBjb25zdCBoZWFkZXJQcm9wcyA9IGF3YWl0IGV4dHJhY3RDb250ZW50RnJvbURPTSgpO1xuXG4gIFJlYWN0RE9NLmNyZWF0ZVJvb3QoYmxvY2spLnJlbmRlcihcbiAgICA8U3RyaWN0TW9kZT5cbiAgICAgIDxIZWFkZXIgey4uLmhlYWRlclByb3BzfSAvPlxuICAgIDwvU3RyaWN0TW9kZT4sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvcmF0ZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBoZWFkZXIgYW5kIG5hdiBsYXlvdXQgKi9cbmhlYWRlciAubmF2LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci13aGl0ZSk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5oZWFkZXIgbmF2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwIDJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udC1mYW1pbHkpO1xufVxuaGVhZGVyIG5hdiA+IGRpdiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbmhlYWRlciBuYXYgLnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmhlYWRlciAuc2VjdGlvbiA+IGRpdiB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gIGdyaWQtdGVtcGxhdGU6IFwiaGFtYnVyZ2VyIGJyYW5kXCIgdmFyKC0tbmF2LWhlaWdodCkgXCJzZWN0aW9ucyBzZWN0aW9uc1wiIDFmciBcInRvb2xzIHRvb2xzXCIgdmFyKC0tbmF2LWhlaWdodCkvYXV0byAxZnI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuaGVhZGVyIG5hdiBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbmhlYWRlciBuYXYgYTphbnktbGluayB7XG4gIGNvbG9yOiBjdXJyZW50Y29sb3I7XG59XG5oZWFkZXIgbmF2IC5uYXYtaGFtYnVyZ2VyIHtcbiAgZ3JpZC1hcmVhOiBoYW1idXJnZXI7XG4gIGhlaWdodDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmhlYWRlciBuYXYgLm5hdi1oYW1idXJnZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG59XG5oZWFkZXIgbmF2IC5uYXYtaGFtYnVyZ2VyLWljb24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbn1cbmhlYWRlciBuYXYgLm5hdi1oYW1idXJnZXItaWNvbjo6YmVmb3JlLCBoZWFkZXIgbmF2IC5uYXYtaGFtYnVyZ2VyLWljb246OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG59XG5oZWFkZXIgbmF2IC5uYXYtaGFtYnVyZ2VyLWljb246OmJlZm9yZSwgaGVhZGVyIG5hdiAubmF2LWhhbWJ1cmdlci1pY29uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogY3VycmVudGNvbG9yO1xufVxuaGVhZGVyIG5hdlthcmlhLWV4cGFuZGVkPWZhbHNlXSAubmF2LWhhbWJ1cmdlci1pY29uIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogY3VycmVudGNvbG9yO1xufVxuaGVhZGVyIG5hdlthcmlhLWV4cGFuZGVkPWZhbHNlXSAubmF2LWhhbWJ1cmdlci1pY29uOjpiZWZvcmUsIGhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD1mYWxzZV0gLm5hdi1oYW1idXJnZXItaWNvbjo6YWZ0ZXIge1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Y29sb3I7XG59XG5oZWFkZXIgbmF2W2FyaWEtZXhwYW5kZWQ9ZmFsc2VdIC5uYXYtaGFtYnVyZ2VyLWljb246OmJlZm9yZSB7XG4gIHRvcDogLTZweDtcbn1cbmhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD1mYWxzZV0gLm5hdi1oYW1idXJnZXItaWNvbjo6YWZ0ZXIge1xuICB0b3A6IDZweDtcbn1cbmhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD10cnVlXSAubmF2LWhhbWJ1cmdlci1pY29uIHtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuaGVhZGVyIG5hdlthcmlhLWV4cGFuZGVkPXRydWVdIC5uYXYtaGFtYnVyZ2VyLWljb246OmJlZm9yZSB7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiAxcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMnB4IDFweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5oZWFkZXIgbmF2W2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLm5hdi1oYW1idXJnZXItaWNvbjo6YWZ0ZXIge1xuICB0b3A6IDNweDtcbiAgbGVmdDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDJweCAxcHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0b3A6IHVuc2V0O1xuICBib3R0b206IDNweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbmhlYWRlciAubmF2LWJyYW5kIHtcbiAgZ3JpZC1hcmVhOiBicmFuZDtcbiAgLyogZmxleC1iYXNpczogMTI4cHg7ICovXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUtcyk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci13aGl0ZSk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHggMXJlbTtcbn1cbmhlYWRlciAubmF2LWJyYW5kID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyMHB4O1xufVxuaGVhZGVyIG5hdiAubmF2LWJyYW5kIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG5oZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMge1xuICBncmlkLWFyZWE6IHNlY3Rpb25zO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1iZWlnZSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbmhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD10cnVlXSAubmF2LXNlY3Rpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5oZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgdWwgPiBsaSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5oZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgdWwgPiBsaSA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5oZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgdWwgPiBsaSA+IHVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyB1bCA+IGxpID4gdWwgPiBsaSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5oZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgdWwgPiBsaSA+IHVsID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xufVxuaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIHVsID4gbGkgPiB1bCA+IGxpID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIHVsID4gbGkgPiB1bCA+IGxpID4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyB1bCA+IGxpID4gdWwgPiBsaSA+IHVsID4gbGkge1xuICBjb2xvcjogIzY5NjE1ODtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmhlYWRlciBuYXYgLm5hdi10b29scyB7XG4gIGdyaWQtYXJlYTogdG9vbHM7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWJlaWdlKTtcbn1cbmhlYWRlciBuYXYgLm5hdi10b29scyBpbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGdhcDogM3JlbTtcbn1cbmhlYWRlciBuYXYgLm5hdi10b29scyB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDJyZW07XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgPiBkaXYgcDpudGgtb2YtdHlwZSgyKSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmhlYWRlciBuYXYgLm5hdi10b29scyBwOm50aC1vZi10eXBlKDIpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgcDpudGgtb2YtdHlwZSgyKSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1iZWlnZSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIHA6bnRoLW9mLXR5cGUoMikgLmljb24tc2VhcmNoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDc0NTtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgcDpudGgtb2YtdHlwZSgyKSAuaWNvbi1zZWFyY2g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1yZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIHA6bnRoLW9mLXR5cGUoMikgLmljb24tc2VhcmNoIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmhlYWRlciBuYXYgLm5hdi10b29scyB1bCBsaTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvci1yZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgdWwgbGk6bnRoLW9mLXR5cGUoMiksIGhlYWRlciBuYXYgLm5hdi10b29scyB1bCBsaTpudGgtb2YtdHlwZSgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIHVsIGxpIHNwYW4ge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIC5pY29uIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgLnRvb2wtbGluay1yZWdpc3RlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgLnRvb2wtbGluay1yZWdpc3RlciA+IGRpdjpub3QoLmxpbmtzKSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5oZWFkZXIgbmF2IC5uYXYtdG9vbHMgLnRvb2wtbGluay1yZWdpc3RlciAubGlua3Mgc3BhbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuaGVhZGVyIG5hdiAubmF2LXRvb2xzIC50b29sLWxpbmstcmVnaXN0ZXIgLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAod2lkdGggPD0gMTQ0MHB4KSB7XG4gIGhlYWRlciAuc2VjdGlvbiA+IGRpdiB7XG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi8qIGhlYWRlciBuYXYgLiAqL1xuQG1lZGlhICh3aWR0aCA+PSA5MDBweCkge1xuICBoZWFkZXIgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIGhlYWRlciBuYXZbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxufVxuLyogaGFtYnVyZ2VyICovXG5AbWVkaWEgKHdpZHRoID49IDkwMHB4KSB7XG4gIGhlYWRlciBuYXYgLm5hdi1oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4vKiBicmFuZCAqL1xuLyogc2VjdGlvbnMgKi9cbkBtZWRpYSAod2lkdGggPj0gOTAwcHgpIHtcbiAgaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgaGVhZGVyIG5hdlthcmlhLWV4cGFuZGVkPXRydWVdIC5uYXYtc2VjdGlvbnMge1xuICAgIGFsaWduLXNlbGY6IHVuc2V0O1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyAubmF2LWRyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgaGVhZGVyIG5hdiAubmF2LXNlY3Rpb25zIC5kZWZhdWx0LWNvbnRlbnQtd3JhcHBlciA+IHVsID4gbGkge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgPiB1bCA+IGxpLm5hdi1kcm9wOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3ItcmVkKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkZmQ2O1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgPiB1bCA+IGxpID4gdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyAuZGVmYXVsdC1jb250ZW50LXdyYXBwZXIgPiB1bCA+IGxpW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gPiB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZGZkNjtcbiAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgfVxuICBoZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgdWwgPiBsaSA+IHVsID4gbGkgPiBhIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgfVxuICBoZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgLmRlZmF1bHQtY29udGVudC13cmFwcGVyID4gdWwgPiBsaSA+IHVsID4gbGkge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIC8qIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyAubmF2LWRyb3A6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICByaWdodDogMnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Y29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxcHggMCAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gIH1cblxuICBoZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgLm5hdi1kcm9wW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOjphZnRlciB7XG4gICAgdG9wOiB1bnNldDtcbiAgICBib3R0b206IC41ZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgfSAqL1xuICAvKiBoZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMgLmRlZmF1bHQtY29udGVudC13cmFwcGVyID4gdWwgPiBsaSA+IHVsOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgbGVmdDogOHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB2YXIoLS1saWdodC1jb2xvcik7XG4gIH0gKi9cbn1cbi8qIHRvb2xzICovXG5AbWVkaWEgKHdpZHRoIDw9IDk5MnB4KSB7XG4gIGhlYWRlciBuYXYgLm5hdi10b29scyAudG9vbC1saW5rLXJlZ2lzdGVyIGRpdjpub3QoLm1vYmlsZS1sYWJlbCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIG5hdiAubmF2LXRvb2xzIC50b29sLWxpbmstcmVnaXN0ZXIgLm1vYmlsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgaGVhZGVyIG5hdiAubmF2LXRvb2xzIHVsIHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxuICBoZWFkZXIgbmF2IC5uYXYtdG9vbHMgdWwgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBoZWFkZXIgbmF2IC5uYXYtdG9vbHMgPiBkaXYge1xuICAgIGdhcDogMS41cmVtO1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi10b29scyBwOm50aC1vZi10eXBlKDIpIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIG1pbi13aWR0aDogMTVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itd2hpdGUpO1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi1zZWN0aW9ucyB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGhlYWRlciBuYXYgLm5hdi10b29scyBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSA3NjhweCkge1xuICBoZWFkZXIgbmF2IC5uYXYtdG9vbHMgdWwgbGk6bnRoLW9mLXR5cGUoMSksIGhlYWRlciBuYXYgLm5hdi10b29scyB1bCBsaTpudGgtb2YtdHlwZSgyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBoZWFkZXIgbmF2IC5uYXYtdG9vbHMgcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhICh3aWR0aCA8PSA5MDBweCkge1xuICBoZWFkZXIgbmF2IC5uYXYtc2VjdGlvbnMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUFBO0FBR0U7RUFDRSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFITjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBTEo7QUFTSTtFQUNFLG1IQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBOO0FBVUk7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBWUk7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWTjtBQVlNO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBVlI7QUFjSTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVpOO0FBY007RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFaUjtBQWVNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFiUjtBQWlCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBZk47QUFpQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQWZSO0FBa0JNO0VBQ0UsU0FBQTtBQWhCUjtBQW1CTTtFQUNFLFFBQUE7QUFqQlI7QUFxQkk7RUFDRSxZQUFBO0FBbkJOO0FBcUJNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQW5CUjtBQXNCTTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBcEJSO0FBeUJFO0VBQ0UsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF4Qko7QUEwQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBeEJOO0FBNkJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEzQk47QUE4Qkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7QUE1Qk47QUErQkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTdCTjtBQWdDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGdCQUFBO0FBOUJSO0FBaUNVO0VBQ0UscUJBQUE7QUEvQlo7QUFrQ1U7RUFDRSxhQUFBO0FBaENaO0FBa0NZO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFxQkEsZ0JBQUE7QUFwRGQ7QUFrQ2dCO0VBQ0Usa0JBQUE7QUFoQ2xCO0FBa0NrQjtFQUNFLDBCQUFBO0FBaENwQjtBQW9DZ0I7RUFDRSxjQUFBO0FBbENsQjtBQW9Da0I7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFsQ3BCO0FBOENJO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtBQTVDTjtBQThDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE1Q1I7QUErQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUE3Q1I7QUFnRE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQTlDUjtBQWlETTtFQUNFLGtCQUFBO0FBL0NSO0FBa0RNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoRFI7QUFrRFE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBaERWO0FBbURRO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFqRFY7QUFtRFU7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQWpEWjtBQW9EVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFsRFo7QUF1RE07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFyRFI7QUF1RFE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFyRFY7QUF3RFE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQXREVjtBQXlEUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBdkRWO0FBMkRNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF6RFI7QUE0RE07RUFDRSxtQkFBQTtBQTFEUjtBQTREUTtFQUNFLGlCQUFBO0FBMURWO0FBNkRRO0VBQ0UsMEJBQUE7QUEzRFY7QUE4RFE7RUFDRSxhQUFBO0FBNURWOztBQW1FQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxjQUFBO0VBaEVGO0FBQ0Y7QUFtRUEsaUJBQUE7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUFsRUY7RUFvRUU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUFsRUo7QUFDRjtBQXNFQSxjQUFBO0FBRUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQXJFRjtBQUNGO0FBd0VBLFVBQUE7QUFFQSxhQUFBO0FBRUE7RUFFSTtJQUNFLGNBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBekVKO0VBNEVFO0lBQ0UsaUJBQUE7RUExRUo7RUE4RUk7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUE1RU47RUErRUk7SUFDRSxhQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSx1QkFBQTtFQTdFTjtFQWdGSTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBOUVOO0VBZ0ZNO0lBQ0UsMEJBQUE7SUFDQSx5QkFBQTtFQTlFUjtFQWlGTTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQS9FUjtFQWtGTTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0VBaEZSO0VBb0ZJO0lBQ0UsaUJBQUE7RUFsRk47RUFxRkk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFQW5GTjtFQXdGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQUE7RUFvQkE7Ozs7Ozs7Ozs7S0FBQTtBQTdFRjtBQTBGQSxVQUFBO0FBRUE7RUFJUTtJQUNFLGFBQUE7RUE1RlI7RUErRk07SUFDRSxjQUFBO0VBN0ZSO0VBaUdJO0lBQ0UsV0FBQTtFQS9GTjtFQWlHTTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQS9GUjtFQW1HSTtJQUNFLFdBQUE7RUFqR047RUFvR0k7SUFDRSxnQkFBQTtJQUNBLHVDQUFBO0VBbEdOO0VBc0dFO0lBQ0UsU0FBQTtFQXBHSjtFQXVHRTtJQUNFLFlBQUE7RUFyR0o7QUFDRjtBQXlHQTtFQUdNO0lBQ0UsYUFBQTtFQXpHTjtFQTZHRTtJQUNFLGFBQUE7RUEzR0o7QUFDRjtBQStHQTtFQUNFO0lBQ0UsYUFBQTtFQTdHRjtBQUNGXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7XG4gIGJ1aWxkQmxvY2ssXG4gIGxvYWRIZWFkZXIsXG4gIGxvYWRGb290ZXIsXG4gIGRlY29yYXRlQnV0dG9ucyxcbiAgZGVjb3JhdGVJY29ucyxcbiAgZGVjb3JhdGVTZWN0aW9ucyxcbiAgZGVjb3JhdGVCbG9ja3MsXG4gIGRlY29yYXRlVGVtcGxhdGVBbmRUaGVtZSxcbiAgd2FpdEZvckZpcnN0SW1hZ2UsXG4gIGxvYWRTZWN0aW9uLFxuICBsb2FkU2VjdGlvbnMsXG4gIGxvYWRDU1MsXG59IGZyb20gJy4vYWVtLmpzJztcblxuLyoqXG4gKiBCdWlsZHMgaGVybyBibG9jayBhbmQgcHJlcGVuZHMgdG8gbWFpbiBpbiBhIG5ldyBzZWN0aW9uLlxuICogQHBhcmFtIHtFbGVtZW50fSBtYWluIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBidWlsZEhlcm9CbG9jayhtYWluKSB7XG4gIGNvbnN0IGgxID0gbWFpbi5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBwaWN0dXJlID0gbWFpbi5xdWVyeVNlbGVjdG9yKCdwaWN0dXJlJyk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gIGlmIChoMSAmJiBwaWN0dXJlICYmIChoMS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihwaWN0dXJlKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fUFJFQ0VESU5HKSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmFwcGVuZChidWlsZEJsb2NrKCdoZXJvJywgeyBlbGVtczogW3BpY3R1cmUsIGgxXSB9KSk7XG4gICAgbWFpbi5wcmVwZW5kKHNlY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogbG9hZCBmb250cy5jc3MgYW5kIHNldCBhIHNlc3Npb24gc3RvcmFnZSBmbGFnXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRGb250cygpIHtcbiAgYXdhaXQgbG9hZENTUyhgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vc3R5bGVzL2ZvbnRzLmNzc2ApO1xuICB0cnkge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKCdsb2NhbGhvc3QnKSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZm9udHMtbG9hZGVkJywgJ3RydWUnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhbGwgc3ludGhldGljIGJsb2NrcyBpbiBhIGNvbnRhaW5lciBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBtYWluIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBidWlsZEF1dG9CbG9ja3MobWFpbikge1xuICB0cnkge1xuICAgIGJ1aWxkSGVyb0Jsb2NrKG1haW4pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignQXV0byBCbG9ja2luZyBmYWlsZWQnLCBlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWNvcmF0ZXMgdGhlIG1haW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWFpbiBUaGUgbWFpbiBlbGVtZW50XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gZGVjb3JhdGVNYWluKG1haW4pIHtcbiAgLy8gaG9wZWZ1bGx5IGZvcndhcmQgY29tcGF0aWJsZSBidXR0b24gZGVjb3JhdGlvblxuICBkZWNvcmF0ZUJ1dHRvbnMobWFpbik7XG4gIGRlY29yYXRlSWNvbnMobWFpbik7XG4gIGJ1aWxkQXV0b0Jsb2NrcyhtYWluKTtcbiAgZGVjb3JhdGVTZWN0aW9ucyhtYWluKTtcbiAgZGVjb3JhdGVCbG9ja3MobWFpbik7XG59XG5cbi8qKlxuICogTG9hZHMgZXZlcnl0aGluZyBuZWVkZWQgdG8gZ2V0IHRvIExDUC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZG9jIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRWFnZXIoZG9jKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2VuJztcbiAgZGVjb3JhdGVUZW1wbGF0ZUFuZFRoZW1lKCk7XG4gIGNvbnN0IG1haW4gPSBkb2MucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBpZiAobWFpbikge1xuICAgIGRlY29yYXRlTWFpbihtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpO1xuICAgIGF3YWl0IGxvYWRTZWN0aW9uKG1haW4ucXVlcnlTZWxlY3RvcignLnNlY3Rpb24nKSwgd2FpdEZvckZpcnN0SW1hZ2UpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvKiBpZiBkZXNrdG9wIChwcm94eSBmb3IgZmFzdCBjb25uZWN0aW9uKSBvciBmb250cyBhbHJlYWR5IGxvYWRlZCwgbG9hZCBmb250cy5jc3MgKi9cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTAwIHx8IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2ZvbnRzLWxvYWRlZCcpKSB7XG4gICAgICBsb2FkRm9udHMoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBldmVyeXRoaW5nIHRoYXQgZG9lc24ndCBuZWVkIHRvIGJlIGRlbGF5ZWQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGRvYyBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZExhenkoZG9jKSB7XG4gIGNvbnN0IG1haW4gPSBkb2MucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBhd2FpdCBsb2FkU2VjdGlvbnMobWFpbik7XG5cbiAgY29uc3QgeyBoYXNoIH0gPSB3aW5kb3cubG9jYXRpb247XG4gIGNvbnN0IGVsZW1lbnQgPSBoYXNoID8gZG9jLmdldEVsZW1lbnRCeUlkKGhhc2guc3Vic3RyaW5nKDEpKSA6IGZhbHNlO1xuICBpZiAoaGFzaCAmJiBlbGVtZW50KSBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG5cbiAgbG9hZEhlYWRlcihkb2MucXVlcnlTZWxlY3RvcignaGVhZGVyJykpO1xuICBsb2FkRm9vdGVyKGRvYy5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSk7XG5cbiAgbG9hZENTUyhgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vc3R5bGVzL2xhenktc3R5bGVzLmNzc2ApO1xuICBsb2FkRm9udHMoKTtcbn1cblxuLyoqXG4gKiBMb2FkcyBldmVyeXRoaW5nIHRoYXQgaGFwcGVucyBhIGxvdCBsYXRlcixcbiAqIHdpdGhvdXQgaW1wYWN0aW5nIHRoZSB1c2VyIGV4cGVyaWVuY2UuXG4gKi9cbmZ1bmN0aW9uIGxvYWREZWxheWVkKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG4gIHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgYCR7d2luZG93LmhseC5jb2RlQmFzZVBhdGh9L3NjcmlwdHMvZGVsYXllZC5qc2BcbiAgICAgICksXG4gICAgMzAwMCxcbiAgKTtcbiAgLy8gbG9hZCBhbnl0aGluZyB0aGF0IGNhbiBiZSBwb3N0cG9uZWQgdG8gdGhlIGxhdGVzdCBoZXJlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBhd2FpdCBsb2FkRWFnZXIoZG9jdW1lbnQpO1xuICBhd2FpdCBsb2FkTGF6eShkb2N1bWVudCk7XG4gIGxvYWREZWxheWVkKCk7XG59XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdHJpY3RNb2RlIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJSZWFjdERPTSIsImdldE1ldGFkYXRhIiwibG9hZEZyYWdtZW50IiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiZXh0cmFjdENvbnRlbnRGcm9tRE9NIiwibmF2TWV0YSIsIm5hdlBhdGgiLCJVUkwiLCJwYXRobmFtZSIsImZyYWdtZW50IiwiYnJhbmRzQ29udGFpbmVyIiwiaGVhZGVySXRlbXNDb250YWluZXIiLCJuYXZJdGVtc0NvbnRhaW5lciIsImNoaWxkcmVuIiwiYnJhbmRJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJwIiwibGluayIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJzb3VyY2UiLCJpbWdTcmMiLCJyZXBsYWNlIiwidGV4dCIsImhlYWRlckl0ZW1zIiwibGkiLCJuYXZJdGVtcyIsIm91dGVyVGV4dCIsIkhlYWRlciIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJtZW51TGFiZWwiLCJzZXRNZW51TGFiZWwiLCJicmFuZHMiLCJpdGVtIiwiaW5kZXgiLCJocmVmIiwidGl0bGUiLCJ0eXBlIiwic3Jjc2V0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwibG9hZGluZyIsImFsdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGVyTGVmdFNlY3Rpb24iLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsInByb2ZpbGVMaXN0SXRlbSIsImxpc3RJdGVtIiwiaGVhZGVyUmlnaHRTZWN0aW9uIiwic2xpY2UiLCJuYXZJdGVtc0xpc3QiLCJ0b2dnbGVNZW51IiwiaWQiLCJvbkNsaWNrIiwiZGlzcGxheU5hbWUiLCJkZWNvcmF0ZSIsImJsb2NrIiwiaGVhZGVyUHJvcHMiLCJjcmVhdGVSb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==