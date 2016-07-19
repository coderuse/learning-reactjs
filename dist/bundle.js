/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Hello_1 = __webpack_require__(3);
	var ShoppingLists_1 = __webpack_require__(4);
	var itemList = [
	    {
	        key: 1,
	        name: 'Sleeping Bag w/ Stuff Sack',
	        quantity: 1,
	        price: 44.99
	    },
	    {
	        key: 2,
	        name: 'Chocolate Energy Bar',
	        quantity: 4,
	        price: 2.99 * 4
	    },
	    {
	        key: 3,
	        name: '2-Person Polyethylene Tent',
	        quantity: 1,
	        price: 104.33
	    }
	];
	ReactDOM.render(React.createElement("div", {className: "container"}, React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), React.createElement(ShoppingLists_1.ShoppingList, {items: itemList})), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!");
	    };
	    return Hello;
	}(React.Component));
	exports.Hello = Hello;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/index.d.ts" />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Helpers = __webpack_require__(5);
	var ShoppingItem = (function (_super) {
	    __extends(ShoppingItem, _super);
	    function ShoppingItem() {
	        _super.apply(this, arguments);
	    }
	    ShoppingItem.prototype.render = function () {
	        return React.createElement("table", {className: "table"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {colSpan: "2"}, React.createElement("h3", null, this.props.name))), React.createElement("tr", null, React.createElement("td", null, "Price"), React.createElement("td", null, Helpers.Utils.priceToUSDString(this.props.price))), React.createElement("tr", null, React.createElement("td", null, "Quantity"), React.createElement("td", null, this.props.quantity))));
	    };
	    ShoppingItem.prototype.componentWillMount = function () {
	        console.log('componentWillMount');
	    };
	    ShoppingItem.prototype.componentDidMount = function () {
	        console.log('componentDidMount');
	    };
	    ShoppingItem.prototype.componentWillReceiveProps = function (newProps) {
	        console.log(newProps);
	    };
	    ShoppingItem.prototype.componentWillUpdate = function (newProps, newState) {
	        console.log(newProps);
	        console.log(newState);
	    };
	    ShoppingItem.prototype.componentDidUpdate = function (oldProps, oldState) {
	        console.log(oldProps);
	        console.log(oldState);
	    };
	    ShoppingItem.prototype.componentWillUnmount = function () {
	        console.log('componentWillUnmount');
	    };
	    return ShoppingItem;
	}(React.Component));
	exports.ShoppingItem = ShoppingItem;
	var ShoppingPriceTotal = (function (_super) {
	    __extends(ShoppingPriceTotal, _super);
	    function ShoppingPriceTotal() {
	        _super.apply(this, arguments);
	    }
	    ShoppingPriceTotal.prototype.render = function () {
	        return React.createElement("table", {className: "table"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Total")), React.createElement("td", null, this.props.items.reduce(function (a, b) { return a + b.price; }, 0)))));
	    };
	    return ShoppingPriceTotal;
	}(React.Component));
	exports.ShoppingPriceTotal = ShoppingPriceTotal;
	var ShoppingList = (function (_super) {
	    __extends(ShoppingList, _super);
	    function ShoppingList() {
	        _super.apply(this, arguments);
	    }
	    ShoppingList.prototype.render = function () {
	        return React.createElement("div", null, this.props.items.map(function (row, i) {
	            return React.createElement(ShoppingItem, __assign({}, row), " ");
	        }), React.createElement(ShoppingPriceTotal, {items: this.props.items}));
	    };
	    return ShoppingList;
	}(React.Component));
	exports.ShoppingList = ShoppingList;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.priceToUSDString = function (price) {
	        return '$' + price.toFixed(2);
	    };
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map