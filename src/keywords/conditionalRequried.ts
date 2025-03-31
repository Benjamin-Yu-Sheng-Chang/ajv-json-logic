import type { Plugin } from 'ajv';
import getDef from '../definitions/conditionalRequired';

const conditionalRequired: Plugin<undefined> = ajv => ajv.addKeyword(getDef());

export default conditionalRequired;

module.exports = conditionalRequired;
