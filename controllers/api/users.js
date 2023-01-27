const User = require("../../models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

const create = async (req, res) => {
    try {
      // Add user to db
      const user = await User.create(req.body)
      console.log(user)
      const token = createJWT(user)
      res.json(token)
    } catch (err) {
      // 400 = bad request
      res.status(400).json(err)
    }
  };
  
  /*---Helper Functions----*/
  function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }
  
  const login = async (req, res) => {
    try {
      const user = await User.findOne({"email": req.body.email})
      if(!user) throw new Error('User not found.')
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) throw new Error('Password is incorrect.')
      const token = createJWT(user)
      res.json(token)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  const searchQueriedUsers = async (req, res) => {
    try {
      const queriedUsers = await User.find({ name: { $regex: req.params.query, $options: 'i'}})
      console.log(queriedUsers)
      if (!queriedUsers) throw new Error("No user.")
      res.json(queriedUsers)
    } catch (err) {
      res.status(204).json(err)
    }
  }

  const getUserProfile = async (req, res) => {
    try {
      const userProfile = await User.findById(req.params.id)
      res.json(userProfile)
    } catch (err) {
      res.status(404).json(err)
    }
  }
  
  module.exports = {
    create,
    login,
    searchQueriedUsers,
    getUserProfile
  };