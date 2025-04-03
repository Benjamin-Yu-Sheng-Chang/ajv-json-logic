// Using CommonJS for tests
let expect; // Declare expect variable
const Ajv = require('ajv');
const ajvJsonLogic = require('../dist/main.cjs');

// Dynamically import chai before tests run
before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});

describe('json-logic', () => {
  let ajv;
  let validate;

  beforeEach(() => {
    ajv = new Ajv({
      strictTuples: false,
      allowUnionTypes: true,
      allErrors: true,
    });
    ajvJsonLogic(ajv);
  });

  describe('basic validation', () => {
    beforeEach(() => {
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
      validate = ajv.compile(schema);
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 20, score: 75 })).to.be.true;
    });

    it('should return false when age is below minimum', () => {
      expect(validate({ age: 17, score: 80 })).to.be.false;
    });

    it('should return false when score is below minimum', () => {
      expect(validate({ age: 20, score: 65 })).to.be.false;
    });

    it('should return false when both conditions fail', () => {
      expect(validate({ age: 16, score: 65 })).to.be.false;
    });
  });

  describe('error handling', () => {
    beforeEach(() => {
      const schema = {
        type: 'object',
        properties: {
          value: { type: 'number' },
        },
        jsonLogic: {
          '>': [{ var: 'value' }, 10],
        },
      };
      validate = ajv.compile(schema);
    });

    it('should handle missing properties gracefully', () => {
      expect(validate({})).to.be.false;
    });

    it('should handle null values gracefully', () => {
      expect(validate({ value: null })).to.be.false;
    });

    it('should handle invalid types gracefully', () => {
      expect(validate({ value: 'not a number' })).to.be.false;
    });
  });
});

describe('conditionalRequired', () => {
  beforeEach(() => {
    ajv = new Ajv({
      strictTuples: false,
      allowUnionTypes: true,
      allErrors: true,
    });
    ajvJsonLogic(ajv);
  });

  describe('basic validation', () => {
    beforeEach(() => {
      const schema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' },
        },
        conditionalRequired: [
          {
            content: 'name',
            rule: { '==': [{ var: 'age' }, 18] },
          },
          {
            content: 'age',
            rule: { '==': [{ var: 'name' }, 'John'] },
          },
        ],
      };
      validate = ajv.compile(schema);
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 18, name: 'Amy' })).to.be.true;
    });

    it('should return false when required property is missing', () => {
      expect(validate({ age: 18 })).to.be.false;
    });

    it('should return false when required property is missing', () => {
      expect(validate({ name: 'John' })).to.be.false;
    });

    it('should return false when required property is missing', () => {
      expect(validate({})).to.be.true;
    });
  });
});

describe('readme examples', () => {
  beforeEach(() => {
    ajv = new Ajv({
      strictTuples: false,
      allowUnionTypes: true,
      allErrors: true,
    });
    ajvJsonLogic(ajv);
  });
  describe('basic validation', () => {
    beforeEach(() => {
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
      validate = ajv.compile(schema);
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 20, score: 85 })).to.be.true;
    });

    it('should return false when age is below minimum', () => {
      expect(validate({ age: 17, score: 85 })).to.be.false;
    });

    it('should return false when score is below minimum', () => {
      expect(validate({ age: 20, score: 65 })).to.be.false;
    });

    it('should return false when both conditions fail', () => {
      expect(validate({ age: 16, score: 65 })).to.be.false;
    });
  });

  describe('conditionalRequired', () => {
    beforeEach(() => {
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
      validate = ajv.compile(schema);
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 25, name: 'John' })).to.be.true;
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 16, name: 'Amy', parentConsent: true })).to.be.true;
    });

    it('should return false when required property is missing', () => {
      expect(validate({ age: 16, name: 'Bob' })).to.be.false;
    });
  });

  describe('conditionalSchema', () => {
    beforeEach(() => {
      const schema = {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' },
          parentConsent: { type: 'boolean' },
        },
        conditionalSchema: [
          {
            schema: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                age: { type: 'number' },
                parentConsent: { type: 'boolean' },
              },
              required: ['name', 'age', 'parentConsent'],
            },
            rule: { '<': [{ var: 'age' }, 18] },
          },
        ],
      };
      validate = ajv.compile(schema);
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 25, name: 'John' })).to.be.true;
    });

    it('should return true for valid data', () => {
      expect(validate({ age: 16, name: 'Amy', parentConsent: true })).to.be.true;
    });

    it('should return false when required property is missing', () => {
      expect(validate({ age: 16, name: 'Bob' })).to.be.false;
    });
  });
});
