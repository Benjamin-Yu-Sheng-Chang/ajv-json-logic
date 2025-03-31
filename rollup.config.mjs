import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  // CommonJS build
  {
    input: 'src/main.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true
    },
    plugins: [
      json(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/cjs',
        declaration: true,
        declarationDir: 'dist/types'
      })
    ],
    external: ['ajv', 'json-logic-js']
  },
  // ES module build
  {
    input: 'src/main.ts',
    output: {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      preserveModules: true
    },
    plugins: [
      json(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/esm'
      })
    ],
    external: ['ajv', 'json-logic-js']
  }
];
