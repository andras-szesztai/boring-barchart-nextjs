webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/components/Map/styles.js":
/*!***************************************************************!*\
  !*** ./containers/FurnitureBank2019/components/Map/styles.js ***!
  \***************************************************************/
/*! exports provided: HEATMAP_SOURCE_ID, heatMapStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEATMAP_SOURCE_ID", function() { return HEATMAP_SOURCE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heatMapStyles", function() { return heatMapStyles; });
var HEATMAP_SOURCE_ID = "earthquakes-source";
var MAX_ZOOM_LEVEL = 20;
var heatMapStyles = {
  id: "heatmap-layer",
  source: HEATMAP_SOURCE_ID,
  maxzoom: MAX_ZOOM_LEVEL,
  type: "heatmap",
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": ["interpolate", ["linear"], ["get", "mag"], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, MAX_ZOOM_LEVEL, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": ["interpolate", ["linear"], ["heatmap-density"], 0, "rgba(33,102,172,0)", 0.2, "rgb(103,169,207)", 0.4, "rgb(209,229,240)", 0.6, "rgb(253,219,199)", 0.8, "rgb(255,201,101)", 1, "rgb(239,138,98)"],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, MAX_ZOOM_LEVEL, 20],
    // // Transition from heatmap to circle layer by zoom level
    "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 10, 1, 20, 0]
  }
};

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.adc3e3475dbd3a71b551.hot-update.js.map