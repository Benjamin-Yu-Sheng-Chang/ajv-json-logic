// src/main.ts
import type { Ajv } from 'ajv';
import allSchemas from './schemas/index';
import conditionalRequiredDef from './definitions/conditionalRequired';
import jsonLogicDef from './definitions/jsonLogic';

/**
 * Adds JSON Logic support to Ajv
 * @param ajv The Ajv instance to extend
 * @returns The extended Ajv instance
 */
function ajvJsonLogic(ajv: Ajv): Ajv {
  // Add all schemas
  ajv.addSchema(allSchemas);

  // Add the jsonLogic keyword
  ajv.addKeyword(jsonLogicDef());

  // Add the conditionalRequired keyword
  ajv.addKeyword(conditionalRequiredDef());

  return ajv;
}

// Support both CommonJS and ES modules
export default ajvJsonLogic;

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = ajvJsonLogic;
  module.exports.default = ajvJsonLogic;
}
