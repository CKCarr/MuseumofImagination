const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        museumGallery: './dist/public/scripts/1_museumGallery.js',
        modelsGallery: './dist/public/scripts/modules/modelsGallery.js',
        museumIndex: './dist/public/scripts/museum.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Add other loaders for file types (images, fonts, etc.) as needed
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './dist/museumGallery.html',
            filename: 'museumGallery.html',
            chunks: ['museumGallery']
        }),
        new HtmlWebpackPlugin({
            template: './dist/modelsGallery.html',
            filename: 'modelsGallery.html',
            chunks: ['modelsGallery']
        }),
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            filename: 'index.html',
            chunks: ['museum']
        }),
    ],
};
