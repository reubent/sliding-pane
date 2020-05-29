import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';
import pkg from './package.json'

export default {
    input: 'src/index.tsx',
    output: [{
        dir: "dist/"+pkg.main,
        format: 'cjs',
    },
    {
        dir: "dist/"+pkg.module,
        format: 'es',
    }],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    acornInjectPlugins: [jsx()],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        postcss({
            // extract: true
        }),
        typescript({ jsx: 'React'}),
    ],
    preserveModules: true,
};