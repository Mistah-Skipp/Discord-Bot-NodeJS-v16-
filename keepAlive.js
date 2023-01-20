const bot = require ('./index.js');
const express = require('express');
const app = express();
const port = 5000;

//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/', bot);
app.listen(port, () => console.log(`listening at ${port}`));

