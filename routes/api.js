const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const funFacts = require('../fun-facts.json');

router.get('/send-sms/:phoneNumber', function (req, res) {
  const phoneNumber = req.params.phoneNumber;
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  const requestBody = {
    messages: [
      {
        from: 'InfoSMS',
        destinations: [
          {
            to: phoneNumber,
          },
        ],
        text: `Fun fact: ${funFact}`,
      },
    ],
  };

  const fetchOptions = {
    method: 'post',
    body: JSON.stringify(requestBody),
    headers: {
      Authorization: `App ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const URL = `${process.env.API_BASE_URL}/sms/2/text/advanced`;

  fetch(URL, fetchOptions)
    .then((response) => response.json())
    .then((json) => {
      res.json(json);
    })
    .catch((error) => {
      res.json({ data: error });
    });
});

module.exports = router;
