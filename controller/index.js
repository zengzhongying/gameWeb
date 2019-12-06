var express = require('express');
var app = new express();

app.get('/getUserInfo', (req, res) => {
  res.json({ result: 123 });
})

app.listen(3000);