const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../db/connection.js');
const compression = require('compression');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.get('/api', (req, res) => {
  db.getItemsByLookId(req.query.lookId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (!res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
      }
      res.send(result.rows);
    }
  });
});

app.get('/api/models', (req, res) => {
  console.log(req.query);
  db.getItemsByLookId(req.query.lookId, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (!res.getHeader('Cache-Control')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
      res.send(result.rows);
    }
  });
});

app.get('/api/looks', (req, res) => {
  console.log('served', req.query.productId)
  db.getLooksByProductId(req.query.productId, (err, result) => {
    if (err) {
      console.log('errou');
      res.status(400).send(err);
    } else {
      if (!res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
      }
      let lookIds = [];
      for (var x = 0; x <= result.rows.length - 1; x++) {
        if (!lookIds.includes(result.rows[x])) {
          lookIds.push(result.rows[x].lookid);
        }
      }
      console.log('lookdIDs', lookIds.length);
      db.getLookDetails(lookIds, (e, r) => {
        if (e) {
          res.status(400).send(e);
        } else {
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