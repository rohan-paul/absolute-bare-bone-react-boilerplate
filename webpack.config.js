const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [                            
                            'react',
                            'es2015'                            
                        ],
                    },
                },
            }
        ]
    }
};
module.exports = config;