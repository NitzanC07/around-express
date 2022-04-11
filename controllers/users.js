// const path = require('path');
// const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId
const User = require('../models/user');
// const { getJsonFromFile } = require('../helpers/files');

// const userFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users[0]);
    // const users = await getJsonFromFile(userFilePath);
    res.send(users);
  } catch (err) {
    console.log('Error in getUsers: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const getUserById = async (req, res) => {
  try {
    user_id = req.params.user_id
    console.log(`USER-USER-USER ${user_id}`);
    // user_id = mongoose.Types.ObjectId(user_id);
    // const user = await
    User.find({_id: new ObjectId('3c8c16ee9b1f89a2f8b5e4b2')}, function(err, docs) {
      console.log(docs);
    });
    console.log(user);
    // const users = await getJsonFromFile(userFilePath);
    // const user = users.findById((eachUser) => eachUser._id === req.params.user_id);
    if (!user) {

      return(
        res.status(404).send({ message: 'User ID not found.' })
      )
    }
    res.send(user);
  } catch (err) {
    console.log('Error in getUserById: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

module.exports = {
  getUsers,
  getUserById,
};
