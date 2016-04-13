'use strict';

import mongoose from 'mongoose';
var WishlistSchema = new mongoose.Schema({

  name: String,
  info: String,
  image:String,
  active: Boolean,
  user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model('wishlist', WishlistSchema);
