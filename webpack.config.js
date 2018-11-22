const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
	
	return {

		mode: env.production ? 'production' : 'development',
		
		entry: {

			app: __dirname + '/src/index.js'

		},
		
		devtool: env.production ? false : 'inline-source-map',

		resolve: {

			alias: {
				'~': path.resolve(__dirname),
				'@': path.resolve(__dirname)
			}

		},

		devServer: {

			host: '127.0.0.1',
			port: 3333,

			contentBase: path.resolve(__dirname, 'dist'),
			watchContentBase: true,
			hot: true,
			publicPath: '/',
			compress: true,
			overlay: true,

			after (app, server) {
				server._watch(path.resolve(__dirname, 'src'));
			}

		},

		plugins: [
			
			new CleanWebpackPlugin(['dist'], {
				exclude: ['.gitkeep']
			}),
			
			new HtmlWebpackPlugin({

				template: __dirname + '/src/index.html',
				minify: env.production ? {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: false,
					removeScriptTypeAttributes: false,
					removeStyleLinkTypeAttributes: false,
					useShortDoctype: true
				} : false,
				cache: env.production,
				showErrors: !env.production

			}),

			new webpack.HotModuleReplacementPlugin()
			
		],

		optimization: {
			minimize: env.production
		},

		output: {
			filename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist')
		},

		module: {

			rules: [
				
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: [

						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env']
							}
						}

					]
				},
				
				{
					test: /\.css$/,
					use: [
						
						'style-loader',

						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},

						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')
								]
							}
						}

					]
				},

				{
					test: /\.(scss|sass)$/,
					use: [

						'style-loader',
						'css-loader',

						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')
								]
							}
						},

						{
							loader: 'sass-loader',
							options: {
								includePaths: [
									path.join(__dirname, 'assets')
								]
							}
						}

					]
				},

				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
					]
				},

				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						'file-loader'
					]
				}

			]

		}

	}

};