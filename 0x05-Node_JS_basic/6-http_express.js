/**
 * Create aa small HTTP server using Express module
 * @returns {void}
 * @author Daniel Ongom <https://github.com/Domodan>
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALXSWE School!');
});

app.listen(port);

module.exports = app;
