const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./bookRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/books', bookRoutes);

mongoose.connect('mongodb://0.0.0.0:27017/credence')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));
