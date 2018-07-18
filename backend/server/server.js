const express = require('express');

const app = express();
app.get('/report', (req, res) => {
  res.status(200).send({
    message: 'I am a server route and can also be hot reloaded!!!!',
  });
});

module.exports = app;
