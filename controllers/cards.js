const path = require('path');
const { getJsonFromFile } = require('../helpers/files');

const userFilePath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = async (req, res) => {
  try {
    const cards = await getJsonFromFile(userFilePath);
    res.send(cards);
  } catch (err) {
    // console.log('Error in getCards: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

module.exports = {
  getCards,
};
