const express = require('express');

const router = express.Router();
const { getCards, getCard, createNewCard, deleteCard } = require('../controllers/cards');

router.get('/', getCards);
router.get('/:card_id', getCard);
router.delete('/:card_id', deleteCard)
router.post('/', createNewCard);

module.exports = router;
