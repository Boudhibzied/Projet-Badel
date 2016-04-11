'use strict';

import mongoose from 'mongoose';

var WishlistSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Wishlist', WishlistSchema);
