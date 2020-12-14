"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  constructor() {
    this.model = new _model.default();
  } //Ask the calculator to do it's job. Format output


  async getAllocations(data) {
    const {
      investor_amounts,
      allocation_amount
    } = data;
    const Investors = await this.model.getAllocations(investor_amounts, allocation_amount);
    return Investors.reduce((acc, Inv) => {
      return { ...acc,
        [Inv.name]: Inv.getRealInvestment(allocation_amount)
      };
    }, {});
  }

}

exports.default = Controller;