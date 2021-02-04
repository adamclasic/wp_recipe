/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _recipe_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe_blocks */ \"./app/recipe_blocks/index.js\");\n/* harmony import */ var _recipe_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_recipe_blocks__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/ZTkyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vcmVjaXBlX2Jsb2Nrcyc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/index.js\n");

/***/ }),

/***/ "./app/recipe_blocks/index.js":
/*!************************************!*\
  !*** ./app/recipe_blocks/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Registering my block with a unique name\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    TextControl = _wp$components.TextControl,\n    SelectControl = _wp$components.SelectControl;\nvar withState = wp.compose.withState;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls;\nvar MySelectControl = withState({\n  size: '50%'\n})(function (_ref) {\n  var size = _ref.size,\n      setState = _ref.setState;\n  return wp.element.createElement(SelectControl, {\n    label: \"Size\",\n    value: size,\n    options: [{\n      label: 'Big',\n      value: '100%'\n    }, {\n      label: 'Medium',\n      value: '50%'\n    }, {\n      label: 'Small',\n      value: '25%'\n    }],\n    onChange: function onChange(size) {\n      setState({\n        size: size\n      });\n    }\n  });\n});\nregisterBlockType('reccpe/ings', {\n  title: 'Ings',\n  category: 'widgets',\n  icon: 'book-alt',\n  attributes: {\n    name: {\n      source: 'text' // default: 'my dog'\n\n    },\n    textSide: {\n      source: 'text'\n    }\n  },\n  edit: function edit(props) {\n    return [wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {\n      title: 'Recipe'\n    }, wp.element.createElement(PanelRow, null, wp.element.createElement(\"p\", null, \"give a title to the recipe.\")), wp.element.createElement(TextControl, {\n      value: props.attributes.name,\n      help: \"ex: French Fris\",\n      onChange: function onChange(newVal) {\n        props.setAttributes({\n          name: newVal\n        });\n      }\n    }), wp.element.createElement(MySelectControl, null))), wp.element.createElement(\"div\", null, wp.element.createElement(BlockControls, null, wp.element.createElement(AlignmentToolbar, {\n      value: props.attributes.textSide,\n      onChange: function onChange(newVall) {\n        props.setAttributes({\n          textSide: newVall\n        });\n      }\n    })), wp.element.createElement(\"p\", {\n      style: {\n        textAlign: props.attributes.textSide\n      }\n    }, \"name: \", props.attributes.name), wp.element.createElement(\"p\", {\n      style: {\n        color: 'red'\n      }\n    }, \"dificulty: \"))];\n  },\n  save: function save(props) {\n    return wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, \"name: \", props.attributes.name), wp.element.createElement(\"p\", null, \"dificulty: \"));\n  },\n  support: {\n    html: false,\n    className: false\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcmVjaXBlX2Jsb2Nrcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9yZWNpcGVfYmxvY2tzL2luZGV4LmpzPzhlNmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVnaXN0ZXJpbmcgbXkgYmxvY2sgd2l0aCBhIHVuaXF1ZSBuYW1lXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2wsXG4gICAgU2VsZWN0Q29udHJvbCA9IF93cCRjb21wb25lbnRzLlNlbGVjdENvbnRyb2w7XG52YXIgd2l0aFN0YXRlID0gd3AuY29tcG9zZS53aXRoU3RhdGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQWxpZ25tZW50VG9vbGJhcixcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzO1xudmFyIE15U2VsZWN0Q29udHJvbCA9IHdpdGhTdGF0ZSh7XG4gIHNpemU6ICc1MCUnXG59KShmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHNldFN0YXRlID0gX3JlZi5zZXRTdGF0ZTtcbiAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgbGFiZWw6IFwiU2l6ZVwiLFxuICAgIHZhbHVlOiBzaXplLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICBsYWJlbDogJ0JpZycsXG4gICAgICB2YWx1ZTogJzEwMCUnXG4gICAgfSwge1xuICAgICAgbGFiZWw6ICdNZWRpdW0nLFxuICAgICAgdmFsdWU6ICc1MCUnXG4gICAgfSwge1xuICAgICAgbGFiZWw6ICdTbWFsbCcsXG4gICAgICB2YWx1ZTogJzI1JSdcbiAgICB9XSxcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2Uoc2l6ZSkge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG5yZWdpc3RlckJsb2NrVHlwZSgncmVjY3BlL2luZ3MnLCB7XG4gIHRpdGxlOiAnSW5ncycsXG4gIGNhdGVnb3J5OiAnd2lkZ2V0cycsXG4gIGljb246ICdib29rLWFsdCcsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICBzb3VyY2U6ICd0ZXh0JyAvLyBkZWZhdWx0OiAnbXkgZG9nJ1xuXG4gICAgfSxcbiAgICB0ZXh0U2lkZToge1xuICAgICAgc291cmNlOiAndGV4dCdcbiAgICB9XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbnNwZWN0b3JDb250cm9scywgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsQm9keSwge1xuICAgICAgdGl0bGU6ICdSZWNpcGUnXG4gICAgfSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhbmVsUm93LCBudWxsLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiZ2l2ZSBhIHRpdGxlIHRvIHRoZSByZWNpcGUuXCIpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5uYW1lLFxuICAgICAgaGVscDogXCJleDogRnJlbmNoIEZyaXNcIixcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdWYWwpIHtcbiAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgbmFtZTogbmV3VmFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTXlTZWxlY3RDb250cm9sLCBudWxsKSkpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEJsb2NrQ29udHJvbHMsIG51bGwsIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChBbGlnbm1lbnRUb29sYmFyLCB7XG4gICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy50ZXh0U2lkZSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShuZXdWYWxsKSB7XG4gICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgIHRleHRTaWRlOiBuZXdWYWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicFwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB0ZXh0QWxpZ246IHByb3BzLmF0dHJpYnV0ZXMudGV4dFNpZGVcbiAgICAgIH1cbiAgICB9LCBcIm5hbWU6IFwiLCBwcm9wcy5hdHRyaWJ1dGVzLm5hbWUpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIFwiZGlmaWN1bHR5OiBcIikpXTtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIm5hbWU6IFwiLCBwcm9wcy5hdHRyaWJ1dGVzLm5hbWUpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiZGlmaWN1bHR5OiBcIikpO1xuICB9LFxuICBzdXBwb3J0OiB7XG4gICAgaHRtbDogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBmYWxzZVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/recipe_blocks/index.js\n");

/***/ })

/******/ });