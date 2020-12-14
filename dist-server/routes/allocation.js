"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

_express.router.get('/', function (req, res, next) {
  res.send('respond with an allocation');
});

var _default = _express.router;
exports["default"] = _default;