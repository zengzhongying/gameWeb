var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getUserInfo', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({ result: 12345 });

})

app.post('/getUserName', (req, res) => {
  console.log(req.body.id)
  if (req.body.id == 1) {
    res.json({ name: 'zeng' })
  } else {
    res.json({ name: 'luo' })
  }

})

app.listen(3000);