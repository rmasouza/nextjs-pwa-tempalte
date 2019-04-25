module.exports = function(api) {
    api.cache(true);

    const presets = [
        "next/babel",
        "mobx",
        ["@babel/preset-typescript", { isTSX: true, allExtensions: true }]
    ];

    const plugins = ["module-resolver"];

    return {
        presets,
        plugins
    };
};
