'use strict';

import mongoose from 'mongoose';

var OffreSchema = new mongoose.Schema({
  description: String,
  marque: String,
  prix: Number,
  photo: { type: String, default:'oca1.jpg'},
  status: { type: Number, default:0},
  user1:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  user2:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  announce:{type: mongoose.Schema.Types.ObjectId, ref: 'announce'}
});

export default mongoose.model('Offre', OffreSchema);
