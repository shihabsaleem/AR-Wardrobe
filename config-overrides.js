module.exports = function override(config) {
    // Add fallback for Node.js core modules
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: require.resolve('crypto-browserify'),
    };

    // Suppress specific warnings
    config.ignoreWarnings = [
        {
            module: /node_modules\/face-api\.js/,
            message: /Can't resolve 'fs'/,
        },
    ];

    return config;
};
