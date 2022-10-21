import axios, { Method, AxiosResponse } from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosCustom = <T,>(method: Method, url: string, data?: any): Promise<AxiosResponse<T>> =>
  api.request<T>({
    method,
    url,
    data,
  });

export default axiosCustom;
