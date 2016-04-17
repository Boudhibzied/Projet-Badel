'use strict';

import mongoose from 'mongoose';

var CommentsSchema = new mongoose.Schema({

  postedby: String,
  text: String
});

export default mongoose.model('Comments', CommentsSchema);
