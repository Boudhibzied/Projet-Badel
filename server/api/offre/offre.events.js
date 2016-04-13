/**
 * Offre model events
 */

'use strict';

import {EventEmitter} from 'events';
import Offre from './offre.model';
var OffreEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OffreEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Offre.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OffreEvents.emit(event + ':' + doc._id, doc);
    OffreEvents.emit(event, doc);
  }
}

export default OffreEvents;
