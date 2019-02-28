const path = require('path');
const webpack = require('webpack');


module.exports = {
    resolve: {
        // 别名
        alias: {
            '@': path.resolve(__dirname, 'scss')
        },
        // 省略后缀
        extensions: ['.js', '.json', '.css']
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        // options: {
                        //     alias: {
                        //         "@scss": path.resolve(__dirname,"/scss")
                        //     }
                        // }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                path.resolve("./scss/")
                            ]
                        }
                    }
                ]
            }
        ]
    },
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({
    //       // test: /\.xxx$/, // may apply this only for some modules
    //       options: {
    //         alias: {
    //             '@scss':'../scss'
    //         }
    //       }
    //     })
    //   ]
};