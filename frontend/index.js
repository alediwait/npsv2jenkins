const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.get('/', function (req, res) {
  res.send('Frontend NPS 2019\n');
});

app.get('/healthz', function (req, res) {

  res.send('Todo correcto\n');
});


module.exports = app;
