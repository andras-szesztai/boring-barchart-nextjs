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
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var MapPaper = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Paper"]).withConfig({
  displayName: "FurnitureBank2019__MapPaper",
  componentId: "hxtavg-0"
})(["height:100%;width:100%;"]);
var ReqButton = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["styled"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"])({
  background: _styles__WEBPACK_IMPORTED_MODULE_2__["colorRedDark"],
  color: 'white'
});
var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  };
});

var Dashboard = function Dashboard() {
  var classes = useStyles();
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
      lineNumber: 103
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["MapContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(MapPaper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }))), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_6__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    spec: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Thank you!"), __jsx(ReqButton, {
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
false,

/***/ "./node_modules/@material-ui/icons/Send.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Send.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.f48f1d339ff5cdc53bfe.hot-update.js.map