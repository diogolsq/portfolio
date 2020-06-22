const path = require('path');


module.exports = {
    entry: path.resolve(__dirname,"./website/javascript/main.js"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
        port:9000,
        index: 'index.html'
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};
