const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'main.js'),
      },
    
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'local')
      },

    devServer: {
        port: 8001,
        host: '0.0.0.0',
        open: true,
        hot: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /.js$|.jsx/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    presets: ['@babel/preset-env']
                }

            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]

}

module.exports = (env, args) => {
    

    return config;
}