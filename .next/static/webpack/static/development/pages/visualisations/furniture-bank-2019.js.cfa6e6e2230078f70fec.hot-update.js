webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, ValueContainer, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return ControlsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return LogoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return PanelContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return ChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return SocChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return FamilyContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return EnvChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return LandFillContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return EmissionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return ReqContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");


function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:  \"title panel\";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    height: 1200px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    height: 850px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 200px 1fr;\n    grid-template-areas:  \"control\"\n                          \"charts\";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import { border } from "@material-ui/system";

var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["width:100vw;"]);
var DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:0 auto;padding-top:5rem;padding-bottom:5rem;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject2()));
var ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";padding:", ";", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject3()));
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;padding:", ";img{width:100%;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]);
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";grid-template-rows:", " 1fr;grid-template-areas:\"title\" \"panel\";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]);
var PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:", "px;overflow-y:scroll;&::-webkit-scrollbar{display:none;}grid-area:panel;", ""], function (props) {
  return props.height;
}, ""
/* ${testBorder} */
);
var ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;grid-row-gap:", ";padding:", ";grid-template-rows:3fr 2fr ", ";grid-template-areas:\"soc\" \"env\" \"req\";"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]);
var SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]);
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MapContainer",
  componentId: "sc-86vxz-8"
})(["grid-area:map;height:100%;width:100%;"]);
var FamilyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__FamilyContainer",
  componentId: "sc-86vxz-9"
})(["grid-area:families;height:100%;width:100%;"]);
var ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ValueContainer",
  componentId: "sc-86vxz-10"
})(["grid-area:value;height:100%;width:100%;"]);
var EnvChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EnvChartsContainer",
  componentId: "sc-86vxz-11"
})(["display:grid;grid-area:env;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"landfill emission\" ", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], ''
/* ${media.small`
grid-template-rows: ${titleHeightM} repeat(2, 1fr);
grid-template-columns: 1fr;
grid-template-areas:
"title"
"landfill"
"emission"
`} */
);
var LandFillContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LandFillContainer",
  componentId: "sc-86vxz-12"
})(["grid-area:landfill;height:100%;width:100%;"]);
var EmissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EmissionContainer",
  componentId: "sc-86vxz-13"
})(["grid-area:emission;height:100%;width:100%;"]);
var ReqContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ReqContainer",
  componentId: "sc-86vxz-14"
})(["grid-area:req;display:flex;margin-top:1.6rem;justify-content:space-between;align-items:center;"]);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.cfa6e6e2230078f70fec.hot-update.js.map