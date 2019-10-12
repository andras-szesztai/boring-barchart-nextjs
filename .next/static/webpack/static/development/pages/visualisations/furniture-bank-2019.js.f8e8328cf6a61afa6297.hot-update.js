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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./containers/FurnitureBank2019/components/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var _styles_styledElements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony import */ var _components_PersonsIcons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PersonsIcons */ "./containers/FurnitureBank2019/components/PersonsIcons.jsx");
/* harmony import */ var _styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/styledContainers */ "./containers/FurnitureBank2019/styles/styledContainers.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles */ "./styles/index.js");
/* harmony import */ var _components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ConvertedNumber */ "./components/ConvertedNumber/index.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      background: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
      color: "white",
      fontSize: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeM"],
      "&:hover": {
        background: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
        color: "white"
      }
    }
  };
});
var AVG_DONATION_VALUE = 735;

var Dashboard = function Dashboard() {
  var classes = useStyles();
  var totalPrice = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_14__["selectAllSelectedPrice"]);
  var perc = totalPrice / AVG_DONATION_VALUE;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["SocChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "What is the estimated social impact of your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["MapContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    gridArea: "families",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FamilyContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Who will be likely to receive your donation?"), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    noData: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_components_PersonsIcons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    gridArea: "value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ValueContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ChartTitle"], {
    contained: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "What is the estimated value of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: totalPrice,
    size: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeXL"],
    weight: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
    animate: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_styles_styledContainers__WEBPACK_IMPORTED_MODULE_10__["DonationPercentageContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_11__["FlexContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_components_ConvertedNumber__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: perc,
    size: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontSizeXL"],
    weight: _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_7__["fontWeightL"],
    color: _styles__WEBPACK_IMPORTED_MODULE_4__["colorGreen"],
    animate: true,
    perc: true,
    prefix: "$",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["EnvChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "What is the estimated environmental impact of your donation?"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["LandFillContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["EmissionContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_styles_styledElements__WEBPACK_IMPORTED_MODULE_8__["ChartPaper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["ReqContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: classes.button,
    variant: "contained",
    disableRipple: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Request a Pickup", __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small",
    className: classes.rightIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./containers/FurnitureBank2019/styles/index.js":
/*!******************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/index.js ***!
  \******************************************************/
/*! exports provided: colorGreen, colorRedDark, colorRed, colorGreyLight, colorGreyDark, media, MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer, MainTitle, ChartTitle, ChartPaper */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["SocChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["MapContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FamilyContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["FamilyContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["PersonsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ValueContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EnvChartsContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["LandFillContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["EmissionContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return _styledContainers__WEBPACK_IMPORTED_MODULE_1__["ReqContainer"]; });

/* harmony import */ var _styledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledElements */ "./containers/FurnitureBank2019/styles/styledElements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["MainTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartTitle", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartPaper", function() { return _styledElements__WEBPACK_IMPORTED_MODULE_2__["ChartPaper"]; });








/***/ }),

/***/ "./containers/FurnitureBank2019/styles/styledContainers.js":
/*!*****************************************************************!*\
  !*** ./containers/FurnitureBank2019/styles/styledContainers.js ***!
  \*****************************************************************/
/*! exports provided: MainContainer, DashboardContainer, ControlsContainer, LogoContainer, ControlContainer, PanelContainer, ChartsContainer, SocChartsContainer, MapContainer, FamilyContainer, PersonsContainer, ValueContainer, DonationPercentageContainer, DonationPercentageChart, EnvChartsContainer, LandFillContainer, EmissionContainer, ReqContainer */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsContainer", function() { return PersonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueContainer", function() { return ValueContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageContainer", function() { return DonationPercentageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationPercentageChart", function() { return DonationPercentageChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvChartsContainer", function() { return EnvChartsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandFillContainer", function() { return LandFillContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmissionContainer", function() { return EmissionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqContainer", function() { return ReqContainer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/sharedStyles */ "./styles/sharedStyles.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables */ "./containers/FurnitureBank2019/styles/variables.js");


function _templateObject19() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: ", " repeat(2, 1fr);\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"title\"\n      \"landfill\"\n      \"emission\";\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: repeat(2, 1fr);\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: ", " repeat(3, 1fr);\n    grid-template-columns: 1fr;\n    grid-template-areas:\n      \"title\"\n      \"map\"\n      \"families\"\n      \"value\"\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: ", ";\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 170px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 160px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 150px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: ", ";\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    grid-column-gap: ", ";\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    img {\n      width: 250px;\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: ", ";\n    img {\n      width: 300px;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0;\n    align-items: center;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-rows: 70px 1fr;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px 1fr;\n    grid-template-areas:  \n      \"title\" \n      \"panel\";\n    grid-column-gap: 0;\n    grid-row-gap: ", ";\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas:  \"title panel\";\n    padding: 0;\n    grid-column-gap: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 1400px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    padding-top: 0;\n    padding-bottom: 2rem;\n    grid-template-rows: 300px 1fr;\n    height: 1400px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    height: 850px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 200px 1fr;\n    grid-template-areas:  \n      \"control\"\n      \"charts\";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MainContainer",
  componentId: "sc-86vxz-0"
})(["width:100vw;"]);
var DashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DashboardContainer",
  componentId: "sc-86vxz-1"
})(["width:90%;height:650px;max-width:1440px;margin:0 auto;padding-top:4rem;padding-bottom:4rem;display:grid;grid-template-columns:300px 1fr;grid-template-areas:\"control charts\";", " ", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject2()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject3()));
var ControlsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlsContainer",
  componentId: "sc-86vxz-2"
})(["display:grid;grid-area:control;grid-template-rows:100px 1fr;grid-template-columns:1fr;grid-template-areas:\"title\" \"panel\";", " padding:", ";", " ", " ", ""], ''
/* ${testBorder}; */
, _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject4(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject5(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject6()));
var LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LogoContainer",
  componentId: "sc-86vxz-3"
})(["grid-area:title;padding:", ";display:flex;align-items:flex-start;justify-content:center;background:#fff;", " img{width:100%;}", " ", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject7()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject8(), _variables__WEBPACK_IMPORTED_MODULE_3__["colorGreen"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject9()));
var ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ControlContainer",
  componentId: "sc-86vxz-4"
})(["grid-area:panel;display:grid;padding:", ";", " grid-template-rows:", " 1fr;grid-template-areas:\"title\" \"panel\";", " ", ""], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject10(), _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"]), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject11(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]));
var PanelContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__PanelContainer",
  componentId: "sc-86vxz-5"
})(["display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:490px;overflow-y:scroll;", " &::-webkit-scrollbar{display:none;}grid-area:panel;", " ", " ", ""], ''
/* ${testBorder}; */
, _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject12()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject13()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].extraSmall(_templateObject14()));
var ChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ChartsContainer",
  componentId: "sc-86vxz-6"
})(["display:grid;grid-area:charts;grid-row-gap:", ";padding:", ";grid-template-rows:3fr 2fr ", ";grid-template-areas:\"soc\" \"env\" \"req\";", " ", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].medium(_templateObject15()), _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject16(), _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_1__["paddingS"]));
var SocChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__SocChartsContainer",
  componentId: "sc-86vxz-7"
})(["display:grid;grid-area:soc;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr 100px;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"map families\" \"value value\";", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject17(), _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]));
var MapContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__MapContainer",
  componentId: "sc-86vxz-8"
})(["grid-area:map;height:100%;width:100%;"]);
var FamilyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__FamilyContainer",
  componentId: "sc-86vxz-9"
})(["display:grid;grid-template-columns:repeat(2,2fr);grid-template-areas:\"chart persons\";height:100%;width:100%;"]);
var PersonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__PersonsContainer",
  componentId: "sc-86vxz-10"
})(["grid-area:persons;display:flex;align-items:center;justify-content:center;", " div{display:flex;align-items:flex-end;justify-content:center;}img{margin-right:1rem;}.adult{height:100px;}.child{height:65px;}"], ''
/* ${testBorder}; */
);
var ValueContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ValueContainer",
  componentId: "sc-86vxz-11"
})(["display:grid;grid-template-columns:2fr 3fr;height:100%;", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject18()));
var DonationPercentageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__DonationPercentageContainer",
  componentId: "sc-86vxz-12"
})(["display:grid;grid-template-columns:3fr 2fr;"]);
var DonationPercentageChart = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"];
var EnvChartsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EnvChartsContainer",
  componentId: "sc-86vxz-13"
})(["display:grid;grid-area:env;grid-row-gap:", ";grid-column-gap:", ";grid-template-rows:", " 1fr;grid-template-columns:repeat(2,1fr);grid-template-areas:\"title title\" \"landfill emission\";", ""], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapS"], _variables__WEBPACK_IMPORTED_MODULE_3__["gridGapM"], _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"], _variables__WEBPACK_IMPORTED_MODULE_3__["media"].small(_templateObject19(), _variables__WEBPACK_IMPORTED_MODULE_3__["titleHeightM"]));
var LandFillContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__LandFillContainer",
  componentId: "sc-86vxz-14"
})(["grid-area:landfill;height:100%;width:100%;"]);
var EmissionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__EmissionContainer",
  componentId: "sc-86vxz-15"
})(["grid-area:emission;height:100%;width:100%;"]);
var ReqContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "styledContainers__ReqContainer",
  componentId: "sc-86vxz-16"
})(["grid-area:req;display:flex;margin-top:1.6rem;justify-content:flex-end;align-items:center;"]);

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! exports provided: FlexContainer, defaultBreakPoints, createBreakPoints, paddingXL, paddingL, paddingM, paddingS, paddingXS, testBorder, fontWeightXS, fontWeightS, fontWeightM, fontWeightL, fontWeightXL, fontSizeXXL, fontSizeXL, fontSizeL, fontSizeM, fontSizeS, fontSizeXS, fontFamilyMain, colorGrey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sharedStyledComponents */ "./styles/sharedStyledComponents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return _sharedStyledComponents__WEBPACK_IMPORTED_MODULE_0__["FlexContainer"]; });

/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaQueries */ "./styles/mediaQueries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBreakPoints", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_1__["createBreakPoints"]; });

/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sharedStyles */ "./styles/sharedStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paddingXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["paddingXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testBorder", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["testBorder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontWeightXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontWeightXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeL", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeM", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontSizeXS", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontSizeXS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFamilyMain", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["fontFamilyMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorGrey", function() { return _sharedStyles__WEBPACK_IMPORTED_MODULE_2__["colorGrey"]; });








/***/ }),

/***/ "./styles/sharedStyledComponents.js":
/*!******************************************!*\
  !*** ./styles/sharedStyledComponents.js ***!
  \******************************************/
/*! exports provided: FlexContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexContainer", function() { return FlexContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "sharedStyledComponents__FlexContainer",
  componentId: "sc-1q45dof-0"
})(["display:flex;flex-direction:", ";justify-content:", ";;align-items:", ";"], function (props) {
  return props.direction || 'row';
}, function (props) {
  return props.justify || 'center';
}, function (props) {
  return props.align || 'center';
});

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.f8e8328cf6a61afa6297.hot-update.js.map