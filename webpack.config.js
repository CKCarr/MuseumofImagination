const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        museumGallery: 'src/public/scripts/1_museumGallery.js',
        modelsGallery: 'src/public/scripts/modules/1_modelsGallery.js',
        museumIndex: 'src/public/scripts/museum.js',
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
            template: './src/museumGallery.html',
            filename: 'museumGallery.html',
            chunks: ['museumGallery']
        }),
        new HtmlWebpackPlugin({
            template: './src/modelsGallery.html',
            filename: 'modelsGallery.html',
            chunks: ['modelsGallery']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['museum']
        }),
    ],
    stats: {
        children: true, // Shows details for child compilations
        errorDetails: true, // Shows details of errors
        // You can add more options for detailed stats as needed
    },
};
