'use strict';

import mongoose from 'mongoose';

var FavorisSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Favoris', FavorisSchema);
