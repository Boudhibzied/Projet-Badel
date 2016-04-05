/**
 * Scrappe model events
 */

'use strict';

import {EventEmitter} from 'events';
var Scrappe = require('./scrappe.model');
var ScrappeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ScrappeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Scrappe.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ScrappeEvents.emit(event + ':' + doc._id, doc);
    ScrappeEvents.emit(event, doc);
  }
}

export default ScrappeEvents;
