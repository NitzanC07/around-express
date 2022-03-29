const express = require('express')
const router = express.Router()
const { getCards } = require('../controllers/cards.js')

router.get('/cards', getCards);

module.exports = router;