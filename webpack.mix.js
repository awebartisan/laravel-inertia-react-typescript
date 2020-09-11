const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .webpackConfig({
        output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
        // module: {
        //     rules: [
        //         // We're registering the TypeScript loader here. It should only
        //         // apply when we're dealing with a `.ts` or `.tsx` file.
        //         {
        //             test: /\.tsx?$/,
        //             loader: 'ts-loader',
        //             exclude: /node_modules/,
        //         },
        //     ],
        // },
        resolve: {
            alias: {
                "@": path.resolve("resources/js"),
            }
            //extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
        },
    });
