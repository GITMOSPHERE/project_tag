"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=require("babel-runtime/helpers/typeof"),_typeof3=_interopRequireDefault(_typeof2),_regenerator=require("babel-runtime/regenerator"),_regenerator2=_interopRequireDefault(_regenerator),_stringify=require("babel-runtime/core-js/json/stringify"),_stringify2=_interopRequireDefault(_stringify),_slicedToArray2=require("babel-runtime/helpers/slicedToArray"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator"),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_fsPromise=require("fs-promise"),_fsPromise2=_interopRequireDefault(_fsPromise),_path=require("path"),_path2=_interopRequireDefault(_path);exports["default"]=function(){function e(e,t,a){return r.apply(this,arguments)}var r=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function t(e,r,a){var n,u=this;return _regenerator2["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Array.isArray(a)?a:[a],e=_path2["default"].join(e,"package.json"),t.prev=2,t.delegateYield(_regenerator2["default"].mark(function i(){var t;return _regenerator2["default"].wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_fsPromise2["default"].readFile(e,"utf8");case 2:return t=n.sent,t=t||"{}",t=JSON.parse(t),t[r]=t[r]||{},a.forEach(function(e){var a=(0,_slicedToArray3["default"])(e,2),n=a[0],u=a[1];t[r][n]=u}),n.next=9,_fsPromise2["default"].writeFile(e,(0,_stringify2["default"])(t,null,2),"utf8");case 9:return n.abrupt("return",{v:t});case 10:case"end":return n.stop()}},i,u)})(),"t0",4);case 4:if(n=t.t0,"object"!==("undefined"==typeof n?"undefined":(0,_typeof3["default"])(n))){t.next=7;break}return t.abrupt("return",n.v);case 7:t.next=14;break;case 9:if(t.prev=9,t.t1=t["catch"](2),"ENOENT"===t.t1.code){t.next=13;break}throw t.t1;case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}},t,this,[[2,9]])}));return e}();