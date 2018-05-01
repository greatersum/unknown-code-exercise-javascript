module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'spec/**/*.js'
        ],
        browsers: ['Chrome'],
        singleRun: false,
    })
};
