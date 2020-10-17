# StyleSelector Microservice

## Getting Started
```javascript
  npm start
  npm run react-dev
```

<hr> </hr>

## API Reference

#### GET ```api/looks?:lookId```
##### Path Parameters: 
- ```id```integer
##### Success Status Code: ```200```
  Returns a list of products associated with a specific lookId as JSON
```
[
  {
        "lookid": 1,
        "productid": 10,
        "type": "tops",
        "name": "Saepe qui voluptatum aut dolorem laborum culpa nobis perspiciatis.",
        "imgurl": "https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/4.jpeg",
        "rating": "3.00",
        "brand": "cupiditate",
        "price": "47.00",
        "description": "Totam facere facere vitae tempora qui error unde omnis. Eum eos inventore id eum dignissimos. Laudantium beatae dicta voluptatem. Est ipsa officiis reiciendis nulla facere sequi. Tempora doloribus accusamus. Explicabo nostrum impedit numquam et quia aut vitae nemo aut.",
        "size": "S",
        "color": "undefined",
        "producturl": "https://shop.nordstrom.com/s/5390901",
        "lookName": "Refined in",
        "lookCreator": "Gregg Volkman"
    },
    ...
 ]
```

#### GET ```api/items```
##### Path Parameters: 
- ```none```
##### Success Status Code: ```200```
  Returns a list of all items
```
  [
    {
        "id": 345,
        "name": "Debitis ad laborum corporis quidem excepturi in molestiae.",
        "imgurl": "https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Top/1.jpeg",
        "type": "tops",
        "rating": "0.00",
        "brand": "libero",
        "price": "181.00",
        "description": "Qui ut consequatur labore natus commodi vel. Consequatur adipisci quisquam enim vel aliquid occaecati quae. Id commodi repellat molestiae mollitia et maiores. Sequi quia officia.",
        "size": "XXL",
        "color": "undefined",
        "producturl": "https://shop.nordstrom.com/s/5390901"
    },
    {
        "id": 346,
        "name": "Sunt possimus ipsa nisi sed excepturi voluptatibus consequatur fuga et.",
        "imgurl": "https://fec-fourloop-looks.s3-us-west-1.amazonaws.com/images/Pants/1.jpeg",
        "type": "bottoms",
        "rating": "0.00",
        "brand": "quia",
        "price": "24.00",
        "description": "Vel aut nulla suscipit quasi. Aut vitae odio et adipisci. Facere voluptatum rem molestias et magni similique ipsam ullam. Quia neque vero omnis eos est nam commodi illo illum. Impedit qui in eius. Nihil necessitatibus voluptatum explicabo quam non ab.",
        "size": "XL",
        "color": "undefined",
        "producturl": "https://shop.nordstrom.com/s/5349137"
    }
    ...
  ]
```

<hr></hr>

#### POST ```api/items```
##### Path Parameters: 
- ```name``` string
- ```imgUrl``` string
- ```type``` string
- ```rating``` float
- ```price``` float
- ```brand``` string
- ```description``` string
- ```size``` string
- ```color``` string
- ```productUrl``` string
##### Success Status Code: ```200```
  Insert a new product into the database
```javascript
  //Example using axios with url query params.  Recommend passing all fields, though they remain optional for your convenience
  
  const newProduct = {
    name: 'Fancy Widget',
    imgUrl: 'https://greatphoto.com/photos/123',
    type: 'tops',
    rating: 5,
    price: 122.30,
    brand: 'Widgets R Us',
    description: 'Vel aut nulla suscipit quasi. Aut vitae odio et adipisci. Facere voluptatum rem molestias et magni similique ipsam ullam. Quia neque vero omnis eos est nam commodi illo illum. Impedit qui in eius. Nihil necessitatibus voluptatum explicabo quam non ab.',
    size: 'XL',
    color: 'black',
    productUrl: 'https://yourcompany.com/products/1234'
  }
  
  }
  axios.get('/api/looks', {params: newProduct})
    .then((result) => {
      //returns after successful insert with status code 201
      console.log(result.data);
    })
    .catch((error) => {
      //catch errors and exceptions with status code 500
      console.log('An Error occured', error);
    })
```
