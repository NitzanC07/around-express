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

const getCard = async (req, res) => {
  try {
    const card = await Cards.findById(req.params.card_id);
    console.log(card);
    res.send(card);
  } catch (err) {
    // console.log('Error in getCards: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
};

const deleteCard = async (req, res) => {
  try {
    console.log(`Selected card ${req.body}\nname: ${req.body.name}\nlink: ${req.body.link}`);
    const selectedCard = req.params.card_id;
    const card = await Cards.findByIdAndRemove(selectedCard);

    console.log(`New cards list: ${card}`);
    res.status(200).send(card);

  } catch (err) {
    console.log('Error in deleteCard function: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
}

const createNewCard = async (req, res) => {
  try {
    console.log(`Creat card ${req.body}\nname: ${req.body.name}\nlink: ${req.body.link}`);
    const {name, link} = req.body;
    const newCard = await Cards.create({"name": name, "link": link});

    console.log(`New user: ${newCard}`);
    res.status(201).send(newCard);

  } catch (err) {
    console.log('Error in createNewCard: ', err);
    res.status(500).send({ message: 'Somthing went wrong.' });
  }
}

module.exports = {
  getCards,
  getCard,
  deleteCard,
  createNewCard
};
