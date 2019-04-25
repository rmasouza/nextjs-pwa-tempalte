const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");

module.exports =
    withCustomBabelConfigFile (
        withTypescript({
            babelConfigFile: path.resolve("./babel.config.js"),
        }));
