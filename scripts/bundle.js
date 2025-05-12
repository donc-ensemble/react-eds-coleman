/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "../scripts/aem.js":
/*!*************************!*\
  !*** ../scripts/aem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBlock: () => (/* binding */ buildBlock),
/* harmony export */   createOptimizedPicture: () => (/* binding */ createOptimizedPicture),
/* harmony export */   decorateBlock: () => (/* binding */ decorateBlock),
/* harmony export */   decorateBlocks: () => (/* binding */ decorateBlocks),
/* harmony export */   decorateButtons: () => (/* binding */ decorateButtons),
/* harmony export */   decorateIcons: () => (/* binding */ decorateIcons),
/* harmony export */   decorateSections: () => (/* binding */ decorateSections),
/* harmony export */   decorateTemplateAndTheme: () => (/* binding */ decorateTemplateAndTheme),
/* harmony export */   fetchPlaceholders: () => (/* binding */ fetchPlaceholders),
/* harmony export */   getMetadata: () => (/* binding */ getMetadata),
/* harmony export */   loadBlock: () => (/* binding */ loadBlock),
/* harmony export */   loadBlocks: () => (/* binding */ loadBlocks),
/* harmony export */   loadCSS: () => (/* binding */ loadCSS),
/* harmony export */   loadFooter: () => (/* binding */ loadFooter),
/* harmony export */   loadHeader: () => (/* binding */ loadHeader),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   loadSection: () => (/* binding */ loadSection),
/* harmony export */   loadSections: () => (/* binding */ loadSections),
/* harmony export */   readBlockConfig: () => (/* binding */ readBlockConfig),
/* harmony export */   sampleRUM: () => (/* binding */ sampleRUM),
/* harmony export */   setup: () => (/* binding */ setup),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toClassName: () => (/* binding */ toClassName),
/* harmony export */   waitForFirstImage: () => (/* binding */ waitForFirstImage),
/* harmony export */   wrapTextNodes: () => (/* binding */ wrapTextNodes)
/* harmony export */ });
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env browser */
function sampleRUM(checkpoint, data) {
  // eslint-disable-next-line max-len
  const timeShift = () => (window.performance ? window.performance.now() : Date.now() - window.hlx.rum.firstReadTime);
  try {
    window.hlx = window.hlx || {};
    sampleRUM.enhance = () => {};
    if (!window.hlx.rum) {
      const param = new URLSearchParams(window.location.search).get('rum');
      const weight = (window.SAMPLE_PAGEVIEWS_AT_RATE === 'high' && 10)
        || (window.SAMPLE_PAGEVIEWS_AT_RATE === 'low' && 1000)
        || (param === 'on' && 1)
        || 100;
      const id = Math.random().toString(36).slice(-4);
      const isSelected = param !== 'off' && Math.random() * weight < 1;
      // eslint-disable-next-line object-curly-newline, max-len
      window.hlx.rum = {
        weight,
        id,
        isSelected,
        firstReadTime: window.performance ? window.performance.timeOrigin : Date.now(),
        sampleRUM,
        queue: [],
        collector: (...args) => window.hlx.rum.queue.push(args),
      };
      if (isSelected) {
        const dataFromErrorObj = (error) => {
          const errData = { source: 'undefined error' };
          try {
            errData.target = error.toString();
            errData.source = error.stack
              .split('\n')
              .filter((line) => line.match(/https?:\/\//))
              .shift()
              .replace(/at ([^ ]+) \((.+)\)/, '$1@$2')
              .replace(/ at /, '@')
              .trim();
          } catch (err) {
            /* error structure was not as expected */
          }
          return errData;
        };

        window.addEventListener('error', ({ error }) => {
          const errData = dataFromErrorObj(error);
          sampleRUM('error', errData);
        });

        window.addEventListener('unhandledrejection', ({ reason }) => {
          let errData = {
            source: 'Unhandled Rejection',
            target: reason || 'Unknown',
          };
          if (reason instanceof Error) {
            errData = dataFromErrorObj(reason);
          }
          sampleRUM('error', errData);
        });

        sampleRUM.baseURL = sampleRUM.baseURL || new URL(window.RUM_BASE || '/', new URL('https://rum.hlx.page'));
        sampleRUM.collectBaseURL = sampleRUM.collectBaseURL || sampleRUM.baseURL;
        sampleRUM.sendPing = (ck, time, pingData = {}) => {
          // eslint-disable-next-line max-len, object-curly-newline
          const rumData = JSON.stringify({
            weight,
            id,
            referer: window.location.href,
            checkpoint: ck,
            t: time,
            ...pingData,
          });
          const urlParams = window.RUM_PARAMS
            ? `?${new URLSearchParams(window.RUM_PARAMS).toString()}`
            : '';
          const { href: url, origin } = new URL(
            `.rum/${weight}${urlParams}`,
            sampleRUM.collectBaseURL,
          );
          const body = origin === window.location.origin
            ? new Blob([rumData], { type: 'application/json' })
            : rumData;
          navigator.sendBeacon(url, body);
          // eslint-disable-next-line no-console
          console.debug(`ping:${ck}`, pingData);
        };
        sampleRUM.sendPing('top', timeShift());

        sampleRUM.enhance = () => {
          // only enhance once
          if (document.querySelector('script[src*="rum-enhancer"]')) return;

          const script = document.createElement('script');
          script.src = new URL(
            '.rum/@adobe/helix-rum-enhancer@^2/src/index.js',
            sampleRUM.baseURL,
          ).href;
          document.head.appendChild(script);
        };
        if (!window.hlx.RUM_MANUAL_ENHANCE) {
          sampleRUM.enhance();
        }
      }
    }
    if (window.hlx.rum && window.hlx.rum.isSelected && checkpoint) {
      window.hlx.rum.collector(checkpoint, data, timeShift());
    }
    document.dispatchEvent(new CustomEvent('rum', { detail: { checkpoint, data } }));
  } catch (error) {
    // something went awry
  }
}

/**
 * Setup block utils.
 */
function setup() {
  window.hlx = window.hlx || {};
  window.hlx.RUM_MASK_URL = 'full';
  window.hlx.RUM_MANUAL_ENHANCE = true;
  window.hlx.codeBasePath = '';
  window.hlx.lighthouse = new URLSearchParams(window.location.search).get('lighthouse') === 'on';

  const scriptEl = document.querySelector('script[src$="/scripts/scripts.js"]');
  if (scriptEl) {
    try {
      [window.hlx.codeBasePath] = new URL(scriptEl.src).pathname.split('/scripts/scripts.js');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

/**
 * Auto initializiation.
 */

function init() {
  setup();
  sampleRUM();
}

/**
 * Sanitizes a string for use as class name.
 * @param {string} name The unsanitized string
 * @returns {string} The class name
 */
function toClassName(name) {
  return typeof name === 'string'
    ? name
      .toLowerCase()
      .replace(/[^0-9a-z]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    : '';
}

/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
function toCamelCase(name) {
  return toClassName(name).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Extracts the config from a block.
 * @param {Element} block The block element
 * @returns {object} The block config
 */
// eslint-disable-next-line import/prefer-default-export
function readBlockConfig(block) {
  const config = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    if (row.children) {
      const cols = [...row.children];
      if (cols[1]) {
        const col = cols[1];
        const name = toClassName(cols[0].textContent);
        let value = '';
        if (col.querySelector('a')) {
          const as = [...col.querySelectorAll('a')];
          if (as.length === 1) {
            value = as[0].href;
          } else {
            value = as.map((a) => a.href);
          }
        } else if (col.querySelector('img')) {
          const imgs = [...col.querySelectorAll('img')];
          if (imgs.length === 1) {
            value = imgs[0].src;
          } else {
            value = imgs.map((img) => img.src);
          }
        } else if (col.querySelector('p')) {
          const ps = [...col.querySelectorAll('p')];
          if (ps.length === 1) {
            value = ps[0].textContent;
          } else {
            value = ps.map((p) => p.textContent);
          }
        } else value = row.children[1].textContent;
        config[name] = value;
      }
    }
  });
  return config;
}

/**
 * Loads a CSS file.
 * @param {string} href URL to the CSS file
 */
async function loadCSS(href) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.append(link);
    } else {
      resolve();
    }
  });
}

/**
 * Loads a non module JS file.
 * @param {string} src URL to the JS file
 * @param {Object} attrs additional optional attributes
 */
async function loadScript(src, attrs) {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`head > script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      if (attrs) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const attr in attrs) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    } else {
      resolve();
    }
  });
}

/**
 * Retrieves the content of metadata tags.
 * @param {string} name The metadata name (or property)
 * @param {Document} doc Document object to query for metadata. Defaults to the window's document
 * @returns {string} The metadata value(s)
 */
function getMetadata(name, doc = document) {
  const attr = name && name.includes(':') ? 'property' : 'name';
  const meta = [...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)]
    .map((m) => m.content)
    .join(', ');
  return meta || '';
}

/**
 * Updates all section status in a container element.
 * @param {Element} main The container element
 */
function updateSectionsStatus(main) {
  const sections = [...main.querySelectorAll(':scope > div.section')];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const status = section.dataset.sectionStatus;
    if (status !== 'loaded') {
      const loadingBlock = section.querySelector(
        '.block[data-block-status="initialized"], .block[data-block-status="loading"]'
      );
      if (loadingBlock) {
        section.dataset.sectionStatus = 'loading';
        break;
      } else {
        section.dataset.sectionStatus = 'loaded';
        section.style.display = null;
      }
    }
  }
}



/**
 * Returns a picture element with webp and fallbacks
 * @param {string} src The image URL
 * @param {string} [alt] The image alternative text
 * @param {boolean} [eager] Set loading attribute to eager
 * @param {Array} [breakpoints] Breakpoints and corresponding params (eg. width)
 * @returns {Element} The picture element
 */
function createOptimizedPicture(
  src,
  alt = '',
  eager = false,
  breakpoints = [{ media: '(min-width: 600px)', width: '2000' }, { width: '750' }],
) {
  const url = new URL(src, window.location.href);
  const picture = document.createElement('picture');
  const { pathname } = url;
  const ext = pathname.substring(pathname.lastIndexOf('.') + 1);

  // webp
  breakpoints.forEach((br) => {
    const source = document.createElement('source');
    if (br.media) source.setAttribute('media', br.media);
    source.setAttribute('type', 'image/webp');
    source.setAttribute('srcset', `${pathname}?width=${br.width}&format=webply&optimize=medium`);
    picture.appendChild(source);
  });

  // fallback
  breakpoints.forEach((br, i) => {
    if (i < breakpoints.length - 1) {
      const source = document.createElement('source');
      if (br.media) source.setAttribute('media', br.media);
      source.setAttribute('srcset', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
      picture.appendChild(source);
    } else {
      const img = document.createElement('img');
      img.setAttribute('loading', eager ? 'eager' : 'lazy');
      img.setAttribute('alt', alt);
      picture.appendChild(img);
      img.setAttribute('src', `${pathname}?width=${br.width}&format=${ext}&optimize=medium`);
    }
  });

  return picture;
}

/**
 * Set template (page structure) and theme (page styles).
 */
function decorateTemplateAndTheme() {
  const addClasses = (element, classes) => {
    classes.split(',').forEach((c) => {
      element.classList.add(toClassName(c.trim()));
    });
  };
  const template = getMetadata('template');
  if (template) addClasses(document.body, template);
  const theme = getMetadata('theme');
  if (theme) addClasses(document.body, theme);
}

/**
 * Wrap inline text content of block cells within a <p> tag.
 * @param {Element} block the block element
 */
function wrapTextNodes(block) {
  const validWrappers = [
    'P',
    'PRE',
    'UL',
    'OL',
    'PICTURE',
    'TABLE',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
  ];

  const wrap = (el) => {
    const wrapper = document.createElement('p');
    wrapper.append(...el.childNodes);
    el.append(wrapper);
  };

  block.querySelectorAll(':scope > div > div').forEach((blockColumn) => {
    if (blockColumn.hasChildNodes()) {
      const hasWrapper = !!blockColumn.firstElementChild
        && validWrappers.some((tagName) => blockColumn.firstElementChild.tagName === tagName);
      if (!hasWrapper) {
        wrap(blockColumn);
      } else if (
        blockColumn.firstElementChild.tagName === 'PICTURE'
        && (blockColumn.children.length > 1 || !!blockColumn.textContent.trim())
      ) {
        wrap(blockColumn);
      }
    }
  });
}

/**
 * Decorates paragraphs containing a single link as buttons.
 * @param {Element} element container element
 */
function decorateButtons(element) {
  element.querySelectorAll('a').forEach((a) => {
    a.title = a.title || a.textContent;
    if (a.href !== a.textContent) {
      const up = a.parentElement;
      const twoup = a.parentElement.parentElement;
      if (!a.querySelector('img')) {
        if (up.childNodes.length === 1 && (up.tagName === 'P' || up.tagName === 'DIV')) {
          a.className = 'button'; // default
          up.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'STRONG'
          && twoup.childNodes.length === 1
          && twoup.tagName === 'P'
        ) {
          a.className = 'button primary';
          twoup.classList.add('button-container');
        }
        if (
          up.childNodes.length === 1
          && up.tagName === 'EM'
          && twoup.childNodes.length === 1
          && twoup.tagName === 'P'
        ) {
          a.className = 'button secondary';
          twoup.classList.add('button-container');
        }
      }
    }
  });
}

/**
 * Add <img> for icon, prefixed with codeBasePath and optional prefix.
 * @param {Element} [span] span element with icon classes
 * @param {string} [prefix] prefix to be added to icon src
 * @param {string} [alt] alt text to be added to icon
 */
function decorateIcon(span, prefix = '', alt = '') {
  const iconName = Array.from(span.classList)
    .find((c) => c.startsWith('icon-'))
    .substring(5);
  const img = document.createElement('img');
  img.dataset.iconName = iconName;
  img.src = `${window.hlx.codeBasePath}${prefix}/icons/${iconName}.svg`;
  img.alt = alt;
  img.loading = 'lazy';
  span.append(img);
}

/**
 * Add <img> for icons, prefixed with codeBasePath and optional prefix.
 * @param {Element} [element] Element containing icons
 * @param {string} [prefix] prefix to be added to icon the src
 */
function decorateIcons(element, prefix = '') {
  const icons = [...element.querySelectorAll('span.icon')];
  icons.forEach((span) => {
    decorateIcon(span, prefix);
  });
}

/**
 * Decorates all sections in a container element.
 * @param {Element} main The container element
 */
function decorateSections(main) {
  main.querySelectorAll(':scope > div').forEach((section) => {
    const wrappers = [];
    let defaultContent = false;
    [...section.children].forEach((e) => {
      if (e.tagName === 'DIV' || !defaultContent) {
        const wrapper = document.createElement('div');
        wrappers.push(wrapper);
        defaultContent = e.tagName !== 'DIV';
        if (defaultContent) wrapper.classList.add('default-content-wrapper');
      }
      wrappers[wrappers.length - 1].append(e);
    });
    wrappers.forEach((wrapper) => section.append(wrapper));
    section.classList.add('section');
    section.dataset.sectionStatus = 'initialized';
    section.style.display = 'none';

    // Process section metadata
    const sectionMeta = section.querySelector('div.section-metadata');
    if (sectionMeta) {
      const meta = readBlockConfig(sectionMeta);
      Object.keys(meta).forEach((key) => {
        if (key === 'style') {
          const styles = meta.style
            .split(',')
            .filter((style) => style)
            .map((style) => toClassName(style.trim()));
          styles.forEach((style) => section.classList.add(style));
        } else {
          section.dataset[toCamelCase(key)] = meta[key];
        }
      });
      sectionMeta.parentNode.remove();
    }
  });
}

/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {object} Window placeholders object
 */
// eslint-disable-next-line import/prefer-default-export
async function fetchPlaceholders(prefix = 'default') {
  window.placeholders = window.placeholders || {};
  if (!window.placeholders[prefix]) {
    window.placeholders[prefix] = new Promise((resolve) => {
      fetch(`${prefix === 'default' ? '' : prefix}/placeholders.json`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((json) => {
          const placeholders = {};
          json.data
            .filter((placeholder) => placeholder.Key)
            .forEach((placeholder) => {
              placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
            });
          window.placeholders[prefix] = placeholders;
          resolve(window.placeholders[prefix]);
        })
        .catch(() => {
          // error loading placeholders
          window.placeholders[prefix] = {};
          resolve(window.placeholders[prefix]);
        });
    });
  }
  return window.placeholders[`${prefix}`];
}

/**
 * Builds a block DOM Element from a two dimensional array, string, or object
 * @param {string} blockName name of the block
 * @param {*} content two dimensional array or string or object of content
 */
function buildBlock(blockName, content) {
  const table = Array.isArray(content) ? content : [[content]];
  const blockEl = document.createElement('div');
  // build image block nested div structure
  blockEl.classList.add(blockName);
  table.forEach((row) => {
    const rowEl = document.createElement('div');
    row.forEach((col) => {
      const colEl = document.createElement('div');
      const vals = col.elems ? col.elems : [col];
      vals.forEach((val) => {
        if (val) {
          if (typeof val === 'string') {
            colEl.innerHTML += val;
          } else {
            colEl.appendChild(val);
          }
        }
      });
      rowEl.appendChild(colEl);
    });
    blockEl.appendChild(rowEl);
  });
  return blockEl;
}

/**
 * Loads JS and CSS for a block.
 * @param {Element} block The block element
 */
async function loadBlock(block) {
  const status = block.dataset.blockStatus;
  if (status !== 'loading' && status !== 'loaded') {
    block.dataset.blockStatus = 'loading';
    const { blockName } = block.dataset;
    try {
      /*
      No need to load block CSS separately when using webpack
      ```
      const cssLoaded = loadCSS(
        `${window.hlx.codeBasePath}/blocks/${blockName}/${blockName}.css`,
      );
      ```
      */
      const cssLoaded = Promise.resolve();
      const decorationComplete = new Promise((resolve) => {
        (async () => {
          try {
            const mod = await import(
              /* webpackIgnore: true */
              `${window.hlx.codeBasePath}/blocks/${blockName}/${blockName}.js`
            );
            if (mod.default) {
              await mod.default(block);
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`failed to load module for ${blockName}`, error);
          }
          resolve();
        })();
      });
      await Promise.all([cssLoaded, decorationComplete]);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`failed to load block ${blockName}`, error);
    }
    block.dataset.blockStatus = 'loaded';
  }
  return block;
}

/**
 * Loads JS and CSS for all blocks in a container element.
 * @param {Element} main The container element
 */
async function loadBlocks(main) {
  updateSectionsStatus(main);
  const blocks = [...main.querySelectorAll('div.block')];
  for (let i = 0; i < blocks.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await loadBlock(blocks[i]);
    updateSectionsStatus(main);
  }
}

/**
 * Decorates a block.
 * @param {Element} block The block element
 */
function decorateBlock(block) {
  const shortBlockName = block.classList[0];
  if (shortBlockName) {
    block.classList.add('block');
    block.dataset.blockName = shortBlockName;
    block.dataset.blockStatus = 'initialized';
    wrapTextNodes(block);
    const blockWrapper = block.parentElement;
    blockWrapper.classList.add(`${shortBlockName}-wrapper`);
    const section = block.closest('.section');
    if (section) section.classList.add(`${shortBlockName}-container`);
  }
}

/**
 * Decorates all blocks in a container element.
 * @param {Element} main The container element
 */
function decorateBlocks(main) {
  main.querySelectorAll('div.section > div > div').forEach(decorateBlock);
}

/**
 * Loads a block named 'header' into header
 * @param {Element} header header element
 * @returns {Promise}
 */
async function loadHeader(header) {
  const headerBlock = buildBlock('header', '');
  header.append(headerBlock);
  decorateBlock(headerBlock);
  return loadBlock(headerBlock);
}

/**
 * Loads a block named 'footer' into footer
 * @param footer footer element
 * @returns {Promise}
 */
async function loadFooter(footer) {
  const footerBlock = buildBlock('footer', '');
  footer.append(footerBlock);
  decorateBlock(footerBlock);
  return loadBlock(footerBlock);
}

/**
 * Wait for Image.
 * @param {Element} section section element
 */
async function waitForFirstImage(section) {
  const lcpCandidate = section.querySelector('img');
  await new Promise((resolve) => {
    if (lcpCandidate && !lcpCandidate.complete) {
      lcpCandidate.setAttribute('loading', 'eager');
      lcpCandidate.addEventListener('load', resolve);
      lcpCandidate.addEventListener('error', resolve);
    } else {
      resolve();
    }
  });
}

/**
 * Loads all blocks in a section.
 * @param {Element} section The section element
 */

async function loadSection(section, loadCallback) {
  const status = section.dataset.sectionStatus;
  if (!status || status === 'initialized') {
    section.dataset.sectionStatus = 'loading';
    const blocks = [...section.querySelectorAll('div.block')];
    for (let i = 0; i < blocks.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await loadBlock(blocks[i]);
    }
    if (loadCallback) await loadCallback(section);
    section.dataset.sectionStatus = 'loaded';
    section.style.display = null;
  }
}

/**
 * Loads all sections.
 * @param {Element} element The parent element of sections to load
 */

async function loadSections(element) {
  const sections = [...element.querySelectorAll('div.section')];
  for (let i = 0; i < sections.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await loadSection(sections[i]);
    if (i === 0 && sampleRUM.enhance) {
      sampleRUM.enhance();
    }
  }
}

init();




/***/ }),

/***/ "./node_modules/preact/compat/client.mjs":
/*!***********************************************!*\
  !*** ./node_modules/preact/compat/client.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRoot: () => (/* binding */ createRoot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hydrateRoot: () => (/* binding */ hydrateRoot)
/* harmony export */ });
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.mjs");


function createRoot(container) {
	return {
		// eslint-disable-next-line
		render: function (children) {
			(0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.render)(children, container);
		},
		// eslint-disable-next-line
		unmount: function () {
			(0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode)(container);
		}
	};
}

function hydrateRoot(container, children) {
	(0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.hydrate)(children, container);
	return createRoot(container);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	createRoot,
	hydrateRoot
});


/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.mjs":
/*!****************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: () => (/* binding */ I),
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   PureComponent: () => (/* binding */ E),
/* harmony export */   StrictMode: () => (/* binding */ mn),
/* harmony export */   Suspense: () => (/* binding */ D),
/* harmony export */   SuspenseList: () => (/* binding */ F),
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ un),
/* harmony export */   cloneElement: () => (/* binding */ sn),
/* harmony export */   createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* binding */ cn),
/* harmony export */   createPortal: () => (/* binding */ P),
/* harmony export */   createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ xn),
/* harmony export */   findDOMNode: () => (/* binding */ vn),
/* harmony export */   flushSync: () => (/* binding */ pn),
/* harmony export */   forwardRef: () => (/* binding */ w),
/* harmony export */   hydrate: () => (/* binding */ q),
/* harmony export */   isElement: () => (/* binding */ gn),
/* harmony export */   isFragment: () => (/* binding */ ln),
/* harmony export */   isMemo: () => (/* binding */ an),
/* harmony export */   isValidElement: () => (/* binding */ fn),
/* harmony export */   lazy: () => (/* binding */ O),
/* harmony export */   memo: () => (/* binding */ C),
/* harmony export */   render: () => (/* binding */ $),
/* harmony export */   startTransition: () => (/* binding */ yn),
/* harmony export */   unmountComponentAtNode: () => (/* binding */ hn),
/* harmony export */   unstable_batchedUpdates: () => (/* binding */ dn),
/* harmony export */   useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   useDeferredValue: () => (/* binding */ _n),
/* harmony export */   useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   useInsertionEffect: () => (/* binding */ Sn),
/* harmony export */   useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   useSyncExternalStore: () => (/* binding */ En),
/* harmony export */   useTransition: () => (/* binding */ bn),
/* harmony export */   version: () => (/* binding */ on)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.mjs");
function g(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n,t){this.props=n,this.context=t}function C(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:g(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var x=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),x&&x(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function w(n){function t(t){if(!("ref"in t))return n(t,null);var e=t.ref;delete t.ref;var r=n(t,e);return t.ref=e,r}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var k=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},I={map:k,forEach:k,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},N=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);N(n,t,e,r)};var M=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function T(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=function(n,t){for(var e in t)n[e]=t[e];return n}({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return T(n,t,e)})),n}function A(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return A(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null}function L(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function O(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),M&&M(n)},(D.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=L(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c())};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=A(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},D.prototype.componentWillUnmount=function(){this.t=[]},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=T(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__u&=-33),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var U=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function V(n){return this.getChildContext=function(){return n.context},n.children}function W(n){var e=this,r=n.i;e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],contains:function(){return!0},appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(V,{context:e.context},n.__v),e.l)}function P(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(W,{__v:n,i:e});return r.containerInfo=e,r}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=L(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),U(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){U(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,z=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,B=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,H=/[A-Z0-9]/g,Z="undefined"!=typeof document,Y=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function $(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function q(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var G=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function J(){}function K(){return this.cancelBubble}function Q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n};var X,nn={enumerable:!1,configurable:!0,get:function(){return this.class}},tn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var c=t[i];if(!("value"===i&&"defaultValue"in t&&null==c||Z&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var f=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===c?c="":"translate"===f&&"no"===c?c=!1:"o"===f[0]&&"n"===f[1]?"ondoubleclick"===f?i="ondblclick":"onchange"!==f||"input"!==e&&"textarea"!==e||Y(t.type)?"onfocus"===f?i="onfocusin":"onblur"===f?i="onfocusout":B.test(i)&&(i=f):f=i="oninput":o&&z.test(i)?i=i.replace(H,"-$&").toLowerCase():null===c&&(c=void 0),"oninput"===f&&u[i=f]&&(i="oninputCapture"),u[i]=c}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",nn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=j,tn&&tn(n)};var en=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){en&&en(n),X=n.__c};var rn=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){rn&&rn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),X=null};var un={ReactCurrentDispatcher:{current:{readContext:function(n){return X.__n[n.__c].props.value},useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,useDeferredValue:_n,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useInsertionEffect:Sn,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useSyncExternalStore:En,useTransition:bn}}},on="18.3.1";function cn(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function fn(n){return!!n&&n.$$typeof===j}function ln(n){return fn(n)&&n.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment}function an(n){return!!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function sn(n){return fn(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function hn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function vn(n){return n&&(n.base||1===n.nodeType&&n)||null}var dn=function(n,t){return n(t)},pn=function(n,t){return n(t)},mn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;function yn(n){n()}function _n(n){return n}function bn(){return[!1,yn]}var Sn=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,gn=fn;function En(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({h:{__:e,v:t}}),u=r[0].h,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.v=t,Cn(u)&&o({h:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return Cn(u)&&o({h:u}),n(function(){Cn(u)&&o({h:u})})},[n]),e}function Cn(n){var t,e,r=n.v,u=n.__;try{var o=r();return!((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return!0}}var xn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:Sn,useTransition:bn,useDeferredValue:_n,useSyncExternalStore:En,startTransition:yn,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"18.3.1",Children:I,render:$,hydrate:q,unmountComponentAtNode:hn,createPortal:P,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:cn,cloneElement:sn,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:fn,isElement:gn,isFragment:ln,isMemo:an,findDOMNode:vn,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:E,memo:C,forwardRef:w,flushSync:pn,unstable_batchedUpdates:dn,StrictMode:mn,Suspense:D,SuspenseList:F,lazy:O,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:un};
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ k),
/* harmony export */   Fragment: () => (/* binding */ b),
/* harmony export */   cloneElement: () => (/* binding */ E),
/* harmony export */   createContext: () => (/* binding */ G),
/* harmony export */   createElement: () => (/* binding */ _),
/* harmony export */   createRef: () => (/* binding */ m),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   hydrate: () => (/* binding */ D),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ B),
/* harmony export */   toChildArray: () => (/* binding */ H)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c,s,a,h={},v=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g(l,f,i,o,null)}function g(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u:r,__i:-1,__u:0};return null==r&&null!=l.vnode&&l.vnode(f),f}function m(){return{current:null}}function b(n){return n.children}function k(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function S(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!M.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(M)}function M(){var n,u,t,o,r,e,c,s;for(i.sort(f);n=i.shift();)n.__d&&(u=i.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j(c,o,s),o.__e!=e&&C(o)),i.length>u&&i.sort(f));M.__r=0}function P(n,l,u,t,i,o,r,f,e,c,s){var a,p,y,d,w,_=t&&t.__k||v,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&(p=-1===y.__i?h:_[y.__i]||h,y.__i=a,O(n,y,p,i,o,r,f,e,c,s),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||p.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)null!=(i=l[t])&&"boolean"!=typeof i&&"function"!=typeof i?(r=t+a,(i=n.__k[t]="string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g(null,i,null,null,null):y(i)?g(b,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=n,i.__b=n.__b+1,o=null,-1!==(f=i.__i=L(i,u,r,s))&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a--:f==r+1?a++:(f>r?a--:a++,i.__u|=65536))):i=n.__k[t]=null;if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V(o,o))}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8===l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++}}return-1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p.test(l)?u:u+"px"}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e,n.addEventListener(l,o?s:c,o)):n.removeEventListener(l,o?s:c,o);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,v,p,w,_,g,m,x,C,S,M,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],S=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,S):(u.__c=h=new k(m,S),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=S,h.__n=i,v=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),p=h.props,w=h.state,h.__v=u,v)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(x&&null==T.getDerivedStateFromProps&&m!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,S),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,S)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,S),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,w,_)})}if(h.context=S,h.props=m,h.__P=n,h.__e=!1,$=l.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!v&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(p,w)),P(n,y(L=null!=a&&a.type===b&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:128;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e}else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,o,r,f,c,s);(a=l.diffed)&&a(u)}function j(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function z(u,t,i,o,r,f,e,c,s){var a,v,p,d,_,g,m,b=i.props,k=t.props,C=t.type;if("svg"===C?r="http://www.w3.org/2000/svg":"math"===C?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=f)for(a=0;a<f.length;a++)if((_=f[a])&&"setAttribute"in _==!!C&&(C?_.localName===C:3===_.nodeType)){u=_,f[a]=null;break}if(null==u){if(null===C)return document.createTextNode(k);u=document.createElementNS(r,C,k.is&&k),c&&(l.__m&&l.__m(t,f),c=!1),f=null}if(null===C)b===k||c&&u.data===k||(u.data=k);else{if(f=f&&n.call(u.childNodes),b=i.props||h,!c&&null!=f)for(b={},a=0;a<u.attributes.length;a++)b[(_=u.attributes[a]).name]=_.value;for(a in b)if(_=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)p=_;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;A(u,a,null,_,r)}for(a in k)_=k[a],"children"==a?d=_:"dangerouslySetInnerHTML"==a?v=_:"value"==a?g=_:"checked"==a?m=_:c&&"function"!=typeof _||b[a]===_||A(u,a,_,b[a],r);if(v)c||p&&(v.__html===p.__html||v.__html===u.innerHTML)||(u.innerHTML=v.__html),t.__k=[];else if(p&&(u.innerHTML=""),P(u,y(d)?d:[d],t,i,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":r,f,e,f?f[0]:i.__k&&x(i,0),c,s),null!=f)for(a=f.length;a--;)w(f[a]);c||(a="value","progress"===C&&null==g?u.removeAttribute("value"):void 0!==g&&(g!==u[a]||"progress"===C&&!g||"option"===C&&g!==b[a])&&A(u,a,g,b[a],r),a="checked",void 0!==m&&m!==u[a]&&A(u,a,m,b[a],r))}return u}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function V(n,u,t){var i,o;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||w(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function q(n,l,u){return this.constructor(n,u)}function B(u,t,i){var o,r,f,e;l.__&&l.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_(b,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j(f,u,e)}function D(n,l){B(n,l,D)}function E(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.forEach(function(n){n.__e=!0,S(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=v.slice,l={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},k.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),S(this))},k.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),S(this))},k.prototype.render=b,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},M.__r=0,e=0,c=F(!1),s=F(!0),a=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.mjs":
/*!**************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ q),
/* harmony export */   useContext: () => (/* binding */ x),
/* harmony export */   useDebugValue: () => (/* binding */ P),
/* harmony export */   useEffect: () => (/* binding */ y),
/* harmony export */   useErrorBoundary: () => (/* binding */ b),
/* harmony export */   useId: () => (/* binding */ g),
/* harmony export */   useImperativeHandle: () => (/* binding */ F),
/* harmony export */   useLayoutEffect: () => (/* binding */ _),
/* harmony export */   useMemo: () => (/* binding */ T),
/* harmony export */   useReducer: () => (/* binding */ p),
/* harmony export */   useRef: () => (/* binding */ A),
/* harmony export */   useState: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var t,r,u,i,o=0,f=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function d(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function h(n){return o=1,p(D,n)}function p(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function y(n,u){var i=d(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i))}function _(n,u){var i=d(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__h.push(i))}function A(n){return o=5,T(function(){return{current:n}},[])}function F(n,t,r){o=6,_(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function T(n,r){var u=d(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c.useDebugValue&&c.useDebugValue(t?t(n):n)}function b(n){var u=d(t++,10),i=h();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=d(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],c.__e(t,n.__v)}}c.__b=function(n){r=null,e&&e(n)},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t)},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),u=r=null},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],c.__e(r,n.__v)}}),l&&l(n,t)},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&c.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ u),
/* harmony export */   jsxAttr: () => (/* binding */ p),
/* harmony export */   jsxDEV: () => (/* binding */ u),
/* harmony export */   jsxEscape: () => (/* binding */ _),
/* harmony export */   jsxTemplate: () => (/* binding */ a),
/* harmony export */   jsxs: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
var t=/["&<]/;function n(r){if(0===r.length||!1===t.test(r))return r;for(var e=0,n=0,o="",f="";n<r.length;n++){switch(r.charCodeAt(n)){case 34:f="&quot;";break;case 38:f="&amp;";break;case 60:f="&lt;";break;default:continue}n!==e&&(o+=r.slice(e,n)),o+=f,e=n+1}return n!==e&&(o+=r.slice(e,n)),o}var o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=0,i=Array.isArray;function u(e,t,n,o,i,u){t||(t={});var a,c,l=t;"ref"in t&&(a=t.ref,delete t.ref);var p={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===l[c]&&(l[c]=a[c]);return preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode&&preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode(p),p}function a(r){var t=u(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,{tpl:r,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var c={},l=/[A-Z]/g;function p(e,t){if(preact__WEBPACK_IMPORTED_MODULE_0__.options.attr){var f=preact__WEBPACK_IMPORTED_MODULE_0__.options.attr(e,t);if("string"==typeof f)return f}if("ref"===e||"key"===e)return"";if("style"===e&&"object"==typeof t){var i="";for(var u in t){var a=t[u];if(null!=a&&""!==a){var p="-"==u[0]?u:c[u]||(c[u]=u.replace(l,"-$&").toLowerCase()),_=";";"number"!=typeof a||p.startsWith("--")||o.test(p)||(_="px;"),i=i+p+":"+a+_}}return e+'="'+i+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+n(t)+'"'}function _(r){if(null==r||"boolean"==typeof r||"function"==typeof r)return null;if("object"==typeof r){if(void 0===r.constructor)return r;if(i(r)){for(var e=0;e<r.length;e++)r[e]=_(r[e]);return r}}return n(""+r)}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/export webpack runtime */
/******/ export default __webpack_require__;
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {ids, modules, runtime} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in modules) {
/******/ 			if(__webpack_require__.o(modules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = modules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		for(;i < ids.length; i++) {
/******/ 			chunkId = ids[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[ids[i]] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	__webpack_require__.C = installChunk;
/******/ 	
/******/ 	// no on chunks loaded
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("../scripts/aem.js");
/******/ var __webpack_exports__buildBlock = __webpack_exports__.buildBlock;
/******/ var __webpack_exports__createOptimizedPicture = __webpack_exports__.createOptimizedPicture;
/******/ var __webpack_exports__decorateBlock = __webpack_exports__.decorateBlock;
/******/ var __webpack_exports__decorateBlocks = __webpack_exports__.decorateBlocks;
/******/ var __webpack_exports__decorateButtons = __webpack_exports__.decorateButtons;
/******/ var __webpack_exports__decorateIcons = __webpack_exports__.decorateIcons;
/******/ var __webpack_exports__decorateSections = __webpack_exports__.decorateSections;
/******/ var __webpack_exports__decorateTemplateAndTheme = __webpack_exports__.decorateTemplateAndTheme;
/******/ var __webpack_exports__fetchPlaceholders = __webpack_exports__.fetchPlaceholders;
/******/ var __webpack_exports__getMetadata = __webpack_exports__.getMetadata;
/******/ var __webpack_exports__loadBlock = __webpack_exports__.loadBlock;
/******/ var __webpack_exports__loadBlocks = __webpack_exports__.loadBlocks;
/******/ var __webpack_exports__loadCSS = __webpack_exports__.loadCSS;
/******/ var __webpack_exports__loadFooter = __webpack_exports__.loadFooter;
/******/ var __webpack_exports__loadHeader = __webpack_exports__.loadHeader;
/******/ var __webpack_exports__loadScript = __webpack_exports__.loadScript;
/******/ var __webpack_exports__loadSection = __webpack_exports__.loadSection;
/******/ var __webpack_exports__loadSections = __webpack_exports__.loadSections;
/******/ var __webpack_exports__readBlockConfig = __webpack_exports__.readBlockConfig;
/******/ var __webpack_exports__sampleRUM = __webpack_exports__.sampleRUM;
/******/ var __webpack_exports__setup = __webpack_exports__.setup;
/******/ var __webpack_exports__toCamelCase = __webpack_exports__.toCamelCase;
/******/ var __webpack_exports__toClassName = __webpack_exports__.toClassName;
/******/ var __webpack_exports__waitForFirstImage = __webpack_exports__.waitForFirstImage;
/******/ var __webpack_exports__wrapTextNodes = __webpack_exports__.wrapTextNodes;
/******/ export { __webpack_exports__buildBlock as buildBlock, __webpack_exports__createOptimizedPicture as createOptimizedPicture, __webpack_exports__decorateBlock as decorateBlock, __webpack_exports__decorateBlocks as decorateBlocks, __webpack_exports__decorateButtons as decorateButtons, __webpack_exports__decorateIcons as decorateIcons, __webpack_exports__decorateSections as decorateSections, __webpack_exports__decorateTemplateAndTheme as decorateTemplateAndTheme, __webpack_exports__fetchPlaceholders as fetchPlaceholders, __webpack_exports__getMetadata as getMetadata, __webpack_exports__loadBlock as loadBlock, __webpack_exports__loadBlocks as loadBlocks, __webpack_exports__loadCSS as loadCSS, __webpack_exports__loadFooter as loadFooter, __webpack_exports__loadHeader as loadHeader, __webpack_exports__loadScript as loadScript, __webpack_exports__loadSection as loadSection, __webpack_exports__loadSections as loadSections, __webpack_exports__readBlockConfig as readBlockConfig, __webpack_exports__sampleRUM as sampleRUM, __webpack_exports__setup as setup, __webpack_exports__toCamelCase as toCamelCase, __webpack_exports__toClassName as toClassName, __webpack_exports__waitForFirstImage as waitForFirstImage, __webpack_exports__wrapTextNodes as wrapTextNodes };
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsK0JBQStCLGlDQUFpQyxvQ0FBb0MsU0FBUyxnQkFBZ0IsV0FBVyxvQkFBb0Isb0VBQW9FLEVBQUUsMERBQTBELGtCQUFrQixvQkFBb0IsNkZBQTZGLGNBQWMsa0VBQWtFLHVCQUF1QixtQ0FBbUMsU0FBUyxZQUFZLFdBQVcsaUJBQWlCLFVBQVUsZUFBbUc7QUFDam9EOzs7Ozs7O1NDREE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOzs7OztVQ3pCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7OztTQ05BOzs7O1VDQUE7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0EsTUFBTSx1QkFBdUI7VUFDN0I7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsTUFBTSxnQkFBZ0I7VUFDdEI7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBOztVQUVBOztVQUVBOztVQUVBOztVQUVBOztVQUVBOzs7OztVQ3RDQTs7Ozs7U0VBQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi4vc2NyaXB0cy9hZW0uanMiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9jbGllbnQubWpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubWpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tanMiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubWpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9kaXN0L2pzeFJ1bnRpbWUubWpzIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vd2VicGFjay9ydW50aW1lL2V4cG9ydCB3ZWJwYWNrIHJ1bnRpbWUiLCJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vd2VicGFjay9ydW50aW1lL2ltcG9ydCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Vkcy1yZWFjdC1jb2xlbWFuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lZHMtcmVhY3QtY29sZW1hbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbiAqIENvcHlyaWdodCAyMDI0IEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuZnVuY3Rpb24gc2FtcGxlUlVNKGNoZWNrcG9pbnQsIGRhdGEpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgY29uc3QgdGltZVNoaWZ0ID0gKCkgPT4gKHdpbmRvdy5wZXJmb3JtYW5jZSA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgLSB3aW5kb3cuaGx4LnJ1bS5maXJzdFJlYWRUaW1lKTtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuaGx4ID0gd2luZG93LmhseCB8fCB7fTtcbiAgICBzYW1wbGVSVU0uZW5oYW5jZSA9ICgpID0+IHt9O1xuICAgIGlmICghd2luZG93LmhseC5ydW0pIHtcbiAgICAgIGNvbnN0IHBhcmFtID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3J1bScpO1xuICAgICAgY29uc3Qgd2VpZ2h0ID0gKHdpbmRvdy5TQU1QTEVfUEFHRVZJRVdTX0FUX1JBVEUgPT09ICdoaWdoJyAmJiAxMClcbiAgICAgICAgfHwgKHdpbmRvdy5TQU1QTEVfUEFHRVZJRVdTX0FUX1JBVEUgPT09ICdsb3cnICYmIDEwMDApXG4gICAgICAgIHx8IChwYXJhbSA9PT0gJ29uJyAmJiAxKVxuICAgICAgICB8fCAxMDA7XG4gICAgICBjb25zdCBpZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKC00KTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwYXJhbSAhPT0gJ29mZicgJiYgTWF0aC5yYW5kb20oKSAqIHdlaWdodCA8IDE7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmUsIG1heC1sZW5cbiAgICAgIHdpbmRvdy5obHgucnVtID0ge1xuICAgICAgICB3ZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBmaXJzdFJlYWRUaW1lOiB3aW5kb3cucGVyZm9ybWFuY2UgPyB3aW5kb3cucGVyZm9ybWFuY2UudGltZU9yaWdpbiA6IERhdGUubm93KCksXG4gICAgICAgIHNhbXBsZVJVTSxcbiAgICAgICAgcXVldWU6IFtdLFxuICAgICAgICBjb2xsZWN0b3I6ICguLi5hcmdzKSA9PiB3aW5kb3cuaGx4LnJ1bS5xdWV1ZS5wdXNoKGFyZ3MpLFxuICAgICAgfTtcbiAgICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICAgIGNvbnN0IGRhdGFGcm9tRXJyb3JPYmogPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJEYXRhID0geyBzb3VyY2U6ICd1bmRlZmluZWQgZXJyb3InIH07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVyckRhdGEudGFyZ2V0ID0gZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGVyckRhdGEuc291cmNlID0gZXJyb3Iuc3RhY2tcbiAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiBsaW5lLm1hdGNoKC9odHRwcz86XFwvXFwvLykpXG4gICAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9hdCAoW14gXSspIFxcKCguKylcXCkvLCAnJDFAJDInKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvIGF0IC8sICdAJylcbiAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8qIGVycm9yIHN0cnVjdHVyZSB3YXMgbm90IGFzIGV4cGVjdGVkICovXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlcnJEYXRhO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICh7IGVycm9yIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBlcnJEYXRhID0gZGF0YUZyb21FcnJvck9iaihlcnJvcik7XG4gICAgICAgICAgc2FtcGxlUlVNKCdlcnJvcicsIGVyckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgKHsgcmVhc29uIH0pID0+IHtcbiAgICAgICAgICBsZXQgZXJyRGF0YSA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ1VuaGFuZGxlZCBSZWplY3Rpb24nLFxuICAgICAgICAgICAgdGFyZ2V0OiByZWFzb24gfHwgJ1Vua25vd24nLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHJlYXNvbiBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBlcnJEYXRhID0gZGF0YUZyb21FcnJvck9iaihyZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzYW1wbGVSVU0oJ2Vycm9yJywgZXJyRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNhbXBsZVJVTS5iYXNlVVJMID0gc2FtcGxlUlVNLmJhc2VVUkwgfHwgbmV3IFVSTCh3aW5kb3cuUlVNX0JBU0UgfHwgJy8nLCBuZXcgVVJMKCdodHRwczovL3J1bS5obHgucGFnZScpKTtcbiAgICAgICAgc2FtcGxlUlVNLmNvbGxlY3RCYXNlVVJMID0gc2FtcGxlUlVNLmNvbGxlY3RCYXNlVVJMIHx8IHNhbXBsZVJVTS5iYXNlVVJMO1xuICAgICAgICBzYW1wbGVSVU0uc2VuZFBpbmcgPSAoY2ssIHRpbWUsIHBpbmdEYXRhID0ge30pID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlbiwgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgICBjb25zdCBydW1EYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgd2VpZ2h0LFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICByZWZlcmVyOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIGNoZWNrcG9pbnQ6IGNrLFxuICAgICAgICAgICAgdDogdGltZSxcbiAgICAgICAgICAgIC4uLnBpbmdEYXRhLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IHdpbmRvdy5SVU1fUEFSQU1TXG4gICAgICAgICAgICA/IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5SVU1fUEFSQU1TKS50b1N0cmluZygpfWBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgY29uc3QgeyBocmVmOiB1cmwsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICAgICAgICAgIGAucnVtLyR7d2VpZ2h0fSR7dXJsUGFyYW1zfWAsXG4gICAgICAgICAgICBzYW1wbGVSVU0uY29sbGVjdEJhc2VVUkwsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBib2R5ID0gb3JpZ2luID09PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgICA/IG5ldyBCbG9iKFtydW1EYXRhXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcbiAgICAgICAgICAgIDogcnVtRGF0YTtcbiAgICAgICAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhgcGluZzoke2NrfWAsIHBpbmdEYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2FtcGxlUlVNLnNlbmRQaW5nKCd0b3AnLCB0aW1lU2hpZnQoKSk7XG5cbiAgICAgICAgc2FtcGxlUlVNLmVuaGFuY2UgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gb25seSBlbmhhbmNlIG9uY2VcbiAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJydW0tZW5oYW5jZXJcIl0nKSkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgc2NyaXB0LnNyYyA9IG5ldyBVUkwoXG4gICAgICAgICAgICAnLnJ1bS9AYWRvYmUvaGVsaXgtcnVtLWVuaGFuY2VyQF4yL3NyYy9pbmRleC5qcycsXG4gICAgICAgICAgICBzYW1wbGVSVU0uYmFzZVVSTCxcbiAgICAgICAgICApLmhyZWY7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXdpbmRvdy5obHguUlVNX01BTlVBTF9FTkhBTkNFKSB7XG4gICAgICAgICAgc2FtcGxlUlVNLmVuaGFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2luZG93LmhseC5ydW0gJiYgd2luZG93LmhseC5ydW0uaXNTZWxlY3RlZCAmJiBjaGVja3BvaW50KSB7XG4gICAgICB3aW5kb3cuaGx4LnJ1bS5jb2xsZWN0b3IoY2hlY2twb2ludCwgZGF0YSwgdGltZVNoaWZ0KCkpO1xuICAgIH1cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncnVtJywgeyBkZXRhaWw6IHsgY2hlY2twb2ludCwgZGF0YSB9IH0pKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBzb21ldGhpbmcgd2VudCBhd3J5XG4gIH1cbn1cblxuLyoqXG4gKiBTZXR1cCBibG9jayB1dGlscy5cbiAqL1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIHdpbmRvdy5obHggPSB3aW5kb3cuaGx4IHx8IHt9O1xuICB3aW5kb3cuaGx4LlJVTV9NQVNLX1VSTCA9ICdmdWxsJztcbiAgd2luZG93LmhseC5SVU1fTUFOVUFMX0VOSEFOQ0UgPSB0cnVlO1xuICB3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aCA9ICcnO1xuICB3aW5kb3cuaGx4LmxpZ2h0aG91c2UgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnbGlnaHRob3VzZScpID09PSAnb24nO1xuXG4gIGNvbnN0IHNjcmlwdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyQ9XCIvc2NyaXB0cy9zY3JpcHRzLmpzXCJdJyk7XG4gIGlmIChzY3JpcHRFbCkge1xuICAgIHRyeSB7XG4gICAgICBbd2luZG93LmhseC5jb2RlQmFzZVBhdGhdID0gbmV3IFVSTChzY3JpcHRFbC5zcmMpLnBhdGhuYW1lLnNwbGl0KCcvc2NyaXB0cy9zY3JpcHRzLmpzJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXV0byBpbml0aWFsaXppYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgc2V0dXAoKTtcbiAgc2FtcGxlUlVNKCk7XG59XG5cbi8qKlxuICogU2FuaXRpemVzIGEgc3RyaW5nIGZvciB1c2UgYXMgY2xhc3MgbmFtZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSB1bnNhbml0aXplZCBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjbGFzcyBuYW1lXG4gKi9cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJ1xuICAgID8gbmFtZVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKC9bXjAtOWEtel0vZ2ksICctJylcbiAgICAgIC5yZXBsYWNlKC8tKy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvXi18LSQvZywgJycpXG4gICAgOiAnJztcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZXMgYSBzdHJpbmcgZm9yIHVzZSBhcyBhIGpzIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgdW5zYW5pdGl6ZWQgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FtZWxDYXNlZCBuYW1lXG4gKi9cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIHRvQ2xhc3NOYW1lKG5hbWUpLnJlcGxhY2UoLy0oW2Etel0pL2csIChnKSA9PiBnWzFdLnRvVXBwZXJDYXNlKCkpO1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBjb25maWcgZnJvbSBhIGJsb2NrLlxuICogQHBhcmFtIHtFbGVtZW50fSBibG9jayBUaGUgYmxvY2sgZWxlbWVudFxuICogQHJldHVybnMge29iamVjdH0gVGhlIGJsb2NrIGNvbmZpZ1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZnVuY3Rpb24gcmVhZEJsb2NrQ29uZmlnKGJsb2NrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuICBibG9jay5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBkaXYnKS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBpZiAocm93LmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBjb2xzID0gWy4uLnJvdy5jaGlsZHJlbl07XG4gICAgICBpZiAoY29sc1sxXSkge1xuICAgICAgICBjb25zdCBjb2wgPSBjb2xzWzFdO1xuICAgICAgICBjb25zdCBuYW1lID0gdG9DbGFzc05hbWUoY29sc1swXS50ZXh0Q29udGVudCk7XG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgICBpZiAoY29sLnF1ZXJ5U2VsZWN0b3IoJ2EnKSkge1xuICAgICAgICAgIGNvbnN0IGFzID0gWy4uLmNvbC5xdWVyeVNlbGVjdG9yQWxsKCdhJyldO1xuICAgICAgICAgIGlmIChhcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYXNbMF0uaHJlZjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBhcy5tYXAoKGEpID0+IGEuaHJlZik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbC5xdWVyeVNlbGVjdG9yKCdpbWcnKSkge1xuICAgICAgICAgIGNvbnN0IGltZ3MgPSBbLi4uY29sLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgICAgICAgICBpZiAoaW1ncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gaW1nc1swXS5zcmM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gaW1ncy5tYXAoKGltZykgPT4gaW1nLnNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbC5xdWVyeVNlbGVjdG9yKCdwJykpIHtcbiAgICAgICAgICBjb25zdCBwcyA9IFsuLi5jb2wucXVlcnlTZWxlY3RvckFsbCgncCcpXTtcbiAgICAgICAgICBpZiAocHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBzWzBdLnRleHRDb250ZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBzLm1hcCgocCkgPT4gcC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgdmFsdWUgPSByb3cuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbmZpZ1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbi8qKlxuICogTG9hZHMgYSBDU1MgZmlsZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIFVSTCB0byB0aGUgQ1NTIGZpbGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZENTUyhocmVmKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBoZWFkID4gbGlua1tocmVmPVwiJHtocmVmfVwiXWApKSB7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgbGluay5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgbGluay5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIExvYWRzIGEgbm9uIG1vZHVsZSBKUyBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBVUkwgdG8gdGhlIEpTIGZpbGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdHRycyBhZGRpdGlvbmFsIG9wdGlvbmFsIGF0dHJpYnV0ZXNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZFNjcmlwdChzcmMsIGF0dHJzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBoZWFkID4gc2NyaXB0W3NyYz1cIiR7c3JjfVwiXWApKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChzY3JpcHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGNvbnRlbnQgb2YgbWV0YWRhdGEgdGFncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBtZXRhZGF0YSBuYW1lIChvciBwcm9wZXJ0eSlcbiAqIEBwYXJhbSB7RG9jdW1lbnR9IGRvYyBEb2N1bWVudCBvYmplY3QgdG8gcXVlcnkgZm9yIG1ldGFkYXRhLiBEZWZhdWx0cyB0byB0aGUgd2luZG93J3MgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXRhZGF0YSB2YWx1ZShzKVxuICovXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShuYW1lLCBkb2MgPSBkb2N1bWVudCkge1xuICBjb25zdCBhdHRyID0gbmFtZSAmJiBuYW1lLmluY2x1ZGVzKCc6JykgPyAncHJvcGVydHknIDogJ25hbWUnO1xuICBjb25zdCBtZXRhID0gWy4uLmRvYy5oZWFkLnF1ZXJ5U2VsZWN0b3JBbGwoYG1ldGFbJHthdHRyfT1cIiR7bmFtZX1cIl1gKV1cbiAgICAubWFwKChtKSA9PiBtLmNvbnRlbnQpXG4gICAgLmpvaW4oJywgJyk7XG4gIHJldHVybiBtZXRhIHx8ICcnO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgYWxsIHNlY3Rpb24gc3RhdHVzIGluIGEgY29udGFpbmVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG1haW4gVGhlIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVNlY3Rpb25zU3RhdHVzKG1haW4pIHtcbiAgY29uc3Qgc2VjdGlvbnMgPSBbLi4ubWFpbi5xdWVyeVNlbGVjdG9yQWxsKCc6c2NvcGUgPiBkaXYuc2VjdGlvbicpXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcbiAgICBjb25zdCBzdGF0dXMgPSBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblN0YXR1cztcbiAgICBpZiAoc3RhdHVzICE9PSAnbG9hZGVkJykge1xuICAgICAgY29uc3QgbG9hZGluZ0Jsb2NrID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmJsb2NrW2RhdGEtYmxvY2stc3RhdHVzPVwiaW5pdGlhbGl6ZWRcIl0sIC5ibG9ja1tkYXRhLWJsb2NrLXN0YXR1cz1cImxvYWRpbmdcIl0nXG4gICAgICApO1xuICAgICAgaWYgKGxvYWRpbmdCbG9jaykge1xuICAgICAgICBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblN0YXR1cyA9ICdsb2FkZWQnO1xuICAgICAgICBzZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGljdHVyZSBlbGVtZW50IHdpdGggd2VicCBhbmQgZmFsbGJhY2tzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIFRoZSBpbWFnZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbYWx0XSBUaGUgaW1hZ2UgYWx0ZXJuYXRpdmUgdGV4dFxuICogQHBhcmFtIHtib29sZWFufSBbZWFnZXJdIFNldCBsb2FkaW5nIGF0dHJpYnV0ZSB0byBlYWdlclxuICogQHBhcmFtIHtBcnJheX0gW2JyZWFrcG9pbnRzXSBCcmVha3BvaW50cyBhbmQgY29ycmVzcG9uZGluZyBwYXJhbXMgKGVnLiB3aWR0aClcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBUaGUgcGljdHVyZSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9wdGltaXplZFBpY3R1cmUoXG4gIHNyYyxcbiAgYWx0ID0gJycsXG4gIGVhZ2VyID0gZmFsc2UsXG4gIGJyZWFrcG9pbnRzID0gW3sgbWVkaWE6ICcobWluLXdpZHRoOiA2MDBweCknLCB3aWR0aDogJzIwMDAnIH0sIHsgd2lkdGg6ICc3NTAnIH1dLFxuKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoc3JjLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gIGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVybDtcbiAgY29uc3QgZXh0ID0gcGF0aG5hbWUuc3Vic3RyaW5nKHBhdGhuYW1lLmxhc3RJbmRleE9mKCcuJykgKyAxKTtcblxuICAvLyB3ZWJwXG4gIGJyZWFrcG9pbnRzLmZvckVhY2goKGJyKSA9PiB7XG4gICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc291cmNlJyk7XG4gICAgaWYgKGJyLm1lZGlhKSBzb3VyY2Uuc2V0QXR0cmlidXRlKCdtZWRpYScsIGJyLm1lZGlhKTtcbiAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3dlYnAnKTtcbiAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBgJHtwYXRobmFtZX0/d2lkdGg9JHtici53aWR0aH0mZm9ybWF0PXdlYnBseSZvcHRpbWl6ZT1tZWRpdW1gKTtcbiAgICBwaWN0dXJlLmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gIH0pO1xuXG4gIC8vIGZhbGxiYWNrXG4gIGJyZWFrcG9pbnRzLmZvckVhY2goKGJyLCBpKSA9PiB7XG4gICAgaWYgKGkgPCBicmVha3BvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgIGlmIChici5tZWRpYSkgc291cmNlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBici5tZWRpYSk7XG4gICAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBgJHtwYXRobmFtZX0/d2lkdGg9JHtici53aWR0aH0mZm9ybWF0PSR7ZXh0fSZvcHRpbWl6ZT1tZWRpdW1gKTtcbiAgICAgIHBpY3R1cmUuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgZWFnZXIgPyAnZWFnZXInIDogJ2xhenknKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgICBwaWN0dXJlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtwYXRobmFtZX0/d2lkdGg9JHtici53aWR0aH0mZm9ybWF0PSR7ZXh0fSZvcHRpbWl6ZT1tZWRpdW1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwaWN0dXJlO1xufVxuXG4vKipcbiAqIFNldCB0ZW1wbGF0ZSAocGFnZSBzdHJ1Y3R1cmUpIGFuZCB0aGVtZSAocGFnZSBzdHlsZXMpLlxuICovXG5mdW5jdGlvbiBkZWNvcmF0ZVRlbXBsYXRlQW5kVGhlbWUoKSB7XG4gIGNvbnN0IGFkZENsYXNzZXMgPSAoZWxlbWVudCwgY2xhc3NlcykgPT4ge1xuICAgIGNsYXNzZXMuc3BsaXQoJywnKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodG9DbGFzc05hbWUoYy50cmltKCkpKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdGVtcGxhdGUgPSBnZXRNZXRhZGF0YSgndGVtcGxhdGUnKTtcbiAgaWYgKHRlbXBsYXRlKSBhZGRDbGFzc2VzKGRvY3VtZW50LmJvZHksIHRlbXBsYXRlKTtcbiAgY29uc3QgdGhlbWUgPSBnZXRNZXRhZGF0YSgndGhlbWUnKTtcbiAgaWYgKHRoZW1lKSBhZGRDbGFzc2VzKGRvY3VtZW50LmJvZHksIHRoZW1lKTtcbn1cblxuLyoqXG4gKiBXcmFwIGlubGluZSB0ZXh0IGNvbnRlbnQgb2YgYmxvY2sgY2VsbHMgd2l0aGluIGEgPHA+IHRhZy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gYmxvY2sgdGhlIGJsb2NrIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gd3JhcFRleHROb2RlcyhibG9jaykge1xuICBjb25zdCB2YWxpZFdyYXBwZXJzID0gW1xuICAgICdQJyxcbiAgICAnUFJFJyxcbiAgICAnVUwnLFxuICAgICdPTCcsXG4gICAgJ1BJQ1RVUkUnLFxuICAgICdUQUJMRScsXG4gICAgJ0gxJyxcbiAgICAnSDInLFxuICAgICdIMycsXG4gICAgJ0g0JyxcbiAgICAnSDUnLFxuICAgICdINicsXG4gIF07XG5cbiAgY29uc3Qgd3JhcCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd3JhcHBlci5hcHBlbmQoLi4uZWwuY2hpbGROb2Rlcyk7XG4gICAgZWwuYXBwZW5kKHdyYXBwZXIpO1xuICB9O1xuXG4gIGJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGRpdiA+IGRpdicpLmZvckVhY2goKGJsb2NrQ29sdW1uKSA9PiB7XG4gICAgaWYgKGJsb2NrQ29sdW1uLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgY29uc3QgaGFzV3JhcHBlciA9ICEhYmxvY2tDb2x1bW4uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgJiYgdmFsaWRXcmFwcGVycy5zb21lKCh0YWdOYW1lKSA9PiBibG9ja0NvbHVtbi5maXJzdEVsZW1lbnRDaGlsZC50YWdOYW1lID09PSB0YWdOYW1lKTtcbiAgICAgIGlmICghaGFzV3JhcHBlcikge1xuICAgICAgICB3cmFwKGJsb2NrQ29sdW1uKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGJsb2NrQ29sdW1uLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdQSUNUVVJFJ1xuICAgICAgICAmJiAoYmxvY2tDb2x1bW4uY2hpbGRyZW4ubGVuZ3RoID4gMSB8fCAhIWJsb2NrQ29sdW1uLnRleHRDb250ZW50LnRyaW0oKSlcbiAgICAgICkge1xuICAgICAgICB3cmFwKGJsb2NrQ29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIERlY29yYXRlcyBwYXJhZ3JhcGhzIGNvbnRhaW5pbmcgYSBzaW5nbGUgbGluayBhcyBidXR0b25zLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGRlY29yYXRlQnV0dG9ucyhlbGVtZW50KSB7XG4gIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goKGEpID0+IHtcbiAgICBhLnRpdGxlID0gYS50aXRsZSB8fCBhLnRleHRDb250ZW50O1xuICAgIGlmIChhLmhyZWYgIT09IGEudGV4dENvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHVwID0gYS5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdHdvdXAgPSBhLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghYS5xdWVyeVNlbGVjdG9yKCdpbWcnKSkge1xuICAgICAgICBpZiAodXAuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgJiYgKHVwLnRhZ05hbWUgPT09ICdQJyB8fCB1cC50YWdOYW1lID09PSAnRElWJykpIHtcbiAgICAgICAgICBhLmNsYXNzTmFtZSA9ICdidXR0b24nOyAvLyBkZWZhdWx0XG4gICAgICAgICAgdXAuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1cC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICYmIHVwLnRhZ05hbWUgPT09ICdTVFJPTkcnXG4gICAgICAgICAgJiYgdHdvdXAuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAmJiB0d291cC50YWdOYW1lID09PSAnUCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYS5jbGFzc05hbWUgPSAnYnV0dG9uIHByaW1hcnknO1xuICAgICAgICAgIHR3b3VwLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXAuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAmJiB1cC50YWdOYW1lID09PSAnRU0nXG4gICAgICAgICAgJiYgdHdvdXAuY2hpbGROb2Rlcy5sZW5ndGggPT09IDFcbiAgICAgICAgICAmJiB0d291cC50YWdOYW1lID09PSAnUCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYS5jbGFzc05hbWUgPSAnYnV0dG9uIHNlY29uZGFyeSc7XG4gICAgICAgICAgdHdvdXAuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgPGltZz4gZm9yIGljb24sIHByZWZpeGVkIHdpdGggY29kZUJhc2VQYXRoIGFuZCBvcHRpb25hbCBwcmVmaXguXG4gKiBAcGFyYW0ge0VsZW1lbnR9IFtzcGFuXSBzcGFuIGVsZW1lbnQgd2l0aCBpY29uIGNsYXNzZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJlZml4XSBwcmVmaXggdG8gYmUgYWRkZWQgdG8gaWNvbiBzcmNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbYWx0XSBhbHQgdGV4dCB0byBiZSBhZGRlZCB0byBpY29uXG4gKi9cbmZ1bmN0aW9uIGRlY29yYXRlSWNvbihzcGFuLCBwcmVmaXggPSAnJywgYWx0ID0gJycpIHtcbiAgY29uc3QgaWNvbk5hbWUgPSBBcnJheS5mcm9tKHNwYW4uY2xhc3NMaXN0KVxuICAgIC5maW5kKChjKSA9PiBjLnN0YXJ0c1dpdGgoJ2ljb24tJykpXG4gICAgLnN1YnN0cmluZyg1KTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5kYXRhc2V0Lmljb25OYW1lID0gaWNvbk5hbWU7XG4gIGltZy5zcmMgPSBgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0ke3ByZWZpeH0vaWNvbnMvJHtpY29uTmFtZX0uc3ZnYDtcbiAgaW1nLmFsdCA9IGFsdDtcbiAgaW1nLmxvYWRpbmcgPSAnbGF6eSc7XG4gIHNwYW4uYXBwZW5kKGltZyk7XG59XG5cbi8qKlxuICogQWRkIDxpbWc+IGZvciBpY29ucywgcHJlZml4ZWQgd2l0aCBjb2RlQmFzZVBhdGggYW5kIG9wdGlvbmFsIHByZWZpeC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gW2VsZW1lbnRdIEVsZW1lbnQgY29udGFpbmluZyBpY29uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtwcmVmaXhdIHByZWZpeCB0byBiZSBhZGRlZCB0byBpY29uIHRoZSBzcmNcbiAqL1xuZnVuY3Rpb24gZGVjb3JhdGVJY29ucyhlbGVtZW50LCBwcmVmaXggPSAnJykge1xuICBjb25zdCBpY29ucyA9IFsuLi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4uaWNvbicpXTtcbiAgaWNvbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgIGRlY29yYXRlSWNvbihzcGFuLCBwcmVmaXgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEZWNvcmF0ZXMgYWxsIHNlY3Rpb25zIGluIGEgY29udGFpbmVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG1haW4gVGhlIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGRlY29yYXRlU2VjdGlvbnMobWFpbikge1xuICBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSA+IGRpdicpLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCB3cmFwcGVycyA9IFtdO1xuICAgIGxldCBkZWZhdWx0Q29udGVudCA9IGZhbHNlO1xuICAgIFsuLi5zZWN0aW9uLmNoaWxkcmVuXS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZS50YWdOYW1lID09PSAnRElWJyB8fCAhZGVmYXVsdENvbnRlbnQpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVycy5wdXNoKHdyYXBwZXIpO1xuICAgICAgICBkZWZhdWx0Q29udGVudCA9IGUudGFnTmFtZSAhPT0gJ0RJVic7XG4gICAgICAgIGlmIChkZWZhdWx0Q29udGVudCkgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LWNvbnRlbnQtd3JhcHBlcicpO1xuICAgICAgfVxuICAgICAgd3JhcHBlcnNbd3JhcHBlcnMubGVuZ3RoIC0gMV0uYXBwZW5kKGUpO1xuICAgIH0pO1xuICAgIHdyYXBwZXJzLmZvckVhY2goKHdyYXBwZXIpID0+IHNlY3Rpb24uYXBwZW5kKHdyYXBwZXIpKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblN0YXR1cyA9ICdpbml0aWFsaXplZCc7XG4gICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgLy8gUHJvY2VzcyBzZWN0aW9uIG1ldGFkYXRhXG4gICAgY29uc3Qgc2VjdGlvbk1ldGEgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zZWN0aW9uLW1ldGFkYXRhJyk7XG4gICAgaWYgKHNlY3Rpb25NZXRhKSB7XG4gICAgICBjb25zdCBtZXRhID0gcmVhZEJsb2NrQ29uZmlnKHNlY3Rpb25NZXRhKTtcbiAgICAgIE9iamVjdC5rZXlzKG1ldGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0gbWV0YS5zdHlsZVxuICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgIC5maWx0ZXIoKHN0eWxlKSA9PiBzdHlsZSlcbiAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiB0b0NsYXNzTmFtZShzdHlsZS50cmltKCkpKTtcbiAgICAgICAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHNlY3Rpb24uY2xhc3NMaXN0LmFkZChzdHlsZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlY3Rpb24uZGF0YXNldFt0b0NhbWVsQ2FzZShrZXkpXSA9IG1ldGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWN0aW9uTWV0YS5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogR2V0cyBwbGFjZWhvbGRlcnMgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwcmVmaXhdIExvY2F0aW9uIG9mIHBsYWNlaG9sZGVyc1xuICogQHJldHVybnMge29iamVjdH0gV2luZG93IHBsYWNlaG9sZGVycyBvYmplY3RcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmFzeW5jIGZ1bmN0aW9uIGZldGNoUGxhY2Vob2xkZXJzKHByZWZpeCA9ICdkZWZhdWx0Jykge1xuICB3aW5kb3cucGxhY2Vob2xkZXJzID0gd2luZG93LnBsYWNlaG9sZGVycyB8fCB7fTtcbiAgaWYgKCF3aW5kb3cucGxhY2Vob2xkZXJzW3ByZWZpeF0pIHtcbiAgICB3aW5kb3cucGxhY2Vob2xkZXJzW3ByZWZpeF0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgZmV0Y2goYCR7cHJlZml4ID09PSAnZGVmYXVsdCcgPyAnJyA6IHByZWZpeH0vcGxhY2Vob2xkZXJzLmpzb25gKVxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlcnMgPSB7fTtcbiAgICAgICAgICBqc29uLmRhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKHBsYWNlaG9sZGVyKSA9PiBwbGFjZWhvbGRlci5LZXkpXG4gICAgICAgICAgICAuZm9yRWFjaCgocGxhY2Vob2xkZXIpID0+IHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJzW3RvQ2FtZWxDYXNlKHBsYWNlaG9sZGVyLktleSldID0gcGxhY2Vob2xkZXIuVGV4dDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHdpbmRvdy5wbGFjZWhvbGRlcnNbcHJlZml4XSA9IHBsYWNlaG9sZGVycztcbiAgICAgICAgICByZXNvbHZlKHdpbmRvdy5wbGFjZWhvbGRlcnNbcHJlZml4XSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgLy8gZXJyb3IgbG9hZGluZyBwbGFjZWhvbGRlcnNcbiAgICAgICAgICB3aW5kb3cucGxhY2Vob2xkZXJzW3ByZWZpeF0gPSB7fTtcbiAgICAgICAgICByZXNvbHZlKHdpbmRvdy5wbGFjZWhvbGRlcnNbcHJlZml4XSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB3aW5kb3cucGxhY2Vob2xkZXJzW2Ake3ByZWZpeH1gXTtcbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBibG9jayBET00gRWxlbWVudCBmcm9tIGEgdHdvIGRpbWVuc2lvbmFsIGFycmF5LCBzdHJpbmcsIG9yIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IGJsb2NrTmFtZSBuYW1lIG9mIHRoZSBibG9ja1xuICogQHBhcmFtIHsqfSBjb250ZW50IHR3byBkaW1lbnNpb25hbCBhcnJheSBvciBzdHJpbmcgb3Igb2JqZWN0IG9mIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRCbG9jayhibG9ja05hbWUsIGNvbnRlbnQpIHtcbiAgY29uc3QgdGFibGUgPSBBcnJheS5pc0FycmF5KGNvbnRlbnQpID8gY29udGVudCA6IFtbY29udGVudF1dO1xuICBjb25zdCBibG9ja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGJ1aWxkIGltYWdlIGJsb2NrIG5lc3RlZCBkaXYgc3RydWN0dXJlXG4gIGJsb2NrRWwuY2xhc3NMaXN0LmFkZChibG9ja05hbWUpO1xuICB0YWJsZS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBjb25zdCByb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgIGNvbnN0IGNvbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB2YWxzID0gY29sLmVsZW1zID8gY29sLmVsZW1zIDogW2NvbF07XG4gICAgICB2YWxzLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb2xFbC5pbm5lckhUTUwgKz0gdmFsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xFbC5hcHBlbmRDaGlsZCh2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByb3dFbC5hcHBlbmRDaGlsZChjb2xFbCk7XG4gICAgfSk7XG4gICAgYmxvY2tFbC5hcHBlbmRDaGlsZChyb3dFbCk7XG4gIH0pO1xuICByZXR1cm4gYmxvY2tFbDtcbn1cblxuLyoqXG4gKiBMb2FkcyBKUyBhbmQgQ1NTIGZvciBhIGJsb2NrLlxuICogQHBhcmFtIHtFbGVtZW50fSBibG9jayBUaGUgYmxvY2sgZWxlbWVudFxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkQmxvY2soYmxvY2spIHtcbiAgY29uc3Qgc3RhdHVzID0gYmxvY2suZGF0YXNldC5ibG9ja1N0YXR1cztcbiAgaWYgKHN0YXR1cyAhPT0gJ2xvYWRpbmcnICYmIHN0YXR1cyAhPT0gJ2xvYWRlZCcpIHtcbiAgICBibG9jay5kYXRhc2V0LmJsb2NrU3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgIGNvbnN0IHsgYmxvY2tOYW1lIH0gPSBibG9jay5kYXRhc2V0O1xuICAgIHRyeSB7XG4gICAgICAvKlxuICAgICAgTm8gbmVlZCB0byBsb2FkIGJsb2NrIENTUyBzZXBhcmF0ZWx5IHdoZW4gdXNpbmcgd2VicGFja1xuICAgICAgYGBgXG4gICAgICBjb25zdCBjc3NMb2FkZWQgPSBsb2FkQ1NTKFxuICAgICAgICBgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vYmxvY2tzLyR7YmxvY2tOYW1lfS8ke2Jsb2NrTmFtZX0uY3NzYCxcbiAgICAgICk7XG4gICAgICBgYGBcbiAgICAgICovXG4gICAgICBjb25zdCBjc3NMb2FkZWQgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIGNvbnN0IGRlY29yYXRpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydChcbiAgICAgICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgICAgICBgJHt3aW5kb3cuaGx4LmNvZGVCYXNlUGF0aH0vYmxvY2tzLyR7YmxvY2tOYW1lfS8ke2Jsb2NrTmFtZX0uanNgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKG1vZC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgIGF3YWl0IG1vZC5kZWZhdWx0KGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmYWlsZWQgdG8gbG9hZCBtb2R1bGUgZm9yICR7YmxvY2tOYW1lfWAsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KSgpO1xuICAgICAgfSk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbY3NzTG9hZGVkLCBkZWNvcmF0aW9uQ29tcGxldGVdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKGBmYWlsZWQgdG8gbG9hZCBibG9jayAke2Jsb2NrTmFtZX1gLCBlcnJvcik7XG4gICAgfVxuICAgIGJsb2NrLmRhdGFzZXQuYmxvY2tTdGF0dXMgPSAnbG9hZGVkJztcbiAgfVxuICByZXR1cm4gYmxvY2s7XG59XG5cbi8qKlxuICogTG9hZHMgSlMgYW5kIENTUyBmb3IgYWxsIGJsb2NrcyBpbiBhIGNvbnRhaW5lciBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBtYWluIFRoZSBjb250YWluZXIgZWxlbWVudFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEJsb2NrcyhtYWluKSB7XG4gIHVwZGF0ZVNlY3Rpb25zU3RhdHVzKG1haW4pO1xuICBjb25zdCBibG9ja3MgPSBbLi4ubWFpbi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYmxvY2snKV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICBhd2FpdCBsb2FkQmxvY2soYmxvY2tzW2ldKTtcbiAgICB1cGRhdGVTZWN0aW9uc1N0YXR1cyhtYWluKTtcbiAgfVxufVxuXG4vKipcbiAqIERlY29yYXRlcyBhIGJsb2NrLlxuICogQHBhcmFtIHtFbGVtZW50fSBibG9jayBUaGUgYmxvY2sgZWxlbWVudFxuICovXG5mdW5jdGlvbiBkZWNvcmF0ZUJsb2NrKGJsb2NrKSB7XG4gIGNvbnN0IHNob3J0QmxvY2tOYW1lID0gYmxvY2suY2xhc3NMaXN0WzBdO1xuICBpZiAoc2hvcnRCbG9ja05hbWUpIHtcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgIGJsb2NrLmRhdGFzZXQuYmxvY2tOYW1lID0gc2hvcnRCbG9ja05hbWU7XG4gICAgYmxvY2suZGF0YXNldC5ibG9ja1N0YXR1cyA9ICdpbml0aWFsaXplZCc7XG4gICAgd3JhcFRleHROb2RlcyhibG9jayk7XG4gICAgY29uc3QgYmxvY2tXcmFwcGVyID0gYmxvY2sucGFyZW50RWxlbWVudDtcbiAgICBibG9ja1dyYXBwZXIuY2xhc3NMaXN0LmFkZChgJHtzaG9ydEJsb2NrTmFtZX0td3JhcHBlcmApO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBibG9jay5jbG9zZXN0KCcuc2VjdGlvbicpO1xuICAgIGlmIChzZWN0aW9uKSBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoYCR7c2hvcnRCbG9ja05hbWV9LWNvbnRhaW5lcmApO1xuICB9XG59XG5cbi8qKlxuICogRGVjb3JhdGVzIGFsbCBibG9ja3MgaW4gYSBjb250YWluZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWFpbiBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZGVjb3JhdGVCbG9ja3MobWFpbikge1xuICBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5zZWN0aW9uID4gZGl2ID4gZGl2JykuZm9yRWFjaChkZWNvcmF0ZUJsb2NrKTtcbn1cblxuLyoqXG4gKiBMb2FkcyBhIGJsb2NrIG5hbWVkICdoZWFkZXInIGludG8gaGVhZGVyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGhlYWRlciBoZWFkZXIgZWxlbWVudFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRIZWFkZXIoaGVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckJsb2NrID0gYnVpbGRCbG9jaygnaGVhZGVyJywgJycpO1xuICBoZWFkZXIuYXBwZW5kKGhlYWRlckJsb2NrKTtcbiAgZGVjb3JhdGVCbG9jayhoZWFkZXJCbG9jayk7XG4gIHJldHVybiBsb2FkQmxvY2soaGVhZGVyQmxvY2spO1xufVxuXG4vKipcbiAqIExvYWRzIGEgYmxvY2sgbmFtZWQgJ2Zvb3RlcicgaW50byBmb290ZXJcbiAqIEBwYXJhbSBmb290ZXIgZm9vdGVyIGVsZW1lbnRcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9vdGVyKGZvb3Rlcikge1xuICBjb25zdCBmb290ZXJCbG9jayA9IGJ1aWxkQmxvY2soJ2Zvb3RlcicsICcnKTtcbiAgZm9vdGVyLmFwcGVuZChmb290ZXJCbG9jayk7XG4gIGRlY29yYXRlQmxvY2soZm9vdGVyQmxvY2spO1xuICByZXR1cm4gbG9hZEJsb2NrKGZvb3RlckJsb2NrKTtcbn1cblxuLyoqXG4gKiBXYWl0IGZvciBJbWFnZS5cbiAqIEBwYXJhbSB7RWxlbWVudH0gc2VjdGlvbiBzZWN0aW9uIGVsZW1lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gd2FpdEZvckZpcnN0SW1hZ2Uoc2VjdGlvbikge1xuICBjb25zdCBsY3BDYW5kaWRhdGUgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGlmIChsY3BDYW5kaWRhdGUgJiYgIWxjcENhbmRpZGF0ZS5jb21wbGV0ZSkge1xuICAgICAgbGNwQ2FuZGlkYXRlLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdlYWdlcicpO1xuICAgICAgbGNwQ2FuZGlkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKTtcbiAgICAgIGxjcENhbmRpZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlc29sdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBMb2FkcyBhbGwgYmxvY2tzIGluIGEgc2VjdGlvbi5cbiAqIEBwYXJhbSB7RWxlbWVudH0gc2VjdGlvbiBUaGUgc2VjdGlvbiBlbGVtZW50XG4gKi9cblxuYXN5bmMgZnVuY3Rpb24gbG9hZFNlY3Rpb24oc2VjdGlvbiwgbG9hZENhbGxiYWNrKSB7XG4gIGNvbnN0IHN0YXR1cyA9IHNlY3Rpb24uZGF0YXNldC5zZWN0aW9uU3RhdHVzO1xuICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09ICdpbml0aWFsaXplZCcpIHtcbiAgICBzZWN0aW9uLmRhdGFzZXQuc2VjdGlvblN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICBjb25zdCBibG9ja3MgPSBbLi4uc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYmxvY2snKV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgICBhd2FpdCBsb2FkQmxvY2soYmxvY2tzW2ldKTtcbiAgICB9XG4gICAgaWYgKGxvYWRDYWxsYmFjaykgYXdhaXQgbG9hZENhbGxiYWNrKHNlY3Rpb24pO1xuICAgIHNlY3Rpb24uZGF0YXNldC5zZWN0aW9uU3RhdHVzID0gJ2xvYWRlZCc7XG4gICAgc2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGFsbCBzZWN0aW9ucy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgcGFyZW50IGVsZW1lbnQgb2Ygc2VjdGlvbnMgdG8gbG9hZFxuICovXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTZWN0aW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IHNlY3Rpb25zID0gWy4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnNlY3Rpb24nKV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgIGF3YWl0IGxvYWRTZWN0aW9uKHNlY3Rpb25zW2ldKTtcbiAgICBpZiAoaSA9PT0gMCAmJiBzYW1wbGVSVU0uZW5oYW5jZSkge1xuICAgICAgc2FtcGxlUlVNLmVuaGFuY2UoKTtcbiAgICB9XG4gIH1cbn1cblxuaW5pdCgpO1xuXG5leHBvcnQge1xuICBidWlsZEJsb2NrLFxuICBjcmVhdGVPcHRpbWl6ZWRQaWN0dXJlLFxuICBkZWNvcmF0ZUJsb2NrLFxuICBkZWNvcmF0ZUJsb2NrcyxcbiAgZGVjb3JhdGVCdXR0b25zLFxuICBkZWNvcmF0ZUljb25zLFxuICBkZWNvcmF0ZVNlY3Rpb25zLFxuICBkZWNvcmF0ZVRlbXBsYXRlQW5kVGhlbWUsXG4gIGZldGNoUGxhY2Vob2xkZXJzLFxuICBnZXRNZXRhZGF0YSxcbiAgbG9hZEJsb2NrLFxuICBsb2FkQ1NTLFxuICBsb2FkRm9vdGVyLFxuICBsb2FkSGVhZGVyLFxuICBsb2FkU2NyaXB0LFxuICBsb2FkU2VjdGlvbixcbiAgbG9hZFNlY3Rpb25zLFxuICByZWFkQmxvY2tDb25maWcsXG4gIHNhbXBsZVJVTSxcbiAgc2V0dXAsXG4gIHRvQ2FtZWxDYXNlLFxuICB0b0NsYXNzTmFtZSxcbiAgd2FpdEZvckZpcnN0SW1hZ2UsXG4gIHdyYXBUZXh0Tm9kZXMsXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlLCB1bm1vdW50Q29tcG9uZW50QXROb2RlIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb290KGNvbnRhaW5lcikge1xuXHRyZXR1cm4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG5cdFx0XHRyZW5kZXIoY2hpbGRyZW4sIGNvbnRhaW5lcik7XG5cdFx0fSxcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0XHR1bm1vdW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR1bm1vdW50Q29tcG9uZW50QXROb2RlKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZVJvb3QoY29udGFpbmVyLCBjaGlsZHJlbikge1xuXHRoeWRyYXRlKGNoaWxkcmVuLCBjb250YWluZXIpO1xuXHRyZXR1cm4gY3JlYXRlUm9vdChjb250YWluZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNyZWF0ZVJvb3QsXG5cdGh5ZHJhdGVSb290XG59O1xuIiwiaW1wb3J0e0NvbXBvbmVudCBhcyBuLGNyZWF0ZUVsZW1lbnQgYXMgdCxvcHRpb25zIGFzIGUsdG9DaGlsZEFycmF5IGFzIHIsRnJhZ21lbnQgYXMgdSxyZW5kZXIgYXMgbyxoeWRyYXRlIGFzIGksY3JlYXRlQ29udGV4dCBhcyBjLGNyZWF0ZVJlZiBhcyBmLGNsb25lRWxlbWVudCBhcyBsfWZyb21cInByZWFjdFwiO2V4cG9ydHtDb21wb25lbnQsRnJhZ21lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVFbGVtZW50LGNyZWF0ZVJlZn1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlQ2FsbGJhY2sgYXMgYSx1c2VDb250ZXh0IGFzIHMsdXNlRGVidWdWYWx1ZSBhcyBoLHVzZUVmZmVjdCBhcyB2LHVzZUlkIGFzIGQsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBwLHVzZUxheW91dEVmZmVjdCBhcyBtLHVzZU1lbW8gYXMgeSx1c2VSZWR1Y2VyIGFzIF8sdXNlUmVmIGFzIGIsdXNlU3RhdGUgYXMgU31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7ZnVuY3Rpb24gZyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4sdCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD10fWZ1bmN0aW9uIEMobixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpnKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0oRS5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBnKHRoaXMucHJvcHMsbil8fGcodGhpcy5zdGF0ZSx0KX07dmFyIHg9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHgmJngobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB3KG4pe2Z1bmN0aW9uIHQodCl7aWYoIShcInJlZlwiaW4gdCkpcmV0dXJuIG4odCxudWxsKTt2YXIgZT10LnJlZjtkZWxldGUgdC5yZWY7dmFyIHI9bih0LGUpO3JldHVybiB0LnJlZj1lLHJ9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgaz1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LEk9e21hcDprLGZvckVhY2g6ayxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sTj1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7TihuLHQsZSxyKX07dmFyIE09ZS51bm1vdW50O2Z1bmN0aW9uIFQobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWZ1bmN0aW9uKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufSh7fSxuKSkuX19jJiYobi5fX2MuX19QPT09ZSYmKG4uX19jLl9fUD10KSxuLl9fYz1udWxsKSxuLl9faz1uLl9fayYmbi5fX2subWFwKGZ1bmN0aW9uKG4pe3JldHVybiBUKG4sdCxlKX0pKSxufWZ1bmN0aW9uIEEobix0LGUpe3JldHVybiBuJiZlJiYobi5fX3Y9bnVsbCxuLl9faz1uLl9fayYmbi5fX2subWFwKGZ1bmN0aW9uKG4pe3JldHVybiBBKG4sdCxlKX0pLG4uX19jJiZuLl9fYy5fX1A9PT10JiYobi5fX2UmJmUuYXBwZW5kQ2hpbGQobi5fX2UpLG4uX19jLl9fZT0hMCxuLl9fYy5fX1A9ZSkpLG59ZnVuY3Rpb24gRCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBMKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fYSYmdC5fX2Eobil9ZnVuY3Rpb24gTyhuKXt2YXIgZSxyLHU7ZnVuY3Rpb24gbyhvKXtpZihlfHwoZT1uKCkpLnRoZW4oZnVuY3Rpb24obil7cj1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3U9bn0pLHUpdGhyb3cgdTtpZighcil0aHJvdyBlO3JldHVybiB0KHIsbyl9cmV0dXJuIG8uZGlzcGxheU5hbWU9XCJMYXp5XCIsby5fX2Y9ITAsb31mdW5jdGlvbiBGKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9ZS51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJjMyJm4uX191JiYobi50eXBlPW51bGwpLE0mJk0obil9LChELnByb3RvdHlwZT1uZXcgbikuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9TChyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UoYyk6YygpKX07ZS5fX1I9aTt2YXIgYz1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fYSl7dmFyIG49ci5zdGF0ZS5fX2E7ci5fX3YuX19rWzBdPUEobixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19hOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX07ci5fX3UrK3x8MzImdC5fX3V8fHIuc2V0U3RhdGUoe19fYTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sRC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEQucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLGUpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbz10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1UKHRoaXMuX19iLHIsby5fX089by5fX1ApfXRoaXMuX19iPW51bGx9dmFyIGk9ZS5fX2EmJnQodSxudWxsLG4uZmFsbGJhY2spO3JldHVybiBpJiYoaS5fX3UmPS0zMyksW3QodSxudWxsLGUuX19hP251bGw6bi5jaGlsZHJlbiksaV19O3ZhciBVPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIFYobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBXKG4pe3ZhciBlPXRoaXMscj1uLmk7ZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe28obnVsbCxlLmwpLGUubD1udWxsLGUuaT1udWxsfSxlLmkmJmUuaSE9PXImJmUuY29tcG9uZW50V2lsbFVubW91bnQoKSxlLmx8fChlLmk9cixlLmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTpyLGNoaWxkTm9kZXM6W10sY29udGFpbnM6ZnVuY3Rpb24oKXtyZXR1cm4hMH0sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obix0KXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLGUuaS5yZW1vdmVDaGlsZChuKX19KSxvKHQoVix7Y29udGV4dDplLmNvbnRleHR9LG4uX192KSxlLmwpfWZ1bmN0aW9uIFAobixlKXt2YXIgcj10KFcse19fdjpuLGk6ZX0pO3JldHVybiByLmNvbnRhaW5lckluZm89ZSxyfShGLnByb3RvdHlwZT1uZXcgbikuX19hPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1MKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxVKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sRi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXIobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LEYucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1GLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtVKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsej0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlKCFTKXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sQj0vXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLEg9L1tBLVowLTldL2csWj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsWT1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC86L2ZpbHxjaGV8cmEvKS50ZXN0KG4pfTtmdW5jdGlvbiAkKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLG8obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIHEobix0LGUpe3JldHVybiBpKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1uLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLnByb3RvdHlwZSx0LHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX0pfSk7dmFyIEc9ZS5ldmVudDtmdW5jdGlvbiBKKCl7fWZ1bmN0aW9uIEsoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gUSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9ZS5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gRyYmKG49RyhuKSksbi5wZXJzaXN0PUosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1LLG4uaXNEZWZhdWx0UHJldmVudGVkPVEsbi5uYXRpdmVFdmVudD1ufTt2YXIgWCxubj17ZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSx0bj1lLnZub2RlO2Uudm5vZGU9ZnVuY3Rpb24obil7XCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSYmZnVuY3Rpb24obil7dmFyIHQ9bi5wcm9wcyxlPW4udHlwZSx1PXt9LG89LTE9PT1lLmluZGV4T2YoXCItXCIpO2Zvcih2YXIgaSBpbiB0KXt2YXIgYz10W2ldO2lmKCEoXCJ2YWx1ZVwiPT09aSYmXCJkZWZhdWx0VmFsdWVcImluIHQmJm51bGw9PWN8fFomJlwiY2hpbGRyZW5cIj09PWkmJlwibm9zY3JpcHRcIj09PWV8fFwiY2xhc3NcIj09PWl8fFwiY2xhc3NOYW1lXCI9PT1pKSl7dmFyIGY9aS50b0xvd2VyQ2FzZSgpO1wiZGVmYXVsdFZhbHVlXCI9PT1pJiZcInZhbHVlXCJpbiB0JiZudWxsPT10LnZhbHVlP2k9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PWkmJiEwPT09Yz9jPVwiXCI6XCJ0cmFuc2xhdGVcIj09PWYmJlwibm9cIj09PWM/Yz0hMTpcIm9cIj09PWZbMF0mJlwiblwiPT09ZlsxXT9cIm9uZG91YmxlY2xpY2tcIj09PWY/aT1cIm9uZGJsY2xpY2tcIjpcIm9uY2hhbmdlXCIhPT1mfHxcImlucHV0XCIhPT1lJiZcInRleHRhcmVhXCIhPT1lfHxZKHQudHlwZSk/XCJvbmZvY3VzXCI9PT1mP2k9XCJvbmZvY3VzaW5cIjpcIm9uYmx1clwiPT09Zj9pPVwib25mb2N1c291dFwiOkIudGVzdChpKSYmKGk9Zik6Zj1pPVwib25pbnB1dFwiOm8mJnoudGVzdChpKT9pPWkucmVwbGFjZShILFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWMmJihjPXZvaWQgMCksXCJvbmlucHV0XCI9PT1mJiZ1W2k9Zl0mJihpPVwib25pbnB1dENhcHR1cmVcIiksdVtpXT1jfX1cInNlbGVjdFwiPT1lJiZ1Lm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHUudmFsdWUpJiYodS52YWx1ZT1yKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9dS52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PWUmJm51bGwhPXUuZGVmYXVsdFZhbHVlJiYodS52YWx1ZT1yKHQuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD11Lm11bHRpcGxlPy0xIT11LmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnUuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLHQuY2xhc3MmJiF0LmNsYXNzTmFtZT8odS5jbGFzcz10LmNsYXNzLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1LFwiY2xhc3NOYW1lXCIsbm4pKToodC5jbGFzc05hbWUmJiF0LmNsYXNzfHx0LmNsYXNzJiZ0LmNsYXNzTmFtZSkmJih1LmNsYXNzPXUuY2xhc3NOYW1lPXQuY2xhc3NOYW1lKSxuLnByb3BzPXV9KG4pLG4uJCR0eXBlb2Y9aix0biYmdG4obil9O3ZhciBlbj1lLl9fcjtlLl9fcj1mdW5jdGlvbihuKXtlbiYmZW4obiksWD1uLl9fY307dmFyIHJuPWUuZGlmZmVkO2UuZGlmZmVkPWZ1bmN0aW9uKG4pe3JuJiZybihuKTt2YXIgdD1uLnByb3BzLGU9bi5fX2U7bnVsbCE9ZSYmXCJ0ZXh0YXJlYVwiPT09bi50eXBlJiZcInZhbHVlXCJpbiB0JiZ0LnZhbHVlIT09ZS52YWx1ZSYmKGUudmFsdWU9bnVsbD09dC52YWx1ZT9cIlwiOnQudmFsdWUpLFg9bnVsbH07dmFyIHVuPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gWC5fX25bbi5fX2NdLnByb3BzLnZhbHVlfSx1c2VDYWxsYmFjazphLHVzZUNvbnRleHQ6cyx1c2VEZWJ1Z1ZhbHVlOmgsdXNlRGVmZXJyZWRWYWx1ZTpfbix1c2VFZmZlY3Q6dix1c2VJZDpkLHVzZUltcGVyYXRpdmVIYW5kbGU6cCx1c2VJbnNlcnRpb25FZmZlY3Q6U24sdXNlTGF5b3V0RWZmZWN0Om0sdXNlTWVtbzp5LHVzZVJlZHVjZXI6Xyx1c2VSZWY6Yix1c2VTdGF0ZTpTLHVzZVN5bmNFeHRlcm5hbFN0b3JlOkVuLHVzZVRyYW5zaXRpb246Ym59fX0sb249XCIxOC4zLjFcIjtmdW5jdGlvbiBjbihuKXtyZXR1cm4gdC5iaW5kKG51bGwsbil9ZnVuY3Rpb24gZm4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBsbihuKXtyZXR1cm4gZm4obikmJm4udHlwZT09PXV9ZnVuY3Rpb24gYW4obil7cmV0dXJuISFuJiYhIW4uZGlzcGxheU5hbWUmJihcInN0cmluZ1wiPT10eXBlb2Ygbi5kaXNwbGF5TmFtZXx8bi5kaXNwbGF5TmFtZSBpbnN0YW5jZW9mIFN0cmluZykmJm4uZGlzcGxheU5hbWUuc3RhcnRzV2l0aChcIk1lbW8oXCIpfWZ1bmN0aW9uIHNuKG4pe3JldHVybiBmbihuKT9sLmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIGhuKG4pe3JldHVybiEhbi5fX2smJihvKG51bGwsbiksITApfWZ1bmN0aW9uIHZuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGRuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LHBuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LG1uPXU7ZnVuY3Rpb24geW4obil7bigpfWZ1bmN0aW9uIF9uKG4pe3JldHVybiBufWZ1bmN0aW9uIGJuKCl7cmV0dXJuWyExLHluXX12YXIgU249bSxnbj1mbjtmdW5jdGlvbiBFbihuLHQpe3ZhciBlPXQoKSxyPVMoe2g6e19fOmUsdjp0fX0pLHU9clswXS5oLG89clsxXTtyZXR1cm4gbShmdW5jdGlvbigpe3UuX189ZSx1LnY9dCxDbih1KSYmbyh7aDp1fSl9LFtuLGUsdF0pLHYoZnVuY3Rpb24oKXtyZXR1cm4gQ24odSkmJm8oe2g6dX0pLG4oZnVuY3Rpb24oKXtDbih1KSYmbyh7aDp1fSl9KX0sW25dKSxlfWZ1bmN0aW9uIENuKG4pe3ZhciB0LGUscj1uLnYsdT1uLl9fO3RyeXt2YXIgbz1yKCk7cmV0dXJuISgodD11KT09PShlPW8pJiYoMCE9PXR8fDEvdD09MS9lKXx8dCE9dCYmZSE9ZSl9Y2F0Y2gobil7cmV0dXJuITB9fXZhciB4bj17dXNlU3RhdGU6Uyx1c2VJZDpkLHVzZVJlZHVjZXI6Xyx1c2VFZmZlY3Q6dix1c2VMYXlvdXRFZmZlY3Q6bSx1c2VJbnNlcnRpb25FZmZlY3Q6U24sdXNlVHJhbnNpdGlvbjpibix1c2VEZWZlcnJlZFZhbHVlOl9uLHVzZVN5bmNFeHRlcm5hbFN0b3JlOkVuLHN0YXJ0VHJhbnNpdGlvbjp5bix1c2VSZWY6Yix1c2VJbXBlcmF0aXZlSGFuZGxlOnAsdXNlTWVtbzp5LHVzZUNhbGxiYWNrOmEsdXNlQ29udGV4dDpzLHVzZURlYnVnVmFsdWU6aCx2ZXJzaW9uOlwiMTguMy4xXCIsQ2hpbGRyZW46SSxyZW5kZXI6JCxoeWRyYXRlOnEsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpobixjcmVhdGVQb3J0YWw6UCxjcmVhdGVFbGVtZW50OnQsY3JlYXRlQ29udGV4dDpjLGNyZWF0ZUZhY3Rvcnk6Y24sY2xvbmVFbGVtZW50OnNuLGNyZWF0ZVJlZjpmLEZyYWdtZW50OnUsaXNWYWxpZEVsZW1lbnQ6Zm4saXNFbGVtZW50OmduLGlzRnJhZ21lbnQ6bG4saXNNZW1vOmFuLGZpbmRET01Ob2RlOnZuLENvbXBvbmVudDpuLFB1cmVDb21wb25lbnQ6RSxtZW1vOkMsZm9yd2FyZFJlZjp3LGZsdXNoU3luYzpwbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpkbixTdHJpY3RNb2RlOm1uLFN1c3BlbnNlOkQsU3VzcGVuc2VMaXN0OkYsbGF6eTpPLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOnVufTtleHBvcnR7SSBhcyBDaGlsZHJlbixFIGFzIFB1cmVDb21wb25lbnQsbW4gYXMgU3RyaWN0TW9kZSxEIGFzIFN1c3BlbnNlLEYgYXMgU3VzcGVuc2VMaXN0LHVuIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHNuIGFzIGNsb25lRWxlbWVudCxjbiBhcyBjcmVhdGVGYWN0b3J5LFAgYXMgY3JlYXRlUG9ydGFsLHhuIGFzIGRlZmF1bHQsdm4gYXMgZmluZERPTU5vZGUscG4gYXMgZmx1c2hTeW5jLHcgYXMgZm9yd2FyZFJlZixxIGFzIGh5ZHJhdGUsZ24gYXMgaXNFbGVtZW50LGxuIGFzIGlzRnJhZ21lbnQsYW4gYXMgaXNNZW1vLGZuIGFzIGlzVmFsaWRFbGVtZW50LE8gYXMgbGF6eSxDIGFzIG1lbW8sJCBhcyByZW5kZXIseW4gYXMgc3RhcnRUcmFuc2l0aW9uLGhuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsZG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsX24gYXMgdXNlRGVmZXJyZWRWYWx1ZSxTbiBhcyB1c2VJbnNlcnRpb25FZmZlY3QsRW4gYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsYm4gYXMgdXNlVHJhbnNpdGlvbixvbiBhcyB2ZXJzaW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsdCxpLG8scixmLGUsYyxzLGEsaD17fSx2PVtdLHA9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaSx5PUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gZChuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiB3KG4pe24mJm4ucGFyZW50Tm9kZSYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIF8obCx1LHQpe3ZhciBpLG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj9pPXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6dCksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiBnKGwsZixpLG8sbnVsbCl9ZnVuY3Rpb24gZyhuLHQsaSxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6dCxrZXk6aSxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyLF9faTotMSxfX3U6MH07cmV0dXJuIG51bGw9PXImJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBtKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gYihuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBrKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIHgobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP3gobi5fXyxuLl9faSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP3gobik6bnVsbH1mdW5jdGlvbiBDKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gQyhuKX19ZnVuY3Rpb24gUyhuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZpLnB1c2gobikmJiFNLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoTSl9ZnVuY3Rpb24gTSgpe3ZhciBuLHUsdCxvLHIsZSxjLHM7Zm9yKGkuc29ydChmKTtuPWkuc2hpZnQoKTspbi5fX2QmJih1PWkubGVuZ3RoLG89dm9pZCAwLGU9KHI9KHQ9bikuX192KS5fX2UsYz1bXSxzPVtdLHQuX19QJiYoKG89ZCh7fSxyKSkuX192PXIuX192KzEsbC52bm9kZSYmbC52bm9kZShvKSxPKHQuX19QLG8scix0Ll9fbix0Ll9fUC5uYW1lc3BhY2VVUkksMzImci5fX3U/W2VdOm51bGwsYyxudWxsPT1lP3gocik6ZSwhISgzMiZyLl9fdSkscyksby5fX3Y9ci5fX3Ysby5fXy5fX2tbby5fX2ldPW8saihjLG8scyksby5fX2UhPWUmJkMobykpLGkubGVuZ3RoPnUmJmkuc29ydChmKSk7TS5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEscCx5LGQsdyxfPXQmJnQuX19rfHx2LGc9bC5sZW5ndGg7Zm9yKHUuX19kPWUsJCh1LGwsXyksZT11Ll9fZCxhPTA7YTxnO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihwPS0xPT09eS5fX2k/aDpfW3kuX19pXXx8aCx5Ll9faT1hLE8obix5LHAsaSxvLHIsZixlLGMscyksZD15Ll9fZSx5LnJlZiYmcC5yZWYhPXkucmVmJiYocC5yZWYmJk4ocC5yZWYsbnVsbCx5KSxzLnB1c2goeS5yZWYseS5fX2N8fGQseSkpLG51bGw9PXcmJm51bGwhPWQmJih3PWQpLDY1NTM2JnkuX191fHxwLl9faz09PXkuX19rP2U9SSh5LGUsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgeS50eXBlJiZ2b2lkIDAhPT15Ll9fZD9lPXkuX19kOmQmJihlPWQubmV4dFNpYmxpbmcpLHkuX19kPXZvaWQgMCx5Ll9fdSY9LTE5NjYwOSk7dS5fX2Q9ZSx1Ll9fZT13fWZ1bmN0aW9uICQobixsLHUpe3ZhciB0LGksbyxyLGYsZT1sLmxlbmd0aCxjPXUubGVuZ3RoLHM9YyxhPTA7Zm9yKG4uX19rPVtdLHQ9MDt0PGU7dCsrKW51bGwhPShpPWxbdF0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIGkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGk/KHI9dCthLChpPW4uX19rW3RdPVwic3RyaW5nXCI9PXR5cGVvZiBpfHxcIm51bWJlclwiPT10eXBlb2YgaXx8XCJiaWdpbnRcIj09dHlwZW9mIGl8fGkuY29uc3RydWN0b3I9PVN0cmluZz9nKG51bGwsaSxudWxsLG51bGwsbnVsbCk6eShpKT9nKGIse2NoaWxkcmVuOml9LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1pLmNvbnN0cnVjdG9yJiZpLl9fYj4wP2coaS50eXBlLGkucHJvcHMsaS5rZXksaS5yZWY/aS5yZWY6bnVsbCxpLl9fdik6aSkuX189bixpLl9fYj1uLl9fYisxLG89bnVsbCwtMSE9PShmPWkuX19pPUwoaSx1LHIscykpJiYocy0tLChvPXVbZl0pJiYoby5fX3V8PTEzMTA3MikpLG51bGw9PW98fG51bGw9PT1vLl9fdj8oLTE9PWYmJmEtLSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLnR5cGUmJihpLl9fdXw9NjU1MzYpKTpmIT09ciYmKGY9PXItMT9hLS06Zj09cisxP2ErKzooZj5yP2EtLTphKyssaS5fX3V8PTY1NTM2KSkpOmk9bi5fX2tbdF09bnVsbDtpZihzKWZvcih0PTA7dDxjO3QrKyludWxsIT0obz11W3RdKSYmMD09KDEzMTA3MiZvLl9fdSkmJihvLl9fZT09bi5fX2QmJihuLl9fZD14KG8pKSxWKG8sbykpfWZ1bmN0aW9uIEkobixsLHUpe3ZhciB0LGk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlKXtmb3IodD1uLl9fayxpPTA7dCYmaTx0Lmxlbmd0aDtpKyspdFtpXSYmKHRbaV0uX189bixsPUkodFtpXSxsLHUpKTtyZXR1cm4gbH1uLl9fZSE9bCYmKGwmJm4udHlwZSYmIXUuY29udGFpbnMobCkmJihsPXgobikpLHUuaW5zZXJ0QmVmb3JlKG4uX19lLGx8fG51bGwpLGw9bi5fX2UpO2Rve2w9bCYmbC5uZXh0U2libGluZ313aGlsZShudWxsIT1sJiY4PT09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gSChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KHkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBMKG4sbCx1LHQpe3ZhciBpPW4ua2V5LG89bi50eXBlLHI9dS0xLGY9dSsxLGU9bFt1XTtpZihudWxsPT09ZXx8ZSYmaT09ZS5rZXkmJm89PT1lLnR5cGUmJjA9PSgxMzEwNzImZS5fX3UpKXJldHVybiB1O2lmKHQ+KG51bGwhPWUmJjA9PSgxMzEwNzImZS5fX3UpPzE6MCkpZm9yKDtyPj0wfHxmPGwubGVuZ3RoOyl7aWYocj49MCl7aWYoKGU9bFtyXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gcjtyLS19aWYoZjxsLmxlbmd0aCl7aWYoKGU9bFtmXSkmJjA9PSgxMzEwNzImZS5fX3UpJiZpPT1lLmtleSYmbz09PWUudHlwZSlyZXR1cm4gZjtmKyt9fXJldHVybi0xfWZ1bmN0aW9uIFQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxwLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBBKG4sbCx1LHQsaSl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuLnN0eWxlLmNzc1RleHQ9dD1cIlwiKSx0KWZvcihsIGluIHQpdSYmbCBpbiB1fHxUKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpdCYmdVtsXT09PXRbbF18fFQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLFwiJDFcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbnx8XCJvbkZvY3VzT3V0XCI9PT1sfHxcIm9uRm9jdXNJblwiPT09bD9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT90P3UudT10LnU6KHUudT1lLG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/czpjLG8pKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP3M6YyxvKTtlbHNle2lmKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09aSlsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwid2lkdGhcIiE9bCYmXCJoZWlnaHRcIiE9bCYmXCJocmVmXCIhPWwmJlwibGlzdFwiIT1sJiZcImZvcm1cIiE9bCYmXCJ0YWJJbmRleFwiIT1sJiZcImRvd25sb2FkXCIhPWwmJlwicm93U3BhblwiIT1sJiZcImNvbFNwYW5cIiE9bCYmXCJyb2xlXCIhPWwmJlwicG9wb3ZlclwiIT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmXCItXCIhPT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsXCJwb3BvdmVyXCI9PWwmJjE9PXU/XCJcIjp1KSl9fWZ1bmN0aW9uIEYobil7cmV0dXJuIGZ1bmN0aW9uKHUpe2lmKHRoaXMubCl7dmFyIHQ9dGhpcy5sW3UudHlwZStuXTtpZihudWxsPT11LnQpdS50PWUrKztlbHNlIGlmKHUudDx0LnUpcmV0dXJuO3JldHVybiB0KGwuZXZlbnQ/bC5ldmVudCh1KTp1KX19fWZ1bmN0aW9uIE8obix1LHQsaSxvLHIsZixlLGMscyl7dmFyIGEsaCx2LHAsdyxfLGcsbSx4LEMsUyxNLCQsSSxILEwsVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsxMjgmdC5fX3UmJihjPSEhKDMyJnQuX191KSxyPVtlPXUuX19lPXQuX19lXSksKGE9bC5fX2IpJiZhKHUpO246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl0cnl7aWYobT11LnByb3BzLHg9XCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcixDPShhPVQuY29udGV4dFR5cGUpJiZpW2EuX19jXSxTPWE/Qz9DLnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9nPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooeD91Ll9fYz1oPW5ldyBUKG0sUyk6KHUuX19jPWg9bmV3IGsobSxTKSxoLmNvbnN0cnVjdG9yPVQsaC5yZW5kZXI9cSksQyYmQy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9UyxoLl9fbj1pLHY9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLHgmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSkseCYmbnVsbCE9VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWQoe30saC5fX3MpKSxkKGguX19zLFQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkscD1oLnByb3BzLHc9aC5zdGF0ZSxoLl9fdj11LHYpeCYmbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLHgmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZih4JiZudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXAmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0sUyksIWguX19lJiYobnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyxTKXx8dS5fX3Y9PT10Ll9fdikpe2Zvcih1Ll9fdiE9PXQuX192JiYoaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEpLHUuX19lPXQuX19lLHUuX19rPXQuX19rLHUuX19rLnNvbWUoZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxNPTA7TTxoLl9zYi5sZW5ndGg7TSsrKWguX19oLnB1c2goaC5fc2JbTV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyxTKSx4JiZudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHAsdyxfKX0pfWlmKGguY29udGV4dD1TLGgucHJvcHM9bSxoLl9fUD1uLGguX19lPSExLCQ9bC5fX3IsST0wLHgpe2ZvcihoLnN0YXRlPWguX19zLGguX19kPSExLCQmJiQodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxIPTA7SDxoLl9zYi5sZW5ndGg7SCsrKWguX19oLnB1c2goaC5fc2JbSF0pO2guX3NiPVtdfWVsc2UgZG97aC5fX2Q9ITEsJCYmJCh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3N9d2hpbGUoaC5fX2QmJisrSTwyNSk7aC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9ZChkKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx4JiYhdiYmbnVsbCE9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKF89aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwLHcpKSxQKG4seShMPW51bGwhPWEmJmEudHlwZT09PWImJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSk/TDpbTF0sdSx0LGksbyxyLGYsZSxjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxnJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPXIpe2Zvcih1Ll9fdXw9Yz8xNjA6MTI4O2UmJjg9PT1lLm5vZGVUeXBlJiZlLm5leHRTaWJsaW5nOyllPWUubmV4dFNpYmxpbmc7cltyLmluZGV4T2YoZSldPW51bGwsdS5fX2U9ZX1lbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PXImJnUuX192PT09dC5fX3Y/KHUuX19rPXQuX19rLHUuX19lPXQuX19lKTp1Ll9fZT16KHQuX19lLHUsdCxpLG8scixmLGMscyk7KGE9bC5kaWZmZWQpJiZhKHUpfWZ1bmN0aW9uIGoobix1LHQpe3UuX19kPXZvaWQgMDtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylOKHRbaV0sdFsrK2ldLHRbKytpXSk7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiB6KHUsdCxpLG8scixmLGUsYyxzKXt2YXIgYSx2LHAsZCxfLGcsbSxiPWkucHJvcHMsaz10LnByb3BzLEM9dC50eXBlO2lmKFwic3ZnXCI9PT1DP3I9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT09Qz9yPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiOnJ8fChyPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKSxudWxsIT1mKWZvcihhPTA7YTxmLmxlbmd0aDthKyspaWYoKF89ZlthXSkmJlwic2V0QXR0cmlidXRlXCJpbiBfPT0hIUMmJihDP18ubG9jYWxOYW1lPT09QzozPT09Xy5ub2RlVHlwZSkpe3U9XyxmW2FdPW51bGw7YnJlYWt9aWYobnVsbD09dSl7aWYobnVsbD09PUMpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGspO3U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHIsQyxrLmlzJiZrKSxjJiYobC5fX20mJmwuX19tKHQsZiksYz0hMSksZj1udWxsfWlmKG51bGw9PT1DKWI9PT1rfHxjJiZ1LmRhdGE9PT1rfHwodS5kYXRhPWspO2Vsc2V7aWYoZj1mJiZuLmNhbGwodS5jaGlsZE5vZGVzKSxiPWkucHJvcHN8fGgsIWMmJm51bGwhPWYpZm9yKGI9e30sYT0wO2E8dS5hdHRyaWJ1dGVzLmxlbmd0aDthKyspYlsoXz11LmF0dHJpYnV0ZXNbYV0pLm5hbWVdPV8udmFsdWU7Zm9yKGEgaW4gYilpZihfPWJbYV0sXCJjaGlsZHJlblwiPT1hKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YSlwPV87ZWxzZSBpZighKGEgaW4gaykpe2lmKFwidmFsdWVcIj09YSYmXCJkZWZhdWx0VmFsdWVcImluIGt8fFwiY2hlY2tlZFwiPT1hJiZcImRlZmF1bHRDaGVja2VkXCJpbiBrKWNvbnRpbnVlO0EodSxhLG51bGwsXyxyKX1mb3IoYSBpbiBrKV89a1thXSxcImNoaWxkcmVuXCI9PWE/ZD1fOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09YT92PV86XCJ2YWx1ZVwiPT1hP2c9XzpcImNoZWNrZWRcIj09YT9tPV86YyYmXCJmdW5jdGlvblwiIT10eXBlb2YgX3x8YlthXT09PV98fEEodSxhLF8sYlthXSxyKTtpZih2KWN8fHAmJih2Ll9faHRtbD09PXAuX19odG1sfHx2Ll9faHRtbD09PXUuaW5uZXJIVE1MKXx8KHUuaW5uZXJIVE1MPXYuX19odG1sKSx0Ll9faz1bXTtlbHNlIGlmKHAmJih1LmlubmVySFRNTD1cIlwiKSxQKHUseShkKT9kOltkXSx0LGksbyxcImZvcmVpZ25PYmplY3RcIj09PUM/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6cixmLGUsZj9mWzBdOmkuX19rJiZ4KGksMCksYyxzKSxudWxsIT1mKWZvcihhPWYubGVuZ3RoO2EtLTspdyhmW2FdKTtjfHwoYT1cInZhbHVlXCIsXCJwcm9ncmVzc1wiPT09QyYmbnVsbD09Zz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOnZvaWQgMCE9PWcmJihnIT09dVthXXx8XCJwcm9ncmVzc1wiPT09QyYmIWd8fFwib3B0aW9uXCI9PT1DJiZnIT09YlthXSkmJkEodSxhLGcsYlthXSxyKSxhPVwiY2hlY2tlZFwiLHZvaWQgMCE9PW0mJm0hPT11W2FdJiZBKHUsYSxtLGJbYV0scikpfXJldHVybiB1fWZ1bmN0aW9uIE4obix1LHQpe3RyeXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXt2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fdTtpJiZuLl9fdSgpLGkmJm51bGw9PXV8fChuLl9fdT1uKHUpKX1lbHNlIG4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4sdCl9fWZ1bmN0aW9uIFYobix1LHQpe3ZhciBpLG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKGk9bi5yZWYpJiYoaS5jdXJyZW50JiZpLmN1cnJlbnQhPT1uLl9fZXx8TihpLG51bGwsdSkpLG51bGwhPShpPW4uX19jKSl7aWYoaS5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7aS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9aS5iYXNlPWkuX19QPW51bGx9aWYoaT1uLl9faylmb3Iobz0wO288aS5sZW5ndGg7bysrKWlbb10mJlYoaVtvXSx1LHR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7dHx8dyhuLl9fZSksbi5fX2M9bi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gcShuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBCKHUsdCxpKXt2YXIgbyxyLGYsZTtsLl9fJiZsLl9fKHUsdCkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpKT9udWxsOmkmJmkuX19rfHx0Ll9fayxmPVtdLGU9W10sTyh0LHU9KCFvJiZpfHx0KS5fX2s9XyhiLG51bGwsW3VdKSxyfHxoLGgsdC5uYW1lc3BhY2VVUkksIW8mJmk/W2ldOnI/bnVsbDp0LmZpcnN0Q2hpbGQ/bi5jYWxsKHQuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZpP2k6cj9yLl9fZTp0LmZpcnN0Q2hpbGQsbyxlKSxqKGYsdSxlKX1mdW5jdGlvbiBEKG4sbCl7QihuLGwsRCl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGksbyxyLGYsZT1kKHt9LGwucHJvcHMpO2ZvcihyIGluIGwudHlwZSYmbC50eXBlLmRlZmF1bHRQcm9wcyYmKGY9bC50eXBlLmRlZmF1bHRQcm9wcyksdSlcImtleVwiPT1yP2k9dVtyXTpcInJlZlwiPT1yP289dVtyXTplW3JdPXZvaWQgMD09PXVbcl0mJnZvaWQgMCE9PWY/ZltyXTp1W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLGcobC50eXBlLGUsaXx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIithKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSx0O3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9bmV3IFNldCwodD17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dT1udWxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19lPSEwLFMobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5hZGQobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dSYmdS5kZWxldGUobiksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj12LnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSx0KXtmb3IodmFyIGksbyxyO2w9bC5fXzspaWYoKGk9bC5fX2MpJiYhaS5fXyl0cnl7aWYoKG89aS5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaS5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj1pLl9fZCksbnVsbCE9aS5jb21wb25lbnREaWRDYXRjaCYmKGkuY29tcG9uZW50RGlkQ2F0Y2gobix0fHx7fSkscj1pLl9fZCkscilyZXR1cm4gaS5fX0U9aX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCx0PWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZudWxsPT1uLmNvbnN0cnVjdG9yfSxrLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1kKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oZCh7fSx1KSx0aGlzLnByb3BzKSksbiYmZCh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxTKHRoaXMpKX0say5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLFModGhpcykpfSxrLnByb3RvdHlwZS5yZW5kZXI9YixpPVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZj1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSxNLl9fcj0wLGU9MCxjPUYoITEpLHM9RighMCksYT0wO2V4cG9ydHtrIGFzIENvbXBvbmVudCxiIGFzIEZyYWdtZW50LEUgYXMgY2xvbmVFbGVtZW50LEcgYXMgY3JlYXRlQ29udGV4dCxfIGFzIGNyZWF0ZUVsZW1lbnQsbSBhcyBjcmVhdGVSZWYsXyBhcyBoLEQgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxCIGFzIHJlbmRlcixIIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCxyLHUsaSxvPTAsZj1bXSxjPW4sZT1jLl9fYixhPWMuX19yLHY9Yy5kaWZmZWQsbD1jLl9fYyxtPWMudW5tb3VudCxzPWMuX187ZnVuY3Rpb24gZChuLHQpe2MuX19oJiZjLl9faChyLG4sb3x8dCksbz0wO3ZhciB1PXIuX19IfHwoci5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiBuPj11Ll9fLmxlbmd0aCYmdS5fXy5wdXNoKHt9KSx1Ll9fW25dfWZ1bmN0aW9uIGgobil7cmV0dXJuIG89MSxwKEQsbil9ZnVuY3Rpb24gcChuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkQodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7aWYoIW8uX19jLl9fSClyZXR1cm4hMDt2YXIgdT1vLl9fYy5fX0guX18uZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiEhbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighY3x8Yy5jYWxsKHRoaXMsbix0LHIpKX07ci51PSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24geShuLHUpe3ZhciBpPWQodCsrLDMpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gXyhuLHUpe3ZhciBpPWQodCsrLDQpOyFjLl9fcyYmQyhpLl9fSCx1KSYmKGkuX189bixpLmk9dSxyLl9faC5wdXNoKGkpKX1mdW5jdGlvbiBBKG4pe3JldHVybiBvPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7bz02LF8oZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhuKHQoKSksZnVuY3Rpb24oKXtyZXR1cm4gbihudWxsKX0pOm4/KG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9KTp2b2lkIDB9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gVChuLHIpe3ZhciB1PWQodCsrLDcpO3JldHVybiBDKHUuX19ILHIpJiYodS5fXz1uKCksdS5fX0g9cix1Ll9faD1uKSx1Ll9ffWZ1bmN0aW9uIHEobix0KXtyZXR1cm4gbz04LFQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24geChuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFAobix0KXtjLnVzZURlYnVnVmFsdWUmJmMudXNlRGVidWdWYWx1ZSh0P3Qobik6bil9ZnVuY3Rpb24gYihuKXt2YXIgdT1kKHQrKywxMCksaT1oKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBnKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGooKXtmb3IodmFyIG47bj1mLnNoaWZ0KCk7KWlmKG4uX19QJiZuLl9fSCl0cnl7bi5fX0guX19oLmZvckVhY2goeiksbi5fX0guX19oLmZvckVhY2goQiksbi5fX0guX19oPVtdfWNhdGNoKHQpe24uX19ILl9faD1bXSxjLl9fZSh0LG4uX192KX19Yy5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LGMuX189ZnVuY3Rpb24obix0KXtuJiZ0Ll9fayYmdC5fX2suX19tJiYobi5fX209dC5fX2suX19tKSxzJiZzKG4sdCl9LGMuX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLmk9bi5fX049dm9pZCAwfSkpOihpLl9faC5mb3JFYWNoKHopLGkuX19oLmZvckVhY2goQiksaS5fX2g9W10sdD0wKSksdT1yfSxjLmRpZmZlZD1mdW5jdGlvbihuKXt2JiZ2KG4pO3ZhciB0PW4uX19jO3QmJnQuX19IJiYodC5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2godCkmJmk9PT1jLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8dykoaikpLHQuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLmk9dm9pZCAwfSkpLHU9cj1udWxsfSxjLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXt0cnl7bi5fX2guZm9yRWFjaCh6KSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fEIobil9KX1jYXRjaChyKXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx0PVtdLGMuX19lKHIsbi5fX3YpfX0pLGwmJmwobix0KX0sYy51bm1vdW50PWZ1bmN0aW9uKG4pe20mJm0obik7dmFyIHQscj1uLl9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e3oobil9Y2F0Y2gobil7dD1ufX0pLHIuX19IPXZvaWQgMCx0JiZjLl9fZSh0LHIuX192KSl9O3ZhciBrPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiB3KG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksayYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtrJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIHoobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gQihuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24gQyhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBEKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e3EgYXMgdXNlQ2FsbGJhY2sseCBhcyB1c2VDb250ZXh0LFAgYXMgdXNlRGVidWdWYWx1ZSx5IGFzIHVzZUVmZmVjdCxiIGFzIHVzZUVycm9yQm91bmRhcnksZyBhcyB1c2VJZCxGIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsXyBhcyB1c2VMYXlvdXRFZmZlY3QsVCBhcyB1c2VNZW1vLHAgYXMgdXNlUmVkdWNlcixBIGFzIHVzZVJlZixoIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIHIsRnJhZ21lbnQgYXMgZX1mcm9tXCJwcmVhY3RcIjtleHBvcnR7RnJhZ21lbnR9ZnJvbVwicHJlYWN0XCI7dmFyIHQ9L1tcIiY8XS87ZnVuY3Rpb24gbihyKXtpZigwPT09ci5sZW5ndGh8fCExPT09dC50ZXN0KHIpKXJldHVybiByO2Zvcih2YXIgZT0wLG49MCxvPVwiXCIsZj1cIlwiO248ci5sZW5ndGg7bisrKXtzd2l0Y2goci5jaGFyQ29kZUF0KG4pKXtjYXNlIDM0OmY9XCImcXVvdDtcIjticmVhaztjYXNlIDM4OmY9XCImYW1wO1wiO2JyZWFrO2Nhc2UgNjA6Zj1cIiZsdDtcIjticmVhaztkZWZhdWx0OmNvbnRpbnVlfW4hPT1lJiYobys9ci5zbGljZShlLG4pKSxvKz1mLGU9bisxfXJldHVybiBuIT09ZSYmKG8rPXIuc2xpY2UoZSxuKSksb312YXIgbz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLGY9MCxpPUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gdShlLHQsbixvLGksdSl7dHx8KHQ9e30pO3ZhciBhLGMsbD10O1wicmVmXCJpbiB0JiYoYT10LnJlZixkZWxldGUgdC5yZWYpO3ZhciBwPXt0eXBlOmUscHJvcHM6bCxrZXk6bixyZWY6YSxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjotLWYsX19pOi0xLF9fdTowLF9fc291cmNlOmksX19zZWxmOnV9O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihhPWUuZGVmYXVsdFByb3BzKSlmb3IoYyBpbiBhKXZvaWQgMD09PWxbY10mJihsW2NdPWFbY10pO3JldHVybiByLnZub2RlJiZyLnZub2RlKHApLHB9ZnVuY3Rpb24gYShyKXt2YXIgdD11KGUse3RwbDpyLGV4cHJzOltdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpfSk7cmV0dXJuIHQua2V5PXQuX192LHR9dmFyIGM9e30sbD0vW0EtWl0vZztmdW5jdGlvbiBwKGUsdCl7aWYoci5hdHRyKXt2YXIgZj1yLmF0dHIoZSx0KTtpZihcInN0cmluZ1wiPT10eXBlb2YgZilyZXR1cm4gZn1pZihcInJlZlwiPT09ZXx8XCJrZXlcIj09PWUpcmV0dXJuXCJcIjtpZihcInN0eWxlXCI9PT1lJiZcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGk9XCJcIjtmb3IodmFyIHUgaW4gdCl7dmFyIGE9dFt1XTtpZihudWxsIT1hJiZcIlwiIT09YSl7dmFyIHA9XCItXCI9PXVbMF0/dTpjW3VdfHwoY1t1XT11LnJlcGxhY2UobCxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKSxfPVwiO1wiO1wibnVtYmVyXCIhPXR5cGVvZiBhfHxwLnN0YXJ0c1dpdGgoXCItLVwiKXx8by50ZXN0KHApfHwoXz1cInB4O1wiKSxpPWkrcCtcIjpcIithK199fXJldHVybiBlKyc9XCInK2krJ1wiJ31yZXR1cm4gbnVsbD09dHx8ITE9PT10fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fHxcIm9iamVjdFwiPT10eXBlb2YgdD9cIlwiOiEwPT09dD9lOmUrJz1cIicrbih0KSsnXCInfWZ1bmN0aW9uIF8ocil7aWYobnVsbD09cnx8XCJib29sZWFuXCI9PXR5cGVvZiByfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXJldHVybiBudWxsO2lmKFwib2JqZWN0XCI9PXR5cGVvZiByKXtpZih2b2lkIDA9PT1yLmNvbnN0cnVjdG9yKXJldHVybiByO2lmKGkocikpe2Zvcih2YXIgZT0wO2U8ci5sZW5ndGg7ZSsrKXJbZV09XyhyW2VdKTtyZXR1cm4gcn19cmV0dXJuIG4oXCJcIityKX1leHBvcnR7dSBhcyBqc3gscCBhcyBqc3hBdHRyLHUgYXMganN4REVWLF8gYXMganN4RXNjYXBlLGEgYXMganN4VGVtcGxhdGUsdSBhcyBqc3hzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcmVxdWlyZV9fOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJidW5kbGVcIjogMFxufTtcblxudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciB7aWRzLCBtb2R1bGVzLCBydW50aW1lfSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJpZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGZvcig7aSA8IGlkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBpZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2lkc1tpXV0gPSAwO1xuXHR9XG5cbn1cblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbl9fd2VicGFja19yZXF1aXJlX18uQyA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZCIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi4vc2NyaXB0cy9hZW0uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=