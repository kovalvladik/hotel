const path  = require('path')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports={
    mode: "development",
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[hash].js',
    },
    devServer: {
        port: 3500,

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template: "./public/index.html"}),
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use:['style-loader', 'css-loader',],
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",

                    options: {
                        presets: ['@babel/preset-env',["@babel/preset-react"]]
                    }
                }
            },  {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',["@babel/preset-react"]]
                    }
                }
            },
        ]
    }

}
