
export default (micro, actions, schema) => ({ cmd, fields, params } = {}) => {
  return actions.create(schema, params, { fields });
};