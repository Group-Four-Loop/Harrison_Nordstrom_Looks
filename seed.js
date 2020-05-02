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


let prod = {
  name: faker.lorem.word(),
  imgUrl: 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/tops/10b3058c-d317-4813-b50e-c4889f7e88b0.jpeg',
  type: 'tops',
  rating: randomNum(5),
  brand: faker.lorem.word(),
  price: randomNum(20),
  description: faker.lorem.sentence(),
  size: sizes[randomNum(sizes.length)],
  colors: faker.commerce.color(),
  productUrl: 'https://shop.nordstrom.com/s/5390901'
};

let look = {
  name: faker.commerce.productAdjective() + ' ' + faker.lorem.word(),
  creator: faker.name.findName(),
  creatorImgUrl: faker.image.avatar()
};

db.insertIntoProducts(prod);


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