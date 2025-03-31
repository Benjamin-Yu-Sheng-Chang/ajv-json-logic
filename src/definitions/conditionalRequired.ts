import type { AnySchema, AnySchemaObject, MacroKeywordDefinition } from 'ajv';
import conditionalRequiredSchema from '../schemas/conditional-required.json';

export default function getDef(): MacroKeywordDefinition {
  return {
    keyword: 'conditionalRequired',
    macro: function (schema: any, parentSchema: AnySchemaObject): AnySchema {
      if (!schema) {
        return {};
      }
      const allOf: Array<{ if: { jsonLogic: any }; then: { required: string[] } }> = [];
      if (!Array.isArray(schema)) schema = [schema];

      if (schema && Array.isArray(schema)) {
        schema.forEach(({ content, rule }: any) => {
          if (content in parentSchema['properties']) {
            allOf.push({
              if: { jsonLogic: rule },
              then: { required: [content] },
            });
          }
        });
        return { allOf };
      }
      return {};
    },
    metaSchema: conditionalRequiredSchema,
  };
}

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = getDef;
  module.exports.default = getDef;
}
