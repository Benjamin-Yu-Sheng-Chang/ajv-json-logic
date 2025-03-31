import type { Plugin } from 'ajv';
import allSchemas from '../schemas';
import getDef from '../definitions/jsonLogic';

const jsonLogic: Plugin<undefined> = ajv => {
  ajv.addSchema(allSchemas);
  ajv.addKeyword(getDef());
  return ajv;
};

export default jsonLogic;

module.exports = jsonLogic;
