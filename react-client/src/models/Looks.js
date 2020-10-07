import axios from 'axios';

const looks = {
  getLooksByProductId: (product) => axios.get('/api/looks', {params: {productId: product}}).then(({data}) => data ),
};

export default looks;
