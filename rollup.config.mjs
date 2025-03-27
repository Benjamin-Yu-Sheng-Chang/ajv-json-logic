import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    name: 'ajvJsonLogic',
    exports: 'auto'
  },
  plugins: [json(), resolve()],
  external: ['ajv', 'json-logic-js'],
};
