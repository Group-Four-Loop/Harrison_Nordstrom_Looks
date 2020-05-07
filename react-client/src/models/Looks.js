import axios from 'axios';

const looks = {
  get: (productId) => axios.get('/api', {params:{lookId: ${productId}}}).then(({data}) => data ),
  getOne: (id) => axios.get(`/api/looks/${id}`).then(({ data }) => data),
};

export default looks;