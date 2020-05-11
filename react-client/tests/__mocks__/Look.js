const products = [
  {
    'id': 10,
    'type': 'tops',
    'lookid': 1,
    'productid1': 10,
    'productid2': 13,
    'productid3': 16,
    'name': 'modi',
    'imgurl': 'https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg',
    'rating': '2.00',
    'brand': 'temporibus',
    'price': '9.00',
    'description': 'Incidunt eligendi veritatis et velit.',
    'size': 'XS',
    'color': 'undefined',
    'producturl': 'https://shop.nordstrom.com/s/5390901'
  }
];

export default () => {
  return (
    new Promise((resolve, reject) => {
      process.nextTick(()=>
        products ? resolve(products) : reject({error: 'error'})
      );
    })
  );
};