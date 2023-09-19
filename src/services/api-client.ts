import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1489c1df51144d458db2fef6f8586a8d',
  },
});
