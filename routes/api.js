const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

router.get('/send-sms/:phoneNumber', function (req, res) {
  // const phoneNumber = req.params.phoneNumber;

  const URL = 'https://jsonplaceholder.typicode.com/todos';

  fetch(URL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      res.json(json);
    })
    .catch(error => {
      console.error(error);
      res.json({ data: error });
    });
});

module.exports = router;
