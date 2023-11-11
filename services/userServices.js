const userModel = require('../models/User')

const getUsers = async () => {
   return await userModel.find({}, '-password')
}

const getUser = async (id) => {
   return await userModel.findById(id, '-password')
}

const createUser = async (user) => {
   const newUser = new userModel(user);
   return await newUser.save()
}
