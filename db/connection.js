const Client = require('pg').Client;
const config = require('./db.config.js');

const client = new Client(config);
client.connect();

module.exports = {

  getAllItems: (callback) => {
    client.query('select * from products', (err, result) => {
      if (err) {
        callback(err);
      } else {
        console.log(result.rows);
        callback(null, result);
      }
    });
  },

  insertIntoProducts: (product) => {
    console.log(product.imgUrl);
    const {name, imgUrl, type, rating, brand, price, description, size, color, productUrl} = product;
    client.query(`INSERT INTO products ( name, imgUrl, type, rating, brand, price, description, size, color, productUrl) VALUES ('${product.name}', '${product.imgUrl}', '${product.type}', ${product.rating}, '${product.brand}', ${product.price}, '${product.description}', '${product.size}', '${product.color}', '${product.productUrl}')`, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('new product inserted');
      }
    });
  },

  insertIntoLooks: (look) => {
    const {name, creator, creatorImgUrl} = look;
    client.query(`INSERT INTO looks (name, creator, creatorImgUrl) VALUES ('${look.name}', '${look.creator}', '${look.creatorImgUrl}')`, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('new look inserted');
      }
    });
  },

  insertIntoCarouselJunction: (carousel) => {
    const {type, lookId, productId1, productId2, productId3} = carousel;
    client.query(`INSERT INTO carouselJunc (type, lookId, productId1, productId2, productId3) VALUES ('${carousel.type}','${carousel.lookId}', '${carousel.productId1}','${carousel.productId2}','${carousel.productId3}')`, (err, result)=> {
      if (err) {
        throw err;
      } else {
        console.log('new carousel junc inserted');
      }
    });
  },

  insertIntoLooksJunction: (junc) => {
    const {lookId, productId} = junc;
    client.query(`INSERT INTO looksJunc (lookId, productId) VALUES ('${junc.lookId}','${junc.productId}')`, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('new junction inserted');
      }
    });
  },

  updateLookCarousels: (lookId, update) => {
    client.query(`UPDATE TABLE looks SET tops=${update.top}, bottoms=${update.bottoms}, footwear=${update.footwear} WHERE id=${lookId}`, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('successfullly updated Look table');
      }
    });
  }


};