const express = require('express');
const dotenv = require('dotenv')

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello from the Node.js app!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});