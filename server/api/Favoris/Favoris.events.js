/**
 * Favoris model events
 */

'use strict';

import {EventEmitter} from 'events';
import Favoris from './Favoris.model';
var FavorisEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FavorisEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Favoris.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FavorisEvents.emit(event + ':' + doc._id, doc);
    FavorisEvents.emit(event, doc);
  }
}

export default FavorisEvents;
