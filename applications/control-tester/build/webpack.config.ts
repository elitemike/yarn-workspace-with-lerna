import { AureliaPlugin } from 'aurelia-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

const mode = process.argv.includes('--production') ? 'production' : 'development';

export = (): object => {
    return {
        mode: mode,
        resolve: {
            extensions: ['.ts', '.js'],
            modules: ['src', 'node_modules', '../../node_modules'].map((p) => resolve(__dirname, '..', p)),
            symlinks: false
        },
        entry: { app: './src/main' },
        output: {
            filename: '[name].js'
        },
        watch: mode === 'development',
        devtool: mode === 'development' ? 'inline-source-map' : 'source-map',
        devServer: {
            contentBase: './dist'
        },
        optimization: {
            namedModules: true,
            concatenateModules: false
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                    issuer: /\.[tj]s$/i
                },
                {
                    test: /\.scss$/,
                    use: ['css-loader', 'sass-loader'],
                    issuer: /\.html?$/i
                },
                {
                    test: /\.css$/i,
                    issuer: [{ not: [{ test: /\.html$/i }] }],
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.css$/,
                    use: ['css-loader'],
                    issuer: /\.html?$/i
                },
                {
                    test: /\.[tj]s$/i,
                    loader: 'ts-loader',
                    exclude: [/node_modules/, /\.spec\.[tj]s$/]
                },
                {
                    test: /\.html$/i,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new AureliaPlugin({ aureliaApp: undefined }),
            new HtmlWebpackPlugin({
                template: 'src/index.ejs',
                metadata: { dev: mode !== 'production' }
            })
        ]
    };
};
