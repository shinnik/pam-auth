import express = require('express');
const app: express.Application = express();

app.listen(8888);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

