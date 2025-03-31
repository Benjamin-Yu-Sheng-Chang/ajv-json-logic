// Main schema index file - exports all schemas
import commonSchemas from './common/index';
import operatorSchemas from './operators/index';

// Export all schemas in the recommended loading order
const allSchemas = [
  // Common schemas first
  ...commonSchemas,

  // Then all operator schemas
  ...operatorSchemas,
];

// Support both CommonJS and ES modules
export default allSchemas;

// For CommonJS compatibility
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = allSchemas;
  module.exports.default = allSchemas;
}
