import type { AnySchema, AnySchemaObject, MacroKeywordDefinition } from 'ajv';
import conditionalSchemaMetaSchema from '../schemas/conditional-schema.json';

export default function getDef(): MacroKeywordDefinition {
  return {
    keyword: 'conditionalSchema',
    macro: function (schema: any): AnySchema {
      if (!schema) {
        return {};
      }
      const allOf: Array<{ if: { jsonLogic: any }; then: AnySchemaObject }> = [];
      if (!Array.isArray(schema)) schema = [schema];

      if (schema && Array.isArray(schema)) {
        schema.forEach(({ rule, schema: childSchema }: { rule: any; schema: AnySchemaObject }) => {
          allOf.push({
            if: { jsonLogic: rule },
            then: childSchema,
          });
        });
        return { allOf };
      }
      return {};
    },
    metaSchema: conditionalSchemaMetaSchema,
  };
}

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = getDef;
  module.exports.default = getDef;
}
