"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../allocation/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Router Obj
const router = _express.default.Router();

router.post('/', async function (req, res, next) {
  const Allo = new _index.default(); //TODO: Schema validation

  const calculated = await Allo.getAllocations(req.body);
  res.send(calculated);
});
var _default = router;
exports.default = _default;