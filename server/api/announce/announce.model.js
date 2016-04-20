'use strict';

import mongoose from 'mongoose';

var AnnounceSchema = new mongoose.Schema({

  title: String,
  price:Number,
  description: String,
  picture:String,
  status: { type: String, default:"nouvelle"},
  datePost:{ type: Date, default: Date.now},
  category: String,
  underCategory:String,
  offer: [{body: String, rated: Boolean }],
  user:[{
    _id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String
  }]
});

export default mongoose.model('announce', AnnounceSchema);


