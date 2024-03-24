import resolve from 'rollup-plugin-node-resolve';

/*

This is the primary shared Rollup configuration used for building most of Troika's
subpackages. To build all packages, make sure you're in the repository root and run:

  npm run build

*/

// Mapping of external package names to their globals for UMD build
const EXTERNAL_GLOBALS = {
  three: 'THREE',
}

export default [{
  input: './packages/troika-three-text/src/index.js',
  output: {
    format: 'umd',
    file: `dist/troika-three-text.umd.js`,
    name: `troika_three_text`,
    globals: EXTERNAL_GLOBALS
  },
  external: Object.keys(EXTERNAL_GLOBALS),
  plugins: [
    resolve()
  ],
}]
