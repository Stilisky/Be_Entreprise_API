const mongoose = require('mongoose')

const CategoryModel = mongoose.Schema({
   name: {
      type: String,
      unique: true,
      required: true
   },
   businesses: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Business'
      }
   ],
   image: {
      type: String,
   }
})

module.exports = mongoose.model('Category', CategoryModel)