'use strict';

import mongoose from 'mongoose';
var WishlistSchema = new mongoose.Schema({

  title: String,
  info: String,
  image:String,
  active: Boolean,
  user:[{
    _id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String
  }]
});

export default mongoose.model('wishlist', WishlistSchema);
