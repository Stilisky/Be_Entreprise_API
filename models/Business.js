const mongoose = require('mongoose')

const BusinessModel = mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true
   },
   description: {
      type: String,
      required: true
   },
   proof: {
      type: String
   },
   certifiate: {
      type: Boolean,
      default: false
   },
   fans: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
      }
   ],
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
      }
   ],
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   }
})

module.exports = mongoose.model('Business', BusinessModel)