const Cards = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Cards.find({});

    res.send(cards);
  } catch (err) {
    // console.log('Error in getCards: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

module.exports = {
  getCards,
};
