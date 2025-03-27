const accessorMissing = require('./accessor/missing.json');
const accessorMissingSome = require('./accessor/missing_some.json');
const accessorVariable = require('./accessor/variable.json');

const arithmeticAdd = require('./arithmetic/add.json');
const arithmeticDivide = require('./arithmetic/divide.json');
const arithmeticModulo = require('./arithmetic/modulo.json');
const arithmeticMultiply = require('./arithmetic/multiply.json');
const arithmeticSubtract = require('./arithmetic/subtract.json');

const arrayAll = require('./array/all.json');
const arrayFilter = require('./array/filter.json');
const arrayMap = require('./array/map.json');
const arrayMerge = require('./array/merge.json');
const arrayNone = require('./array/none.json');
const arrayReduce = require('./array/reduce.json');
const arraySome = require('./array/some.json');

const logicAnd = require('./logic/and.json');
const logicEqual = require('./logic/equal.json');
const logicIf = require('./logic/if.json');
const logicNot = require('./logic/not.json');
const logicNotEqual = require('./logic/notEqual.json');
const logicNotNot = require('./logic/notnot.json');
const logicOr = require('./logic/or.json');
const logicStrictEqual = require('./logic/strictEqual.json');
const logicStrictNotEqual = require('./logic/strictNotEqual.json');

const miscIn = require('./misc/in.json');
const miscLog = require('./misc/log.json');
const miscMethod = require('./misc/method.json');

const numericGreater = require('./numeric/greater.json');
const numericGreaterEqual = require('./numeric/greaterEqual.json');
const numericLess = require('./numeric/less.json');
const numericLessEqual = require('./numeric/lessEqual.json');
const numericMax = require('./numeric/max.json');
const numericMin = require('./numeric/min.json');

const stringCat = require('./string/cat.json');
const stringSubstr = require('./string/substr.json');

const operatorSchemas = [
  accessorMissing,
  accessorMissingSome,
  accessorVariable,
  arithmeticAdd,
  arithmeticDivide,
  arithmeticModulo,
  arithmeticMultiply,
  arithmeticSubtract,
  arrayAll,
  arrayFilter,
  arrayMap,
  arrayMerge,
  arrayNone,
  arrayReduce,
  arraySome,
  logicAnd,
  logicEqual,
  logicIf,
  logicNot,
  logicNotEqual,
  logicNotNot,
  logicOr,
  logicStrictEqual,
  logicStrictNotEqual,
  miscIn,
  miscLog,
  miscMethod,
  numericGreater,
  numericGreaterEqual,
  numericLess,
  numericLessEqual,
  numericMax,
  numericMin,
  stringCat,
  stringSubstr,
];

module.exports = operatorSchemas;

// see https://github.com/axa-ch/json-logic-js/tree/master/schemas/operators
