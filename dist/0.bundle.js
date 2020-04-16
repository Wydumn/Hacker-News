(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/components/Comment.js":
/*!***********************************!*\
  !*** ./app/components/Comment.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostMetaInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostMetaInfo */ \"./app/components/PostMetaInfo.js\");\n\n\n\nfunction Comment(_ref) {\n  var comment = _ref.comment;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"comment\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostMetaInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    comment: true,\n    by: comment.by,\n    time: comment.time,\n    id: comment.id\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    dangerouslySetInnerHTML: {\n      __html: comment.text\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./app/components/Comment.js?");

/***/ }),

/***/ "./app/components/Loading.js":
/*!***********************************!*\
  !*** ./app/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Loading; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar styles = {\n  content: {\n    fontSize: '35px',\n    position: 'absolute',\n    left: '0',\n    right: '0',\n    marginTop: '20px',\n    textAlign: 'center'\n  }\n};\nfunction Loading(speed, text) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(text),\n      _useState2 = _slicedToArray(_useState, 2),\n      content = _useState2[0],\n      setContent = _useState2[1];\n\n  var id = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    id.current = window.setInterval(function () {\n      content === text + '...' ? setContent(text) : setContent(content + '.');\n    }, speed);\n    return function () {\n      return clearInterval(id.current);\n    };\n  }, [speed, text]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: styles.content\n  }, content);\n}\nLoading.propTypes = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  speed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\nLoading.defaultProps = {\n  text: 'Loading',\n  speed: 300\n};\n\n//# sourceURL=webpack:///./app/components/Loading.js?");

/***/ }),

/***/ "./app/components/Post.js":
/*!********************************!*\
  !*** ./app/components/Post.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ \"./app/utils/api.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ \"./app/components/Loading.js\");\n/* harmony import */ var _PostMetaInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostMetaInfo */ \"./app/components/PostMetaInfo.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ \"./app/components/Title.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comment */ \"./app/components/Comment.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction fetchReducer(state, action) {\n  if (action.type === 'post') {\n    return _objectSpread({}, state, {\n      post: action.post,\n      loading: false\n    });\n  }\n\n  if (action.type === 'comment') {\n    return _objectSpread({}, state, {\n      comments: comments,\n      loadingComments: false\n    });\n  }\n\n  if (action.type === 'failure') {\n    return _objectSpread({}, state, {\n      error: action.message,\n      loadingPost: false,\n      loadingComments: false\n    });\n  }\n}\n\nvar initialState = {\n  post: null,\n  loadingPost: true,\n  comments: null,\n  loadingComments: true,\n  error: null\n};\n\nfunction fetchData(id) {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(fetchReducer, initialState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchItem\"])(id).then(function (post) {\n    dispatch({\n      type: 'post',\n      post: post\n    });\n    return Object(_utils_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchComments\"])(post.kids || []);\n  }).then(function (comments) {\n    return dispatch({\n      type: 'comment',\n      comments: comments\n    });\n  })[\"catch\"](function (message) {\n    return dispatch({\n      type: 'failure',\n      message: message\n    });\n  });\n  return {\n    post: state.post,\n    loadingPost: state.loadingPost,\n    comments: state.comments,\n    loadingComments: state.loadingComments,\n    error: state.error\n  };\n}\n\nfunction Post(_ref) {\n  var location = _ref.location;\n  var id = location.search.id;\n\n  var _fetchData = fetchData(id),\n      post = _fetchData.post,\n      loadingPost = _fetchData.loadingPost,\n      comments = _fetchData.comments,\n      loadingComments = _fetchData.loadingComments,\n      error = _fetchData.error;\n\n  if (error) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      className: \"center-text error\"\n    }, error);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loadingPost === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Fetching post\"\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"header\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    url: post.url,\n    title: post.title,\n    id: post.id\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostMetaInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    by: post.by,\n    time: post.time,\n    id: post.id,\n    descendants: post.descendants\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    dangerouslySetInnerHTML: {\n      __html: post.text\n    }\n  })), loadingComments === true ? loadingPost === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Fetching comments\"\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, comments.map(function (comment) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: comment.id,\n      comment: comment\n    });\n  })));\n}\n\n//# sourceURL=webpack:///./app/components/Post.js?");

/***/ }),

