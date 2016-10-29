
export default (micro, actions, schema) => ({ cmd, fields, sort, limit, offset, criteria } = {}) => {
  return actions.find.list(schema, criteria, { fields, sort, limit, offset });
};