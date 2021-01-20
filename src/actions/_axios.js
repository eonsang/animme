import axios from 'axios';

const _axios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
});

_axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default _axios;
