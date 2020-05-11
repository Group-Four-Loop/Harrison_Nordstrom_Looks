import axios from 'axios';

const looks = {
  // getLooksById: (look) => axios.get('/api/models', {params: {lookId: look}}).then(({data}) => data ),
  getLooksByProductId: (product) => axios.get('/api/looks', {params: {productId: product}}).then(({data}) => data )
};

export default looks;