"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        criteria = _ref.criteria;

    return actions.count(schema, criteria);
  };
};
//# sourceMappingURL=count.js.map