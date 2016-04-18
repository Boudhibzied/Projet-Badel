'use strict';

import mongoose from 'mongoose';

var OffreSchema = new mongoose.Schema({
  description: String,
  marque: String,
  prix: Number,
  photo: { type: String, default:'oca1.jpg'},
  status: { type: Number, default:0},
  announce:{type: mongoose.Schema.Types.ObjectId, ref: 'announce'},
  user:[{
    _id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String
  }],
  anounceUser:[{
    _id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String
  }]
});

export default mongoose.model('Offre', OffreSchema);
