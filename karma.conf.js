// Karma configuration
// Generated on Mon Aug 24 2015 18:06:16 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
        'mocha',
        'chai'
    ],

    preprocessors: {
    },

    // list of files / patterns to load in the browser
    files: [
        { pattern: 'test/helpers.js', included: true, watched: true },
        { pattern: 'lib/ace-min-noconflict/**/*.js' },
        { pattern: 'build/main.build.js', watched: true },
        { pattern: 'build/*.js', watched: true },
        { pattern: 'test/main.js', watched: true }
    ],

    // proxies fix for 404 errors
    proxies:  {
      '/build': 'file:///build',
      '/base/lib': 'file:///base/lib',
    },

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
