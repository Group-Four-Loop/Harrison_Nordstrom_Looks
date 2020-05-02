const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/connection.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  db.getAllItems((err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
});

app.use(express.static(__dirname + '/../react-client/dist'));
app.listen(port, () => {
  console.log('listening on port ' + port);
});