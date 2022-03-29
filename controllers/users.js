const { getJsonFromFile } = require('../helpers/files.js');
const path = require('path');

const userFilePath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = async (req, res) => {
  try {
    const users = await getJsonFromFile(userFilePath);
    console.log("users", users);
    res.send(users)
  } catch (err) {
    console.log('Error in getUsers: ', err);
    res.status(500).send('Somthing went wrong.')
  }
}

const getUserById = async (req, res) => {
  console.log(req);
  try {
    const users = await getJsonFromFile(userFilePath);
    console.log("AAAA", user, users[req.params.user_id, req.params.user_id]);
    const user = users.find(user => user._id === req.params.user_id)

    if (!user) {
      res.status(404).send('Not found.');
    }
    res.send(user);
  } catch (err) {
    console.log('Error in getUserById: ', err);
    res.status(500).send('Somthing went wrong.')
  }
}

module.exports = {
  getUsers,
  getUserById
}