module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        proxies: {
            "/assets/": "/src/assets/"
        },
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
    });
};