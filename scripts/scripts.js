export const id = "scripts";
export const ids = ["scripts"];
export const modules = {

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
import __webpack_require__ from "./bundle.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./scripts.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("../scripts/_scripts.js");
var __webpack_exports__decorateMain = __webpack_exports__.decorateMain;
export { __webpack_exports__decorateMain as decorateMain };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9zY3JpcHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFrQjs7QUFFbEI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBVSxXQUFXLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPLElBQUksd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ087QUFDUDtBQUNBLEVBQUUsd0RBQWU7QUFDakIsRUFBRSxzREFBYTtBQUNmO0FBQ0EsRUFBRSx5REFBZ0I7QUFDbEIsRUFBRSx1REFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvREFBVyxpQ0FBaUMsc0RBQWlCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBWTs7QUFFcEIsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7O0FBRUEsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7O0FBRVosRUFBRSxnREFBTyxJQUFJLHdCQUF3QjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRzLXJlYWN0LWNvbGVtYW4vLi4vc2NyaXB0cy9fc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBidWlsZEJsb2NrLFxuICBsb2FkSGVhZGVyLFxuICBsb2FkRm9vdGVyLFxuICBkZWNvcmF0ZUJ1dHRvbnMsXG4gIGRlY29yYXRlSWNvbnMsXG4gIGRlY29yYXRlU2VjdGlvbnMsXG4gIGRlY29yYXRlQmxvY2tzLFxuICBkZWNvcmF0ZVRlbXBsYXRlQW5kVGhlbWUsXG4gIHdhaXRGb3JGaXJzdEltYWdlLFxuICBsb2FkU2VjdGlvbixcbiAgbG9hZFNlY3Rpb25zLFxuICBsb2FkQ1NTLFxufSBmcm9tICcuL2FlbS5qcyc7XG5cbi8qKlxuICogQnVpbGRzIGhlcm8gYmxvY2sgYW5kIHByZXBlbmRzIHRvIG1haW4gaW4gYSBuZXcgc2VjdGlvbi5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWFpbiBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRIZXJvQmxvY2sobWFpbikge1xuICBjb25zdCBoMSA9IG1haW4ucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY29uc3QgcGljdHVyZSA9IG1haW4ucXVlcnlTZWxlY3RvcigncGljdHVyZScpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICBpZiAoaDEgJiYgcGljdHVyZSAmJiAoaDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocGljdHVyZSkgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORykpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5hcHBlbmQoYnVpbGRCbG9jaygnaGVybycsIHsgZWxlbXM6IFtwaWN0dXJlLCBoMV0gfSkpO1xuICAgIG1haW4ucHJlcGVuZChzZWN0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIGxvYWQgZm9udHMuY3NzIGFuZCBzZXQgYSBzZXNzaW9uIHN0b3JhZ2UgZmxhZ1xuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkRm9udHMoKSB7XG4gIGF3YWl0IGxvYWRDU1MoYCR7d2luZG93LmhseC5jb2RlQmFzZVBhdGh9L3N0eWxlcy9mb250cy5jc3NgKTtcbiAgdHJ5IHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcygnbG9jYWxob3N0JykpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZvbnRzLWxvYWRlZCcsICd0cnVlJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYWxsIHN5bnRoZXRpYyBibG9ja3MgaW4gYSBjb250YWluZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gbWFpbiBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRBdXRvQmxvY2tzKG1haW4pIHtcbiAgdHJ5IHtcbiAgICBidWlsZEhlcm9CbG9jayhtYWluKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dG8gQmxvY2tpbmcgZmFpbGVkJywgZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogRGVjb3JhdGVzIHRoZSBtYWluIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG1haW4gVGhlIG1haW4gZWxlbWVudFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIGRlY29yYXRlTWFpbihtYWluKSB7XG4gIC8vIGhvcGVmdWxseSBmb3J3YXJkIGNvbXBhdGlibGUgYnV0dG9uIGRlY29yYXRpb25cbiAgZGVjb3JhdGVCdXR0b25zKG1haW4pO1xuICBkZWNvcmF0ZUljb25zKG1haW4pO1xuICBidWlsZEF1dG9CbG9ja3MobWFpbik7XG4gIGRlY29yYXRlU2VjdGlvbnMobWFpbik7XG4gIGRlY29yYXRlQmxvY2tzKG1haW4pO1xufVxuXG4vKipcbiAqIExvYWRzIGV2ZXJ5dGhpbmcgbmVlZGVkIHRvIGdldCB0byBMQ1AuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGRvYyBUaGUgY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEVhZ2VyKGRvYykge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9ICdlbic7XG4gIGRlY29yYXRlVGVtcGxhdGVBbmRUaGVtZSgpO1xuICBjb25zdCBtYWluID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgaWYgKG1haW4pIHtcbiAgICBkZWNvcmF0ZU1haW4obWFpbik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKTtcbiAgICBhd2FpdCBsb2FkU2VjdGlvbihtYWluLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyksIHdhaXRGb3JGaXJzdEltYWdlKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLyogaWYgZGVza3RvcCAocHJveHkgZm9yIGZhc3QgY29ubmVjdGlvbikgb3IgZm9udHMgYWxyZWFkeSBsb2FkZWQsIGxvYWQgZm9udHMuY3NzICovXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDkwMCB8fCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmb250cy1sb2FkZWQnKSkge1xuICAgICAgbG9hZEZvbnRzKCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbi8qKlxuICogTG9hZHMgZXZlcnl0aGluZyB0aGF0IGRvZXNuJ3QgbmVlZCB0byBiZSBkZWxheWVkLlxuICogQHBhcmFtIHtFbGVtZW50fSBkb2MgVGhlIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMYXp5KGRvYykge1xuICBjb25zdCBtYWluID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgYXdhaXQgbG9hZFNlY3Rpb25zKG1haW4pO1xuXG4gIGNvbnN0IHsgaGFzaCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBjb25zdCBlbGVtZW50ID0gaGFzaCA/IGRvYy5nZXRFbGVtZW50QnlJZChoYXNoLnN1YnN0cmluZygxKSkgOiBmYWxzZTtcbiAgaWYgKGhhc2ggJiYgZWxlbWVudCkgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gIGxvYWRIZWFkZXIoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpKTtcbiAgbG9hZEZvb3Rlcihkb2MucXVlcnlTZWxlY3RvcignZm9vdGVyJykpO1xuXG4gIGxvYWRDU1MoYCR7d2luZG93LmhseC5jb2RlQmFzZVBhdGh9L3N0eWxlcy9sYXp5LXN0eWxlcy5jc3NgKTtcbiAgbG9hZEZvbnRzKCk7XG59XG5cbi8qKlxuICogTG9hZHMgZXZlcnl0aGluZyB0aGF0IGhhcHBlbnMgYSBsb3QgbGF0ZXIsXG4gKiB3aXRob3V0IGltcGFjdGluZyB0aGUgdXNlciBleHBlcmllbmNlLlxuICovXG5mdW5jdGlvbiBsb2FkRGVsYXllZCgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAoKSA9PlxuICAgICAgaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgIGAke3dpbmRvdy5obHguY29kZUJhc2VQYXRofS9zY3JpcHRzL2RlbGF5ZWQuanNgXG4gICAgICApLFxuICAgIDMwMDAsXG4gICk7XG4gIC8vIGxvYWQgYW55dGhpbmcgdGhhdCBjYW4gYmUgcG9zdHBvbmVkIHRvIHRoZSBsYXRlc3QgaGVyZVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgYXdhaXQgbG9hZEVhZ2VyKGRvY3VtZW50KTtcbiAgYXdhaXQgbG9hZExhenkoZG9jdW1lbnQpO1xuICBsb2FkRGVsYXllZCgpO1xufVxuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9