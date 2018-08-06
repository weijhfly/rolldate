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
    devServer: {
        contentBase: './dist',
        host: 'localhost', 
        port: 3000,            
        open: true,             
        hot: false              
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
                test: /\.(less|css)$/i,
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']       
                })
            }
        ]
    },
	plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist'), {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
		new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: false, 
        }),
        new ExtractTextWebpackPlugin('css/rolldate.css'),
        new webpack.BannerPlugin(banner)  
	]
}