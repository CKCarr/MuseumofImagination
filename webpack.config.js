const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        museumGallery: './src/public/scripts/1_museumGallery.js',
        modelGallery: './src/public/scripts/modules/1_modelGallery.js',
        museumIndex: './src/public/scripts/museum.js',
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
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
            template: './src/modelGallery.html',
            filename: 'modelGallery.html',
            chunks: ['modelGallery']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['museum']
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            chunks: ['museum']
        }),
    ],
    stats: {
        children: true, // Shows details for child compilations
        errorDetails: true, // Shows details of errors
        // You can add more options for detailed stats as needed
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './src/public'),
        },
        compress: true,
        port: 8081,
        historyApiFallback: true, // Important for single-page applications
    },
};
