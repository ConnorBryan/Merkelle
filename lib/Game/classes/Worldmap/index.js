"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Worldmap = function Worldmap() {
  var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  _classCallCheck(this, Worldmap);

  this.rows = rows;
  this.columns = columns;
};

exports.default = Worldmap;