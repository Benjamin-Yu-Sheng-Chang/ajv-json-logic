// Using CommonJS for tests
const { expect } = require('chai');
const Ajv = require('ajv');
const ajvJsonLogic = require('../src/main.js');
const jsonLogicSchema = require('../src/schemas/json-logic.json');

describe('ajv-json-logic', () => {
  let ajv;
  let validate;

  beforeEach(() => {
    ajv = new Ajv({
      strict: false,
      allErrors: true,
    });
    ajvJsonLogic(ajv);
    validate = ajv.compile(jsonLogicSchema);
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
