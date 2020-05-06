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
  let newTop = { name: faker.lorem.word(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/${x}.jpeg`,
    type: 'tops',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5390901'};
  let newBottom = { name: faker.lorem.word(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Pants/${x}.jpeg`,
    type: 'bottoms',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5349137'};
  let newShoes = { name: faker.lorem.word(),
    imgUrl: `https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/shoes/${x}.jpeg`,
    type: 'footwear',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
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

for (var j = 10; j <= 70; j += 10) {
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
/*
const addItemsToLook = (currentIteration) => {
  let accessoryCount = 0;
  //generate a random number per our current iteration
  let itemCount = (num) => {
    if (num % 2 === 0) {
      return (Math.floor(Math.random()*5) + 2);
    }
    return (Math.floor(Math.random()* 4) + 3);
  }
  //define a list of items we need it include on our carousel
  let itemsToRender = [];
  //get a random number of items to include
  let numItemsToShow = itemCount(currentIteration);
  //get a random item from list of items
  while (numItemsToShow > 0) {
    let itemList = Array.from(items);
    let anItem = itemList.splice(Math.floor(Math.random()*itemList.length));
    if (anItem === 'accessories') {
      //number our accessories properly
      accessoryCount++;
      if (accessoryCount <= 3) {
        itemsToRender.push(anItem+accessoryCount.toString());
        //we should add accessories back to the list so it can be selected again if needed
        itemList.push('accessories');
      }
    }
    itemsToRender.push(anItem);
    numItemsToShow--;
  }
  //* Populate the new look object with proper carousel IDs /
  for (var x = 0; x <= itemsToRender.length - 1; x++) {
    look[itemsToRender[x]] = //the id of a carouselJunc record with matching type and lookID
  }
}



*/

