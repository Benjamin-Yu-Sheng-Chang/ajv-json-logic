// Main schema index file - exports all schemas using CommonJS
const commonSchemas = require('./common/index.js');
const operatorSchemas = require('./operators/index.js');

// Export all schemas in the recommended loading order
const allSchemas = [
  // Common schemas first
  ...commonSchemas,

  // Then all operator schemas
  ...operatorSchemas,
];

module.exports = allSchemas;
