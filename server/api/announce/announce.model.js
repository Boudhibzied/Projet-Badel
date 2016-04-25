'use strict';

import mongoose from 'mongoose';
var AnnounceSchema = new mongoose.Schema({
  title: String,
  price:Number,
  description: String,
  picture:String,
  status: { type: String, default:" en cours de negotiation"},
  datePost:{ type: Date, default: function(){return new Date()}},
  category: String,
  underCategory:String,
  offer: [{body: String, rated: Boolean }],
  premium: { type: Boolean, default: false},
  user:[{
    _id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    email: String
  }]
});

AnnounceSchema.post('init', function(doc) {
  var date = new Date();
  var resultat= date.getDate() -  doc.datePost.getDate();

  if(resultat > 0 && doc.premium == true)
  {
    doc.premium = false;
    doc.save();
  }
/*
  console.log('date du post :%s', doc.datePost.getDate());
  console.log('date now  :%s', date.getDate());
  console.log('resultat :%s',resultat);
*/
});


export default mongoose.model('announce', AnnounceSchema);


