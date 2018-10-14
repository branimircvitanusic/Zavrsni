var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename:'index.html',
    inject: 'body'
});


const cssDev = ['style-loader', 'css-loader'];

const cssConfig = cssDev;



module.exports = {
    
    entry: __dirname + '/app/index.js',
    
    module: 
    {
        loaders: 
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {   
                test: /\.(css)$/,                
                use: cssConfig
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                'file-loader?name=[name].[ext]&publicPath=./&outputPath=./images/',
                'image-webpack-loader'
                ]
            }   
        ]
    },
    output:{
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins : [HTMLWebpackPluginConfig]
};