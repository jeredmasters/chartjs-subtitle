// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  external: ['chart.js'],
  output: {
    file: 'build/Plugin.Subtitle.js',
    format: 'umd',
    globals: {
      'chart.js': 'Chart',
    },
    name: 'PluginSubtitle',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
  ],
};
