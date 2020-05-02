const faker = require('faker');

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
  name: faker.lorem.words(),
  imgUrl: '',
  type: types[randomNum(types.length)],
  rating: randomNum(5),
  brand: faker.lorem.word(),
  price: faker.random.number(),
  description: faker.lorem.paragraph(),
  size: sizes[randomNum(sizes.length)],
  colors: faker.commerce.color(),
  productUrl: ''
};

let look = {
  name: faker.commerce.productAdjective() + ' ' + faker.lorem.word(),
  creator: faker.name.findName(),
  creatorImgUrl: faker.image.avatar()
}

const addItemsToLook = (x) => {
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
  let numItemsToShow = itemCount(x);
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
  for (var x = 0; x <= itemsToRender.length - 1; x++) {
    look[itemsToRender[x]] = //the id of a carouselJunc record with matching type and lookID
  }
}

