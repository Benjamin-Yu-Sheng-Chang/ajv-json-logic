// Operators schemas index
import accessorMissing from './accessor/missing.json';
import accessorMissingSome from './accessor/missing_some.json';
import accessorVariable from './accessor/variable.json';

import arithmeticAdd from './arithmetic/add.json';
import arithmeticDivide from './arithmetic/divide.json';
import arithmeticModulo from './arithmetic/modulo.json';
import arithmeticMultiply from './arithmetic/multiply.json';
import arithmeticSubtract from './arithmetic/subtract.json';

import arrayAll from './array/all.json';
import arrayFilter from './array/filter.json';
import arrayMap from './array/map.json';
import arrayMerge from './array/merge.json';
import arrayNone from './array/none.json';
import arrayReduce from './array/reduce.json';
import arraySome from './array/some.json';

import logicAnd from './logic/and.json';
import logicEqual from './logic/equal.json';
import logicIf from './logic/if.json';
import logicNot from './logic/not.json';
import logicNotEqual from './logic/notEqual.json';
import logicNotNot from './logic/notnot.json';
import logicOr from './logic/or.json';
import logicStrictEqual from './logic/strictEqual.json';
import logicStrictNotEqual from './logic/strictNotEqual.json';

import miscIn from './misc/in.json';
import miscLog from './misc/log.json';
import miscMethod from './misc/method.json';

import numericGreater from './numeric/greater.json';
import numericGreaterEqual from './numeric/greaterEqual.json';
import numericLess from './numeric/less.json';
import numericLessEqual from './numeric/lessEqual.json';
import numericMax from './numeric/max.json';
import numericMin from './numeric/min.json';

import stringCat from './string/cat.json';
import stringSubstr from './string/substr.json';

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

// Support both CommonJS and ES modules
export default operatorSchemas;

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = operatorSchemas;
  module.exports.default = operatorSchemas;
}

// see https://github.com/axa-ch/json-logic-js/tree/master/schemas/operators
