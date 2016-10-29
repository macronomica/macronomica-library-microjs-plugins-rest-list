
export default (micro, actions, schema) => ({ cmd, criteria } = {}) => {
  return actions.count(schema, criteria);
};