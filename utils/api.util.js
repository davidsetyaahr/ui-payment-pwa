import qs from 'qs';
import axiosInstance from '../instances/axios.instances';

export const apiGet = async (props) => {
  const { url, params, ...rest } = props;

  return axiosInstance({ ...rest }).get(url, {
    params,
    ...rest,
  });
};
export const apiPost = (props) => {
  const { url, data, isFormData, ...rest } = props;

  return axiosInstance({ ...rest }).post(url, !isFormData ? qs.stringify(data) : data, { ...rest });
};
export const apiPut = (props) => {
  const { url, data, ...rest } = props;

  return axiosInstance({ ...rest }).put(url, qs.stringify(data), { ...rest });
};
export const apiDelete = (props) => {
  const { url, ...rest } = props;

  return axiosInstance({ ...rest }).delete(url, { ...rest });
};
