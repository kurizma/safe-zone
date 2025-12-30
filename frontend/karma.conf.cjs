module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser...
    },

    reporters: ['progress', 'kjhtml', 'junit'],

    junitReporter: {
      outputDir: 'test-results/junit',      // relative to frontend/
      outputFile: 'frontend-tests.xml',    // one XML file
      useBrowserName: false
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    browsers: ['ChromeHeadlessNoSandbox'],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu'],
      },
    },

    singleRun: true,
    restartOnFileChange: false,
  });
};
