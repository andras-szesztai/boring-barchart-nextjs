webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.jsx":
/*!************************************************!*\
  !*** ./containers/FurnitureBank2019/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var _components_Map_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Map/styles */ "./containers/FurnitureBank2019/components/Map/styles.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var MapPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Paper"]).withConfig({
  displayName: "FurnitureBank2019__MapPaper",
  componentId: "hxtavg-0"
})(["height:100%;width:100%;"]);

var Dashboard = function Dashboard() {
  var filteredCoordinates = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_5__["selectFilteredCoordinates"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      initMap = _useState[0],
      setInitMap = _useState[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var viewport = {
    width: "100%",
    height: "100%",
    latitude: 43.66107,
    longitude: -79.477015,
    zoom: 8
  };
  console.log(lodash__WEBPACK_IMPORTED_MODULE_10___default.a.groupBy(filteredCoordinates, "postal_code"));

  var handleMapLoaded = function handleMapLoaded() {
    mapRef.current.getMap().addSource(_components_Map_styles__WEBPACK_IMPORTED_MODULE_9__["HEATMAP_SOURCE_ID"], {
      type: "geojson",
      data: makeGeoJSON(filteredCoordinates)
    });
    mapRef.current.getMap().addLayer(_components_Map_styles__WEBPACK_IMPORTED_MODULE_9__["heatMapStyles"]);
    setInitMap(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (initMap) {
      mapRef.current.getMap().getSource(_components_Map_styles__WEBPACK_IMPORTED_MODULE_9__["HEATMAP_SOURCE_ID"]).setData(makeGeoJSON(filteredCoordinates));
    }
  }, [filteredCoordinates, initMap]);

  var makeGeoJSON = function makeGeoJSON(data) {
    if (!data) return undefined;
    return {
      type: "FeatureCollection",
      features: data.map(function (feature) {
        return {
          type: "Feature",
          properties: {
            id: feature.postal_code
          },
          geometry: {
            type: "Point",
            coordinates: feature.coors ? [feature.coors.longitude, feature.coors.latitude, 0] : [0, 0, 0]
          }
        };
      })
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/index.js":
/*!******************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/index.js ***!
  \******************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media, MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, MainTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreen", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRedDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRedDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorRed", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorRed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyLight", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyLight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGreyDark", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["colorGreyDark"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__["media"]; });

/* harmony import */ var _styledContainers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MainContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["DashboardContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LogoContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PanelContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ChartsContainer"]; });

/* harmony import */ var _styledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["MainTitle"]; });








/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer */
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:  \"title panel\";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 80%;\n    margin: 2.5rem 0;\n\n    grid-template-columns: 1fr;\n    grid-template-rows: 200px 1fr;\n    grid-template-areas:  \"control\"\n                          \"charts\";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["margin:0;padding:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["testBorder"]);
var DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject()));
var ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";padding:", ";", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject2()));
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;display:flex;justify-content:center;align-items:flex-start;padding:", ";img{width:100%;}"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]);
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";grid-template-rows:50px 1fr;grid-template-areas:\"title\" \"panel\";"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]);
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
})(["display:grid;grid-area:charts;grid-template-rows:repeat(2,1fr) 50px;grid-template-areas:\"soc\" \"env\" \"req\";"]);
var SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-template-rows:50px 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\""]);
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MapContainer",
  componentId: "sc-86vxz-8"
})(["grid-area:map;height:100%;width:100%;", ";"], _material_ui_system__WEBPACK_IMPORTED_MODULE_4__["border"]);
var FamilyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__FamilyContainer",
  componentId: "sc-86vxz-9"
})(["grid-area:families;height:100%;width:100%;", ";"], _material_ui_system__WEBPACK_IMPORTED_MODULE_4__["border"]);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.7bf695fb9e35b9cada7a.hot-update.js.map