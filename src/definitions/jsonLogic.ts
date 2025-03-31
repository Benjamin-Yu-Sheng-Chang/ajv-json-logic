import type { FuncKeywordDefinition } from 'ajv';
import jsonLogic from 'json-logic-js';
import jsonLogicSchema from '../schemas/json-logic.json';

export default function getDef(): FuncKeywordDefinition {
  return {
    keyword: 'jsonLogic',
    validate: function (logicRule: any, data: any) {
      try {
        return !!jsonLogic.apply(logicRule, data);
      } catch (e) {
        return false;
      }
    },
    errors: false,
    metaSchema: jsonLogicSchema,
  };
}

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = getDef;
  module.exports.default = getDef;
}
