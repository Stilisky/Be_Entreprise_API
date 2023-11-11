const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
   text: {
      type: String,
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business'
   }
})

module.exports = mongoose.model('Comment', commentSchema)