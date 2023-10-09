
import rollup_cjs from '@rollup/plugin-commonjs';
import rollup_multi from '@rollup/plugin-multi-entry';
import rollup_re from '@rollup/plugin-node-resolve';
import rollup_te from '@rollup/plugin-terser';
import rollup_ts from '@rollup/plugin-typescript';

export default [
  {
		input: './src/**/*.ts',
    output: {
      file: '../../web-folder/js/app-bundle.js',
      format: 'iife',
      name: 'bundle',
      sourcemap: true
    },
    plugins: [
			rollup_multi(),
			rollup_cjs(),
			rollup_re(),
			rollup_ts({sourceMap:true}),
			rollup_te()
    ]
  }
]

