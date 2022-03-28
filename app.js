const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const usersRouter = require('./routes/users.js');

app.get('/', (req, res) => {
  res.send('<h1>Main page app</h1>')
})

app.use(usersRouter)

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
})