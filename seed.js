const faker = require('faker');
const db = require('./db/connection.js');

let types = [
  'tops',
  'bottoms',
  'footwear',
  'headgear',
  'onepiece',
  'accessories'
];

let sizes = [
  'XXS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL'
];

const randomNum = (length) => {
  return (Math.floor(Math.random() * length));
};


for (var x = 1; x <= 30; x ++) {
  let newTop = { name: faker.lorem.sentence(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/${x}.jpeg`,
    type: 'tops',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(200),
    description: faker.lorem.sentences(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5390901'};
  let newBottom = { name: faker.lorem.sentence(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Pants/${x}.jpeg`,
    type: 'bottoms',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(200),
    description: faker.lorem.sentences(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5349137'};
  let newShoes = { name: faker.lorem.sentence(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/shoes/${x}.jpeg`,
    type: 'footwear',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(200),
    description: faker.lorem.sentences(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5408885'};
  db.insertIntoProducts(newTop);
  db.insertIntoProducts(newBottom);
  db.insertIntoProducts(newShoes);
}
for (var i = 1; i <= 9; i++) {
  let look = {
    name: faker.commerce.productAdjective() + ' ' + faker.lorem.word(),
    creator: faker.name.findName(),
    creatorImgUrl: faker.image.avatar()
  };
  db.insertIntoLooks(look);
  //one look still incomplete

  let looksJunc = {
    lookId: i,
    productId: ((i) * 10)
  };
  db.insertIntoLooksJunction(looksJunc);
}

for (var j = 10; j <= 80; j += 10) {
  let carouselJuncTop = {
    type: 'tops',
    lookId: j / 10,
    productId1: j,
    productId2: j + 3,
    productId3: j + 6
  };
  let carouselJuncBot = {
    type: 'bottoms',
    lookId: j / 10,
    productId1: j + 1,
    productId2: j + 4,
    productId3: j + 7
  };
  let carouselJuncFeet = {
    type: 'footwear',
    lookId: j / 10,
    productId1: j + 2,
    productId2: j + 5,
    productId3: j + 8
  };
  db.insertIntoCarouselJunction(carouselJuncTop);
  db.insertIntoCarouselJunction(carouselJuncBot);
  db.insertIntoCarouselJunction(carouselJuncFeet);
}
for (var v = 1; v <= 9; v++) {
  db.updateLookCarousels(v, {tops: (v), bottoms: (v) + 1, footwear: (v) + 2});
}

