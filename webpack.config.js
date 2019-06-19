
// Deal with the differences between os 
const path = require("path");
module.exports = {
    // Start app
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'www/builds'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // Load jsx, js by babel
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules')
            },

            // Inline mimages as base64 strings
            {
                test: /\.(jpe?g)|(png)$/,
                loader: 'url-loader',
                include: path.resolve(__dirname, 'src')
            },

            // Load CSS and SASS style
            {
                test: /\.(css)|(scss)$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src')
            }
        ]
    }
} 