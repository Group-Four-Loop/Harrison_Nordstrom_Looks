const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/connection.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  db.getItemsByLookId(req.query.lookId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
});

//comment
app.get('/api/models', (req, res) => {
  console.log(req.query);
  db.getItemsByLookId(req.query.lookId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(result.rows);
    }
  });
});

app.get('/api/looks', (req, res) => {
  db.getLooksByProductId(req.query.productId, (err, result) => {
    if (err) {
      console.log('lookError');
      res.status(400).send(err);
    } else {
      console.log('lookSuccess');
      let lookIds = [];
      for (var x = 0; x <= result.rows.length - 1; x++) {
        if (!lookIds.includes(result.rows[x])) {
          lookIds.push(result.rows[x].lookid);
        }
      }
      db.getLookDetails(lookIds, (e, r) => {
        if (e) {
          console.log('nameError', e);
          res.status(400).send(e);
        } else {
          console.log ('r');
          for (var i = 0; i <= r.rows.length - 1; i++) {
            result.rows.map((product) => {
              if (product.lookid === r.rows[i].id) {
                product.lookName = r.rows[i].name;
                product.lookCreator = r.rows[i].creator;
                product.creatorImg = r.rows[i].creatorImgUrl;
              }
              return product;
            });
          }
          res.send(result.rows);
        }
      });
    }
  });

});

app.use(express.static(__dirname + '/../react-client/dist'));
app.listen(port, () => {
  console.log('listening on port ' + port);
});