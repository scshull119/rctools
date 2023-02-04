const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';

const config = {
    entry: './react/src/app.js',
    output: {
        path: path.resolve(__dirname, './react/dist'),
        filename: 'app.js',
        publicPath: '/react/dist'
    },
    devServer: {
        open: false,
        host: 'localhost',
        allowedHosts: 'auto',
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/public'
        }
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'cheap-module-source-map'
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
