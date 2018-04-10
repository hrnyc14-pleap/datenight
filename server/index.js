const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const config = require ('../config.js')


let app = express();


app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));


let port = 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

