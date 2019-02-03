let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let banner = require('./banner').info;

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'rolldate.js',   
        path: path.resolve('dist'),
        library      : 'rolldate',
        libraryTarget: 'umd'
    },
    module:{
        rules:[ 
            {
                test:/\.js$/,
                exclude:/node_modules|iscroll/,
                loader:'babel-loader',
                options:{
                    presets:["es2015"]
                }
            },
			{
                test:/\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']  
            }
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: false, 
        }),
        new webpack.BannerPlugin(banner)  
	],
    optimization: {
        minimize: false
    }
}