const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");
const withOffline = require('next-offline');

module.exports =
    withCustomBabelConfigFile (
        withOffline (
        withTypescript({
            babelConfigFile: path.resolve("./babel.config.js"),
            webpack: (config, {}) => {
                // config.node = {
                //     fs: 'empty',
                //     net: 'empty',
                //     tls: 'empty'
                // };
                //
                // config.resolve.alias = {
                //     ...config.resolve.alias,
                //     'src': path.resolve(__dirname, './src/'),
                // };

                return config;
            },
            dontAutoRegisterSw: true,
            generateInDevMode: true,
            workboxOpts: {
                importScripts: ['static/serviceWorkers/hello.js']
            }
        })));
