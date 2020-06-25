const path = require('path');


module.exports = {
    entry: path.resolve(__dirname,"./app/javascript/main.js"),
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: __dirname + '/public/',
        port:9000,
        open:true,
        hot:true,
        historyApiFallback: true
    },

     devtool: 'sourcemap',



    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' }
                ]
            }





        ],
    }
};
