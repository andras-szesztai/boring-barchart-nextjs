webpackHotUpdate("static/development/pages/visualisations/furniture-bank-2019.js",{

/***/ "./containers/FurnitureBank2019/index.js":
/*!***********************************************!*\
  !*** ./containers/FurnitureBank2019/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./containers/FurnitureBank2019/styles/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/furnitureBankReducer/actions */ "./store/furnitureBankReducer/actions.js");
/* harmony import */ var _store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/furnitureBankReducer/selectors */ "./store/furnitureBankReducer/selectors.js");
var _jsxFileName = "/Users/andrasszesztai/Desktop/boring-barchart-nextjs/containers/FurnitureBank2019/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import styled from 'styled-components'


 // import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import SimpleDot from "../../components/IconComponents/SimpleDot";

var Dashboard = function Dashboard() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      width = _useState[0],
      setWidth = _useState[1];

  var panelContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var panelWidth = panelContainerRef.current.clientWidth;
    !width && setWidth(panelWidth);
  }, [panelContainerRef, width]);

  var handleSelected = function handleSelected(selected) {
    dispatch(Object(_store_furnitureBankReducer_actions__WEBPACK_IMPORTED_MODULE_5__["AddItem"])(selected));
  };

  var allSelected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAllSelected"]);
  var allUnselected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_furnitureBankReducer_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAllUnselected"]);
  console.log(allSelected);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Furniture Bank 2019")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["DashboardContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["LogoContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("img", {
    src: "/static/logos/furnitureBank.svg",
    alt: "furniture bank icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["MainTitle"], {
    gridArea: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Items to Donate"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["PanelContainer"], {
    ref: panelContainerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["ItemChip"], {
    style: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["AutoComplete"], {
    data: allUnselected,
    itemKey: "product_name",
    handleSelected: handleSelected,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ChartsContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Charts"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard); // const viewport = {
//   width: "100%",
//   height: "100%",
//   latitude: 43.65107,
//   longitude: -79.347015,
//   zoom: 9
// };
// const {
//   count,
//   filter
//  } = useSelector(state => state.furnitureBankReducer)
//  const kitchen = useSelector(selectAllKitchen)
//  const livingRoomAndKitchen = useSelector(selectLivingRoomAndKitchen)
//  const filteredFurnitures = useSelector(selectFilteredFurniture)
//  const dispatch = useDispatch()
//  useEffect(() => {
//    console.log(filteredFurnitures);
//  }, [ kitchen, livingRoomAndKitchen, filteredFurnitures, filter ])
// {/* <MapContainer>
//   <ReactMapGL
//     mapboxApiAccessToken="pk.eyJ1Ijoic3plYW5kciIsImEiOiJjajlpeWxnNHUzbWNiMzNvcnF1ZGUzbG5rIn0.fk33YGLOHSZtT_CMEWoIag"
//     {...viewport}
//     mapStyle="mapbox://styles/szeandr/cje3v8qwedxub2st94yulcma7"
//   > */}
//     {/* {
//       coordinatesData.map(coor => (
//         <Marker
//           latitude={coor.latitude}
//           longitude={coor.longitude}
//         >
//           <SimpleDot widht={5} height={5} />
//         </Marker>
//       ))
//     } */}
//   {/* </ReactMapGL>
// </MapContainer> */}
// {/* <button onClick={() => dispatch(decrement())}>Decrement</button>
// <button onClick={() => dispatch(increment())}>Increment</button>
// <button onClick={() => dispatch(updateFilter('living room'))}>Living Room</button>
// <button onClick={() => dispatch(updateFilter('kitchen'))}>Kitchen</button> */}

/***/ })

})
//# sourceMappingURL=furniture-bank-2019.js.40e09cf0920034cb3266.hot-update.js.map