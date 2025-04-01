import type { Plugin } from 'ajv';
import getDef from '../definitions/conditionalSchema';

const conditionalSchema: Plugin<undefined> = ajv => ajv.addKeyword(getDef());

export default conditionalSchema;

module.exports = conditionalSchema;
