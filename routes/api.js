const express = require('express');
const router = express.Router();

router.get('/send-sms/:phoneNumber', function (req, res) {
  const phoneNumber = req.params.phoneNumber;
  res.json({ data: phoneNumber });
});

module.exports = router;
