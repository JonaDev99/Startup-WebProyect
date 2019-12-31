const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Establecemos la ruta de nuestro archivo main.js
    entry: './src/js/main.js',
    //Establecemos la salida de dicho archivo previamente comprimido, en donde se creara
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    //Establecemos el puerto en el cual se ejecutara nuestro liveServer
    devServer: {
        port: 5000
    },
    //importamos el modulo de los archivos scss
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [                    
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },
    //Agregamos en este apartado nuestros plugins
    plugins:[
        //Agregamos el plugin para los archivos HTML
        new HtmlWebpackPlugin({
            template: './src/html/index.html'
        }),
        //Agregamos el plugin para los archivos CSS
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}