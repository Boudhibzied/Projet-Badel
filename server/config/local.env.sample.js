'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'projetbadel-secret',

  FACEBOOK_ID:      '657718247699603',
  FACEBOOK_SECRET:  '676596df5f2450d70fc9ee06c5dececa',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '317240869953-e6vnu6i95t4898gr9vkcifq39d06fm7t.apps.googleusercontent.com',
  GOOGLE_SECRET:    'DmcUkq-Ju0DlHmvWtakSUln4',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
