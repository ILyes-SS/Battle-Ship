/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}

.player1-grid,
.player2-grid {
  display: grid;
  grid-template: repeat(11, 30px) / repeat(11, 30px);
}
.player1-grid > [data-x] {
}

.header {
  display: flex;
  align-items: baseline;
  gap: 15dvw;
}
.turns {
  padding: 10px 30px;
  background-color: rgba(223, 223, 223, 0.603);
}
.player1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.player2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.players {
  margin-top: 15dvh;
  display: flex;
  justify-content: space-around;
}
.btns {
  display: flex;
  gap: 30px;
  margin-left: 40dvw;
}
form > button,
.btns > button {
  background-color: white;
  border-radius: 5px;
  border: 2px solid black;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  padding: 3px 5px;
}
form {
  font-family: inherit;
}
.players button:not([data-y]) {
  background-color: transparent;
  border: none;
  font-family: inherit;
}
.players button[data-y] {
  border: 1px solid blue; /*rgb(173, 213, 247);*/
  background-color: white;
  font-size: 30px;
  text-align: end;
  margin: -1px; /*this collapse borders*/
  display: flex; /* Use flexbox to center content */
  justify-content: center; /* Center horizontally */
  align-items: center;
}

.players button[data-y]:hover {
  cursor: pointer;
  border-color: green;
  background-color: rgba(207, 241, 207, 0.753);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE;;;;;;;;;;;cAWY;AACd;;AAEA;;EAEE,aAAa;EACb,kDAAkD;AACpD;AACA;AACA;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,sBAAsB,EAAE,sBAAsB;EAC9C,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,YAAY,EAAE,wBAAwB;EACtC,aAAa,EAAE,kCAAkC;EACjD,uBAAuB,EAAE,wBAAwB;EACjD,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,4CAA4C;AAC9C","sourcesContent":["html,\nbody {\n  font-family:\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    'Segoe UI',\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    'Open Sans',\n    'Helvetica Neue',\n    sans-serif;\n}\n\n.player1-grid,\n.player2-grid {\n  display: grid;\n  grid-template: repeat(11, 30px) / repeat(11, 30px);\n}\n.player1-grid > [data-x] {\n}\n\n.header {\n  display: flex;\n  align-items: baseline;\n  gap: 15dvw;\n}\n.turns {\n  padding: 10px 30px;\n  background-color: rgba(223, 223, 223, 0.603);\n}\n.player1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.player2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.players {\n  margin-top: 15dvh;\n  display: flex;\n  justify-content: space-around;\n}\n.btns {\n  display: flex;\n  gap: 30px;\n  margin-left: 40dvw;\n}\nform > button,\n.btns > button {\n  background-color: white;\n  border-radius: 5px;\n  border: 2px solid black;\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: 500;\n  padding: 3px 5px;\n}\nform {\n  font-family: inherit;\n}\n.players button:not([data-y]) {\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n}\n.players button[data-y] {\n  border: 1px solid blue; /*rgb(173, 213, 247);*/\n  background-color: white;\n  font-size: 30px;\n  text-align: end;\n  margin: -1px; /*this collapse borders*/\n  display: flex; /* Use flexbox to center content */\n  justify-content: center; /* Center horizontally */\n  align-items: center;\n}\n\n.players button[data-y]:hover {\n  cursor: pointer;\n  border-color: green;\n  background-color: rgba(207, 241, 207, 0.753);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.receivedHits = 0;
    this.sunk = false;
    this.coordinates = [];
  }
  hit() {
    this.receivedHits++;
  }
  isSunk() {
    return this.length == this.receivedHits;
  }
  setCoordsOnBoard(coords) {
    this.coordinates.push(coords);
  }
}
class GameBoard {
  constructor() {
    this.grid = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']];
    this.ships = [];
  }
  resetGrid() {
    this.ships = [];
    this.grid = [['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']];
  }
  placeShip(ship, coords, direction) {
    let startCoords = coords.split(' ');
    let numberCoord = startCoords[1] - 1;
    if (numberCoord > 9 || numberCoord < 0 || !['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].includes(startCoords[0])) {
      return 'invalid coordinates';
    }
    let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
    if (direction == 'right') {
      let shipArea = letterIndex + ship.length;
      if (shipArea > 10) {
        return 'You can not place the ship here';
      }
      for (let i = letterIndex; i < shipArea; i++) {
        if (this.grid[numberCoord][i] == 'O' || this.grid[numberCoord][i] == '/') {
          //get back to where u were
          ship.coordinates.forEach(coords => {
            let startCoords = coords.split(' ');
            let numberCoord = startCoords[1] - 1;
            let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
            this.grid[numberCoord][letterIndex] = startCoords[0];
          });
          return 'you can not overlap another ship ';
        } else {
          ship.setCoordsOnBoard(`${this.grid[numberCoord][i]} ${numberCoord + 1}`);
          this.grid[numberCoord][i] = 'O';
        }
      }
      ship.coordinates.forEach(coords => {
        let startCoords = coords.split(' ');
        let numberCoord = startCoords[1] - 1;
        let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
        for (let j = numberCoord + 1; j >= numberCoord - 1; j--) {
          for (let i = letterIndex + 1; i >= letterIndex - 1; i--) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (this.grid[j][i] != 'O') this.grid[j][i] = '/';
            }
          }
        }
      });
      this.ships.push(ship);
    } else if (direction == 'left') {
      let shipArea = letterIndex - ship.length;
      if (shipArea < -1) {
        return 'You can not place the ship here';
      }
      for (let i = letterIndex; i > shipArea; i--) {
        if (this.grid[numberCoord][i] == 'O' || this.grid[numberCoord][i] == '/') {
          ship.coordinates.forEach(coords => {
            let startCoords = coords.split(' ');
            let numberCoord = startCoords[1] - 1;
            let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
            this.grid[numberCoord][letterIndex] = startCoords[0];
          });
          return 'you can not overlap another ship ';
        } else {
          ship.setCoordsOnBoard(`${this.grid[numberCoord][i]} ${numberCoord + 1}`);
          this.grid[numberCoord][i] = 'O';
        }
      }
      ship.coordinates.forEach(coords => {
        let startCoords = coords.split(' ');
        let numberCoord = startCoords[1] - 1;
        let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
        for (let j = numberCoord + 1; j >= numberCoord - 1; j--) {
          for (let i = letterIndex + 1; i >= letterIndex - 1; i--) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (this.grid[j][i] != 'O') this.grid[j][i] = '/';
            }
          }
        }
      });
      this.ships.push(ship);
    } else if (direction == 'top') {
      let shipArea = numberCoord - ship.length;
      if (shipArea < -1) {
        return 'You can not place the ship here';
      }
      for (let i = numberCoord; i > shipArea; i--) {
        if (this.grid[i][letterIndex] == 'O' || this.grid[i][letterIndex] == '/') {
          ship.coordinates.forEach(coords => {
            let startCoords = coords.split(' ');
            let numberCoord = startCoords[1] - 1;
            let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
            this.grid[numberCoord][letterIndex] = startCoords[0];
          });
          return 'you can not overlap another ship ';
        } else {
          ship.setCoordsOnBoard(`${this.grid[i][letterIndex]} ${i + 1}`);
          this.grid[i][letterIndex] = 'O';
        }
      }
      ship.coordinates.forEach(coords => {
        let startCoords = coords.split(' ');
        let numberCoord = startCoords[1] - 1;
        let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
        for (let j = numberCoord + 1; j >= numberCoord - 1; j--) {
          for (let i = letterIndex + 1; i >= letterIndex - 1; i--) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (this.grid[j][i] != 'O') this.grid[j][i] = '/';
            }
          }
        }
      });
      this.ships.push(ship);
    } else {
      let shipArea = numberCoord + ship.length;
      if (shipArea > 10) {
        return 'You can not place the ship here';
      }
      for (let i = numberCoord; i < shipArea; i++) {
        if (this.grid[i][letterIndex] == 'O' || this.grid[i][letterIndex] == '/') {
          ship.coordinates.forEach(coords => {
            let startCoords = coords.split(' ');
            let numberCoord = startCoords[1] - 1;
            let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
            this.grid[numberCoord][letterIndex] = startCoords[0];
          });
          return 'you can not overlap another ship ';
        } else {
          ship.setCoordsOnBoard(`${this.grid[i][letterIndex]} ${i + 1}`);
          this.grid[i][letterIndex] = 'O';
        }
      }
      ship.coordinates.forEach(coords => {
        let startCoords = coords.split(' ');
        let numberCoord = startCoords[1] - 1;
        let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
        for (let j = numberCoord + 1; j >= numberCoord - 1; j--) {
          for (let i = letterIndex + 1; i >= letterIndex - 1; i--) {
            if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
              if (this.grid[j][i] != 'O') this.grid[j][i] = '/';
            }
          }
        }
      });
      this.ships.push(ship);
    }
  }
  receiveAttack(coords) {
    let startCoords = coords.split(' ');
    let numberCoord = startCoords[1] - 1;
    let letterIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].findIndex(letter => letter == startCoords[0]);
    if (letterIndex == -1 || numberCoord > 9 || numberCoord < 0) return 'invalid coordinates';
    if (this.grid[numberCoord][letterIndex] == 'O') {
      const hitShip = this.ships.find(ship => {
        return ship.coordinates.includes(coords);
      });
      //see here what is up

      if (hitShip) {
        hitShip.hit();
        this.grid[numberCoord][letterIndex] = 'X';
        if (hitShip.isSunk()) return hitShip;else return;
      }
    } else {
      this.grid[numberCoord][letterIndex] = '.';
      return;
    }
  }
  allShipsSunk() {
    for (let row of this.grid) {
      for (let coords of row) {
        if (coords === 'O') {
          return false;
        }
      }
    }
    return true;
  }
}
class Player {
  constructor(board) {
    this.board = board;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function buildGrid() {
  const player1Grid = document.querySelector('.player1-grid');
  const player2Grid = document.querySelector('.player2-grid');
  player1Grid.innerHTML = '';
  player2Grid.innerHTML = '';
  player1.board.resetGrid();
  player2.board.resetGrid();
  document.querySelector('.place').style.pointerEvents = 'auto';
  document.querySelector('.play').style.pointerEvents = 'auto';
  const letters = ['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let cell1 = document.createElement('button');
      let cell2 = document.createElement('button');
      if (i == 0 && j == 0) {
        player1Grid.appendChild(cell1);
        player2Grid.appendChild(cell2);
        continue;
      } else if (i == 0) {
        cell1.textContent = letters[j];
        cell2.textContent = letters[j];
      } else if (j == 0) {
        cell1.textContent = i;
        cell2.textContent = i;
      } else {
        cell1.dataset.x = letters[j];
        cell1.dataset.y = i;
        cell2.dataset.x = letters[j];
        cell2.dataset.y = i;
      }
      player1Grid.appendChild(cell1);
      player2Grid.appendChild(cell2);
    }
  }
}
const player1 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Player(new _logic_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard());
const player2 = new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Player(new _logic_js__WEBPACK_IMPORTED_MODULE_0__.GameBoard());
function marineForce() {
  const turn = document.querySelector('.turns');
  turn.textContent = 'Placing Ships';
  const ships1 = [new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1)];
  const ships2 = [new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1)];
  ships2.forEach(ship => placeShipsRandomly(player2.board, ship));
  ships1.forEach(ship => placeShipsRandomly(player1.board, ship));
  replaceShips();
  const cells = document.querySelectorAll('.player1-grid > [data-x]');
  cells.forEach(cell => {
    colorShips(player1, cell);
  });
}
function placeShipsRandomly(board, ship) {
  let directions = ['right', 'left', 'top', 'bottom'];
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let returned;
  do {
    // console.log(`loop ${randomNum}`);
    let randomDir = directions[Math.ceil(Math.random() * 100) % 4];
    let randomLetter = letters[Math.ceil(Math.random() * 100) % 10];
    let randomNum = Math.ceil(Math.random() * 100) % 10 + 1;
    returned = board.placeShip(ship, `${randomLetter} ${randomNum}`, randomDir);
  } while (returned);
}
function replaceShips() {
  const placeBtn = document.querySelector('.place');
  placeBtn.addEventListener('click', () => {
    buildGrid();
    const ships1 = [new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1)];
    const ships2 = [new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1), new _logic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(1)];
    ships2.forEach(ship => placeShipsRandomly(player2.board, ship));
    ships1.forEach(ship => placeShipsRandomly(player1.board, ship));
    const cells = document.querySelectorAll('.player1-grid > [data-x]');
    cells.forEach(cell => {
      colorShips(player1, cell);
    });
  });
}
function colorShips(player, cell) {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  if (player.board.grid[cell.dataset.y - 1][letters.findIndex(letter => letter == cell.dataset.x)] == 'O') {
    cell.style.borderColor = 'blue';
    cell.style.backgroundColor = 'rgb(173, 213, 247)';
    cell.style.margin = '0px';
  }
}
document.querySelector('.play').addEventListener('click', () => {
  document.querySelector('.place').style.pointerEvents = 'none';
  document.querySelector('.play').style.pointerEvents = 'none';
  startRound();
});
let currentPlayer = player1;
let nextPlayer = player2;
function startRound() {
  function handleCellClick(e) {
    let cell = e.target;
    let shipSunk = nextPlayer.board.receiveAttack(`${cell.dataset.x} ${cell.dataset.y}`);
    let isHit = nextPlayer.board.grid[cell.dataset.y - 1][cell.dataset.x.charCodeAt(0) - 65] === 'X';
    cell.textContent = isHit ? 'X' : '.';
    cell.style.color = isHit ? 'red' : 'black';
    cell.style.backgroundColor = isHit ? 'rgb(245, 191, 191)' : 'rgb(218, 218, 218)';
    cell.style.borderColor = isHit ? 'red' : 'blue';

    /*
    
      */
    if (shipSunk) {
      if (shipSunk.isSunk()) {
        shipSunk.coordinates.forEach(coords => {
          let startCoords = coords.split(' ');
          let numberCoord = startCoords[1] - 1;
          let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
          let letterIndex = letters.findIndex(letter => letter == startCoords[0]);
          for (let j = numberCoord + 1; j >= numberCoord - 1; j--) {
            for (let i = letterIndex + 1; i >= letterIndex - 1; i--) {
              if (i >= 0 && i <= 9 && j >= 0 && j <= 9) {
                if (nextPlayer.board.grid[j][i] == '/') {
                  let cell = document.querySelector(`.${nextPlayer == player1 ? 'player1-grid' : 'player2-grid'} [data-y="${j + 1}"][data-x="${letters[i]}"]`);
                  cell.textContent = '.';
                  cell.style.backgroundColor = 'rgb(218, 218, 218)';
                }
              }
            }
          }
        });
      }
    }
    //end game logic
    if (nextPlayer.board.allShipsSunk()) {
      const dialog = document.querySelector('dialog');
      const form = document.querySelector('form');
      const formPara = document.querySelector('form > p');
      formPara.textContent = `${currentPlayer === player1 ? 'You' : 'Computer'} Won!`;
      dialog.showModal();
      form.addEventListener('submit', () => {
        dialog.close();
        buildGrid();
        marineForce();
        let gridOne = document.querySelector(`.player1-grid`);
        gridOne.style.pointerEvents = 'auto';
        gridOne.style.opacity = '1';
        let gridTwo = document.querySelector(`.player2-grid`);
        gridTwo.style.pointerEvents = 'auto';
        gridTwo.style.opacity = '1';
      });
      return;
    }
    //change player
    [currentPlayer, nextPlayer] = [nextPlayer, currentPlayer];
    updateTurnDisplay();
  }
  const cells1 = document.querySelectorAll(`.player1-grid > [data-x]`);
  cells1.forEach(cell => {
    cell.addEventListener('click', handleCellClick, {
      once: true
    });
  });
  const cells2 = document.querySelectorAll(`.player2-grid > [data-x]`);
  cells2.forEach(cell => {
    cell.addEventListener('click', handleCellClick, {
      once: true
    });
  });
  updateTurnDisplay(); //this is the first turn runs after clicking play
}
function updateTurnDisplay() {
  const turns = document.querySelector('.turns');
  turns.textContent = currentPlayer === player1 ? 'Your Turn' : "Computer's Turn";
  const player1Grid = document.querySelector('.player1-grid');
  const player2Grid = document.querySelector('.player2-grid');
  if (currentPlayer === player1) {
    player1Grid.style.pointerEvents = 'none';
    player1Grid.style.opacity = '0.5';
    player2Grid.style.pointerEvents = 'auto';
    player2Grid.style.opacity = '1';
  } else {
    player1Grid.style.pointerEvents = 'auto';
    player1Grid.style.opacity = '1';
    player2Grid.style.pointerEvents = 'none';
    player2Grid.style.opacity = '0.5';
    setTimeout(clickRandomBtn, 1000); // Delay to mimic computer thinking time
  }
}
function clickRandomBtn() {
  let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  let randomLetter = letters[Math.ceil(Math.random() * 100) % 10];
  let randomNum = Math.ceil(Math.random() * 100) % 10 + 1;
  let coords = [randomLetter, randomNum];
  document.querySelectorAll(`.player1-grid > [data-x]`).forEach(cell => {
    if (cell.dataset.x === coords[0] && Number(cell.dataset.y) === coords[1]) {
      if (cell.textContent != '') {
        clickRandomBtn();
      } else cell.click();
    }
  });
}
buildGrid();
marineForce();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNuRDtJQUNELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7RUFDakI7RUFDQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDRCxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0QsSUFBSSxHQUFHLENBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDbEQsQ0FBQyxH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LENBQUM4RCxZQUFZLEVBQUVDLFNBQVMsQ0FBQztFQUV0Q2xDLFFBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUNuQyxPQUFPLENBQUVvQyxJQUFJLElBQUs7SUFDdEUsSUFBSUEsSUFBSSxDQUFDWCxPQUFPLENBQUNDLENBQUMsS0FBSzVDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSStGLE1BQU0sQ0FBQ3pDLElBQUksQ0FBQ1gsT0FBTyxDQUFDRSxDQUFDLENBQUMsS0FBSzdDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN4RSxJQUFJc0QsSUFBSSxDQUFDWixXQUFXLElBQUksRUFBRSxFQUFFO1FBQzFCb0QsY0FBYyxDQUFDLENBQUM7TUFDbEIsQ0FBQyxNQUFNeEMsSUFBSSxDQUFDMEMsS0FBSyxDQUFDLENBQUM7SUFDckI7RUFDRixDQUFDLENBQUM7QUFDSjtBQUVBckUsU0FBUyxDQUFDLENBQUM7QUFDWG1CLFdBQVcsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtbGludGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtbGludGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtbGludGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtbGludGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC1saW50ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYmFiZWwtbGludGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLWxpbnRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHkge1xuICBmb250LWZhbWlseTpcbiAgICBzeXN0ZW0tdWksXG4gICAgLWFwcGxlLXN5c3RlbSxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgJ1NlZ29lIFVJJyxcbiAgICBSb2JvdG8sXG4gICAgT3h5Z2VuLFxuICAgIFVidW50dSxcbiAgICBDYW50YXJlbGwsXG4gICAgJ09wZW4gU2FucycsXG4gICAgJ0hlbHZldGljYSBOZXVlJyxcbiAgICBzYW5zLXNlcmlmO1xufVxuXG4ucGxheWVyMS1ncmlkLFxuLnBsYXllcjItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMSwgMzBweCkgLyByZXBlYXQoMTEsIDMwcHgpO1xufVxuLnBsYXllcjEtZ3JpZCA+IFtkYXRhLXhdIHtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAxNWR2dztcbn1cbi50dXJucyB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIyMywgMjIzLCAwLjYwMyk7XG59XG4ucGxheWVyMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxheWVycyB7XG4gIG1hcmdpbi10b3A6IDE1ZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogNDBkdnc7XG59XG5mb3JtID4gYnV0dG9uLFxuLmJ0bnMgPiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogM3B4IDVweDtcbn1cbmZvcm0ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cbi5wbGF5ZXJzIGJ1dHRvbjpub3QoW2RhdGEteV0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG4ucGxheWVycyBidXR0b25bZGF0YS15XSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7IC8qcmdiKDE3MywgMjEzLCAyNDcpOyovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgbWFyZ2luOiAtMXB4OyAvKnRoaXMgY29sbGFwc2UgYm9yZGVycyovXG4gIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IHRvIGNlbnRlciBjb250ZW50ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXIgaG9yaXpvbnRhbGx5ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJzIGJ1dHRvbltkYXRhLXldOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjQxLCAyMDcsIDAuNzUzKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7Ozs7Ozs7Ozs7Y0FXWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixrREFBa0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0IsRUFBRSxzQkFBc0I7RUFDOUMsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWSxFQUFFLHdCQUF3QjtFQUN0QyxhQUFhLEVBQUUsa0NBQWtDO0VBQ2pELHVCQUF1QixFQUFFLHdCQUF3QjtFQUNqRCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICAnU2Vnb2UgVUknLFxcbiAgICBSb2JvdG8sXFxuICAgIE94eWdlbixcXG4gICAgVWJ1bnR1LFxcbiAgICBDYW50YXJlbGwsXFxuICAgICdPcGVuIFNhbnMnLFxcbiAgICAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMSwgMzBweCkgLyByZXBlYXQoMTEsIDMwcHgpO1xcbn1cXG4ucGxheWVyMS1ncmlkID4gW2RhdGEteF0ge1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDE1ZHZ3O1xcbn1cXG4udHVybnMge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsIDIyMywgMjIzLCAwLjYwMyk7XFxufVxcbi5wbGF5ZXIxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYXllcjIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGxheWVycyB7XFxuICBtYXJnaW4tdG9wOiAxNWR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA0MGR2dztcXG59XFxuZm9ybSA+IGJ1dHRvbixcXG4uYnRucyA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG59XFxuZm9ybSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnBsYXllcnMgYnV0dG9uOm5vdChbZGF0YS15XSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnBsYXllcnMgYnV0dG9uW2RhdGEteV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgLypyZ2IoMTczLCAyMTMsIDI0Nyk7Ki9cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgbWFyZ2luOiAtMXB4OyAvKnRoaXMgY29sbGFwc2UgYm9yZGVycyovXFxuICBkaXNwbGF5OiBmbGV4OyAvKiBVc2UgZmxleGJveCB0byBjZW50ZXIgY29udGVudCAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJzIGJ1dHRvbltkYXRhLXldOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywgMjQxLCAyMDcsIDAuNzUzKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMucmVjZWl2ZWRIaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMucmVjZWl2ZWRIaXRzKys7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PSB0aGlzLnJlY2VpdmVkSGl0cztcbiAgfVxuICBzZXRDb29yZHNPbkJvYXJkKGNvb3Jkcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMucHVzaChjb29yZHMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdyaWQgPSBbXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICBdO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuICByZXNldEdyaWQoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuZ3JpZCA9IFtcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgICAgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10sXG4gICAgICBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSxcbiAgICAgIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddLFxuICAgIF07XG4gIH1cbiAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHN0YXJ0Q29vcmRzID0gY29vcmRzLnNwbGl0KCcgJyk7XG4gICAgbGV0IG51bWJlckNvb3JkID0gc3RhcnRDb29yZHNbMV0gLSAxO1xuICAgIGlmIChcbiAgICAgIG51bWJlckNvb3JkID4gOSB8fFxuICAgICAgbnVtYmVyQ29vcmQgPCAwIHx8XG4gICAgICAhWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10uaW5jbHVkZXMoXG4gICAgICAgIHN0YXJ0Q29vcmRzWzBdXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gJ2ludmFsaWQgY29vcmRpbmF0ZXMnO1xuICAgIH1cbiAgICBsZXQgbGV0dGVySW5kZXggPSBbXG4gICAgICAnQScsXG4gICAgICAnQicsXG4gICAgICAnQycsXG4gICAgICAnRCcsXG4gICAgICAnRScsXG4gICAgICAnRicsXG4gICAgICAnRycsXG4gICAgICAnSCcsXG4gICAgICAnSScsXG4gICAgICAnSicsXG4gICAgXS5maW5kSW5kZXgoKGxldHRlcikgPT4gbGV0dGVyID09IHN0YXJ0Q29vcmRzWzBdKTtcbiAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGxldCBzaGlwQXJlYSA9IGxldHRlckluZGV4ICsgc2hpcC5sZW5ndGg7XG4gICAgICBpZiAoc2hpcEFyZWEgPiAxMCkge1xuICAgICAgICByZXR1cm4gJ1lvdSBjYW4gbm90IHBsYWNlIHRoZSBzaGlwIGhlcmUnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGxldHRlckluZGV4OyBpIDwgc2hpcEFyZWE7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5ncmlkW251bWJlckNvb3JkXVtpXSA9PSAnTycgfHxcbiAgICAgICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2ldID09ICcvJ1xuICAgICAgICApIHtcbiAgICAgICAgICAvL2dldCBiYWNrIHRvIHdoZXJlIHUgd2VyZVxuICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhcnRDb29yZHMgPSBjb29yZHMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGxldCBudW1iZXJDb29yZCA9IHN0YXJ0Q29vcmRzWzFdIC0gMTtcbiAgICAgICAgICAgIGxldCBsZXR0ZXJJbmRleCA9IFtcbiAgICAgICAgICAgICAgJ0EnLFxuICAgICAgICAgICAgICAnQicsXG4gICAgICAgICAgICAgICdDJyxcbiAgICAgICAgICAgICAgJ0QnLFxuICAgICAgICAgICAgICAnRScsXG4gICAgICAgICAgICAgICdGJyxcbiAgICAgICAgICAgICAgJ0cnLFxuICAgICAgICAgICAgICAnSCcsXG4gICAgICAgICAgICAgICdJJyxcbiAgICAgICAgICAgICAgJ0onLFxuICAgICAgICAgICAgXS5maW5kSW5kZXgoKGxldHRlcikgPT4gbGV0dGVyID09IHN0YXJ0Q29vcmRzWzBdKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFtudW1iZXJDb29yZF1bbGV0dGVySW5kZXhdID0gc3RhcnRDb29yZHNbMF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuICd5b3UgY2FuIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcCAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXAuc2V0Q29vcmRzT25Cb2FyZChcbiAgICAgICAgICAgIGAke3RoaXMuZ3JpZFtudW1iZXJDb29yZF1baV19ICR7bnVtYmVyQ29vcmQgKyAxfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuZ3JpZFtudW1iZXJDb29yZF1baV0gPSAnTyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgIGxldCBzdGFydENvb3JkcyA9IGNvb3Jkcy5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtYmVyQ29vcmQgPSBzdGFydENvb3Jkc1sxXSAtIDE7XG4gICAgICAgIGxldCBsZXR0ZXJJbmRleCA9IFtcbiAgICAgICAgICAnQScsXG4gICAgICAgICAgJ0InLFxuICAgICAgICAgICdDJyxcbiAgICAgICAgICAnRCcsXG4gICAgICAgICAgJ0UnLFxuICAgICAgICAgICdGJyxcbiAgICAgICAgICAnRycsXG4gICAgICAgICAgJ0gnLFxuICAgICAgICAgICdJJyxcbiAgICAgICAgICAnSicsXG4gICAgICAgIF0uZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBzdGFydENvb3Jkc1swXSk7XG4gICAgICAgIGZvciAobGV0IGogPSBudW1iZXJDb29yZCArIDE7IGogPj0gbnVtYmVyQ29vcmQgLSAxOyBqLS0pIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gbGV0dGVySW5kZXggKyAxOyBpID49IGxldHRlckluZGV4IC0gMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSAwICYmIGkgPD0gOSAmJiBqID49IDAgJiYgaiA8PSA5KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbal1baV0gIT0gJ08nKSB0aGlzLmdyaWRbal1baV0gPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgIGxldCBzaGlwQXJlYSA9IGxldHRlckluZGV4IC0gc2hpcC5sZW5ndGg7XG4gICAgICBpZiAoc2hpcEFyZWEgPCAtMSkge1xuICAgICAgICByZXR1cm4gJ1lvdSBjYW4gbm90IHBsYWNlIHRoZSBzaGlwIGhlcmUnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGxldHRlckluZGV4OyBpID4gc2hpcEFyZWE7IGktLSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5ncmlkW251bWJlckNvb3JkXVtpXSA9PSAnTycgfHxcbiAgICAgICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2ldID09ICcvJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgbGV0IHN0YXJ0Q29vcmRzID0gY29vcmRzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBsZXQgbnVtYmVyQ29vcmQgPSBzdGFydENvb3Jkc1sxXSAtIDE7XG4gICAgICAgICAgICBsZXQgbGV0dGVySW5kZXggPSBbXG4gICAgICAgICAgICAgICdBJyxcbiAgICAgICAgICAgICAgJ0InLFxuICAgICAgICAgICAgICAnQycsXG4gICAgICAgICAgICAgICdEJyxcbiAgICAgICAgICAgICAgJ0UnLFxuICAgICAgICAgICAgICAnRicsXG4gICAgICAgICAgICAgICdHJyxcbiAgICAgICAgICAgICAgJ0gnLFxuICAgICAgICAgICAgICAnSScsXG4gICAgICAgICAgICAgICdKJyxcbiAgICAgICAgICAgIF0uZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBzdGFydENvb3Jkc1swXSk7XG4gICAgICAgICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2xldHRlckluZGV4XSA9IHN0YXJ0Q29vcmRzWzBdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAneW91IGNhbiBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXAgJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLnNldENvb3Jkc09uQm9hcmQoXG4gICAgICAgICAgICBgJHt0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2ldfSAke251bWJlckNvb3JkICsgMX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2ldID0gJ08nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBsZXQgc3RhcnRDb29yZHMgPSBjb29yZHMuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bWJlckNvb3JkID0gc3RhcnRDb29yZHNbMV0gLSAxO1xuICAgICAgICBsZXQgbGV0dGVySW5kZXggPSBbXG4gICAgICAgICAgJ0EnLFxuICAgICAgICAgICdCJyxcbiAgICAgICAgICAnQycsXG4gICAgICAgICAgJ0QnLFxuICAgICAgICAgICdFJyxcbiAgICAgICAgICAnRicsXG4gICAgICAgICAgJ0cnLFxuICAgICAgICAgICdIJyxcbiAgICAgICAgICAnSScsXG4gICAgICAgICAgJ0onLFxuICAgICAgICBdLmZpbmRJbmRleCgobGV0dGVyKSA9PiBsZXR0ZXIgPT0gc3RhcnRDb29yZHNbMF0pO1xuICAgICAgICBmb3IgKGxldCBqID0gbnVtYmVyQ29vcmQgKyAxOyBqID49IG51bWJlckNvb3JkIC0gMTsgai0tKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGxldHRlckluZGV4ICsgMTsgaSA+PSBsZXR0ZXJJbmRleCAtIDE7IGktLSkge1xuICAgICAgICAgICAgaWYgKGkgPj0gMCAmJiBpIDw9IDkgJiYgaiA+PSAwICYmIGogPD0gOSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW2pdW2ldICE9ICdPJykgdGhpcy5ncmlkW2pdW2ldID0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gJ3RvcCcpIHtcbiAgICAgIGxldCBzaGlwQXJlYSA9IG51bWJlckNvb3JkIC0gc2hpcC5sZW5ndGg7XG4gICAgICBpZiAoc2hpcEFyZWEgPCAtMSkge1xuICAgICAgICByZXR1cm4gJ1lvdSBjYW4gbm90IHBsYWNlIHRoZSBzaGlwIGhlcmUnO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IG51bWJlckNvb3JkOyBpID4gc2hpcEFyZWE7IGktLSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5ncmlkW2ldW2xldHRlckluZGV4XSA9PSAnTycgfHxcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bbGV0dGVySW5kZXhdID09ICcvJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICAgICAgbGV0IHN0YXJ0Q29vcmRzID0gY29vcmRzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBsZXQgbnVtYmVyQ29vcmQgPSBzdGFydENvb3Jkc1sxXSAtIDE7XG4gICAgICAgICAgICBsZXQgbGV0dGVySW5kZXggPSBbXG4gICAgICAgICAgICAgICdBJyxcbiAgICAgICAgICAgICAgJ0InLFxuICAgICAgICAgICAgICAnQycsXG4gICAgICAgICAgICAgICdEJyxcbiAgICAgICAgICAgICAgJ0UnLFxuICAgICAgICAgICAgICAnRicsXG4gICAgICAgICAgICAgICdHJyxcbiAgICAgICAgICAgICAgJ0gnLFxuICAgICAgICAgICAgICAnSScsXG4gICAgICAgICAgICAgICdKJyxcbiAgICAgICAgICAgIF0uZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBzdGFydENvb3Jkc1swXSk7XG4gICAgICAgICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2xldHRlckluZGV4XSA9IHN0YXJ0Q29vcmRzWzBdO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiAneW91IGNhbiBub3Qgb3ZlcmxhcCBhbm90aGVyIHNoaXAgJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLnNldENvb3Jkc09uQm9hcmQoYCR7dGhpcy5ncmlkW2ldW2xldHRlckluZGV4XX0gJHtpICsgMX1gKTtcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bbGV0dGVySW5kZXhdID0gJ08nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICBsZXQgc3RhcnRDb29yZHMgPSBjb29yZHMuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IG51bWJlckNvb3JkID0gc3RhcnRDb29yZHNbMV0gLSAxO1xuICAgICAgICBsZXQgbGV0dGVySW5kZXggPSBbXG4gICAgICAgICAgJ0EnLFxuICAgICAgICAgICdCJyxcbiAgICAgICAgICAnQycsXG4gICAgICAgICAgJ0QnLFxuICAgICAgICAgICdFJyxcbiAgICAgICAgICAnRicsXG4gICAgICAgICAgJ0cnLFxuICAgICAgICAgICdIJyxcbiAgICAgICAgICAnSScsXG4gICAgICAgICAgJ0onLFxuICAgICAgICBdLmZpbmRJbmRleCgobGV0dGVyKSA9PiBsZXR0ZXIgPT0gc3RhcnRDb29yZHNbMF0pO1xuXG4gICAgICAgIGZvciAobGV0IGogPSBudW1iZXJDb29yZCArIDE7IGogPj0gbnVtYmVyQ29vcmQgLSAxOyBqLS0pIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gbGV0dGVySW5kZXggKyAxOyBpID49IGxldHRlckluZGV4IC0gMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSAwICYmIGkgPD0gOSAmJiBqID49IDAgJiYgaiA8PSA5KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbal1baV0gIT0gJ08nKSB0aGlzLmdyaWRbal1baV0gPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNoaXBBcmVhID0gbnVtYmVyQ29vcmQgKyBzaGlwLmxlbmd0aDtcbiAgICAgIGlmIChzaGlwQXJlYSA+IDEwKSB7XG4gICAgICAgIHJldHVybiAnWW91IGNhbiBub3QgcGxhY2UgdGhlIHNoaXAgaGVyZSc7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gbnVtYmVyQ29vcmQ7IGkgPCBzaGlwQXJlYTsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bbGV0dGVySW5kZXhdID09ICdPJyB8fFxuICAgICAgICAgIHRoaXMuZ3JpZFtpXVtsZXR0ZXJJbmRleF0gPT0gJy8nXG4gICAgICAgICkge1xuICAgICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhcnRDb29yZHMgPSBjb29yZHMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGxldCBudW1iZXJDb29yZCA9IHN0YXJ0Q29vcmRzWzFdIC0gMTtcbiAgICAgICAgICAgIGxldCBsZXR0ZXJJbmRleCA9IFtcbiAgICAgICAgICAgICAgJ0EnLFxuICAgICAgICAgICAgICAnQicsXG4gICAgICAgICAgICAgICdDJyxcbiAgICAgICAgICAgICAgJ0QnLFxuICAgICAgICAgICAgICAnRScsXG4gICAgICAgICAgICAgICdGJyxcbiAgICAgICAgICAgICAgJ0cnLFxuICAgICAgICAgICAgICAnSCcsXG4gICAgICAgICAgICAgICdJJyxcbiAgICAgICAgICAgICAgJ0onLFxuICAgICAgICAgICAgXS5maW5kSW5kZXgoKGxldHRlcikgPT4gbGV0dGVyID09IHN0YXJ0Q29vcmRzWzBdKTtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFtudW1iZXJDb29yZF1bbGV0dGVySW5kZXhdID0gc3RhcnRDb29yZHNbMF07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuICd5b3UgY2FuIG5vdCBvdmVybGFwIGFub3RoZXIgc2hpcCAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXAuc2V0Q29vcmRzT25Cb2FyZChgJHt0aGlzLmdyaWRbaV1bbGV0dGVySW5kZXhdfSAke2kgKyAxfWApO1xuICAgICAgICAgIHRoaXMuZ3JpZFtpXVtsZXR0ZXJJbmRleF0gPSAnTyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgIGxldCBzdGFydENvb3JkcyA9IGNvb3Jkcy5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgbnVtYmVyQ29vcmQgPSBzdGFydENvb3Jkc1sxXSAtIDE7XG4gICAgICAgIGxldCBsZXR0ZXJJbmRleCA9IFtcbiAgICAgICAgICAnQScsXG4gICAgICAgICAgJ0InLFxuICAgICAgICAgICdDJyxcbiAgICAgICAgICAnRCcsXG4gICAgICAgICAgJ0UnLFxuICAgICAgICAgICdGJyxcbiAgICAgICAgICAnRycsXG4gICAgICAgICAgJ0gnLFxuICAgICAgICAgICdJJyxcbiAgICAgICAgICAnSicsXG4gICAgICAgIF0uZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBzdGFydENvb3Jkc1swXSk7XG4gICAgICAgIGZvciAobGV0IGogPSBudW1iZXJDb29yZCArIDE7IGogPj0gbnVtYmVyQ29vcmQgLSAxOyBqLS0pIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gbGV0dGVySW5kZXggKyAxOyBpID49IGxldHRlckluZGV4IC0gMTsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSAwICYmIGkgPD0gOSAmJiBqID49IDAgJiYgaiA8PSA5KSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbal1baV0gIT0gJ08nKSB0aGlzLmdyaWRbal1baV0gPSAnLyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhjb29yZHMpIHtcbiAgICBsZXQgc3RhcnRDb29yZHMgPSBjb29yZHMuc3BsaXQoJyAnKTtcbiAgICBsZXQgbnVtYmVyQ29vcmQgPSBzdGFydENvb3Jkc1sxXSAtIDE7XG4gICAgbGV0IGxldHRlckluZGV4ID0gW1xuICAgICAgJ0EnLFxuICAgICAgJ0InLFxuICAgICAgJ0MnLFxuICAgICAgJ0QnLFxuICAgICAgJ0UnLFxuICAgICAgJ0YnLFxuICAgICAgJ0cnLFxuICAgICAgJ0gnLFxuICAgICAgJ0knLFxuICAgICAgJ0onLFxuICAgIF0uZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBzdGFydENvb3Jkc1swXSk7XG4gICAgaWYgKGxldHRlckluZGV4ID09IC0xIHx8IG51bWJlckNvb3JkID4gOSB8fCBudW1iZXJDb29yZCA8IDApXG4gICAgICByZXR1cm4gJ2ludmFsaWQgY29vcmRpbmF0ZXMnO1xuICAgIGlmICh0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2xldHRlckluZGV4XSA9PSAnTycpIHtcbiAgICAgIGNvbnN0IGhpdFNoaXAgPSB0aGlzLnNoaXBzLmZpbmQoKHNoaXApID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXAuY29vcmRpbmF0ZXMuaW5jbHVkZXMoY29vcmRzKTtcbiAgICAgIH0pO1xuICAgICAgLy9zZWUgaGVyZSB3aGF0IGlzIHVwXG5cbiAgICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICAgIGhpdFNoaXAuaGl0KCk7XG4gICAgICAgIHRoaXMuZ3JpZFtudW1iZXJDb29yZF1bbGV0dGVySW5kZXhdID0gJ1gnO1xuICAgICAgICBpZiAoaGl0U2hpcC5pc1N1bmsoKSkgcmV0dXJuIGhpdFNoaXA7XG4gICAgICAgIGVsc2UgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWRbbnVtYmVyQ29vcmRdW2xldHRlckluZGV4XSA9ICcuJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IHJvdyBvZiB0aGlzLmdyaWQpIHtcbiAgICAgIGZvciAobGV0IGNvb3JkcyBvZiByb3cpIHtcbiAgICAgICAgaWYgKGNvb3JkcyA9PT0gJ08nKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFBsYXllciwgR2FtZUJvYXJkLCBTaGlwIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmZ1bmN0aW9uIGJ1aWxkR3JpZCgpIHtcbiAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMS1ncmlkJyk7XG4gIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjItZ3JpZCcpO1xuICBwbGF5ZXIxR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgcGxheWVyMkdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIHBsYXllcjEuYm9hcmQucmVzZXRHcmlkKCk7XG4gIHBsYXllcjIuYm9hcmQucmVzZXRHcmlkKCk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlJykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuXG4gIGNvbnN0IGxldHRlcnMgPSBbJ0EnLCAnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDExOyBqKyspIHtcbiAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgIGlmIChpID09IDAgJiYgaiA9PSAwKSB7XG4gICAgICAgIHBsYXllcjFHcmlkLmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgcGxheWVyMkdyaWQuYXBwZW5kQ2hpbGQoY2VsbDIpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSAwKSB7XG4gICAgICAgIGNlbGwxLnRleHRDb250ZW50ID0gbGV0dGVyc1tqXTtcbiAgICAgICAgY2VsbDIudGV4dENvbnRlbnQgPSBsZXR0ZXJzW2pdO1xuICAgICAgfSBlbHNlIGlmIChqID09IDApIHtcbiAgICAgICAgY2VsbDEudGV4dENvbnRlbnQgPSBpO1xuICAgICAgICBjZWxsMi50ZXh0Q29udGVudCA9IGk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsMS5kYXRhc2V0LnggPSBsZXR0ZXJzW2pdO1xuICAgICAgICBjZWxsMS5kYXRhc2V0LnkgPSBpO1xuICAgICAgICBjZWxsMi5kYXRhc2V0LnggPSBsZXR0ZXJzW2pdO1xuICAgICAgICBjZWxsMi5kYXRhc2V0LnkgPSBpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIxR3JpZC5hcHBlbmRDaGlsZChjZWxsMSk7XG4gICAgICBwbGF5ZXIyR3JpZC5hcHBlbmRDaGlsZChjZWxsMik7XG4gICAgfVxuICB9XG59XG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihuZXcgR2FtZUJvYXJkKCkpO1xuY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIobmV3IEdhbWVCb2FyZCgpKTtcblxuZnVuY3Rpb24gbWFyaW5lRm9yY2UoKSB7XG4gIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybnMnKTtcblxuICB0dXJuLnRleHRDb250ZW50ID0gJ1BsYWNpbmcgU2hpcHMnO1xuXG4gIGNvbnN0IHNoaXBzMSA9IFtcbiAgICBuZXcgU2hpcCg0KSxcbiAgICBuZXcgU2hpcCgzKSxcbiAgICBuZXcgU2hpcCgzKSxcbiAgICBuZXcgU2hpcCgyKSxcbiAgICBuZXcgU2hpcCgyKSxcbiAgICBuZXcgU2hpcCgyKSxcbiAgICBuZXcgU2hpcCgxKSxcbiAgICBuZXcgU2hpcCgxKSxcbiAgICBuZXcgU2hpcCgxKSxcbiAgICBuZXcgU2hpcCgxKSxcbiAgXTtcblxuICBjb25zdCBzaGlwczIgPSBbXG4gICAgbmV3IFNoaXAoNCksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMyksXG4gICAgbmV3IFNoaXAoMiksXG4gICAgbmV3IFNoaXAoMiksXG4gICAgbmV3IFNoaXAoMiksXG4gICAgbmV3IFNoaXAoMSksXG4gICAgbmV3IFNoaXAoMSksXG4gICAgbmV3IFNoaXAoMSksXG4gICAgbmV3IFNoaXAoMSksXG4gIF07XG4gIHNoaXBzMi5mb3JFYWNoKChzaGlwKSA9PiBwbGFjZVNoaXBzUmFuZG9tbHkocGxheWVyMi5ib2FyZCwgc2hpcCkpO1xuICBzaGlwczEuZm9yRWFjaCgoc2hpcCkgPT4gcGxhY2VTaGlwc1JhbmRvbWx5KHBsYXllcjEuYm9hcmQsIHNoaXApKTtcblxuICByZXBsYWNlU2hpcHMoKTtcblxuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIxLWdyaWQgPiBbZGF0YS14XScpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY29sb3JTaGlwcyhwbGF5ZXIxLCBjZWxsKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoYm9hcmQsIHNoaXApIHtcbiAgbGV0IGRpcmVjdGlvbnMgPSBbJ3JpZ2h0JywgJ2xlZnQnLCAndG9wJywgJ2JvdHRvbSddO1xuICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBsZXQgcmV0dXJuZWQ7XG4gIGRvIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgbG9vcCAke3JhbmRvbU51bX1gKTtcbiAgICBsZXQgcmFuZG9tRGlyID0gZGlyZWN0aW9uc1tNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSA0XTtcbiAgICBsZXQgcmFuZG9tTGV0dGVyID0gbGV0dGVyc1tNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSAxMF07XG4gICAgbGV0IHJhbmRvbU51bSA9IChNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgJSAxMCkgKyAxO1xuXG4gICAgcmV0dXJuZWQgPSBib2FyZC5wbGFjZVNoaXAoc2hpcCwgYCR7cmFuZG9tTGV0dGVyfSAke3JhbmRvbU51bX1gLCByYW5kb21EaXIpO1xuICB9IHdoaWxlIChyZXR1cm5lZCk7XG59XG5mdW5jdGlvbiByZXBsYWNlU2hpcHMoKSB7XG4gIGNvbnN0IHBsYWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlJyk7XG4gIHBsYWNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ1aWxkR3JpZCgpO1xuXG4gICAgY29uc3Qgc2hpcHMxID0gW1xuICAgICAgbmV3IFNoaXAoNCksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMiksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICAgIG5ldyBTaGlwKDIpLFxuICAgICAgbmV3IFNoaXAoMSksXG4gICAgICBuZXcgU2hpcCgxKSxcbiAgICAgIG5ldyBTaGlwKDEpLFxuICAgICAgbmV3IFNoaXAoMSksXG4gICAgXTtcblxuICAgIGNvbnN0IHNoaXBzMiA9IFtcbiAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgbmV3IFNoaXAoMyksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDIpLFxuICAgICAgbmV3IFNoaXAoMiksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICAgIG5ldyBTaGlwKDEpLFxuICAgICAgbmV3IFNoaXAoMSksXG4gICAgICBuZXcgU2hpcCgxKSxcbiAgICAgIG5ldyBTaGlwKDEpLFxuICAgIF07XG4gICAgc2hpcHMyLmZvckVhY2goKHNoaXApID0+IHBsYWNlU2hpcHNSYW5kb21seShwbGF5ZXIyLmJvYXJkLCBzaGlwKSk7XG4gICAgc2hpcHMxLmZvckVhY2goKHNoaXApID0+IHBsYWNlU2hpcHNSYW5kb21seShwbGF5ZXIxLmJvYXJkLCBzaGlwKSk7XG5cbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXIxLWdyaWQgPiBbZGF0YS14XScpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbG9yU2hpcHMocGxheWVyMSwgY2VsbCk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gY29sb3JTaGlwcyhwbGF5ZXIsIGNlbGwpIHtcbiAgbGV0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICBpZiAoXG4gICAgcGxheWVyLmJvYXJkLmdyaWRbY2VsbC5kYXRhc2V0LnkgLSAxXVtcbiAgICAgIGxldHRlcnMuZmluZEluZGV4KChsZXR0ZXIpID0+IGxldHRlciA9PSBjZWxsLmRhdGFzZXQueClcbiAgICBdID09ICdPJ1xuICApIHtcbiAgICBjZWxsLnN0eWxlLmJvcmRlckNvbG9yID0gJ2JsdWUnO1xuXG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE3MywgMjEzLCAyNDcpJztcbiAgICBjZWxsLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZScpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICBzdGFydFJvdW5kKCk7XG59KTtcbmxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbmxldCBuZXh0UGxheWVyID0gcGxheWVyMjtcblxuZnVuY3Rpb24gc3RhcnRSb3VuZCgpIHtcbiAgZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKGUpIHtcbiAgICBsZXQgY2VsbCA9IGUudGFyZ2V0O1xuXG4gICAgbGV0IHNoaXBTdW5rID0gbmV4dFBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgYCR7Y2VsbC5kYXRhc2V0Lnh9ICR7Y2VsbC5kYXRhc2V0Lnl9YFxuICAgICk7XG5cbiAgICBsZXQgaXNIaXQgPVxuICAgICAgbmV4dFBsYXllci5ib2FyZC5ncmlkW2NlbGwuZGF0YXNldC55IC0gMV1bXG4gICAgICAgIGNlbGwuZGF0YXNldC54LmNoYXJDb2RlQXQoMCkgLSA2NVxuICAgICAgXSA9PT0gJ1gnO1xuXG4gICAgY2VsbC50ZXh0Q29udGVudCA9IGlzSGl0ID8gJ1gnIDogJy4nO1xuICAgIGNlbGwuc3R5bGUuY29sb3IgPSBpc0hpdCA/ICdyZWQnIDogJ2JsYWNrJztcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGlzSGl0XG4gICAgICA/ICdyZ2IoMjQ1LCAxOTEsIDE5MSknXG4gICAgICA6ICdyZ2IoMjE4LCAyMTgsIDIxOCknO1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyQ29sb3IgPSBpc0hpdCA/ICdyZWQnIDogJ2JsdWUnO1xuXG4gICAgLypcblxuXG5cblxuXG4gICAgICAqL1xuICAgIGlmIChzaGlwU3Vuaykge1xuICAgICAgaWYgKHNoaXBTdW5rLmlzU3VuaygpKSB7XG4gICAgICAgIHNoaXBTdW5rLmNvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICAgIGxldCBzdGFydENvb3JkcyA9IGNvb3Jkcy5zcGxpdCgnICcpO1xuICAgICAgICAgIGxldCBudW1iZXJDb29yZCA9IHN0YXJ0Q29vcmRzWzFdIC0gMTtcbiAgICAgICAgICBsZXQgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgICAgICAgIGxldCBsZXR0ZXJJbmRleCA9IGxldHRlcnMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGxldHRlcikgPT4gbGV0dGVyID09IHN0YXJ0Q29vcmRzWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gbnVtYmVyQ29vcmQgKyAxOyBqID49IG51bWJlckNvb3JkIC0gMTsgai0tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGV0dGVySW5kZXggKyAxOyBpID49IGxldHRlckluZGV4IC0gMTsgaS0tKSB7XG4gICAgICAgICAgICAgIGlmIChpID49IDAgJiYgaSA8PSA5ICYmIGogPj0gMCAmJiBqIDw9IDkpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dFBsYXllci5ib2FyZC5ncmlkW2pdW2ldID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgLiR7bmV4dFBsYXllciA9PSBwbGF5ZXIxID8gJ3BsYXllcjEtZ3JpZCcgOiAncGxheWVyMi1ncmlkJ30gW2RhdGEteT1cIiR7aiArIDF9XCJdW2RhdGEteD1cIiR7bGV0dGVyc1tpXX1cIl1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcuJztcbiAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMTgsIDIxOCwgMjE4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9lbmQgZ2FtZSBsb2dpY1xuICAgIGlmIChuZXh0UGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICBjb25zdCBmb3JtUGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gPiBwJyk7XG5cbiAgICAgIGZvcm1QYXJhLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllciA9PT0gcGxheWVyMSA/ICdZb3UnIDogJ0NvbXB1dGVyJ30gV29uIWA7XG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG5cbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgYnVpbGRHcmlkKCk7XG4gICAgICAgIG1hcmluZUZvcmNlKCk7XG4gICAgICAgIGxldCBncmlkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllcjEtZ3JpZGApO1xuICAgICAgICBncmlkT25lLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIGdyaWRPbmUuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICBsZXQgZ3JpZFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXIyLWdyaWRgKTtcbiAgICAgICAgZ3JpZFR3by5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuICAgICAgICBncmlkVHdvLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9jaGFuZ2UgcGxheWVyXG4gICAgW2N1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXJdID0gW25leHRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXJdO1xuICAgIHVwZGF0ZVR1cm5EaXNwbGF5KCk7XG4gIH1cblxuICBjb25zdCBjZWxsczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyMS1ncmlkID4gW2RhdGEteF1gKTtcbiAgY2VsbHMxLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gIH0pO1xuICBjb25zdCBjZWxsczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucGxheWVyMi1ncmlkID4gW2RhdGEteF1gKTtcbiAgY2VsbHMyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gIH0pO1xuICB1cGRhdGVUdXJuRGlzcGxheSgpOyAvL3RoaXMgaXMgdGhlIGZpcnN0IHR1cm4gcnVucyBhZnRlciBjbGlja2luZyBwbGF5XG59XG5mdW5jdGlvbiB1cGRhdGVUdXJuRGlzcGxheSgpIHtcbiAgY29uc3QgdHVybnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybnMnKTtcbiAgdHVybnMudGV4dENvbnRlbnQgPVxuICAgIGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgPyAnWW91ciBUdXJuJyA6IFwiQ29tcHV0ZXIncyBUdXJuXCI7XG5cbiAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMS1ncmlkJyk7XG4gIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjItZ3JpZCcpO1xuXG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgcGxheWVyMUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBwbGF5ZXIxR3JpZC5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgcGxheWVyMkdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcbiAgICBwbGF5ZXIyR3JpZC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcjFHcmlkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgcGxheWVyMUdyaWQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBwbGF5ZXIyR3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIHBsYXllcjJHcmlkLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICBzZXRUaW1lb3V0KGNsaWNrUmFuZG9tQnRuLCAxMDAwKTsgLy8gRGVsYXkgdG8gbWltaWMgY29tcHV0ZXIgdGhpbmtpbmcgdGltZVxuICB9XG59XG5mdW5jdGlvbiBjbGlja1JhbmRvbUJ0bigpIHtcbiAgbGV0IGxldHRlcnMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgbGV0IHJhbmRvbUxldHRlciA9IGxldHRlcnNbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApICUgMTBdO1xuICBsZXQgcmFuZG9tTnVtID0gKE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKSAlIDEwKSArIDE7XG4gIGxldCBjb29yZHMgPSBbcmFuZG9tTGV0dGVyLCByYW5kb21OdW1dO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXIxLWdyaWQgPiBbZGF0YS14XWApLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoY2VsbC5kYXRhc2V0LnggPT09IGNvb3Jkc1swXSAmJiBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpID09PSBjb29yZHNbMV0pIHtcbiAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ICE9ICcnKSB7XG4gICAgICAgIGNsaWNrUmFuZG9tQnRuKCk7XG4gICAgICB9IGVsc2UgY2VsbC5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmJ1aWxkR3JpZCgpO1xubWFyaW5lRm9yY2UoKTtcbiJdLCJuYW1lcyI6WyJTaGlwIiwiY29uc3RydWN0b3IiLCJsZW5ndGgiLCJyZWNlaXZlZEhpdHMiLCJzdW5rIiwiY29vcmRpbmF0ZXMiLCJoaXQiLCJpc1N1bmsiLCJzZXRDb29yZHNPbkJvYXJkIiwiY29vcmRzIiwicHVzaCIsIkdhbWVCb2FyZCIsImdyaWQiLCJzaGlwcyIsInJlc2V0R3JpZCIsInBsYWNlU2hpcCIsInNoaXAiLCJkaXJlY3Rpb24iLCJzdGFydENvb3JkcyIsInNwbGl0IiwibnVtYmVyQ29vcmQiLCJpbmNsdWRlcyIsImxldHRlckluZGV4IiwiZmluZEluZGV4IiwibGV0dGVyIiwic2hpcEFyZWEiLCJpIiwiZm9yRWFjaCIsImoiLCJyZWNlaXZlQXR0YWNrIiwiaGl0U2hpcCIsImZpbmQiLCJhbGxTaGlwc1N1bmsiLCJyb3ciLCJQbGF5ZXIiLCJib2FyZCIsImJ1aWxkR3JpZCIsInBsYXllcjFHcmlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMkdyaWQiLCJpbm5lckhUTUwiLCJwbGF5ZXIxIiwicGxheWVyMiIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImxldHRlcnMiLCJjZWxsMSIsImNyZWF0ZUVsZW1lbnQiLCJjZWxsMiIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJkYXRhc2V0IiwieCIsInkiLCJtYXJpbmVGb3JjZSIsInR1cm4iLCJzaGlwczEiLCJzaGlwczIiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJyZXBsYWNlU2hpcHMiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZWxsIiwiY29sb3JTaGlwcyIsImRpcmVjdGlvbnMiLCJyZXR1cm5lZCIsInJhbmRvbURpciIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwicmFuZG9tTGV0dGVyIiwicmFuZG9tTnVtIiwicGxhY2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iLCJzdGFydFJvdW5kIiwiY3VycmVudFBsYXllciIsIm5leHRQbGF5ZXIiLCJoYW5kbGVDZWxsQ2xpY2siLCJlIiwidGFyZ2V0Iiwic2hpcFN1bmsiLCJpc0hpdCIsImNoYXJDb2RlQXQiLCJjb2xvciIsImRpYWxvZyIsImZvcm0iLCJmb3JtUGFyYSIsInNob3dNb2RhbCIsImNsb3NlIiwiZ3JpZE9uZSIsIm9wYWNpdHkiLCJncmlkVHdvIiwidXBkYXRlVHVybkRpc3BsYXkiLCJjZWxsczEiLCJvbmNlIiwiY2VsbHMyIiwidHVybnMiLCJzZXRUaW1lb3V0IiwiY2xpY2tSYW5kb21CdG4iLCJOdW1iZXIiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=