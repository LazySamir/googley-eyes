//to use debug option run `DEBUG=true followed by your .conf.js`
const defaultTimeoutInterval  = process.env.DEBUG ? (60 * 60 * 500) : 90000;

var fs = require("fs");
var Buffer = require("buffer").Buffer;
var extensionChrome = fs.readFileSync("./crx/untitled folder.crx");

exports.config = {
  specs: [
    "./spec/features/*.js"
  ],

  exclude: [
    // './test/specs/file-to-exclude.js'
  ],

  maxInstances: 15,
  //
  // =====
  // Capabilities
  // =====
  capabilities: [

    {
      browserName: "chrome",
      platform: "",
      version: "",
      // acceptUntrustedCertificates: true,
      // webdriver_accept_untrusted_certs: true,
      // webdriver_assume_untrusted_issuer: true,
      // cssSelectorsEnabled: true,
      maxInstances: "5",
      chromeOptions: {
        extensions: [Buffer(extensionChrome, "binary").toString("base64")]
      }
    }
  ],
  //
  // =====
  // Test Config
  // =====
  sync: true,
  logLevel: "verbose",               // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true,                // Enables colors for log output.
  screenshotPath: "./spec/features/reports/errorShots/", // Saves a screenshot to a given path if a command fails.
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: "https://www.google.com",
  waitforTimeout: 90000,            // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 90000,    // Default timeout in milliseconds for request if Selenium Grid doesn't send response
  connectionRetryCount: 3,          // Default request retries count

  services: ["selenium-standalone"],
  //services: ['selenium-standalone', 'phantomjs'],

  framework: "jasmine",
  jasmineNodeOpts: {
    //defaultTimeoutInterval: 900000,
    defaultTimeoutInterval: defaultTimeoutInterval,
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time an assertion fails.
    expectationResultHandler: function(passed, assertion) {
      // do something
    }
  },

  reporters: ["spec", "junit","allure", "json"],
  reporterOptions: {
    junit:  {outputDir:   "./spec/features/reports/junit-results/"},
    allure: {outputDir:   "./spec/features/reports/allure-results/"},
    json:   {outputDir:   "./spec/features/reports/json-results/"}
  },
  //
  // =====
  // Hooks
  // =====
  /**
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
  // onPrepare: function (config, capabilities) {
  // },
  /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
  beforeSession: function (config, capabilities, specs) {
    require("babel-register");
  },
  /**
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    * @param {Array.<Object>} capabilities list of capabilities details
    * @param {Array.<String>} specs List of spec file paths that are to be run
    */
  before: function (capabilities, specs) {
  },
  //
  // Hook that gets executed before the suite starts
  // beforeSuite: function (suite) {
  // },
  //
  // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  // beforeHook: function (each) {
  // },
  //
  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  // afterEach in Mocha)
  // afterHook: function (currentTest) {
  // },
  /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
  // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  // beforeTest: function (test) {
  // },
  /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
  // beforeCommand: function (commandName, args) {
  // },
  /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
  afterTest: function (test) {
    //console.log(test);
  },
  /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
  // afterSuite: function (suite) {
  // },
  /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // after: function (result, capabilities, specs) {
  // },
  /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
     * Gets executed after all workers got shut down and the process is about to exit. It is not
     * possible to defer the end of the process using a promise.
     * @param {Object} exitCode 0 - success, 1 - fail
     */
  // onComplete: function(exitCode) {
  // }
};
