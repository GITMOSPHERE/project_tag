"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function ping(){return new _promise2["default"](function(e,r){(0,_got2["default"])(_url2["default"].resolve(_config2["default"].registry,"-/ping"),{json:!0},function(t,n,o){return t?r(t):200!==o.statusCode?r(new Error("Unexpected status code: "+o.statusCode)):void e(n)})})}Object.defineProperty(exports,"__esModule",{value:!0});var _regenerator=require("babel-runtime/regenerator"),_regenerator2=_interopRequireDefault(_regenerator),_asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator"),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_promise=require("babel-runtime/core-js/promise"),_promise2=_interopRequireDefault(_promise),_url=require("url"),_url2=_interopRequireDefault(_url),_got=require("got"),_got2=_interopRequireDefault(_got),_config=require("./config"),_config2=_interopRequireDefault(_config);exports["default"]=function(){function e(){return r.apply(this,arguments)}var r=(0,_asyncToGenerator3["default"])(_regenerator2["default"].mark(function t(){var e;return _regenerator2["default"].wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ping();case 2:e=r.sent,console.log("PONG",e);case 4:case"end":return r.stop()}},t,this)}));return e}();