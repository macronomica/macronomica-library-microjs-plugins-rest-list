"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (micro, actions, schema) {
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        cmd = _ref.cmd,
        fields = _ref.fields,
        sort = _ref.sort,
        limit = _ref.limit,
        offset = _ref.offset,
        criteria = _ref.criteria;

    return actions.find.list(schema, criteria, { fields: fields, sort: sort, limit: limit, offset: offset });
  };
};
//# sourceMappingURL=list.js.map
