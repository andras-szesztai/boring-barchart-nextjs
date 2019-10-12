webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/PercentageChart.jsx":
/*!*********************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/PercentageChart.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./utils/index.js");

var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/components/PercentageChart.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var ChartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PercentageChart__ChartWrapper",
  componentId: "sc-18c8aar-0"
})(["position:relative;height:70%;width:90%;border:1px solid ", ";border-radius:20px;overflow:hidden;svg{position:absolute;rect{fill:", ";}}"], _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreyDark"], _styles__WEBPACK_IMPORTED_MODULE_5__["colorGreen"]);

var PercentageChart = function PercentageChart(_ref) {
  var data = _ref.data,
      fullCount = _ref.fullCount,
      _ref$updateDuration = _ref.updateDuration,
      updateDuration = _ref$updateDuration === void 0 ? 1000 : _ref$updateDuration;
  // const svgRef = useRef();
  var divRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var storedValues = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var prevData = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(data);
  var prevCount = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["usePrevious"])(fullCount);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var initVis, updateData;
  var dims = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useSvgResize"])(divRef);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (dims.width && dims.height && data && !init) {
      initVis();
      setInit(true);
    }
  }, [data, dims.height, dims.width, init, initVis]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {//console.log('dims', dims)
  }, [dims]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (init && prevData !== data) {
      if (prevCount !== fullCount) {
        resetChart(); // updateData()
      } else {
        updateData();
      }
    }
  }, [data, init, prevData, updateData, fullCount, prevCount, resetChart]);

  initVis = function initVis() {
    var area = Object(d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"])(divRef.current);

    var _createUpdateSvg = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createUpdateSvg"])({
      area: area,
      dims: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dims, {
        height: dims.height
      }),
      append: true
    }),
        chartArea = _createUpdateSvg.chartArea;

    chartArea.append('rect').attr('x', 0).attr('y', 0).attr('height', dims.height).attr('width', 0);
    storedValues.current = {
      area: area,
      chartArea: chartArea
    };
    updateRect(updateDuration);
  };

  updateData = function updateData() {
    updateRect(updateDuration);
  };

  var resetChart = function resetChart() {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').transition('toFull').duration(500).ease(d3_ease__WEBPACK_IMPORTED_MODULE_6__["easeCubicInOut"]).attr('width', dims.width); // .transition('toZero')
    // .delay(500)
    // .duration(0)
    // .attr('width', 0)
  };

  var updateDims = function updateDims() {};

  var updateRect = function updateRect(duration) {
    var chartArea = storedValues.current.chartArea;
    chartArea.select('rect').transition().duration(duration).ease(d3_ease__WEBPACK_IMPORTED_MODULE_6__["easeCubicInOut"]).attr('width', dims.width * (data - fullCount));
  };

  return __jsx(ChartWrapper, {
    ref: divRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PercentageChart);

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.d746f00731b67b6633e7.hot-update.js.map