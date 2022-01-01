const cracoAliasPlugin = require('craco-alias');
const sassSourcemapsPlugin = require('./plugins/sass-sourcemap');
const imageOptimizerPlugin = require('craco-image-optimizer-plugin');

module.exports = {
    style: {
        css: {
            loaderOptions: () => {
                return {
                    url: false,
                };
            },
        },
    },
    plugins: [
        { plugin: sassSourcemapsPlugin },
        {
            plugin: cracoAliasPlugin,
            options: {
                source: 'jsconfig',
                baseUrl: './src',
            },
        },
        {
            plugin: imageOptimizerPlugin,
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65,
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75,
                },
            },
        },
    ],
};
