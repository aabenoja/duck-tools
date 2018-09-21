const express = require('express');
const { join } = require('path');

const app = express();

app.use(express.static(join(__dirname, 'build')));

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => (
  res.sendFile(join(__dirname, 'build', 'index.html'))
));

app.listen(process.env.port || 8787);
