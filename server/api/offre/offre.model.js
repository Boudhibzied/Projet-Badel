'use strict';

import mongoose from 'mongoose';

var OffreSchema = new mongoose.Schema({
  description: String,
  marque: String,
  prix: Number,
  photo: { type: String, default:'oca1.jpg'},
  status: { type: Number, default:0},
  announce:{type: mongoose.Schema.Types.ObjectId, default: null},
  image: {
    type: String,
    default: ''
  },
  user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  username: String,
  useremail: String,
  anounceUser_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  anounceUsername: String,
  anounceUseremail: String
});

export default mongoose.model('Offre', OffreSchema);
