//const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //Establecemos la ruta de nuestro archivo main.js
    entry: './src/client/js/main.js',
    //Establecemos la salida de dicho archivo previamente comprimido, en donde se creara
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    //Establecemos el puerto en el cual se ejecutara nuestro liveServer
    devServer: {
        host: '192.168.100.90',
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
            },  
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    //Agregamos en este apartado nuestros plugins
    plugins:[
        //Agregamos el plugin para los archivos HTML
        //En caso de tener mas de un archivo HTML se tiene que volver a requerir un new htmlWebpackPlugin
        new HtmlWebpackPlugin({
            template: './src/client/html/index.html'
        }),
        //Agregamos el plugin para los archivos CSS
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}