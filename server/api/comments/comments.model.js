'use strict';

import mongoose from 'mongoose';

var CommentsSchema = new mongoose.Schema({
  idannounce:{type: mongoose.Schema.Types.ObjectId, ref: 'announce'},
  iduser:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  postedby: String,
  text: String
});

export default mongoose.model('Comments', CommentsSchema);
