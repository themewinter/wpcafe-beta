/**
 * @package Automate WordPress Build Process
 * @version 1.0.0
 * @author Ashraf Mollah <mollah.dev@gmail.com>
 * @copyright Arraytics
 * @learn https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/
 * 
/**
* Internal Dependencies 
*/
const path = require("path");
/**
 * WordPress Dependencies
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

/**
 * External Dependencies
 */
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BuildOutputPlugin } = require("@laravel-mix/webpack-build-output");
const I18nLoaderWebpackPlugin = require("@automattic/i18n-loader-webpack-plugin");

const wpScriptsExtend = (props) => {
    const { entries, aliases } = props;
    /**
     * Extend the default webpack configuration of WordPress.
     */
    return {
        ...defaultConfig,
        entry: {
            packages: "./tools/packages.ts",
            "i18n-loader": "./tools/i18n-loader.ts",
            ...entries,
        },
        context: path.resolve(process.cwd()),
        output: {
            path: path.resolve(process.cwd(), "assets/build"),
            chunkFilename: "chunks/js/[name].js",
            filename: "js/[name].js",
        },
        module: {
            ...defaultConfig.module,
            rules: [
                ...defaultConfig.module.rules,
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: "tsconfig.json",
                                transpileOnly: false,
                                compilerOptions: {
                                    noEmit: false,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(bmp|png|jpe?g|gif|webp)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: `chunks/images/[name][ext]`,
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: `chunks/fonts/[name][ext]`,
                    },
                },
            ],
        },
        plugins: [
            ...defaultConfig.plugins
                .filter((plugin) => {
                    if (plugin.constructor.name === "MiniCssExtractPlugin")
                        return;
                    return true;
                })
                .filter(Boolean),
            new BuildOutputPlugin({
                clearConsole: true,
            }),
            new RemoveEmptyScriptsPlugin(),
            new MiniCSSExtractPlugin({ filename: "css/[name].css" }),
            new I18nLoaderWebpackPlugin({
                textdomain: "wpcafe",
                loaderModule: "wpCafeI18nLoader",
            }),
        ],
        stats: {
            ...defaultConfig.stats,
            preset: "errors-warnings",
        },
        resolve: {
            ...defaultConfig.resolve,
            alias: {
                ...defaultConfig.resolve.alias,
                ...(aliases || {}),
            },
            plugins: [
                ...(defaultConfig.resolve.plugins || []),
                new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
            ],
            extensions: [
                ".ts",
                ".tsx",
                ...(defaultConfig.resolve
                    ? defaultConfig.resolve.extensions || [".js", ".jsx"]
                    : []),
            ],
        },
        optimization: {
            ...defaultConfig.optimization,
            minimizer: [
                ...defaultConfig.optimization.minimizer,
                new CssMinimizerPlugin(),
            ],
        },
        externals: {
            wpCafeI18nLoader: ["window", "wpCafeI18nLoader"],
        },
        watchOptions: {
            ignored: ["**/node_modules/**", "**/assets/build/**"],
            poll: 1000,
        },
    };
};

module.exports = wpScriptsExtend;
