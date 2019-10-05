webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/furnitureBankReducer/reducer.js":
/*!***********************************************!*\
  !*** ./store/furnitureBankReducer/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./store/furnitureBankReducer/types.js");
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json");
var _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json */ "./static/data/chartDataSets/FurnitureBank2019/coordinatesMaster.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json");
var _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/donationsData.json */ "./static/data/chartDataSets/FurnitureBank2019/donationsData.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json");
var _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/familyData.json */ "./static/data/chartDataSets/FurnitureBank2019/familyData.json", 1);
/* harmony import */ var _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/data/chartDataSets/FurnitureBank2019/productList.json */ "./static/data/chartDataSets/FurnitureBank2019/productList.json");
var _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/data/chartDataSets/FurnitureBank2019/productList.json */ "./static/data/chartDataSets/FurnitureBank2019/productList.json", 1);
/* harmony import */ var _utils_reducerUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/reducerUtils */ "./store/utils/reducerUtils.js");




var _createReducer;







var initialState = {
  selectedItems: [],
  coordinatesData: _static_data_chartDataSets_FurnitureBank2019_coordinatesMaster_json__WEBPACK_IMPORTED_MODULE_4__,
  donationsData: _static_data_chartDataSets_FurnitureBank2019_donationsData_json__WEBPACK_IMPORTED_MODULE_5__,
  familyData: _static_data_chartDataSets_FurnitureBank2019_familyData_json__WEBPACK_IMPORTED_MODULE_6__,
  productList: _static_data_chartDataSets_FurnitureBank2019_productList_json__WEBPACK_IMPORTED_MODULE_7__
};

var updateFilter = function updateFilter(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    filter: payload.filter
  });
};

var addItem = function addItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.selectedItems), [{
      name: payload.item,
      quantity: 1
    }])
  });
};

var incrementItem = function incrementItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.selectedItems.filter(function (el) {
      return el.name !== payload.item;
    })), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.selectedItems.find(function (el) {
      return el.name === payload.item;
    }), {
      quantity: state.selectedItems.find(function (el) {
        return el.name === payload.item;
      }).quantity + 1
    })])
  });
};

var decrementItem = function decrementItem(state, payload) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    selectedItems: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.selectedItems.filter(function (el) {
      return el.name !== payload.item;
    })), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.selectedItems.find(function (el) {
      return el.name === payload.item;
    }), {
      quantity: state.selectedItems.find(function (el) {
        return el.name === payload.item;
      }).quantity - 1
    })])
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_reducerUtils__WEBPACK_IMPORTED_MODULE_8__["createReducer"])(initialState, (_createReducer = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FILTER"], updateFilter), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["ADD_ITEM"], addItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["INCREMENT_ITEM"], incrementItem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, _types__WEBPACK_IMPORTED_MODULE_3__["DECREMENT_ITEM"], decrementItem), _createReducer)));

/***/ }),

/***/ "./store/furnitureBankReducer/types.js":
/*!*********************************************!*\
  !*** ./store/furnitureBankReducer/types.js ***!
  \*********************************************/
/*! exports provided: INCREMENT, DECREMENT, UPDATE_FILTER, ADD_ITEM, DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_ITEM", function() { return DECREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_ITEM", function() { return INCREMENT_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var UPDATE_FILTER = 'UPDATE_FILTER';
var ADD_ITEM = 'ADD_ITEM';
var DECREMENT_ITEM = 'DECREMENT_ITEM';
var INCREMENT_ITEM = 'INCREMENT_ITEM';
var REMOVE_ITEM = 'REMOVE_ITEM';

/***/ })

})
//# sourceMappingURL=_app.js.90d5dd6bf5d1370ba723.hot-update.js.map