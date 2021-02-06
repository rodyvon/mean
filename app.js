const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const PORT = 3000;

app.use(bodyParser.json());

// Import Routes
const usersRoute = require('./routes/users');
const addressesRoute = require('./routes/addresses');

app.use('/users', usersRoute);
app.use('/addresses', addressesRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Simple CRUD Application using MEAN!')
});

// Connect to Db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('connected to DB!')
);

app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
