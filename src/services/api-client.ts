import axios, { AxiosRequestConfig } from 'axios';

export interface Response<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1489c1df51144d458db2fef6f8586a8d',
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
