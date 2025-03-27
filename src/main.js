// src/main.js
const jsonLogic = require('json-logic-js');
const allSchemas = require('./schemas/index.js');
const jsonLogicSchema = require('./schemas/json-logic.json');

module.exports = function ajvJsonLogic(ajv) {
  ajv.addSchema(allSchemas);
  // Add the jsonLogic keyword
  ajv.addKeyword({
    keyword: 'jsonLogic',
    validate: function (schema, data) {
      try {
        const result = jsonLogic.apply(schema, data);
        return !!result;
      } catch (e) {
        return false;
      }
    },
    errors: false,
    metaSchema: jsonLogicSchema,
  });

  return ajv;
};
