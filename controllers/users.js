const User = require('../models/user');

// Function for get the whole list of the users in data base.
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log('Error in getUsers: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

// Function for a specific user from the data base.
const getUserById = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return (res.status(404).send({ message: 'User ID not found.' }));
    }
    res.send(user);
  } catch (err) {
    console.log('Error in getUserById: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

// Function for creating new user to data base.
const createUser = async (req, res) => {
  const {name, about, avatar} = req.body;
  try {
    const newUser = await User.create({name, about, avatar});
    res.status(201).send(newUser);

  } catch (err) {
    console.log('Error in createUser: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
