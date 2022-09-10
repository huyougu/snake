//引入一个包
const path = require("path")

const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack中所有的配置信息都应写在module.exports
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        //告诉webpack不使用箭头
        environment: {
            arrowFunction: false,
            const: false
        }

    },
    //指定webpack打包时要使用的模块
    module: {
        //指定加载规则
        rules: [{
                //test指定规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //环境插件
                                    '@babel/preset-env',
                                    //配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        //使用corejs的方式""usage"表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node_modules/
            },
            //less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    mode: 'development',
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
                title: '自定义',
                template: './src/index.html', //模板
            }

        ),
    ],
    //设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}