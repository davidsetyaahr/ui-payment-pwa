import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/utils/api.util';

export const baseUrl = "http://127.0.0.1:8000/api";

// Aannounce
export const fetchAnnouncement = (props) => {
    return apiGet({
      url: `${baseUrl}/announcement`,
      ...props,
    });
};
export const useAnnouncement = (params) => {
    const { key = 'fetchAnnouncement', deps, fnParams, options, token } = params || {};

    return useQuery({
      queryKey: deps ? [key, deps] : [key],
      queryFn: async ({ signal }) => await fetchAnnouncement({ params: fnParams, signal, token }),
      ...options,
    });
};
// advertise
export const fetchAdvertise = (props) => {
    return apiGet({
      url: `${baseUrl}/advertise`,
      ...props,
    });
};
export const useAdvertise = (params) => {
    const { key = 'fetchAdvertise', deps, fnParams, options, token } = params || {};

    return useQuery({
      queryKey: deps ? [key, deps] : [key],
      queryFn: async ({ signal }) => await fetchAdvertise({ params: fnParams, signal, token }),
      ...options,
    });
};
// agenda
export const fetchAgenda = (props) => {
    const dataStorage = JSON.parse(localStorage.getItem('userData'))
    return apiGet({
      url: `${baseUrl}/agenda/${dataStorage.default_student_id}`,
      ...props,
    });
};
export const useAgenda = (params) => {
    const { key = 'fetchAgenda', deps, fnParams, options, token } = params || {};

    return useQuery({
      queryKey: deps ? [key, deps] : [key],
      queryFn: async ({ signal }) => await fetchAgenda({ params: fnParams, signal, token }),
      ...options,
    });
};
// student
export const fetchStudent = (props) => {
    return apiGet({
      url: `${baseUrl}/listStudents/${JSON.parse(localStorage.getItem('userData')).id}`,
      ...props,
    });
};
export const useStudent = (params) => {
    const { key = 'fetchStudent', deps, fnParams, options, token } = params || {};

    return useQuery({
      queryKey: deps ? [key, deps] : [key],
      queryFn: async ({ signal }) => await fetchStudent({ params: fnParams, signal, token }),
      ...options,
    });
};
