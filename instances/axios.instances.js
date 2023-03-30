// import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import ENV from '../utils/api.util';

// export interface AxiosInstanceProps extends AxiosRequestConfig {
//   token?: any;
//   isFormData?: boolean;
// }
// export interface AxiosRequestProps extends AxiosInstanceProps {
//   url: string;
// }

const axiosInstance = (props) => {
  const { token, isFormData, ...rest } = props;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
      'Authorization': token ? `Bearer ${token}` : '',
    },
    ...rest,
  });

  // instance.interceptors.request.use((request) => {
  //     console.log(request);
  //     return request;
  // });
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (err) => {
      if (err?.response?.status === 401) {
        // handler error unauthenticated
      }

      return Promise.reject(err);
    },
  );

  return instance;
};

export default axiosInstance;
