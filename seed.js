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
let phase1Look_products = [
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/tops/10b3058c-d317-4813-b50e-c4889f7e88b0.jpeg',
    type: 'tops',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5390901'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/tops/2347adee-e5ae-426c-9072-191b10aa9d20.jpeg',
    type: 'tops',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5455576'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/tops/244de193-a8ed-496d-8b58-75039eb3f82b.jpeg',
    type: 'tops',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5390901'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/bottoms/1a082765-9815-418b-9f75-bf7b46a8ba69.jpeg',
    type: 'bottoms',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5349137'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/bottoms/3c5ce604-8aff-4723-9ad4-8b3a72c35432.jpeg',
    type: 'bottoms',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5349137'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/bottoms/5516c918-2c2e-4655-8722-47132709a5a3.jpeg',
    type: 'bottoms',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5349137'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/6e467442-26b8-4b9e-a3bb-deaad5954be8.jpeg',
    type: 'footwear',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5408885'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/00c27ee5-4b92-4699-a995-0cb997591b62.jpeg',
    type: 'footwear',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5222799'},
  { name: faker.lorem.word(),
    imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/Footwear/1f3dd7ac-5abf-435a-905a-3cc39f492f77.jpeg',
    type: 'footwear',
    rating: randomNum(5),
    brand: faker.lorem.word(),
    price: randomNum(20),
    description: faker.lorem.sentence(),
    size: sizes[randomNum(sizes.length)],
    colors: faker.commerce.color(),
    productUrl: 'https://shop.nordstrom.com/s/5312575'}
];
for (var x = 0; x <= phase1Look_products.length - 1; x++) {
  db.insertIntoProducts(phase1Look_products[x]);
  //total 9 products.
}

let look = {
  name: faker.commerce.productAdjective() + ' ' + faker.lorem.word(),
  creator: faker.name.findName(),
  creatorImgUrl: faker.image.avatar()
};
db.insertIntoLooks(look);
//one look still incomplete

let looksJunc = {
  lookId: 1,
  productId: 1
};
db.insertIntoLooksJunction(looksJunc);

let carouselJuncTop = {
  type: 'tops',
  lookId: 1,
  productId1: 1,
  productId2: 2,
  productId3: 3
};
let carouselJuncBot = {
  type: 'bottoms',
  lookId: 1,
  productId1: 4,
  productId2: 5,
  productId3: 6
};
let carouselJuncFeet = {
  type: 'tops',
  lookId: 1,
  productId1: 7,
  productId2: 8,
  productId3: 9
};
db.insertIntoCarouselJunction(carouselJuncTop);
db.insertIntoCarouselJunction(carouselJuncBot);
db.insertIntoCarouselJunction(carouselJuncFeet);

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