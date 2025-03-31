# ajv-json-logic

[![npm version](https://img.shields.io/npm/v/ajv-json-logic.svg)](https://www.npmjs.com/package/ajv-json-logic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Add [JSON Logic](https://jsonlogic.com/) support to [Ajv](https://ajv.js.org/) (Another JSON Validator) for handling complex validation logic at runtime.

## Features

- Adds a `jsonLogic` keyword to validate data using JSON Logic rules
- Adds a `conditionalRequired` keyword to make fields conditionally required based on JSON Logic rules
- Supports both CommonJS and ES modules
- TypeScript support with type definitions

## Installation

```bash
npm install ajv-json-logic
```

## Usage

### Basic Setup

```javascript
// ES Module
import Ajv from 'ajv';
import ajvJsonLogic from 'ajv-json-logic';

// OR CommonJS
// const Ajv = require('ajv');
// const ajvJsonLogic = require('ajv-json-logic');

// Create an instance of Ajv
const ajv = new Ajv({
  strictTuples: false, // Required for json-logic
  allowUnionTypes: true, // Required for json-logic
});

// Add the conditionalRequired keyword
ajvJsonLogic(ajv);
```

### Using the `jsonLogic` Keyword

The `jsonLogic` keyword allows you to use JSON Logic rules directly in your schema:

```javascript
const schema = {
  type: 'object',
  properties: {
    age: { type: 'number' },
    score: { type: 'number' },
  },
  jsonLogic: {
    and: [{ '>=': [{ var: 'age' }, 18] }, { '>=': [{ var: 'score' }, 70] }],
  },
};

const validate = ajv.compile(schema);

// Valid data
console.log(validate({ age: 20, score: 85 })); // true

// Invalid data
console.log(validate({ age: 17, score: 85 })); // false
console.log(validate({ age: 20, score: 65 })); // false
```

### Using the `conditionalRequired` Keyword

The `conditionalRequired` keyword makes fields required based on JSON Logic conditions:

```javascript
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    parentConsent: { type: 'boolean' },
  },
  conditionalRequired: [
    {
      content: 'parentConsent',
      rule: { '<': [{ var: 'age' }, 18] },
    },
  ],
};

const validate = ajv.compile(schema);

// Valid data - Adult without parent consent
console.log(validate({ name: 'John', age: 25 })); // true

// Valid data - Minor with parent consent
console.log(validate({ name: 'Amy', age: 16, parentConsent: true })); // true

// Invalid data - Minor without parent consent
console.log(validate({ name: 'Bob', age: 16 })); // false
```

You can also use the object format for a single condition:

```javascript
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
  },
  conditionalRequired: {
    content: 'name',
    rule: { '==': [{ var: 'age' }, 18] },
  },
};
```

## TypeScript Support

This library includes TypeScript definitions and can be used in TypeScript projects:

```typescript
import Ajv from 'ajv';
import ajvJsonLogic from 'ajv-json-logic';

const ajv = new Ajv();
ajvJsonLogic(ajv);
```

## License

MIT
