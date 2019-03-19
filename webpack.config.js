/**
 * @file webpack
 * @author meixuguang
 */

const path = require('path');
// const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),

        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: '(typeof self !== \'undefined\' ? self : this)'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};
