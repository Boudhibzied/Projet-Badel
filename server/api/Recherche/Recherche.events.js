/**
 * Recherche model events
 */

'use strict';

import {EventEmitter} from 'events';
import Recherche from './Recherche.model';
var RechercheEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RechercheEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Recherche.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RechercheEvents.emit(event + ':' + doc._id, doc);
    RechercheEvents.emit(event, doc);
  }
}

export default RechercheEvents;
