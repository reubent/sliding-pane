import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/react-sliding-pane.js',
        format: 'esm',
    },
    external: [
        'react',
        'react-dom',
        'react-modal',
        'prop-types',
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        postcss({
            extract: true
        }),
        typescript({ jsx: 'preserve' }),
    ],
};