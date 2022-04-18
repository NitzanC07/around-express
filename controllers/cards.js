const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (err) {
    console.log('Error in getCards: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const createNewCard = async (req, res) => {
  const { name, link } = req.body;
  try {
    const owner = req.user._id;
    const newCard = await Card.create({ name, link, owner });
    res.status(201).send(newCard);
  } catch (err) {
    console.log(`Error in createNewCard: ${err}`);
    res.status(400).send({ message: err.name });
  }
};

const deleteCard = async (req, res) => {
  const selectedCard = req.params.card_id;
  try {
    const card = await Card.findByIdAndRemove(selectedCard);
    if (card === null) {
      res.status(404).send({ message: 'Card id isn\'t found.' });
    } else {
      res.status(200).send({ message: `Card id ${selectedCard} was deleted.` });
    }
  } catch (err) {
    console.log('Error in deleteCard function: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const likeCard = async (req, res) => {
  const selectedCard = req.params.card_id;
  console.log(selectedCard);
  try {
    const card = await Card.findByIdAndUpdate(
      selectedCard,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    if (card === null) {
      res.status(404).send({ message: 'Card id isn\'t found.' });
    } else {
      res.status(200).send({ message: `Card ${selectedCard} was liked.` });
    }
  } catch (err) {
    console.log('Error in likeCard function: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const dislikeCard = async (req, res) => {
  const selectedCard = req.params.card_id;
  console.log(selectedCard);
  try {
    const card = await Card.findByIdAndUpdate(
      selectedCard,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    if (card === null) {
      res.status(404).send({ message: 'Card id isn\'t found.' });
    } else {
      res.status(200).send({ message: `Card ${selectedCard} was disliked.` });
    }
  } catch (err) {
    console.log('Error in dislikeCard function: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

module.exports = {
  getCards,
  deleteCard,
  createNewCard,
  likeCard,
  dislikeCard,
};
