/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\nwindow.addEventListener('beforeinstallprompt', (event) => {\n\tevent.preventDefault()\n\tdeferredPrompt = event\n\tbutInstall.style.display = 'block'\n});\n\nbutInstall.addEventListener('click', async () => {\n\tbutInstall.style.display = 'none'\n\tdeferredPrompt.prompt()\n\tconst choiceResult = await deferredPrompt.userChoice\n\tif (choiceResult.outcome === 'accepted') {\n\t\tconsole.log('User accepted the A2HS prompt')\n\t} else {\n\t\tconsole.log('User dismissed the A2HS prompt')\n\t}\n\tdeferredPrompt = null\n});\n\nwindow.addEventListener('appinstalled', (event) => {\n\tconsole.log('PWA was installed')\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;