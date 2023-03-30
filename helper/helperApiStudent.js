import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '@/utils/api.util';

export const fetchStudent = (id, props) => {
    return apiGet({
      url: `/listStudents/2`,
      ...props,
    });
};


  export const useStudentDetail = (params) => {
    const { key = 'fetchStudent', deps, id, fnParams, options, token } = params || {};

    return useQuery({
      queryKey: deps ? [key, id, deps] : [key, id],
      queryFn: async ({ signal }) => await fetchStudent(id, { params: fnParams, signal, token }),
      ...options,
    });
  };
