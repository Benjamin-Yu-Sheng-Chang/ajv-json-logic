const Ajv = require('ajv');
const ajvJsonLogic = require('../dist/main.cjs');

const ajv = new Ajv();
ajv.addKeyword(ajvJsonLogic(ajv));

const schema = {
  type: 'object',
  properties: {
    age: { type: 'number' },
    name: { type: 'string' },
  },
  jsonLogic: {
    if: [{ '<': [{ var: 'age' }, 18] }, false, true],
  },
};

const validate = ajv.compile(schema);

// Test case 1: Should pass (age >= 18)
const data1 = { age: 20, name: 'John' };
console.log('Test 1 (age 20):', validate(data1));

// Test case 2: Should fail (age < 18)
const data2 = { age: 16, name: 'Jane' };
console.log('Test 2 (age 16):', validate(data2));
