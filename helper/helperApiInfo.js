import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/utils/api.util';

// Aannounce
export const fetchAnnouncement = (props) => {
    return apiGet({
      url: `/announcement`,
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
      url: `/advertise`,
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
    return apiGet({
      url: `/agenda`,
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
