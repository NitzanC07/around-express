const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const usersRouter = require('./routes/users.js');

app.get('/', (req, res) => {
  res.send(
    `<html>
    <body>
    <h1>Main page app</h1>
    <h2>Header 2</h2>
    <p>Content of page</p>
    </body>
    </html>`
    )
})

app.use(usersRouter)

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}`);
})