/***/ "./app/components/PostMetaInfo.js":
/*!****************************************!*\
  !*** ./app/components/PostMetaInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostMetaInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/theme */ \"./app/contexts/theme.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helpers */ \"./app/utils/helpers.js\");\n\n\n\n\n\nfunction PostMetaInfo(_ref) {\n  var by = _ref.by,\n      time = _ref.time,\n      id = _ref.id,\n      descendants = _ref.descendants;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_theme__WEBPACK_IMPORTED_MODULE_3__[\"ThemeConsumer\"]),\n      theme = _useContext.theme;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, function (theme) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"meta-info-\".concat(theme)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"by \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/user?id=\".concat(by)\n    }, by)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"on \", Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(time)), typeof descendants === 'number' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"with \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/post?id=\".concat(id)\n    }, descendants), \"comments\"));\n  });\n}\nPostMetaInfo.propTypes = {\n  by: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,\n  descendants: PropsTypes.number\n};\n\n//# sourceURL=webpack:///./app/components/PostMetaInfo.js?");

/***/ }),

/***/ "./app/components/Title.js":
/*!*********************************!*\
  !*** ./app/components/Title.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Title; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nfunction Title(_ref) {\n  var url = _ref.url,\n      title = _ref.title,\n      id = _ref.id;\n  return url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"link\",\n    href: url\n  }, title) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    className: \"link\",\n    to: \"/post?id=\".concat(id)\n  }, title);\n}\nTitle.propTypes = {\n  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n};\n\n//# sourceURL=webpack:///./app/components/Title.js?");

/***/ }),

/***/ "./app/utils/api.js":
/*!**************************!*\
  !*** ./app/utils/api.js ***!
  \**************************/
/*! exports provided: fetchItem, fetchComments, fetchMainPosts, fetchUser, fetchPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchItem\", function() { return fetchItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchComments\", function() { return fetchComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchMainPosts\", function() { return fetchMainPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPosts\", function() { return fetchPosts; });\nvar api = \"https://hacker-news.firebaseio.com/v0\";\nvar json = '.json?print=pretty';\n\nfunction removeDead(posts) {\n  return posts.filter(Boolean).filter(function (_ref) {\n    var dead = _ref.dead;\n    return dead !== true;\n  });\n}\n\nfunction removeDeleted(posts) {\n  return posts.filter(function (_ref2) {\n    var deleted = _ref2.deleted;\n    return deleted !== true;\n  });\n}\n\nfunction onlyPosts(posts) {\n  return posts.filter(function (_ref3) {\n    var type = _ref3.type;\n    return type === 'story';\n  });\n}\n\nfunction oblyComments(posts) {\n  return posts.filter(function (_ref4) {\n    var type = _ref4.type;\n    return type === 'comment';\n  });\n}\n\nfunction fetchItem(id) {\n  return fetch(\"\".concat(api, \"/item/\").concat(id).concat(json)).then(function (res) {\n    return res.json();\n  });\n}\nfunction fetchComments(ids) {\n  return Promise.all(ids.map(fetchItem)).then(function (comments) {\n    return removeDeleted(onlyComments(removeDead(comments)));\n  });\n}\nfunction fetchMainPosts(type) {\n  return fetch(\"\".concat(api, \"/\").concat(type, \"stories\").concat(json)).then(function (res) {\n    return res.json();\n  }).then(function (ids) {\n    if (!ids) {\n      throw new Error(\"There was an error fetching the \".concat(type, \" posts.\"));\n    }\n\n    return ids.slice(0, 50);\n  }).then(function (ids) {\n    return Promise.all(ids.map(fetchItem));\n  }).then(function (posts) {\n    return removeDeleted(onlyPosts(removeDead(posts)));\n  });\n}\nfunction fetchUser(id) {\n  return fetch(\"\".concat(api, \"/user/\").concat(id).concat(json)).then(function (res) {\n    return res.json();\n  });\n}\nfunction fetchPosts(ids) {\n  return Promise.all(ids.map(fetchItem)).then(function (posts) {\n    return removeDeleted(onlyPosts(removeDead(posts)));\n  });\n}\n\n//# sourceURL=webpack:///./app/utils/api.js?");

/***/ }),

/***/ "./app/utils/helpers.js":
/*!******************************!*\
  !*** ./app/utils/helpers.js ***!
  \******************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\nfunction formatDate(timestamp) {\n  return new Date(timestamp * 1000).toLocaleDateString(\"ZH-CN\", {\n    hour: 'numeric',\n    minute: 'numeric'\n  });\n}\n\n//# sourceURL=webpack:///./app/utils/helpers.js?");

/***/ })

}]);