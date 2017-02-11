var webpack = require("webpack");

module.exports = {
    devtool: "eval-source-map",
    entry: {
        "home":__dirname+"/javascripts/home/index.js",
        "series":__dirname+"/javascripts/series/index.js",
        "variety":__dirname+"/javascripts/variety/index.js",
        "movie":__dirname+"/javascripts/movie/index.js",
        "sport":__dirname+"/javascripts/sport/index.js"
    },
    output: {
        path: __dirname+"/output/js",
        filename: "[name].bundle.js"
    },

    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react','stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};