import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  // CommonJS build
  {
    input: 'src/main.ts',
    output: {
      dir: 'dist', // Output to root dist
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      entryFileNames: '[name].cjs', // Use .cjs extension
      exports: 'named'
    },
    plugins: [
      json(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        // Remove outDir, let Rollup handle it
        declaration: true, // Generate declarations in this build
        declarationDir: 'dist/types', // Place declarations in dist/types
        sourceMap: true,
        inlineSources: true
      })
    ],
    external: ['ajv', 'json-logic-js']
  },
  // ES module build
  {
    input: 'src/main.ts',
    output: {
      dir: 'dist', // Output to root dist
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      entryFileNames: '[name].js', // Use .js extension (default)
      exports: 'named'
    },
    plugins: [
      json(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        // Remove outDir, let Rollup handle it
        // Don't generate declarations again
        sourceMap: true,
        inlineSources: true
      })
    ],
    external: ['ajv', 'json-logic-js']
  }
];
