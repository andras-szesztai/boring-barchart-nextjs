webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/styledContainers.js":
/*!**********************************************************!*\
  !*** ./containers/FurnitureBank2019/styledContainers.js ***!
  \**********************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, MainContainer, DashboardContainer, ControlsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return colorGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return colorRedDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return colorRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return colorGreyLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return colorGreyDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return ControlsContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/mediaQueries */ "./styles/mediaQueries.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: red;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var colorGreen = '#3db692';
var colorRedDark = '#b02b2c';
var colorRed = '#ec1c24';
var colorGreyLight = 'lightgray';
var colorGreyDark = '#333';
var breakPoints = {
  largest: 1400,
  large: 1000,
  medium: 600
};
var media = Object(_styles_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["createBreakPoints"])(breakPoints); ////////////////* CONTAINERS ////////////////////////

var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "zi3g9f-0"
})(["margin:0;padding:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;"]);
var DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "zi3g9f-1"
})(["width:90%;height:900px;max-width:1440px;margin:5rem 0;display:grid;grid-template-columns:200px 1fr;grid-template-areas:\"control dashboard\";", " ", ";"], media.largest(_templateObject()), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_2__["testBorder"]);
var ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "zi3g9f-2"
})(["display:flex;grid-area:control ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_2__["testBorder"]); ////////////////* OTHER ////////////////////////

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.d046cfac469c3a5cef4a.hot-update.js.map