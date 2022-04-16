const User = require('../models/user');

// Function for get the whole list of the users in data base.
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    // console.log(`second user id in string: ${users[1]._id.toString() === 'd285e3dceed844f902650f40'}`);
    res.send(users);
  } catch (err) {
    console.log('Error in getUsers: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

// Function for a specific user from the data base.
const getUserById = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findById(user_id);
    // console.log(`user: ${user}\nuser_id: ${user_id}\ntype of user_id: ${typeof(user_id)}`);
    if (!user) {
      res.status(404).send({ message: 'User ID not found.' });
    }
    res.send(user);
  } catch (err) {
    console.log('Error in getUserById: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

// Function for creating new user to data base.
const createUser = async (req, res) => {
  try {
    console.log(`Creat user ${req.body}\nname: ${req.body.name}\nabout: ${req.body.about}\navatar: ${req.body.avatar}`);
    const {name, about, avatar} = req.body;
    const newUser = await User.create({name, about, avatar});
    console.log(`New user: ${newUser}`);
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
