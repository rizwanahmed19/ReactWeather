var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: './src/main.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	devtools: 'eval-source-map',
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015', 'stage-2']
				} 
			}
		]
	},
	devServer: {
		port: 5050,
		colors: true,
		historyApiFallback: true
	},
	plugins: [htmlWebpackPluginConfig]
};