const allOperators = require('./all-operators.json');
const allTypesWoArray = require('./all-types-wo-array.json');
const allTypes = require('./all-types.json');
const anyWoArray = require('./any-wo-array.json');
const any = require('./any.json');
const binaryArgs = require('./binary-args.json');
const noLogicObject = require('./no-logic-object.json');
const oneOrMoreArgs = require('./one-or-more-args.json');
const pointer = require('./pointer.json');
const trinaryArgs = require('./trinary-args.json');
const unaryArg = require('./unary-arg.json');
const varSchema = require('./var.json');

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

module.exports = commonSchemas;

// see https://github.com/axa-ch/json-logic-js/tree/master/schemas/common
