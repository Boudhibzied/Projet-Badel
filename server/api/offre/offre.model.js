'use strict';

import mongoose from 'mongoose';

var OffreSchema = new mongoose.Schema({
  description: String,
  user1:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  user2:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  announce:{type: mongoose.Schema.Types.ObjectId, ref: 'announce'}
});

export default mongoose.model('Offre', OffreSchema);
