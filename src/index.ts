import express = require('express');
var pam = require('authenticate-pam');
const app: express.Application = express();

app.listen(8888, () => console.log('listening port 8888'));

app.get('/login', function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  const password = req.query.password;
  const login = req.query.login;
  pam.authenticate(login, password, function(err: any) {
    if(err) {
      res.status(401).send(err);
    }
    else {
      res.send(true);
    }
  });
});

