const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   username : {
      type: String,
      required: true,
      unique: true
   },
   email : {
      type: String,
      required: true,
      unique: true
   },
   password : {
      type: String,
      required: true
   },
   role: {
   type: String,
   enum: ['ADMIN', 'USER', 'BUSINESS'],
   required: true,
   },
   firstName: {
   type: String,
   required: false,
   },
   lastName: {
   type: String,
   required: false,
   },
   phoneNumber: {
   type: String,
   required: false,
   },
   address: {
   type: String,
   },
   superFan: {
      type: Boolean,
      default: false
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
      }
   ],
})

module.exports = mongoose.model('User', UserSchema)