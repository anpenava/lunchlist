/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lunchlist',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: {
      apiKey: "AIzaSyDx3BoYjStEGp-WSfmz2crTlfgOeZbfOHU",
      authDomain: "lunchlist-91e93.firebaseapp.com",
      databaseURL: "https://lunchlist-91e93.firebaseio.com",
      storageBucket: "lunchlist-91e93.appspot.com",
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.serverURL = 'http://server193.web-hosting.com/';
    ENV.documentDomain = 'lokidevelop.co/';
  }

  return ENV;
};
