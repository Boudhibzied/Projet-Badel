'use strict';

import mongoose from 'mongoose';
var WishlistSchema = new mongoose.Schema({

  title: String,
  info: String,
  active: Boolean,
  annonce_id:{type: mongoose.Schema.Types.ObjectId, ref: 'announce'},
  image: {
    type: String,
    default: ''
  },
  user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  username: String,
  useremail: String
});

export default mongoose.model('wishlist', WishlistSchema);
