(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/components/Posts.js":
/*!*********************************!*\
  !*** ./app/components/Posts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Posts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var _PostsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostsList */ \"./app/components/PostsList.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction fetchReducer(state, action) {\n  if (action.type === 'success') {\n    return {\n      posts: action.posts,\n      loading: false,\n      error: null\n    };\n  }\n\n  if (action.type === 'failure') {\n    return _objectSpread({}, state, {\n      error: action.message,\n      loading: false\n    });\n  }\n}\n\nvar initialState = {\n  posts: null,\n  error: null,\n  loading: true\n};\n\nfunction handleFetch(type) {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(fetchReducer, initialState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  Object(_utils_api__WEBPACK_IMPORTED_MODULE_3__[\"fetchMainPosts\"])(type).then(function (posts) {\n    return dispatch({\n      type: 'success',\n      posts: posts\n    });\n  })[\"catch\"](function (message) {\n    return dispatch({\n      type: 'failure',\n      message: message\n    });\n  });\n  return {\n    posts: state.posts,\n    loading: state.loading,\n    error: state.error\n  };\n}\n\nfunction Posts(type) {\n  var posts = initialState.posts,\n      loading = initialState.loading,\n      error = initialState.error;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    handleFetch(type);\n  }, [type]);\n\n  if (loading === true) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n  }\n\n  if (error) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"center-text error\"\n    }, error);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    posts: posts\n  });\n}\nPosts.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'new'])\n};\n\n//# sourceURL=webpack:///./app/components/Posts.js?");

/***/ }),

/***/ "./app/components/PostsList.js":
/*!*************************************!*\
  !*** ./app/components/PostsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostsList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostMetaInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostMetaInfo */ \"./app/components/PostMetaInfo.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ \"./app/components/Title.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post */ \"./app/components/Post.js\");\n\n\n\n\n\nfunction PostsList(_ref) {\n  var posts = _ref.posts;\n\n  if (posts.length === 0) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"center-text\"\n    }, \"This user hasn't posted yet\");\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, posts.map(function (post) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: post.id,\n      className: \"post\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      url: post.url,\n      title: post.title,\n      id: post.id\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostMetaInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      by: _Post__WEBPACK_IMPORTED_MODULE_4__[\"default\"].by,\n      time: post.time,\n      id: post.id,\n      descendants: post.descendants\n    }));\n  }));\n}\nPostsList.propTypes = {\n  posts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n\n//# sourceURL=webpack:///./app/components/PostsList.js?");

/***/ })

}]);