module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/zone-testing.js',
            'src/test.ts',
            'src/**/*.spec.ts'
        ],
        preprocessors: {
            'src/test.ts': ['webpack']
        },
        webpack: require('./webpack.test.js'),
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};