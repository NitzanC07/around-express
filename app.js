const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const usersRouter = require('./routes/users.js');
const cardsRouter = require('./routes/cards.js');

const message = "Requested resource not found";

app.get('/', (req, res) => {
  res.send(message)
})

app.use(usersRouter);
app.use(cardsRouter);

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
})