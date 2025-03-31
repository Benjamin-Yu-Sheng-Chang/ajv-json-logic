// Common schemas index
import allOperators from './all-operators.json';
import allTypesWoArray from './all-types-wo-array.json';
import allTypes from './all-types.json';
import anyWoArray from './any-wo-array.json';
import any from './any.json';
import binaryArgs from './binary-args.json';
import noLogicObject from './no-logic-object.json';
import oneOrMoreArgs from './one-or-more-args.json';
import pointer from './pointer.json';
import trinaryArgs from './trinary-args.json';
import unaryArg from './unary-arg.json';
import varSchema from './var.json';

const commonSchemas = [
  any,
  anyWoArray,
  allTypes,
  allTypesWoArray,
  binaryArgs,
  trinaryArgs,
  unaryArg,
  oneOrMoreArgs,
  varSchema,
  pointer,
  noLogicObject,
  allOperators,
];

// Support both CommonJS and ES modules
export default commonSchemas;

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = commonSchemas;
  module.exports.default = commonSchemas;
}

// see https://github.com/axa-ch/json-logic-js/tree/master/schemas/common
