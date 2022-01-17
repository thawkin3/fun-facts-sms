const express = require('express');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Fun Facts SMS listening at http://localhost:${port}`);
});
