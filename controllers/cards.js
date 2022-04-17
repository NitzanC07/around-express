const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    console.log('Error in getCards: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const getCard = async (req, res) => {
  const card_id = req.params.card_id;
  try {
    const card = await Card.findById(card_id);
    if (!card) {
      return (res.status(404).send({ message: 'Card ID not found.' }));
    }
    res.send(card);
  } catch (err) {
    console.log('Error in getCard: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const createNewCard = async (req, res) => {
  const {name, link} = req.body;
  try {
    const owner = req.user._id;
    const newCard = await Card.create({name, link, owner});
    res.status(201).send(newCard);

  } catch (err) {
    console.log('Error in createNewCard: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
}

const deleteCard = async (req, res) => {
  const selectedCard = req.params.card_id;
  try {
    const card = await Card.findByIdAndRemove(selectedCard);
    res.status(200).send(card);

  } catch (err) {
    console.log('Error in deleteCard function: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
}

module.exports = {
  getCards,
  getCard,
  deleteCard,
  createNewCard
};
