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

	'use strict';
	
	var _toolboxFront = __webpack_require__(1);
	
	var _routes = __webpack_require__(2);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _navigation = __webpack_require__(7);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var conf = __webpack_require__(8);
	
	// Load toolbox for import function
	
	
	// import Routes
	
	
	// import Menu navigation for the front
	
	
	__webpack_require__(9);
	
	// import Config
	// import Config from './routes/config';
	
	// Add routes on global app
	(0, _toolboxFront.setRoutes)(_routes2.default);
	
	// Add navigation on global app
	(0, _toolboxFront.setNavigation)(_navigation2.default, conf.name);
	
	// Add config plugin
	// setConfig(conf.name, Config);
	
	
	// event for delete plugin
	window.addEventListener(conf.name + ':delete', function (e) {
	  (0, _toolboxFront.deleteRoutes)(_routes2.default);
	  (0, _toolboxFront.deleteNavigation)(_navigation2.default);
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Toolbox of front for add, remove navigation and routes on General app of react
	 */
	
	var app = window.App;
	
	function setNavigation(navigation, name) {
	  if (name) {
	    navigation = navigation.map(function (el) {
	      el.plugin = name;
	      return el;
	    });
	  }
	  var navApp = app.state.navigation;
	  navApp = navApp.concat(navigation);
	  app.setState({ navigation: navApp });
	}
	
	function setRoutes(routes) {
	  var routesApp = app.state.routes;
	  routesApp = routesApp.concat(routes);
	  app.setState({ routes: routesApp });
	}
	
	function deleteNavigation(navigation) {
	  var navApp = app.state.navigation;
	  navApp = navApp.filter(function (nav) {
	    return -1 === navigation.indexOf(nav);
	  });
	  app.setState({ navigation: navApp });
	}
	
	function deleteRoutes(routes) {
	  var routesApp = app.state.routes;
	  routesApp = routesApp.filter(function (route) {
	    return -1 === routes.indexOf(route);
	  });
	  app.setState({ routes: routesApp });
	}
	
	function setConfig(name, config) {
	  app.setState({ config: _defineProperty({}, name, config) });
	}
	
	module.exports = {
	  setNavigation: setNavigation,
	  setRoutes: setRoutes,
	  deleteNavigation: deleteNavigation,
	  deleteRoutes: deleteRoutes,
	  setConfig: setConfig
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Home = __webpack_require__(3);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = [{
		pattern: '/gpio',
		component: _Home2.default,
		name: 'home'
	}];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Create = __webpack_require__(4);
	
	var _Create2 = _interopRequireDefault(_Create);
	
	var _List = __webpack_require__(6);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);
	
		function Home() {
			_classCallCheck(this, Home);
	
			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}
	
		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ style: { display: 'flex' } },
					React.createElement(
						Ui.List,
						{ style: { borderRight: '1px solid ' + Colors.grey300 } },
						React.createElement(
							Ui.Subheader,
							null,
							'Menu Gpio'
						),
						React.createElement(
							ReactRouter.Link,
							{ to: '/gpio/create' },
							function (_ref) {
								var isActive = _ref.isActive;
								var location = _ref.location;
								var href = _ref.href;
								var onClick = _ref.onClick;
								var transition = _ref.transition;
								return React.createElement(Ui.ListItem, { onClick: onClick, href: href, primaryText: 'Create logics' });
							}
						),
						React.createElement(
							ReactRouter.Link,
							{ to: '/gpio/list' },
							function (_ref2) {
								var isActive = _ref2.isActive;
								var location = _ref2.location;
								var href = _ref2.href;
								var onClick = _ref2.onClick;
								var transition = _ref2.transition;
								return React.createElement(Ui.ListItem, { onClick: onClick, href: href, primaryText: 'List logics' });
							}
						)
					),
					React.createElement(
						'div',
						{ style: { flex: 1, padding: '0px 10px' } },
						React.createElement(ReactRouter.Match, { pattern: '/gpio/create', exactly: true, component: _Create2.default }),
						React.createElement(ReactRouter.Match, { pattern: '/gpio/list', exactly: true, component: _List2.default })
					)
				);
			}
		}]);
	
		return Home;
	}(React.Component);
	
	exports.default = Home;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _SelectPin = __webpack_require__(5);
	
	var _SelectPin2 = _interopRequireDefault(_SelectPin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Create = function (_React$Component) {
		_inherits(Create, _React$Component);
	
		function Create() {
			_classCallCheck(this, Create);
	
			var _this = _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).call(this));
	
			_this.state = {
				form: {
					returnState: false,
					readWrite: 'read',
					typeSwitch: null
				},
				modelController: null
			};
			_this.submit = _this.submit.bind(_this);
			return _this;
		}
	
		_createClass(Create, [{
			key: 'selectedController',
			value: function selectedController(e, index, value) {
				this.setState({ modelController: value });
			}
		}, {
			key: 'setReturnState',
			value: function setReturnState(e, value) {
				var form = this.state.form;
				form.returnState = value;
				this.setState({ form: form });
			}
		}, {
			key: 'selectedReadWrite',
			value: function selectedReadWrite(e, index, value) {
				var form = this.state.form;
				form.readWrite = value;
				this.setState({ form: form });
			}
		}, {
			key: 'selectedSwitch',
			value: function selectedSwitch(e, index, value) {
				var form = this.state.form;
				form.typeSwitch = value;
				this.setState({ form: form });
			}
		}, {
			key: 'submit',
			value: function submit(e) {
				e.stopPropagation();
				e.preventDefault();
				this.context.io.run('gpio:logic:create', this.state.form, function (data) {
					console.log(data);
					// this.setState({model: data, render: true});
				});
			}
		}, {
			key: 'setLabel',
			value: function setLabel(e, value) {
				var form = this.state.form;
				form.label = value;
				this.setState({ form: form });
			}
		}, {
			key: 'render',
			value: function render() {
				var formReturnState = void 0;
	
				if (this.state.form.returnState) {
					formReturnState = React.createElement(_SelectPin2.default, { controller: this.state.modelController });
				}
	
				return React.createElement(
					'div',
					null,
					React.createElement(
						'form',
						{ onSubmit: this.submit },
						React.createElement(Ui.TextField, { floatingLabelText: 'Logic name', onChange: this.setLabel.bind(this) }),
						React.createElement('br', null),
						React.createElement(
							Ui.SelectField,
							{ floatingLabelText: 'Select model micro-controller', value: this.state.modelController, onChange: this.selectedController.bind(this) },
							React.createElement(Ui.MenuItem, { value: 1, primaryText: 'RPI zero' }),
							React.createElement(Ui.MenuItem, { value: 2, primaryText: 'RPI 1 model A' }),
							React.createElement(Ui.MenuItem, { value: 3, primaryText: 'RPI 1 model B' }),
							React.createElement(Ui.MenuItem, { value: 4, primaryText: 'RPI 2 model A' }),
							React.createElement(Ui.MenuItem, { value: 5, primaryText: 'RPI 2 model B' }),
							React.createElement(Ui.MenuItem, { value: 6, primaryText: 'RPI 3 model A' }),
							React.createElement(Ui.MenuItem, { value: 7, primaryText: 'RPI 3 model B' })
						),
						React.createElement('br', null),
						React.createElement(
							Ui.SelectField,
							{ floatingLabelText: 'Input/Output', value: this.state.form.readWrite, onChange: this.selectedReadWrite.bind(this) },
							React.createElement(Ui.MenuItem, { value: 'read', primaryText: 'Input' }),
							React.createElement(Ui.MenuItem, { value: 'write', primaryText: 'Output' })
						),
						React.createElement('br', null),
						React.createElement(
							Ui.SelectField,
							{ floatingLabelText: 'Type of switch', value: this.state.form.typeSwitch, disabled: this.state.form.readWrite === 'write' ? false : true, onChange: this.selectedSwitch.bind(this) },
							React.createElement(Ui.MenuItem, { value: 'switch', primaryText: 'Simple switch' }),
							React.createElement(Ui.MenuItem, { value: 'push', primaryText: 'Push-button switch' })
						),
						React.createElement('br', null),
						React.createElement(_SelectPin2.default, { controller: this.state.modelController }),
						React.createElement(Ui.Toggle, { label: 'Return State', onToggle: this.setReturnState.bind(this), value: this.state.form.returnState }),
						formReturnState,
						React.createElement(Ui.RaisedButton, { label: Lang.save, primary: true, style: { marginTop: '20px', float: 'right' }, type: 'submit' })
					)
				);
			}
		}]);
	
		return Create;
	}(React.Component);
	
	Create.contextTypes = {
		io: React.PropTypes.object
	};
	
	exports.default = Create;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var options = {
	  rpi: [{ value: 3, label: 'BCM 2 (SDA)' }, { value: 5, label: 'BCM 3 (SCL)' }, { value: 7, label: 'BCM 4 (GPCLK0)' }, { value: 8, label: 'BCM 14 (TXD)' }, { value: 10, label: 'BCM 15 (RXD)' }, { value: 11, label: 'BCM 17' }, { value: 12, label: 'BCM 18 (PWM0)' }, { value: 13, label: 'BCM 27' }, { value: 15, label: 'BCM 22' }, { value: 16, label: 'BCM 23' }, { value: 18, label: 'BCM 24' }, { value: 19, label: 'BCM 10 (MOSI)' }, { value: 21, label: 'BCM 9 (MISO)' }, { value: 22, label: 'BCM 25' }, { value: 23, label: 'BCM 11 (SCLK)' }, { value: 24, label: 'BCM 8 (CE0)' }, { value: 26, label: 'BCM 7 (CE1)' }, { value: 27, label: 'BCM 0 (ID_SD)' }, { value: 28, label: 'BCM 1 (ID_SC)' }, { value: 29, label: 'BCM 5' }, { value: 31, label: 'BCM 6' }, { value: 32, label: 'BCM 12 (PWM0)' }, { value: 33, label: 'BCM 13 (PWM1)' }, { value: 35, label: 'BCM 19 (MISO)' }, { value: 36, label: 'BCM 16' }, { value: 37, label: 'BCM 26' }, { value: 38, label: 'BCM 20 (MOSI)' }, { value: 40, label: 'BCM 21 (SCLK)' }],
	  arduino: [{ value: 1, label: 'pin1' }]
	};
	
	var SelectPin = function (_React$Component) {
	  _inherits(SelectPin, _React$Component);
	
	  function SelectPin() {
	    var _ref;
	
	    _classCallCheck(this, SelectPin);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, (_ref = SelectPin.__proto__ || Object.getPrototypeOf(SelectPin)).call.apply(_ref, [this].concat(args)));
	
	    _this.state = {
	      options: []
	    };
	    return _this;
	  }
	
	  _createClass(SelectPin, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      var optionsSelect = [];
	      switch (props.controller) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	          optionsSelect = options.rpi;
	          break;
	        case 8:
	          optionsSelect = options.arduino;
	          break;
	        default:
	
	      }
	      this.setState({ options: optionsSelect });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Ui.SelectField,
	        { floatingLabelText: 'Pin', disabled: this.state.options.length ? false : true },
	        this.state.options.map(function (item, i) {
	          return React.createElement(Ui.MenuItem, { key: i, value: item.value, primaryText: item.label + ' (physical ' + item.value + ')' });
	        })
	      );
	    }
	  }]);
	
	  return SelectPin;
	}(React.Component);
	
	exports.default = SelectPin;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Loading = __webpack_require__(12);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_React$Component) {
		_inherits(List, _React$Component);
	
		function List() {
			_classCallCheck(this, List);
	
			var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));
	
			_this.state = {
				logics: [],
				render: false
			};
			return _this;
		}
	
		_createClass(List, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this2 = this;
	
				this.context.io.run('gpio:logic:list', {}, function (data) {
					_this2.setState({ render: true, logics: data });
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					_Loading2.default,
					{ render: this.state.render },
					React.createElement(
						Ui.Table,
						null,
						React.createElement(
							Ui.TableHeader,
							null,
							React.createElement(
								Ui.TableRow,
								null,
								React.createElement(
									Ui.TableHeaderColumn,
									null,
									'Label'
								),
								React.createElement(
									Ui.TableHeaderColumn,
									null,
									'Action'
								)
							)
						),
						React.createElement(
							Ui.TableBody,
							null,
							this.state.logics.map(function (item, i) {
								return React.createElement(
									Ui.TableRow,
									{ key: i },
									React.createElement(
										Ui.TableRowColumn,
										null,
										item.label
									),
									React.createElement(
										Ui.TableRowColumn,
										null,
										'Employed'
									)
								);
							})
						)
					)
				);
			}
		}]);
	
		return List;
	}(React.Component);
	
	List.contextTypes = {
		io: React.PropTypes.object
	};
	
	exports.default = List;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = [{
		"label": "Gpio",
		"href": "/gpio",
		"icon": "menu"
	}];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  name: 'gpio'
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var conf = __webpack_require__(8);
	
	Lang.addTrad({
	  en: _defineProperty({}, conf.name, __webpack_require__(10)),
	  fr: _defineProperty({}, conf.name, __webpack_require__(11))
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  Gpio: 'Gpio'
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  Gpio: 'Gpio'
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _style = __webpack_require__(13);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Loading = function (_React$Component) {
		_inherits(Loading, _React$Component);
	
		function Loading() {
			var _ref;
	
			_classCallCheck(this, Loading);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args)));
		}
	
		_createClass(Loading, [{
			key: 'render',
			value: function render() {
				if (this.props.render) {
					if (this.props.children.length && Array.isArray(this.props.children)) {
						return React.createElement(
							'div',
							null,
							this.props.children.map(function (el, i) {
								return el;
							})
						);
					} else {
						return React.createElement(
							'div',
							null,
							this.props.children
						);
					}
				}
				return React.createElement(Ui.CircularProgress, { style: _style.style, size: 80, thickness: 5 });
			}
		}]);
	
		return Loading;
	}(React.Component);
	
	exports.default = Loading;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports.style = {
	  left: '50%',
	  marginLeft: '-40px'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=gpio.js.map